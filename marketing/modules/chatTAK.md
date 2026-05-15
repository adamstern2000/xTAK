# chatTAK

# A TAK endpoint in everyone's pocket. No app required.

**chatTAK is a comms-forward TAK endpoint: a self-contained Pi appliance that hosts a Wi-Fi network and a browser-based chat UI. Multiple users — phones, laptops, tablets — connect at once, each as their own first-class TAK identity. Plug it in, hand out the SSID, and your whole team is on the network in 60 seconds. No app install. No ATAK clutter.**

> **About TAK:** chatTAK is a TAK endpoint — every browser user enrolled in chatTAK becomes a first-class TAK participant alongside ATAK (Android), WinTAK (Windows), and iTAK (iOS) clients, with their own periodic SA heartbeat and native TAK chat. [More about the TAK ecosystem →](../about-tak.md)

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtakproject)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtakproject)

---

## The scenario

It's the morning of a regional charity bike ride. Two hundred riders, twelve aid stations across forty miles of back roads, eighty volunteers. The race director is running ops from her car with ATAK on a phone. The chief medical officer has WinTAK on his laptop in the SAG vehicle. The volunteer comms lead has a 2-meter HT.

The volunteers at the aid stations have neither ATAK nor amateur radio. They're regular people with regular phones who showed up to help. None of them are going to install an app or learn a tactical mapping tool.

At each aid station the comms lead hands the station captain a chatTAK — a Pi Zero in a 3D-printed case, the size of a deck of cards, powered by a USB battery. "Connect your phone to the Wi-Fi named *AID-7*. Open the link. Pick your name and team." Sixty seconds later every volunteer at the station is on the team's TAK chat. Their position is updating on the race director's ATAK. They can DM the chief medical officer. They can see where the SAG vehicle is.

When a rider goes down, the captain types a chat. It reaches the race director, the medical officer, and every aid station — instantly.

**No app install. No accounts. No cell coverage required. A Pi Zero per station.**

That's chatTAK.

---

## What you can do

### 1. Add anyone with a phone to your TAK network

chatTAK is a self-contained TAK endpoint, not a forwarding tunnel. Every browser user enrolled in chatTAK gets a real TAK identity — UID, callsign, team, color, position — and broadcasts a periodic SA heartbeat onto the TAK network exactly like an ATAK device would.

- **Native TAK chat** — every message is byte-identical to ATAK GeoChat; WinTAK and ATAK clients can't tell chatTAK users from "real" TAK clients
- **Per-user periodic SA** — each enrolled browser broadcasts position + metadata on a configurable cadence (default 30 s)
- **Browser-only UI** — no app install, no account, no app store; works on any modern phone or laptop
- **Self-hosted Wi-Fi AP** — chatTAK can be its own wireless network so it works in a parking lot with no LAN around
- **Attachments up to 50 MB** — send photos and documents over TAK
- **Clean enrollment / logout** — callsign + team + role picker on first connect; leaving triggers a proper TAK delete so the participant prunes from every other client immediately

### 2. Drop into any operation without infrastructure

chatTAK is a fully offline-strict appliance. Every dependency is vendored. The install runs without internet. The product runs without internet.

- **Pi Zero 2 W form factor** — sub-$30 hardware, palm-sized
- **Self-contained Wi-Fi AP** with DHCP, DNS, and HTTPS termination already configured
- **Battery-powered operation** — USB power bank lasts a day
- **One-tarball install** — everything ships in the offline release archive

### 3. Run a comms-forward command element from a single Pi

When the priority is *talk, decide, coordinate* — not stare at a map — chatTAK is the TAK endpoint of choice. One Pi, one Wi-Fi network, and your whole command staff is on the same TAK chat from their phones.

- **Multi-user from one device** — every browser that joins chatTAK gets its own TAK identity. The IC, ops chief, planning chief, and logistics officer can all be on one Pi at once, each as their own callsign with their own team color, role, and SA heartbeat.
- **The WinTAK chat feature set, in a browser** — All Chat, team chat, addressable DMs, group chat, attachments. The full GeoChat surface, on any device, no app.
- **No ATAK cognitive load** — for staff who don't need the tactical map every second, chatTAK gives them the comms layer of TAK without the rest of the client. The chat pane is the primary interface.
- **Field command, no infrastructure** — a four-person command element can run an incident from a single chatTAK Pi powered by a USB battery. No tablets to provision. No apps to install. No licenses. Connect to the SSID, pick a callsign, you're a TAK participant.

This is the move when an EOC has to deploy — when the building has to be evacuated, when the field has to come up to a remote ICP, when an exercise needs a portable command cell. Carry a chatTAK in a sleeve, run command from a phone.

### 4. Compose with the rest of the xTAK suite

chatTAK is the lightweight endpoint counterpart to baseTAK. The chat wire format is byte-identical between them — `cot_chat` is the same shared Python package that powers both. Drop a chatTAK on a LAN that also has baseTAK, digiTAK, loraTAK, or sdrTAK and they all see each other.

- **chatTAK browser user can DM an ATAK device** — and vice versa
- **chatTAK chat reaches a Meshtastic node** via loraTAK on the same LAN
- **chatTAK chat reaches a ham operator** via digiTAK on the same LAN
- **A logged-in volunteer's position** flows to every TAK client and bridge on the network

