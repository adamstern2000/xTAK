# sdrTAK — Marketing Module

**Status:** Public Beta — available now (v1.4.7)
**Last updated:** 2026-07-08
**Use this for:** social posts, video scripts, aviation / maritime / SDR-hobby content.

---

## TL;DR

sdrTAK is a software-defined-radio listener that decodes ADS-B, UAT, and (soon) AIS into native TAK contacts. Plug in a $20 RTL-SDR dongle and every transponder-equipped aircraft and ship in your area shows up on the TAK map with full track, callsign, and identity. **Paired with baseTAK, every aircraft renders with the correct icon for its emitter category, and you can filter the map by type with a click.** 14 ADS-B emitter categories mapped to proper 2525C/2525D symbology. 520k-entry OpenSky aircraft database for callsign / tail / operator lookup. Auto-flags military hex ranges.

---

## Taglines

- **"Every aircraft in the sky. Every ship in the bay."** *(headline)*
- **"Pair with baseTAK for the best aircraft picture."** *(suite angle)*
- **"$20 dongle. Every transponder. On your TAK map."** *(cost angle)*
- **"Local. Offline. Yours."** *(self-hosted angle)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **TFR coordinators / airshow ops** | "Filter the air picture by emitter category. Only military traffic during a TFR. Only rotorcraft during airshow coordination. Live, local, sub-second latency." |
| **Maritime ops / harbormasters** | "AIS shipping soon — every commercial vessel in the bay with full identity, course, and speed on the TAK map. Same appliance handles aircraft via ADS-B simultaneously." |
| **Wildland fire / aviation coordinators** | "When CAL FIRE / USFS air assets are inbound, sdrTAK puts them on the IC's map with proper helitanker / airtanker / scout icons. Mil hex ranges auto-flagged." |
| **TFR / restricted-airspace enforcement** | "Auto-flag aircraft entering a polygon you draw in baseTAK. Cross-reference with the 520k OpenSky database — tail, operator, owner — directly in the contact remarks." |
| **SAR coordinators with air support** | "Every helicopter on station shows up as a TAK contact. Track them in real time without depending on internet-hosted flight-tracking services." |
| **SDR hobbyists / amateur radio** | "You already have an RTL-SDR or HackRF. SoapySDR abstraction means 13 vendored drivers in the install tarball. Plug, decode, see contacts on a real TAK map." |
| **EOC / emergency management** | "Air picture for free. No third-party account, no per-query fees, no cloud dependency. Local appliance, $20 dongle, your data stays on your hardware." |

---

## Killer features

1. **ADS-B 1090 ES decoding** — the global civil aviation transponder standard. dump1090 backend.
2. **UAT 978 MHz decoding** — the U.S. general-aviation alternative. Run alongside 1090 with a second dongle.
3. **14 ADS-B emitter-category icons** — heavy, light, helo, glider, surface, sport, etc. — each rendered with the correct 2525C/2525D symbology.
4. **520k-entry OpenSky aircraft database** — auto-callsign lookup adds tail number, manufacturer, model, operator, and owner to every contact's remarks.
5. **Military hex-range auto-flag** — US, UK, Australia mil ranges plus 25+ callsign prefixes (RCH, FORTE, DUSTOFF, SAM, CGR).
6. **SoapySDR abstraction** — works with RTL-SDR, HackRF, Airspy, BladeRF. 13 vendored drivers in the install tarball.
7. **AIS** (162 MHz ship tracking) — for harbor, port, and coastal ops. *Decoder in tree; release imminent.*

---

## Suite-level pairings

- **sdrTAK + baseTAK** = the best aircraft picture. Proper aircraft icons + filter by emitter category (only military during a TFR, only rotorcraft during SAR coordination, only heavies during airshow ops). *Lead pitch.*
- **sdrTAK + the suite** = aircraft, AIS vessels, APRS stations (digiTAK), Meshtastic nodes (loraTAK) — all on the same TAK map, all filterable by source.

---

## Honest disclosures

- **Status:** Public Beta — available now.
- **AIS:** decoder in tree; release imminent — not yet shipped.
- **rtl_433 ISM-band sensors:** on the roadmap, not shipped.
- **OpenSky DB:** auto-updates on operator command (manual trigger).

---

## Sample social posts

### X / Twitter

> **POST 1 — the $20 hook**
> $20 RTL-SDR dongle + appliance = every transponder-equipped aircraft in your area on your TAK map.
>
> Sub-second latency. Offline. No third-party account. No cloud.
>
> sdrTAK is in Beta now.

> **POST 2 — the airshow / TFR hook**
> TFR coordination. Airshow ops.
>
> Filter the air picture by emitter category — only military, only rotorcraft, only heavies — with a click.
>
> Paired with baseTAK. Live, local, sub-second.

> **POST 3 — the mil-flagging hook**
> sdrTAK auto-flags aircraft in known US, UK, and Australia military hex ranges.
>
> Plus 25+ callsign prefixes — RCH (military airlift), DUSTOFF (medevac), SAM (special air missions), CGR (Coast Guard) and more.
>
> Friendly affiliation symbology, no manual tagging.

