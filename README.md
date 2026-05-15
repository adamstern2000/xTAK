# xTAK

# Seven products. One TAK picture. No internet required.

**xTAK is a suite of seven independent services that extend the TAK ecosystem (ATAK, WinTAK, iTAK) to the places the official clients can't reach: amateur radio, LoRa mesh, off-grid Wi-Fi, SDR-decoded aircraft, browser-based endpoints, AI assistants. Each product works standalone. Together they compose on one TAK network into a complete, self-hosted situational-awareness stack — no TAK Server, no cloud, no vendor lock-in.**

> **About TAK:** TAK is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio — **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS), maintained by the U.S. Government's TAK Product Center. xTAK is an independent suite that participates in the standard TAK protocol on the same local network. [More about the TAK ecosystem →](marketing/about-tak.md)

---

## The scenario

A regional disaster response. The state EOC has lost the WAN. Cellular is intermittent across three counties. Three SAR teams are in the field; two carry ATAK tablets, the third is volunteers running phones they brought from home. A mutual-aid air asset is inbound, and the state EOC five hundred miles away wants to share the picture.

- A **[baseTAK](marketing/modules/baseTAK.md)** at the EOC serves the IC's web map. She runs the operation from a laptop. Two clicks to drop a marker.
- A **[digiTAK](marketing/modules/digiTAK.md)** in the next rack federates the EOC with the state ARES net over HF and the regional APRS network over VHF — simultaneously.
- A **[loraTAK](marketing/modules/loraTAK.md)** at a remote staging site puts every volunteer's Meshtastic node on the IC's map as a chat-able TAK contact.
- A **[chatTAK](marketing/modules/chatTAK.md)** in the parking lot at a shelter checks in walk-up volunteers in sixty seconds. Each becomes a first-class TAK contact, no app install.
- An **[sdrTAK](marketing/modules/sdrTAK.md)** at the airport feeds inbound mutual-aid helicopter positions onto every map in the network.
- A **[netTAK](marketing/modules/netTAK.md)** *(in development)* at a forward camp eighty miles into the operating area extends the LAN over Wi-Fi HaLow and serves preloaded county maps to every tablet that joins.

One TAK picture. Seven products. No TAK Server. No cloud. No internet uplink.

That's xTAK.

---

## What xTAK is

xTAK is built around five propositions every product in the suite shares:

### 1. Stand-alone, compose by network
Every product is a complete service in its own right; run just the ones you need. They discover each other and trade data over standard TAK protocols, with no glue, no integration tax, no shared state, no shared database. The only shared interface is the TAK network itself.

### 2. Off-grid by design
Every product is built to run without internet, without cellular, and without TAK Server. Cloud is an option, not a requirement. Most products ship as offline tarballs with every dependency vendored.

### 3. 100% TAK protocol fidelity
What xTAK emits on the wire is byte-identical to what WinTAK emits. ATAK, WinTAK, and iTAK clients can't tell xTAK participants apart from "real" TAK clients on the network. Markers, chat, SA, team color, custom icons — all round-trip with full fidelity through every product in the suite.

### 4. Self-hosted, no vendor lock-in
Open standards (TAK, COT, APRS, Meshtastic, 802.11s, BATMAN, Wi-Fi HaLow, JS8Call, ADS-B). Open source on the wire. No subscription, no per-device licensing, no cloud account. The data is yours and the boxes are yours.

### 5. Built for the operator
Designed by and for people who actually run operations: incident commanders, SAR base teams, EmComm operators, ham radio volunteers. Faster click paths, fewer menus, less clutter, the map gets the screen.

### 6. Portable, pocketable, battery-powered
None of this lives in a server rack. **baseTAK** runs on a device the size of a Game Boy. **chatTAK** fits in a 3D-printed case smaller than a deck of cards. **loraTAK**, **digiTAK**, and **sdrTAK** run on a Raspberry Pi with one USB peripheral. **netTAK** nodes ride in Pelican cases. Even **aiTAK** — the heaviest part of the suite — runs an 8B-class open-weights LLM on a small mini-PC, power-modest enough to be solar-viable for multi-day deployments. The whole suite fits in a backpack.

