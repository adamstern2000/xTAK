# xTAK Image Prompts for Nano Banana Pro

Hero-image prompts for each product page. Each is designed for **cinematic widescreen aspect (21:9 or 2.13:1)** so they slot directly into the existing site layout next to the baseTAK scenario screenshots already in place.

**Universal style notes (apply to all):**
- Photorealistic, documentary cinematography
- Golden-hour or overcast natural lighting unless specified otherwise
- Tactical / operational / utility-grade aesthetic — military-adjacent but civilian public-safety
- Color grading: warm ambers + cool teal shadows (Hollywood color contrast)
- Real-deployment vibe, not staged or theatrical
- Slight shallow depth of field
- **Avoid:** combat aesthetic, Tom Clancy game-cover vibe, cartoonish military stuff, cyberpunk glow, neon, generic Silicon Valley gradients, 3D rendered "tactical" look, hexagons / circuits / neural nets

---

## 1. digiTAK hero

**Prompt:**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A wildland-fire incident
command staging area in the mountains of Southern California, golden-hour
lighting with light wildfire smoke in the distance. Foreground: an open
Pelican case on the tailgate of a fire-response truck, holding a Raspberry
Pi 5 (small black computer) with two USB cables routed cleanly — one to a
VHF amateur radio handheld, one to a desktop HF transceiver radio with knobs
and a small LCD display. Above the truck, a portable telescoping antenna
mast rises 15 feet, with both a VHF whip antenna and a longer HF wire dipole
visible. Next to the Pelican case, a rugged Windows laptop running TAK
mapping software (a topographic map with cyan-colored markers and a red
polygon visible on screen). One firefighter in yellow Nomex turnout gear
stands at the laptop, soot-marked face, mid-motion. Documentary-realism style.
Color graded with warm ambers and cool teal shadows.

DO NOT include: military combat gear, soldiers, weapons, glow effects,
neon, hexagons, futuristic UI mockups.
```

---

## 2. loraTAK hero

**Prompt:**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A search-and-rescue base
camp at a trailhead in dense California chaparral, late afternoon light
filtering through oak trees. Foreground: a folding camp table holding a
small Raspberry Pi computer with a single USB cable running to a Meshtastic
LoRa radio device (small, with a stubby black antenna, screen showing a
mesh-network display). Next to it, a rugged Windows laptop showing a TAK
map populated with twelve small icons representing search teams spread
across the wooded terrain. Mid-ground: two SAR volunteers in tan-and-orange
SAR vests preparing their packs, with Meshtastic handheld nodes clipped
visibly to their pack straps. Background: forested ridgeline, a dirt road
disappearing into the trees, no cell tower or modern infrastructure in
sight. Documentary-realism style. Warm afternoon light, organic outdoor
palette.

DO NOT include: military gear, glow effects, neon, futuristic UI, cyberpunk
aesthetic.
```

---

## 3. chatTAK hero

**Prompt:**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A volunteer aid station
at a community charity bike-ride event. Foreground: a small Raspberry Pi
Zero computer (palm-sized, in a 3D-printed plastic case) sitting on a
folding camp table, with a USB power bank plugged in. Above the case on a
small printed sign: a Wi-Fi network name and a QR code. Mid-ground: three
event volunteers in casual t-shirts and sunhats, each holding their personal
smartphone, looking at the same web-app chat interface showing TAK-style
team callsigns and a regional map. They're standing around a cooler and a
medical kit on a portable table. Background: bicycle riders passing on a
back road, mountains in the distance, daylight, slight haze. Documentary-
realism style, warm community-event vibe. Real volunteer-operations
ambiance, NOT military.

DO NOT include: tactical military aesthetic, soldiers, weapons, futuristic
glow, neon, cyberpunk.
```

---

## 4. sdrTAK hero

**Prompt:**

```
Cinematic widescreen photograph, 21:9 aspect ratio. An airshow safety
operations setup at a small regional airport on a bright California summer
day. Foreground: a folding table on the airport ramp holding a Raspberry Pi
5 with two small RTL-SDR USB radio dongles plugged into a powered hub.
A ground-plane antenna sits on a portable tripod next to the table,
extending about 4 feet up. A rugged Windows laptop nearby shows a TAK
mapping interface densely populated with aircraft icons (small fixed-wing
and helicopter silhouettes) across a regional map — clearly showing
real-time air traffic. Mid-ground: a person in an "EVENT SAFETY" vest
gesturing toward the laptop screen, in conversation with another person
in a polo shirt. Background: aircraft silhouettes on a sunny taxiway,
a control tower at distance, blue sky with high cirrus clouds.
Documentary-realism style. Crisp, clear midday lighting with subtle
haze. Real airshow public-safety ambiance.

