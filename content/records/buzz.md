---
name: Buzz
repoUrl: https://github.com/chidiwilliams/buzz
projectType: real-app
category: media
summary: A desktop app that transcribes and translates audio, video, YouTube links and live speech
  offline on your own computer, with Whisper models. It adds speaker identification, a transcript
  viewer, a watch folder and TXT, SRT and VTT export.
description: Offline transcription and translation of audio and video with Whisper, on Mac, Windows and Linux.
sourceDescription: Buzz transcribes and translates audio offline on your personal computer. Powered
  by OpenAI's Whisper.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/chidiwilliams/buzz
  docs: https://chidiwilliams.github.io/buzz/
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/chidiwilliams/buzz/releases/latest
      verified: true
    - type: flathub
      label: Flathub
      url: https://flathub.org/apps/io.github.chidiwilliams.Buzz
      verified: true
    - type: snapcraft
      label: Snap Store
      url: https://snapcraft.io/buzz
      verified: true
    - type: website
      label: SourceForge downloads
      url: https://sourceforge.net/projects/buzz-captions/files/
      verified: true
tags:
  - offline-first
  - desktop-app
  - cross-platform
  - privacy
  - media
bestFor:
  - Transcribing interviews, lectures and recorded meetings without uploading them.
  - Making subtitles (SRT or VTT) for video.
  - Live captions from a microphone during a talk or event.
whyListed:
  - In development in the open since September 2022, with regular releases.
  - Everything runs locally, with CUDA, Apple Silicon and Vulkan acceleration.
  - Packaged for Flathub and Snap as well as macOS and Windows installers.
caveats:
  - It does not describe itself as an Otter.ai alternative; it is listed with them for transcribing
    recordings and live speech on your own computer. It does not join calls or write meeting
    summaries by itself — summaries come through a plugin.
  - The Windows build is unsigned and shows a warning on install.
  - The README says newer versions require Apple silicon; 1.4.5 is the last release for Intel Macs.
relations:
  - type: alternative-to
    to: otter
    evidence:
      type: editorial
      url: https://github.com/chidiwilliams/buzz
      checkedAt: 2026-09-29
seo:
  title: "Buzz Review: Offline Transcription with Whisper"
  description: Buzz transcribes and translates audio, video and live speech offline with Whisper on Mac, Windows and Linux, with speaker labels and subtitle export. MIT.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: chidiwilliams
  repo: buzz
  url: https://github.com/chidiwilliams/buzz
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Buzz is the established choice for turning recordings into text on your own computer. It transcribes and translates audio and video files, YouTube links and live microphone input with Whisper, entirely offline, and has been developed in the open since 2022. It is a transcription workbench rather than a meeting assistant: there is no calendar, no bot and no automatic summary. Verified against the repository on 29 September 2026, at release v1.4.5.

## What it does

- **Files and links** — transcribe audio, video or YouTube links; a watch folder picks up new files automatically.
- **Live transcription** from the microphone, with a presentation window for events.
- **Accuracy tools** — speech separation for noisy audio and speaker identification.
- **Several Whisper back ends**, including whisper.cpp with Vulkan, CUDA for Nvidia GPUs, Apple Silicon support, and Hugging Face Whisper-type models.
- **Output** — a searchable transcript viewer with playback controls, export to TXT, SRT and VTT, a command-line interface and plugins, including AI summary generation.

## Who it is for, and who it is not for

**A good fit**

- Journalists, researchers and students with recordings that should not leave their laptop.
- Video makers who need subtitles.

**Look elsewhere**

- You want transcripts of your calls taken automatically: [OpenWhispr](/apps/openwhispr/) or [Minutes](/apps/minutes/).
- You want a lighter Tauri app with summaries built in: [Vibe](/apps/vibe/).

## How it compares

| | Buzz | [Vibe](/apps/vibe/) | [OpenWhispr](/apps/openwhispr/) | [Minutes](/apps/minutes/) |
|---|---|---|---|---|
| Main job | File and live transcription | File and live transcription | Dictation and meetings | Meetings and voice memos |
| Speaker labels | Yes | Yes | Yes | Yes |
| Summaries | Through a plugin | Claude API or Ollama | Built in | Your chosen AI provider |
| Linux | Flathub, Snap, AppImage | .deb, .rpm | AppImage, .deb, .rpm | CLI |
| Licence | MIT | MIT | MIT | MIT |

All four are in [open-source Otter.ai alternatives](/collections/open-source-otter-alternatives/).

## Installing it

The README sends macOS and Windows users to SourceForge for installers; GitHub releases carry them too. On Linux, install from Flathub (`io.github.chidiwilliams.Buzz`) or the Snap Store. Python users can `pip install buzz-captions`. More [media apps](/categories/media/) are listed, and more MIT apps are under [MIT apps](/licenses/mit/).

## Verified sources

- Repository and README — <https://github.com/chidiwilliams/buzz> (29 Sep 2026)
- Releases — <https://github.com/chidiwilliams/buzz/releases>
- Documentation — <https://chidiwilliams.github.io/buzz/>
- Flathub — <https://flathub.org/apps/io.github.chidiwilliams.Buzz>
