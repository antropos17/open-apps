---
name: SpeakoFlow
repoUrl: https://github.com/AbhishekBarali/SpeakoFlow
projectType: real-app
category: productivity
stack: tauri
summary: A Tauri dictation app built on Handy's core that transcribes offline and adds a voice
  assistant — say "Hey Flow" to have it write the reply instead of typing your words, or ask about
  what is on your screen.
description: SpeakoFlow is an MIT-licensed offline dictation app and voice assistant for Windows,
  macOS and Linux, with local speech recognition and a model of your choice for writing.
sourceDescription: Free, open-source offline voice dictation for Windows, macOS, and Linux. A Wispr
  Flow alternative with an AI assistant that can read your screen on request and answer questions.
platforms:
  - windows
  - macos
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/AbhishekBarali/SpeakoFlow
  website: https://www.speakoflow.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/AbhishekBarali/SpeakoFlow/releases/latest
      verified: true
    - type: other
      label: AUR (speakoflow-bin)
      url: https://aur.archlinux.org/packages/speakoflow-bin
      verified: true
tags:
  - foss-alternative
  - offline-first
  - desktop-app
  - cross-platform
  - privacy
bestFor:
  - Offline dictation that can also draft a reply or email from a spoken instruction.
  - Linux users who want a Wispr-style writer on x86_64 or ARM64.
whyListed:
  - Speech-to-text runs locally with whisper.cpp or Parakeet; the README states no telemetry and no
    account.
  - The assistant works with a built-in offline model, Ollama or LM Studio, or a cloud key.
caveats:
  - Early-stage — the repository was created in June 2026.
  - The macOS build is not signed by Apple, so every new version needs a Terminal command before it
    opens, and it cannot auto-update.
  - The Windows installer is unsigned too and triggers a SmartScreen warning.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/AbhishekBarali/SpeakoFlow
      quote: A Wispr Flow alternative with an AI assistant
      checkedAt: 2026-09-29
seo:
  title: SpeakoFlow – Open Source Wispr Flow Alternative
  description: SpeakoFlow dictates offline into any app on Windows, macOS and Linux, and can draft
    replies or answer questions about your screen by voice. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: AbhishekBarali
  repo: SpeakoFlow
  url: https://github.com/AbhishekBarali/SpeakoFlow
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
SpeakoFlow takes the dictation core of [Handy](/apps/handy/) and adds a writer and an assistant on top: start a dictation with "Hey Flow" and it writes the email or reply you described instead of typing your words, and a floating panel answers questions about what is on your screen when you ask. Transcription stays on your machine. It is young and one developer's project; this is a short record rather than a full review. Verified against the repository on 29 September 2026, at release v1.4.0.

## What it does

- **Dictation** into any app with whisper.cpp or Parakeet, on GPU or CPU, live as you speak or all at once.
- **Generate with Flow** — a spoken instruction becomes finished text at the cursor.
- **Screen vision** — captures the screen only when asked and sends it only to the model provider you chose.
- **Cleanup** with the project's own English-only local model, or any local or cloud model, plus writing styles.
- **Offline translation** to English, text-to-speech with Kokoro, profiles and optional on-device memory.

## Who it is for

People who like Handy but want it to write, not just transcribe, on any of the three desktop systems. If you only need dictation, the README itself points to [Handy](/apps/handy/). For a cloud-first rewriter, compare [OpenLess](/apps/openless/); all of them are in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Licence

MIT, with Handy's core used under its MIT licence. More MIT apps are under [MIT apps](/licenses/mit/), and more [Tauri](/stacks/tauri/) apps are listed too.

## Verified sources

- Repository and README — <https://github.com/AbhishekBarali/SpeakoFlow> (29 Sep 2026)
- Releases — <https://github.com/AbhishekBarali/SpeakoFlow/releases>
- Project site — <https://www.speakoflow.com>
