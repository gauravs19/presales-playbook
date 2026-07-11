# 6.3 POC Execution & Control

## 6.3.1 Running the Daily Stand-Up Without Becoming Free Consulting

Once a Proof of Concept (POC) goes live, the single greatest threat to your evaluation is the "Silent Prospect." 

If your SE hands over the sandbox credentials, sets a calendar invite for 14 days later, and tells the prospect, "Let me know if you need anything!", you have already lost the deal. The prospect will get distracted by a production outage, test the software for a total of 12 minutes on day 13, and decide "it was too hard to use."

A Master-Class SE forces a cadence. The most effective cadence is the **15-Minute Daily Stand-up.**

However, this daily stand-up is incredibly dangerous if run poorly. If the SE acts like a Helpdesk agent answering "How do I click this button?" questions for 45 minutes, the SE has become unpaid technical support.

**The Rules of the POC Stand-up:**

1.  **It is mandatory, and it is 15 minutes.** 
    If the prospect's testing team cannot commit to a 15-minute daily sync, they are not actually evaluating your software. Kill the POC before it starts. The agenda must remain rigid: 
    - What did you test yesterday?
    - What are you testing today?
    - What is blocking you? 

2.  **You do not click the buttons.**
    During the stand-up, the prospect will inevitably share their screen and say, "I'm stuck trying to connect the Snowflake database. Can you just do it for me?" 
    *Action:* Never take keyboard control. If you configure the software for them, you prove that the software requires an expensive consultant to run. You must verbally guide them to the documentation or the UI button. *They* must experience the ease of use.

3.  **You tie every block back to the Success Criteria.**
    If the prospect says, "We're stuck trying to customize the colors of the reporting dashboard," you must check the Mutual Success Plan (Section 6.2.2). If "custom dashboard colors" is not one of the 3 mandatory success criteria, you immediately defer it. 
    *The Re-frame:* "I can absolutely send you the documentation on CSS customization after the call. However, looking at our timeline, today was scheduled to validate the latency metric. Are we still on track to ingest the test dataset this afternoon?"

> **War Story:** An SE was running a 14-day POV for a massive retail brand. On day 3, the prospect's lead engineer missed the 15-minute daily stand-up. The SE emailed him. No response. On day 4, the engineer missed the stand-up again. The SE did not wait. The SE instantly escalated to the Account Executive, who immediately called the Economic Buyer (the VP). "Your lead engineer has missed two daily syncs. Are we pausing this evaluation?" The VP was furious—not at the vendor, but at his own engineer. The lead engineer never missed another stand-up, and the POV finished 2 days early.

> **Failure Mode:** "The Subservient Stand-up." The SE allows the 15-minute stand-up to morph into a 60-minute daily training session where the prospect assigns the SE homework ("Can you write this regex for us by tomorrow?"). The SE is now a free employee of the prospect.

**Interview Angle:**
"How do you manage a prospect who becomes unresponsive in the middle of a 30-day POC?"
A strong answer is: "Unresponsiveness is prevented by structure. I never start a POC without a mandated 15-minute daily or every-other-day stand-up agreed upon in the Mutual Success Plan. If the prospect misses two of those stand-ups, I immediately kill the technical work and have my AE escalate to the executive sponsor. If the sponsor doesn't care that their team isn't testing, the deal is dead anyway, and I need my time back."

🟡 **Senior-Level** — A daily stand-up is not a status update; it is an accountability mechanism to ensure the prospect is earning your time.

---

## 6.3.2 Forcing Prospect Resource Accountability

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

## 6.3.3 Shadowing Their IT Staff to Find Hidden Objections

A Proof of Concept (POC) is a political process disguised as a technical evaluation. 

When you win the final 14-day bake-off, the CTO will smile, sign the $300k contract, and your AE will ring the gong. But six months later, the implementation fails because the Director of IT Operations actively hates your software and stonewalls the rollout. 

Why? Because during the POC, the Director of IT Operations felt their job was threatened by the automation you were selling, and they buried their objections instead of voicing them to the CTO.

A Master-Class SE uses the 14-day technical validation as an intelligence-gathering mission to find the buried bodies. 

**The Shadowing Technique**
You must demand "Shadow Time" in the Mutual Success Plan. It is not enough to ask the prospect’s engineers how the testing is going on a 15-minute daily Zoom stand-up. You must physically or virtually sit next to them while they use the tool.

*The Approach:*
"We find that a 14-day POV is most effective when our SEs can sit virtually with your practitioners for 45 minutes on Day 3 and Day 10. We don't drive. You drive. We just want to watch how your team naturally interacts with the new UI to ensure it genuinely saves them time on their current workflow."

**What to Look For When Shadowing:**
1.  **The "Workaround" Mentality:** Do they export your beautiful, machine-learning-powered dashboard into Excel because "that's how we've always done it"? If they do, your value proposition just died. They aren't going to adopt the software. You must immediately intervene and teach them the native workflow.
2.  **The Silent Resenter:** Is there a senior sysadmin who refuses to log into the sandbox, rolls their eyes during the stand-ups, and constantly brings up the cost of switching? This person is not testing your software; they are building a business case for why their boss should reject it. You must identify them early and construct a "Champion as Hero" narrative (Section 5.2.3) tailored strictly for them.
3.  **The Missing Integration:** While shadowing, you notice they are copying and pasting UUIDs between your sandbox and an obscure internal billing system they never mentioned during discovery. You just uncovered a massive implementation risk. You must immediately escalate this to the project manager.

