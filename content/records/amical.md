---
name: Amical
repoUrl: https://github.com/amicalhq/amical
projectType: real-app
category: productivity
summary: An Electron dictation app for macOS and Windows that transcribes with local Whisper models,
  detects the app you are typing into and formats your speech to suit it — an email, a chat message
  or a prompt in your IDE.
description: Amical is an MIT-licensed, local-first AI dictation app for macOS and Windows, with
  context-aware formatting, custom vocabulary and an Android app.
sourceDescription: "🎙️ AI Dictation App - Open Source and Local-first ⚡ Type 3x faster, no
  keyboard needed. 🆓 Powered by open source models, works offline, fast and accurate."
platforms:
  - macos
  - windows
  - android
  - desktop
licenses:
  - mit
links:
  github: https://github.com/amicalhq/amical
  website: https://amical.ai
  docs: https://amical.ai/docs
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/amicalhq/amical/releases/latest
      verified: true
    - type: other
      label: Homebrew cask (amical)
      url: https://formulae.brew.sh/cask/amical
      verified: true
    - type: play-store
      label: Google Play
      url: https://play.google.com/store/apps/details?id=ai.amical.app
      verified: true
tags:
  - foss-alternative
  - offline-first
  - desktop-app
  - productivity
bestFor:
  - Dictation that formats itself differently for email, chat and code editors.
  - Mac and Windows users, including Windows on Arm.
  - Setting up a local speech model in one click rather than by hand.
whyListed:
  - Context-aware formatting based on the active app works with local models.
  - Builds for macOS (Apple Silicon and Intel) and Windows (x64 and Arm64), plus a Homebrew cask.
caveats:
  - Anonymous telemetry is on by default; turn it off in Settings → Advanced.
  - No Linux build — the README says Linux is unsupported until the app has a Linux native helper.
  - Meeting transcription and MCP voice commands are on the roadmap, not in the app yet.
  - Cloud dictation beyond a weekly free allowance is a paid Premium plan.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://amical.ai/compare/wispr-flow
      quote: Wispr Flow vs Amical — Open-Source Dictation Alternative
      checkedAt: 2026-09-29
seo:
  title: Amical – Open Source Wispr Flow Alternative, Mac & Windows
  description: Amical is a local-first dictation app for macOS and Windows that formats your speech for the app you are in — email, chat or code. MIT, with Whisper models.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: amicalhq
  repo: amical
  url: https://github.com/amicalhq/amical
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Amical is a local-first dictation app for macOS and Windows whose distinguishing idea is context: it detects which app you are in and formats your speech for it, so the same sentence lands differently in an email, a Discord chat or an IDE prompt. Transcription runs on local Whisper models set up in one click, with open-source language models for the formatting. It is MIT-licensed; the company sells a cloud dictation plan beside it, and telemetry is on until you switch it off. Verified against the repository on 29 September 2026, at release v1.12.5.

## What it does

- **Dictation** from a floating widget or custom hotkeys, into any app.
- **Context-aware formatting** based on the active application.
- **Local models** — Whisper for speech, Ollama-served language models for processing — with one-click setup in the app.
- **Hotkeys, voice macros and custom workflows** for extending it.

The feature list in the README marks voice notes that turn into summaries and tasks as in progress, and MCP voice commands and real-time meeting transcription as planned. For meetings today, look at [OpenWhispr](/apps/openwhispr/) or the [open-source Granola alternatives](/collections/open-source-granola-alternatives/).

## Who it is for, and who it is not for

**A good fit**

- People who dictate into many different apps and want each to get the right tone.
- Windows on Arm laptops — there is a native Arm64 build.

**Look elsewhere**

- Linux users: [Handy](/apps/handy/) or [OpenWhispr](/apps/openwhispr/).
- You want no telemetry by default: [SpeakoFlow](/apps/speakoflow/) states it has none.

## How it compares

| | Amical | [OpenWhispr](/apps/openwhispr/) | [Voquill](/apps/voquill/) | [FreeFlow](/apps/freeflow/) |
|---|---|---|---|---|
| Platforms | macOS, Windows, Android | macOS, Windows, Linux | macOS, Windows, Linux, mobile | macOS |
| Transcription by default | Local | Local or cloud | Local or cloud | Cloud (Groq) |
| Formatting | By active app | AI cleanup | Writing styles | Context-aware cleanup |
| Licence | MIT | MIT | AGPL-3.0 plus enterprise code | MIT |

All are in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Licence in practice

The repository is MIT. Amical's pricing page lists a free plan with unlimited local dictation and a weekly allowance of cloud dictation, and a Premium plan at $7 a month billed annually for unlimited cloud dictation and team features. Its telemetry page says usage events, error reports and quality metadata are sent by default, with a single switch to stop them. More MIT apps are under [MIT apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/amicalhq/amical> (29 Sep 2026)
- Releases — <https://github.com/amicalhq/amical/releases>
- Telemetry — <https://amical.ai/docs/telemetry>
- Pricing — <https://amical.ai/pricing>
- Wispr Flow comparison — <https://amical.ai/compare/wispr-flow>
