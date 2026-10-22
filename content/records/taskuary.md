---
submittedBy: ldbumble
name: Taskuary
repoUrl: https://github.com/ldbumble/taskuary
projectType: real-app
category: productivity
stack: react
summary: A local work inbox that gathers email, chat messages and reports, uses AI to sort tasks and
  draft replies, and queues every proposed reply or action for you to approve. It also runs
  scheduled reports and coding CLI sessions, with a React interface over a FastAPI and SQLite backend.
description: A local AI work inbox that gathers email and chat, drafts replies and waits for your
  approval.
platforms:
  - web
  - windows
  - macos
  - linux
licenses:
  - mit
links:
  github: https://github.com/ldbumble/taskuary
  website: https://taskuary.com
  demo: https://taskuary.com/demo/
distribution:
  channels:
    - type: github-releases
      platform: windows
      label: Windows executable
      url: https://github.com/ldbumble/taskuary/releases
      verified: false
    - type: other
      label: PyPI
      url: https://pypi.org/project/taskuary/
      verified: false
tags:
  - self-hosted
  - local-first
  - ai-agents
  - task-management
  - workflow-automation
  - email
bestFor:
  - People who want to organize incoming work and review AI-prepared results in one place.
  - Developers studying connector ingestion, agent sessions, and approval workflows in a local
    application.
whyListed:
  - Combines a usable work inbox, task board, reports, and agent workspaces in a React and Python
    application.
  - Supports installation through a Windows executable, Python package, or Docker, with a browser
    demo for evaluation.
caveats:
  - The project is pre-1.0 and breaking changes are still possible.
  - AI features require a configured provider or local model; coding agents require a supported CLI
    and its setup.
  - The browser demo uses fictional data and cannot connect to services, send messages, or run
    agents.
seo:
  title: "Taskuary: Local AI Work Inbox"
  description: Taskuary pulls email, chat and reports into a local work inbox where AI organizes tasks,
    drafts replies and hands work to agents for your review. MIT.
addedAt: 2026-09-14
source:
  type: submit
  provider: github
  owner: ldbumble
  repo: taskuary
  url: https://github.com/ldbumble/taskuary
curation:
  reviewed: false
  labels: []
  lenses: []
visibility: keep
---
