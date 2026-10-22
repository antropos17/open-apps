---
submittedBy: GeiserX
name: VPN Bypass
repoUrl: https://github.com/GeiserX/VPN-Bypass
projectType: real-app
category: tools
stack: macos
summary: A Mac menu bar app that decides which traffic uses your VPN — send chosen services and
  domains around a corporate VPN, or only those through it — and restores the routes when the VPN
  reconnects. It is a SwiftUI app with a small root helper and a vpnb command-line tool.
description: A Mac menu bar app that routes chosen sites around your VPN, or only those through it.
sourceDescription: "macOS menu-bar app for fine-grained VPN routing: bypass the VPN for chosen
  domains/services, force others through it, or (Custom mode) route each domain/subnet out a specific
  egress — direct, a specific VPN, an HTTP/SOCKS5 proxy, or a Tailscale peer. Includes a vpnb CLI."
platforms:
  - macos
licenses:
  - gpl-3.0
links:
  github: https://github.com/GeiserX/VPN-Bypass
  website: https://geiserx.github.io/VPN-Bypass/
  docs: https://geiserx.github.io/VPN-Bypass/
  download: https://github.com/GeiserX/VPN-Bypass/releases/latest
distribution:
  channels:
    - type: github-releases
      platform: macos
      label: macOS disk image
      url: https://github.com/GeiserX/VPN-Bypass/releases/latest
      verified: true
    - type: other
      platform: macos
      label: Homebrew tap (geiserx/vpn-bypass/vpn-bypass)
      url: https://github.com/GeiserX/homebrew-vpn-bypass
      verified: true
tags:
  - desktop-app
  - menu-bar
  - routing
  - split-tunneling
  - vpn
bestFor:
  - Keeping streaming, AirPlay, Chromecast and personal traffic off a corporate VPN.
  - Sending only a few internal sites through the VPN and everything else direct.
whyListed:
  - A SwiftUI menu bar app that edits the routing table through one small root helper, with no kernel
    or system extension to approve, and adds the routes back when the VPN reconnects or the network
    changes.
caveats:
  - Needs macOS 13 or later and an administrator password once, to install the root helper.
  - The helper only accepts an app signed with the project's Developer ID, so a build from source needs
    your own team ID in its code requirements.
seo:
  title: "VPN Bypass: VPN Split Tunneling for Mac"
  description: VPN Bypass is a macOS menu bar app that routes chosen services and domains around a
    corporate VPN, or only those through it. GPL-3.0, via Homebrew.
addedAt: 2026-10-12
source:
  type: manual
  provider: github
  owner: GeiserX
  repo: VPN-Bypass
---
VPN Bypass decides which traffic goes through your VPN from the macOS menu bar.

## What it does

It has three modes. Bypass sends the services and domains you list around the VPN, VPN Only sends only them through it, and Custom routes each rule where you say: direct, through a specific VPN, through an HTTP or SOCKS5 proxy, or through a Tailscale peer. It ships 37 built-in service packs and detects GlobalProtect, Cisco AnyConnect, OpenVPN, WireGuard, FortiClient, Zscaler, Cloudflare WARP, Pulse Secure, Check Point and Tailscale exit nodes. The `vpnb` command line scripts everything the app does.

## Verified sources

- Repository and README — <https://github.com/GeiserX/VPN-Bypass> (12 Oct 2026)
- Releases — <https://github.com/GeiserX/VPN-Bypass/releases>
- Documentation — <https://geiserx.github.io/VPN-Bypass/>
