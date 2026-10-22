---
name: Invoke
repoUrl: https://github.com/invoke-ai/InvokeAI
projectType: real-app
category: media
stack: react
summary: A locally run AI image studio with a layered canvas for inpainting and outpainting, a
  gallery organised into boards, node-based workflows and a model manager — installed with a
  launcher on Windows, macOS and Linux, and now maintained by its community.
description: Invoke (formerly InvokeAI) is an Apache-2.0 application for generating and editing
  images with Stable Diffusion, Flux and other open models on your own GPU.
sourceDescription: Invoke is a leading creative engine for Stable Diffusion models, empowering
  professionals, artists, and enthusiasts to generate and create visual media using the latest
  AI-driven technologies. The solution offers an industry leading WebUI, and serves as the
  foundation for multiple commercial products.
platforms:
  - windows
  - macos
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/invoke-ai/InvokeAI
  docs: https://invoke.ai
  download: https://github.com/invoke-ai/launcher/releases/latest
distribution:
  channels:
    - type: github-releases
      label: Invoke Community Edition launcher (Windows, macOS Apple Silicon, Linux AppImage)
      url: https://github.com/invoke-ai/launcher/releases/latest
      verified: true
tags:
  - media
  - design-tools
  - offline-first
  - desktop-app
  - self-hosted
bestFor:
  - Artists who want to paint, mask, inpaint and outpaint on a canvas rather than wire nodes.
  - Keeping a large body of generated images organised in boards, with prompts recoverable from metadata.
  - Running Stable Diffusion, Flux and newer open image models locally under a permissive licence.
whyListed:
  - In development since 2022, with regular releases and an active contributor base.
  - Apache-2.0, so the application itself can be used and modified commercially.
  - A polished canvas and gallery that make local generation feel like an art tool.
caveats:
  - The company behind Invoke has closed its hosted platform; the founding team joined Adobe and the
    project is now maintained by long-time community contributors.
  - Needs a capable GPU or Apple Silicon; the macOS launcher is for Apple Silicon only.
  - Model weights carry their own licences, separate from Invoke's Apache-2.0 licence.
seo:
  title: Invoke – Open Source AI Image Studio with Canvas
  description: Invoke generates and edits images locally with Stable Diffusion, Flux and other open
    models, on a layered canvas with node workflows. Apache-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: invoke-ai
  repo: InvokeAI
  url: https://github.com/invoke-ai/InvokeAI
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Invoke is the local image generator that feels most like a creative tool rather than a pipeline editor: a layered canvas for inpainting and outpainting, a gallery organised into boards, and node workflows when you need them. Its situation has changed — the company's hosted platform has closed and the founding team joined Adobe — but the Apache-2.0 project continues under long-time maintainers and still ships frequent releases. Verified against the repository on 29 September 2026, at release v6.14.2.

## What it does

Invoke runs a local web server with a React interface, installed through the **Invoke Community Edition** launcher. The **Unified Canvas** combines generation with brush tools, masks, in- and outpainting, so you can work on sketches, photos and renders as well as generated images. **Workflows and nodes** let you build and share custom pipelines. **Boards and the gallery** keep outputs organised, and prompts and settings can be recalled from an image's metadata.

The README lists support for Stable Diffusion 1.5, 2, SDXL and 3.5, Flux.1 and Flux.2 variants, Qwen Image and Qwen Image Edit, Z-Image and others, plus a few API-only models such as GPT Image. It also includes upscaling, a model manager and segmentation with SAM and SAM2.

## Who it is for, and who it is not for

**A good fit**

- Illustrators and designers who want to refine an image by painting and masking.
- People who generate a lot and need to find and reuse past results.

**Look elsewhere**

- You want local video, audio or 3D generation as well as images. [ComfyUI](/apps/comfyui/) covers those.
- You want a simple generate tab with power tools such as grid comparisons. [SwarmUI](/apps/swarmui/) does that.

## How it compares

| | Invoke | [ComfyUI](/apps/comfyui/) | [SwarmUI](/apps/swarmui/) |
|---|---|---|---|
| Main interface | Canvas, gallery and workflows | Node graph | Generate tab, plus a ComfyUI graph tab |
| Focus | Images | Image, video, audio, 3D | Image, video, some audio |
| Maintained by | Community maintainers | Comfy Org | Independent maintainer and contributors |
| Licence | Apache-2.0 | GPL-3.0 | MIT |

The three are compared side by side above; more image and video tools are under [Media](/categories/media/). More permissively licensed apps are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Licence in practice

Invoke's own code is Apache-2.0. The models it runs are not covered by that licence: the repository itself carries the CreativeML Open RAIL-M licence for Stable Diffusion 1 and 2 and the Open RAIL++-M licence for SDXL, which add use restrictions, and other models you install have their own terms. API-only models send prompts to the provider that hosts them. Check a model's licence before using its output commercially.

## Verified sources

- Repository and README — <https://github.com/invoke-ai/InvokeAI> (29 Sep 2026)
- Licence and model licence files — <https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE>, <https://github.com/invoke-ai/InvokeAI/blob/main/LICENSE-SDXL.txt>
- Release v6.14.2 — <https://github.com/invoke-ai/InvokeAI/releases/latest>
- Launcher — <https://github.com/invoke-ai/launcher/releases/latest>
- Documentation and project status — <https://invoke.ai>
