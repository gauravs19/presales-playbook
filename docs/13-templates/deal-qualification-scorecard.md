#### 13.1.1 Deal Qualification Scorecard

<div class="template-meta">
  <span class="stage-badge st-qualify">Stage 01 · Qualify</span>
  <a class="stage-badge" href="docs/13-templates/html/deal-qualification-scorecard.html" target="_blank" style="text-decoration:none">&#128424;&#65039; Printable HTML version</a>
</div>

Every hour spent on a dead deal is an hour stolen from a live one. This scorecard operationalises [Scoring Deal Quality in the First 15 Minutes](docs/02-deal-orchestration/reading-a-deal-before-discovery-starts.md?id=_211-scoring-deal-quality-in-the-first-15-minutes) and the [Fast No Framework](docs/02-deal-orchestration/reading-a-deal-before-discovery-starts.md?id=_212-the-fast-no-framework): eight weighted signals, three hard blockers, and a recommendation you can defend in the pipeline review.

| | |
|---|---|
| **When to use** | Within 48 hours of any new opportunity landing on your desk — before the first discovery call is booked |
| **Owner** | SE, reviewed with AE |
| **Time to complete** | ~15 minutes |
| **Output goes to** | AE, SE manager, CRM opportunity record |

---

## The Template

```markdown
# Deal Qualification Scorecard — [Account Name]

**Date:** YYYY-MM-DD · **SE:** [name] · **AE:** [name] · **Source:** [inbound / outbound / RFP / partner]

## Hard Blockers — any "YES" stops the deal until resolved
| # | Blocker | YES/NO | Evidence |
|---|---------|--------|----------|
| 1 | Compliance/regulatory requirement we cannot meet (data residency, certification, sovereign cloud) | | |
| 2 | Decision already made — we are column fodder for procurement optics | | |
| 3 | Required capability is roadmap-only with no committed date | | |

## Signal Scoring — 1 (weak) to 5 (strong)
| # | Signal | Weight | Score | Weighted | Evidence — one line, no adjectives |
|---|--------|-------:|------:|---------:|-----------|
| 1 | Quantified pain exists (a number, not a feeling) | 3 | | | |
| 2 | Identified economic buyer with budget authority | 3 | | | |
| 3 | Compelling event / deadline forcing action | 2 | | | |
| 4 | Access to power (we can reach decision-makers) | 2 | | | |
| 5 | Technical fit vs. stated requirements | 2 | | | |
| 6 | Champion strength (sells when we're not in the room) | 2 | | | |
| 7 | Competitive position (incumbent? preferred? late entry?) | 1 | | | |
| 8 | Deal economics (size vs. cost of pursuit) | 1 | | | |
| | **Total (max 80)** | | | **/80** | |

## Verdict
- **64–80 — PURSUE:** full engagement, resource the deal properly.
- **48–63 — PURSUE WITH CONDITIONS:** name the 1–2 weak signals and the date by which they must improve: ______
- **32–47 — CHALLENGE:** requalify with the AE before spending SE cycles. What would need to be true? ______
- **< 32 — FAST NO:** recommend withdrawal. Attach this scorecard as the rationale.

**Recommendation:** [PURSUE / CONDITIONS / CHALLENGE / FAST NO]
**Rationale (2 sentences max):**
**Re-score date (if conditions):** YYYY-MM-DD
```

---

## How to Fill It In

1. **Evidence column is mandatory.** A score without evidence is a mood. "Champion strength: 4 — Priya (VP Eng) forwarded our deck to the CIO unprompted" is a signal. "Seems keen" is not.
2. **Score what you know today, not what you hope to learn.** Unknown = 1, not 3. The scorecard's job is to expose what you haven't verified — a row full of 1s is an agenda for the first discovery call.
3. **Do it with the AE, not to the AE.** Present it as shared risk management: "Here's where the deal is strong, here's what we need to prove by the 15th." The scorecard depersonalises the disagreement.
4. **Re-score at every stage gate.** A deal qualified in January can rot by March. Attach the delta to your [Weekly SE Deal Review](docs/02-deal-orchestration/portfolio-management.md?id=_242-the-weekly-se-deal-review).

> **Failure Mode:** The SE who scores every deal 60+ because low scores feel like pessimism, or because the AE pushes back. If your last ten scorecards all said PURSUE, the instrument is broken — and your calendar is paying for it. The scorecard only protects your time if you let it say no.

🟢 **Entry-Level** — Fifteen minutes of scoring beats fifteen weeks of servicing a deal that was never real.
