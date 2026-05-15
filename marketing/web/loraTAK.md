<!--
PAGE METADATA
title: loraTAK — Meshtastic LoRa Mesh on TAK | xTAK Suite
description: loraTAK puts every Meshtastic LoRa node on your TAK map as a first-class contact. Position, telemetry, and chat round-trip in both directions. Cheap, off-grid, mesh-resilient SA for SAR, EmComm, and outdoor ops.
og_image: /img/loraTAK/hero.jpg
canonical: https://xtak.io/products/loraTAK
-->

<!-- HERO IMAGE: loraTAK Pi gateway on a folding table at a SAR base camp, Meshtastic node clipped to a pack in the foreground, WinTAK laptop showing mesh nodes as SA markers -->

# Your Meshtastic mesh
# is now a TAK network.

**Put every Meshtastic LoRa node on your TAK map as a first-class contact. Position, telemetry, and chat round-trip in both directions. Cheap, off-grid, mesh-resilient situational awareness for teams that already carry mesh radios.**

<!-- CTA BUTTONS: [Watch the 90-second demo] [Read the install guide] [View on GitHub] -->

---

<!-- TRUST STRIP -->
*Built for SAR, mountain rescue, swiftwater, EmComm, CERT, volunteer fire, and any team running Meshtastic in the field.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. loraTAK joins that same network as a peer — and bridges your Meshtastic LoRa mesh in both directions. Mesh node positions appear on TAK clients as SA markers; TAK chat reaches mesh devices as text messages; mesh users can DM TAK callsigns. [Learn more about the TAK ecosystem →](/about-tak)

---

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtakproject)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtakproject)

---

## The scenario

<!-- IMAGE: split-frame — left side a volunteer SAR team sweeping brushy hillside with Meshtastic nodes clipped to their packs; right side IC's WinTAK tablet at base camp showing the team as moving SA markers in team color -->

A volunteer SAR team is sweeping a hundred-acre property looking for a missing hiker. Twelve searchers in two-person teams, fanned out across thick brush and steep terrain. The base camp ATAK tablet at the trailhead can't reach the far side of the ridge over Wi-Fi. The handheld VHF radios are working but voice-only — base has no idea where any of the search teams actually *are*.

<!-- IMAGE: closeup of a Pi with a USB Meshtastic radio plugged in, battery pack alongside, sitting on a folding table at base camp -->

Every searcher carries a $40 Meshtastic node clipped to their pack. The team lead drops one more node at base camp, plugs it into a Pi running loraTAK, and powers the Pi off a battery. Within a minute, every Meshtastic node appears on the base camp's WinTAK map as a moving icon with the searcher's name, team color, and battery level. The IC drops a search-sector polygon in WinTAK; loraTAK pushes a one-line summary to every mesh device in the field. The searchers see the new sector on their Meshtastic display and reroute.

When a team finds a sign of the hiker, they type a chat message on their Meshtastic. It appears in the IC's WinTAK chat panel with the team's callsign and position attached. The IC DMs back.

**No cell. No Wi-Fi. No internet.** Mesh radios and a Pi.

That's loraTAK.

---

## What you can do with loraTAK

### 1. Make every mesh node a TAK contact

<!-- IMAGE: WinTAK map view with a dozen Meshtastic nodes plotted as team-colored SA markers across a topographic basemap, telemetry callout open on one of them -->

Mesh node positions flow onto ATAK, WinTAK, iTAK, and baseTAK maps in real time as SA markers. The mesh device doesn't need any TAK awareness — it just beacons its position normally, and loraTAK translates.

- **Per-node team color, role, and icon** — assign team color and 2525C symbology per Meshtastic node
- **Position liveness** — keepalive beacons keep mesh markers visible every 60 seconds even when stationary radios beacon every few hours
- **Hardware-aware icons** — Meshtastic device model (Heltec, T-Beam, RAK, etc.) flows into the TAK display
- **Synthetic positions** — mesh devices that disable GPS for privacy or battery still appear at the gateway location with a "noGPS" marker so they're chat-able
- **Telemetry on the map** — battery, voltage, channel utilization, temperature, SNR all appear in TAK position details

