# digiTAK

# TAK on the air. Internet not required.

**Federate two or more TAK networks over amateur radio. Add a site, grow the operating area. Built for EmComm, SAR, and any team that needs to coordinate when the WAN is gone.**

> **About TAK:** digiTAK joins the same network as ATAK (Android), WinTAK (Windows), and iTAK (iOS) — adding the worldwide APRS network as a first-class participant. Your existing TAK clients see APRS stations as native TAK contacts, and digiTAK does the protocol translation on the wire. [More about the TAK ecosystem →](../about-tak.md)

---

## The scenario

It's day two of a multi-day SAR exercise. The forward team is up a fire road with no cell, no Starlink, no LTE. Base camp is forty miles back. Both teams need to be looking at the same map — markers, search assignments, evacuation routes, last-known-positions.

You drop an digiTAK at each site. A VHF antenna on a mast. The map on the IC's WinTAK at base camp shows the forward team's markers within seconds. The forward team's ATAK tablets see the IC's search grid the moment it's drawn. When a volunteer with an APRS rig drives in from the highway, their callsign appears on every TAK client on the network as a chat-able contact. The IC can DM them from WinTAK and the message lands on RF.

No internet. No TAK Server. No cellular. Just amateur radio and a Pi at each end.

That's digiTAK.

---

## What you can do

### Run a shared TAK picture across two, three, or N sites

In **bridge mode**, multiple digiTAK gateways form a federated mesh over RF or APRS-IS. Markers placed in ATAK at site A appear in WinTAK at site B with full TAK fidelity — team color, role, COT type, custom icons all preserved. Add a digipeater between sites to extend RF reach. Add another digiTAK to grow the operating area. The network coordinates, it doesn't echo: any number of sibling gateways coexist on the same RF channel without packet collisions.

### Put every APRS station on your TAK clients

In **standalone mode**, a single digiTAK gateway puts every APRS station within reach — on the air or on the internet — onto your team's ATAK / WinTAK / iTAK / baseTAK clients as a chat-able contact. Weather stations, NWS bulletins, vehicle trackers, beacon stations — they all appear as native TAK overlays. DM a callsign from ATAK and your message lands on RF or APRS-IS, wherever that operator is hearing. Replies come back on the same path.

### Be a first-class citizen of the APRS network

digiTAK isn't a tunneled emulator. It's a real ham station: full WIDE digipeater with loop suppression, RX+TX IGate, SmartBeacon adaptive cadence, NWS weather ingest, addressable direct messages, Part 97 compliance gates with failure-safe TX disable. Your callsign. Your beacons. Your APRS identity.

---

## Who runs digiTAK

- **EmComm operators** running ARES, RACES, ACS, or local CERT — get TAK situational awareness on the bands you already use, without TAK Server or a cellular dependency.
- **SAR teams** with ham radio resources who already use APRS for vehicle tracking — promote those positions to first-class TAK markers, and add a shared map across the exercise area.
- **County / city EOCs** running off-grid drills where cell and WAN are assumed dark — federate your tabletop and field sites over a 2-meter link.
- **Public safety agencies** with ham volunteers — the bridge between your TAK ops and your auxcomm team isn't a phone call anymore. It's the same TAK picture.
- **Amateur radio operators** who want their APRS station to be a real participant in a TAK network, not a separate world.

---

## Under the hood

For the engineer screening this before adoption:

- **Lossless cross-gateway fidelity.** Team affiliation, role, COT type, custom icons, and chat attribution survive every round-trip through the APRS wire and render correctly on the peer's WinTAK, ATAK, or baseTAK.
- **Three-layer echo prevention** by `(callsign+SSID, station_number, gateway_uid)` tuple — own packets, peer-bridged-edit packets, and sibling-gateway packets each handled distinctly. No echo loops, even on busy multicast.
- **CRC16 wire-identity** on every marker — round-trip recognition survives gateway restarts.
- **Raw AX.25 dispatched byte-exact to KISS** — no text-decode mangling, no path-byte corruption.
- **Open wire format** — the TAK-APRS Protocol Extension is published as an open spec at [cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs), so independent implementations can interoperate.
- **Gate funnel architecture** — L1 transport → L2 class → L3 feature → L4 origin, short-circuit AND, verified end-to-end by a bridge QA harness.

---

## What you need

- A **Raspberry Pi 4/5** (4 GB+) or any modern Linux box. Python 3.8+, systemd.
- A **USB audio interface** (Digirig, SignaLink) into a VHF/UHF rig, or any **KISS-compatible TNC** over serial or TCP. Direwolf modem is bundled.
- An **amateur callsign** with APRS-IS passcode (or just RF, your choice).

## What you don't need

- **No internet.** Bridge-mode-over-RF works entirely off-grid.
- **No TAK Server.** digiTAK talks to ATAK, WinTAK, and iTAK clients directly on the LAN.
- **No cellular.** Solar and a battery is enough.
- **No subscription.** Offline install — every Python wheel ships in the tarball.

## Install

```bash
tar xzf cot_radio-2.1.12.tar.gz -C /opt
cd /opt/cot_radio && sudo bash install.sh
```

Admin UI on port 5101. Open `http://<host>:5101` to set callsign, SSID, gateway name, and RF mode.

---

## Status

**Shipping today** (v2.1.12). Production-ready.

**On the roadmap:**
- APRS DM ack/rej with retry queue
- TAK 911 → APRS Mic-E emergency alerts
- Bulletin TX with slot picker (BLN0–9, BLNA–Z)
- Station list view in admin UI
- NWS warning shape polygons (currently text-only)

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**TAK on the air. Internet not required.**

### Social pitch — 50 words
Two teams. Two sites. No internet. One shared TAK picture. digiTAK federates ATAK, WinTAK, and iTAK networks over amateur radio — markers, team color, chat, and DMs all round-trip with full fidelity. Runs on a Pi. Bring your callsign. EmComm, SAR, and public-safety auxcomm finally have a no-internet TAK backbone.

### Long pitch — 200 words
digiTAK is the bridge between the TAK ecosystem (ATAK, WinTAK, iTAK) and the worldwide APRS network. Run two or more digiTAK sites and they form a federated mesh over RF or APRS-IS — markers, team color, custom icons, chat, and DMs all round-trip with full TAK fidelity. Markers placed in ATAK at one site appear in WinTAK at every federated site with attribution and symbology preserved. Add a digipeater between sites to extend RF reach. Add another digiTAK to grow the operating area. No internet required.

In single-site mode, every APRS station within reach — on the air or on APRS-IS — appears on every TAK client on your LAN as a chat-able contact. DM a callsign from ATAK; the message lands on RF. Weather stations, NWS bulletins, and vehicle trackers all become native TAK overlays.

digiTAK is a real ham station: full WIDE digipeater, RX+TX IGate, SmartBeacon, Part 97 compliance gates. Runs on a Pi. Offline install. Open wire spec for third-party interop. Built for EmComm, SAR, and any team that needs to coordinate when the WAN is gone.

### Soul quote
> Lossless cross-gateway TAK fidelity. Team, role, icons, attribution — all of it survives the round-trip through the APRS wire.

### Audience tags
**Primary:** amateur radio operators, EmComm, ARES/RACES, ACS, packet-radio enthusiasts.
**Secondary:** SAR teams with ham resources, EOCs running off-grid drills, first responders with ham volunteers, preppers.
