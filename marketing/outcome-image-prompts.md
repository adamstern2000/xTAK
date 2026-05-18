# xTAK Outcome-Image Prompts

Per-outcome images for each product page. Three image sources:

- **🎬 Nano Banana Pro** — photographic / cinematic scenes (real ops in the field)
- **🖥️ baseTAK agent** — TAK UI screenshots (same approach you used for the Devil's Gate Fire hero images)
- **📐 Diagram** — schematic / stylized infographic (either Nano Banana with diagram prompt, or hand-drawn in Figma / Excalidraw)

---

## Status legend

- **✅ DONE** — image generated and wired into the site
- **⏳ TODO** — still needs generation

## Progress

```
baseTAK   ✅✅✅✅✅   (5/5)  🎉
digiTAK   ✅✅✅✅✅   (5/5)  🎉
loraTAK   ✅✅✅         (3/3)  🎉
chatTAK   ✅✅✅✅        (4/4)  🎉
sdrTAK    ✅✅✅✅        (4/4)  🎉
netTAK    ⏳✅✅✅        (3/4)
aiTAK     ⏳⏳⏳✅        (1/4)
                       ─────
                       25/29 outcome images complete
```

## What's still missing

**4 outcomes remaining.** All are 🖥️ baseTAK-agent UI screenshots.

| Page | Outcome | Type | Description |
|---|---|---|---|
| netTAK | O1 — Run xTAK on every field device | 🖥️ baseTAK agent (or Figma) | netTAK admin/dashboard UI |
| aiTAK | O1 — Ask questions about the operational picture | 🖥️ baseTAK agent | Q&A chat thread w/ aiTAK |
| aiTAK | O2 — Run as a watchful background participant | 🖥️ baseTAK agent | Rule editor + alert in chat |
| aiTAK | O3 — Draft, summarize, translate | 🖥️ baseTAK agent | IAP draft in chat panel |

**Type counts:**
- 🖥️ baseTAK agent: 4
- 📐 Diagram / composite: 0
- 🎬 Nano Banana Pro: 0 (all photos done 🎉)

All the 🎬 photographic prompts are done — every remaining slot is either a TAK UI screenshot or a composite/diagram. Your baseTAK agent should be able to knock these out the same way it produced the Devil's Gate Fire hero images.

**Style notes (Nano Banana prompts):**
- Cinematic widescreen 21:9
- Documentary realism, no sci-fi glow / hexagons / neural-net cliches
- Warm ambers + cool teal color grading
- Real public-safety operations, not military combat aesthetic
- Slight shallow depth of field

**Style notes (baseTAK agent screenshots):**
- 1584×672 widescreen (matching the hero images) OR your standard render dimensions
- ESRI World Imagery or Mapbox Satellite Streets basemap
- TAK-cyan markers, red fire perimeters, amber warning zones
- Slight 3D tilt where dramatic; overhead 2D where information-dense

**Save outputs to:** `/home/adam/xtak-site/img/products/<product>/`
Naming: `<product>-01-<short-slug>.png` (e.g. `basetak-01-browser-ui.png`)

---

# baseTAK · 5 outcomes

### Outcome 01 — Put a real TAK client on every laptop in the room ✅ DONE
**🖥️ baseTAK agent screenshot**

Scenario to set up: ESRI World Imagery basemap centered on a fictional EOC operating area. Drop ~25 markers across the map (mix of friendly team positions, drawn shapes, range rings, a bullseye, a route with waypoints, and a polygon evacuation zone). Open the side panes (Overlays + Markers + Alerts). Capture a clean wide-frame view with the panes visible on the left and the map dominating the right.

### Outcome 02 — Operate at the speed of the incident ✅ DONE
**🖥️ baseTAK agent screenshot** (or a Figma mockup)

Either: (a) a close-up of the baseTAK icon picker showing the curated symbol library, OR (b) a 2-panel composite showing the broadcast-by-default toggle and a marker appearing on a second device. Goal is to communicate the two-click flow visually.

### Outcome 03 — Be the authoritative SA source, even on imperfect networks ✅ DONE
**📐 Diagram** (Nano Banana with diagram prompt, OR Figma/Excalidraw)

```
A clean technical diagram in dark mode showing baseTAK as a central hub
with thin cyan rings radiating outward — visualizing heartbeat re-broadcast.
Five client icons (laptop, tablet, ATAK device, browser, mobile) connected
to the hub by thin lines, some lines marked with red "X" indicating packet
loss, but the next ring of the heartbeat reaches them anyway. Bottom label:
"HEARTBEAT RE-BROADCAST — CONFIGURABLE PER TYPE."
Aesthetic: dark charcoal background, TAK cyan accent, JetBrains-Mono-style
labels, tactical HUD vibe. Flat 2D schematic, no gradients, no 3D.
```

### Outcome 04 — Be the offline map server for every TAK device in the field ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A rural sheriff's
deputy in uniform standing beside a marked patrol vehicle on a backcountry
road, holding up a rugged Android tablet displaying a topographic map with
TAK-style markers. Mid-ground: cell-tower-free hilly terrain, no signs of
modern infrastructure. Background: a distant view down a valley with a
small town visible in the haze. Cinematic golden-hour light. The tablet
screen content is sharp and readable.
DO NOT include: military gear, weapons, glow effects, futuristic UI.
```

### Outcome 05 — Compose with the rest of the xTAK suite ✅ DONE
**🖥️ baseTAK agent screenshot**

Scenario: baseTAK web map showing a composed picture — APRS station icons (via digiTAK), Meshtastic node icons (via loraTAK), aircraft icons (via sdrTAK), a couple of chatTAK browser-user contacts, plus operator-placed markers. Mixed across the basemap with cyan markers on a satellite view. Side pane visible showing the Markers list grouped by source (APRSPrimary, APRSSecondary, Meshtastic, Aircraft, Friendly).

---

# digiTAK · 5 outcomes

### Outcome 01 — Run a shared TAK picture across two, three, or N sites ✅ DONE
**📐 Diagram** (Nano Banana with diagram prompt OR Figma)

```
A clean tactical schematic in dark mode showing three digiTAK sites
(small Pi+radio icons) connected by RF links — site A and site B over a
short hop, site B and site C through a digipeater node in the middle. Each
site has a "TAK NETWORK" cloud above it with ATAK/WinTAK client icons. A
synchronized marker (cyan diamond labeled "MARKER") appears in all three
clouds, showing federation. Bottom label: "BRIDGE MODE · N-WAY FEDERATION."
Aesthetic: dark charcoal background, TAK cyan accent, mono labels, flat
2D schematic, no gradients.
```

### Outcome 02 — Put every APRS station on your TAK clients ✅ DONE
**🖥️ baseTAK agent screenshot**

Scenario: ESRI / Mapbox satellite basemap zoomed to a state-sized region. Populate ~30 APRS station markers (a mix of weather stations, vehicle trackers, beacon stations) scattered across the map. Side pane showing the marker list grouped under "APRSPrimary" and "APRSSecondary." Mix of small cyan/blue icons on terrain.

### Outcome 03 — APRS-only operators are full participants — in both directions ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A licensed amateur
radio operator (man or woman, mid-50s, casual outdoor clothing, ARES
volunteer vest with reflective trim) standing at the back of his SUV at a
fire-staging area, holding a modern APRS-capable handheld radio
(Yaesu FT-3 / Kenwood TH-D75 style with a small color map display). The
handheld's screen is clearly showing an APRS map with several callsign
labels and position dots visible — visualizing the TAK operation's units
appearing on his rig. A magnetic mount whip antenna visible on the roof
of the vehicle. In the background, mid-ground, a TAK laptop visible on a
folding table with his own callsign appearing on the map as a small cyan
contact icon — showing the bidirectional bridge. Documentary-realism
style, golden-hour light, dust in the air. Real EmComm vibe.

The emphasis: he has NOTHING but an APRS handheld, and he is a full
participant in the TAK operation — seeing the team and being seen.

DO NOT include: military gear, weapons, futuristic UI, cyberpunk.
```

### Outcome 04 — Bridge WinTAK islands across the continent on HF ✅ DONE
**📐 Stylized illustration** (Nano Banana or vector illustration)

```
A stylized topographic illustration of the western United States seen from
high altitude, showing two state EOCs (small icon clusters) about 800 miles
apart — one in Oregon, one in Arizona. Between them, a thin arcing cyan
line representing an HF radio path bouncing off the ionosphere (subtle
glowing trail, no neon). On each end, small icons labeled "WinTAK" and
"digiTAK." Subtle reticle markings at the corners (tactical HUD style).
Aesthetic: dark sepia map, TAK-cyan signal arc, mono labels.
DO NOT include: bright sci-fi neon, hexagons, cartoonish military
imagery, lens flares.
```

### Outcome 05 — Modernize your APRS station with a TAK client ✅ DONE interface
**📐 Side-by-side composite** (Figma / Photoshop split panel)

Composite of two screenshots side-by-side:
- **Left:** A genuine UI-View32 screenshot (find on the web, public domain) showing the dated Windows-95-style APRS UI
- **Right:** Modern WinTAK / baseTAK screenshot showing APRS contacts on a satellite basemap with proper symbology

A small arrow / "vs" indicator between them. Caption: "OUT WITH THE OLD."

If side-by-side feels too literal, alternative: a single Nano Banana cinematic photograph showing a ham operator at their desk with a modern TAK laptop in foreground and an old CRT monitor with UI-View32 in the background, partially shut off.

---

# loraTAK · 3 outcomes

### Outcome 01 — Make every mesh node a TAK contact ✅ DONE
**🖥️ baseTAK agent screenshot**

Scenario: ESRI satellite imagery basemap zoomed to a forested SAR sweep area (~5 sq mi). Place ~12-15 Meshtastic node markers spread across the trail network and ridgelines (cyan icons, each with a callsign like "MESH-A1" through "MESH-A12"). Add a few drawn search-sector polygons. Side pane visible showing the team list with team colors per searcher.

### Outcome 02 — Run a real chat bridge in both directions ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A SAR coordinator in
an orange SAR vest seated at a folding table inside a base-camp pop-up
tent, illuminated by overhead LED work-light. On the table: a rugged
Windows laptop showing a TAK chat panel with messages from team members
in the field. In her hand: a Meshtastic handheld device displaying the
mirrored chat thread on its small color screen. The thread shows
back-and-forth messages between the coordinator and a team in the field.
Documentary-realism style. Evening light from outside, warm tent
ambiance, very real and operational.
DO NOT include: military gear, weapons, glow, neon, futuristic UI.
```

### Outcome 03 — Work alongside the rest of the xTAK suite ✅ DONE
**📐 Diagram**

```
A clean technical schematic in dark mode. Top: "TAK NETWORK ON LAN" bar
with ATAK / WinTAK / iTAK icons. Below: five small product cards arranged
in a row — loraTAK (with a tiny mesh-node icon), digiTAK (radio mast),
baseTAK (browser), sdrTAK (aircraft), chatTAK (Pi-with-phones). Each
connects to the network bar with a thin cyan line. A side annotation
showing "mesh chat reaching APRS via loraTAK → TAK → digiTAK." Aesthetic:
dark charcoal background, TAK cyan accent, mono labels, flat 2D, no
gradients.
```

---

# chatTAK · 4 outcomes

### Outcome 01 — Add anyone with a phone to your TAK network ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A close-up of a
volunteer's hands holding a modern smartphone, screen showing a
browser-based enrollment screen: input fields for "Callsign," "Team," and
a color picker, with a "Join Network" button. Beyond the phone, slightly
out of focus: a folding camp table with a small Raspberry Pi Zero in a
3D-printed case and a USB battery pack. Background slightly out of focus:
other volunteers in event t-shirts. Natural overcast outdoor light.
Documentary-realism, real volunteer-ops vibe. The phone screen content
is sharp and readable.
DO NOT include: military gear, glow effects, futuristic UI, cyberpunk.
```

### Outcome 02 — Drop into any operation without infrastructure ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A black Pelican case
open on the dropped tailgate of a parked SUV, revealing a small Raspberry
Pi Zero computer (palm-sized, in a 3D-printed case) wired to a USB power
bank. A small printed handwritten label on the case lid: "chatTAK · join
WiFi · pick callsign." Background slightly out of focus: a community
gathering — could be a folksy church parking lot, a school event, a
neighborhood-watch meeting, with a few people visible. Documentary-realism
style, late afternoon natural light, real community-ops ambiance.
DO NOT include: military gear, glow, neon, futuristic UI.
```

### Outcome 03 — Run a comms-forward command element from a single Pi ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A four-person field
command element gathered around the dropped tailgate of a Forest Service
truck on a fire road. On the tailgate: a small Raspberry Pi Zero in a
3D-printed case, plugged into a USB power bank. Each of the four people
in incident-command vests (yellow Nomex, ICS vests, or fire department
uniforms) is looking at their own personal smartphone displaying a
TAK-style chat interface. They're in mid-conversation, gesturing toward
the map terrain in the distance. Documentary-realism style. Late-afternoon
mountain light, slight wildfire haze, very real and operational.
DO NOT include: military combat gear, weapons, glow effects, futuristic UI.
```

### Outcome 04 — Compose with the rest of the xTAK suite ✅ DONE
**📐 Diagram** (same style as loraTAK O3)

```
A clean technical schematic in dark mode. Top: chatTAK Pi appliance
with three small phone icons connected via Wi-Fi. Bottom: TAK network
bar with ATAK / WinTAK / iTAK icons. A two-way thin cyan line connects
the chatTAK to the TAK network bar, with labels "chat both directions"
and "SA heartbeat per user." Side annotation: "chatTAK chat → loraTAK
→ Meshtastic node in field." Flat 2D, dark charcoal background, TAK
cyan accent, mono labels.
```

---

# sdrTAK · 4 outcomes

### Outcome 01 — See every transponder-equipped aircraft ✅ DONE in your operating area
**🖥️ baseTAK agent screenshot**

Scenario: WinTAK or baseTAK at a major airport (LAX, SFO, ORD) zoomed out to show 50+ aircraft contacts across a regional view. Use proper 2525C symbology — fixed-wing icons for airliners, rotorcraft icons for helicopters, civilian neutral affiliation. Hover tooltips visible on a few showing tail number + type + altitude. Dense, information-rich screenshot showing the air picture.

### Outcome 02 — Flag military and government aircraft ✅ DONE automatically
**🖥️ baseTAK agent screenshot**

Scenario: Same regional view as O1 but filter to show only military aircraft. ~6-8 aircraft with friendly (cyan) 2525C affiliation symbology — show a C-130 (callsign "RCH-XXX"), a CH-47 (callsign "DUSTOFF-XX"), an SAM-prefixed VIP transport, and a few others. Tooltips visible showing the callsign prefix being matched and the affiliation flipped.

### Outcome 03 — Add ships and (optionally) ISM sensors ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A harbormaster's
office overlooking a busy California port (Long Beach, San Diego, or
Oakland feel). Foreground: a rugged Windows laptop on a desk showing a
TAK satellite map view of the harbor with ~25 ship icons (AIS contacts)
marked across the water. Mid-ground: a window with a view out over real
container ships, cranes, and pleasure craft. Background: a U.S. flag
flag pole and other harbor infrastructure visible through the window.
Cinematic documentary style. Mid-afternoon natural light.
DO NOT include: military naval gear, weapons, futuristic UI, neon.
```

### Outcome 04 — Compose with the rest of the xTAK suite ✅ DONE
**🖥️ baseTAK agent screenshot**

Scenario: baseTAK web map showing a composed picture similar to baseTAK O5, with sdrTAK aircraft contacts (aviation symbols) prominently displayed alongside ground-team markers from operators, APRS stations from digiTAK, and Meshtastic nodes from loraTAK. Show the visual layering of multiple data sources on one map.

---

# netTAK · 4 outcomes

### Outcome 01 — Run xTAK on every field device
**🖥️ baseTAK agent screenshot** (or Figma admin-UI mockup)

A baseTAK-style dashboard/admin UI screenshot showing a list of 5-6 netTAK field devices, each with:
- A name (e.g., "NETTAK-ICP-01", "NETTAK-SQUAD-2", "NETTAK-LOGS-1")
- A status indicator (green=online)
- Running services (chips showing "sdrTAK", "loraTAK", "digiTAK", "chatTAK", or "baseTAK Lite")
- Battery / power indicator
- Last-seen timestamp

Side panel showing the mesh topology between the nodes. Tactical HUD aesthetic with TAK cyan accents.

### Outcome 02 — Mesh them together — or run a single node standalone ✅ DONE
**📐 Diagram** (Nano Banana or Figma)

```
Three-panel technical schematic, dark mode, arranged horizontally with
labels above each:
PANEL 1 — "STANDALONE": Single Pelican-cased Pi icon alone, connected
upward to a "TAK LAN" bar.
PANEL 2 — "LOCAL MESH (WI-FI + ETHERNET)": Three Pelican-cased Pi icons
connected by short cyan mesh lines representing Wi-Fi, all joined to
one "TAK LAN" bar.
PANEL 3 — "LONG-RANGE MESH (WITH HALOW)": Three Pelican-cased Pi icons
spread across a mountain ridge silhouette, connected by longer cyan
mesh lines, each with small Yagi antennas.
Aesthetic: dark charcoal background, TAK cyan accent, mono labels, flat
2D schematic, no gradients.
```

### Outcome 03 — Distribute maps in the field, no Operations Center required ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A wildland-fire
forward staging area at the edge of a mountain ridge. Foreground: a
small Pelican case open on a folding camp table holding a Pi-based
netTAK device, with a USB battery pack and a small panel antenna nearby.
Mid-ground: three wildland firefighters in yellow Nomex gear, two of them
holding rugged Android tablets clearly showing TAK topographic maps. The
third is referencing a paper map for comparison. Background: distant
mountain ridgelines, sunset glow on the horizon, no city or infrastructure
visible. Documentary-realism style. Warm golden-hour palette.
DO NOT include: military combat gear, weapons, glow effects, futuristic UI.
```

### Outcome 04 — Add surveillance and ISR feeds ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A small drone (DJI-
style, civilian) being launched from a clearing by a public-safety
operator in a navy SAR vest. Mid-ground: a Pi-based netTAK device on a
folding table, with cables running to a small 4G/5G antenna and a small
video monitor displaying the drone's downlinked footage — the drone view
showing a search area below. Beside the monitor, a rugged tablet
displaying the same drone telemetry as a TAK-overlaid feed. Background:
forested terrain, late-afternoon overcast light. Documentary-realism
style, real public-safety drone-ops vibe.
DO NOT include: military combat drones, weapons, futuristic glow,
cyberpunk.
```

---

# aiTAK · 4 outcomes

### Outcome 01 — Ask questions about the operational picture
**🖥️ baseTAK agent screenshot**

A screenshot showing a baseTAK or WinTAK interface with the right-side chat panel open. The chat shows a natural-language Q&A thread:
- IC: "summarize the last hour by sector"
- aiTAK-1: [structured bullet response with linked markers]
- IC: "where is Engine 3 right now?"
- aiTAK-1: [position + last status response]

Some of aiTAK's responses include small map-marker references that appear highlighted on the map view to the left. Tactical HUD aesthetic.

### Outcome 02 — Run as a watchful background participant
**🖥️ baseTAK agent screenshot** (admin/rule-editor view)

Split-view screenshot showing:
- **Left:** A rule-editor UI with operator-authored rules listed (Stationary-team alert, Geofence breach, Comms-silence alert) — each with a toggle, conditions, and a trigger window
- **Right:** The TAK chat panel with one active alert message posted by aiTAK: "⚠️ ALERT: A ground crew has been stationary for 22 minutes inside the hot-zone polygon you drew at 10:14."

### Outcome 03 — Draft, summarize, translate
**🖥️ baseTAK agent screenshot**

A formatted IAP (Incident Action Plan) draft generated by aiTAK appearing in the chat panel. Structured with headers ("Situation," "Objectives," "Resources Assigned," "Communications Plan"), pre-populated with realistic operational details. The IC is highlighting a section of the draft. Map view in the background showing the operational picture the IAP was generated from.

### Outcome 04 — Run on your own hardware, your own data ✅ DONE
**🎬 Nano Banana Pro**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A small compact
mini-PC (about the size of a hardcover book — Mac Mini or Intel NUC
style) sitting on a folding camp table at a remote field operations site,
visibly running quietly with a small power indicator LED. Cables running
from it to a portable rugged monitor showing a TAK map and a chat thread.
The mini-PC is plugged into a small 12V battery and a portable solar
panel propped up nearby on the ground. No buildings, no infrastructure
in sight. Mid-ground: a wildland firefighter referencing the monitor with
a worried/focused expression. Background: rugged mountain terrain with
distant smoke. Late-afternoon natural light. Documentary-realism style.
The mini-PC should look ordinary — a normal compact computer, not a
sci-fi "AI box."
DO NOT include: holographic UI, glowing neural-net visualizations, robot
imagery, futuristic glow, hexagons, cyberpunk.
```

---

# Workflow

1. **Run all Nano Banana Pro prompts** (the 🎬 ones) — they're the photographic shots that match the heroes already on the site.
2. **Set up your baseTAK agent for the UI screenshots** (the 🖥️ ones) — these need to look like the Devil's Gate Fire screenshots you already produced, just with different scenarios.
3. **Diagrams** (the 📐 ones) — try Nano Banana with the diagram prompts first; if they don't look clean enough, build them in Figma or Excalidraw and export PNG. They don't need to be photoreal.

**Naming convention when saving:**
```
/home/adam/xtak-site/img/products/<product>/<product>-01-<slug>.png
```

Example: `/home/adam/xtak-site/img/products/baseTAK/basetak-01-browser-ui.png`

When you have them, I'll:
1. Crop / aspect-adjust as needed
2. Wire each one into its outcome slot (replacing the current `<div class="placeholder">` blocks)
3. Add captions where useful
4. Capture screenshots to verify
