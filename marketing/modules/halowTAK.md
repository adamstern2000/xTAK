# halowTAK

# A self-healing LAN that follows you into the field.

**halowTAK is a sub-$200 Pi-based field node that meshes with every other halowTAK in radio range — Wi-Fi for short-haul, Wi-Fi HaLow (sub-GHz, miles-class) for long-haul. The mesh is self-organizing, self-healing, and carries your full TAK network — chat, map, SA, video, and any xTAK service you want to run on it.**

> **Status: in active development. Hardware platform validated. First public release expected later this year.**

> **About TAK:** halowTAK extends a TAK multicast LAN across the kind of terrain where regular Wi-Fi gives up. Every node runs ATAK-compatible TAK services and bridges them across the mesh. [More about the TAK ecosystem →](../about-tak.md)

---

## The scenario

A wildland fire crew is operating in mountainous terrain over a five-day deployment. The Incident Command Post is at the trailhead, three squad bases are spread across the operations area, and a logistics camp is set up at the watering point two miles downhill. Cellular is dead. The radios work for voice but can't carry the IC's map. Starlink is unreliable under the canopy.

The crew deploys a halowTAK node at every site — five nodes in total, each in a Pelican case, each running on a 12V battery. The nodes auto-form a self-healing 802.11s + BATMAN mesh. Some hops are short-haul 2.4 / 5 GHz Wi-Fi between adjacent sites; others are 802.11ah HaLow with a small Yagi pointed up a ridge for the long-haul links. A directional antenna on the IC's node lets him reach the logistics camp four miles away.

Every halowTAK runs the xTAK services the crew needs in the field: a baseTAK Lite serving a tactical map browser to anyone on the mesh, an aprsTAK feeding the regional ham network into the mesh-wide TAK picture, a chatTAK letting volunteers join via their phones at any site, and an sdrTAK at the IC's node watching for inbound mutual-aid helicopters.

When one of the squad sites' uplink fails — antenna knocked over by a branch, battery low — the mesh re-routes around it within seconds. The squad's view of the TAK picture stays current. Their chat lands at the IC's tent without anyone touching a config.

**Five Pis. One self-healing mesh. A real LAN across miles of fire ground.**

That's halowTAK.

---

## What you can do

### 1. Bring a real LAN to terrain that doesn't have one

halowTAK nodes auto-form an 802.11s + BATMAN mesh using both standard Wi-Fi (2.4 / 5 / 6 GHz, whatever the Pi platform supports) and Wi-Fi HaLow (802.11ah, sub-GHz). The mesh is self-organizing — drop a new node within radio range and it joins.

- **Self-healing** — when a node drops, traffic re-routes around it
- **Self-organizing** — no central controller, no manual mesh configuration
- **Dual-radio** — short-haul fast Wi-Fi for adjacent nodes, long-haul HaLow for ridge-to-ridge links
- **Directional-antenna ready** — pair a HaLow radio with a Yagi or panel antenna to bridge miles between sites
- **Layer-2 transparent** — the mesh looks like a single LAN to everything on it

### 2. Run xTAK services at the edge

halowTAK is a platform, not a single product. Every node can run the xTAK services that make sense for its role.

- **baseTAK Lite** — a stripped-down map and chat hub for a single site's browser users
- **aprsTAK** — APRS gateway from a remote site into the mesh-wide TAK picture
- **meshTAK** — Meshtastic LoRa gateway bridging short-range mesh teams into the halowTAK backbone
- **chatTAK** — let volunteers at any site join the network from a phone
- **sdrTAK** — ADS-B / UAT / AIS receivers at any node with line-of-sight to the sky or sea

### 3. Add surveillance and ISR feeds

halowTAK's higher bandwidth (compared to LoRa or APRS) makes it practical to carry video and other rich feeds across a deployment.

- **IP cameras** at sentry points, gate checks, parking lots — visible to every TAK client on the mesh
- **Drone telemetry and video feeds** routed through the mesh to the IC's screen
- **Sensor packages** — weather stations, perimeter sensors, anything IP-based

---

## Who runs halowTAK

- **Wildland and structural fire crews** operating across terrain where cellular and Wi-Fi don't reach.
- **Search-and-rescue teams** running multi-day operations with multiple base sites and remote camps.
- **EmComm teams** deploying to disaster response where local infrastructure is down and they need their own mesh to coordinate.
- **County and state EM offices** building a deployable comms package for incidents that outlast normal infrastructure.
- **Tactical teams and tactical training environments** that need a real LAN across an operating area without depending on external connectivity.
- **Public-safety auxcomm groups** running pop-up incident command across miles of operating area.

