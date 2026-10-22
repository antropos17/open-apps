---
name: Presenton
repoUrl: https://github.com/presenton/presenton
projectType: real-app
category: productivity
summary: An AI presentation generator you can self-host or run as a desktop app — create decks from a
  prompt, a document or your own PowerPoint design, edit them by drag and drop, and export fully
  editable PPTX, with any model provider including Ollama and a generation API.
description: Presenton is an Apache-2.0 AI presentation generator for the web, Docker and desktop that
  exports editable PowerPoint files and works with local or cloud models.
sourceDescription: Open-Source AI Presentation Generator and API (Gamma, Canva, Beautiful AI,
  Decktopus, Presentations AI Alternative)
platforms:
  - web
  - macos
  - windows
  - linux
licenses:
  - apache-2.0
links:
  github: https://github.com/presenton/presenton
  website: https://presenton.ai
  docs: https://docs.presenton.ai
distribution:
  channels:
    - type: self-host
      label: Docker
      url: https://docs.presenton.ai/v3/get-started/quickstart
      verified: true
    - type: github-releases
      label: Desktop app
      url: https://github.com/presenton/presenton/releases
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
  - privacy
bestFor:
  - Generating decks from a prompt or a document without a Gamma subscription.
  - Teams that must deliver editable PowerPoint files, on their own templates.
  - Generating presentations from other software through an API.
whyListed:
  - Self-described Gamma alternative with fully editable PPTX export.
  - Works with Ollama and LM Studio as well as OpenAI, Anthropic, Gemini, Bedrock and other providers.
  - Self-hosts with Docker; a desktop app is also published.
caveats:
  - Anonymous usage tracking is on unless you set DISABLE_ANONYMOUS_TRACKING=true.
  - The desktop app is labelled beta.
relations:
  - type: alternative-to
    to: gamma
    evidence:
      type: self-described
      url: https://github.com/presenton/presenton
      quote: Open-Source AI Presentation Generator and API (Gamma, Canva, Beautiful AI, Decktopus, Presentations AI Alternative)
      checkedAt: 2026-09-29
seo:
  title: Presenton – Open Source Gamma Alternative for AI Slides
  description: Presenton generates slide decks from a prompt or document, self-hosted or on desktop,
    with editable PPTX export and any model including Ollama. Apache-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: presenton
  repo: presenton
  url: https://github.com/presenton/presenton
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Presenton is the open-source Gamma alternative to try if the deliverable has to be a real PowerPoint file: it generates decks from a prompt, an uploaded document or your own PowerPoint design, lets you polish them by hand, and exports fully editable PPTX. It self-hosts with Docker or runs as a desktop app, works with local models through Ollama or LM Studio, and exposes a generation API. Apache-2.0. Verified against the repository on 29 September 2026, at desktop release v0.9.11-beta.

## What it does

Start from a prompt, a document or an existing PowerPoint design; choose a built-in template — pitch deck, business report, executive update, education — or your own; generate; then edit with a drag-and-drop interface and export. Because the export is editable PPTX rather than an image or a web page, the result works in PowerPoint, Keynote or Google Slides like any other deck. The same engine is available as an API for generating presentations from other software.

Models are your choice: Ollama, LM Studio, OpenAI, Gemini, Vertex AI, Azure OpenAI, Amazon Bedrock, Fireworks, Together AI, Anthropic or any OpenAI-compatible provider.

## Who it is for, and who it is not for

**A good fit**

- Teams that present in PowerPoint and want AI drafts on their own templates.
- Organisations that cannot send internal documents to a hosted slide generator.

**Look elsewhere**

- You want Gamma's web-page-style "cards" rather than slides.
- You want a presentation framework you write by hand in Markdown; that is a different tool.

## Privacy and licence

The code is Apache-2.0. Presenton sends anonymous usage data by default; set `DISABLE_ANONYMOUS_TRACKING=true` to turn it off. With a local model and tracking disabled, nothing needs to leave your server. Other Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/), and more office tools under [Productivity](/categories/productivity/). For AI agents that also produce slides from your files, see [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).

## Verified sources

- Repository and README — <https://github.com/presenton/presenton> (29 Sep 2026)
- Quick start — <https://docs.presenton.ai/v3/get-started/quickstart>
- Releases — <https://github.com/presenton/presenton/releases>
