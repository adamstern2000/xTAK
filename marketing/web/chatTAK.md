<!--
PAGE METADATA
title: chatTAK — A TAK Endpoint in Everyone's Pocket | xTAK Suite
description: chatTAK is a Pi appliance that hosts a Wi-Fi network and a browser-based TAK chat UI. Multiple users connect at once, each as a first-class TAK identity. No app install. No accounts. Built for comms-forward field command and fast-onboard volunteer ops.
og_image: /img/chatTAK/hero.jpg
canonical: https://xtak.io/products/chatTAK
-->

<!-- HERO IMAGE: chatTAK Pi Zero in a 3D-printed case the size of a deck of cards, sitting on a folding table at an aid station, USB battery alongside, two volunteers connecting their phones to its Wi-Fi -->

# A TAK endpoint in everyone's pocket.
# No app required.

**chatTAK is a comms-forward TAK endpoint: a self-contained Pi appliance that hosts a Wi-Fi network and a browser-based chat UI. Multiple users — phones, laptops, tablets — connect at once, each as their own first-class TAK identity. Plug it in, hand out the SSID, and your whole team is on the network in 60 seconds.**

<!-- CTA BUTTONS: [Watch the 60-second demo] [Read the docs] [View on GitHub] -->

---

<!-- TRUST STRIP -->
*Built for field incident command, mobile command vehicles, pop-up ICPs, event coordinators, SAR base teams, CERT activations, volunteer fire and ambulance corps, and EmComm teams running pop-up EOCs.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. chatTAK joins that same network as a peer — and every browser user enrolled in chatTAK becomes a first-class TAK participant alongside ATAK, WinTAK, and iTAK clients, with their own periodic SA heartbeat and native TAK chat. [Learn more about the TAK ecosystem →](/about-tak)

---

## The scenario

<!-- IMAGE: split-frame — left side a race director with ATAK on a phone in her car; right side a volunteer station captain handing a chatTAK Pi to a group of aid-station volunteers as they connect their phones -->

It's the morning of a regional charity bike ride. Two hundred riders, twelve aid stations across forty miles of back roads, eighty volunteers. The race director is running ops from her car with ATAK on a phone. The chief medical officer has WinTAK on his laptop in the SAG vehicle. The volunteer comms lead has a 2-meter HT.

The volunteers at the aid stations have neither ATAK nor amateur radio. They're regular people with regular phones who showed up to help. None of them are going to install an app or learn a tactical mapping tool.

At each aid station the comms lead hands the station captain a chatTAK — a Pi Zero in a 3D-printed case, the size of a deck of cards, powered by a USB battery. "Connect your phone to the Wi-Fi named *AID-7*. Open the link. Pick your name and team." Sixty seconds later every volunteer at the station is on the team's TAK chat. Their position is updating on the race director's ATAK. They can DM the chief medical officer. They can see where the SAG vehicle is.

When a rider goes down, the captain types a chat. It reaches the race director, the medical officer, and every aid station — instantly.

**No app install. No accounts. No cell coverage required. A Pi Zero per station.**

That's chatTAK.

---

## What you can do with chatTAK

### 1. Add anyone with a phone to your TAK network

<!-- IMAGE: phone screen showing the chatTAK enrollment UI — callsign picker, team color, role — next to an ATAK tablet displaying that same user as a native TAK contact -->

chatTAK is a self-contained TAK endpoint, not a forwarding tunnel. Every browser user enrolled in chatTAK gets a real TAK identity — UID, callsign, team, color, position — and broadcasts a periodic SA heartbeat onto the TAK network exactly like an ATAK device would.

- **Native TAK chat** — every message is byte-identical to ATAK GeoChat; WinTAK and ATAK clients can't tell chatTAK users from "real" TAK clients
- **Per-user periodic SA** — each enrolled browser broadcasts position + metadata on a configurable cadence (default 30 s)
- **Browser-only UI** — no app install, no account, no app store; works on any modern phone or laptop
- **Self-hosted Wi-Fi AP** — chatTAK can be its own wireless network so it works in a parking lot with no LAN around
- **Attachments up to 50 MB** — send photos and documents over TAK
- **Clean enrollment / logout** — callsign + team + role picker on first connect; leaving triggers a proper TAK delete so the participant prunes from every other client immediately

