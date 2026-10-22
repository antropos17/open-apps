---
name: Kilo Code
repoUrl: https://github.com/Kilo-Org/kilocode
projectType: real-app
category: developer-tools
summary: An AI coding agent for VS Code, JetBrains IDEs and the terminal with Code, Plan, Ask and
  Debug agents, inline autocomplete and 500+ models at provider prices — MIT-licensed, with a
  paid cloud side for credits, cloud agents and code reviews.
description: Kilo Code is an MIT-licensed AI coding agent and autocomplete for VS Code, JetBrains and
  the command line, with your own keys, local models or pay-as-you-go credits at no markup.
sourceDescription: Kilo is the all-in-one agentic engineering platform. Build, ship, and iterate
  faster with the most popular open source coding agent.
platforms:
  - macos
  - windows
  - linux
licenses:
  - mit
links:
  github: https://github.com/Kilo-Org/kilocode
  website: https://kilo.ai
  docs: https://kilo.ai/docs
distribution:
  channels:
    - type: other
      label: VS Code Marketplace
      url: https://marketplace.visualstudio.com/items?itemName=kilocode.Kilo-Code
      verified: true
    - type: other
      label: JetBrains Marketplace
      url: https://plugins.jetbrains.com/plugin/28350-kilo-code
      verified: true
    - type: github-releases
      label: CLI binaries (GitHub Releases)
      url: https://github.com/Kilo-Org/kilocode/releases
      verified: true
tags:
  - developer-tools
  - foss-alternative
  - cli
bestFor:
  - Cursor-style agent work and tab-to-accept autocomplete inside VS Code or a JetBrains IDE.
  - Switching between 500+ models mid-task and paying provider rates.
  - Running the same agent unattended in CI with `kilo run --auto`.
whyListed:
  - Compares itself directly with Cursor and GitHub Copilot on its own site, and is MIT-licensed.
  - One agent across VS Code, JetBrains and the terminal, with Code, Plan, Ask and Debug modes.
caveats:
  - Getting started uses a Kilo account; bring-your-own-key and local models are supported.
  - Cloud Agents and automated code reviews run on Kilo's hosted service at app.kilo.ai.
  - The CLI is a fork of OpenCode, so the two overlap heavily in the terminal.
relations:
  - type: alternative-to
    to: cursor
    evidence:
      type: self-described
      url: https://kilo.ai
      quote: Why switch from Cursor to Kilo Code?
      checkedAt: 2026-09-29
  - type: alternative-to
    to: github-copilot
    evidence:
      type: self-described
      url: https://kilo.ai
      quote: How does Kilo Code compare to GitHub Copilot?
      checkedAt: 2026-09-29
seo:
  title: Kilo Code – Open Source Cursor & Copilot Alternative
  description: Kilo Code is an MIT AI coding agent with autocomplete for VS Code, JetBrains and the
    terminal, using 500+ models, your own keys or local models.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Kilo-Org
  repo: kilocode
  url: https://github.com/Kilo-Org/kilocode
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Kilo Code is the option that goes head to head with both Cursor and GitHub Copilot: its own site asks "Why switch from Cursor to Kilo Code?" and compares itself with Copilot, and the extension does both jobs — an agent that writes and debugs across files, and ghost-text autocomplete. The code is MIT; the business is model credits at provider rates plus hosted cloud agents and code reviews. Verified against the repository on 29 September 2026, at release v7.8.1.

## What it does

- **Agents you switch between.** Code (the default), Plan (architecture and implementation plans), Ask (answers without touching files) and Debug, plus custom agents.
- **Autocomplete.** Inline ghost-text suggestions, tab to accept.
- **Terminal and browser control**, and a marketplace for agents, skills, MCP servers and plugins.
- **500+ models**, switchable mid-task, through a Kilo account at the provider's rate with no markup, your own API keys, or local models.
- **Autonomous mode.** `kilo run --auto` approves permission prompts unless a rule denies them, for CI pipelines.

## Who it is for, and who it is not for

**A good fit**

- Developers who want to stay in VS Code or a JetBrains IDE rather than move to Cursor.
- Teams that want Copilot-style completion and an agent in one extension, with open pricing.

**Look elsewhere**

- You want nothing to leave your network, with no vendor account at all — see [twinny](/apps/twinny/).
- You want a different, native editor — see [Zed](/apps/zed/).

## How it compares

| | Kilo Code | [Cline](/apps/cline/) | [twinny](/apps/twinny/) |
|---|---|---|---|
| Editors | VS Code, JetBrains, CLI | VS Code, JetBrains, CLI, desktop | VS Code |
| Autocomplete | Yes | Not listed in its README | Yes |
| Paid side | Credits, cloud agents, code reviews | Pricing at cline.bot | Team gateway licence |
| Licence | MIT | Apache-2.0 | MIT |

Kilo appears in both [open-source Cursor alternatives](/collections/open-source-cursor-alternatives/) and [open-source GitHub Copilot alternatives](/collections/open-source-github-copilot-alternatives/). More MIT tools are under [MIT apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/Kilo-Org/kilocode> (29 Sep 2026)
- Privacy policy — <https://github.com/Kilo-Org/kilocode/blob/main/PRIVACY.md>
- Project site and FAQ — <https://kilo.ai>
