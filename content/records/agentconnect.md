---
name: AgentConnect
repoUrl: https://github.com/agentconnect-md/agentconnect
projectType: real-app
category: developer-tools
summary: A self-hosted platform that puts several AI agents — Claude Code, Codex, Grok Build or any
  ACP runtime — into Slack, Telegram, Discord, Lark, Google Chat, GitHub, GitLab, Gitea and Linear,
  each with its own role, memory, tools and access rules.
description: AgentConnect is an Apache-2.0 platform for running a team of AI agents in the chat
  tools and code hosts your team already uses, self-hosted with Docker Compose.
sourceDescription: The open-source, multi-agent alternative to Claude Tag. @ any agent, wherever
  work happens, they work alongside your team, learning as they go.
platforms:
  - web
  - linux
licenses:
  - apache-2.0
links:
  github: https://github.com/agentconnect-md/agentconnect
  website: https://www.agentconnect.md
  docs: https://www.agentconnect.md/docs
distribution:
  channels:
    - type: self-host
      label: Docker Compose
      url: https://github.com/agentconnect-md/agentconnect#get-started
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - developer-tools
  - chat
bestFor:
  - Teams that want more than one agent in a channel, each with a defined role.
  - Starting agent work from a GitHub pull request, an issue, a webhook or a schedule as well as chat.
  - Mixing runtimes — Claude Code for one job, Codex or another ACP agent for the next.
whyListed:
  - Describes itself as an open-source Claude Tag alternative and covers far more channels than Slack.
  - Per-agent visibility, repository, tool and agent-to-agent permissions are part of the core.
caveats:
  - Early-stage — the repository was created in July 2026; v2.0.0 shipped on the day it was checked.
  - Routing decisions use Jev, a separate decision engine from the same ecosystem.
  - A hosted AgentConnect Cloud exists beside the self-hosted stack.
relations:
  - type: alternative-to
    to: claude-tag
    evidence:
      type: self-described
      url: https://github.com/agentconnect-md/agentconnect
      quote: The open-source, multi-agent alternative to Claude Tag.
      checkedAt: 2026-09-28
seo:
  title: AgentConnect – Open Source Claude Tag Alternative
  description: AgentConnect runs Claude Code, Codex and other agents in Slack, Discord, GitHub and
    Linear with roles, memory and access rules. Self-hosted, Apache-2.0.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: agentconnect-md
  repo: agentconnect
  url: https://github.com/agentconnect-md/agentconnect
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
AgentConnect is the Claude Tag alternative for teams that want a roster of agents rather than one: each agent gets a role, a runtime, a model, memory and its own permissions, and they can call on each other in the same thread as the people working with them. It self-hosts under Apache-2.0 and reaches well beyond Slack. It is also two months old, so pin a version. Verified against the repository on 28 September 2026, at release v2.0.0.

## What it does

You define agents in a web console and link them to bots in Slack, Telegram, Discord, Lark and Google Chat, or to repositories and workflows on GitHub, GitLab, Gitea and Linear. Work can start from a message, an issue, a pull request, a webhook or a schedule. Any ACP-compatible runtime can sit behind an agent — the README names Claude Code, Codex, Grok Build, DeepSeek and Pi — and changing one does not rebuild the workflow around it.

Routing uses reusable "Decisions" powered by Jev: which agent answers, which specialist gets a new conversation, which runtime and model a session uses. Agents keep their own memory and skills, and reviewed "Knowledge" pages are shared across all of them.

## Who it is for, and who it is not for

**A good fit**

- Support and triage flows that cross Slack, Telegram and an issue tracker.
- Code review with several specialised reviewers chosen per pull request.

**Look elsewhere**

- You want one teammate in one Slack workspace with the least setup. [OpenTag](/apps/opentag/) is narrower.
- You want each conversation in an isolated container with shell and tools. [Centaur](/apps/centaur/) is built around Kubernetes sandboxes.

## How it compares

| | AgentConnect | [Centaur](/apps/centaur/) | [OpenTag](/apps/opentag/) |
|---|---|---|---|
| Channels | Slack, Telegram, Discord, Lark, Google Chat + code hosts | Slack, API | Slack |
| Agents | Many, with roles | Shared agent, any CLI harness | One ACP coding agent |
| Execution | Daemons you add | Kubernetes sandbox per thread | Your own paired computer |
| Licence | Apache-2.0 | MIT or Apache-2.0 | MIT |

All three are compared in [open-source Claude Tag alternatives](/collections/open-source-claude-tag-alternatives/).

## Running it

`docker compose up -d` in a checkout starts the web console, control plane, relay and PostgreSQL; open `http://localhost:3000` and add a daemon from the console. Helm charts live in `charts/` for Kubernetes. The licence covers the whole repository — Apache-2.0, read from the LICENSE file. Other Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/agentconnect-md/agentconnect> (28 Sep 2026)
- Licence file — <https://github.com/agentconnect-md/agentconnect/blob/main/LICENSE>
- Documentation — <https://www.agentconnect.md/docs>
