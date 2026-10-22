---
name: Centaur
repoUrl: https://github.com/paradigmxyz/centaur
projectType: real-app
category: developer-tools
summary: A self-hosted team agent platform from Paradigm — mention the bot in Slack and each
  conversation gets its own Kubernetes sandbox with a shell, git and your tools, running Claude Code,
  Codex, Amp or another CLI harness, with durable workflows and credential boundaries.
description: Centaur is a self-hosted, MIT- or Apache-licensed platform that gives a team one shared
  AI agent in Slack, running each conversation in an isolated Kubernetes sandbox.
sourceDescription: Centaur is frontier, agentic infrastructure that you own. Centaur is like Claude
  Tag, but open source and on steroids.
platforms:
  - linux
  - web
licenses:
  - mit
  - apache-2.0
links:
  github: https://github.com/paradigmxyz/centaur
  website: https://centaur.run
distribution:
  channels:
    - type: self-host
      label: Kubernetes (k3s for local)
      url: https://github.com/paradigmxyz/centaur#getting-started
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - developer-tools
  - security
bestFor:
  - Teams that want one shared agent in Slack instead of everyone's own local setup.
  - Investigating CI failures and running checks against a real repository in a sandbox.
  - Long-running workflows that must survive restarts, wait for events and start child agents.
whyListed:
  - Every Slack thread runs in its own sandbox with a shell, workspace, git, Python, Node.js and Bun.
  - Agents use approved services without the raw API keys ever entering their environment.
  - Dual MIT / Apache-2.0 licence, chosen by the user.
caveats:
  - Early-stage — the repository was created in May 2026.
  - Needs Kubernetes; locally a k3s cluster on an always-on host. The first boot expects a 1Password
    service account for secrets, plus a Slack app.
  - Slack is the documented chat surface; Microsoft Teams ingress is optional.
relations:
  - type: alternative-to
    to: claude-tag
    evidence:
      type: self-described
      url: https://github.com/paradigmxyz/centaur
      quote: Centaur is like Claude Tag, but open source and on steroids.
      checkedAt: 2026-09-28
seo:
  title: Centaur – Open Source Claude Tag Alternative with Sandboxes
  description: Centaur gives a team one shared AI agent in Slack and runs each thread in its own
    Kubernetes sandbox with shell and git. Self-hosted, MIT or Apache-2.0.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: paradigmxyz
  repo: centaur
  url: https://github.com/paradigmxyz/centaur
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
Centaur is the heavyweight among the open-source Claude Tag alternatives. Where Claude Tag puts one Claude in a Slack channel, Centaur puts one shared agent there and gives every thread a real, isolated machine: a Kubernetes sandbox with a shell, a workspace, git and common runtimes, where Claude Code, Codex, Amp or another CLI harness does the work. It comes from Paradigm and is dual-licensed MIT or Apache-2.0. It asks the most of you to run. Verified against the repository on 28 September 2026, at release v2026.9.25.

## What it does

Mention `@centaur` in Slack with a question — "why are the billing tests failing?" — and Centaur assigns a sandbox to the thread. The agent inspects code, runs commands and calls approved tools, and progress plus the final answer come back to the thread. The same flow is available through an HTTP API: create a session, post a message, execute, and stream or replay events.

The platform keeps the parts that are hard to build yourself:

- **Durable workflows** that sleep, resume, wait for events, start child agents and survive service restarts.
- **Credential boundaries** — agents call approved services without receiving raw API keys.
- **Replayable state** — messages, executions and delivery state are stored, so clients can reconnect without losing results.
- **Organisation overlays** — your own tools, workflows, personas, skills and prompts layered on without forking.

## Who it is for, and who it is not for

**A good fit**

- Engineering teams with a Kubernetes habit and a Slack workspace.
- Standardising agent behaviour and tool access across a team.

**Look elsewhere**

- You want to try it on a laptop in ten minutes. [AgentConnect](/apps/agentconnect/) starts with Docker Compose.
- You want the agent to work on your own machine and checkout. [OpenTag](/apps/opentag/) pairs a runner on a computer you control.
- You do not use 1Password — the documented first boot resolves runtime secrets through it.

## How it compares

| | Centaur | [AgentConnect](/apps/agentconnect/) | [OpenTag](/apps/opentag/) |
|---|---|---|---|
| Where work runs | Kubernetes sandbox per thread | Daemons you add | Your paired computer |
| Setup | k3s or Kubernetes, 1Password, Slack app | Docker Compose | Docker Compose relay + CLI runner |
| Licence | MIT or Apache-2.0 | Apache-2.0 | MIT |

See the verdicts in [open-source Claude Tag alternatives](/collections/open-source-claude-tag-alternatives/).

## Licence in practice

The LICENSE file offers the code under either the Apache License 2.0 or the MIT licence, at your option. GitHub shows "NOASSERTION" only because it cannot detect a dual licence. There is no commercial directory. See [MIT-licensed apps](/licenses/mit/) for more.

## Verified sources

- Repository and README — <https://github.com/paradigmxyz/centaur> (28 Sep 2026)
- Licence file — <https://github.com/paradigmxyz/centaur/blob/main/LICENSE>
- Project site — <https://centaur.run>
