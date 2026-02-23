#### 6.5.3 Technical Failure During a POC

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
