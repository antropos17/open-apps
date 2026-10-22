---
name: ToolJet
repoUrl: https://github.com/ToolJet/ToolJet
projectType: real-app
category: developer-tools
stack: react
summary: A platform for internal tools — 80+ components, a built-in database, 90+ data sources,
  JavaScript and Python in apps, multiplayer editing and an MCP server for coding agents — AGPL
  Community Edition, with AI app generation and workflows in the paid ToolJet AI edition.
description: ToolJet is an AGPL, self-hostable platform for building internal tools, admin panels and
  dashboards, with a paid enterprise edition that adds AI generation and workflows.
sourceDescription: Open-source foundation of ToolJet AI - the enterprise app generation platform for
  internal tools, dashboards, business applications, workflows and AI agents. Build visually, from a
  prompt, or from Claude Code, Codex and Cursor over MCP 🚀
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/ToolJet/ToolJet
  website: https://tooljet.com
  docs: https://docs.tooljet.com
distribution:
  channels:
    - type: self-host
      label: Self-hosting guides
      url: https://docs.tooljet.com/docs/setup/
      verified: true
    - type: web-app
      label: ToolJet Cloud
      url: https://tooljet.com
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - developer-tools
  - web-app
bestFor:
  - Internal tools that need a small database of their own beside external sources.
  - Teams that want Python as well as JavaScript inside their apps.
  - Letting Claude Code, Codex or Cursor build and edit apps through MCP.
whyListed:
  - The Community Edition covers the visual builder, ToolJet Database, 90+ data sources and SSO.
  - In development since 2021, with an LTS release in September 2026.
  - Deployment guides for Docker, Kubernetes, AWS, GCP, Azure, OpenShift and Helm.
caveats:
  - Open-core — ToolJet AI, workflows, modules, GitSync, multi-environment management and advanced
    access control are enterprise features, in submodules outside this repository.
  - Telemetry is enabled by default; set DISABLE_TOOLJET_TELEMETRY to turn it off.
  - The README's quick-start Docker image is tagged ee-lts-latest, the enterprise build.
relations:
  - type: alternative-to
    to: retool
    evidence:
      type: self-described
      url: https://tooljet.com/tooljet-vs-retool
      quote: Is ToolJet a Retool alternative that I can self-host for free? Yes.
      checkedAt: 2026-09-29
seo:
  title: ToolJet – Open Source Retool Alternative for Internal Tools
  description: ToolJet builds internal tools and admin panels with 80+ components, a built-in database
    and 90+ data sources. AGPL core; AI features are paid.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: ToolJet
  repo: ToolJet
  url: https://github.com/ToolJet/ToolJet
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
ToolJet is a full internal-tool builder with its own database, and it answers "Is ToolJet a Retool alternative that I can self-host for free?" with "Yes" on its comparison page. The repository describes itself as the open-source foundation of ToolJet AI: the Community Edition is AGPL and complete for visual building, while AI generation, workflows and governance features sit in the paid edition. Verified against the repository on 29 September 2026, at release v3.20.233-lts.

## What it does

**Community Edition**

- **Visual app builder** with 80+ components — tables, charts, forms, lists and more — and multi-page apps.
- **ToolJet Database**, a built-in no-code database.
- **90+ data sources** across databases, APIs, cloud storage and SaaS tools.
- **JavaScript and Python** inside apps.
- **Multiplayer editing**, inline comments and mentions, and granular access control.
- **Plugins and connectors** through the ToolJet CLI.
- **Security**: AES-256-GCM encryption, proxy-only data flow and SSO support.

**Beyond the Community Edition**, the ToolJet AI edition adds app generation from prompts, an AI query builder, an agent builder, workflows, modules, audit logs, SCIM, multiple environments, GitSync and white-labelling. The MCP server, which lets Claude Code, Codex, Grok Build or Cursor build apps, is in beta.

## Who it is for, and who it is not for

**A good fit**

- Teams building operational apps that span several databases and SaaS tools.
- Organisations that want a self-hosted builder and may later buy enterprise governance.

**Look elsewhere**

- You want every feature under a permissive licence. [Appsmith](/apps/appsmith/) is Apache-2.0.
- You need workflow automation without a paid plan. [Budibase](/apps/budibase/) includes automations in its open-source plan.

## How it compares

| | ToolJet | [Appsmith](/apps/appsmith/) | [Budibase](/apps/budibase/) |
|---|---|---|---|
| Built-in database | ToolJet Database | No | Budibase data tables |
| Hosted option | ToolJet Cloud | Appsmith Cloud | Budibase Cloud |
| Licence | AGPL-3.0, enterprise submodules | Apache-2.0 | GPL-3.0, BSL pro package |

The full comparison is in [open-source Retool alternatives](/collections/open-source-retool-alternatives/).

## Licence in practice

The repository is AGPL-3.0. Enterprise code lives in two Git submodules, `frontend/ee` and `server/ee`, that point to separate ToolJet repositories. The Community Edition sends telemetry to ToolJet every 24 hours unless `DISABLE_TOOLJET_TELEMETRY=true` is set. More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/ToolJet/ToolJet> (29 Sep 2026)
- Licence file — <https://github.com/ToolJet/ToolJet/blob/main/LICENSE>
- Submodules — <https://github.com/ToolJet/ToolJet/blob/main/.gitmodules>
- Environment settings (telemetry) — <https://github.com/ToolJet/ToolJet/blob/main/.env.example>
- ToolJet vs Retool — <https://tooljet.com/tooljet-vs-retool>