DO NOT include: military combat aircraft as foreground subject, soldiers,
weapons, futuristic UI mockups, glow, neon.
```

---

## 5. netTAK hero

**Prompt:**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A wildland-fire forward
operating area in the rugged mountains of Southern California, late
afternoon with golden hour light and a faint orange glow of wildfire smoke
on the horizon. Foreground: a black Pelican case open on a flat rock,
revealing a Raspberry Pi 5 in a small ruggedized enclosure with cables
routing to a directional Yagi antenna mounted on a small tripod nearby
(pointing up toward a distant ridge). Beside it, a 12V deep-cycle battery
powering the setup, with a small solar panel visible at the edge of frame.
Mid-ground: a wildland firefighter in yellow Nomex gear consulting a rugged
Android tablet showing a TAK map. Background: a steep mountain ridgeline in
silhouette, distant smoke columns, a second forward-operating site visible
across the valley as a tiny human-built marker — implying the mesh link.
Documentary-realism style. Warm amber/golden palette with cool blue shadows.

DO NOT include: military combat gear, soldiers, weapons, futuristic glow,
neon, cyberpunk, cartoonish stylization.
```

---

## 6. aiTAK hero

**Prompt:**

```
Cinematic widescreen photograph, 21:9 aspect ratio. A regional emergency
operations center during an active wildfire response. Foreground: an
incident commander in a navy ICS vest (woman, mid-40s, focused expression)
seated at a desk with two large monitors — the left monitor shows a TAK
mapping interface with fire perimeter polygons and team markers across a
mountainous topographic basemap; the right monitor shows a chat-style
interface with a conversation between the IC and a contact labeled
"aiTAK-1," displaying a structured SITREP being drafted automatically. On
the desk between the monitors, a small compact mini-PC (about the size of a
hardcover book) with a discreet LED indicator. Mid-ground: other EOC staff
working at adjacent stations, some looking at wall-mounted situational-
awareness displays. Background: a large wall map and a window showing
late-afternoon smoky exterior light. Documentary-realism style, warm
interior lighting contrasted against cool blue monitor glow.

DO NOT include: science-fiction holographic UI, glowing neural-net
visualizations, robot or AI cartoon imagery, futuristic glow, hexagons,
cyberpunk aesthetic. The mini-PC should look ordinary — a normal compact
computer, not a "futuristic" AI box.
```

---

## How to use these

1. **Nano Banana Pro** in Gemini Advanced or AI Studio supports cinematic widescreen aspect ratios — set output to **21:9** or specify "widescreen 2.13:1" in the prompt as I have above.
2. Generate 4-6 candidates per prompt; pick the strongest.
3. If text labels on the laptop/monitor screens come out wrong (which Nano Banana Pro is sometimes still imperfect at), don't worry — they're small enough that a slightly off label still reads correctly at the page-display size.
4. **Output resolution:** request the highest available (typically 2K or 4K from Nano Banana Pro). I'll crop to 1921×902 to match the existing baseTAK scenario images.
5. Save as PNG. Drop the chosen images into `/home/adam/xtak-site/img/products/` with names matching the slot:
   - `digitak-hero.png`
   - `loratak-hero.png`
   - `chattak-hero.png`
   - `sdrtak-hero.png`
   - `nettak-hero.png`
   - `aitak-hero.png`

I'll then wire each into its product page (replacing the current placeholder block), apply the same crop / aspect adjustments I did for the baseTAK images, and add the caption block.

## Iteration tips

If a generated image is *almost right* but missing one element (the antenna is too short, the laptop screen is wrong, the lighting is too dark, etc.), use Nano Banana Pro's **edit mode** — describe just the change in a follow-up prompt like:
- *"Same image but the antenna mast should be twice as tall."*
- *"Same image but the laptop screen should show a topographic map with red fire-perimeter polygons."*
- *"Same image but warmer golden-hour lighting from camera-left."*

That avoids regenerating from scratch and preserves the parts you like.
