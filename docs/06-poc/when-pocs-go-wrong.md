# 6.5 When POCs Go Wrong

## 6.5.1 The POC That Stalls

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

<deal-autopsy></deal-autopsy>

**Interview Angle:**
"Tell me about a time an important technical evaluation completely stalled. What did you do?"
A strong answer is: "Unresponsiveness indicates a lack of executive priority. I do not beg for updates. I utilize the 'Takeaway' email to force a decision. I clearly state that the technical project will be decommissioned by Friday due to inactivity. Either they panic and re-engage, immediately restoring our leverage, or I successfully disqualify a time-waster and move on to a real opportunity."

🟡 **Senior-Level** — A fast "No" is the second-best outcome in presales. Only a slow "Maybe" can destroy your quarter.

---

## 6.5.2 When the Prospect Moves the Goalposts

You established the Mutual Success Plan. You defined three mandatory "pass/fail" technical criteria. On day 13, you successfully accomplished all three. 

On day 14, the prospect's evaluating engineering team says, "This is great. But our VP of Security just reviewed the project and said we also need native integration with CyberArk before we can approve the purchase. Can we test that next week?"

The goalposts just moved. 

If you say yes, you signal that your evaluation criteria are meaningless and that your technical time is free. If you say no, the evaluating engineers will claim you are uncooperative. 

A Master-Class SE uses a technique called **The Commercial Pivot** to freeze the goalposts.

**The Commercial Pivot**
When a prospect moves the goalposts after the initial criteria have been met, you must immediately pivot the conversation away from the technical sandbox and directly onto the commercial contract. 

You no longer solve the problem with engineering; you solve it with procurement.

*The Execution:*
"We can absolutely validate the CyberArk integration. However, as we formally proved the three mandatory criteria from our Mutual Success Plan today, the technical evaluation phase is officially concluded. 

I will have our API architect construct a 2-hour virtual whiteboard session on Monday to prove the CyberArk architecture. In parallel, because we hit the 3 core criteria, [Account Executive Name] will be sending the commercial contract to your procurement team this afternoon so we can begin the redlining process. We can make the CyberArk integration a formal, contractual contingency for final signature."

**Why this works:**
1.  **You closed the technical evaluation.** You did not say, "We are extending the POC." You unequivocally stated that the POC is over.
2.  **You called their bluff.** If the CyberArk integration is truly a mandatory requirement for purchase, they will happily review the commercial contract while you validate the architecture. If the CyberArk request was just a delay tactic because they don't actually have the budget approved, their procurement team will reject the contract. 
3.  **You protected your time.** You did not agree to spend 40 hours building a custom integration in a sandbox. You agreed to a 2-hour whiteboard session.

**The "Infinite Evaluation" Trap**
Many AEs are terrified of upsetting the prospect. They will beg the SE to "just do this one last thing" to secure the deal. 

The SE must hold the line. An SE who agrees to an infinite evaluation trains the prospect that the software vendor is subservient. If you are subservient during a free POC, they will expect 24/7 free consulting after they sign the $300k contract. 

> **War Story:** An SE for a data streaming platform proved their core ingestion speed over a 30-day POC. On the final day, the prospect added a completely new requirement: "We need our custom front-end team to build three dashboards on top of your API before we sign." The SE's AE panicked and agreed to extend the POC by an entire month. The prospect's front-end team took six weeks, built terrible dashboards, and blamed the vendor's API for the poor performance. The deal stalled for a year. The SE should have invoked the Commercial Pivot, locking the technical win and forcing the dashboard validation into a post-signature implementation phase.

> **Failure Mode:** "The Moving Finish Line." The SE completes 5 requirements. The prospect adds 2. The SE completes those. The prospect adds 3 more. The SE is trapped in a loop of proving endless edge-cases because neither the SE nor the AE had the backbone to formally shut down the sandbox.

