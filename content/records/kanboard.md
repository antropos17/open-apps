---
name: Kanboard
repoUrl: https://github.com/kanboard/kanboard
projectType: real-app
category: productivity
summary: A deliberately minimal, self-hosted Kanban board in PHP — drag-and-drop columns, WIP
  limits, a search query language, subtasks with time estimates, Markdown descriptions, automatic
  actions, plugins, and LDAP or OAuth2 login.
description: Kanboard is an MIT-licensed Kanban project management app that focuses on simplicity,
  with WIP limits, automatic actions and a small PHP footprint.
sourceDescription: Kanban project management software
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/kanboard/kanboard
  website: https://kanboard.org
  docs: https://docs.kanboard.org
distribution:
  channels:
    - type: self-host
      label: Docker
      url: https://docs.kanboard.org/v1/admin/docker/
      verified: true
    - type: github-releases
      label: Release archives
      url: https://github.com/kanboard/kanboard/releases/latest
      verified: true
tags:
  - self-hosted
  - productivity
  - web-app
bestFor:
  - A personal or small-team Kanban board that stays out of the way.
  - Running on modest hardware with SQLite, MySQL or PostgreSQL.
  - Teams that want a stable, finished tool rather than a stream of new features.
whyListed:
  - MIT-licensed, in development since 2014, with regular releases.
  - Automatic actions change assignees, colours and categories when events happen.
  - LDAP or Active Directory and any OAuth2 provider for login.
caveats:
  - In maintenance mode — the author is not building major new features; releases come from
    community contributions and small fixes.
  - It does not describe itself as a Trello alternative; it is listed with them as a self-hosted
    Kanban board. The interface is intentionally plain.
relations:
  - type: alternative-to
    to: trello
    evidence:
      type: editorial
      url: https://github.com/kanboard/kanboard
      checkedAt: 2026-09-29
seo:
  title: Kanboard – Open Source Minimal Kanban Board, Self-Hosted
  description: Kanboard is a minimal self-hosted Kanban board with WIP limits, subtasks, automatic
    actions, plugins and LDAP or OAuth2 login. PHP, MIT-licensed.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: kanboard
  repo: kanboard
  url: https://github.com/kanboard/kanboard
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Kanboard is the minimalist's Kanban board: a small PHP application, MIT-licensed since 2014, that does boards, tasks and automation and deliberately stops there. Its author calls it complete — it is in maintenance mode, so expect fixes and community contributions rather than new features — which is exactly why some teams choose it. Verified against the repository on 29 September 2026, at release v1.2.54.

## What it does

- **A Kanban board** with drag-and-drop tasks and columns you can add, rename and remove at any time.
- **Work-in-progress limits** that highlight a column when it is over the limit.
- **Search and filters** through a simple query language — by assignee, description, category, due date and more.
- **Tasks** with subtasks, time or complexity estimates, Markdown descriptions, comments, attachments and colours, and one-click moves or copies across projects.
- **Automatic actions** that change the assignee, colour, category and other fields when events happen.
- **Authentication** through LDAP or Active Directory, or any OAuth2 provider such as Google, GitHub or GitLab.
- **Plugins** to extend it, and translations in 30+ languages.

## Who it is for, and who it is not for

**A good fit**

- Individuals and small teams who want a board, not a platform.
- Self-hosters on low-powered servers who value stability over new features.

**Look elsewhere**

- You want real-time collaboration and imports from Trello. [WeKan](/apps/wekan/) is closer to Trello.
- You want lists, Gantt and reminders as well as a board. [Vikunja](/apps/vikunja/) has four views.

## How it compares

| | Kanboard | [WeKan](/apps/wekan/) | [Vikunja](/apps/vikunja/) |
|---|---|---|---|
| Development | Maintenance mode | Frequent releases | Frequent releases |
| Stack | PHP | Meteor, MongoDB | Go and Vue |
| Views | Kanban board | Kanban with swimlanes | List, Gantt, table, Kanban |
| Licence | MIT | MIT | AGPL-3.0 |

More boards are in [open-source Trello alternatives](/collections/open-source-trello-alternatives/). More permissive software is under [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/kanboard/kanboard> (29 Sep 2026)
- Licence file — <https://github.com/kanboard/kanboard/blob/main/LICENSE>
- Features — <https://kanboard.org>
- Docker guide — <https://docs.kanboard.org/v1/admin/docker/>
