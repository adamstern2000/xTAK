# sdrTAK

# Every aircraft in the sky. Every ship in the bay.

**sdrTAK is an SDR-powered radio decoder that pulls aircraft (ADS-B 1090 ES, UAT 978) and ships (AIS) off the air and renders them as native TAK contacts. Air and surface situational awareness, in your ATAK / WinTAK / baseTAK, for the cost of a $30 dongle and an antenna.**

> **About TAK:** sdrTAK joins the same network as ATAK (Android), WinTAK (Windows), and iTAK (iOS) — and feeds decoded aircraft and ship contacts onto the map alongside your team's positions and markers. [More about the TAK ecosystem →](../about-tak.md)

---

## The scenario

It's the morning of a regional airshow. Twenty performing aircraft, two thousand spectators, an active temporary flight restriction overhead, and the airshow safety team watching for both ramp-side coordination and TFR busters — non-participating aircraft straying into the performance box.

The safety officer plugs an RTL-SDR into a Pi running sdrTAK and hoists an antenna onto a tripod. Within thirty seconds, every aircraft within 150 miles is rendering on his WinTAK with proper 2525C symbology — fixed-wing for the airliners overhead, rotorcraft for the news helicopter at the perimeter, friendly affiliation for the C-130 doing a flyby. The OpenSky database lookup adds tail number, type, and operator to each contact's remarks.

When an unfamiliar squawk drifts into the TFR from the south, it shows up on every TAK client in the safety tent. The ramp boss DMs the aircraft's callsign request to ATC over the radio without taking his eyes off the map.

**One Pi. One $30 dongle. One antenna. Every aircraft in the region.**

That's sdrTAK.

---

## What you can do

### 1. See every transponder-equipped aircraft in your operating area

sdrTAK decodes the live ADS-B 1090 ES stream from the air around you and emits each aircraft as a native TAK contact. Civilian airliners, general aviation, helicopters, gliders with ADS-B — all on your map, in real time.

- **ADS-B 1090 ES decoding** — the global civil aviation transponder standard
- **UAT 978 MHz decoding** — the U.S. general-aviation alternative (run alongside 1090 with a second dongle)
- **CPR position decoding** — proper even/odd Mode S compact position reporting for sub-meter lat/lon accuracy
- **Aircraft type icons** — 14 ADS-B emitter categories (A0–A7, B1–B7) mapped to specific 2525C / 2525D symbology — fixed-wing, rotorcraft, lighter-than-air
- **520k-entry aircraft database** — auto-loads OpenSky CSV on startup, adds tail number, manufacturer, model, operator, and owner to every contact's remarks
- **Per-aircraft custom usericon** — 11 bundled iconsets, swap by category from the admin UI
- **Wake-vortex, squawk, on-ground status** — preserved in structured COT extensions for downstream tools

### 2. Flag military and government aircraft automatically

sdrTAK ships with a built-in lookup table of ICAO hex ranges for U.S. DoD, Army, UK, France, and Germany, plus 25+ military callsign prefixes (RCH, FORTE, DUSTOFF, SAM, CGR, and others).

- **Military hex range detection** — automatically marks aircraft in known DoD ranges
- **Callsign prefix matching** — RCH (military airlift), DUSTOFF (medevac), SAM (special air missions), and more
- **Friendly affiliation flip** — military contacts render with the friendly 2525C affiliation instead of neutral
- **Extensible** — add your own ranges and prefixes

### 3. Add ships and (optionally) ISM sensors

The same architecture that handles ADS-B decodes any SoapySDR-driven radio stream.

- **AIS** (162 MHz ship tracking) — for harbor, port, and coastal ops *(decoder stub in tree; full release pending)*
- **rtl_433 ISM-band sensors** — for sensor-network integration *(roadmap)*
- **Add your own decoders** — the SoapySDR abstraction means write-once decoder plugins work with any driver-supported hardware

### 4. Compose with the rest of the xTAK suite

sdrTAK is 100% standalone — no shared code, database, or process with any other xTAK product. The only shared interface is the TAK network itself.

- **Aircraft feeds onto baseTAK** alongside your operational markers
- **Aircraft visible on every ATAK / WinTAK / iTAK client** on the LAN
- **Per-decoder stale time** — aircraft age out independently from ground unit positions

---

## Who runs sdrTAK

- **Airshow safety teams** monitoring performing aircraft and TFR busters in real time.
- **Public-safety aviation units** wanting low-cost regional air picture without subscribing to commercial feeds.
- **SAR aircraft coordinators** tracking volunteer pilots and CAP assets on the same map as ground searchers.
- **Coastal SAR and harbormaster ops** — AIS support for ship-traffic situational awareness.
- **Aviation enthusiasts and ADS-B hobbyists** who want their existing receiver to feed their own TAK setup, not just push to Flightradar24.
- **Amateur radio operators and SDR hackers** with an RTL-SDR / HackRF / AirSpy in the drawer and a curiosity about TAK.
- **EmComm operators** who want regional traffic awareness during disaster response (mutual-aid flights, medevac, news helicopters).

