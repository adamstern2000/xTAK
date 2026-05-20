# digiTAK

# TAK on the air. Internet not required.

**Federate two or more TAK networks over amateur radio — VHF for regional reach, HF for the continent. Run both transports simultaneously from one box. Built for EmComm, SAR, ARES districts, and any team that needs to coordinate when the WAN is gone.**

> **About TAK:** digiTAK joins the same network as ATAK (Android), WinTAK (Windows), and iTAK (iOS) — adding the worldwide APRS network as a first-class participant. Your existing TAK clients see APRS stations as native TAK contacts, and digiTAK does the protocol translation on the wire. [More about the TAK ecosystem →](../about-tak.md)

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtak)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtak)

---

## The scenario

It's day two of a multi-day SAR exercise. The forward team is up a fire road with no cell, no Starlink, no LTE. Base camp is forty miles back. Both teams need to be looking at the same map — markers, search assignments, evacuation routes, last-known-positions.

You drop a digiTAK at each site. A VHF antenna on a mast. The map on the IC's WinTAK at base camp shows the forward team's markers within seconds. The forward team's ATAK tablets see the IC's search grid the moment it's drawn. When a volunteer with an APRS rig drives in from the highway, their callsign appears on every TAK client on the network as a chat-able contact. The IC can DM them from WinTAK and the message lands on RF.

Meanwhile, the state EOC five hundred miles away has its own digiTAK with an HF rig. The duty officer there sees the exercise's team positions on her WinTAK — passed across the ionosphere by your digiTAK's *second* radio port, which is hooked to an HF radio. She can chat with the field IC over HF. Markers and full fidelity stay regional on VHF; positions and chat cross the continent on HF. Same digiTAK. Both radios. Simultaneously.

No internet. No TAK Server. No cellular. Just amateur radio and a Pi at each end.

That's digiTAK.

---

## What you can do

### Run a shared TAK picture across two, three, or N sites

In **bridge mode**, multiple digiTAK gateways form a federated mesh over RF or APRS-IS. Markers placed in ATAK at site A appear in WinTAK at site B with full TAK fidelity — team color, role, COT type, custom icons all preserved. Add a digipeater between sites to extend RF reach. Add another digiTAK to grow the operating area. The network coordinates, it doesn't echo: any number of sibling gateways coexist on the same RF channel without re-emitting or re-digipeating each other's traffic.

### Put every APRS station on your TAK clients

In **standalone mode**, a single digiTAK gateway puts every APRS station within reach — on the air or on the internet — onto your team's ATAK / WinTAK / iTAK / baseTAK clients as a chat-able contact. Weather stations, NWS bulletins, vehicle trackers, beacon stations — they all appear as native TAK overlays. DM a callsign from ATAK and your message lands on RF or APRS-IS, wherever that operator is hearing. Replies come back on the same path.

**The reach is bigger than your antenna.** On standard APRS frequencies (144.39 MHz in North America, regional equivalents elsewhere), your digiTAK joins a global network of volunteer-operated **APRS digipeaters** that relay WIDE-tagged packets onward. Your TAK network's reach becomes whatever the digipeater infrastructure can carry — often dozens or hundreds of miles beyond your own antenna's line of sight, with zero additional hardware on your end.

**APRS-only operators are full participants — in both directions.** An operator with nothing more than an APRS-capable radio sees the picture, is seen, and chats with the operation — all over APRS, no TAK client required.

- They appear on TAK clients as native TAK contacts (position, bulletins, callsign attribution preserved).
- They see the TAK operation on their APRS gear — TAK users' positions are broadcast out to APRS as standard objects, so the ham with just a handheld and an APRS map display sees the team on their screen, no TAK install.
- They chat across the bridge — an APRS message addressed to a TAK callsign lands in TAK chat. The IC's reply comes back to the ham's APRS rig. Bulletins, NWS alerts, group messages all reach across.
- The auxcomm net stops being parallel infrastructure — APRS hams aren't a separate radio room hanging off the side of the operation; they're first-class participants on the same shared picture as the ATAK / WinTAK clients.
- For EmComm activations, SAR call-outs, and ad-hoc events: volunteers show up with the rig they already own, beacon their callsign, and they're on the operation. **No app. No new gear. No new training.**

