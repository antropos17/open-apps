---
name: ComfyUI
repoUrl: https://github.com/Comfy-Org/ComfyUI
projectType: real-app
category: media
summary: A node-graph application for generating images, video, audio and 3D with open models on
  your own GPU — build a workflow from nodes, save it as JSON, and run it locally, with a desktop app,
  a Windows portable build and a local API.
description: ComfyUI is a GPL-3.0 node-based interface and engine for running diffusion and other
  generative models locally, on Windows, macOS and Linux.
sourceDescription: The most powerful and modular diffusion model GUI, api and backend with a
  graph/nodes interface. The fastest local inference engine in the world.
platforms:
  - windows
  - macos
  - linux
  - desktop
licenses:
  - gpl-3.0
links:
  github: https://github.com/Comfy-Org/ComfyUI
  website: https://www.comfy.org
  docs: https://docs.comfy.org
distribution:
  channels:
    - type: website
      label: Comfy Desktop for Windows, macOS and Linux
      url: https://www.comfy.org/download
      verified: true
    - type: github-releases
      platform: windows
      label: Windows portable builds (NVIDIA, AMD, Intel)
      url: https://github.com/Comfy-Org/ComfyUI/releases/latest
      verified: true
tags:
  - media
  - design-tools
  - offline-first
  - self-hosted
  - desktop-app
bestFor:
  - Generating images and video with open models on your own GPU, with full control over every step.
  - Building a repeatable pipeline once and re-running it, locally or through the API.
  - Trying newly released open models, which usually arrive as ComfyUI workflows.
whyListed:
  - More than 130,000 GitHub stars, in active development since 2023 with releases every few weeks.
  - Runs fully offline; the core downloads nothing unless you ask it to.
  - Covers image, image editing, video, audio and 3D models in one tool.
caveats:
  - The node graph is powerful but takes time to learn; it is not a single prompt box.
  - Needs a capable GPU (or Apple Silicon) for reasonable speed, and large disk space for models.
  - Models are downloaded separately and each carries its own licence, which may restrict how you use it.
  - Custom nodes are third-party Python code that runs with your user's permissions.
seo:
  title: ComfyUI – Open Source Node-Based AI Image & Video Generator
  description: ComfyUI generates images, video, audio and 3D with open models on your own GPU through
    a node graph, with a desktop app and local API. GPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Comfy-Org
  repo: ComfyUI
  url: https://github.com/Comfy-Org/ComfyUI
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
ComfyUI is the most flexible way to run open generative models on your own machine: you build a workflow as a graph of nodes — model loader, prompt, sampler, decoder, upscaler — and run it locally, with no account and no per-image cost. It is also the least like Midjourney to use. There is no single prompt box by default, and you choose, download and wire up the models yourself. Verified against the repository on 29 September 2026, at release v0.37.0.

## What it does

The core is a Python engine with a browser-based node editor. A workflow can generate or edit images, generate video, audio or 3D, and chain inpainting, outpainting, masks, upscaling, frame interpolation, segmentation and depth estimation. Workflows save as JSON, and the README notes that generated media can carry the full workflow and seed so you can load it back. Reusable subgraphs, workflow templates and an **App Mode** that exposes a complex graph through a simple UI help once a pipeline works.

The README lists a wide set of supported open models, including Stable Diffusion 1.5, SDXL and 3.5, Flux.1 and Flux.2, Qwen Image, Wan and LTX-Video for video, and ACE-Step for audio. It manages VRAM by offloading and streaming weights, and says the largest open models can run on as little as 4 GB of VRAM. A local API lets other applications queue workflows.

## Who it is for, and who it is not for

**A good fit**

- People who want exact control over how an image or video is made and are willing to learn the graph.
- Anyone who needs generation to stay on their own hardware.

**Look elsewhere**

- You want a canvas and gallery that feel like an art tool. [Invoke](/apps/invokeai/) is built around that.
- You want a simple generate tab first and the graph only when needed. [SwarmUI](/apps/swarmui/) puts one on top of ComfyUI.

## How it compares

| | ComfyUI | [Invoke](/apps/invokeai/) | [SwarmUI](/apps/swarmui/) |
|---|---|---|---|
| Main interface | Node graph | Canvas, gallery and workflows | Generate tab, plus a ComfyUI graph tab |
| Focus | Image, video, audio, 3D | Images | Image, video, some audio |
| Install | Desktop app, portable, manual | Launcher | Install script |
| Licence | GPL-3.0 | Apache-2.0 | MIT |

The three are compared side by side above; more image and video tools are under [Media](/categories/media/). More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Licence in practice

The ComfyUI core is GPL-3.0. Three things sit around it:

- **Models.** ComfyUI ships no model weights. Each model you download has its own licence, and some add use restrictions. Check the licence on each model's page before using the output commercially.
- **Paid API nodes.** Optional partner nodes call closed hosted models such as Nano Banana and Seedance, for a fee. Start with `--disable-api-nodes` to keep every built-in feature offline. Comfy Cloud is a separate paid hosted version.
- **Comfy Desktop.** The desktop app is a separate repository, dual-licensed under AGPL-3.0-or-later or a commercial licence. It asks for telemetry consent on first use; its source documents a small set of events that are still sent when you decline.

## Verified sources

- Repository and README — <https://github.com/Comfy-Org/ComfyUI> (29 Sep 2026)
- Licence — <https://github.com/Comfy-Org/ComfyUI/blob/master/LICENSE>
- Release v0.37.0 — <https://github.com/Comfy-Org/ComfyUI/releases/latest>
- Comfy Desktop, licence and telemetry notes — <https://github.com/Comfy-Org/Comfy-Desktop>
- Partner nodes — <https://docs.comfy.org/tutorials/partner-nodes/overview>
