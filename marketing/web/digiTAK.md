<!--
PAGE METADATA
title: digiTAK — TAK Over Amateur Radio | xTAK Suite
description: digiTAK federates TAK networks over amateur radio — VHF for regional reach, HF for the continent. Run both simultaneously from one Pi. Replace your legacy APRS software with any TAK client as the UI. No internet required.
og_image: /img/digiTAK/hero.jpg
canonical: https://xtak.io/products/digiTAK
-->

<!-- HERO IMAGE: digiTAK on a folding table outdoors, VHF and HF antennas visible, WinTAK laptop next to it -->

# TAK on the air.
# VHF for the region. HF for the continent.

**Federate two or more TAK networks over amateur radio. Run VHF and HF transports simultaneously from one Pi. Built for EmComm, SAR, ARES districts, and any team that needs to coordinate when the WAN is gone.**

<!-- CTA BUTTONS: [Watch the 90-second demo] [Read the wire-format spec] [View on GitHub] -->

---

<!-- TRUST STRIP -->
*Built for ARES, RACES, ACS, SATERN, MARS, SAR, public-safety auxcomm, and amateur radio operators replacing legacy APRS software.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. digiTAK joins that same network as a peer — adding the worldwide APRS network as a first-class participant. [Learn more about the TAK ecosystem →](/about-tak)

---

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtak)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtak)

---

## The scenario

<!-- IMAGE: split-frame — left side base camp WinTAK with markers; right side fire-road forward team on ATAK; background showing radio antennas -->

It's day two of a multi-day SAR exercise. The forward team is up a fire road with no cell, no Starlink, no LTE. Base camp is forty miles back. Both teams need to be looking at the same picture — markers, search assignments, evacuation routes, last-known positions.

You drop a digiTAK at each site. A VHF antenna on a mast. The map on the IC's WinTAK at base camp shows the forward team's markers within seconds. The forward team's ATAK tablets see the IC's search grid the moment it's drawn. When a volunteer with an APRS rig drives in from the highway, their callsign appears on every TAK client on the network as a chat-able contact. The IC can DM them from WinTAK and the message lands on RF.

Meanwhile, the state EOC five hundred miles away has its own digiTAK with an HF rig. The duty officer there sees the exercise's team positions on her WinTAK — passed across the ionosphere by your digiTAK's *second* radio port, which is hooked to an HF radio. She can chat with the field IC over HF. Markers and full fidelity stay regional on VHF; positions and chat cross the continent on HF. Same digiTAK. Both radios. Simultaneously.

**No internet. No TAK Server. No cellular.** Just amateur radio and a Pi at each end.

That's digiTAK.

---

## What you can do with digiTAK

### 1. Run a shared TAK picture across two, three, or N sites

<!-- IMAGE: diagram of three digiTAK sites in a federated mesh with one digipeater between two of them, all sharing a single TAK picture -->

In **bridge mode**, multiple digiTAK gateways form a federated mesh over RF or APRS-IS. Markers placed in ATAK at site A appear in WinTAK at site B with full TAK fidelity — team color, role, COT type, custom icons all preserved.

- **Add a digipeater** between sites to extend RF reach — leverage existing APRS infrastructure
- **Add another digiTAK** to grow the operating area
- **Sibling-gateway coexistence** — any number of digiTAKs on one RF channel without re-emitting or re-digipeating each other's traffic
- **Open wire spec** ([cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs)) so third-party gateways can interoperate

→ [How bridge mode works under the hood](/products/digiTAK/bridge-mode)

### 2. Put every APRS station on your TAK clients

<!-- IMAGE: ATAK screen with APRS stations, weather objects, and a vehicle tracker all as native TAK contacts -->

In **standalone mode**, a single digiTAK gateway puts every APRS station within reach — on the air or on the internet — onto your ATAK, WinTAK, iTAK, and baseTAK clients as a chat-able contact.

