---
name: OpenPanel
repoUrl: https://github.com/Openpanel-dev/openpanel
projectType: real-app
category: business
stack: react
summary: A web and product analytics platform — funnels, cohorts, user profiles, session replay,
  A/B test breakdowns, revenue tracking and alerts — with SDKs for web, iOS, Android and servers,
  self-hosted with Docker or used on OpenPanel's cloud.
description: OpenPanel is an AGPL-3.0 analytics platform that positions itself as an open-source
  Mixpanel alternative and a Google Analytics replacement, with optional self-hosting.
sourceDescription: OpenPanel is an open-source web and product analytics platform, an open-source
  alternative to Mixpanel with optional self-hosting.
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/Openpanel-dev/openpanel
  website: https://openpanel.dev
  docs: https://openpanel.dev/docs
distribution:
  channels:
    - type: self-host
      label: Docker setup script
      url: https://openpanel.dev/docs/self-hosting/self-hosting
      verified: true
    - type: web-app
      label: OpenPanel Cloud
      url: https://dashboard.openpanel.dev
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - privacy
  - web-app
bestFor:
  - Product teams that want Mixpanel-style events, funnels and cohorts plus web analytics in one
    self-hosted tool.
  - Apps with web and mobile clients that need one analytics backend.
  - A/B test breakdowns and funnel alerts without per-event pricing.
whyListed:
  - Its README calls it one of the best Google Analytics replacements, and its description an
    open-source Mixpanel alternative.
  - Product analytics, session replay and A/B testing are in the AGPL repository, with no
    enterprise directory.
caveats:
  - The stack is substantial — Next.js dashboard, Fastify event API, PostgreSQL, ClickHouse and
    Redis.
  - The repository does not publish GitHub releases; self-hosted installs follow the images and
    scripts in the repository.
relations:
  - type: alternative-to
    to: google-analytics
    evidence:
      type: self-described
      url: https://github.com/Openpanel-dev/openpanel
      quote: one of the best Google Analytics replacements
      checkedAt: 2026-09-29
seo:
  title: OpenPanel – Open Source Web and Product Analytics
  description: OpenPanel is web and product analytics with funnels, cohorts, user profiles, session
    replay and A/B tests, self-hosted with Docker or on cloud. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Openpanel-dev
  repo: openpanel
  url: https://github.com/Openpanel-dev/openpanel
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
OpenPanel sits between two kinds of analytics: it has the page-level dashboard people expect from Google Analytics and the event-level product analytics of Mixpanel — funnels, cohorts, user profiles, session replay and A/B test breakdowns. Its README describes it as combining "the power of Mixpanel with the ease of Plausible" and as "one of the best Google Analytics replacements". The repository opened in February 2024. Verified against the repository on 29 September 2026, at the latest commit on main (the project does not publish GitHub releases).

## What it does

- **Product analytics:** funnels, cohorts, user profiles and session history.
- **Session replay** with privacy controls.
- **A/B testing** breakdowns by variant.
- **Real-time and custom dashboards**, with alerts on events and funnels.
- **Revenue tracking** for purchases, subscriptions and lifetime value.
- **SDKs** for web, Swift, Kotlin and React Native, plus server-side tracking and an API.
- **Integrations** such as Google Search Console.

Tracking is cookieless by default. The README also describes a hosted MCP server that lets Claude, Cursor and other MCP clients ask questions about your users.

## Running it

The self-hosting guide runs a setup script on a VPS (Ubuntu 24.04, or any machine with Docker, Node and pnpm) that installs dependencies, asks a few configuration questions and starts the Docker stack. Email features need Resend or SMTP, and the AI analytics assistant needs an OpenAI or Anthropic key.

## Who it is for, and who it is not for

**A good fit**

- Teams that pay for Mixpanel or Amplitude and also run Google Analytics, and want one tool instead.
- Mobile and web products that need consistent events across platforms.

**Look elsewhere**

- You only want page views and referrers. [Umami](/apps/umami/) or [Plausible](/apps/plausible/) are far lighter.
- You want the same product features with regular tagged releases. [Rybbit](/apps/rybbit/) publishes them.

## How it compares

| | OpenPanel | [Rybbit](/apps/rybbit/) | [Umami](/apps/umami/) |
|---|---|---|---|
| Focus | Product and web analytics | Web analytics plus replays and funnels | Web analytics |
| Self-host stack | PostgreSQL, ClickHouse, Redis | PostgreSQL, ClickHouse, Redis | PostgreSQL |
| Tagged releases | No | Yes | Yes |
| Licence | AGPL-3.0 | AGPL-3.0 | MIT |

The full comparison is in [open-source Google Analytics alternatives](/collections/open-source-google-analytics-alternatives/). More copyleft software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/Openpanel-dev/openpanel> (29 Sep 2026)
- Licence file — <https://github.com/Openpanel-dev/openpanel/blob/main/LICENSE.md>
- Self-hosting guide — <https://openpanel.dev/docs/self-hosting/self-hosting>
