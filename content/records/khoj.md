---
name: Khoj
repoUrl: https://github.com/khoj-ai/khoj
projectType: real-app
category: productivity
summary: A self-hostable personal AI that answers from the internet and your own documents — PDFs,
  Markdown, Org-mode, Word, Notion — with any local or online model, custom agents, scheduled research
  and semantic search, reachable from a browser, Obsidian, Emacs, desktop, phone or WhatsApp.
description: Khoj is an AGPL-3.0 personal AI assistant that searches the web and your own documents
  with local or online models, self-hosted or on Khoj's cloud app.
sourceDescription: Your AI second brain. Self-hostable. Get answers from the web or your docs. Build
  custom agents, schedule automations, do deep research.
platforms:
  - web
  - linux
  - macos
  - windows
licenses:
  - agpl-3.0
links:
  github: https://github.com/khoj-ai/khoj
  website: https://khoj.dev
  docs: https://docs.khoj.dev
distribution:
  channels:
    - type: self-host
      label: Self-hosting guide
      url: https://docs.khoj.dev/get-started/setup
      verified: true
    - type: web-app
      label: Khoj cloud app
      url: https://app.khoj.dev
      verified: true
tags:
  - self-hosted
  - privacy
  - notes
  - productivity
bestFor:
  - Asking questions across your own notes and documents and the web in one place.
  - Obsidian and Emacs users who want an assistant inside their editor.
  - Scheduled research that arrives as a newsletter or notification.
whyListed:
  - Answers from your documents as well as the web, with semantic search across them.
  - Works with local and online models, self-hosted or on Khoj's cloud app.
  - Clients for the browser, Obsidian, Emacs, desktop, phone and WhatsApp.
caveats:
  - The last tagged release is a 2.0 beta from March 2026, and the team now also builds a separate
    product, Pipali.
seo:
  title: Khoj – Open Source Self-Hosted AI Second Brain and Search
  description: Khoj is a self-hostable personal AI that answers from the web and your own documents
    with local or online models, in a browser, Obsidian or Emacs. AGPL.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: khoj-ai
  repo: khoj
  url: https://github.com/khoj-ai/khoj
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Khoj is the pick when you want Perplexity-style answers from your own knowledge as well as the web: it indexes your documents — PDFs, Markdown, Org-mode, Word and Notion files — searches the internet, and answers with any local or online model. It reaches you wherever you work, from a browser to Obsidian, Emacs, a phone or WhatsApp, and it self-hosts under AGPL-3.0. The thing to know: its last tagged release is a beta from March, and the team is now also building another product. Verified against the repository on 29 September 2026, at release 2.0.0-beta.28.

## What it does

Chat with a local model such as Llama, Qwen, Gemma or Mistral, or an online one such as GPT, Claude, Gemini or DeepSeek. Khoj pulls answers from the internet and from the documents you connect, with advanced semantic search to find the right passage. **Agents** combine custom knowledge, a persona, a chat model and tools for a given role. **Automations** run repetitive research on a schedule and deliver it as personal newsletters or notifications. It can also generate images and read messages aloud.

## Who it is for, and who it is not for

**A good fit**

- Knowledge workers with large note collections in Obsidian, Emacs Org-mode or Notion.
- People who want web research and document search in one self-hosted assistant.

**Look elsewhere**

- You only want web answers with citations, set up in a minute. [Vane](/apps/vane/) is one Docker command.
- You want a polished multi-user search app with share links. [Morphic](/apps/morphic/) fits better.

## How it compares

| | Khoj | [Vane](/apps/vane/) | [Morphic](/apps/morphic/) |
|---|---|---|---|
| Your documents | Indexed and searched | File uploads per question | File uploads |
| Clients | Browser, Obsidian, Emacs, desktop, phone, WhatsApp | Browser | Browser |
| Licence | AGPL-3.0 | MIT | Apache-2.0 |

The three are compared side by side above. More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Licence and hosting

AGPL-3.0: self-host and modify freely; publish your changes if you run a modified Khoj for others over a network. Khoj also runs a cloud app and sells enterprise deployments — cloud, on-premises or hybrid — alongside the open code.

## Verified sources

- Repository and README — <https://github.com/khoj-ai/khoj> (29 Sep 2026)
- Self-hosting guide — <https://docs.khoj.dev/get-started/setup>
