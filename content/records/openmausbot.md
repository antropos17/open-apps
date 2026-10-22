---
name: OpenMausBot
repoUrl: https://github.com/milind-soni/OpenMausBot
projectType: real-app
category: productivity
summary: An Electron chat app where every contact is an AI bot — Claude, Codex or Grok Build running
  on the CLIs already installed on your machine — each with its own personality, model, computer and
  connected apps, asking before risky actions.
description: OpenMausBot is an Apache-2.0 desktop app for macOS, Windows and Ubuntu that turns your
  local Claude, Codex and Grok CLIs into a roster of AI bots you chat with, each with its own computer.
sourceDescription: Open Source Alternative to Grok Bot with a virtual machine that bots can use
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/milind-soni/OpenMausBot
  website: https://www.openmausbot.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/milind-soni/OpenMausBot/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - productivity
  - privacy
bestFor:
  - Using your existing Claude or ChatGPT subscription through their CLIs as a team of bots, with no
    new account.
  - Bots that work on a cloud desktop, a local VM or — with opt-in — your own Mac.
  - Installing a whole team of bots from one Markdown playbook.
whyListed:
  - Self-described Grok Bot alternative with signed and notarised Mac builds, a Windows installer and
    Ubuntu packages.
  - Local-first — one harness server on 127.0.0.1 owns every agent process; transcripts and keys stay
    in ~/.openmausbot.
  - A permission broker turns shell commands and file edits into Allow or Deny decisions.
caveats:
  - Early-stage — the repository was created in August 2026.
  - Each bot's cloud computer uses Boat, and connected apps use Composio — both third-party services
    with their own accounts; Boat is paid after its trial.
  - Needs at least one of the claude, codex or grok CLIs installed and logged in.
  - Control of your own computer is limited to macOS and Ubuntu on Xorg, after explicit opt-in.
relations:
  - type: alternative-to
    to: grok-bot
    evidence:
      type: self-described
      url: https://github.com/milind-soni/OpenMausBot
      quote: Open Source Alternative to Grok Bot with a virtual machine that bots can use
      checkedAt: 2026-09-29
seo:
  title: OpenMausBot – Open Source Grok Bot Alternative for Desktop
  description: OpenMausBot turns your local Claude, Codex and Grok CLIs into AI bots you chat with, each
    with its own computer, on macOS, Windows and Ubuntu. Apache-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: milind-soni
  repo: OpenMausBot
  url: https://github.com/milind-soni/OpenMausBot
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
OpenMausBot is the Grok Bot alternative for people who want it as a desktop app rather than a server: a chat app where each contact is an AI bot with its own personality, model, computer and connected apps. The twist is where the intelligence comes from — the `claude`, `codex` and `grok` command-line tools already installed and logged in on your machine, so your existing subscriptions do the work with no proxy in between. It is Apache-2.0 and ships signed builds for three platforms. The computers and app connections rely on paid third-party services. Verified against the repository on 29 September 2026, at release v0.1.89.

## What it does

Bots sit in a sidebar like contacts. Pick a model per bot and switch mid-conversation. Open a bot's **Computer** panel and its desktop starts — a cloud Linux machine with a live preview you can take over, an isolated local VM, or, after explicit opt-in on macOS or Ubuntu Xorg, your own computer. Shell commands, file edits and questions arrive as inline cards to allow, deny or answer. Through Composio, bots can use Gmail, Slack, GitHub, Notion, Linear and hundreds of other apps. A whole team of bots, with their skills and connections, can be installed from one Markdown playbook. Voice replies and calls work with ElevenLabs, Fish Audio, xAI, built-in Mac voices or local Chatterbox.

## Who it is for, and who it is not for

**A good fit**

- People who already pay for Claude, ChatGPT or Grok and have the CLIs set up.
- Anyone who wants to watch bots work on a desktop and step in.

**Look elsewhere**

- You want bots to keep running on a server while your computer is off. [Rakazo](/apps/rakazo/) self-hosts the whole stack.
- You want no third-party services at all. The cloud computer (Boat) and app connections (Composio) are outside services; the local VM avoids the first.

## How it compares

| | OpenMausBot | [Rakazo](/apps/rakazo/) | [Rome](/apps/rome/) |
|---|---|---|---|
| Form | Desktop chat app | Self-hosted server + web, desktop, mobile | Self-hosted agent OS |
| Models | Your local Claude, Codex, Grok CLIs | Your model credentials | Your model provider |
| Bot computers | Boat cloud, local VM, or your machine | Docker, E2B, Daytona, CreateOS, Box | Docker |
| Licence | Apache-2.0 | Apache-2.0 | MIT |

All three are compared in [open-source Grok Bot alternatives](/collections/open-source-grok-bot-alternatives/). Other Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/milind-soni/OpenMausBot> (29 Sep 2026)
- Licence file — <https://github.com/milind-soni/OpenMausBot/blob/main/LICENSE>
- Releases — <https://github.com/milind-soni/OpenMausBot/releases>
