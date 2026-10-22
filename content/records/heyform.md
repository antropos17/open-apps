---
name: HeyForm
repoUrl: https://github.com/heyform/heyform
projectType: real-app
category: productivity
stack: react
summary: A conversational form builder for surveys, quizzes and polls, with conditional logic, custom
  themes and CSS, drop-off analytics, CSV export, webhooks and Zapier or Make.com integrations —
  AGPL-3.0, self-hosted or on HeyForm's hosted service.
description: HeyForm is an AGPL-licensed, self-hostable builder for conversational forms, surveys,
  quizzes and polls, with logic, theming, analytics and integrations.
sourceDescription: Open-Source Form Builder
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/heyform/heyform
  website: https://heyform.net
  docs: https://docs.heyform.net
distribution:
  channels:
    - type: self-host
      label: Self-hosting guide
      url: https://docs.heyform.net/open-source/self-hosting
      verified: true
    - type: web-app
      label: HeyForm hosted service
      url: https://my.heyform.net
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - productivity
bestFor:
  - Typeform-style conversational forms on your own server.
  - Quizzes, polls and feedback forms with conditional logic and branding.
  - Teams that sign in through Authelia, Authentik or Keycloak.
whyListed:
  - AGPL-3.0 across the repository, with no enterprise directory.
  - Regular releases; v3.0.3 was published in September 2026.
  - Self-hosting docs, one-click deploy templates and OpenID Connect setup are documented.
caveats:
  - A small team — the README calls itself "the passionate duo behind HeyForm" and steers users toward
    the hosted service.
  - Fewer survey-research features than LimeSurvey, such as multilingual surveys or large question
    libraries.
relations:
  - type: alternative-to
    to: typeform
    evidence:
      type: self-described
      url: https://heyform.net
      quote: The open-source Typeform alternative
      checkedAt: 2026-09-29
seo:
  title: HeyForm – Open Source Typeform Alternative, Self-Hosted
  description: HeyForm builds conversational forms, surveys, quizzes and polls with logic, themes,
    analytics and webhooks. AGPL-3.0, self-hosted or on the hosted service.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: heyform
  repo: heyform
  url: https://github.com/heyform/heyform
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
HeyForm is the closest match to Typeform's style among open-source form builders: its website calls it "the open-source Typeform alternative", and it is built around conversational forms for surveys, quizzes and polls. The whole repository is AGPL-3.0 with no enterprise directory, which makes it the simplest licence story in this group. Verified against the repository on 29 September 2026, at release v3.0.3.

## What it does

- **Inputs.** Text, email and phone fields, picture choices, date pickers and file uploads.
- **Logic.** Conditional logic and URL redirects for forms that adapt to answers.
- **Branding.** Themes with custom fonts, colours and backgrounds, plus custom CSS.
- **Results.** Analytics with drop-off and completion rates, and CSV export.
- **Integrations.** Webhooks, analytics and marketing platforms, Zapier and Make.com.

The monorepo holds a Node server, a React web app, a form renderer and an embed library for placing forms on other sites. Self-hosted instances can sign users in through a generic OpenID Connect provider such as Authelia, Authentik or Keycloak.

## Who it is for, and who it is not for

**A good fit**

- Anyone who likes Typeform's one-question-at-a-time forms and wants to self-host them.
- Organisations that want an open-source licence with no separate paid code in the repository.

**Look elsewhere**

- You need in-app surveys targeted at users of your product. [Formbricks](/apps/formbricks/) does that.
- You run academic or multilingual questionnaires. [LimeSurvey](/apps/limesurvey/) is built for research.

## How it compares

| | HeyForm | [OpnForm](/apps/opnform/) | [Formbricks](/apps/formbricks/) |
|---|---|---|---|
| Style | Conversational forms | Multi-step or single-page forms | Surveys, in-app and on the web |
| Stack | Node and React | Laravel and Nuxt | Next.js |
| Licence | AGPL-3.0 | AGPL-3.0 core, enterprise directory | AGPL-3.0 core, enterprise directory |

The full comparison is in [open-source Typeform alternatives](/collections/open-source-typeform-alternatives/). More copyleft software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/heyform/heyform> (29 Sep 2026)
- Licence file — <https://github.com/heyform/heyform/blob/next/LICENSE>
- Self-hosting guide — <https://docs.heyform.net/open-source/self-hosting>
- Project site — <https://heyform.net>
