---
name: twinny
repoUrl: https://github.com/twinnydotdev/twinny
projectType: real-app
category: developer-tools
summary: A VS Code extension for code completion, inline edits, chat and code review using a model
  server you choose, with no telemetry and no sign-in. It works with Ollama, LM Studio, llama.cpp, a
  hosted API or a self-hosted team gateway.
description: An AI coding assistant for VS Code that runs on your own model server instead of GitHub
  Copilot.
sourceDescription: Open-source AI coding assistant for VS Code. Code completion, chat, edits and
  reviews with local or hosted models. Your models, your infrastructure.
platforms:
  - macos
  - windows
  - linux
licenses:
  - mit
links:
  github: https://github.com/twinnydotdev/twinny
  website: https://twinny.dev
  docs: https://docs.twinny.dev
distribution:
  channels:
    - type: other
      label: VS Code Marketplace
      url: https://marketplace.visualstudio.com/items?itemName=rjmacarthy.twinny
      verified: true
    - type: self-host
      label: twinny-server team gateway (npm, Docker, Helm)
      url: https://docs.twinny.dev/teams/overview/
      verified: true
tags:
  - developer-tools
  - self-hosted
  - privacy
  - foss-alternative
bestFor:
  - Copilot-style completion and chat in VS Code with code that never leaves your network.
  - Air-gapped or regulated teams that already run models on their own GPUs.
  - Sharing one model server across a team with a key per developer.
whyListed:
  - MIT, no telemetry, no account, and works fully offline against a local model server.
  - A self-hosted team gateway with usage per developer, free for five developers.
caveats:
  - VS Code only.
  - Maintained by one person since 2023, according to the README.
  - Team policy, recording and plugin features on the gateway need a paid licence key, checked
    locally; the extension itself needs none.
relations:
  - type: alternative-to
    to: github-copilot
    evidence:
      type: self-described
      url: https://twinny.dev/vs/github-copilot
      quote: twinny, a self-hosted GitHub Copilot alternative.
      checkedAt: 2026-09-29
seo:
  title: "twinny Review: Self-Hosted Copilot Alternative"
  description: twinny brings code completion, chat, inline edits and code review to VS Code using your
    own model server, such as Ollama. MIT, no telemetry.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: twinnydotdev
  repo: twinny
  url: https://github.com/twinnydotdev/twinny
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
twinny is the pick when GitHub Copilot is ruled out because code cannot leave the building. It does Copilot's everyday jobs in VS Code — completion as you type, inline edits, chat and code review — against a model server you run, and its own site calls it "a self-hosted GitHub Copilot alternative". MIT-licensed, no telemetry, no sign-in, and written and maintained by one person since 2023. Verified against the repository on 29 September 2026, at release v4.0.20.

## What it does

- **Code completion.** Fill-in-the-middle ghost text, with context from open files, imports, the language server and recent edits; the README says it is tuned to work well with a 7B model.
- **Inline edit.** Describe a change with Ctrl+I and review it as a diff, hunk by hunk.
- **Chat and workspace index.** Attach files, symbols, problems, the Git diff or the terminal; hybrid keyword and vector search over the workspace.
- **Code review and commit messages** for the working tree, a branch or a GitHub pull request.
- **Where the model runs.** Ollama, LM Studio, llama.cpp or any OpenAI-compatible server on your machine; another of your computers over an encrypted peer-to-peer link; a hosted API; or a team gateway.

## Who it is for, and who it is not for

**A good fit**

- Developers and teams who want Copilot's features on local or private models.
- Security-conscious organisations: the team gateway runs on your network with keys per developer, usage per person and an admin page.

**Look elsewhere**

- You use JetBrains, Visual Studio, Neovim or Xcode — twinny is VS Code only; [Kilo Code](/apps/kilo-code/) also covers JetBrains.
- You want an autonomous agent that runs commands and edits across the project — see [Cline](/apps/cline/).

## Licence in practice

The extension and the `twinny-server` gateway are MIT. The gateway is free for five developers; a licence bought at twinny.dev adds seats and switches on team policy, prompt recording and plugins (pull-request review, chat notifications, SSO). The licence is verified locally and, according to the README, the gateway never phones home; the signing side of the licensing is private. More MIT tools are under [MIT apps](/licenses/mit/).

Other options are in [open-source GitHub Copilot alternatives](/collections/open-source-github-copilot-alternatives/).

## Verified sources

- Repository and README — <https://github.com/twinnydotdev/twinny> (29 Sep 2026)
- Comparison page — <https://twinny.dev/vs/github-copilot>
- Documentation — <https://docs.twinny.dev>
