---
name: Jan
repoUrl: https://github.com/janhq/jan
projectType: real-app
category: productivity
stack: tauri
summary: A desktop AI chat app for macOS, Windows and Linux that downloads and runs open models such as
  Llama, Gemma and Qwen offline on your computer. It connects to cloud providers when you want them
  and serves a local OpenAI-compatible API.
description: Chat with open AI models offline on Mac, Windows and Linux, a ChatGPT alternative.
sourceDescription: Jan is an open source alternative to ChatGPT that runs 100% offline on your computer.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/janhq/jan
  website: https://jan.ai
  docs: https://jan.ai/docs
distribution:
  channels:
    - type: website
      label: Desktop downloads
      url: https://jan.ai/
      verified: true
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/janhq/jan/releases/latest
      verified: true
    - type: microsoft-store
      label: Microsoft Store
      url: https://apps.microsoft.com/detail/xpdcnfn5cpzlqb
      verified: true
    - type: flathub
      label: Flathub
      url: https://flathub.org/apps/ai.jan.Jan
      verified: true
tags:
  - foss-alternative
  - offline-first
  - privacy
  - desktop-app
  - cross-platform
bestFor:
  - Chatting with an open model on your own laptop, with no account and no internet connection.
  - Trying models from Hugging Face without the command line.
  - Giving other local tools an OpenAI-compatible endpoint at localhost:1337.
whyListed:
  - Describes itself as an open-source ChatGPT alternative and runs fully offline.
  - Installers for macOS, Windows and Linux, plus the Microsoft Store and Flathub.
  - Product analytics are off until you allow them at first launch.
caveats:
  - Local models need real hardware — the README suggests 8 GB of RAM for 3B models, 16 GB for 7B and
    32 GB for 13B.
  - A single-user desktop app; there are no shared accounts or team administration.
relations:
  - type: alternative-to
    to: chatgpt
    evidence:
      type: self-described
      url: https://github.com/janhq/jan
      quote: "Jan is an open source alternative to ChatGPT that runs 100% offline on your computer."
      checkedAt: 2026-09-29
seo:
  title: "Jan Review: Offline ChatGPT Alternative"
  description: Jan runs open models like Llama, Gemma and Qwen offline on macOS, Windows and Linux,
    with optional cloud models and a local OpenAI-style API. Apache-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: janhq
  repo: jan
  url: https://github.com/janhq/jan
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Jan is the simplest way to have a ChatGPT-style assistant that never leaves your computer: install it on macOS, Windows or Linux, download an open model from inside the app, and chat offline. It is Apache-2.0, public since August 2023, and asks before collecting any usage analytics. What it is not is a team server — it is one person's desktop app. Verified against the repository on 29 September 2026, at release v0.8.4.

## What it does

Jan downloads and runs open models — the README names Llama, Gemma, Qwen and gpt-oss — from Hugging Face, using a bundled llama.cpp engine built for CPU, Vulkan, Metal, CUDA or ROCm. When a local model is not enough, you can connect cloud models from OpenAI, Anthropic, Mistral, Groq, MiniMax and others with your own keys.

Beyond chat:

- **Custom assistants** with their own instructions for specific tasks.
- **MCP** support for tools and agent-style use.
- **A local API server** at `localhost:1337` that speaks the OpenAI API, so other apps on your machine can use the model Jan is running.

## Privacy

Jan's privacy page says nothing is collected until you choose at first launch, and the choice can be changed in Settings. When allowed, it counts active users and retention against a random ID; it states it does not log chats, prompts, files or model choices. Cloud models, of course, see whatever you send them.

## Who it is for, and who it is not for

**A good fit**

- Individuals who want private, offline AI chat without running a server.
- Developers who want a local OpenAI-compatible endpoint with a graphical model manager.

**Look elsewhere**

- You need one chat service for a whole team with logins and roles. [LibreChat](/apps/librechat/) is built for multi-user self-hosting.
- You want answers grounded in a library of your documents. [AnythingLLM](/apps/anythingllm/) is organised around document workspaces.

## How it compares

| | Jan | [LibreChat](/apps/librechat/) | [AnythingLLM](/apps/anythingllm/) |
|---|---|---|---|
| Form | Desktop app | Self-hosted web app | Desktop app or Docker server |
| Runs models itself | Yes (llama.cpp) | No — connects to Ollama or APIs | Yes, or via Ollama |
| Multi-user | No | Yes | Docker version |
| Analytics | Off until allowed | Operator-configured | On by default, can be disabled |
| Licence | Apache-2.0 | MIT | MIT |

See all of them in [open-source ChatGPT alternatives](/collections/open-source-chatgpt-alternatives/). More permissively licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/), and other Tauri desktop apps under [Tauri](/stacks/tauri/).

## Licence in practice

GitHub does not detect a licence because the LICENSE file adds a copyright header and a line requesting attribution in user-facing materials; the text itself is the Apache License 2.0, and the README says "Apache 2.0". The repository was previously under `menloresearch/jan`, which now redirects to `janhq/jan`. Contributors are asked to sign their commits.

## Verified sources

- Repository, README and LICENSE — <https://github.com/janhq/jan> (29 Sep 2026)
- Release v0.8.4 (23 July 2026) — <https://github.com/janhq/jan/releases/latest>
- Privacy — <https://jan.ai/docs/desktop/privacy>
- Website — <https://jan.ai>
