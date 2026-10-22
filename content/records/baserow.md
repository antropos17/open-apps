---
name: Baserow
repoUrl: https://github.com/baserow/baserow
projectType: real-app
category: productivity
summary: A no-code database and app builder with spreadsheet-style tables, forms and kanban views,
  published apps, automations, dashboards and an AI assistant, self-hosted or in the cloud. It is
  built on Django, Vue.js and PostgreSQL, with an MIT open-source edition and paid premium and
  enterprise features.
description: A self-hostable no-code database with spreadsheet tables, forms, kanban views and apps.
sourceDescription: Build databases, automations, apps & agents with AI — no code.  Open source
  platform available on cloud and self-hosted. GDPR, HIPAA, SOC 2 compliant. Best Airtable
  alternative.
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/baserow/baserow
  website: https://baserow.io
  docs: https://baserow.io/docs/index
distribution:
  channels:
    - type: self-host
      label: Install with Docker
      url: https://baserow.io/docs/installation/install-with-docker
      verified: true
    - type: web-app
      label: Baserow Cloud
      url: https://baserow.io
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - productivity
bestFor:
  - Moving an Airtable base to your own server with a permissive licence.
  - Building a simple app or portal on top of your tables and publishing it on your own domain.
  - An API-first database that other tools can read and write.
whyListed:
  - The open-source edition, everything outside premium/ and enterprise/, is MIT.
  - In development since 2020, with release 2.3.4 in September 2026.
  - One Docker command to self-host, plus Helm, Docker Compose and several hosting platforms.
caveats:
  - Open-core — code under premium/ and enterprise/ needs a paid subscription in production.
  - The project moved from GitLab to GitHub; merged and closed merge requests were not carried over.
relations:
  - type: alternative-to
    to: airtable
    evidence:
      type: self-described
      url: https://github.com/baserow/baserow
      quote: Best Airtable alternative.
      checkedAt: 2026-09-29
seo:
  title: "Baserow Review: Open Source Airtable Alternative"
  description: Baserow is a self-hostable no-code database with tables, forms, kanban, apps, automations
    and dashboards on PostgreSQL. MIT core; premium features paid.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: baserow
  repo: baserow
  url: https://github.com/baserow/baserow
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Baserow is the permissively licensed way to replace Airtable on your own server: its description calls it the "best Airtable alternative", and its open-source edition is MIT. Around the spreadsheet-style database it has grown an application builder, automations, dashboards and an AI assistant. It is open-core, with premium and enterprise features in separately licensed directories. Verified against the repository on 29 September 2026, at release 2.3.4.

## What it does

- **Database.** A spreadsheet and database hybrid with grid, form and kanban views, running on PostgreSQL.
- **Applications.** Build apps and portals on top of your data and publish them on your own domain.
- **Automations and dashboards.** Automate repetitive workflows and chart your data.
- **AI assistant.** Kuma creates databases and workflows from natural-language requests.
- **API first.** A REST API with an OpenAPI schema, so other tools can use Baserow as a back end.

The stack is Django, Vue.js and PostgreSQL. Self-hosting starts with a single `docker run` command; the README also documents Helm, Docker Compose, Heroku, Render, DigitalOcean, AWS, Cloudron and Railway.

## Who it is for, and who it is not for

**A good fit**

- Teams moving off Airtable who want to keep a permissive licence on what they deploy.
- Organisations that want tables and a simple front end for them in one tool.

**Look elsewhere**

- You think in formulas and want Python in your cells. [Grist](/apps/grist/) is closer to a spreadsheet.
- You are building internal tools on existing databases and APIs. [Appsmith](/apps/appsmith/) and the [Retool alternatives](/collections/open-source-retool-alternatives/) fit better.

## How it compares

| | Baserow | [Teable](/apps/teable/) | [Grist](/apps/grist/) |
|---|---|---|---|
| Licence | MIT core, premium and enterprise directories | AGPL-3.0 core, paid features in image | Apache-2.0 core, proprietary extras |
| App builder | Yes | Paid AI App Builder | No, widgets and dashboards |
| Since | 2020 | 2022 | 2020 (grist-core) |

The full comparison is in [open-source Airtable alternatives](/collections/open-source-airtable-alternatives/). More permissive software is under [MIT-licensed apps](/licenses/mit/).

## Licence in practice

The LICENSE file splits the repository. Everything outside `premium/` and `enterprise/` — the Baserow Open Source Edition — is MIT, and so is all client-side JavaScript as served to the browser. Code under `premium/` and `enterprise/` is under Baserow's Premium and Enterprise licences, which allow production use only with a valid subscription for the right number of users. Documentation is CC BY-SA 4.0.

## Verified sources

- Repository and README — <https://github.com/baserow/baserow> (29 Sep 2026)
- Licence file — <https://github.com/baserow/baserow/blob/develop/LICENSE>
- Premium licence — <https://github.com/baserow/baserow/blob/develop/premium/LICENSE>
- Install with Docker — <https://baserow.io/docs/installation/install-with-docker>
