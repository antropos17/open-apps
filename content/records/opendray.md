---
name: opendray
repoUrl: https://github.com/Opendray/opendray
projectType: real-app
category: developer-tools
summary: A single Go binary that runs Claude Code, Codex, Antigravity, Grok Build, OpenCode or a
  shell in reattachable terminal sessions on an always-on host, and lets you drive them from a web
  admin, a Flutter mobile app or six chat platforms, with a shared local-first memory layer.
description: opendray is an Apache-2.0 self-hosted gateway that keeps AI coding agent sessions
  running on your own server and lets you reattach from a browser, a phone or chat.
sourceDescription: Self-hosted gateway for Claude Code, Codex, Antigravity, Grok Build, OpenCode. Run
  AI coding agents on your own infra with a shared local-first memory layer.
platforms:
  - linux
  - macos
  - web
licenses:
  - apache-2.0
links:
  github: https://github.com/Opendray/opendray
  website: https://opendray.dev
distribution:
  channels:
    - type: self-host
      label: Install script (Linux, macOS, WSL2)
      url: https://github.com/Opendray/opendray#quick-start
      verified: true
tags:
  - self-hosted
  - developer-tools
  - privacy
bestFor:
  - Keeping a long Claude Code or Codex session alive when your laptop sleeps.
  - Checking on and replying to a running coding agent from your phone or Telegram.
  - Small teams sharing a host and a pool of agent accounts.
whyListed:
  - Sessions survive client disconnects, laptop sleep and host reboots, and reattach where they left
    off.
  - One static Go binary with PostgreSQL, no telemetry, cosign-signed releases and an SBOM.
caveats:
  - Early-stage and small — the repository was created in May 2026 and had 67 stars when checked.
  - Needs PostgreSQL and a host that stays on; Docker is not a supported deployment for v2.
  - Pooling several accounts on one host may conflict with your AI provider's terms — check them
    before sharing a subscription.
seo:
  title: opendray – Open Source Self-Hosted Gateway for Coding Agents
  description: opendray keeps Claude Code, Codex and other coding agent sessions running on your
    server, reattachable from web, mobile or chat. Apache-2.0, one Go binary.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: Opendray
  repo: opendray
  url: https://github.com/Opendray/opendray
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
opendray solves one concrete problem: a coding agent run over SSH dies when your laptop sleeps. It runs Claude Code, Codex, Antigravity, Grok Build, OpenCode or a plain shell in a terminal session on a host that stays awake — a Mac mini, a NAS, a VPS — and lets you reattach later from a browser, a phone or a chat message, with the transcript where you left it. It is a young, small project; this is a short record rather than a full review. Verified against the repository on 28 September 2026, at release v2.17.8.

## What it does

- **Sessions that survive.** Each agent CLI runs in its own reattachable PTY on the host and outlives client disconnects, sleep and reboots.
- **Drive from anywhere.** A React web admin, a Flutter mobile app, and Telegram, Slack, Discord, Feishu, DingTalk and WeCom, all two-way — get pinged when a session goes idle and reply to send the next prompt.
- **Shared memory.** Recall across user, project and session scopes, with embeddings from ONNX, Ollama or LM Studio, stored in your PostgreSQL.
- **An API.** REST and WebSocket with scoped keys and a per-call audit log, so it can be the agent runtime behind your own tool.

The README is clear about where it differs from self-hosted chat front ends such as Open WebUI or LibreChat: it runs the real agent CLI, with tool use and file writes on the host, not a chat box in front of an API.

## Who it is for

A solo developer with a box that is always on, or a small team lead who wants teammates to share a host. If you want an agent that lives in a team Slack channel, look at [OpenTag](/apps/opentag/) or the other [open-source Claude Tag alternatives](/collections/open-source-claude-tag-alternatives/). If you want the agent on your desktop, see [OpenWork](/apps/openwork/).

## Running it

On Linux, macOS or WSL2, the install script walks through PostgreSQL, CLI installation, admin credentials and service registration in five to ten minutes; Windows runs the same installer inside WSL2. `npx opendray` installs the binary alone if you bring your own PostgreSQL and supervisor. The web admin is at `http://<host>:8770/admin/`. Because opendray shares process state such as `~/.claude` and the ssh-agent with the CLIs it spawns, it runs on the host under systemd or launchd, not in Docker.

## Licence

Apache-2.0 for the whole project, with no telemetry, account or subscription. Other Apache-licensed tools are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/Opendray/opendray> (28 Sep 2026)
- Releases — <https://github.com/Opendray/opendray/releases>
- Project site — <https://opendray.dev>
