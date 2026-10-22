---
name: Vicinae
repoUrl: https://github.com/vicinaehq/vicinae
projectType: real-app
category: productivity
summary: A keyboard launcher that runs many Raycast extensions and script commands, with clipboard
  history, snippets, file search, window switching and an emoji picker built in. It was built first
  for Linux and now also runs on macOS and Windows, as a native C++ and Qt app.
description: A Raycast-style keyboard launcher for Linux, macOS and Windows that runs many Raycast
  extensions.
sourceDescription: A focused launcher for your desktop - native, fast, extensible
platforms:
  - linux
  - macos
  - windows
  - desktop
licenses:
  - gpl-3.0
links:
  github: https://github.com/vicinaehq/vicinae
  website: https://vicinae.com
  docs: https://docs.vicinae.com
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/vicinaehq/vicinae/releases/latest
      verified: true
tags:
  - desktop-app
  - cross-platform
  - productivity
bestFor:
  - Bringing a Raycast workflow to Linux, extensions included.
  - A fast native launcher with clipboard history, snippets and window switching built in.
  - dmenu-style menus for Linux scripting.
whyListed:
  - Runs many Raycast extensions and script commands without changes, and lists the Raycast store in
    the app.
  - Native C++ and Qt, not Electron.
caveats:
  - Created in July 2025 and still pre-1.0; releases are frequent.
  - Not every Raycast extension works — the project says "many", not all.
  - It describes itself as Raycast-compatible rather than as an alternative; it is listed here for
    that compatibility.
relations:
  - type: alternative-to
    to: raycast
    evidence:
      type: editorial
      url: https://www.vicinae.com
      quote: Run many Raycast extensions and script commands out of the box. Bring your macOS workflow to Linux.
      checkedAt: 2026-09-29
seo:
  title: "Vicinae Review: Raycast Alternative for Linux"
  description: Vicinae is a native launcher for Linux, macOS and Windows that runs many Raycast
    extensions, with clipboard history, snippets and file search. GPL-3.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: vicinaehq
  repo: vicinae
  url: https://github.com/vicinaehq/vicinae
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Vicinae is the answer for Linux users who miss Raycast: a native command palette that runs many Raycast extensions and script commands as they are, with the Raycast store integrated in the app. Raycast itself ships for macOS and Windows, not Linux, which is exactly the gap Vicinae was built for — its site says "Bring your macOS workflow to Linux." It is GPL-3.0, written in C++ with Qt, and now also has macOS and Windows builds. Verified against the repository on 29 September 2026, at release v0.29.0.

## What it does

Out of the box Vicinae covers app search, clipboard history, snippets (a text expander), file search, a browser tab switcher, an emoji picker, a calculator, window and workspace switching, a font browser and volume control. Beyond that, three ways to extend it:

- **React and TypeScript extensions**, compatible with the Raycast ecosystem, installable from the Vicinae store or the Raycast store.
- **Script commands**, compatible with Raycast's feature of the same name, with Vicinae additions.
- **dmenu-style menus**, for the minimalist Linux way of building pickers from shell scripts.

## Who it is for, and who it is not for

**A good fit**

- Linux desktop users coming from Raycast on a Mac.
- Anyone who wants Raycast's extension ecosystem without Raycast's account and paid tiers.

**Look elsewhere**

- You need every Raycast extension to work; some depend on macOS-only APIs.
- You want the longest track record on Windows. [Flow Launcher](/apps/flow-launcher/) has been Windows-only and mature since 2020.

## How it compares

| | Vicinae | [Wox](/apps/wox/) | [Flow Launcher](/apps/flow-launcher/) | [Sol](/apps/sol/) |
|---|---|---|---|---|
| Built first for | Linux | All three platforms | Windows | macOS |
| Raycast extensions | Many run as-is | No | No | No |
| Licence | GPL-3.0 | GPL-3.0 | MIT | MIT |

See the verdicts in [open-source Raycast alternatives](/collections/open-source-raycast-alternatives/). More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/vicinaehq/vicinae> (29 Sep 2026)
- Project site — <https://www.vicinae.com>
- Documentation — <https://docs.vicinae.com>
