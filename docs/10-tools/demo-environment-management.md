# 10.2 Demo Environment Management

## 10.2.1 Docker & Kubernetes Local Sandbox

The SE who depends entirely on the shared demo cloud is one VPN hiccup, one noisy-neighbor incident, or one "scheduled maintenance window" away from presenting slides instead of software. A local containerized sandbox — your product (or a faithful subset) running on your own machine via Docker Compose or a single-node Kubernetes — is the SE's equivalent of a musician owning their instrument: rehearsal without booking studio time, experiments without breaking anything shared, and a fallback when the stage catches fire.

This is not about becoming a platform engineer. It's about owning a small, disposable, resettable copy of the thing you sell.

---

### What the Sandbox Buys You

1. **Rehearsal without consequences.** Practice the [failure-simulation demo](docs/05-demo-excellence/technical-depth-demonstrations.md?id=_542-simulating-failure-scenarios-safely) ten times, kill containers mid-transaction, restore, repeat — on the shared environment this is vandalism; locally it's Tuesday.
2. **Real answers to integration questions.** "Does your webhook fire before or after the commit?" is answerable in two minutes against a local stack, versus filing a ticket against the shared one. SEs with sandboxes give [fewer confidently-wrong answers](docs/08-technical-depth/emerging-technology-positioning.md?id=_851-how-to-talk-about-technology-you-dont-fully-understand).
3. **The offline demo.** Customer site with hostile guest Wi-Fi, a booth, a flight — `docker compose up` and you're demoing from localhost while competitors apologize for their SaaS login page.
4. **Genuine technical credibility.** When the prospect's platform team realizes mid-call that you're comfortably reading container logs, that's [technical trust](docs/01-foundations/what-is-presales-redefined.md?id=_112-the-technical-trust-gap-why-it-costs-deals) earned at the layer they live in.

### A Sane Setup (and Where the Line Is)

- **Compose first, Kubernetes only if your product story needs it.** A `docker-compose.yml` covers most demo topologies with a tenth of the operational surface. Reach for k3d/kind/minikube when what you *sell* is Kubernetes-adjacent — operators, Helm charts, service mesh behavior — and the audience will want to see it scheduled onto a real cluster.
- **Everything as files in a repo.** Compose file, seed scripts, [demo data generators](docs/10-tools/demo-environment-management.md?id=_1023-scripting-dummy-data-generation), a `reset.sh`, and a README your teammates can follow — the sandbox is [version-controlled like any other demo asset](docs/10-tools/demo-environment-management.md?id=_1024-version-controlling-demo-environments).
- **One-command reset is the whole point.** `docker compose down -v && docker compose up -d && ./seed.sh` — under five minutes back to pristine. A sandbox you're afraid to break has failed at its only job.
- **Know your resource envelope.** A laptop that's running the full stack plus Zoom plus screen-share will remind you of thermodynamics mid-demo. Know what you can *demo* locally versus what you can *verify* locally.
- **Never let it impersonate production scale.** The local stack answers "how does it behave"; it cannot answer "how does it perform at your volumes." Blurring that line in front of a prospect is a [simplification that lies](docs/04-solution-design/diagramming-visual-communication.md?id=_443-simplifying-without-lying) — and their engineers will catch it.

> **War Story:** An SE arrived at a manufacturer's plant for a final-stage demo to find the promised network was a guest VLAN that blocked, apparently, everything invented after 2015 — the shared demo cloud unreachable, the backup 4G dongle showing one bar. The SE's laptop carried the standard team sandbox: full stack, seeded overnight with [industry-plausible data](docs/10-tools/demo-environment-management.md?id=_1023-scripting-dummy-data-generation). The demo ran from localhost, projected in the plant's conference room, including the failure-recovery scene run *live* by killing a container — which the plant's automation engineers, who spent their lives distrusting network dependencies, loved more than any slide about resilience. The deal's post-mortem quote from the champion: "The other vendor couldn't demo because our Wi-Fi was bad. Think about what that predicts."

