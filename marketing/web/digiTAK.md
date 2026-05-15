<!--
PAGE METADATA
title: digiTAK — TAK over Amateur Radio | xTAK Suite
description: digiTAK federates ATAK, WinTAK, and iTAK networks over amateur radio. Markers, chat, and DMs round-trip with full TAK fidelity. No internet required. Built for EmComm, SAR, and public-safety auxcomm.
og_image: /img/digiTAK/hero.jpg
canonical: https://xtak.io/products/digiTAK
-->

<!-- HERO IMAGE: digiTAK on a folding table outdoors, antenna mast visible, ATAK tablet next to it -->

# TAK on the air.
# Internet not required.

**Federate two or more TAK networks over amateur radio. Add a site, grow the operating area. Built for EmComm, SAR, and any team that has to coordinate when the WAN is gone.**

<!-- CTA BUTTONS: [Watch the 90-second demo] [Read the bridge-mode spec] [View on GitHub] -->

---

<!-- TRUST STRIP: small logos / wordmarks of organizations using xTAK, or text-only -->
*Built for ARES, RACES, ACS, CERT, county EOCs, and SAR teams running off-grid.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. digiTAK joins that same network as a peer — adding the worldwide APRS network as a first-class participant. [Learn more about the TAK ecosystem →](/about-tak)

---

## The scenario

<!-- IMAGE: split-frame — left side base camp WinTAK screen with markers; right side fire-road forward team on ATAK -->

It's day two of a multi-day SAR exercise. The forward team is up a fire road with no cell, no Starlink, no LTE. Base camp is forty miles back. Both teams need to be looking at the same picture — markers, search assignments, evacuation routes, last-known positions.

You drop an digiTAK at each site. A VHF antenna on a mast. The map on the IC's WinTAK at base camp shows the forward team's markers within seconds. The forward team's ATAK tablets see the IC's search grid the moment it's drawn. When a volunteer with an APRS rig drives in from the highway, their callsign appears on every TAK client on the network as a chat-able contact. The IC can DM them from WinTAK and the message lands on RF.

**No internet. No TAK Server. No cellular.** Just amateur radio and a Pi at each end.

That's digiTAK.

---

## What you can do with digiTAK

<!-- This section is the heart of the page. Each outcome gets its own block with image. -->

### 1. Run a shared TAK picture across two, three, or N sites

<!-- IMAGE: diagram of three digiTAK sites in a federated mesh, with one digipeater between two of them, all sharing a single TAK picture -->

In **bridge mode**, multiple digiTAK gateways form a federated mesh over RF or APRS-IS. Markers placed in ATAK at site A appear in WinTAK at site B with full TAK fidelity — team color, role, COT type, custom icons all preserved.

- **Add a digipeater** between sites to extend RF reach
- **Add another digiTAK** to grow the operating area
- **Any number of sibling gateways** coexist on one RF channel without packet collisions — the network coordinates, it doesn't echo
- **Open wire spec** ([cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs)) so third-party gateways can interoperate

→ [How bridge mode works under the hood](/products/digiTAK/bridge-mode)

### 2. Put every APRS station on your TAK clients

<!-- IMAGE: ATAK screen with APRS stations and weather objects as native TAK contacts -->

In **standalone mode**, a single digiTAK gateway puts every APRS station within reach — on the air or on the internet — onto your ATAK, WinTAK, iTAK, and baseTAK clients as a chat-able contact.

- **DM a callsign** from ATAK; the message lands on RF or APRS-IS, wherever that station is hearing
- **Weather stations** and **NWS bulletins** appear as native TAK overlays
- **Vehicle trackers, beacon stations, weather alerts** — all visible without a separate APRS client
- **Replies come back** on the same path; no protocol gymnastics

### 3. Be a first-class citizen of the APRS network

<!-- IMAGE: admin UI screenshot showing live audio meters, packet feed, IGate counters -->

digiTAK isn't a tunneled emulator. It's a real ham station.

- **WIDE digipeater** with loop suppression
- **RX + TX IGate** (RF ↔ APRS-IS)
- **SmartBeacon** — adaptive position cadence by movement, speed, and heading
- **Part 97 compliance gates** with failure-safe TX disable
- **Your callsign. Your beacons. Your APRS identity.**

---

## How it works

<!-- IMAGE: high-level architecture diagram -->