---

## Under the hood

For the engineer screening this before adoption:

- **13 SoapySDR drivers bundled.** RTL-SDR, AirSpy, HackRF, LimeSDR, Ettus USRP, RFspace, XTRX, OsmoSDR umbrella, SoapyRemote, and more — every SoapySDR-supported device in Debian Bookworm main works out-of-the-box.
- **100% offline install.** Self-contained tarball ships all `.deb` drivers, dump978-fa, and the aircraft database. No network access at install time.
- **CPR position decoding.** Proper Mode S compact position reporting (even/odd frame pairing with 10-second global decode window) — sub-meter lat/lon accuracy.
- **Per-aircraft `<__cs_adsb>` COT extension.** Category, squawk, ICAO hex, on-ground, wake vortex — structured metadata preserved for downstream tools.
- **Rate limiting + dedup.** Configurable throttle interval per aircraft and frame-hash dedup window to reduce multicast load on busy maps.
- **Graceful subprocess restart.** Decoders auto-restart on crash with configurable retry limits; per-decoder state independent.
- **Atomic database update.** Aircraft database refresh downloads to a temp file, validates size, and atomically swaps — no half-updated states.
- **65 passing tests** in the production suite.

---

## What you need

- A **Raspberry Pi 4/5** or any Debian Bookworm / Ubuntu 22.04+ host.
- One or two **SDR dongles** — RTL-SDR for 1090 (~$30), a second RTL-SDR for UAT 978, an AirSpy R2 for better sensitivity, HackRF for general-purpose work.
- A **ground-plane or discone antenna** for 1090 / 978. (AIS is 162 MHz — different antenna.)
- A **LAN** — the same one your ATAK / WinTAK clients are on.

## What you don't need

- **No internet at install time.** Aircraft database can pull updates later if available, but install runs offline.
- **No TAK Server.** sdrTAK talks to TAK clients directly on the LAN.
- **No subscription** — not to ADS-B Exchange, not to Flightradar24, not to any commercial aircraft feed. Your antenna, your receiver, your data.
- **No specific dongle brand.** Any SoapySDR-supported hardware works.

## Install

```bash
tar xzf cot_sdr-1.4.0.tar.gz -C /opt
cd /opt/cot_sdr && sudo bash install.sh
SoapySDRUtil --find    # list available SDRs
# edit /opt/cot_sdr/settings.json — enable decoders, set SDR device strings
sudo systemctl restart cot-sdr
```

Admin UI on port 5100 — gain/stale-time, decoder enable/disable, device discovery, icon picker, aircraft DB refresh, restart button.

---

## Status

**Shipping** (v1.4.0). Production-ready; 65 passing tests.

**On the roadmap:**
- AIS (162 MHz ship tracking) — decoder stub in tree; release imminent
- rtl_433 ISM-band sensor decoding
- SDRplay proprietary driver path
- readsb backend option for 1090 (alternative to dump1090-fa)

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**Every aircraft in the sky. Every ship in the bay.**

### Social pitch — 50 words
sdrTAK pulls aircraft and ships off the air with a $30 SDR dongle and renders them on ATAK, WinTAK, iTAK, and baseTAK as native TAK contacts. ADS-B 1090 and UAT 978 shipping; AIS ship tracking imminent. 520k-entry aircraft database. Military hex / callsign auto-flagging. Offline install. Runs on a Pi.

### Long pitch — 200 words
sdrTAK is the radio side of situational awareness — an SDR-powered decoder that pulls aircraft (ADS-B 1090 ES, UAT 978) and ships (AIS) directly off the air and emits each as a native TAK contact onto your team's TAK network. Built for airshow safety teams, aviation public-safety units, SAR aircraft coordinators, harbor and coastal ops, and aviation enthusiasts who want their existing dongle feeding their own TAK setup instead of pushing to a commercial service.

The product is decoder-agnostic: 13 SoapySDR driver modules bundled, every SoapySDR-supported device works out-of-the-box. The aircraft database (520k entries) adds tail number, type, manufacturer, and operator to every contact's remarks. Built-in military hex ranges and callsign prefixes (RCH, DUSTOFF, SAM, and 25+ more) flag military aircraft automatically and flip the affiliation to friendly. Aircraft type icons map ADS-B emitter categories to 2525C/D symbology.

100% offline install — every dependency vendored, no network calls at install time. 100% standalone — no shared state with other xTAK products. Composes naturally with baseTAK, digiTAK, loraTAK, and chatTAK on the same LAN. 65 passing tests. One Pi. One $30 dongle. Every aircraft in the region.

### Soul quote
> Any SoapySDR-supported SDR in Debian Bookworm main works out-of-the-box.

### Audience tags
**Primary:** airshow safety teams, public-safety aviation units, SAR aircraft coordinators, aviation hobbyists, ADS-B enthusiasts, SDR hackers.
**Secondary:** coastal/harbor SAR (AIS), EmComm operators tracking aviation in disasters, amateur radio operators, integrators evaluating low-cost regional air picture.


---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