### 2. Run a real chat bridge in both directions

<!-- IMAGE: split-frame — left side a Meshtastic handheld with an incoming chat from "IC" on its small display; right side WinTAK chat panel showing a message from a field team with callsign and position attached -->

Mesh chat lands in TAK chat. TAK chat lands on mesh devices. DMs work both ways.

- **Mesh primary channel → TAK All Chat Rooms** — broadcast text from any mesh device reaches every TAK client on the network
- **TAK chat → mesh** — broadcast TAK chat relays to the mesh primary channel
- **Addressable DMs** — TAK users can DM individual mesh nodes by name; mesh users can DM TAK team names or callsigns
- **LoRa-aware truncation** — long chat messages auto-trim to fit the LoRa payload limit with a "…" suffix
- **Read receipts** — TAK clients get acknowledgment checkmarks when mesh nodes confirm delivery over LoRa
- **Echo prevention by UID prefix** — mesh-originated messages don't loop back through the mesh

### 3. Work alongside the rest of the xTAK suite

<!-- IMAGE: a single Pi-class gateway hosting loraTAK alongside a separate digiTAK box, both feeding the same WinTAK on the LAN — diagram or photo composite -->

loraTAK is 100% standalone — no shared code, database, or process with any other xTAK product. The only shared interface is the TAK network itself. Drop it on a LAN with baseTAK, digiTAK, sdrTAK, or chatTAK and they all see each other.

- **Run a Meshtastic gateway and an APRS gateway side-by-side** with no port collisions or echo loops
- **A mesh node's chat reaches a SAR volunteer with an APRS rig** — across LoRa, into your TAK network, out through digiTAK to APRS-IS or RF
- **Multi-NIC Pi-as-AP setups handled correctly** — loraTAK works correctly when the gateway has a wired LAN and a WiFi AP on the same Pi

---

## How it works

<!-- IMAGE: high-level architecture diagram showing field Meshtastic nodes, a Pi gateway running loraTAK, and the TAK network on LAN with ATAK and WinTAK clients -->

```
   Field (LoRa mesh)                              Base camp (TAK LAN)
   ┌─────────────────┐                            ┌──────────────────┐
   │  Meshtastic ────┐                            │   ATAK   ────┐   │
   │   (Heltec)      │                            │   WinTAK ────┤   │
   │                 │                            │   iTAK   ────┤   │
   │  Meshtastic ────┤                            │              │   │
   │   (T-Beam) ─────┤── LoRa mesh                │   baseTAK ───┤   │
   │                 │   (off-grid)               │              │   │
   │  Meshtastic ────┤                            │              │   │
   │   (RAK)         │                            │              │   │
   │                 │                            │              │   │
   │  Meshtastic ────┘                            │              │   │
   │   (no-GPS)      │                            │              │   │
   └────────┬────────┘                            └──────┬───────┘
            │                                            │
            │      ┌──────────────────────────────┐      │
            └──────┤   Pi gateway: loraTAK        ├──────┘
                   │   ─ USB Meshtastic radio     │
                   │   ─ multicast on every NIC   │
                   │   ─ COT in/out, chat in/out  │
                   └──────────────────────────────┘
```

Every loraTAK joins the TAK network on its LAN as a peer. It listens to the attached Meshtastic radio over USB serial (or TCP), translates mesh node positions, telemetry, and chat into native TAK SA and chat, and emits them onto the local network — where every TAK client sees them. Outbound TAK chat is encoded back onto the mesh primary channel, with addressable DMs to individual nodes when callsigns match. Synthetic positions keep GPS-off nodes reachable; echo prevention by UID prefix stops feedback loops between mesh and TAK.

---