**Interview Angle:**
"You hit all the success criteria in a POC, but the prospect asks to test one more major feature before buying. How do you respond?"
A strong answer is: "I utilize the Commercial Pivot. I acknowledge the value of the new feature but firmly close the technical evaluation phase. I offer to validate the new request via a whiteboard architecture session or a contractual contingency, but I mandate that the commercial procurement process begins immediately in parallel. If they refuse to begin the commercial process, I know the new technical request is actually a stall tactic for a lack of budget."

🟡 **Principal-Level** — When the goalposts move, the evaluation is over. The rest is negotiation.

---

## 6.5.3 Technical Failure During a POC

Enterprise software breaks. It is statistically impossible to run 50 complex Proof of Value environments without encountering a severe bug, a misconfigured firewall, or a massive latency spike entirely outside of your control. 

The mark of a junior Sales Engineer is how desperately they attempt to hide a technical failure from the prospect. A junior SE will spend 14 hours over a weekend trying to quietly patch a broken database connector before the prospect logs in on Monday morning.

A Master-Class SE uses a technical failure to secure the deal. 

The moment your software crashes during a live, high-leverage evaluation is the best opportunity you will ever have to prove how your company partners with enterprise clients when disaster strikes in production. 

**The Transparent Escalation Protocol**
When a critical failure occurs during a POC—especially one that halts the testing of a mandatory success criteria—you must immediately inform the **Economic Buyer** and your Executive Sponsor, even if your Account Executive is terrified.

You do not say, "We found a tiny glitch, but I'm working on it!"

You say:
"We encountered a critical failure in our data ingestion engine an hour ago. It is causing a 400ms latency spike that violates the criteria we established in our Mutual Success Plan. I have immediately halted your testing environment. I've escalated this directly to our VP of Engineering, and our Tier-3 support team is actively tracing the bug. I will provide a root-cause analysis and a patch unrolling timeline by 5 PM today."

**The Return on Failure**
Why is this incredibly effective?
1.  **Trust.** You destroyed the vendor filter. The prospect instantly realizes you care more about protecting their timeline than lying to save face.
2.  **Support Validation.** Prospects expect bugs; what they are actually evaluating during a POC is how competent your engineering support team is when a P1 outage occurs. You just demonstrated an unparalleled SLA response time and executive escalation path that a competitor's flawless sandbox could never prove. 

**The 48-Hour Fix**
If the bug is critical, you have a maximum of 48 hours to resolve it. If your development team requires a week to patch a major enterprise defect, the prospect will rightfully assume your entire infrastructure is brittle, and the deal will die. 

You must act as the prospect’s advocate within your own company. You do not log a Jira ticket and wait. You bypass the project manager. You find the senior back-end engineer who wrote the broken microservice, you pull them into a Zoom call, and you politely demand a hotfix because a $500k ARR logo is on the line. 

> **War Story:** An SE at an observability platform was running a 30-day POC at a major airline. A recent update to the airline’s internal cloud infrastructure caused the vendor’s agent to crash loop, completely consuming the host server’s CPU and bringing down a minor testing application. The SE immediately texted the airline’s VP of Infrastructure: "Our agent just crashed one of your test servers. I've killed our deployment globally and initiated an emergency P1 with our core engineering team in San Francisco. We will not touch your systems until we have a root-cause." The VP was stunned. The vendor fixed the issue in 6 hours. The VP later told the AE, "We were going to buy your competitor because they were 20% cheaper, but the way your SE handled that outage proved you treat our uptime like your own. Your support is worth the premium." The deal closed at list price.

> **Failure Mode:** "The Cover-Up SE." The UI latency doubles. The SE hopes the prospect's lead engineer doesn't notice. The engineer does notice, emails the SE, and the SE says, "Oh yeah, I saw that. I'm just tweaking a config." The SE's credibility is instantly evaporated. 

**Interview Angle:**
"Tell me about a time a major bug crashed a prospect's evaluation environment during a critical technical test."
A strong answer is: "I immediately halt the test and proactively notify their executive team before they notice the failure themselves. Technical glitches are inevitable; a lack of transparency is fatal. I use the outage to showcase our enterprise-grade incident response, turning a software flaw into a compelling demonstration of our world-class engineering support."

