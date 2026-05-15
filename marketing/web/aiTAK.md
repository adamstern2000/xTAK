<!--
PAGE METADATA
title: aiTAK — Local-First AI Operations Assistant for TAK | xTAK Suite
description: aiTAK is an LLM-backed operator's assistant that joins your TAK network as a peer. Answers natural-language questions, drafts SITREPs, flags conditions. Runs on your hardware, your model, your data. Local-first. In active development.
og_image: /img/aiTAK/hero.jpg
canonical: https://xtak.io/products/aiTAK
-->

<!-- STATUS BANNER -->
> **In active development — most experimental product in the xTAK suite.** Architecture is being prototyped. First public release timing is TBD. The capabilities described on this page are the **design target, not a commitment** — the actual feature set at first release will likely be a subset, with capabilities added incrementally.

<!-- HERO IMAGE: aiTAK terminal/chat overlay on top of a WinTAK map view, dense with markers, an IC at a folding table; small server box with GPU next to the laptop, no cloud icon visible -->

# An AI operations assistant.
# That lives inside your TAK network.

**aiTAK is an LLM-backed operator's helper that joins your TAK network like any other xTAK service — watching the picture as it evolves, answering questions, summarizing activity, drafting chat, and flagging conditions that match operator-defined rules. It runs on your own hardware, against an open-weights model you choose. Sensitive operational data never leaves the deployment.**

<!-- CTA BUTTONS: [Get notified at first release] [Read the design] [View on GitHub] -->

---

<!-- TRUST STRIP -->
*Designed for incident commanders, planning section chiefs, SAR operations chiefs, EOC staff, training coordinators, and any agency with data-sovereignty requirements that prohibit cloud LLM services.*

---

## What is TAK?

TAK — **Team Awareness Kit** — is the family of situational-awareness clients used by defense, public safety, search and rescue, and amateur radio: **ATAK** (Android), **WinTAK** (Windows), and **iTAK** (iOS). All three speak a common wire protocol (Cursor-on-Target) over a shared local network. aiTAK joins that same network as a peer — adding a local LLM with full operational context as a chat-able TAK contact. [Learn more about the TAK ecosystem →](/about-tak)

---

