# meshTAK

# Your Meshtastic mesh is now a TAK network.

**meshTAK puts every Meshtastic LoRa node on your TAK map as a first-class contact. Position, telemetry, and chat round-trip in both directions. Cheap, off-grid, mesh-resilient situational awareness for teams that already carry mesh radios.**

> **About TAK:** meshTAK joins the same multicast network that ATAK (Android), WinTAK (Windows), and iTAK (iOS) speak — and bridges your Meshtastic LoRa mesh in both directions. Mesh node positions appear on TAK clients as SA markers; TAK chat reaches mesh devices as text messages; mesh users can DM TAK callsigns. [More about the TAK ecosystem →](../about-tak.md)

---

## The scenario

A volunteer SAR team is sweeping a hundred-acre property looking for a missing hiker. Twelve searchers in two-person teams, fanned out across thick brush and steep terrain. The base camp ATAK tablet at the trailhead can't reach the far side of the ridge over Wi-Fi. The handheld VHF radios are working but voice-only — base has no idea where any of the search teams actually *are*.

Every searcher carries a $40 Meshtastic node clipped to their pack. The team lead drops one more node at base camp, plugs it into a Pi running meshTAK, and powers the Pi off a battery. Within a minute, every Meshtastic node appears on the base camp's WinTAK map as a moving icon with the searcher's name, team color, and battery level. The IC drops a search-sector polygon in WinTAK; meshTAK pushes a one-line summary to every mesh device in the field. The searchers see the new sector on their Meshtastic display and reroute.

When a team finds a sign of the hiker, they type a chat message on their Meshtastic. It appears in the IC's WinTAK chat panel with the team's callsign and position attached. The IC DMs back.

**No cell. No Wi-Fi. No internet. Mesh radios and a Pi.**

That's meshTAK.

---

## What you can do

### 1. Make every mesh node a TAK contact

Mesh node positions flow onto ATAK, WinTAK, iTAK, and baseTAK maps in real time as SA markers. The mesh device doesn't need any TAK awareness — it just beacons its position normally, and meshTAK translates.

- **Per-node team color, role, and icon** — assign team color and 2525C symbology per Meshtastic node
- **Position liveness** — keepalive beacons keep mesh markers visible every 60 seconds even when stationary radios beacon every few hours
- **Hardware-aware icons** — Meshtastic device model (Heltec, T-Beam, RAK, etc.) flows into the TAK display
- **Synthetic positions** — mesh devices that disable GPS for privacy or battery still appear at the gateway location with a "noGPS" marker so they're chat-able
- **Telemetry on the map** — battery, voltage, channel utilization, temperature, SNR all appear in TAK position details

### 2. Run a real chat bridge in both directions

Mesh chat lands in TAK chat. TAK chat lands on mesh devices. DMs work both ways.

- **Mesh primary channel → TAK All Chat Rooms** — broadcast text from any mesh device reaches every TAK client on the network
- **TAK chat → mesh** — broadcast TAK chat relays to the mesh primary channel
- **Addressable DMs** — TAK users can DM individual mesh nodes by name; mesh users can DM TAK team names or callsigns
- **LoRa-aware truncation** — long chat messages auto-trim to fit the LoRa payload limit with a "…" suffix
- **Read receipts** — TAK clients get acknowledgment checkmarks when mesh nodes confirm delivery over LoRa
- **Echo prevention by UID prefix** — mesh-originated messages don't loop back through the mesh

### 3. Work alongside the rest of the xTAK suite

meshTAK is 100% standalone — no shared code, database, or process with any other xTAK product. The only shared interface is UDP multicast. Drop it on a LAN with baseTAK, aprsTAK, sdrTAK, or chatTAK and they all see each other.

- **Run a Meshtastic gateway and an APRS gateway side-by-side** with no port collisions or echo loops
- **A mesh node's chat reaches a SAR volunteer with an APRS rig** — across LoRa, into TAK multicast, out through aprsTAK to APRS-IS or RF
- **Multi-NIC Pi-as-AP setups handled correctly** — meshTAK enumerates all up interfaces and binds separate multicast sockets per NIC

---

## Who runs meshTAK

- **Search-and-rescue teams** who already carry Meshtastic for low-bandwidth backup comms — turn those devices into live SA contacts on the IC's TAK picture.
- **Outdoor / wilderness ops** (trail SAR, mountain rescue, swiftwater) where LoRa propagates and cellular doesn't.
- **EmComm teams** who use Meshtastic in addition to amateur radio for short-range mesh resilience.
- **Volunteer fire, CERT, neighborhood-watch teams** with off-grid drill needs and a small hardware budget.
- **Preppers and off-grid groups** running a permanent Meshtastic mesh who want to see their nodes on a real situational-awareness map.
- **Public safety operations** evaluating Meshtastic as a low-cost personnel-tracking layer.

