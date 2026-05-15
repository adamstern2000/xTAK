<!--
PAGE METADATA
title: sdrTAK — SDR-Decoded Aircraft and Ships as Native TAK Contacts | xTAK Suite
description: sdrTAK pulls aircraft (ADS-B 1090 ES, UAT 978) and ships (AIS) off the air with a $30 SDR dongle and renders them as native TAK contacts on ATAK, WinTAK, iTAK, and baseTAK. Air and surface situational awareness on your own receiver — no commercial feed, no subscription, no internet at install time.
og_image: /img/sdrTAK/hero.jpg
canonical: https://xtak.io/products/sdrTAK
-->

<!-- HERO IMAGE: Pi with an RTL-SDR dongle on a folding table at an airshow, ground-plane antenna on a tripod, WinTAK laptop showing aircraft contacts on a 150-mile radius -->

# Every aircraft in the sky.
# Every ship in the bay.

**sdrTAK is an SDR-powered radio decoder that pulls aircraft (ADS-B 1090 ES, UAT 978) and ships (AIS) off the air and renders them as native TAK contacts. Air and surface situational awareness in your ATAK, WinTAK, iTAK, and baseTAK — for the cost of a $30 dongle and an antenna.**

<!-- CTA BUTTONS: [Watch the 90-second demo] [Read the install guide] [View on GitHub] -->

---

<!-- TRUST STRIP -->
*Built for airshow safety teams, public-safety aviation units, SAR aircraft coordinators, harbormaster and coastal ops, aviation enthusiasts, and ADS-B / SDR hobbyists.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. digiTAK joins that same network as a peer — adding the worldwide APRS network as a first-class participant. [Learn more about the TAK ecosystem →](/about-tak)

---

## The scenario

<!-- IMAGE: split-frame — left side a WinTAK in an airshow safety tent showing 2525C aircraft icons across the region; right side the safety officer with a tripod-mounted antenna and a Pi on a folding table -->

It's the morning of a regional airshow. Twenty performing aircraft, two thousand spectators, an active temporary flight restriction overhead, and the airshow safety team watching for both ramp-side coordination and TFR busters — non-participating aircraft straying into the performance box.

The safety officer plugs an RTL-SDR into a Pi running sdrTAK and hoists an antenna onto a tripod. Within thirty seconds, every aircraft within 150 miles is rendering on his WinTAK with proper 2525C symbology — fixed-wing for the airliners overhead, rotorcraft for the news helicopter at the perimeter, friendly affiliation for the C-130 doing a flyby. The OpenSky database lookup adds tail number, type, and operator to each contact's remarks.

When an unfamiliar squawk drifts into the TFR from the south, it shows up on every TAK client in the safety tent. The ramp boss DMs the aircraft's callsign request to ATC over the radio without taking his eyes off the map.

**One Pi. One $30 dongle. One antenna. Every aircraft in the region.**

That's sdrTAK.

---

## What you can do with sdrTAK

### 1. See every transponder-equipped aircraft in your operating area

<!-- IMAGE: ATAK screen with dozens of aircraft contacts at different altitudes, each labeled with tail number and type, color-coded by emitter category -->

sdrTAK decodes the live ADS-B 1090 ES stream from the air around you and emits each aircraft as a native TAK contact. Civilian airliners, general aviation, helicopters, gliders with ADS-B — all on your map, in real time.

- **ADS-B 1090 ES decoding** — the global civil aviation transponder standard
- **UAT 978 MHz decoding** — the U.S. general-aviation alternative; run alongside 1090 with a second dongle
- **CPR position decoding** — proper even/odd Mode S compact position reporting with a 10-second global decode window for sub-meter lat/lon accuracy
- **Aircraft type icons** — 14 ADS-B emitter categories (A0–A7, B1–B7) mapped to specific 2525C / 2525D symbology: fixed-wing, rotorcraft, lighter-than-air
- **520k-entry aircraft database** — auto-loads OpenSky CSV on startup, adds tail number, manufacturer, model, operator, and owner to every contact's remarks
- **Per-aircraft custom usericon** — 11 bundled iconsets, swap by category from the admin UI
- **Wake-vortex, squawk, on-ground status** — preserved in structured COT extensions for downstream tools

### 2. Flag military and government aircraft automatically

<!-- IMAGE: WinTAK with a mixed civilian/military picture — airliners in neutral, a C-130 and a couple of helicopters flipped to friendly affiliation with RCH/DUSTOFF callsigns visible -->

