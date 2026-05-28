# loraTAK — Marketing Module

**Status:** Beta — shipping soon (v 1.3.0, Meshtastic backend)
**Last updated:** 2026-05-19
**Use this for:** social posts, video scripts, SAR / outdoor / prepper podcasts, Meshtastic community content.

---

## TL;DR (the 60-second pitch)

loraTAK is a bidirectional gateway between Meshtastic LoRa mesh radios and the TAK ecosystem. Field teams running stock $40 Heltec / T-Beam / RAK Meshtastic radios appear on ATAK, WinTAK, iTAK, and baseTAK maps as first-class TAK contacts with positions, telemetry, and chat — both directions. License-free RF, multi-day battery life, and full TAK protocol fidelity end-to-end. Pair with digiTAK and Meshtastic users chat with APRS users on the same TAK thread.

---

## Taglines — pick the angle

- **"Your Meshtastic mesh, now a TAK network."** *(headline)*
- **"Twelve $40 nodes. One TAK picture."** *(scale / cost angle)*
- **"License-free RF, multi-day battery, mesh-resilient SA."** *(infrastructure angle)*
- **"Make every mesh node a TAK contact."** *(simplest reduction)*
- **"Full mesh partner with digiTAK and the rest of the xTAK suite."** *(suite angle)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **SAR teams** | "Every searcher carries a $40 Meshtastic node clipped to their pack. Base camp sees every searcher's position, name, team color, and battery on the WinTAK map. When a team finds sign of the missing person, they type a chat on their Meshtastic — it lands in the IC's TAK chat panel." |
| **Outdoor / wilderness ops** | "Mesh radios work where cell doesn't. loraTAK turns the mesh into the SA wire — base camp, trail crews, helo coordinator all on the same map." |
| **EmComm / ARES** | "When you've already got Meshtastic radios for off-grid comms, loraTAK lets you keep that infrastructure AND get TAK-level situational awareness. No replacement, just bridging." |
| **CERT / volunteer fire** | "License-free spectrum. Hand out $40 radios on event day. Volunteers don't need ham licenses to participate." |
| **Preppers / off-grid** | "No infrastructure required. The mesh IS the network. loraTAK is the bridge to operator-grade situational awareness." |
| **Public safety event ops** | "Mass events (marathons, festivals, charity rides) — every aid station gets a Meshtastic node, the race director sees every position on TAK." |
| **Meshtastic community** | "You already have the radios. Add an appliance + loraTAK and your mesh becomes a TAK network alongside ATAK / WinTAK / iTAK." |

---

## Killer features

1. **Bidirectional position + chat** — full round-trip between TAK clients and the mesh. Not one-way ingest.
2. **Operator-chosen icons** — assign team color, role, and icon per Meshtastic user: MIL-STD-2525C or any standard ATAK iconset. **Icons reflect the role on the team, not the radio model.**
3. **Mesh telemetry on the map** — battery %, voltage, channel utilization, SNR — emitted as `<__mesh_telem>` JSON in every beacon. Visible in TAK position details.
4. **60-second keepalive beacons** anchor mesh-node presence in TAK even when stationary radios beacon every few hours.
5. **Synthetic positions** for GPS-off mesh devices — anchored from gateway location so they stay chat-able.
6. **Multi-NIC appliance-as-AP mode** — eth0 for upstream, wlan0 as a soft AP for the mesh team to associate with. One appliance, no second router.
7. **Hardware-flexible** — works with stock Meshtastic firmware. Heltec V3, T-Beam, RAK 4631, T-Echo, Station-G2.

---

## Suite-level pairings (1 + 1 = 3 stories)

- **loraTAK + digiTAK** = full mesh partners on the TAK chat thread. A SAR volunteer with a $40 mesh radio can DM a ham operator with an APRS handheld. Both speak standard TAK on the wire. *Lead pitch for SAR / EmComm.*
- **loraTAK + baseTAK** = mesh contacts on a modern map, with role-based icons and live telemetry. *Lead pitch for outdoor ops with a base-camp laptop.*
- **loraTAK + chatTAK** = walk-up volunteers on phones AND searchers on mesh in the same TAK chat thread. *Lead pitch for event / mass-volunteer scenarios.*

