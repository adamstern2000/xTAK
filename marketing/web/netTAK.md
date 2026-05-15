<!--
PAGE METADATA
title: netTAK — The Operating Layer for Every Mobile xTAK Device | xTAK Suite
description: netTAK is the base platform that runs on every Pi-class mobile xTAK device — sdrTAK, chatTAK, loraTAK, digiTAK, baseTAK Lite. Standalone, local mesh over Wi-Fi/Ethernet, or long-range mesh over optional Wi-Fi HaLow. Built for wildland fire, multi-day SAR, and EmComm disaster response.
og_image: /img/netTAK/hero.jpg
canonical: https://xtak.io/products/netTAK
-->

<!-- HERO IMAGE: five Pelican-cased netTAK nodes deployed across mountainous terrain, antennas raised, with a wildland fire IC tent in the foreground -->

# The platform under your field xTAK.
# The mesh between every device.

**netTAK is the base operating layer that runs on every Pi-class mobile xTAK device — sdrTAK, chatTAK, loraTAK, digiTAK, baseTAK Lite. Run a netTAK standalone for a remote outpost, or mesh multiple nodes together over Wi-Fi, Ethernet, and (optionally) Wi-Fi HaLow for ridge-to-ridge ranges. Built for wildland fire, multi-day SAR, EmComm disaster response.**

<!-- STATUS BANNER -->
> **Status: in active development.** The hardware platform is validated and lab testing is underway. **First public release is expected later this year.** This page describes the product we are building toward — not a shipping deliverable. If you want to follow progress, watch the repo or get on the notify list below.

<!-- CTA BUTTONS: [Get notified at first release] [Read the docs (draft)] [View on GitHub] -->

---

<!-- TRUST STRIP -->
*Being built for wildland and structural fire crews, multi-day SAR teams, EmComm operators, county and state EM offices, public-safety auxcomm, and tactical training environments running multi-site operations without commercial infrastructure.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. digiTAK joins that same network as a peer — adding the worldwide APRS network as a first-class participant. [Learn more about the TAK ecosystem →](/about-tak)

---

## The scenario

<!-- IMAGE: split-frame — left side wildland fire IC tent with WinTAK; right side ridge-top netTAK node with directional HaLow Yagi pointed across a valley -->

A wildland fire crew is operating in mountainous terrain over a five-day deployment. The Incident Command Post is at the trailhead, three squad bases are spread across the operations area, and a logistics camp is set up at the watering point two miles downhill. Cellular is dead. The radios work for voice but can't carry the IC's map. Starlink is unreliable under the canopy.

The crew deploys a netTAK node at every site — five nodes in total, each in a Pelican case, each running on a 12V battery. The nodes auto-form a self-healing 802.11s + BATMAN mesh. Some hops are short-haul 2.4 / 5 GHz Wi-Fi between adjacent sites; others are 802.11ah HaLow with a small Yagi pointed up a ridge for the long-haul links. A directional antenna on the IC's node lets him reach the logistics camp four miles away.

Every netTAK runs the xTAK services the crew needs in the field: a baseTAK Lite serving a tactical map browser to anyone on the mesh, a digiTAK feeding the regional ham network into the mesh-wide TAK picture, a chatTAK letting volunteers join via their phones at any site, and an sdrTAK at the IC's node watching for inbound mutual-aid helicopters.

When one of the squad sites' uplink fails — antenna knocked over by a branch, battery low — the mesh re-routes around it within seconds. The squad's view of the TAK picture stays current. Their chat lands at the IC's tent without anyone touching a config.

**Five Pis. One self-healing mesh. A real LAN across miles of fire ground.**

That's netTAK.

---

## What you can do with netTAK

### 1. Run xTAK on every field device

<!-- IMAGE: a single netTAK Pi node in a Pelican case with the admin UI on a tablet showing baseTAK Lite, digiTAK, chatTAK, and sdrTAK all running as managed services -->

netTAK is the base operating layer for every mobile xTAK device. Pick the service that fits the role; netTAK runs it as a managed service and gives you one unified admin surface to operate the device.

- **baseTAK Lite** — a multi-user map and chat hub for the site's browser users, with a built-in tileserver for the local ATAK / WinTAK tablets (see outcome #3)
- **digiTAK** — APRS gateway from a remote site, VHF and optional HF
- **loraTAK** — Meshtastic LoRa gateway bridging mesh teams into the local TAK network
- **chatTAK** — multi-user, comms-forward TAK endpoint; the field command element runs from one node
- **sdrTAK** — ADS-B / UAT / AIS receivers at any node with line-of-sight to the sky or sea

**One install workflow for the whole suite.** Each xTAK service runs as a managed unit on netTAK. The same products you'd install on a bare Pi today, with lifecycle, config, logging, and admin handled by the platform.

