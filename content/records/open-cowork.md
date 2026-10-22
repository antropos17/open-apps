---
name: Open Cowork
repoUrl: https://github.com/OpenCoworkAI/open-cowork
projectType: real-app
category: productivity
summary: An Electron desktop app that gives an AI agent a workspace folder, document skills and MCP
  connectors, and runs its shell commands inside a WSL2 or Lima virtual machine when one is
  available.
description: Open Cowork is an MIT-licensed desktop agent for Windows and Apple Silicon Macs that
  works in a folder you choose and isolates its commands in a local VM, with your own API key.
sourceDescription: Open-source AI agent desktop app for Windows & macOS. One-click install Claude
  Code, MCP tools, and Skills — with sandbox isolation, multi-model support, and Feishu/Slack
  integration.
platforms:
  - macos
  - windows
  - desktop
licenses:
  - mit
links:
  github: https://github.com/OpenCoworkAI/open-cowork
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/OpenCoworkAI/open-cowork/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - productivity
  - security
bestFor:
  - Windows users who want agent file work with commands confined to a WSL2 Linux VM.
  - Producing slides, documents and spreadsheets from files in a folder.
  - Driving the agent remotely from Feishu (Lark).
whyListed:
  - Routes shell commands through a local VM automatically when WSL2 or Lima is installed.
  - Works with Anthropic, OpenRouter and OpenAI-compatible endpoints, including GLM, MiniMax and Kimi.
caveats:
  - The bundled document skills (docx, pdf, pptx, xlsx) are Anthropic's, with a licence file reading
    "All rights reserved" — they are not covered by the repository's MIT licence.
  - The last tagged release is v3.3.1 from May 2026; development continues on main.
  - Builds cover Apple Silicon Macs and x64 Windows only. The Homebrew cask installs with
    --no-quarantine, which skips Gatekeeper.
  - Without WSL2 or Lima, commands run natively with path restrictions only.
relations:
  - type: alternative-to
    to: claude-cowork
    evidence:
      type: self-described
      url: https://github.com/OpenCoworkAI/open-cowork
      quote: Open Cowork is an open-source implementation of Claude Cowork
      checkedAt: 2026-09-28
seo:
  title: Open Cowork – Open Source Claude Cowork for Windows & Mac
  description: Open Cowork is an MIT desktop agent for Windows and Apple Silicon Macs that works in a
    folder you pick and runs commands in a local VM, with your own key.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: OpenCoworkAI
  repo: open-cowork
  url: https://github.com/OpenCoworkAI/open-cowork
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Open Cowork is the Claude Cowork alternative with the most careful answer to "what if the agent runs the wrong command?": on Windows it sends every shell command into a WSL2 Linux VM, on a Mac into a Lima VM, and only falls back to running natively when neither is installed. It is MIT-licensed and easy to install. Two things to weigh: the document skills it ships are Anthropic's proprietary skills, and the last tagged release is from May. Verified against the repository on 28 September 2026, at release v3.3.1.

## What it does

You choose a workspace folder, paste an API key, and ask for an outcome — "read the CSV in this folder and make a five-slide summary". The agent reads and writes files in that folder, uses built-in skills to produce PPTX, DOCX, XLSX and PDF output, and reaches other apps through MCP connectors such as a browser or Notion. A trace panel shows its reasoning and tool calls as they happen. It can also be driven from Feishu (Lark), and it can operate desktop GUI apps; the README recommends a Gemini model for that.

Under the hood it is an Electron app using the Pi coding agent packages, with support for Anthropic, OpenRouter and OpenAI-compatible APIs.

## Who it is for, and who it is not for

**A good fit**

- Windows users who already have WSL2 and want the agent kept out of their host system.
- Office-document work driven from files in one folder.

**Look elsewhere**

- You are on Linux or an Intel Mac — there is no build. [OpenWork](/apps/openwork/) and [Eigent](/apps/eigent/) ship Linux builds.
- You need everything you install to be open source. See the licence section below.
- You want a local model with no API key. The quick start assumes a hosted provider; [OpenWork](/apps/openwork/) documents Ollama.

## How it compares

| | Open Cowork | [OpenWork](/apps/openwork/) | [NextCoWork](/apps/nextcowork/) | [OpenWorker](/apps/openworker/) |
|---|---|---|---|---|
| Command isolation | WSL2 / Lima VM | Not described in the README | Per-call approval | Approval gates, optional container sandbox |
| Platforms | Apple Silicon Mac, Windows | macOS, Windows, Linux | macOS, Windows, Linux | macOS, Windows |
| Licence | MIT, Anthropic skills bundled | MIT app, commercial `ee/` | Apache-2.0 | MIT |

More options, with a verdict on each, in [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).

## Licence in practice

The application code is MIT. The four document skills in `.claude/skills/` — `docx`, `pdf`, `pptx` and `xlsx` — each carry a `LICENSE.txt` that reads "© 2025 Anthropic, PBC. All rights reserved" and points to Anthropic's consumer or commercial terms. If you fork or redistribute Open Cowork, those directories are not yours to relicense; replace them or check Anthropic's terms. The `skill-creator` skill and your own skills are unaffected. Other MIT apps are listed under [MIT-licensed apps](/licenses/mit/).

## Running it

Download the Apple Silicon `.dmg` or the Windows `.exe` from the releases page, or `brew install --cask --no-quarantine open-cowork` after tapping `OpenCoworkAI/tap`. For the sandbox, install WSL2 on Windows or `brew install lima` on a Mac before first use; Open Cowork detects either and creates its own VM.

## Verified sources

- Repository and README — <https://github.com/OpenCoworkAI/open-cowork> (28 Sep 2026)
- Bundled skill licence — <https://github.com/OpenCoworkAI/open-cowork/blob/main/.claude/skills/pptx/LICENSE.txt>
- Releases — <https://github.com/OpenCoworkAI/open-cowork/releases>