## Who uses loraTAK

<!-- USE-CASE CARDS -->

**Search-and-rescue teams** — already carrying Meshtastic for low-bandwidth backup comms. Turn those devices into live SA contacts on the IC's TAK picture, with no extra hardware on the searcher.

**Outdoor and wilderness ops** — trail SAR, mountain rescue, swiftwater. LoRa propagates where cellular doesn't; loraTAK gives the IC a map view of every searcher in the field.

**EmComm teams** — using Meshtastic alongside amateur radio for short-range mesh resilience. Promote the mesh into the same TAK picture the rest of the operation runs on.

**Volunteer fire, CERT, neighborhood-watch teams** — off-grid drill needs, small hardware budget. $40 nodes per member, one Pi at base, real personnel tracking without recurring costs.

**Preppers and off-grid groups** — running a permanent Meshtastic mesh. See your nodes on a real situational-awareness map instead of a serial console.

**Public safety operations evaluating Meshtastic** — for low-cost personnel tracking. loraTAK is the path from pilot mesh to integrated SA with no app rewrites and no proprietary tracking platform.

---

## Specs

| | |
|---|---|
| **Radio layer** | LoRa via Meshtastic (shipping). Roadmap leaves room for alternate LoRa stacks — see Status below |
| **Mesh transport** | Stock Meshtastic firmware — no firmware modifications, stock channels |
| **Radio link** | USB serial or TCP to any Meshtastic-supported device (Heltec V3, T-Beam, RAK 4631, T-Echo, station-G2, etc.) |
| **TAK clients supported** | ATAK, WinTAK, iTAK, baseTAK — any standard TAK client |
| **Network model** | Multicast on every up IPv4 interface; multi-NIC Pi-as-AP supported |
| **Position liveness** | 60-second keepalive cadence; configurable silence timeout (default 4 hours) |
| **GPS-off handling** | Synthetic position at gateway with three-guard safety against overwriting real GPS fixes |
| **Echo prevention** | Deterministic UID prefix on mesh-originated COTs; inbound TAK chat with that prefix is dropped |
| **Hardware** | Raspberry Pi 4 / 5 / Zero 2 W, or any Linux/macOS box with Python 3.10+ |
| **OS** | Debian Bookworm, Ubuntu 22.04+, Raspberry Pi OS, macOS |
| **Internet required** | No — mesh ↔ TAK is fully off-grid |
| **TAK Server required** | No — talks to ATAK / WinTAK / iTAK directly on the LAN |
| **License** | (TBD — link to LICENSE) |
| **Version** | v1.3.0 (Meshtastic backend, shipping) |

---

## Frequently asked questions

### Do I need to modify Meshtastic firmware?
No. loraTAK works with stock Meshtastic firmware on stock channels. No custom builds, no flashing, no third-party fork.

### Which Meshtastic channels does loraTAK use?
The mesh primary channel for chat broadcast in and out. Per-node DMs use Meshtastic's addressable messaging. Nothing in your channel config has to change to add loraTAK to an existing mesh.

### What about nodes with GPS turned off for privacy or battery?
They still appear on TAK. loraTAK gives GPS-off nodes a synthetic position at the gateway with a "noGPS" marker so they remain chat-able. Three independent safety checks ensure a synthetic position is never overwritten by a stale read once a real GPS fix arrives.

### Which Meshtastic hardware variants are supported?
Anything stock Meshtastic firmware supports — Heltec V3, T-Beam, RAK 4631, T-Echo, station-G2, and others. The device model flows into the TAK display, so hardware-specific icons appear on the map.

### Do I need TAK Server?
No. loraTAK talks to ATAK, WinTAK, and iTAK clients directly on your LAN. TAK Server is a separate product that federates clients across WAN — not required here.

