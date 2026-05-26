# xTAK Suite — Marketing Module

**Status:** Beta — 5 of 7 products shipping, 2 in design (netTAK, aiTAK)
**Last updated:** 2026-05-19
**Use this for:** suite-level positioning, intro posts, conference talks, podcast briefs, "what is xTAK" explainers.

---

## TL;DR — what xTAK is

xTAK is a suite of seven independent services that extend the TAK ecosystem — ATAK, WinTAK, iTAK — to the places the official clients don't reach: amateur radio, LoRa mesh, off-grid Wi-Fi, SDR-decoded aircraft and ships, browser endpoints, AI assistants. Each product works standalone. Together they compose on one TAK network into a complete self-hosted situational-awareness stack. **The whole suite fits in a backpack.**

**The suite-level pitch:** when the WAN goes dark, xTAK keeps coordinating.

---

## What xTAK is NOT

- **Not a TAK client.** xTAK is a suite of *participants* — services and appliances that join the same local network, speak the same TAK protocol, and appear as peers alongside ATAK / WinTAK / iTAK.
- **Not a TAK Server replacement.** Some xTAK products federate without a TAK Server; others pair with FreeTAKServer if you already run one. The suite is protocol-compatible, not infrastructure-dependent.
- **Not affiliated with the TAK Product Center.** xTAK is independent. ATAK / WinTAK / iTAK / TAK are products and trademarks of the U.S. Government, made available through the TAK Product Center.
- **Not a defense product.** Operator-grade, public-safety / SAR / EmComm tier. Not Anduril. Not Palantir. Not Lattice.

---

## The 7 products at a glance

| Product | What it does | Status |
|---|---|---|
| **baseTAK** | Browser-native TAK map, chat, fileserver, tileserver. The hub. | Beta — shipping soon |
| **digiTAK** | Bidirectional APRS-to-TAK gateway over VHF + APRS-IS. | Beta — shipping soon (HF roadmap) |
| **loraTAK** | Meshtastic LoRa to TAK bidirectional bridge. | Beta — shipping soon |
| **chatTAK** | Browser TAK chat appliance — Pi-with-Wi-Fi, no app required. | Beta — shipping soon |
| **sdrTAK** | SDR-decoded aircraft (ADS-B + UAT) and ships (AIS imminent). | Beta — shipping soon |
| **netTAK** | Self-managing wireless mesh for field-deployable TAK operations. | Beta — shipping soon |
| **aiTAK** | AI agent participating in TAK chat as a first-class contact. | ★ Design phase (timing TBD) |

---

## Suite-level taglines

- **"Seven products. One TAK picture. No internet required."** *(headline)*
- **"When the WAN goes dark, xTAK keeps coordinating."** *(scenario angle)*
- **"The whole suite fits in a backpack."** *(scale / portability angle)*
- **"Self-hosted situational awareness for teams that have to coordinate when the WAN is gone."** *(longest, full-context)*

---

## The 6 commitments (every product)

These are the "Design Propositions" on the home page — every xTAK product is built to these:

1. **Stand-alone, compose by network** — every product is a complete service. They discover each other and trade data over standard TAK protocols. No glue, no integration tax, no shared database.
2. **Off-grid by design** — built to run without internet, without cellular, without TAK Server. Cloud is an option, not a requirement. Offline tarball installs with vendored dependencies.
3. **100% TAK protocol fidelity** — what xTAK emits on the wire is byte-identical to what WinTAK emits. Markers, chat, SA, team color, custom icons — full fidelity through every product.
4. **Self-hosted, no vendor lock-in** — standard TAK protocol on the wire. No subscription, no per-device licensing, no cloud account. The data is yours, the boxes are yours.
5. **Built for the operator** — designed by and for the people who actually run operations. Faster click paths, fewer menus, less clutter — the map gets the screen.
6. **Portable, battery-powered** — none of this lives in a server rack. Pi-class hardware throughout. The whole suite fits in a backpack.

---

## The three killer "1 + 1 = 3" stories

These are the suite-level moments where the combination beats any single product:

1. **digiTAK + baseTAK** = the **best APRS map experience**. Full APRS icon set rendered as proper TAK icons + filter the map by APRS device type with a click. Use this for any ham / EmComm audience.
2. **sdrTAK + baseTAK** = the **best aircraft picture**. 14 emitter categories with proper 2525 symbology + filter by military / heavy / rotorcraft / glider with a click. Use this for aviation / TFR / airshow audiences.
3. **digiTAK + loraTAK** = **full mesh partners**. A ham with a VHF HT can DM a SAR volunteer with a $40 Meshtastic radio — same TAK chat thread, both products speak standard TAK on the wire. Use this for SAR / EmComm volunteer scenarios.

