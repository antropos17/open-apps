---
name: NextCoWork
repoUrl: https://github.com/AIDotNet/NextCoWork
projectType: real-app
category: developer-tools
summary: An Electron desktop workspace for coding agents — parallel agent sessions per workspace, an
  editor, a real PTY terminal, Git and a built-in browser, with per-call approval of tool use and a
  manifest-based plugin system.
description: NextCoWork is an Apache-2.0 desktop app for macOS, Windows and Linux that runs coding
  agents in tabbed workspaces with an editor, terminal, Git and browser, and asks before each tool
  call.
sourceDescription: Open Cowork - Opensource Claude Cowork for Windows & macOS & Linux.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/AIDotNet/NextCoWork
  website: https://nextco.work
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/AIDotNet/NextCoWork/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - developer-tools
bestFor:
  - Developers who want Cowork-style agents next to an editor, terminal and Git in one window.
  - Running several agent sessions side by side on different workspaces.
  - Extending the agent with plugins that add tools, editors or skills.
whyListed:
  - Frequent releases for all three desktop platforms on both Apple Silicon and Intel Macs.
  - Tool calls go through a per-call approval chain, with plan mode and subagents.
caveats:
  - Young and small — created in February 2026, three contributors, 640 stars when checked.
  - The project's website sells a pay-per-use model gateway; custom Anthropic- or OpenAI-compatible
    endpoints and Ollama are supported in the code but not documented in the README.
  - Aimed at software work rather than general office tasks.
relations:
  - type: alternative-to
    to: claude-cowork
    evidence:
      type: self-described
      url: https://github.com/AIDotNet/NextCoWork
      quote: Open Cowork - Opensource Claude Cowork for Windows & macOS & Linux.
      checkedAt: 2026-09-28
seo:
  title: NextCoWork – Open Source Desktop Workspace for Coding Agents
  description: NextCoWork runs coding agents in tabbed workspaces with an editor, terminal, Git and
    browser, asking before each tool call. Apache-2.0 desktop app.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: AIDotNet
  repo: NextCoWork
  url: https://github.com/AIDotNet/NextCoWork
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
NextCoWork calls itself an open-source Claude Cowork in its repository description, but the app is closer to an IDE built around agents: tabbed workspaces, parallel agent sessions, an editor, a real terminal, Git and a browser in one window. It is Apache-2.0 and ships builds for macOS, Windows and Linux. It is also young and small — three contributors, created in February 2026 — so treat it as a promising pick rather than a safe default. Verified against the repository on 28 September 2026, at release v2.2.12.

## What it does

Each workspace opens in its own tab with its own agent sessions, and streaming state stays separate per session. The agent kernel supports plan mode, subagents, background tasks, scheduled runs and a todo list it reconciles as it goes. Every tool call passes through an approval chain before it runs. Replies can include live HTML or SVG widgets rendered in a sandboxed frame.

Around the agent sits a workbench: a file explorer and editors, a PTY terminal, Git status, diff, log and branching, and a per-workspace browser. Plugins, declared in a `package.json` manifest with capability gates, can add commands, editors, views, agent tools and skills; the project publishes a `create-nextcowork-plugin` scaffold.

## Who it is for, and who it is not for

**A good fit**

- Developers who want agent sessions and the tools to check their output in the same app.
- Plugin authors — the plugin API is documented and MIT-licensed.

**Look elsewhere**

- Your work is documents and spreadsheets rather than code. [OpenWork](/apps/openwork/) and [Open Cowork](/apps/open-cowork/) are built for that.
- You want a project with a long track record. [Eigent](/apps/eigent/) has been releasing since 2025.

## Models

The website promotes a hosted gateway: a free account with models billed by usage. The source also defines custom upstream providers speaking the Anthropic or OpenAI protocols with your own base URL and key, and an Ollama sign-in. The README does not document either path, so expect to find them in Settings rather than in the docs.

## How it compares

| | NextCoWork | [OpenWork](/apps/openwork/) | [Open Cowork](/apps/open-cowork/) |
|---|---|---|---|
| Focus | Coding workspace | General file work | Documents, VM sandbox |
| Built-in editor, terminal, Git | Yes | No | No |
| Licence | Apache-2.0 | MIT app, commercial `ee/` | MIT, bundled Anthropic skills |

All of them are compared in [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).

## Licence in practice

The application is Apache-2.0. The plugin packages under `packages/` — the plugin API, CLI and scaffold — are MIT, so plugins can be written without Apache's patent and notice terms applying to them. More apps under this licence are in [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/AIDotNet/NextCoWork> (28 Sep 2026)
- Provider definitions — <https://github.com/AIDotNet/NextCoWork/blob/main/src/shared/domain/provider.ts>
- Project site — <https://nextco.work>
