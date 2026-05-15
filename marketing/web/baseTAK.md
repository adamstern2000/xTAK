<!--
PAGE METADATA
title: baseTAK — Run the Operation from a Browser | xTAK Suite
description: baseTAK is a full TAK map, chat, and SA hub in a browser tab — faster than WinTAK by design. Two-click broadcast. Built-in tileserver pushes offline maps to every ATAK tablet on your LAN. Self-hosted. No TAK Server. No cloud.
og_image: /img/baseTAK/hero.jpg
canonical: https://xtak.io/products/baseTAK
-->

<!-- HERO IMAGE: baseTAK running on a fanless mini-PC the size of a Game Boy, plugged into a LAN switch, browser laptops in foreground showing the TAK map, an ATAK tablet in the background -->

# Run the operation
# from a browser.

**A full TAK map, chat, and SA hub in a tab — faster than WinTAK by design. baseTAK is the home base of the xTAK suite, turning every laptop in your EOC into a first-class TAK operator alongside ATAK, WinTAK, and iTAK. With a built-in tileserver, every tablet in the field gets its maps from you, no internet required.**

<!-- CTA BUTTONS: [Watch the 90-second demo] [Read the install guide] [View on GitHub] -->

---

<!-- TRUST STRIP -->
*Built for incident commanders, EOC staff, SAR base coordinators, wildland fire and forest-service ops, fire/EMS operations, EmComm net controls, and county/city EM offices running mixed ATAK/laptop participation.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. baseTAK joins that same network as a peer — and renders the full TAK picture in any modern browser. A marker placed in baseTAK appears in ATAK and vice versa, with byte-identical wire format. [Learn more about the TAK ecosystem →](/about-tak)

---

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtakproject)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtakproject)

---

## The scenario

<!-- IMAGE: split-frame — left side EOC table with twelve people on laptops all showing the same TAK map; right side a sheriff's ATAK tablet in a cruiser with the same markers; background winter-storm operations -->

A winter storm has knocked out power across three counties. The Emergency Operations Center is staffed by twelve people — a planning section chief, two GIS analysts, three operations leads, a finance officer, and the rest support. None of them have ATAK tablets. They have laptops.

The IC opens a browser tab to `https://eoc.local`. The map fills the screen — terrain shading, county overlays, the warming-shelter polygon she drew yesterday, the staging areas she imported from a KML the state sent over. She drops a new marker for the shelter that just opened in the high school. Two clicks: pick the icon, click the spot. No "send" button. No "are you sure" dialog. Within seconds, every laptop in the EOC sees it. So does the sheriff's ATAK tablet in his cruiser. So does the WinTAK on the EM director's desktop two doors down.

<!-- IMAGE: deputy's ATAK tablet in a rural cruiser pulling map tiles over LAN from a baseTAK back at the EOC, no cell signal indicator -->

A SAR team a hundred miles away has digiTAK and a 2-meter rig. Their markers appear on the EOC map. The IC DMs their team lead from her browser. The message lands on RF.

When deputies start checking in from rural patrol with spotty cell coverage, their ATAK tablets pull terrain tiles straight from baseTAK over the EOC's LAN. The IC pre-loaded regional aerial imagery from county GIS last week, before the storm. Nobody in the field needs cell coverage to get a current map.

**Twelve operators. One shared picture. No tablets distributed. No TAK Server. No cloud.**

That's baseTAK.

---

## What you can do with baseTAK

### 1. Put a real TAK client on every laptop in the room

<!-- IMAGE: laptop showing the baseTAK browser UI with markers, routes, polygons, range rings, and a 3D terrain view; collapsible side panes visible -->

baseTAK is a full TAK map in a browser — no app to install, no per-device licensing, no tablet requirement. Anyone on the LAN with Chrome, Firefox, or Safari is a participant.

