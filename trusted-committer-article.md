# InnerSource Learning Path: Trusted Committer

## Introduction

- tbd

## Introducing The Trusted Committer Role

The Trusted Committer (TC) role is one of the key roles in an InnerSource
community. Think of TCs as a person in a community that you trust with
important technical decisions that will also mentor contributors to get their
contribution over the finish line. It is both a demanding and a rewarding
role to fulfill. It goes far beyond being an opinionated gatekeeper and it is
instrumental for the success of any InnerSource community. 

Generally speaking, the TC role is defined by its responsibilities, rather than
by its privileges. On a very high level, TCs represents the interests of both
their InnerSource community and the products the community is building. They
are concerned with the health of the community and the product. So as a TC,
you'll have both tech oriented and community oriented responsibilities and
we'll explore both of these dimensions in the following sections. 

Before we go into the details of what a TC actually does, let's spend some time
contrasting the TC role to other roles in IS and why we think the name is both
apt and important.

- Contributor (very briefly)
    - makes contributions
    - sometimes part of the community
    - sometimes sent by another part of the organization to develop a feature
      for it. This is why contributors are sometimes referred to as being part
      of the _Guest Team_. 
    - responsible for "fitting in"/conforming to the host team and it's 
      expectations and processes
    - similar to an Apache Developer or committer

- Trusted Committer
    - In the analogy above, a member of the _Host Team_.
    - In this analogy, they are both responsible for building the house and
      setting the house rules to make sure their guests are comfortable.
    - In comparison to the Contributor, a TC has earned the responsibility to
      push code closer to production and is generally allowed to perform tasks
      that have a higher level of risk associated with them.
- Product Owner
    - Responsible for defining and prioritizing requirements and stories for
      the community to implement.
    - Also interacts directly and frequently with the trusted committers. E. g.
      a TC will want to collaborate with the PO to make sure donated features
      actually belong into the product. 
    - Generally speaking, the TCs role is not to accept all contributions but
      only those which meet the criteria in terms of scope and quality.
    - Distinction between the guest and host PO - have to negotiate
      requirements, if necessary.
    - Depending on the type of InnerSource community, there might not be a PO
      from the outset. Especially true in case of innovation oriented and
      bottom-up driven communities. POs come into play when a productization
      of an InnerSource communities products becomes relevant.

    ? In the Guest/Host analogy, what would be the analogon of a PO?

- Link to other learning path video which explains these roles in more detail

## Why role names matter

- The role of the TC is present in every successful InnerSource community but
  not every community uses that name.
- True for myself - I used the term Maintainer. It turns out that conficts with
  the technical role "Maintainer" defined by GitHub, for instance. 
- Apache e. g. also uses the term Committer, but attaches fewer and mostly
  tech oriented responsibilities to that role. The TC role with its additional
  community oriented responsibilities goes beyond that.
- Similar to how naming is important in writing software, it is, too, for the
  roles in an InnerSource project so that everyone has the same notion of 
  the role and is aware what can be expected from s. o. with that role.
- The "Trusted" in TC conveys that they are trusted (and thus empowered) by both
  her management and her community to do the job. By fostering openness and
  transparency, the TC builds trust in the process and the product being built.

## Ensuring Product Quality

- define quality goals
    - many facets: conceptual integrity, cleanliness of the code, test coverage
      and other goals
- ensure that decisions regarding quality are followed through
- own tech related decisions 
    - doesn't mean the TC does all the work or mandates what others are doing
    - TC just needs to be sure the work is done in the end
    - even if decisions are not made by her, needs to advocate and, if
      necessary defend them them outside the community.
- act as stakeholder of the SW/Architecture towards rest of org
- set an example
- make sure community has what it needs to produce quality sw
    - communicated quality goals/standards
    - empowerment by management (e. g. for necessary refactorings)
    - the right tools
    - prioritize quality and release dates
- ensure quality at strategic level (longevity of the SW)
- review and accept contributions

## Keeping Things Running Smoothly

