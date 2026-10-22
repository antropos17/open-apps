---
name: ATV Bilibili
repoUrl: https://github.com/yichengchen/ATV-Bilibili-demo
projectType: real-app
category: entertainment
stack: ios
summary: An unofficial Bilibili client for watching videos on Apple TV, designed around the tvOS
  remote and focus-driven interface. Often described as an early SwiftUI tvOS experiment, it now
  delivers a substantial UIKit-based Apple TV experience.
description: An unofficial Bilibili video client for Apple TV, built around the tvOS remote and focus interface.
sourceDescription: BiliBili Client Demo for Apple TV (tvOS).
platforms:
  - ios
licenses:
  - gpl-2.0
links:
  github: https://github.com/yichengchen/ATV-Bilibili-demo
distribution:
  channels: []
tags:
  - swift
  - native
bestFor: []
whyListed:
  - One of the few public, full-featured Apple TV clients for a major video service.
caveats: []
seo:
  title: "ATV Bilibili Review: Bilibili for Apple TV"
  description: ATV Bilibili is an open-source Bilibili video client for Apple TV, built in UIKit
    around the tvOS focus-driven interface. GPL-2.0 licensed.
addedAt: 2026-06-13
source:
  type: import
  provider: github
  owner: yichengchen
  repo: ATV-Bilibili-demo
  url: https://github.com/yichengchen/ATV-Bilibili-demo
curation:
  reviewed: false
  reviewedAt: 2026-06-13T03:31:57+08:00
  labels:
    - mature
    - hot
  lenses:
    - good-to-learn
visibility: keep
---
## Why it matters

ATV-Bilibili-demo explores what a third-party Bilibili client can feel like on Apple TV: large, glanceable rows of video artwork, remote-first selection, and playback designed for a ten-foot interface. It is especially useful as a study of tvOS focus-engine conventions rather than as a production-ready replacement for an official client.

The project is sometimes described as an early SwiftUI tvOS example, but its current source is UIKit-based. That evolution is instructive in its own right: custom controls such as `BLButton` explicitly become focusable, then add scale, shadow, blur, and horizontal motion effects when focus moves onto them. Feed cells start and stop marquee titles with focus changes, making remote navigation legible without relying on touch interactions.

## How it works

A `UITabBarController` subclass builds configurable tabs through `TabBarPageVCFactory`. Available destinations include live streams, recommendations, TV recommendations, popular and ranking feeds, following, favorites, search, history, watch-later, and personal pages. Most screens are collection-view-driven UIKit controllers; SnapKit supplies layout constraints, while TVUIKit and the native tvOS focus engine support the living-room interaction model.

Networking is split between `ApiRequest` and `WebRequest`, both using Alamofire. `ApiRequest` signs app-style requests with an app key, timestamp, and MD5 signature for QR login, feeds, and season data. `WebRequest` handles cookie and CSRF authentication, WBI-signed JSON REST calls, protobuf danmaku endpoints, playback URLs, engagement actions, and history reporting. It is mostly private web/API integration rather than conventional HTML scraping, although the daily-coin query parses the legacy `exp.php` page. AVPlayer-based playback, live danmaku, subtitles, HDR options, and UPnP/DLNA support extend the demo beyond simple browsing.

## Caveats

This is explicitly a demo and study project, not an official Bilibili product. Its app-style and web endpoints are undocumented implementation details, so signatures, cookies, response models, or playback rules can change without notice. Account credentials and third-party unsigned builds deserve particular care.

The README says the app has never been published through the App Store or an authorized TestFlight, and warns against paid or unauthorized distributions. The repository does publish unsigned nightly IPA artifacts, so normal use requires sideloading. Development continued through July 2026, but that activity does not imply stable APIs or production support.

## Deployment notes

Clone the repository, open `BilibiliLive.xcodeproj` in a current Xcode release, allow Swift Package Manager to resolve the pinned packages, and select the shared `BilibiliLive` scheme. Build for an Apple TV simulator for interface exploration, or choose a connected Apple TV for playback and network behavior that depends on real hardware.

Installing on hardware requires an Apple Developer account, a development team, a unique bundle identifier, and a tvOS provisioning profile. Because the project is not an App Store release, expect to re-sign your own build or the unsigned nightly IPA and to manage certificate expiration yourself. Review signing settings and any endpoint-related constants before entering a Bilibili account.

**Integration tip:** treat the API layer as replaceable infrastructure and keep focus behavior isolated in reusable controls, so Bilibili endpoint changes do not force a rewrite of the tvOS navigation experience.
