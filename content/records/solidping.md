---
submittedBy: fclairamb
name: SolidPing
repoUrl: https://github.com/fclairamb/solidping
projectType: real-app
category: developer-tools
stack: react
summary: SolidPing watches your websites, APIs, databases and certificates, alerts you on Slack,
  Discord, email or webhooks when something fails, and publishes status pages. It runs 40+ check
  types (HTTP, TCP, DNS, TLS expiry, databases, headless browser, heartbeats) from a single Go
  server with a React dashboard.
description: Uptime monitoring with alerts and status pages, self-hosted as one server or on a free
  hosted plan.
sourceDescription: "Distributed, self-hostable uptime monitoring: 40 check types, multi-region workers,
  private agents, status pages, incidents and on-call escalation — in a single Go binary."
platforms:
  - web
  - linux
  - macos
  - windows
licenses:
  - agpl-3.0
links:
  github: https://github.com/fclairamb/solidping
  website: https://www.solidping.io
  docs: https://docs.solidping.io
  download: https://github.com/fclairamb/solidping/releases/latest
distribution:
  channels:
    - type: self-host
      label: Docker image (ghcr.io/fclairamb/solidping)
      url: https://github.com/fclairamb/solidping/pkgs/container/solidping
      verified: true
    - type: github-releases
      label: Binaries for Linux, macOS and Windows
      url: https://github.com/fclairamb/solidping/releases/latest
      verified: true
    - type: web-app
      label: Hosted version with a free plan
      url: https://www.solidping.io
      verified: true
tags:
  - self-hosted
  - open-source
  - web-app
  - developer-tools
bestFor:
  - Watching websites, APIs, databases and TLS certificates and getting alerted when they fail.
  - Publishing a status page for users or a team.
  - Running checks from inside a private network with an agent that connects out.
whyListed:
  - The whole server is one Go binary on SQLite, with Postgres optional.
  - Checks go beyond HTTP, with databases, queues, DNS, SSH and a headless browser.
caveats:
  - It is a young project with a single maintainer, started in 2026.
  - The source is AGPL-3.0, so a modified version offered as a network service must publish its changes.
  - The dashboard is in English, French, German and Spanish only.
seo:
  title: "SolidPing: Uptime Monitor and Status Pages"
  description: SolidPing monitors uptime with 40+ check types, alerts on Slack, Discord or email and
    publishes status pages. Self-hosted or free hosted plan. AGPL-3.0.
addedAt: 2026-10-12
---
## Why it's listed

SolidPing is a self-hostable uptime monitor. The whole server is one Go binary that stores its data in SQLite, so a small VPS or a Raspberry Pi is enough, and Postgres is there when you outgrow it. It checks much more than HTTP: DNS, TLS expiry, SSH, SMTP and IMAP, seven databases, Kafka, RabbitMQ, MQTT, game servers, a headless browser and custom JavaScript. Failures open incidents that can escalate through on-call schedules, and results feed public status pages. Agents installed inside a private network connect out over a WebSocket, so internal services can be checked without opening a port. The same code runs the hosted version, which has a free plan with 100 monitors.
