---
name: Wox
repoUrl: https://github.com/Wox-launcher/Wox
projectType: real-app
category: productivity
summary: A native, GPU-rendered keyboard launcher written in Go for Windows, macOS and Linux — app
  and file search, keyboard-first actions, and plugins in Node.js, Python or scripts from a plugin and
  theme store.
description: Wox is a GPL-3.0, cross-platform keyboard launcher for Windows, macOS and Linux with a
  plugin store and native rendering, and describes itself as an open-source Raycast and Alfred
  alternative.
sourceDescription: A cross-platform launcher that simply works
platforms:
  - windows
  - macos
  - linux
  - desktop
licenses:
  - gpl-3.0
links:
  github: https://github.com/Wox-launcher/Wox
  website: https://www.woxlauncher.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/Wox-launcher/Wox/releases/latest
      verified: true
tags:
  - foss-alternative
  - desktop-app
  - cross-platform
  - productivity
bestFor:
  - One launcher across Windows, macOS and Linux with the same plugins and keybindings.
  - Writing your own commands as Node.js or Python plugins.
  - A launcher that stays resident without an Electron memory footprint.
whyListed:
  - Self-described open-source Raycast and Alfred alternative, maintained since 2013.
  - Native GPU rendering on all three platforms, with packages for Homebrew, winget, Scoop,
    Chocolatey and the AUR.
  - A plugin and theme store with Node.js, Python and script plugin hosts.
caveats:
  - It does not run Raycast extensions; plugins are written for Wox.
  - The README puts everyday memory use around 150 MB — light for a launcher with a plugin runtime,
    heavier than a minimal one.
relations:
  - type: alternative-to
    to: raycast
    evidence:
      type: self-described
      url: https://github.com/Wox-launcher/Wox
      quote: It is an open-source Raycast / Alfred alternative.
      checkedAt: 2026-09-29
seo:
  title: Wox – Open Source Raycast Alternative, Windows, Mac & Linux
  description: Wox is a native keyboard launcher for Windows, macOS and Linux with app and file search
    and plugins from a store. GPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Wox-launcher
  repo: Wox
  url: https://github.com/Wox-launcher/Wox
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Wox is the open-source Raycast alternative to pick if you use more than one operating system: a single launcher for Windows, macOS and Linux, with native GPU rendering on each, the same plugin store everywhere, and a history going back to 2013. It says plainly what it is — "an open-source Raycast / Alfred alternative" — and it is GPL-3.0. It does not run Raycast's own extensions; for that, see Vicinae. Verified against the repository on 29 September 2026, at release v2.4.5.

## What it does

Press the hotkey and type: Wox finds apps and files and runs keyboard-first actions without leaving the input. Everything beyond the basics is a plugin. Built-ins cover the start, and the plugin store adds more, written in Node.js, Python or as scripts — the repository ships separate plugin hosts for Node.js and Python, so writing your own command is a small file rather than a native build. Themes come from a separate theme store.

The core is written in Go and renders natively rather than through Electron or a browser shell. The README puts everyday memory use at around 150 MB.

## Who it is for, and who it is not for

**A good fit**

- People who switch between a Windows work machine, a Mac and a Linux box and want one launcher.
- Anyone who wants to script their own commands in Python or JavaScript.

**Look elsewhere**

- You rely on Raycast extensions. [Vicinae](/apps/vicinae/) runs many of them.
- You only use Windows and want the deepest file search there. [Flow Launcher](/apps/flow-launcher/) integrates with Everything and the Windows index.
- You only use a Mac and want many built-in utilities with no setup. [Sol](/apps/sol/) ships them.

## How it compares

| | Wox | [Vicinae](/apps/vicinae/) | [Flow Launcher](/apps/flow-launcher/) | [Sol](/apps/sol/) |
|---|---|---|---|---|
| Platforms | Windows, macOS, Linux | Linux, macOS, Windows | Windows | macOS |
| Raycast extensions | No | Many run as-is | No | No |
| Plugins | Node.js, Python, scripts | React/TypeScript, scripts | C#, F#, Python, Node.js | AppleScript, scripts |
| Licence | GPL-3.0 | GPL-3.0 | MIT | MIT |

All four are compared in [open-source Raycast alternatives](/collections/open-source-raycast-alternatives/).

## Installing it

`brew install --cask wox` on macOS; `winget install -e --id Wox.Wox`, `scoop install extras/wox` or `choco install wox` on Windows; `yay -S wox-bin` on Arch. The releases page has a `.dmg` for Apple Silicon and Intel, an `.exe` for Windows, and `.AppImage`, `.deb` and `.rpm` for Linux.

## Licence in practice

GPL-3.0 for the whole repository. Use it freely; if you distribute a modified Wox, share the source under the same licence. More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/Wox-launcher/Wox> (29 Sep 2026)
- Releases — <https://github.com/Wox-launcher/Wox/releases>
- Documentation and plugin store — <https://www.woxlauncher.com>
