---
name: FluidVoice
repoUrl: https://github.com/altic-dev/FluidVoice
projectType: real-app
category: productivity
summary: A Mac dictation app that turns your speech into text on the device with very low latency,
  and can clean the text up with AI. It offers Nemotron Speech, Parakeet, Whisper and Apple Speech,
  with optional AI enhancement through OpenAI, Groq, a custom provider or a local runtime.
description: Fast on-device dictation for Mac, with optional AI cleanup of the text.
sourceDescription: Fastest and only macOS Dictation app with on-device STT and custom trained AI
  enhancement model. Windows pre-build available! A local Wispr Flow alternative.
platforms:
  - macos
  - desktop
licenses:
  - gpl-3.0
links:
  github: https://github.com/altic-dev/FluidVoice
  website: https://altic.dev/fluid
distribution:
  channels:
    - type: github-releases
      platform: macos
      label: GitHub Releases
      url: https://github.com/altic-dev/FluidVoice/releases/latest
      verified: true
tags:
  - foss-alternative
  - offline-first
  - privacy
  - desktop-app
  - productivity
bestFor:
  - Live English dictation on Apple Silicon where latency matters most.
  - Picking a speech model per language and latency, from a 250 MB streaming model to Whisper Large.
  - Free on-device dictation with optional cleanup by a model you choose.
whyListed:
  - Free builds, GPL-3.0 source, on-device transcription by default.
  - A wide model menu, including Whisper for Intel Macs.
caveats:
  - macOS 15 or later only. The repository description mentions a Windows pre-build, but the README
    says Windows and iOS are "on the way" and the release ships a macOS .dmg only.
  - Fluid Intelligence, the local enhancement runtime promoted in the README, is privately maintained
    and not part of the open-source code.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/altic-dev/FluidVoice
      quote: A local Wispr Flow alternative.
      checkedAt: 2026-09-28
seo:
  title: "FluidVoice Review: Mac Wispr Flow Alternative"
  description: FluidVoice transcribes speech on your Mac with Parakeet, Nemotron or Whisper at very
    low latency, with optional AI cleanup. Free builds, GPL-3.0.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: altic-dev
  repo: FluidVoice
  url: https://github.com/altic-dev/FluidVoice
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
FluidVoice is the free, on-device Mac dictation app to try when speed is the point: its rebuilt Parakeet implementation puts words on screen with almost no delay, and it lets you choose among Nemotron Speech, several Parakeet variants, Whisper and Apple Speech. The app is GPL-3.0 with free builds. Two things to know: it is macOS-only today despite a repository description that mentions Windows, and the local "Fluid Intelligence" enhancement it promotes is a separate, private component. Verified against the repository on 28 September 2026, at release v1.6.9.

## What it does

Dictate anywhere with a shortcut; transcription runs on your Mac with the model you picked during onboarding. The README's model table ranges from Parakeet Flash, a roughly 250 MB English streaming model for the lowest latency, through Parakeet TDT v3 for 25 languages, to Whisper Tiny to Large for 99 languages and Intel Macs. **AI enhancement** is optional: send the transcript to OpenAI, Groq or a custom provider for cleanup, or use Fluid Intelligence on-device. **Per-app configuration** assigns different prompt sets to different apps, and an optional audio history stays local with ZIP export.

## Who it is for, and who it is not for

**A good fit**

- Apple Silicon users who want the lowest-latency local dictation for English.
- Anyone who wants to try several on-device speech models in one free app.

**Look elsewhere**

- You need Windows today. [Handy](/apps/handy/) and [Voicetypr](/apps/voicetypr/) ship Windows builds now.
- You want every part of the pipeline open. The Fluid Intelligence runtime is not; the cloud enhancement options and plain transcription are unaffected.

## How it compares

| | FluidVoice | [VoiceInk](/apps/voiceink/) | [FreeFlow](/apps/freeflow/) |
|---|---|---|---|
| Transcription | On-device, several engines | On-device | Groq or your provider |
| Builds | Free | Paid after trial | Free |
| Closed parts | Fluid Intelligence runtime | None in the app | None |
| Licence | GPL-3.0 | GPL-3.0 | MIT |

The rest of the field is in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Licence in practice

The application is GPL-3.0. The README states that Fluid Intelligence is "a separate, privately maintained local AI runtime" kept private "for now". Speech models carry their own licences — Parakeet and Nemotron from NVIDIA, Whisper from OpenAI. More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/altic-dev/FluidVoice> (28 Sep 2026)
- Releases — <https://github.com/altic-dev/FluidVoice/releases>
