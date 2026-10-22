---
name: Vane
repoUrl: https://github.com/ItzCrazyKns/Vane
projectType: real-app
category: productivity
summary: A self-hosted AI answering engine, formerly Perplexica — it searches the web through a bundled
  SearxNG, then answers with cited sources using a local model through Ollama or a cloud provider,
  with speed, balanced and quality modes, file uploads and local search history.
description: Vane, formerly Perplexica, is an MIT-licensed, self-hosted AI search and answering engine
  that runs in one Docker container with local or cloud models and private web search.
sourceDescription: Vane is an AI-powered answering engine.
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/ItzCrazyKns/Vane
distribution:
  channels:
    - type: self-host
      label: Docker
      url: https://github.com/ItzCrazyKns/Vane#getting-started-with-docker-recommended
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - privacy
  - web-app
bestFor:
  - A private Perplexity-style answer engine on your own server, started with one Docker command.
  - Cited answers from a local model, with web search that does not identify you.
  - Asking questions about uploaded PDFs, text files and images.
whyListed:
  - One of the most widely used self-hosted AI answer engines; the Docker image bundles SearxNG, so
    nothing else is needed.
  - Works with Ollama as well as OpenAI, Anthropic, Gemini and Groq.
caveats:
  - The project was renamed from Perplexica; older guides and Docker images use the old name.
  - The last tagged release is v1.12.2 from April 2026; development continues on master.
seo:
  title: Vane (Perplexica) – Open Source Self-Hosted AI Answer Engine
  description: Vane, formerly Perplexica, is a self-hosted AI answer engine that searches the web and
    replies with cited sources using local or cloud models. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: ItzCrazyKns
  repo: Vane
  url: https://github.com/ItzCrazyKns/Vane
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Vane — Perplexica until its rename — is the simplest way to run a Perplexity-style answer engine yourself: one Docker command starts the app with SearxNG bundled, and it answers questions with cited sources using a local model through Ollama or a cloud provider you choose. It is MIT-licensed and one of the most-starred self-hosted AI search projects. Verified against the repository on 29 September 2026, at release v1.12.2.

## What it does

Ask a question and pick a mode — **Speed** for a quick answer, **Balanced** for everyday use, **Quality** for deeper research. Vane searches the web, discussions or academic papers through SearxNG, which queries many engines without identifying you, and writes an answer with its sources. It also finds images and videos, answers questions about uploaded PDFs, text files and images, limits a search to specific domains, shows widgets for weather, calculations and stock prices, and keeps your search history locally. A Discover page surfaces trending articles.

## Running it

```bash
docker run -d -p 3000:3000 -v vane-data:/home/vane/data --name vane itzcrazykns1337/vane:latest
```

Open `http://localhost:3000` and set up your model — Ollama for local, or OpenAI, Anthropic, Gemini or Groq keys. If you already run SearxNG, a slim image points at it instead; that instance needs JSON output and the Wolfram Alpha engine enabled.

## Who it is for, and who it is not for

**A good fit**

- Self-hosters who want Perplexity's answer-with-citations experience on their own hardware.
- Anyone who wants AI search with a local model and private queries.

**Look elsewhere**

- You want accounts, shareable result links and a Postgres-backed history for many users. [Morphic](/apps/morphic/) is built as a multi-user web app.
- You want answers from your own notes and documents as much as from the web. [Khoj](/apps/khoj/) indexes your files.

## How it compares

| | Vane | [Morphic](/apps/morphic/) | [Khoj](/apps/khoj/) |
|---|---|---|---|
| Focus | Web answers with citations | Web answers with generative UI | Your docs plus the web |
| Setup | One Docker container | Docker Compose (Postgres, Redis, SearxNG) | Self-host guide, or Khoj's cloud app |
| Local models | Ollama | Ollama, OpenAI-compatible | Local or online LLMs |
| Licence | MIT | Apache-2.0 | AGPL-3.0 |

The three are compared side by side above. More MIT apps are under [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/ItzCrazyKns/Vane> (29 Sep 2026); `ItzCrazyKns/Perplexica` redirects here.
- Architecture — <https://github.com/ItzCrazyKns/Vane/tree/master/docs/architecture/README.md>
