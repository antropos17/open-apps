---
name: Vikunja
repoUrl: https://github.com/go-vikunja/vikunja
projectType: real-app
category: productivity
summary: A self-hosted to-do and project app in Go and Vue — projects and subprojects, list, Gantt,
  table and Kanban views, reminders, repeating tasks, labels and sharing — with importers for Todoist,
  Trello and Microsoft To-Do, and a hosted Vikunja Cloud.
description: Vikunja is an AGPL-3.0 task manager you host yourself, with list, Kanban, Gantt and table
  views, team sharing and migration from Todoist and Trello.
sourceDescription: The task manager you actually own.
platforms:
  - web
  - linux
  - macos
  - windows
licenses:
  - agpl-3.0
  - gpl-3.0
links:
  github: https://github.com/go-vikunja/vikunja
  website: https://vikunja.io
  docs: https://vikunja.io/docs/
distribution:
  channels:
    - type: self-host
      label: Docker, packages or a single binary
      url: https://vikunja.io/docs/installing/
      verified: true
    - type: github-releases
      label: Binaries and Linux packages
      url: https://github.com/go-vikunja/vikunja/releases/latest
      verified: true
    - type: web-app
      label: Vikunja Cloud
      url: https://vikunja.cloud/
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
  - web-app
bestFor:
  - Moving personal or household to-dos off Todoist onto your own server.
  - Small teams that want Trello-style boards plus lists and a Gantt chart.
  - Homelabs that want one small binary instead of a heavy stack.
whyListed:
  - Built-in migration from Todoist, Trello and Microsoft To-Do.
  - Four views of the same tasks — list, Gantt, table and Kanban.
  - Releases for Linux, macOS and Windows as binaries, plus deb, rpm, apk and Arch packages.
caveats:
  - Admin panel, audit logs and time tracking for self-hosted instances are planned for the paid
    Vikunja Pro, in private beta when checked.
  - The maintainers say LLM-assisted coding tools are used in parts of the codebase.
relations:
  - type: alternative-to
    to: todoist
    evidence:
      type: self-described
      url: https://vikunja.io/compare/todoist
      quote: Todoist alternative you can self-host.
      checkedAt: 2026-09-29
  - type: alternative-to
    to: trello
    evidence:
      type: self-described
      url: https://vikunja.io/compare/trello
      quote: Trello alternative with Kanban, Gantt, list, and table views.
      checkedAt: 2026-09-29
seo:
  title: Vikunja – Open Source Todoist & Trello Alternative
  description: Vikunja is a self-hosted to-do and project app with list, Kanban, Gantt and table views
    and importers for Todoist and Trello. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: go-vikunja
  repo: vikunja
  url: https://github.com/go-vikunja/vikunja
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Vikunja is the to-do app for people who want Todoist's ease on their own server. It organises tasks in projects and subprojects, shows them as a list, a Gantt chart, a table or a Kanban board, and imports your existing tasks from Todoist, Trello or Microsoft To-Do. It is AGPL-3.0, ships as a single binary or a Docker image, and has a hosted Vikunja Cloud if you would rather not run it. Verified against the repository on 29 September 2026, at release v2.6.0.

## What it does

- **Projects and subprojects** to group related work, shared with other users or whole teams, with assignees.
- **Four views** — list, Gantt, table and Kanban — over the same tasks.
- **Reminders, due dates, repeating tasks and subtasks.**
- **Quick Add Magic** — type a task with a date, labels or assignees in one line and Vikunja fills in the fields.
- **Migration** from Todoist, Trello and Microsoft To-Do.
- **An OpenAPI-documented REST API** for scripts and other clients.

## Who it is for, and who it is not for

**A good fit**

- Self-hosters and households who want a private to-do list they can reach from any browser.
- Small teams that need boards and lists without a full project management suite.

**Look elsewhere**

- You want a board-first tool with swimlanes and WIP limits. [WeKan](/apps/wekan/) and [Kanboard](/apps/kanboard/) focus on Kanban.
- You need sprints, portfolios and time tracking for a larger organisation. [OpenProject](/apps/openproject/) covers it.

## How it compares

| | Vikunja | [WeKan](/apps/wekan/) | [Kanboard](/apps/kanboard/) |
|---|---|---|---|
| Views | List, Gantt, table, Kanban | Kanban boards with swimlanes | Kanban board |
| Importers | Todoist, Trello, Microsoft To-Do | Trello, Jira, Asana, CSV and more | Not a focus |
| Stack | Go and Vue | Meteor, MongoDB | PHP |
| Licence | AGPL-3.0 | MIT | MIT |

More boards are in [open-source Trello alternatives](/collections/open-source-trello-alternatives/). More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Licence in practice

Most of the repository is AGPL-3.0-or-later; the `desktop/` wrapper is GPL-3.0-or-later. Vikunja Cloud is the maintainers' hosted service, and Vikunja Pro — an admin panel, audit logs and time tracking for instances you host yourself — was in private beta when checked.

## Verified sources

- Repository and README — <https://github.com/go-vikunja/vikunja> (29 Sep 2026)
- Licence file — <https://github.com/go-vikunja/vikunja/blob/main/LICENSE>
- Features — <https://vikunja.io/features/>
- Comparisons — <https://vikunja.io/compare/todoist>, <https://vikunja.io/compare/trello>
- Vikunja Pro — <https://vikunja.io/pro/>
