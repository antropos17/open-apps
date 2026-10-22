---
name: Vibe
repoUrl: https://github.com/thewh1teagle/vibe
projectType: real-app
category: media
stack: tauri
summary: A desktop app that transcribes audio, video, system audio and your microphone offline on
  Mac, Windows and Linux, with speaker labels, batch jobs and subtitle export. It uses Whisper,
  Nemotron or Parakeet models, can summarize through Ollama or the Claude API, and is built with
  Tauri and Rust.
description: Offline transcription for audio and video on Mac, Windows and Linux, with speaker labels
  and subtitles.
sourceDescription: Transcribe on your own!
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/thewh1teagle/vibe
  website: https://thewh1teagle.github.io/vibe/
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/thewh1teagle/vibe/releases/latest
      verified: true
    - type: website
      label: Download page
      url: https://thewh1teagle.github.io/vibe/
      verified: true
tags:
  - offline-first
  - desktop-app
  - cross-platform
  - privacy
  - media
bestFor:
  - Batch-transcribing a folder of recordings on a laptop GPU.
  - Subtitles sized for videos and reels.
  - Transcribing a call from system audio without sending it anywhere.
whyListed:
  - Fully offline transcription with GPU acceleration on Nvidia, AMD and Intel through Vulkan, and
    CoreML on Macs.
  - Local summaries through Ollama, plus a CLI and an HTTP API for automation.
caveats:
  - It does not describe itself as an Otter.ai alternative; it is listed with them for transcribing
    recordings and system audio on your own computer. It does not detect or join meetings.
  - Summaries with the Claude API send the transcript to Anthropic; use Ollama to keep them local.
relations:
  - type: alternative-to
    to: otter
    evidence:
      type: editorial
      url: https://github.com/thewh1teagle/vibe
      checkedAt: 2026-09-29
seo:
  title: "Vibe Review: Offline Audio & Video Transcription"
  description: Vibe transcribes audio, video and system sound offline on Mac, Windows and Linux, with speaker labels, batch jobs, subtitles and summaries. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: thewh1teagle
  repo: vibe
  url: https://github.com/thewh1teagle/vibe
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Vibe is a desktop transcription app built with Tauri and Rust. Drop in audio or video — or record the microphone or system audio — and it transcribes on your own machine with Whisper, Nemotron or Parakeet models, labels speakers, and exports to almost any format. Summaries can run locally through Ollama, so you get a transcript and notes without a cloud account. Verified against the repository on 29 September 2026, at release v3.2.2.

## What it does

- **Transcribe** audio and video files, batches of files, links from YouTube, Vimeo and other sites, the microphone or system audio, with a real-time preview.
- **Speaker diarization** and a stable-timestamps mode for subtitle-grade timing.
- **Export** to SRT, VTT, TXT, HTML, PDF, JSON and DOCX, or print; choose caption length for videos and reels.
- **Summaries** with Ollama locally or the Claude API, and translation to English.
- **Record from your phone** — scan a QR code and your computer transcribes what the phone records.
- **Automation** — a CLI and an HTTP API with Swagger docs.

## Who it is for, and who it is not for

**A good fit**

- Anyone transcribing interviews, podcasts or lectures in many languages who wants the audio to stay local.
- People with a gaming GPU on Windows or Linux — Vulkan acceleration covers Nvidia, AMD and Intel.

**Look elsewhere**

- You want meetings detected and recorded for you: [OpenWhispr](/apps/openwhispr/) or [Minutes](/apps/minutes/).
- You want a Flatpak or Snap on Linux: [Buzz](/apps/buzz/).

## How it compares

| | Vibe | [Buzz](/apps/buzz/) | [OpenWhispr](/apps/openwhispr/) |
|---|---|---|---|
| Built with | Tauri, Rust | Python | Electron, React |
| Speech models | Whisper, Nemotron, Parakeet | Whisper family | Whisper, Parakeet and others |
| Summaries | Ollama or Claude API | Plugin | Built in |
| Licence | MIT | MIT | MIT |

All are in [open-source Otter.ai alternatives](/collections/open-source-otter-alternatives/). More [Tauri](/stacks/tauri/) apps and [MIT apps](/licenses/mit/) are listed too.

## Verified sources

- Repository and README — <https://github.com/thewh1teagle/vibe> (29 Sep 2026)
- Releases — <https://github.com/thewh1teagle/vibe/releases>
- Download page — <https://thewh1teagle.github.io/vibe/>
