# Translating Technical Risk Into Business Risk

Executives do not act on technical risk. Not because they don't understand it — because it isn't denominated in a currency they trade in. "The current architecture has a single point of failure" is a fact. "One hardware fault takes order processing down for a business day during peak season" is a decision trigger. Same risk, different currency.

The senior SE's most valuable translation skill is converting system properties into the three currencies executives actually manage: **money, time, and career exposure.**

---

## The Translation Formula

Every technical risk translates through the same chain:

> **Technical condition → operational consequence → business impact → personal exposure**

| Technical condition | Operational consequence | Business impact | Who owns the exposure |
|---|---|---|---|
| No failover on the message broker | Order flow halts on any broker fault | ~$400K revenue/hour at peak, SLA penalties | COO (operations), CFO (penalties) |
| Auth built on a deprecated library | Patch gap grows each quarter | Breach likelihood compounds; audit finding | CISO (breach), CIO (audit) |
| Batch window at 96% capacity | Any growth breaks nightly settlement | Blocks the expansion the board approved | CEO/CFO (the growth commitment) |

Walk the chain out loud and *stop at the column your audience owns.* A CISO needs the audit-finding column; taking them further insults them. A CFO needs the number; the library version is noise.

## Ranges Beat Precision

When you quantify, use defensible ranges from their own inputs: "somewhere between $2M and $3.5M a year, based on the incident rate your team reported." False precision — "$2,347,000 of annual risk" — triggers skepticism and invites an audit of your arithmetic instead of a decision about the risk. A range says: *the exact number doesn't matter, because every point in the range justifies acting.*

## The Credibility Rule

Translate only risks you can evidence from *their* environment — their incident history, their capacity data, their audit findings. The moment you import a scary industry statistic ("60% of companies that suffer X fail within..."), you've switched genres from advisor to fear-marketer, and executives have seen that movie too many times to stay in the theater.

> **War Story:** An SE spent three meetings warning a prospect's engineering leadership about their fragile ETL chain. Nods, agreement, no movement. Before the CFO meeting, the SE rebuilt one slide: the ETL chain had failed 14 times in the prior year (their number, from discovery), each failure delayed financial close by a day, and two had pushed statutory reporting inside the penalty window. The slide's title was "Fourteen near-misses on your reporting deadline." The CFO funded the remediation in that meeting — then asked why nobody had told him sooner. Somebody had. In the wrong currency.

> **Failure Mode:** The SE who translates *every* technical detail into apocalyptic business risk. When three risks all "threaten the business's survival," executives correctly conclude the SE is selling fear, and discount all three. Translation is triage: pick the one or two risks with real business consequence, size them honestly, and let the small stuff stay small. Credibility is what makes the big number land.

**Interview Angle:**
"A prospect's CTO understands the technical debt but can't get budget. How do you help?"
A strong answer re-denominates the debt in the CFO's currency using the prospect's own incident and cost data, and equips the CTO to make that case — making the CTO the hero, not the SE. A weak answer is "I'd present the architecture risks in more detail."

🔵 **Senior** — Risk that isn't translated into money, time, or career exposure isn't risk to an executive. It's trivia.

---
