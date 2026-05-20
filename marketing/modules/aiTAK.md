# aiTAK

# An AI operations assistant that lives inside your TAK network.

**aiTAK is an LLM-backed operator's helper that joins your TAK network like any other xTAK service, watches the picture as it evolves, and answers questions, summarizes activity, drafts chat, and flags conditions that match operator-defined rules — running on your own hardware, in your own deployment, never on someone else's cloud.**

> **Status: in active development.** Architecture is being prototyped; first public release timing TBD.

> **About TAK:** aiTAK joins the same network as ATAK (Android), WinTAK (Windows), and iTAK (iOS). It reads the TAK picture in real time and participates as a TAK contact — answering DMs, posting summaries, flagging conditions. [More about the TAK ecosystem →](../about-tak.md)

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtak)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtak)

---

## The scenario

It's hour four of a multi-agency wildfire response. The IC has three operations sections, two air assets in the box, four ground crews, and a planning meeting in twenty minutes. Her WinTAK is dense with markers — staging areas, hot spots, structure threats, drop points, hazard zones, four kinds of overlay.

She opens a chat thread with `aiTAK-1` from her WinTAK.

> *"summarize the last hour by sector"*

aiTAK posts a four-bullet brief in chat: spread direction by sector, structures newly threatened, air-asset activity, ground-crew positions. Each bullet links to the relevant markers on her map.

> *"draft the 1400 IAP planning brief"*

aiTAK drops a draft into chat, structured to her unit's IAP template, pre-populated with the position and activity data it observed over the last shift.

While she's reviewing the draft, aiTAK posts on its own:

> *"⚠️ A ground crew has been stationary for 22 minutes inside the hot-zone polygon you drew at 10:14. Their last chat said 'taking ten.' Possible heat exhaustion. Suggest comms check."*

She DMs the crew lead. They're fine — but she didn't have to be the one watching.

**An LLM that has been on the network the whole time, watching what every operator was watching, and helping.**

That's aiTAK.

---

## What you can do

### 1. Ask questions about the operational picture in natural language

aiTAK has been on the TAK network since the start of the deployment. It has the full COT history, the chat log, the marker placements, the team movements, and the timestamps.

- **"Summarize the last hour by sector"**
- **"When was the structure marker at Smith Road first dropped? By whom?"**
- **"Where is Engine 3 right now and what was their last status update?"**
- **"Which crews are inside the evacuation zone I drew?"**
- **"Draft a SITREP for the 1400 brief"**

### 2. Run as a watchful background participant

Operator-defined rules let aiTAK monitor for conditions that an IC shouldn't have to watch personally.

- **Stationary-team alerts** — flag a team that hasn't moved in N minutes inside a hazard polygon
- **Geofence breaches** — alert when any contact crosses an operator-drawn boundary
- **Comms-silence alerts** — flag a contact that hasn't beaconed or chatted in N minutes
- **Pattern recognition** — flag combinations of conditions (low battery + entering hot zone)

Alerts post as TAK chat from aiTAK's TAK identity; ICs can DM aiTAK for more context.

### 3. Draft, summarize, translate

Anything you'd ask a junior planning officer to bang out, aiTAK can draft. The operator stays in the loop — aiTAK produces drafts; humans send them.

- **IAP / SITREP drafts** from observed activity
- **End-of-shift summaries** for hand-off briefs
- **Chat-to-radio translation drafts** — formalize an informal chat into a clean radio-traffic script

### 4. Run on your own hardware, your own data

aiTAK is built to run **locally** — on a workstation with a consumer GPU, or on a server with proper inference hardware. It does not send the operational picture to anyone's cloud. The LLM, the embeddings, the chat history, the COT log — all of it stays on your machine.

- **Local-first, by design** — sensitive operational data never leaves the deployment
- **Bring-your-own-model** — open-weights LLMs (Llama, Qwen, Mistral, etc.) supported
- **No subscription, no API keys** — your hardware, your inference, your costs
- **Audit log** — every aiTAK response is logged with the prompt, the model, and the data it referenced

---

## Who runs aiTAK

