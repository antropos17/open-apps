---
name: Sol
repoUrl: https://github.com/ospfranco/sol
projectType: real-app
category: productivity
stack: react-native
summary: A free Mac launcher and command palette with app search, window management, clipboard
  history, an emoji picker, a calendar and dozens of small utilities, with almost no setup. It is
  built with React Native for macOS and runs custom AppleScript commands.
description: A Mac launcher with app search, window management, clipboard history and many built-in
  utilities.
sourceDescription: MacOS launcher & command palette
platforms:
  - macos
  - desktop
licenses:
  - mit
links:
  github: https://github.com/ospfranco/sol
  website: https://sol.ospfranco.com
distribution:
  channels:
    - type: website
      platform: macos
      label: sol.ospfranco.com
      url: https://sol.ospfranco.com
      verified: true
tags:
  - desktop-app
  - productivity
bestFor:
  - Mac users who want Raycast-style built-ins — window management, clipboard, calendar, emoji — with
    no extensions to install.
  - A free, open launcher with almost no configuration.
whyListed:
  - A long list of useful utilities built in, from UUID and lorem ipsum generators to a process killer
    and Wi-Fi password lookup.
  - Maintained since 2022, with frequent releases and a Homebrew cask.
caveats:
  - macOS only.
  - No extension store; you extend it with custom AppleScript commands, links and scripts.
  - It does not describe itself as a Raycast alternative; it is listed with them for doing the same
    job on a Mac.
relations:
  - type: alternative-to
    to: raycast
    evidence:
      type: editorial
      url: https://github.com/ospfranco/sol
      checkedAt: 2026-09-29
seo:
  title: "Sol Review: Free Raycast Alternative for Mac"
  description: Sol is a free macOS launcher with app search, window management, clipboard history, a
    calendar and dozens of built-in utilities. MIT-licensed.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: ospfranco
  repo: sol
  url: https://github.com/ospfranco/sol
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Sol is the Mac launcher for people who liked Raycast's built-in utilities more than its extension store. It ships a long list of small tools ready to use — app search, a window manager, clipboard history, an emoji picker, upcoming meetings in the menu bar, custom AppleScript commands and more — with almost nothing to configure. It is MIT-licensed, maintained since 2022, and built with React Native for macOS. Verified against the repository on 29 September 2026, at release 2.1.362.

## What it does

Beyond app search and custom shortcuts, Sol's built-ins include Google Translate, a calendar with the next meeting in the menu bar, starting a Google Meet, a window manager, an emoji picker, a clipboard manager, a notes scratchpad, browser bookmark import, custom links and AppleScript commands, a script runner, maths evaluation, a process killer, Wi-Fi password and IP address lookup, theme switching, NanoID, UUID and lorem ipsum generators, JSON formatting, and media-key forwarding to Spotify or Apple Music.

## Who it is for, and who it is not for

**A good fit**

- Mac users who want a free Raycast-style launcher that works well from the first minute.
- People who prefer built-in tools over installing extensions.

**Look elsewhere**

- You want to run Raycast extensions. [Vicinae](/apps/vicinae/) supports many of them.
- You also need Windows or Linux. [Wox](/apps/wox/) runs on all three.

## How it compares

| | Sol | [Wox](/apps/wox/) | [Vicinae](/apps/vicinae/) |
|---|---|---|---|
| Platforms | macOS | Windows, macOS, Linux | Linux, macOS, Windows |
| Approach | Many built-ins, little setup | Plugin store | Raycast extension compatibility |
| Licence | MIT | GPL-3.0 | GPL-3.0 |

The full comparison is in [open-source Raycast alternatives](/collections/open-source-raycast-alternatives/). Other [React Native](/stacks/react-native/) apps and [MIT-licensed apps](/licenses/mit/) are in the directory too.

## Installing it

`brew install --cask sol`, or download the latest build linked from the project site. Contributors need Xcode and a React Native for macOS setup.

## Verified sources

- Repository and README — <https://github.com/ospfranco/sol> (29 Sep 2026)
- Project site — <https://sol.ospfranco.com>
