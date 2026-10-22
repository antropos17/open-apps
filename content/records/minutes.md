---
name: Minutes
repoUrl: https://github.com/silverstein/minutes
projectType: real-app
category: productivity
stack: tauri
summary: Records meetings, calls and voice memos, transcribes them on your own computer and saves
  each one as a Markdown file that Claude Code, Codex, Cursor or any MCP client can search. It is a
  Rust app with dictation, structured YAML front matter, a CLI and an MCP server, for macOS and
  Windows with a CLI on Linux.
description: Meeting and voice-memo recorder that transcribes on your computer and saves Markdown your AI tools can search.
sourceDescription: Open-source, local-first Granola/Otter alternative that Claude Code, Codex, Cursor,
  and any MCP client can query. Meetings, calls, and voice memos transcribed on-device into markdown
  you own.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - mit
links:
  github: https://github.com/silverstein/minutes
  website: https://useminutes.app
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/silverstein/minutes/releases/latest
      verified: true
    - type: other
      label: Homebrew tap (silverstein/tap)
      url: https://github.com/silverstein/minutes#install
      verified: true
tags:
  - foss-alternative
  - notes
  - privacy
  - cli
  - desktop-app
bestFor:
  - Asking your coding agent what was decided in last month's meetings.
  - Keeping meeting notes as plain Markdown in an Obsidian or Logseq vault.
  - Leaving Granola with your archive — there is an import guide.
whyListed:
  - Capture, transcription and storage run locally; text leaves only when you send it to an AI
    provider you chose.
  - Meetings are Markdown with YAML frontmatter for decisions and action items, readable by any tool.
  - A CLI, an MCP server, a Claude Code plugin and a TypeScript SDK over the same files.
caveats:
  - The desktop app ships for Apple Silicon Macs and Windows; on Linux the supported path is the CLI.
  - Summaries use the AI provider you configure — a cloud provider receives the meeting context you
    authorise.
relations:
  - type: alternative-to
    to: granola
    evidence:
      type: self-described
      url: https://github.com/silverstein/minutes
      quote: Open-source, local-first Granola/Otter alternative
      checkedAt: 2026-09-29
  - type: alternative-to
    to: otter
    evidence:
      type: self-described
      url: https://github.com/silverstein/minutes
      quote: Open-source, local-first Granola/Otter alternative
      checkedAt: 2026-09-29
seo:
  title: "Minutes Review: Granola & Otter Alternative"
  description: Minutes transcribes meetings and voice memos on your device into Markdown files your AI agents can search over MCP. MIT, for Mac and Windows, CLI on Linux.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: silverstein
  repo: minutes
  url: https://github.com/silverstein/minutes
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Minutes treats meetings as memory for your AI tools. It records meetings, calls, voice memos and dictation, transcribes them on your own machine, and writes each one to `~/meetings/` as Markdown with YAML frontmatter for decisions and action items. Claude Code, Codex, Cursor or any MCP client can then search that history. It is MIT-licensed, and the README commits to no relicensing and no paid tier for anything in the repository. Verified against the repository on 29 September 2026, at release v0.27.0.

## What it does

- **Record and transcribe** meetings, calls, voice memos and dictation, with on-device transcription and speaker processing (Whisper, or Parakeet on supported installs).
- **Plain files** — Markdown plus structured frontmatter that Obsidian, grep or any Markdown tool can read.
- **Agent access** — an MCP server (34 tools), a CLI (58 commands), a Claude Code plugin and a TypeScript SDK.
- **Desktop app** — menu-bar capture, recall, documents and live coaching.
- **Consent tools** — reminders and acknowledgement for disclosing a recording; sensitive meetings can be saved as markers without audio.

## Who it is for, and who it is not for

**A good fit**

- Developers and founders who already live in Claude Code, Cursor or Codex.
- Anyone who wants meeting notes in the same Markdown vault as everything else.

**Look elsewhere**

- You want a polished notepad on Linux: [anarlog](/apps/anarlog/) ships Linux desktop builds.
- You want dictation first and meetings second: [OpenWhispr](/apps/openwhispr/).

## How it compares

| | Minutes | [anarlog](/apps/anarlog/) | [Meetily](/apps/meetily/) | [OpenWhispr](/apps/openwhispr/) |
|---|---|---|---|---|
| Platforms | macOS, Windows (CLI on Linux) | macOS, Windows, Linux | macOS, Windows | macOS, Windows, Linux |
| Where notes live | Markdown files | Local SQLite | Local | Local, optional cloud sync |
| Summary model | Your chosen provider | Local, your key, or hosted | Local, through Ollama | Local or cloud |
| Licence | MIT | MIT plus enterprise code | MIT, paid PRO tier | MIT, paid cloud plans |

It is listed in [open-source Granola alternatives](/collections/open-source-granola-alternatives/) and [open-source Otter.ai alternatives](/collections/open-source-otter-alternatives/).

## Licence in practice

MIT for the whole repository, with no paid tier inside it. If you point summaries at a cloud AI provider, the meeting context you authorise goes to that provider; transcription itself stays local. More MIT apps are under [MIT apps](/licenses/mit/), and more [Tauri](/stacks/tauri/) apps are listed too.

## Verified sources

- Repository and README — <https://github.com/silverstein/minutes> (29 Sep 2026)
- Install guide — <https://github.com/silverstein/minutes/blob/main/docs/install.md>
- Releases — <https://github.com/silverstein/minutes/releases>
- Project site — <https://useminutes.app>
