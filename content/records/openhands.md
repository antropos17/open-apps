---
name: OpenHands
repoUrl: https://github.com/OpenHands/OpenHands
projectType: real-app
category: developer-tools
summary: Agent Canvas, a self-hosted control center for coding agents — run the OpenHands agent,
  Claude Code, Codex or Gemini on your laptop, in Docker, on a VM or in the cloud, and automate
  tasks on a schedule or from Slack, GitHub and Linear events.
description: OpenHands is an MIT-licensed, self-hosted workspace for running autonomous coding agents
  on local or remote backends, with automations; OpenHands Cloud and Enterprise are the commercial
  offerings.
sourceDescription: "🙌 OpenHands: AI-Driven Development"
platforms:
  - web
  - macos
  - windows
  - linux
licenses:
  - mit
links:
  github: https://github.com/OpenHands/OpenHands
  website: https://openhands.dev
  docs: https://docs.openhands.dev
distribution:
  channels:
    - type: github-releases
      label: Agent Canvas desktop builds
      url: https://github.com/OpenHands/OpenHands/releases/latest
      verified: true
    - type: self-host
      label: npm or Docker
      url: https://github.com/OpenHands/OpenHands#quickstart
      verified: true
tags:
  - self-hosted
  - developer-tools
  - foss-alternative
  - web-app
bestFor:
  - Handing whole engineering tasks to an agent that keeps running when your laptop is shut.
  - Scheduled or event-driven agent work — reports to Slack, splitting GitHub issues into tasks.
  - Switching between local, team and cloud agent servers from one interface.
whyListed:
  - MIT, self-hostable, and not tied to one agent — it runs its own agent or any ACP agent.
  - In development since March 2024, under the name OpenDevin at first.
caveats:
  - Run without a sandbox, the agent has full access to the host's filesystem; the README recommends
    Docker or a separate machine.
  - The Python SDK and agent server live in a separate repository, OpenHands/software-agent-sdk.
seo:
  title: OpenHands – Open Source Self-Hosted Autonomous Coding Agents
  description: OpenHands runs its own coding agent, Claude Code, Codex or Gemini on your laptop,
    Docker, a VM or the cloud, with scheduled automations. MIT, self-hosted.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: OpenHands
  repo: OpenHands
  url: https://github.com/OpenHands/OpenHands
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
OpenHands began in 2024 as OpenDevin, and the job is the one Devin sells: give an agent an engineering task and let it finish it end to end. The repository now ships Agent Canvas, a self-hosted control center that runs the OpenHands agent — or Claude Code, Codex, Gemini and other ACP agents — on your laptop, in Docker, on a VM or in OpenHands Cloud. MIT-licensed. Verified against the repository on 29 September 2026, at release v1.24.0.

## What it does

- **Agent backends.** Each Agent Server runs agents on one machine; Agent Canvas connects to several and switches between them, so a team server can do code review while your personal agents run locally.
- **Any agent, any model.** The open-source OpenHands agent out of the box, or Claude Code, Codex, Gemini or any Agent Client Protocol agent, with any LLM.
- **Automations.** Run agents on a schedule or from webhooks, and connect them to Slack, GitHub, Linear, Notion and other services.
- **Always on.** The README recommends running it on a cloud server so agents keep going with your laptop closed.

## Who it is for, and who it is not for

**A good fit**

- Teams that want Devin-style task delegation on their own infrastructure.
- Developers who already use several agents and want one place to run and automate them.

**Look elsewhere**

- You want an agent beside you in the editor — see [Cline](/apps/cline/).
- You want several agents in parallel Git worktrees on your desktop — see [Emdash](/apps/emdash/); to reattach to long agent sessions from your phone, see [opendray](/apps/opendray/).

## Running it

Install with `npm install -g @openhands/agent-canvas` (Node.js 24 and `uv` required), run the Docker image with a projects folder mounted, or download the desktop builds for macOS, Windows and Linux. The README warns that without Docker the agent can reach the whole filesystem, and points to its self-hosting guide for hardening. OpenHands Cloud and OpenHands Enterprise are the company's commercial ways to run the same agents. More MIT tools are under [MIT apps](/licenses/mit/), and more agents under [Developer tools](/categories/developer-tools/).

## Verified sources

- Repository and README — <https://github.com/OpenHands/OpenHands> (29 Sep 2026)
- Former name — <https://github.com/OpenDevin/OpenDevin> redirects to OpenHands/OpenHands
- Self-hosting guide — <https://github.com/OpenHands/OpenHands/blob/main/docs/SELF_HOSTING.md>
- Project site — <https://openhands.dev>
