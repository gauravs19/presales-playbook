#### 6.3.2 Forcing Prospect Resource Accountability

The second most common reason a POC fails is the "Missing Pre-Requisite." 

You and the Account Executive agreed to a 14-day timeline. On Day 1, the prospect’s network security team blocks your platform’s API traffic. On Day 6, the network team finally responds to an internal ticket. On Day 12, they open the ports. You now have 48 hours to execute a 14-day technical validation. The AE is breathing down your neck to "just make it work" because the end of the quarter is Friday. 

You must prevent this before Day 1 even begins by enforcing **strict resource accountability.**

**The Pre-Flight Checklist for the Prospect**
Just as you have a pre-flight checklist for a live demo (Section 5.5.1), you must mandate a written checklist for the prospect *before* the POC clock starts ticking.

*Action:* Do not hand over the sandbox credentials until the prospect formally signs off that the following are complete:
- [ ] **Network & Firewall Ports:** Are all required ports open to our IP ranges? Have you validated it with a ping?
- [ ] **Access Provisioning:** Does your testing team have the correct Admin privileges on your own internal systems (e.g., Salesforce, AWS, Snowflake) to authenticate our integration?
- [ ] **Data Residency/Sanitization:** If this is a healthcare or financial services POC, has your InfoSec team signed off on the exact subset of sanitized data you will be loading into our tenant? 

**The "Stop the Clock" Mechanism**
If you start a 14-day POC and discover on Day 2 that the prospect's InfoSec team is holding up the data load, you must formally "stop the clock."

If the AE says, "Let's just keep the clock running, they'll fix it soon," you say, "No." 

*The Execution:* You email the Executive Sponsor and the champion immediately: "As agreed in our Mutual Success Plan, the 14-day testing window is predicated on having access to the anonymized dataset on Day 1. Since that data is still locked behind an InfoSec review, we are officially pausing the POC clock. The 14-day timeline will resume only when the data is loaded."

*Why this works:* You preserve leverage. If the InfoSec team takes 3 weeks to load the data, the 14-day clock forces the prospect to ask for a formal 3-week extension. This allows your AE to demand a commercial concession in return for holding the sandbox open (e.g., "We will extend the sandbox by 21 days for free, but in return, we need a 30-minute status check with your CIO this Friday to confirm the budget is still locked.")

> **War Story:** An SE for a cloud-security vendor arrived on-site in London for an expensive two-day "Proof of Value Workshop" with a major airline. Ten engineers sat in the room, ready to test the software. But the airline's own Active Directory admin—the only person who could provision the test accounts—was on vacation. The SE could do nothing. They spent two days doing PowerPoint presentations. The SE's company lost $8,000 in travel and massive opportunity cost because the AE failed to mandate the Pre-Flight Checklist.

> **Failure Mode:** "The Hoping-for-the-Best Start." The SE provisions an expensive, high-compute POC sandbox on a Monday simply because the AE promised the prospect's CTO they could "test it this week," entirely bypassing the reality that the testing team lacks the network access required to actually use the software.

**Interview Angle:**
"How do you handle a prospect whose internal IT teams are blocking the progress of your POC?"
A strong answer is: "I enforce a 'Stop the Clock' protocol. A POC is a mutual investment. When an internal IT blocker arises, I do not let my 30-day timeline evaporate while waiting on their internal tickets. I formally pause the evaluation timeline and escalate the blocker through my AE to the Executive Sponsor. We do not restart the clock until their internal team clears the technical hurdle."

🟡 **Principal-Level** — Never let a prospect's disorganized IT department ruin your technical win rate. Pause the clock. Leverage the executive.

---