---

## Honest disclosures

- **Status:** Beta — shipping soon. Current version v 1.3.0.
- **Multi-part outbound to LoRa** — *in development*. Currently long messages truncate with a "…" suffix. The coming feature will split long outbound messages across multiple LoRa packets so the receiving mesh user gets the full message.
- **Hardware-aware icons:** we do NOT render icons based on Meshtastic device model. Operators choose icons per user.
- **Reticulum / RNS:** not currently a loraTAK backend. Shipping backend is Meshtastic. Compatible architecture on roadmap.

---

## Sample social posts

### X / Twitter (≤ 240 chars)

> **POST 1 — the $40 SAR hook**
> A volunteer SAR team sweeping a hundred-acre property. Twelve searchers, two-person teams.
>
> Every searcher carries a $40 Meshtastic node clipped to their pack.
>
> Base camp sees every searcher on the WinTAK map. Mesh chat lands in the IC's TAK chat panel.
>
> No cell. No Wi-Fi.

> **POST 2 — the icon-choice hook**
> Every mesh user picks an icon that matches their role on the team.
>
> Firefighter symbol, SAR symbol, medic, K9 handler, comms lead — full MIL-STD-2525C or any ATAK iconset.
>
> Icons reflect the role, not the radio model.

> **POST 3 — the cross-mode chat hook**
> loraTAK on the LAN + digiTAK on the LAN = a ham with an APRS HT can DM a SAR volunteer with a $40 Meshtastic radio.
>
> Same TAK chat thread. Different RF. Both speak standard TAK on the wire.

> **POST 4 — the license-free angle**
> No FCC license required.
>
> Hand out Meshtastic radios on event day. Every aid station, every marshal, every volunteer becomes a TAK contact.
>
> loraTAK is the bridge. appliance + Meshtastic + a battery = your team's mesh-resilient SA wire.

### LinkedIn (400–800 chars)

> **POST A — the SAR scenario**
> A hundred-acre property. Twelve searchers in two-person teams. The base-camp ATAK tablet can't reach the far side of the ridge over Wi-Fi. The handheld VHF radios are working but voice-only — base has no idea where any of the search teams actually are.
>
> Every searcher carries a $40 Meshtastic node clipped to their pack. The team lead drops one more node at base camp, plugs it into an appliance running loraTAK, powers the appliance off a battery.
>
> Within a minute, every Meshtastic node appears on the base camp's WinTAK map as a moving icon with the searcher's name, team color, and battery level.
>
> When a team finds sign of the hiker, they type a chat on their Meshtastic. It appears in the IC's WinTAK chat panel with the team's callsign and position attached.
>
> No cell. No Wi-Fi. No internet. Mesh radios and an appliance. Beta now: https://buymeacoffee.com/xtak

---

## Video script outlines

### 30-second cinematic

| 0:00–0:06 | Wide shot of a forest trailhead. SAR volunteers in orange vests checking packs, each with a small Meshtastic device clipped. |
| 0:06–0:14 | Cut to base camp: appliance on a folding table next to a rugged laptop. The laptop's TAK map populates with mesh-node icons spreading out from the camp. |
| 0:14–0:22 | Close-up on a Meshtastic handheld — searcher types a quick chat. Cut to IC's laptop — message appears in TAK chat panel. |
| 0:22–0:27 | Wide of the team in the field, no cell tower visible. |
| 0:27–0:30 | Title card: **loraTAK. Your Meshtastic mesh, now a TAK network.** |

### 60-second demo

