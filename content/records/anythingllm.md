---
name: AnythingLLM
repoUrl: https://github.com/Mintplex-Labs/anything-llm
projectType: real-app
category: productivity
stack: javascript
summary: An all-in-one AI app for chatting with your documents, with citations, and running agents
  on local or cloud models, as a desktop app or a multi-user Docker server. It adds no-code agent
  flows, scheduled tasks, model routing and a built-in vector database.
description: Chat with your own documents and run AI agents with local or cloud models, on desktop or Docker.
sourceDescription: Stop renting your intelligence. Own it with AnythingLLM. Everything you need for a
  powerful local-first agent experience
platforms:
  - macos
  - windows
  - linux
  - web
  - desktop
licenses:
  - mit
links:
  github: https://github.com/Mintplex-Labs/anything-llm
  website: https://anythingllm.com
  docs: https://docs.anythingllm.com
distribution:
  channels:
    - type: website
      label: Desktop downloads
      url: https://anythingllm.com/download
      verified: true
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/Mintplex-Labs/anything-llm/releases/latest
      verified: true
    - type: self-host
      label: Docker
      url: https://github.com/Mintplex-Labs/anything-llm/tree/master/docker
      verified: true
tags:
  - self-hosted
  - privacy
  - desktop-app
  - productivity
  - cross-platform
bestFor:
  - A private "ChatGPT over our documents" for a team, with per-user permissions.
  - Running entirely on one computer with a local model and the built-in vector database.
  - Swapping model, embedder and vector database providers without changing tools.
whyListed:
  - One of the most established open-source AI workspaces — public since June 2023, MIT, frequent
    releases.
  - Works fully locally by default — built-in embedder and LanceDB — and connects to dozens of model
    providers when you want them.
  - Agents, MCP, scheduled tasks and a developer API in the same app.
caveats:
  - Anonymous usage telemetry is on by default; turn it off in Privacy settings or with
    DISABLE_TELEMETRY.
  - Multi-user accounts, permissions and the embeddable chat widget are only in the Docker version,
    not the desktop app.
relations:
  - type: alternative-to
    to: chatgpt
    evidence:
      type: self-described
      url: https://github.com/Mintplex-Labs/anything-llm
      quote: lets you build a private, fully-featured ChatGPT—without compromises
      checkedAt: 2026-09-29
seo:
  title: "AnythingLLM Review: Private AI for Your Docs"
  description: AnythingLLM lets you chat with your documents and run AI agents with local or cloud
    models, on desktop or a multi-user Docker server. MIT-licensed.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: Mintplex-Labs
  repo: anything-llm
  url: https://github.com/Mintplex-Labs/anything-llm
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
AnythingLLM is the safe default for "a private ChatGPT over our own documents": MIT-licensed, public since 2023, available as a desktop app for macOS, Windows and Linux and as a multi-user Docker server, and able to run entirely on one machine with a local model. It has grown well beyond document chat into agents, flows and scheduled tasks. Two defaults to change on day one: telemetry is on, and team features need the Docker version. Verified against the repository on 28 September 2026, at release v1.16.2.

## What it does

Create a workspace, drop in PDFs, text or Word files, and chat with them; answers cite their sources. Around that core sit AI agents that can browse the web, a no-code agent-flow builder, MCP compatibility, scheduled tasks on a cron, memories the model keeps about you or a workspace, and dynamic routing that sends each chat to the provider and model your rules pick. A full developer API covers custom integrations.

Everything is swappable. Models can be any llama.cpp-compatible local model, Ollama, LM Studio, LocalAI or dozens of hosted providers. The embedder defaults to a built-in one, and the vector database defaults to LanceDB, with PGVector, Chroma, Qdrant, Weaviate, Milvus and others available.

## Desktop or Docker

| | Desktop app | Docker |
|---|---|---|
| Users | One | Many, with permissions |
| Embeddable website chat widget | No | Yes |
| Where it runs | Your computer | Any server or cloud |

Pick the desktop app for yourself, the Docker image for a team. A bare-metal install without Docker is documented too.

## Who it is for, and who it is not for

**A good fit**

- Teams that want a self-hosted document assistant with accounts and permissions.
- Individuals who want document chat and agents fully offline.

**Look elsewhere**

- You want an agent that works on files in folders on your computer. See [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).
- You want a lighter self-hosted chat interface with isolated work environments. [Libre WebUI](/apps/libre-webui/) is smaller and newer.

## How it compares

| | AnythingLLM | [Libre WebUI](/apps/libre-webui/) | [OpenWork](/apps/openwork/) |
|---|---|---|---|
| Focus | Documents, agents, multi-user | Chat, artifacts, isolated work | Agents on local files |
| Telemetry | On by default, opt-out | None in the app | Not described in the README |
| Licence | MIT | Apache-2.0 | MIT app, commercial `ee/` |

## Privacy and licence

The code is MIT. Mintplex Labs collects anonymous usage events — installation type, document added or removed with no document details, which vector database and model provider are in use — until you disable it in the sidebar's Privacy settings or set `DISABLE_TELEMETRY=true`. More MIT apps are in [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/Mintplex-Labs/anything-llm> (28 Sep 2026)
- Releases — <https://github.com/Mintplex-Labs/anything-llm/releases>
- Documentation — <https://docs.anythingllm.com>
