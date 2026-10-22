---
name: Rome
repoUrl: https://github.com/rome-os/rome
projectType: real-app
category: productivity
summary: A self-hosted AI agent that turns jobs you repeat into small apps — an inbox, a price
  tracker, a morning brief — and runs them on a schedule, reachable from Telegram, Discord or
  WhatsApp. What it builds is kept as git-tracked actions, skills and apps you can read and edit.
description: A self-hosted AI agent that turns repeated work into small scheduled apps you reach from
  chat.
sourceDescription: A compounding agent OS for recursive agents. Also an open source alternative to
  Grok Bot and Meta's Muse.
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/rome-os/rome
  website: https://romeos.cc
  docs: https://romeos.cc/docs/rome
distribution:
  channels:
    - type: self-host
      label: Docker quick start
      url: https://github.com/rome-os/rome#run-with-docker
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
bestFor:
  - Turning a job you repeat into a small app with its own interface and data, built by the agent.
  - A persistent personal agent you reach from Telegram, Discord or WhatsApp.
  - Keeping what the agent learns as readable, git-tracked code rather than hidden model state.
whyListed:
  - Self-described alternative to Grok Bot, with a published comparison.
  - What accumulates is ordinary source code — actions, skills and apps — you can inspect, edit and
    share.
  - Binds to localhost by default and exports no telemetry unless configured.
caveats:
  - Early-stage — the repository was created in August 2026.
  - First-run onboarding is open to whoever reaches the dashboard first; only expose it beyond the
    machine deliberately.
  - Rome Cloud, a hosted version, is in preview beside the self-hosted image.
relations:
  - type: alternative-to
    to: grok-bot
    evidence:
      type: self-described
      url: https://github.com/rome-os/rome
      quote: Rome also works as an open source alternative to Grok Bot and Meta's Muse
      checkedAt: 2026-09-28
seo:
  title: "Rome Review: Self-Hosted Grok Bot Alternative"
  description: Rome is a self-hosted agent OS that turns repeated work into git-tracked actions and
    small apps you reach from Telegram, Discord or WhatsApp. MIT.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: rome-os
  repo: rome
  url: https://github.com/rome-os/rome
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
Rome approaches the Grok Bot idea from the other side. Instead of bots that remember and repeat, it has an agent that turns repeated work into software: saved actions, skills and small installable apps with their own interface and data, kept as git-tracked code you can read. It self-hosts with one Docker script under MIT. It is a month old, so treat it as an experiment worth watching. Verified against the repository on 28 September 2026.

## What it does

Ask Rome for something once and it answers in chat. Ask for it repeatedly and it can build a **Rome App**: an inbox that remembers what was triaged, a code review loop, a price tracker, a morning brief. An app combines a purpose-built interface, agent reasoning, reusable workflows and persistent data, and it keeps working after the conversation ends. When an app does not exist, describe it and Rome writes a short specification, scaffolds it into your instance and iterates with you. The result can stay private or be published to Rome's app store.

You operate it through its own dashboard and through chat channels — Telegram, Discord and WhatsApp.

## Running it

`scripts/quickstart-docker.sh` checks for Docker, pulls the published image and starts Rome at `http://localhost:7663`, bound to loopback. State lives in named Docker volumes, so re-running the script upgrades without losing data. Telemetry export stays off unless you set `OTEL_EXPORTER_OTLP_ENDPOINT`. The first person to reach the dashboard completes onboarding, so exposing it beyond the machine takes an explicit `--bind`.

## Who it is for, and who it is not for

**A good fit**

- Builders who want their agent's work to become inspectable code.
- Personal automation — briefs, trackers, triage — on a machine you control.

**Look elsewhere**

- You want bots with a full desktop computer, voice and mobile apps. [Rakazo](/apps/rakazo/) is closer to Grok Bot's shape.
- You need a stable, documented self-hosting distribution; the README calls the development stack "not the final production self-hosting distribution".

## How it compares

| | Rome | [Rakazo](/apps/rakazo/) |
|---|---|---|
| What persists | Actions, skills and apps as git-tracked code | Bot memory, routines and history |
| Where you use it | Dashboard, Telegram, Discord, WhatsApp | Web, desktop, mobile |
| Licence | MIT | Apache-2.0 |

Rome, Rakazo and [OpenMausBot](/apps/openmausbot/) are compared in [open-source Grok Bot alternatives](/collections/open-source-grok-bot-alternatives/). More MIT software is under [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/rome-os/rome> (28 Sep 2026)
- Licence file — <https://github.com/rome-os/rome/blob/main/LICENSE>
- Documentation — <https://romeos.cc/docs/rome>
