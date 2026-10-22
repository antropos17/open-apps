---
submittedBy: bart6114
name: Loofah
repoUrl: https://github.com/bart6114/loofah
projectType: real-app
category: productivity
stack: tauri
summary: Free meeting notes for the Mac that record and transcribe on your own computer and save
  everything as plain Markdown, with no account, backend or telemetry. Optional summaries use the
  AI model you choose, and a read-only local MCP server lets agents read the vault; it is a Tauri
  and Rust desktop app with a CLI.
description: Meeting notes for Mac, recorded and transcribed on your computer and saved as Markdown.
sourceDescription: Free, open-source meeting notes for macOS with private on-device transcription,
  Markdown storage, and optional bring-your-own AI—no accounts, subscriptions, or telemetry.
platforms:
  - macos
  - desktop
licenses:
  - mit
links:
  github: https://github.com/bart6114/loofah
  website: https://loofah.io
distribution:
  channels:
    - type: github-releases
      platform: macos
      label: GitHub Releases
      url: https://github.com/bart6114/loofah/releases/latest
      verified: true
    - type: website
      platform: macos
      label: Loofah website
      url: https://loofah.io
      verified: true
tags:
  - open-source
  - offline-first
  - desktop-app
  - productivity
  - privacy
  - notes
  - cli
bestFor:
  - Keeping meeting recordings, transcripts, notes, research, and agent-created artifacts in one
    local Markdown vault.
  - People who want on-device meeting transcription without adding a bot to calls.
whyListed:
  - The complete MIT-licensed application is available to run, inspect, and study.
  - The codebase combines a Tauri desktop app, Rust CLI, local transcription, Markdown storage, and
    read-only MCP access.
caveats:
  - The desktop app currently requires an Apple Silicon Mac; the CLI also supports Linux.
relations:
  - type: alternative-to
    to: granola
    evidence:
      type: editorial
      checkedAt: 2026-09-22
seo:
  title: "Loofah: Local Meeting Notes App for Mac"
  description: Loofah is a local-first meeting notetaker for macOS that records and transcribes on-device and saves notes as plain Markdown. MIT, no account or telemetry.
addedAt: 2026-08-31
source:
  type: import
  provider: github
  owner: bart6114
  repo: loofah
  url: https://github.com/bart6114/loofah
curation:
  reviewed: false
  labels: []
  lenses: []
visibility: keep
---
