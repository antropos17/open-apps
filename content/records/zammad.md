---
name: Zammad
repoUrl: https://github.com/zammad/zammad
projectType: real-app
category: business
summary: A web-based helpdesk and customer support platform in Ruby on Rails and Vue that brings
  email, chat, telephone and social media into one ticketing system, self-hosted with Docker,
  Kubernetes or DEB/RPM packages, or run as Zammad's own cloud service.
description: Zammad is an AGPL-3.0 helpdesk and ticketing system owned by the independent Zammad
  Foundation and developed by Zammad GmbH, self-hosted or on a hosted plan.
sourceDescription: Zammad is a web based open source helpdesk/customer support system.
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/zammad/zammad
  website: https://zammad.org
  docs: https://docs.zammad.org
distribution:
  channels:
    - type: self-host
      label: Docker, Kubernetes or DEB/RPM packages
      url: https://docs.zammad.org
      verified: true
    - type: web-app
      label: Zammad hosted service
      url: https://zammad.com/en/pricing
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - chat
bestFor:
  - Support teams that want a full ticketing system for email, chat, phone and social channels on
    their own servers.
  - Organisations that prefer software owned by a foundation rather than a single vendor.
  - Teams that need a REST API and packaged installs for Linux servers.
whyListed:
  - In development since 2012, with frequent releases and a large community.
  - The whole application is AGPL-3.0; the code is owned by the Zammad Foundation, independent of
    commercial providers.
  - Several supported ways to self-host — Docker Compose, a Helm chart and DEB/RPM packages.
caveats:
  - It does not describe itself as a Zendesk alternative; it is listed with them because it covers
    the same multi-channel ticketing job.
  - A Rails application with several services behind it — heavier to run than a PHP helpdesk such as
    FreeScout.
relations:
  - type: alternative-to
    to: zendesk
    evidence:
      type: editorial
      url: https://github.com/zammad/zammad
      checkedAt: 2026-09-29
seo:
  title: Zammad – Open Source Helpdesk and Ticketing System
  description: Zammad is a self-hostable helpdesk that brings email, chat, phone and social media
    tickets into one place, with Docker or package installs. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: zammad
  repo: zammad
  url: https://github.com/zammad/zammad
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Zammad is the established choice for a self-hosted, full-featured helpdesk: a web-based ticketing system that brings customer conversations from email, chat, telephone and social media into one place, in development since 2012. Its licensing is unusually clear — the whole application is AGPL-3.0, and the code is owned by the Zammad Foundation rather than by the company that builds it. Verified against the repository on 29 September 2026, at release 7.2.0.

## What it does

Zammad is a shared ticketing system for a support team. Messages arriving by email, chat, phone or social media become tickets that agents can assign, answer and track, and the whole system is also reachable through a documented REST API. It is written in Ruby on Rails with a Vue front end.

Zammad GmbH does the development together with the community and sells a hosted service with a free trial instance; the README describes the hosted service as the easiest way to run it. On your own servers, the project publishes Docker Compose images, a Helm chart for Kubernetes, and DEB and RPM packages for Linux.

## Who it is for, and who it is not for

**A good fit**

- A support team moving off Zendesk that wants tickets from every channel in one system under its own control.
- Organisations that care who owns the code: the Zammad Foundation holds it, independent of commercial providers.

**Look elsewhere**

- You want something that runs on shared PHP hosting. [FreeScout](/apps/freescout/) is lighter.
- Live chat on your website and messaging apps is the centre of your support. [Chatwoot](/apps/chatwoot/) is built around a conversation inbox.

## How it compares

| | Zammad | [FreeScout](/apps/freescout/) | [Chatwoot](/apps/chatwoot/) | [Frappe Helpdesk](/apps/frappe-helpdesk/) |
|---|---|---|---|---|
| Model | Ticketing across channels | Shared mailbox | Conversation inbox | Tickets with SLAs and portal |
| Stack | Rails, Vue | PHP (Laravel) | Rails, Vue | Frappe (Python), Vue |
| Licence | AGPL-3.0 | AGPL-3.0, paid modules | MIT core, enterprise directory | AGPL-3.0 |

The full comparison is in [open-source Zendesk alternatives](/collections/open-source-zendesk-alternatives/). More copyleft server software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Licence in practice

The README states that Zammad "is and will stay open source" under the GNU AGPLv3, with the code owned by the Zammad Foundation. There is no enterprise directory in the repository; paid options are the hosted service and support from Zammad GmbH.

## Verified sources

- Repository and README — <https://github.com/zammad/zammad> (29 Sep 2026)
- Documentation — <https://docs.zammad.org>
- Hosted service — <https://zammad.com/en/pricing>
