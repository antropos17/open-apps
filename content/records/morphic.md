---
name: Morphic
repoUrl: https://github.com/miurla/morphic
projectType: real-app
category: productivity
summary: A self-hosted AI search engine that answers with cited sources
  and rich results like images and grids, using the AI model and search provider you choose. It is a
  Next.js app that streams answers as generative UI, with PostgreSQL chat history, shareable results
  and Supabase sign-in, and self-hosts with Docker Compose.
description: Self-hosted AI search engine that answers with cited sources, using the model and search provider you choose.
sourceDescription: An AI-powered search engine with a generative UI
platforms:
  - web
  - linux
licenses:
  - apache-2.0
links:
  github: https://github.com/miurla/morphic
  website: https://chat.morphic.sh
distribution:
  channels:
    - type: self-host
      label: Docker Compose
      url: https://github.com/miurla/morphic#docker-recommended
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
bestFor:
  - A multi-user AI search app with accounts, history and shareable result links.
  - Answers that come back as rich layouts rather than plain text.
  - Choosing both the model and the search provider.
whyListed:
  - Docker Compose brings up PostgreSQL, Redis, SearxNG and the app with no search API key needed.
  - Model selector with OpenAI, Anthropic, Google, Ollama, Vercel AI Gateway and OpenAI-compatible
    providers.
caveats:
  - More moving parts than a single container — PostgreSQL, Redis and SearxNG run alongside it.
seo:
  title: "Morphic Review: Self-Hosted AI Search Engine"
  description: Morphic is a self-hosted AI search engine that answers with cited sources, using your
    choice of model and search provider. Docker Compose, Apache-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: miurla
  repo: morphic
  url: https://github.com/miurla/morphic
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Morphic is the self-hosted AI search engine built as a proper multi-user web app: grounded, cited answers that render as rich inline layouts, a model selector across providers, PostgreSQL chat history, shareable result links, sign-in through Supabase and a guest mode. It is Apache-2.0 and self-hosts with Docker Compose. Verified against the repository on 29 September 2026, at release v1.7.0.

## What it does

Ask a question in **Quick** or **Adaptive** mode and Morphic searches, then streams a cited answer. What sets it apart is the generative UI: instead of plain Markdown, the answer is streamed as a JSON spec that renders images with their sources, grids and headings live. You pick the model — OpenAI, Anthropic, Google, Ollama, Vercel AI Gateway or any OpenAI-compatible provider — and the search provider — SearxNG, Tavily, Brave or Exa. Files can be uploaded, and results shared by URL.

## Running it

Clone the repository, copy `.env.local.example` to `.env.local`, set at least one model provider key, and run `docker compose up -d`. Compose starts PostgreSQL, Redis, SearxNG and Morphic; no search API key is needed with the bundled SearxNG. Open `http://localhost:3000` and choose a model.

## Who it is for, and who it is not for

**A good fit**

- Teams or families who want one AI search server with accounts and history.
- Builders studying how to stream generative UI with the Vercel AI SDK.

**Look elsewhere**

- You want the lightest possible setup. [Vane](/apps/vane/) runs in one container.
- You want answers grounded in your own documents. [Khoj](/apps/khoj/) indexes them.

## How it compares

| | Morphic | [Vane](/apps/vane/) | [Khoj](/apps/khoj/) |
|---|---|---|---|
| Answer format | Generative UI | Cited text, widgets | Cited text |
| Accounts and sharing | Supabase auth, share links | Local search history | Web app plus editor and chat clients |
| Licence | Apache-2.0 | MIT | AGPL-3.0 |

Other Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/miurla/morphic> (29 Sep 2026)
- Configuration — <https://github.com/miurla/morphic/blob/main/docs/CONFIGURATION.md>
