---
name: Voicetypr
repoUrl: https://github.com/ideaplexa/voicetypr
projectType: real-app
category: productivity
stack: tauri
summary: A Tauri, Rust and React dictation app that transcribes locally with Whisper — and Parakeet
  on Apple Silicon — inserts the text at your cursor, optionally formats it with a model you choose,
  and exposes transcription to scripts and agents through a CLI.
description: Voicetypr is an AGPL-3.0, offline-first dictation app for Windows and macOS with local
  Whisper transcription, optional AI formatting and a command-line interface for agents.
sourceDescription: Voicetypr - AI powered offline voice to text dictation tool for busy founders,
  vibe coders, AI power users on macos, windows. Alternative to wispr flow and superwhisper.
platforms:
  - windows
  - macos
  - desktop
licenses:
  - agpl-3.0
links:
  github: https://github.com/ideaplexa/voicetypr
  website: https://voicetypr.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/ideaplexa/voicetypr/releases/latest
      verified: true
    - type: microsoft-store
      platform: windows
      label: Microsoft Store
      url: https://apps.microsoft.com/detail/9p8j3x9b2jg6
      verified: true
tags:
  - foss-alternative
  - offline-first
  - desktop-app
  - privacy
  - productivity
bestFor:
  - Local dictation on Windows 10 or 11, including from the Microsoft Store.
  - Transcribing audio and video files as well as live speech.
  - Giving scripts and coding agents speech-to-text through a JSON CLI.
whyListed:
  - Local transcription is the default on both Windows and macOS, with optional Vulkan acceleration
    on Windows that falls back to CPU.
  - Can use another Voicetypr install on your network as a private transcription server.
  - Releases are frequent and signed and notarised on macOS.
caveats:
  - The official builds are paid after a trial — a one-off lifetime licence. The AGPL source can be
    built for free.
  - Intel Macs are legacy and Whisper-only; Apple Silicon is the primary macOS target.
  - Product analytics and diagnostics exist; review them in Settings.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/ideaplexa/voicetypr
      quote: Alternative to wispr flow and superwhisper.
      checkedAt: 2026-09-28
seo:
  title: Voicetypr – Open Source Offline Dictation for Windows & Mac
  description: Voicetypr transcribes speech locally with Whisper on Windows and macOS and types it at
    your cursor, with optional AI formatting. AGPL-3.0.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: ideaplexa
  repo: voicetypr
  url: https://github.com/ideaplexa/voicetypr
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Voicetypr is the polished, commercially run option among open-source dictation apps for Windows: local Whisper transcription by default, optional AI formatting with your own key, file transcription, a Microsoft Store listing and a CLI for agents. The code is AGPL-3.0; the ready-made builds are paid after a trial, with a one-off lifetime licence rather than a subscription. Verified against the repository on 28 September 2026, at release v2.0.7.

## What it does

Press the shortcut — push-to-talk or toggle — speak, and Voicetypr inserts the transcript at the cursor and keeps it in a searchable local history. Transcription runs on your machine with Whisper on Windows and macOS, plus Parakeet on Apple Silicon. Optional cloud speech-to-text (Soniox, OpenAI, Groq, Deepgram, Cohere) and optional AI formatting (OpenAI, Anthropic, Gemini or any OpenAI-compatible endpoint) are there when you want them, billed by those providers.

Two features stand out: **Network Sharing** turns another Voicetypr install on your LAN into a private transcription server, and the **CLI** — `voicetypr transcribe --file note.wav --json`, `voicetypr record --until-silence --json` — gives scripts and local agents speech-to-text with structured output.

## Who it is for, and who it is not for

**A good fit**

- Windows users who want a local, well-maintained dictation app and are happy to pay once.
- Developers who want transcription callable from an agent or script.

**Look elsewhere**

- You want free binaries. [Handy](/apps/handy/) is MIT with free builds for Windows, macOS and Linux.
- You are on Linux — there is no build.

## How it compares

| | Voicetypr | [Handy](/apps/handy/) | [OpenLess](/apps/openless/) |
|---|---|---|---|
| Windows | Yes, plus Microsoft Store | Yes (x64, arm64) | Yes |
| Local transcription | Default | Always | Experimental on Windows |
| AI formatting | Optional, your key | Optional post-processing | Core feature |
| Official builds | Paid after trial | Free | Free |
| Licence | AGPL-3.0 | MIT | AGPL-3.0 |

More options are in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Licence in practice

The source is AGPL-3.0: you may build, use and modify it without paying, and must publish your changes if you offer a modified version to others over a network. The paid lifetime licence covers the official signed builds and keeps local models unmetered after the trial; cloud providers still bill you directly. Other AGPL apps are under [AGPL-3.0 apps](/licenses/agpl-3.0/), and other [Tauri](/stacks/tauri/) apps sit alongside it.

## Verified sources

- Repository and README — <https://github.com/ideaplexa/voicetypr> (28 Sep 2026)
- Releases — <https://github.com/ideaplexa/voicetypr/releases>
- Project site — <https://voicetypr.com>
