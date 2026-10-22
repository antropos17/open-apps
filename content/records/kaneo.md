---
name: Kaneo
repoUrl: https://github.com/usekaneo/kaneo
projectType: real-app
category: productivity
stack: react
summary: A lightweight project management app built with Hono and React — board, list, calendar and
  Gantt views, a backlog, time tracking, rules that move tasks on repository activity, and a REST API
  and MCP integration — self-hosted or on Kaneo Cloud.
description: Kaneo is an MIT-licensed, self-hostable project management app with boards, lists,
  calendars and Gantt charts, GitHub and Gitea integration, a REST API and MCP.
sourceDescription: All you need. Nothing you don't. Open source project management that works for
  you, not against you.
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/usekaneo/kaneo
  website: https://kaneo.app
  docs: https://kaneo.app/docs
distribution:
  channels:
    - type: self-host
      label: Installation guide
      url: https://kaneo.app/docs/core/installation
      verified: true
    - type: web-app
      label: Kaneo Cloud
      url: https://cloud.kaneo.app
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
  - web-app
bestFor:
  - Small teams that find Linear or Jira heavier than they need.
  - A self-hosted tracker whose tasks move when pull requests and commits happen on GitHub or Gitea.
  - Keeping a permissive MIT licence on everything you deploy.
whyListed:
  - MIT, with no enterprise edition in the repository.
  - Frequent releases since the repository opened in December 2024.
  - GitHub and Gitea rules, webhooks, a REST API and MCP cover automation without a paid tier.
caveats:
  - Deliberately minimal — no AI agents of its own, and fewer planning features than Plane.
  - Kaneo Cloud is the hosted option beside the self-hosted install.
relations:
  - type: alternative-to
    to: linear
    evidence:
      type: repo-topic
      url: https://github.com/usekaneo/kaneo
      quote: linear-alternative
      checkedAt: 2026-09-29
seo:
  title: Kaneo – Open Source Self-Hosted Project Management
  description: Kaneo is a simple, self-hostable project manager with boards, lists, calendars and Gantt
    views, GitHub and Gitea rules, a REST API and MCP. MIT-licensed.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: usekaneo
  repo: kaneo
  url: https://github.com/usekaneo/kaneo
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Kaneo is the small, MIT-licensed option among self-hosted Linear alternatives: its tagline is "all you need, nothing you don't", and it sticks to it. Boards, lists, calendars and Gantt charts, a backlog, time tracking, and rules that move tasks when repository activity happens — without an enterprise edition or AI features of its own. Verified against the repository on 29 September 2026, at release v2.29.2.

## What it does

See work as a board, a list, a calendar or a Gantt chart, with a backlog, filters and search. Tasks carry descriptions, attachments, subtasks, dependencies, labels, comments and time tracking. Workspaces have invitations, custom roles, live updates and public project views. Custom columns and fields shape the workflow, and rules move tasks when things happen in a GitHub or Gitea repository. Notifications go in-app, by email, or through ntfy, Gotify and personal webhooks. For automation there are project webhooks, a REST API and an MCP integration.

## Who it is for, and who it is not for

**A good fit**

- Small teams that want a quick, readable tracker on their own server.
- Anyone who needs a permissive licence to embed or modify the tracker.

**Look elsewhere**

- You need cycles, modules and analytics at the scale of a larger organisation. [Plane](/apps/plane/) covers more.
- You want AI agents to pick up issues. [It's a Plan](/apps/itsaplan/) is built for that.

## How it compares

| | Kaneo | [Plane](/apps/plane/) | [It's a Plan](/apps/itsaplan/) |
|---|---|---|---|
| Scope | Lightweight tracker | Full project management | Tracker with AI agents as members |
| Licence | MIT | AGPL-3.0 CE, closed Commercial Edition | AGPL-3.0 |
| Hosted option | Kaneo Cloud | Plane Cloud | None in the README |

All three are in [open-source Linear alternatives](/collections/open-source-linear-alternatives/). More MIT apps are under [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/usekaneo/kaneo> (29 Sep 2026)
- Licence file — <https://github.com/usekaneo/kaneo/blob/main/LICENSE>
- Installation guide — <https://kaneo.app/docs/core/installation>
