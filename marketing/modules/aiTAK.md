# aiTAK — Marketing Module

**Status:** ★ Design phase — first release timing TBD
**Last updated:** 2026-07-08
**Use this for:** vision-state content, design teasers, demo scripts grounded in the Devil's Gate Fire scenario.

> **Disclosure:** aiTAK is the most experimental product in the suite. The architecture is being prototyped; first public-release timing is TBD. Posts and videos referencing aiTAK must flag this clearly.

---

## TL;DR

aiTAK is an AI agent that participates in the TAK picture as a first-class contact. Operators chat with it via native GeoChat to query the SA picture, ask for summaries, request COT generation, or task it to monitor specific feeds. Local-first — runs on the same appliance as the rest of the suite, no cloud dependency. Pluggable LLM backend (OpenAI, Anthropic, Ollama, llama.cpp).

**The pitch:** an AI on your TAK network you can talk to like a person, without sending your SA picture to a third-party cloud.

---

## Taglines

- **"An AI on your TAK chat. Local-first."** *(headline)*
- **"Ask questions about the operational picture in natural language."** *(use-case angle)*
- **"A junior planning officer who never sleeps."** *(workflow angle)*
- **"Your SA picture never leaves your hardware."** *(privacy / sovereignty angle)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **Incident Commanders** | "Ask aiTAK to summarize the last hour by sector. Draft a SITREP for the 1430 brief. Translate an informal chat into clean radio traffic. The IC stays in the loop; aiTAK drafts, the IC sends." |
| **Planning sections / IAP authors** | "Draft the operational-period IAP section with division assignments. End-of-shift hand-off in 5 bullets. Bilingual evac notices for PIO push (English + Spanish)." |
| **Watch-officers / dispatch** | "Watchful background participant. Operator-defined rules fire alerts when conditions trigger — stationary crew in a hazard zone, comms silence, battery low + hot zone, fire enters a geofence." |
| **EmComm net controls** | "aiTAK as a passive participant on the TAK chat thread, responding to '@aitak status' style queries with structured snapshots." |
| **Privacy-conscious agencies** | "Local-first. Your SA picture, your contacts, your chat history — none of it leaves your hardware. BYO model. No cloud dependency required." |

---

## Three outcomes (the design surface)

### O1 — Ask questions about the operational picture
The IC asks; aiTAK answers with structured, citable, scan-friendly responses. Scripts in [`aitak-o1-chat-script.md`](../aitak-o1-chat-script.md) — 5 example Q&A turns grounded in the Devil's Gate Fire YAML scenario:
- Summarize the last hour by sector
- Where is Engine 11 right now and what was their last status update?
- Which crews are inside the Mandatory Evacuation Zone I drew?
- When was the marker for Mt. Wilson Observatory first placed, and by whom?
- Draft a SITREP for the 1430 brief.

### O2 — Watchful background participant
aiTAK auto-fires alerts when operator-defined rules trigger. Scripts in [`aitak-o2-alerts-script.md`](../aitak-o2-alerts-script.md) — 5 example alerts:
- MEDIUM: 24-hr predicted-spread polygon intersects critical infrastructure
- HIGH: Stationary crew inside fire perimeter (with IC acknowledgment + auto-resolve)
- INFO: Comms silence + IC follow-up query for movement history
- HIGH: Low battery + hazard polygon
- CRITICAL: Fire feature enters infrastructure perimeter

### O3 — Draft / summarize / translate
Generative outputs the operator reviews and sends. Scripts in [`aitak-o3-drafts-script.md`](../aitak-o3-drafts-script.md):
- IAP section for next operational period
- End-of-shift hand-off summary (5 bullets)
- Chat-to-radio translation (informal chat → clean radio script)
- English + Spanish evac notice for PIO push

---

## Killer features (design target)

