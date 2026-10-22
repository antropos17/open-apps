---
name: Appsmith
repoUrl: https://github.com/appsmithorg/appsmith
projectType: real-app
category: developer-tools
stack: react
summary: A low-code platform for building admin panels, dashboards and internal tools on top of your
  databases and APIs, self-hosted or on Appsmith Cloud. Drag-and-drop widgets, JavaScript anywhere
  and Git version control, with an Apache-2.0 Community Edition on Docker or Kubernetes.
description: Build admin panels, dashboards and internal tools on your databases and APIs, self-hosted.
sourceDescription: Platform to build admin panels, internal tools, and dashboards. Integrates with 25+
  databases and any API.
platforms:
  - web
  - linux
licenses:
  - apache-2.0
links:
  github: https://github.com/appsmithorg/appsmith
  website: https://www.appsmith.com
  docs: https://docs.appsmith.com
distribution:
  channels:
    - type: self-host
      label: Install with Docker
      url: https://docs.appsmith.com/getting-started/setup/installation-guides/docker
      verified: true
    - type: web-app
      label: Appsmith Cloud
      url: https://login.appsmith.com
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - developer-tools
  - web-app
bestFor:
  - Engineering teams building admin panels and CRUD tools on existing databases.
  - Internal apps that need custom JavaScript between queries and widgets.
  - Keeping a permissive Apache-2.0 licence on the platform you self-host.
whyListed:
  - The repository is Apache-2.0 throughout, including the folders marked ee.
  - In development since 2020, with release v2.4.2 in September 2026.
  - Docker, Kubernetes and AWS AMI installation guides.
caveats:
  - Paid Business and Enterprise plans add features; the free plan lists three standard roles, Google
    SSO and three Git repositories.
  - Anonymous usage telemetry is on by default and can be turned off; a keep-alive ping is sent either
    way.
relations:
  - type: alternative-to
    to: retool
    evidence:
      type: self-described
      url: https://www.appsmith.com/blog/retool-alternatives
      quote: Top 5 Retool Alternatives & Competitors in 2025
      checkedAt: 2026-09-29
seo:
  title: "Appsmith Review: Retool Alternative"
  description: Appsmith builds admin panels, dashboards and internal tools on 25+ databases and any API,
    with Git versioning. Apache-2.0, self-hosted or Appsmith Cloud.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: appsmithorg
  repo: appsmith
  url: https://github.com/appsmithorg/appsmith
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Appsmith is the permissively licensed choice for replacing Retool: a low-code platform for admin panels, dashboards and internal tools, with the whole public repository under Apache-2.0. Appsmith lists itself first in its own round-up of Retool alternatives. Paid plans exist, but the self-hosted Community Edition is a complete builder. Verified against the repository on 29 September 2026, at release v2.4.2.

## What it does

- **Build.** Assemble dashboards, admin panels, customer 360 views, IT automation and service-management tools from ready-made widgets.
- **Connect.** More than 25 databases and any API as data sources.
- **Code.** Write JavaScript alongside the visual builder to transform data and control behaviour.
- **Ship.** Version apps with Git, and deploy with Docker, Kubernetes or an AWS AMI.
- **Templates.** A public template library to start from.

Appsmith is also building Appsmith Agents, an AI agent platform for business teams; the README introduces it but does not say how it relates to the open-source edition.

## Who it is for, and who it is not for

**A good fit**

- Developers who build internal tools for operations, support and finance teams.
- Companies that need the builder on their own infrastructure under a permissive licence.

**Look elsewhere**

- You want an AI app generator and workflows in the self-hosted core. [ToolJet](/apps/tooljet/) has them, but in its paid edition.
- You want a spreadsheet-style database rather than a front end over your own. See [Baserow](/apps/baserow/).

## How it compares

| | Appsmith | [ToolJet](/apps/tooljet/) | [Budibase](/apps/budibase/) |
|---|---|---|---|
| Built-in database | No | ToolJet Database | Budibase data tables |
| AI features | Appsmith Agents (separate) | Paid ToolJet AI; MCP server | Agents and automations |
| Licence | Apache-2.0 | AGPL-3.0, enterprise submodules | GPL-3.0, BSL pro package |

The full comparison is in [open-source Retool alternatives](/collections/open-source-retool-alternatives/). More developer software is under [Developer Tools](/categories/developer-tools/).

## Licence in practice

Apache-2.0 covers the repository. Appsmith's pricing page describes the Community edition as "our open-source low code application platform, available for free", with Business and Enterprise plans on top. The documentation says telemetry is optional and anonymised for self-hosted instances; turn it off under Admin Settings or with an environment variable. A keep-alive ping every two hours is sent whether telemetry is on or off.

## Verified sources

- Repository and README — <https://github.com/appsmithorg/appsmith> (29 Sep 2026)
- Licence file — <https://github.com/appsmithorg/appsmith/blob/release/LICENSE>
- Telemetry — <https://docs.appsmith.com/product/telemetry>
- Pricing — <https://www.appsmith.com/pricing>
- Retool alternatives — <https://www.appsmith.com/blog/retool-alternatives>
