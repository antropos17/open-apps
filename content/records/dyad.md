---
name: Dyad
repoUrl: https://github.com/dyad-sh/dyad
projectType: real-app
category: developer-tools
summary: A desktop AI app builder — describe an app and Dyad builds and runs it on your machine, with
  your own model keys or local models through Ollama and no sign-up. It is the Lovable, v0 and Bolt
  workflow without a hosted service.
description: Build apps from prompts on your own computer with your own AI keys or local models, no sign-up.
sourceDescription: Local, open-source AI app builder for power users ✨ v0 / Lovable / Replit / Bolt
  alternative
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/dyad-sh/dyad
  website: https://dyad.sh
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/dyad-sh/dyad/releases/latest
      verified: true
    - type: website
      label: dyad.sh downloads
      url: https://www.dyad.sh/#download
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - developer-tools
  - privacy
bestFor:
  - Building web apps from prompts without handing your code or ideas to a hosted builder.
  - Using your own OpenAI, Anthropic or Gemini keys, or a local model through Ollama.
  - Keeping the generated project as ordinary code on your disk.
whyListed:
  - Self-described v0, Lovable, Replit and Bolt alternative that runs entirely as a desktop app.
  - No sign-up; builds for macOS (Apple Silicon and Intel), Windows and Linux.
caveats:
  - Open-core. Code outside src/pro is Apache-2.0; src/pro is under the Functional Source License
    (FSL-1.1-ALv2), which is not an open-source licence until each release converts to Apache-2.0.
  - Dyad Pro, a paid plan, adds Pro modes for large codebases and monthly AI credits.
relations:
  - type: alternative-to
    to: lovable
    evidence:
      type: self-described
      url: https://github.com/dyad-sh/dyad
      quote: Local, open-source AI app builder for power users ✨ v0 / Lovable / Replit / Bolt alternative
      checkedAt: 2026-09-29
seo:
  title: "Dyad Review: Local Lovable and v0 Alternative"
  description: Dyad builds apps from prompts on your own computer with your own AI keys or local models,
    on macOS, Windows and Linux. Apache-2.0 core, no sign-up.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: dyad-sh
  repo: dyad
  url: https://github.com/dyad-sh/dyad
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Dyad is the open-source answer to Lovable, v0 and Bolt for people who want the app builder on their own machine: a desktop app that turns a prompt into a working app, runs it locally, and uses your own model keys or a local model. No sign-up, builds for all three desktop platforms, and an Apache-2.0 core. Like several AI tools in this directory, it is open-core — the Pro code in the same repository is not open source. Verified against the repository on 29 September 2026, at release v1.16.0.

## What it does

Describe the app you want, and Dyad generates the project, runs it in a local preview and lets you keep iterating in chat. The project is ordinary code on your disk, so you can open it in your editor, commit it and deploy it wherever you like. Models are your choice: your own OpenAI, Anthropic or Gemini keys, or local models through Ollama, according to the repository's topics and README.

## Who it is for, and who it is not for

**A good fit**

- Developers and power users who like prompt-to-app tools but not the lock-in of a hosted builder.
- Anyone who needs the code and the prompts to stay on their own machine.

**Look elsewhere**

- You want a hosted builder with a database, auth and deployment already wired up, and no setup. That is what Lovable and Bolt sell.
- You need every line you run to be under an open-source licence — check what lives in `src/pro` first.

## Licence in practice

The README is explicit: everything outside `src/pro` is Apache-2.0; everything in `src/pro` is "fair-source" under FSL-1.1-ALv2, which restricts competing commercial use and converts each release to Apache-2.0 after two years. Forking the open part is straightforward; redistributing the Pro part is not. More Apache-licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/), and other developer tools under [Developer tools](/categories/developer-tools/).

## Installing it

Download from dyad.sh or the releases page: `.zip` builds for Apple Silicon and Intel Macs, a Windows `.exe`, and `.deb`, `.rpm` or `.AppImage` for Linux. Open it, add a model key or point it at Ollama, and describe your first app. For a coding agent that works on existing repositories instead, see [OpenWork](/apps/openwork/) or [NextCoWork](/apps/nextcowork/).

## Verified sources

- Repository and README — <https://github.com/dyad-sh/dyad> (29 Sep 2026)
- Licence files — <https://github.com/dyad-sh/dyad/blob/main/LICENSE>, <https://github.com/dyad-sh/dyad/blob/main/src/pro/LICENSE>
- Releases — <https://github.com/dyad-sh/dyad/releases>
