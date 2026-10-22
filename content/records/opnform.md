---
name: OpnForm
repoUrl: https://github.com/OpnForm/OpnForm
projectType: real-app
category: productivity
summary: A no-code form builder and Typeform alternative with unlimited forms and submissions, file
  uploads, form logic, embeds and email notifications, self-hosted or in the cloud. It also has
  Slack, Discord and webhook integrations, analytics and an MCP server for AI agents, built with
  Laravel and Nuxt under an AGPL core with an enterprise directory.
description: No-code form builder with unlimited forms, logic and embeds, self-hosted or cloud, a Typeform alternative.
sourceDescription: Beautiful Open-Source Form Builder
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/OpnForm/OpnForm
  website: https://opnform.com
  docs: https://docs.opnform.com
distribution:
  channels:
    - type: self-host
      label: Deployment guides
      url: https://docs.opnform.com/deployment
      verified: true
    - type: web-app
      label: OpnForm Cloud
      url: https://opnform.com
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - productivity
bestFor:
  - Contact, signup and order forms embedded on your own sites.
  - Teams that want Typeform-style or classic layouts without per-response limits.
  - Letting an AI agent draft and manage forms through MCP.
whyListed:
  - The README lists unlimited forms and submissions in the self-hostable core.
  - Active since 2022, with release v2.5.0 in September 2026 and commits in the last week.
  - Documented self-hosting and a Docker development setup.
caveats:
  - Open-core — features under api/app/Enterprise are under a proprietary Enterprise licence.
  - The repository moved from JhumanJ/OpnForm to OpnForm/OpnForm; old links redirect.
relations:
  - type: alternative-to
    to: typeform
    evidence:
      type: self-described
      url: https://opnform.com/opnform-vs-typeform
      quote: OpnForm — the powerful Typeform alternative
      checkedAt: 2026-09-29
seo:
  title: "OpnForm Review: Typeform Alternative"
  description: OpnForm is a self-hostable form builder with logic, embeds, file uploads, Slack and
    webhook integrations, analytics and MCP. A Typeform alternative.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: OpnForm
  repo: OpnForm
  url: https://github.com/OpnForm/OpnForm
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
OpnForm is a practical form builder for the forms most teams actually need — contact, signup, application and feedback forms, embedded anywhere, with logic and notifications. Its site presents it as "the powerful Typeform alternative", with Typeform-style or classic layouts, and it now ships an MCP server so AI agents can draft forms. The core is AGPL; a small enterprise directory is not. Verified against the repository on 29 September 2026, at release v2.5.0.

## What it does

- **Builder.** No-code editing, many input types including dates, URLs and file uploads, and form logic.
- **No caps on the core.** The README lists unlimited forms and submissions.
- **Delivery.** Embed forms anywhere, send email notifications, and post to Slack, Discord or webhooks.
- **Protection and insight.** Captcha protection and form analytics.
- **AI agents.** A remote MCP server lets agents create and preview a private draft without logging in; with OAuth they can manage forms in a workspace and search, count and export submissions read-only.

The back end is Laravel and the front end Nuxt, with PostgreSQL, MySQL or SQLite as the database.

## Who it is for, and who it is not for

**A good fit**

- Small businesses and agencies that embed many forms on websites.
- Teams already running PHP and Laravel who want to own their form data.

**Look elsewhere**

- You want the whole repository under an open-source licence. [HeyForm](/apps/heyform/) has no enterprise directory.
- You need in-app product surveys. [Formbricks](/apps/formbricks/) targets users inside your app.

## How it compares

| | OpnForm | [HeyForm](/apps/heyform/) | [LimeSurvey](/apps/limesurvey/) |
|---|---|---|---|
| Focus | Everyday web forms | Conversational forms | Survey research |
| AI agents | MCP server | None in the README | None in the README |
| Licence | AGPL-3.0 core, enterprise directory | AGPL-3.0 | GPL-2.0 or later |

More options are in [open-source Typeform alternatives](/collections/open-source-typeform-alternatives/).

## Licence in practice

The README describes a dual-licence model. The main application is AGPL-3.0 or later. Code under `api/app/Enterprise/` — which, when checked, held a single `Oidc` directory — is under OpnForm's proprietary Enterprise Licence and Enterprise Terms. If single sign-on through OpenID Connect matters to you, check how it is licensed before you plan a self-hosted rollout. More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/OpnForm/OpnForm> (29 Sep 2026)
- Licence file — <https://github.com/OpnForm/OpnForm/blob/main/LICENSE>
- Enterprise licence — <https://github.com/OpnForm/OpnForm/blob/main/api/app/Enterprise/LICENSE>
- Deployment guides — <https://docs.opnform.com/deployment>
- Typeform comparison — <https://opnform.com/opnform-vs-typeform>
