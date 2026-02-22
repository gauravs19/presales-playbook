#### 2.3.4 The Pre-Mortem

Post-mortems happen after a deal dies. Pre-mortems happen while the deal is still alive — and they're dramatically more useful because you can still change the outcome.

A pre-mortem is a structured exercise where you and your team (AE, SE manager, supporting SEs) imagine that the deal has just been lost, and then work backwards to identify the most likely cause of death. It's a pessimist's exercise designed for optimists — an intentional stress test of your assumptions.

1. **When to run a pre-mortem.** Run a pre-mortem at three points: before committing to a POC (to validate the investment), immediately after a significant stakeholder change (new champion, new competitor, new budget situation), and when you feel uncomfortably confident about a deal. The last trigger is the most important — when everything seems to be going perfectly, you're most likely to miss the risk that kills you.

2. **The pre-mortem question.** Gather the team and say: "Imagine it's 90 days from now, and we've just lost this deal. What went wrong?" Then generate answers — not politely, not diplomatically, but honestly. Common pre-mortem findings:
   - "We never had access to the economic buyer. Our champion couldn't sell internally."
   - "The competitor had an on-premise deployment model we couldn't match."
   - "The prospect's budget was reallocated to a higher-priority project."
   - "Our POC success criteria were too easy — we declared a technical win but the prospect wasn't truly convinced."
   - "Procurement took 6 months and executive sponsorship evaporated during the wait."

3. **Convert findings into actions.** Each pre-mortem finding should produce an action: "We never had access to the economic buyer" → "Schedule an executive briefing within 2 weeks, or downgrade the deal forecast." "Procurement could take 6 months" → "Send security documentation this week and start parallel-tracking procurement." The pre-mortem isn't valuable because of the risks it identifies. It's valuable because of the actions it forces.

4. **Separate likely risks from unlikely risks.** Not every pre-mortem finding is equally dangerous. A budget reallocation is a systemic risk you can't control. A missing executive sponsor is a relationship risk you can address. Prioritise the risks you can influence and monitor the risks you can't. Don't spend 80% of your energy on a risk that has a 5% probability.

5. **Repeat the pre-mortem after every major milestone.** The risks at the POC stage are different from the risks at the procurement stage. A pre-mortem run at the start of the deal might identify "poor technical fit" as the top risk. A pre-mortem run after a successful POC might identify "champion fatigue" or "procurement bottleneck" as the new top risk. The risk landscape evolves. Your pre-mortem should evolve with it.

> **War Story:** An SE team was running a $1.2M deal that felt like a sure thing. The POC was successful. The champion was enthusiastic. The AE had committed it for Q4 close. The SE manager required a pre-mortem as standard process. Finding: "The prospect's CTO has never attended a meeting and has never been briefed on the evaluation. If the CTO doesn't see the results, the deal will die in the executive approval stage." Action: the SE proposed an executive architecture briefing to the CTO. The briefing revealed that the CTO had concerns about data sovereignty that had never been raised — because nobody had talked to him. The SE addressed the concern with a regional deployment architecture. The deal closed in Q4. Without the pre-mortem, the CTO's objection would have surfaced in procurement — and killed the deal with no time to recover.

> **Failure Mode:** The SE who skips the pre-mortem because "the deal feels solid" or "we don't have time for pessimistic exercises." These are the deals that produce the most painful surprises at close. Confidence without stress-testing is complacency. The most experienced SEs are the most paranoid about their best deals — because they've lost enough "sure things" to know that certainty is an illusion.

**Interview Angle:**
"How do you identify risks in a deal that seem to be going well?"
A strong answer describes a systematic approach (pre-mortem, risk register, stakeholder gap analysis) and provides an example of a risk caught early. A weak answer says "I trust my instincts."

**Practical Reference: The Pre-Mortem Template**

| "We lost this deal because..." | Likelihood (H/M/L) | Impact (H/M/L) | Preventive Action | Owner | Due Date |
|-------------------------------|--------------------|-----------------|--------------------|-------|----------|
| No access to economic buyer | H | H | Schedule executive briefing | SE + AE | This week |
| Competitor has on-prem advantage | M | H | Position hybrid deployment roadmap | SE | Before next meeting |
| Champion fatigue / loss | M | H | Multi-thread: cultivate 2 additional contacts | SE | Within 2 weeks |
| Procurement delays past Q4 | H | M | Send security docs; create MAP | SE | This week |
| Product gap in area X | L | H | Confirm with product; prepare roadmap response | SE | Before POC |

**Run this exercise for every deal in your top 3. Spend 20 minutes. Save weeks.**

🟡 **Mid-Level** — The pre-mortem is the highest-ROI 20 minutes you can invest in any deal. It costs nothing, it reveals everything, and it separates the strategically disciplined SE from the reactive one.

---
