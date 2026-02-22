#### 3.5.1 Translating "It's Slow" Into Dollar Metrics

"It's slow." Two words that every SE hears in every discovery call. And two words that, by themselves, are commercially useless because they don't motivate budget approval. No CFO has ever signed a purchase order because a pipeline was "slow." CFOs sign purchase orders because slowness costs money — and your job is to quantify exactly how much.

The translation from technical symptom to dollar metric is the most commercially valuable skill an SE possesses.

1. **Trace the impact chain.** "It's slow" → "How slow?" → "The batch job takes 9 hours instead of 4" → "What happens because it takes 9 hours?" → "The finance team doesn't get their reports until 11 AM" → "What does a delayed report cost?" → "They can't start variance analysis until afternoon, which pushes month-end close by 2 days" → "What does a 2-day delayed close cost?" → "Two extra days of accounting resources — $12K per occurrence — and we close monthly, so that's $144K per year."

   You started with "it's slow." You ended with "$144K per year." Same problem. Completely different urgency.

2. **Use the "hourly cost" method for engineering time.** If the prospect's engineering team spends 20 hours per week on manual data remediation, calculate: 20 hours × $100/hour (fully loaded cost of an engineer) × 50 weeks = $100K/year. This is a conservative, defensible calculation that nobody can argue with. If the prospect pushes back — "Our engineers don't cost $100/hour" — let them provide their number. Any number they provide is still a quantified cost that didn't exist before you asked.

3. **Calculate the opportunity cost.** "If your 3 data engineers weren't spending 20 hours per week on manual remediation, what would they be doing?" Answer: "Building the real-time analytics platform our CEO asked for 6 months ago." So the cost isn't just $100K in engineering time — it's 6 months of delayed strategic initiative because the engineers are stuck on maintenance. Opportunity cost is often 5–10x larger than direct cost but rarely quantified. Quantify it.

4. **Use anchor metrics from similar companies.** If the prospect can't quantify their own pain, offer an anchor: "In companies similar to yours that we've worked with, the average cost of manual data remediation is $150K–$250K per year, and the average month-end close delay costs $50K–$100K per occurrence. Do those numbers feel directionally accurate for your situation?" Anchoring with external data gives the prospect a reference point that makes their own situation easier to quantify.

5. **Build the cost summary on one page.** After quantification, create a single-page "Cost of Current State" document:

| Pain Point | Frequency | Hours/Cost Per Occurrence | Annual Cost |
|-----------|-----------|--------------------------|-------------|
| Manual data remediation | 20 hrs/week | $100/hr | $100,000 |
| Delayed month-end close | 12x/year | $12,000 | $144,000 |
| Delayed strategic project | Ongoing | 3 FTE diverted | $300,000 opportunity cost |
| Data quality incidents | 4x/quarter | $15,000 (investigation + remediation) | $60,000 |
| **Total annual cost of current state** | | | **$604,000** |

This document becomes the business case foundation. The champion sends it to the CFO. The CFO sees a $604K annual problem and compares it to your $200K solution. The ROI case writes itself.

> **War Story:** A prospect told an SE: "Our Kafka cluster is slow." The SE could have said "our platform is faster" and moved to a demo. Instead, she spent 15 minutes on pain quantification. The "slow" Kafka cluster was causing: 4 hours of delayed delivery data daily (costing $45K/month in missed SLA penalties), 2 FTEs dedicated to monitoring and restarting failed consumers ($200K/year), and a 3-month delay on a real-time pricing project that the CEO had prioritised ($500K estimated revenue impact). Total annual cost: $1.24M. The software license was $180K/year. The ROI was 7:1 in year one. The CFO approved the purchase in a single meeting because the SE had done the math that nobody internally had done.

> **Failure Mode:** The SE who presents technical metrics without commercial translation. "We can reduce your batch processing time from 9 hours to 45 minutes." That's impressive technically. Commercially, it's meaningless — the CFO doesn't know what a batch processing window is, or why 45 minutes is better than 9 hours. Translate: "Reducing batch processing from 9 hours to 45 minutes means your finance team has accurate reports by 7 AM instead of 11 AM, which eliminates the 2-day month-end close delay and saves $144K annually." Same fact. Commercial language.

**Interview Angle:**
"How do you quantify the value of your solution for a prospect?"
A strong answer walks through a specific quantification example with the impact chain, dollar calculations, and the deliverable. A weak answer says "I explain the technical benefits."

🟡 **Mid-Level** — Pain quantification is the bridge between technical discovery and commercial justification. If you can't build this bridge, your technical wins won't convert to revenue.

---