- **DM a callsign** from ATAK; the message lands on RF or APRS-IS, wherever that station is hearing
- **Weather stations and NWS bulletins** appear as native TAK overlays
- **Vehicle trackers, beacon stations, weather alerts** all visible without a separate APRS client
- **Reach amplified by APRS digipeaters** — your TAK network's reach becomes whatever the global volunteer digipeater infrastructure can carry, often dozens or hundreds of miles beyond your own line of sight, with zero additional hardware

### 3. Welcome any ham volunteer to the operation — no new gear required

<!-- IMAGE: volunteer with HT pulled out of a backpack; TAK map in the background showing their callsign as a contact -->

Whether digiTAK is running in bridge mode or standalone mode, every APRS-capable ham within radio range or APRS-IS reach is a TAK participant the moment they key up.

- **Their position appears** on the IC's WinTAK as a native TAK contact
- **Their bulletins appear** in TAK chat with callsign attribution
- **The IC can DM them** by callsign from any TAK client — the message lands on RF
- **For EmComm activations, SAR call-outs, exercises, and ad-hoc events:** ham volunteers show up with the rig they already own, beacon their position, and they're on the operation. No app install, no special configuration, no second device.

### 4. Bridge WinTAK islands across the continent on HF

<!-- IMAGE: render of two state EOCs hundreds of miles apart connected by an HF signal hopping off the ionosphere -->

Hook a 2-meter rig to digiTAK and you reach the next county over VHF. Hook an HF rig to the *same* digiTAK and you reach the next state — or the next country — over the ionosphere. Both transports run simultaneously from one box.

HF is a narrower channel by physics: positions for participants and chat, not the full marker/icon/symbology fidelity available on VHF. digiTAK encodes HF traffic with a binary compression codec (~20 bytes per position vs. full COT XML) so it actually fits the band. But it carries far enough that two WinTAK installs a thousand miles apart can share each other's team positions and trade chat over the air.

State EOC sees state EOC. ARES district sees ARES region. National mutual-aid coordinators see all of them. **WinTAK islands stop being islands.**

- **Multi-transport, one box** — APRS-IS, VHF/UHF, and HF all from a single digiTAK
- **HF as the continental backbone** — positions and chat across hundreds to thousands of miles
- **Compressed for the band** — binary codec fits a position update into ~20 bytes
- **Narrower feature set on HF, by design** — markers, shapes, and icons stay on VHF and APRS-IS; positions and chat cross HF
- **All transports concurrent** — local APRS stations on VHF, regional peer on VHF/UHF, distant peer on HF, internet stations via APRS-IS

