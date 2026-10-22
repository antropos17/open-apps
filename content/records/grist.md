---
name: Grist
repoUrl: https://github.com/gristlabs/grist-core
projectType: real-app
category: productivity
summary: A relational spreadsheet where columns are typed like a database and filled by Python or
  Excel-style formulas, with linked widgets, charts, native forms, row- and column-level access rules,
  a REST API and webhooks — Apache-2.0, self-hosted, as a desktop app or on getgrist.com.
description: Grist is an Apache-licensed relational spreadsheet that combines spreadsheet formulas with
  database structure, self-hostable with Docker and available as a desktop app.
sourceDescription: Grist is the evolution of spreadsheets.
platforms:
  - web
  - linux
  - macos
  - windows
licenses:
  - apache-2.0
links:
  github: https://github.com/gristlabs/grist-core
  website: https://www.getgrist.com
  docs: https://support.getgrist.com
distribution:
  channels:
    - type: self-host
      label: Self-managed Grist
      url: https://support.getgrist.com/self-managed/
      verified: true
    - type: github-releases
      label: Grist Desktop (Linux, macOS, Windows)
      url: https://github.com/gristlabs/grist-desktop/releases
      verified: true
    - type: web-app
      label: Grist hosted
      url: https://docs.getgrist.com
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - productivity
bestFor:
  - Spreadsheet users who need structure, references between tables and fine-grained access rules.
  - Formulas written in Python, with the standard library available.
  - Keeping each document as a portable SQLite file you can back up and move.
whyListed:
  - grist-core is Apache-2.0, and a grist-oss Docker image contains only open-source code.
  - In development since 2020, with release v1.7.19 in September 2026 and heavy contributions from
    French government teams.
  - Telemetry is off by default.
caveats:
  - Open-core — audit log streaming, advanced admin controls, the newer Grist Assistant, automations,
    OAuth apps, the built-in MCP server and SSO are in the paid full edition.
  - The default gristlabs/grist image includes that proprietary code, inactive until enabled; use
    gristlabs/grist-oss for open-source code only.
  - Columns hold one type of data each, which the README warns can confuse people coming from Excel.
relations:
  - type: alternative-to
    to: airtable
    evidence:
      type: self-described
      url: https://www.getgrist.com
      quote: Looking for an Airtable alternative? See how Grist compares
      checkedAt: 2026-09-29
seo:
  title: Grist – Open Source Relational Spreadsheet, Self-Hosted
  description: Grist is a relational spreadsheet with database structure, Python formulas, linked
    widgets, forms and access rules. Apache-2.0, self-hosted or desktop app.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: gristlabs
  repo: grist-core
  url: https://github.com/gristlabs/grist-core
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Grist is the spreadsheet-first option among open-source Airtable alternatives: a relational spreadsheet with typed columns, Python formulas and linked widgets, stored as a portable SQLite file. Its site invites Airtable users to compare, and it imports directly from Airtable. The core is Apache-2.0, and the README lists exactly which features are in the paid edition. Verified against the repository on 29 September 2026, at release v1.7.19.

## What it does

- **Formulas.** Full Python syntax with the standard library, many Excel functions, and an AI Formula Assistant that works with OpenAI-compatible endpoints and OpenRouter.
- **Structure.** References and two-way references between tables, choice lists, attachments and conditional formatting.
- **Dashboards.** Charts, card views, a calendar widget and summary tables, laid out as linked widgets.
- **Forms.** Native forms that write straight into a table.
- **Access and collaboration.** Rules for individual rows, columns and tables; comments, suggested changes and live presence.
- **Integration.** A REST API, webhooks, Zapier, SCIM and import from Excel, CSV, Google Drive and Airtable.
- **Sandboxing.** gVisor, macOS native sandboxing or a Wasm sandbox for untrusted documents.

Grist also comes as `grist-desktop`, a local app for Linux, macOS and Windows, and `grist-static`, for showing spreadsheets on a website without a server.

## Who it is for, and who it is not for

**A good fit**

- Analysts and small organisations that outgrew spreadsheets but still think in formulas.
- Public-sector teams — French government bodies contribute heavily to it.

**Look elsewhere**

- You want Airtable's app-builder side. [Baserow](/apps/baserow/) publishes apps and portals.
- You want a PostgreSQL back end you can query directly. [Teable](/apps/teable/) is built on it.

## How it compares

| | Grist | [Baserow](/apps/baserow/) | [Teable](/apps/teable/) |
|---|---|---|---|
| Model | Relational spreadsheet | No-code database and apps | Spreadsheet-style database |
| Formulas | Python and Excel-style | Spreadsheet formulas | Spreadsheet formulas |
| Desktop app | Yes | No | No |
| Licence | Apache-2.0 core | MIT core | AGPL-3.0 core |

More options are in [open-source Airtable alternatives](/collections/open-source-airtable-alternatives/). More Apache-licensed software is under [Apache-2.0 apps](/licenses/apache-2.0/).

## Licence in practice

`grist-core`, `grist-desktop` and `grist-static` are Apache-2.0. Grist Labs sells a full edition that adds GristConnect, an Azure storage back end, audit log streaming, advanced admin controls, the newer Grist Assistant, invite and change notifications, automations, OAuth apps, a built-in MCP server and SSO through OIDC or SAML. The default `gristlabs/grist` image carries that source-available code, inert until an admin enables it; the `gristlabs/grist-oss` image contains only open-source code. `GRIST_TELEMETRY_LEVEL` defaults to off.

## Verified sources

- Repository and README — <https://github.com/gristlabs/grist-core> (29 Sep 2026)
- Licence file — <https://github.com/gristlabs/grist-core/blob/main/LICENSE.txt>
- Self-managed Grist — <https://support.getgrist.com/self-managed/>
- Grist Desktop releases — <https://github.com/gristlabs/grist-desktop/releases>
- Grist vs Airtable — <https://www.getgrist.com/blog/grist-v-airtable/>
