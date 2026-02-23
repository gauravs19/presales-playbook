#### 6.3.4 Managing Scope Creep

During a month-long enterprise technical evaluation, the prospect will inevitably attempt to add 25 new requirements to the established testing criteria. 

They will uncover a secondary use-case they want your software to solve: "Ah, this handles marketing analytics perfectly. Can we spend next week connecting it to our HR data warehouse to see if it predicts employee churn?"

This is Scope Creep. It is the leading cause of death for Proof of Concepts. Scope creep destroys deal velocity, extends the timeline, and changes the success criteria mid-flight. The competitor is praying you accept the new scope, because the moment you try to build a custom HR churn model in 72 hours, your core marketing demo is forgotten, and your platform looks difficult to use.

A Master-Class SE uses the **Mutual Success Plan (MSP)** to defend the perimeter. 

**The Hard "No" vs. The Soft "Yes"**
When the prospect attempts to add the 26th requirement on Day 14 of the evaluation, you must not give a flat "no," which offends the champion, nor a flat "yes," which derails your timeline. 

You execute the Soft "Yes." 

*The Execution:*
"That’s a brilliant HR use-case, and our platform is absolutely built to handle that level of predictive analytics. However, to respect the 30-day timeline we agreed upon with the VP of Engineering to secure Q3 funding, we must maintain laser focus on the three core marketing objectives defined in our Mutual Success Plan. If we pause the marketing tests to build the HR integration now, we will miss your target go-live date. Let’s formally document this HR use-case as Phase 2. The moment we finalize the core marketing validation next Friday, we will scope the HR build for the implementation team."

**Why this works:**
1.  **You validated their intelligence.** You agreed it was a great idea. 
2.  **You used their boss as the shield.** You reminded them that the VP of Engineering (the economic buyer) is waiting for the marketing results, not HR results. 
3.  **You protected the timeline and the Technical Win.** You kept the goalposts locked to the 3 mandatory criteria (Section 6.2.2). 

**The "Cost" mechanism**
If the prospect refuses to take "Phase 2" for an answer, and the Executive Sponsor demands that the HR churn model is tested *immediately*, you must trigger the "Cost" mechanism. 

If they expand the scope, you expand the timeline and leverage. 

*The Execution:*
"We can absolutely expand the scope to include the HR churn model. Building out that predictive integration will add three weeks to our evaluation. Let's get 30 minutes with the VP of Engineering tomorrow to formally add 21 days to our timeline and re-sign an updated Mutual Success Plan."

If the VP of Engineering refuses the delay, the scope creep dies. If the VP of Engineering agrees, you have secured 21 more days of executive alignment. 

> **War Story:** An SE at an API gateway vendor was executing a strict 14-day POV to prove basic latency routing. On Day 9, a rogue Enterprise Architect entered the evaluation and demanded the SE build a custom rate-limiting plugin in Go before he would approve the software. The SE invoked the Mutual Success Plan. "Our VP of Product dictates we do not write custom plugins during 14-day validations. We are tracking perfectly to the three latency metrics the CTO requires by Friday. We can add this custom plugin as a strict requirement for the commercial contract, deliverable 30 days post-signature." The CTO signed the contract on Friday, and the plugin was built safely. 

> **Failure Mode:** "The Over-Promising Scope-Creep SE." The SE excitedly accepts the new HR data requirement on Day 14. He sleeps 4 hours a night trying to build the integration before the final presentation. The HR data model is flawed, crashes during the executive readout, and the prospect cancels the deal because the core marketing platform barely received any testing. 

**Interview Angle:**
"Describe a time when a prospect aggressively demanded a new feature test halfway through a major software evaluation."
A strong answer is: "Scope creep is a test of a Presales Engineer's backbone. I refer immediately back to the initial Mutual Success Plan. I compliment the business value of the new request, but firmly categorize it as a Phase 2 implementation goal to protect the timeline and secure the primary execution criteria."

🟡 **Principal-Level** — A change in testing scope demands a change in the temporal or financial contract. Nothing is added for free mid-flight.

---
