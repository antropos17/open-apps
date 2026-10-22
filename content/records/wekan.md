---
name: WeKan
repoUrl: https://github.com/wekan/wekan
projectType: real-app
category: productivity
stack: javascript
summary: A self-hosted Kanban board for teams, with real-time boards, lists, cards, swimlanes, WIP
  limits and filters, and importers for Trello, Jira, Asana and CSV. It is built with Meteor,
  installs through Docker or Snap, and has webhooks and an admin panel.
description: A self-hosted, real-time Kanban board for teams, with swimlanes and import from Trello.
sourceDescription: The Open Source kanban, built with Meteor. GitHub issues/PRs are only for FLOSS
  Developers, not for support, support is at https://wekan.fi/commercial-support/ . PR source
  translation to imports/i18n/data/en.i18n.json, other translations at
  https://app.transifex.com/wekan/wekan . No telemetry.
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/wekan/wekan
  website: https://wekan.fi
distribution:
  channels:
    - type: self-host
      label: Install options (Docker and more)
      url: https://wekan.fi/install/
      verified: true
    - type: snapcraft
      label: Snap Store
      url: https://snapcraft.io/wekan
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
  - privacy
bestFor:
  - Teams moving boards off Trello onto their own server, with an importer for the move.
  - Organisations that need a Kanban board inside an internal network with no internet access.
  - Large installations — the README cites a user with 30,000 people on one company instance.
whyListed:
  - MIT-licensed and in development since 2014, with several releases a week when checked.
  - States plainly that it has no telemetry.
  - Imports from Trello, Jira, Asana, CSV and other formats.
caveats:
  - Needs at least 1 GB of free RAM, and the README recommends 4 GB for a production server.
  - There is no undo yet; the maintainers ask for daily database backups, and only the newest release
    is supported.
relations:
  - type: alternative-to
    to: trello
    evidence:
      type: self-described
      url: https://github.com/wekan/wekan/blob/main/docs/FAQ/FAQ.md
      quote: features that are not available on Trello or other alternatives
      checkedAt: 2026-09-29
seo:
  title: "WeKan Review: Self-Hosted Trello Alternative"
  description: WeKan is a real-time, self-hosted Kanban board with swimlanes, WIP limits and importers
    for Trello, Jira and Asana. MIT, no telemetry.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: wekan
  repo: wekan
  url: https://github.com/wekan/wekan
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
WeKan is the long-running, self-hosted Kanban board closest to the Trello way of working: boards, lists and cards that update in real time for everyone, plus swimlanes, WIP limits and an importer for your existing Trello boards. In development since 2014 — it began as a Trello clone called Metrello — it is MIT-licensed and says outright that it has no telemetry. Verified against the repository on 29 September 2026, at release v12.08.

## What it does

- **Boards, lists and cards** in a real-time interface, with swimlanes, WIP limits, filters, keyboard shortcuts and a Markdown editor.
- **Members and administration** — board members, member settings and an admin panel.
- **Automation and integration** through webhooks and an OpenAPI description.
- **Import and export** for Trello, Jira, Asana, Kanboard, ZenKit, CSV and Excel.
- **Translations** into 234 languages through Transifex.

It runs on MongoDB, with Docker Compose files for FerretDB on PostgreSQL, MySQL and other databases, and installs from Docker images, the Snap Store and other platforms listed on wekan.fi.

## Who it is for, and who it is not for

**A good fit**

- Companies and public bodies that want Trello-style boards on their own servers, including offline networks.
- Teams that want a permissive licence and no telemetry.

**Look elsewhere**

- You want something tiny to run. [Kanboard](/apps/kanboard/) is a small PHP app.
- You want list, Gantt and to-do views as well as boards. [Vikunja](/apps/vikunja/) offers four views.

## How it compares

| | WeKan | [Kanboard](/apps/kanboard/) | [Vikunja](/apps/vikunja/) |
|---|---|---|---|
| Trello import | Yes | Not a focus | Yes |
| Stack | Meteor, MongoDB or FerretDB | PHP; SQLite, MySQL or PostgreSQL | Go and Vue |
| Licence | MIT | MIT | AGPL-3.0 |

More boards are in [open-source Trello alternatives](/collections/open-source-trello-alternatives/). More permissive software is under [MIT-licensed apps](/licenses/mit/).

## Running it

Plan for at least 1 GB of free RAM and 4 GB on a production server; the README describes much larger multi-server setups for thousands of users. Keep it updated — only the newest release is supported — and back up the database daily, because there is no undo yet and a full disk can corrupt MongoDB. Paid support is available from the maintainers.

## Verified sources

- Repository and README — <https://github.com/wekan/wekan> (29 Sep 2026)
- Licence file — <https://github.com/wekan/wekan/blob/main/LICENSE>
- FAQ, including the difference from Trello — <https://github.com/wekan/wekan/blob/main/docs/FAQ/FAQ.md>
- Install options — <https://wekan.fi/install/>