---

## The single best scenario

When you need one scenario to illustrate the entire suite at once: **Devil's Gate Fire (Mt. Wilson, California, mid-summer)**.

It's the hero scenario on the home page and the backbone of every aiTAK chat script. Operationally rich (wildland-fire IC, structure-protection units, dozers, hand crews, helitanker / airtanker / scout helos, evac zones, geofence alerts firing, observatory + antenna farm as critical infrastructure), it lets every product show off:
- **baseTAK** renders the 3D terrain picture
- **digiTAK** brings in APRS-equipped EmComm volunteers
- **loraTAK** brings in Meshtastic searchers
- **sdrTAK** brings in inbound air assets
- **chatTAK** lets walk-up volunteers join the chat
- **aiTAK** answers IC questions and fires watchful alerts

Use Devil's Gate for any single-scenario explainer.

---

## Audience-by-audience suite framings

| Audience | The 30-second xTAK pitch |
|---|---|
| **EOC / EM directors** | "ATAK / WinTAK / iTAK are the operator clients. xTAK is the suite of services on the LAN that extend them to amateur radio (digiTAK), Meshtastic (loraTAK), aircraft and ships (sdrTAK), browser users (baseTAK + chatTAK), and AI assistants (aiTAK). When the WAN goes dark, you still have a TAK picture." |
| **SAR coordinators** | "One Pi at base camp running baseTAK. Searchers carry $40 Meshtastic radios — loraTAK puts them on the map. APRS-equipped volunteers — digiTAK puts them on too. Inbound helo — sdrTAK adds them. Walk-up volunteers — chatTAK gives them a phone-only chat endpoint. All on one TAK picture." |
| **EmComm / ARES** | "Your existing APRS infrastructure becomes a TAK SA wire (digiTAK). Add Meshtastic for license-free mesh (loraTAK). Run TAK from a laptop (baseTAK) or a chat-only Pi appliance (chatTAK). Drop-in nodes for field deploy (netTAK, coming). All standalone, all on one network." |
| **Wildland fire** | "Mobile EOC truck runs baseTAK on a Toughbook. CAL FIRE inbound aircraft on the map via sdrTAK. EmComm volunteers on APRS via digiTAK. Smokejumpers on Meshtastic via loraTAK. Spike camps on netTAK mesh (coming). One picture across the whole AO." |
| **Public safety LE/EMS** | "Browser-native TAK on every laptop and iPad in the agency (baseTAK). APRS over RF when LTE is down (digiTAK). Aircraft picture for TFRs (sdrTAK). Pi-appliance chat for stakeholders without TAK gear (chatTAK). Self-hosted, no third-party cloud." |
| **Ham radio operators** | "The TAK client your APRS station has always needed (baseTAK). A modern bidirectional APRS gateway (digiTAK, v2.3 open spec). License-free Meshtastic bridge (loraTAK). Aircraft and AIS decoded from a $20 SDR (sdrTAK). All on a Pi, all on your bench." |

---

## Sample social posts — SUITE LEVEL

### X / Twitter

> **POST 1 — the WAN-goes-dark hook**
> When the WAN goes dark, xTAK keeps coordinating.
>
> 7 services that extend ATAK / WinTAK / iTAK to amateur radio, LoRa mesh, off-grid Wi-Fi, SDR-decoded aircraft, browser endpoints, and AI assistants.
>
> Self-hosted. Backpack-portable. https://xtak.io

> **POST 2 — the architecture hook**
> Every xTAK product is standalone.
>
> Drop any of them on a TAK network and they compose — over the standard TAK protocol on the wire. No glue. No integration tax. No vendor lock-in.

> **POST 3 — the price hook**
> The whole xTAK suite fits in a backpack.
>
> $20 RTL-SDR for aircraft. $30-40 Meshtastic radios for mesh. Pi-class hardware everywhere. A Toughbook runs the EOC. The whole stack is operator-grade pricing.

> **POST 4 — the seven-products hook**
> 7 xTAK products. 1 TAK picture.
>
> baseTAK = browser hub
> digiTAK = APRS bridge
> loraTAK = Meshtastic bridge
> chatTAK = chat appliance
> sdrTAK = SDR aircraft/ships
> netTAK = mesh fabric (coming)
> aiTAK = AI on chat (design)

> **POST 5 — the suite-vs-single-product hook**
> No single xTAK product is the whole pitch.
>
> The pitch is the combinations:
> - digiTAK + baseTAK = best APRS map experience
> - sdrTAK + baseTAK = best aircraft picture
> - digiTAK + loraTAK = ham HT ⇄ $40 mesh radio chat
>
> Standard TAK on the wire. No glue.

### LinkedIn