---

## Under the hood

For the engineer screening this before adoption:

- **Three-guard synthetic-position safety.** When a silent (GPS-off) mesh node gets a synthetic position at the gateway, three independent checks prevent overwriting a real GPS fix if one ever arrives: opt-in flag, in-process tracker, and inspection of the radio's persistent node database.
- **Liveness window with timeout.** Keepalive cadence is 60 seconds; markers stop emitting after a configurable silence (default 4 hours), so stale nodes age out cleanly.
- **Multi-NIC bind.** Enumerates all up IPv4 interfaces and binds separate multicast sockets per interface — solves real-world Pi-as-AP setups (wired LAN + WiFi AP) that single-bind implementations get wrong.
- **TCP endpoint auto-detection.** Picks the right IP for WinTAK DM callbacks on multi-interface hosts, or lets the operator pin it manually.
- **Echo prevention by UID prefix.** Mesh-originated COTs carry a deterministic UID prefix; the relay drops anything with that prefix on inbound TAK chat — no feedback loops.
- **No shared state with any other xTAK product.** 100% standalone. Compose by multicast, not by shared modules.

---

## What you need

- A **Raspberry Pi** (4 or 5, even a Zero 2 W works) or any Linux/macOS box with Python 3.10+.
- A **Meshtastic radio** connected over USB serial or TCP — any model the Meshtastic firmware supports (Heltec V3, T-Beam, RAK 4631, T-Echo, station-G2, etc.).
- A **LAN with multicast** (the same LAN your ATAK/WinTAK clients are on).

## What you don't need

- **No internet.** Mesh ↔ TAK works entirely off-grid.
- **No TAK Server.** meshTAK speaks TAK multicast directly to ATAK, WinTAK, and iTAK clients on the LAN.
- **No Meshtastic firmware modifications.** Stock firmware, stock channels.
- **No subscription, no cloud.** Self-hosted.

## Install

```bash
pip3 install meshtastic markdown
sudo bash install.sh
# plug in Meshtastic radio (USB)
# edit settings.json — set serial port and team name
sudo systemctl start cot-mesh
```

---

## Status

**Shipping** (v1.3.0). Production-stable; no pending blockers.

**On the roadmap:**
- TAK chat protobuf RX (currently XML; protobuf path implemented but operator-gated)
- Per-message-type observability counters in admin dashboard
- Gateway live coordinates auto-updated from the radio's first GPS fix

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**Your Meshtastic mesh is now a TAK network.**

### Social pitch — 50 words
meshTAK puts every Meshtastic LoRa node on your TAK map as a first-class contact. Position, telemetry, and chat round-trip in both directions. ATAK ↔ mesh ↔ ATAK. No cell, no Wi-Fi, no internet. Runs on a Pi with a USB Meshtastic radio. Cheap, off-grid, mesh-resilient SA for SAR, EmComm, and outdoor ops.

### Long pitch — 200 words
meshTAK is the bridge between Meshtastic LoRa mesh radios and the TAK ecosystem. Every mesh node appears on ATAK, WinTAK, iTAK, and baseTAK maps as a first-class SA contact with team color, role, telemetry, and hardware-aware iconography. Mesh chat round-trips into TAK chat in both directions — broadcast, team channel, and addressable DM all supported.

meshTAK is built for outdoor and off-grid ops: SAR teams sweeping terrain where cellular doesn't reach, EmComm crews running drills off the grid, volunteer teams with $40 Meshtastic nodes on every pack. Synthetic-position handling keeps silent (GPS-off) nodes chat-able. Liveness-window keepalives keep stationary nodes visible on the map even when they only beacon every few hours.

The product is 100% standalone — no shared code with any other xTAK product. The only shared interface is UDP multicast, which means meshTAK composes cleanly with baseTAK, aprsTAK, sdrTAK, and chatTAK on a single LAN. A mesh user's chat can reach a SAR volunteer with an APRS rig: across LoRa, into TAK multicast, out through aprsTAK to RF. Cheap, off-grid, mesh-resilient SA.

### Soul quote
> Mesh users are full participants in the comms domain.

### Audience tags
**Primary:** SAR teams, outdoor/wilderness ops, mountain rescue, EmComm with Meshtastic adoption.
**Secondary:** volunteer fire, CERT, neighborhood-watch, preppers and off-grid groups, public-safety agencies evaluating low-cost personnel tracking.
