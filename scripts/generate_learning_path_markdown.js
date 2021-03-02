const { join, basename, relative } = require('path')
const getContributors = require('./get_contributors')
const mkdirSync = require('./mkdir_sync')
const getArticleFiles = require('./get_article_files')

const sections = require('./section_data.json')

module.exports = async (writeDir, generatorFn, workbookFn, createTranslationFolder) => {
  mkdirSync(join('.', writeDir))

  sections.forEach(section => {
    const { dirName, translations } = section
    const baseReadPath = join('..', dirName)
    const baseWritePath = join('.', writeDir, dirName)
    mkdirSync(baseWritePath)

    translations.concat('' /* The English original */).forEach(async (translation) => {
      const isTranslation = translation !== ''
      const writePath = join(baseWritePath, translation)
      if (createTranslationFolder) mkdirSync(writePath)

      const readPath = join(baseReadPath, translation)
      const articles = getArticleFiles(readPath)
      articles.forEach(async (article) => {
        const articleTitle = article.asciiDoc.match(/== (.*)/)[1]
        const articleNumber = basename(article.filePath).split('-')[0]
        const contributors = await getContributors(relative('..', article.filePath))

        generatorFn({
          section,
          articleTitle,
          articleNumber,
          isTranslation,
          article,
          translation,
          contributors,
          writePath,
          baseWritePath
        })
      })

      // Workbooks not translated.
      if (!isTranslation) {
        const workbookFileName = join(baseWritePath, 'workbook.md')
        const contributors = await getContributors(`workbook/${section.workbook}`)
        const workbookPosition = articles.length + 1

        workbookFn({
          section,
          workbookFileName,
          contributors,
          workbookPosition
        })
      }
    })
  })
}