> **POST A — what xTAK is**
> If you've used ATAK, WinTAK, or iTAK and wanted them to work in more places, this is for you.
>
> xTAK is a suite of seven services that extend the TAK ecosystem to:
> - Amateur radio (VHF, HF coming) via digiTAK
> - LoRa mesh (Meshtastic) via loraTAK
> - Off-grid Wi-Fi mesh (netTAK, Beta)
> - SDR-decoded aircraft (ADS-B + UAT) and ships (AIS imminent) via sdrTAK
> - Browser endpoints — full map (baseTAK) or chat-only (chatTAK)
> - AI assistance on TAK chat (aiTAK, design phase)
>
> Each product works standalone. Together they compose on one TAK network — standard protocol on the wire, no glue, no integration tax.
>
> Self-hosted. Backpack-portable. Beta now: https://buymeacoffee.com/xtak

---

## Video script outline — SUITE explainer (2 minutes)

1. **0:00–0:15 — Hook.** The WAN goes dark scenario. Cut between an EOC, a SAR base camp, a wildland fire ICP, a charity bike race.
2. **0:15–0:35 — What TAK is, briefly.** "ATAK / WinTAK / iTAK — the situational-awareness clients used by defense, public safety, SAR, amateur radio."
3. **0:35–1:00 — What xTAK is.** "Seven services that extend the ecosystem to amateur radio, LoRa mesh, off-grid Wi-Fi, SDR aircraft and ships, browser endpoints, AI assistants."
4. **1:00–1:30 — Quick product montage.** Each product gets 4-5 seconds with its core capability shown.
5. **1:30–1:50 — The composition pitch.** "Each product works standalone. Together they compose on one TAK network. No glue."
6. **1:50–2:00 — CTA.** Beta, Early Adopter, link.

---

## Common objections (suite-level)

| Objection | Response |
|---|---|
| "How is this different from PAR's TAK?" | "xTAK extends PAR's TAK. ATAK / WinTAK / iTAK are still the clients you use. xTAK adds the services on your LAN that bring APRS, Meshtastic, SDR, browser, and AI participants into the same picture." |
| "Do I need TAK Server?" | "No. xTAK products are self-hosted. baseTAK includes its own file server. digiTAK and loraTAK federate over RF. If you already run FreeTAKServer, drop xTAK products in as feeds." |
| "How do I get xTAK?" | "Two ways. Install our software on your own hardware (Pi-class Linux — Raspberry Pi 4/5, fanless mini-PC, handheld Linux box), or order a ready-to-deploy xTAK appliance from us. Either way, the software runs on your network. Your data stays on your hardware. The wire-format spec we designed (TAK-APRS Protocol Extension v2.3) is published openly at github.com/adamstern2000/cot_radio_aprs. Early Adopters get Beta build access." |
| "How does it compare to Anduril / Palantir?" | "Different category. Those are defense-grade, six-figure pricing. xTAK is operator-grade — public safety, SAR, EmComm. Pi-class hardware, open standards." |
| "Why should I pay for Beta?" | "You're not paying for Beta — you're supporting an independent project so it can reach GA. Buy Me a Coffee. https://buymeacoffee.com/xtak" |

---

## Project / repository links

- **Live website:** https://xtak.io (deploying from `site/` in this repo)
- **GitHub repo:** https://github.com/adamstern2000/xTAK
- **Open wire spec (TAK-APRS Protocol Extension v2.3):** https://github.com/adamstern2000/cot_radio_aprs
- **Buy Me a Coffee / Early Adopter:** https://buymeacoffee.com/xtak

---

## Marketing-asset inventory

The repo contains:

- **`site/`** — the deployable website (HTML/CSS/JS/images). Source-of-truth for live messaging.
- **`marketing/modules/`** — *(you are here)* — per-product marketing kits for social posts, video scripts, demo talking points.
- **`marketing/about-tak.md`** — explainer for the TAK ecosystem.
- **`marketing/bmac-about.md`** — Buy Me a Coffee / Early Adopter framing.
- **`marketing/COPYRIGHT.md`** — copyright and trademark policy.
- **`marketing/PROJECT-LEARNINGS-2026-05-19.md`** — canonical positioning doc. Read first.
- **`marketing/aitak-o1-chat-script.md` · `aitak-o2-alerts-script.md` · `aitak-o3-drafts-script.md`** — chat scripts for aiTAK rendered outcome images.
- **`marketing/image-prompts.md`** — hero image generation prompts.
- **`marketing/outcome-image-prompts.md`** — outcome image generation prompts per product.

---

*The website (`site/`) and the modules here are meant to converge over time. When the site changes, update the relevant module. When a module changes, consider whether the site should reflect it. [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md) is the bridge.*
