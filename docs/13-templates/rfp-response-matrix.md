#### 13.6.2 RFP Response Matrix

<div class="template-meta">
  <span class="stage-badge st-commercial">Stage 06 · Commercial</span>
</div>

Most RFP losses happen at the decision to respond, not in the response. This two-part matrix forces the triage decision first, then structures the response so every answer is strategic rather than reflexive. It operationalises [Scoring an RFP's Real Win Probability](docs/07-commercial-influence/rfp-win-probability.md), [Deciding When to Refuse an RFP](docs/07-commercial-influence/when-to-refuse-rfp.md), [Answering Yes Strategically](docs/07-commercial-influence/strategic-yes.md), and the [RFP Response Triage Template](docs/07-commercial-influence/rfp-triage-template.md).

| | |
|---|---|
| **When to use** | Part A within 48 hours of RFP receipt; Part B only if Part A says respond |
| **Owner** | SE (technical scoring) + AE (relationship scoring) |
| **Time to complete** | Part A: ~25 minutes · Part B: ongoing through the response |
| **Output goes to** | Bid/no-bid decision meeting; then the proposal team |

---

## The Template

```markdown
# RFP Response Matrix — [Account] / [RFP title] · Due: [date]

## PART A — Triage (before anyone writes a word)

### A1. Fingerprint Check — who wrote this RFP?
| Signal | Finding |
|--------|---------|
| Requirements that read like a competitor's datasheet | [quote them] |
| Did WE have contact before release? Did someone else? | |
| Is the incumbent bidding? | |
| Weighting favors [price / capability / relationship]? | |

### A2. Win Probability Score (1–5 each)
| Factor | Weight | Score | Weighted |
|--------|-------:|------:|---------:|
| Pre-RFP relationship with buyer | 3 | | |
| Requirements fit without roadmap promises | 3 | | |
| We (or nobody) shaped the spec | 2 | | |
| Access to clarify questions with real stakeholders | 2 | | |
| Deal economics vs. cost of response | 1 | | |
| Reference strength in their industry | 1 | | |
| **Total (max 60)** | | | **/60** |

### A3. Verdict
- **≥ 42:** Respond, full effort. → Part B
- **30–41:** Respond ONLY with conditions (e.g., granted a clarification call, scope carve-out). Conditions: ______
- **< 30:** Decline with a relationship-preserving letter, or submit a deliberately scoped alternative. **A 10% win probability does not justify 100 hours of response effort.**

## PART B — Response Tracker
| # | Requirement | Compliance (Full / Config / Partner / Roadmap / No) | Response owner | Strategic-yes language | Proof attached | Risk if oversold |
|---|-------------|------------------------------------------------------|----------------|------------------------|----------------|------------------|
| 1 | | | | | | |

### Compliance language patterns
- **Full:** "Supported natively. [One-line differentiator + proof point.]"
- **Config:** "Achieved via [mechanism], typically configured in [timeframe]." *(Never plain "yes.")*
- **Partner:** "Delivered with certified partner [X], under single-contract accountability."
- **Roadmap:** "Planned for [quarter]. We commit contractually to [what's true today]." *(Legal reviews every one of these.)*
- **No:** "Not supported. The underlying need — [restate it] — is addressed by [alternative]." *(A credible no inoculates every yes.)*

### Response health (update weekly)
Full: __ % · Config: __ % · Partner: __ % · Roadmap: __ % · No: __ %
**> 15% Roadmap + No combined → escalate bid decision before sinking more hours.**
```

---

## How to Fill It In

1. **Part A is a gate, not a formality.** If you've never scored below 42, you're not triaging — you're rubber-stamping. The RFPs you decline fund the effort on the ones you can win.
2. **The fingerprint check changes everything.** An RFP written around a competitor's spec sheet is *their* deal with your name on the distribution list. Respond only to reposition — a scoped alternative that reframes the evaluation — or don't respond at all.
3. **Ban the naked "yes."** Every "yes" in Part B carries a mechanism, a timeframe, or a proof point. Unqualified yeses compound into an implementation gap that delivery inherits and your reputation pays for.
4. **Track the No percentage with pride.** A response that's 95% "Full" reads as either a miracle or a lie, and evaluators assume the latter. Honest No's — with alternatives — are what make your yeses believable.

> **Failure Mode:** The 100-hour response to a ghost-written RFP because "we can't afford to lose this logo." You didn't lose it during your response — you lost it six months earlier when the competitor [wrote the spec](docs/07-commercial-influence/ghost-writing-specs.md). The matrix exists to convert that sunk-cost reflex into a scored, defensible bid decision with names attached.

🟡 **Mid-Level** — The best RFP response is often the one you didn't write. The second best is one where every yes was strategic.