### 2. Drop into any operation without infrastructure

<!-- IMAGE: chatTAK Pi in a 3D-printed case running off a USB power bank on a folding table in a parking lot, three phones connected to its SSID -->

chatTAK is a fully offline-strict appliance. Every dependency is vendored. The install runs without internet. The product runs without internet.

- **Pi Zero 2 W form factor** — sub-$30 hardware, palm-sized
- **Self-contained Wi-Fi AP** with DHCP, DNS, and HTTPS termination already configured
- **Battery-powered operation** — USB power bank lasts a day
- **One-tarball install** — everything ships in the offline release archive

### 3. Run a comms-forward command element from a single Pi

<!-- IMAGE: four-person command staff in a pop-up ICP, each on their own phone, with a single chatTAK Pi and USB battery on the table between them -->

When the priority is *talk, decide, coordinate* — not stare at a map — chatTAK is the TAK endpoint of choice. One Pi, one Wi-Fi network, and your whole command staff is on the same TAK chat from their phones.

- **Multi-user from one device** — every browser that joins chatTAK gets its own TAK identity. The IC, ops chief, planning chief, and logistics officer can all be on one Pi at once, each as their own callsign with their own team color, role, and SA heartbeat.
- **The WinTAK chat feature set, in a browser** — All Chat, team chat, addressable DMs, group chat, attachments. The full GeoChat surface, on any device, no app.
- **No ATAK cognitive load** — for staff who don't need the tactical map every second, chatTAK gives them the comms layer of TAK without the rest of the client. The chat pane is the primary interface.
- **Field command, no infrastructure** — a four-person command element can run an incident from a single chatTAK Pi powered by a USB battery. No tablets to provision. No apps to install. No licenses. Connect to the SSID, pick a callsign, you're a TAK participant.

This is the move when an EOC has to deploy — when the building has to be evacuated, when the field has to come up to a remote ICP, when an exercise needs a portable command cell. Carry a chatTAK in a sleeve, run command from a phone.

### 4. Compose with the rest of the xTAK suite

<!-- IMAGE: LAN diagram showing chatTAK, baseTAK, digiTAK, and loraTAK on the same network, with a chatTAK browser user's chat reaching an ATAK device, a Meshtastic node, and a ham operator -->

chatTAK is the lightweight endpoint counterpart to baseTAK. The chat wire format is byte-identical between them — `cot_chat` is the same shared Python package that powers both. Drop a chatTAK on a LAN that also has baseTAK, digiTAK, loraTAK, or sdrTAK and they all see each other.

- **chatTAK browser user can DM an ATAK device** — and vice versa
- **chatTAK chat reaches a Meshtastic node** via loraTAK on the same LAN
- **chatTAK chat reaches a ham operator** via digiTAK on the same LAN
- **A logged-in volunteer's position** flows to every TAK client and bridge on the network

---

## How it works

<!-- IMAGE: high-level architecture diagram showing a chatTAK Pi appliance hosting a Wi-Fi AP, multiple phones connecting as browser sessions that become TAK identities on the TAK network -->

```
                       chatTAK Pi appliance
                       (Pi Zero 2 W, USB power)
                       ┌──────────────────────┐
                       │                      │
   Phone ───── Wi-Fi ──┤  Wi-Fi AP            │
   (browser)           │  (SSID, DHCP, DNS,   │
                       │   HTTPS termination) │
   Phone ───── Wi-Fi ──┤                      │
   (browser)           │  Browser sessions    │
                       │  ↓                   │
   Tablet ──── Wi-Fi ──┤  Each becomes a      │
   (browser)           │  first-class TAK     │
                       │  identity (UID,      │
   Laptop ──── Wi-Fi ──┤  callsign, team,     │
   (browser)           │  color, SA heartbeat)│
                       │                      │
                       │  ↓                   │
                       │  TAK network (LAN)   │
                       └──────────┬───────────┘
                                  │
                ┌─────────────────┼─────────────────┐
                │                 │                 │
            ATAK / WinTAK    baseTAK /         digiTAK /
            / iTAK on the    other xTAK        loraTAK
            same network     products          bridges
```

