---
name: Cline
repoUrl: https://github.com/cline/cline
projectType: real-app
category: developer-tools
summary: An autonomous coding agent for VS Code, the terminal and the desktop that plans, edits
  files across the project, runs commands and browses, asking for approval at each step — with any
  model, including local ones.
description: An AI coding agent for VS Code, the terminal and desktop that asks before every edit and command.
sourceDescription: Autonomous coding agent as an SDK, IDE extension, or CLI assistant.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/cline/cline
  website: https://cline.bot
  docs: https://docs.cline.bot
distribution:
  channels:
    - type: other
      label: VS Code Marketplace
      url: https://marketplace.visualstudio.com/items?itemName=saoudrizwan.claude-dev
      verified: true
    - type: github-releases
      label: Desktop app (GitHub Releases)
      url: https://github.com/cline/cline/releases
      verified: true
tags:
  - developer-tools
  - foss-alternative
  - cli
  - desktop-app
bestFor:
  - Adding an AI agent to the VS Code you already use instead of switching editors.
  - Reviewing every file edit as a diff and approving each command before it runs.
  - Running the same agent headless in CI with the CLI.
whyListed:
  - Plan and Act modes, checkpoints to undo the agent's work, and approval on every edit and command.
  - Works with Anthropic, OpenAI, Google, OpenRouter, Bedrock, Ollama, LM Studio or any
    OpenAI-compatible API.
caveats:
  - It does not describe itself as a Cursor alternative; it is listed with them because it brings an
    agent into VS Code, the editor Cursor is built on.
  - The JetBrains plugin is not open source; the README says so.
  - Anonymous usage telemetry (features used, errors, task completion) can be switched off in
    settings; code and conversations are not collected, according to the docs.
relations:
  - type: alternative-to
    to: cursor
    evidence:
      type: editorial
      url: https://github.com/cline/cline
      checkedAt: 2026-09-29
seo:
  title: "Cline Review: AI Coding Agent for VS Code"
  description: Cline is an Apache-2.0 coding agent for VS Code, the terminal and desktop that plans,
    edits and runs commands with your approval, using any model.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: cline
  repo: cline
  url: https://github.com/cline/cline
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Cline is the way to get an agentic editor without leaving VS Code. It reads the project, makes coordinated edits across files, runs commands in your terminal and fixes the errors it sees, and every edit shows up as a diff you can accept or revert. It now also runs as a CLI and a desktop app from the same core. Everything here is Apache-2.0 except the JetBrains plugin, which the README says is not open source. Verified against the repository on 29 September 2026, at release v4.1.21.

## What it does

- **Plan and Act.** Plan mode explores the codebase, asks questions and proposes a strategy; Act mode carries it out. Each edit and command waits for approval unless you turn on auto-approve.
- **Checkpoints.** Changes are tracked so you can undo the agent's work.
- **Rules and skills.** `.clinerules` files carry project conventions to the VS Code extension, CLI and JetBrains plugin.
- **Any model.** Anthropic, OpenAI, Google, OpenRouter, Vercel AI Gateway, Bedrock, Azure, Vertex, Cerebras, Groq, Ollama, LM Studio or any OpenAI-compatible endpoint.
- **Beyond the editor.** MCP servers and plugins, multi-agent teams, scheduled agents on cron, a headless CLI for CI, and connectors for Slack, Telegram, Discord and more.

## Who it is for, and who it is not for

**A good fit**

- VS Code users who want Cursor-style agent work in the editor they already have.
- Developers who want to see and approve each step, or bring their own model keys.

**Look elsewhere**

- You want a whole new, faster editor rather than an extension — see [Zed](/apps/zed/).
- You want fast inline completions more than an agent — see [twinny](/apps/twinny/).

## How it compares

| | Cline | [Kilo Code](/apps/kilo-code/) | [Zed](/apps/zed/) |
|---|---|---|---|
| Form | VS Code extension, CLI, desktop | VS Code and JetBrains extension, CLI | Standalone editor |
| Editors | VS Code; JetBrains (closed plugin) | VS Code, JetBrains | Zed itself |
| Licence | Apache-2.0 (JetBrains plugin closed) | MIT | GPL-3.0, Apache-2.0 parts |

The full comparison is in [open-source Cursor alternatives](/collections/open-source-cursor-alternatives/). More Apache-licensed tools are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/cline/cline> (29 Sep 2026)
- Releases — <https://github.com/cline/cline/releases>
- Telemetry — <https://docs.cline.bot/more-info/telemetry>
