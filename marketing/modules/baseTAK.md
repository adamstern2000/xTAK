# baseTAK — Marketing Module

**Status:** Beta — shipping soon (v 0.45.x)
**Last updated:** 2026-05-19
**Use this for:** social posts, video scripts, demo talking points, sales conversations, podcast briefs.

---

## TL;DR (the 60-second pitch)

baseTAK is a full TAK situational-awareness picture — map, chat, drawing, file transfer, the works — that runs in a browser tab. No app install, no Play Store, no MDM. Every laptop in your EOC becomes a first-class TAK operator alongside ATAK, WinTAK, and iTAK. **A 1 TB MBTiles file holds satellite imagery for the entire continental US**, so the maps are already on board when you arrive at the incident — no pre-cache step, no per-state download. Open the laptop, hand out the SSID, your team is on a TAK picture of the whole country at satellite detail. Instant.

**The two-pillar selling point**: how easy it is to deploy, and how fast you can react to fast-moving situations.

---

## Taglines — pick the angle

- **"Run the operation from a browser."** *(headline)*
- **"The whole country, pre-loaded."** *(scale / deploy angle)*
- **"Two-click broadcast. The whole team sees it."** *(speed angle)*
- **"A full TAK picture in any browser tab."** *(simplest reduction)*
- **"Faster than WinTAK by design."** *(competitive — use sparingly; see PROJECT-LEARNINGS)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **EOC / EM directors** | "Every laptop in the EOC becomes a TAK operator. No tablet inventory, no MDM, no app deployment. Operators already know browsers." |
| **Incident Commanders** | "Open the laptop, the country's map is already there. Drop markers in two clicks. Every device in the network sees them within seconds." |
| **SAR Coordinators** | "The base-camp laptop runs the whole picture. Every searcher's tablet pulls maps from the laptop over Wi-Fi. No internet at the trailhead." |
| **Fire / Wildland** | "The mobile EOC truck runs baseTAK on a Toughbook. Every engine's iPad / ATAK tablet pulls tiles directly. CAL FIRE / USFS interop preserved — every marker is byte-identical." |
| **EmComm / ARES** | "baseTAK is the home base of the whole xTAK suite. Pair with digiTAK for APRS, loraTAK for mesh, sdrTAK for air. All on the same network, no integration." |
| **Public safety LE/EMS** | "Browser-native means iPads, Chromebooks, Toughbooks — anything in the fleet works. Multi-user with team color, role, presence — built for shift handoffs." |
| **Ham radio operators** | "The TAK client your APRS station has always needed. Modern map, search by address, filter the picture by APRS device type. Pair with digiTAK and your station shows up on every TAK client too." |

---

## Killer features (the headline bullets)

1. **The whole country, pre-loaded** — 1 TB MBTiles = full CONUS satellite imagery on a 2 TB laptop. No "download tiles for the area" step.
2. **Two-click broadcast** — pick the icon, click the spot. No "send" button. No "are you sure" dialog. Curated icon set tuned for fire / SAR / EOC / EmComm workflows.
3. **3-burst initial broadcast + per-COT-type re-broadcast cadence** — every marker is emitted 3× at 30-second intervals on creation; each COT type has its own admin-set ongoing cadence. The picture stays current even on flaky Wi-Fi.
4. **Built-in TAK file server** — send files up to 50 MB to any WinTAK / ATAK / iTAK client. Standard `b-f-t-r` fileshare CoT, SHA-256 validation, SQLite audit trail. No TAK Server required.
5. **Standard tileserver** — serves the same map stack to baseTAK browsers, ATAK, WinTAK, iTAK, and any other tileserver-compatible app. EUDs download tiles directly when connected.
6. **Map filter by icon type** — paired with digiTAK, filter by APRS device type; paired with sdrTAK, filter aircraft by emitter category and ships by AIS type.
7. **Address + business search** — open-source geocoding, no Google API key, no per-query fees, no third-party tracking.

---

## Suite-level pairings (1 + 1 = 3 stories)

- **baseTAK + digiTAK** = the best APRS map experience. Full APRS icon set rendered as proper TAK icons + filter by device type with a click. *Lead pitch for ham audiences.*
- **baseTAK + sdrTAK** = the best aircraft picture. 14 emitter categories with proper 2525 symbology + filter by military / heavy / rotorcraft / glider with a click. *Lead pitch for aviation / airshow / TFR audiences.*
- **baseTAK + the suite** = drop any other xTAK product on the LAN and it shows up. APRS via digiTAK, Meshtastic via loraTAK, aircraft via sdrTAK, browser-user chat via chatTAK, mesh fabric via netTAK. *Lead pitch for "I need a complete stack" audiences.*