### Bridge WinTAK islands across the continent on HF

Hook a 2-meter rig to digiTAK and you reach the next county over VHF. Hook an HF rig to the *same* digiTAK and you reach the next state — or the next country — over the ionosphere. Both transports run simultaneously from one box.

HF is a narrower channel by physics: positions for participants and chat, not the full marker/icon/symbology fidelity available on VHF. digiTAK encodes HF traffic with a binary compression codec (~20 bytes per position vs. full COT XML) so it actually fits the band. But it carries far enough that two WinTAK installs a thousand miles apart can share each other's team positions and trade chat over the air. State EOC sees state EOC. ARES district sees ARES region. National mutual-aid coordinators see all of them. WinTAK islands stop being islands.

- **Multi-transport, one box** — APRS-IS, VHF/UHF, and HF all from a single digiTAK
- **HF as the continental backbone** — positions and chat across hundreds to thousands of miles via HF digital modes
- **Compressed for the band** — binary codec fits a position update into ~20 bytes; HF gating has its own rate limits separate from APRS
- **Narrower feature set on HF, by design** — markers, shapes, and icons stay on VHF and APRS-IS; positions and chat cross HF
- **All transports concurrent** — local APRS stations on VHF, regional peer on VHF/UHF, distant peer on HF, internet stations via APRS-IS — same digiTAK, same moment

*HF transport is in active development — see Status below.*

### Modernize your APRS station with a TAK client interface

For ham operators tired of UI-View32, AGW, YAAC, or any other legacy APRS software — old UIs, often unsupported on modern operating systems, increasingly hard to keep running — digiTAK is the modern replacement. The user interface is *any* TAK client: ATAK on your phone, WinTAK on your laptop, iTAK on your tablet, baseTAK in any browser. Same map, same chat, same symbology that first responders use, now as your APRS UI.

- **Modern map providers and UI** — current basemaps, click-to-message, fast click paths, real symbology
- **Connect a USB GPS** to the digiTAK and it becomes a mobile APRS tracker — beacon your vehicle from the dashboard, your pack from a hike, your shack from a fixed install
- **Every APRS station as a TAK contact** — DM by callsign, send and receive bulletins, monitor weather stations, watch the local APRS net
- **Run alongside or in place of your legacy software** — digiTAK speaks the standard APRS wire format on the air; keep your favorite legacy client if you want, or retire it

For the ham who's been quietly running UI-View32 on a Windows XP VM for the last decade: there's finally a modern path forward, with no loss of the APRS station you've built.

### Be a first-class citizen of the APRS network

digiTAK isn't a tunneled emulator. It's a real ham station: full WIDE digipeater with loop suppression, RX+TX IGate, SmartBeacon adaptive cadence, NWS weather ingest, addressable direct messages, Part 97 compliance gates with failure-safe TX disable. Your callsign. Your beacons. Your APRS identity.

---

## Who runs digiTAK

- **EmComm operators** running ARES, RACES, ACS, or local CERT — get TAK situational awareness on the bands you already use, without TAK Server or a cellular dependency.
- **State and national EmComm coordinators** — ARES districts, SATERN, MARS-affiliated nets, DHS mutual-aid programs — federate WinTAK installs across state lines on HF instead of trying to keep an internet VPN alive through a disaster.
- **SAR teams** with ham radio resources who already use APRS for vehicle tracking — promote those positions to first-class TAK markers, and add a shared map across the exercise area.
- **County / city EOCs** running off-grid drills where cell and WAN are assumed dark — federate your tabletop and field sites over a 2-meter link, and link to neighboring counties' EOCs on HF.
- **Public safety agencies** with ham volunteers — the bridge between your TAK ops and your auxcomm team isn't a phone call anymore. It's the same TAK picture.
- **Amateur radio operators replacing legacy APRS software** (UI-View32, AGW, YAAC, and others) — keep your APRS station, retire the old UI, run any TAK client as the front end. Add a USB GPS and your digiTAK is a mobile APRS tracker too.
- **Any licensed ham with an APRS rig** — your existing handheld, mobile, or base station appears on the TAK map and in TAK chat the moment you key up. No new gear, no new configuration. Show up to a search, an exercise, or an EmComm activation; beacon your callsign; you're a TAK participant.

---

## Under the hood

