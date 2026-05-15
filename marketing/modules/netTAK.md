# netTAK

# The operating layer for every mobile xTAK device.

**netTAK is the base platform that runs on every Pi-class mobile xTAK device — sdrTAK, chatTAK, loraTAK, digiTAK, baseTAK Lite. It manages each device's services and exposes a unified admin surface. Use a netTAK standalone for a remote single-site role, or mesh multiple netTAKs together over Wi-Fi, Ethernet, and (optionally) Wi-Fi HaLow for ridge-to-ridge ranges.**

> **Status: in active development. Hardware platform validated. First public release expected later this year.**

> **About TAK:** netTAK extends your TAK network across the kind of terrain where regular Wi-Fi gives up. Every node runs ATAK-compatible TAK services and bridges them across the mesh. [More about the TAK ecosystem →](../about-tak.md)

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtakproject)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtakproject)

---

## The scenario

A wildland fire crew is operating in mountainous terrain over a five-day deployment. The Incident Command Post is at the trailhead, three squad bases are spread across the operations area, and a logistics camp is set up at the watering point two miles downhill. Cellular is dead. The radios work for voice but can't carry the IC's map. Starlink is unreliable under the canopy.

The crew deploys a netTAK node at every site — five nodes in total, each in a Pelican case, each running on a 12V battery. The nodes auto-form a self-healing 802.11s + BATMAN mesh. Some hops are short-haul 2.4 / 5 GHz Wi-Fi between adjacent sites; others are 802.11ah HaLow with a small Yagi pointed up a ridge for the long-haul links. A directional antenna on the IC's node lets him reach the logistics camp four miles away.

Every netTAK runs the xTAK services the crew needs in the field: a baseTAK Lite serving a tactical map browser to anyone on the mesh, a digiTAK feeding the regional ham network into the mesh-wide TAK picture, a chatTAK letting volunteers join via their phones at any site, and an sdrTAK at the IC's node watching for inbound mutual-aid helicopters.

When one of the squad sites' uplink fails — antenna knocked over by a branch, battery low — the mesh re-routes around it within seconds. The squad's view of the TAK picture stays current. Their chat lands at the IC's tent without anyone touching a config.

**Five Pis. One self-healing mesh. A real LAN across miles of fire ground.**

That's netTAK.

---

## What you can do

### 1. Run xTAK on every field device

netTAK is the base operating layer for every mobile xTAK device. Pick the service that fits the role; netTAK runs it as a managed service and gives you one unified admin surface to operate the device.

- **baseTAK Lite** — a multi-user map and chat hub for the site's browser users, with a built-in tileserver for the local ATAK / WinTAK tablets (see outcome #3)
- **digiTAK** — APRS gateway from a remote site, VHF and optional HF
- **loraTAK** — Meshtastic LoRa gateway bridging mesh teams into the local TAK network
- **chatTAK** — multi-user, comms-forward TAK endpoint; the field command element runs from one node
- **sdrTAK** — ADS-B / UAT / AIS receivers at any node with line-of-sight to the sky or sea

**One install workflow for the whole suite.** Each xTAK service runs as a managed unit on netTAK. The same products you'd install on a bare Pi today, with lifecycle, config, logging, and admin handled by the platform.

**Fleet management when nodes mesh.** When netTAKs see each other, every netTAK can see the status of every other netTAK on the mesh — restart services, push config, check status across the entire field deployment from one node's admin UI.

### 2. Mesh them together — or run a single node standalone

netTAK supports three deployment patterns. Pick the one your operation needs; mix and match across sites.

- **Standalone** — a single netTAK running its xTAK services, no mesh required. The right move for remote outposts, single-site deployments, or any role that doesn't need peer-to-peer routing. Joins the local TAK LAN like a fixed install.
- **Local mesh (Wi-Fi + Ethernet)** — multiple netTAKs auto-mesh over the Pi's built-in Wi-Fi and/or wired Ethernet. No specialty radios, no licensed spectrum, no cost beyond the Pis. For sites in close proximity or wired together.
- **Long-range mesh (with Wi-Fi HaLow)** — add 802.11ah HaLow radios to span miles between sites. Pair with directional antennas (Yagi, panel) for ridge-to-ridge and watershed-to-watershed bridges.

