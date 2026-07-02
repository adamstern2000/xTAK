# xtak.ai Storefront (E-commerce) + Stripe — Spec

Current-state spec of the xtak.ai marketing/e-commerce site and how it sells via Stripe (2026-07-02). The site is static HTML in `adamstern2000/xTAK` `site/`; the activation server (`activate.xtak.ai`) handles fulfillment. See the activate repo's `docs/activate-system-stripe-spec.md` for the server side.

## 1. Deploy model
Static site, no build step. Lives in the `xTAK` repo `site/`. **web01 auto-deploys from `origin/main`** via the `xtak-deploy` systemd timer (git reset --hard + rsync `site/` → `/var/www/xtak.ai`, ~2 min). So **committing to `main` publishes.** nginx serves `/var/www/xtak.ai` on the `*.xtak.ai` wildcard cert.

**Sandbox:** `preview.xtak.ai` (basic-auth, docroot `/var/www/preview.xtak.ai`) is a separate copy used to test site changes with **Stripe test-mode** buttons. Repo/live = live buttons; preview = test buttons (swapped in on rsync). The activation server is dual-mode so both work at once.

## 2. Product & status model
- **netTAK** — the only product currently sold. **Public Beta · available now.**
- baseTAK, digiTAK, loraTAK, chatTAK, sdrTAK — **In Development**. aiTAK — **Design**. (Only netTAK is Beta; enforced consistently across the homepage grid, status table, prose, and product pages.)

## 3. Pricing (beta)
- **netTAK license: $59/device** one-time (retail $99, shown struck-through). Permanent, per-device.
- **netTAK Beta Support: $24/year** flat, any number of devices (retail $40). Grants: latest beta builds as they ship, 3D case designs, build list, direct support (Discord), for that product.
- netTAK needs 2+ nodes to mesh — buyers typically start with 2.

## 4. Freemium model (messaged on the netTAK + support pages)
- **netTAK Standalone — free forever** (single node, own admin UI + Wi-Fi AP; no license/trial).
- **netTAK Mesh — paid** (the self-forming HaLow mesh + cluster management). 30-day free trial per mesh node, then a per-device license; a site license covers unlimited devices.
- Buying is described high-level only: **purchase → get a license → activate the device** (online in seconds or fully offline; no phone-home). **DRM/activation internals are deliberately NOT exposed in public copy.**

## 5. The buy flow (bundle — beta)
During beta there is **one** buy path — a **bundle**:
1. Buyer clicks **"Join the Beta"** (netTAK page hero + CTA, beta page, homepage "Beta Program" card, nav CTA — 7 buttons total). All point to the **live bundle Payment Link** `https://buy.stripe.com/dRmfZgbdTgIkcs3dRyfbq00`.
2. Stripe hosted Checkout: the buyer picks **device quantity** (adjustable 1–25); the cart = N × $59 license (one-time) + $24/yr support (recurring), billed together.
3. On success, Stripe redirects to `activate.xtak.ai/success?session_id=…`, which shows the **license certificate(s) + a download code** on screen (and, once O365 is wired, emails them).
4. Buyer redeems each certificate + a device hardware ID at `/activate` (or in-product) → a signed license token; and downloads builds at `/downloads` with the download code.

**Post-stable plan:** split into two buttons — "licenses only" and "licenses + support bundle."

Stripe does **not** allow a subscription as a *cross-sell/optional item* on a one-time link, but **does** allow a subscription + one-time line items **bundled** in one Checkout (mode=subscription) — which is how the bundle works. A separate post-purchase "Add Beta Support" cross-sell also appears on the success page.

## 6. Stripe objects (live)
- Products: `prod_UoWt514bP1ihjA` (xTAK Mesh Software), `prod_UoWt4dB02WJirs` (netTAK Beta Support) — both show the xTAK square-mark icon.
- Prices: `price_1Totq1AExXRQAXC4n3qr8WVs` ($59 one-time), `price_1Totq1AExXRQAXC4zuCvDYPm` ($24/yr).
- **Bundle Payment Link:** live URL above. Config: `line_items` = [support (recurring, qty 1), license (one-time, adjustable qty 1–25)]; `metadata.product_id = nettak` (this is how the server resolves the product); `after_completion` = redirect to `/success?session_id={CHECKOUT_SESSION_ID}`.
- Webhook `we_1Totq2AExXRQAXC4r3SbAHiC` → `activate.xtak.ai/v1/stripe/webhook`: `checkout.session.completed`, `charge.refunded`, `customer.subscription.updated`, `customer.subscription.deleted`.
- Test-mode equivalents exist for the sandbox (bundle `test_3cI7sN3Bm9tH8T12IP0oM06`).

**Critical convention:** the buy link must carry `metadata.product_id` = the activate product id (`nettak`). Without it, the server ignores the checkout (no fulfillment).

## 7. Site structure (relevant pages)
- `index.html` — homepage: hero, scenario, product grid (netTAK=Beta, rest In Dev/Design), a "Beta Program" CTA card, status table, FAQ, "How do I buy xTAK?" → beta page.
- `beta.html` — the netTAK Beta program: deep-discount framing ($59/$24 with struck-through retail), what-you-get, bundle "Join the Beta" button.
- `support.html` — general, product-agnostic support/licensing model (buy once per device + optional yearly support sub; how updates/rollback work). No exact dollar figures (products will differ).
- `products/netTAK.html` — the product page: man-portable-first positioning, v0.22 accuracy, freemium section, security (per-node identity certs), specs (Pi 4B, HaLow up to ~1 km / ~16 km directional, PiSugar), bundle buy buttons + retail comparison.
- Other product pages — In-Development, no buy buttons; "See the Beta Program" CTAs.
- Footers sitewide: no BMAC; link Beta Program + Support & Licensing.

## 8. Branding
Dark canvas `#08090d`/`#0d0f14`, cyan `#00d9ff`, "Converging Paths" X mark. The activation server's buyer-facing pages (`/`, `/downloads`, `/activate`, `/success`) are styled to match. **Stripe hosted checkout** is light-themed (no dark mode) — set the account **Branding** (logo `logo-square-1024.png` as icon, `logo-mark-transparent-1024.png` as logo, brand color `#00d9ff`) **separately in live mode** (test-mode branding doesn't carry over) to soften the dark→light transition; a fully on-brand checkout would require an embedded Payment Element (deferred).

## 9. Outstanding
- **O365 email** so purchase confirmations (cert + download code) email out (currently on-screen only).
- **Stripe Tax** — off; needs a head-office address + nexus registrations before collecting sales tax.
- **Live-mode Stripe branding** (logo + cyan) — dashboard task.
- Post-stable: two-button checkout (licenses-only vs bundle); retail pricing ($99/$40).
