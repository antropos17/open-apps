---
name: Qwen Code
repoUrl: https://github.com/QwenLM/qwen-code
projectType: real-app
category: developer-tools
summary: An AI coding agent for the terminal from the Qwen team, a Claude Code alternative that works
  with Qwen, OpenAI, Anthropic and Gemini models, with a desktop app, IDE plugins and a web UI. It
  has subagents, agent teams, memory, skills, MCP, plan mode and chat-app channels.
description: AI coding agent for the terminal from the Qwen team, a Claude Code alternative that works with many models.
sourceDescription: An open-source AI coding agent that lives in your terminal.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/QwenLM/qwen-code
  docs: https://qwenlm.github.io/qwen-code-docs/en/users/overview
distribution:
  channels:
    - type: github-releases
      label: Qwen Code Desktop
      url: https://github.com/QwenLM/qwen-code/releases/tag/desktop-latest
      verified: true
    - type: other
      label: npm (@qwen-code/qwen-code)
      url: https://www.npmjs.com/package/@qwen-code/qwen-code
      verified: true
tags:
  - cli
  - developer-tools
  - foss-alternative
bestFor:
  - A Claude Code-style terminal agent that can run Qwen, other hosted models or local ones.
  - Driving a coding agent from Telegram, DingTalk, WeChat or Feishu.
  - Scripting agent runs headless or through TypeScript, Python and Java SDKs.
whyListed:
  - Its README compares it with Claude Code feature by feature and aims for parity.
  - Apache-2.0, with the Qwen models it is tuned for also released openly.
caveats:
  - It does not call itself a Claude Code alternative; its README says "If you know Claude Code, you
    already know Qwen Code", and it is listed with them for doing the same job.
  - Usage statistics can be collected when you sign in with Qwen OAuth or an Alibaba Cloud plan; the
    privacy notice says you can opt out in settings, and API-key use adds no collection.
  - The web UI and daemon mode are marked experimental.
relations:
  - type: alternative-to
    to: claude-code
    evidence:
      type: self-described
      quote: If you know Claude Code, you already know Qwen Code — and then some.
      url: https://github.com/QwenLM/qwen-code
      checkedAt: 2026-09-29
seo:
  title: "Qwen Code Review: Claude Code Alternative"
  description: Qwen Code is an Apache-2.0 terminal coding agent with subagents, memory, skills and MCP,
    using Qwen, OpenAI, Anthropic, Gemini or local models.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: QwenLM
  repo: qwen-code
  url: https://github.com/QwenLM/qwen-code
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Qwen Code measures itself against Claude Code more openly than most: its README opens its capabilities section with "If you know Claude Code, you already know Qwen Code" and lists the two side by side. It began as a fork of Google's Gemini CLI and has been developed independently since v0.1, with deep support for Qwen models but no lock-in to them. Verified against the repository on 29 September 2026, at release v0.24.6.

## What it does

Run `qwen` in a project, pick a provider with `/auth`, and ask. The README's comparison table claims parity with Claude Code on subagents and agent teams, auto-memory and skills, hooks, MCP, plan mode, LSP integration, sandboxing, Git worktrees, computer use and headless mode, and adds what Claude Code does not have:

- **Multi-protocol models** — OpenAI, Anthropic, Gemini and Qwen APIs, any third-party provider, or local models through Ollama or vLLM, switchable at runtime.
- **Agent Arena** — several models on the same task, head to head.
- **Daemon mode** — `qwen serve` shares one agent between several clients (experimental).
- **Chat channels** — Telegram, DingTalk, WeChat and Feishu.

It also ships a desktop app for macOS, Windows and Linux, plugins for VS Code, Zed and JetBrains, and SDKs for TypeScript, Python and Java.

## Who it is for, and who it is not for

**A good fit**

- Claude Code users who want the same habits with a choice of models.
- Teams in regions or companies that already use Qwen or Alibaba Cloud models.

**Look elsewhere**

- You want a narrower tool, just a terminal agent and a desktop app — see [OpenCode](/apps/opencode/).
- You want an agent in the editor with diff review — see [Cline](/apps/cline/).

## Licence in practice

The code is Apache-2.0. Data handling depends on how you sign in: with an API key, the privacy notice says Qwen Code collects nothing beyond what your provider does; with Qwen OAuth or an Alibaba Cloud Coding Plan, usage statistics follow that provider's policy and can be switched off in settings. More Apache-licensed tools are under [Apache-2.0 apps](/licenses/apache-2.0/).

The comparison continues in [open-source Claude Code alternatives](/collections/open-source-claude-code-alternatives/).

## Verified sources

- Repository and README — <https://github.com/QwenLM/qwen-code> (29 Sep 2026)
- Privacy notice — <https://github.com/QwenLM/qwen-code/blob/main/docs/users/support/tos-privacy.md>
- Documentation — <https://qwenlm.github.io/qwen-code-docs/en/users/overview>
