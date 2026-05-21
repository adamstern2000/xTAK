# xTAK Website Project — Learnings & Positioning Decisions

**Date:** 2026-05-19
**Purpose:** Capture every framing decision, positioning refinement, and accuracy correction made during the marketing-website build, so any future updates to `marketing/web/*.md` or `marketing/modules/*.md` reflect the current, considered positioning rather than drifting back to earlier copy.

This is the **source-of-truth for product positioning** as of 2026-05-19. The live website (`site/`) is the authoritative implementation; this doc explains *why* each piece reads the way it does.

---

## Brand

### Visual identity
- **Mark:** Converging Paths X — 4 white arrowheads pointing inward, cyan diamond at the convergence point. Implemented as an SVG mask in `.brand__diamond` in `site/css/styles.css`.
- **Wordmark:** "xTAK" — lowercase `x` in cyan, uppercase `TAK` in bright white. The `tak` portion is uppercase **everywhere it appears**, with the sole exception of the literal `buymeacoffee.com/xtak` URL slug.
- **Color tokens:** TAK cyan (`#00d9ff`) for accent, charcoal `#08090d` for base canvas, amber `#ff9b3a` for "future / in development" / warnings.
- **Typography:** Big Shoulders Display (display), Albert Sans (body), JetBrains Mono (mono labels).
- **Tactical-HUD aesthetic:** monochrome with cyan accents, mono labels with high letterspacing, section coord-labels (`04 / DEPLOY`, `06 / DETAIL`, etc.).

### Brand-mark deployment
- The mark appears in the nav of every page, sized large (44px) next to the wordmark
- Same mark appears in the footer (smaller, no wordmark accent)
- Future placements: favicon, OG image, GitHub README — all TBD

### Product-name casing
- **Suite name:** xTAK (cyan x + uppercase TAK)
- **Product names** always preserve their stylized case: **baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, aiTAK** — never lowercase, never uppercase, never with a leading `x` prefix (the `x` is the suite, not part of any individual product name).
- "TAK" is uppercase in every brand context. CSS rules that forced lowercase have been removed.

---

## Site-wide positioning decisions

### What we don't compare to
We **removed all comparison tables that named specific competitors.** Earlier drafts included "vs. WebTAK / ATAK-CIV / WinTAK-CIV / Anduril / Palantir / FlightAware / goTenna / TAKChat / TAKtical plugins" tables on every product page. **All removed.**

**Reason:** xTAK is a young independent project. Comparing it to PAR Government's TAK products picks a fight with the community we want as allies. Comparing it to Anduril / Palantir / FlightAware / goTenna invites legal pushback we don't have time to defend. Naming community plugins makes enemies. Even when every claim is technically accurate, the table format reads as combative.

**What replaced the tables:** a single **"★ Choose X when…"** closer per product page that states the positive case for picking that product, without comparing to anything specific. Located at the bottom of each Feature Catalog section.

### What we don't name in body copy
- Legacy APRS clients (UI-View32, AGW, YAAC, APRSIS32, Xastir, etc.) — earlier copy called these out by name. **All removed.** The current digiTAK O5 reads "For ham operators tired of legacy APRS software" — no specific names. UI-View32 in particular is closed-source freeware with a strong community around the late Roger Barker (G4IDE); we explicitly avoid that.
- Commercial competitors — same logic; not worth the heat.

### Internal codenames
- `cot_bridge` is the internal codename for what users see as **baseTAK**. **Never appears in operator-facing copy.** Body text says "baseTAK" everywhere.
- `cot_radio` (digiTAK), `cot_mesh` (loraTAK), `cot_sdr` (sdrTAK), `cot_chat` (the chat library shared by baseTAK and chatTAK) still appear in some `readout__item` "CODENAME / x" labels at the top of product pages as an engineering wink — those are fine. They should NOT appear in body copy, feature lists, or descriptive prose.
- Internal Python filenames (`chat_router_standalone.py`, `tak_router_standalone.py`, etc.) were removed from public feature bullets.

### Engineering hygiene claims removed
- Earlier copy boasted "30-suite Playwright QA harness with ~228 cases" (baseTAK) and "1645+ pytest cases" (digiTAK) as if these were operator benefits. **They aren't.** Removed from baseTAK; kept as a passing mention in digiTAK shared features where it doesn't compete with operator-facing claims. Don't promote test-suite size as a feature.

---

## Per-product positioning

