---
name: Flow Launcher
repoUrl: https://github.com/Flow-Launcher/Flow.Launcher
projectType: real-app
category: productivity
summary: A keyboard launcher for Windows that finds apps, files and file contents, runs commands and
  previews results as you type. Search goes through Everything or the Windows index, and a large
  community plugin store adds more, with plugins in C#, F#, Python or Node.js.
description: A fast keyboard launcher for Windows to find apps and files, run commands and add plugins.
sourceDescription: Quick file search & app launcher for Windows with community-made plugins
platforms:
  - windows
  - desktop
licenses:
  - mit
links:
  github: https://github.com/Flow-Launcher/Flow.Launcher
  website: https://flowlauncher.com
distribution:
  channels:
    - type: github-releases
      platform: windows
      label: GitHub Releases
      url: https://github.com/Flow-Launcher/Flow.Launcher/releases/latest
      verified: true
tags:
  - desktop-app
  - productivity
bestFor:
  - Windows users who want a Raycast- or Alfred-style launcher with deep file search.
  - Searching file contents through Everything or the Windows index.
  - A portable install that runs without admin rights.
whyListed:
  - Mature and active since 2020, with frequent releases and a large plugin store.
  - Plugins in C#, F#, Python or Node.js, so most people can write their own.
  - Installs through winget, Scoop or Chocolatey, or as a portable build.
caveats:
  - Windows only.
  - Release builds are not code-signed, so Windows may warn on first install.
  - It does not describe itself as a Raycast alternative; it is listed with them for doing the same
    job on Windows.
relations:
  - type: alternative-to
    to: raycast
    evidence:
      type: editorial
      url: https://github.com/Flow-Launcher/Flow.Launcher
      checkedAt: 2026-09-29
seo:
  title: "Flow Launcher Review: Raycast for Windows"
  description: Flow Launcher searches apps, files and file contents on Windows, runs commands and
    previews results, with a large community plugin store. MIT-licensed.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Flow-Launcher
  repo: Flow.Launcher
  url: https://github.com/Flow-Launcher/Flow.Launcher
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Flow Launcher is the established open-source launcher for Windows: MIT-licensed, active since 2020, with fast app and file search, a preview panel and a large community plugin store. It is Windows-only and does not run Raycast extensions, but for a Windows user who wants the Raycast habit — hotkey, type, act — without an account or subscription, it is the most proven option. Verified against the repository on 29 September 2026, at release v2.1.4.

## What it does

Search apps, files and file contents, backed by Everything or the Windows index, including environment-variable paths. Open URLs and web searches, search browser bookmarks, do quick maths, run system commands such as lock or shutdown, and run batch or PowerShell commands, as Administrator or another user if needed. Press F1 for a preview panel that shows images, icons and descriptions, or Markdown with code highlighting. Results can be re-ranked by priority, and themes are customisable.

Plugins do the rest. The plugin store is large, and plugins can be written in C#, F#, Python or Node.js.

## Who it is for, and who it is not for

**A good fit**

- Windows users who want the fastest file and app search from the keyboard.
- People who want a portable launcher on a machine without admin rights.

**Look elsewhere**

- You also use macOS or Linux and want one launcher everywhere. [Wox](/apps/wox/) runs on all three.
- You want to run Raycast extensions. [Vicinae](/apps/vicinae/) supports many of them.

## How it compares

| | Flow Launcher | [Wox](/apps/wox/) | [Vicinae](/apps/vicinae/) |
|---|---|---|---|
| Platforms | Windows | Windows, macOS, Linux | Linux, macOS, Windows |
| File search | Everything or Windows index | Built-in | Built-in |
| Plugins | C#, F#, Python, Node.js | Node.js, Python, scripts | React/TypeScript, scripts |
| Licence | MIT | GPL-3.0 | GPL-3.0 |

All of them are in [open-source Raycast alternatives](/collections/open-source-raycast-alternatives/). More MIT apps are under [MIT-licensed apps](/licenses/mit/).

## Installing it

Run the Windows 10+ installer or the portable version from the releases page, or use `winget install "Flow Launcher"`, `scoop install Flow-Launcher` or `choco install Flow-Launcher`. The README warns that Windows may flag the unsigned installer on first run.

## Verified sources

- Repository and README — <https://github.com/Flow-Launcher/Flow.Launcher> (29 Sep 2026)
- Releases — <https://github.com/Flow-Launcher/Flow.Launcher/releases>
- Plugin store — <https://www.flowlauncher.com/plugins/>