- **Native COT creation** — markers, routes with waypoints, polygons, rectangles, ellipses, circles, range rings with distance labels, bullseyes, bearing-distance lines
- **Telestrations and freehand drawings** — sketch on the map and broadcast the strokes to every TAK client
- **Editing parity** — rename, recolor, move, and re-broadcast any marker (yours or anyone else's) with original creator attribution preserved
- **Geofences on shapes** with entry/exit/elevation alerts
- **3D terrain** with EGM96 geoid elevation accuracy — meters HAE-to-MSL conversion, not approximated
- **KML / GPX / KMZ import** preserving symbology, names, and geometry
- **Data package export** (GeoJSON, KML, GPX, ZIP)

### 2. Operate at the speed of the incident

<!-- IMAGE: close-up of the curated icon picker; two-click broadcast workflow illustrated with the cursor placing a marker and the marker immediately appearing on a second screen -->

WinTAK takes four or more clicks to drop a marker and broadcast it. In a fast-moving incident, that's a tax on every decision. baseTAK is built around the operator: turn on **broadcast-by-default** and every new marker, drawing, icon, or shape is on the wire to every TAK client the moment you place it. **Two clicks. Done.**

The whole interface is built around the same principle:

- **Broadcast-by-default mode** — toggle on; every new entity is broadcast immediately. No "send" button. No "are you sure" dialog. Place it, it's shared.
- **A curated icon set** — the symbol library has been pruned down to what operators actually use in the field. Less scrolling, faster selection, lower cognitive load on the worst day of the year.
- **Working panes designed around the map** — UI chrome is collapsible and minimal so the map gets the screen. You see more of what matters.
- **Keyboard shortcuts** for every common action — drop a marker, draw a route, send chat without leaving the keys.

An IC reacts at the speed of the incident, not at the speed of the menu.

### 3. Be the authoritative SA source for the deployment, even on imperfect networks

<!-- IMAGE: diagram showing baseTAK as a hub with heartbeat re-broadcast pulses going out to multiple clients across a flaky Wi-Fi network; dropped packets recovered by the next heartbeat -->

baseTAK is designed for the **imperfect networks** that operations actually run on — Wi-Fi APs that drop packets, mesh hops that flake out, devices that come and go. Not a passive viewer that mirrors whichever ATAK device shouted last; not a system that requires every packet to arrive intact.

- **Heartbeat re-broadcast, configurable per type.** By default, every marker, icon, drawing, and shape is re-transmitted on a timer — and the cadence is configurable **per item type**. Markers at one rate, drawings at another, range rings at a third, all set to what your operation needs. When the network drops a packet, the next heartbeat catches the missing client up; maps stay current through packet loss, brief outages, and device dropouts. Operators who prefer single-shot transmission can disable heartbeats per type.
- **Per-field echo filtering** — when the same COT comes back from a different bridge (APRS round-trip, mesh ingest), only genuine field changes update the record; the rest is dropped silently.
- **Per-COT broadcast control** — for the items that *shouldn't* go on the wire by default. Disable broadcast per-COT; the item lives in the database and on this map but never on the network.
- **SQLite-backed persistence** — the picture survives a restart, a power cycle, a swap of the laptop, a swap of the IC.

### 4. Be the offline map server for every TAK device in the field

<!-- IMAGE: ATAK tablet, WinTAK laptop, and browser client all pulling map tiles from a baseTAK over the LAN, with a "no internet required" badge -->

baseTAK has a built-in tileserver. Pre-load it with any terrain you'll be operating in — county, state, national forest, watershed, port complex — at any zoom level you need. Tiles serve locally over the LAN, so every ATAK tablet, WinTAK install, or browser client points at *your* baseTAK for its maps.

- **Preload any area** — drop MBTiles, standard XYZ tile sets, or other common formats into baseTAK and they're served on the LAN immediately
- **EUD map distribution on-site** — ATAK and WinTAK clients on the same LAN download their map tiles from baseTAK. No need to provision tablets at headquarters before deployment, no need for an internet uplink in the field.
- **Any zoom level** — overview down to street level, or higher if you have the source data
- **Multiple basemaps** — aerial imagery, USGS topo, OpenStreetMap, FEMA hazard layers, anything in standard tile formats
- **Fully offline** — no internet at install, no internet at deployment, no internet ever after the first map prep

For SAR coordinators, wildland fire ops, and disaster-response ICs arriving at an operating area with no cell coverage: bring a baseTAK preloaded with the regional maps, plug in the LAN, and every tablet that joins the network gets the same map the IC is looking at.

**And it extends to the field.** baseTAK Lite — the same tileserver capability, running on a [netTAK](/products/netTAK) field node — distributes maps to every ATAK tablet at a forward site, no backhaul to the EOC required. Pre-load the netTAK before you deploy; operators arriving at a remote staging area sync their tablets from the local node. The map workflow is the same at the EOC and a hundred miles into the operating area.

### 5. Compose with the rest of the xTAK suite, no glue required

<!-- IMAGE: baseTAK on a LAN with digiTAK, loraTAK, sdrTAK, chatTAK, and netTAK nodes all plugged in; markers from each appear on the same TAK map -->

Drop any other xTAK product on the same LAN and it just shows up.

- **digiTAK** feeds APRS stations and bridged sites onto your map
- **loraTAK** feeds Meshtastic LoRa node positions and chat
- **sdrTAK** feeds decoded aircraft (1090 ES, UAT 978) and ships (AIS)
- **chatTAK** browser users appear as their own first-class TAK endpoints
- **netTAK** *(future release)* extends the LAN over a self-healing 802.11s + BATMAN mesh

Every product speaks the same TAK protocol on the same network. There is no glue. There is no integration tax. Add a product, and baseTAK sees it.

---

## How it works

<!-- IMAGE: high-level architecture diagram showing baseTAK as a hub serving browser clients and ATAK/WinTAK tablets, with optional bridges from digiTAK/loraTAK/sdrTAK feeding it -->

```
                           Operators on laptops
                          (Chrome / Firefox / Safari)
                                    │
            ┌───────────────────────┼───────────────────────┐
            │                       │                       │
       browser tab              browser tab             browser tab
            │                       │                       │
            └───────────────────────┼───────────────────────┘
                                    │  HTTPS (LAN)
                                    │
                          ┌─────────┴─────────┐
                          │     baseTAK       │
                          │  ┌─────────────┐  │
                          │  │  takmap UI  │  │
                          │  ├─────────────┤  │
                          │  │ cot_bridge  │  │
                          │  │  (TAK core) │  │
                          │  ├─────────────┤  │
                          │  │ tileserver  │  │
                          │  │  (MBTiles)  │  │
                          │  ├─────────────┤  │
                          │  │  SQLite     │  │
                          │  └─────────────┘  │
                          └───┬──────┬────┬───┘
                              │      │    │
        TAK (CoT) on the LAN  │      │    │  Map tiles on the LAN
                ┌─────────────┘      │    └─────────────┐
                │                    │                  │
          ┌─────┴─────┐        ┌─────┴─────┐      ┌─────┴─────┐
          │   ATAK    │        │  WinTAK   │      │   ATAK /  │
          │  tablets  │        │  laptops  │      │  WinTAK   │
          └───────────┘        └───────────┘      │  (tiles)  │
                                                  └───────────┘

   Optional bridges (each just another peer on the LAN):

       digiTAK ──► APRS stations, HF/VHF-bridged sites
       loraTAK ──► Meshtastic LoRa nodes
       sdrTAK  ──► ADS-B (1090 ES, UAT 978), AIS
       chatTAK ──► browser-only chat endpoints
       netTAK  ──► self-healing 802.11s + BATMAN field mesh
```

baseTAK joins the TAK network on its LAN as a peer. Browser clients connect over HTTPS for the UI; ATAK, WinTAK, and iTAK clients connect over standard TAK transports. The built-in tileserver hands map tiles to anything on the LAN that asks. Bridges from digiTAK, loraTAK, sdrTAK, chatTAK, and netTAK plug into the same network — every COT they emit shows up on every client, including baseTAK's browser tabs.

---

## Who uses baseTAK

<!-- USE-CASE CARDS -->

**Incident commanders running fast-moving incidents** — fires, mass-casualty, active threats, severe weather. The two-click marker workflow turns hours of clicks into seconds of decisions.

**EOC and command post staff** running coordination cells from laptops — get full TAK SA without distributing tablets to every section chief.

**Wildland fire and forest-service ops** running multi-day deployments in remote operating areas — preload baseTAK with the regional maps before you leave; every tablet on the LAN at base camp gets them.

**Search-and-rescue base coordinators** managing assignments, ICS-204s, and team tracking from a fixed laptop while the field uses ATAK.

**Fire and EMS operations** running shift-long incidents who want a wall-mounted map a whole room can see, not a 10-inch tablet.

**EmComm net controls** running ARES/RACES/ACS missions who need TAK ground truth in front of every position at the EOC table.

**County and city EM offices** doing tabletop and full-scale exercises with mixed ATAK/laptop participation.

**Anyone running an off-grid deployment** who wants a shared map without TAK Server, cellular, or cloud dependencies.

---

## Specs

| | |
|---|---|
| **Role** | Map, chat, and SA hub — home base of the xTAK suite |
| **UI** | Browser-based (Chrome, Firefox, Safari, Edge); no app install, no per-device licensing |
| **TAK clients supported** | ATAK, WinTAK, iTAK — full wire-format parity with WinTAK |
| **Map drawing** | Markers, routes with waypoints, polygons, rectangles, ellipses, circles, range rings, bullseyes, bearing-distance lines, freehand telestrations |
| **Map import / export** | KML, KMZ, GPX in; GeoJSON, KML, GPX, ZIP out |
| **3D terrain** | EGM96 geoid for HAE ↔ MSL conversion (not approximated) |
| **Tileserver** | Bundled tileserver-gl; serves MBTiles and standard XYZ tile sets to ATAK, WinTAK, and browsers on the LAN |
| **Resilience** | Per-type heartbeat re-broadcast; per-field echo filtering; per-COT broadcast control; SQLite persistence |
| **Delivery** | SSE (server-sent events), not polling; database-level filtering; server-side stale cleanup |
| **Rendering** | GPU-rendered labels via MapLibre GL symbol layers — lockstep label tracking on touch devices |
| **Hardware** | Raspberry Pi 4/5, fanless mini-PC, or any handheld Linux box (yes, even one the size of a Game Boy). 3.5 GB RAM, ~500 MB disk |
| **Network** | LAN only; no TAK Server, no cloud, no cellular dependency |
| **Install** | `cot_bridge` package; bundles the takmap UI and nginx HTTPS termination |
| **Version** | cot_bridge v0.45.x (shipping) |

---

## Frequently asked questions

### Do I need TAK Server?
No. baseTAK talks to your ATAK, WinTAK, and iTAK clients directly on the LAN. TAK Server is a separate product for federating clients across WAN — baseTAK replaces it for the LAN case and composes with digiTAK for off-LAN federation over radio.

### Does it work with the civilian (CivTAK) builds of ATAK and WinTAK?
Yes. baseTAK speaks the same TAK protocol all builds use. Every emitted COT is byte-identical to what WinTAK produces — we reference WinTAK packet captures for wire-format validation.

### What tile formats does the built-in tileserver accept?
MBTiles and standard XYZ tile sets — aerial imagery, USGS topo, OpenStreetMap, FEMA hazard layers, anything in standard tile formats. Drop them in and they're served on the LAN immediately.

### Can I run baseTAK alongside an active field deployment?
Yes — that's the design. Run baseTAK at the EOC for the laptop-based coordination cell; let ATAK and WinTAK clients on the LAN pull their maps from its tileserver. Run a netTAK at a forward site to extend the same workflow into the field without an EOC backhaul.

### Is a browser-placed marker a second-class TAK citizen?
No. A marker placed from the web looks and behaves identically to one placed from WinTAK — same wire format, same UI, same database record. Web-originated COTs are first-class on the network.

### How does baseTAK handle a flaky LAN or Wi-Fi that drops packets?
Per-type heartbeat re-broadcast. Markers, drawings, range rings, and other entity types each have their own configurable re-transmit cadence; when a packet is dropped, the next heartbeat catches the missing client up. Operators who prefer single-shot transmission can disable heartbeats per type.

### How many concurrent operators can it handle?
baseTAK is designed for dozens of concurrent TAK devices and web clients with sub-second latency, delivered over SSE (not polling), with database-level filtering and server-side stale cleanup.

### Does it work alongside the other xTAK products?
Yes. digiTAK (APRS / HF), loraTAK (Meshtastic), sdrTAK (ADS-B / AIS), chatTAK (browser chat), and netTAK (field mesh) all share the same TAK network by design. Drop them on the same LAN and they compose.

### What if I lose the host machine mid-operation?
The SQLite database is the picture. Swap the laptop, swap the IC, swap the Pi — restore the database and you're back. Persistence is designed for shift changes, power cycles, and hardware swaps.

### Is there a subscription or per-device license?
No. baseTAK is self-hosted. No subscription, no licensing, no per-device fees.

---

## Status

| | |
|---|---|
| **Beta — shipping soon** | baseTAK on cot_bridge v0.45.x — validated in pilot deployments |
| **Future release** | TCP relay / federation for inter-EOC TAK bridging without TAK Server |
| **On the roadmap** | AI agent integration ([aiTAK](/products/aiTAK)) as a planning and SA assistant inside baseTAK; cross-gateway APRS object round-trip operational test |

---

## Get started

<!-- CTA SECTION -->

baseTAK ships as the `cot_bridge` package; the takmap UI is bundled. Standard install on a Linux box gets you the backend service, nginx HTTPS termination, and the web UI on the host's domain.

```bash
# Install cot_bridge (bundles the takmap UI)
sudo bash install.sh
```

Open a browser to `https://<host>.local` and you're operating. Drop MBTiles into the tileserver directory to start serving offline maps to every TAK client on the LAN.

*Detailed install docs: see the [cot_bridge repository](https://github.com/adamstern2000/cot_bridge).*

**[Read the install guide]**   **[Read the docs]**   **[Watch the demo]**

---

## Related products in the xTAK suite

<!-- PRODUCT CARDS -->

- **[digiTAK](/products/digiTAK)** — TAK over amateur radio. VHF for the region, HF for the continent. Federate baseTAK installs across counties or across the country.
- **[loraTAK](/products/loraTAK)** — Meshtastic LoRa mesh gateway. Feeds LoRa node positions and chat onto your baseTAK map.
- **[chatTAK](/products/chatTAK)** — chat-only Pi appliance. Browser users become first-class TAK endpoints on the same network as baseTAK.
- **[sdrTAK](/products/sdrTAK)** — SDR-decoded aircraft (ADS-B 1090, UAT 978) and ships (AIS) as native TAK contacts feeding your baseTAK picture.
- **[netTAK](/products/netTAK)** *(future release)* — self-healing 802.11s + BATMAN field mesh, with baseTAK Lite tileserver at each forward node.
- **[aiTAK](/products/aiTAK)** *(future release)* — local-first LLM that joins your TAK network as an operations assistant inside baseTAK.

---

<!-- FOOTER CTA -->

**Have a deployment in mind?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