1. **First-class TAK contact** — aiTAK appears on the roster with its own callsign and team affiliation. Indistinguishable from a human participant on the wire.
2. **Native GeoChat interaction** — DM, broadcast, team. Operators talk to it like a person.
3. **CoT generation from natural language** — "place a friendly marker at Mt. Wilson Observatory" → marker appears on every TAK client.
4. **Picture summarization** — structured operational briefs grounded in the TAK history.
5. **Feed monitoring** — "alert me if any fire feature enters the Mt. Wilson geofence" runs as an always-on rule.
6. **Local-first** — runs on the same appliance as the rest of the suite. No required cloud dependency. BYO model.
7. **Pluggable LLM backend** — OpenAI, Anthropic, Ollama, llama.cpp.

---

## Suite-level pairings

- **aiTAK + baseTAK** — aiTAK's responses include marker UIDs and coordinates that link back to the baseTAK map. The operator clicks a referenced marker; baseTAK pans to it.
- **aiTAK + the whole suite** — aiTAK queries can range across APRS contacts (digiTAK), mesh nodes (loraTAK), aircraft (sdrTAK), and TAK chat history.

---

## Honest disclosures

- **Status:** ★ Design phase. First-release timing TBD. The positioning above is the design target — the actual first-release feature set will likely be a subset, with capabilities added incrementally.
- **Chat rendering constraint:** the chatTAK incognito-window workflow used to render aiTAK demo screenshots supports only 2 callsigns easily. All three example scripts use only `@ic-base` and `@aiTAK`. Future scripts should follow the same constraint.
- **Local-first is the design intent.** BYO model. Specific backends are pluggable, not yet committed.
- **All aiTAK content must flag the design-phase status.**

---

## Sample social posts

### X / Twitter

> **POST 1 — the SA-query hook** 🚧 *(design phase)*
> Ask the TAK picture a question.
>
> > "Summarize the last hour by sector."
> > "Where is Engine 11 right now and what was their last status update?"
> > "Draft a SITREP for the 1430 brief."
>
> aiTAK — local-first AI on your TAK chat. Coming.

> **POST 2 — the watchful hook** 🚧
> Operator-defined rules fire alerts when conditions trigger.
>
> Stationary crew in a hazard zone. Comms silence. Low battery + hot zone. Fire enters a geofence.
>
> aiTAK posts the alert in TAK chat. IC acknowledges. Self-mutes.

> **POST 3 — the privacy hook** 🚧
> Your SA picture never leaves your hardware.
>
> aiTAK runs locally. BYO LLM — OpenAI, Anthropic, Ollama, llama.cpp.
>
> No cloud uplink required. Your contacts, chat, and geofences stay yours.

### LinkedIn

> 🚧 **POST A — the design teaser**
> The product in xTAK we're most excited about (and the one furthest from shipping): aiTAK — an AI agent that participates in the TAK picture as a first-class contact.
>
> Three use cases drive the design:
>
> 1. **Ask questions about the operational picture.** "Where is Engine 11 right now and what was their last status update?" "Which crews are inside the evac zone I drew?" "Draft a SITREP for the 1430 brief." aiTAK answers from real TAK history with structured, citable responses.
>
> 2. **Watchful background participant.** Operator-defined rules fire alerts when conditions trigger — stationary crew in a hazard zone, comms silence, fire entering a geofence. aiTAK posts the alert in TAK chat, IC acks, and aiTAK self-mutes.
>
> 3. **Drafts.** IAP sections, hand-off summaries, chat-to-radio translations, bilingual evac notices. aiTAK drafts; the operator reviews and sends.
>
> Local-first. BYO LLM. Your SA picture stays on your hardware.
>
> Design phase — follow along at https://xtak.ai/beta

---

## Video script outlines

### 30-second concept teaser

