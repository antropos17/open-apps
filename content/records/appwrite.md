---
name: Appwrite
repoUrl: https://github.com/appwrite/appwrite
projectType: real-app
category: developer-tools
summary: A backend platform with auth, databases, storage, serverless functions, frontend hosting,
  messaging, realtime and an MCP server for coding agents, self-hosted on Docker with one install
  command or used on Appwrite Cloud.
description: Appwrite is a BSD-3-Clause backend platform for web, mobile and AI apps, self-hosted
  with Docker or run on Appwrite Cloud, with SDKs for many languages.
sourceDescription: Appwrite® - complete cloud infrastructure for your web, mobile and AI apps.
  Including Auth, Databases, Storage, Functions, Messaging, Hosting, Realtime and more
platforms:
  - linux
  - web
licenses:
  - bsd-3-clause
links:
  github: https://github.com/appwrite/appwrite
  website: https://appwrite.io
  docs: https://appwrite.io/docs
distribution:
  channels:
    - type: self-host
      label: Docker install command
      url: https://appwrite.io/docs/advanced/self-hosting
      verified: true
    - type: web-app
      label: Appwrite Cloud
      url: https://cloud.appwrite.io
      verified: true
tags:
  - self-hosted
  - developer-tools
  - foss-alternative
  - web-app
bestFor:
  - Teams that want auth, database, storage, functions and hosting from one self-hosted platform.
  - Mobile apps built with Flutter, Swift, Kotlin or React Native.
  - Letting Claude Code, Cursor or Codex work on a live backend through MCP.
whyListed:
  - Designed for self-hosting from the start — one Docker command runs the installer.
  - A permissive BSD-3-Clause licence, in development since 2019 with a very large community.
  - Official SDKs for web, Flutter, Apple, Android, React Native and many server languages.
caveats:
  - It does not describe itself as a Firebase alternative in its README; it is listed with them
    because it covers the same backend services.
  - The hosted MCP server is a Cloud feature; a self-hosted instance uses the local MCP server.
  - Many services behind the installer — plan server resources accordingly.
relations:
  - type: alternative-to
    to: firebase
    evidence:
      type: editorial
      url: https://github.com/appwrite/appwrite
      checkedAt: 2026-09-29
seo:
  title: Appwrite – Open Source Backend for Web and Mobile Apps
  description: Appwrite gives apps auth, databases, storage, functions, hosting, messaging and
    realtime, self-hosted with Docker or on Appwrite Cloud. BSD-3-Clause.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: appwrite
  repo: appwrite
  url: https://github.com/appwrite/appwrite
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Appwrite is the broadest self-hosted backend platform in this group: authentication, databases, file storage, serverless functions, frontend hosting, messaging and realtime behind one console, with SDKs for most client and server languages. It now presents itself as "MCP and agent-first", so coding agents can work on a live project. It is BSD-3-Clause and was built with self-hosting in mind. Verified against the repository on 29 September 2026, at release 2.3.0.

## What it does

- **Auth** — email, SMS, OAuth, anonymous sessions and magic URLs.
- **Databases** — Appwrite's own, or managed PostgreSQL and MySQL.
- **Storage** — files with compression, encryption, image transformations and access control.
- **Functions** — serverless functions in isolated runtimes, triggered by events.
- **Sites** — deploy static, SSR and CSR frontends from Git with previews.
- **Messaging** — email, SMS and push notifications.
- **Realtime**, **Firewall** rules, and **MCP** for agents.

SDKs cover Web, Flutter, Apple, Android and React Native on the client, and Node.js, Python, Dart, PHP, Ruby, .NET, Go, Swift, Kotlin and Rust on the server.

## Running it

Any machine with Docker can run it: a single `docker run` starts the setup wizard on port 20080, with equivalents for Windows CMD and PowerShell. Appwrite Cloud has a free plan and paid plans for scale. The hosted MCP server uses OAuth on Cloud; self-hosted instances use the local MCP server.

## Who it is for, and who it is not for

**A good fit**

- Teams replacing Firebase who want functions, hosting and messaging as well as auth and data.
- Flutter and native mobile developers, who get first-party SDKs.

**Look elsewhere**

- You want SQL and PostgreSQL at the centre. [Supabase](/apps/supabase/) is built on Postgres.
- You want the smallest thing that works. [PocketBase](/apps/pocketbase/) is one executable.

## How it compares

| | Appwrite | [Supabase](/apps/supabase/) | [PocketBase](/apps/pocketbase/) |
|---|---|---|---|
| Services | Auth, databases, storage, functions, sites, messaging, realtime | Postgres, auth, APIs, realtime, functions, storage, vectors | Database, auth, files, realtime |
| Self-host | Docker installer | Docker Compose | One executable |
| Licence | BSD-3-Clause | Apache-2.0 | MIT |

The full comparison is in [open-source Firebase alternatives](/collections/open-source-firebase-alternatives/). More tools for builders are under [Developer tools](/categories/developer-tools/).

## Verified sources

- Repository and README — <https://github.com/appwrite/appwrite> (29 Sep 2026)
- Licence file — <https://github.com/appwrite/appwrite/blob/main/LICENSE>
- Self-hosting — <https://appwrite.io/docs/advanced/self-hosting>
