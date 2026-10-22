---
name: Local Codex & Claude Analytics Ledger
repoUrl: https://github.com/imnakul/codex-analytics
projectType: real-app
category: developer-tools
stack: react
summary: A local dashboard that shows how you use Codex and Claude Code — sessions, token usage,
  runtime and what the same work would cost at API prices — without uploading anything. It also
  compares models and lets you edit the pricing it uses.
description: See your Codex and Claude Code sessions, token usage and API-equivalent cost on a local dashboard.
platforms:
  - web
licenses:
  - mit
links:
  github: https://github.com/imnakul/codex-analytics
tags:
  - codex
  - claude-code
  - usage-analytics
  - token-usage
  - local-first
bestFor:
  - Inspecting local Codex and Claude Code session costs and runtime.
  - Studying read-only SQLite and JSONL ingestion in a TypeScript application.
whyListed:
  - Combines local session inspection, active runtime comparisons, and editable API-equivalent pricing without model calls or session uploads.
  - Small-project consideration is based on inspectable MIT source, documented local setup, and synthetic reader and pricing tests rather than adoption claims.
caveats:
  - Requires Node.js 24 or newer and existing local Codex or Claude Code records.
  - Estimates are not subscription billing totals and internal provider formats can change.
  - Early-stage project with limited adoption; maintainer review is requested.
seo:
  title: "Codex Claude Ledger: AI Usage Dashboard"
  description: Local Codex & Claude Analytics Ledger shows token usage, runtime, models and
    API-equivalent cost for your sessions in a local browser. MIT, no uploads.
addedAt: 2026-10-20
submittedBy: imnakul
---

## Why it is worth listing

This dashboard reads existing local Codex state and Claude Code session records
to compare token usage, active runtime, models, and API-equivalent cost estimates.
It runs in a local browser and does not call an AI model or upload session data.
Pricing can be edited locally, and individual sessions expose task and tool details.

The Next.js, React, TypeScript, and Zod codebase includes read-only SQLite access,
JSONL parsing, provider switching, and synthetic ingestion and pricing tests.
It offers a small application to study local data ingestion and developer analytics.

Cost estimates are not subscription bills. Installation requires Node.js 24 or
newer and local Codex or Claude Code records. Internal provider formats can change.

Maintainer submission: the submitting account maintains this project.
