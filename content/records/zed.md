---
name: Zed
repoUrl: https://github.com/zed-industries/zed
projectType: real-app
category: developer-tools
summary: A fast code editor with built-in AI agents, edit predictions and live collaboration, from
  the creators of Atom and Tree-sitter. It is native and written in Rust, works with your own model
  keys or local models through Ollama, and runs outside agents such as Claude Agent, Codex and
  OpenCode over ACP.
description: A fast AI code editor for macOS, Windows and Linux with agents, edit prediction and live
  collaboration.
sourceDescription: Code at the speed of thought – Zed is a high-performance, multiplayer code editor
  from the creators of Atom and Tree-sitter.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - gpl-3.0
  - apache-2.0
links:
  github: https://github.com/zed-industries/zed
  website: https://zed.dev
  docs: https://zed.dev/docs
distribution:
  channels:
    - type: website
      label: zed.dev downloads
      url: https://zed.dev/download
      verified: true
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/zed-industries/zed/releases/latest
      verified: true
tags:
  - desktop-app
  - developer-tools
  - foss-alternative
bestFor:
  - An AI-capable editor that is not a fork of VS Code.
  - Using Claude Agent, Codex or OpenCode inside the editor through ACP.
  - Pair programming with real-time collaborative editing.
whyListed:
  - The editor is free, GPL-3.0 with Apache-2.0 parts, and builds for macOS, Windows and Linux.
  - AI works with your own API keys or local models at no cost from Zed.
caveats:
  - It does not describe itself as a Cursor alternative; it is listed with them as an AI-first editor
    that does the same job without being built on VS Code.
  - Zed collects telemetry (file extensions, features used, project statistics) and crash reports;
    both can be turned off in settings, and the telemetry log shows what was sent.
  - Zed's hosted models and unlimited edit predictions need a paid plan; the free plan includes 2,000
    accepted edit predictions.
relations:
  - type: alternative-to
    to: cursor
    evidence:
      type: editorial
      url: https://zed.dev/ai
      checkedAt: 2026-09-29
seo:
  title: "Zed Review: Fast AI Code Editor"
  description: Zed is a fast, native code editor with an AI agent panel, edit predictions, your own
    model keys or Ollama, outside agents and live collaboration. GPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: zed-industries
  repo: zed
  url: https://github.com/zed-industries/zed
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Zed is the open-source pick for people who want an AI editor but not another VS Code fork. It is a native editor written in Rust by the team behind Atom and Tree-sitter, with an agent panel, next-edit predictions and multiplayer editing built in, and it can host outside agents such as Claude Agent, Codex and OpenCode. The source is GPL-3.0-or-later, with Apache-2.0 components where marked. Verified against the repository on 29 September 2026, at release v1.21.0.

## What it does

- **Agent panel.** Chat with an agent that edits across the project, using Zed's hosted models, your own API keys from many providers, or local models through Ollama or LM Studio.
- **External agents.** Bring Claude Agent, Codex or OpenCode into the editor over the Agent Client Protocol (ACP).
- **Edit prediction.** Zeta, Zed's model, predicts your next edit as you type.
- **Collaboration.** Real-time multiplayer editing.

## Who it is for, and who it is not for

**A good fit**

- Developers who find VS Code-based editors slow and want AI features in a native app.
- Anyone who wants to use Claude Agent or Codex with an editor's diff view instead of a bare terminal.

**Look elsewhere**

- You want to keep VS Code and its extensions — add [Cline](/apps/cline/) or [Kilo Code](/apps/kilo-code/) instead.
- You want no telemetry without changing settings — Zed's has to be turned off.

## Licence in practice

The editor is free forever on the Personal plan, including unlimited use with your own API keys or external agents. Zed's Pro plan ($10 a month) adds unlimited edit predictions and $5 of hosted-model tokens; Business is $30 per seat a month. More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

The comparison continues in [open-source Cursor alternatives](/collections/open-source-cursor-alternatives/).

## Verified sources

- Repository and README — <https://github.com/zed-industries/zed> (29 Sep 2026)
- Licence files — <https://github.com/zed-industries/zed/blob/main/LICENSE-GPL>, <https://github.com/zed-industries/zed/blob/main/LICENSE-APACHE>
- AI features — <https://zed.dev/ai>
- Pricing — <https://zed.dev/pricing>
- Telemetry — <https://zed.dev/docs/telemetry>