> **POST 4 — the proper-icons hook**
> sdrTAK + baseTAK = airliners look like airliners. Helos look like helos. Gliders look like gliders.
>
> 14 ADS-B emitter categories mapped to 2525C/2525D symbology.
>
> Not generic dots.

### LinkedIn

> **POST A — the wildland aviation coordination story**
> Wildland fire incident, hour 3. Mutual-aid air assets inbound — a Type 1 helitanker from CAL FIRE, an S-2T airtanker from CDF, two scout helos. The Air Ops chief wants to track every aircraft in real time without depending on an internet-hosted flight-tracking service.
>
> sdrTAK on an appliance with an RTL-SDR dongle decodes the live ADS-B stream. Each aircraft shows up on the IC's baseTAK map with its proper 2525 icon — helitanker, airtanker, scout — and full callsign attribution from the 520k OpenSky database.
>
> Sub-second latency. Offline. Local. No cloud account, no per-query fees, no third-party tracking.
>
> Public Beta, available now: https://xtak.ai/beta

---

## Video script outlines

### 30-second cinematic

| 0:00–0:06 | RTL-SDR dongle plugging into an appliance on a folding table. |
| 0:06–0:14 | TAK map fills with aircraft icons — helicopter, light, heavy, glider — all properly categorized. |
| 0:14–0:22 | Click an aircraft: callsign, tail number, operator, altitude, speed. |
| 0:22–0:27 | Filter to "military only" — civilian aircraft fade, mil traffic stays. |
| 0:27–0:30 | Title card: **sdrTAK. Every aircraft in the sky.** |

### 60-second demo

1. **Setup (0:00–0:10):** Plug dongle. VO: "Twenty-dollar RTL-SDR. Standard ADS-B hardware."
2. **Aircraft pour in (0:10–0:25):** Map populates with chevrons pointing along heading. VO: "Every transponder-equipped aircraft in your area, on your TAK map."
3. **Proper icons (0:25–0:40):** Zoom in. Airliner = airliner. Helo = helo. Glider = glider. VO: "14 emitter categories. Proper 2525 symbology."
4. **Filter by type (0:40–0:52):** Click filter. Only military. VO: "Paired with baseTAK, filter by emitter category with a click."
5. **Close (0:52–0:60):** Title + URL.

---

## Live-demo talking points

- **Show the hardware.** "RTL-SDR dongle. Twenty dollars. The appliance is whatever you have lying around."
- **Start the decoder.** "dump1090 backend. Standard ADS-B 1090 ES. You're hearing every transponder in range — that's typically a 100-mile radius at any decent antenna height."
- **Open the TAK map.** "Watch it populate. Each contact has the proper 2525 icon for its emitter category."
- **Click one.** "Tail number, manufacturer, operator, owner — pulled from the 520k OpenSky database that ships with the install."
- **Filter by mil.** "Auto-flag for US / UK / AU mil hex ranges plus 25+ callsign prefixes. RCH airlift, DUSTOFF medevac, SAM specials. Click the filter — only those traffic show."
- **Mention AIS.** "AIS for ships is in tree, release imminent. Same appliance, same architecture."

---

## Objections + responses

| Objection | Response |
|---|---|
| "Why not just use an internet-hosted ADS-B feed?" | "Those require an account, depend on internet, and feed your local picture out to a third party. sdrTAK keeps everything local — your data stays on your hardware, sub-second latency, works without internet." |
| "What about hosted ADS-B aggregation services?" | "Internet-dependent, third-party hosted, latency-bound. sdrTAK runs locally. Internet not required." |
| "What about pilot-focused ADS-B receivers?" | "Those serve XGPS / GDL-90 to aviation EFB apps. sdrTAK speaks TAK CoT so the contacts integrate with your operational picture, not a separate pilot's map." |
| "Range?" | "Depends on antenna and terrain. A roof-mounted antenna at 30 ft gives 100-150 nm typical. ADS-B is line-of-sight VHF UHF physics." |
| "When does AIS ship?" | "Imminent — decoder is in tree. Same architecture, same appliance." |

---

## Visual / image cues

- **RTL-SDR + appliance on a desk** — small, unassuming hardware.
- **The dense ADS-B picture** — TAK map with 50+ aircraft visible (use the ORD outcome image as reference).
- **The mil-flagged DC scene** — civilian muted, military amber. (Use the sdrtak-02-mil-flagged outcome image.)
- **Puget Sound composed** — aircraft + AIS vessels + APRS + mesh on one map.

Avoid: defense imagery beyond what TAK already uses; weapons; gun-sight crosshairs.

---

## Key terms

- **ADS-B 1090 ES** — Automatic Dependent Surveillance-Broadcast, Extended Squitter on 1090 MHz. Global civil aviation transponder standard.
- **UAT 978 MHz** — Universal Access Transceiver. US GA alternative to ADS-B 1090.
- **CPR** — Compact Position Reporting. Even/odd Mode S position decoding.
- **AIS** — Automatic Identification System. Maritime equivalent of ADS-B, on 161/162 MHz.
- **Emitter category** — ADS-B field describing aircraft size/role (heavy, light, helo, glider, surface, etc.).
- **Hex range** — ICAO 24-bit aircraft identifier. Country/registrant ranges are public; military ranges are documented.

---

*Related: [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/sdrTAK.html`.*
