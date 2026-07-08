# netTAK — Marketing Module

**Status:** Public Beta — available now (v0.3.x)
**Last updated:** 2026-07-08
**Use this for:** social posts, video scripts, demo talking points, Beta program promotion.

---

## TL;DR

netTAK is a self-managing wireless mesh for field-deployable TAK operations. Drop an appliance at every site; they auto-form a mesh in under a minute. TAK clients connect like to any Wi-Fi. The picture stays current across miles of operating area — no infrastructure required, no internet needed, no central server to configure. Every node serves a web admin UI you reach from any browser. Offline install bundle includes every dependency; install proceeds with no network.

**The pitch:** a real LAN spanning miles of off-grid operating area, with one-minute mesh convergence and a web admin you can drive from a phone.

---

## Taglines

- **"Drop an appliance at every site. They mesh."** *(deploy angle)*
- **"A real LAN across miles of fire ground."** *(scenario anchor)*
- **"Flash, boot, mesh."** *(self-managing angle)*
- **"Admin from any browser."** *(operator-experience angle)*
- **"No infrastructure. No internet. No central server."** *(off-grid angle)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **SAR base coordinators** | "Drop nodes from the trailhead out into the search area. The mesh extends the TAK LAN across kilometers of brush and ridgelines. ATAK tablets connect like to any Wi-Fi." |
| **Wildland fire** | "Mobile EOC → forward staging → spike camps, all on one mesh fabric. WAN-independent. Each node is commodity Linux hardware, battery- and solar-viable." |
| **Event ops / festivals** | "Festival venue → backstage → aid stations → parking → media tents — one mesh across the whole grounds, no infrastructure to install, admin from the phone in your pocket." |
| **EmComm / disaster response** | "Day-3 of a regional disaster, the LTE is intermittent and the WAN is gone. netTAK is the mesh that keeps TAK working — install bundle is 75 MB, no internet needed at install." |
| **Field exercise / training** | "Multi-day exercise across a county. Drop a netTAK per OP site, the mesh comes up, the IC has SA across the whole AO. Web admin from any laptop." |
| **Homestead / off-grid** | "Remote property, no internet. netTAK is the network layer that makes the whole xTAK suite work without infrastructure." |

---

## Killer features (shipping today)

1. **Self-managing mesh** — drop a node, it joins. No central master, no provisioning steps.
2. **Self-healing routing** — when a node drops, traffic re-routes within seconds.
3. **Wi-Fi HaLow backhaul** — sub-1 GHz long-range Wi-Fi, miles between sites with directional antennas.
4. **Standard 2.4 GHz Wi-Fi for clients** — operators connect with phones, tablets, and laptops they already have.
5. **Web admin UI on every node** — HTTPS, mobile-friendly, no SSH required.
6. **Live dashboard** — DHCP leases, AP clients, mesh neighbors, battery, GPS — all auto-refreshing.
7. **Cluster-wide DNS records and DHCP reservations** — add on any node, propagate to all.
8. **Secure cluster sync** — encrypted handshake with rotatable cluster-wide pre-shared key.
9. **GPS time discipline** — clocks stay in sync across the cluster without internet.
10. **Offline install bundle** — 75 MB, all dependencies vendored, no network required.
11. **Idempotent re-install** — admin password, TLS, cluster state preserved across upgrades.
12. **USB-PD UPS hat UPS integration** — live battery state on the dashboard.
13. **Runs on any small Linux appliance** — auto-detected, no per-platform configuration.

---

## Suite-level pairings

- **netTAK + every TAK client on the network** — ATAK, WinTAK, and iTAK connect to netTAK's Wi-Fi like they would to any other access point. The mesh handles cross-node reachability transparently; TAK multicast just works.
- **netTAK + digiTAK / loraTAK / sdrTAK / chatTAK on adjacent hardware** — drop the xTAK gateway product at the site where its world lives (the ham shack for digiTAK, the antenna with sky view for sdrTAK, the volunteer parking lot for chatTAK), and operators anywhere on the netTAK mesh see the contacts the gateway feeds in.

---

## Honest disclosures

- **Status:** Public Beta — available now. Currently at v0.3.x. In active operations today.
- **Hardware platform:** Linux appliance validated. USB-PD UPS hat 2/3/3-Plus integration validated.
- **Wi-Fi HaLow** is optional but recommended for miles-class links. Vantron VT-USB-AH-8108 / Morse Micro MM8108 USB dongle is the supported hardware.

---

## Sample social posts

### X / Twitter

> **POST 1 — the deploy hook**
> Drop an appliance at every site. Power it on. Watch it join the mesh in under a minute.
>
> No central server. No keys. No console cable.
>
> netTAK — self-managing wireless mesh for field-deployable TAK ops. Public Beta, available now: https://xtak.ai/products/netTAK

> **POST 2 — the admin hook**
> Admin a wireless mesh from your phone.
>
> Every netTAK node runs a full web UI over HTTPS. Open it from any browser on the network. See dashboard live. Restart services. Add DNS records that propagate cluster-wide.
>
> No SSH. No console cable.

> **POST 3 — the off-grid hook**
> Day-3 of the disaster. LTE intermittent. WAN gone. Commercial cellular routers can't help — they expect an uplink.
>
> netTAK doesn't. 75 MB install bundle, every dependency vendored. Drop nodes around the operating area. TAK clients connect like to any Wi-Fi.