> **Failure Mode:** The SE whose sandbox becomes a hobby. Weeks disappear into a seventeen-service Kubernetes homelab with ingress controllers, cert rotation, and a Grafana stack — none of which any prospect will ever see — while [discovery summaries](docs/13-templates/discovery-summary.md) go unwritten and the actual demo narrative stagnates. The sandbox is infrastructure *for selling*; the moment its maintenance exceeds an hour or two a month, it's consuming the deal time it was supposed to protect. Build the minimum that rehearses your story, automate its reset, and go back to selling.

**Interview Angle:**
"How do you prepare for a demo when you can't rely on the standard environment?"
Strong answers include a personally-owned fallback — local containers, an offline path, a rehearsed reset — plus honesty about its limits versus production. Weak answers reveal total dependence on shared infrastructure ("I'd reschedule"), which is an availability statement about every demo they'll ever give.

🟡 **Mid-Level** — Own a copy of what you sell, small enough to break and scripted enough to rebuild before the coffee's done.

---

## 10.2.2 Maintaining the Golden State Environment

Every SE team has lived the horror version: the shared demo environment five minutes before an executive session — half-configured integrations from someone's POC, test records named "asdf DELETE ME", a dashboard someone rewired for last week's prospect and never rewired back. The golden state environment is the institutional answer: a demo environment kept permanently in a known-good, demo-ready condition, protected by process, restorable on demand.

"Golden state" is not a place. It's a *discipline* — a versioned definition of what demo-ready means, plus the machinery to return to it.

---

### The Three Rules

**1. The golden state is defined, not remembered.** Written down and versioned: which accounts exist, what data is loaded, which integrations are live, what every dashboard shows, which feature flags are set. If the definition lives in one veteran SE's head, you don't have a golden state — you have a dependency with a vacation schedule. The definition belongs [in a repo](docs/10-tools/demo-environment-management.md?id=_1024-version-controlling-demo-environments) next to the scripts that produce it.

**2. Nobody demos from the master, and nobody customizes it.** The golden environment spawns *copies* — per-deal clones, per-SE workspaces, [POC sandboxes](docs/06-poc/structuring-the-pov-proof-of-value.md?id=_623-locking-the-sandbox-so-goalposts-cant-move) — and all customization happens in the copy. Deal-specific data, prospect logos, industry terminology: copy. The master accepts changes only through its definition, reviewed like code. Every "just one quick change directly on master before my call" is a withdrawal from the account everyone else banks on.

**3. Restoration is scheduled, automated, and verified.** A weekly (nightly, if cheap) automated reset to the defined state, followed by a smoke-test checklist — log in as each persona, load the money dashboards, fire one transaction through the happy path. The [pre-flight checklist](docs/05-demo-excellence/demo-environment-logistics.md?id=_551-the-30-minute-pre-flight-checklist) verifies *your demo*; the golden-state verification protects *everyone's*.

### What Lives in the Golden State

| Layer | Contents | Refresh cadence |
|---|---|---|
| Personas & accounts | One login per demo persona, correct roles/permissions | With the definition |
| Core dataset | [Generated, industry-plausible data](docs/10-tools/demo-environment-management.md?id=_1023-scripting-dummy-data-generation) with "today"-relative timestamps | Every reset (dates drift into the past otherwise) |
| Integrations | The 3–4 connections every demo shows, with monitored health | Checked at every reset |
| Narrative fixtures | The specific records your team's [storyboards](docs/13-templates/demo-storyboard.md) depend on — "the failing pipeline", "the flagged transaction" | Pinned in the definition, never renamed casually |
| Version | Product build the environment runs | Deliberate, announced upgrades — never surprise ones |

That last row deserves emphasis: product upgrades landing on the demo environment unannounced — new UI, moved menus, renamed features — have detonated more live demos than any outage. The golden state upgrades on a schedule the *team* chooses, with a window to re-verify every storyboard against the new build.

### Ownership or Entropy

Unowned shared environments decay — reliably, within a quarter. Assign a rotating owner (a real name, a real calendar slot) whose job is: run the reset, run the verification, triage drift, announce upgrades. An hour a week. Teams that skip the role pay it back tenfold in pre-demo panic and [crash recoveries](docs/05-demo-excellence/demo-environment-logistics.md?id=_553-graceful-recovery-from-a-live-software-crash) that better hygiene would have made unnecessary.

