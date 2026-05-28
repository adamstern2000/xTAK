# xTAK

**Seven products. One TAK picture. No internet required.**

xTAK is a suite of seven independent services that extend the TAK ecosystem — ATAK, WinTAK, iTAK — to the places the official clients don't reach: **amateur radio, LoRa mesh, off-grid Wi-Fi, SDR-decoded aircraft and ships, browser endpoints, AI assistants.** Each product works standalone. Together they compose on one TAK network into a complete, self-hosted situational-awareness stack.

When the WAN goes dark, xTAK keeps coordinating.

🌐 **Live site:** [https://xtak.ai](https://xtak.ai)
☕ **Become an Early Adopter:** [buymeacoffee.com/xtak](https://buymeacoffee.com/xtak)

---

## The 7 products

| Product | What it does | Status |
|---|---|---|
| **[baseTAK](https://github.com/adamstern2000/xTAK/blob/main/marketing/modules/baseTAK.md)** | Browser-native TAK map, chat, fileserver, tileserver. The hub. | Beta — shipping soon |
| **[digiTAK](https://github.com/adamstern2000/xTAK/blob/main/marketing/modules/digiTAK.md)** | Bidirectional APRS-to-TAK gateway. VHF + APRS-IS today, HF on the roadmap. | Beta — shipping soon |
| **[loraTAK](https://github.com/adamstern2000/xTAK/blob/main/marketing/modules/loraTAK.md)** | Meshtastic LoRa to TAK bidirectional bridge. | Beta — shipping soon |
| **[chatTAK](https://github.com/adamstern2000/xTAK/blob/main/marketing/modules/chatTAK.md)** | Browser TAK chat appliance — Pi with its own Wi-Fi, no app required. | Beta — shipping soon |
| **[sdrTAK](https://github.com/adamstern2000/xTAK/blob/main/marketing/modules/sdrTAK.md)** | SDR-decoded aircraft (ADS-B + UAT). AIS for ships imminent. | Beta — shipping soon |
| **[netTAK](https://github.com/adamstern2000/xTAK/blob/main/marketing/modules/netTAK.md)** | Self-managing wireless mesh for field-deployable TAK operations. Drop a Pi at every site, they auto-form. | Beta — shipping soon |
| **[aiTAK](https://github.com/adamstern2000/xTAK/blob/main/marketing/modules/aiTAK.md)** | AI agent participating in TAK chat as a first-class contact. | ★ Design phase · timing TBD |

---

## How everything fits together

Every product is a standalone service. They compose by sharing one thing: **the standard TAK network on the LAN.** TAK clients (ATAK / WinTAK / iTAK / baseTAK browsers) on top of the network; xTAK gateway products on the network too — each reaching outward to whatever its world is (radio, LoRa, SDR, Wi-Fi mesh, AI).

```
       ┌──────────┬───────────┬──────────┬───────────────────┐
       │   ATAK   │  WinTAK   │   iTAK   │  baseTAK browser  │   ← TAK clients
       └────┬─────┴─────┬─────┴─────┬────┴─────────┬─────────┘
            │           │           │              │
       ════════════════════════════════════════════════════════
        ▸  TAK NETWORK ON THE LAN
           [ CoT XML ]  [ GeoChat ]  [ TAK protobuf ]
       ════════════════════════════════════════════════════════
            │           │           │           │           │           │
       ┌────┴────┬──────┴─────┬─────┴─────┬─────┴─────┬─────┴─────┬─────┴────┐
       │ baseTAK │  digiTAK   │  loraTAK  │  sdrTAK   │  chatTAK  │  aiTAK   │   ← xTAK gateways
       │  hub +  │  APRS RF / │ Meshtastic│ ADS-B/UAT │  Wi-Fi    │ AI on    │
       │ tiles   │  APRS-IS   │  LoRa     │  + AIS    │  AP       │ TAK chat │
       └─────────┴────────────┴───────────┴───────────┴───────────┴──────────┘
```

The killer suite-level moments are the combinations:

- **baseTAK + digiTAK** = the best APRS map experience
- **baseTAK + sdrTAK** = the best aircraft picture
- **digiTAK + loraTAK** = a ham with a VHF HT can DM a SAR volunteer with a $40 Meshtastic radio

---

## Status

xTAK is in active **Beta**. Six of seven products are shipping (baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK); aiTAK is in design phase with release timing TBD.

Customers install xTAK on their own hardware — Pi-class Linux (Raspberry Pi 4/5, fanless mini-PC, handheld Linux device) — or order a ready-to-deploy xTAK appliance from us. Either way, the software runs on the customer's own network and data stays on their own hardware. The TAK-APRS wire-format extension we designed is published openly at [github.com/adamstern2000/cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs). **Early Adopters get Beta build access** by supporting the project on [Buy Me a Coffee](https://buymeacoffee.com/xtak).

---

## Learn more

| If you want to… | Read this |
|---|---|
| **Understand what xTAK is and how it fits with PAR's TAK** | [`marketing/about-tak.md`](marketing/about-tak.md) — about the TAK ecosystem |
| **Get the suite-level pitch** | [`marketing/modules/_SUITE.md`](marketing/modules/_SUITE.md) |
| **Dig into any individual product** | [`marketing/modules/<product>.md`](marketing/modules/) — per-product marketing kits |
| **See the positioning decisions behind everything** | [`marketing/PROJECT-LEARNINGS-2026-05-19.md`](marketing/PROJECT-LEARNINGS-2026-05-19.md) |
| **Read the open wire spec** | [github.com/adamstern2000/cot_radio_aprs](https://github.com/adamstern2000/cot_radio_aprs) — TAK-APRS Protocol Extension v2.3 |
| **Become an Early Adopter** | [`SUPPORT.md`](SUPPORT.md) or [buymeacoffee.com/xtak](https://buymeacoffee.com/xtak) |
| **See chat scripts for aiTAK** | [`marketing/aitak-o1-chat-script.md`](marketing/aitak-o1-chat-script.md) · [`o2`](marketing/aitak-o2-alerts-script.md) · [`o3`](marketing/aitak-o3-drafts-script.md) |

---

## What xTAK is NOT

- **Not a TAK client.** xTAK is a suite of *participants* — services and appliances that join the same local network, speak the same TAK protocol, and appear as peers alongside ATAK / WinTAK / iTAK.
- **Not a TAK Server replacement.** Some xTAK products federate without a TAK Server; others pair with FreeTAKServer if you already run one.
- **Not affiliated with the TAK Product Center.** xTAK is independent. ATAK / WinTAK / iTAK / TAK are products and trademarks of the U.S. Government, made available through the TAK Product Center.
- **Not a defense product.** Operator-grade, public-safety / SAR / EmComm tier. Pi-class hardware, open standards.

---

## Repository contents

```
├── site/                            ← deployable website (HTML/CSS/JS/images)
├── marketing/
│   ├── modules/                     ← per-product marketing kits (social, video, demo)
│   │   ├── _SUITE.md                ← suite-level positioning
│   │   ├── baseTAK.md
│   │   ├── digiTAK.md
│   │   ├── loraTAK.md
│   │   ├── chatTAK.md
│   │   ├── sdrTAK.md
│   │   ├── netTAK.md
│   │   └── aiTAK.md
│   ├── about-tak.md                 ← TAK ecosystem explainer
│   ├── bmac-about.md                ← Early Adopter / Buy Me a Coffee framing
│   ├── COPYRIGHT.md                 ← copyright + trademark policy
│   ├── PROJECT-LEARNINGS-2026-05-19.md  ← positioning decisions canon
│   ├── image-prompts.md             ← hero image prompts
│   ├── outcome-image-prompts.md     ← per-outcome image prompts
│   └── aitak-o[123]-*.md            ← chat scripts for aiTAK outcomes
├── README.md                        ← (this file)
└── SUPPORT.md                       ← how to support the project
```

---

## Trademark notice

ATAK, WinTAK, iTAK, and TAK are products and trademarks of the U.S. Government. The xTAK Project is independent and **not affiliated with, endorsed by, sponsored by, or licensed by the TAK Product Center, the U.S. Air Force Research Laboratory, the Department of Defense, the Department of Homeland Security, or any U.S. Government agency.**

xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. See [`marketing/COPYRIGHT.md`](marketing/COPYRIGHT.md) for the full notice.

---

© 2026 xTAK Project · All rights reserved
