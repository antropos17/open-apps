---
name: VoiceInk
repoUrl: https://github.com/Beingpax/VoiceInk
projectType: real-app
category: productivity
summary: A native macOS dictation app that transcribes on-device with whisper.cpp, Parakeet and other
  local models, applies per-app "modes" that reformat text for where you are typing, and includes a
  personal dictionary and a voice assistant.
description: VoiceInk is a GPL-3.0 macOS dictation app that transcribes on the device and adapts its
  output to the app or website you are using. Official builds are paid; the source is free.
sourceDescription: The best open-source alternative to Superwhisper & Wispr Flow. Voice-to-text app
  for macOS with no subscription
platforms:
  - macos
  - desktop
licenses:
  - gpl-3.0
links:
  github: https://github.com/Beingpax/VoiceInk
  website: https://tryvoiceink.com
distribution:
  channels:
    - type: github-releases
      platform: macos
      label: GitHub Releases
      url: https://github.com/Beingpax/VoiceInk/releases/latest
      verified: true
    - type: website
      platform: macos
      label: tryvoiceink.com
      url: https://tryvoiceink.com
      verified: true
tags:
  - foss-alternative
  - offline-first
  - privacy
  - desktop-app
  - productivity
bestFor:
  - Private, on-device dictation on a recent Mac with no subscription.
  - Different output per app — casual in chat, formal in email — set up once.
  - Teaching the transcriber your names, jargon and replacements.
whyListed:
  - On-device transcription with several engines, including whisper.cpp and Parakeet.
  - Mature for this category — public since 2024 and releasing through September 2026.
caveats:
  - Official builds are paid after a free trial; building from source is free under GPL-3.0 but
    loses automatic updates.
  - Requires macOS 15 or later.
  - The project does not accept pull requests.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/Beingpax/VoiceInk
      quote: The best open-source alternative to Superwhisper & Wispr Flow.
      checkedAt: 2026-09-28
seo:
  title: VoiceInk – Open Source On-Device Dictation for Mac
  description: VoiceInk transcribes speech on your Mac with local models and adapts the text to each
    app you type in. GPL-3.0; official builds are paid.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: Beingpax
  repo: VoiceInk
  url: https://github.com/Beingpax/VoiceInk
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
VoiceInk is the established on-device dictation app for Macs: public since 2024, GPL-3.0, transcribing locally with whisper.cpp, Parakeet and other models, and reshaping its output per app. It is open source with a commercial model — the signed builds with automatic updates are paid after a trial, and anyone can build the source for free. Verified against the repository on 28 September 2026, at release v2.21.

## What it does

Trigger it with a keyboard or mouse shortcut, speak, and the transcript lands at the cursor. Transcription runs on the Mac. **Modes** detect the app or URL you are in and apply the settings you set for it, so the same sentence can come out casual in Slack and formal in email. A **personal dictionary** handles names, industry terms and replacements, a context-aware option uses what is on screen, and an assistant mode answers spoken questions.

The acknowledgements list the engines: whisper.cpp for Whisper, FluidAudio for Parakeet, and SenseVoice Small, which comes under the FunASR model licence rather than GPL.

## Who it is for, and who it is not for

**A good fit**

- Mac users who want dictation that never leaves the machine and will pay once for convenience.
- People who write in many apps with different tones.

**Look elsewhere**

- You are on macOS 14 or older — VoiceInk needs 15.
- You want free signed builds. [FluidVoice](/apps/fluidvoice/) and [FreeFlow](/apps/freeflow/) are free.
- You use Windows or Linux. See [Handy](/apps/handy/).

## How it compares

| | VoiceInk | [FluidVoice](/apps/fluidvoice/) | [FreeFlow](/apps/freeflow/) | [Handy](/apps/handy/) |
|---|---|---|---|---|
| Transcription | On-device | On-device | Groq or your provider | On-device |
| Per-app behaviour | Modes | Per-app prompts | App context | No |
| Builds | Paid after trial | Free | Free | Free |
| Licence | GPL-3.0 | GPL-3.0 | MIT | MIT |

See the full list in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Licence in practice

The source is GPL-3.0 — read from the LICENSE file, although GitHub's licence detection shows "NOASSERTION". Build it yourself for free, or buy a licence for signed builds, updates and support. The maintainer does not take pull requests; you can still fork. More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/Beingpax/VoiceInk> (28 Sep 2026)
- Licence file — <https://github.com/Beingpax/VoiceInk/blob/main/LICENSE>
- Project site — <https://tryvoiceink.com>
