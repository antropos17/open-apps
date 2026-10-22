---
name: PocketBase
repoUrl: https://github.com/pocketbase/pocketbase
projectType: real-app
category: developer-tools
summary: A complete backend for your app in one file you download and run, with a database, realtime
  updates, user auth, file storage and an admin dashboard. It is a single Go executable with embedded
  SQLite and a REST-style API that you can extend with Go or JavaScript.
description: Backend in one file with a database, realtime, auth, file storage and an admin dashboard.
sourceDescription: Open Source realtime backend in 1 file
platforms:
  - linux
  - macos
  - windows
  - web
licenses:
  - mit
links:
  github: https://github.com/pocketbase/pocketbase
  website: https://pocketbase.io
  docs: https://pocketbase.io/docs
distribution:
  channels:
    - type: github-releases
      label: Prebuilt executables for Linux, macOS and Windows
      url: https://github.com/pocketbase/pocketbase/releases
      verified: true
tags:
  - self-hosted
  - developer-tools
  - foss-alternative
  - sync
bestFor:
  - Solo developers and small apps that want auth, a database, files and realtime without running
    a cluster.
  - Prototypes that should be able to become production apps on one small server.
  - Go developers who want to add their own business logic and still ship one binary.
whyListed:
  - One download and `./pocketbase serve` gives you a database, auth, file storage, realtime and an
    admin dashboard.
  - MIT-licensed, with no hosted tier or enterprise edition in the repository.
  - Official JavaScript and Dart SDKs cover web, Node.js, React Native and Flutter clients.
caveats:
  - Still pre-1.0 — the README warns that full backward compatibility is not guaranteed before
    v1.0.0.
  - It does not describe itself as a Firebase alternative; it is listed with them because it covers
    the same backend-as-a-service job for small apps.
  - SQLite on a single server — it scales up, not out.
relations:
  - type: alternative-to
    to: firebase
    evidence:
      type: editorial
      url: https://github.com/pocketbase/pocketbase
      checkedAt: 2026-09-29
seo:
  title: "PocketBase Review: One-File Firebase Alternative"
  description: PocketBase is a backend in one Go file with SQLite, realtime, auth, file storage, an
    admin dashboard and a REST API. Run it standalone or extend it. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: pocketbase
  repo: pocketbase
  url: https://github.com/pocketbase/pocketbase
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
PocketBase is the smallest complete backend you can run yourself: one executable that bundles an SQLite database with realtime subscriptions, users and files, an admin dashboard and a REST-style API. For a side project, an internal tool or a small production app, it replaces much of what people reach for Firebase to do, on a server you own. It is still pre-1.0, and that matters for upgrades. Verified against the repository on 29 September 2026, at release v0.40.4.

## What it does

- **Embedded database** (SQLite) with realtime subscriptions.
- **Users and files** managed out of the box.
- **An admin dashboard** to define collections, browse records and manage settings.
- **A REST-style API**, with official SDKs for JavaScript (browser, Node.js, React Native) and Dart (web, mobile, desktop, CLI).

## Two ways to use it

**As a standalone app.** Download the prebuilt executable for Linux, macOS or Windows from the releases page, extract it and run `./pocketbase serve`. The prebuilt binary includes a JavaScript VM, so you can add hooks and routes in JavaScript without compiling anything.

**As a Go framework.** Import PocketBase as a Go package, register your own routes and hooks, and build a single statically linked executable of your own app. This is why the project is sometimes described as a toolkit; the standalone app is what most people run.

## Who it is for, and who it is not for

**A good fit**

- Indie developers and small teams who value one file to deploy and back up.
- Mobile and web apps built with the JavaScript or Dart SDKs.

**Look elsewhere**

- You need PostgreSQL and SQL-level features. [Supabase](/apps/supabase/) is built on Postgres.
- You want functions, messaging and hosting in one platform. [Appwrite](/apps/appwrite/) covers more services.

## How it compares

| | PocketBase | [Supabase](/apps/supabase/) | [Appwrite](/apps/appwrite/) |
|---|---|---|---|
| Deploy | One executable | Docker Compose, many services | Docker, many services |
| Database | SQLite | PostgreSQL | Appwrite databases, managed PostgreSQL or MySQL |
| Licence | MIT | Apache-2.0 | BSD-3-Clause |

The full comparison is in [open-source Firebase alternatives](/collections/open-source-firebase-alternatives/). More tools for builders are under [Developer tools](/categories/developer-tools/).

## Verified sources

- Repository and README — <https://github.com/pocketbase/pocketbase> (29 Sep 2026)
- Releases — <https://github.com/pocketbase/pocketbase/releases>
- Documentation — <https://pocketbase.io/docs>