🟡 **Principal-Level** — Do not hide a failure. Showcase your recovery process.

---

## 6.5.4 Calling a POC Loss Early

A senior SE's primary metric of success is not how many POCs they win. It is how quickly they lose the ones they were never going to win anyway.

Account Executives are fundamentally optimists. They believe every deal can be saved. If a competitor has a feature you lack, the AE will ask if you can build it. If the prospect’s champion gets fired halfway through a 30-day sandbox, the AE will ask if you can train their replacement.

A Master-Class SE protects the pipeline by killing dying POCs early.

When do you pull the plug? The evaluation is dead, and you must formally recommend killing the deal, when you hit one of three conditions:

1.  **The Competitor Has Locked the Criteria**
    If halfway through your execution, you discover the prospect’s primary success criterion is a feature uniquely proprietary to your biggest competitor, you are executing a "Column Fodder" POC. They are only testing you because procurement mandates they evaluate two vendors. The technical team has already decided to buy the competitor. Do not spend three weeks pretending you can win. Kill it immediately.

2.  **The Executive Sponsor Leaves**
    If the VP of Engineering who allocated the $300k budget leaves the company on Day 10 of a 30-day evaluation, the evaluation is over. The new interim VP will freeze all Q4 spending. Do not let your AE convince you that "the remaining engineering team still really loves the tool." The engineers cannot buy the tool. Pause the sandbox until a new VP is hired.

3.  **The Technical Debt Wall**
    If on Day 2 of a POC you realize the prospect's legacy infrastructure is so brittle, undocumented, and customized that it would require 8 months of Professional Services to integrate your API, you are looking at a fundamentally unprofitable implementation. Even if you manage to duct-tape a successful POC together, they will churn in year one because the deployment will fail. It is the SE’s job to tell the AE, "We cannot sell them this platform until they modernize their database tier. They are not ready for us."

**The Hard "Pull the Plug" Conversation**
You must document your recommendation to the AE and Regional VP of Sales. 

"I am recommending we immediately kill the 30-day POC at Zenith Corp. During our technical discovery this morning, the lead architect admitted that their absolute requirement for production rollout is a native integration with a proprietary main-frame protocol we do not support, and our product team confirmed it is not on the 12-month roadmap. Zenith Corp is currently evaluating Competitor X, who built that protocol natively three years ago. We cannot technically win this evaluation without misleading the prospect, and continuing the sandbox consumes 40 hours of my capacity that should be deployed on our tier-1 pipeline."

> **War Story:** An SE at a cybersecurity startup was deployed on a massive multi-month evaluation for a federal agency. Three weeks in, the SE realized the agency’s internal legacy tech stack was so outdated that the SE’s modern cloud sensors physically could not deploy on 80% of their servers. The AE begged the SE to "just test the 20% that works." The SE refused, escalating to the CRO: "If we sell them this, they will sue us for breach of contract in 6 months when it doesn't deploy." The CRO killed the evaluation, and the SE was lauded for saving the company from a disastrous legal and resourcing catastrophe. 

> **Failure Mode:** "The Martyr SE." The SE realizes a deal is unwinnable in week two, but grinds through an 80-hour week to manually construct an unrealistic Proof of Concept, hoping the AE can just discount the software enough to win anyway. The SE burns out completely over a prospect that was structurally impossible to close.

**Interview Angle:**
"Describe a time you recommended walking away from a massive opportunity in the middle of a technical evaluation."
A strong answer is: "My job is to qualify technically. Qualification doesn't end after discovery; it continues during the POC. When I uncovered an insurmountable architectural roadblock that our platform could not solve without millions in custom engineering, I immediately engaged my AE and Sales Leadership. We formally disengaged from the evaluation, saving 120 hours of Presales capacity that I immediately redirected to a highly-qualified tier-1 close."

🟡 **Principal-Level** — Stop trying to save dead deals. Return your time to the pipeline.
