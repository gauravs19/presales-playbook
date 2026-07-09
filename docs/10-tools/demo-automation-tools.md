# Demo Automation — Reprise, Navattic & Storylane

Demo automation platforms — Reprise, Navattic, Storylane, Walnut and kin — capture your product into interactive, clickable replicas: guided tours a prospect can walk through alone, sandboxed environments that can't break, product stories embedded in a follow-up email. The pitch to SE leadership is scale: stop burning senior SE hours on repetitive first-look demos.

The pitch is correct, and it comes with a trap. The tools are excellent at *distributing* a demo and incapable of *deciding* what the demo should be. Automate a harbor tour and you've simply industrialized [the thing this playbook spends a chapter abolishing](docs/05-demo-excellence/abolishing-harbor-tour.md).

---

## Where Automated Demos Belong in the Deal

| Deal moment | Format | Why |
|---|---|---|
| Pre-first-meeting / marketing handoff | Short guided tour (3–5 min, one workflow) | Qualifies interest before an SE hour is spent |
| Post-demo follow-up | Interactive replay of the 2–3 scenes *they reacted to* | Your champion can't re-perform your demo — this does it for them, [in the room you're not in](docs/05-demo-excellence/champion-as-hero.md) |
| Multi-stakeholder deals | Persona-specific tours (ops view, admin view, exec dashboard) | Stakeholders you'll never get meetings with still experience the product |
| Between demo and POC | Sandboxed hands-on environment | Keeps momentum alive without [unscoped free evaluation](docs/06-poc-execution/true-cost-free-poc.md) |
| RFP / procurement stage | Linked evidence for specific claims | "Click here to see the audit trail" beats a paragraph asserting one |

What doesn't belong in automation: the tailored evaluation demo itself. The moments that win deals — [reading the room](docs/09-executive-selling/reading-the-room.md), the improvised whiteboard, the objection handled live — are precisely the ones that can't be recorded in advance.

## Building Tours That Sell (Not Tours That Tour)

The [storyboard discipline](docs/13-templates/demo-storyboard.md) applies with *more* force to automated demos, not less, because there's no presenter to rescue a wandering narrative:

1. **One tour, one pain, one persona.** The self-guided viewer gives you ninety seconds before abandoning. A tour that shows "the platform" loses to a tour that shows "your Monday-morning pipeline triage, fixed."
2. **Front-load the aha.** The [5-minute rule](docs/05-demo-excellence/aha-moment.md) becomes a 60-second rule when nobody's socially obligated to keep watching.
3. **Instrument everything.** The analytics are half the value: who opened it, where they lingered, where they abandoned, who forwarded it. A tour abandoned at the pricing-adjacent step by three stakeholders is deal intelligence, not just content performance.
4. **Version per deal, not per quarter.** The generic tour is marketing's asset. Yours should carry the prospect's terminology and data shapes — most platforms make a deal-specific fork a 30-minute job, and [the industry-matched version](docs/10-tools/dummy-data-generation.md) converts measurably better.

## The Maintenance Tax

Every captured demo is a snapshot that starts aging on capture day. UI refreshes, renamed features, deprecated flows — a stale tour showing last year's interface does active damage in an evaluation ("is this even the same product?"). Assign ownership: every published tour has a named owner and a review date, exactly like [golden-state environments](docs/10-tools/golden-state-environment.md). An unowned tour library rots into a liability within two quarters.

> **War Story:** An SE team covering mid-market at a data-platform vendor was drowning: forty demo requests a quarter, half of them first-look tire-kickers. They built exactly three Navattic tours — one per core persona, each built from their best-converting live demo's storyboard, each ending with a calendar link. Results after one quarter: first-look demo requests to the SE team dropped 60%; the meetings that *did* get booked arrived pre-educated, with discovery-grade questions; and — the unplanned win — the tours' analytics became a qualification signal. Prospects who completed the tour converted to POC at four times the rate of those who abandoned in the first minute. The team had accidentally built a [deal-quality scorecard input](docs/02-deal-orchestration/scoring-deal-quality.md) out of a content tool.

> **Failure Mode:** The team that automates in the wrong direction — recording their longest, most comprehensive demo as "the definitive tour," all thirty features, twenty-two minutes. Completion analytics tell the story within a week: median abandonment at ninety seconds, right after the viewer has learned the product has a lot of menus. Automation multiplies whatever you feed it. Feed it the harbor tour and you get the harbor tour at scale, with a dashboard proving nobody finishes it.

**Interview Angle:**
"Where do interactive demos fit in your deal process?"
Strong answers place automation at specific deal moments (leave-behind, multi-threading, pre-qualification), keep the tailored evaluation demo human, and mention analytics as deal signal. Weak answers treat the tools as either a threat ("nothing replaces a live demo") or a replacement ("we automate everything") — both miss that it's a distribution channel for demo *strategy*.

🟡 **Mid-Level** — Demo automation scales whatever demo philosophy you already have. Fix the philosophy first; then, and only then, multiply it.

---
