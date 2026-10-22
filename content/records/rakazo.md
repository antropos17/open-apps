---
name: Rakazo
repoUrl: https://github.com/elie222/rakazo
projectType: real-app
category: productivity
summary: Run always-on AI teammates on your own server, each with its own memory, routines and
  computer, and talk to them from the web, desktop or phone. It is a self-hostable Grok Bot
  alternative where each bot gets a browser, terminal, files and desktop, with your own model and
  sandbox provider, an Electron desktop app and an Expo mobile app.
description: Self-hosted AI teammates with their own memory and computer, used from web, desktop or mobile.
sourceDescription: Open-source Grok Bot alternative. Choose your own model and sandbox.
platforms:
  - web
  - macos
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/elie222/rakazo
  website: https://rakazo.com
distribution:
  channels:
    - type: self-host
      label: Docker Compose
      url: https://github.com/elie222/rakazo#quick-start-published-images
      verified: true
    - type: github-releases
      label: Desktop app
      url: https://github.com/elie222/rakazo/releases/latest
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
bestFor:
  - Bots that keep working on a server with their own browser, terminal and files while you are away.
  - Choosing the sandbox — local Docker, or E2B, Daytona, CreateOS or Box in the cloud.
  - Talking to a bot by voice with your own speech provider key.
whyListed:
  - Self-described Grok Bot alternative with the full shape — persistent bots, shared and private
    computers, bot-to-bot delegation and routines.
  - One installer brings up the stack with generated secrets; local Docker computers are on by
    default.
caveats:
  - Early-stage — the repository was created in August 2026 and the project calls itself beta.
  - Desktop builds cover macOS and Linux; Windows users use the web app or a server.
  - App integrations run through Composio or Pipedream Connect, which are third-party services.
relations:
  - type: alternative-to
    to: grok-bot
    evidence:
      type: self-described
      url: https://github.com/elie222/rakazo
      quote: Open-source Grok Bot alternative. Choose your own model and sandbox.
      checkedAt: 2026-09-28
seo:
  title: "Rakazo Review: Grok Bot Alternative"
  description: Rakazo runs persistent AI bots with their own browser, terminal and files, self-hosted
    with Docker and used from web, desktop or mobile. Apache-2.0.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: elie222
  repo: rakazo
  url: https://github.com/elie222/rakazo
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
Rakazo is the server-side open-source answer to Grok Bot: persistent AI teammates, each with its own conversations, memory, routines and a computer to work on, that you run yourself with your own model and sandbox. It is Apache-2.0 and comes from the author of Inbox Zero. It is also a beta that is barely two months old. Verified against the repository on 28 September 2026, at release v0.1.6.

## What it does

A bot in Rakazo is more than a chat thread. It has its own history and memory, routines it runs on a schedule, and a computer — browser, terminal, files and a graphical desktop — that is either a shared Team Computer or an isolated Private one. Bots can hand work to peer bots or short-lived subagents. Voice mode lets you talk to a bot, dictate or call it, using your own ElevenLabs, OpenAI, Cartesia or Fish Audio key. Tools come from Composio or Pipedream Connect, remote MCP servers and OpenAPI sources.

## Running it

The published-images installer needs only Docker, Compose, curl and OpenSSL: it downloads the Compose files, writes an `.env` with random secrets and starts everything at `http://127.0.0.1:5173`. Local Docker computers are on by default; E2B, Daytona, CreateOS or Box can replace them with an API key. For bots that stay on, run the same installer on a VPS behind HTTPS and connect from the desktop or mobile app.

## Who it is for, and who it is not for

**A good fit**

- People who liked the Grok Bot idea but want their own model, their own sandbox and their own data.
- Tinkerers comfortable running a Docker stack on a small server.

**Look elsewhere**

- You want a stable product. Rakazo is a beta.
- You want an agent that builds its own apps and workflows. [Rome](/apps/rome/) is built around that.

## How it compares

| | Rakazo | [OpenMausBot](/apps/openmausbot/) | [Rome](/apps/rome/) |
|---|---|---|---|
| Core idea | Persistent bots with their own computers | Desktop chat app of bots | Agent OS that builds apps and workflows |
| Clients | Web, Electron desktop, Expo mobile | Desktop app | Web dashboard |
| Sandboxes | Docker, E2B, Daytona, CreateOS, Box | Boat cloud, local VM | Docker |
| Licence | Apache-2.0 | Apache-2.0 | MIT |

All three are in [open-source Grok Bot alternatives](/collections/open-source-grok-bot-alternatives/). Other Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/elie222/rakazo> (28 Sep 2026)
- Licence file — <https://github.com/elie222/rakazo/blob/main/LICENSE>
- Self-hosting guide — <https://github.com/elie222/rakazo/blob/main/docs/self-host.md>
