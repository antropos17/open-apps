---
name: OpenWork
repoUrl: https://github.com/different-ai/openwork
projectType: real-app
category: productivity
summary: A Claude Cowork alternative for macOS, Windows and Linux where AI agents work on the files
  in folders you pick, with your own API key, a ChatGPT sign-in or a local model through Ollama. It
  is an Electron app built on OpenCode, with skills and MCP servers you can share with a team; a
  separate team control plane is under a commercial licence.
description: Desktop app for Mac, Windows and Linux where AI agents work on your files with the model you choose.
sourceDescription: The open-source alternative to Claude Cowork (powered by opencode)
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/different-ai/openwork
  website: https://openworklabs.com
  docs: https://openworklabs.com/docs
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/different-ai/openwork/releases/latest
      verified: true
    - type: website
      label: OpenWork downloads
      url: https://openworklabs.com/download
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - productivity
  - self-hosted
bestFor:
  - Handing an agent real work on local files — documents, spreadsheets, folders — without a Claude
    subscription.
  - Teams that want the same skills and MCP connections available to every member and every agent.
  - Linux users; Claude Cowork has no Linux desktop app.
whyListed:
  - The most complete open-source take on the Claude Cowork workflow, with builds for macOS, Windows
    and Linux on x64 and arm64.
  - Model-agnostic by design — it inherits OpenCode's provider support, including local models.
  - Publishes a migration guide for skills, plugins and MCP servers from Claude Cowork.
caveats:
  - Open-core. Everything outside the repository's ee/ directory is MIT; ee/ holds OpenWork Den, the
    organisation control plane, under a source-available licence that needs a paid subscription in
    production above five users.
  - Releases ship three variants — the plain app, a cloud build and an enterprise build. Download the
    plain one if you only want the MIT desktop app.
  - The OpenWork MCP endpoint in the README is hosted by OpenWork and asks you to sign in to an
    OpenWork organisation; the desktop app itself does not need an account.
relations:
  - type: alternative-to
    to: claude-cowork
    evidence:
      type: self-described
      url: https://github.com/different-ai/openwork
      quote: OpenWork is the free, open-source alternative to Claude Cowork and Codex
      checkedAt: 2026-09-28
seo:
  title: "OpenWork Review: Claude Cowork Alternative"
  description: OpenWork runs AI agents on your own files on macOS, Windows and Linux with any model,
    including local ones. MIT; the team control plane is separate.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: different-ai
  repo: openwork
  url: https://github.com/different-ai/openwork
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
OpenWork is the open-source Claude Cowork alternative to try first if you want the same idea — an agent that does work in folders on your computer — without being tied to one model vendor or one operating system. It is a desktop app for macOS, Windows and Linux built on [OpenCode](https://opencode.ai), and the app is MIT-licensed. The thing to understand before you adopt it for a team: the organisation control plane in the same repository is not MIT. Verified against the repository on 28 September 2026, at release v0.18.54.

## What it does

You point OpenWork at a workspace folder and ask for an outcome. The agent reads, edits and creates files there, calls the skills and MCP servers you have connected, and shows its work as it goes. The model is your choice: bring an API key, sign in with ChatGPT, or run a local model through Ollama or any OpenAI-compatible server. The README credits OpenCode for the provider layer.

Two things set it apart from the other apps in this space:

- **It meets you in the agent you already use.** One OpenWork MCP entry in Claude Code, Codex, Cursor or OpenCode exposes the same skills, plugins and connected services there. The desktop app is optional.
- **It has a migration path.** A documented guide carries skills, Claude-compatible plugins and MCP servers over from Claude Cowork.

## Who it is for, and who it is not for

**A good fit**

- You want Cowork-style file work on Linux, or on a Windows or Mac machine without a Claude plan.
- Your team already shares skills and MCP servers and wants one place to publish them.
- You need a local model option for sensitive files.

**Look elsewhere**

- You want a multi-agent "workforce" that splits a task across parallel agents — that is [Eigent](/apps/eigent/)'s focus.
- You want every command isolated in a VM by default. [Open Cowork](/apps/open-cowork/) routes shell commands through WSL2 or Lima when they are installed.
- You need governance and approvals in a larger organisation without paying. The admin features live in the source-available part.

## How it compares

| | OpenWork | [Eigent](/apps/eigent/) | [Open Cowork](/apps/open-cowork/) | [NextCoWork](/apps/nextcowork/) |
|---|---|---|---|---|
| Platforms | macOS, Windows, Linux | macOS, Windows, Linux | macOS (Apple Silicon), Windows | macOS, Windows, Linux |
| Licence | MIT app, commercial `ee/` | Apache-2.0 | MIT, bundled Anthropic skills | Apache-2.0 |
| Local models | Ollama, OpenAI-compatible | vLLM, Ollama, LM Studio | OpenAI-compatible endpoints | Custom endpoints, Ollama |
| Built on | OpenCode | CAMEL-AI | Pi coding agent | Own agent kernel |

The full comparison, with a verdict on each, is in [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).

## Licence in practice

The repository uses a directory split. Everything outside `ee/` — the desktop app, its server and shared packages — is MIT, free for any use. Everything under `ee/` is OpenWork Den, the organisation control plane, under the OpenWork EE License: the code is public, but production use needs a subscription except for organisations of up to five users, a 30-day evaluation, or development and testing. The README says each `ee/` release converts to MIT two years after publication, and versions released before this licence remain under FSL-1.1-MIT.

For a single user or a small team using the desktop app, this changes nothing. For an organisation planning to self-host the control plane, read `ee/LICENSE` first. More MIT software is under [MIT-licensed apps](/licenses/mit/).

## Running it

Download the plain `openwork-*` build for your platform from the releases page — not the `cloud` or `enterprise` variants — or use the installer on the website. Open it, choose a workspace folder, add a model, and start with a small task. Contributors need Node 24 and pnpm 11; commits require a DCO sign-off.

## Verified sources

- Repository and README — <https://github.com/different-ai/openwork> (28 Sep 2026)
- Licence file — <https://github.com/different-ai/openwork/blob/dev/LICENSE>
- Releases — <https://github.com/different-ai/openwork/releases>
- Documentation — <https://openworklabs.com/docs>