> **War Story:** A vendor's flagship demo to a banking prospect's steering committee opened with the SE's signature scene: the real-time risk dashboard. It loaded — populated with the previous evaluator's stress-test data: forty thousand synthetic transactions all named `LOAD_TEST_TXN_[n]`, all flagged critical. The room watched the SE navigate a monitoring product that appeared to be having a nervous breakdown. The demo was rescheduled; the deal survived on the champion's goodwill; the team's post-mortem produced the golden-state regime they should have had: nightly automated resets, per-deal clones, master locked behind a review. The kicker — the stress test had been run *on master* by a teammate "just for an hour" nine days earlier. Nobody had demoed that dashboard since. Entropy doesn't announce itself; it waits for the steering committee.

> **Failure Mode:** The team whose golden state is golden theater — a definition written eighteen months ago, a reset script that "mostly works," verification skipped whenever the week is busy (every week). The environment passes casual inspection and fails under exactly one condition: an unrehearsed path taken live in front of a prospect. A golden state that isn't *continuously verified* is indistinguishable from luck — and the discipline's entire value is that demos stop depending on luck.

**Interview Angle:**
"Tell me how your team manages shared demo infrastructure."
Strong answers include a versioned definition, clone-don't-customize discipline, automated reset with verification, and named ownership. Weak answers describe tribal knowledge and hope ("we generally know not to touch each other's stuff") — which is a demo outage with a fuse of unknown length.

🟡 **Mid-Level** — Your demo environment is a stage. Golden state discipline is what guarantees the set is standing when the curtain rises — for every SE, every time.

---

## 10.2.3 Scripting Dummy Data Generation

Nothing sabotages a carefully storyboarded demo faster than its data. The prospect is a hospital network and the dashboard shows "Acme Corp — Widget Order #123". Every chart is suspiciously smooth, every customer is named after a Marvel character, and the "recent activity" feed's newest entry is from the quarter the environment was built. The product is real; the world it displays is visibly fake — and audiences transfer that fakeness straight onto the product.

Demo data is narrative infrastructure. The goal is *plausibility*: data shaped like the prospect's world, messy in the ways real data is messy, and always current. That's unachievable by hand and trivially achievable with scripts — which is why data generation is a scripting discipline, not a content chore.

---

### The Plausibility Checklist

Generated data has to survive an audience that lives in the real version of it:

