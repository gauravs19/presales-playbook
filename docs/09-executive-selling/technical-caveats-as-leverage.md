# Using Technical Caveats as Price Leverage

By the time a deal reaches commercial negotiation, the AE is negotiating with the currency AEs have: price. Every procurement counter gets answered with margin, because margin is the only lever on the AE's side of the table. But there's a second inventory of negotiable value in every enterprise deal, and it lives in the SE's head: the technical caveats — the scope boundaries, delivery conditions, environmental assumptions, and effort estimates that were established during the evaluation.

Used well, these caveats let the deal flex on *scope and conditions* instead of price. The SE who articulates them precisely hands the AE trading material that protects margin. The SE who leaves them vague hands procurement a discount justification.

---

## What a Caveat Is Worth

Every technical caveat you documented during the cycle is a priced object, whether or not anyone has priced it:

| Caveat established during evaluation | Its trading value in negotiation |
|---|---|
| "Solution assumes SAML SSO; custom auth adds ~3 weeks" | Waive-able if they standardize first → their effort traded against price |
| "POC validated 2 integrations; production has 5" | The other 3 are scope — phase them, price them, or trade them |
| "Migration effort assumes cleansed data per the assumptions register" | Data prep can move to their team → real cost off your services number |
| "Premium environment needed for the SLA they asked for" | SLA tier is negotiable currency, not a default |

The pattern: **when procurement pushes on price, the counter is a scope-shaped question, not a smaller number.** "We can meet that number — here's what comes out to get there. Which of these matters least to you?" Now the prospect is negotiating against their own requirements instead of your margin.

## The SE's Role in the Room

You are not the negotiator — freelancing commercial concessions is how SEs destroy deals. Your role is to arm and to verify:

1. **Before negotiation, hand the AE the caveat inventory.** A one-page list from your [solution design's assumptions register](docs/13-templates/solution-design-document.md): every scope boundary, what it costs, what it could trade against. Do this *proactively* — the AE doesn't know what's in your head.
2. **In the room, price the technical asks.** When the prospect says "and of course that includes the legacy adapter," your job is the calm, factual line: "That's outside what we validated — it's roughly four weeks of effort. We can scope it, but it's not in this number." You're not saying no; you're making free things cost something, which is what keeps the paid things paid.
3. **Verify the final scope matches the final price.** The last-minute discount that "keeps everything in" is how deals get delivered at a loss and how [delivery inherits a fiction](docs/13-templates/se-to-delivery-handoff.md). Before signature, re-read the SOW against the caveat list.

## Precision Is the Leverage

None of this works with vague caveats. "Integration might be complex" trades for nothing. "The Salesforce integration was validated; the SAP integration was not, and estimates at 4–6 weeks based on their IDoc customization" trades for real money. The discipline of writing caveats down *as they're discovered* — with effort estimates — is what converts evaluation knowledge into negotiation inventory.

> **War Story:** Procurement at a manufacturing prospect opened final negotiation with a demand for 22% off, citing a competitor's number. The AE's instinct was to counter at 12%. The SE had brought the caveat inventory: the prospect's requirement list included a custom protocol adapter (never validated, ~5 weeks), a premium SLA tier, and data migration for a plant that hadn't provided samples. The AE's actual counter: "We can get close to your number by phasing the adapter to next fiscal year and moving data prep to your team — or we hold this scope at 5% off. Your call." Procurement took the scope trade. Final margin impact: a third of the original demand, and the prospect *chose* it — because the negotiation had been converted from "how much will you discount" into "what is each requirement worth to you."

> **Failure Mode:** The SE who, in the pressure of a negotiation meeting, "helps" by volunteering that something is easy: "Oh, the adapter's not a big deal, we can include that." One sentence. It simultaneously gives away four weeks of services revenue, undercuts the AE's position mid-trade, and teaches procurement that the vendor's scope statements are soft everywhere else too. In negotiation rooms, the SE's superpower is that their statements about effort are believed — which is exactly why unpriced generosity is so expensive.

**Interview Angle:**
"How do you support commercial negotiations as a technical resource?"
A strong answer describes maintaining a priced inventory of scope boundaries and assumptions, arming the AE before the room, and holding effort estimates firm inside it. A weak answer is "I stay out of pricing," which confuses *not deciding* the price with *not defending* it.

🔵 **Senior** — Price is the AE's only lever. Scope is yours. A deal that can flex on scope doesn't have to bleed on margin.

---
