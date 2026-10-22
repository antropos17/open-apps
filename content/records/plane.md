---
name: Plane
repoUrl: https://github.com/makeplane/plane
projectType: real-app
category: productivity
stack: react
summary: A Django and React project management platform — work items, cycles, modules, saved views,
  pages and analytics — that you can self-host with Docker or Kubernetes, with an open-source MCP
  server for AI tools.
description: Plane is an AGPL-3.0 project management and issue tracking platform, self-hosted as the
  Community Edition or used on Plane Cloud, and one of the largest open-source Linear and Jira
  alternatives.
sourceDescription: Open-source Jira, Linear, Monday, and ClickUp alternative. Plane is a modern
  project management platform to manage tasks, sprints, docs, and triage.
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/makeplane/plane
  website: https://plane.so
  docs: https://docs.plane.so
distribution:
  channels:
    - type: self-host
      label: Docker Compose or Kubernetes
      url: https://developers.plane.so/self-hosting/overview
      verified: true
    - type: web-app
      label: Plane Cloud
      url: https://app.plane.so
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
  - web-app
bestFor:
  - Replacing Linear or Jira on your own servers with a mature, widely used tool.
  - Cycles, modules and saved views for software teams that plan in sprints.
  - Letting Claude Code, Cursor or other MCP clients read and change work items.
whyListed:
  - Among the most-starred open-source project management tools, in development since 2022.
  - Self-hosts with Docker Compose or Kubernetes, with an instance admin panel.
  - The MCP server is open source and works with a self-hosted instance over stdio.
caveats:
  - Open-core. The self-hosted Community Edition matches Plane Cloud's free tier; every paid plan
    needs the closed-source Commercial Edition.
  - The MCP server's OAuth transport needs Plane Cloud or the Commercial Edition; a Community Edition
    instance uses the local stdio mode.
relations:
  - type: alternative-to
    to: linear
    evidence:
      type: self-described
      url: https://github.com/makeplane/plane
      quote: Open-source Jira, Linear, Monday, and ClickUp alternative.
      checkedAt: 2026-09-29
  - type: alternative-to
    to: jira
    evidence:
      type: self-described
      url: https://github.com/makeplane/plane
      quote: Open-source Jira, Linear, Monday, and ClickUp alternative.
      checkedAt: 2026-09-29
seo:
  title: Plane – Open Source Linear & Jira Alternative, Self-Hosted
  description: Plane is self-hostable project management with work items, cycles, modules, views and
    pages, plus an MCP server. AGPL-3.0 Linear and Jira alternative.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: makeplane
  repo: plane
  url: https://github.com/makeplane/plane
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Plane is the default choice for a self-hosted Linear or Jira replacement: it is one of the most-starred open-source project management tools, in development since 2022, and covers work items, cycles, modules, views, pages and analytics. It is also open-core, and that matters when you compare it with Linear feature by feature: the self-hosted Community Edition is AGPL and matches Plane Cloud's free tier, while governance features live in a closed Commercial Edition. Verified against the repository on 29 September 2026, at release v1.4.2.

## What it does

**Work items** with a rich-text editor, attachments, sub-properties and links. **Cycles** time-box the team's work with burn-down charts. **Modules** split a large project into manageable parts. **Views** save filters and share them. **Pages** hold docs and notes that can be turned into work items. **Analytics** shows trends and blockers across the workspace.

For AI tools, Plane publishes an MCP server, MIT-licensed, that Cursor, Claude Code, Claude Desktop, VS Code and other MCP clients can use. On a Community Edition instance, use its stdio transport; the OAuth transport needs Plane Cloud or the Commercial Edition.

## Editions, in plain terms

| | Community Edition | Commercial Edition |
|---|---|---|
| Licence | AGPL-3.0, open source | Closed source |
| Features | Same as Plane Cloud's free tier | Full parity with Plane Cloud, including paid plans |
| Upgrading | Switch to the Commercial Edition first | Upgrade in place; 12 free seats per workspace |

Plane's documentation says there is no hidden code limiting modifications to the Community Edition and no forced migration between editions. Before choosing it, check which features you rely on in Linear are on Plane's free tier.

## Who it is for, and who it is not for

**A good fit**

- Software teams moving off Linear or Jira who want their data on their own servers.
- Organisations that value a large, established project over the newest features.

**Look elsewhere**

- You want AI agents to take issues like teammates on a self-hosted instance. [It's a Plan](/apps/itsaplan/) is built around that.
- You want something much lighter to run. [Kaneo](/apps/kaneo/) is a small MIT app.

## How it compares

| | Plane | [It's a Plan](/apps/itsaplan/) | [Kaneo](/apps/kaneo/) |
|---|---|---|---|
| Maturity | Since 2022, very large community | Since July 2026 | Since December 2024 |
| AI agents | MCP server for outside tools | Agents as project members | MCP |
| Licence | AGPL-3.0 CE, closed Commercial Edition | AGPL-3.0 | MIT |

The comparison continues in [open-source Linear alternatives](/collections/open-source-linear-alternatives/). More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/makeplane/plane> (29 Sep 2026)
- Licence file — <https://github.com/makeplane/plane/blob/preview/LICENSE.txt>
- Editions — <https://developers.plane.so/self-hosting/editions-and-versions>
- MCP server — <https://developers.plane.so/dev-tools/mcp-server>, <https://github.com/makeplane/plane-mcp-server>
