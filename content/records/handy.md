---
name: Handy
repoUrl: https://github.com/cjpais/Handy
projectType: real-app
category: productivity
stack: tauri
summary: A Tauri and Rust speech-to-text app — press a shortcut, speak, release, and the text is
  pasted into whatever app has focus, transcribed on your own computer with Whisper or Parakeet and
  silence trimmed by Silero VAD.
description: Handy is an MIT-licensed, fully offline dictation app for Windows, macOS and Linux that
  types what you say into any text field using Whisper or Parakeet on your own machine.
sourceDescription: A free, open source, and extensible speech-to-text application that works
  completely offline.
platforms:
  - windows
  - macos
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/cjpais/Handy
  website: https://handy.computer
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/cjpais/Handy/releases/latest
      verified: true
    - type: website
      label: handy.computer
      url: https://handy.computer
      verified: true
tags:
  - offline-first
  - privacy
  - desktop-app
  - cross-platform
  - productivity
bestFor:
  - Offline dictation on Windows, including Windows on Arm.
  - Anyone who needs push-to-talk speech-to-text that never sends audio anywhere.
  - Linux desktops, with documented setups for X11 and Wayland.
whyListed:
  - Builds for x64 and arm64 on all three desktop platforms, plus winget and Homebrew packages.
  - Transcription is entirely local, with Parakeet V3 for CPU-only machines and Whisper with GPU
    acceleration.
  - Scriptable through CLI flags and Unix signals, so window managers can own the hotkey.
caveats:
  - Plain transcription by design — it does not rewrite or restyle what you say the way Wispr Flow
    does, although an optional post-processing mode exists.
  - Wayland support is limited and needs an extra typing tool such as wtype or dotool.
  - Does not describe itself as a Wispr Flow alternative; it is listed with them because it does the
    same core job.
relations:
  - type: alternative-to
    to: wispr-flow
    evidence:
      type: editorial
      url: https://github.com/cjpais/Handy
      checkedAt: 2026-09-28
seo:
  title: Handy – Open Source Offline Dictation, Windows, Mac & Linux
  description: Handy types what you say into any app on Windows, macOS and Linux, transcribing
    offline with Whisper or Parakeet. MIT-licensed, x64 and arm64 builds.
addedAt: 2026-09-28
source:
  type: manual
  provider: github
  owner: cjpais
  repo: Handy
  url: https://github.com/cjpais/Handy
curation:
  reviewed: true
  reviewedAt: 2026-09-28
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Handy is the dictation app to install first on Windows or Linux: it is free, MIT-licensed, fully offline, and ships builds for x64 and arm64 on all three desktop platforms. It does one job — turn speech into text in the focused field — and deliberately stops there. If what you want from Wispr Flow is the AI rewrite of your rambling into a clean email, Handy is not that; if you want fast, private push-to-talk typing, it is the strongest open-source option. Verified against the repository on 28 September 2026, at release v0.9.7.

## How it works

Press the shortcut — hold to record, or tap to toggle — speak, and release. Silero voice-activity detection trims silence, the audio is transcribed on your machine, and the text is pasted into whatever app you are in. You choose the model: Whisper Small, Medium, Turbo or Large, with GPU acceleration when available, or Parakeet V3, which is tuned for CPUs and detects the language automatically. Nothing is sent to a server.

## Who it is for, and who it is not for

**A good fit**

- Windows and Windows-on-Arm users who want a local Wispr Flow-style hotkey.
- Linux users — X11 works with `xdotool`, Wayland with `wtype` or `dotool`, and the hotkey can be driven from your window manager through `handy --toggle-transcription` or signals.
- Accessibility setups where a stable, simple tool matters more than features.

**Look elsewhere**

- You want dictation rewritten into polished prose. [OpenLess](/apps/openless/) and [Voicetypr](/apps/voicetypr/) add an AI formatting step.
- You want a Mac app that reads the screen for context. [VoiceInk](/apps/voiceink/) and [FluidVoice](/apps/fluidvoice/) are built for macOS.

## How it compares

| | Handy | [Voicetypr](/apps/voicetypr/) | [OpenLess](/apps/openless/) | [VoiceInk](/apps/voiceink/) |
|---|---|---|---|---|
| Windows | Yes (x64, arm64) | Yes | Yes | No |
| Linux | Yes | No | Yes | No |
| Local transcription | Always | Default | macOS; Windows experimental | Yes |
| AI rewrite | Optional post-processing | Optional, your key | Core feature | Yes |
| Licence | MIT | AGPL-3.0, paid builds | AGPL-3.0 | GPL-3.0, paid builds |

The full list, with a verdict on each, is in [open-source Wispr Flow alternatives](/collections/open-source-wispr-flow-alternatives/).

## Installing it

Download from the releases page or the website: `.exe` or `.msi` for Windows, `.dmg` for macOS, `.AppImage`, `.deb` or `.rpm` for Linux. `winget install cjpais.Handy` and `brew install --cask handy` also work, though neither package is maintained by the Handy developers. On Debian or Ubuntu, install the `.deb` with `apt`, not `dpkg`, so dependencies come along. Grant microphone and accessibility permissions on first launch.

## Licence in practice

MIT, with no paid tier or closed component. Fork it, ship it, embed it. Other MIT desktop apps are under [MIT-licensed apps](/licenses/mit/), and other [Tauri](/stacks/tauri/) apps sit alongside it.

## Verified sources

- Repository and README — <https://github.com/cjpais/Handy> (28 Sep 2026)
- Releases — <https://github.com/cjpais/Handy/releases>
- Project site — <https://handy.computer>