- **Domain-correct entities.** Patients and encounters for the hospital, SKUs and shipments for the retailer, work orders and sensors for the manufacturer. A library of per-industry generator profiles is the [SE team's asset](docs/12-scaling/enablement-knowledge-systems.md?id=_1221-building-a-playbook-that-doesnt-become-shelfware); pick the profile per deal.
- **Realistic distributions, including the ugly.** Real data has skew, seasonality, outliers, duplicates, and nulls. Uniformly random values look *more* fake than static ones — a revenue chart with no month-end spike tells a retail audience you've never seen retail data. Model the shapes: a few whale accounts, a long tail, a suspicious cluster for your anomaly-detection scene.
- **Relative timestamps, always.** The demo dataset's "yesterday" must be computed at load time, never hard-coded. Stale dates are the single most common data giveaway, and the cheapest to fix — every generator writes `now() - interval`, and the [golden-state reset](docs/10-tools/demo-environment-management.md?id=_1022-maintaining-the-golden-state-environment) re-seeds nightly.
- **Narrative fixtures planted deliberately.** Your [storyboard](docs/13-templates/demo-storyboard.md) needs *the* failing pipeline, *the* flagged transaction, *the* overloaded region — specific records the story turns on. These aren't random; they're authored, named in the seed script, and pinned so a reseed never renames the protagonist mid-campaign.
- **Zero real customer data. Zero.** Not anonymized extracts, not "just the shapes" pulled from a production support case, nothing. The compliance exposure is career-grade, and [one leaked recognizable record](docs/08-technical-depth/security-compliance.md?id=_843-navigating-gdpr-india-dpdp-data-sovereignty) in a screenshot outweighs every hour saved. Generated means generated.

### The Toolchain Is Boring on Purpose

Faker (Python/JS) for entities, a few hundred lines of your own distribution logic, `numpy`/`pandas` where shapes matter, everything writing through your product's own APIs or import path (which doubles as a quiet integration test), all of it in the repo next to the environment definition, runnable as one command. LLMs have made the *content* layer dramatically cheaper — generating five hundred plausible support tickets or product reviews in the prospect's industry [is now a prompt](docs/10-tools/ai-tools-in-the-se-workflow.md?id=_1043-generating-demo-data-scripts-responses-with-ai) — but keep the *structural* layer (volumes, distributions, referential integrity) in deterministic code, or every reseed produces a subtly different world and your rehearsed numbers stop matching your script.

### Per-Deal Skinning

The generic industry profile gets you to plausible; twenty extra minutes gets you to *uncanny*: the prospect's terminology from [discovery](docs/13-templates/discovery-summary.md) (they say "consignments", not "shipments"), their region names, volumes in their order of magnitude, a org-chart-plausible set of user names. Audiences visibly relax when the demo speaks their dialect — and the SE who scripts the skinning once reuses it for every deal in that vertical.

> **War Story:** Two vendors demoed fraud-detection platforms to the same payments company in the same week. Vendor A's demo ran on their standard dataset: "Test Merchant 1–50", transaction amounts uniformly random between $1 and $1000, no daily cycle. Vendor B's SE had spent an evening with a generator script: merchant names shaped like the prospect's actual mix, amounts log-normal with the correct interchange-fee sweet spot, a visible morning-coffee spike, and — the planted fixture — a fraud ring pattern threaded through three merchants that the demo's detection scene then *found*. The prospect's fraud team spent Vendor A's session politely nodding, and Vendor B's session leaning into the screen arguing about whether the planted ring's velocity pattern matched what they'd seen in production (it did; the SE had read their case studies). Same product category, comparable capabilities. The data told one team a story about themselves, and the other team a story about a vendor who'd never met them.

> **Failure Mode:** The hand-curated masterpiece. An SE spends days lovingly crafting the perfect dataset directly in the demo environment — no script, no repo, every record placed by hand. It's beautiful for exactly one release cycle. Then a product upgrade wipes the environment, or a reseed is needed for a new vertical, or a teammate needs the same setup — and the masterpiece is unreproducible. If the data isn't generated by code that lives in version control, it isn't an asset; it's an heirloom, and heirlooms don't survive contact with operations. Script first, curate inside the script.

**Interview Angle:**
"How do you prepare demo data for an industry you're selling into for the first time?"
Strong answers describe scripted generation with realistic distributions, deliberate narrative fixtures, relative timestamps, per-deal skinning, and a hard line on real customer data. Weak answers involve hand-editing records or — the disqualifying one — "borrowing" sanitized production data.

🟡 **Mid-Level** — The audience can't see your architecture, but they can read your data fluently. Make it tell them a story about themselves, not about your test suite.

---

## 10.2.4 Version-Controlling Demo Environments

Ask an SE team "can you rebuild your demo environment from scratch?" and the honest answer is usually a nervous laugh. The environment *evolved* — configured by hand over months, patched before big demos, decorated by departed teammates — and nobody can enumerate what it contains, let alone reproduce it. That environment is a single point of failure wearing a friendly UI, and every deal the team runs is quietly betting on its continuity.

The fix is the same one software engineering applied to the same problem twenty years ago: **the environment is not the asset — the definition of the environment is.** Configuration as files, files in git, environment producible from the repo on demand.

---

### What Goes in the Repo

| Artifact | Form |
|---|---|
| Infrastructure & topology | Compose files / Helm charts / Terraform — whatever [your sandbox stack](docs/10-tools/demo-environment-management.md?id=_1021-docker-kubernetes-local-sandbox) speaks |
| Product configuration | Exported config-as-code, feature flags, persona/role definitions |
| [Golden-state definition](docs/10-tools/demo-environment-management.md?id=_1022-maintaining-the-golden-state-environment) | The versioned statement of "demo-ready" |
| Seed & [data generation scripts](docs/10-tools/demo-environment-management.md?id=_1023-scripting-dummy-data-generation) | Code, with per-industry profiles as parameters |
| Narrative fixtures | The named records each [storyboard](docs/13-templates/demo-storyboard.md) depends on |
| Reset & verification | `reset.sh`, smoke-test checklist, health checks |
| README | Enough for a new SE to produce a working environment on day two |

Secrets stay out (use the team's secret manager); anything else that would take more than ten minutes to reconstruct by memory goes in.

### The Practices That Make It Pay

1. **Branch per deal, master stays generic.** The [per-prospect skin](docs/10-tools/demo-environment-management.md?id=_1023-scripting-dummy-data-generation) — terminology, logos, data volumes — is a branch or a parameter overlay, never edits to the shared baseline. When the deal ends, the branch archives *with* the deal record; when a similar prospect appears next year, `git checkout` resurrects three days of setup in an afternoon.
2. **Tag what you demo.** Before a high-stakes session, tag the exact environment state (`acme-exec-briefing-v2`). If the [POC that follows](docs/13-templates/poc-plan-success-criteria.md) disputes what was shown — "the demo did X" — the tag is your reproducible receipt. This is the same [version discipline your design documents](docs/04-solution-design/technical-documentation-that-moves-deals.md?id=_434-version-controlling-designs-across-a-long-sales-cycle) already follow, applied to the running artifact.
3. **Changes by pull request, at least for master.** Not bureaucracy — a two-minute review that has one job: no surprise landing on the environment every SE demos from tomorrow. The PR log doubles as the answer to "what changed since the version that worked?"
4. **Rebuild for real, quarterly.** A definition that's never exercised drifts from reality one hand-hotfix at a time. Schedule an actual from-scratch rebuild every quarter; every gap it exposes is a gap that would otherwise have surfaced during an outage, at demo-minus-one-hour.

### The Payoffs Nobody Advertises

Beyond disaster recovery: **onboarding** (the new SE gets a working environment from the README [in week one](docs/00-start-here/your-first-90-days-as-a-new-se.md?id=_031-week-1-2-orient-before-you-operate), not week six of shoulder-surfing); **parallelism** (three deals, three branches, zero "who changed my dashboard"); **product-upgrade safety** (new build lands in a branch, storyboards re-verified, *then* merged); and **institutional memory** — the environment survives every individual departure, which no amount of tribal knowledge ever has.

> **War Story:** A five-SE team lost their entire demo environment on a Tuesday — a cloud-account billing mixup deprovisioned everything, and the vendor's "restore" restored nothing. Eight active evaluations, two demos scheduled that week. Reconstruction from memory and screenshots took eleven days; one competitive deal died outright in the gap ("the vendor couldn't demo for two weeks" is a hard story to spin), and the team estimated forty SE-days of accumulated configuration had simply evaporated. The regime that followed — everything above, adopted wholesale — got its first real test fourteen months later when a botched product upgrade corrupted the environment on a Thursday night. Friday morning's rebuild from the repo took fifty minutes, including data seeding. The Friday demo ran on time; the prospect never knew. Same class of disaster, two teams' difference: one kept an environment, the other kept the *recipe*.

> **Failure Mode:** The half-migration. The team puts the Compose files in git, feels the warm glow of modernity, and keeps making the actual changes — config tweaks, data fixes, pre-demo patches — directly in the running environment "just for now." Within a quarter the repo describes an environment that no longer exists, which is *worse* than no repo: a rebuild now produces a confidently wrong environment, and nobody discovers the drift until the restore-under-pressure moment the whole system existed for. Version control isn't where the files live; it's where the *changes* happen. Repo-first or don't bother.

**Interview Angle:**
"Your demo environment is destroyed the day before a critical demo. Walk me through the next 24 hours."
Strong answers are boring: rebuild from the versioned definition, reseed from scripts, re-verify the storyboard, demo on schedule — plus the honest admission of what wouldn't survive (and a plan to fix that). Weak answers improvise heroics, which is an admission that the environment exists in exactly one copy.

🟡 **Mid-Level** — An environment is a cache. The repo is the source of truth. Teams that confuse the two find out during the worst week of the quarter.
