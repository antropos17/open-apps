---
name: Oh My Android
repoUrl: https://github.com/ateymoori/oh-my-android
category: developer-tools
stack: macos
summary: A Mac control panel for Android developers that toggles dark mode, RTL, font scale and
  TalkBack on the emulator or a phone without opening Android Studio, and lets AI coding agents drive
  the device. It is a native SwiftUI app over adb with a built-in stdio MCP server in a single signed
  binary.
description: Mac control panel for the Android Emulator and phones, with an MCP server for AI coding agents.
platforms:
  - macos
tags:
  - android
  - android-emulator
  - adb
  - mcp
  - accessibility
bestFor:
  - Android developers on a Mac who test dark mode, RTL, font scale or TalkBack many times a day
  - Letting Claude Code, Codex or Cursor see and drive the Android Emulator through MCP
  - Checking layouts in dp and TalkBack order on any installed app
whyListed:
  - One always-visible native panel for emulators and real phones that works with Android Studio closed
  - Built-in stdio MCP server (18 tools, dp coordinates) in a single signed binary, no Node or Python runtime
  - A small, readable SwiftUI + adb codebase, useful to study how a Mac app wraps adb and exposes MCP tools
caveats:
  - Needs macOS 26 Tahoe or later; release binaries are Apple silicon only
  - Most system toggles need an emulator or a phone with adb debugging on; some depend on the Android API level
  - Young project (first release September 2026)
seo:
  title: "Oh My Android: Android Emulator Panel for Mac"
  description: Oh My Android is a native macOS control panel for the Android Emulator and Android phones over adb, with a built-in MCP server for AI coding agents.
addedAt: 2026-09-29
submittedBy: ateymoori
---

## Why it's listed

Oh My Android is a SwiftUI menu-style panel that replaces common `adb`
commands with one click: dark mode, font scale, RTL and pseudo-locales,
TalkBack, network throttling, GPS mock, screenshots and screen recording.
It works with Android Studio closed and with real phones over adb.

It also has a Layout Inspector that reports sizes in dp for any app, a
TalkBack order audit, and a SharedPreferences / SQLite viewer. A built-in
stdio MCP server lets Claude Code, Codex, Cursor or VS Code see and drive
the emulator.

MIT licensed, signed and notarized. Install with
`brew install --cask ateymoori/tap/oh-my-android` or the DMG on the
releases page. Needs macOS 26 or later.