**Fleet management when nodes mesh.** When netTAKs see each other, every netTAK can see the status of every other netTAK on the mesh — restart services, push config, check status across the entire field deployment from one node's admin UI.

### 2. Mesh them together — or run a single node standalone

<!-- IMAGE: diagram showing three deployment patterns side-by-side — one standalone netTAK, three netTAKs in a local Wi-Fi/Ethernet mesh, and five netTAKs in a long-range HaLow mesh across ridges -->

netTAK supports three deployment patterns. Pick the one your operation needs; mix and match across sites.

- **Standalone** — a single netTAK running its xTAK services, no mesh required. The right move for remote outposts, single-site deployments, or any role that doesn't need peer-to-peer routing. Joins the local TAK LAN like a fixed install.
- **Local mesh (Wi-Fi + Ethernet)** — multiple netTAKs auto-mesh over the Pi's built-in Wi-Fi and/or wired Ethernet. No specialty radios, no licensed spectrum, no cost beyond the Pis. For sites in close proximity or wired together.
- **Long-range mesh (with Wi-Fi HaLow)** — add 802.11ah HaLow radios to span miles between sites. Pair with directional antennas (Yagi, panel) for ridge-to-ridge and watershed-to-watershed bridges.

All three patterns share the same management surface and the same TAK protocol fidelity. Mesh behavior:

- **Self-healing** — when a node drops, traffic re-routes around it within seconds
- **Self-organizing** — no central controller, no manual mesh configuration
- **Layer-2 transparent** — the mesh appears as one LAN; standard TAK traffic crosses without translation

### 3. Distribute maps in the field, no Operations Center required

<!-- IMAGE: ATAK tablet at a forward staging area pulling a tile set directly from a Pelican-cased netTAK node sitting on a tailgate -->

Every netTAK node running baseTAK Lite includes the same tileserver that baseTAK runs at the EOC — so a forward site can distribute maps locally, without backhauling to headquarters and without an internet uplink in the field.

- **Pre-load the netTAK node** with the regional terrain you'll be operating in (MBTiles, XYZ tile sets, or other standard formats)
- **Live distribution to EUDs** — every ATAK and WinTAK tablet that joins the local mesh pulls tiles directly from the netTAK node it can reach
- **Sync from any forward site** — operators arriving at a remote staging area can download local map sets straight from the netTAK there, without ever connecting to the operations center
- **Resilient to long deployments** — if the mesh hop back to the EOC fails, the local node keeps serving maps; field teams stay current
- **Same tile format everywhere** — what baseTAK serves at the EOC, baseTAK Lite serves at every forward site. One pre-load workflow.

For wildland fire crews up a fire road, SAR teams at a remote staging area, or any forward team operating beyond the reach of the EOC's LAN: maps go with the netTAK node and serve out from there.

### 4. Add surveillance and ISR feeds

<!-- IMAGE: WinTAK at an IC tent showing an IP camera tile from a sentry point and a drone telemetry track, both routed across the mesh -->

netTAK's higher bandwidth (compared to LoRa or APRS) makes it practical to carry video and other rich feeds across a deployment.

- **IP cameras** at sentry points, gate checks, parking lots — visible to every TAK client on the mesh
- **Drone telemetry and video feeds** routed through the mesh to the IC's screen
- **Sensor packages** — weather stations, perimeter sensors, anything IP-based

---

## How it works

<!-- IMAGE: high-level architecture diagram showing netTAK as the platform layer beneath the mobile xTAK suite, and the three deployment patterns it supports -->

```
   ┌───────────────────────────────────────────────────────────┐
   │     Mobile xTAK services (running as managed units)       │
   │  ┌─────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌─────┐ │
   │  │ baseTAK │  │ digiTAK│  │ loraTAK│  │ chatTAK│  │sdrTAK│ │
   │  │  Lite   │  │        │  │        │  │        │  │     │ │
   │  └─────────┘  └────────┘  └────────┘  └────────┘  └─────┘ │
   ├───────────────────────────────────────────────────────────┤
   │                     netTAK platform                       │
   │   service lifecycle  ·  unified admin UI  ·  fleet mgmt   │
   │   mesh routing (802.11s + BATMAN)  ·  layer-2 transparent │
   ├───────────────────────────────────────────────────────────┤
   │                  Raspberry Pi 4 / Pi 5                    │
   │     built-in Wi-Fi  ·  Ethernet  ·  optional HaLow        │
   └───────────────────────────────────────────────────────────┘

   Three deployment patterns — same software stack, same admin UI:

   ┌─ Standalone ──────────────────────────────────────────────┐
   │   [ netTAK ] ── local TAK LAN ── [ ATAK / WinTAK / iTAK ] │
   │   one Pi, no mesh; remote outpost or single-site role     │
   └───────────────────────────────────────────────────────────┘

   ┌─ Local mesh (Wi-Fi + Ethernet) ───────────────────────────┐
   │   [ netTAK ]──Wi-Fi/Eth──[ netTAK ]──Wi-Fi/Eth──[ netTAK ]│
   │   close-proximity sites; no specialty radios required     │
   └───────────────────────────────────────────────────────────┘

   ┌─ Long-range mesh (with Wi-Fi HaLow) ──────────────────────┐
   │   [ netTAK ]══802.11ah HaLow (Yagi)══[ netTAK ]           │
   │       │                                  │                │
   │     Wi-Fi                              Wi-Fi              │
   │       │                                  │                │
   │   [ netTAK ]                         [ netTAK ]           │
   │   miles between sites; ridge-to-ridge bridges             │
   └───────────────────────────────────────────────────────────┘
```

