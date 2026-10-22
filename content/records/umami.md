---
name: Umami
repoUrl: https://github.com/umami-software/umami
projectType: real-app
category: business
stack: react
summary: A cookie-free web analytics app on Next.js and PostgreSQL — traffic, campaigns, behaviour,
  conversions and revenue in one dashboard — self-hosted with Docker or from source, or on Umami
  Cloud.
description: Umami is an MIT-licensed, privacy-first web analytics platform that you can self-host on
  Node.js and PostgreSQL or use as a hosted service.
sourceDescription: Umami is a privacy-first analytics platform. Traffic, campaigns, behavior,
  conversions, and revenue in one place — no cookies, no surveillance, self-hosted or in the cloud.
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/umami-software/umami
  website: https://umami.is
  docs: https://docs.umami.is/docs
distribution:
  channels:
    - type: self-host
      label: Docker Compose or from source
      url: https://docs.umami.is/docs
      verified: true
    - type: web-app
      label: Umami Cloud
      url: https://cloud.umami.is
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - privacy
  - web-app
bestFor:
  - Replacing Google Analytics on your own server with a small Node.js app and one PostgreSQL
    database.
  - Cookie-free site analytics that do not need a consent banner for tracking cookies.
  - Developers who want an API and an optional MCP endpoint over their analytics.
whyListed:
  - MIT-licensed, with no enterprise directory in the repository.
  - One of the largest open-source analytics projects, in development since 2020 with regular
    releases.
  - Only two moving parts to self-host — the app and PostgreSQL.
caveats:
  - It does not describe itself as a Google Analytics alternative; it is listed with them for doing
    the same job without cookies.
  - Umami collects anonymous telemetry to improve the app; set `DISABLE_TELEMETRY` to opt out.
relations:
  - type: alternative-to
    to: google-analytics
    evidence:
      type: editorial
      url: https://github.com/umami-software/umami
      checkedAt: 2026-09-29
seo:
  title: Umami – Open Source Privacy-First Web Analytics
  description: Umami is cookie-free web analytics for traffic, campaigns, conversions and revenue,
    self-hosted with Docker and PostgreSQL or on Umami Cloud. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: umami-software
  repo: umami
  url: https://github.com/umami-software/umami
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Umami is the simplest well-established way to own your website analytics: a Next.js app and a PostgreSQL database, no cookies, and an MIT licence with nothing held back in an enterprise edition. It covers traffic, campaigns, behaviour, conversions and revenue in one dashboard, and it is one of the most widely used open-source analytics projects. Verified against the repository on 29 September 2026, at release v3.4.0.

## What it does

Add Umami's tracking script to a site and the dashboard shows visitors, pages, referrers, campaigns, behaviour, conversions and revenue, without setting cookies. The repository's topics also list audience segmentation, cohort analysis and user journeys. Two-factor sign-in is available once you set an encryption key, and an MCP endpoint — off by default — lets AI assistants query your data with an API key you generate in settings.

## Running it

Umami needs Node.js 18.18 or later and PostgreSQL 12.14 or later. From source, you set a `DATABASE_URL`, build, and start; the first build creates the tables and an `admin` login you should change straight away. The Docker Compose file runs Umami together with PostgreSQL, and official Docker images are published. Umami Cloud is the hosted option.

## Who it is for, and who it is not for

**A good fit**

- Site owners and developers who want a clean replacement for Google Analytics with minimal infrastructure.
- Teams that prefer a permissive licence over AGPL.

**Look elsewhere**

- Product analytics — replays, user profiles, error tracking, A/B breakdowns — is your main need. [Rybbit](/apps/rybbit/) and [OpenPanel](/apps/openpanel/) are built around it.
- You need the depth of a traditional analytics suite. [Matomo](/apps/matomo/) is closer to Google Analytics feature for feature.

## How it compares

| | Umami | [Plausible](/apps/plausible/) | [Rybbit](/apps/rybbit/) | [Matomo](/apps/matomo/) |
|---|---|---|---|---|
| Scope | Web analytics, conversions, revenue | Simple web analytics | Web and product analytics, replays | Full analytics suite |
| Self-host needs | Node.js, PostgreSQL | Elixir, PostgreSQL, ClickHouse | Docker, ClickHouse | PHP, MySQL |
| Licence | MIT | AGPL-3.0 CE, proprietary extras | AGPL-3.0 | GPL-3.0 |

The full comparison is in [open-source Google Analytics alternatives](/collections/open-source-google-analytics-alternatives/). More React projects are under [React](/stacks/react/).

## Verified sources

- Repository and README — <https://github.com/umami-software/umami> (29 Sep 2026)
- Documentation and environment variables — <https://docs.umami.is/docs/environment-variables>
- Umami Cloud — <https://cloud.umami.is>
