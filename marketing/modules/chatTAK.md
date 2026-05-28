# chatTAK — Marketing Module

**Status:** Beta — shipping soon (v 1.0.x · appliance)
**Last updated:** 2026-05-19
**Use this for:** social posts, video scripts, event-coordinator and volunteer-org content.

---

## TL;DR

chatTAK is a comms-forward TAK chat client that runs as an appliance with its own Wi-Fi network and a browser-based UI. Plug it in, hand out the SSID, and your whole team is on TAK chat in 60 seconds. No app install, no Play Store, no MDM. Multi-user — every browser is a distinct TAK identity with team color, role, and live presence. Architecturally shared with baseTAK (same `cot_chat` package) so fixes ship to both.

**The pitch:** for stakeholders who need to be on the TAK chat thread but don't need the full SA map — incident commanders, dispatch, family liaisons, ham chase teams, walk-up volunteers at events.

---

## Taglines

- **"A TAK endpoint in everyone's pocket. No app required."** *(headline)*
- **"Plug it in, hand out the SSID, your team is on TAK in 60 seconds."** *(deploy angle)*
- **"Comms-forward TAK for the people in the loop."** *(audience angle)*
- **"appliance-sized. Pelican-cased. Backpack-portable."** *(hardware angle)*

---

## Audience-by-audience framings

| Audience | Lead with |
|---|---|
| **Event coordinators** | "Race day. Eighty volunteers. Sixty seconds to onboard each one. No app install, no Play Store, no account. Connect to AID-7 Wi-Fi, pick a callsign, done." |
| **Field command elements** | "The four-person command team standing around a fire-road tailgate doesn't need ATAK — they need to chat. chatTAK gives them a full TAK chat endpoint from their personal phones." |
| **Mobile command vehicles** | "Park the truck, drop the SSID, every responder on scene is on the TAK chat thread. Including the ones who showed up without TAK gear." |
| **SAR base teams** | "The base-camp comms lead. The IC's family liaison. The medical officer who's in the SUV not the EOC. chatTAK gets them all on the TAK thread without an app install." |
| **CERT / volunteer fire / ambulance** | "Volunteers with personal phones, no agency-issued tablets. chatTAK turns each phone into a first-class TAK chat endpoint." |
| **Pop-up EOCs** | "Quick-stand operations — disaster activations, planned events, exercises — where you don't have time to provision devices. Hand out the SSID instead." |

---

## Killer features

1. **60-second onboarding** — connect to Wi-Fi, open the URL, pick a callsign, you're a TAK contact.
2. **Multi-user, full GeoChat compat** — DMs, broadcast, team, custom groups. Native CoT XML — chats appear in WinTAK and ATAK without translation.
3. **Timeline + threaded views** — read the feed chronologically (newest at the bottom), or grouped by conversation so a single DM, team, or group thread collapses into one block. One click between them.
4. **50 MB attachments** — images, video, docs.
5. **Self-hosted Wi-Fi AP** — chatTAK can be its own wireless network. Works in a parking lot with no LAN around.
6. **Proper ghost-contact cleanup** — `t-x-d-d` on logout, so disconnected operators don't clutter the roster.
7. **palm-sized appliance** — smaller than a deck of cards. Solar-viable. Offline-installable tarball.
8. **Shared codebase with baseTAK** — same `cot_chat` package, so fixes and features ship to both.

---

## Suite-level pairings

- **chatTAK + baseTAK** = browser-user chats are first-class TAK contacts on the baseTAK map. Each walk-up volunteer gets a position and identity.
- **chatTAK + the suite** = chatTAK browser users appear alongside ATAK / WinTAK / iTAK users in the chat panel. Same thread, same identities.

---

## Honest disclosures

- **Status:** Beta — shipping soon. Current version v 1.0.x.
- **Architecturally shared with baseTAK** — both products use the same `cot_chat` pip package. Fixes ship together.
- **Web — not iOS / Android native** — by design. Browser-only is the point. If you need the SA map, you need baseTAK or an ATAK / WinTAK / iTAK client; chatTAK is chat-only.

---

## Sample social posts

### X / Twitter

> **POST 1 — the event hook**
> Charity bike ride. Eighty volunteers. Twelve aid stations across forty miles.
>
> None of them have ATAK. They have personal phones.
>
> Each aid station gets a chatTAK palm-sized appliance. Volunteers connect to "AID-7" Wi-Fi, pick a name, they're on the TAK chat thread.
>
> 60 seconds.

> **POST 2 — the field-command hook**
> Four-person command element standing around a tailgate. No ATAK tablets. Each on a personal phone.
>
> chatTAK on the truck. SSID broadcast. They open a browser. They're a TAK contact.
>
> The IC at base camp DMs each by callsign. Replies land back in TAK chat.

> **POST 3 — the timeline/threaded hook**
> Two ways to read TAK chat:
>
> Timeline — chronological, newest at the bottom, the running incident log.
>
> Threaded — collapse each DM, team, or group thread into one block, follow a single conversation.
>
> One click between them.