### baseTAK

**Headline framing:**
- Tagline: "Run the operation from a browser. Faster than WinTAK by design."
- Two-pillar selling points the user identified: **(1) how easy it is to deploy, (2) how fast you can react to fast-moving situations.**

**INSTANT DEPLOY section** *(new, between scenario and outcomes)*:
- Headline: **"The whole country, pre-loaded on the laptop."**
- Hero fact: **a 1 TB MBTiles file holds satellite imagery for the entire continental United States.** Load it once; deploy anywhere. No "pre-cache the area before the op" step.
- Two tiers in a 2-up:
  - **LAPTOP TIER** — 20+ users on a Toughbook or any modern laptop (32 GB RAM, 2 TB SSD). The 1 TB CONUS file fits with room to spare.
  - **SERVER TIER** — 100+ users, 50 TB SSD, multi-source aerial imagery + hi-res topographic + FEMA hazard layers + regional overlays. "Forget about *just* CONUS sat" — agency or multi-state-exercise scale.
- **Credibility kicker:** "Every screenshot on this site — Devil's Gate Fire (CA), Bolder Boulder (CO), Catskills SAR (NY), Smokies SAR (NC/TN), ORD airspace (IL), DC airspace, Puget Sound (WA) — was rendered from the same 1 TB MBTiles file running on a laptop." Turns the entire site image gallery into a live demo of the claim.

**Tileserver framing (corrected):**
The old "drop MBTiles into baseTAK and they're served immediately" claim was **overstated**. The actual benefit:
- baseTAK includes a **standard tileserver** that serves very detailed maps to every TAK client on the network — **baseTAK, ATAK, WinTAK, iTAK** — and to **any other app that speaks the standard tileserver format**.
- **EUDs download tiles directly when connected over the network.** No HQ provisioning of every device, no sideload, no SD-card preflight.
- Multi-source basemaps (aerial, USGS topo, OSM, FEMA hazard) — any standard tile format works.
- And it extends to the field via netTAK ("baseTAK Lite").

**Authoritative SA source — re-broadcast mechanics (Outcome 03):**
- **3-burst initial broadcast:** every new marker, drawing, or shape is emitted **three times at 30-second intervals** when it's created. Catches up clients that missed the first send.
- **Per-COT-type re-broadcast cadence (admin-configurable):** each COT type has its own admin-set re-broadcast cadence. High-value items (evac zones, hot zones, critical contacts) re-broadcast often; static infrastructure markers re-broadcast rarely.
- **Take ownership of other users' COTs** *(in development)* — a designated user can take ownership of any marker on the wire, including ones placed by other operators, and baseTAK keeps re-broadcasting it from then on. **No more orphaned markers when the operator who placed them goes off-net.** Tagged as in-dev; do not promise as shipped.

**Other baseTAK refinements:**
- **Filter the map by icon type** — paired with digiTAK, the filter is APRS-symbol-aware; paired with sdrTAK, it filters aircraft by emitter category (helo, heavy, light, glider, military) and ships by AIS type. One control, multi-source decluttering.
- **Address + business search** — open-source geocoding data, no Google API key, no per-query fees, no third-party tracking.
- **Built-in TAK file server** — full native fileshare protocol compatibility (`b-f-t-r` CoT type), 50 MB attachments, SHA-256 validation, HTTPS endpoint, SQLite audit trail. Hidden feature in earlier copy; now promoted to a prominent feature-list bullet.

---

### digiTAK

**Headline framing (corrected):**
- digiTAK runs on **its own Pi** — always. The two modes (Bridge and Standalone) describe **what else is on the network**, not where digiTAK runs.
- **"Drop a digiTAK in. Instantly an APRS gateway."** This is the headline for the INSTANT DEPLOY section.
- Plug it onto any network and the LAN gains a full APRS gateway — every ATAK, iTAK, WinTAK, or baseTAK browser picks up APRS stations as native TAK markers.

**The two modes (corrected framing):**
- **Bridge mode** = digiTAK alongside other xTAK products on the network. Talks to baseTAK and other products via standard TAK protocols on the wire. cot_bridge ownership story REMOVED. digiTAK is its own Pi; baseTAK is somewhere else on the network.
- **Standalone mode** = digiTAK is the whole TAK install. No baseTAK anywhere on the network. digiTAK hosts its own chat router and TAK router; every ATAK / WinTAK / iTAK on the LAN connects directly. The whole TAK environment fits on one Pi.