- set, enact and communicate contribution guidelines 
- set guidelines for how to communicate in PRs
- reviewing contributions
    - make sure the contribution process uncovers problems, rather than be the
      cause of them.
- documenting discovered and yet undocumented requirements 
    - When an undocumented requirement, process or limitation is discovered, TC
      is responsible for making sure it is documented accurately and in a way
      that it is understandable for contributors and POs alike.
- define the right process for the community
- adapt existing processes, if necessary
- gather support for necessary change in how the community operates

## Keeping The Community Healthy

- TCs must strike a healthy balance between effort spent on ensuring product
  quality and growing a healthy community. 
- defining/enacting a code of conduct
- set an example for community members in terms of conduct and especially
  communication
- Health also means that there is a critical mass of contributors.
    - Virtuous cycle: Good mentoring in PRs -> higher level of trust from
      contributors -> more people being willing to contribute -> more Pull
      Requests
- be aware of the communities needs
    - keep in touch with the community
- advocate the communities interests
- Examples:
    - Treat any contribution as a gift or as a donation. 
    - I always prioritized onboarding and mentoring over reaching communicated
      release dates, unless there was a really good reason to meet the date.
    - Laude excellent and first contributions
    - Make sure community members have a chance to level up by suggesting 
      challenging tasks. That includes recognizing people who have the 
      potential to grow.
    - If there are people toxic to the communities health, it is the TCs
      responsibility to either try and change, contain or remove those people
    - Communicate the purpose of the community and try to get everyone on
      board with it 
    - Commmunicate technical and community risks to responsible managers
    - Help potential community members with them beeing empowered to make
      contributions by talking to their managers
    - Ensure there are users and potential contributors by promoting and
      advertising the community and its goals
    - Make sure there are opportunities for people to get a together regularly
    - It is important to both give and take in the community
      
## Reducing Barriers To Entry

- Soliciting contributions is one of the things that is more challenging with
  InnerSource compared to Open Source. There are a number of reasons for that 
    - The sheer number of potential contributors is lower in InnerSource
    - Contributors will want to contribute during their work time. That means
      they are more time constrained compared to doing Open Source after office
      hours. Time spent on InnerSource might be time lost on reaching their
      original goals.
    - Work in InnerSource might not necessarily be part of the official 
      performance goals of contributors.
- It is therefore super important to make the process for making contributions
  and for onboarding contributors as frictionless as possible to avoid wasting
  a contributors time. 
- There are a number of things a TC can do to achieve that state
    - have a good readme.md, providing detailed instructions on how to get,
      build, test and use the SW developed by the InnerSource community.
    - have a good contribute.md which outlines what is expected of the
      contributor to make a contribution. It should answer common questions
      like
        - Who do I contact in case of questions and how to reach her?
        - How do I submit a bug report or feature request?
        - What is the definition of done for a contribution; code, tests, docs?
        - What are conventions for code style, branching or committ messages,
          e. g.?
        - What is expected of me in terms of supporting contributed code after
          the contribution was accepted?
        - What are the process steps that govern contributions?
        - Is there a code of conduct or other guidelines to how the community
          operates?
    - Make it easy to run and test the SW locally
- As a TC, I have to make sure there is someone in the community who is
  available to answer questions of users and potential contributors.
- Also make it clear that non-code contributions are welcome, such as writing
  documentation, organizing events or creating artwork.
- In addition to these "passive" means to facilitate contributions, a TC also
  actively helps with that
    - Publishing a list of "Newbie Tasks" and actively solicit contributions
      rather than waiting for them to happen.
    - TCs are expected to actively help new contributors to finish their PRs
      if they would not be able to do so, otherwise.
- Gig-Marketplace as a good example of how to do this.

## Uplevelling The Community 

- There is a continuum of participation: Unaware, Newcomer, Consumer, 
  Contributor and Maintainer.
- TCs are responsible for moving individuals along this continuum and to 
  uplevel their ability to make contributions.