**Building the "Insider Threat" Dossier**
After every shadowing session, the SE must update the Account Executive. "The CTO wants to buy, but the lead DBA hates our indexing structure and is currently writing a memo to the VP of Engineering to kill the deal. We need a 1-on-1 with that DBA tomorrow to neutralize the technical threat."

> **War Story:** An SE at a network intelligence company spent 90 minutes virtually shadowing a network operations center (NOC) team during a POC. The team lead was incredibly quiet. The SE asked to see how the team lead categorized an alert. The lead opened three different terminal windows, ran two Python scripts, and manually updated a Jira ticket. The SE said, "What if our platform could automate those three terminal windows instantly?" The team lead visibly relaxed. He admitted, "My boss told me this tool was going to replace my job. If it just replaces the boring scripts... I'll back it." The SE found the hidden objection and saved a $1.2M deal. 

> **Failure Mode:** "The Hands-Off Validation." The SE provisions the sandbox, conducts a pristine 1-hour kickoff training, and then waits 14 days for the prospect to email them the "Pass" grade. The SE assumes silence means testing is going perfectly. The SE is blindsided when the prospect chooses the competitor because a junior analyst found the competitor's UI slightly easier to use. 

**Interview Angle:**
"During a major technical evaluation, how do you handle end-users who are resistant to adopting your platform?"
A strong answer is: "Resistance usually stems from fear of job replacement or the pain of learning a new workflow. I do not wait for the final readout to discover this. I mandate shadowing sessions midway through the POC. I sit with the resistant users, watch them work, and actively reframe the software not as a platform that replaces their expertise, but as a force multiplier that removes their most tedious manual tasks."

🟡 **Principal-Level** — You win the CTO with the ROI slide. You win the implementation by making the junior sysadmin feel safe. Shadow them.

---

## 6.3.4 Managing Scope Creep

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

## 6.3.5 Securing Executive Sponsorship for the POC

A POC without executive sponsorship is a science experiment. It might produce interesting results, but nobody with budget authority will ever see them.

The technical evaluator loves your platform. Their manager thinks it's promising. But neither of them can sign a $200k purchase order. The VP of Engineering or CIO can—and they have no idea the evaluation is happening.

---

### Why Executive Sponsorship Is Non-Negotiable

#### The Approval Chain Reality
In enterprise organizations, technical evaluations are initiated by mid-level engineers, but purchase decisions are approved by executives 2-3 levels above them. If the executive has not been briefed on the POC, they will ask one question when the purchase request lands on their desk: "Why am I hearing about this for the first time?"

That single question kills deals. The executive feels ambushed, questions their team's judgment, and delays the approval while they conduct their own independent review.

#### The Champion vs. The Sponsor
*   **Champion:** The technical evaluator who runs the POC, loves your product, and advocates internally. They have influence but no budget authority.
*   **Executive Sponsor:** The VP/CIO/CTO who controls the budget and can approve the purchase. They may never touch your product, but they control the money.

Your job is to ensure the Executive Sponsor is aware of and aligned with the POC *before* it begins.

### How to Secure Executive Sponsorship

#### Step 1: Ask the Champion Directly
During the initial discovery call, ask:

> *"Who in your organization would ultimately approve the budget for a solution like this? And have they been briefed on this evaluation?"*

If the champion says "my VP" but hasn't briefed the VP, you must pause the POC until the VP is looped in.

#### Step 2: Offer to Facilitate a "Kickoff Briefing"
Position a 15-minute executive briefing as a standard part of your evaluation process:

> *"Before we kick off the technical evaluation, we typically schedule a 15-minute alignment call with your executive sponsor. The goal isn't to sell—it's to ensure our evaluation criteria map directly to the business outcomes your leadership cares about. That way, when we deliver the results, there's no gap between what we proved and what gets approved."*

#### Step 3: Tie the POC Criteria to Executive OKRs
If you can align the POC success criteria to the executive's stated objectives (e.g., "Reduce infrastructure costs by 20%" or "Achieve SOC 2 compliance by Q3"), the executive becomes personally invested in the outcome.

> **War Story:** An SE completed a technically perfect POC for a data analytics platform. The technical evaluator—a Senior Data Engineer—was ready to buy. When the purchase request reached the VP of Data, the VP asked: "Why do we need another analytics tool? We already have Tableau." The SE had never spoken to the VP. The VP had never seen a demo, understood the use case, or been briefed on the ROI. The deal stalled for 4 months while the VP conducted their own evaluation. By the time the VP was convinced, the company had entered a budget freeze.

> **Failure Mode:** "The Bottom-Up Only Seller." This SE builds incredible technical rapport with individual contributors and mid-level managers but never engages the executive layer. Their POCs are technically flawless but commercially dead on arrival because no one with budget authority has been involved in the evaluation process.

**Interview Angle:**
"How do you ensure that your technical evaluations translate into purchased contracts?"
A strong answer is: "I always identify the executive sponsor before starting a POC. I ask the champion directly: 'Who approves the budget for this?' If the executive hasn't been briefed, I request a 15-minute kickoff alignment call to connect the POC success criteria to the executive's business objectives. This ensures that when the POC succeeds, the executive already understands the value and can approve the budget without a separate discovery process."

🔴 **Senior-Level** — A POC without executive sponsorship is a hobby project. Secure the sponsor before you provision the sandbox.