sdrTAK ships with a built-in lookup table of ICAO hex ranges for U.S. DoD, Army, UK, France, and Germany, plus 25+ military callsign prefixes (RCH, FORTE, DUSTOFF, SAM, CGR, and others).

- **Military hex range detection** — automatically marks aircraft in known DoD ranges
- **Callsign prefix matching** — RCH (military airlift), DUSTOFF (medevac), SAM (special air missions), and more
- **Friendly affiliation flip** — military contacts render with the friendly 2525C affiliation instead of neutral
- **Extensible** — add your own ranges and prefixes

### 3. Add ships to the same map (AIS, imminent)

<!-- IMAGE: harbor scene — baseTAK in a browser showing ship icons in the bay alongside aircraft icons overhead, all on the same TAK network -->

The same architecture that handles ADS-B decodes any SoapySDR-driven radio stream. AIS support brings ships onto your TAK map for harbor, port, and coastal ops.

- **AIS** (162 MHz ship tracking) — decoder stub in tree; full release imminent (see [Status](#status))
- **rtl_433 ISM-band sensors** — for sensor-network integration *(roadmap)*
- **Add your own decoders** — the SoapySDR abstraction means write-once decoder plugins work with any driver-supported hardware

### 4. Run any SDR you already own

<!-- IMAGE: a tray of SDR hardware — RTL-SDR blue, AirSpy R2, HackRF One, LimeSDR, Ettus B200 — captioned "all work out-of-the-box" -->

sdrTAK is decoder-agnostic and dongle-agnostic. 13 SoapySDR driver modules ship in the install tarball, so every SoapySDR-supported device in Debian Bookworm main works the moment you plug it in.

- **RTL-SDR, AirSpy, HackRF, LimeSDR, Ettus USRP, RFspace, XTRX, OsmoSDR umbrella, SoapyRemote, and more**
- **Two decoders on one host** — run 1090 on one dongle and UAT 978 on a second from the same Pi
- **Per-decoder gain and stale time** — tune each receiver independently from the admin UI
- **Device discovery** — `SoapySDRUtil --find` lists every connected radio; pick a device string from the UI
- **Graceful subprocess restart** — decoders auto-restart on crash with configurable retry limits

### 5. Compose with the rest of the xTAK suite

<!-- IMAGE: diagram of sdrTAK feeding aircraft into a baseTAK hub on the same LAN as digiTAK and chatTAK, with ATAK/WinTAK/iTAK clients all watching -->

sdrTAK is 100% standalone — no shared code, database, or process with any other xTAK product. The only shared interface is the TAK network itself.

- **Aircraft feeds onto baseTAK** alongside your operational markers
- **Aircraft visible on every ATAK / WinTAK / iTAK client** on the LAN
- **Per-decoder stale time** — aircraft age out independently from ground unit positions
- **Drop-in next to digiTAK** — radio-decoded aircraft on the same map as APRS contacts

---

## How it works

<!-- IMAGE: high-level architecture diagram showing antenna → SDR dongle → Pi running sdrTAK decoders → LAN → every TAK client -->

```
   Antenna (1090 / 978 / 162)
        │
        ▼
   ┌─────────────────┐
   │   SDR dongle    │   RTL-SDR / AirSpy / HackRF / LimeSDR /
   │  (SoapySDR)     │   USRP / any SoapySDR-supported device
   └────────┬────────┘
            │  USB
            ▼
   ┌─────────────────────────────────────────┐
   │           Raspberry Pi 4 / 5            │
   │                                         │
   │   ┌──────────┐  ┌──────────┐  ┌──────┐  │
   │   │ ADS-B    │  │  UAT 978 │  │ AIS  │  │
   │   │ 1090 ES  │  │  decoder │  │ 162  │  │
   │   └────┬─────┘  └────┬─────┘  └──┬───┘  │
   │        │             │           │      │
   │        ▼             ▼           ▼      │
   │   ┌─────────────────────────────────┐   │
   │   │  Aircraft DB lookup (520k)      │   │
   │   │  Military hex + callsign flag   │   │
   │   │  CPR position decode            │   │
   │   │  Symbology + usericon mapping   │   │
   │   │  Rate limiting + dedup          │   │
   │   └─────────────────┬───────────────┘   │
   │                     │ COT XML           │
   │                     ▼                   │
   │           TAK network on LAN            │
   └─────────────────────┬───────────────────┘
                         │
        ┌────────────────┼────────────────┐
        ▼                ▼                ▼
   ┌─────────┐     ┌──────────┐     ┌──────────┐
   │  ATAK   │     │  WinTAK  │     │  iTAK /  │
   │ tablets │     │  laptop  │     │ baseTAK  │
   └─────────┘     └──────────┘     └──────────┘
```

Every sdrTAK instance attaches a SoapySDR-supported radio, runs one or more decoders against the captured stream, enriches each decoded contact with database lookups and military flagging, and emits it as a native TAK contact onto the LAN — where every TAK client on the network sees it.

---

## Who uses sdrTAK

<!-- USE-CASE CARDS -->

**Airshow safety teams** — monitoring performing aircraft and TFR busters in real time, on the same map the ramp boss and ATC liaison are already watching.

**Public-safety aviation units** — wanting a low-cost regional air picture without subscribing to a commercial feed. Your antenna, your receiver, your data.

**SAR aircraft coordinators** — tracking volunteer pilots and CAP assets on the same map as ground search teams. Aircraft contacts and ground markers compose on one picture.

**Coastal SAR and harbormaster ops** — AIS support brings ship-traffic situational awareness onto the same TAK map the small-boat teams are using.

**Aviation enthusiasts and ADS-B hobbyists** — you already have a dongle and an antenna. Point it at your own TAK setup instead of pushing the feed to Flightradar24.

**Amateur radio operators and SDR hackers** — anyone with an RTL-SDR, HackRF, AirSpy, or LimeSDR in the drawer and a curiosity about TAK.

**EmComm operators** — regional traffic awareness during disaster response: mutual-aid flights, medevac, news helicopters, military airlift moving into the AO.

---

## Specs

| | |
|---|---|
| **Decoded protocols** | ADS-B 1090 ES (shipping), UAT 978 MHz (shipping), AIS 162 MHz (imminent), rtl_433 ISM (roadmap) |
| **SDR hardware** | RTL-SDR, AirSpy R2, HackRF One, LimeSDR, Ettus USRP, RFspace, XTRX, OsmoSDR umbrella, SoapyRemote — any SoapySDR-supported device in Debian Bookworm main (13 driver modules bundled) |
| **Aircraft database** | OpenSky CSV, 520k entries; auto-loaded on startup; atomic refresh with size validation |
| **Military flagging** | Built-in ICAO hex ranges for U.S. DoD, Army, UK, France, Germany; 25+ callsign prefixes (RCH, FORTE, DUSTOFF, SAM, CGR, and more); extensible |
| **Position decoding** | Mode S compact position reporting (even/odd CPR pairing, 10-second global decode window) |
| **Symbology** | 14 ADS-B emitter categories mapped to 2525C / 2525D; 11 bundled iconsets; per-aircraft custom usericon |
| **Output format** | Native TAK Cursor-on-Target XML with `<__cs_adsb>` extension (category, squawk, ICAO hex, on-ground, wake vortex) |
| **TAK clients supported** | ATAK, WinTAK, iTAK, baseTAK — any standard TAK client |
| **Hardware** | Raspberry Pi 4/5, or any Debian Bookworm / Ubuntu 22.04+ host |
| **Antenna** | Ground-plane or discone for 1090 / 978; separate antenna for AIS 162 MHz |
| **Network** | Same LAN as your TAK clients; no TAK Server required |
| **Installation** | Offline tarball; all `.deb` drivers, dump978-fa, and aircraft database vendored |
| **Admin UI** | Web (port 5100); gain/stale-time, decoder enable/disable, device discovery, icon picker, aircraft DB refresh, restart button |
| **Tests** | 65 passing tests in the production suite |
| **Version** | v1.4.0 (shipping ADS-B + UAT); AIS imminent |

---

## Frequently asked questions

### Which SDR dongles work with sdrTAK?
Any SoapySDR-supported device in Debian Bookworm main works out-of-the-box. The install tarball bundles 13 SoapySDR driver modules — RTL-SDR, AirSpy, HackRF, LimeSDR, Ettus USRP, RFspace, XTRX, OsmoSDR umbrella, SoapyRemote, and more. Run `SoapySDRUtil --find` after install to list every connected radio and grab its device string for the admin UI.

### RTL-SDR vs AirSpy vs HackRF — which should I use?
For 1090 ES and UAT 978, a $30 RTL-SDR (v3 or v4) is the canonical answer and is what the airshow scenario above runs on. AirSpy R2 buys you noticeably better sensitivity and dynamic range if you're in an RF-dense environment or hunting weak targets at the horizon. HackRF is general-purpose — useful if you also want to play in other bands. sdrTAK doesn't care; pick the radio that fits your budget and noise floor.

### Can I run two decoders on one host?
Yes. Run ADS-B 1090 on one dongle and UAT 978 on a second from the same Pi. Each decoder gets its own gain, stale time, and device string. Decoders run as independent subprocesses with graceful auto-restart, so a crash on one doesn't drop the other.

### How does sdrTAK flag military and government aircraft?
Two ways. First, a built-in lookup table of ICAO hex ranges covers U.S. DoD, Army, UK, France, and Germany — any aircraft whose 24-bit hex falls in those ranges is flagged. Second, a callsign prefix matcher catches 25+ military prefixes (RCH for military airlift, DUSTOFF for medevac, SAM for special air missions, CGR, FORTE, and more). Flagged aircraft render with the friendly 2525C affiliation instead of neutral. Both tables are extensible — add your own ranges and prefixes.

### How does the aircraft database get updated?
The 520k-entry OpenSky CSV ships with the install tarball and auto-loads on startup. The admin UI has a refresh button that pulls a newer CSV when one is available; the download writes to a temp file, validates size, and atomically swaps — no half-updated states. The database can refresh online when connectivity exists, but the install itself runs fully offline.

### When is AIS shipping?
The AIS decoder stub is in the tree; the full release is imminent. Architecturally, AIS is just another SoapySDR-fed decoder, so the path from "stub" to "shipping" is incremental. Watch the [Status](#status) section.

### Do I need TAK Server?
No. sdrTAK emits decoded contacts directly onto the TAK clients on your LAN. TAK Server is a separate product for federating clients across WANs.

### Do I need an internet connection?
Not at install time. The tarball vendors every dependency — all SoapySDR drivers, dump978-fa, and the 520k aircraft database. Online connectivity is only used (optionally) for later aircraft database refreshes.

### Do I need a subscription to ADS-B Exchange or Flightradar24?
No. sdrTAK is your antenna, your receiver, your data. Nothing is pushed to or pulled from a commercial aircraft feed.

### Does it work alongside the other xTAK products?
Yes. baseTAK, digiTAK, loraTAK, and chatTAK all share the same TAK network by design. Drop them on the same LAN and they compose. sdrTAK is 100% standalone — no shared code, database, or process with any other xTAK product — so a failure in one doesn't propagate.

---

## Status

| | |
|---|---|
| **Shipping today** | ADS-B 1090 ES and UAT 978 MHz decoders, v1.4.0 — production-ready, 65 passing tests |
| **Imminent** | AIS (162 MHz ship tracking) — decoder stub in tree, full release pending |
| **On the roadmap** | rtl_433 ISM-band sensor decoding; SDRplay proprietary driver path; readsb backend option for 1090 (alternative to dump1090-fa) |

---

## Get started

<!-- CTA SECTION -->

sdrTAK ships as an offline tarball. One command installs everything.

```bash
tar xzf cot_sdr-1.4.0.tar.gz -C /opt
cd /opt/cot_sdr && sudo bash install.sh
SoapySDRUtil --find    # list available SDRs
# edit /opt/cot_sdr/settings.json — enable decoders, set SDR device strings
sudo systemctl restart cot-sdr
```

Admin UI opens on port 5100 — gain/stale-time, decoder enable/disable, device discovery, icon picker, aircraft DB refresh, restart button.

**[Download sdrTAK v1.4.0]**   **[Read the docs]**   **[Watch the demo]**

---

## Related products in the xTAK suite

<!-- PRODUCT CARDS -->

- **[baseTAK](/products/baseTAK)** — the map, chat, and hub of the xTAK suite. Browser-based TAK client and SA hub for fixed installations.
- **[digiTAK](/products/digiTAK)** — TAK over amateur radio. VHF for the region, HF for the continent. Every APRS station as a native TAK contact.
- **[loraTAK](/products/loraTAK)** — Meshtastic LoRa mesh gateway. Off-grid TAK federation over LoRa.
- **[chatTAK](/products/chatTAK)** — chat-only Pi appliance. Browser users become first-class TAK endpoints with no app install.
- **[netTAK](/products/netTAK)** *(in development)* — base operating layer for every mobile xTAK device; self-healing field mesh.
- **[aiTAK](/products/aiTAK)** *(in development)* — local-first LLM that joins your TAK network as an operations assistant.

---

<!-- FOOTER CTA -->

**Have a deployment in mind?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
