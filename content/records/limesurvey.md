---
name: LimeSurvey
repoUrl: https://github.com/LimeSurvey/LimeSurvey
projectType: real-app
category: productivity
summary: A survey platform developed since 2006, with 30+ question types, skip logic and branching,
  and multilingual surveys in 80+ languages. It adds closed-access invitations, statistics, a
  RemoteControl API, plugins and LDAP or SAML sign-in — GPL, written in PHP, self-hosted or as
  LimeSurvey's SaaS.
description: Self-hosted surveys with branching logic, 80+ languages, statistics and an API.
sourceDescription: 🔥 LimeSurvey – A powerful, open-source survey platform. A free alternative to
  SurveyMonkey, Typeform, Qualtrics, and Google Forms, making it simple to create online surveys and
  forms with unmatched flexibility.
platforms:
  - web
  - linux
licenses:
  - gpl-2.0
links:
  github: https://github.com/LimeSurvey/LimeSurvey
  website: https://www.limesurvey.org
  docs: https://www.limesurvey.org/manual
distribution:
  channels:
    - type: website
      label: Stable downloads
      url: https://community.limesurvey.org/downloads/
      verified: true
    - type: web-app
      label: LimeSurvey hosted
      url: https://www.limesurvey.org
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - privacy
bestFor:
  - Academic research, field studies and employee surveys with complex branching.
  - Multilingual surveys for international audiences.
  - Invite-only surveys sent through personal links.
whyListed:
  - GPL-2.0 or later, with no separately licensed code in the repository.
  - In development since 2006, with tagged releases in September 2026.
  - Runs on a standard PHP stack with MySQL, MariaDB, PostgreSQL or Microsoft SQL Server.
caveats:
  - The README recommends the stable downloads over the development repository, which may contain
    untested code.
  - A classic PHP application — expect to maintain a web server, PHP and a database yourself.
relations:
  - type: alternative-to
    to: surveymonkey
    evidence:
      type: self-described
      url: https://github.com/LimeSurvey/LimeSurvey
      quote: A free alternative to SurveyMonkey, Typeform, Qualtrics, and Google Forms
      checkedAt: 2026-09-29
  - type: alternative-to
    to: typeform
    evidence:
      type: self-described
      url: https://github.com/LimeSurvey/LimeSurvey
      quote: A free alternative to SurveyMonkey, Typeform, Qualtrics, and Google Forms
      checkedAt: 2026-09-29
  - type: alternative-to
    to: qualtrics
    evidence:
      type: self-described
      url: https://github.com/LimeSurvey/LimeSurvey
      quote: A free alternative to SurveyMonkey, Typeform, Qualtrics, and Google Forms
      checkedAt: 2026-09-29
seo:
  title: "LimeSurvey Review: SurveyMonkey Alternative"
  description: LimeSurvey is a GPL survey platform with 30+ question types, branching logic, surveys
    in 80+ languages, statistics and an API. Self-hosted or SaaS.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: LimeSurvey
  repo: LimeSurvey
  url: https://github.com/LimeSurvey/LimeSurvey
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
LimeSurvey is the veteran of open-source survey software: developed since 2006, it describes itself as a free alternative to SurveyMonkey, Typeform, Qualtrics and Google Forms. It is built for surveys rather than marketing forms — branching, multilingual questionnaires, closed-access invitations and statistics — and the whole repository is GPL. Verified against the repository on 29 September 2026, at tag 7.3.0.

## What it does

- **Question design.** More than 30 question types, 900+ survey templates, skip logic and question branching.
- **Languages.** Multilingual surveys in more than 80 languages.
- **Distribution.** Public links, QR codes and social sharing, or a closed-access mode with personal invitation links.
- **Results.** Responses, statistics and data-analysis tools, with anonymisation options.
- **Integration.** A RemoteControl API over XML-RPC or JSON-RPC, a REST API, SAML and LDAP sign-in, and a plugin system for question themes, audit logs and exports.
- **Accessibility.** The README lists WCAG 2.0 compliance and two-factor authentication.

It runs on Apache or nginx with PHP 8.1 or later and MySQL, MariaDB, PostgreSQL or Microsoft SQL Server.

## Who it is for, and who it is not for

**A good fit**

- Universities, public bodies and research teams that must keep survey data on their own servers.
- Anyone running long, branching questionnaires in several languages.

**Look elsewhere**

- You want a modern, conversational form builder. [HeyForm](/apps/heyform/) is closer to Typeform.
- You want product feedback surveys inside your app. [Formbricks](/apps/formbricks/) is built for that.

## How it compares

| | LimeSurvey | [Formbricks](/apps/formbricks/) | [HeyForm](/apps/heyform/) |
|---|---|---|---|
| Since | 2006 | 2022 | 2024 (current repository) |
| Focus | Survey research | In-app and web surveys | Conversational forms |
| Stack | PHP | Next.js | Node and React |
| Licence | GPL-2.0 or later | AGPL-3.0 core, enterprise directory | AGPL-3.0 |

The comparison continues in [open-source Typeform alternatives](/collections/open-source-typeform-alternatives/). More self-hosted tools are under [Productivity](/categories/productivity/).

## Licence in practice

GPL-2.0, with the option to use any later GPL version. The LimeSurvey name and logo are registered trademarks of LimeSurvey GmbH, which also sells the hosted service.

## Verified sources

- Repository and README — <https://github.com/LimeSurvey/LimeSurvey> (29 Sep 2026)
- Licence file — <https://github.com/LimeSurvey/LimeSurvey/blob/master/LICENSE>
- Stable downloads — <https://community.limesurvey.org/downloads/>
- Manual — <https://www.limesurvey.org/manual>
