---
name: Rybbit
repoUrl: https://github.com/rybbit-io/rybbit
projectType: real-app
category: business
stack: react
summary: A cookie-free web and product analytics app — sessions, goals, funnels, user journeys,
  retention, session replays, error tracking and detailed maps — self-hosted with Docker Compose or
  used on Rybbit's hosted service.
description: Rybbit is an AGPL-3.0 web and product analytics platform that describes itself as a
  privacy-friendly alternative to Google Analytics, self-hosted or in the cloud.
sourceDescription: 🐸 Rybbit - open-source and privacy-friendly alternative to Google Analytics that
  is 10x more intuitive.
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/rybbit-io/rybbit
  website: https://rybbit.com
  docs: https://rybbit.com/docs
distribution:
  channels:
    - type: self-host
      label: Docker Compose setup script
      url: https://rybbit.com/docs/self-hosting
      verified: true
    - type: web-app
      label: Rybbit hosted service
      url: https://app.rybbit.io
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - privacy
  - web-app
bestFor:
  - Replacing Google Analytics with a self-hosted tool that also does funnels, journeys and
    retention.
  - Watching session replays and front-end errors next to traffic numbers.
  - Agencies tracking many sites under one organisation.
whyListed:
  - Describes itself as an open-source, privacy-friendly Google Analytics alternative.
  - Grew quickly since its repository opened in January 2025, with frequent releases.
  - Product-analytics features — replays, funnels, retention, user profiles — in the AGPL
    self-hosted build.
caveats:
  - Heavier to self-host than a single-database analytics app — the Compose stack runs ClickHouse,
    PostgreSQL, Redis and Caddy, and the docs ask for at least 2 GB of RAM.
  - Web Vitals are marked in the README as available on the cloud's paid tiers only.
relations:
  - type: alternative-to
    to: google-analytics
    evidence:
      type: self-described
      url: https://github.com/rybbit-io/rybbit
      quote: open-source and privacy-friendly alternative to Google Analytics
      checkedAt: 2026-09-29
seo:
  title: Rybbit – Open Source Google Analytics Alternative
  description: Rybbit is cookie-free web and product analytics with funnels, retention, session replays
    and error tracking, self-hosted or in the cloud. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: rybbit-io
  repo: rybbit
  url: https://github.com/rybbit-io/rybbit
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Rybbit is the pick when simple page-view analytics is not enough but you still want no cookies and your own server: it adds funnels, user journeys, retention, user profiles, session replays and error tracking to the usual web metrics. Its README calls it "the modern open source and privacy friendly alternative to Google Analytics". It is a young project — the repository opened in January 2025 — but a fast-growing one. Verified against the repository on 29 September 2026, at release v2.9.0.

## What it does

The dashboard covers sessions, unique users, page views, bounce rate and session duration, updated in real time. On top of that: customisable goals, funnels, retention and user-journey views, filtering across more than 15 dimensions, custom events with JSON properties, country-to-city location tracking with map visualisations, session details and user profiles, session replays, error tracking and public dashboards. Organisations can hold an unlimited number of sites.

## Running it

The self-hosting guide uses a setup script that generates secrets and starts a Docker Compose stack: a Next.js client, a Fastify backend, ClickHouse for events, PostgreSQL, Redis and Caddy for automatic HTTPS. It asks for a VPS with at least 2 GB of RAM and a domain. A Mapbox token is optional for 3D maps. The hosted service at rybbit.com is the other way in.

## Who it is for, and who it is not for

**A good fit**

- Product teams that want replays and funnels without sending data to a third party.
- Agencies and indie makers running many sites.

**Look elsewhere**

- You want the smallest possible install. [Umami](/apps/umami/) runs on Node.js and PostgreSQL alone.
- You want deep event-based product analytics with A/B testing. [OpenPanel](/apps/openpanel/) leans further that way.

## How it compares

| | Rybbit | [Umami](/apps/umami/) | [OpenPanel](/apps/openpanel/) | [Plausible](/apps/plausible/) |
|---|---|---|---|---|
| Session replay | Yes | No | Yes | No |
| Self-host stack | ClickHouse, PostgreSQL, Redis | PostgreSQL | ClickHouse, PostgreSQL, Redis | ClickHouse, PostgreSQL |
| Licence | AGPL-3.0 | MIT | AGPL-3.0 | AGPL-3.0 CE, proprietary extras |

The full comparison is in [open-source Google Analytics alternatives](/collections/open-source-google-analytics-alternatives/). More copyleft software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/rybbit-io/rybbit> (29 Sep 2026)
- Licence file — <https://github.com/rybbit-io/rybbit/blob/master/LICENSE.md>
- Self-hosting guide — <https://rybbit.com/docs/self-hosting>
