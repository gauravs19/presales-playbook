# Herding Resistant IT Architects

Every enterprise deal above a certain size acquires a review board of prospect-side architects — and at least one of them will treat your platform as a personal affront. Their resistance is rarely irrational: architects are institutionally rewarded for finding failure modes, they've been burned by vendor promises before, and your arrival implies a decision they may not have been consulted on. You are, structurally, an argument that their current architecture is insufficient. Expect antibodies.

The goal is not to defeat the resistant architect. It's to convert their scrutiny from a deal-blocking force into the deal's certification authority.

---

## Why Architects Resist (Pick the Right Diagnosis)

| Pattern | Underlying driver | What works |
|---|---|---|
| Endless edge-case hunting | Professional identity: rigor is the job | Give them a real edge case to break; ask for their failure analysis |
| "We could build this ourselves" | Authorship pride | Position them as the architect *of the integration*, not the audience |
| Standards objections (naming, patterns, tooling) | Control of their domain | Adopt their conventions visibly in your design |
| Silent arms-crossed hostility | Excluded from the decision | Private session; ask their assessment before presenting yours |

The fatal error is treating all four the same way — usually with more feature evidence, which addresses none of them.

## The Conversion Playbook

1. **Meet them without an audience.** Resistance performs for a room. A one-on-one working session — no AE, no slides, whiteboard only — removes the audience and usually removes half the performance. Open with their design, not yours: "Walk me through how you'd solve this today."
2. **Hand them the knife.** Ask the resistant architect to *try to break* your design: "You know this environment better than I do — where does this fall over?" This is not a trick; mean it. Every objection surfaced in a working session is one that won't ambush your executive briefing, and an architect whose criticisms visibly shaped the design has co-authored it.
3. **Concede something real.** Your platform has genuine weaknesses. Naming one before they find it — "our async story is weaker than our sync story; here's how we'd mitigate in your environment" — flips the dynamic from cross-examination to peer review. [A credible no inoculates every yes](docs/07-commercial-influence/strategic-yes.md).
4. **Put their fingerprints on the artifact.** The [solution design document](docs/13-templates/solution-design-document.md) has a decision log. Architect-suggested alternatives go in it, by name, including the ones adopted. When that document reaches the CTO, its most skeptical reviewer is now listed among its authors.

## Know When It Isn't Convertible

If objections regenerate no matter what you resolve, the resistance may not be architectural at all — it may be [job protection](docs/09-executive-selling/protecting-team-jobs-objection.md) or a competing loyalty (an incumbent relationship, a preferred alternative). Diagnose before spending another month on technical persuasion that was never the currency.

> **War Story:** A principal architect at a logistics prospect opened every vendor session with a printed list of failure scenarios and worked through them like a prosecutor. Two competitors responded with defensive feature answers; both were eliminated on his recommendation. The third vendor's SE responded to scenario one with: "That one would genuinely hurt us — here's the blast radius and the mitigation. Can we go through your list together? You've done half my risk assessment for me." Three hours later the architect had rewritten two of the mitigations himself. His evaluation memo — the same memo format that killed the other vendors — recommended the platform, *with his mitigations attached.* The scrutiny was never the obstacle. It was the certification process, waiting for a vendor willing to submit to it.

> **Failure Mode:** The SE who wins the architect debate. Sharper arguments, better data, visible victory in the review meeting — and a technical stakeholder who now needs the platform to fail in production to be right. Enterprise deals are not debate club. Every argument you win at a stakeholder's public expense converts into resistance you'll meet again during implementation, renewal, or reference calls.

**Interview Angle:**
"Describe a time a customer architect actively opposed your solution. What did you do?"
A strong answer shows diagnosis of *why*, a deliberate conversion move (working session, co-authorship, honest concession), and an outcome where the skeptic became the validator. A weak answer is a story about being right harder until the customer gave in.

🔵 **Senior** — A resistant architect is unpaid red-teaming with a signature that matters. Convert the scrutiny; don't survive it.

---
