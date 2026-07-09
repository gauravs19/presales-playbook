#### 13.5.1 POC Plan & Success Criteria

<div class="template-meta">
  <span class="stage-badge st-poc">Stage 05 · Prove</span>
  <a class="stage-badge" href="docs/13-templates/html/poc-plan-success-criteria.html" target="_blank" style="text-decoration:none">&#128424;&#65039; Printable HTML version</a>
</div>

An unstructured POC is free consulting with a deadline nobody agreed to. This document is the evaluation's contract: what will be proven, how success is measured, who does what, and what happens when it ends. It operationalises the [3-Mandatory-Requirements Rule](docs/06-poc-execution/3-mandatory-requirements.md), [Locking the Sandbox](docs/06-poc-management/locking-the-sandbox.md), [POC vs POV](docs/06-poc-execution/poc-vs-pov.md), and [Prospect Resource Accountability](docs/06-poc-execution/prospect-accountability.md).

| | |
|---|---|
| **When to use** | Before ANY POC work begins — no signed plan, no sandbox access |
| **Owner** | SE, co-signed by prospect's evaluation lead |
| **Time to complete** | ~40 minutes to draft; 1 meeting to negotiate and sign |
| **Output goes to** | Prospect evaluation lead (signature), AE, SE manager, legal if paid |

---

## The Template

```markdown
# POC Plan & Success Criteria — [Account] · [Start] → [End date]

## 1. Purpose & Decision Link
This evaluation exists to answer ONE question:
> "Can [platform] [do the specific thing] under [account]'s conditions?"

**If success criteria are met, [account] commits to:** [advance to commercial negotiation /
executive review on DATE]. *(No decision link = no POC.)*

## 2. Success Criteria — the 3 Mandatory Requirements
| # | Requirement | Measured how | Target | Pass/Fail |
|---|-------------|--------------|--------|-----------|
| 1 | | | | |
| 2 | | | | |
| 3 | | | | |

**Criteria are LOCKED as of [date], signed below. Additions require a signed change
request and may extend the timeline and/or convert the evaluation to paid.**

## 3. Scope
- **In scope:** [datasets, integrations, user count, environments]
- **Out of scope:** [everything else — name the likely asks explicitly]
- **Data provided by prospect, by [date]:** ______

## 4. Timeline (max [3] weeks)
| Week | Milestone | Exit gate |
|------|-----------|-----------|
| 1 | Environment live, data loaded | Criteria #1 test ready |
| 2 | Core scenarios executed | Criteria #1–2 evidenced |
| 3 | Edge cases + wrap | Scorecard review meeting held |

## 5. Resource Commitments
| Side | Person | Role | Committed hours/week |
|------|--------|------|----------------------|
| Vendor | [SE] | | |
| Prospect | | Evaluation lead | |
| Prospect | | Data/infra access owner | |

**Stall clause:** if prospect-side tasks slip more than [5] business days, the timeline
extends day-for-day, and both executive sponsors are notified.

## 6. Cadence & Communication
- [2×/week] 15-min stand-up: progress vs. criteria ONLY (not a support channel)
- Weekly scorecard email to both sponsors: 🟢/🟡/🔴 per criterion

## 7. End State — [end date], no extensions by default
- Criteria met → **Technical Win Report** issued; next step per §1 executes
- Criteria not met → joint findings review; explicit go/no-go, no zombie POC
- Sandbox decommissioned; prospect data deleted/returned by [date]

**Signatures:**
Vendor SE: ______ [date] · Prospect evaluation lead: ______ [date]
```

---

## How to Fill It In

1. **Three criteria, never ten.** Ten criteria means nobody agreed what matters; three means you forced the prioritisation conversation *before* the clock started. Everything else is a demo topic, not an evaluation gate.
2. **The decision link in section 1 is the whole document.** A POC that ends in "great, we'll discuss internally" was never an evaluation — it was a free pilot. Get the if-then in writing or [refuse the POC](docs/06-poc-execution/true-cost-free-poc.md).
3. **Make their commitments as visible as yours.** Section 5 with named humans and hours is what turns "we couldn't find time to load the data" from your problem into a jointly owned slip with executive visibility.
4. **Signature is the point.** Unsigned, this is a wish list. Signed, it's the artifact that stops [moving goalposts](docs/06-poc-execution/moving-goalposts.md) — when a new requirement appears in week 2, you point at the lock clause and route it through change control, cheerfully.

> **Failure Mode:** The SE who starts building "just to keep momentum" while the plan is "being reviewed." Momentum without a signed plan is how a 3-week POC becomes a 4-month unpaid implementation with new stakeholders arriving monthly, each carrying a new requirement. The sandbox opens when the signatures land. Hold the line — the deal respects the SE who does.

🟡 **Mid-Level** — The POC plan is where the technical win is actually won or lost — two weeks before anyone touches the sandbox.
