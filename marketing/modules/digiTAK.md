# digiTAK — Marketing Module

**Status:** Public Beta — available now (v3.1.3 · VHF + APRS-IS)
**Wire protocol:** TAK-APRS Protocol Extension **v2.1** ([open spec](https://github.com/adamstern2000/cot_radio_aprs))
**Last updated:** 2026-07-08
**Use this for:** social posts, video scripts, ARRL / EmComm content, ham radio podcasts, conference talks.

---

## TL;DR (the 60-second pitch)

digiTAK is a full APRS-to-TAK gateway that runs on its own appliance. **Plug it onto any network and the LAN gains a full APRS gateway** — every ATAK, iTAK, WinTAK, or baseTAK browser picks up APRS stations as native TAK markers, and every TAK marker, chat, or shape goes back out onto RF. No glue, no integration; just standard TAK protocols on the wire. Pair with baseTAK and you get the richest APRS picture on any modern map — full APRS icon set + filter by device type with a click.

The two deployment modes describe **what else is on the network**, not where digiTAK runs:
- **Bridge mode:** digiTAK alongside baseTAK and the rest of the xTAK suite
- **Standalone mode:** digiTAK alone is the whole TAK install

---

## Taglines — pick the angle

- **"TAK on the air. VHF for the region. HF for the continent."** *(headline)*
- **"Drop a digiTAK in. Instantly an APRS gateway."** *(deploy angle)*
- **"The TAK client your APRS station has always needed."** *(ham operator angle)*
- **"Same digiTAK. Both radios. Simultaneously."** *(multi-transport angle)*
- **"For ham operators tired of legacy APRS software."** *(modernization angle; never name specific legacy tools)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **ARES / RACES / ACS** | "Every APRS station on the net shows up on every TAK client. Your APRS infrastructure becomes the SA backbone — markers, chat, weather, NWS bulletins, all native." |
| **SAR teams** | "An APRS-equipped volunteer who shows up to a SAR call has nothing but a handheld radio — and they're a first-class participant the moment they beacon. No app to install on the volunteer's gear." |
| **EmComm net controls** | "Bridge two or more TAK networks over RF. State EOC sees the county-level picture without an internet uplink. HF reaches the next state; VHF reaches the next county. Same appliance." |
| **Fire / Wildland EmComm** | "When the WAN is dark, APRS is what your auxcomm has. digiTAK turns it into the SA wire for the IC. Mutual-aid units appear on the map by callsign." |
| **Public-safety auxcomm** | "The auxcomm net stops being parallel infrastructure. APRS hams aren't a separate radio room anymore — they're first-class participants on the same shared picture as the ATAK / WinTAK clients." |
| **Ham radio operators** | "Run any TAK client as your APRS UI. ATAK, WinTAK, iTAK, or baseTAK in a browser — modern map, click-to-message, every station with its proper APRS icon. Connect a USB GPS and the digiTAK is also your tracker." |

---

## Killer features (the headline bullets)

1. **Drop it in, instant APRS gateway** — plug a digiTAK onto any network and the LAN gains a full APRS bridge. No glue.
2. **Bidirectional bridge** — APRS → TAK *and* TAK → APRS. DM a callsign from ATAK; the message lands on RF or APRS-IS.
3. **Full APRS icon set on the map** — every primary and alternate APRS symbol (digi, mobile, weather, ambulance, fire engine, boat, aircraft, NWS object) renders as a proper TAK icon when paired with baseTAK. Not generic dots.
4. **Open TAK-APRS Protocol Extension v2.1** — public spec, third-party-implementable, wire-format documented.
5. **Multi-transport** — Direwolf-managed VHF/UHF + external KISS TNC support + APRS-IS Tier 2 simultaneously. Single appliance, multiple radio ports.
6. **Sibling-gateway coexistence** — multiple digiTAKs on one RF channel coordinate so they don't re-emit or re-digipeat each other's traffic. (Standard channel collisions still apply — half-duplex RF is half-duplex RF.)
7. **Full digipeater** — WIDE1/WIDE2 aliases, dedup window, own-echo filter, IGate beacon on both RF and APRS-IS.

---

## The two modes (be precise)

### Bridge mode — alongside the xTAK suite
- digiTAK runs on its own appliance, talks to baseTAK and other xTAK products over standard TAK protocols on the LAN.
- baseTAK owns the broader SA picture; digiTAK extends it onto amateur radio in both directions.
- Adds: TAK → APRS broadcast bridging, mesh-to-APRS gating (forward loraTAK origins or not — per-operator policy), datapackage notifications onto APRS, group-origin prefix for chat attribution.

### Standalone mode — digiTAK alone is the whole install
- No baseTAK anywhere on the network. Just digiTAK and the TAK clients that connect.
- digiTAK hosts its own chat router, TAK router, and APRS bridge. Every ATAK / WinTAK / iTAK on the LAN connects directly.
- Adds: bulletin subscriptions (BLN0–BLN9 + NWS wildcards), 5-minute inbound holding buffer for startup, per-participant TCP fan-out for DM/team chat.
- **The whole TAK environment fits on one appliance.**

---

## Suite-level pairings (1 + 1 = 3 stories)

- **digiTAK + baseTAK** = the best APRS map experience. Full APRS icon set + map filter by APRS device type with a click. *Lead pitch for any ham audience.*
- **digiTAK + loraTAK** = full mesh partners on the TAK chat thread. A ham with an HT can message a SAR volunteer with a $40 Meshtastic radio. Both products speak standard TAK on the wire. *Lead pitch for SAR / EmComm volunteer scenarios.*
- **digiTAK alone** = appliance APRS-to-TAK gateway for a single site or operator.

---

## Honest disclosures

- **HF transport** is on the roadmap, not yet shipped — VHF + APRS-IS today.
- **Protocol Extension v2.1** is the current wire-format version. (Earlier docs said v1.2; corrected.)
- **Sibling coexistence:** digiTAKs coordinate to not re-emit each other's traffic. They don't eliminate RF channel collisions — that's physics. The page says this honestly.

---

## Sample social posts

### X / Twitter (≤ 240 chars)

> **POST 1 — the drop-in hook**
> Drop a digiTAK onto any network.
>
> Every ATAK, WinTAK, iTAK, and baseTAK browser on the LAN now sees APRS stations as native TAK contacts. Every TAK marker goes back out onto RF.
>
> No glue. No integration. Just standard TAK.

> **POST 2 — the volunteer-with-a-handheld story**
> A volunteer pulls into your SAR base camp with an APRS handheld and nothing else.
>
> The moment they beacon, they're on the IC's WinTAK. The IC DMs them from the laptop — the message lands on their radio's screen.
>
> No app. No new gear. No new training.

> **POST 3 — the picture quality angle**
> digiTAK + baseTAK = every APRS station with its proper icon on a modern map.
>
> Weather stations, digipeaters, mobile trackers, NWS objects, ambulances — every primary and alternate APRS symbol rendered correctly. Not generic dots.
>
> Filter by device type with a click.

> **POST 4 — the EmComm net angle**
> The auxcomm net stops being parallel infrastructure.
>
> With digiTAK on the LAN, APRS hams aren't a separate radio room hanging off the side of the op. They're first-class participants on the same TAK picture the ATAK / WinTAK clients use.
>
> Same maps. Same chat thread. Same SA.

> **POST 5 — the cross-mode chat hook**
> digiTAK + loraTAK on the same network = a ham with a VHF HT can DM a SAR volunteer with a $40 Meshtastic radio.
>
> Same TAK chat thread. Different RF. Both speak standard TAK on the wire.

### LinkedIn (400–800 chars)

> **POST A — modernizing APRS**
> If you're a ham radio operator running a long-standing APRS station and you've been looking at modern map apps with envy, this one's for you.
>
> digiTAK pairs your existing APRS hardware with any TAK client — ATAK on a tablet, WinTAK on a desktop, baseTAK in a browser — and your station finally has a UI that looks like 2026 instead of 1996. Modern basemaps, search by address, click-to-message, full APRS icon set rendered as proper symbols.
>
> Connect a USB GPS and the same appliance becomes your mobile tracker. APRS-IS Tier 2 baked in, WIDE1/WIDE2 digipeater, IGate beacon — everything an APRS operator expects, plus the bridge to TAK.
>
> Open wire spec (TAK-APRS Protocol Extension v2.1). In development — follow the Beta program at https://xtak.ai/beta

> **POST B — EmComm activation story**
> Day two of a multi-day exercise. The forward team is up a fire road with no cell, no Starlink, no LTE. Base camp is forty miles back. Both teams need the same picture.
>
> You drop a digiTAK at each site. A VHF antenna on a mast. The map on the IC's WinTAK at base camp shows the forward team's markers within seconds. The forward team's ATAK tablets see the IC's search grid the moment it's drawn.
>
> When a volunteer with an APRS rig drives in from the highway, their callsign appears on every TAK client on the network as a chat-able contact.
>
> No internet. No TAK Server. No cellular. Just amateur radio and an appliance at each end.

---

## Video script outlines

### 30-second cinematic

| 0:00–0:06 | Close-up on the back of an SUV at a fire-staging area. Hands plugging a digiTAK appliance into a portable power bank, antenna mast in the background. |
| 0:06–0:14 | Cut to a rugged laptop in the IC vehicle. Map view zooms in — APRS stations populate across the region as native TAK contacts, each with its proper icon. |
| 0:14–0:22 | Side-by-side: a ham operator holds up an APRS HT with the team's callsigns on its screen; the IC's laptop shows the same operator's callsign as a contact. |
| 0:22–0:27 | Wide of the scene — IC truck, mast, antennas, dust in golden hour. |
| 0:27–0:30 | Title card: **digiTAK. TAK on the air.** + xtak.ai/beta |

### 60-second demo

1. **Hook (0:00–0:08):** Drop the digiTAK on the network. Animation of the LAN icon gaining a "↔ APRS" link.
2. **APRS in (0:08–0:25):** Pan over a state-sized map filling with APRS stations: digipeaters on mountaintops, weather beacons, mobile trackers on highways. VO: "Every APRS station in range, on every TAK client."
3. **APRS out (0:25–0:42):** IC types a DM to a callsign in TAK. Cut to an APRS handheld screen showing the message arrive. VO: "Bidirectional. The IC's reply lands on the ham's radio."
4. **Suite composition (0:42–0:55):** Side rail showing APRS contacts grouped, loraTAK mesh contacts grouped, baseTAK browser users grouped. VO: "Pair with loraTAK and the ham chats with a SAR volunteer on a $40 mesh radio — same TAK thread."
5. **Close (0:55–0:60):** Title card + URL.

### 2-minute deep dive (ARRL conference style)

- 0:00–0:20 The state of APRS-on-TAK today (mostly DIY, one-way feeds, plugin-only).
- 0:20–0:50 What digiTAK is: full bidirectional gateway, on its own appliance, two modes.
- 0:50–1:20 Modern UI story: baseTAK rendering APRS as proper icons + filter by type.
- 1:20–1:45 The federation story: two digiTAKs at two sites, VHF and HF transports simultaneously.
- 1:45–2:00 Open spec (TAK-APRS Protocol Extension v2.1). In development — follow the Beta program at xtak.ai/beta.

---

## Live-demo talking points

- **Plug it in.** "I'm not configuring anything. The digiTAK has a static IP on the LAN. The TAK clients on this network already see it."
- **Show the side rail.** "APRSPrimary and APRSSecondary groups, every station grouped by feed."
- **Click an APRS contact.** "Full identity — callsign, SSID, last beacon time, position, comment, battery telemetry if it's a tracker. Same shape as any TAK contact."
- **Type a chat to a callsign.** "I'm typing to KN6XYZ-9, which is a vehicle tracker. Watch the digiTAK's TX VU meter spike." (Show the meter.)
- **Show the admin UI on port 5101.** "RX and TX audio meters, live packet feed, counters. Standard ham-shack diagnostics."
- **Demonstrate filter by APRS type.** "Show only weather stations during a SKYWARN net. Only digipeaters during a band test. Only mobile trackers during a race."

---

## Objections + responses

| Objection | Response |
|---|---|
| "I already have legacy APRS software." | "Keep it — digiTAK is in addition. The benefit is that your APRS station's picture is now also on every TAK client your team uses, with a modern UI and the same chat thread as the rest of the operation." |
| "Is the wire format proprietary?" | "Open spec: TAK-APRS Protocol Extension v2.1 at github.com/adamstern2000/cot_radio_aprs. Third-party implementations welcome." |
| "What about packet collisions?" | "Sibling digiTAKs coordinate so they don't re-emit each other's traffic. Standard channel collisions still apply — half-duplex RF is half-duplex RF." |
| "Why not just use plain APRS-IS?" | "One-way. Plain APRS-IS feeds to a website. digiTAK closes the loop — TAK users can write back to RF." |
| "Does it work without internet?" | "Yes. APRS-IS is optional. Direwolf + VHF rig is enough. The whole stack runs on an appliance off battery power." |

---

## Visual / image cues

Strong visuals:
- **appliance on a tailgate** with a VHF/HF radio + antenna mast. Real ham-shack-in-the-field aesthetic.
- **The two-radio shot** — digiTAK appliance with two SDR/TNC ports labeled VHF and HF, both with audio meters lit.
- **APRS-station-on-a-modern-map** — baseTAK with the New England APRS picture (current outcome image).
- **Ham operator with HT** — at a fire-staging area, ARES vest, radio in hand with TAK callsigns on the handheld's screen.

Avoid: military / defense imagery, weapons, plate carriers, urban-warfare aesthetic, neon.

---

## Key terms

- **APRS** — Automatic Packet Reporting System. Ham-radio data network for positions, weather, messages.
- **IGate** — APRS station that bridges RF to APRS-IS over internet.
- **Digipeater** — APRS station that repeats packets to extend range; WIDE1/WIDE2 are standard alias schemes.
- **Direwolf** — open-source soundcard-modem software, the standard for AX.25 / APRS on Linux.
- **APRS-IS** — the global internet backbone for APRS. Tier 2 = standard server tier hams connect to.
- **KISS** — common framing protocol for talking to an external TNC over serial or TCP.
- **SmartBeacon** — algorithm for motion-adaptive position beaconing (fast on highway, sparse at rest).

---

*Related: [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/digiTAK.html`, wire spec at github.com/adamstern2000/cot_radio_aprs.*
