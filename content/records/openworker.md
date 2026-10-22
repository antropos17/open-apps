---
name: OpenWorker
repoUrl: https://github.com/andrewyng/openworker
projectType: real-app
category: productivity
summary: A desktop AI coworker for macOS and Windows that finishes everyday work like reports,
  documents and security reviews across your files, terminal and 25+ connected apps, asking before
  anything consequential. A local Python agent server does the work, with approval gates and an
  audit trail on every tool call, using your own model key or Ollama.
description: Desktop AI coworker for Mac and Windows that finishes reports and documents and asks before acting.
sourceDescription: AI that gets your everyday tasks done.
platforms:
  - macos
  - windows
  - desktop
licenses:
  - mit
links:
  github: https://github.com/andrewyng/openworker
  website: https://openworker.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/andrewyng/openworker/releases/latest
      verified: true
tags:
  - desktop-app
  - productivity
  - security
  - privacy
bestFor:
  - Security reviews of a codebase, cloud posture audits and incident write-ups.
  - Recurring work across Slack, Jira, GitHub, Gmail and similar tools, on a schedule.
  - Teams that need a record of who approved each action the agent took.
whyListed:
  - Governance is built in — hard human-only floors, approvals that can graduate into rules, and an
    audit trail with approval provenance.
  - Runs locally with any major provider or Ollama; the only cloud component brokers OAuth for
    connectors and is optional.
caveats:
  - Early-stage — the repository was created in July 2026 and the app is labelled open beta.
  - Windows builds are not yet code-signed, so SmartScreen warns on install.
  - It does not describe itself as a Claude Cowork alternative; it is listed with them because it does
    the same kind of work.
relations:
  - type: alternative-to
    to: claude-cowork
    evidence:
      type: editorial
      url: https://github.com/andrewyng/openworker
      checkedAt: 2026-09-28
seo:
  title: "OpenWorker Review: Desktop AI Coworker"
  description: OpenWorker delivers finished work across your files, terminal and 25+ apps on macOS and
    Windows, with approval gates and an audit trail. MIT, any model.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: andrewyng
  repo: openworker
  url: https://github.com/andrewyng/openworker
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
OpenWorker is an early but unusually disciplined desktop agent: the pitch is finished deliverables — a reviewed codebase with fixes ready, a report, a triaged inbox — and the design is built around never letting the agent grant itself permission. It is MIT-licensed, runs on macOS and Windows, and works with your own model key or Ollama. It is also in open beta and only a few months old, so expect rough edges. Verified against the repository on 28 September 2026, at release v0.2.1.

## Governed by design

Most agents in this category ask for approval; OpenWorker makes approval the architecture. Its README describes four tiers:

1. **Hard floors** — a set of dangerous and irreversible operations always goes to a human, even in auto-approve mode.
2. **Earned autonomy** — one-off approvals can graduate into standing rules and then config allowlists, each step visible and revocable.
3. **An audit trail** — every tool call is stored with how it was approved, by whom, and why.
4. **A sandbox** — shell and file tools can run in a per-agent Linux container through NVIDIA OpenShell.

Unattended scheduled runs never approve themselves; their questions wait in an inbox.

## Who it is for, and who it is not for

**A good fit**

- Security work first — the first specialist "coworkers" do code security review, cloud posture checks and incident triage, combining scanners such as semgrep with model reasoning.
- People whose work is spread across Slack, Jira, GitHub, Notion, Gmail and calendars.

**Look elsewhere**

- You are on Linux — there is no build. [OpenWork](/apps/openwork/) and [Eigent](/apps/eigent/) have one.
- You want a mature, long-running project. [Eigent](/apps/eigent/) has been releasing since 2025.

## How it compares

| | OpenWorker | [OpenWork](/apps/openwork/) | [Eigent](/apps/eigent/) |
|---|---|---|---|
| Approach | Specialist coworkers, finished deliverables | Agent on your files, shared skills | Parallel multi-agent workforce |
| Platforms | macOS, Windows | macOS, Windows, Linux | macOS, Windows, Linux |
| Licence | MIT | MIT app, commercial `ee/` | Apache-2.0 |

It sits in [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/) as the editor's pick for governed work, not because it claims the comparison itself.

## Privacy and licence

Conversations, connector tokens and model keys live in the app's local secret store. The one cloud component brokers OAuth handshakes for connectors, and you can skip it by creating connector credentials yourself. The code is MIT with no separate commercial directory. More MIT apps are in [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/andrewyng/openworker> (28 Sep 2026)
- Licence file — <https://github.com/andrewyng/openworker/blob/main/LICENSE>
- Releases — <https://github.com/andrewyng/openworker/releases>
