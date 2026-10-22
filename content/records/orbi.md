---
name: Orbi
repoUrl: https://github.com/orbi-build/orbi
projectType: real-app
category: developer-tools
summary: Label a GitHub issue and an AI agent writes the code, opens a pull request, has it reviewed
  by a second agent, merges it and later cuts a release. It is a self-hosted loop that works in an
  isolated worktree per issue, checks the work against the issue's acceptance criteria and uses
  GitHub issues as its only state store; Orbi Cloud is the hosted offering.
description: Self-hosted AI agent that turns labelled GitHub issues into reviewed, merged pull requests and releases.
sourceDescription: "Open-source (AGPL-3.0), self-hostable lights-out software factory for the agent
  era: label a GitHub Issue, get an independently reviewed, merged PR and a tagged release."
platforms:
  - linux
  - macos
licenses:
  - agpl-3.0
links:
  github: https://github.com/orbi-build/orbi
  website: https://orbi.build
  docs: https://docs.orbi.build
distribution:
  channels:
    - type: self-host
      label: Git checkout with uv, or Docker
      url: https://github.com/orbi-build/orbi#quick-start
      verified: true
    - type: other
      label: orbi-cli on PyPI
      url: https://pypi.org/project/orbi-cli/
      verified: true
    - type: web-app
      label: Orbi Cloud (hosted)
      url: https://orbi.build/cloud/
      verified: true
tags:
  - self-hosted
  - developer-tools
  - cli
  - github
bestFor:
  - Handing well-scoped GitHub issues to an agent and getting a merged PR back without watching it.
  - Teams that want an agent-written change checked by a separate review pass before it merges.
  - Projects that want releases cut from the same issue trail, with the issues and PRs in the notes.
whyListed:
  - GitHub issues, labels, PRs and CI are the whole record; there is no separate database or queue.
  - The project is built with itself — its own issues, merged PRs and releases are public.
caveats:
  - Self-hosting needs Python 3.14, git, gh, a model endpoint and a systemd (Linux) or launchd
    (macOS) user session; the README marks macOS as not yet verified on real hardware.
  - By default a PR merges once the review session passes it; require human approval with branch
    protection if you want a person in the loop.
  - Cutting a release needs a person to add the ai-release label to a release issue.
seo:
  title: "Orbi: AI Agent from GitHub Issue to Release"
  description: Orbi turns an ai-ready GitHub issue into a reviewed, merged PR and a tagged release.
    AGPL-3.0, self-hosted on Linux, with an optional hosted cloud.
addedAt: 2026-10-10
submittedBy: xqliu
---
Orbi runs on top of a coding agent (Pi by default) and treats GitHub as the task system. You label an issue `ai-ready`; Orbi claims it, works in an isolated worktree, opens a pull request, and starts a second session that reviews the diff against the issue's acceptance criteria and fixes what it finds. Only the reviewed head is merged. Verified against the repository on 10 October 2026, at release v0.6.5.

## What it does

- **Issue to PR.** The `ai-ready` label dispatches work; progress is posted as issue comments.
- **Independent review.** A separate session reviews and fixes the PR before merge, and the merge is tied to the commit that received the verdict.
- **Releases.** A release issue labelled `ai-release` (a label only a person adds) freezes a commit, tags it and publishes a GitHub Release.
- **Ops tickets.** Deployment and troubleshooting tasks can be filed as issues; the commands run and their output are posted back.

## Who it is for, and who it is not for

**A good fit**

- Maintainers with a backlog of clearly specified issues.
- Teams that already rely on GitHub issues, PR review and CI.

**Look elsewhere**

- You want an agent beside you in the editor — see [Cline](/apps/cline/).
- You want a self-hosted workspace for running several agents interactively — see [OpenHands](/apps/openhands/).

## Running it

Clone the repository and install with `uv`, or use the Docker images on GHCR and Docker Hub; `orbi setup` installs the scheduler units and `orbi doctor` checks the deployment. The CLI alone is on PyPI as `orbi-cli`. Orbi Cloud is the hosted version.

## Verified sources

- Repository and README — <https://github.com/orbi-build/orbi> (10 Oct 2026)
- Documentation — <https://docs.orbi.build>
- Project site — <https://orbi.build>
