---
name: Voquill
repoUrl: https://github.com/voquill/voquill
projectType: real-app
category: productivity
stack: tauri
summary: A voice-typing app that dictates into any desktop app, cleans up the text with AI and keeps
  a personal glossary so names are spelled right, with mobile keyboard apps alongside. It transcribes
  with local Whisper or a cloud provider you choose, and is built with Tauri.
description: Voice typing for Mac, Windows and Linux with AI cleanup and a personal glossary for names
  and terms.
sourceDescription: Open source voice dictation technology
platforms:
  - macos
  - windows
  - linux
  - ios
  - android
  - desktop
licenses:
  - agpl-3.0
links:
  github: https://github.com/voquill/voquill
  website: https://voquill.com/dictation
  docs: https://docs.voquill.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/voquill/voquill/releases/latest
      verified: true
    - type: app-store
      label: App Store (Voquill AI Voice Keyboard)
      url: https://apps.apple.com/us/app/voquill-ai-voice-keyboard/id6759206881
      verified: true
    - type: play-store
      label: Google Play
      url: https://play.google.com/store/apps/details?id=com.voquill.mobile
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - cross-platform
  - productivity
bestFor:
  - Dictating names, jargon and product terms that other apps keep misspelling.
  - Switching between polished, verbatim and chat-style output by writing style.
  - Organisations that want to run dictation against their own backend or on-premises.
whyListed:
  - A glossary with replacement rules is a first-class feature, not a settings afterthought.
  - Local Whisper with optional GPU acceleration, or any cloud provider with your own key.
  - Desktop builds for all three systems, plus mobile keyboard apps.
caveats:
  - Open core. The app is AGPL-3.0, but code in the repository's enterprise directory is under
    Voquill's proprietary enterprise licence.
  - Voquill Cloud is a paid Pro plan beside the free app; local and bring-your-own-key use is free.
  - Version numbers are still 0.0.x, and the company's homepage now leads with a separate product for
    medical labs — dictation lives at voquill.com/dictation.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/voquill/voquill/blob/main/apps/desktop/src-tauri/archlinux/PKGBUILD
      quote: Open source voice dictation tool - the WisprFlow alternative
      checkedAt: 2026-09-29
seo:
  title: "Voquill Review: Wispr Flow Alternative"
  description: Voquill dictates into any app on Mac, Windows and Linux with local Whisper or your own API key, cleans up the text and learns your terms. AGPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: voquill
  repo: voquill
  url: https://github.com/voquill/voquill
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Voquill is a dictation app with a strong answer to the most common complaint about voice typing: it keeps spelling your words wrong. Its personal dictionary holds glossary terms and replacement rules, and writing styles switch between polished, verbatim and chat output. Transcription runs on local Whisper or a cloud provider you pick. The desktop app is AGPL-3.0; the repository also holds proprietary enterprise services. Verified against the repository on 29 September 2026, at release desktop-v0.0.652.

## What it does

- **Voice input everywhere** — an overlay and hotkeys that type into any app on macOS, Windows and Linux.
- **Your choice of engine** — Whisper locally with optional GPU acceleration, or a cloud provider with your own key.
- **AI cleanup** removes filler words and false starts; **writing styles** control tone.
- **Dictionary** — custom terms and replacement rules that stay in sync.
- **History and chats** — replay past transcriptions with their audio, and talk to an AI assistant by voice.

The README describes it as privacy-first: you can run it against any backend, including fully offline.

## Who it is for, and who it is not for

**A good fit**

- Anyone whose writing is full of names and specialist terms.
- Teams that want a self-hosted or on-premises dictation backend.

**Look elsewhere**

- You want a plain MIT licence with nothing proprietary in the repository: [Handy](/apps/handy/) or [OpenWhispr](/apps/openwhispr/).
- You want meeting transcription too: [OpenWhispr](/apps/openwhispr/).

## How it compares

| | Voquill | [Handy](/apps/handy/) | [OpenWhispr](/apps/openwhispr/) | [Amical](/apps/amical/) |
|---|---|---|---|---|
| Platforms | macOS, Windows, Linux, mobile | macOS, Windows, Linux | macOS, Windows, Linux | macOS, Windows, Android |
| Transcription | Local or cloud | Local | Local or cloud | Local or cloud |
| Paid cloud plan | Voquill Cloud | None | OpenWhispr Cloud | Amical Premium |
| Licence | AGPL-3.0 plus enterprise code | MIT | MIT | MIT |

All are in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Licence in practice

The LICENCE file puts everything outside the `enterprise` directory and third-party components under AGPL-3.0; the `enterprise` directory is governed by Voquill's own proprietary licence. Using the desktop app is unrestricted, and if you modify it and offer it to others over a network you must publish your changes. The paid Pro plan covers Voquill Cloud transcription; an Enterprise tier adds on-premises deployment. More AGPL apps are under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository, README and LICENCE — <https://github.com/voquill/voquill> (29 Sep 2026)
- Releases — <https://github.com/voquill/voquill/releases>
- Dictation site and pricing — <https://voquill.com/dictation>
- Documentation — <https://docs.voquill.com>
