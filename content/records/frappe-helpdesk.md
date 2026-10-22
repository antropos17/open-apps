---
name: Frappe Helpdesk
repoUrl: https://github.com/frappe/helpdesk
projectType: real-app
category: business
summary: A ticket management app on the Frappe Framework with separate agent and customer portals,
  SLAs, assignment rules, a knowledge base and saved replies, self-hosted with an install script or
  Docker, or run on Frappe Cloud.
description: Frappe Helpdesk is an AGPL-3.0 customer service and ticketing app from the makers of
  ERPNext, self-hosted or on Frappe Cloud.
sourceDescription: Modern, Streamlined, Free and Open Source Customer Service Software
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/frappe/helpdesk
  website: https://frappe.io/helpdesk
  docs: https://docs.frappe.io/helpdesk
distribution:
  channels:
    - type: self-host
      label: Easy-install script or Docker
      url: https://github.com/frappe/helpdesk#self-hosting
      verified: true
    - type: web-app
      label: Frappe Cloud
      url: https://frappecloud.com
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - productivity
bestFor:
  - Support teams that want SLAs, assignment rules and a customer portal without a per-agent bill.
  - Companies already running ERPNext or other Frappe apps.
  - A self-hosted knowledge base next to the ticket queue.
whyListed:
  - Built and used by Frappe, the company behind ERPNext, since 2021, with regular releases.
  - The whole app is AGPL-3.0 and installs in one script on a server of your own.
caveats:
  - It does not describe itself as a Zendesk alternative; it is listed with them because it covers
    the same ticketing, SLA and help-centre job.
  - It runs on the Frappe Framework, so upgrades and customisation follow Frappe's bench tooling
    and version compatibility.
relations:
  - type: alternative-to
    to: zendesk
    evidence:
      type: editorial
      url: https://github.com/frappe/helpdesk
      checkedAt: 2026-09-29
seo:
  title: Frappe Helpdesk – Open Source Ticketing and Customer Service
  description: Frappe Helpdesk is a self-hosted ticketing app with agent and customer portals, SLAs
    and a knowledge base, from the makers of ERPNext. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: frappe
  repo: helpdesk
  url: https://github.com/frappe/helpdesk
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Frappe Helpdesk is a ticket management app from Frappe, the company behind ERPNext, built because their own support team outgrew ERPNext's support module. It covers the structured side of customer service — SLAs, assignment rules, a customer portal and a knowledge base — rather than live chat, and it is the natural pick if you already run Frappe software. Verified against the repository on 29 September 2026, at release v1.30.1.

## What it does

- **Agent and customer portals.** Customers submit and follow tickets in their own view; agents work the queue in theirs.
- **Customisable SLAs** to set and track response times.
- **Assignment rules** that route tickets automatically by priority, issue type or workload.
- **A knowledge base** of help articles, with search that suggests relevant articles to customers as they describe an issue.
- **Saved replies** for common questions.

The front end is built with Frappe UI, a Vue library, on top of the Python and JavaScript Frappe Framework. The current main branch works with Frappe Framework versions 15 and 16.

## Running it

For production, Frappe publishes an easy-install script that deploys a Docker-based instance in about five minutes, given your email and domain. There is a Docker Compose setup for development and trials, and a manual `bench` install. Frappe Cloud, Frappe's managed hosting, is the hosted option.

## Who it is for, and who it is not for

**A good fit**

- Teams with structured support: tickets, SLAs, routing and a help centre.
- Companies already on ERPNext or Frappe CRM.

**Look elsewhere**

- Your customers mostly reach you through website chat or WhatsApp. [Chatwoot](/apps/chatwoot/) is built for that.
- You want the longest-established standalone helpdesk. [Zammad](/apps/zammad/) has been developed since 2012.

## How it compares

| | Frappe Helpdesk | [Zammad](/apps/zammad/) | [FreeScout](/apps/freescout/) |
|---|---|---|---|
| Focus | SLAs, routing, portal, knowledge base | Multi-channel ticketing | Shared mailbox |
| Platform | Frappe Framework | Standalone Rails app | Standalone PHP app |
| Licence | AGPL-3.0 | AGPL-3.0 | AGPL-3.0, paid modules |

The full comparison is in [open-source Zendesk alternatives](/collections/open-source-zendesk-alternatives/). More business software is under [Business](/categories/business/).

## Verified sources

- Repository and README — <https://github.com/frappe/helpdesk> (29 Sep 2026)
- Documentation — <https://docs.frappe.io/helpdesk>
- Product page — <https://frappe.io/helpdesk>
