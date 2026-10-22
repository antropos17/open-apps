---
name: OpenLess
repoUrl: https://github.com/Open-Less/openless
projectType: real-app
category: productivity
stack: tauri
summary: Hold a key, speak and release, and AI-polished text in the style you chose appears at your
  cursor in any app on Windows, macOS, Linux and Android. It is a Tauri and Rust voice-input app with
  a learning dictionary, switchable style packs and an AI-prompt mode that turns rambling into a
  structured prompt.
description: Voice typing for Windows, Mac, Linux and Android that turns speech into polished text in the style you choose.
sourceDescription: Hold a key, speak, release — AI-polished text appears at your cursor in any app.
  Open-source voice input for macOS & Windows.
platforms:
  - windows
  - macos
  - linux
  - android
  - desktop
licenses:
  - agpl-3.0
links:
  github: https://github.com/Open-Less/openless
  website: https://openless.top
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/Open-Less/openless/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - cross-platform
  - productivity
bestFor:
  - Speaking a messy thought and getting a clean, structured prompt for ChatGPT, Claude or Cursor.
  - Chinese and English dictation with Chinese cloud speech providers.
  - Switching writing styles with a keystroke.
whyListed:
  - Rewriting speech into a chosen style is the core feature, not an add-on.
  - Builds for Windows, macOS, Linux and Android from one repository.
  - A dictionary that learns from your corrections and feeds hotwords to the speech provider.
caveats:
  - Early-stage — the repository was created in April 2026.
  - Cloud-first. Setup expects speech and language-model credentials (the README's walkthrough uses
    Volcengine); local speech recognition is bundled on macOS and experimental on Windows.
  - Most providers in the default list are Chinese cloud services; OpenAI-compatible endpoints are
    supported.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: self-described
      url: https://github.com/Open-Less/openless
      quote: a fully open-source alternative to commercial tools such as Typeless, Wispr Flow
      checkedAt: 2026-09-28
seo:
  title: "OpenLess Review: Wispr Flow Alternative"
  description: OpenLess turns speech into polished text or an AI prompt at your cursor on Windows,
    macOS, Linux and Android. AGPL-3.0, with providers you choose.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: Open-Less
  repo: openless
  url: https://github.com/Open-Less/openless
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels:
    - new
  lenses: []
visibility: keep
---
OpenLess is the open-source app closest to what makes Wispr Flow feel different from plain dictation: it does not just transcribe, it rewrites what you said in a style you picked, and its headline "AI-prompt mode" turns a spoken ramble into a structured prompt for a chatbot or coding agent. It is AGPL-3.0 and ships for Windows, macOS, Linux and Android. The trade-off is that it is cloud-first — you bring speech and model credentials — and young. Verified against the repository on 28 September 2026, at release v1.3.18.

## What it does

Put the cursor in any text field, hold the hotkey and speak. OpenLess records, sends the audio to the speech provider you configured, polishes the transcript with a language model in the current mode, and streams the result into the field character by character, with a clipboard fallback. **Style packs** fix tone once and switch with a key. The **dictionary** learns: correct a word it wrote and it offers to remember it, and entries are sent as hotwords to providers that support them.

## Where your audio goes

This is the question to answer before installing. The README lists cloud speech providers — Volcengine, Tencent Cloud, iFlytek, Alibaba Cloud Bailian, StepFun and others — and polish providers including DeepSeek, OpenAI, Gemini, OpenRouter and any OpenAI-compatible endpoint. Local speech recognition is bundled on macOS (Qwen3-ASR), with Windows variants using Foundry Local Whisper and sherpa-onnx marked experimental. For fully offline dictation on Windows today, [Handy](/apps/handy/) or [Voicetypr](/apps/voicetypr/) are the safer picks.

## Who it is for, and who it is not for

**A good fit**

- Heavy users of chatbots and coding agents who think out loud.
- Bilingual Chinese–English writers.

**Look elsewhere**

- Audio must never leave your computer on Windows — see above.
- You want a mature, stable app; releases are frequent and the project is months old.

## How it compares

| | OpenLess | [Handy](/apps/handy/) | [Voicetypr](/apps/voicetypr/) | [FreeFlow](/apps/freeflow/) |
|---|---|---|---|---|
| Platforms | Windows, macOS, Linux, Android | Windows, macOS, Linux | Windows, macOS | macOS |
| Transcription | Cloud; local on macOS | Local | Local by default | Cloud (Groq by default) |
| AI rewrite | Core feature, style packs | Optional | Optional | Context-aware cleanup |
| Licence | AGPL-3.0 | MIT | AGPL-3.0 | MIT |

All of them are in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Licence in practice

AGPL-3.0 for the whole repository. Using it is unrestricted; if you modify it and let others use your version over a network, you must publish your changes. The repository ships no API keys, and new credentials are written to the operating system's credential store. More AGPL apps are under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/Open-Less/openless> (28 Sep 2026)
- Releases — <https://github.com/Open-Less/openless/releases>
- Project site — <https://openless.top>
