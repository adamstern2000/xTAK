<!--
PAGE METADATA
title: xTAK — Seven Products. One TAK Picture. No Internet Required.
description: xTAK is an open suite of seven independent services that extend ATAK, WinTAK, and iTAK to the places official clients can't reach — amateur radio, LoRa mesh, off-grid Wi-Fi, SDR-decoded aircraft, browser endpoints, AI assistants. Self-hosted. Beta — shipping soon.
og_image: /img/xtak/hero.jpg
canonical: https://xtak.io/
-->

<!-- HERO IMAGE: a single Pelican case open on a folding table at an EOC, holding a Game Boy-sized baseTAK, a Pi-with-radio digiTAK, a Pi Zero chatTAK, an SDR dongle, and an antenna — with a tablet next to it showing the TAK map all of them are feeding -->

# Seven products. One TAK picture.
# No internet required.

**xTAK is an open suite of seven services that extend the TAK ecosystem — ATAK, WinTAK, iTAK — to the places the official clients can't reach: amateur radio, LoRa mesh, off-grid Wi-Fi, SDR-decoded aircraft, browser endpoints, AI assistants. Each product works standalone. Together they compose on one TAK network into a complete, self-hosted situational-awareness stack. The whole suite fits in a backpack.**

<!-- CTA BUTTONS: [Become an Early Adopter →](https://buymeacoffee.com/xtakproject) [Browse the products](#the-products) [View on GitHub](https://github.com/adamstern2000/xTAK) -->

---

<!-- TRUST STRIP -->
*Built for incident commanders, EOC staff, SAR teams, EmComm (ARES, RACES, ACS, SATERN, MARS), wildland fire crews, public-safety auxcomm, amateur radio operators, and any team that has to coordinate when the WAN is gone.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS), maintained by the U.S. Government's TAK Product Center. All three speak a common wire protocol (Cursor-on-Target) over a shared local network. xTAK is an independent suite that participates in that same protocol on the same local network — alongside the official clients, not replacing them. [Learn more about the TAK ecosystem →](/about-tak)

---

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtakproject)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtakproject)

---

## The scenario

<!-- IMAGE: aerial view of a multi-county disaster response — an EOC building, three field-team locations, a remote camp, a HF radio dish, with little markers labeled with each xTAK product showing where it's running -->

A regional disaster response. The state EOC has lost the WAN. Cellular is intermittent across three counties. Three SAR teams are in the field; two carry ATAK tablets, the third is volunteers running phones they brought from home. A mutual-aid air asset is inbound, and the state EOC five hundred miles away wants to share the picture.

- A **[baseTAK](baseTAK.md)** at the EOC serves the IC's web map. She runs the operation from a laptop. Two clicks to drop a marker.
- A **[digiTAK](digiTAK.md)** in the next rack federates the EOC with the state ARES net over HF and the regional APRS network over VHF — simultaneously.
- A **[loraTAK](loraTAK.md)** at a remote staging site puts every volunteer's Meshtastic node on the IC's map as a chat-able TAK contact.
- A **[chatTAK](chatTAK.md)** in the parking lot at a shelter checks in walk-up volunteers in sixty seconds. Each becomes a first-class TAK contact, no app install.
- An **[sdrTAK](sdrTAK.md)** at the airport feeds inbound mutual-aid helicopter positions onto every map in the network.
- A **[netTAK](netTAK.md)** *(future release)* at a forward camp eighty miles into the operating area extends the LAN over Wi-Fi HaLow and serves preloaded county maps to every tablet that joins.
- An **[aiTAK](aiTAK.md)** *(future release)* in a small mini-PC at the EOC drafts the next IAP from observed activity while the IC handles the unfolding scene.

One TAK picture. Seven products. No TAK Server. No cloud. No internet uplink.

That's xTAK.

---

## What xTAK is

xTAK is built around six propositions every product in the suite shares.

### 1. Stand-alone, compose by network
Every product is a complete service in its own right; run just the ones you need. They discover each other and trade data over standard TAK protocols, with no glue, no integration tax, no shared state, no shared database. The only shared interface is the TAK network itself.

