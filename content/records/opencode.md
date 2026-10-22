---
name: OpenCode
repoUrl: https://github.com/anomalyco/opencode
projectType: real-app
category: developer-tools
summary: A terminal coding agent with a build agent that edits and runs commands, a read-only plan
  agent, and any model from dozens of providers — plus a beta desktop app for macOS, Windows and
  Linux.
description: OpenCode is an MIT-licensed AI coding agent for the terminal, with a beta desktop app,
  that works with models from many providers, including local ones.
sourceDescription: The open source coding agent.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/anomalyco/opencode
  website: https://opencode.ai
  docs: https://opencode.ai/docs
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases (CLI and desktop builds)
      url: https://github.com/anomalyco/opencode/releases/latest
      verified: true
    - type: website
      label: opencode.ai downloads
      url: https://opencode.ai/download
      verified: true
tags:
  - cli
  - developer-tools
  - foss-alternative
  - desktop-app
bestFor:
  - A Claude Code-style agent in the terminal that is not tied to one model vendor.
  - Switching between a full-access build agent and a read-only plan agent with one key.
  - Using a GitHub Copilot or ChatGPT Plus/Pro account you already pay for.
whyListed:
  - MIT-licensed, installable through npm, Homebrew, Scoop, Chocolatey, pacman, mise and Nix.
  - Works with many model providers, including local models, and ships builds for all three desktop
    platforms.
caveats:
  - It does not describe itself as a Claude Code alternative; it is listed with them because it does
    the same job — an agent in your terminal that reads, edits and runs your code.
  - The desktop app is marked beta.
  - Zen, Go and Enterprise are paid offerings from the same team; the agent itself does not need
    them.
relations:
  - type: alternative-to
    to: claude-code
    evidence:
      type: editorial
      url: https://github.com/anomalyco/opencode
      checkedAt: 2026-09-29
seo:
  title: OpenCode – Open Source AI Coding Agent for the Terminal
  description: OpenCode is an MIT terminal coding agent with build and plan modes and any model,
    including local ones, plus a beta desktop app for Mac, Windows and Linux.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: anomalyco
  repo: opencode
  url: https://github.com/anomalyco/opencode
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
OpenCode gives you Claude Code's way of working — an agent in the terminal that reads the repository, edits files and runs commands — without tying you to one model vendor. It is MIT-licensed, had over 200,000 GitHub stars when checked, and other tools build on it: [OpenWork](/apps/openwork/) is built on OpenCode, and the [Kilo Code](/apps/kilo-code/) CLI is a fork of it. Verified against the repository on 29 September 2026, at release v1.18.33.

## What it does

OpenCode runs as a terminal UI in your project. Two built-in agents switch with the `Tab` key:

- **build** — the default, full-access agent for development work.
- **plan** — read-only; it denies file edits by default and asks before running shell commands, for exploring an unfamiliar codebase or planning a change.

A **general** subagent handles multi-step searches and can be called with `@general`. According to opencode.ai, it connects to models from dozens of providers through Models.dev, including local models, and you can sign in with a GitHub Copilot or ChatGPT Plus/Pro account instead of an API key. Sessions can be shared as links.

A desktop app (beta) wraps the same agent for macOS, Windows and Linux.

## Who it is for, and who it is not for

**A good fit**

- Developers who like working with a terminal agent and want to pick the model per task.
- Teams that want to read and modify the agent they run.

**Look elsewhere**

- You want the agent inside VS Code or JetBrains with diffs in the editor — see [Cline](/apps/cline/) or [Kilo Code](/apps/kilo-code/).
- You want to run several agents in parallel worktrees from one window — see [Emdash](/apps/emdash/).

## How it compares

| | OpenCode | [Qwen Code](/apps/qwen-code/) | [Goose](/apps/goose/) |
|---|---|---|---|
| Focus | Coding agent | Coding agent | General-purpose agent |
| Interfaces | Terminal, desktop (beta) | Terminal, desktop, web, IDE, chat apps | Desktop, CLI, API |
| Licence | MIT | Apache-2.0 | Apache-2.0 |

The full comparison is in [open-source Claude Code alternatives](/collections/open-source-claude-code-alternatives/). More MIT tools are under [MIT apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/anomalyco/opencode> (29 Sep 2026)
- Releases — <https://github.com/anomalyco/opencode/releases>
- Project site — <https://opencode.ai>