Every browser that connects to chatTAK's Wi-Fi, opens the page, and picks a callsign becomes a first-class TAK participant on the LAN — with a UID, periodic SA heartbeat, native TAK GeoChat, and a clean `t-x-d-d` delete on logout. ATAK, WinTAK, and iTAK clients on the same network see each browser user exactly the way they'd see another tactical client. Drop in baseTAK, digiTAK, or loraTAK and that browser user reaches every other transport on the suite.

---

## Who uses chatTAK

<!-- USE-CASE CARDS -->

**Field incident command elements** — IC, ops chief, planning chief, logistics, finance — running a command post or remote ICP from a single Pi, each on their own phone, all on the same TAK network.

**Mobile command vehicles and pop-up ICPs** — that need to come up fast without provisioning hardware for every staff member.

**Event coordinators** — running mass-participation events (races, festivals, fairs, parades) who need volunteer comms without distributing apps or licenses.

**Search-and-rescue base teams** — staffing aid stations and command posts with volunteers who don't carry ATAK.

**CERT and neighborhood-watch leads** — running drills or live activations where most participants are untrained civilians.

**Volunteer fire and ambulance corps** — with rotating volunteer rosters who need an instant-on comms tool.

**EmComm teams** — standing up a temporary EOC at a shelter, church basement, or library where the staff aren't TAK-trained.

**Mixed-team deployments** — anyone running an operation where part of the team is on ATAK and part of the team is on a phone they brought from home.

---

## Specs

| | |
|---|---|
| **Form factor** | Self-contained Pi appliance with Wi-Fi AP and browser-based TAK chat UI |
| **TAK identity model** | Every enrolled browser becomes a first-class TAK participant (UID, callsign, team, color, role, periodic SA heartbeat) |
| **Chat surface** | Native TAK GeoChat — All Chat, team chat, addressable DMs, group chat |
| **Attachments** | Photos and documents up to 50 MB over TAK |
| **Wire format** | Byte-identical to ATAK GeoChat; shared `cot_chat` Python package with baseTAK |
| **Ingest** | Multi-protocol — parses both XML and TAK protobuf on UDP and TCP paths |
| **TAK clients interoperable** | ATAK, WinTAK, iTAK, baseTAK — any standard TAK client on the LAN |
| **Hardware** | Raspberry Pi Zero 2 W (or any Pi 3+, or any Linux/macOS box for testing) |
| **Power** | USB power source — battery, wall wart, or USB-C PD adapter |
| **Networking** | Self-hosted Wi-Fi AP with DHCP, DNS, HTTPS termination |
| **Installation** | Offline tarball; all Python wheels vendored; zero network calls |
| **Service architecture** | 3-service systemd: API, bridge, and transmit units, each independently logged |
| **Upgrades** | Deep-merged config preservation; chat database and runtime state survive tarball upgrades with timestamped backups |
| **Logout** | Proper TAK delete (`t-x-d-d`) — participants prune from baseTAK, ATAK, and WinTAK immediately |
| **License** | (TBD — link to LICENSE) |
| **Version** | v1.0.x — shipping; Pi appliance production-ready |

---

## Frequently asked questions

### Is a Pi Zero 2 W really enough?
Yes. chatTAK is designed around the Pi Zero 2 W form factor — sub-$30 hardware, palm-sized, USB-powered. The full appliance (Wi-Fi AP, HTTPS termination, the 3-service backend, and the browser UI) runs comfortably on that hardware. Any Pi 3+ works too, and any Linux or macOS box is fine for testing.

### How many users can connect at once?
chatTAK is multi-user by design. Every browser that joins gets its own first-class TAK identity with an independent SA heartbeat. A four-person command element on a single Pi is the comfortable target use case; aid stations and volunteer posts with similar counts are routine. Practical ceiling scales with the Pi's Wi-Fi AP and your enrollment density — for very large events, deploy a chatTAK per station rather than trying to put everyone on one.

