#### 13.6.1 Business Case One-Pager

<div class="template-meta">
  <span class="stage-badge st-commercial">Stage 06 · Commercial</span>
  <a class="stage-badge" href="docs/13-templates/html/business-case-one-pager.html" target="_blank" style="text-decoration:none">&#128424;&#65039; Printable HTML version</a>
</div>

The CFO will never watch your demo. They will read one page — once — and decide whether this purchase is a risk or an obviousness. This template operationalises [Building a Defensible ROI Case](docs/03-discovery/roi-case-building.md), [Using TCO & ROI Models as Negotiation Weapons](docs/07-commercial-influence/tco-roi-as-weapons.md), and [Translating API Specs for the CFO Audience](docs/04-solution-design/translating-for-cfo.md).

| | |
|---|---|
| **When to use** | Entering commercial negotiation — ideally alongside the Technical Win Report |
| **Owner** | SE (numbers) + AE (commercial framing) |
| **Time to complete** | ~30 minutes if discovery was quantified; impossible if it wasn't |
| **Output goes to** | Economic buyer, CFO/finance reviewer, procurement |

---

## The Template

```markdown
# Business Case — [Solution] for [Account] · [Date]

## 1. The Problem, in Money
[Account] currently loses **[amount] per [period]** to [problem], comprising:
| Cost driver | Basis of estimate (their data, source & date) | Annualised |
|-------------|-----------------------------------------------|-----------:|
| e.g. Engineer hours on manual recovery | 40 hrs/mo × $95/hr (stated by [name], [date]) | $45,600 |
| e.g. Revenue impact of downtime | 3 incidents/qtr × $[X] (from [source]) | |
| **Cost of doing nothing (3-year)** | | **$______** |

## 2. The Proposed Change (three sentences, zero product names in the first two)
Today, [workflow] requires ______. The proposed approach makes it ______.
[Platform] delivers this via [capability], validated in the POC completed [date].

## 3. Quantified Benefits — conservative / expected
| Benefit | Year 1 (conservative) | Year 1 (expected) | Basis |
|---------|----------------------:|------------------:|-------|
| Cost avoidance | | | POC result #1 |
| Productivity recovery | | | |
| Risk reduction (quantified) | | | |
| **Total annual benefit** | **$___** | **$___** | |

## 4. Total Cost of Ownership (3-year)
| | Yr 1 | Yr 2 | Yr 3 |
|---|-----:|-----:|-----:|
| Licenses / subscription | | | |
| Implementation & migration (one-time) | | | |
| Internal effort (their hours, priced) | | | |
| **Total** | | | |

## 5. The Verdict Line
> **Payback in [X] months (conservative case). 3-year net benefit: $[Y] – $[Z].**
> Every input above is traceable to [account]'s own data or the signed POC results.

## 6. Risk of the Investment vs. Risk of Inaction
| Investment risk | Mitigation |
|-----------------|------------|
| | Phased rollout per Solution Design §4 |

Inaction risk: the §1 cost compounds — [amount] more lost for each quarter of delay.

## 7. Assumptions & Sensitivity
Numbers hold if: [assumption 1], [assumption 2]. If [key variable] is 50% lower, payback moves to [X+n] months — still inside [their fiscal horizon].
```

---

## How to Fill It In

1. **Their numbers or no numbers.** Every figure in section 1 carries a name, source, and date from discovery. A business case built on industry benchmarks is a brochure; one built on "as stated by your VP of Engineering on March 12th" is evidence.
2. **Lead with the conservative case.** Present the number *you* would defend under hostile questioning, then let the expected case be upside. A CFO who catches one inflated input discounts the entire page — permanently.
3. **Price their effort too.** Section 4 including *their* internal hours is what separates you from every vendor who conveniently forgot implementation cost. Procurement notices who told the whole truth.
4. **The sensitivity line is the closer.** "Even if we're half wrong, payback is still 14 months" removes the last safe objection. Do that math before they do.

> **Failure Mode:** The ROI case that arrives in week one of the deal, before discovery quantified anything — generic multipliers, vendor-sourced benchmarks, a suspiciously round 347% ROI. Executives have seen a thousand of these and believe none of them. The one-pager is only powerful *because* it comes late, built from their data and a signed POC. Sequence is the credibility.

🔵 **Senior** — Whoever writes the page the CFO reads controls the frame the deal is decided in. Make sure it's you.