```
   ┌─────────────┐                              ┌─────────────┐
   │  Site A     │                              │  Site B     │
   │             │                              │             │
   │  ATAK   ────┐                              ├──── WinTAK  │
   │  WinTAK ────┼── 239.2.3.1:6969 (multicast) │             │
   │             │                              │   ATAK ─────┤
   │  digiTAK ───┘                              └─── digiTAK  │
   │      │      │                              │     │       │
   └──────┼──────┘                              └─────┼───────┘
          │           ┌──────────────┐                │
          └───────────┤  Amateur     ├────────────────┘
                      │  Radio       │
                      │  (VHF/UHF/HF)│
                      └──────────────┘
```

Every digiTAK joins the TAK network on its LAN as a peer. It listens for outbound TAK chat and SA, encodes qualifying traffic into the TAK-APRS Protocol Extension (v1.2), and transmits over RF or APRS-IS. It receives inbound APRS frames, rebuilds them into native COT, and emits them onto the same network — where every TAK client on the LAN sees them.

---

## Who uses digiTAK

<!-- USE-CASE CARDS: each could become a small panel with icon + text -->

**EmComm operators** — running ARES, RACES, ACS, or local CERT. Get TAK situational awareness on the bands you already use, without TAK Server or a cellular dependency.

**Search-and-rescue teams** — with ham radio resources already using APRS for vehicle tracking. Promote those positions to first-class TAK markers, and add a shared map across the exercise area.

**County and city EOCs** — running off-grid drills where cell and WAN are assumed dark. Federate your tabletop and field sites over a 2-meter link.

**Public safety agencies** — with ham volunteers. The bridge between your TAK ops and your auxcomm team isn't a phone call anymore — it's the same TAK picture.

**Amateur radio operators** — who want their APRS station to be a real participant in a TAK network, not a separate world.

---

## Specs

| | |
|---|---|
| **Modes** | Bridge (federated multi-site mesh) and Standalone (single gateway) |
| **RF transport** | Direwolf modem (bundled) or any KISS-compatible TNC (serial or TCP) |
| **Internet transport** | APRS-IS tier 2 (your callsign + passcode) |
| **TAK clients supported** | ATAK, WinTAK, iTAK, baseTAK — any client speaking standard TAK multicast |
| **Wire protocol** | TAK-APRS Protocol Extension v1.2 ([open spec](https://github.com/adamstern2000/cot_radio_aprs)) |
| **Hardware** | Raspberry Pi 4/5 (4 GB+), or any modern Linux box |
| **OS** | Debian Bookworm, Ubuntu 22.04+, Raspberry Pi OS |
| **Installation** | Offline tarball; all Python wheels vendored |
| **Admin UI** | Web (port 5101); live audio meters, packet feed, counters |
| **License** | (TBD — link to LICENSE) |
| **Version** | v2.1.12 (shipping) |

---

## Frequently asked questions

### Do I need TAK Server?
No. digiTAK talks to ATAK, WinTAK, and iTAK clients directly on your LAN. TAK Server is a separate product that federates clients across WAN, which is exactly the problem digiTAK solves over RF instead.

### Does it work with the civilian (CivTAK) builds of ATAK and WinTAK?
Yes. digiTAK speaks the same TAK protocol all builds use.

### Do I need an amateur radio license?
For RF transmission, yes — digiTAK transmits on amateur frequencies and you need a licensed callsign. For APRS-IS-only operation you still need a valid callsign and passcode (free for licensed hams).

### Can two digiTAKs run on the same LAN?
Yes. Each gets its own tactical callsign and station number; they coordinate, they don't collide.

### Does it work alongside the other xTAK products?
Yes. baseTAK, meshTAK, sdrTAK, and chatTAK all share the same TAK network by design. Drop them on the same LAN and they compose.

### What happens if I lose internet mid-operation?
If you're running bridge mode over RF, nothing — bridge-mode-over-RF is fully off-grid. If you're running APRS-IS only and lose internet, your APRS gateway goes quiet but local TAK clients keep working normally.

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

<!-- PRODUCT CARDS: small panels with title + 1-liner each -->

- **[baseTAK](/products/baseTAK)** — the map, chat, and hub of the xTAK suite. A browser-based TAK client and SA hub for fixed installations.
- **[meshTAK](/products/meshTAK)** — Meshtastic LoRa mesh gateway. The same federation story as digiTAK, but over LoRa.
- **[sdrTAK](/products/sdrTAK)** — SDR-decoded aircraft (ADS-B 1090, UAT 978) and ships (AIS) as native TAK contacts.
- **[chatTAK](/products/chatTAK)** — chat-only Pi appliance. Browser users become first-class TAK endpoints with no app install.
- **[netTAK](/products/netTAK)** *(in development)* — self-healing Wi-Fi HaLow + 802.11s + BATMAN mesh field platform.

---

<!-- FOOTER CTA -->

**Have a deployment in mind?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub.
