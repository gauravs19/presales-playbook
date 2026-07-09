# RFP Automation — Loopio, Seismic & Responsive

RFP response platforms — Loopio, Responsive (née RFPIO), Seismic and their peers — maintain a library of approved answers and assemble first-draft responses against incoming questionnaires. For teams facing hundreds of RFPs and security questionnaires a year, they convert a soul-destroying copy-paste marathon into library curation plus review.

Used well, they buy back the one resource that wins RFPs: senior attention for the twenty questions that actually differentiate. Used badly, they industrialize mediocrity — perfectly formatted, factually current, strategically inert responses that read exactly like what they are.

---

## What the Machine Does Well

- **The commodity 60–70%.** Company facts, certifications, hosting details, standard security posture, support tiers — questions with one true answer that changes rarely. Automate ruthlessly; there is zero glory in hand-typing your SOC 2 status for the ninetieth time. This is the same corpus that powers [security questionnaire pre-population](docs/10-tools/security-questionnaire-automation.md).
- **Version truth.** One approved answer per fact, owned, dated, reviewed on schedule — the platform is the single source that prevents the year-old data-residency answer from resurfacing in a live bid.
- **Assembly and audit.** Who answered what, which SME signed off, what shipped in which bid. When a delivered response gets challenged during contracting, the trail matters.

## What Must Stay Human

The [triage decision](docs/13-templates/rfp-response-matrix.md) — *should we respond at all* — comes before any tool touches the document. No platform scores [win probability](docs/07-commercial-influence/rfp-win-probability.md), detects a [ghost-written spec](docs/07-commercial-influence/ghost-writing-specs.md), or tells you the incumbent has it locked. Automating the response to an unwinnable RFP just loses faster and cheaper.

Then, within a bid you've chosen to fight, split the questions:

| Question type | Handling |
|---|---|
| Commodity fact | Library, auto-filled, spot-checked |
| Capability with nuance ("describe how your platform handles X") | Library *skeleton*, rewritten against this prospect's discovered pain and vocabulary |
| Differentiator territory — the 15–20 questions where the evaluation is actually decided | Hand-written, [strategic-yes language](docs/07-commercial-influence/strategic-yes.md), proof points attached, senior review |
| The trap questions (written around a competitor's strengths) | Hand-written reframes; the library answer walks straight into the trap |

The tell of an automated response is uniformity: every answer the same length, the same register, the same absence of the prospect's own language. Evaluators who read forty of these a year clock it in minutes — and read it, correctly, as a statement of how much you wanted this deal.

## Library Hygiene Is the Whole Game

An answer library is a garden that becomes a landfill without tending: stale answers outliving product changes, four near-duplicate variants of the same question, dead certifications cited proudly. Minimum viable discipline — a named owner per content domain, a quarterly review cycle pinned to release cadence, dedup on ingest, and a hard rule that *lost-deal answers get autopsied*: when an RFP response loses on a question you answered from the library, [that finding flows back](docs/11-metrics/deal-autopsy.md) into the library as a rewrite, or the same answer loses again next quarter.

> **War Story:** A security questionnaire response assembled entirely from a well-maintained library cost a vendor a seven-figure deal over a single stale sentence: the encryption-key-management answer, approved fourteen months earlier, described the *previous* architecture — accurate then, wrong now, and materially weaker than what the product actually did. The prospect's security team caught the discrepancy against the live documentation and concluded the vendor either didn't know its own product or didn't read its own responses. Neither interpretation survived procurement. The fix that followed was cheap and permanent: every library answer got an owner and an expiry date, and any answer past expiry blocked assembly until re-verified. The library had never been wrong before — it had just never been wrong in front of money.

> **Failure Mode:** The team that measures the tool by throughput — "we responded to 40% more RFPs this quarter!" — and celebrates automating the wrong decision. Response capacity is not the constraint that wins bids; [selectivity is](docs/07-commercial-influence/when-to-refuse-rfp.md). If automation's dividend is spent responding to more low-probability RFPs instead of going deeper on fewer good ones, the tool has made the win rate *worse* while the activity metrics glow. The correct dividend of RFP automation is measured in senior hours redeployed to differentiator questions, not in responses shipped.

**Interview Angle:**
"Walk me through how you'd handle a 300-question RFP due in two weeks."
Strong answers start with triage (respond at all? on what conditions?), then a split: automate the commodity layer, hand-craft the differentiators, senior review on the trap questions. Weak answers start with effort allocation ("divide the questions among the team") — mechanics without strategy, which is exactly the response that loses.

🟡 **Mid-Level** — RFP automation buys back hours. The bid is won or lost by where you choose to spend them.

---