### LinkedIn

> **POST A — the volunteer aid-station story**
> Morning of a regional charity bike ride. Two hundred riders, twelve aid stations across forty miles of back roads, eighty volunteers. The race director runs ops from her car with ATAK on a phone. The chief medical officer has WinTAK on his laptop in the SAG vehicle. The volunteer comms lead has a 2-meter HT.
>
> The volunteers at the aid stations have neither ATAK nor amateur radio. They're regular people with regular phones.
>
> At each aid station the comms lead hands the station captain a chatTAK — a palm-sized appliance in a 3D-printed case, powered by a USB battery. "Connect your phone to AID-7. Open the link. Pick your name."
>
> Sixty seconds later every volunteer at the station is on the team's TAK chat. Their position is updating on the race director's ATAK. They can DM the chief medical officer.
>
> No app install. No accounts. No cell coverage required. https://buymeacoffee.com/xtak

---

## Video script outlines

### 30-second cinematic

| 0:00–0:08 | Aid station — volunteers in event tees, a folding table, a tiny palm-sized appliance in a 3D-printed case. |
| 0:08–0:16 | Close-up: a volunteer opens her phone, connects to "AID-7" Wi-Fi, opens a browser. Picks a callsign. The TAK chat panel fills the screen. |
| 0:16–0:23 | Cut to the race director in her vehicle — the volunteer's callsign appears on the ATAK map with a position pin. |
| 0:23–0:30 | Title card: **chatTAK. 60 seconds. No app required.** |

### 60-second demo

1. **Setup (0:00–0:12):** Pull a palm-sized appliance out of a Pelican case. Plug into a USB battery. The Wi-Fi SSID appears on a phone.
2. **Onboarding (0:12–0:25):** Phone joins the Wi-Fi. Browser opens the captive portal. Pick a callsign, pick a team color. The phone is now showing the chatTAK panel.
3. **Multi-user (0:25–0:40):** Show 3 different phones, 3 different operators, 3 different chats happening in parallel — DMs, team chat, broadcast.
4. **Native TAK fidelity (0:40–0:55):** Cut to a WinTAK desktop. Same chats appearing in the WinTAK chat panel. VO: "Every chatTAK user is a first-class TAK contact."
5. **Close (0:55–0:60):** Title + URL.

---

## Live-demo talking points

- **Hold up the palm-sized appliance.** "This is a $15 palm-sized appliance in a 3D-printed case. Powered by a USB battery."
- **Broadcast the SSID.** "It's its own Wi-Fi network. AID-7. No LAN around required."
- **Have someone connect.** "Volunteer scans the SSID, joins, opens the browser. Captive portal."
- **Show the onboarding.** "Pick a callsign, pick a team color. That's it. They're now a TAK contact with a UID, callsign, team color, and live presence."
- **Start a chat.** "DM another contact, send to a team, broadcast to everyone. Standard GeoChat — every message is byte-identical to ATAK."
- **Switch views.** "Timeline view — see everything chronologically. Threaded view — collapse each conversation into one block."

---

## Objections + responses

| Objection | Response |
|---|---|
| "Why not just use Slack / Teams / WhatsApp?" | "Not TAK-native. Messages from Slack won't appear in WinTAK chat history. chatTAK speaks the actual TAK GeoChat protocol — messages cross seamlessly between chatTAK users, ATAK tablets, WinTAK desktops, iTAK iPads." |
| "Doesn't ATAK already do chat?" | "It does, but it requires the full ATAK app. chatTAK is chat-only — for people who need to be in the loop but don't need the map. Commanders, dispatch, family liaisons, walk-up volunteers." |
| "What about Matrix bridges?" | "Generic chat federation, no TAK awareness. chatTAK is purpose-built for the TAK protocol." |
| "Is it secure?" | "Self-hosted on your appliance. Data stays on your hardware. Standard TAK protocol on the wire. Pair with WPA2/3 on the Wi-Fi side." |
| "What if someone shows up without a phone?" | "They share with a teammate, or chatTAK runs on a laptop too. Same UI, any browser." |

---

## Visual / image cues

- **palm-sized appliance on a tailgate** — sub-deck-of-cards device, real-scale shot.
- **The captive-portal moment** — phone showing the callsign-pick screen.
- **Multi-phone scene** — three or four phones in different hands, all on the same chat thread.
- **The Wi-Fi SSID poster** — sign reading "AID-7 · open browser to chat.local · TAK chat · no app required."

Avoid: defense/military imagery, plate carriers, weapons.

---

## Key terms

- **GeoChat** — TAK's native chat protocol. Geo-anchored to participants' positions.
- **CoT (Cursor-on-Target)** — the wire protocol TAK clients use.
- **SSID** — Wi-Fi network name.

---

*Related: [`PROJECT-LEARNINGS-2026-05-19.md`](../PROJECT-LEARNINGS-2026-05-19.md), live site at `site/products/chatTAK.html`.*
