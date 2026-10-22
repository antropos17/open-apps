---
name: OpenWhispr
repoUrl: https://github.com/OpenWhispr/openwhispr
projectType: real-app
category: productivity
stack: react
summary: An Electron and React desktop app that types what you say into any app with local Whisper
  or Parakeet models or a cloud provider you choose, and also records and transcribes meetings with
  speaker labels, keeps searchable notes and runs a voice assistant.
description: OpenWhispr is an MIT-licensed voice dictation and meeting transcription app for macOS,
  Windows and Linux, with on-device speech models or bring-your-own-key cloud models.
sourceDescription: Voice-to-text dictation app with local (Nvidia Parakeet/Whisper) and cloud models
  (BYOK). Privacy-first and available cross-platform.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/OpenWhispr/openwhispr
  website: https://openwhispr.com
  docs: https://docs.openwhispr.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/OpenWhispr/openwhispr/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - cross-platform
  - privacy
  - productivity
bestFor:
  - One app for dictation and meeting transcripts on Windows, Mac or Linux.
  - Offline dictation with Whisper or Parakeet on your own hardware.
  - Transcribing existing audio and video files with speaker labels.
whyListed:
  - Dictation, meeting recording, notes and an AI assistant in one MIT-licensed desktop app.
  - Every core feature can run on local models; cloud providers are optional.
  - Builds for macOS (Apple Silicon and Intel), Windows and Linux on every release.
caveats:
  - OpenWhispr Cloud is a paid service beside the app — the free plan has unlimited local dictation
    and a weekly cloud-word allowance; Pro, Business and Enterprise plans lift the limits.
  - On Intel Macs, live speaker identification and voice fingerprinting are unavailable, according
    to the README.
  - An Electron app, so heavier than the Tauri dictation tools.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/OpenWhispr/openwhispr
      quote: The open-source and free alternative to WisprFlow and Granola.
      checkedAt: 2026-09-29
  - type: alternative-to
    to: granola
    evidence:
      type: self-described
      url: https://github.com/OpenWhispr/openwhispr
      quote: The open-source and free alternative to WisprFlow and Granola.
      checkedAt: 2026-09-29
  - type: alternative-to
    to: otter
    evidence:
      type: self-described
      url: https://openwhispr.com/compare/otter
      quote: The Private, Open-Source Otter.ai Alternative
      checkedAt: 2026-09-29
seo:
  title: OpenWhispr – Open Source Wispr Flow & Granola Alternative
  description: OpenWhispr types your speech into any app and transcribes meetings with speaker labels, using local Whisper or your own key. MIT; Mac, Windows and Linux.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: OpenWhispr
  repo: openwhispr
  url: https://github.com/OpenWhispr/openwhispr
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
OpenWhispr is the broadest of the open-source voice apps: hotkey dictation into any app, meeting transcription with speaker labels, notes, file transcription and a voice assistant, in one MIT-licensed desktop app for macOS, Windows and Linux. Speech can stay on your machine with Whisper or Parakeet, or go to a cloud provider with your own key. The company behind it sells OpenWhispr Cloud plans, which you do not need for local use. Verified against the repository on 29 September 2026, at release v1.10.2.

## What it does

- **Dictation.** Press a global hotkey, speak, and the text is pasted at your cursor. A second hotkey dictates in one language and pastes in another.
- **Meetings.** It detects Zoom, Teams and FaceTime calls, transcribes with on-device speaker diarization and voice fingerprints, and connects to Google, Microsoft or Apple calendars.
- **Notes and files.** Notes with folders and semantic search; drag in audio or video, batch-upload, or paste a YouTube URL to transcribe it.
- **Assistant.** A voice assistant hotkey sends what you say to GPT, Claude, Gemini, Groq, OpenRouter or a local model, and can edit highlighted text in place.
- **API and MCP.** A public API and an MCP server let other tools read notes and transcriptions.

Local speech runs through whisper.cpp and sherpa-onnx, with GPU acceleration on Metal, CUDA and Vulkan. The README says there is no data collection and no telemetry.

## Who it is for, and who it is not for

**A good fit**

- People who want dictation and meeting notes without paying for two subscriptions.
- Linux users — builds ship as AppImage, .deb, .rpm and tar.gz.

**Look elsewhere**

- You want a small, dictation-only tool: [Handy](/apps/handy/) is lighter.
- You want meetings stored as plain Markdown for your agents: [Minutes](/apps/minutes/).

## How it compares

| | OpenWhispr | [Handy](/apps/handy/) | [Voquill](/apps/voquill/) | [Minutes](/apps/minutes/) |
|---|---|---|---|---|
| Dictation into any app | Yes | Yes | Yes | Yes |
| Meeting transcription | Yes, with speaker labels | — | — | Yes |
| Platforms | macOS, Windows, Linux | macOS, Windows, Linux | macOS, Windows, Linux | macOS, Windows (CLI on Linux) |
| Licence | MIT | MIT | AGPL-3.0 plus enterprise code | MIT |

It is listed in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/), [open-source Granola alternatives](/collections/open-source-granola-alternatives/) and [open-source Otter.ai alternatives](/collections/open-source-otter-alternatives/).

## Licence in practice

The whole repository is MIT. OpenWhispr Cloud — hosted transcription, more meeting hours and team tools — is a paid service; its pricing page lists Pro at $8 a month and Business at $16 per user a month, with local dictation free on every plan. More MIT apps are under [MIT apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/OpenWhispr/openwhispr> (29 Sep 2026)
- Releases — <https://github.com/OpenWhispr/openwhispr/releases>
- Pricing — <https://openwhispr.com/pricing>
- Otter.ai comparison — <https://openwhispr.com/compare/otter>
