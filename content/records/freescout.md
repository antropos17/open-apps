---
name: FreeScout
repoUrl: https://github.com/freescout-help-desk/freescout
projectType: real-app
category: business
summary: A PHP and Laravel help desk and shared inbox that gathers email, live chat, WhatsApp,
  Telegram and other channels into one queue, with unlimited agents and mailboxes, and runs even on
  shared hosting; extra features come as modules.
description: FreeScout is an AGPL-3.0 help desk and shared mailbox that describes itself as a free
  self-hosted Zendesk and Help Scout alternative, with paid and free modules.
sourceDescription: FreeScout — Free self-hosted omnichannel AI-powered helpdesk & shared mailbox
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/freescout-help-desk/freescout
  website: https://freescout.net
  demo: https://demo.freescout.net
distribution:
  channels:
    - type: self-host
      label: Installation guide
      url: https://github.com/freescout-help-desk/freescout/wiki/Installation-Guide
      verified: true
    - type: website
      label: Live demo
      url: https://demo.freescout.net
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - web-app
  - productivity
bestFor:
  - Small teams replacing Help Scout or Zendesk with a shared inbox on cheap hosting.
  - Unlimited agents and mailboxes without per-seat fees.
  - Running a help desk where only PHP and MySQL are available.
whyListed:
  - Describes itself as a free self-hosted Zendesk and Help Scout alternative, in development since
    2018.
  - Pure PHP with MySQL, MariaDB or PostgreSQL, a web installer and updater, and no minimum hardware
    requirement.
  - Very frequent releases, with an API, Zapier and Make integrations and a migration path from
    other help desks.
caveats:
  - Many features beyond the core — including WhatsApp and other channels — come as official
    modules, and most official modules are paid, with a one-time lifetime licence per instance.
  - The modules themselves are AGPL-3.0, but you buy them from freescout.net rather than getting
    them in the repository.
relations:
  - type: alternative-to
    to: zendesk
    evidence:
      type: self-described
      url: https://github.com/freescout-help-desk/freescout
      quote: Free Self-Hosted Zendesk & Help Scout Alternative
      checkedAt: 2026-09-29
seo:
  title: FreeScout – Open Source Zendesk & Help Scout Alternative
  description: FreeScout is a lightweight self-hosted help desk and shared inbox in PHP, with
    unlimited agents and mailboxes and free or paid modules. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: freescout-help-desk
  repo: freescout
  url: https://github.com/freescout-help-desk/freescout
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
FreeScout is the lightest way to run a help desk yourself: a shared inbox built in PHP with Laravel that installs through a web installer, runs on shared hosting, and has no limits on agents, tickets or mailboxes. Its README calls it a "Free Self-Hosted Zendesk & Help Scout Alternative". The trade-off is its business model — the core is free, and many features you might expect, including extra channels, are official modules, most of them paid. Verified against the repository on 29 September 2026, at release 1.8.243.

## What it does

FreeScout collects customer conversations into mailboxes that a team works through together. Email arrives over IMAP, POP3 or SMTP, with modern OAuth for Microsoft 365 and Google Workspace. Agents get internal notes, auto replies, starred and followed conversations, forwarding, merging and moving, phone conversations, collision detection when two agents open the same conversation, push notifications and search. The interface is translated into 33 languages and supports screen readers.

The README lists WhatsApp, Telegram, Facebook, Slack and live chat as channels, and AI-drafted replies through a free AI Integration module. Native S3 storage is also a free module. There is an API, Zapier and Make integrations, and a guide for migrating from other help desks.

## Who it is for, and who it is not for

**A good fit**

- A small team whose support mostly arrives by email and who want a Help Scout-style shared inbox.
- Anyone limited to PHP hosting, including cPanel and Softaculous one-click installs.

**Look elsewhere**

- You want every channel and feature in the open-source core with nothing to buy. [Zammad](/apps/zammad/) ships as one AGPL application.
- Live chat on your site is your main channel. [Chatwoot](/apps/chatwoot/) is built around it.

## How it compares

| | FreeScout | [Zammad](/apps/zammad/) | [Chatwoot](/apps/chatwoot/) |
|---|---|---|---|
| Hosting needs | PHP and MySQL, shared hosting works | Rails services, Docker or packages | Rails services, Docker or Kubernetes |
| Extra channels | Mostly paid modules | Included | Included |
| Licence | AGPL-3.0 | AGPL-3.0 | MIT core, enterprise directory |

The full comparison is in [open-source Zendesk alternatives](/collections/open-source-zendesk-alternatives/).

## Licence in practice

The application is [AGPL-3.0](/licenses/agpl-3.0/). According to freescout.net, all official modules are AGPL-3.0 too, but most are sold as a one-time lifetime licence for a single FreeScout instance, and payments are non-refundable. Budget for the modules you need before comparing it with a help desk that includes them.

## Verified sources

- Repository and README — <https://github.com/freescout-help-desk/freescout> (29 Sep 2026)
- Installation guide — <https://github.com/freescout-help-desk/freescout/wiki/Installation-Guide>
- Official modules and licence terms — <https://freescout.net/modules/>