### 2. Off-grid by design
Every product is built to run without internet, without cellular, and without TAK Server. Cloud is an option, not a requirement. Most products ship as offline tarballs with every dependency vendored.

### 3. 100% TAK protocol fidelity
What xTAK emits on the wire is byte-identical to what WinTAK emits. ATAK, WinTAK, and iTAK clients can't tell xTAK participants apart from "real" TAK clients on the network. Markers, chat, SA, team color, custom icons — all round-trip with full fidelity through every product in the suite.

### 4. Self-hosted, no vendor lock-in
Open standards (TAK, COT, APRS, Meshtastic, 802.11s, BATMAN, Wi-Fi HaLow, ADS-B). Open source on the wire. No subscription, no per-device licensing, no cloud account. The data is yours and the boxes are yours.

### 5. Built for the operator
Designed by and for people who actually run operations: incident commanders, SAR base teams, EmComm operators, ham radio volunteers. Faster click paths, fewer menus, less clutter, the map gets the screen.

### 6. Portable, pocketable, battery-powered
None of this lives in a server rack. **baseTAK** runs on a device the size of a Game Boy. **chatTAK** fits in a 3D-printed case smaller than a deck of cards. **loraTAK**, **digiTAK**, and **sdrTAK** run on a Raspberry Pi with one USB peripheral. **netTAK** nodes ride in Pelican cases. Even **aiTAK** — the heaviest part of the suite — runs an 8B-class open-weights LLM on a small mini-PC, power-modest enough to be solar-viable for multi-day deployments. The whole suite fits in a backpack.

---

<a id="the-products"></a>
## The products

<!-- PRODUCT GRID: each card has hero image, headline, blurb, status badge, link -->

### 🗺️ [baseTAK](baseTAK.md) — Run the operation from a browser

<!-- IMAGE: baseTAK browser UI with map, markers, drawings, chat pane -->

A full TAK map, chat, and SA hub in a browser tab. Faster to operate than WinTAK by design — two clicks to broadcast a marker. Built-in tileserver distributes offline maps to every ATAK tablet on the LAN. Multi-user — every laptop in the EOC is a first-class TAK operator. **Beta — shipping soon.**

### 📻 [digiTAK](digiTAK.md) — TAK on the air

<!-- IMAGE: VHF + HF radios connected to a Pi running digiTAK -->

A bidirectional amateur-radio gateway. Federate two or more TAK networks over RF and APRS-IS — VHF for regional reach, HF for the continent. Markers, chat, and DMs round-trip with full TAK fidelity. Run all transports simultaneously from one Pi. **Beta — shipping soon (VHF + APRS-IS); HF future release.**

### 🌲 [loraTAK](loraTAK.md) — Your Meshtastic mesh, now a TAK network

<!-- IMAGE: Meshtastic nodes on packs in the field, a Pi gateway at base camp -->

A bidirectional Meshtastic LoRa gateway. Every mesh node appears on ATAK, WinTAK, iTAK, and baseTAK as a first-class SA contact with team color and telemetry. Chat round-trips between mesh and TAK in both directions. **Beta — shipping soon (Meshtastic backend); future LoRa-stack pluggability on roadmap.**

### 💬 [chatTAK](chatTAK.md) — Comms-forward TAK, no app required

<!-- IMAGE: Pi Zero appliance in a 3D-printed case, phones connecting to its Wi-Fi -->

A Pi appliance with its own Wi-Fi network and a browser-based chat UI. Multi-user — the whole command staff runs from one Pi, each on their own phone, each as a first-class TAK identity. **Beta — shipping soon.**

### ✈️ [sdrTAK](sdrTAK.md) — Every aircraft in the sky. Every ship in the bay.

<!-- IMAGE: SDR dongle + antenna feeding a Pi; ATAK map showing aircraft as native TAK contacts -->

SDR-decoded ADS-B 1090, UAT 978, and AIS rendered as native TAK contacts. Military hex / callsign auto-flagging. 520k-entry aircraft database. Works with any SoapySDR-supported dongle. **Beta — shipping soon (ADS-B + UAT); AIS future release.**

