# Forcing Prospect Accountability

The default dynamic of a POC is lopsided: the SE does 90% of the work, and the prospect watches. This dynamic must be inverted.

If the prospect's team is not actively participating in the evaluation—loading their own data, running their own test scenarios, and recording their own results—they do not have ownership of the outcome. When the POC ends, they will say: "Your team ran the test. We need to see if it works with our team driving it." And you have just earned yourself a second free POC.

---

## The Accountability Framework

### 1. Assign Named Owners on the Prospect Side
Before the POC begins, the criteria document must include named individuals from the prospect's team responsible for specific tasks:

| Task | Prospect Owner | Due Date |
|---|---|---|
| Provision staging database access | DBA (John Smith) | Day 1 |
| Load sample production data | Data Engineer (Sarah Lee) | Day 2 |
| Run SSO login test with 3 users | IT Admin (Mike Chen) | Day 5 |
| Execute load test scenario | DevOps Lead (Priya Patel) | Day 10 |
| Record results in scorecard | Technical Evaluator (CTO) | Day 14 |

### 2. Make Them Drive the Demo
During the POC, do not perform every action yourself. After you demonstrate a capability once, ask the prospect's team to execute it themselves.

> *"I've just shown you how to configure the data pipeline. Now, Sarah, can you set up the second pipeline using your own dataset? I'll observe and answer any questions."*

When the prospect's team operates the platform themselves, they build muscle memory and confidence. When it comes time to present results to their VP, they can say: "We tested it ourselves and it works"—which is infinitely more powerful than "The vendor's SE showed us a demo."

### 3. Enforce Deadlines
If the prospect misses a deadline (e.g., they were supposed to provide staging database access by Day 1 and it's now Day 4), do not silently accommodate the delay.

> *"I want to flag that the staging database access was due on Monday per our agreed timeline. We're now at Thursday, which compresses our remaining evaluation window. Can you escalate this internally today so we can stay on track for our Day 14 conclusion?"*

You are holding them accountable to their own commitments. This is not aggressive—it is project management.

> **War Story:** An SE ran a 21-day POC where the prospect's team never logged into the sandbox after Day 2. The SE loaded all the data, ran all the tests, built all the dashboards, and presented the results. The POC was a technical success. When the AE asked for next steps, the prospect said: "The results look good, but our team hasn't actually used it yet. Can we extend the POC by 30 days so our people can get hands-on?" The SE had enabled the prospect's passivity by doing everything for them.

> **Failure Mode:** "The One-Man-Show SE." This SE is so skilled and so fast that they run the entire POC themselves without involving the prospect's team. The evaluation is technically flawless, but the prospect has zero emotional investment in the outcome because they didn't participate. They feel no ownership, no urgency, and no commitment to buy.

**Interview Angle:**
"How do you ensure the prospect is actively engaged during a POC?"
A strong answer is: "I assign named owners from the prospect's team to specific tasks in the evaluation criteria document. After demonstrating a capability once, I ask their team to execute it independently. If they miss a deadline, I flag it immediately and request escalation. This ensures the prospect owns the outcome—so when they present results to their executive, they can say 'we tested it ourselves,' which is far more persuasive than 'the vendor showed us.'"

🟡 **Mid-Level** — If the prospect doesn't sweat during the POC, they don't own the result. Make them work.

---
