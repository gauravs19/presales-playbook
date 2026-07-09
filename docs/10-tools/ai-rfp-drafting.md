# AI-Assisted RFP Drafting

If [RFP automation platforms](docs/10-tools/rfp-automation-tools.md) industrialized answer *retrieval*, LLMs industrialized answer *composition* — drafting responses in your company's voice, adapting a canonical answer to this prospect's terminology, and turning a bullet-point capability list into flowing prose at zero marginal cost. Teams now routinely draft 80% of an RFP response in a day.

Which moves the bottleneck — and the differentiation — entirely to judgment. When every vendor's response is fluently written, fluent writing is worth nothing. What wins is what was always underneath: [choosing the right bids](docs/13-templates/rfp-response-matrix.md), knowing which twenty questions decide the evaluation, and saying true things a competitor can't say. AI amplifies a good RFP strategy and *launders* a bad one into professional-looking failure.

---

## Where AI Genuinely Helps

1. **Adaptation, not invention.** The highest-value prompt pattern takes your *verified* canonical answer plus this deal's context: "Rewrite this approved answer for a hospital-network audience; use their term 'clinical systems' instead of 'core applications'; keep every factual claim identical; 150 words." Facts stay anchored; the register personalizes. This is the safe zone — the model is styling truth, not generating claims.
2. **First-draft prose from SME bullets.** Your security engineer gives you six bullets; the model gives you the paragraph; the engineer approves the paragraph. Twenty minutes of expert time becomes five, and the expert stays the author of record.
3. **Compliance-language hygiene.** "Flag any sentence in this response that overpromises, commits to dates, or uses absolute terms like 'always/never/guaranteed'" — an LLM is a tireless reviewer of exactly the language that [legal will red-line](docs/07-commercial-influence/technical-writing-for-procurement.md) or that will haunt the contract.
4. **Reading the RFP itself.** Feed the document (policy permitting) and extract: scoring weights, mandatory versus scored requirements, [fingerprints of a competitor's authorship](docs/07-commercial-influence/ghost-writing-specs.md), internally contradictory requirements worth a clarification question. Ten minutes of extraction that used to be an afternoon of highlighting.

## The Rules That Keep It Safe

- **The model never states a capability.** It rephrases capabilities *you gave it*. Every factual claim in the output must trace to an approved source — the canonical library, the SME's bullets, the [design doc](docs/13-templates/solution-design-document.md). An LLM asked "how does our product handle X?" will answer, fluently, whether or not it knows — and an RFP is [a representation with contract gravity](docs/10-tools/security-questionnaire-automation.md).
- **Differentiator questions get human authorship.** The 15–20 questions where the bid is won deserve your best thinking, [strategic-yes structure](docs/07-commercial-influence/strategic-yes.md), and deal-specific proof. Draft them by hand; let AI *edit* for clarity, never originate.
- **De-slop the voice.** Unedited LLM prose has a recognizable perfume — "seamlessly leverages," "robust and scalable," symmetrical paragraph triads — and evaluators reading forty responses have learned the scent. Edit toward your company's actual voice, keep the occasional short blunt sentence, cut every adjective that isn't doing work.
- **Confidentiality gates.** The RFP document and your response both carry NDA weight. Sanctioned tools only, per your company's AI policy — a leaked-training-data story involving a prospect's RFP is a category of incident no win rate survives.

## The Strategic Trap Nobody Prices

AI collapsed the *cost* of responding — which quietly destroys the discipline that scarcity used to enforce. When a response cost 100 hours, [bid/no-bid decisions](docs/07-commercial-influence/when-to-refuse-rfp.md) were forced; at 15 hours, "why not respond to everything?" feels rational. It isn't: your win rate on poorly-qualified RFPs didn't improve because drafting got cheap — you've just automated the production of polished losses, and every one still consumes review cycles, SME attention, and pipeline credibility. Hold the triage gate *harder* now that the slope below it is frictionless.

> **War Story:** A mid-market vendor's bid team, newly LLM-equipped, hit a 40-question technical RFP with a 5-day deadline — previously a decline-by-default scenario. The play: the SE spent day one entirely on triage and strategy (win probability: decent; two differentiator questions identified; one trap question written around the incumbent's architecture). Days two and three: canonical answers adapted by AI, SME bullets converted to prose, everything routed through review. Day four: the SE hand-wrote the two differentiators and the trap-question reframe, then ran the overpromise-flagging prompt across the full document — it caught a generated sentence claiming "zero-downtime upgrades in all configurations," which was true in *most*. They shipped on day five and made the shortlist; the eval feedback specifically cited the honesty of a caveated answer the flagging pass had produced. The AI wrote most of the words. The five that mattered — "in most configurations, except..." — were the review's.

> **Failure Mode:** The full-auto response. RFP in, PDF out, nobody with product knowledge read page 30 — where the model, pattern-matching from marketing material, confidently described a federation capability the product doesn't have. The prospect shortlists them *because* of page 30, discovers the truth in the demo, and the meeting's tone shifts from evaluation to cross-examination of everything else the document said. An AI-drafted overclaim isn't a typo; it's a seed planted at the exact depth where it germinates during the live evaluation. Speed you didn't spend on review wasn't saved — it was borrowed, at demo-day interest rates.

**Interview Angle:**
"How do you use AI in RFP responses, and where do you draw the line?"
Strong answers describe adaptation-not-invention, human authorship of differentiators, systematic overclaim review, and *tightened* bid discipline. Weak answers celebrate throughput ("we respond to 3× more RFPs now") — the metric that goes up when judgment goes down.

🟡 **Mid-Level** — AI made every vendor's RFP response readable. Yours has to be true, chosen, and aimed — and those three stayed manual.

---
