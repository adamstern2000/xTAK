# aiTAK O3 — Draft / Summarize / Translate Script

Realistic chat thread for the aiTAK O3 outcome image. Same Devil's Gate
Fire scenario as O1 and O2 — every cite is checkable against
`devil-gate-fire-cots.yaml`.

**Key difference from O1 and O2**:
- O1 is *operator-pulls* (Q&A about the picture)
- O2 is *aiTAK-pushes* (rule-driven alerts)
- O3 is *operator-asks-for-a-draft* (generative outputs: IAP, hand-off
  summary, radio script, translation)

Each turn shows aiTAK producing a **draft** — operator stays in the loop,
aiTAK doesn't send anything outbound. The visual story: "junior planning
officer who never sleeps, but the IC ships."

Pick any 2–3 turns. The drafts are long, so 2 turns + a short third may
fit the panel better than 4 cramped ones.

---

## Turn 1 — IAP section for the next operational period

**[15:42:18] @ic-base**
> @aiTAK draft the operational-period change section for the 18:00 IAP.
> Night shift, same divisions.

**[15:42:24] @aiTAK**
> **OPERATIONAL PERIOD — 18:00 17 JUL 2026 → 06:00 18 JUL 2026**
> Incident: CA-ANF-2026-001423 · Devil's Gate Fire
>
> **Weather (night):** RH recovery 35–55 % after 02:00 · winds slacken to
> 8–12 mph WSW · temps 62–58 °F · clear · no precip
>
> **Strategy:** Hold direct line east flank · complete indirect dozer line
> Eaton Saddle → Inspiration Point · structure protection at Mt. Wilson
> Observatory and antenna farm · monitor 24-hr predicted-spread polygon
>
> **Division Assignments:**
>
> *Division Z (East Flank)* — Crew 7 (Hot Shots) night patrol + mop-up.
> Resources: 2× engines (E-11 night relief, E-16), Copter 22 night-vision
> recon to 22:00.
>
> *Division Y (West Flank)* — Dozer 3 continues indirect line to Inspiration
> Point. Crew 9 mop-up behind dozer. WT-41 cycling refill at Eaton Canyon.
>
> *Division X (Structure Protection)* — E-8 (LACoFD), E-12 (LACoFD) hold
> Mt. Wilson antenna farm. Lookout-1 remains on observatory dome.
>
> **Aviation:** Stand down 19:30 sunset. Tanker 96 released to base.
> Helo ops back on station 06:00.
>
> **Safety:** Watch-out — overnight RH recovery may mask continued spotting
> near antenna farm. LCES intact via Helispots 1, 2, 3.
>
> **Next briefing:** 17:30 PDT at Henninger Flats ICP.
>
> *Draft. Review and send.*

---

## Turn 2 — End-of-shift hand-off summary

**[17:48:03] @ic-base**
> @aiTAK summarize my shift for the incoming IC. 5 bullets max.

**[17:48:06] @aiTAK**
> **HAND-OFF — Day Shift → Night Shift · 18:00 17 JUL 2026**
> From: @ic-base · To: incoming IC
>
> 1. **Acreage 620 → 740 (+19 %)** with sundowner push. Containment held
>    at 15 %. East-flank dozer line tied to crew direct line at 14:42 —
>    that's the win of the shift.
>
> 2. **Mt. Wilson Observatory took a 14:22 fire-entry alert** — Hotspot —
>    Mt. Disappointment spotted within the 400 m geofence. E-16 + Lookout-1
>    held the dome. NO RETARDANT advisory still in force.
>
> 3. **Crew 7 stationary alert at 14:09 — radio outage, recovered at
>    14:11.** No injury. Worth a quick check-in on shift change.
>
> 4. **Evac: mandatory zone 88 % cleared.** 6 refusals at Chaney Trail
>    addresses — LACSD has the list. No civilian contacts inside the
>    polygon as of 17:30.
>
> 5. **Watch-item for the night:** predicted-spread polygon intersects
>    the Observatory perimeter. If sundowners hold past 02:00, expect
>    pressure on the structure-protection task force.
>
> Full audit trail in TAK chat history. Markers and drawings are current
> as of 17:42 PDT.
>
> *Draft. Edit before sending.*

---

## Turn 3 — Chat-to-radio translation

**[16:14:51] @air-ops**
> hey @ops-chief tanker 96 inbound 2 mins, gonna want her to drop on the
> south flank like we talked, not the east — east is too close to the
> dome and we got the no retardant advisory there.

**[16:15:09] @ops-chief**
> @aiTAK translate the above into clean radio traffic for me to read out
> on command net.

**[16:15:11] @aiTAK**
> **Radio traffic — Command Net · standby**
>
> > "Command, Air Ops. Tanker 96 inbound, ETA two mikes. Be advised:
> > retardant load will be dropped on the SOUTH flank — not the east.
> > Repeat: drop assignment is south flank only. East flank is restricted
> > per NO-RETARDANT advisory within 200 feet of Mt. Wilson Observatory.
> > Confirm receipt."
>
> *Draft for you to read. ~12 seconds, clear net.*

---

## Turn 4 — Translation into Spanish (community evac notice)

**[16:32:18] @ops-chief**
> @aiTAK draft the mandatory-evac notice in English and Spanish for the
> Altadena PIO push. Two sentences each.

**[16:32:21] @aiTAK**
> **MANDATORY EVACUATION — Altadena foothills · 17 JUL 2026 16:30 PDT**
>
> *English:*
> > Mandatory evacuation is in effect for residents north of Loma Alta
> > Drive, west of Lake Avenue, and along Chaney Trail. Leave now —
> > follow LACSD direction to the Pasadena Convention Center evacuation
> > shelter.
>
> *Español:*
> > Se ha ordenado la evacuación obligatoria de los residentes al norte
> > de Loma Alta Drive, al oeste de Lake Avenue, y a lo largo de Chaney
> > Trail. Salgan ahora — sigan las indicaciones del LACSD hacia el
> > refugio de evacuación en el Pasadena Convention Center.
>
> *Draft. Verify street names against the LACSD evac order before push.*

---

## Voice / style notes for the rendered panel

- Every aiTAK draft closes with a small **"*Draft.*"** line — reinforces
  that aiTAK is producing copy for the operator to review and send, not
  taking action itself.
- Section headers are **uppercase + bold** to read as document copy, not
  chat prose. Operators recognize the IAP and SITREP shape immediately.
- Bracketed asides (`> "..."`) for the radio-traffic translation — they
  visually mark "this is the script to read aloud" vs. the conversation
  around it.
- Bilingual draft uses ***English:*** / ***Español:*** sub-headers and
  matched two-sentence structure — makes side-by-side review easy.
- Specific numbers (acreage growth %, time stamps, percentage cleared)
  read as *retrieved from history*, not generated. The drafts are
  trustworthy because they cite real markers, real geofences, and real
  alert events from the earlier chats.
- If you only have room for 2 turns, **pick Turn 2 (hand-off) + Turn 3
  (radio translation)** — they cover summarize *and* translate, and Turn
  3 fits in fewer lines than the IAP.
