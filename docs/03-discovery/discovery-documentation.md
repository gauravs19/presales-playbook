#### 3.5.4 Documenting What You Heard vs. What They'll Deny

Discovery produces intelligence. But intelligence is worthless if it's not documented — because in enterprise sales, people forget what they said, change their priorities, and occasionally deny commitments they made verbally. The SE who relies on memory and verbal agreements will be burned. The SE who documents systematically will be protected.

This section isn't about distrust. It's about professional discipline. Documentation protects both you and the prospect by creating a shared record of what was discussed, agreed, and committed.

1. **Write discovery notes in the prospect's language, not yours.** When the prospect says "our pipeline breaks 3 times a week," document it as: "Prospect's Director of Data Engineering stated that their primary ETL pipeline experiences approximately 3 failures per week, each requiring 45 minutes of manual intervention by Senior Engineer [Name]. Total weekly remediation: approximately 2.25 hours." This level of specificity — who said it, when, and with what detail — makes the note admissible in any future discussion. Paraphrased notes ("pipeline is unreliable") are too vague to reference later.

2. **Send a discovery summary within 24 hours.** After every substantive discovery session, send a summary email to the champion and key participants. "Here's a summary of what we discussed. Please let me know if any of these points need correction." This accomplishes three things: it proves you listened (the prospect sees their words reflected back), it creates a written record (no one can deny what's documented in email), and it invites correction (if you misunderstood something, better to catch it now than during the POC).

3. **Log pain metrics with dates and sources.** In your CRM or deal notes, every quantified metric should include the date it was stated and the person who stated it. "March 12 — VP of Data Engineering: 'Approximately $500K annually in manual remediation costs.' March 14 — Director of Finance: 'Month-end close is delayed by 2 days, costing approximately $30K per occurrence.'" When the economic buyer challenges these numbers 3 months later — "I don't think we said $500K" — you can reference the specific date and speaker. Attribution is credibility.

4. **Document competitive intelligence carefully.** If the prospect mentions a competitor during discovery — "We're also looking at [Competitor]" or "Our current vendor charges us $X" — document it immediately with the date and context. This intelligence shapes your competitive strategy for the remainder of the deal. If you don't document it, you'll forget the specifics and lose a competitive advantage.

5. **Separate observed facts from your interpretations.** Your discovery notes should have two sections: **What was said** (objective, quoted where possible) and **My assessment** (your interpretation of what it means). "What was said: 'We're evaluating three vendors, and we need to decide by June.' My assessment: Timeline is real because it's driven by their contract expiration with the incumbent in July. The June deadline creates natural urgency." This separation ensures that your interpretation doesn't retroactively alter the record of what was actually stated.

> **War Story:** An SE ran a discovery call where the VP of Engineering said: "We need sub-second latency for our real-time dashboard — anything above 1 second is unacceptable." The SE documented this in her CRM with the date and the VP's name. Three months later, during POC evaluation, the prospect's test results showed 1.8-second latency for a specific query. The VP said: "That's fine — latency isn't our primary concern." The SE referenced her discovery notes: "In our March 12 call, you mentioned that sub-second latency was a hard requirement. Has that changed, or should we optimise this test further?" The VP paused, then said: "You're right — let us re-run the test with the optimised configuration." The SE's documentation protected the evaluation criteria from being silently relaxed — which would have made it easier for the competitor (who had worse latency) to pass the same test unchallenged.

> **Failure Mode:** The SE who mentors like a good listener but documents like a poor note-taker. They leave discovery calls with strong impressions and weak records. Two weeks later, they can't remember whether the prospect said the budget was $200K or $250K, whether the timeline was Q3 or Q4, or whether the pain metric was $500K or $50K. Their deal strategy is built on hazy recollections instead of precise records.

**Interview Angle:**
"How do you document and manage the information gathered during discovery?"
A strong answer describes a systematic documentation process (CRM logging with attribution, post-discovery summaries, fact/interpretation separation). A weak answer says "I take notes and update the CRM."

**Practical Reference: The Discovery Note Format**

```
Discovery Call — [Company Name] — [Date]
Attendees: [Names and titles]

WHAT WAS SAID:
- [Person, Title]: "[Direct quote or close paraphrase]"
- [Person, Title]: "[Direct quote or close paraphrase]"

KEY METRICS STATED:
- Pipeline failures: ~3/week, 45 min remediation each (per [Name], [Date])
- Annual remediation cost: "approximately $500K" (per [Name], [Date])
- Decision timeline: "by end of June" driven by [reason] (per [Name])

MY ASSESSMENT:
- Pain is real and quantified
- Champion is strong but needs executive sponsor engagement
- Competitive risk: [Competitor] is also in evaluation
- Key risk: InfoSec review hasn't started; could delay timeline

NEXT STEPS:
- [Action] — Owner: [Name] — Due: [Date]
```

🟡 **Mid-Level** — "What gets documented gets remembered. What doesn't get documented gets denied." Write it down. Every time.

---