All three patterns share the same management surface and the same TAK protocol fidelity. Mesh behavior:

- **Self-healing** — when a node drops, traffic re-routes around it within seconds
- **Self-organizing** — no central controller, no manual mesh configuration
- **Layer-2 transparent** — the mesh appears as one LAN; standard TAK traffic crosses without translation

### 3. Distribute maps in the field, no Operations Center required

Every netTAK node running baseTAK Lite includes the same tileserver that baseTAK runs at the EOC — so a forward site can distribute maps locally, without backhauling to headquarters and without an internet uplink in the field.

- **Pre-load the netTAK node** with the regional terrain you'll be operating in (MBTiles, XYZ tile sets, or other standard formats)
- **Live distribution to EUDs** — every ATAK and WinTAK tablet that joins the local mesh pulls tiles directly from the netTAK node it can reach
- **Sync from any forward site** — operators arriving at a remote staging area can download local map sets straight from the netTAK there, without ever connecting to the operations center
- **Resilient to long deployments** — if the mesh hop back to the EOC fails, the local node keeps serving maps; field teams stay current
- **Same tile format everywhere** — what baseTAK serves at the EOC, baseTAK Lite serves at every forward site. One pre-load workflow.

For wildland fire crews up a fire road, SAR teams at a remote staging area, or any forward team operating beyond the reach of the EOC's LAN: maps go with the netTAK node and serve out from there.

### 4. Add surveillance and ISR feeds

netTAK's higher bandwidth (compared to LoRa or APRS) makes it practical to carry video and other rich feeds across a deployment.

- **IP cameras** at sentry points, gate checks, parking lots — visible to every TAK client on the mesh
- **Drone telemetry and video feeds** routed through the mesh to the IC's screen
- **Sensor packages** — weather stations, perimeter sensors, anything IP-based

---

## Who runs netTAK

- **Wildland and structural fire crews** operating across terrain where cellular and Wi-Fi don't reach.
- **Search-and-rescue teams** running multi-day operations with multiple base sites and remote camps.
- **EmComm teams** deploying to disaster response where local infrastructure is down and they need their own mesh to coordinate.
- **County and state EM offices** building a deployable comms package for incidents that outlast normal infrastructure.
- **Tactical teams and tactical training environments** that need a real LAN across an operating area without depending on external connectivity.
- **Public-safety auxcomm groups** running pop-up incident command across miles of operating area.

---

## Under the hood

For the engineer screening this before adoption:

- **Base operating layer for every mobile xTAK device** — sdrTAK, chatTAK, loraTAK, digiTAK, baseTAK Lite all run as managed services on netTAK. Same code, same wire output, lifecycle managed by the platform.
- **Three deployment patterns** — standalone (no mesh), local mesh over Wi-Fi/Ethernet, long-range mesh adding 802.11ah Wi-Fi HaLow. Same software stack, same management UI across all three.
- **802.11s mesh** — IEEE standard wireless mesh networking; mature, debugged, deployed in production at scale.
- **BATMAN** — Better Approach to Mobile Ad-hoc Networking; mesh routing protocol that scales to large numbers of nodes with rapid convergence.
- **Wi-Fi HaLow (802.11ah)** *(optional)* — sub-GHz IEEE Wi-Fi for long-range, low-power, miles-class links. Use when you need to bridge across terrain; skip when you don't.
- **Layer-2 transparency** — the mesh appears as one LAN; standard TAK traffic crosses without translation.
- **Pi-based platform** — power-efficient, rugged with the right enclosure, cheap to replace.

---

## What you need

*(Specs firming up as the platform is validated.)*