For the engineer screening this before adoption:

- **Lossless cross-gateway fidelity.** Team affiliation, role, COT type, custom icons, and chat attribution survive every round-trip through the APRS wire and render correctly on the peer's WinTAK, ATAK, or baseTAK.
- **Three-layer echo prevention** by `(callsign+SSID, station_number, gateway_uid)` tuple — own packets, peer-bridged-edit packets, and sibling-gateway packets each handled distinctly. No echo loops, even on busy multicast.
- **CRC16 wire-identity** on every marker — round-trip recognition survives gateway restarts.
- **Raw AX.25 dispatched byte-exact to KISS** — no text-decode mangling, no path-byte corruption.
- **Open wire format** — the TAK-APRS Protocol Extension is published as an open spec at [cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs), so independent implementations can interoperate.
- **Gate funnel architecture** — L1 transport → L2 class → L3 feature → L4 origin, short-circuit AND, verified end-to-end by a bridge QA harness.
- **Simultaneous multi-transport** — APRS-IS, VHF/UHF RF, and HF RF run concurrently from one digiTAK instance. Per-transport gates and rate limits; HF traffic is feature-gated to positions + chat at the L3 layer with a separate compression codec to fit the band.

---

## What you need

- A **Raspberry Pi 4/5** (4 GB+) or any modern Linux box. Python 3.8+, systemd.
- A **VHF/UHF rig** for regional reach (~30–100 mi), driven by a USB audio interface (Digirig, SignaLink) or any **KISS-compatible TNC** over serial or TCP. Direwolf modem is bundled.
- An **HF rig** *(optional)* for continental reach (hundreds to thousands of miles), driven via USB audio interface. Both radios can be connected to the same digiTAK at once.
- An **amateur callsign** with APRS-IS passcode and HF privileges for the bands you intend to use.

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

**Beta — shipping soon** (v2.1.12, VHF/UHF + APRS-IS): Beta-ready.

**In active development:**
- **HF transport** — binary compression codec, separate gating, positions + chat fidelity. Design complete (FR-081); implementation in progress.

**Also on the roadmap:**
- APRS DM ack/rej with retry queue
- TAK 911 → APRS Mic-E emergency alerts
- Bulletin TX with slot picker (BLN0–9, BLNA–Z)
- Station list view in admin UI
- NWS warning shape polygons (currently text-only)

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**TAK on the air. VHF for the region. HF for the continent. No internet either way.**

### Social pitch — 50 words
Two sites. Two states. Two thousand miles. Same TAK picture. digiTAK federates TAK networks over amateur radio — VHF for regional, HF for continental, APRS-IS for internet. Run all three transports at once from one Pi. EmComm, SAR, and ARES districts finally have a continental-scale, no-internet TAK backbone.

### Long pitch — 200 words
digiTAK is the bridge between the TAK ecosystem (ATAK, WinTAK, iTAK) and the worldwide amateur radio network. Run two or more digiTAK sites and they form a federated mesh — markers, team color, custom icons, chat, and DMs all round-trip with full TAK fidelity over VHF/UHF and APRS-IS. Add a digipeater between sites to extend RF reach. Add another digiTAK to grow the operating area.

For continental scale, hook a second radio to digiTAK — an HF rig — and the same gateway bridges WinTAK installs hundreds or thousands of miles apart over the ionosphere. HF carries a narrower feature set (positions and chat, by physics of the band), encoded through a binary compression codec to fit. State EOC sees state EOC. ARES district sees ARES region. All transports run concurrently from one digiTAK.

In single-site mode, every APRS station within reach appears on every TAK client on your LAN as a chat-able contact. Full WIDE digipeater, RX+TX IGate, SmartBeacon, Part 97 compliance gates. Runs on a Pi. Offline install. Open wire spec.

### Soul quote
> Lossless cross-gateway TAK fidelity. Team, role, icons, attribution — all of it survives the round-trip through the APRS wire.

### Audience tags
**Primary:** amateur radio operators, EmComm, ARES/RACES, ACS, packet-radio enthusiasts, HF digital-modes operators.
**Secondary:** state and national EmComm coordinators, SATERN, MARS-affiliated operators, SAR teams with ham resources, EOCs running off-grid drills, first responders with ham volunteers, preppers running multi-state networks.


---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