**Outcome 02 — "Pair with baseTAK for the best APRS map experience"** *(renamed from "Put every APRS station on your TAK clients")*:
- digiTAK + baseTAK is the **richest APRS picture on any modern map.**
- **Full APRS icon set on the map** — every primary and alternate APRS symbol (digi, mobile, weather, ambulance, fire engine, boat, aircraft, NWS object) renders as a proper TAK icon. Not generic dots.
- **Filter by APRS device type** — baseTAK's map filter isolates the symbols you care about. Show only weather stations during SKYWARN, only mobile trackers during a race, etc.

**Outcome 03 — digiTAK + loraTAK partnership** *(new bullet added)*:
- "And when **loraTAK** is on the network, an APRS user can DM a Meshtastic LoRa user just as easily — digiTAK and loraTAK are **full mesh partners** on the same TAK chat thread. A ham with an HT can message a SAR volunteer with a $40 mesh radio."

**Accuracy corrections:**
- **TAK-APRS Protocol Extension version:** **v2.3** (previously documented as v1.2 — corrected).
- **Sibling-gateway coexistence:** softened from "no packet collisions" *(unprovable on half-duplex RF)* to "multiple digiTAKs on one RF channel **coordinate so they don't re-emit or re-digipeat each other's traffic**." Standard channel collisions still apply — half-duplex RF is half-duplex RF.

---

### loraTAK

**Headline framing:**
- "Your Meshtastic mesh, now a TAK network."

