---
name: Excalidraw
repoUrl: https://github.com/excalidraw/excalidraw
projectType: real-app
category: productivity
stack: react
summary: An infinite, hand-drawn-style whiteboard for diagrams, wireframes and sketches, with
  real-time collaboration, end-to-end encryption, offline support and an open `.excalidraw` file
  format — at excalidraw.com, self-hosted with Docker, or embedded as an npm package.
description: Excalidraw is an MIT-licensed virtual whiteboard for hand-drawn-style diagrams, with
  end-to-end encrypted live collaboration, local-first autosave and a React component for embedding.
sourceDescription: Virtual whiteboard for sketching hand-drawn like diagrams
platforms:
  - web
licenses:
  - mit
links:
  github: https://github.com/excalidraw/excalidraw
  website: https://excalidraw.com
  docs: https://docs.excalidraw.com
distribution:
  channels:
    - type: web-app
      label: excalidraw.com
      url: https://excalidraw.com
      verified: true
    - type: self-host
      label: Docker Compose
      url: https://github.com/excalidraw/excalidraw/blob/master/docker-compose.yml
      verified: true
tags:
  - productivity
  - web-app
  - self-hosted
  - offline-first
bestFor:
  - Quick architecture diagrams, flowcharts and wireframes during a meeting or a design review.
  - Sketching with others in real time without an account.
  - Embedding a whiteboard in your own React app.
whyListed:
  - MIT, with the excalidraw.com app's source in the same repository as the editor.
  - Collaboration is end-to-end encrypted, and drawings autosave to the browser and work offline.
  - Drawings are an open JSON format and export to PNG and SVG.
caveats:
  - It does not describe itself as a Miro alternative; it is listed with them for its collaborative
    whiteboard. It is a diagramming tool first, not a workshop and planning suite.
  - Unlimited scenes saved to the cloud, access management and comments are part of the paid, hosted
    Excalidraw+; the open-source app keeps drawings in the browser and in share links.
relations:
  - type: alternative-to
    to: miro
    evidence:
      type: editorial
      url: https://github.com/excalidraw/excalidraw
      checkedAt: 2026-09-29
seo:
  title: Excalidraw – Open Source Hand-Drawn Whiteboard
  description: Excalidraw is a whiteboard for hand-drawn-style diagrams and wireframes, with
    end-to-end encrypted collaboration, offline use and Docker self-hosting. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: excalidraw
  repo: excalidraw
  url: https://github.com/excalidraw/excalidraw
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Excalidraw is a whiteboard that does one thing well: hand-drawn-style diagrams you can sketch alone or with others, in the browser. It is MIT-licensed, collaboration is end-to-end encrypted, and the same repository holds both the embeddable editor and the excalidraw.com app you can self-host. It is a diagramming tool rather than a full Miro-style planning suite, but for diagrams and quick visual thinking it is the lighter option. Verified against the repository on 29 September 2026, at package release v0.18.1.

## What it does

The editor gives you an infinite canvas with rectangles, circles, diamonds, arrows, lines, free drawing and an eraser, arrows that bind to shapes and carry labels, images, shape libraries, dark mode, zoom and undo. Drawings save as an open `.excalidraw` JSON file and export to PNG, SVG or the clipboard.

The excalidraw.com app adds real-time collaboration with end-to-end encryption, local-first autosave to the browser, offline use as a PWA, and read-only share links.

For developers, the editor is published as the `@excalidraw/excalidraw` npm package, and it is embedded in tools such as Obsidian through a community plugin.

## Who it is for, and who it is not for

**A good fit**

- Engineers and designers who sketch diagrams in meetings and want something instant.
- Teams that want a whiteboard they can run on their own server with Docker.

**Look elsewhere**

- You want docs, databases and a whiteboard in one workspace. [AFFiNE](/apps/affine/) combines them.
- You need interface design with components and prototypes. [Penpot](/apps/penpot/) is a design tool.

## How it compares

| | Excalidraw | [AFFiNE](/apps/affine/) | [Penpot](/apps/penpot/) |
|---|---|---|---|
| Job | Hand-drawn diagrams | Docs, databases and whiteboard | Interface design |
| Collaboration | Live, end-to-end encrypted | Live sync, local-first | Live |
| Licence | MIT | MIT client, open-core server | MPL-2.0 |

More whiteboards are in [open-source Miro alternatives](/collections/open-source-miro-alternatives/). Other permissive software is under [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/excalidraw/excalidraw> (29 Sep 2026)
- Licence file — <https://github.com/excalidraw/excalidraw/blob/master/LICENSE>
- Documentation — <https://docs.excalidraw.com>
- Excalidraw+ — <https://plus.excalidraw.com>