### 🌐 [netTAK](netTAK.md) — A self-healing LAN that follows you into the field

<!-- IMAGE: Pi-based field nodes in Pelican cases, mesh links between them, directional antennas -->

The base operating layer for every mobile xTAK device. Pi-based field nodes that run sdrTAK, chatTAK, loraTAK, digiTAK, or baseTAK Lite as managed services. Standalone, or mesh over Wi-Fi / Ethernet / optional Wi-Fi HaLow. **Future release.**

### 🤖 [aiTAK](aiTAK.md) — An AI assistant inside your TAK network

<!-- IMAGE: small mini-PC with TAK map on a monitor; chat thread with an aiTAK contact responding with a SITREP -->

An LLM-backed operator's helper that joins your TAK network as a peer. Answers natural-language questions, drafts SITREPs, flags rule-matched conditions. Local-first; 8B-class models run on consumer hardware and are solar-viable. **Future release.**

---

## How the suite composes

<!-- IMAGE: layered architecture render — baseTAK and aiTAK as fixed-install peers on the TAK network at top, netTAK as base layer beneath the mobile xTAK products -->

```
                  TAK network on the LAN
              ATAK ⇄ WinTAK ⇄ iTAK ⇄ xTAK suite
                            │
       ┌────────────────────┼────────────────────┐
       │                                          │
  ┌────┴─────┐                              ┌────┴────┐
  │ baseTAK  │                              │  aiTAK  │
  │ EOC hub  │                              │ LLM     │
  │ map+chat │                              │ helper  │
  └──────────┘                              └─────────┘
                            │
  ┌─────────────────────────┴─────────────────────────────────┐
  │  netTAK — base operating layer for every mobile device     │
  │                                                             │
  │  Each netTAK runs ONE of:                                  │
  │   sdrTAK | loraTAK | digiTAK | chatTAK | baseTAK Lite      │
  │                                                             │
  │  Standalone, OR meshed over Wi-Fi / Ethernet / Wi-Fi HaLow │
  └─────────────────────────────────────────────────────────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
        Amateur          LoRa /        ADS-B / UAT /
        radio (RF,     Meshtastic     AIS off the air
        APRS-IS, HF)
```

baseTAK and aiTAK are fixed-install products (EOC, compute room). The mobile xTAK products (sdrTAK, loraTAK, digiTAK, chatTAK, baseTAK Lite) run on **netTAK** as the base operating layer — one platform, one admin surface, optionally meshed together when devices are in radio range. Every product talks to every TAK client on the LAN.

---

## Who runs xTAK

- **Incident commanders running fast-moving incidents** — fires, mass-casualty, active threats, severe weather
- **EOC and command-post staff** running coordination cells from laptops, mixed ATAK / non-ATAK rooms
- **Wildland and structural fire crews** operating across terrain where cellular and Wi-Fi don't reach
- **Search-and-rescue teams** with mixed ATAK + Meshtastic + amateur radio resources
- **EmComm operators** running ARES, RACES, ACS, SATERN, MARS, or local CERT missions
- **State and national EmComm coordinators** federating WinTAK installs across state lines on HF
- **County and city emergency-management offices** running off-grid exercises and real deployments
- **Public-safety agencies with ham volunteers** — the bridge between TAK ops and auxcomm
- **Event coordinators** running mass-participation events with mixed-experience volunteer teams
- **Amateur radio operators** who want their APRS and Meshtastic stations to be first-class TAK participants

---

## Get started

Each product ships as an independent install — offline tarball, single install script, settings-file configuration. Pick the products that match your operation:

| If your operation needs… | Start with |
|---|---|
| A web-based map and SA hub | [baseTAK](baseTAK.md) |
| TAK over amateur radio (VHF, APRS-IS, HF) | [digiTAK](digiTAK.md) |
| TAK over Meshtastic LoRa mesh | [loraTAK](loraTAK.md) |
| Browser chat for non-ATAK users | [chatTAK](chatTAK.md) |
| Live aircraft / ships on the map | [sdrTAK](sdrTAK.md) |
| A deployable mesh LAN for the field | [netTAK](netTAK.md) *(future release)* |
| AI augmentation for the IC | [aiTAK](aiTAK.md) *(future release)* |