- This includes
    - marketing the community, its purpose and its goals
    - identify and communicate opportunities for making contributions
    - explore how to align the contributors and the communities goals and
      interests
        - example from own experience: what always worked best was if
          contributors were able to work on something in the community that
          contributed to their day job.
    - identifying talent and encouraging growth, e. g. by assigning challenging
      tasks to contributors
    - mentoring and coaching community members (e. g. during PRs)

## Advocating The Communities Needs

- InnerSource communities exist in a corporate context and are thus more 
  constrained than Open Source Communities.
- There can be times when a business units interests are at odds
  with those of the community. And while companies are more concerned with the
  bottom line and thus the products produced by an InnerSource community,
  InnerSource communities, on the other hand understand that a healthy
  community is a precondition for healthy code. This is why the Apache Software
  Foundation, after which many InnerSource initiatives were modeled, has the
  motto "Community over Code". Vice versa, the effectiveness of the TC is 
  strongly related to code health, as well. Absent the latter, the TC will
  have to spend all their time validating and documenting workarounds for bugs
  or a fragile architecture rather and will not have enough time to spend on
  onboarding and mentoring contributors.
- It is this potential area of conflict, where the TC plays a vital role.
- One example I remember is when I developed a system for remotely controlling
  HVAC systems in my InnerSource community. We successfully met the deadline to
  present the system on a trade fair, where it was an overall success. But we
  knew that we still had to iron out a couple of wrinkles, before we could
  launch the system into the market. When the planned time for market
  introduction came closer and we were reasonably sure that we would not be
  ready in time, it was my responsibility as a TC to engage with management,
  explain the risks of launching before we were ready and to convince them to
  delay the introduction for a couple of days. These were difficult
  conversations but they were necessary to protect the community from the
  backlash we would have gotten, if our system would have performed
  suboptimally in the market. Because a successful market introduction really
  was the goal we were all striving towards and taking that away would have
  been a huge blow to the communities motivation. So as a TC, I had to advocate
  the communities need for a successful market introduction to management.
- Another common example is when contributors are not given time or permission
  to make a contribution, especially when the community is working on a product
  which is not part of the contributors departments domain. In this case, the
  TC should engage in discussion with the contributors manager and lobby for an
  alternative decision.
- In summary, as a TC, you need to be strategic and work within the degrees of
  freedom afforded by your company when advocating for the communities needs.
- Other examples 
    - Advocating the need for required hardware/software 
    - Making sure the community gets public credit for their work
    - ...

## Becoming a Trusted Committer

- Open source principles of transparency and meritocracy guide the process by
  which contributors can become TCs.
- I have made it a point to only then nominate contributors as TCs when they
  have proven their technical merit AND the social merit. In other words, they
  must have made sort of social contributions, such as e. g. 
    - helping onboarding new contributors
    - organizing community events
    - support community members in forums or mailing lists
    - representing the community on events
- In my community, the current TCs made the decision to officially ask a 
  Contributor to assume the TC role, which is of course, voluntary.
- There might well be multiple TCs in one project
- TCs might step down, when they no longer have the time to perform the duties
  of a TC.

## Is the Trusted Committer a role for you?

- needs to be earned
- demonstrated deep technical competence to maintain rank in the meritocracy
- ability to communicate with peers, with product owners and with management
- emotional maturity to deal with stressful social situations
- sufficient standing in the organization to effectively advocate the
  communities and the products needs
- willingness and patientce to use their skills and spend intentional time to
  uplevel contributors so that they can make more contributions that they could
  have on their own (force multiplier)

## Conclusion

## This to mention as well

- there can be multiple TCs per community, depending on the level of risk
  and the size of the community.
- PayPals idea to rotate TCs (TC on duty)
- Recognize TC role by HR (similar to how architects and agile roles are 
  officially recognized)
- PR is probably the most powerful tool the TC has to fulfill his role. It is
  probably the channel he will spend most time communicating in. It is 
  instrumental in communicating and reaching software quality, it presents an
  opportunity to set an example, both in terms of software quality and how to
  conduct oneself in communications. And finally, a PR is where mentoring and
  upleveling contributors happens, in my experience.