### How long does it run on a battery?
A standard USB power bank lasts a day. The Pi Zero 2 W is the lowest-power member of the Pi family, and chatTAK doesn't keep a screen lit — the UI lives on the users' phones. For multi-day deployments, swap battery packs or run off a wall wart / USB-C PD.

### Does chatTAK need internet?
No. chatTAK is offline-strict. The install runs without internet. The product runs without internet. It hosts its own Wi-Fi AP, resolves its own hostname, and terminates HTTPS locally. There's no TAK Server, no cloud, and no per-device licensing. Drop it in a parking lot or a basement and it works.

### How does chatTAK compose with baseTAK?
chatTAK and baseTAK share the same `cot_chat` Flask blueprint — the chat XML and protobuf produced by either are indistinguishable on the wire. Drop a chatTAK on a LAN that also has baseTAK and they federate transparently: a chatTAK browser user shows up in baseTAK's map and chat as a native TAK participant, and a baseTAK user shows up in chatTAK's chat the same way.

### What happens when a user logs out?
chatTAK sends a proper TAK delete (`t-x-d-d`) on logout, so the participant prunes from every other client on the network immediately — instead of lingering as a stale contact until SA timeout. This matters for events where volunteers rotate through stations: the chat stays clean.

### Do users need accounts?
No. Pick a callsign, team, and role on first connect — that's it. No account creation, no email, no password, no app store. The enrollment screen is the whole onboarding.

### Does it work alongside the other xTAK products?
Yes. baseTAK, digiTAK, loraTAK, and sdrTAK all share the same TAK network by design. Drop them on the same LAN as chatTAK and they compose — a chatTAK browser user's chat reaches an ATAK device, a Meshtastic node (via loraTAK), or a ham operator (via digiTAK) without any per-product configuration.

### Can chatTAK run on a LAN with an existing TAK Server?
Yes. chatTAK is a TAK endpoint and joins the network as a peer — it doesn't require TAK Server, but it doesn't conflict with one either.

---

## Status

| | |
|---|---|
| **Shipping today** | v1.0.x — Pi appliance production-ready |
| **In active development / on the roadmap** | Settings GUI (port 5103 reserved; current model is JSON + restart), standalone takmap-style frontend for non-chat use cases, TCP protobuf full parity with baseTAK |

---

## Get started

<!-- CTA SECTION -->

chatTAK ships as an offline tarball. One command installs everything.

```bash
cd ~
sudo tar xzf chattak-<VERSION>.tar.gz -C /opt/
cd /opt/chatTAK && sudo bash install.sh
```

Connect to the Pi's Wi-Fi AP (configured in production-image setup) and open `https://chattak.local`. Pick a callsign, team, and role on first connect — you're a TAK participant.

**[Download chatTAK v1.0.x]**   **[Read the docs]**   **[Watch the demo]**

---

## Related products in the xTAK suite

<!-- PRODUCT CARDS -->

- **[baseTAK](/products/baseTAK)** — the map, chat, and hub of the xTAK suite. Browser-based TAK client and SA hub for fixed installations. Shares the `cot_chat` package with chatTAK.
- **[digiTAK](/products/digiTAK)** — TAK over amateur radio. VHF for the region, HF for the continent. Bridges a chatTAK browser user's chat to a ham operator.
- **[loraTAK](/products/loraTAK)** — Meshtastic LoRa mesh gateway. Bridges a chatTAK browser user's chat to a Meshtastic node.
- **[sdrTAK](/products/sdrTAK)** — SDR-decoded aircraft (ADS-B 1090, UAT 978) and ships (AIS) as native TAK contacts.
- **[netTAK](/products/netTAK)** *(in development)* — base operating layer for every mobile xTAK device; self-healing field mesh.
- **[aiTAK](/products/aiTAK)** *(in development)* — local-first LLM that joins your TAK network as an operations assistant.

---

<!-- FOOTER CTA -->

**Have a deployment in mind?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
