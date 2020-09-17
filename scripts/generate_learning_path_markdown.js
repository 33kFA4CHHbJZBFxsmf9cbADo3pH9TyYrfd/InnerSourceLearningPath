const fs = require('fs')
const YAML = require('yaml')
const { EOL } = require('os')
const { join } = require('path')

const mkdirSync = (dir) => {
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    if (e.code !== 'EEXIST') {
      console.log(e)
    }
  }
}

const getArticleFiles = (path) => {
  return fs.readdirSync(path).reduce((articles, filename) => {
    const filePath = `${path}/${filename}`
    if (filePath.match(/\d\d/) && !filePath.includes('-script.asciidoc')) {
      return [...articles, {
        filePath,
        asciiDoc: fs.readFileSync(filePath, 'utf-8')
      }]
    } else {
      return articles
    }
  }, [])
}

const writeMarkdownFile = (filePath, frontMatter) => {
  const frontMatterTerminator = '---'
  const originStatement = '<!--- This file autogenerated from https://github.com/InnerSourceCommons/InnerSourceLearningPath/blob/master/scripts/generate_learning_path_markdown.js -->'
  const output = [frontMatterTerminator, YAML.stringify(frontMatter).trim(), frontMatterTerminator, originStatement].join(EOL)
  fs.writeFileSync(filePath, output)
}

const sections = [
  {
    learning_path_group: 'Introduction',
    dirName: 'introduction',
    workbook: '01-introduction.asciidoc',
    translations: ['de', 'ja', 'zh'],
    renderArticles: true
  },
  {
    learning_path_group: 'Trusted Committer',
    dirName: 'trusted-committer',
    workbook: '02-trusted-committer.asciidoc',
    translations: ['de', 'zh'],
    renderArticles: true
  },
  {
    learning_path_group: 'Contributor',
    dirName: 'contributor',
    workbook: '04-contributor.asciidoc',
    translations: ['ja', 'zh'],
    renderArticles: true
  },
  {
    learning_path_group: 'Product Owner',
    dirName: 'product-owner',
    workbook: '03-product-owner.asciidoc',
    translations: [],
    renderArticles: false
  },
]

  mkdirSync('./learningpath')

sections.forEach(({ learning_path_group, dirName, workbook, translations, renderArticles }) => {
  const baseReadPath = `../${dirName}`
  const baseWritePath = `./learningpath/${dirName}`
  mkdirSync(baseWritePath)

  translations.concat('' /* The English original */).forEach((translation) => {
    const isTranslation = translation !== ''
    const writePath = join(baseWritePath, translation)
    mkdirSync(writePath)

    const readPath = join(baseReadPath, translation)
    const articles = getArticleFiles(readPath)
    articles.forEach((article) => {
      const articleTitle = article.asciiDoc.match(/== (.*)/)[1]
      const articleNumber = article.filePath.split('/').pop().split('-')[0]
      const fileName = articleNumber === '01' ? `${writePath}/index.md` : `${writePath}/${articleNumber}.md`
      const frontMatter = {
        layout: 'learning-path-page',
        show_meta: false,
        title: `Learning Path - ${learning_path_group} - ${articleTitle}`,
        learning_path_article: renderArticles ? article.filePath.replace('../', '') : undefined,
        learning_path_group,
        learning_path_menu_title: `${articleNumber} - ${articleTitle}`,
        learning_path_position: parseInt(articleNumber),
        learning_path_translation: translation,
        no_video: isTranslation // Videos not available translated.
      }

      writeMarkdownFile(fileName, frontMatter)
    })

    // Workbooks not translated.
    if (!isTranslation) {
      const workbookFileName = `${writePath}/workbook.md`
      console.log('workbookFileName', workbookFileName)
      const workbookFrontMatter = {
        layout: 'learning-path-page',
        show_meta: false,
        title: `Learning Path - ${learning_path_group} - Workbook`,
        learning_path_article: `workbook/${workbook}`,
        learning_path_group,
        learning_path_menu_title: `${learning_path_group} Workbook`,
        learning_path_position: articles.length - articles.filter(Array.isArray).length + 1,
        learning_path_translation: translation,
        no_video: true
      }

      writeMarkdownFile(workbookFileName, workbookFrontMatter)
    }
  })
})