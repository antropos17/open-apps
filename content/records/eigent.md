---
name: Eigent
repoUrl: https://github.com/eigent-ai/eigent
projectType: real-app
category: productivity
summary: A desktop app that hands your work to one AI agent or a whole team of specialised agents
  working in parallel, with any model including local ones. It is built on CAMEL-AI with Electron and
  FastAPI, and adds browser and terminal tools, MCP, skills and scheduled automations.
description: A desktop app that splits your work across a team of AI agents running in parallel, with any model.
sourceDescription: "Eigent: The Open Source Cowork Desktop - Local and Free Alternative to Claude
  Cowork and Codex"
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/eigent-ai/eigent
  website: https://www.eigent.ai
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/eigent-ai/eigent/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - productivity
  - self-hosted
bestFor:
  - Multi-step jobs that split naturally into parallel parts — research, then write, then build.
  - Recurring work that should run on a schedule while you are away.
  - Keeping accounts, chat history and model settings on your own machine with the local backend.
whyListed:
  - Apache-2.0 with no enterprise directory in the repository.
  - The multi-agent "workforce" mode is a different design from the single-agent apps in this
    category.
  - A documented local deployment keeps registration, history and provider settings in a local
    PostgreSQL database.
caveats:
  - The quick start connects to Eigent's cloud backend and needs an account. Fully local use means
    running the included server with Docker and PostgreSQL.
  - SSO, access control and custom development are sold as an enterprise offering, outside the
    repository.
relations:
  - type: alternative-to
    to: claude-cowork
    evidence:
      type: self-described
      url: https://github.com/eigent-ai/eigent
      quote: Local and Free Alternative to Claude Cowork and Codex
      checkedAt: 2026-09-28
seo:
  title: "Eigent Review: Claude Cowork Alternative"
  description: Eigent runs a workforce of AI agents in parallel on macOS, Windows and Linux, with any
    model and a local backend option. Apache-2.0, built on CAMEL-AI.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: eigent-ai
  repo: eigent
  url: https://github.com/eigent-ai/eigent
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Eigent is the Claude Cowork alternative to choose when one agent is not enough. Its headline mode is a "workforce": a task is broken into parts and handed to several specialised agents that work in parallel, on top of the CAMEL-AI multi-agent framework. It is Apache-2.0, ships desktop builds for all three platforms, and has been around since July 2025 — longer than most apps in this category. The catch is the default setup: the quick start talks to Eigent's cloud and wants an account, so running it locally is a deliberate step. Verified against the repository on 28 September 2026, at release v1.0.5.

## Single agent or workforce

Eigent offers two ways to work. **Single agent** is the familiar pattern — one agent with browser and terminal toolkits working through a task beside you. **Workforce** splits the job across multiple agents that coordinate and run at the same time, which suits long jobs with independent parts. Both can use MCP servers and skills, and **Automation** schedules recurring workflows so they run without you.

The model is your choice: cloud APIs, enterprise gateways, or local inference. The local deployment guide names vLLM, Ollama and LM Studio.

## Who it is for, and who it is not for

**A good fit**

- Research-and-build tasks where parallel agents save real time.
- Teams that want an Apache-2.0 codebase they can fork without a licence split.
- Anyone willing to run a small Docker stack to keep accounts and history local.

**Look elsewhere**

- You want to install an app and go, fully offline, with no server. [OpenWork](/apps/openwork/) needs no account for local use.
- You want commands sandboxed in a VM. [Open Cowork](/apps/open-cowork/) routes them through WSL2 or Lima.

## Running it locally

The desktop release works out of the box against Eigent's hosted backend. For a standalone setup, the repository's `server/` directory provides a FastAPI backend with PostgreSQL, started with `docker-compose up`; it handles local registration and login, model provider settings, chat history and MCP management, all in a local database. If you configure a cloud model or a remote MCP server, those requests still go to the provider you chose. Webhook-style app triggers need the server on a public domain.

## How it compares

| | Eigent | [OpenWork](/apps/openwork/) | [Open Cowork](/apps/open-cowork/) | [OpenWorker](/apps/openworker/) |
|---|---|---|---|---|
| Agents | Single or parallel workforce | Single | Single | Specialist "coworkers" |
| Licence | Apache-2.0 | MIT app, commercial `ee/` | MIT, bundled Anthropic skills | MIT |
| Local without account | With the Docker backend | Yes | Yes | Yes |
| Since | July 2025 | January 2026 | January 2026 | July 2026 |

See all of them compared in [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).

## Licence in practice

The whole repository is under the Apache License 2.0 — read and confirmed from the LICENSE file. There is no source-available directory; the enterprise features (SSO, access control, custom development) and the managed cloud are services Eigent sells, not code held back. Other Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/eigent-ai/eigent> (28 Sep 2026)
- Licence file — <https://github.com/eigent-ai/eigent/blob/main/LICENSE>
- Local deployment guide — <https://github.com/eigent-ai/eigent/blob/main/server/README_EN.md>
- Releases — <https://github.com/eigent-ai/eigent/releases>
