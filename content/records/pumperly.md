---
submittedBy: GeiserX
name: Pumperly
repoUrl: https://github.com/GeiserX/Pumperly
projectType: real-app
category: travel
stack: react
summary: Pumperly is a fuel and EV route planner. It shows fuel stations coloured by price and EV
  chargers on a map, lists the stations along a route with the minutes each stop adds, and plans the
  cheapest fuel stops for the trip. Prices come from government and community sources in 22 countries
  with no API key to set.
description: Pumperly is an AGPL-3.0 map of fuel prices and EV chargers with a route planner, free to use
  at pumperly.com with no account or to run yourself with Docker Compose.
sourceDescription: "Open-source fuel & EV route planner. Real-time prices across enabled countries.
  Self-hostable."
platforms:
  - web
  - ios
  - android
licenses:
  - agpl-3.0
links:
  github: https://github.com/GeiserX/Pumperly
  website: https://pumperly.com
  docs: https://geiserx.github.io/Pumperly/
distribution:
  channels:
    - type: web-app
      platform: web
      label: pumperly.com, no account needed
      url: https://pumperly.com
      verified: true
    - type: app-store
      platform: ios
      label: Pumperly for iPhone
      url: https://apps.apple.com/us/app/pumperly/id6819223381
      verified: true
    - type: apk
      platform: android
      label: Pumperly for Android (APK)
      url: https://github.com/GeiserX/Pumperly-android/releases/latest
      verified: true
    - type: self-host
      label: Docker Compose
      url: https://geiserx.github.io/Pumperly/getting-started/docker-compose/
      verified: true
tags:
  - self-hosted
  - privacy
  - web-app
  - maps
  - fuel-prices
  - ev-charging
  - route-planner
bestFor:
  - Comparing fuel prices along a road trip, with the extra minutes each stop would cost.
  - Planning the cheapest fuel stops from your tank size, consumption and how full you start.
  - Seeing fuel stations and EV chargers on one map.
whyListed:
  - A Next.js and MapLibre app on PostGIS with one scraper per country, and a coverage page that says
    where each country's data comes from and whether that source works today.
  - Keeps no accounts, analytics or tracking cookies, converts prices into 37 currencies with the
    European Central Bank's daily rates, and speaks 17 languages.
caveats:
  - Prices exist only where a source publishes them. The United States has EV chargers only, and the
    twelve Fuelo.net countries, Ireland and Norway show their last prices because those sources refuse
    scrapers or went offline.
  - On a self-hosted copy, Germany, Denmark and New South Wales need a free API key.
  - A self-hosted copy starts with the price map only; routes and address search need Valhalla and
    Photon as well.
seo:
  title: Pumperly – Open Source Fuel Price and EV Route Planner
  description: Pumperly maps fuel prices and EV chargers and plans the cheapest fuel stops on your route, on web, iOS and Android with no account, or self-host. AGPL-3.0.
addedAt: 2026-10-13
source:
  type: manual
  provider: github
  owner: GeiserX
  repo: Pumperly
---
Pumperly is a map of fuel prices and EV chargers with a route planner on top.

## What it does

Pick a destination and it draws the route, lists every station along it with its price and the minutes a stop would add, and hides the ones past the detour you allow. The refuel planner picks the cheapest stops for the trip from your tank size, consumption and how full you start. Stations are coloured by price, from green for the cheapest 5% on screen to purple for the most expensive, and any station or route can be shared as a link. EV chargers come from the official registries of Spain and Germany and from Open Charge Map everywhere else.

## Platforms

The public instance at pumperly.com needs no account. The iPhone app on the App Store and the Android app (an APK from GitHub Releases) open the same site and add native location; the iPhone app also has a "Cheapest nearby" widget. Self-hosting is one container next to PostGIS, with Valhalla and Photon added for routing and address search.

## Verified sources

- Repository and README — <https://github.com/GeiserX/Pumperly> (13 Oct 2026)
- Releases — <https://github.com/GeiserX/Pumperly/releases>
- Documentation — <https://geiserx.github.io/Pumperly/>
- Coverage and status — <https://geiserx.github.io/Pumperly/data/coverage/>