*HF transport is in active development — see [Status](#status) below.*

### 5. Modernize your APRS station with a TAK client interface

<!-- IMAGE: split-frame — dated UI-View32 screenshot on the left, modern ATAK screen on the right showing APRS contacts; arrow between -->

For ham operators tired of UI-View32, AGW, YAAC, or any other legacy APRS software — old UIs, often unsupported on modern operating systems, increasingly hard to keep running — digiTAK is the modern replacement. The user interface is *any* TAK client.

- **Any TAK client as your APRS UI** — ATAK on your phone, WinTAK on your laptop, iTAK on your tablet, baseTAK in any browser
- **Modern map providers and UI** — current basemaps, click-to-message, fast click paths, real symbology
- **Connect a USB GPS** to the digiTAK and it becomes a mobile APRS tracker — beacon your vehicle, your pack, your shack
- **Every APRS station as a TAK contact** — DM by callsign, send and receive bulletins, monitor weather stations, watch the local APRS net
- **Run alongside or in place of your legacy software** — keep your favorite legacy client if you want, or retire it

For the ham who's been quietly running UI-View32 on a Windows XP VM for the last decade: there's finally a modern path forward, with no loss of the APRS station you've built.

### 6. Be a first-class citizen of the APRS network

<!-- IMAGE: admin UI screenshot showing live audio meters, packet feed, IGate counters -->

digiTAK isn't a tunneled emulator. It's a real ham station.

- **Full WIDE digipeater** with loop suppression
- **RX + TX IGate** (RF ↔ APRS-IS)
- **SmartBeacon** — adaptive position cadence by movement, speed, and heading
- **NWS weather ingest** — bulletins and weather stations as TAK overlays
- **Addressable direct messages** — DM any APRS callsign from ATAK
- **Part 97 compliance gates** with failure-safe TX disable
- **Your callsign. Your beacons. Your APRS identity.**

---

## How it works

<!-- IMAGE: high-level architecture diagram showing two regional sites + a continental link -->

```
   Site A (regional)                              Site B (regional)
   ┌─────────────┐                               ┌─────────────┐
   │  ATAK   ────┐                               ├──── WinTAK  │
   │  WinTAK ────┼── TAK network on LAN          │             │
   │             │                               │   ATAK ─────┤
   │  digiTAK ───┘                               └─── digiTAK  │
   │   │   │     │                               │     │   │   │
   └───┼───┼─────┘                               └─────┼───┼───┘
       │   │             ┌──────────────┐              │   │
       │   └─────────────┤  VHF / UHF   ├──────────────┘   │
       │                 │  (digipeater │                  │
       │                 │   relays)    │                  │
       │                 └──────────────┘                  │
       │                                                    │
       │              ┌─────────────────────┐              │
       └──────────────┤  HF (ionosphere)    ├──────────────┘
                      │  to a third digiTAK │
                      │  500+ miles away    │
                      └─────────────────────┘
```

Every digiTAK joins the TAK network on its LAN as a peer. It listens for outbound TAK chat and SA, encodes qualifying traffic into the TAK-APRS Protocol Extension (v1.2), and transmits over the appropriate transport — VHF/UHF for regional, APRS-IS for internet, HF for continental. It receives inbound APRS frames and HF packets, rebuilds them into native TAK SA/chat, and emits them onto the same network — where every TAK client on the LAN sees them.

---

## Who uses digiTAK

<!-- USE-CASE CARDS -->

**EmComm operators** — running ARES, RACES, ACS, or local CERT. Get TAK situational awareness on the bands you already use, without TAK Server or a cellular dependency.

**State and national EmComm coordinators** — ARES districts, SATERN, MARS-affiliated nets, DHS mutual-aid programs — federate WinTAK installs across state lines on HF instead of trying to keep an internet VPN alive through a disaster.

**Search-and-rescue teams** — with ham radio resources already using APRS for vehicle tracking. Promote those positions to first-class TAK markers, and add a shared map across the exercise area.

**County and city EOCs** — running off-grid drills where cell and WAN are assumed dark. Federate your tabletop and field sites over a 2-meter link, and link to neighboring counties' EOCs on HF.

**Public safety agencies with ham volunteers** — the bridge between your TAK ops and your auxcomm team isn't a phone call anymore. It's the same TAK picture.

**Amateur radio operators replacing legacy APRS software** — keep your APRS station, retire UI-View32 / AGW / YAAC, run any TAK client as the front end. Add a USB GPS and your digiTAK is a mobile APRS tracker too.

**Any licensed ham with an APRS rig** — your existing handheld, mobile, or base station appears on the TAK map and in TAK chat the moment you key up. No new gear, no new configuration.

---

## Specs

| | |
|---|---|
| **Modes** | Bridge (federated multi-site mesh) and Standalone (single gateway) |
| **VHF/UHF transport** | Direwolf modem (bundled) or any KISS-compatible TNC (serial or TCP) |
| **APRS-IS transport** | Tier 2 (your callsign + passcode) |
| **HF transport** | Binary compression codec (~20 bytes per position); in development |
| **TAK clients supported** | ATAK, WinTAK, iTAK, baseTAK — any standard TAK client |
| **Wire protocol** | TAK-APRS Protocol Extension v2.3 ([open spec](https://github.com/adamstern2000/cot_radio_aprs)) |
| **Hardware** | Raspberry Pi 4/5 (4 GB+), or any modern Linux box |
| **OS** | Debian Bookworm, Ubuntu 22.04+, Raspberry Pi OS |
| **Installation** | Offline tarball; all Python wheels vendored |
| **Admin UI** | Web (port 5101); live audio meters, packet feed, counters |
| **License** | (TBD — link to LICENSE) |
| **Version** | v2.1.12 (shipping VHF + APRS-IS); HF in development |

---

## Frequently asked questions

### Do I need TAK Server?
No. digiTAK talks to ATAK, WinTAK, and iTAK clients directly on your LAN. TAK Server is a separate product that federates clients across WAN — which is the problem digiTAK solves over RF instead.

### Does it work with the civilian (CivTAK) builds of ATAK and WinTAK?
Yes. digiTAK speaks the same TAK protocol all builds use.

### Do I need an amateur radio license?
For RF transmission, yes — digiTAK transmits on amateur frequencies and you need a licensed callsign. For APRS-IS-only operation you still need a valid callsign and passcode (free for licensed hams). HF operation requires the appropriate band privileges for your license class.

### Can I keep using my old APRS software alongside digiTAK?
Yes. digiTAK speaks the standard APRS wire format on the air. Your UI-View32, AGW, or YAAC setup keeps working. digiTAK adds a modern TAK-client front end *in addition to* whatever you already run.

### Can my digiTAK be a mobile APRS tracker?
Yes. Connect a USB GPS to the Pi and digiTAK beacons its own position as your APRS station. Mount it in a vehicle, throw it in a pack, or run it in your shack as a fixed beacon.

### Can two digiTAKs run on the same LAN?
Yes. Each gets its own tactical callsign and station number; they coordinate, they don't collide.

### Does it work alongside the other xTAK products?
Yes. baseTAK, loraTAK, sdrTAK, and chatTAK all share the same TAK network by design. Drop them on the same LAN and they compose.

### What happens if I lose internet mid-operation?
If you're running bridge mode over RF (or HF), nothing — those transports are fully off-grid. If you're running APRS-IS only and lose internet, your APRS gateway goes quiet but local TAK clients keep working normally.

### When is HF support shipping?
HF transport via a binary compression codec is in active development — design is complete (FR-081) and implementation is in progress. Check the [Status](#status) section for current state.

---

## Status

| | |
|---|---|
| **Beta — shipping soon** | VHF/UHF + APRS-IS, v2.1.12 — Beta-ready |
| **Future release** | HF transport (binary compression codec, separate gating, positions + chat fidelity) |
| **On the roadmap** | APRS DM ack/rej with retry queue, TAK 911 → APRS Mic-E emergency alerts, bulletin TX slot picker, station list view, NWS warning shape polygons |

---

## Get started

<!-- CTA SECTION -->

digiTAK ships as an offline tarball. One command installs everything.

```bash
tar xzf cot_radio-2.1.12.tar.gz -C /opt
cd /opt/cot_radio && sudo bash install.sh
```

Admin UI opens on port 5101. Set your callsign, SSID, and RF mode, and you're on the air.

**[Download digiTAK v2.1.12]**   **[Read the docs]**   **[Watch the demo]**

---

## Related products in the xTAK suite

<!-- PRODUCT CARDS -->

- **[baseTAK](/products/baseTAK)** — the map, chat, and hub of the xTAK suite. Browser-based TAK client and SA hub for fixed installations.
- **[loraTAK](/products/loraTAK)** — Meshtastic LoRa mesh gateway. Same federation story as digiTAK, but over LoRa.
- **[sdrTAK](/products/sdrTAK)** — SDR-decoded aircraft (ADS-B 1090, UAT 978) and ships (AIS) as native TAK contacts.
- **[chatTAK](/products/chatTAK)** — chat-only Pi appliance. Browser users become first-class TAK endpoints with no app install.
- **[netTAK](/products/netTAK)** *(future release)* — base operating layer for every mobile xTAK device; self-healing field mesh.
- **[aiTAK](/products/aiTAK)** *(future release)* — local-first LLM that joins your TAK network as an operations assistant.

---

<!-- FOOTER CTA -->

**Have a deployment in mind?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
