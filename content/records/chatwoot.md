---
name: Chatwoot
repoUrl: https://github.com/chatwoot/chatwoot
projectType: real-app
category: business
summary: A customer support desk with one inbox for live chat, email, WhatsApp, social channels and
  SMS, plus a help centre, reports and automations, self-hosted or on Chatwoot Cloud. It is a Rails
  and Vue app that also covers Instagram, Facebook and Telegram.
description: One support inbox for live chat, email, WhatsApp and social channels, with a help centre.
sourceDescription: Open-source live-chat, email support, omni-channel desk. An alternative to
  Intercom, Zendesk, Salesforce Service Cloud etc. 🔥💬
platforms:
  - web
  - linux
licenses:
  - mit
links:
  github: https://github.com/chatwoot/chatwoot
  website: https://www.chatwoot.com
  docs: https://www.chatwoot.com/help-center
distribution:
  channels:
    - type: self-host
      label: Docker, Kubernetes or Linux install
      url: https://www.chatwoot.com/docs/self-hosted
      verified: true
    - type: web-app
      label: Chatwoot Cloud
      url: https://app.chatwoot.com
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - chat
  - web-app
bestFor:
  - Replacing Intercom's live chat and shared inbox on your own servers.
  - Teams that answer customers on WhatsApp, Instagram, email and website chat in one place.
  - Publishing a help centre next to the inbox.
whyListed:
  - Describes itself as an open-source alternative to Intercom and Zendesk, in development since
    2019 with a very large community.
  - Omnichannel inbox, help-centre portal, campaigns and reports are in the MIT-licensed core.
caveats:
  - Open-core. Code under the enterprise/ directory has its own licence and needs a paid Chatwoot
    licence to use in production.
  - Captain, the AI agent, plus custom branding, roles and permissions, SLA policies and SSO are
    paid-plan features on self-hosted installs.
relations:
  - type: alternative-to
    to: intercom
    evidence:
      type: self-described
      url: https://github.com/chatwoot/chatwoot
      quote: An alternative to Intercom, Zendesk, Salesforce Service Cloud etc.
      checkedAt: 2026-09-29
  - type: alternative-to
    to: zendesk
    evidence:
      type: self-described
      url: https://github.com/chatwoot/chatwoot
      quote: An alternative to Intercom, Zendesk, Salesforce Service Cloud etc.
      checkedAt: 2026-09-29
seo:
  title: "Chatwoot Review: Intercom & Zendesk Alternative"
  description: Chatwoot is a self-hostable support desk with one inbox for live chat, email, WhatsApp,
    social and SMS, plus a help centre. MIT core, some features paid.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: chatwoot
  repo: chatwoot
  url: https://github.com/chatwoot/chatwoot
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Chatwoot is the self-hosted pick when conversations, not tickets, are the centre of your support: one inbox for website live chat, email and messaging apps, with a help centre and reports, in development since 2019. It calls itself "an open-source alternative to Intercom, Zendesk, Salesforce Service Cloud etc." It is also open-core — GitHub reports its licence as unrecognised because the MIT LICENSE file carves out an enterprise directory under separate terms. Verified against the repository on 29 September 2026, at release v4.18.0.

## What it does

The inbox collects live chat from your website, email, Facebook, Instagram, Twitter, WhatsApp, Telegram, Line, SMS and other channels. Agents get private notes and @mentions, labels, canned responses, keyboard shortcuts and a command bar, custom views and filters, business hours and auto-responders, teams, automations and auto-assignment. Contacts carry profiles, history, segments and custom attributes, and campaigns let you start conversations proactively.

A built-in help-centre portal publishes articles and FAQs. Reports cover conversations, agents, inboxes, labels and teams, with CSAT and a live view. Integrations include Slack, Dialogflow, Shopify, Linear, Google Translate and dashboard apps that embed your own tools.

## Who it is for, and who it is not for

**A good fit**

- Teams leaving Intercom who mainly need live chat, a shared inbox and a help centre.
- Businesses that talk to customers on WhatsApp and social channels as much as on email.

**Look elsewhere**

- You need AI replies, SSO or SLA policies without a paid plan. Those are paid features here.
- You want a pure ticket queue with SLAs and a customer portal. [Frappe Helpdesk](/apps/frappe-helpdesk/) or [Zammad](/apps/zammad/) fit better.

## How it compares

| | Chatwoot | [Zammad](/apps/zammad/) | [FreeScout](/apps/freescout/) |
|---|---|---|---|
| Model | Conversation inbox and live chat | Ticketing across channels | Shared mailbox |
| Paid extras | Enterprise features and Captain AI | Hosting and support only | Most official modules |
| Licence | MIT core, enterprise directory | AGPL-3.0 | AGPL-3.0 |

The full comparison is in [open-source Zendesk alternatives](/collections/open-source-zendesk-alternatives/). Other permissively licensed apps are under [MIT apps](/licenses/mit/).

## Licence in practice

The LICENSE file puts everything outside `enterprise/` under MIT. Code inside `enterprise/` is under the Chatwoot Enterprise licence, which allows production use only with a valid Chatwoot Enterprise licence for the right number of seats. Chatwoot's self-hosted pricing lists Captain AI, custom branding, agent capacity management and roles and permissions on the Premium plan, and SSO/SAML and SLA policies on Enterprise. The free Community edition is supported through Discord and GitHub.

## Verified sources

- Repository and README — <https://github.com/chatwoot/chatwoot> (29 Sep 2026)
- Licence file — <https://github.com/chatwoot/chatwoot/blob/develop/LICENSE>
- Enterprise licence — <https://github.com/chatwoot/chatwoot/blob/develop/enterprise/LICENSE>
- Self-hosted plans — <https://www.chatwoot.com/pricing/self-hosted-plans/>
