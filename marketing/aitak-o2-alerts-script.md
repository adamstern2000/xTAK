# aiTAK O2 — Watchful Background Alerts Script

Realistic alert thread for the aiTAK O2 outcome image. Same Devil's Gate
Fire scenario as the O1 script, so the geofences, units, and markers all
match `devil-gate-fire-cots.yaml`.

**Key difference from O1**: these are *pushes* — aiTAK posting on its own
because a rule fired. Two of them have IC interaction afterward so the
panel reads as "this isn't a one-way notifier."

Pick any 3–5 turns. The order matters here (chronological alerts during a
~30-min window of the operation). Try to land at least one of each:
*geometric/intersection*, *stationary-team*, *comms-silence*,
*battery/pattern*, *fire-on-infrastructure CRITICAL*.

---

## Alert 1 — MEDIUM · projection intersects critical infrastructure

**[13:55:12] @aiTAK · MEDIUM**
> 📊 **PROJECTION** — 24-hr predicted-spread polygon now intersects
> Mt. Wilson Observatory protection radius (400 m).
>
> Rule: `geometric-intersection( "Predicted Spread — Next 24 Hours",
> "ALERT — Mt. Wilson Observatory perimeter" )`
> Trigger time: 13:54:48 PDT
> Linked markers: Predicted Spread polygon · Mt. Wilson Observatory (MTWO)
>
> Recommended: re-run structure-protection assignments before sundown.

---

## Alert 2 — HIGH · stationary crew inside fire perimeter (with IC interaction)

**[14:09:03] @aiTAK · HIGH**
> ⚠️ **STATIONARY CREW** — Crew 7 (Hot Shots) stationary at 34.2410,
> -118.0560 for 18 min. Position is inside "Devil's Gate Fire — Current
> Perimeter."
>
> Rule: `friendly-unit-stationary > 15 min inside fire perimeter`
> Last comm: 13:51 PDT — "tying in to dozer line, holding"
> Linked markers: Crew 7 (C-7) · current fire perimeter polygon
>
> Recommended: radio check.

**[14:09:32] @ic-base**
> Roger. Trying them on tac 2.

**[14:09:34] @aiTAK**
> Acknowledged at 14:09 by @ic-base. Suppressing repeat until status update
> received or crew moves.

**[14:11:18] @aiTAK · RESOLVED**
> ✅ Crew 7 beaconed at 14:11:02 PDT, moving 1.2 m/s NE. Stationary alert
> cleared.

---

## Alert 3 — INFO · comms silence (with IC follow-up)

**[14:14:42] @aiTAK · INFO**
> 🔕 **COMMS SILENCE** — Lookout-1 (Mt. Wilson Observatory) has not
> beaconed or chatted in 9 min.
>
> Rule: `contact-silent > 8 min on team channel`
> Last position: 34.2257, -118.0586 (Mt. Wilson Observatory dome)
> Last chat: 13:58 — "spotting south flank, will update Q5"
> Linked marker: Lookout-1 (LOOKOUT-1)

**[14:14:58] @ic-base**
> @aiTAK what's their movement history last hour?

**[14:15:01] @aiTAK**
> Lookout-1 position history 13:14 – 14:05:
> - 13:14 — observatory dome (34.2257, -118.0586)
> - 13:32 — observatory dome
> - 13:51 — observatory dome
> - 14:05 — observatory dome
>
> Stationary the entire hour. No drift. Battery last reported 64 % at
> 13:51. Consistent with manning a fixed lookout post — silence may be
> binoculars-up rather than a real outage. Suggest VHF check before
> dispatching.

---

## Alert 4 — HIGH · low battery + hazard polygon

**[14:17:55] @aiTAK · HIGH**
> 🔋 **BATTERY + HAZARD ZONE** — Crew 9 hand crew lead tablet at 18 %.
> Last position 34.2280, -118.1020 (Mt. Disappointment N slope).
>
> Rule: `battery < 20% AND inside hazard polygon`
> Linked markers: Crew 9 (C-9) · Devil's Gate Fire — Current Perimeter
>
> Recommended: dispatch swap battery via Helispot 2 (Eaton Saddle, ~340 m
> NW). Or have crew lead swap to a partner's device for the operational
> period.

---

## Alert 5 — CRITICAL · fire enters Observatory perimeter

**[14:22:39] @aiTAK · CRITICAL**
> 🚨 **CRITICAL — STRUCTURE THREAT**
> Fire feature has entered the 400 m perimeter of Mt. Wilson Observatory.
> Spotting from "Hotspot — Mt. Disappointment" advanced 180 m south in the
> last 4 min.
>
> Rule: `fire-or-hostile-entry on "ALERT — Mt. Wilson Observatory perimeter"`
> Trigger time: 14:22:31 PDT
> Linked markers: Mt. Wilson Observatory (MTWO) · Hotspot — Mt. Disappointment
>
> ⚠️ Reminder from the Observatory marker remarks: **NO RETARDANT within
> 200 ft of the domes.** Tanker 96 is inbound (ETA 14:18 — now overdue
> by 4 min, check status).
>
> Coordinate immediate. Notifying Engine 16 and Lookout-1 on team channel.

---

## Voice / style notes for the rendered panel

- aiTAK alerts open with an **emoji + severity tag in bold** so the eye
  jumps to severity first. The severity ladder: INFO → MEDIUM → HIGH →
  CRITICAL → RESOLVED.
- Each alert has a **Rule** line in mono-style font citing the actual
  condition, plus a **Trigger time**, **Last position/comm**, and
  **Linked markers** block — operators must believe these are computed,
  not authored.
- Recommendation language is concrete and includes **next physical
  action** (radio check, dispatch swap battery, re-run assignments). aiTAK
  isn't supposed to *decide* — but it should *propose*.
- When the IC interacts (@ic-base), aiTAK **acknowledges and self-mutes**
  (Alert 2) or **answers with history rather than re-firing** (Alert 3).
  This communicates "it's a participant, not a beeping radio."
- Resolved alerts auto-post a **✅** line (Alert 2) so the panel doesn't
  leave the IC wondering what happened — same chat thread, no separate
  audit log to chase.
- @aiTAK uses an `aiTAK` callsign rendered with a distinctive marker color
  (suggest amber `#ff9b3a` chip on the bubble, or a small ⚙ icon next to
  the handle) so it visually reads as "in the chat but not human."
