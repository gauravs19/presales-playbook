#### 13.2.2 Discovery Summary

<div class="template-meta">
  <span class="stage-badge st-discover">Stage 02 · Discover</span>
  <a class="stage-badge" href="docs/13-templates/html/discovery-summary.html" target="_blank" style="text-decoration:none">&#128424;&#65039; Printable HTML version</a>
</div>

Discovery that isn't documented didn't happen — three weeks later the prospect will deny half of what they told you, and your own demo team will build against the wrong pain. This template operationalises [Writing the Discovery Summary That Gets Read](docs/03-discovery/discovery-output-handoff.md?id=_361-writing-the-discovery-summary-that-gets-read) and [Documenting What You Heard vs. What They'll Deny](docs/03-discovery/pain-quantification.md?id=_354-documenting-what-you-heard-vs-what-theyll-deny).

| | |
|---|---|
| **When to use** | Within 24 hours of the discovery call, while quotes are still verbatim |
| **Owner** | SE |
| **Time to complete** | ~25 minutes |
| **Output goes to** | Prospect champion (external version), AE + demo team (internal version) |

---

## The Template

```markdown
# Discovery Summary — [Account] / [Date]

## 1. What We Heard (their words, not ours)
| # | Pain | Verbatim quote | Who said it | Cost / impact (their number) |
|---|------|----------------|-------------|------------------------------|
| 1 | | "..." | [name, role] | [$ / hours / incidents per period] |
| 2 | | "..." | | |
| 3 | | "..." | | |

## 2. Current State
- **Architecture in one paragraph:** ______
- **Systems in scope:** ______
- **Integration constraints / legacy anchors:** ______
- **What they've already tried and why it failed:** ______

## 3. Stakeholders
| Name | Role | Stance (champion / neutral / detractor / unknown) | What they personally need from this project |
|------|------|-----------------------------------------------------|----------------------------------------------|
| | | | |

**Economic buyer:** [named / suspected: ___ / NOT YET IDENTIFIED — plan: ___]

## 4. Compelling Event
What forces a decision, and by when? ______
If nothing forces a decision → flag to AE: this is a research project, not a deal.

## 5. Decision Criteria (as stated today)
1. ______
2. ______
3. ______
*(These become the seed of the POC success criteria — get them in writing now.)*

## 6. Open Questions & Risks
- Unverified assumption: ______
- Political landmine: ______
- Competitor presence / incumbent: ______

## 7. Agreed Next Step
**What:** ______ · **When:** YYYY-MM-DD · **Owner:** ______
**What we will show:** the 2–3 capabilities that map to pains #1–#3 above — nothing else.
```

---

## How to Fill It In

1. **Two versions, one source.** The external version (sections 1, 4, 5, 7) goes to your champion with "Did I capture this correctly?" — their corrections are free discovery, and their silence is written confirmation. The internal version keeps sections 3 and 6.
2. **Verbatim quotes are the asset.** "We lose about forty engineer-hours a month to pipeline failures" survives a champion change, a procurement review, and a CFO challenge. Your paraphrase survives none of them.
3. **A number in every pain row.** If a pain has no cost attached, it's not yet a pain — it's a topic. Go back and [quantify it](docs/03-discovery/pain-quantification.md?id=_351-translating-its-slow-into-dollar-metrics) before you build anything.
4. **Section 5 is the long game.** Decision criteria captured in week 2 become the anti-goalpost-moving clause of your [POC Plan](docs/13-templates/poc-plan-success-criteria.md) in week 8.

> **Failure Mode:** The ten-page discovery novel nobody reads. The summary's power is that an executive can absorb it in ninety seconds and a demo engineer can build from it without a meeting. If it doesn't fit on one page, you haven't finished thinking — you've just transcribed.

🟢 **Entry-Level** — The SE who documents discovery owns the deal narrative. Everyone else argues from memory.
