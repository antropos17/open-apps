---
name: Teable
repoUrl: https://github.com/teableio/teable
projectType: real-app
category: productivity
stack: react
summary: A self-hosted, Airtable-style database that looks like a spreadsheet, with grid, form,
  kanban, gallery and calendar views, formulas, live collaboration, automations and an API. Data
  lives in PostgreSQL; paid plans add AI chat, an app builder and enterprise features in the same
  image.
description: A self-hosted Airtable-style spreadsheet database with views, formulas, automations and
  an API.
sourceDescription: ✨ AI Spreadsheet for Business
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/teableio/teable
  website: https://teable.ai
  docs: https://help.teable.ai
distribution:
  channels:
    - type: self-host
      label: Deployment guide
      url: https://help.teable.ai/en/deploy/choose
      verified: true
    - type: web-app
      label: Teable Cloud
      url: https://teable.ai
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - productivity
bestFor:
  - Teams that want Airtable-style tables backed by a real PostgreSQL database.
  - Large tables — the README says it handles millions of rows.
  - Querying the same data with SQL beside the spreadsheet interface.
whyListed:
  - Tables, views, collaboration, API and automation are in the standalone self-hosted edition.
  - Data lives in PostgreSQL, not a proprietary store.
  - Frequent releases; the latest was published on 27 September 2026.
caveats:
  - Open-core in practice — AI chat, agents and the App Builder are paid features, and the official
    image contains them, unlocked by licence key.
  - The licence adds brand terms under AGPL section 7(e) that forbid removing or replacing Teable's name
    and logo.
  - Commits to the public default branch arrive in batches; releases are more frequent than commits.
relations:
  - type: alternative-to
    to: airtable
    evidence:
      type: repo-topic
      url: https://github.com/teableio/teable
      quote: airtable-alternative
      checkedAt: 2026-09-29
seo:
  title: "Teable Review: Self-Hosted Airtable Alternative"
  description: Teable is a spreadsheet-style database on PostgreSQL with grid, kanban, form and calendar
    views, automations and an API. AGPL core; AI features are paid.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: teableio
  repo: teable
  url: https://github.com/teableio/teable
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Teable puts an Airtable-like interface on top of a real PostgreSQL database, and its repository is tagged `airtable-alternative`. The standalone self-hosted edition covers tables, views, collaboration, the API and automation under AGPL; the newer AI chat, agents and App Builder are paid, and that split is the first thing to understand before choosing it. Verified against the repository on 29 September 2026, at the release of 27 September 2026.

## What it does

- **Views.** Grid, form, kanban, gallery and calendar.
- **Data work.** Formulas, field conversion, filtering, grouping, sorting and aggregation, validation, search, charts, plugins and SQL queries.
- **Collaboration.** Comments, record history, undo and redo, and real-time editing.
- **Automation.** Triggers on record changes, schedules and webhooks.
- **AI (paid).** Chat over your data, AI field filling, AI steps in automations, and an App Builder that has an agent build and deploy an app in an isolated sandbox.

## Editions, in plain terms

| | Standalone self-host | Full-featured self-host | Teable Cloud |
|---|---|---|---|
| Tables, collaboration, API, automation | Yes | Yes | Yes |
| AI chat and agents, App Builder | No | Yes, on a paid plan | Yes |
| Start from | Docker guide | teable-deployment repository | teable.ai |

## Who it is for, and who it is not for

**A good fit**

- Teams with large tables who are comfortable running PostgreSQL.
- Developers who want to query the same tables with SQL.

**Look elsewhere**

- You want the self-hosted core under a permissive licence. [Baserow](/apps/baserow/) is MIT and [Grist](/apps/grist/) is Apache-2.0.
- You want AI features without a subscription on your own server.

## How it compares

| | Teable | [Baserow](/apps/baserow/) | [Grist](/apps/grist/) |
|---|---|---|---|
| Storage | PostgreSQL | PostgreSQL | SQLite file per document |
| Formulas | Spreadsheet formulas | Spreadsheet formulas | Python and Excel-style |
| Licence | AGPL-3.0 core, paid features in image | MIT core, premium and enterprise directories | Apache-2.0 core, proprietary extras |

All three are in [open-source Airtable alternatives](/collections/open-source-airtable-alternatives/).

## Licence in practice

The LICENSE file puts the two core applications, the NestJS back end and the Next.js front end, under AGPL-3.0, and the packages directory under MIT. It adds brand-protection terms under AGPL section 7(e): you may not modify, remove or replace Teable's name, logo and visual identity. The README says the official image ships the complete product, with AI and enterprise capabilities unlocked in place by a licence key. More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/teableio/teable> (29 Sep 2026)
- Licence file — <https://github.com/teableio/teable/blob/develop/LICENSE>
- Deployment guide — <https://help.teable.ai/en/deploy/choose>
- Pricing — <https://teable.ai/pricing>