Every netTAK is a Pi running the xTAK service stack as managed units. When two or more netTAKs see each other on Wi-Fi, Ethernet, or HaLow, they auto-form an 802.11s mesh routed by BATMAN — self-organizing, self-healing, no central controller. The mesh is layer-2 transparent, so standard TAK traffic crosses it without translation; every TAK client on any node sees the same network.

---

## Who uses netTAK

<!-- USE-CASE CARDS -->

**Wildland and structural fire crews** — operating across terrain where cellular and Wi-Fi don't reach. Deploy a netTAK at the ICP, at each squad base, and at logistics. Mesh them. The IC's map is everyone's map.

**Search-and-rescue teams** — running multi-day operations with multiple base sites and remote camps. Standalone netTAKs at fixed staging areas, meshed netTAKs across the search area, all serving the same TAK picture.

**EmComm teams** — deploying to disaster response where local infrastructure is down and they need their own mesh to coordinate. Bring your own LAN; the netTAKs are the LAN.

**County and state EM offices** — building a deployable comms package for incidents that outlast normal infrastructure. A cache of netTAKs in Pelican cases is a self-contained, mesh-capable TAK network on a shelf.

**Tactical teams and tactical training environments** — that need a real LAN across an operating area without depending on external connectivity. Standards-based hardware, no commercial mesh vendor in the loop.

**Public-safety auxcomm groups** — running pop-up incident command across miles of operating area. A netTAK at every site; one admin surface for the whole deployment.

---

## Specs

*Specs are firming up as the platform is validated. Final figures will land with the first public release.*

| | |
|---|---|
| **Deployment patterns** | Standalone · Local mesh (Wi-Fi + Ethernet) · Long-range mesh (with Wi-Fi HaLow) |
| **Hardware** | Raspberry Pi 5 (recommended) or Pi 4 (lower-cost nodes) |
| **Short-haul networking** | Pi built-in Wi-Fi (2.4 / 5 GHz); Ethernet; optional USB Wi-Fi 6E for higher throughput |
| **Long-range networking** | Wi-Fi HaLow (802.11ah) — USB or HAT module; Newracom NRC7292 is a common chipset *(optional; only needed for miles-class links)* |
| **Antennas** | Omnidirectional for nearby nodes; directional Yagi or panel for long HaLow hops |
| **Mesh stack** | 802.11s (IEEE) + BATMAN routing — self-organizing, self-healing, layer-2 transparent |
| **Tileserver** | Built-in via baseTAK Lite — MBTiles, XYZ, and standard tile formats |
| **xTAK services hosted** | baseTAK Lite, digiTAK, loraTAK, chatTAK, sdrTAK (all run as managed units) |
| **TAK clients supported** | ATAK, WinTAK, iTAK, baseTAK — any standard TAK client on the mesh |
| **Power** | 12V battery, solar, or generator |
| **Enclosure** | Pelican case, ammo can, or 3D-printed weatherproof box for field; bare Pi fine for fixed standalone |
| **Internet uplink** | Not required; any one node can add an uplink if available |
| **License** | (TBD — will land with first release) |
| **Version** | Pre-release. First public release expected later this year. |

---

## Frequently asked questions

