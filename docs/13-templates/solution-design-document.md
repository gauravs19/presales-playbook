#### 13.3.1 Solution Design Document

<div class="template-meta">
  <span class="stage-badge st-design">Stage 03 · Design</span>
  <a class="stage-badge" href="docs/13-templates/html/solution-design-document.html" target="_blank" style="text-decoration:none">&#128424;&#65039; Printable HTML version</a>
</div>

A deal-grade design document is not an implementation spec — it's a persuasion instrument with an audit trail. It must survive three audiences: the architect who attacks it, the CFO who skims it, and the delivery team who inherits it. This template operationalises the [B.O.A.T. Framework](docs/04-solution-design/design-principles-for-deals.md?id=_411-minimum-viable-transformation-boat-framework), [Defending Your Design Choices](docs/04-solution-design/design-principles-for-deals.md?id=_413-defending-your-design-choices), and [Version Controlling Designs Across a Long Sales Cycle](docs/04-solution-design/technical-documentation-that-moves-deals.md?id=_434-version-controlling-designs-across-a-long-sales-cycle).

| | |
|---|---|
| **When to use** | After discovery is documented and before the first tailored demo; updated at every scope change |
| **Owner** | SE / Solutions Architect |
| **Time to complete** | ~45 minutes for v0.1; grows with the deal |
| **Output goes to** | Prospect technical team, champion, internal delivery review |

---

## The Template

```markdown
# Solution Design — [Account] · v[0.x] · [Date]

## 0. Executive Summary (write this LAST, read FIRST — max 5 sentences)
[Business problem] costs [account] approximately [number] per [period].
The proposed design [does what] by [approach in plain English].
It delivers [primary outcome] within [timeframe], at an estimated [cost band].
Key risks are [risk 1] and [risk 2], mitigated by [one line].
Decision requested: [what you need them to approve].

## 1. Business Context (from discovery — link, don't repeat)
- Pains addressed: #1 ______ · #2 ______ · #3 ______
- Success criteria this design must satisfy: ______

## 2. Current State ("as-is")
[One diagram + one paragraph. Name what works — you're replacing a bottleneck, not insulting their team.]

## 3. Target State ("to-be")
[One diagram + component table]
| Component | Role in the solution | New / existing / replaced |
|-----------|----------------------|---------------------------|
| | | |

## 4. Minimum Viable Transformation
**Phase 1 (proves value):** ______ — live in [X weeks]
**Phase 2 (scales it):** ______
**Explicitly OUT of scope:** ______ *(this line protects the deal margin)*

## 5. Key Design Decisions
| # | Decision | Alternatives considered | Why this one | Trade-off accepted |
|---|----------|-------------------------|--------------|--------------------|
| 1 | | | | |
| 2 | | | | |

## 6. Assumptions Register (each one is a deal risk until verified)
| # | Assumption | Impact if wrong | Verified? (date/by) |
|---|------------|-----------------|---------------------|
| 1 | e.g. "SSO is SAML 2.0, not custom" | +3 weeks integration | ☐ |

## 7. Integration & Security Posture
- Authentication: ______ · Data residency: ______ · Encryption: at rest ___ / in transit ___
- Compliance touchpoints (SOC2 / ISO / GDPR / DPDP): ______

## 8. Sizing & Commercial Envelope (bands, not quotes)
- Licensing basis: ______ · Infrastructure order-of-magnitude: ______
- Services effort (T-shirt): [S/M/L/XL] ≈ [person-weeks]

## Version Log
| Ver | Date | What changed | Triggered by |
|-----|------|--------------|--------------|
| 0.1 | | Initial draft | Discovery summary v1 |
```

---

## How to Fill It In

1. **The decision log is your armor.** When their architect asks "why not event-driven?", the answer is already written in section 5 — considered, rejected, reasons documented. Nothing builds technical trust faster than showing you rejected your own first idea.
2. **The assumptions register is your insurance.** Every unverified assumption gets a name and a date. When scope explodes in month four because SSO turned out to be a custom LDAP fork, the register proves it was flagged in month one.
3. **Out-of-scope is a commercial clause.** Section 4's exclusion line is what your AE points at when the prospect asks for "one small addition." Write it as specifically as the inclusions.
4. **Version on every change.** A design that silently mutates across a nine-month cycle is a [Frankenstein build](docs/04-solution-design/reference-architectures-that-win.md?id=_422-avoiding-custom-code-frankenstein-builds) in progress. The version log makes drift visible and negotiable.

> **Failure Mode:** The design doc written to impress engineers instead of moving the deal — forty pages, nine diagrams, zero connection to the discovered pains. The prospect's architect enjoys it; the economic buyer never opens it; the deal stalls. Every section above must trace back to a pain with a number on it, or it's decoration.

🟡 **Mid-Level** — The design doc is where technical credibility and commercial strategy either merge or collide. This structure makes them merge.
