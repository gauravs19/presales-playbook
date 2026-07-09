# Scripting Dummy Data Generation

Nothing sabotages a carefully storyboarded demo faster than its data. The prospect is a hospital network and the dashboard shows "Acme Corp — Widget Order #123". Every chart is suspiciously smooth, every customer is named after a Marvel character, and the "recent activity" feed's newest entry is from the quarter the environment was built. The product is real; the world it displays is visibly fake — and audiences transfer that fakeness straight onto the product.

Demo data is narrative infrastructure. The goal is *plausibility*: data shaped like the prospect's world, messy in the ways real data is messy, and always current. That's unachievable by hand and trivially achievable with scripts — which is why data generation is a scripting discipline, not a content chore.

---

## The Plausibility Checklist

Generated data has to survive an audience that lives in the real version of it:

- **Domain-correct entities.** Patients and encounters for the hospital, SKUs and shipments for the retailer, work orders and sensors for the manufacturer. A library of per-industry generator profiles is the [SE team's asset](docs/12-scaling/playbook-that-doesnt-die.md); pick the profile per deal.
- **Realistic distributions, including the ugly.** Real data has skew, seasonality, outliers, duplicates, and nulls. Uniformly random values look *more* fake than static ones — a revenue chart with no month-end spike tells a retail audience you've never seen retail data. Model the shapes: a few whale accounts, a long tail, a suspicious cluster for your anomaly-detection scene.
- **Relative timestamps, always.** The demo dataset's "yesterday" must be computed at load time, never hard-coded. Stale dates are the single most common data giveaway, and the cheapest to fix — every generator writes `now() - interval`, and the [golden-state reset](docs/10-tools/golden-state-environment.md) re-seeds nightly.
- **Narrative fixtures planted deliberately.** Your [storyboard](docs/13-templates/demo-storyboard.md) needs *the* failing pipeline, *the* flagged transaction, *the* overloaded region — specific records the story turns on. These aren't random; they're authored, named in the seed script, and pinned so a reseed never renames the protagonist mid-campaign.
- **Zero real customer data. Zero.** Not anonymized extracts, not "just the shapes" pulled from a production support case, nothing. The compliance exposure is career-grade, and [one leaked recognizable record](docs/08-technical-depth/gdpr-dpdp-sovereignty.md) in a screenshot outweighs every hour saved. Generated means generated.

## The Toolchain Is Boring on Purpose

Faker (Python/JS) for entities, a few hundred lines of your own distribution logic, `numpy`/`pandas` where shapes matter, everything writing through your product's own APIs or import path (which doubles as a quiet integration test), all of it in the repo next to the environment definition, runnable as one command. LLMs have made the *content* layer dramatically cheaper — generating five hundred plausible support tickets or product reviews in the prospect's industry [is now a prompt](docs/10-tools/ai-demo-scripts.md) — but keep the *structural* layer (volumes, distributions, referential integrity) in deterministic code, or every reseed produces a subtly different world and your rehearsed numbers stop matching your script.

## Per-Deal Skinning

The generic industry profile gets you to plausible; twenty extra minutes gets you to *uncanny*: the prospect's terminology from [discovery](docs/13-templates/discovery-summary.md) (they say "consignments", not "shipments"), their region names, volumes in their order of magnitude, a org-chart-plausible set of user names. Audiences visibly relax when the demo speaks their dialect — and the SE who scripts the skinning once reuses it for every deal in that vertical.

> **War Story:** Two vendors demoed fraud-detection platforms to the same payments company in the same week. Vendor A's demo ran on their standard dataset: "Test Merchant 1–50", transaction amounts uniformly random between $1 and $1000, no daily cycle. Vendor B's SE had spent an evening with a generator script: merchant names shaped like the prospect's actual mix, amounts log-normal with the correct interchange-fee sweet spot, a visible morning-coffee spike, and — the planted fixture — a fraud ring pattern threaded through three merchants that the demo's detection scene then *found*. The prospect's fraud team spent Vendor A's session politely nodding, and Vendor B's session leaning into the screen arguing about whether the planted ring's velocity pattern matched what they'd seen in production (it did; the SE had read their case studies). Same product category, comparable capabilities. The data told one team a story about themselves, and the other team a story about a vendor who'd never met them.

> **Failure Mode:** The hand-curated masterpiece. An SE spends days lovingly crafting the perfect dataset directly in the demo environment — no script, no repo, every record placed by hand. It's beautiful for exactly one release cycle. Then a product upgrade wipes the environment, or a reseed is needed for a new vertical, or a teammate needs the same setup — and the masterpiece is unreproducible. If the data isn't generated by code that lives in version control, it isn't an asset; it's an heirloom, and heirlooms don't survive contact with operations. Script first, curate inside the script.

**Interview Angle:**
"How do you prepare demo data for an industry you're selling into for the first time?"
Strong answers describe scripted generation with realistic distributions, deliberate narrative fixtures, relative timestamps, per-deal skinning, and a hard line on real customer data. Weak answers involve hand-editing records or — the disqualifying one — "borrowing" sanitized production data.

🟡 **Mid-Level** — The audience can't see your architecture, but they can read your data fluently. Make it tell them a story about themselves, not about your test suite.

---
