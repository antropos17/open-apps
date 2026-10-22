---
name: Formbricks
repoUrl: https://github.com/formbricks/formbricks
projectType: real-app
category: productivity
stack: react
summary: A self-hostable survey platform for link, website, in-app and email surveys, with a no-code
  editor and targeting of specific user groups. It ships templates and integrations with Slack,
  Notion, Zapier and n8n — an AGPL core with a separately licensed enterprise directory.
description: Run link, website, in-app and email surveys on your own server or in Formbricks Cloud.
sourceDescription: Open Source Qualtrics Alternative
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/formbricks/formbricks
  website: https://formbricks.com
  docs: https://formbricks.com/docs
distribution:
  channels:
    - type: self-host
      label: Self-hosting with Docker
      url: https://formbricks.com/docs/self-hosting/deployment
      verified: true
    - type: web-app
      label: Formbricks Cloud
      url: https://app.formbricks.com/auth/signup
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - privacy
bestFor:
  - Product teams that want in-app and website surveys targeted at specific user groups.
  - Replacing a hosted survey tool while keeping responses on your own servers.
  - Feeding survey results into Slack, Notion, Zapier or n8n.
whyListed:
  - The README says the AGPL core is fully functional for link, website and in-app surveys.
  - Active since 2022, with release 6.0.0 published in September 2026.
  - Self-hostable with Docker without a subscription.
caveats:
  - Open-core — code under apps/web/modules/ee (SSO, teams, role management, audit logs, white-labelling,
    workflows and more) needs a paid Enterprise licence in production.
  - Usage telemetry is sent to Formbricks unless you set TELEMETRY_DISABLED.
  - The README says code contributions are accepted only as an exception for now.
relations:
  - type: alternative-to
    to: qualtrics
    evidence:
      type: self-described
      url: https://github.com/formbricks/formbricks
      quote: Open Source Qualtrics Alternative
      checkedAt: 2026-09-29
  - type: alternative-to
    to: typeform
    evidence:
      type: self-described
      url: https://formbricks.com/typeform-alternative
      quote: Open Source Typeform Alternative
      checkedAt: 2026-09-29
seo:
  title: "Formbricks Review: Qualtrics Alternative"
  description: Formbricks runs link, website, in-app and email surveys on your own server, with
    targeting and integrations. AGPL core; enterprise features paid.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: formbricks
  repo: formbricks
  url: https://github.com/formbricks/formbricks
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Formbricks is the survey-first pick among open-source Typeform alternatives: beyond shareable link surveys, it targets in-app and website surveys at specific groups of users without changes to your application code. It describes itself as an open-source Qualtrics alternative and publishes a Typeform comparison on its site. It is open-core, and the line between the AGPL core and the enterprise directory matters for self-hosters. Verified against the repository on 29 September 2026, at release 6.0.0.

## What it does

- **Survey types.** Link surveys you can share, website surveys, in-app surveys and email surveys.
- **Editor and templates.** A no-code editor with several question types and a library of best-practice templates.
- **Targeting.** Launch surveys to specific user groups without redeploying your app; SDKs for JavaScript, Android and iOS live in MIT-licensed packages.
- **Collaboration and integrations.** Invite organisation members, and send results to Slack, Notion, Zapier, n8n and more.

## Who it is for, and who it is not for

**A good fit**

- SaaS product teams collecting feedback inside their own app.
- Organisations that need survey data on infrastructure they control.

**Look elsewhere**

- You want Typeform's one-question-at-a-time form builder without a product-feedback angle. [HeyForm](/apps/heyform/) and [OpnForm](/apps/opnform/) are form builders first.
- You run large academic or multilingual questionnaires. [LimeSurvey](/apps/limesurvey/) has been built for that since 2006.

## How it compares

| | Formbricks | [HeyForm](/apps/heyform/) | [OpnForm](/apps/opnform/) | [LimeSurvey](/apps/limesurvey/) |
|---|---|---|---|---|
| Focus | In-app and web surveys | Conversational forms | Form builder | Survey research |
| Licence | AGPL-3.0 core, enterprise directory | AGPL-3.0 | AGPL-3.0 core, enterprise directory | GPL-2.0 or later |
| Hosted option | Formbricks Cloud | HeyForm hosted service | OpnForm Cloud | LimeSurvey hosted |

All four are compared in [open-source Typeform alternatives](/collections/open-source-typeform-alternatives/).

## Licence in practice

The LICENSE file splits the repository three ways. Code under `apps/web/modules/ee` — SSO, teams, role management, two-factor authentication, audit logs, quotas, white-labelling, workflows, AI translation and others — is under the Formbricks Enterprise Edition licence and may be used in production only with a paid Enterprise licence. The JavaScript, Android and iOS SDKs and the API package are MIT. Everything else is AGPL-3.0. The self-hosted instance reports usage statistics to Formbricks unless `TELEMETRY_DISABLED=1` is set. More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/formbricks/formbricks> (29 Sep 2026)
- Licence file — <https://github.com/formbricks/formbricks/blob/main/LICENSE>
- Enterprise licence — <https://github.com/formbricks/formbricks/blob/main/apps/web/modules/ee/LICENSE>
- Environment settings (telemetry) — <https://github.com/formbricks/formbricks/blob/main/.env.example>
- Typeform comparison — <https://formbricks.com/typeform-alternative>