---

## The products

### 🗺️ [baseTAK](marketing/modules/baseTAK.md) — Run the operation from a browser
A full TAK map, chat, and SA hub in a browser tab. Faster to operate than WinTAK by design (two clicks to broadcast). Built-in tileserver distributes offline maps to every ATAK tablet on the LAN. Multi-user — every laptop in the EOC is a first-class TAK operator. **Shipping.**

### 📻 [digiTAK](marketing/modules/digiTAK.md) — TAK on the air
A bidirectional amateur-radio gateway. Federate two or more TAK networks over RF and APRS-IS — VHF for regional reach, HF for the continent. Markers, chat, and DMs round-trip with full TAK fidelity. Run all transports simultaneously from one Pi. **Shipping VHF + APRS-IS; HF in development.**

### 🌲 [loraTAK](marketing/modules/loraTAK.md) — Your Meshtastic mesh, now a TAK network
A bidirectional Meshtastic LoRa gateway. Every mesh node appears on ATAK, WinTAK, iTAK, and baseTAK as a first-class SA contact with team color and telemetry. Chat round-trips between mesh and TAK in both directions. **Shipping.**

### 💬 [chatTAK](marketing/modules/chatTAK.md) — Comms-forward TAK, no app required
A Pi appliance with its own Wi-Fi network and a browser-based chat UI. Multi-user — the whole command staff runs from one Pi, each on their own phone, each as a first-class TAK identity. **Shipping.**

### ✈️ [sdrTAK](marketing/modules/sdrTAK.md) — Every aircraft in the sky, on your TAK map
SDR-decoded ADS-B, UAT 978, and AIS rendered as native TAK contacts. Military hex / callsign auto-flagging. 520k-entry aircraft database. Works with any SoapySDR-supported dongle. **Shipping.**

### 🌐 [netTAK](marketing/modules/netTAK.md) — A self-healing LAN that follows you into the field
Pi-based field nodes that auto-form a self-healing 802.11s + BATMAN mesh, using both standard Wi-Fi and Wi-Fi HaLow. Carries the full xTAK service stack across miles of terrain. Includes baseTAK Lite with a built-in tileserver so forward sites distribute maps locally. **In active development.**

### 🤖 [aiTAK](marketing/modules/aiTAK.md) — An AI assistant inside your TAK network
An LLM-backed operator's helper that joins your TAK network as a peer. Answers natural-language questions about the operational picture, drafts SITREPs, flags rule-matched conditions in chat. Local-first; runs on your hardware against open-weights models you choose. **In active development.**

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

## How the suite composes

```
                       ┌──────────────────────────────────────────┐
                       │     TAK network on the LAN               │
                       │     ATAK ⇄ WinTAK ⇄ iTAK ⇄ xTAK suite    │
                       └──────────────────────┬───────────────────┘
                                              │
       ┌────────────┬────────────┬────────────┼────────────┬────────────┬────────────┐
       │            │            │            │            │            │            │
  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐  ┌────┴────┐
  │ baseTAK │  │ digiTAK │  │ loraTAK │  │ chatTAK │  │ sdrTAK  │  │ netTAK  │  │ aiTAK   │
  │  map +  │  │ amateur │  │ Mesh-   │  │ Pi chat │  │ ADS-B / │  │ field   │  │ LLM     │
  │  chat + │  │ radio   │  │ tastic  │  │ appliance│ │ UAT /   │  │ mesh    │  │ helper  │
  │  hub    │  │ gateway │  │ gateway │  │         │  │ AIS     │  │ platform│  │         │
  └─────────┘  └────┬────┘  └────┬────┘  └─────────┘  └─────────┘  └─────────┘  └─────────┘
                    │            │
              VHF/UHF/HF    Meshtastic
              APRS-IS        LoRa mesh
                    │            │
              Worldwide      Field
              amateur        teams
              radio
```

