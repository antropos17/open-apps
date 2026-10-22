---
name: AgenticSeek
repoUrl: https://github.com/Fosowl/agenticSeek
projectType: real-app
category: productivity
summary: An AI agent that browses the web, writes and runs code, and plans multi-step tasks entirely
  on your own machine, with local models through Ollama or LM Studio. A team of sub-agents splits the
  work; you drive it from a web interface or a CLI, with SearxNG for search.
description: An AI agent that browses, codes and plans tasks on your own computer with local models, no API bills.
sourceDescription: Fully Local Manus AI. No APIs, No $200 monthly bills. Enjoy an autonomous agent
  that thinks, browses the web, and code for the sole cost of electricity.
platforms:
  - linux
  - macos
  - windows
  - web
licenses:
  - gpl-3.0
links:
  github: https://github.com/Fosowl/agenticSeek
  website: http://agenticseek.tech
distribution:
  channels:
    - type: self-host
      label: Docker Compose + Python
      url: https://github.com/Fosowl/agenticSeek#prerequisites
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - privacy
  - offline-first
bestFor:
  - Running a Manus-style autonomous agent on your own GPU with no API bills.
  - Research and browsing tasks where nothing may leave the machine.
whyListed:
  - Self-described 100% local alternative to Manus, with web browsing, coding and task planning.
  - Works with local models through Ollama or LM Studio, and optionally with hosted APIs.
caveats:
  - Needs real hardware — the README's minimum is a GPU that can run a 14B reasoning model.
  - Setup is manual — Python 3.10, Docker Compose and an .env file; there is no installer.
  - A side project with "zero roadmap and zero funding", in the maintainer's words.
relations:
  - type: alternative-to
    to: manus
    evidence:
      type: self-described
      url: https://github.com/Fosowl/agenticSeek
      quote: A 100% local alternative to Manus AI
      checkedAt: 2026-09-29
seo:
  title: "AgenticSeek Review: Local Manus Alternative"
  description: AgenticSeek is an autonomous AI agent that browses, writes code and plans tasks on your
    own machine with local models through Ollama. GPL-3.0, no API bill.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Fosowl
  repo: agenticSeek
  url: https://github.com/Fosowl/agenticSeek
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
AgenticSeek is what you run if you want Manus's idea — an agent that takes a goal and browses, codes and plans its way to a result — entirely on your own machine. It is built for local reasoning models through Ollama or LM Studio, uses a bundled SearxNG for private web search, and is GPL-3.0. It asks for a capable GPU and a manual setup, and its maintainer is candid that it is an unfunded side project. Verified against the repository on 29 September 2026.

## What it does

Give it a task — the README's demo searches for a project, works out the skills it needs, opens a zip of CVs and ranks the candidates. AgenticSeek picks the right agent for each step: a browser agent that searches, reads, extracts and fills in forms; a coding agent that writes, debugs and runs Python, C, Go, Java and more; and a planner that splits large tasks into steps across agents. Voice input works in CLI mode and is still in progress.

## Running it

You need Git, Python 3.10, Docker and Docker Compose. Clone the repository, copy `.env.example` to `.env`, set the working directory and the local model ports, then either start everything with `./start_services.sh full` and open the web interface at `http://localhost:3000`, or run the backend on the host with `uv run cli.py`. Hosted APIs — OpenAI, DeepSeek, OpenRouter, Together, Google, Anthropic — are optional keys in the same file. For local models the README's minimum is a GPU able to run a 14B model such as Magistral, Qwen or DeepSeek.

## Who it is for, and who it is not for

**A good fit**

- People with a gaming or workstation GPU who want an autonomous agent without subscriptions.
- Privacy-sensitive research where browsing and files must stay local.

**Look elsewhere**

- You want an agent that works on your files through a desktop app with little setup. See [open-source Claude Cowork alternatives](/collections/open-source-claude-cowork-alternatives/).
- You want persistent bots that keep working with their own computers. See [open-source Grok Bot alternatives](/collections/open-source-grok-bot-alternatives/).

## Licence

GPL-3.0 for the whole repository. More GPL software is under [GPL-3.0 apps](/licenses/gpl-3.0/).

## Verified sources

- Repository and README — <https://github.com/Fosowl/agenticSeek> (29 Sep 2026)
- Licence file — <https://github.com/Fosowl/agenticSeek/blob/main/LICENSE>
