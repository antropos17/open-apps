---
name: It's a Plan
repoUrl: https://github.com/croffasia/itsaplan
projectType: real-app
category: productivity
summary: A self-hosted issue tracker where AI agents are project members that take issues on the same
  board as people. It covers projects, boards, cycles, custom fields, docs and dashboards, and agents
  run on the instance or on your own machine through Claude Code, Codex and other coding CLIs.
description: A self-hosted issue tracker where AI agents take issues on the same board as your team.
sourceDescription: Open-source, self-hosted alternative to Linear and Plane. Project management and
  issue tracking where teams and AI agents work side by side to plan and ship products.
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/croffasia/itsaplan
  website: https://itsaplan.dev
distribution:
  channels:
    - type: self-host
      label: Docker Compose
      url: https://github.com/croffasia/itsaplan
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
  - developer-tools
bestFor:
  - Teams that want to assign issues to AI agents the same way they assign them to people.
  - Handing a ticket to Claude Code or Codex on your own machine and getting a linked pull request
    back.
  - Self-hosted project management with an MCP server for outside assistants.
whyListed:
  - Agents are first-class project members with permissions, not a chat sidebar.
  - External agents run under your own account on your own machine through a small runner.
  - Pull requests from GitHub, GitLab, Gitea, Forgejo and Bitbucket move linked issues automatically.
caveats:
  - Early-stage — the repository was created in July 2026 and the README warns of breaking changes
    before the first stable release.
  - Instance telemetry is on by default — one daily snapshot; set TELEMETRY_DISABLED=1 or
    DO_NOT_TRACK=1 to stop it.
  - Contributors sign a contributor licence agreement with the project owner.
relations:
  - type: alternative-to
    to: linear
    evidence:
      type: self-described
      url: https://github.com/croffasia/itsaplan
      quote: Open-source, self-hosted alternative to Linear and Plane.
      checkedAt: 2026-09-29
seo:
  title: "It's a Plan Review: Linear Alternative with AI"
  description: It's a Plan is a self-hosted issue tracker where AI agents take issues like teammates,
    via Claude Code or Codex, with a REST API and MCP. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: croffasia
  repo: itsaplan
  url: https://github.com/croffasia/itsaplan
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
It's a Plan is a self-hosted issue tracker built on one idea the established tools are only starting to add: an AI agent is a member of the project. It gets a role, permissions and an assignee slot, and takes issues from the same board as the people on the team — either running on the instance or on your own machine through Claude Code, Codex or another coding CLI. Without agents it is still a complete tracker. It is AGPL-3.0 and only a few months old. Verified against the repository on 29 September 2026, at release v1.2.1.

## Agents as teammates

There are two kinds of agent. **Internal agents** run on the instance with a model, system prompt, tools and reusable skills you configure — written inline or imported from a GitHub repository. **External agents** run on your computer under your own account: install the `@itsaplan/runner` package and it hands each task to Claude Code, Codex, Antigravity CLI, GitHub Copilot CLI, opencode, or any command that reads standard input. A run starts on an @mention in a comment, an assignment or a schedule, and each agent has a chat with its own history.

Around that sits the tracker: kanban, table, timeline and calendar views saved as tabs, cycles that roll unfinished work forward, custom fields and issue types, subtasks and issue links, dashboards with burnup and projected completion, docs with revision history, and freeform notes boards. A REST API with an OpenAPI reference, webhooks and an MCP server expose all of it, and pull requests from five forges link and move issues ("Fixes KEY-42").

## Who it is for, and who it is not for

**A good fit**

- Small teams already using coding agents who want tickets to be the handoff point.
- Anyone who wants Linear-style planning on their own server with their own model keys.

**Look elsewhere**

- You need a proven tracker for a large organisation today. [Plane](/apps/plane/) has been in production use since 2022.
- You want the simplest possible board. [Kaneo](/apps/kaneo/) is deliberately minimal.

## How it compares

| | It's a Plan | [Plane](/apps/plane/) | [Kaneo](/apps/kaneo/) |
|---|---|---|---|
| Agents as project members | Yes, internal and external | No — MCP server for outside tools | No |
| MCP | Built-in server | Separate MIT server | Yes |
| Licence | AGPL-3.0 | AGPL-3.0 Community Edition | MIT |
| Since | July 2026 | November 2022 | December 2024 |

All three are compared in [open-source Linear alternatives](/collections/open-source-linear-alternatives/).

## Licence and telemetry

The code is AGPL-3.0: self-host and modify freely, and publish your changes if you offer a modified version to others over a network. Contributors sign an individual CLA based on Apache's, which gives the project owner a licence to their contributions. A self-hosted instance sends one telemetry snapshot a day — versions, features used, delivery failures — until you set `TELEMETRY_DISABLED=1` or `DO_NOT_TRACK=1`; `TELEMETRY.md` lists every field. More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/croffasia/itsaplan> (29 Sep 2026)
- Telemetry — <https://github.com/croffasia/itsaplan/blob/main/TELEMETRY.md>
- Contributor licence agreement — <https://github.com/croffasia/itsaplan/blob/main/ICLA.md>
