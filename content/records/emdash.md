---
name: Emdash
repoUrl: https://github.com/generalaction/emdash
projectType: real-app
category: developer-tools
summary: A desktop app for running several AI coding agents in parallel and reviewing their work in
  one window — diffs, pull requests, CI checks and merges, locally or over SSH. It runs Claude Code,
  Codex, OpenCode, Amp and more, each in its own Git worktree.
description: Run several AI coding agents side by side and review their diffs and pull requests in one app.
sourceDescription: Emdash is the Open-Source Agentic Development Environment (🧡 YC W26). Run multiple
  coding agents in parallel. Use any provider.
platforms:
  - macos
  - windows
  - linux
  - desktop
licenses:
  - apache-2.0
links:
  github: https://github.com/generalaction/emdash
  website: https://emdash.sh
  docs: https://emdash.sh/docs
distribution:
  channels:
    - type: github-releases
      label: GitHub Releases
      url: https://github.com/generalaction/emdash/releases/latest
      verified: true
    - type: website
      label: emdash.sh downloads
      url: https://emdash.sh/download
      verified: true
tags:
  - desktop-app
  - developer-tools
  - privacy
bestFor:
  - Trying several fixes or features at once with different agents and keeping the best diff.
  - Sending a Linear, GitHub or Jira ticket straight to an agent.
  - Running the same parallel workflow on a remote machine over SSH.
whyListed:
  - Works with the agent CLIs you already use and detects installed ones automatically.
  - Local-first — app state in a local SQLite database, no code or chats sent to Emdash servers.
caveats:
  - Sends optional telemetry, which you can turn off in Settings or by launching with
    `TELEMETRY_ENABLED=false`.
  - For agents with lifecycle hooks, Emdash writes marker-tagged entries into the agent's user-level
    config to track status and sessions.
  - It orchestrates agents rather than being one; you still need Claude Code, Codex or another agent
    CLI and its account.
seo:
  title: "Emdash Review: Run Coding Agents in Parallel"
  description: Emdash runs Claude Code, Codex, OpenCode and other agents in parallel Git worktrees
    on macOS, Windows and Linux, with diff review and PRs. Apache-2.0.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: generalaction
  repo: emdash
  url: https://github.com/generalaction/emdash
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Emdash solves the problem that appears once you use coding agents daily: running several at once without a mess of terminals and branches. Each task gets its own Git worktree and branch, the agent of your choice works in it, and you review the diffs, open a pull request, watch CI and merge from the same window. It is an Apache-2.0 desktop app from a Y Combinator W26 company, for macOS, Windows and Linux. Verified against the repository on 29 September 2026, at release v1.2.7.

## What it does

- **Parallel agents.** Run multiple tasks at once, each isolated in its own worktree and branch.
- **Bring your agents.** Detects installed CLIs — Claude Code, Codex, Cursor, OpenCode, Amp, Devin, Qwen Code, Droid, GitHub Copilot and others — and tracks status and resumable sessions through their hooks.
- **Tickets in.** Send issues from Linear, GitHub, Jira, GitLab, Asana, Featurebase, Monday.com, Forgejo or Plain to an agent.
- **Review and ship.** Diffs, pull requests, CI checks and merge in one place.
- **Remote projects.** Connect over SSH/SFTP with agent, key or password auth; credentials go in the OS keychain.

## Who it is for, and who it is not for

**A good fit**

- Developers already using Claude Code, Codex or [OpenCode](/apps/opencode/) who want to run several tasks side by side.
- Anyone who wants to compare what different agents do with the same ticket.

**Look elsewhere**

- You want a single agent inside your editor — see [Cline](/apps/cline/).
- You want agents in tabbed workspaces with an editor, terminal and browser — see [NextCoWork](/apps/nextcowork/); for agent sessions that survive on an always-on host, see [opendray](/apps/opendray/).

## Privacy

App state is stored locally in SQLite, and Emdash says it does not send your code or chats to its servers; the agent CLIs send context to their own providers. Telemetry is optional and can be disabled in Settings or with `TELEMETRY_ENABLED=false`. More Apache-licensed tools are under [Apache-2.0 apps](/licenses/apache-2.0/).

## Verified sources

- Repository and README — <https://github.com/generalaction/emdash> (29 Sep 2026)
- Releases — <https://github.com/generalaction/emdash/releases>
- Project site — <https://emdash.sh>