### Can I run loraTAK alongside digiTAK or aprsTAK on the same Pi?
Yes. loraTAK is 100% standalone — no shared code, database, or process with any other xTAK product. The only shared interface is the TAK network itself. A Meshtastic gateway and an APRS gateway run side-by-side with no port collisions or echo loops. A mesh user's chat can reach a SAR volunteer with an APRS rig: across LoRa, into your TAK network, out through digiTAK to APRS-IS or RF.

### Does it work with the civilian (CivTAK) builds of ATAK and WinTAK?
Yes. loraTAK speaks the same TAK protocol all builds use.

### My Pi is also the WiFi access point for my team's tablets. Does loraTAK handle that?
Yes. loraTAK enumerates all up IPv4 interfaces and binds separate multicast sockets per interface. Wired LAN plus an on-Pi WiFi AP is a supported, tested configuration — including TCP endpoint auto-detection for WinTAK DM callbacks.

### When will other LoRa stacks be supported?
The product is named for the LoRa radio layer, not a specific firmware. The shipping backend is Meshtastic; the architecture leaves room for alternate stacks — Reticulum (RNS), custom Meshtastic forks tuned for specific deployments, or future LoRa transports — without changing the TAK-facing surface. No firm date; today's adopters get Meshtastic, with more choice on the roadmap.

### What if the mesh is huge and chat gets noisy on TAK?
Liveness windowing, keepalive cadence, and a configurable silence timeout keep stationary or stale nodes from clogging the picture. Chat is bridged at the primary-channel level; DMs are addressable per-callsign so high-traffic broadcast doesn't pull a specific operator's attention.

---

## Status

| | |
|---|---|
| **Beta — shipping soon** | Meshtastic backend, v1.3.0 — Beta-stable, no pending blockers |
| **On the roadmap** | TAK chat protobuf RX (currently XML; protobuf path implemented but operator-gated); per-message-type observability counters in the admin dashboard; gateway live coordinates auto-updated from the radio's first GPS fix |
| **Future direction** | The product is named for the LoRa radio layer, not a specific firmware. The shipping backend is Meshtastic, but the architecture leaves room for alternate LoRa stacks — Reticulum (RNS), custom Meshtastic forks, or future LoRa transports — without changing the TAK-facing surface. Operators who pick loraTAK today get Meshtastic; tomorrow they may have more choice in radio firmware on the same gateway |

---

## Get started

<!-- CTA SECTION -->

loraTAK runs on a Raspberry Pi (4, 5, or even a Zero 2 W) — or any Linux/macOS box with Python 3.10+ — plus a USB Meshtastic radio. One install, edit one config, start the service.

```bash
pip3 install meshtastic markdown
sudo bash install.sh
# plug in Meshtastic radio (USB)
# edit settings.json — set serial port and team name
sudo systemctl start cot-mesh
```

Put your Pi on the same LAN as your ATAK / WinTAK / iTAK clients and your mesh appears on the map.

**[Download loraTAK v1.3.0]**   **[Read the docs]**   **[Watch the demo]**

---

## Related products in the xTAK suite

<!-- PRODUCT CARDS -->

- **[baseTAK](/products/baseTAK)** — the map, chat, and hub of the xTAK suite. Browser-based TAK client and SA hub for fixed installations.
- **[digiTAK](/products/digiTAK)** — TAK over amateur radio. VHF for the region, HF for the continent. Compose with loraTAK to bridge mesh chat onto APRS.
- **[sdrTAK](/products/sdrTAK)** — SDR-decoded aircraft (ADS-B 1090, UAT 978) and ships (AIS) as native TAK contacts.
- **[chatTAK](/products/chatTAK)** — chat-only Pi appliance. Browser users become first-class TAK endpoints with no app install.
- **[netTAK](/products/netTAK)** *(future release)* — base operating layer for every mobile xTAK device; self-healing field mesh.
- **[aiTAK](/products/aiTAK)** *(future release)* — local-first LLM that joins your TAK network as an operations assistant.

---

<!-- FOOTER CTA -->

**Have a deployment in mind?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
