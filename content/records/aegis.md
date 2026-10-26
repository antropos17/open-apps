---
name: AEGIS
repoUrl: https://github.com/antropos17/Aegis
projectType: real-app
category: developer-tools
stack: javascript
summary: A Windows-first Electron desktop app for inspecting local AI agents through process trees, configured file activity, TCP observations, alerts and audit reports. It includes local security reviews and explicit selected-action policy and MCP routes.
description: Monitor local AI-agent processes, configured file activity and TCP endpoints on Windows.
platforms:
  - windows
licenses:
  - mit
links:
  github: https://github.com/antropos17/Aegis
tags:
  - ai-agents
  - agent-monitoring
  - local-first
  - electron
  - svelte
bestFor:
  - Investigating activity from local AI coding agents in a desktop workspace.
  - Studying an Electron and Svelte application with local audit records and explicit action boundaries.
whyListed:
  - Combines host process, file and network observations with local investigation views and exportable records.
  - Provides public source, documentation and a downloadable Windows beta.
caveats:
  - Windows-first beta; macOS and Linux support remain experimental.
  - Default monitoring observes activity. Process actions are explicit, and selected-action policy and MCP routes require separate setup.
  - Coverage depends on available sensors and process identity; unknown or short-lived processes and some file activity can be missed.
seo:
  title: "AEGIS – Open Source AI Agent Desktop Monitor"
  description: "AEGIS monitors local AI-agent processes, configured file activity and TCP endpoints in a Windows-first desktop app. MIT source and Windows beta."
addedAt: 2026-10-26
submittedBy: antropos17
---

## What happens outside the chat window?

A coding agent starts processes, touches files and opens network connections.
AEGIS puts those host observations in a desktop workspace so a developer can
inspect process trees, review alerts and export records from an investigation.
Claude Code usage subtotals and estimated costs add local usage context.

The application is MIT-licensed and built with an Electron main process and a
Svelte interface. Its documented monitoring, IPC and audit boundaries make it
useful to study as a desktop developer tool as well as to try as an application.

[Project overview and downloads](https://antropos17.github.io/aegis-media/)
· [Published Windows beta](https://github.com/antropos17/Aegis/releases/tag/aegis-v0.20.1-beta)

![AEGIS Monitoring workspace](https://raw.githubusercontent.com/antropos17/Aegis/master/docs/screenshots/01-monitoring.png)

*Source UI preview captured on 11 October 2026 with simulated data; screenshot
[provenance](https://github.com/antropos17/Aegis/blob/master/docs/screenshots/README.md).*

Submitted on behalf of the AEGIS project.