### When does netTAK ship?
First public release is expected later this year. The hardware platform is validated; lab testing of the xTAK service stack and mesh behavior is underway. Watch the [repo](https://github.com/adamstern2000/xTAK) or get on the notify list above for release news.

### Is Wi-Fi HaLow required?
No. HaLow is **optional** and only matters for the long-range mesh pattern. For standalone or local-mesh deployments, the Pi's built-in Wi-Fi and Ethernet are enough. Add HaLow when you need to bridge miles between sites.

### Can I run a single netTAK standalone, without meshing anything?
Yes. Standalone is one of the three first-class deployment patterns. A single netTAK runs its xTAK services on the local TAK LAN like a fixed install — useful for remote outposts, single-site roles, or any deployment that doesn't need peer-to-peer routing.

### Which xTAK services does netTAK run?
netTAK is the base operating layer for **every mobile xTAK device**: sdrTAK, chatTAK, loraTAK, digiTAK, and baseTAK Lite all run as managed units on a netTAK. Same code as the standalone products, with lifecycle, config, logging, and admin handled by the platform.

### Is netTAK really the base layer for *all* the mobile xTAK devices?
Yes. sdrTAK, chatTAK, loraTAK, digiTAK, and baseTAK Lite are designed to run on netTAK as managed services. Same install workflow for the whole suite, one unified admin surface per node, fleet management across the mesh.

### Can the mesh run over Ethernet instead of Wi-Fi?
Yes. The local-mesh pattern supports the Pi's built-in Wi-Fi, wired Ethernet, or a mix. Sites that are wired together (a building, a vehicle, a staging area) mesh over Ethernet; sites that aren't mesh over Wi-Fi. The mesh stack doesn't care which physical media it rides on.

### Does the mesh need an internet uplink?
No. The mesh is self-contained. Any one node can add an uplink if available — for backhaul to an EOC, for APRS-IS, for off-site mirroring — but nothing on the mesh requires it.

### Does it work alongside the other xTAK products?
Yes — by design. netTAK is the platform the other mobile xTAK products run on. baseTAK at the EOC, netTAKs in the field, and any combination of digiTAK / loraTAK / chatTAK / sdrTAK services on those netTAKs all share the same TAK network.

### What hardware do I need to buy now to be ready?
A Raspberry Pi 5 (or Pi 4) is the starting point. For long-range mesh, plan for a HaLow module (USB or HAT) and directional antennas. For field roles, an enclosure and 12V power. Final bill-of-materials guidance will land with the first release.

---

## Status

**netTAK is in active development. There is no shipping release yet.** The page above describes the product we are building. Here is the honest state of the work today:

| | |
|---|---|
| **Working now (lab)** | 802.11s + BATMAN mesh between Pi nodes · Wi-Fi HaLow point-to-point links with directional antennas · xTAK services running on the platform |
| **In active development** | Multi-radio coexistence tuning (short-haul Wi-Fi + long-haul HaLow on one node) · Automated mesh provisioning (zero-touch node onboarding) · Power management and solar-friendly deployment profiles · The hardened install + admin UI |
| **Coming with first release** | Offline-tarball install · Settings-driven configuration · Fleet management across meshed nodes · First-cut docs and bill-of-materials |
| **Public release** | Expected later this year |

If you have a deployment you're trying to plan around netTAK, [open an issue](https://github.com/adamstern2000/xTAK/issues) or get in touch — early feedback shapes what ships first.

---

## Get started

<!-- CTA SECTION -->

**netTAK is not yet downloadable.** The install workflow — offline tarball, single install script, settings.json configuration — will follow the xTAK suite pattern and arrive with the first public release.

Until then, the best ways to follow progress and get ready:

- **[Watch the repo](https://github.com/adamstern2000/xTAK)** — track commits and the release milestone
- **[Get notified at first release]** — leave an email; we'll ping you when the tarball drops
- **[Read the draft docs]** — architecture notes and BOM guidance as they firm up
- **Start gathering hardware** — Pi 5s, enclosures, 12V power, and (for long-range) a HaLow module and directional antennas

---

## Related products in the xTAK suite

<!-- PRODUCT CARDS -->

- **[baseTAK](/products/baseTAK)** — the map, chat, and hub of the xTAK suite. Browser-based TAK client and SA hub for fixed installations. baseTAK Lite runs on every netTAK as the in-field map and tileserver.
- **[digiTAK](/products/digiTAK)** — TAK over amateur radio (VHF + APRS-IS, HF in development). Runs as a managed service on netTAK.
- **[loraTAK](/products/loraTAK)** — Meshtastic LoRa mesh gateway. Runs as a managed service on netTAK.
- **[sdrTAK](/products/sdrTAK)** — SDR-decoded aircraft (ADS-B 1090, UAT 978) and ships (AIS) as native TAK contacts. Runs as a managed service on netTAK.
- **[chatTAK](/products/chatTAK)** — chat-only Pi appliance; browser users become first-class TAK endpoints with no app install. Runs as a managed service on netTAK.
- **[aiTAK](/products/aiTAK)** *(in development)* — local-first LLM that joins your TAK network as an operations assistant.

---

<!-- FOOTER CTA -->

**Have a deployment in mind for netTAK?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub. Early users shape the first release.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
