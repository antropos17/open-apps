---
name: Keycloak
repoUrl: https://github.com/keycloak/keycloak
projectType: real-app
category: developer-tools
summary: A self-hosted login server that adds single sign-on, social login and user management to
  your own apps. It speaks OpenID Connect, OAuth 2.0 and SAML 2.0, brokers other identity providers,
  federates LDAP and Active Directory, and runs from a download or a container image.
description: Add single sign-on, social login and user management to your apps with a self-hosted
  server.
sourceDescription: Open Source Identity and Access Management For Modern Applications and Services
platforms:
  - linux
  - macos
  - windows
  - web
licenses:
  - apache-2.0
links:
  github: https://github.com/keycloak/keycloak
  website: https://www.keycloak.org
  docs: https://www.keycloak.org/documentation
distribution:
  channels:
    - type: self-host
      label: Distribution download
      url: https://www.keycloak.org/downloads
      verified: true
    - type: self-host
      label: Container image
      url: https://www.keycloak.org/getting-started/getting-started-docker
      verified: true
tags:
  - self-hosted
  - security
  - developer-tools
  - foss-alternative
bestFor:
  - Adding single sign-on to your own applications without paying per monthly active user.
  - Organisations that must connect apps to LDAP or Active Directory.
  - Brokering logins from other OpenID Connect or SAML identity providers.
whyListed:
  - A mature identity server, in development since 2013 and now a CNCF incubating
    project.
  - Apache-2.0 for the whole server, with no commercial edition in the repository.
  - Standard protocols — OpenID Connect, OAuth 2.0 and SAML 2.0 — so any compliant app can use it.
caveats:
  - A Java server you operate yourself, including clustering, upgrades and database backups.
seo:
  title: "Keycloak Review: Self-Hosted SSO and Identity"
  description: Keycloak adds single sign-on, OpenID Connect, OAuth 2.0, SAML, social login and LDAP
    federation to your apps, self-hosted. Apache-2.0, a CNCF project.
addedAt: 2026-09-29
source:
  type: manual
  provider: github
  owner: keycloak
  repo: keycloak
  url: https://github.com/keycloak/keycloak
curation:
  reviewed: true
  reviewedAt: 2026-09-29
  reviewedBy: Open App Scout curators
  labels: []
  lenses: []
visibility: keep
---
Keycloak is the established self-hosted identity server: it takes authentication off your applications' hands with single sign-on, standard protocols, social login and connections to existing user directories. It is Apache-2.0 and a Cloud Native Computing Foundation incubating project, in development since 2013. Where Auth0 is a hosted service billed by usage, Keycloak is software you run — which is the point, and also the cost. Verified against the repository on 29 September 2026, at release 26.7.4.

## What it does

- **Single sign-on** — log in once to many applications.
- **Standard protocols** — OpenID Connect, OAuth 2.0 and SAML 2.0.
- **Social login** and **identity brokering** to other OpenID Connect or SAML 2.0 providers.
- **User federation** with LDAP and Active Directory.
- **Centralised management** through an admin console, and an account console for users.
- **Authorisation** — fine-grained authorisation services and password policies.
- **Themes and extensions** to change the look and add behaviour in code.
- **Clustering** for scale and availability.

## Running it

Download the distribution, unzip it and run `bin/kc.sh start-dev` (or `kc.bat` on Windows) for a development server, or run the `quay.io/keycloak/keycloak` container image with `start-dev`. Production configuration is covered in the documentation. Community help runs through a mailing list and the CNCF Slack.

## Who it is for, and who it is not for

**A good fit**

- Teams building several internal or customer-facing apps that should share one login.
- Enterprises tying new applications to LDAP or Active Directory.

**Look elsewhere**

- You want a backend where auth comes with a database and storage. [Supabase](/apps/supabase/), [Appwrite](/apps/appwrite/) and [PocketBase](/apps/pocketbase/) bundle authentication with the rest; see [open-source Firebase alternatives](/collections/open-source-firebase-alternatives/).
- You do not want to operate identity infrastructure at all. A hosted service may cost less than the time.

## Licence in practice

The whole server is [Apache-2.0](/licenses/apache-2.0/), and participation is governed by the CNCF Code of Conduct. There is no separate paid edition in the repository. More tools for builders are under [Developer tools](/categories/developer-tools/).

## Verified sources

- Repository and README — <https://github.com/keycloak/keycloak> (29 Sep 2026)
- Project site and features — <https://www.keycloak.org>
- Container guide — <https://www.keycloak.org/getting-started/getting-started-docker>
