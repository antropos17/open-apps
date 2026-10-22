---
name: SwarmUI
repoUrl: https://github.com/mcmonkeyprojects/SwarmUI
projectType: real-app
category: media
summary: A beginner-friendly web app for making AI images and video on your own computer, with a
  simple Generate tab, an image editor and a grid for comparing prompts and models. It runs on a
  ComfyUI backend, keeps the raw ComfyUI graph one tab away and can spread work across several GPUs.
description: A beginner-friendly web app for generating AI images and video locally, built on
  ComfyUI.
sourceDescription: SwarmUI (formerly StableSwarmUI), A Modular Stable Diffusion Web-User-Interface,
  with an emphasis on making powertools easily accessible, high performance, and extensibility.
platforms:
  - windows
  - macos
  - linux
  - web
licenses:
  - mit
links:
  github: https://github.com/mcmonkeyprojects/SwarmUI
  website: https://swarmui.net
  docs: https://github.com/mcmonkeyprojects/SwarmUI/blob/master/docs/README.md
distribution:
  channels:
    - type: github-releases
      platform: windows
      label: Windows install script
      url: https://github.com/mcmonkeyprojects/SwarmUI/releases/latest
      verified: true
    - type: self-host
      label: Docker
      url: https://github.com/mcmonkeyprojects/SwarmUI/blob/master/docs/Docker.md
      verified: true
tags:
  - media
  - design-tools
  - self-hosted
  - offline-first
bestFor:
  - Getting ComfyUI's model support behind a simple prompt-and-generate interface.
  - Comparing prompts, models and settings side by side with the grid generator.
  - Running generation on a home server or cloud GPU and using it from a browser.
whyListed:
  - Active since 2023, first under Stability AI and since June 2024 under its original author, with
    commits in the past week.
  - Beginners and advanced users share one tool — a Generate tab and the full ComfyUI graph.
  - MIT-licensed, with no paid tier; the author funds it through donations.
caveats:
  - Still labelled beta (v0.9.8); the README calls its status "Almost-Release".
  - It depends on ComfyUI, which it installs as its backend; ComfyUI is GPL-3.0.
  - On macOS it runs only on Apple Silicon; installing needs .NET, Git and Python.
seo:
  title: "SwarmUI Review: Local AI Image Generator"
  description: SwarmUI is a beginner-friendly web UI for local AI image and video generation on top of
    ComfyUI, with an image editor and grid generator. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: mcmonkeyprojects
  repo: SwarmUI
  url: https://github.com/mcmonkeyprojects/SwarmUI
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
SwarmUI is the easiest way into ComfyUI's model support without starting from a node graph: you type a prompt in the Generate tab, adjust parameters, and SwarmUI builds and runs the ComfyUI workflow for you. When you need the raw graph it is in the next tab. It is MIT-licensed and still labelled beta, though its author describes it as recommended for most users. Verified against the repository on 29 September 2026, at release 0.9.8-Beta, with commits in the past week.

## What it does

A C# server with a browser interface. The **Generate** tab covers prompt, model and parameters for image and video models; the README lists Stable Diffusion, Flux and Krea 2 for images, Wan, LTX-2 and MiniMax H3 for video, and some audio models such as ACE-Step. An **image editor**, automatic workflow generation and a **Grid Generator** for side-by-side comparisons sit alongside it. The **Comfy Workflow** tab exposes the full ComfyUI graph.

The name comes from its original feature: letting a "swarm" of GPUs generate for one user at once. It auto-installs ComfyUI as its backend and can also use AUTOMATIC1111's WebUI. Install scripts cover Windows, Linux and Apple Silicon Macs, and there are Docker instructions and templates for cloud GPU providers.

## Who it is for, and who it is not for

**A good fit**

- People who want local generation with a straightforward interface and room to grow into ComfyUI.
- Anyone running generation on a separate GPU machine and using it from a browser.

**Look elsewhere**

- You want a canvas for painting and masking. [Invoke](/apps/invokeai/) is built for that.
- You would rather work in the node graph directly. Use [ComfyUI](/apps/comfyui/) itself.

## How it compares

| | SwarmUI | [ComfyUI](/apps/comfyui/) | [Invoke](/apps/invokeai/) |
|---|---|---|---|
| Main interface | Generate tab, plus a ComfyUI graph tab | Node graph | Canvas, gallery and workflows |
| Engine | ComfyUI backend | Its own | Its own |
| Status | Beta | Stable releases | Stable releases |
| Licence | MIT | GPL-3.0 | Apache-2.0 |

The three are compared side by side above; more image and video tools are under [Media](/categories/media/). More MIT software is under [MIT-licensed apps](/licenses/mit/).

## Licence in practice

SwarmUI's own code is MIT (Stability AI held the copyright for work before June 2024). The README is explicit about what it pulls in: ComfyUI (GPL-3.0) as the backend, optionally AUTOMATIC1111's WebUI (AGPL-3.0), and optionally Ultralytics (AGPL-3.0) for face detection, which it warns may bring AGPL terms. Setup downloads models, and it notes that "any models used have their own licenses". Check each model's licence before commercial use.

## Verified sources

- Repository and README — <https://github.com/mcmonkeyprojects/SwarmUI> (29 Sep 2026)
- Licence — <https://github.com/mcmonkeyprojects/SwarmUI/blob/master/LICENSE.txt>
- Release 0.9.8-Beta — <https://github.com/mcmonkeyprojects/SwarmUI/releases/latest>
- Documentation — <https://github.com/mcmonkeyprojects/SwarmUI/blob/master/docs/README.md>
