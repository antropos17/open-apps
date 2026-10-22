---
name: Plausible Analytics
repoUrl: https://github.com/plausible/analytics
projectType: real-app
category: business
summary: A lightweight, cookie-free web analytics tool in Elixir with PostgreSQL and ClickHouse — one
  dashboard of key metrics, goals and Search Console data — as a paid EU-hosted cloud or a free
  self-hosted Community Edition released twice a year.
description: Plausible is a privacy-first web analytics tool whose self-hosted Community Edition is
  AGPL-3.0; some premium features stay in a proprietary directory and the paid cloud.
sourceDescription: Open source, privacy-first web analytics. Lightweight, cookie-free Google Analytics
  alternative. Self-hosted or cloud.
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/plausible/analytics
  website: https://plausible.io
  docs: https://plausible.io/docs
distribution:
  channels:
    - type: self-host
      label: Plausible Community Edition (Docker)
      url: https://github.com/plausible/community-edition
      verified: true
    - type: web-app
      label: Plausible Cloud
      url: https://plausible.io/register
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - privacy
  - web-app
bestFor:
  - Replacing Google Analytics with one simple page of stats that needs no training.
  - Sites that want no cookies, no personal data and no IP addresses stored.
  - Importing historical Google Analytics data and carrying on.
whyListed:
  - Describes itself as a lightweight, cookie-free Google Analytics alternative, in development since
    2018.
  - Funded by its cloud subscribers, with the self-hosted Community Edition free under AGPL-3.0.
  - The tracker script is released separately under MIT, so embedding it does not pull your site
    into the AGPL.
caveats:
  - Open-core. Premium features — marketing funnels, ecommerce revenue goals, SSO and the sites API
    — are not in the Community Edition; their code sits in an extra/ directory with no rights granted.
  - The Community Edition is a long-term release published twice a year, community-supported only,
    with basic bot filtering compared with the cloud.
relations:
  - type: alternative-to
    to: google-analytics
    evidence:
      type: self-described
      url: https://github.com/plausible/analytics
      quote: Lightweight, cookie-free Google Analytics alternative.
      checkedAt: 2026-09-29
seo:
  title: Plausible – Open Source Google Analytics Alternative
  description: Plausible is lightweight, privacy-first web analytics with a one-page dashboard, goals
    and Search Console data. AGPL-3.0 to self-host; extras on cloud.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: plausible
  repo: analytics
  url: https://github.com/plausible/analytics
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Plausible is the clearest example of simple, privacy-first analytics: one page of the metrics that matter, a tiny script, no cookies and no personal data. Its README calls it a "Lightweight, cookie-free Google Analytics alternative". Before self-hosting, know the split: the free Community Edition is AGPL-3.0 and released twice a year, while premium features and the fastest release cadence stay with the paid, EU-hosted cloud. Verified against the repository on 29 September 2026, at release v3.2.1.

## What it does

All key figures sit on a single dashboard with no custom reports to build. Goals, conversions and custom events cover outbound link clicks, form completions, file downloads and 404 pages without extra code. Reports go out by email or Slack, with traffic spike and drop notifications; dashboards can be shared publicly or by link; team members get roles. Google Search Console integration brings keyword data into the dashboard, a stats API and CSV export get data out, and historical Google Analytics data can be imported. It is built with Elixir and Phoenix, PostgreSQL, ClickHouse and a React front end.

## Community Edition versus cloud

| | Plausible Cloud | Community Edition |
|---|---|---|
| Releases | Several times a week | Long-term release twice a year |
| Premium features | Available on paid plans | Not included: marketing funnels, ecommerce revenue goals, SSO, sites API |
| Bot filtering | Advanced, including data-centre IP ranges | Basic, by User-Agent and referrer spam |
| Raw data | CSV, stats API, Looker Studio connector | Direct access to ClickHouse |
| Support | From the team | Community forum |

## Who it is for, and who it is not for

**A good fit**

- Site owners who want the simplest honest replacement for Google Analytics, self-hosted or paid.
- Anyone who values a small, fast tracking script.

**Look elsewhere**

- You need funnels, revenue goals or SSO on a free self-hosted install. [Rybbit](/apps/rybbit/) or [Matomo](/apps/matomo/) include more in their open-source core.
- You want an MIT-licensed tool. [Umami](/apps/umami/) is.

## How it compares

| | Plausible | [Umami](/apps/umami/) | [Rybbit](/apps/rybbit/) |
|---|---|---|---|
| Scope | Simple web analytics | Web analytics | Web and product analytics |
| Self-host release cadence | Twice a year | Regular releases | Regular releases |
| Licence | AGPL-3.0 CE, proprietary extras | MIT | AGPL-3.0 |

The full comparison is in [open-source Google Analytics alternatives](/collections/open-source-google-analytics-alternatives/). More copyleft software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Licence in practice

The Community Edition is AGPL-3.0 or later, and the JavaScript tracker is MIT. The repository's `extra/` directory carries a separate copyright notice stating that no rights to use, distribute or exploit that code are granted — that is where the premium features live. "Plausible Analytics" and its logo are trademarks of Plausible Insights OÜ.

## Verified sources

- Repository and README — <https://github.com/plausible/analytics> (29 Sep 2026)
- Licence — <https://github.com/plausible/analytics/blob/master/LICENSE.md>
- Notice for extra/ — <https://github.com/plausible/analytics/blob/master/extra/COPYING.txt>
- Community Edition — <https://github.com/plausible/community-edition>
