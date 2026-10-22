---
name: Libre WebUI
repoUrl: https://github.com/libre-webui/libre-webui
projectType: real-app
category: productivity
stack: react
summary: A self-hosted AI workspace — chat with local Ollama or cloud models, search your own
  documents, generate artifacts, and give agent tasks an isolated workspace with files, a terminal,
  diffs and a live preview — run from npm, Docker, Kubernetes or a desktop client.
description: Libre WebUI is an Apache-2.0, self-hosted AI workspace with local models through Ollama,
  document chat, artifacts and sandboxed work environments, and no application telemetry.
sourceDescription: A local-first workspace for chat, private knowledge, artifacts, and isolated
  model-driven work. Self-hosted. Provider-flexible. Apache 2.0.
platforms:
  - web
  - macos
  - windows
  - linux
licenses:
  - apache-2.0
links:
  github: https://github.com/libre-webui/libre-webui
  website: https://librewebui.org
  docs: https://docs.librewebui.org
distribution:
  channels:
    - type: self-host
      label: npm or Docker Compose
      url: https://github.com/libre-webui/libre-webui#quick-start
      verified: true
    - type: github-releases
      label: Desktop client
      url: https://github.com/libre-webui/libre-webui/releases/latest
      verified: true
tags:
  - self-hosted
  - privacy
  - web-app
  - productivity
bestFor:
  - A private chat interface for Ollama that starts with one npx command.
  - Agent tasks that need an isolated workspace with a terminal and live preview.
  - Small teams — accounts, roles, groups, channels and SSO are included.
whyListed:
  - Ships without application telemetry or analytics, and needs no cloud account for local models.
  - Actively developed, with thousands of commits and frequent releases.
caveats:
  - Small — 88 stars and five contributors when checked, so the community and outside testing are
    limited.
  - The feature list is very broad for a project this size; expect some areas to be less mature than
    others.
  - Docker is required only for the sandboxed Work environments.
  - It does not describe itself as a ChatGPT alternative; it is listed with them for doing the same
    job.
relations:
  - type: alternative-to
    to: chatgpt
    evidence:
      type: editorial
      url: https://github.com/libre-webui/libre-webui
      checkedAt: 2026-09-29
seo:
  title: Libre WebUI – Open Source Self-Hosted AI Chat for Ollama
  description: Libre WebUI is a self-hosted AI workspace for Ollama and cloud models, with document
    chat, artifacts and sandboxed agent tasks. Apache-2.0, no telemetry.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: libre-webui
  repo: libre-webui
  url: https://github.com/libre-webui/libre-webui
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
Libre WebUI is a small, actively developed self-hosted AI workspace: chat with local models through Ollama or with cloud providers, search your documents, generate artifacts, and give agent tasks a sandboxed project environment. It is Apache-2.0 and ships with no application telemetry. It is also a small project — 88 stars and five contributors when checked — so this is a short record rather than a full review. Verified against the repository on 28 September 2026, at release v0.38.0.

## What it does

`npx libre-webui@latest` starts it at `http://localhost:8080`; the first account becomes the administrator. Pull a model with Ollama and you can chat with no cloud account or key. From there the README lists a long feature set: document chat with cited sources, self-hosted SearXNG web search, artifacts (HTML, SVG, JSON, code, multi-file projects), persistent **Workspaces** with files, terminal, diffs and previews, a watchable **Work Computer** with a browser per agent, team channels, notes, calendars, automations, voice, media generation, and an OpenAI-compatible `/v1` API on scoped tokens.

Remote providers are optional. The README is direct about it: when you use one, it receives what you send.

## Who it is for

Self-hosters who already run Ollama and want one interface for chat, documents and agent work, and who are comfortable adopting a young project. If you want the most established option for document chat, [AnythingLLM](/apps/anythingllm/) has been around since 2023. For agents on local files, see [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).

## Running it

Node.js 22.22 or newer for the npm path; `docker compose up -d` in a checkout for the default stack, with guides for external Ollama, GPUs and production. Helm charts and a desktop client are also published. Docker is needed only for the sandboxed Work environments.

## Licence

Apache-2.0 for the repository, confirmed from the LICENSE file. Other Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/libre-webui/libre-webui> (28 Sep 2026)
- Releases — <https://github.com/libre-webui/libre-webui/releases>
- Documentation — <https://docs.librewebui.org>
