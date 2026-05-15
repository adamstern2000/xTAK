# baseTAK

# Run the operation from a browser.

**A full TAK map, chat, and SA hub in a tab — built for the operator, faster than WinTAK by design. baseTAK is the home base of the xTAK suite, turning every laptop in your EOC into a first-class TAK operator alongside ATAK, WinTAK, and iTAK. With a built-in tileserver, every tablet in the field gets its maps from you, no internet required.**

> **About TAK:** baseTAK joins the same network as ATAK (Android), WinTAK (Windows), and iTAK (iOS) — and renders the full TAK picture in any modern browser. A marker placed in baseTAK appears in ATAK and vice versa, with byte-identical wire format. [More about the TAK ecosystem →](../about-tak.md)

---

## The scenario

A winter storm has knocked out power across three counties. The Emergency Operations Center is staffed by twelve people — a planning section chief, two GIS analysts, three operations leads, a finance officer, and the rest support. None of them have ATAK tablets. They have laptops.

The IC opens a browser tab to `https://eoc.local`. The map fills the screen — terrain shading, county overlays, the warming-shelter polygon she drew yesterday, the staging areas she imported from a KML the state sent over. She drops a new marker for the shelter that just opened in the high school. Two clicks: pick the icon, click the spot. No "send" button. No "are you sure" dialog. Within seconds, every laptop in the EOC sees it. So does the sheriff's ATAK tablet in his cruiser. So does the WinTAK on the EM director's desktop two doors down.

A SAR team a hundred miles away has digiTAK and a 2-meter rig. Their markers appear on the EOC map. The IC DMs their team lead from her browser. The message lands on RF.

When deputies start checking in from rural patrol with spotty cell coverage, their ATAK tablets pull terrain tiles straight from baseTAK over the EOC's LAN. The IC pre-loaded regional aerial imagery from county GIS last week, before the storm. Nobody in the field needs cell coverage to get a current map.

**Twelve operators. One shared picture. No tablets distributed. No TAK Server. No cloud.**

That's baseTAK.

---

## What you can do

### 1. Put a real TAK client on every laptop in the room

baseTAK is a full TAK map in a browser — no app to install, no per-device licensing, no tablet requirement. Anyone on the LAN with Chrome, Firefox, or Safari is a participant.