> **☕ Become an Early Adopter.** xTAK is in active **Beta**. Support the project on **[Buy Me a Coffee](https://buymeacoffee.com/xtakproject)** to get early access to all xTAK software, new features, and direct engagement with the team. [Become a supporter →](https://buymeacoffee.com/xtakproject)

---

## The scenario

<!-- IMAGE: IC at a folding command post, WinTAK on a laptop dense with markers, an aiTAK chat thread visible in the corner; a small GPU box humming next to the laptop; smoke and air assets in the background -->

It's hour four of a multi-agency wildfire response. The IC has three operations sections, two air assets in the box, four ground crews, and a planning meeting in twenty minutes. Her WinTAK is dense with markers — staging areas, hot spots, structure threats, drop points, hazard zones, four kinds of overlay.

She opens a chat thread with `aiTAK-1` from her WinTAK.

> *"summarize the last hour by sector"*

aiTAK posts a four-bullet brief in chat: spread direction by sector, structures newly threatened, air-asset activity, ground-crew positions. Each bullet links to the relevant markers on her map.

> *"draft the 1400 IAP planning brief"*

aiTAK drops a draft into chat, structured to her unit's IAP template, pre-populated with the position and activity data it observed over the last shift.

While she's reviewing the draft, aiTAK posts on its own:

> *"A ground crew has been stationary for 22 minutes inside the hot-zone polygon you drew at 10:14. Their last chat said 'taking ten.' Possible heat exhaustion. Suggest comms check."*

She DMs the crew lead. They're fine — but she didn't have to be the one watching.

**An LLM that has been on the network the whole time, watching what every operator was watching, and helping.**

That's aiTAK.

---

## What you can do with aiTAK

### 1. Run on your own hardware, your own data

<!-- IMAGE: a small GPU mini-PC and an Apple Silicon Mac mini on a field bench next to a solar panel and a battery; an air-gap symbol; no cloud, no internet cable -->

aiTAK is built to run **locally** — on a workstation with a consumer GPU, an Apple Silicon machine, a Jetson, or a server with proper inference hardware. The operational picture is not sent to anyone's cloud. The LLM, the embeddings, the chat history, the COT log — all of it stays on your machine.

- **Local-first, by design** — sensitive operational data never leaves the deployment
- **Bring-your-own-model** — open-weights LLMs (Llama, Qwen, Mistral, etc.) supported
- **No subscription, no API keys** — your hardware, your inference, your costs
- **Solar-viable** — an 8B-class model runs sub-150 W, modest enough for multi-day field power budgets
- **Audit log** — every aiTAK response is logged with the prompt, the model, and the data it referenced

For agencies that legally or operationally can't ship operational data to a third party, the local-first posture is the point.

### 2. Ask questions about the operational picture in natural language

<!-- IMAGE: ATAK chat panel showing a sequence of natural-language questions to aiTAK and structured replies, with map markers highlighted in the background -->

aiTAK has been on the TAK network since the start of the deployment. It has the full COT history, the chat log, the marker placements, the team movements, and the timestamps — and it's grounded in what actually happened, not what it guesses.

- **"Summarize the last hour by sector"**
- **"When was the structure marker at Smith Road first dropped? By whom?"**
- **"Where is Engine 3 right now and what was their last status update?"**
- **"Which crews are inside the evacuation zone I drew?"**
- **"Draft a SITREP for the 1400 brief"**

Replies post as TAK chat from aiTAK's TAK identity. Any TAK client on the network can DM it.

### 3. Run as a watchful background participant

<!-- IMAGE: WinTAK with a hazard polygon drawn, a stationary team icon inside it pulsing red; an aiTAK alert posted in chat in the corner -->

Operator-defined rules let aiTAK monitor for conditions an IC shouldn't have to watch personally.

- **Stationary-team alerts** — flag a team that hasn't moved in N minutes inside a hazard polygon
- **Geofence breaches** — alert when any contact crosses an operator-drawn boundary
- **Comms-silence alerts** — flag a contact that hasn't beaconed or chatted in N minutes
- **Pattern recognition** — flag combinations of conditions (low battery + entering hot zone)

Alerts post as TAK chat from aiTAK's TAK identity; ICs can DM aiTAK for more context.

### 4. Draft, summarize, translate

<!-- IMAGE: side-by-side of an informal chat log and a cleanly formatted IAP/SITREP draft produced from it -->

Anything you'd ask a junior planning officer to bang out, aiTAK can draft. The operator stays in the loop — aiTAK produces drafts; humans send them.

- **IAP / SITREP drafts** from observed activity
- **End-of-shift summaries** for hand-off briefs
- **Chat-to-radio translation drafts** — formalize an informal chat exchange into a clean radio-traffic script
- **AAR-quality records** — the COT log + chat log + audit log give you a defensible record of what happened when

---

## How it works

<!-- IMAGE: architecture diagram of aiTAK on the TAK network as a peer, with a local inference server behind it; arrows from TAK multicast in, chat back out -->

```
   TAK LAN (multicast)
   ┌──────────────────────────────────────────────────────────┐
   │                                                          │
   │   ATAK  ────┐         WinTAK  ────┐        iTAK  ────┐   │
   │   (phone)   │         (laptop)    │        (tablet)  │   │
   │             │                     │                  │   │
   │             ▼                     ▼                  ▼   │
   │       ╔══════════════════════════════════════════════╗   │
   │       ║   Cursor-on-Target (COT) — SA, chat, shapes  ║   │
   │       ╚══════════════════════════════════════════════╝   │
   │             ▲                     ▲                      │
   │             │                     │                      │
   │             │ chat / alerts       │ COT events (stream)  │
   │             │                     ▼                      │
   │       ┌───────────────────────────────────────────┐      │
   │       │   aiTAK — joins as a TAK contact          │      │
   │       │   ┌─────────────────────────────────────┐ │      │
   │       │   │ COT ingest  → event log + embeddings│ │      │
   │       │   │ Rule engine → proactive alerts      │ │      │
   │       │   │ Q&A handler → retrieval + LLM       │ │      │
   │       │   │ Audit log   → prompt / model / refs │ │      │
   │       │   └─────────────────────────────────────┘ │      │
   │       │           │                               │      │
   │       │           ▼                               │      │
   │       │   ┌─────────────────────────────────────┐ │      │
   │       │   │ Local inference server              │ │      │
   │       │   │ (llama.cpp / vLLM / Ollama / TGI)   │ │      │
   │       │   │ Open-weights model on your GPU      │ │      │
   │       │   └─────────────────────────────────────┘ │      │
   │       └───────────────────────────────────────────┘      │
   │                                                          │
   └──────────────────────────────────────────────────────────┘
                          (no internet required)
```

aiTAK joins the TAK multicast network as a peer with its own UID, callsign, team, and SA heartbeat. It subscribes to the COT stream, builds a structured event log of every marker, chat, position update, and shape change, and embeds the log for retrieval. Operator questions come in as TAK chat DMs; aiTAK retrieves relevant operational context, prompts a local open-weights LLM through an OpenAI-compatible inference endpoint, and posts the response back as TAK chat. Operator-authored rules evaluate against the live multicast stream and trigger proactive alerts the same way. Every response, alert, and rule trigger is logged with prompt, model, data references, and timestamp.

---

## Who uses aiTAK

<!-- USE-CASE CARDS -->

**Incident commanders** — running medium-to-large incidents who need a second pair of eyes on a busy picture. Ask questions in natural language; let rules watch for the conditions you can't keep in your head.

**Planning section chiefs** — drafting IAPs and SITREPs against a shifting operational picture. Hand aiTAK the template and let it pre-populate from observed activity.

**SAR operations chiefs** — managing dozens of teams across long shifts. Stationary-team alerts, geofence breaches, comms-silence flags — all surface as TAK chat without a dedicated watch-stander.

**EOC staff at multi-day activations** — where shift hand-offs need crisp summaries. End-of-shift briefs drafted from the COT and chat record; nothing falls through the cracks at change of watch.

**Training coordinators** — running exercises where post-event AAR depends on a clean record of what happened when. The COT log + chat log + audit log give you a defensible timeline.

**Any agency with data-sovereignty requirements** — that legally or operationally can't ship operational data to a cloud LLM service. aiTAK is local-first by design.

---

## Specs

| | |
|---|---|
| **Status** | In active development — first public release timing TBD |
| **Local inference backends** | llama.cpp, vLLM, Ollama, LM Studio, TGI — any OpenAI-compatible endpoint |
| **Supported models (local / solar)** | 8B-class open-weights: Llama 3.1 8B, Qwen-class, Mistral-class — sub-150 W draw, consumer-hardware |
| **Supported models (workstation)** | 70B-class open-weights when the power budget allows |
| **Hardware (field / solar)** | Small mini-PC, Apple Silicon Mac mini, Jetson, or any consumer machine with enough VRAM for an 8B-class model |
| **Hardware (workstation)** | RTX 4090 / 5090, dual-3090, M-series Mac Studio |
| **Hardware (server, optional)** | H100 / A100 / L40S supported but not required |
| **TAK integration** | Joins as a TAK contact with its own UID, callsign, team, and SA heartbeat |
| **COT ingest** | Streaming; structured event log + embeddings for retrieval |
| **Rule engine** | Operator-authored rules in a small DSL, evaluated against the live multicast stream |
| **Audit log** | Every response, alert, and rule trigger logged with prompt, model, data references, timestamp |
| **TAK clients supported** | ATAK, WinTAK, iTAK, baseTAK — any standard TAK client |
| **Network requirements** | A TAK LAN. No cloud, no TAK Server, no internet once the model is downloaded. |
| **License** | (TBD — link to LICENSE) |
| **Version** | Pre-release; architecture prototyping |

---

## Frequently asked questions

### Do I need a cloud LLM service?
No. aiTAK is designed local-first. No OpenAI, no Anthropic, no Google — unless you specifically choose to point it at one. The default deployment uses an open-weights model on your own hardware.

### Does any operational data leave my deployment?
No. The LLM runs locally. The COT log, chat history, embeddings, and audit log all stay on your machine. Once the model weights are downloaded, no internet connection is required at all.

### Which models are supported?
Any open-weights model served through an OpenAI-compatible local inference endpoint — llama.cpp, vLLM, Ollama, LM Studio, TGI. The design target is **8B-class** models (Llama 3.1 8B, Qwen-class, Mistral) for field and solar deployments, and **70B-class** models for workstation deployments. Which checkpoints are validated at first release will be a subset of the broader landscape.

### What hardware do I need?
For an 8B-class model: a small mini-PC, an Apple Silicon Mac mini, a Jetson, or any consumer machine with enough VRAM. Typically sub-150 W draw — power-modest enough to be solar-viable for multi-day field deployments. For 70B-class: workstation hardware (RTX 4090 / 5090, dual-3090, M-series Mac Studio). Server hardware (H100 / A100 / L40S) is supported but not required.

### Can the IC see what prompt aiTAK is running?
Yes. The audit log records the prompt, the retrieved context, the model used, and the response — visible to operators. There is no hidden system behavior.

### Is there an audit log?
Yes. Every response, every proactive alert, and every rule trigger is logged with prompt, model, data references, and timestamp. The intent is a defensible AAR-quality record of every action aiTAK took during a deployment.

### Do I need a TAK Server?
No. aiTAK joins the TAK multicast LAN as a peer, the same way ATAK, WinTAK, iTAK, and the other xTAK products do.

### Does it work with the civilian (CivTAK) builds of ATAK and WinTAK?
Yes. aiTAK speaks the same TAK protocol all builds use.

### Does it work alongside the other xTAK products?
Yes. baseTAK, digiTAK, loraTAK, sdrTAK, chatTAK, and netTAK all share the same TAK network by design. Drop them on the same LAN and they compose. aiTAK sees everything that lands on the network, regardless of which xTAK service produced it.

### When does it ship?
First public release timing is TBD. aiTAK is the most experimental product in the xTAK suite. The architecture is being prototyped; the capabilities described on this page are the **design target**, and the initial release will likely be a subset, with more added incrementally. The best way to follow progress is the [GitHub repo](https://github.com/adamstern2000/xTAK).

---

## Status

> **In active development.** Architecture is being prototyped. First public release timing is TBD.

aiTAK is the most experimental product in the xTAK suite. The positioning and capabilities described on this page describe **the design target — not a commitment.** What ships in the first public release will likely be a subset of these capabilities; more will be added incrementally as the architecture stabilizes and the operator-feedback loop tightens.

We're publishing the design now, before the implementation is complete, because the local-first / data-sovereignty posture is the differentiator and we want feedback from the operators who'd actually run it. If you're an IC, planning chief, SAR ops chief, or EOC staff with a use case in mind, please [open an issue](https://github.com/adamstern2000/xTAK/issues) or [get in touch](/contact).

| | |
|---|---|
| **Future release** | Local-first architecture, COT ingest + event log, rule engine, Q&A handler, audit log |
| **Design target — subset likely at v1** | Full natural-language Q&A breadth, IAP/SITREP drafting templates, full rule DSL, every backend and hardware variant on this page |
| **On the roadmap** | Multi-tenant deployments, fine-tune support for unit-specific terminology, exercise-replay mode for training |

---

## Get started

<!-- CTA SECTION -->

aiTAK is **not yet shipping**. Installation will follow the standard xTAK pattern (offline tarball, one-command install) with the first public release.

To follow progress:

- **[Watch the GitHub repo](https://github.com/adamstern2000/xTAK)** for development activity
- **[Open an issue](https://github.com/adamstern2000/xTAK/issues)** with a use case, a question, or feedback on the design
- **[Get in touch](/contact)** if you'd be interested in being an early adopter or evaluation site

**[Get notified at first release]**   **[Read the design]**   **[View on GitHub]**

---

## Related products in the xTAK suite

<!-- PRODUCT CARDS -->

- **[baseTAK](/products/baseTAK)** — the map, chat, and hub of the xTAK suite. Browser-based TAK client and SA hub for fixed installations.
- **[digiTAK](/products/digiTAK)** — TAK over amateur radio. VHF for the region, HF for the continent. Federate TAK networks when the WAN is gone.
- **[loraTAK](/products/loraTAK)** — Meshtastic LoRa mesh gateway. Same federation story as digiTAK, but over LoRa.
- **[sdrTAK](/products/sdrTAK)** — SDR-decoded aircraft (ADS-B 1090, UAT 978) and ships (AIS) as native TAK contacts.
- **[chatTAK](/products/chatTAK)** — chat-only Pi appliance. Browser users become first-class TAK endpoints with no app install.
- **[netTAK](/products/netTAK)** *(future release)* — base operating layer for every mobile xTAK device; self-healing field mesh.

---

<!-- FOOTER CTA -->

**Have a use case in mind?** [Get in touch](/contact) or [open an issue](https://github.com/adamstern2000/xTAK/issues) on GitHub. aiTAK is being designed with operator input — the earlier you weigh in, the more your scenario shapes the first release.

---

*© 2026 xTAK Project. All rights reserved. xTAK, baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK, netTAK, and aiTAK are trademarks of the xTAK Project. ATAK, WinTAK, iTAK, and TAK are products of the U.S. Government via the TAK Product Center; the xTAK Project is not affiliated with the TAK Product Center. [Full copyright and trademark notice →](../COPYRIGHT.md)*
