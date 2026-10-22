---
name: OpenTag
repoUrl: https://github.com/amplifthq/opentag
projectType: real-app
category: developer-tools
summary: A self-hosted Slack teammate that queues work in a thread and runs your ACP coding agent —
  Claude Code, Codex, Cursor and others — on a computer you pair with it, then reports status,
  decisions and evidence back in the same thread.
description: OpenTag is an MIT-licensed Slack teammate that runs your coding agent against your own
  checkout on a paired computer, through a self-hosted relay.
sourceDescription: Mention any ACP coding agent from Slack, GitHub, GitLab, Linear, or Lark. OpenTag
  runs Claude Code, Codex, Cursor and more on your own machine, then replies in-thread with verified,
  evidence-backed results.
platforms:
  - linux
  - macos
  - web
licenses:
  - mit
links:
  github: https://github.com/amplifthq/opentag
distribution:
  channels:
    - type: self-host
      label: Docker Compose relay + npm CLI
      url: https://github.com/amplifthq/opentag#quick-start
      verified: true
tags:
  - self-hosted
  - developer-tools
  - privacy
  - chat
bestFor:
  - A team channel where anyone can hand a coding task to an agent running on a trusted machine.
  - Keeping source code, worktrees and coding-agent logins on your own computer, not in a cloud
    sandbox.
whyListed:
  - Source, checkouts and the coding agent's session never leave the paired computer; the relay only
    holds Slack and coordination state.
  - Requests stay visibly queued while the computer is offline instead of disappearing.
  - Opens draft pull requests only as an explicit step and never auto-merges.
caveats:
  - Early-stage — the repository was created in June 2026.
  - Needs a public HTTPS origin Slack can reach, PostgreSQL through the included Compose profile, and
    a paired runner; there is no standalone local mode.
  - Not self-described as a Claude Tag alternative; listed with them for doing the same job in Slack.
  - Three unrelated projects on GitHub share the name OpenTag; this record is amplifthq/opentag.
relations:
  - type: alternative-to
    to: claude-tag
    evidence:
      type: editorial
      url: https://github.com/amplifthq/opentag
      checkedAt: 2026-09-28
seo:
  title: OpenTag – Open Source AI Coding Teammate for Slack
  description: OpenTag takes coding work from Slack and runs Claude Code, Codex or another agent on
    your own computer, reporting back in the thread. MIT, self-hosted.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: amplifthq
  repo: opentag
  url: https://github.com/amplifthq/opentag
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
OpenTag is the narrowest and most local of the open-source Claude Tag alternatives: one teammate in Slack, one coding agent, running on a computer you pair with it. Your code, worktrees, agent login and GitHub credential stay on that machine; a small self-hosted relay keeps the Slack side and the queue. It is MIT-licensed and young. Verified against the repository on 28 September 2026, at release v0.10.0.

## How it works

There are two halves. The **Control Plane** is a self-hosted relay — Docker Compose with PostgreSQL behind a public HTTPS address — that receives Slack mentions and holds coordination state. The **Runner** is a CLI (`@opentag/cli`) on the computer where the work happens; `opentag setup` pairs it with the relay, a GitHub project and an ACP executor such as Claude Code or Codex.

Mention `@OpenTag` in a thread and the request is queued. When the runner is online, the agent works against the local checkout, and status, decisions and evidence come back to the same thread. If the computer is offline, the request stays visibly queued. A timeout or ambiguous side effect is reported as `outcome_unknown` rather than guessed as success, and draft pull requests are a separate, explicit stage — it never auto-merges.

## Who it is for, and who it is not for

**A good fit**

- A small engineering team with one trusted build machine or a developer's own workstation.
- Anyone who does not want source code in a third-party sandbox.

**Look elsewhere**

- You want many agents with roles across several chat tools. [AgentConnect](/apps/agentconnect/) covers that.
- You want each request isolated in a fresh container. [Centaur](/apps/centaur/) sandboxes every thread.
- You cannot expose an HTTPS endpoint to Slack.

## How it compares

| | OpenTag | [AgentConnect](/apps/agentconnect/) | [Centaur](/apps/centaur/) |
|---|---|---|---|
| Where the agent runs | Your paired computer | Daemons you add | Kubernetes sandbox |
| Agents | One ACP coding agent | Many, with roles | Shared agent, any CLI harness |
| Licence | MIT | Apache-2.0 | MIT or Apache-2.0 |

It is listed in [open-source Claude Tag alternatives](/collections/open-source-claude-tag-alternatives/) as the editor's match — the project does not make the comparison itself.

## Which OpenTag

At least three unrelated GitHub projects use the name. This record is `amplifthq/opentag`. `CopilotKit/OpenTag` is a starter template for building your own on-call bot, and `linxidnju/OpenTag` has no clear licence; neither is listed. The code here is MIT, with no separate commercial part — see [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/amplifthq/opentag> (28 Sep 2026)
- Licence file — <https://github.com/amplifthq/opentag/blob/main/LICENSE>
- Releases — <https://github.com/amplifthq/opentag/releases>
