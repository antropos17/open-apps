---
name: Taiga
repoUrl: https://github.com/taigaio/taiga-back
projectType: real-app
category: productivity
summary: Agile project management for teams that run Scrum or Kanban — backlogs and sprints with
  burndown charts, boards with swimlanes and WIP limits, epics and subtasks — self-hosted with Docker
  or on Taiga's hosted service. The backend is Django under MPL-2.0; the web front end is AGPL-3.0.
description: Agile project management with Scrum backlogs, sprints and Kanban boards, self-hosted or
  hosted.
platforms:
  - web
  - linux
licenses:
  - mpl-2.0
  - agpl-3.0
links:
  github: https://github.com/taigaio/taiga-back
  website: https://taiga.io
  docs: https://docs.taiga.io
distribution:
  channels:
    - type: self-host
      label: Production setup with Docker
      url: https://docs.taiga.io/setup-production.html
      verified: true
    - type: web-app
      label: Hosted Taiga
      url: https://tree.taiga.io
      verified: true
tags:
  - self-hosted
  - productivity
  - web-app
bestFor:
  - Agile teams that switch between Scrum and Kanban and want both done well.
  - Replacing Jira Software's boards and backlogs for a product team.
  - Teams that value a clean interface over heavy configuration.
whyListed:
  - Scrum with backlogs, sprint task boards and burndown charts, and Kanban with swimlanes and WIP
    limits, in the same project.
  - Self-hostable with Docker, from the makers of Penpot.
  - Backend and front end both under OSI-approved licences.
caveats:
  - It does not describe itself as a Jira alternative; it is listed with them as an agile tracker
    with Scrum and Kanban.
  - The code is split across repositories — `taiga-back` (MPL-2.0), `taiga-front` (AGPL-3.0) and
    `taiga-docker` for installation — and has no tagged GitHub releases.
  - Anonymous telemetry is on by default (`ENABLE_TELEMETRY=True` in the Docker setup).
relations:
  - type: alternative-to
    to: jira
    evidence:
      type: editorial
      url: https://taiga.io
      checkedAt: 2026-09-29
seo:
  title: "Taiga Review: Self-Hosted Scrum and Kanban Tool"
  description: Taiga is a self-hostable agile project manager with Scrum backlogs, sprints, burndown
    charts and Kanban boards with WIP limits. MPL-2.0 and AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: taigaio
  repo: taiga-back
  url: https://github.com/taigaio/taiga-back
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Taiga is an agile project management tool for cross-functional teams, with Scrum and Kanban both built in and a project able to switch between them. It comes from Kaleidos, the company behind [Penpot](/apps/penpot/), and self-hosts with Docker or runs on Taiga's hosted service. Development is active on the backend and front end, though the project has no tagged GitHub releases and its code is spread across several repositories. Verified against the repository on 29 September 2026, at commit c8264ac.

## What it does

- **Kanban** with customisable workflows, epics and subtasks, several workflows with swimlanes, WIP limits, zoom levels and an archive for user stories.
- **Scrum** with a backlog, sprint planning, a sprint task board with swimlanes per user story, and burndown charts at project and sprint level.
- **Switching** a project from Kanban to Scrum and back.
- **An API** documented for building on top of Taiga.

## Who it is for, and who it is not for

**A good fit**

- Product teams running sprints who want boards and backlogs without Jira's administration.
- Organisations that want the tracker on their own servers.

**Look elsewhere**

- You need portfolios, Gantt scheduling and cost tracking. [OpenProject](/apps/openproject/) covers them.
- You want a tracker built around cycles, modules and an MCP server. [Plane](/apps/plane/) is the fit.

## How it compares

| | Taiga | [OpenProject](/apps/openproject/) | [Plane](/apps/plane/) |
|---|---|---|---|
| Focus | Agile Scrum and Kanban | Portfolio, agile and classic PM | Software issue tracking |
| Releases | No tagged GitHub releases | Tagged releases | Tagged releases |
| Licence | MPL-2.0 backend, AGPL-3.0 front end | GPL-3.0, paid Enterprise add-ons | AGPL-3.0 CE, closed Commercial Edition |

The full comparison is in [open-source Jira alternatives](/collections/open-source-jira-alternatives/). More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Licence in practice

The Django backend, `taiga-back`, is MPL-2.0; the web front end, `taiga-front`, is AGPL-3.0. Both are open source, but a modified front end you offer over a network falls under the AGPL's source-sharing terms. Taiga's documentation describes anonymous telemetry that helps its makers learn how Taiga is used; it is enabled in the default Docker configuration and can be turned off with `ENABLE_TELEMETRY`. A newer rewrite, published as `kaleidos-ventures/taiga`, has had no commits since December 2023.

## Verified sources

- Backend repository — <https://github.com/taigaio/taiga-back> (29 Sep 2026)
- Front-end repository — <https://github.com/taigaio/taiga-front>
- Docker setup — <https://github.com/taigaio/taiga-docker>
- Production setup and telemetry settings — <https://docs.taiga.io/setup-production.html>
- Features — <https://taiga.io>
