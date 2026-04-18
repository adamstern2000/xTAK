# COT Bridge Suite

A TAK-compatible situational awareness stack for tactical and amateur-radio networks. Runs on a single Linux box; speaks the Cursor-on-Target protocol that ATAK, WinTAK, and CivTAK use.

**Status:** in active development. Source is private; this repository is a public overview.

---

## What's in the suite

The suite is five independent products that share a common COT wire format and work together on a single multicast network, or run standalone.

### 🗺️ takmap — web map for TAK
MapLibre-powered browser map that mirrors everything a local ATAK operator would see: SA tracks, team-colored dots, custom markers, lines, routes, freehand telestrations, range rings, bullseyes, shapes, and live chat. Terrain-shaded 3D, elevation profiles, digital pointers, KML/GPX/KMZ import/export, right-click menus that match ATAK verbs, emergency beacons, data packages. Works on a tablet in the field.

### 🛰️ cot_bridge — protocol hub
The Python backend that parses COT multicast and protobuf, manages the SQLite store, drives the Flask REST API, and heartbeats owned COTs out to the network. Compatible with the default TAK ports (239.2.3.1:6969 SA, 224.10.10.1:17012 chat, TCP 4242 DMs). Handles 3D terrain geoid conversions (EGM96), coordinate pipelines, and the full ATAK ownership/heartbeat model.

### 📻 cot_radio — APRS & amateur-radio gateway
Bridges VHF APRS (RF via Direwolf or APRS-IS) into the TAK ecosystem. APRS stations appear on your TAK map as chat-able contacts — operators can DM callsigns from ATAK to RF. Supports position beacons, messages, weather stations, digipeater, IGate, and smart-beacon cadence control. Admin UI on a browser; offline install tarball.

### 📡 cot_mesh — Meshtastic LoRa gateway
Bidirectional gateway for Meshtastic mesh radios. Mesh positions become TAK SA markers; TAK chat relays to mesh; mesh chat relays to TAK broadcast + DMs + team rooms. Synthetic positions for silent nodes so every reachable node is visible. Deployed on a Raspberry Pi with the radio on USB.

### ✈️ cot_sdr — ADS-B / UAT aircraft feed
SDR-based aircraft ingestion. Decodes 1090 MHz ES, 978 MHz UAT, military hex ranges, and an aircraft type/operator database. Emits aircraft as COTs on the TAK multicast so they render alongside ground units on ATAK / WinTAK / takmap. Admin UI for gain, filters, and coverage stats.

---

## Why

Existing TAK infrastructure leans toward commercial server-based stacks that assume permanent connectivity and a central cloud. The COT Bridge Suite is designed for **offline, tactical, and amateur deployments** — a single box serves the map, relays RF traffic, and federates with any TAK client without needing TAK Server or ATAK's cloud services. Every piece is standalone; pick the ones you want.

It's also designed to be a **more authoritative source** than individual TAK clients. Own markers heartbeat predictably on schedules the operator controls. Broadcasts can be disabled per-COT. Echoes from other clients are filtered with per-field change detection so data drift doesn't accumulate.

---

## Interop

- **ATAK 5.x** — tested on current Android tablets
- **WinTAK 5.5 / 5.6** — tested on Windows 10/11
- **CivTAK** — targeted; compatibility tracked on a rolling basis
- **Meshtastic firmware** — tested against current stable
- **APRS-IS** — tier 2 servers, any valid callsign + passcode
- **Direwolf 1.7+** — for RF APRS on VHF

Protocol compatibility is treated as a first-order concern. When WinTAK packet captures diverge from our implementation, we match WinTAK.

---

## Architecture

```
┌──────────────┐   ┌──────────────┐   ┌──────────────┐
│ takmap (web) │   │ ATAK tablet  │   │  WinTAK PC   │
└──────┬───────┘   └──────┬───────┘   └──────┬───────┘
       │ SSE/HTTPS        │ multicast        │ multicast
       │                  │                  │
┌──────┴──────────────────┴──────────────────┴──────┐
│         239.2.3.1:6969  (SA) / 224.10.10.1:17012 (chat) │
└──────┬──────────────────┬──────────────────┬──────┘
       │                  │                  │
┌──────┴───────┐   ┌──────┴───────┐   ┌──────┴───────┐
│ cot_bridge   │   │ cot_radio    │   │ cot_mesh     │
│  (SQLite)    │   │ (APRS RF/IS) │   │ (Meshtastic) │
└──────────────┘   └──────────────┘   └──────────────┘
                          │                  │
                    ┌─────┴─────┐      ┌─────┴─────┐
                    │ cot_sdr   │      │ Meshtastic│
                    │(1090/978) │      │  LoRa     │
                    └───────────┘      └───────────┘
```

Every box speaks only COT on the wire. Remove any one and the rest keep working.

---

## Installation / Access

The implementation lives in private repositories. Access is by request.

- **Commercial / licensing inquiries:** contact the maintainer.
- **Integrators / authorized deployments:** you'll be granted read access to the five code repos once the engagement is signed.
- **Research / CTF / academic use:** happy to discuss; drop a line.

Each product ships with its own installer (tarball or git clone + systemd service). A single Raspberry Pi can run cot_bridge + cot_mesh + cot_radio + takmap frontend with room to spare. cot_sdr wants a host with USB SDR hardware.

---

## Documentation

Per-product user manuals, architecture deep-dives, TAK protocol reference, and feature spec all live alongside the code (currently private). A public documentation site is planned.

---

## Contact

Maintainer: **Adam Stern** (`adamstern2000` on GitHub)

For access requests, licensing, or technical questions — contact via GitHub or email listed on my profile.

---

*The COT Bridge Suite is an independent project. It is not affiliated with the U.S. Department of Defense, ATAK-CIV, the TAK Product Center, or any other organization. "TAK," "ATAK," and "WinTAK" are trademarks of their respective owners.*