### LinkedIn

> **POST A — the field-mesh brief**
> For teams that have to coordinate when the WAN is gone: netTAK is now shipping in Beta.
>
> Drop an appliance at every site. They auto-form a wireless mesh in under a minute. No central master. No provisioning. ATAK tablets, WinTAK laptops, and iTAK phones connect to the mesh like to any Wi-Fi.
>
> Every node serves a web admin UI over HTTPS — dashboard tiles for DHCP leases, mesh neighbors, battery, GPS, all live. Cluster-wide DNS records and DHCP reservations propagate to every node when you edit them anywhere.
>
> The install bundle is 75 MB. Every apt package, every driver, every config template is included. The installer never touches the network. Re-install on top of an existing node and your admin password, TLS material, and cluster state all survive.
>
> Wi-Fi HaLow for miles-class backhaul. Standard 2.4 GHz Wi-Fi for client devices. GPS time discipline keeps the cluster's clocks in sync without internet.
>
> Join the public Beta: https://xtak.ai/beta

---

## Video script outlines

### 30-second teaser

| 0:00–0:08 | Forest road, golden hour. SAR coordinator pulls three Pelican cases out of a truck and places them at intervals along the road. |
| 0:08–0:18 | Animated overlay of mesh links forming between the three nodes within seconds. A laptop on the truck tailgate shows the TAK map come up. |
| 0:18–0:24 | Operator opens a browser on a phone. The netTAK dashboard loads — live tiles for leases, AP clients, mesh neighbors. |
| 0:24–0:30 | Title card: **netTAK. Drop an appliance at every site. They mesh.** Public Beta — available now at xtak.ai/beta. |

### 60-second feature brief

1. **The deploy story (0:00–0:15)** — three Pelican cases, three netTAKs, mesh converges in under a minute. No central server.
2. **The admin story (0:15–0:30)** — phone browser opens to the admin UI. Live dashboard. Add a DNS record. It propagates.
3. **The off-grid story (0:30–0:45)** — install bundle on a USB stick. Flash a fresh appliance. Install proceeds with no network. The cluster picks it up.
4. **The reliability story (0:45–0:55)** — one node's antenna goes down. Mesh re-routes in seconds. Operators don't notice.
5. **Close (0:55–0:60)** — Public Beta — available now at xtak.ai/beta.

---

## Demo talking points

> Open the netTAK admin UI from any browser. Show the live dashboard tiles refreshing.
> Power on a fresh node. Show it joining the mesh within ~60 seconds, no operator input.
> Edit a DNS record on node A. Show it appearing on node B within ~1 minute.
> Pull the power on a node mid-demo. Show traffic continuing to flow via the remaining mesh.
> Show the install bundle — 75 MB on disk. Run the installer with no network — it succeeds.
> Trust GPS on the dashboard. Watch chrony lock to the GPS clock. The cluster's nodes all converge to the same time.

---

## Objections + responses

| Objection | Response |
|---|---|
| "When does it ship?" | "Public Beta — available now. Join at xtak.ai/beta ($59/device, a year of Beta Support bundled in)." |
| "Why not LibreMesh / OpenWrt?" | "Those are router firmware. netTAK is a purpose-built field-deploy appliance with a web admin UI tuned for operators, not network engineers. And the offline install bundle is 75 MB — most LibreMesh deployments still expect package-manager reachability." |
| "Why not just a commercial cellular router + a tablet?" | "That setup needs an uplink. netTAK doesn't. Mesh-resilient by design, not WAN-dependent." |
| "What about defense-tier mesh networks?" | "Six-figure pricing, defense customer base. netTAK is the homestead / SAR / event / EmComm tier — commodity appliance hardware, operator-grade pricing." |
| "Why do I need Wi-Fi HaLow?" | "You don't, for short-range deployments — standard Wi-Fi or wired Ethernet works fine. HaLow is what unlocks miles between sites with directional antennas." |
| "Can I admin it without SSH?" | "Entirely. Every node serves a full web UI over HTTPS — dashboard, service control, log viewer, system reboot, DNS records, DHCP reservations, TLS regen, time setter, the lot." |

---

## Visual / image cues

- **The multi-agency 1-netTAK-many-operators scene** — already a cinematic outcome image. Continues to work for shipping-product content.
- **Drop-and-converge** — three Pelican cases placed in a line, mesh links animating between them in under a minute.
- **The admin UI on a phone** — operator opens the dashboard in a mobile browser; live tiles refreshing.
- **A node on a mast or in a Pelican case** — commodity Linux hardware in a real outdoor context, USB-PD UPS hat UPS visible.

---

## Key terms

- **Wi-Fi HaLow** — 802.11ah. Low-band (sub-1 GHz), long-range, low-bandwidth Wi-Fi. Used for netTAK's backhaul between sites.
- **Mesh** — multi-node wireless network where each node forwards traffic for others. Self-healing on node failure.
- **USB-PD UPS hat UPS** — Linux appliance battery-backup HAT with charge reporting.
- **Cluster** — the collection of netTAK nodes that share state via the gossip protocol.

---

*Related: [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/netTAK.html`, features doc at `github.com/adamstern2000/meshtak/blob/main/docs/features.md` (private during Beta).*
