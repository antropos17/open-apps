---
name: VoiceStudio
repoUrl: https://github.com/debpalash/VoiceStudio
projectType: real-app
category: media
summary: A desktop voice studio that clones and designs voices, dubs video with timed speech,
  dictates, transcribes and produces audiobooks on your own hardware, with the OmniVoice model by
  default, a choice of other engines, and a local API and MCP server for agents.
description: VoiceStudio is an AGPL-3.0 desktop app for macOS, Windows and Linux that does voice
  cloning, dubbing, dictation and audiobook production locally. Its default model's weights are
  licensed for non-commercial use only.
sourceDescription: VoiceStudio is the open-source, fully-local ElevenLabs alternative — voice
  cloning, voice design, video dubbing, dictation, transcription & audiobook creation in 646
  languages.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - agpl-3.0
links:
  github: https://github.com/debpalash/VoiceStudio
  website: https://voicestudio.sh
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/debpalash/VoiceStudio/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - media
  - offline-first
  - privacy
bestFor:
  - Voice cloning and text-to-speech for personal or research projects without sending audio to a
    cloud service.
  - Dubbing a video into another language with timed speech, on your own GPU.
  - Giving a local agent a voice through MCP or a local HTTP API.
whyListed:
  - The broadest local voice toolkit in one app — cloning, voice design, dubbing, dictation,
    transcription, audiobooks and batch jobs.
  - Engines are swappable, so you can pick a model whose licence suits your use.
  - Analytics is off until you consent, and generated audio can carry an invisible watermark.
caveats:
  - The default OmniVoice model weights are CC-BY-NC — non-commercial. Selling or monetising audio
    made with them needs another engine or a separate grant.
  - Early-stage — the repository was created in April 2026 (as OmniVoice Studio), and 0.5.3 was
    the last release of its original Tauri shell — the app is Electron now.
  - Many forks and mirrors reuse the VoiceStudio and OmniVoice Studio names; the canonical repository
    is debpalash/VoiceStudio.
  - Hardware needs vary by engine; large models want a capable GPU or Apple Silicon.
relations:
  - type: alternative-to
    to: elevenlabs
    evidence:
      type: self-described
      url: https://github.com/debpalash/VoiceStudio
      quote: VoiceStudio is the open-source, fully-local ElevenLabs alternative
      checkedAt: 2026-09-28
seo:
  title: VoiceStudio – Open Source Local ElevenLabs Alternative
  description: VoiceStudio clones voices, dubs video and makes audiobooks locally on macOS, Windows and
    Linux. AGPL-3.0; check model licences for commercial use.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: debpalash
  repo: VoiceStudio
  url: https://github.com/debpalash/VoiceStudio
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
VoiceStudio is the most complete local answer to ElevenLabs in one desktop app: voice cloning, voice design, video dubbing, dictation, transcription and audiobook production, running on your own machine, with a local API and MCP server for agents. The app is AGPL-3.0. The model it uses by default is not free for commercial use — its weights are CC-BY-NC — and that, more than anything in the app, decides whether VoiceStudio fits your project. Verified against the repository on 28 September 2026, at release v0.5.6.

## What it does

Open **Voice cloning**, pick a voice or add a clean reference recording, type your text and generate; the app downloads the model it needs when prompted. From there the same workspace covers designing a voice from a description, dubbing a video with timed speech, a floating dictation widget, transcription, and long-form jobs — stories, audiobooks and batches. A local HTTP API and an MCP server let scripts and agents use the same voices, and optional remote workers can take the heavy generation off your laptop.

The default engine is k2-fsa's OmniVoice, whose language catalogue lists 646 languages. Other engines are available, including CosyVoice 3, IndexTTS 2.5, MOSS-TTS and dots.tts, each with its own guide and its own language set.

## Who it is for, and who it is not for

**A good fit**

- Personal, research and non-commercial production where audio must not leave the machine.
- Dubbing and audiobook work with a GPU or an Apple Silicon Mac.
- Agent builders who want a local voice behind MCP.

**Look elsewhere**

- You will sell or monetise the audio and want the default model. Choose an engine whose weights allow it, or look at [Voicebox](/apps/voicebox/), whose bundled engines are mostly MIT or Apache-2.0 — with one Llama-licensed exception.
- You want a small, focused dictation tool. [Handy](/apps/handy/) does only speech-to-text and does it well.

## Licence in practice

There are three layers, and they differ:

1. **The application** — the Electron shell, React front end, FastAPI backend and scripts — is AGPL-3.0-only. Commercial and internal use is allowed. If you modify it and offer it to others over a network, you must publish your changes. A paid commercial licence is offered for closed-source embedding.
2. **The bundled `omnivoice` Python package** stays under its upstream Apache-2.0 licence.
3. **Model weights** keep their own terms. The OmniVoice model card says the code is Apache-2.0 and the pre-trained model is CC-BY-NC "due to constraints from its training data". Its audio tokenizer carries separate Boson Higgs Audio 2 and Meta Llama community terms. VoiceStudio's commercial licence does not change any of this.

Only clone voices you have permission to use; the project says the same. More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Which VoiceStudio

The project started as OmniVoice Studio — `debpalash/OmniVoice-Studio` now redirects to `debpalash/VoiceStudio`. Several forks and mirrors on GitHub use either name, including a Chinese translation. OmniVoice on its own (`k2-fsa/OmniVoice`) is the speech model, not this app.

## Running it

Download the Electron build for your platform from the releases page — `.dmg` for Apple Silicon or Intel Macs, `.exe` for Windows, `.AppImage` or `.deb` for Linux — or run `curl -fsSL https://voicestudio.sh/install | sh` on macOS or Linux. Version 0.5.3 was the last Tauri release; Tauri users must install the Electron app separately.

## How it compares

| | VoiceStudio | [Voicebox](/apps/voicebox/) |
|---|---|---|
| Scope | Cloning, design, dubbing, dictation, transcription, audiobooks | Cloning, dictation, effects, stories, MCP |
| App licence | AGPL-3.0 | MIT |
| Default model licence | CC-BY-NC weights | Mostly MIT or Apache-2.0 engines |
| Desktop shell | Electron | Tauri |

Both are in [open-source ElevenLabs alternatives](/collections/open-source-elevenlabs-alternatives/).

## Verified sources

- Repository and README — <https://github.com/debpalash/VoiceStudio> (28 Sep 2026)
- Licence notice — <https://github.com/debpalash/VoiceStudio/blob/main/LICENSE-NOTICE.md>
- OmniVoice model card — <https://huggingface.co/k2-fsa/OmniVoice>
- Language catalogue — <https://github.com/debpalash/VoiceStudio/blob/main/docs/languages.md>
