# aprsTAK

*codename: `cot_radio`*

---

## Tagline

**Federate TAK over amateur radio.**

---

## Pitch — 50 words

aprsTAK is the bidirectional APRS gateway for TAK. Run two or more aprsTAK sites and they form a federated mesh over RF or APRS-IS — markers, team color, custom icons, chat, and DMs all round-trip with full TAK fidelity. No internet required. Runs on a Pi.

---

## Full pitch — 200 words

aprsTAK puts the worldwide APRS network onto your TAK map — and lets two or more TAK sites federate with each other over amateur radio.

In **bridge mode**, multiple aprsTAK gateways form an N-way mesh across RF and APRS-IS. Markers, team color, custom icons, chat, and direct messages round-trip with full TAK fidelity. A marker placed at one site appears at every federated site, attribution and symbology preserved. Add a digipeater between sites to extend RF reach. Add another aprsTAK to grow the operating area. No internet required.

In **standalone mode**, a single gateway brings every APRS station within reach — on the air or on the internet — onto your team's TAK map as a chat-able contact. DM a callsign from ATAK; the message lands on RF or APRS-IS.

Either way: full WIDE digipeater, RX+TX IGate, SmartBeacon, NWS weather bulletins, addressable DMs, and an admin web UI with live audio meters. Runs on a Pi. Offline install — every Python wheel ships in the tarball. Bring your callsign.

---

## Features

### Modes

- **Bridge mode** — N-way TAK federation over RF and APRS-IS. Add a site, grow the operating area.
- **Standalone mode** — every APRS station within reach on your TAK map as a chat-able contact.

### Cross-gateway fidelity (bridge mode)

- Team color, role, COT type, and custom icons all survive the round-trip
- Per-tactical-callsign isolation — N aprsTAKs coexist on one network without echo collisions
- v2 packet envelope is clear text; any APRS reader can decode it

### Gateway features

- Full **WIDE digipeater** with loop suppression
- **RX + TX IGate** (RF ↔ APRS-IS)
- **SmartBeacon** — adaptive position cadence by movement, speed, and heading
- **Addressable DMs** — DM any APRS callsign from ATAK
- **NWS bulletins** and weather stations as TAK overlays
- **Part 97 compliance gates** with failure-safe TX disable

### Admin

- Web admin UI with live audio meters, packet feed, and counters
- Offline `/manual` reference — no internet required

---

## Technical bona fides

- **Three-layer echo prevention** by `(callsign+SSID, station_number, gateway_uid)` tuple — own packets, peer-bridged-edit packets, and sibling-gateway packets each handled distinctly
- **CRC16 wire-identity** on every marker — round-trip recognition survives gateway restarts
- **Raw AX.25 dispatched directly to KISS** — byte-exact, no text-decode mangling
- **Wire format is an open spec** ([cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs)) so other gateway implementations can interoperate
- **Gate funnel architecture** — L1 transport → L2 class → L3 feature → L4 origin, short-circuit AND, verified end-to-end by a bridge QA harness

---

## Soul quote

> Lossless cross-gateway TAK fidelity. Team, role, icons, attribution — all of it survives the round-trip through the APRS wire.

---

## Hardware + install

- **Runs on:** Raspberry Pi 4/5 (4 GB+), or any modern Linux box. Python 3.8+, systemd.
- **Radio:** USB audio interface (Digirig, SignaLink) into a VHF/UHF rig, or any KISS-compatible TNC over serial or TCP. Direwolf modem bundled.
- **Network:** Standard TAK multicast (`239.2.3.1:6969` SA, `224.10.10.1:17012` chat). No internet required for bridge-mode-over-RF operation.
- **Install:** Offline tarball — `sudo bash install.sh`. All Python wheels vendored. Admin UI on port 5101.

---

## Status + roadmap

**Status:** Shipping (v2.1.12). Production-ready.

**On the roadmap:**

- Message ack/rej + retry queue (APRS DM reliability)
- TX Mic-E emergency alerts (TAK 911 → APRS)
- Bulletin TX with slot selection (BLN0–9, BLNA–Z)
- Station list view in admin UI
- NWS warning shape polygons (currently text-only)

---

## Audience tags

- **Primary:** amateur radio operators, EmComm, ARES/RACES, packet-radio enthusiasts
- **Secondary:** SAR teams with ham resources, EOCs running off-grid drills, first responders with ham volunteers, preppers
