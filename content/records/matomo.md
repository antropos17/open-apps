---
name: Matomo
repoUrl: https://github.com/matomo-org/matomo
projectType: real-app
category: business
summary: A full-featured PHP and MySQL analytics platform, formerly Piwik, that you install on your
  own web server to track websites and apps, with a plugin marketplace and a hosted Matomo Cloud.
description: Matomo is a GPL-3.0 analytics platform that aims to be a free software alternative to
  Google Analytics, self-hosted on PHP and MySQL or run on Matomo Cloud.
sourceDescription: Empowering People Ethically 🚀 — Matomo is hiring! Join us →
  https://matomo.org/jobs Matomo is the leading open-source alternative to Google Analytics, giving
  you complete control and built-in privacy. Easily collect, visualise, and analyse data from
  websites & apps. Star us on GitHub ⭐️ – Pull Requests welcome!
platforms:
  - web
  - linux
licenses:
  - gpl-3.0
links:
  github: https://github.com/matomo-org/matomo
  website: https://matomo.org
  docs: https://matomo.org/docs/installation/
distribution:
  channels:
    - type: self-host
      label: Download for PHP and MySQL
      url: https://matomo.org/download/
      verified: true
    - type: web-app
      label: Matomo Cloud (21-day trial)
      url: https://matomo.org/start-free-analytics-trial/
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - privacy
  - web-app
bestFor:
  - Organisations replacing Google Analytics that need a comparable breadth of reports.
  - Teams that can run PHP and MySQL but not ClickHouse or Kubernetes.
  - Public-sector and regulated sites that must keep analytics data in-house.
whyListed:
  - Describes itself as a free software alternative to Google Analytics, in development since 2011
    (originally as Piwik).
  - Installs on an ordinary PHP web server in a few minutes.
  - Large test suite, a security bug bounty and paid on-premise support plans.
caveats:
  - Several advanced features, including heatmaps and session recording, funnels and A/B testing,
    are offered as premium plugins on the Matomo Marketplace rather than in the core.
  - An older PHP codebase with a traditional interface; lighter tools such as Umami or Plausible are
    quicker to learn.
relations:
  - type: alternative-to
    to: google-analytics
    evidence:
      type: self-described
      url: https://github.com/matomo-org/matomo
      quote: Matomo aims to be a Free software alternative to Google Analytics
      checkedAt: 2026-09-29
seo:
  title: Matomo – Open Source Google Analytics Alternative
  description: Matomo is a self-hosted web and app analytics platform on PHP and MySQL, formerly
    Piwik, or run on Matomo Cloud. A GPL-3.0 Google Analytics alternative.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: matomo-org
  repo: matomo
  url: https://github.com/matomo-org/matomo
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Matomo is the long-standing, full-scale option among self-hosted analytics tools: a PHP and MySQL application, formerly Piwik, that its README says "aims to be a Free software alternative to Google Analytics" and reports is already used on more than 1,400,000 websites. Choose it when you need breadth of reporting rather than a minimal dashboard, and check which features you need come from premium plugins. Verified against the repository on 29 September 2026, at release 5.14.0.

## What it does

You download Matomo, upload it to a web server, run the five-minute installer, and paste the JavaScript tag it gives you into your sites. Reports then arrive in real time, for websites and apps. Privacy is built in, and all data stays in your own database. A plugin architecture extends it, with free and premium plugins in the Matomo Marketplace.

The project backs its releases with thousands of unit tests and hundreds of integration, system, JavaScript and screenshot UI tests, and runs a security bug bounty on HackerOne. Translations are managed on Weblate.

## Running it

Requirements are PHP 8.1 or later and MySQL 8.0 or later, or MariaDB 10.6 or later, with the PDO or MySQLi extension. Matomo is independent of the operating system. Free support comes from the community forum; Matomo sells on-premise support plans, and Matomo Cloud is a hosted service with a 21-day free trial.

## Who it is for, and who it is not for

**A good fit**

- Marketing and analytics teams used to Google Analytics' depth who need data ownership.
- Hosts with a standard LAMP stack.

**Look elsewhere**

- You want one clean page of stats. [Plausible](/apps/plausible/) or [Umami](/apps/umami/) are simpler.
- You want session replays and funnels in the open-source core. [Rybbit](/apps/rybbit/) includes them.

## How it compares

| | Matomo | [Plausible](/apps/plausible/) | [Umami](/apps/umami/) |
|---|---|---|---|
| Scope | Full analytics suite | Simple web analytics | Web analytics |
| Self-host needs | PHP, MySQL or MariaDB | Elixir, PostgreSQL, ClickHouse | Node.js, PostgreSQL |
| Paid extras | Premium plugins | Premium features on cloud only | None in repository |
| Licence | GPL-3.0 | AGPL-3.0 CE | MIT |

The full comparison is in [open-source Google Analytics alternatives](/collections/open-source-google-analytics-alternatives/). More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/matomo-org/matomo> (29 Sep 2026)
- Installation — <https://matomo.org/docs/installation/>
- Premium plugins — <https://plugins.matomo.org/premium>