| 0:00–0:08 | Close-up of an IC's TAK chat panel. IC types: "Where is Engine 11 right now and what was their last status?" |
| 0:08–0:18 | aiTAK responds with a structured answer: position, last comm timestamp, comm quote, recommended action. |
| 0:18–0:24 | Quick cut: aiTAK alert fires for a stationary crew. IC types "Roger. Trying them on tac 2." aiTAK acknowledges. |
| 0:24–0:30 | Title card: **aiTAK. Local-first AI on your TAK chat. (Design phase.)** |

### 60-second feature brief

1. **Hook (0:00–0:10):** "An AI on your TAK chat you can talk to like a person." Show the chat panel with `@aiTAK` callsign.
2. **Use case 1 (0:10–0:25):** Q&A flow. IC asks a question, aiTAK answers in structured form.
3. **Use case 2 (0:25–0:40):** Alert flow. Rule fires, alert posts, IC acknowledges, aiTAK self-mutes.
4. **Use case 3 (0:40–0:52):** Draft flow. IC requests a SITREP. aiTAK drafts. "Draft. Edit before sending."
5. **Close (0:52–0:60):** Design-phase disclosure. Follow along at xtak.ai/beta.

---

## Demo talking points (when scripted)

> Open the chatTAK panel. Two callsigns: `@ic-base` and `@aiTAK`.
> Type a question. aiTAK responds in structured format (headers, bullets, coordinates).
> Cite real markers (e.g., Mt. Wilson Observatory) and explain what aiTAK is doing under the hood.
> Show an alert auto-firing. IC acks. aiTAK self-mutes.
> Request a SITREP draft. aiTAK produces structured copy ending with "Draft. Edit before sending."

Use scripts: [`aitak-o1-chat-script.md`](../aitak-o1-chat-script.md), [`aitak-o2-alerts-script.md`](../aitak-o2-alerts-script.md), [`aitak-o3-drafts-script.md`](../aitak-o3-drafts-script.md).

---

## Objections + responses

| Objection | Response |
|---|---|
| "When does it ship?" | "Design phase. Timing TBD. Honest disclosure — first-release feature set will be a subset of the design target." |
| "ChatGPT / Claude already do this." | "Sure, with manual copy-paste of TAK data. aiTAK is the productized agent with TAK-native chat in and out — no copy-paste, no separate window, no leaking your SA picture to a cloud." |
| "What about defense-tier AI ops platforms?" | "Defense-grade, integrates AI across radar, EW, UAS. aiTAK is the operator-grade tier — public safety, SAR, EmComm. Different audience, different price." |
| "Do I have to use OpenAI?" | "No. Pluggable backend. Use Ollama or llama.cpp for fully-local. OpenAI / Anthropic for cloud if you choose." |
| "Does aiTAK take action on its own?" | "No. aiTAK proposes, the operator decides. Every draft closes with 'Draft. Edit before sending.' Alerts post in chat for human acknowledgment." |

---

## Visual / image cues

- **The aiTAK chat-panel close-up** — outcome image showing all 3 use cases (Q&A, alerts, drafts) in one rendered panel. Use the live outcome images.
- **The Devil's Gate Fire scenario** — every aiTAK demo anchors here. Devil's Gate is the operational reality aiTAK responds about.
- **No futuristic UI** — keep it strictly TAK chat, no AI-themed dashboards, no glowing brain icons.

Avoid: neural-net cliches, glowing brains, "AI in a sphere," sci-fi UIs. aiTAK should look like a TAK contact, not a science-fiction prop.

---

## Key terms

- **LLM** — large language model. The category of AI that aiTAK is built on top of.
- **BYO model** — bring your own model. Operator chooses which backend to plug in (cloud or local).
- **GeoChat** — TAK's native chat protocol. aiTAK speaks it natively.

---

*Related: [`aitak-o1-chat-script.md`](../aitak-o1-chat-script.md), [`aitak-o2-alerts-script.md`](../aitak-o2-alerts-script.md), [`aitak-o3-drafts-script.md`](../aitak-o3-drafts-script.md), [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/aiTAK.html`.*
