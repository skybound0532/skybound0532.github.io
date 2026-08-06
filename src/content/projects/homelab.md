---
title: Homelab
date: 2021-2025
description: TrueNAS SCALE home server stack
tags:
  - TrueNAS SCALE
  - Debian
  - Docker
  - Nginx
  - Home Assistant
---

My first "homelab" was an old computer running Debian with a Minecraft server, Jellyfin, Navidrome, and a few other random things for fun.

The system has gotten more and more complicated over time. A brief overview of some of the core components:
- labsys- TrueNAS SCALE system managing all of my ZFS pools and Docker host for:
  - Nextcloud productivity suite, including Collabora Office and Talk self-hosted video conferencing
  - Fully automated Jellyfin stack with Radarr/Sonarr, Prowlarr, Seerr, Bazarr... the list goes on. And some secret sauce to find and "download" content :\)
  - Immich media server for sharing and backups
  - Authentik identity provider for all my services
  - SMTP mail server for all my services
  - Home Assistant for my apartment
  - Gamer servers for Minecraft and Palworld
  - Headscale for my Tailnet
  - Vaultwarden for my passwords (transitioning to Bitwarden because I'm scared something's gonna break and I'll lose all y passwords)
  - Various websites for various things
  - And more!
- labsys-proxy- Oracle VPS reverse proxy to protect all my stuff
- labdev- Ubuntu development server with all my automations and some GitHub action runners
- gooseserver- The original Debian system before I got the hardware to build labsys. Still around for some legacy services and testing
- labnix- My daily driver NixOS, formerly Arch, image
- labtoppromax- My desktop Windows machine. I feel like this counts because it's my "HPC server" that I do remote compute on sometimes. My laptop Windows image is called "labtop", hence the name
- miku- Voron 2.4 3D printer. This is here because I used to use the Pi on it for WoL and some other utilities I needed back before I got dedicated hardware.

Coming soon: A whole Ubiquiti stack at my house plus new server hardware. When all that is setup, all the services will be moved over from my apartment and labsys will become a mirror/offsite backup.
