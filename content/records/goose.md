---
name: Goose
repoUrl: https://github.com/aaif-goose/goose
projectType: real-app
category: developer-tools
summary: A general-purpose AI agent built in Rust — a native desktop app, a CLI and an API — that
  writes and runs code but also handles research, writing and automation, with 15+ model providers
  and 70+ MCP extensions.
description: Goose is an Apache-2.0 AI agent for macOS, Windows and Linux that runs on your machine,
  works with many model providers, and is part of the Linux Foundation's Agentic AI Foundation.
sourceDescription: an open source, extensible AI agent that goes beyond code suggestions - install,
  execute, edit, and test with any LLM
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/aaif-goose/goose
  website: https://goose-docs.ai
  docs: https://goose-docs.ai/docs/quickstart
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases (desktop and CLI)
      url: https://github.com/aaif-goose/goose/releases/latest
      verified: true
    - type: website
      label: Installation guide
      url: https://goose-docs.ai/docs/getting-started/installation
      verified: true
tags:
  - desktop-app
  - cli
  - developer-tools
  - foss-alternative
bestFor:
  - An agent that codes but also researches, writes and automates, in one app.
  - Using an existing Claude, ChatGPT or Gemini subscription through ACP instead of API keys.
  - Building a custom agent distribution with preset providers and extensions for a company.
whyListed:
  - Native desktop app and CLI for all three desktop platforms, written in Rust.
  - Governed as a Linux Foundation project under the Agentic AI Foundation, not by one vendor.
caveats:
  - It does not describe itself as a Claude Code alternative; it is listed with them because it runs,
    edits and tests code on your machine with any model, but it is a general-purpose agent rather than
    a coding-only tool.
  - The repository moved from block/goose to aaif-goose/goose; old links redirect.
relations:
  - type: alternative-to
    to: claude-code
    evidence:
      type: editorial
      url: https://github.com/aaif-goose/goose
      checkedAt: 2026-09-29
seo:
  title: Goose – Open Source AI Agent Desktop App and CLI
  description: Goose is an Apache-2.0 AI agent with a desktop app, CLI and API for macOS, Windows and
    Linux, working with 15+ model providers and 70+ MCP extensions.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: aaif-goose
  repo: goose
  url: https://github.com/aaif-goose/goose
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Goose is the pick when you want one agent for coding and everything around it. It started at Block, now lives under the Agentic AI Foundation at the Linux Foundation, and ships a native desktop app, a CLI and an API, all built in Rust. It installs, edits, runs and tests code like Claude Code does, but its README is explicit that it is "not just for code". Verified against the repository on 29 September 2026, at release v1.52.0.

## What it does

- **Any model.** 15+ providers, including Anthropic, OpenAI, Google, Ollama, OpenRouter, Azure and Bedrock. Through ACP it can use an existing Claude, ChatGPT or Gemini subscription instead of API keys, and use agents such as Claude Code and Codex as providers.
- **Extensions.** 70+ extensions over the Model Context Protocol.
- **Three surfaces.** A desktop app for macOS, Windows and Linux, a CLI for terminal work, and an API to embed it. Goose can also act as an ACP server for Zed, JetBrains or VS Code.
- **Custom distributions.** Build your own Goose with preset providers, extensions and branding.

## Who it is for, and who it is not for

**A good fit**

- People who want a desktop agent for mixed work — code, research, data analysis — rather than a terminal-only tool.
- Organisations that prefer a foundation-governed project.

**Look elsewhere**

- You want a focused coding agent with a terminal UI built around plan and build modes — [OpenCode](/apps/opencode/).
- You want the agent inside your editor — [Cline](/apps/cline/) or [Kilo Code](/apps/kilo-code/).

## Installing it

Download the desktop app from the releases page or the installation guide: Homebrew cask on macOS, DEB, RPM or Flatpak on Linux, and a Windows build. The CLI installs with a download script or Homebrew on macOS and Linux, and with a script or WSL on Windows.

Other options are compared in [open-source Claude Code alternatives](/collections/open-source-claude-code-alternatives/), and more tools are under [Developer tools](/categories/developer-tools/) and [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/aaif-goose/goose> (29 Sep 2026)
- Governance — <https://github.com/aaif-goose/goose/blob/main/GOVERNANCE.md>
- Installation — <https://goose-docs.ai/docs/getting-started/installation>
- Project site — <https://goose-docs.ai>
