---
name: Budibase
repoUrl: https://github.com/Budibase/budibase
projectType: real-app
category: developer-tools
stack: svelte
summary: A platform for building internal apps, automations and AI agents on top of your databases and
  business systems, self-hosted or on Budibase Cloud. It has a visual builder, data tables,
  connectors and a public API, under GPL-3.0 with paid features in a BSL package.
description: Build internal apps, automations and AI agents on your own databases, self-hosted or in the cloud.
sourceDescription: AI agents, automations and apps that run your operations. Model agnostic.
platforms:
  - web
  - linux
licenses:
  - gpl-3.0
links:
  github: https://github.com/Budibase/budibase
  website: https://budibase.com
  docs: https://docs.budibase.com/docs
distribution:
  channels:
    - type: self-host
      label: Self-hosting methods
      url: https://docs.budibase.com/docs/hosting-methods
      verified: true
    - type: web-app
      label: Budibase Cloud
      url: https://budibase.com
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - developer-tools
  - web-app
bestFor:
  - IT and operations teams handling requests, approvals and issue reports in one place.
  - Internal apps and automations with unlimited users on a self-hosted instance.
  - Adding AI agents that create records and route approvals across business systems.
whyListed:
  - The pricing page lists unlimited apps, automations, agents and users with SSO on the free
    open-source self-hosted plan.
  - In development since 2019, with release v3.47.0 on 28 September 2026.
  - Apps you build are not bound by the GPL — the client and component libraries are MPL-2.0.
caveats:
  - Open-core — paid features live in packages/pro under the Business Source License, which is not an
    open-source licence.
  - The repository includes a licence for a bundled Structured Query Server binary from a third party,
    granted for internal business use only and not open source.
  - The README now leads with AI agents and operations rather than with the app builder.
relations:
  - type: alternative-to
    to: retool
    evidence:
      type: self-described
      url: https://budibase.com/blog/alternatives/retool/
      quote: Top 10 Retool Alternatives & Competitors for 2026
      checkedAt: 2026-09-29
seo:
  title: "Budibase Review: Internal App Builder"
  description: Budibase builds internal apps, automations and AI agents on your databases and business
    systems. GPL-3.0 core, paid features under BSL; self-host or cloud.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Budibase
  repo: budibase
  url: https://github.com/Budibase/budibase
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Budibase started as a low-code app builder and now describes itself as "AI agents, automations and apps that run your operations". It lists itself first in its own round-up of Retool alternatives. The core is GPL-3.0 and its free self-hosted plan is generous; the licence picture has two parts that are not open source, set out below. Verified against the repository on 29 September 2026, at release v3.47.0.

## What it does

- **Apps.** A Svelte-based builder for internal apps on your data, with a portal for users and groups.
- **Automations.** Workflows that create records, route approvals, update apps and notify teams.
- **Agents.** AI agents that handle employee requests — questions, approvals, issue reports — and act across connected systems, with a choice of model.
- **Connectors.** Databases, AI models and business apps as data sources.
- **Public API.** Use Budibase as a back end for other tools.
- **Self-hosting.** Docker (a single ARM-compatible image), Docker Compose, Kubernetes, DigitalOcean and Portainer.

## Who it is for, and who it is not for

**A good fit**

- Operations and IT teams that want apps, approvals and automations on their own servers.
- Organisations that need unlimited users on a free self-hosted plan.

**Look elsewhere**

- You want the whole code base under an open-source licence with no proprietary parts. [Appsmith](/apps/appsmith/) is Apache-2.0.
- You want a built-in database and Python in apps. [ToolJet](/apps/tooljet/) has both.

## How it compares

| | Budibase | [Appsmith](/apps/appsmith/) | [ToolJet](/apps/tooljet/) |
|---|---|---|---|
| Emphasis | Operations: apps, automations, agents | Internal tools on your data | Internal tools, paid AI generation |
| Free self-hosted plan | Unlimited users and automations | Community plan | Community Edition |
| Licence | GPL-3.0, BSL pro package | Apache-2.0 | AGPL-3.0, enterprise submodules |

The full comparison is in [open-source Retool alternatives](/collections/open-source-retool-alternatives/). More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Licence in practice

The repository's licensing guide says Budibase can be considered GPL-3.0 overall. Packages that become part of a generated app use MPL-2.0, so apps you build can be licensed however you like. Paid features live in `packages/pro` under the Business Source License, which lets you read and modify the code but not remove licence checks and run that in production. Separately, `SQS_LICENSE` covers a Structured Query Server binary by The Neighbourhoodie Software GmbH that Budibase ships; it may be used for internal business purposes only and may not be modified or reverse-engineered.

## Verified sources

- Repository and README — <https://github.com/Budibase/budibase> (29 Sep 2026)
- Licensing guide — <https://github.com/Budibase/budibase/blob/master/LICENSE>
- Structured Query Server licence — <https://github.com/Budibase/budibase/blob/master/SQS_LICENSE>
- Pricing — <https://budibase.com/pricing/>
- Retool alternatives — <https://budibase.com/blog/alternatives/retool/>
