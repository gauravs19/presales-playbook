#### 13.5.2 Technical Win Report

<div class="template-meta">
  <span class="stage-badge st-poc">Stage 05 · Prove</span>
  <a class="stage-badge" href="docs/13-templates/html/technical-win-report.html" target="_blank" style="text-decoration:none">&#128424;&#65039; Printable HTML version</a>
</div>

A POC that ends without a formal verdict just... evaporates — and with it, all the momentum you built. The Technical Win Report converts evaluation results into a commercial forcing function. It operationalises [The Formal Technical Win Declaration](docs/06-poc/securing-the-technical-win.md?id=_641-the-formal-technical-win-declaration) and [Turning the Technical Win Into Commercial Momentum](docs/06-poc/securing-the-technical-win.md?id=_642-turning-the-technical-win-into-commercial-momentum).

| | |
|---|---|
| **When to use** | Within 3 business days of the POC end date — while the results are undeniable |
| **Owner** | SE |
| **Time to complete** | ~20 minutes (the POC scorecard did most of the work) |
| **Output goes to** | Prospect evaluation lead + executive sponsor, AE, your leadership |

---

## The Template

```markdown
# Technical Win Report — [Account] · POC of [start]–[end]

## 1. Verdict
The evaluation defined in the signed POC Plan of [date] is **COMPLETE**.
Result: **[3 of 3 / 2 of 3] success criteria met.** → **TECHNICAL WIN [DECLARED / NOT declared]**

## 2. Results vs. Signed Criteria
| # | Criterion (verbatim from signed plan) | Target | Achieved | Verdict | Evidence |
|---|----------------------------------------|--------|----------|---------|----------|
| 1 | | | | ✅/❌ | [link/screenshot/log] |
| 2 | | | | | |
| 3 | | | | | |

## 3. What This Proves in Business Terms
Criterion #1 met means: [pain #1] — which costs [their number] per [period] — is resolved.
Criterion #2 met means: ______
*(One sentence each. Numbers from discovery, results from the POC.)*

## 4. Evaluation Team Verdicts (collected before this report was sent)
| Name | Role | Verdict in their words |
|------|------|------------------------|
| | Evaluation lead | "..." |
| | Hands-on evaluator | "..." |

## 5. Observations & Caveats (candour builds trust — hiding these kills it later)
- [Anything that needed a workaround, config caveat, or roadmap item — stated plainly]

## 6. Agreed Next Step (per §1 of the signed POC Plan)
The plan states: *"If success criteria are met, [account] commits to [X]."*
Criteria are met. **Proposed date for [X]: [date within 10 business days].**

## 7. Environment Close-Out
Sandbox decommissioned [date] · Prospect data [deleted/returned] [date] · Confirmation: [name]
```

---

## How to Fill It In

1. **Collect the verdicts BEFORE you write the report.** Section 4 is the report's spine: ask each evaluator "in your own words, did this meet the bar?" while the wins are fresh. Their quotes close the deal in rooms you'll never enter — including the CFO's.
2. **Quote the signed plan back, word for word.** Section 2's criteria and section 6's commitment are copy-pasted from the POC Plan, not paraphrased. The power of the document is that nobody can argue with their own signature.
3. **Put the caveats in yourself.** Section 5 feels like it weakens the report; it does the opposite. A report with zero caveats reads as marketing and invites the prospect's engineers to supply the caveats for you — in a meeting you're not in.
4. **Send it up, not just across.** The evaluation lead already knows you won. The report exists for the economic buyer and procurement — the people who only ever see artifacts, never demos.

> **Failure Mode:** The SE who wins the POC and then waits for the prospect to "socialise it internally." Three weeks pass, the champion changes roles, a new stakeholder asks "so what did that POC actually prove?" — and there's no document to answer with. The technical win has a half-life measured in days. Declare it in writing before it decays.

🟡 **Mid-Level** — The POC proves the platform. The report is what converts proof into a signature.