---

## Under the hood

For the engineer screening this before adoption:

- **802.11s mesh** — IEEE standard wireless mesh networking; mature, debugged, deployed in production at scale.
- **BATMAN** — Better Approach to Mobile Ad-hoc Networking; mesh routing protocol that scales to large numbers of nodes with rapid convergence.
- **Wi-Fi HaLow (802.11ah)** — sub-GHz IEEE Wi-Fi for long-range, low-power, miles-class links; complements standard Wi-Fi for the long-haul hops.
- **Layer-2 transparency** — the mesh appears as one LAN; standard TAK multicast traffic crosses without translation.
- **Pi-based platform** — power-efficient, rugged with the right enclosure, cheap to replace, runs the same xTAK services as a fixed install.
- **Modular service stack** — node configuration selects which xTAK services run; nothing required, everything optional.

---

## What you need

*(Specs firming up as the platform is validated.)*

- A **Raspberry Pi** (Pi 5 likely; Pi 4 for lower-cost nodes).
- A **standard Wi-Fi radio** (the Pi's built-in radio, optionally upgraded with a USB Wi-Fi 6E adapter).
- A **Wi-Fi HaLow radio** — USB or HAT module (Newracom NRC7292 is a common HaLow chipset).
- **Antennas** sized for the link distance — omnidirectional for nearby nodes, directional Yagi / panel for the long hops.
- A **12V battery, solar, or generator** for power.
- An **enclosure** — Pelican case, ammo can, or 3D-printed weatherproof box.

## What you don't need

- **No commercial mesh-router vendor.** Standards-based 802.11s and BATMAN, your hardware.
- **No license-bound spectrum.** Standard 2.4/5 GHz Wi-Fi and license-exempt 802.11ah HaLow.
- **No internet uplink required.** The mesh is self-contained; one node can add an uplink if available.
- **No vendor lock-in.** All open standards, all on Linux, all on a Pi.

## Install

*Coming with the first public release. Will follow the xTAK suite pattern: offline tarball, single install script, settings.json configuration.*

---

## Status

**In active development.** Hardware platform is being validated on Pi 4 and Pi 5 with multiple HaLow chipsets. The xTAK service stack (baseTAK Lite, aprsTAK, meshTAK, chatTAK, sdrTAK on a halowTAK node) is being shaken out in lab testing.

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
**A self-healing LAN that follows you into the field.**

### Social pitch — 50 words
halowTAK is a Pi-based field node that meshes with every other halowTAK in radio range — short-haul Wi-Fi, long-haul Wi-Fi HaLow with directional antennas. Self-healing. Self-organizing. Carries your full TAK network across miles of terrain — map, chat, SA, video. Coming later this year. *(in development)*

### Long pitch — 200 words
halowTAK is the xTAK suite's answer to "what if my operating area doesn't have a LAN?" Every halowTAK node is a Pi-based field deployable that auto-forms an 802.11s + BATMAN mesh with every other halowTAK in radio range — short-haul standard Wi-Fi for adjacent sites, long-haul Wi-Fi HaLow (802.11ah, sub-GHz) for ridge-to-ridge bridges. Pair a HaLow radio with a directional antenna and the mesh spans miles of fire ground or search area.

Every node is also a host for xTAK services. A halowTAK at the IC's tent runs baseTAK Lite serving browser-based TAK clients. A halowTAK at a remote watering point runs aprsTAK bridging the regional ham network into the mesh. A halowTAK at a parking lot runs chatTAK for the volunteers showing up to help. The mesh carries the full TAK picture between them all.

Built for wildland fire, multi-day SAR, EmComm disaster response, and any team that needs a real LAN across terrain that doesn't have one. Standards-based: 802.11s, BATMAN, Wi-Fi HaLow, all on Linux, all on a Pi. Hardware platform validated. First public release expected later this year.

### Soul quote
> A real LAN across miles of fire ground.

### Audience tags
**Primary:** wildland fire, multi-day SAR, deployable EmComm, county/state EM deployable comms.
**Secondary:** tactical teams, training environments, public-safety auxcomm, large-event safety teams, anyone running multi-site ops without commercial infrastructure.
