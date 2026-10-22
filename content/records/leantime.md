---
name: Leantime
repoUrl: https://github.com/Leantime/leantime
projectType: real-app
category: productivity
summary: Project management for people who are not project managers, designed with ADHD, dyslexia
  and autism in mind. It has Kanban, Gantt, table, list and calendar views, milestones, sprints,
  timesheets, goals, strategy canvases, wikis and retrospectives, in a self-hosted PHP app.
description: Self-hosted project management for non-project-managers, with tasks, goals, timesheets
  and docs.
sourceDescription: Leantime is a goals focused project management system for non-project managers.
  Building with ADHD, Autism, and dyslexia in mind.
platforms:
  - web
  - linux
licenses:
  - agpl-3.0
links:
  github: https://github.com/Leantime/leantime
  website: https://leantime.io
  docs: https://docs.leantime.io
distribution:
  channels:
    - type: self-host
      label: Official Docker image
      url: https://hub.docker.com/r/leantime/leantime
      verified: true
    - type: github-releases
      label: Release package for PHP servers
      url: https://github.com/Leantime/leantime/releases/latest
      verified: true
tags:
  - foss-alternative
  - self-hosted
  - productivity
  - web-app
bestFor:
  - Small and mid-sized teams leaving Jira who find it too heavy for everyday work.
  - Teams that want goals, strategy canvases and tasks in the same place.
  - Neurodivergent people and teams who need a calmer, more forgiving interface.
whyListed:
  - The README says every listed feature is in the open-source version.
  - Runs on a plain PHP and MySQL server or from the official Docker image.
  - LDAP, OIDC and two-factor authentication without a paid tier.
caveats:
  - Plugins in `/app/Plugins` may carry other licences, including Leantime's enterprise licence;
    the core is AGPL-3.0.
  - Sends anonymous usage statistics to telemetry.leantime.io once a day by default; turn it off in
    the company settings.
relations:
  - type: alternative-to
    to: jira
    evidence:
      type: self-described
      url: https://leantime.io/jira-data-center-alternative/
      quote: Open Source Jira Data Center Alternative
      checkedAt: 2026-09-29
seo:
  title: "Leantime Review: Project Management for Non-PMs"
  description: Leantime is a self-hosted project manager with Kanban, Gantt and calendar views, goals,
    timesheets and wikis, built with ADHD and dyslexia in mind. AGPL.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: Leantime
  repo: leantime
  url: https://github.com/Leantime/leantime
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Leantime is the project manager for teams where most people are not project managers. It sums itself up as "as simple as Trello but as feature-rich as Jira", and its maker markets it as an open-source replacement for Jira Data Center. It covers tasks, milestones, sprints, timesheets, goals and docs, and it is designed with ADHD, dyslexia and autism in mind. The core is AGPL-3.0 and self-hosts on PHP and MySQL or with Docker. Verified against the repository on 29 September 2026, at release v3.10.0.

## What it does

- **Tasks** in Kanban, Gantt, table, list and calendar views, with unlimited subtasks and dependencies, milestones and sprints.
- **Time tracking and timesheets.**
- **Planning** with project dashboards, reports and status updates, goal and metrics tracking, and Lean, Business Model, SWOT and risk-analysis canvases.
- **Knowledge** in wikis and docs, idea boards, retrospectives, file storage on S3 or local disk, screen and webcam recording, and comments on everything.
- **Administration** with user roles and per-project permissions, two-factor authentication, LDAP and OIDC, plugins and an API, and integrations with Slack, Mattermost and Discord. It is available in over 20 languages.

## Who it is for, and who it is not for

**A good fit**

- Teams that want planning and strategy alongside tasks, without a Jira administrator.
- Organisations with neurodivergent staff who find dense tools hard to use.

**Look elsewhere**

- You need portfolio management and cost tracking across many projects. [OpenProject](/apps/openproject/) goes further.
- You run a software team that lives in cycles and issues. [Plane](/apps/plane/) is built for that.

## How it compares

| | Leantime | [OpenProject](/apps/openproject/) | [Plane](/apps/plane/) |
|---|---|---|---|
| Focus | Goals and simple planning | Portfolio, agile and classic PM | Software issue tracking |
| Stack | PHP, MySQL or MariaDB | Ruby on Rails, PostgreSQL | Django, React |
| Licence | AGPL-3.0, enterprise plugins | GPL-3.0, paid Enterprise add-ons | AGPL-3.0 CE, closed Commercial Edition |

The full comparison is in [open-source Jira alternatives](/collections/open-source-jira-alternatives/). More AGPL software is under [AGPL-3.0 apps](/licenses/agpl-3.0/).

## Licence in practice

Leantime is AGPL-3.0, with one exception written into the README: plugins in the `/app/Plugins` directory may be under other licences, including Leantime's enterprise licence. The README marks every feature in its feature table as included in the open-source version. A self-hosted instance sends anonymous, instance-wide usage counts to `telemetry.leantime.io` once a day unless telemetry is switched off in the company settings or the `allowTelemetry` configuration.

## Verified sources

- Repository and README — <https://github.com/Leantime/leantime> (29 Sep 2026)
- Licence file — <https://github.com/Leantime/leantime/blob/master/LICENSE>
- Telemetry code — <https://github.com/Leantime/leantime/blob/master/app/Domain/Reports/Services/Reports.php>
- Jira Data Center page — <https://leantime.io/jira-data-center-alternative/>