- A **Raspberry Pi** (Pi 5 recommended; Pi 4 works for lower-cost nodes).
- For **standalone** or **local-mesh** deployments: the Pi's built-in Wi-Fi (optionally Ethernet, optionally a USB Wi-Fi 6E adapter for higher throughput).
- For **long-range mesh**: add a **Wi-Fi HaLow radio** — USB or HAT module (Newracom NRC7292 is a common HaLow chipset). Optional; only needed when you need miles-class links between sites.
- **Antennas** sized for the link distance — omnidirectional for nearby nodes, directional Yagi / panel for the long hops (HaLow only).
- A **12V battery, solar, or generator** for power.
- An **enclosure** — Pelican case, ammo can, or 3D-printed weatherproof box for field deployments; bare Pi is fine for fixed standalone roles.

## What you don't need

- **No commercial mesh-router vendor.** Standards-based 802.11s and BATMAN, your hardware.
- **No license-bound spectrum.** Standard 2.4/5 GHz Wi-Fi and license-exempt 802.11ah HaLow.
- **No internet uplink required.** The mesh is self-contained; one node can add an uplink if available.
- **No vendor lock-in.** All open standards, all on Linux, all on a Pi.

## Install

*Coming with the first public release. Will follow the xTAK suite pattern: offline tarball, single install script, settings.json configuration.*

---

## Status

**In active development.** Hardware platform is being validated on Pi 4 and Pi 5 with multiple HaLow chipsets. The xTAK service stack (baseTAK Lite, digiTAK, loraTAK, chatTAK, sdrTAK on a netTAK node) is being shaken out in lab testing.

**What's working now:**
- 802.11s + BATMAN mesh between Pi nodes
- Wi-Fi HaLow point-to-point links with directional antennas
- xTAK services running on the platform

**What's still in development:**
- Multi-radio coexistence tuning (short-haul Wi-Fi + long-haul HaLow on one node)
- Automated mesh provisioning ("zero-touch" node onboarding)
- Power management and solar-friendly deployment profiles
- The hardened install + admin UI

**Public release expected later this year.**

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**The platform under your field xTAK. The mesh between every device.**

### Social pitch — 50 words
netTAK is the base layer on every mobile xTAK device — sdrTAK, chatTAK, loraTAK, digiTAK, baseTAK Lite. Run a netTAK standalone for a remote outpost, or mesh multiple together over Wi-Fi, Ethernet, or Wi-Fi HaLow for ridge-to-ridge field deployments. One install workflow, one admin surface, the whole xTAK suite. *(future release)*

### Long pitch — 200 words
netTAK is the operating layer for every mobile xTAK device. It runs each xTAK service as a managed unit — sdrTAK, chatTAK, loraTAK, digiTAK, baseTAK Lite — and exposes a unified admin surface for the device. Use a netTAK standalone for a remote outpost, single-site role, or fixed install. Or mesh multiple netTAKs together: over the Pi's built-in Wi-Fi and Ethernet for sites in close proximity, or over 802.11ah Wi-Fi HaLow with directional antennas to span miles of terrain. The mesh is self-organizing, self-healing, and layer-2 transparent — standard TAK traffic crosses without translation.

A wildland fire crew's IC tent runs baseTAK Lite on a netTAK; the same node serves preloaded county maps to every tablet on the mesh. A netTAK at a remote watering point runs digiTAK to bring the regional ham network in. A netTAK at a parking lot runs chatTAK for walk-up volunteers. The mesh carries the full TAK picture between them all.

Built for wildland fire, multi-day SAR, EmComm disaster response, and any operation that needs the xTAK suite where the infrastructure doesn't reach. Standards-based, all on a Pi.

### Soul quote
> One platform under every mobile device. One mesh between all of them.

### Audience tags
**Primary:** wildland fire, multi-day SAR, deployable EmComm, county/state EM deployable comms.
**Secondary:** tactical teams, training environments, public-safety auxcomm, large-event safety teams, anyone running multi-site ops without commercial infrastructure.


---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
