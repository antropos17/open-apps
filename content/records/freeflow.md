---
name: FreeFlow
repoUrl: https://github.com/zachlatta/freeflow
projectType: real-app
category: productivity
summary: A native Mac dictation app — hold Fn, speak, and a fast hosted model transcribes and cleans
  up what you said, then pastes it. It uses nearby app context and your custom vocabulary, and an
  Edit Mode rewrites selected text by voice.
description: Free Mac dictation that cleans up your speech with Groq or any OpenAI-compatible provider
  you choose.
sourceDescription: Free & fast alternative to Wispr Flow
platforms:
  - macos
  - desktop
licenses:
  - mit
links:
  github: https://github.com/zachlatta/freeflow
  website: https://freeflow.zachlatta.com
distribution:
  channels:
    - type: github-releases
      platform: macos
      label: FreeFlow.dmg
      url: https://github.com/zachlatta/freeflow/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - productivity
bestFor:
  - The fastest free path to Wispr Flow-style cleanup on a Mac, using a free Groq key.
  - Rewriting highlighted text by voice — "make this shorter", "turn this into bullets".
  - Spelling names and jargon correctly from the context of the app you are typing in.
whyListed:
  - Free and MIT, for Apple Silicon and Intel Macs.
  - No FreeFlow server — requests go only to the provider you configure, including local
    OpenAI-compatible servers.
caveats:
  - Cloud by default. Audio and nearby screen context go to Groq unless you point it at a local or
    self-hosted provider, which the README says is often slower.
  - macOS only.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/zachlatta/freeflow
      quote: Free and open source alternative to Wispr Flow, Superwhisper, and Monologue.
      checkedAt: 2026-09-28
seo:
  title: "FreeFlow Review: Wispr Flow Alternative for Mac"
  description: FreeFlow is a free Mac dictation app that cleans up your speech with app context and
    custom vocabulary, via Groq or any OpenAI-compatible provider. MIT.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: zachlatta
  repo: freeflow
  url: https://github.com/zachlatta/freeflow
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
FreeFlow is the quickest way to get Wispr Flow's feel on a Mac for free: hold Fn, talk, and cleaned-up text appears, with names and terms spelled from the context of the app you are in. It gets that speed by using a hosted model — Groq by default, with a free key — so it is not a privacy-first tool unless you point it at your own server. MIT-licensed, macOS only. Verified against the repository on 28 September 2026, at release v1.2.1.

## What it does

Hold `Fn` to talk or tap `Command-Fn` to toggle. FreeFlow transcribes, then runs a cleanup pass that removes filler words, fixes grammar and punctuation, and corrects close misspellings of names it can see in nearby app context or in your custom vocabulary. **Edit Mode** works on selected text: highlight a paragraph, say "make this shorter", and it is rewritten in place. If you prefer a literal transcript, the README gives a simpler system prompt to paste into settings.

## Where your audio goes

There is no FreeFlow server. The only data that leaves the Mac is the API calls to the transcription and language-model provider you configured — Groq by default. Any OpenAI-compatible local or self-hosted provider can replace it; the README warns that local models are often slower, especially on cold starts and long recordings.

## Who it is for, and who it is not for

**A good fit**

- Mac users who want Wispr Flow-style cleanup today and are fine with a hosted model.
- People who dictate into many apps and want context-aware spelling.

**Look elsewhere**

- Audio must stay on the Mac by default. [VoiceInk](/apps/voiceink/) and [FluidVoice](/apps/fluidvoice/) transcribe on-device.
- You use Windows or Linux. See [Handy](/apps/handy/) or [Voicetypr](/apps/voicetypr/).

## How it compares

| | FreeFlow | [VoiceInk](/apps/voiceink/) | [FluidVoice](/apps/fluidvoice/) |
|---|---|---|---|
| Transcription | Groq or your provider | On-device | On-device |
| Price of builds | Free | Paid after trial | Free |
| Licence | MIT | GPL-3.0 | GPL-3.0, private enhancement model |

The whole field is compared in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/). Other MIT apps are under [MIT-licensed apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/zachlatta/freeflow> (28 Sep 2026)
- Releases — <https://github.com/zachlatta/freeflow/releases>
