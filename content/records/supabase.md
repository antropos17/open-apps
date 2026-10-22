---
name: Supabase
repoUrl: https://github.com/supabase/supabase
projectType: real-app
category: developer-tools
summary: A Postgres development platform — database, authentication, auto-generated REST and GraphQL
  APIs, realtime, edge functions, file storage, vector embeddings and the Studio dashboard — used
  as a hosted platform or self-hosted with Docker.
description: Supabase is an Apache-2.0 Postgres platform that builds the features of Firebase from
  open-source tools, available hosted or self-hosted with Docker Compose.
sourceDescription: The Postgres development platform. Supabase gives you a dedicated Postgres
  database to build your web, mobile, and AI applications.
platforms:
  - web
  - linux
licenses:
  - apache-2.0
links:
  github: https://github.com/supabase/supabase
  website: https://supabase.com
  docs: https://supabase.com/docs
distribution:
  channels:
    - type: self-host
      label: Docker Compose
      url: https://supabase.com/docs/guides/self-hosting/docker
      verified: true
    - type: web-app
      label: Supabase hosted platform
      url: https://supabase.com/dashboard
      verified: true
tags:
  - self-hosted
  - developer-tools
  - foss-alternative
  - sync
bestFor:
  - Teams replacing Firebase who want a real PostgreSQL database with SQL and
    extensions.
  - Apps that need auth, APIs, realtime and storage generated from the database schema.
  - AI features that store embeddings next to application data.
whyListed:
  - Its README says it is building the features of Firebase with open-source tools, on Postgres.
  - Apache-2.0, assembled from open-source components such as PostgREST, Realtime, GoTrue and
    Storage.
  - Self-hosts with Docker Compose, and the same stack runs locally for development.
caveats:
  - Self-hosted Supabase lacks several hosted-platform features, including branching, managed
    backups and point-in-time recovery, advanced metrics, ETL and the platform management API.
  - Self-hosted Studio manages a single project, not multiple organisations or projects, and
    support is community-based.
relations:
  - type: alternative-to
    to: firebase
    evidence:
      type: self-described
      url: https://github.com/supabase/supabase
      quote: We're building the features of Firebase using enterprise-grade open source tools.
      checkedAt: 2026-09-29
seo:
  title: Supabase – Open Source Postgres Development Platform
  description: Supabase pairs a Postgres database with auth, instant APIs, realtime, edge functions and
    storage, hosted or self-hosted with Docker. Apache-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: supabase
  repo: supabase
  url: https://github.com/supabase/supabase
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Supabase is the Postgres answer to Firebase. Its README puts it directly: "We're building the features of Firebase using enterprise-grade open source tools." Every project is a PostgreSQL database with authentication, generated APIs, realtime, functions, storage and a dashboard around it. You can self-host it with Docker, but the self-hosted stack is not the whole hosted platform, and the gaps are worth knowing first. Verified against the repository on 29 September 2026, at release v1.26.08.

## What it does

- **Postgres database**, with extensions and a Studio dashboard.
- **Authentication and authorisation**, based on GoTrue.
- **Auto-generated APIs** — REST through PostgREST and GraphQL through pg_graphql — plus **realtime** subscriptions to database changes.
- **Functions** — database functions and edge functions.
- **File storage** in S3 with Postgres handling permissions.
- **AI and vector** tooling for embeddings.

Client libraries are modular, with official JavaScript and other language clients. The README notes that Supabase is not a one-to-one mapping of Firebase; it aims for a Firebase-like developer experience using open-source tools.

## Self-hosting in practice

The recommended way to self-host is Docker Compose. Supabase's own documentation lists what self-hosting does not include: branching, advanced metrics beyond logs, managed backups and point-in-time recovery, analytics and vector buckets, ETL and the platform management API, and Studio cannot manage multiple organisations or projects. Help comes from GitHub Discussions, Issues, Discord and Reddit.

## Who it is for, and who it is not for

**A good fit**

- Developers who want SQL, relational data instead of a document store.
- Teams that start on the hosted platform and want the option of running it themselves.

**Look elsewhere**

- You want everything in one small binary. [PocketBase](/apps/pocketbase/) is.
- You want frontend hosting and messaging in the same self-hosted platform. [Appwrite](/apps/appwrite/) includes them.

## How it compares

| | Supabase | [Appwrite](/apps/appwrite/) | [PocketBase](/apps/pocketbase/) |
|---|---|---|---|
| Database | PostgreSQL | Appwrite databases, managed PostgreSQL or MySQL | SQLite |
| Self-host | Docker Compose, fewer features than hosted | Docker installer | One executable |
| Licence | Apache-2.0 | BSD-3-Clause | MIT |

The full comparison is in [open-source Firebase alternatives](/collections/open-source-firebase-alternatives/). More Apache-licensed software is under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/supabase/supabase> (29 Sep 2026)
- Self-hosting overview — <https://supabase.com/docs/guides/self-hosting>
- Docker guide — <https://supabase.com/docs/guides/self-hosting/docker>
