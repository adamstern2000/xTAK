# netTAK — Marketing Module

**Status:** ★ Design phase — first ship 2026Q3 estimated
**Last updated:** 2026-05-19
**Use this for:** roadmap teasers, future-state content, Early Adopter recruitment.

> **Disclosure:** netTAK is design phase, not shipped. Everything below describes the design target, not a working product. Any post or video referencing netTAK should flag this clearly.

---

## TL;DR

netTAK is mesh-networking infrastructure for field deployment. Drop Pi-sized boxes around an operations area and they self-organize into a wireless mesh that carries TAK traffic when there's no LTE, no satellite, and no fixed AP. 802.11s + B.A.T.M.A.N. on stock Linux Wi-Fi, with Wi-Fi HaLow for long-range backhaul. One node can also bridge the mesh to an upstream pipe.

**The pitch:** the network layer for off-grid operations where the WAN is gone and TAK still has to keep coordinating.

---

## Taglines

- **"One netTAK, every field device."** *(scale angle — pairs with the multi-agency cinematic photo)*
- **"Drop a node, it joins."** *(deploy angle)*
- **"The mesh fabric for off-grid TAK."** *(infrastructure angle)*
- **"Pi-sized. Solar-viable. Self-configuring."** *(hardware angle)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **SAR base coordinators** | "Drop nodes from the trailhead out into the search area. The mesh extends the TAK LAN across kilometers of brush and ridgelines without a single fixed AP." |
| **Wildland fire** | "Mobile EOC → forward staging → spike camps, all on one mesh fabric. WAN-independent. Each node is Pi-class hardware, solar-viable." |
| **Event ops / festivals** | "Festival venue → backstage → aid stations → parking → media tents — one mesh across the whole grounds, all WAN-independent." |
| **EmComm / disaster response** | "Day-3 of a regional disaster, the LTE is intermittent and the WAN is gone. netTAK is the mesh that keeps TAK working." |
| **Field exercise / training** | "Multi-day exercise across a county. Drop a netTAK per OP site, the mesh comes up, the IC has SA across the whole AO." |
| **Homestead / off-grid** | "Remote property, no internet. netTAK is the network layer that makes the whole xTAK suite work without infrastructure." |

---

## Killer features (design target)

1. **802.11s mesh + B.A.T.M.A.N. routing** — on stock Linux Wi-Fi. No custom radio drivers.
2. **Wi-Fi HaLow (802.11ah) backhaul** — long-range, low-bandwidth links between sites.
3. **Local DHCP / DNS / HTTPS termination** — TAK clients on the mesh don't need to know anything about the network.
4. **Self-configuring backbone** — drop a node, it joins. No keys, no console, no provisioning.
5. **Gateway role** — one node can bridge the mesh to an upstream LTE, satellite, or internet pipe.

---

## Suite-level pairings

- **netTAK + the whole xTAK suite** = the network layer that lets everything else work off-grid. baseTAK Lite on a netTAK node serves maps to the field. digiTAK on a netTAK node serves APRS at the forward site. sdrTAK on a netTAK node serves air picture from a distant ridge.

---

## Honest disclosures

- **Status:** ★ Design phase. First ship 2026Q3 estimated. The capability list is the design target, not a working product.
- **Hardware platform:** validation in progress. Service stack in lab testing.
- **All netTAK content must flag the design-phase status.** Don't promise shipping dates.

---

## Sample social posts

### X / Twitter

> **POST 1 — the field-mesh hook**
> 🚧 *(coming 2026Q3)*
>
> netTAK = mesh-networking infrastructure for off-grid TAK. Drop Pi-sized boxes around an operations area; they self-organize.
>
> 802.11s + BATMAN. Wi-Fi HaLow backhaul. One bridge to LTE/satellite if you have it.
>
> Early Adopter access at first ship: https://buymeacoffee.com/xtak

> **POST 2 — the one-box-many-operators hook**
> 🚧 *(design phase)*
>
> One netTAK, every field device.
>
> A SAR coordinator with one box can serve mesh-radio nodes, browser-tablet endpoints, and ATAK / WinTAK / iTAK clients — all on the same TAK network, all off-grid.

### LinkedIn

> 🚧 **POST A — design teaser**
> The piece of xTAK we're working on now: netTAK — the mesh network fabric for off-grid TAK operations.
>
> The problem: when the LTE is intermittent, the WAN is gone, and you don't have a fixed Wi-Fi AP, ATAK and WinTAK still need a LAN. Today that's a Cradlepoint or a Ubiquiti AP. Both expect infrastructure. Neither is mesh-resilient.
>
> netTAK is the answer. Pi-sized nodes you drop around an operations area. Self-configuring. 802.11s + BATMAN routing on stock Linux Wi-Fi. Wi-Fi HaLow for long backhaul. One node can bridge to an upstream LTE / satellite pipe if you have one.
>
> First ship target is 2026Q3. Early Adopter access at first ship: https://buymeacoffee.com/xtak

---

## Video script outlines

### 30-second teaser

| 0:00–0:08 | Forest road, golden hour. SAR coordinator drops three small black devices (netTAK nodes) on the ground at intervals. |
| 0:08–0:16 | Animated overlay of mesh links forming between the nodes. A laptop on the truck tailgate shows the TAK map come up. |
| 0:16–0:24 | Wide of the operating area — searchers in the brush, IC at the truck. |
| 0:24–0:30 | Title card: **netTAK. Drop a node, it joins.** Coming 2026Q3. |

### 60-second design-phase brief

1. **The problem (0:00–0:15)** — WAN goes dark, infrastructure doesn't exist, TAK still has to coordinate.
2. **The shape of the answer (0:15–0:35)** — pi-class nodes, 802.11s + BATMAN, Wi-Fi HaLow backhaul, self-configuring.
3. **The deploy story (0:35–0:50)** — drop, join, work.
4. **Roadmap honesty (0:50–0:60)** — "First ship target 2026Q3. Early Adopter access at first ship."

---

## Objections + responses

| Objection | Response |
|---|---|
| "When does it actually ship?" | "Target is 2026Q3. We're saying that openly. Early Adopters get it the moment it's ready." |
| "Why not LibreMesh / OpenWrt?" | "Those are firmware. netTAK is a purpose-built field-deploy appliance with the TAK service stack already in the box." |
| "Why not just Cradlepoint + a tablet?" | "Cradlepoint needs an uplink. netTAK doesn't. Mesh-resilient by design, not WAN-dependent." |
| "Anduril Lattice mesh?" | "Six-figure pricing, defense customer base. netTAK is the homestead / SAR / event-grade tier — commodity hardware, operator pricing." |

---

## Visual / image cues

- **The multi-agency 1-netTAK-10-operators scene** — already a cinematic outcome image. Use it heavily for design-phase content.
- **Drop-and-join animation** — small black devices placed in a line, mesh links animating between them.
- **A node on a mast or in a Pelican case** — Pi-class hardware in a real outdoor context.

Avoid promising specific capabilities that aren't validated yet (battery life, range, throughput). Use ranges and "target" wording.

---

## Key terms

- **802.11s** — IEEE mesh networking standard for Wi-Fi.
- **B.A.T.M.A.N.** — Better Approach to Mobile Ad-hoc Networking. Mesh routing protocol.
- **Wi-Fi HaLow** — 802.11ah. Low-band (sub-1 GHz), long-range, low-bandwidth Wi-Fi.

---

*Related: [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/netTAK.html`.*