**Want Beta access today?** [☕ Become an Early Adopter on Buy Me a Coffee →](https://buymeacoffee.com/xtakproject)

---

## What you don't need

- **No TAK Server.** Every xTAK product joins the local TAK network directly. Optional, not required.
- **No cloud.** Every product self-hosts on hardware you own. The data is yours.
- **No internet.** Most deployments work fully off-grid. Internet is an option (APRS-IS, map updates) but never a dependency.
- **No subscription, no per-device licensing.** Offline tarball installs, no accounts.
- **No vendor lock-in.** Standards-based wire formats, open hardware, Linux software.

---

## Status

| Product | Status | Notes |
|---|---|---|
| [baseTAK](baseTAK.md) | Beta — shipping soon | Validated in pilot deployments |
| [digiTAK](digiTAK.md) | Beta — shipping soon (VHF + APRS-IS) | HF transport — future release |
| [loraTAK](loraTAK.md) | Beta — shipping soon (Meshtastic backend) | LoRa-stack pluggability on roadmap |
| [chatTAK](chatTAK.md) | Beta — shipping soon | Pi-appliance Beta tested |
| [sdrTAK](sdrTAK.md) | Beta — shipping soon (ADS-B + UAT) | AIS — future release (imminent) |
| [netTAK](netTAK.md) | Future release | First public release expected later this year |
| [aiTAK](aiTAK.md) | Future release | First release timing TBD |

---

## Frequently asked questions

### Is xTAK shipping today?
The suite is in active **Beta**. Five products (baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK) are in Beta testing with operators and will be shipping soon. Two products (netTAK, aiTAK) are future releases under active development. [Early Adopters](https://buymeacoffee.com/xtakproject) get access to Beta builds today.

### Do I need TAK Server to run xTAK?
No. Every xTAK product joins the local TAK network directly and talks to ATAK, WinTAK, and iTAK clients without any server. TAK Server is the official cross-WAN federation product from the TAK Product Center; xTAK solves that problem differently (over RF, mesh, and HF) without it.

### Does xTAK work with civilian (CivTAK) builds of the official TAK clients?
Yes. xTAK speaks the same TAK protocol all builds use — military, civilian, and the open community variants.

### Is xTAK open source?
Source repositories are private during Beta; the public posture is open documentation, open wire formats (the [TAK-APRS Protocol Extension](https://github.com/adamstern2000/cot_radio_aprs) is fully open), and the goal of community-friendly licensing at general-availability. Early Adopters get Beta build access.

### Do I have to be a ham operator to use xTAK?
For digiTAK (and loraTAK on RF), yes — the radios transmit on amateur frequencies and require a licensed callsign. For baseTAK, chatTAK, sdrTAK (receive-only), and aiTAK: no license required.

### How do I support the project?
[Buy Me a Coffee](https://buymeacoffee.com/xtakproject). Early Adopters get Beta access to all xTAK software, new features, and direct engagement with the team. The project is self-funded — supporter contributions fund the next product and the next deployment test.

### Will xTAK products always be standalone?
Yes. Composability through the TAK network is a hard design rule — every product runs on its own and discovers the others via standard TAK protocol. There is no integration tax, no shared module, no required hub.

### Can xTAK coexist with my existing ATAK / WinTAK / iTAK / TAK Server setup?
Yes. xTAK joins as a peer. If you already run TAK Server for WAN federation, xTAK runs alongside it; if you don't, xTAK gives you off-grid alternatives.

---

## Get in touch

**Become an Early Adopter:** **[☕ Buy Me a Coffee →](https://buymeacoffee.com/xtakproject)**

**Source and issues:** [github.com/adamstern2000/xTAK](https://github.com/adamstern2000/xTAK)

**Wire-format spec (open):** [cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs)

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
