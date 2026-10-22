---
name: LibreChat
repoUrl: https://github.com/LibreChat-AI/LibreChat
projectType: real-app
category: productivity
stack: react
summary: A self-hosted, multi-user AI chat platform with a ChatGPT-style interface — switch between
  OpenAI, Anthropic, Google, AWS Bedrock, Ollama and any OpenAI-compatible model in one place, with
  agents, MCP, artifacts, a code interpreter, web search and file chat.
description: LibreChat is an MIT-licensed, self-hosted AI chat platform with a ChatGPT-style
  interface, many model providers, agents, MCP and multi-user authentication, run with Docker Compose.
sourceDescription: "Enhanced ChatGPT Clone: Features Agents, MCP, Skills, DeepSeek, Anthropic, AWS,
  OpenAI, Responses API, Azure, Groq, o1, GPT-5, Mistral, OpenRouter, Vertex AI, Gemini, Artifacts, AI
  model switching, message search, Code Interpreter, langchain, DALL-E-3, OpenAPI Actions, Functions,
  Secure Multi-User Auth, Presets, open-source for self-hosting. Active"
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/LibreChat-AI/LibreChat
  website: https://librechat.ai
  docs: https://www.librechat.ai/docs
distribution:
  channels:
    - type: self-host
      label: Docker Compose
      url: https://www.librechat.ai/docs/local/docker
      verified: true
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/LibreChat-AI/LibreChat/releases
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - chat
  - productivity
bestFor:
  - One ChatGPT-style interface for a team that uses several model providers at once.
  - Organisations that need OAuth2, LDAP or email login, roles, groups and token spend controls.
  - Building shared agents with MCP servers, file search and code execution.
whyListed:
  - One of the most established self-hosted AI chat platforms — public since February 2023, MIT, with
    more than 100 commits in September 2026 alone.
  - Works with cloud providers and with local models through Ollama and other OpenAI-compatible
    servers, without a proxy.
  - Imports conversations exported from ChatGPT.
caveats:
  - The default Docker Compose stack runs several services — MongoDB, Meilisearch, pgvector and a RAG
    API — so it is heavier than a single-container chat UI.
  - The last stable release is v0.8.7 from June 2026; v0.8.8 is in release candidates.
  - The project's website says LibreChat is joining ClickHouse; the repository remains MIT-licensed.
relations:
  - type: alternative-to
    to: chatgpt
    evidence:
      type: self-described
      url: https://github.com/LibreChat-AI/LibreChat
      quote: "Enhanced ChatGPT Clone"
      checkedAt: 2026-09-29
seo:
  title: LibreChat – Open Source Self-Hosted Multi-Model AI Chat
  description: LibreChat is a self-hosted, multi-user AI chat app with a ChatGPT-style interface, many
    model providers, agents and MCP. MIT, runs with Docker Compose.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: LibreChat-AI
  repo: LibreChat
  url: https://github.com/LibreChat-AI/LibreChat
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
LibreChat is the pick for a team that wants its own ChatGPT on its own servers: a familiar chat interface in front of OpenAI, Anthropic, Google, AWS Bedrock, Azure, Ollama and any OpenAI-compatible endpoint, with multi-user login and an admin panel. It is MIT-licensed, public since February 2023 and very actively developed — more than 100 commits in September 2026. The trade-off is weight — the standard deployment is a Docker Compose stack of several services. Verified against the repository on 29 September 2026, at release v0.8.7.

## What it does

The README describes an interface "inspired by ChatGPT", and the everyday features follow that model: conversations you can edit, resubmit, branch and fork; switching model or preset mid-chat; image uploads for vision models; chatting with files; message search; and import of conversations from ChatGPT, Chatbot UI and LibreChat itself. Exports go to Markdown, text, JSON or a screenshot.

On top of chat it adds:

- **Agents** — no-code assistants with MCP servers, tools, file search and code execution, shared with specific users and groups, plus Skills and subagents.
- **Code interpreter** — sandboxed Python, Node.js, Go, C/C++, Java, PHP, Rust and Fortran.
- **Artifacts** — React, HTML and Mermaid rendered in the chat.
- **Web search**, image generation (GPT-Image-1, DALL-E, Stable Diffusion, Flux), speech-to-text and text-to-speech.
- **Multi-user access** — OAuth2, LDAP and email login, moderation, token spend tools and a browser-based admin panel for users, groups, roles and configuration.

## Running it

Clone the repository, copy the example environment file and run `docker compose up -d`. The bundled stack starts LibreChat with MongoDB, Meilisearch, a pgvector database and the RAG API; the docs also cover Helm and one-click hosts. Observability is opt-in: OpenTelemetry export and Langfuse are configured by the operator.

## Who it is for, and who it is not for

**A good fit**

- Teams replacing several ChatGPT, Claude and Gemini seats with one self-hosted interface and their own API keys.
- Administrators who need single sign-on, roles and per-group permissions.

**Look elsewhere**

- You want a desktop app that runs models offline on your own computer. [Jan](/apps/jan/) downloads and runs models locally.
- Your main job is chatting with a library of documents. [AnythingLLM](/apps/anythingllm/) is built around workspaces of documents.

## How it compares

| | LibreChat | [Jan](/apps/jan/) | [AnythingLLM](/apps/anythingllm/) | [Libre WebUI](/apps/libre-webui/) |
|---|---|---|---|---|
| Form | Self-hosted web app | Desktop app | Desktop app or Docker server | Self-hosted web app, desktop client |
| Local models | Ollama and OpenAI-compatible servers | Built in (llama.cpp) | Built in or Ollama | Ollama |
| Multi-user | Yes, with SSO and admin panel | No | Docker version | Yes |
| Licence | MIT | Apache-2.0 | MIT | Apache-2.0 |

All four are compared in [open-source ChatGPT alternatives](/collections/open-source-chatgpt-alternatives/). More MIT apps are under [MIT-licensed apps](/licenses/mit/).

## Licence in practice

LibreChat is MIT with no separate enterprise edition in the repository. The repository moved from `danny-avila/LibreChat` to the `LibreChat-AI` organisation, and the old address redirects. Model providers you connect receive what you send them.

## Verified sources

- Repository, README and LICENSE — <https://github.com/LibreChat-AI/LibreChat> (29 Sep 2026)
- Release v0.8.7 — <https://github.com/LibreChat-AI/LibreChat/releases/tag/v0.8.7>
- Docker setup — <https://www.librechat.ai/docs/local/docker>
- Website — <https://librechat.ai>
