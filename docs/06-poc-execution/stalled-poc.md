#### 6.5.1 The POC That Stalls

No matter how flawlessly you structure a Proof of Concept—no matter how meticulously you define the Mutual Success Plan or ruthlessly enforce the daily stand-up—some evaluations will inevitably stall. 

You hand over the sandbox credentials, and the prospect’s testing champion simply stops responding to emails. The 14-day timeline expands into 21 days, then 45 days.

The Account Executive will panic. They will ask the SE to send "just checking in" emails. They will suggest begging the prospect to "jump on a quick 5-minute call."

This destroys your leverage and positioning.

A Master-Class SE recognizes that a stalled POC is rarely a technical issue; it is almost always a political or priority issue. 

**Diagnosing the Stall**
When a POC halts, the prospect is experiencing one of three failure modes:
1.  **The Champion Lost Political Capital:** Their boss just re-orged the department, and finding a new log-aggregation tool is no longer a Q3 priority. They do not have the heart to tell you they lost the budget.
2.  **The Competitor Distraction:** They are secretly running a parallel 30-day POC with your biggest competitor, and the competitor's SE just solved a massive workflow problem that your platform currently struggles with. They are ignoring you while they finalize the competitor's evaluation.
3.  **The Resource Black Hole:** The lead engineer tasked with testing your software just got pulled into a Sev-1 production outage that has consumed their last 80 hours. 

You must forcibly extract the truth.

**The "Close the Project" Email**
The most effective way to re-engage a stalled prospect is the "Takeaway." When someone stops responding to your requests for their time, you must threaten to take away the value you are providing.

*The Execution:*
After 3 unanswered check-ins, the SE does not send a 4th "Just bubbling this up!" email. The SE sends the explicit **Project Decommission Email**, CCing the prospect's Executive Sponsor and the AE:

<div class="email-template">

```text
Hi [Champion],

I hope you are having a great week. We have reached the 21-day mark of our originally scoped 14-day technical validation. As we haven't received telemetry data or feedback from your testing team since last Tuesday, it appears that this initiative has been deprioritized for Q3. 

To ensure we are not unnecessarily consuming your compute resources, we will be formally decommissioning the POC sandbox and securely wiping the test data this Friday at 5 PM EST. 

If the priority of this project shifts back to active status in the future, we would be thrilled to restart an evaluation. Let me know if you have any questions before Friday’s wipe.
```

</div>

**Why this works:**
If the prospect is truly "just busy," this email creates instant urgency. They will reply within 10 minutes begging you not to wipe the environment because they "just need one more week." You now have the leverage to enforce the daily stand-up (Section 6.3.1).

If the prospect ignores this email, the deal was already dead. You successfully identified a lost opportunity, closed the compute resources, and protected your SE's time from chasing a ghost. 

> **War Story:** An SE handed a prospect the keys to a $5,000/month high-compute machine learning sandbox. The prospect fell totally silent for 3 weeks. The AE was desperate and refused to let the SE manually shut it down because the deal was $800k. The SE bypassed the AE and unilaterally emailed the CTO: "We assume the evaluation is complete given the lack of platform activity. We are spinning down your cluster tomorrow." The CTO called the AE 4 minutes later, profusely apologizing. He admitted his lead architect quit the day after the POC started, and he was too embarrassed to admit they had nobody to run the test. The AE extended the timeline officially, and the SE offered to run the queries for them. The deal closed 60 days later.

> **Failure Mode:** "The Hopium Pipeline." The SE keeps the AWS sandbox running for 9 months because the AE desperately needs a $200k deal in their Q4 commit. The prospect answers one email every three weeks with "Still testing!" The SE wastes $45,000 in AWS compute costs on a prospect who never intended to buy.

**Interview Angle:**
"Tell me about a time an important technical evaluation completely stalled. What did you do?"
A strong answer is: "Unresponsiveness indicates a lack of executive priority. I do not beg for updates. I utilize the 'Takeaway' email to force a decision. I clearly state that the technical project will be decommissioned by Friday due to inactivity. Either they panic and re-engage, immediately restoring our leverage, or I successfully disqualify a time-waster and move on to a real opportunity."

🟡 **Senior-Level** — A fast "No" is the second-best outcome in presales. Only a slow "Maybe" can destroy your quarter.

---