1. **Setup (0:00–0:12):** Hand setting up a Meshtastic node clipped to a vest. Same operator plugging a second node into an appliance at the base camp. VO: "License-free RF. Battery-powered. Mesh-resilient."
2. **Mesh in (0:12–0:25):** TAK map fills with mesh contacts — each labeled by name + role icon + battery percentage. VO: "Every mesh node, a first-class TAK contact."
3. **Chat both ways (0:25–0:42):** Demo of typing on the Meshtastic handheld and seeing it land in TAK chat. Then reverse — type in TAK chat, it appears on the mesh device. VO: "Bidirectional. No app on the mesh device."
4. **Suite composition (0:42–0:55):** APRS user on the same chat thread, ham operator on an HT. VO: "Pair with digiTAK and Meshtastic users chat with APRS users — same TAK thread."
5. **Close (0:55–0:60):** Title + URL.

### 2-minute deep dive

- 0:00–0:20 Why mesh matters: license-free, off-grid, low-cost
- 0:20–0:50 What loraTAK is: bridge to TAK, bidirectional, telemetry on the map
- 0:50–1:20 The icon-choice story: operator-chosen, role-based, not radio-based
- 1:20–1:45 Suite composition: loraTAK + digiTAK = cross-RF chat, loraTAK + baseTAK = base-camp laptop
- 1:45–2:00 Beta access link

---

## Live-demo talking points

- **Hold up the Meshtastic.** "Stock firmware. No custom build. This costs $30-40."
- **Show base-camp appliance.** "Same Meshtastic radio, plus an appliance running loraTAK. Connected via USB. That's the whole gateway."
- **Open the TAK map.** "Every mesh node, populated on the map. Each one's a first-class TAK contact with operator-chosen icon and live telemetry."
- **Click a contact.** "Battery 73%. Voltage 3.91. Channel utilization 4%. SNR 12.4 dB. Last beacon 22 seconds ago."
- **Type a chat on the handheld.** "Watch the IC's screen." (Show it arriving.)
- **Reverse it.** "Now I type on the laptop. Watch the handheld." (Show arrival.)
- **Stress-test the network:** "Walk away with the handheld. Range depends on RF — but at 1 watt with no antenna upgrade, expect a few hundred meters of brush, a few miles line-of-sight."

---

## Objections + responses

| Objection | Response |
|---|---|
| "Why not just use APRS?" | "Different audience. APRS requires a ham license; Meshtastic uses license-free spectrum. For event volunteers, CERT, prepper teams, kids — Meshtastic is the lower-friction onboarding." |
| "What about commercial mesh-radio products?" | "Meshtastic radios start at $30 vs $300+. Stock firmware, open hardware, global license-free spectrum. Different price point, different audience." |
| "How does it handle long messages?" | "Inbound — multi-part messages reassemble cleanly. Outbound — current build truncates with '…'. Multi-part outbound is in development." |
| "Is GPS required on the mesh radio?" | "No. GPS-off devices get synthetic positions anchored to the gateway location, so they stay chat-able even without GPS." |
| "Does loraTAK depend on baseTAK?" | "No. loraTAK is standalone. Joins any TAK network on the LAN — works with ATAK / WinTAK / iTAK / baseTAK in any combination." |

---

## Visual / image cues

- **Mesh node clipped to a pack** — clear shot of a small Heltec or T-Beam unit clipped to a SAR volunteer's vest.
- **Base camp setup** — appliance + Meshtastic + Toughbook on a folding table, forest trailhead in the background.
- **The map populating** — animated time-lapse of mesh contacts appearing across a topographic basemap.
- **Cross-modal chat** — Meshtastic handheld in one frame, ATAK tablet in another, same chat thread visible on both.

Avoid: military / defense imagery, weapons, plate carriers.

---

## Key terms

- **Meshtastic** — open-source mesh networking firmware for LoRa radios. Stock firmware on commodity Heltec / T-Beam / RAK hardware.
- **LoRa** — long-range, low-power radio modulation. Sub-GHz license-free spectrum globally.
- **Mesh** — self-organizing radio network where nodes relay traffic for each other. Resilient to node loss.
- **Heltec / T-Beam / RAK / Station-G2** — common Meshtastic hardware vendors.

---

*Related: [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/loraTAK.html`.*