**Icon assignment (corrected):**
- **Removed:** the "hardware-aware icons" claim (we don't render icons based on Heltec / T-Beam / RAK / Station-G2 device model).
- **Added:** **operator-chosen icons** — assign any team color, role, and icon to each Meshtastic user: full MIL-STD-2525C symbology, or any standard ATAK iconset (firefighter, SAR, medic, etc.). **"Icons reflect the role on the team, not the radio model."**

**Multi-part message handling (clarified):**
- Three claims, untangled from a single muddled previous bullet:
  - **Multi-part outbound to LoRa** *(in development)* — outgoing messages longer than the Meshtastic packet limit will split across multiple LoRa sends. **Current build truncates with a "…" suffix.**
  - **Multi-part inbound reassembly** *(shipped)* — long mesh-origin messages that arrive as multiple LoRa packets reassemble cleanly on the TAK side.
  - **Read receipts and addressable DMs** *(shipped)*.

**Outcome 03 — "Full mesh partner with digiTAK and the xTAK suite"** *(renamed from "Work alongside the rest of the xTAK suite")*:
- loraTAK and digiTAK are **full mesh partners on the TAK network.** A SAR volunteer with a $40 Meshtastic radio can DM a ham operator with an APRS handheld; a weather-station beacon on APRS sits next to a hiker's LoRa node on the same map.
- **LoRa users chat with APRS users (and every TAK client)** — Meshtastic chat → TAK GeoChat → digiTAK → APRS-IS or RF, end to end. Both products speak standard TAK on the wire.

---

### chatTAK

**New feature added to feature catalog:**
- **Timeline + threaded views** — read the chat feed in chronological order (newest at the bottom), or grouped by conversation so a single DM, team, or group thread collapses into one block. One click between them.

**Everything else unchanged from prior positioning** — chatTAK is the comms-forward Pi-appliance TAK chat for stakeholders who don't need the SA map.

---

### sdrTAK

**Outcome 01 — "Pair with baseTAK for the best aircraft picture"** *(renamed from "See every transponder-equipped aircraft in your operating area")*:
- sdrTAK + baseTAK headline framing, parallel to digiTAK O2.
- **Proper aircraft icons on the map** — 14 ADS-B emitter categories mapped to 2525C/2525D symbology. Airliners look like airliners; helos look like helos.
- **Filter by aircraft type** — baseTAK's map filter isolates emitter categories: only military during a TFR, only rotorcraft during SAR coordination, only heavies during airshow ops.

**Everything else unchanged** — ADS-B 1090 ES, UAT 978, CPR position decoding, OpenSky aircraft database, mil hex-range auto-flag, SoapySDR abstraction.

---

### netTAK *(design phase — first ship 2026Q3 estimated)*

Status banner explicitly marks "★ Design phase — first ship 2026Q3 estimated" on the feature catalog. The framing is design-target, not shipped functionality.

**Outcome 01 — image is the multi-agency cinematic photo** (one netTAK appliance in foreground on a tailgate, ten operators on different gear arranged across foreground/midground/background). The pitch: **"one netTAK, every field device"** — operator-grade pricing, commodity hardware, the TAK stack already in the box.

---

### aiTAK *(design phase — release timing TBD)*

Status banner marks "★ Design phase — release timing TBD" everywhere.

**Outcome 01 chat panel** rendered from the **Devil's Gate Fire scenario** YAML, anchoring every aiTAK example in a checkable operational context. Three chat scripts shipped:
- O1 — Q&A about the operational picture (`marketing/aitak-o1-chat-script.md`)
- O2 — Watchful background alerts (`marketing/aitak-o2-alerts-script.md`)
- O3 — Drafts / summaries / translations (`marketing/aitak-o3-drafts-script.md`)

**Rendering constraint:** chatTAK incognito-window workflow only supports 2 callsigns easily. All three scripts use only `@ic-base` and `@aiTAK`. Future scripts should follow the same constraint.

---

## Site information architecture

Standard product-page sequence (matches `site/products/<product>.html`):

```
01  Pagehead (status pill, breadcrumb, title, subhead, CTAs)
02  Trust strip (target-audience callouts)
03  Hero image
04  Scenario (sticky-title + narrative paragraphs)
04a INSTANT DEPLOY / SCALES TO YOUR OP (where applicable — baseTAK + digiTAK)
05  Outcomes (3–5 numbered outcome stories, each with image + bullet list)
06  Capability catalog (full feature list, grouped by mode where relevant)
    └── ★ Choose X when... closer
07  Beta · Early Access CTA banner
08  Specs (HW / install / version)
09  FAQ
10  Footer
```

The home page adds:
- Hero
- Trust strip
- Hero image (Devil's Gate Fire scenario)
- Scenario narrative
- Products grid (8 tiles — 7 products + BMAC support)
- Design Propositions (6 commitments: stand-alone / off-grid / 100% TAK fidelity / self-hosted / operator-built / Pi-class portable)
- Architecture diagram (CSS network diagram: TAK clients above the LAN spine, xTAK gateways below — replaces the previous ASCII-art block)
- Early adopter CTA
- Get-started picker
- Status table (per-product Beta / Future status with timing notes)
- FAQ

---

## Suite-level "1 + 1 = 3" stories

Three places where the killer pitch is the **combination of products**, not any single product. These are the strongest competitive moments on the site:

1. **digiTAK + baseTAK** — the best APRS map experience (full icon set + map filter by APRS device type). digiTAK Outcome 02.
2. **sdrTAK + baseTAK** — the best aircraft picture (proper 2525 icons + filter by emitter category). sdrTAK Outcome 01.
3. **digiTAK + loraTAK** — full mesh partners (APRS users chat with Meshtastic LoRa users, both visible to every TAK client). loraTAK Outcome 03 + a mirror bullet in digiTAK Outcome 03.

These three are intentional. Future positioning work should keep them prominent.

---

## URL / link conventions

- **Buy Me a Coffee:** `https://buymeacoffee.com/xtak` (corrected from `/xtakproject`)
- **Wire spec:** `https://github.com/adamstern2000/cot_radio_aprs`
- **Project repo:** `https://github.com/adamstern2000/xTAK`
- **Source markdown for product pages:** `marketing/web/*.md`
- **Source-of-truth product specs:** `marketing/modules/*.md`
- **Built website (deployable):** `site/`
- **Image prompts:** `marketing/image-prompts.md` and `marketing/outcome-image-prompts.md`

---

## Honest-disclosure conventions

Anywhere we describe a capability that isn't shipped yet, tag it explicitly:
- `<span class="text-amber">(in development)</span>` in HTML
- `*(in development)*` in markdown
- "*(Design phase — first ship 202XQX estimated)*" for products not yet started
- Always pair an unshipped feature with the current behavior so the page doesn't read as a promise. Example: *"Multi-part outbound to LoRa **(in development)** — outgoing messages longer than the Meshtastic packet limit will split into multiple LoRa sends. (Current build truncates with a '…' suffix.)"*

Half-duplex RF: never claim "no collisions." Always: "doesn't re-emit or re-digipeat" + "standard channel collisions still apply."

---

*Maintained alongside the live website. When the website copy changes, update this doc so the markdowns can be brought back in sync. When the markdowns change, update the website. The two are meant to converge over time.*
