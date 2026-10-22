---
name: AFFiNE
repoUrl: https://github.com/toeverything/AFFiNE
projectType: real-app
category: productivity
stack: react
summary: A local-first workspace where your documents and a whiteboard are the same canvas, with
  real-time sync, AI features, desktop apps and a self-hosted server. Pages hold rich text, sticky
  notes, embeds, multi-view databases, linked pages, shapes and slides.
description: Docs, databases and a whiteboard on one local-first canvas, with desktop apps and Docker self-hosting.
sourceDescription: There can be more than Notion and Miro. AFFiNE(pronounced [ə‘fain]) is a next-gen
  knowledge base that brings planning, sorting and creating all together. Privacy first,
  open-source, customizable and ready to use.
platforms:
  - macos
  - windows
  - linux
  - web
licenses:
  - mit
  - mpl-2.0
links:
  github: https://github.com/toeverything/AFFiNE
  website: https://affine.pro
  docs: https://docs.affine.pro
distribution:
  channels:
    - type: github-releases
      label: Desktop apps for macOS, Windows and Linux
      url: https://github.com/toeverything/AFFiNE/releases/latest
      verified: true
    - type: web-app
      label: AFFiNE web app
      url: https://app.affine.pro
      verified: true
    - type: self-host
      label: Self-host with Docker
      url: https://docs.affine.pro/self-host-affine
      verified: true
tags:
  - foss-alternative
  - notes
  - offline-first
  - self-hosted
  - desktop-app
bestFor:
  - Moving notes, wikis and planning off Notion and whiteboarding off Miro into one tool.
  - People who think visually and want to drag the same blocks between a page and a canvas.
  - Keeping a workspace on your own disk first, with sync as an option.
whyListed:
  - Docs and whiteboard are one canvas, not two tools stitched together.
  - Local-first, with real-time collaboration on web and desktop clients.
  - Desktop apps for macOS, Windows and Linux, and a Docker server you can self-host.
caveats:
  - Open-core. The client is MIT, but `packages/backend` and `packages/common/native` fall under
    AFFiNE's Enterprise Edition licence; code shipped in the Community Edition is MPL-2.0 under that
    licence, and Enterprise-only features need a subscription.
  - Telemetry and error reporting are on in the app until you turn them off in settings.
  - Contributors must sign a Contributor License Agreement.
relations:
  - type: alternative-to
    to: notion
    evidence:
      type: self-described
      url: https://github.com/toeverything/AFFiNE
      quote: A privacy-focused, local-first, open-source, and ready-to-use alternative for Notion & Miro.
      checkedAt: 2026-09-29
  - type: alternative-to
    to: miro
    evidence:
      type: self-described
      url: https://github.com/toeverything/AFFiNE
      quote: A privacy-focused, local-first, open-source, and ready-to-use alternative for Notion & Miro.
      checkedAt: 2026-09-29
seo:
  title: "AFFiNE Review: Notion and Miro Alternative"
  description: AFFiNE puts docs, databases and a whiteboard on one canvas, local-first with sync,
    desktop apps and Docker self-hosting. MIT client, open-core server.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: toeverything
  repo: AFFiNE
  url: https://github.com/toeverything/AFFiNE
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
AFFiNE is the open-source workspace to look at if you use both Notion and Miro: it puts documents and a whiteboard on the same canvas, so a page of notes, a database and a board of sticky notes are the same blocks in different views. It is local-first, syncs in real time, ships desktop apps for macOS, Windows and Linux, and self-hosts with Docker. Its licensing is open-core, and the split is worth reading before you deploy the server. Verified against the repository on 29 September 2026, at release v0.27.4.

## What it does

- **One canvas for docs and whiteboard.** Put rich text, sticky notes, embedded web pages, multi-view databases, linked pages, shapes and slides on an edgeless canvas, or read the same content as a page.
- **Local-first sync.** Your data lives on your disk first; real-time sync and collaboration work across web and desktop clients.
- **AI features.** AFFiNE AI drafts writing, turns outlines into slides and summarises articles into mind maps.
- **Self-hosting.** A Docker deployment runs your own server; one-click deploys are offered for Render and Sealos.

## Who it is for, and who it is not for

**A good fit**

- Individuals and small teams who plan visually and write in the same place.
- Anyone who wants a Notion-style workspace that keeps working offline.

**Look elsewhere**

- You only need quick diagrams. [Excalidraw](/apps/excalidraw/) is smaller and fully MIT.
- You want a Notion alternative with mobile apps and an AGPL server. [AppFlowy](/apps/appflowy/) is the closer match.

## How it compares

| | AFFiNE | [AppFlowy](/apps/appflowy/) | [Excalidraw](/apps/excalidraw/) |
|---|---|---|---|
| Focus | Docs and whiteboard on one canvas | Pages, databases and AI | Hand-drawn diagrams |
| Local-first | Yes | Yes | Browser autosave |
| Licence | MIT client, open-core server | AGPL-3.0 | MIT |

More whiteboards are in [open-source Miro alternatives](/collections/open-source-miro-alternatives/). Other workspace software is under [Productivity](/categories/productivity/).

## Licence in practice

The top-level licence splits the repository. Everything outside `packages/backend` and `packages/common/native` is MIT. Those two directories fall under the AFFiNE Enterprise Edition licence, which says that any part distributed as the Community Edition — or served to the browser — is MPL-2.0, while Enterprise-only parts may be used in production only with a paid subscription. The README describes the Community Edition as free to self-host and says the Enterprise Edition will add features such as rebranding, SSO, admin and audit. In the app, telemetry and error reporting stay on unless the telemetry setting is turned off. Pull requests need a signed CLA.

## Verified sources

- Repository and README — <https://github.com/toeverything/AFFiNE> (29 Sep 2026)
- Licence files — <https://github.com/toeverything/AFFiNE/blob/canary/LICENSE>, <https://github.com/toeverything/AFFiNE/blob/canary/packages/backend/server/LICENSE>
- Self-hosting — <https://docs.affine.pro/self-host-affine>
- Telemetry setting — <https://github.com/toeverything/AFFiNE/blob/canary/packages/frontend/core/src/components/telemetry/index.tsx>
