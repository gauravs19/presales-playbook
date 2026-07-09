# Version-Controlling Demo Environments

Ask an SE team "can you rebuild your demo environment from scratch?" and the honest answer is usually a nervous laugh. The environment *evolved* — configured by hand over months, patched before big demos, decorated by departed teammates — and nobody can enumerate what it contains, let alone reproduce it. That environment is a single point of failure wearing a friendly UI, and every deal the team runs is quietly betting on its continuity.

The fix is the same one software engineering applied to the same problem twenty years ago: **the environment is not the asset — the definition of the environment is.** Configuration as files, files in git, environment producible from the repo on demand.

---

## What Goes in the Repo

| Artifact | Form |
|---|---|
| Infrastructure & topology | Compose files / Helm charts / Terraform — whatever [your sandbox stack](docs/10-tools/docker-kubernetes-sandbox.md) speaks |
| Product configuration | Exported config-as-code, feature flags, persona/role definitions |
| [Golden-state definition](docs/10-tools/golden-state-environment.md) | The versioned statement of "demo-ready" |
| Seed & [data generation scripts](docs/10-tools/dummy-data-generation.md) | Code, with per-industry profiles as parameters |
| Narrative fixtures | The named records each [storyboard](docs/13-templates/demo-storyboard.md) depends on |
| Reset & verification | `reset.sh`, smoke-test checklist, health checks |
| README | Enough for a new SE to produce a working environment on day two |

Secrets stay out (use the team's secret manager); anything else that would take more than ten minutes to reconstruct by memory goes in.

## The Practices That Make It Pay

1. **Branch per deal, master stays generic.** The [per-prospect skin](docs/10-tools/dummy-data-generation.md) — terminology, logos, data volumes — is a branch or a parameter overlay, never edits to the shared baseline. When the deal ends, the branch archives *with* the deal record; when a similar prospect appears next year, `git checkout` resurrects three days of setup in an afternoon.
2. **Tag what you demo.** Before a high-stakes session, tag the exact environment state (`acme-exec-briefing-v2`). If the [POC that follows](docs/13-templates/poc-plan-success-criteria.md) disputes what was shown — "the demo did X" — the tag is your reproducible receipt. This is the same [version discipline your design documents](docs/04-solution-design/version-controlling-designs.md) already follow, applied to the running artifact.
3. **Changes by pull request, at least for master.** Not bureaucracy — a two-minute review that has one job: no surprise landing on the environment every SE demos from tomorrow. The PR log doubles as the answer to "what changed since the version that worked?"
4. **Rebuild for real, quarterly.** A definition that's never exercised drifts from reality one hand-hotfix at a time. Schedule an actual from-scratch rebuild every quarter; every gap it exposes is a gap that would otherwise have surfaced during an outage, at demo-minus-one-hour.

## The Payoffs Nobody Advertises

Beyond disaster recovery: **onboarding** (the new SE gets a working environment from the README [in week one](docs/00-start-here/first-90-days-week-1-2.md), not week six of shoulder-surfing); **parallelism** (three deals, three branches, zero "who changed my dashboard"); **product-upgrade safety** (new build lands in a branch, storyboards re-verified, *then* merged); and **institutional memory** — the environment survives every individual departure, which no amount of tribal knowledge ever has.

> **War Story:** A five-SE team lost their entire demo environment on a Tuesday — a cloud-account billing mixup deprovisioned everything, and the vendor's "restore" restored nothing. Eight active evaluations, two demos scheduled that week. Reconstruction from memory and screenshots took eleven days; one competitive deal died outright in the gap ("the vendor couldn't demo for two weeks" is a hard story to spin), and the team estimated forty SE-days of accumulated configuration had simply evaporated. The regime that followed — everything above, adopted wholesale — got its first real test fourteen months later when a botched product upgrade corrupted the environment on a Thursday night. Friday morning's rebuild from the repo took fifty minutes, including data seeding. The Friday demo ran on time; the prospect never knew. Same class of disaster, two teams' difference: one kept an environment, the other kept the *recipe*.

> **Failure Mode:** The half-migration. The team puts the Compose files in git, feels the warm glow of modernity, and keeps making the actual changes — config tweaks, data fixes, pre-demo patches — directly in the running environment "just for now." Within a quarter the repo describes an environment that no longer exists, which is *worse* than no repo: a rebuild now produces a confidently wrong environment, and nobody discovers the drift until the restore-under-pressure moment the whole system existed for. Version control isn't where the files live; it's where the *changes* happen. Repo-first or don't bother.

**Interview Angle:**
"Your demo environment is destroyed the day before a critical demo. Walk me through the next 24 hours."
Strong answers are boring: rebuild from the versioned definition, reseed from scripts, re-verify the storyboard, demo on schedule — plus the honest admission of what wouldn't survive (and a plan to fix that). Weak answers improvise heroics, which is an admission that the environment exists in exactly one copy.

🟡 **Mid-Level** — An environment is a cache. The repo is the source of truth. Teams that confuse the two find out during the worst week of the quarter.

---