---

## Honest disclosures

- **Status:** Beta — shipping soon. Current version v 0.45.x. Early Adopters get the build now.
- **Take ownership of other users' COTs** — *in development*. Lets a designated user re-broadcast markers placed by operators who've since gone off-net. Not promised as shipped; phrased as "in development" on the live site.
- **Tileserver:** does not auto-ingest dropped files instantly — that earlier claim was overstated. Real value is **standard format, every TAK client + any compatible app, direct EUD download over the network.**
- **aiTAK pairings:** aiTAK release timing TBD. Don't promise as available today.

---

## Sample social posts

### X / Twitter (≤ 240 chars)

> **POST 1 — the deploy hook**
> Open the laptop. The country is already there.
>
> 1 TB MBTiles = satellite imagery for the entire continental US, pre-loaded.
>
> No "download tiles for the area" step. baseTAK is ready the moment you sit down. #TAK #SAR #EmComm

> **POST 2 — the two-click hook**
> Most TAK clients take four clicks to drop a marker and broadcast it.
>
> baseTAK takes two.
>
> Every marker fires on the network the moment you click. The whole team sees it within seconds.
>
> Browser-native TAK. Now in Beta.

> **POST 3 — the multi-user hook**
> Every laptop in your EOC becomes a TAK operator.
>
> No app install. No MDM. No Play Store. Chrome, Firefox, Safari, Edge — anything modern.
>
> A full TAK picture in a tab, byte-identical to ATAK on the wire.

> **POST 4 — the suite hook**
> baseTAK + digiTAK = every APRS station on the map with proper APRS icons. Filter by device type with a click.
>
> baseTAK + sdrTAK = every transponder-equipped aircraft, filter by emitter category.
>
> One LAN. No integration. Just standard TAK.

> **POST 5 — the "proof on the page" hook**
> Every screenshot on https://xtak.io was rendered from the same 1 TB MBTiles file.
> California wildfire. Colorado race. New York SAR. Tennessee mountains. Illinois airport. DC airspace. Washington Sound.
>
> One file. The whole country. On a laptop.

### LinkedIn (400–800 chars)

> **POST A — the EOC deploy story**
> If you run an EOC, you've probably hit this: you bought ATAK tablets for the field teams, but the people in the EOC are on laptops. They can't run ATAK. They're stuck on whichever spreadsheet or chat tool you have, while the live TAK picture lives in a side room on a single WinTAK desktop.
>
> baseTAK is the fix. It's a full TAK situational-awareness picture — map, chat, drawing, geofencing, file transfer — that runs in a browser tab. Every laptop becomes a first-class TAK operator with team color, role, presence. Markers go onto the same shared picture every ATAK and WinTAK on the network already sees.
>
> Two-click broadcast. Built-in tileserver. 1 TB MBTiles = the whole country on board, ready the moment you open the laptop.
>
> In Beta now. Free for Early Adopters: https://buymeacoffee.com/xtak

> **POST B — the "no internet at the trailhead" story**
> SAR coordinators know this problem. You're at a remote trailhead. There's no cell. Your team has ATAK tablets that work great — when they have a map.
>
> Most teams pre-cache map tiles before the operation. It takes time. It's manual. You have to know what area you'll be in.
>
> baseTAK changes the math. A single laptop, 1 TB SSD, the entire continental US satellite imagery loaded once. When you set up at the trailhead, the tablets in the field pull tiles from the laptop over Wi-Fi. You didn't pre-cache anything. The country was already there.
>
> Wildland fire in California today, hurricane in Florida tomorrow, SAR in Washington the day after. Same hardware. No re-provisioning.

---

## Video script outlines

### 30-second cinematic (social-cut format)

| 0:00–0:05 | Tight close-up of a laptop opening on a folding table at a forward EOC. Hand reaching to the trackpad. |
| 0:05–0:12 | Screen fills frame — a TAK terrain map with markers, the IC drops a new marker with two clicks. |
| 0:12–0:20 | Quick cuts: the same marker appearing on an ATAK tablet a deputy is holding; on a WinTAK desktop two rooms over; on an iTAK iPad in a fire engine. |
| 0:20–0:25 | Pull back to a wide of the EOC — twelve laptops, twelve people, one shared picture. |
| 0:25–0:30 | Title card: **baseTAK. Run the operation from a browser.** + buymeacoffee.com/xtak |

**VO (optional, single line):** "Most TAK clients take four clicks to drop a marker. baseTAK takes two."

### 60-second demo

