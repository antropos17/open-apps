---
name: Penpot
repoUrl: https://github.com/penpot/penpot
projectType: real-app
category: developer-tools
summary: A design and prototyping tool in the browser for product teams, a Figma alternative you can
  use on Penpot's cloud or self-host with Docker or Kubernetes. It has components, variants, native
  design tokens, CSS Grid and Flex layouts, an inspect tab that gives SVG, CSS and HTML, plugins and
  an MCP server.
description: Browser-based design and prototyping tool for product teams, a self-hostable Figma alternative.
sourceDescription: "Penpot: The open-source design platform for Product teams that need scalable
  collaboration."
platforms:
  - web
  - linux
licenses:
  - mpl-2.0
links:
  github: https://github.com/penpot/penpot
  website: https://penpot.app
  docs: https://help.penpot.app
distribution:
  channels:
    - type: web-app
      label: Penpot cloud
      url: https://design.penpot.app
      verified: true
    - type: self-host
      label: Docker, Kubernetes and other options
      url: https://penpot.app/self-host
      verified: true
tags:
  - design-tools
  - foss-alternative
  - self-hosted
  - web-app
bestFor:
  - Product teams moving interface design and prototyping off Figma onto software they can host.
  - Design systems that need design tokens, components and variants shared with developers.
  - Handing designs to developers as CSS, SVG and HTML, or to AI tools through MCP.
whyListed:
  - A repository dating back to 2015, a large community and regular releases.
  - The whole platform is MPL-2.0 and runs in the browser or on your own servers.
  - Built on open standards — SVG, CSS, HTML and JSON — rather than a proprietary file format.
caveats:
  - Organisation governance — an Admin Console, advanced permissions and SSO through your identity
    provider — comes with the paid Penpot Enterprise plan, on cloud or self-hosted.
  - The official Docker Compose file turns on anonymous telemetry; set `PENPOT_TELEMETRY_ENABLED` to
    false to stop it.
relations:
  - type: alternative-to
    to: figma
    evidence:
      type: self-described
      url: https://penpot.app/penpot-vs-figma
      quote: For designers & developers seeking a free open-source alternative.
      checkedAt: 2026-09-29
seo:
  title: "Penpot Review: Self-Hosted Figma Alternative"
  description: Penpot is a self-hostable design and prototyping platform with components, design
    tokens, Grid and Flex layouts, code inspect, plugins and MCP. MPL-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: penpot
  repo: penpot
  url: https://github.com/penpot/penpot
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Penpot is the established open-source choice for interface design and prototyping: a browser-based platform, MPL-2.0 throughout, that you can use on Penpot's cloud or deploy on your own servers. Its maker positions it directly against Figma, and it covers the core of that job — components, variants, design tokens, flexible layouts and developer handoff — while keeping designs in open formats. The paid Enterprise plan is about organisation governance. Verified against the repository on 29 September 2026, at release 2.18.0.

## What it does

- **Design and prototype** in the browser, alone or in real time with your team.
- **Design systems** with components, variants and native design tokens, so design and code share one source of truth.
- **Layouts that behave like code**, using CSS Grid and Flex Layout.
- **Developer handoff** through an inspect tab that gives SVG, CSS and HTML.
- **Programmable workspace** — a plugin system, webhooks, an API with access tokens, and an MCP server that lets AI tools read and work with designs.

Penpot works with open standards — SVG, CSS, HTML and JSON — so designs are not locked into a proprietary file format.

## Who it is for, and who it is not for

**A good fit**

- Product and design teams that want their design files on infrastructure they control, for compliance or cost.
- Teams where developers work closely with designers and want tokens and layouts expressed as code.

**Look elsewhere**

- You want an AI agent to generate prototypes, decks and videos from a prompt. [OpenDesign](/apps/open-design/) is built around that.
- You need a quick sketch or whiteboard rather than a design tool. [Excalidraw](/apps/excalidraw/) is lighter.

## How it compares

| | Penpot | [OpenDesign](/apps/open-design/) | [Excalidraw](/apps/excalidraw/) |
|---|---|---|---|
| Job | Interface design and prototyping | AI agents that produce designs | Hand-drawn whiteboard |
| Self-host | Docker, Kubernetes | Local-first desktop and web app | Docker |
| Licence | MPL-2.0 | Apache-2.0 | MIT |

More options are in [open-source Figma alternatives](/collections/open-source-figma-alternatives/). Other weak-copyleft software is under [MPL-2.0 apps](/licenses/mpl-2.0/).

## Licence in practice

The repository is MPL-2.0, copyright Kaleidos. Penpot Enterprise is a paid plan for cloud and self-hosted use that adds organisations, an Admin Console, advanced permissions and SSO on top of the open-source platform; Penpot's documentation describes the platform itself as free and unlimited. On a self-hosted instance, the telemetry setting in the official Docker Compose file is on — a periodic process sends anonymous instance data — and can be switched off with one variable.

## Verified sources

- Repository and README — <https://github.com/penpot/penpot> (29 Sep 2026)
- Licence file — <https://github.com/penpot/penpot/blob/develop/LICENSE>
- Penpot vs Figma — <https://penpot.app/penpot-vs-figma>
- Enterprise plan — <https://help.penpot.app/user-guide/account-teams/enterprise-plan/>
- Docker Compose file — <https://github.com/penpot/penpot/blob/develop/docker/images/docker-compose.yaml>