- **Native COT creation** — markers, routes with waypoints, polygons, rectangles, ellipses, circles, range rings with distance labels, bullseyes, bearing-distance lines
- **Telestrations and freehand drawings** — sketch on the map and broadcast the strokes to every TAK client
- **Editing parity** — rename, recolor, move, and re-broadcast any marker (yours or anyone else's) with original creator attribution preserved
- **Geofences on shapes** with entry/exit/elevation alerts
- **3D terrain** with EGM96 geoid elevation accuracy — meters HAE-to-MSL conversion, not approximated
- **KML / GPX / KMZ import** preserving symbology, names, and geometry
- **Data package export** (GeoJSON, KML, GPX, ZIP)

### 2. Operate at the speed of the incident

WinTAK takes four or more clicks to drop a marker and broadcast it. In a fast-moving incident, that's a tax on every decision. baseTAK is built around the operator: turn on **broadcast-by-default** and every new marker, drawing, icon, or shape is on the wire to every TAK client the moment you place it. **Two clicks. Done.**

The whole interface is built around the same principle:

- **Broadcast-by-default mode** — toggle on; every new entity is broadcast immediately. No "send" button. No "are you sure" dialog. Place it, it's shared.
- **A curated icon set** — the symbol library has been pruned down to what operators actually use in the field. Less scrolling, faster selection, lower cognitive load on the worst day of the year.
- **Working panes designed around the map** — UI chrome is collapsible and minimal so the map gets the screen. You see more of what matters.
- **Keyboard shortcuts** for every common action — drop a marker, draw a route, send chat without leaving the keys.

An IC reacts at the speed of the incident, not at the speed of the menu.

### 3. Be the authoritative SA source for the deployment

baseTAK is designed to be the *durable* picture of the operation — not a passive viewer that mirrors whichever ATAK device shouted last.

- **Heartbeat re-transmission** every 30 seconds keeps owned markers alive on the network even if a contributing device drops off
- **Per-field echo filtering** — when the same COT comes back from a different bridge (APRS round-trip, mesh ingest), only genuine field changes update the record; the rest is dropped silently
- **Per-COT broadcast control** — for the items that *shouldn't* go on the wire by default. Disable broadcast per-COT; the item lives in the database and on this map but never on the network.
- **SQLite-backed persistence** — the picture survives a restart, a power cycle, a swap of the laptop, a swap of the IC

### 4. Be the offline map server for every TAK device in the field

baseTAK has a built-in tileserver. Pre-load it with any terrain you'll be operating in — county, state, national forest, watershed, port complex — at any zoom level you need. Tiles serve locally over the LAN, so every ATAK tablet, WinTAK install, or browser client points at *your* baseTAK for its maps.

- **Preload any area** — drop MBTiles, standard XYZ tile sets, or other common formats into baseTAK and they're served on the LAN immediately
- **EUD map distribution on-site** — ATAK and WinTAK clients on the same LAN download their map tiles from baseTAK. No need to provision tablets at headquarters before deployment, no need for an internet uplink in the field.
- **Any zoom level** — overview down to street level, or higher if you have the source data
- **Multiple basemaps** — aerial imagery, USGS topo, OpenStreetMap, FEMA hazard layers, anything in standard tile formats
- **Fully offline** — no internet at install, no internet at deployment, no internet ever after the first map prep

For SAR coordinators, wildland fire ops, and disaster-response ICs arriving at an operating area with no cell coverage: bring a baseTAK preloaded with the regional maps, plug in the LAN, and every tablet that joins the network gets the same map the IC is looking at.

### 5. Compose with the rest of the xTAK suite, no glue required

Drop any other xTAK product on the same LAN and it just shows up.

- **digiTAK** feeds APRS stations and bridged sites onto your map
- **meshTAK** feeds Meshtastic LoRa node positions and chat
- **sdrTAK** feeds decoded aircraft (1090 ES, UAT 978) and ships (AIS)
- **chatTAK** browser users appear as their own first-class TAK endpoints
- **netTAK** *(in development)* extends the LAN over a self-healing 802.11s + BATMAN mesh

Every product speaks the same TAK protocol on the same network. There is no glue. There is no integration tax. Add a product, and baseTAK sees it.

---

## Who runs baseTAK

- **Incident commanders running fast-moving incidents** — fires, mass-casualty, active threats, severe weather. The two-click marker workflow turns hours of clicks into seconds of decisions.
- **EOC and command post staff** running coordination cells from laptops — get full TAK SA without distributing tablets to every section chief.
- **Wildland fire and forest-service ops** running multi-day deployments in remote operating areas — preload baseTAK with the regional maps before you leave; every tablet on the LAN at base camp gets them.
- **Search-and-rescue base coordinators** managing assignments, ICS-204s, and team tracking from a fixed laptop while the field uses ATAK.
- **Fire and EMS operations** running shift-long incidents who want a wall-mounted map a whole room can see, not a 10-inch tablet.
- **EmComm net controls** running ARES/RACES/ACS missions who need TAK ground truth in front of every position at the EOC table.
- **County and city EM offices** doing tabletop and full-scale exercises with mixed ATAK/laptop participation.
- **Anyone running an off-grid deployment** who wants a shared map without TAK Server, cellular, or cloud dependencies.

---

## Under the hood

For the engineer screening this before adoption:

- **100% TAK protocol fidelity.** Every emitted COT is byte-identical to what WinTAK produces. The codebase references WinTAK packet captures for wire-format validation; when our implementation diverges, we change our implementation, not the protocol.
- **Sub-second latency at scale** — designed to handle dozens of concurrent TAK devices and web clients with SSE delivery (not polling). Database-level filtering, server-side stale cleanup.
- **EGM96 geoid** for precise WGS84 HAE ↔ MSL conversion. Stores HAE, displays MSL — ATAK parity for elevation.
- **GPU-rendered labels** via MapLibre GL symbol layers — labels move in lockstep with the map on touch devices (iPad, Android tablets) where DOM overlays lag.
- **Web-originated COTs are first-class.** "[A marker placed from the web] looks and behaves identically to one placed from WinTAK." No second-class citizen on the wire, in the UI, or in the database.
- **Echo prevention designed in**, not bolted on. Cross-gateway round-trips (APRS, mesh) don't accumulate duplicate or drift entries.
- **Built-in tileserver** — bundled tileserver-gl serves MBTiles and standard XYZ tile sets to ATAK, WinTAK, and browser clients over the LAN. Preload terrain at install time; field tablets fetch tiles without any uplink.
- **Two-click broadcast workflow** — UI is designed around minimum-click placement. Operator preferences include broadcast-by-default, keyboard-shortcut-everything, and a curated symbol library, all configurable per-operator.

---

## What you need

- A **Linux server** (3.5 GB RAM, ~500 MB disk for the codebase + SQLite). A fanless mini-PC is plenty.
- A **LAN** that your TAK clients share.
- **Modern browser** on every client — Chrome, Firefox, Safari, Edge. No app install.

## What you don't need

- **No TAK Server.** baseTAK talks to your TAK clients directly on the LAN.
- **No cloud.** Everything runs on the LAN; the SQLite database is yours.
- **No tablets.** Works with ATAK / WinTAK / iTAK, also works without.
- **No subscription, no licensing.** Self-hosted.

## Install

baseTAK ships as the cot_bridge package; the takmap UI is bundled. Standard install on a Linux box gets you the backend service, nginx HTTPS termination, and the web UI on the host's domain.

*Detailed install docs: see the [cot_bridge repository](https://github.com/adamstern2000/cot_bridge).*

---

## Status

**Shipping** (current production builds). Battle-tested through cot_bridge v0.45.x.

**On the roadmap:**
- TCP relay / federation for inter-EOC TAK bridging without TAK Server
- AI agent integration ([aiTAK](aiTAK.md)) as a planning and SA assistant inside baseTAK
- Cross-gateway APRS object round-trip operational test

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**Run the operation from a browser.**

### Social pitch — 50 words
A full TAK map, chat, and SA hub in a browser tab — and faster to operate than WinTAK by design. Two clicks to drop a marker and broadcast. Built-in tileserver pushes offline maps to every ATAK tablet on the LAN. The home base of the xTAK suite. Self-hosted. No TAK Server. No cloud.

### Long pitch — 200 words
baseTAK is the home base of the xTAK suite — a full TAK map, chat, and SA hub that runs in any browser, and is *faster to operate* than WinTAK by design. Where WinTAK takes four or more clicks to drop a marker and broadcast it, baseTAK does it in two. Broadcast-by-default mode, a curated icon set, collapsible UI chrome, and keyboard shortcuts everywhere: the operator reacts at the speed of the incident, not the speed of the menu.

baseTAK has a built-in tileserver. Pre-load it with the terrain you'll be operating in, and every ATAK tablet, WinTAK install, and browser client on the LAN gets its maps from you — no internet required. For wildland fire, SAR, and disaster-response teams arriving at an operating area without cell coverage, this is the difference between every-tablet-has-a-current-map and nobody-can-see-their-AOR.

Built to be the durable SA source for the deployment, not a passive viewer: heartbeat re-transmission, per-field echo filtering, SQLite persistence. Composes by network with the rest of the xTAK suite. Self-hosted on any Linux box. No TAK Server, no cloud, no per-device licensing.

### Soul quote
> The operator reacts at the speed of the incident, not the speed of the menu.

*(Alternate, original):* A marker placed from the web looks and behaves identically to one placed from WinTAK.

### Audience tags
**Primary:** incident commanders, EOC operators, SAR base coordinators, fire/EMS operations, EmComm net controls, public-safety EM offices.
**Secondary:** amateur radio operators running base stations, preppers and off-grid teams, integrators evaluating TAK without committing to TAK Server.