1. **Hook (0:00–0:08):** Hand opening a laptop. "Run the operation from a browser." Tab opens, map fills.
2. **Pre-loaded country (0:08–0:18):** Pan to show the IC zooming around — Northeast, Southwest, Pacific NW — at satellite detail, no loading. VO: "1 TB on the SSD. The whole continental US, already on board."
3. **Two-click broadcast (0:18–0:30):** Close-up on the icon picker, click an icon, click the map. Cut to a second screen showing the marker appear within a second. VO: "Two clicks. The whole team sees it."
4. **Suite composition (0:30–0:48):** Quick cards: APRS contacts streaming in (digiTAK), Meshtastic mesh nodes (loraTAK), aircraft (sdrTAK), browser-user contacts (chatTAK). VO: "Drop any other xTAK product on the LAN — APRS, mesh, aircraft, chat — and it shows up. No glue."
5. **Close (0:48–0:60):** Wide of a real EOC scene. Title card: **baseTAK. In Beta now. Become an Early Adopter at buymeacoffee.com/xtak**

### 2-minute deep dive (YouTube / conference brief)

- **0:00–0:15 Setup the problem.** EOC environment, ATAK tablets in the field but laptops in the EOC.
- **0:15–0:45 What baseTAK is.** Browser-native, multi-user, full CoT fidelity. Show the live UI.
- **0:45–1:10 Why it's fast.** Two-click broadcast, curated icon set, keyboard shortcuts, broadcast-by-default. Close-ups on the speed.
- **1:10–1:30 The deploy story.** 1 TB CONUS MBTiles. The screenshots on this site = proof.
- **1:30–1:50 Authoritative SA.** 3-burst initial broadcast + per-COT-type cadence keeps every client current on flaky networks. Mention take-ownership (in dev).
- **1:50–2:00 CTA.** Beta, Early Adopter program, link.

---

## Live-demo talking points

- **Open the browser, navigate to the URL.** "No app install. No login. Pick a callsign, pick a team color, you're on."
- **Pan across the country.** "Watch the satellite imagery as I zoom. No loading bars. This is offline — the WAN is off. The whole country is on this laptop's SSD."
- **Drop a marker.** "Two clicks. Pick an icon, click the spot." Show it appearing on the other device.
- **Open the side rail.** "Every contact on the network, grouped by source. Browser users, ATAK tablets, APRS stations from digiTAK, mesh nodes from loraTAK, aircraft from sdrTAK — all here."
- **Draw a polygon.** "Hand-draw an evac zone. Geofence with entry/exit alerts. Every TAK client on the LAN sees it instantly."
- **Switch tabs to show the file server.** "Send a 30 MB PDF to a WinTAK in the field. Standard TAK fileshare CoT. They get a chat notification, click to download."
- **Pull up the chat panel.** "Multi-user GeoChat. DMs, team, broadcast, custom groups. Read receipts. Timeline view or threaded view."

---

## Objections + responses

| Objection | Response |
|---|---|
| "We already have WinTAK." | "Great — baseTAK runs alongside WinTAK on the same LAN. Add browser users to the same picture; everyone sees everyone." |
| "Why not just use a TAK-Server-based web client?" | "Different category. Those need a TAK Server. baseTAK is self-hosted, runs on a laptop, includes its own file server. No server license needed." |
| "Browser-based — is it slow?" | "Not in practice. The 3D map is hardware-accelerated. We render the same MBTiles ATAK does. Multi-user up to 100 users on a typical server." |
| "What about security?" | "Self-hosted. Data stays on your hardware. SQLite-backed persistence. No cloud account, no third-party telemetry. Open standards on the wire." |
| "Does it work offline?" | "Designed for offline. No internet required. The 1 TB CONUS file is preloaded. Tileserver serves every TAK client on the LAN." |
| "How do I migrate from a TAK Server setup?" | "You don't need to. baseTAK joins your existing TAK network as a peer. Federate as much as you want, or run baseTAK as the server-of-record for the suite." |

---

## Visual / image cues

Strong visuals for posts + b-roll:

- **The 1 TB on a laptop** — Toughbook open on a folding table, screen showing a TAK terrain view of a recognizable region (CA / NE / PNW).
- **The EOC wide shot** — multiple laptops on a long table, the same TAK picture on each.
- **The two-click flow** — over-the-shoulder of an operator, picking an icon and clicking the spot, then immediate cut to another device showing the marker appear.
- **The suite composition** — a single TAK map with multiple icon types (aircraft + APRS + mesh + browser users) coexisting.

Avoid: literal military gear, plate-carrier vests, weapon imagery, cyberpunk / Tom Clancy aesthetic, neon glow, hexagons.

---

*Related: [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/baseTAK.html`.*