Every product talks to every TAK client on the LAN. Add or remove a product without touching the others. Compose what your operation needs.

---

## Get started

Each product ships as an independent install — offline tarball, single install script, settings-file configuration. Pick the products that match your operation:

| If your operation needs… | Start with |
|---|---|
| A web-based map and SA hub | [baseTAK](marketing/modules/baseTAK.md) |
| TAK over amateur radio (VHF, APRS-IS, HF) | [digiTAK](marketing/modules/digiTAK.md) |
| TAK over Meshtastic LoRa mesh | [loraTAK](marketing/modules/loraTAK.md) |
| Browser chat for non-ATAK users | [chatTAK](marketing/modules/chatTAK.md) |
| Live aircraft / ships on the map | [sdrTAK](marketing/modules/sdrTAK.md) |
| A deployable mesh LAN for the field | [netTAK](marketing/modules/netTAK.md) *(in development)* |
| AI augmentation for the IC | [aiTAK](marketing/modules/aiTAK.md) *(in development)* |

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
| [baseTAK](marketing/modules/baseTAK.md) | Shipping | Battle-tested in production |
| [digiTAK](marketing/modules/digiTAK.md) | Shipping (VHF + APRS-IS) | HF transport via JS8Call in development |
| [loraTAK](marketing/modules/loraTAK.md) | Shipping (Meshtastic backend) | LoRa-stack pluggability (Reticulum, custom firmware) on roadmap |
| [chatTAK](marketing/modules/chatTAK.md) | Shipping | Pi appliance production-ready |
| [sdrTAK](marketing/modules/sdrTAK.md) | Shipping (ADS-B + UAT) | AIS imminent |
| [netTAK](marketing/modules/netTAK.md) | In development | First public release expected later this year |
| [aiTAK](marketing/modules/aiTAK.md) | In development | First release timing TBD |

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**Seven products. One TAK picture. No internet required.**

### Social pitch — 50 words
xTAK is a suite of seven services that extend ATAK, WinTAK, and iTAK to where the official clients can't reach: amateur radio, LoRa mesh, off-grid Wi-Fi, SDR aircraft, browser endpoints, AI helpers. Each works standalone; together they compose on one TAK network. Self-hosted. No TAK Server. No cloud.

### Long pitch — 200 words
xTAK is a suite of seven independent TAK services for the team that has to coordinate when the WAN is down, the cell network is dark, and TAK Server is not available. Every product joins the same TAK network that ATAK, WinTAK, and iTAK speak — appearing as a peer alongside the official clients with 100% protocol fidelity. Run just the ones you need; they discover each other and compose without glue.

baseTAK runs the operation from a browser. digiTAK bridges your TAK network to amateur radio — regional VHF/UHF or continental HF, all simultaneously. loraTAK puts every Meshtastic node on the map. chatTAK turns a Pi into a multi-user chat appliance with its own Wi-Fi. sdrTAK pulls aircraft and ships off the air with a $30 dongle. netTAK *(in development)* deploys self-healing field nodes with built-in offline tileservers. aiTAK *(in development)* joins the network as an LLM-backed operator's helper.

Self-hosted. Off-grid by design. Open standards. No vendor lock-in. Built by and for the people who actually run operations.

### Soul quote
> Every product is standalone. Every product composes by network. None of them need the cloud.

### Audience tags
**Primary:** incident commanders, EOC staff, SAR teams, EmComm (ARES, RACES, ACS, SATERN, MARS), wildland fire, public-safety auxcomm, amateur radio operators.
**Secondary:** training and exercise organizers, preppers, off-grid groups, integrators evaluating TAK without committing to TAK Server.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](marketing/COPYRIGHT.md)*