---

## Who runs chatTAK

- **Field incident command elements** — IC, ops chief, planning chief, logistics, finance — running a command post or remote ICP from a single Pi, each on their own phone, all on the same TAK network.
- **Mobile command vehicles and pop-up ICPs** that need to come up fast without provisioning hardware for every staff member.
- **Event coordinators** running mass-participation events (races, festivals, fairs, parades) who need volunteer comms without distributing apps or licenses.
- **Search-and-rescue base teams** who staff aid stations and command posts with volunteers who don't carry ATAK.
- **CERT and neighborhood-watch leads** running drills or live activations where most participants are untrained civilians.
- **Volunteer fire and ambulance corps** with rotating volunteer rosters who need an instant-on comms tool.
- **EmComm teams** standing up a temporary EOC at a shelter, church basement, or library where the staff aren't TAK-trained.
- **Anyone running a deployment** where part of the team is on ATAK and part of the team is on a phone they brought from home.

---

## Under the hood

For the engineer screening this before adoption:

- **Offline-strict install.** Every Python wheel ships in `vendor/`. The install script has zero network calls. Verified by MANIFEST-based vendor self-clean (the installer removes stale wheels from prior versions).
- **Byte-identical TAK wire format** with baseTAK. chatTAK and baseTAK share the same `cot_chat` Flask blueprint; the chat XML and protobuf produced by either are indistinguishable on the wire.
- **3-service systemd architecture.** Separate API, bridge, and transmit units. One crashes, the others keep running; each logs independently to journalctl.
- **Deep-merged config preservation across upgrades.** Operator settings, runtime state, and the chat database survive tarball upgrades with timestamped backups.
- **Proper TAK delete on logout** (`t-x-d-d`) — leaving chatTAK prunes the participant from baseTAK, ATAK, and WinTAK immediately instead of waiting for stale timeout.
- **Multi-protocol ingest.** Parses both XML and TAK protobuf on UDP and TCP paths.

---

## What you need

- A **Raspberry Pi Zero 2 W** (or any Pi 3+, or any Linux/macOS box for testing).
- A **case** (3D-printable designs available).
- A **USB power source** (battery, wall wart, or a USB-C PD adapter).
- **Phones, tablets, or laptops** with any modern browser.

## What you don't need

- **No app install.** Anything with a browser works.
- **No internet.** chatTAK runs its own Wi-Fi network and resolves its own hostname.
- **No TAK Server.** chatTAK talks to TAK clients directly.
- **No accounts.** Pick a callsign on first connect; that's it.
- **No per-device licensing.** Self-hosted, no subscription.

## Install

```bash
cd ~
sudo tar xzf chattak-<VERSION>.tar.gz -C /opt/
cd /opt/chatTAK && sudo bash install.sh
```

Connect to the Pi's Wi-Fi AP (configured in production-image setup) and open `https://chattak.local`.

---

## Status

**Beta — shipping soon** (v1.0.x). Pi appliance Beta-ready.

**On the roadmap:**
- Settings GUI (port 5103 reserved; current model is JSON + restart)
- Standalone takmap-style frontend for non-chat use cases
- TCP protobuf full parity with baseTAK

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**Comms-forward TAK. Multi-user. No app required.**

### Social pitch — 50 words
chatTAK is a Pi appliance that hosts a Wi-Fi network and a browser-based TAK chat UI. Multiple users — your whole command staff, your volunteer team — connect at once, each with their own TAK identity. Plug it in. Hand out the SSID. Sixty seconds later your team's on the network. No app. No cloud.

### Long pitch — 200 words
chatTAK turns a Pi into a self-contained, comms-forward TAK endpoint. Plug it in, hand out the Wi-Fi SSID, and any phone, tablet, or laptop that joins becomes a first-class TAK participant — with its own callsign, team color, position heartbeat, and native TAK chat. ATAK and WinTAK clients on the same network can't tell chatTAK users apart from "real" TAK clients on the wire.

It's the right tool for two distinct kinds of deployment. First, **comms-forward field command**: a four-person command element running an incident from a single Pi, each staff member on their own phone, full TAK chat without the cognitive load of a full tactical client. Second, **fast-onboard volunteer ops**: race aid stations, festival posts, SAR check-in tents, CERT activations, shelter EOCs — anywhere people show up to help and need to be on comms in sixty seconds.

The product is offline-strict: every Python wheel vendored, zero network calls during install, self-contained Wi-Fi AP for parking-lot deployment. Byte-identical chat wire format with baseTAK. Composes with every other xTAK product on the same TAK network. Sub-$30 hardware. Day-long battery life.

### Soul quote
> Carry a chatTAK in a sleeve, run command from a phone.

*(Alternate, technical):* Each enrolled browser user becomes a first-class TAK endpoint with its own periodic SA heartbeat.

### Audience tags
**Primary:** field incident command elements, mobile command vehicles, pop-up ICPs, event coordinators, SAR base teams, CERT leads, volunteer fire/ambulance corps, EmComm teams running pop-up EOCs.
**Secondary:** public-safety agencies onboarding non-TAK volunteers, training programs, exercise/drill organizers, anyone running mixed ATAK / non-ATAK ops or comms-heavy / map-light operations.


---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
