# About the TAK ecosystem

**TAK** stands for **Team Awareness Kit** — a family of situational-awareness applications originally built by the U.S. Air Force Research Laboratory and now widely used in defense, public safety, search and rescue, and amateur radio. The TAK Product Center maintains the official clients; civilian versions are freely available from [tak.gov](https://tak.gov) for U.S. citizens.

---

## The official TAK clients

| Client | Platform | Notes |
|---|---|---|
| **ATAK** | Android phones and tablets | The flagship TAK client; civilian distribution sometimes referred to as **CivTAK** or ATAK-CIV |
| **WinTAK** | Windows | Desktop client for command posts and base stations |
| **iTAK** | iOS | iPhone and iPad |
| **TAK Server** | Linux backend (optional) | Federates clients across WAN; civilian version is open source |

All TAK clients speak the **Cursor-on-Target (COT)** protocol — a compact XML and protobuf message format for positions, markers, chat, shapes, and routes. On a local LAN they coordinate over UDP multicast (`239.2.3.1:6969` for situational awareness, `224.10.10.1:17012` for chat) without any server. With TAK Server they can federate across the internet.

---

## What xTAK is to the TAK ecosystem

**xTAK is not a TAK client. xTAK is a suite of participants in the TAK ecosystem** — services and appliances that join the same network, speak the same TAK protocol, and appear as peers alongside ATAK, WinTAK, and iTAK clients.

xTAK extends the ecosystem in directions the official clients don't reach:

- **Radio transports** — APRS over RF and APRS-IS ([digiTAK](modules/digiTAK.md)), Meshtastic LoRa mesh ([loraTAK](modules/loraTAK.md)), and Wi-Fi HaLow with BATMAN/802.11s mesh ([netTAK](modules/netTAK.md), in development). Bring the bands you already use into TAK.
- **Passive ingest** — SDR-decoded aircraft, UAT 978, and AIS ships rendered as native TAK contacts ([sdrTAK](modules/sdrTAK.md)).
- **Browser and headless endpoints** — a full-featured web map and chat hub ([baseTAK](modules/baseTAK.md)) and a standalone chat-only Pi appliance ([chatTAK](modules/chatTAK.md)) for users who don't have an ATAK device or need a fixed install.
- **AI augmentation** — an LLM-backed operations assistant ([aiTAK](modules/aiTAK.md), in development).

xTAK works **alongside** ATAK, WinTAK, and iTAK on the same network. A marker placed in ATAK appears in baseTAK. A chat sent from chatTAK appears in WinTAK. A position from a Meshtastic node reaches every client through loraTAK. No TAK Server required. No vendor lock-in. Use as much or as little of xTAK as you want — every product is standalone, and the suite composes cleanly because every component speaks the same TAK protocol on the same network.

---

## A note on trademarks

ATAK, WinTAK, iTAK, and TAK are products and trademarks of the U.S. Government, made available through the TAK Product Center. xTAK is an independent, open suite of services that complements the TAK ecosystem — we are not affiliated with the TAK Product Center.


---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](./COPYRIGHT.md)*