- **Incident commanders** running medium-to-large incidents who need a second pair of eyes on a busy picture.
- **Planning section chiefs** drafting IAPs and SITREPs against a shifting operational picture.
- **SAR operations chiefs** managing dozens of teams across long shifts.
- **EOC staff** at multi-day activations where shift hand-offs need crisp summaries.
- **Training coordinators** running exercises where post-event AAR depends on a clean record of what happened when.
- **Anyone running a TAK deployment with sensitive data** who can't legally or operationally use a cloud LLM service.

---

## Under the hood

For the engineer screening this before adoption:

- **Local-first inference.** Runs against any OpenAI-compatible local inference endpoint (llama.cpp, vLLM, Ollama, LM Studio, TGI). Bring your own model.
- **Joins the TAK multicast network as a peer.** Has its own UID, callsign, team, and SA heartbeat — TAK clients can DM aiTAK like any other contact.
- **Streaming COT ingest.** Builds a structured event log of every marker, chat, position update, and shape change — queryable in natural language with the LLM.
- **Retrieval-augmented over operational context.** Embeddings + vector search over the COT log; the LLM is grounded in what actually happened.
- **Rule engine for proactive alerts.** Operator-authored rules in a small DSL evaluate against the live multicast stream.
- **Audit log.** Every response, every alert, every rule trigger — logged with prompt, model, data references, and timestamp.

---

## What you need

- **A small mini-PC, an Apple Silicon Mac mini, a Jetson, or any consumer machine with enough VRAM for your chosen open-weights model.** An **8B-class model** (Llama 3.1 8B, Qwen-class, Mistral) runs comfortably on consumer hardware — typically sub-150 W draw — staying power-modest enough to be **solar-viable for multi-day field deployments**.
- **Heavier models** (70B-class) run on workstation hardware (RTX 4090 / 5090, dual-3090, M-series Mac Studio) when the operation can spare the power budget. Server hardware (H100 / A100 / L40S) is supported but not required.
- A **TAK LAN** — the same one your ATAK / WinTAK / baseTAK is on.
- An **open-weights LLM** of your choice, served through any OpenAI-compatible local inference server (llama.cpp, vLLM, Ollama, LM Studio, TGI).

## What you don't need

- **No cloud LLM service.** No OpenAI, no Anthropic, no Google — unless you choose to use one.
- **No internet** (once the model is downloaded).
- **No TAK Server.** aiTAK joins the TAK network like every other xTAK product.
- **No subscription.** Your hardware, your model, your data.

## Install

*Coming with the first public release. Will follow the xTAK pattern.*

---

## Status

**In active development.** Architecture is being prototyped; first public release timing TBD.

aiTAK is the most experimental product in the xTAK suite. The positioning and capabilities described here are the design target — the actual feature set at first release will likely be a subset, with capabilities added incrementally.

---

## Channel adapters

*Derived from the page above; for use in social, web, video, and other channels.*

### Tagline
**An AI operations assistant that lives inside your TAK network.**

### Social pitch — 50 words
aiTAK is an LLM-backed operator's helper that joins your TAK network like any other xTAK service. It watches the picture, summarizes activity, drafts SITREPs, and flags rule-matched conditions in chat. Runs on your own hardware, your own model. Local-first, no cloud. *(future release)*

### Long pitch — 200 words
aiTAK is the xTAK suite's AI augmentation layer — an LLM-backed assistant that joins your team's TAK network as a peer and helps the operator handle a busy picture. It can answer natural-language questions about the operational state ("summarize the last hour by sector," "where is Engine 3 right now"), draft SITREPs and IAP sections from observed activity, and run operator-defined rules to flag conditions the IC shouldn't have to watch personally (stationary teams in hazard zones, geofence breaches, comms-silence alerts).

The design priority is **local-first**: aiTAK runs on your hardware against an open-weights LLM you choose, via any OpenAI-compatible local inference server. Sensitive operational data never leaves the deployment. No cloud LLM service required. No subscription. Bring your own GPU and your own model.

aiTAK is the most experimental product in the xTAK suite; first public release timing is TBD. The positioning here is the design target — initial release will be a subset of these capabilities, with more added incrementally.

### Soul quote
> An LLM that has been on the network the whole time, watching what every operator was watching, and helping.

### Audience tags
**Primary:** incident commanders, planning section chiefs, SAR operations chiefs, EOC staff at multi-day activations.
**Secondary:** training coordinators (AAR-quality records), agencies with data-sovereignty requirements who can't use cloud LLM services, large-event ops, public-safety analysts.


---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
