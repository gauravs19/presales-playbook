# 3.6 Discovery Output & Handoff

## 3.6.1 Writing the Discovery Summary That Gets Read

You've completed a thorough discovery. You have pages of notes, quantified pain metrics, stakeholder insights, and architectural understanding. Now you need to turn all of that into a single document that three different audiences will read: the champion (who needs ammunition to sell internally), the AE (who needs commercial context for their strategy), and the decision-maker (who needs a reason to spend money).

The discovery summary is not a transcript of your meeting. It's a strategic document designed to advance the deal.

1. **Keep it to one page (maximum two).** No executive — internal or external — reads a 5-page discovery summary. They skim the first paragraph, scan the headers, and read the conclusion. Design accordingly: one page of substance with clear headers, bullet points, and a final recommendation.

2. **Structure: Problem → Impact → Proposed Next Step.** The document should follow this flow:
   - **Current State**: 3–4 sentences describing the prospect's current environment and the specific challenges surfaced during discovery.
   - **Quantified Impact**: The dollar cost, time cost, or risk exposure of the current challenges (citing specific metrics from discovery).
   - **Proposed Solution Approach**: 2–3 sentences describing how your solution addresses the stated challenges (framed in outcomes, not features).
   - **Recommended Next Step**: A specific, time-bound action with a proposed date.

3. **Write for the champion's forwarding use case.** The champion will forward this document to their leadership. When they do, the document needs to stand alone — without your verbal context, without a demo, and without the champion's commentary. If someone reads this document with no prior context and understands the problem, the impact, and the proposed path forward, you've written it correctly. If they need explanation, it's too dense, too technical, or too long.

4. **Include the prospect's words.** Reference specific statements from the discovery: "As [Name] described, your team spends approximately 22 hours per week on manual data reconciliation across your three ERP systems." Using the prospect's own language builds credibility with internal readers who weren't at the meeting — they see their colleague's concerns reflected, which validates the document's accuracy.

5. **End with a strong recommended next step.** Vague: "We'd love to continue the conversation." Strong: "Based on our discovery findings, we recommend a 60-minute Technical Deep-Dive on March 18 to map the integration architecture between your SAP, Salesforce, and Snowflake environments. This session will enable us to design a tailored proof-of-concept. Can we confirm this date?" The strong version is actionable, time-bound, and moves the deal forward.

> **War Story:** Two SEs submitted discovery summaries after parallel discovery calls with different divisions of the same company. SE #1 submitted a 4-page technical analysis with detailed architecture diagrams, data flow mappings, and a comprehensive requirements matrix. SE #2 submitted a 1-page summary: three sentences of current state, two bullets of quantified pain ($340K annual remediation cost, 3.5 FTE diverted from strategic work), three sentences of proposed approach, and a specific next step with a date. The VP who received both documents read SE #2's document in 90 seconds and forwarded it to the CFO with the note: "This is exactly what we're dealing with." SE #1's document sat unread in the VP's inbox for 2 weeks. Both SEs had done excellent discovery. Only one had written a document designed for how executives actually consume information.

> **Failure Mode:** The SE who uses the discovery summary as a showcase for how much they learned. They include every data point, every stakeholder comment, every architectural nuance. The document is thorough, comprehensive, and completely unreadable. It demonstrates the SE's competence — but it doesn't advance the deal because nobody makes it past paragraph three.

**Interview Angle:**
"After a discovery session, what do you deliver to the prospect and your team?"
A strong answer describes a concise, structured document designed for multiple audiences with specific formatting and forward-ability considerations. A weak answer describes "sending meeting notes and a deck."

**Practical Reference: The 1-Page Discovery Summary Template**

```
DISCOVERY SUMMARY — [Company Name]
Date: [Date] | Prepared by: [SE Name]

CURRENT STATE
[3–4 sentences describing the prospect's environment and 
key challenges — in their words]

QUANTIFIED IMPACT
• [Metric 1]: $XXX,XXX annual cost (per [Name], [Date])
• [Metric 2]: XX hours/week of engineering time diverted
• [Metric 3]: [Business risk or delayed strategic initiative]

PROPOSED APPROACH
[2–3 sentences describing your solution in outcome terms, 
not feature terms. Focus on the business result, not the technology.]

RECOMMENDED NEXT STEP
[Specific action + proposed date]
"We recommend a [session type] on [date] to [specific objective]. 
This will position us to [next milestone] by [target date]."
```

🟡 **Mid-Level** — The discovery summary is your deal's most important document. Write it like the champion's CFO will read it — because they will.

---

## 3.6.2 The Internal Discovery Debrief

The discovery call just ended. The prospect drops off. Usually, the AE and SE stay on the line for 2 minutes: "That went well! They liked the vision. I'll send the summary. Talk tomorrow." This is not a debrief. This is a mutual validation session. It feels good, but it produces zero strategic value and leaves both parties with different assumptions about what just happened.

A professional internal debrief takes 10 minutes and requires structural conflict. The AE's job is to see the opportunity. The SE's job is to see the gaps. If your debriefs are entirely agreeable, someone isn't doing their job.

1. **Schedule the debrief block.** The discovery meeting isn't 30 minutes; it's 45 minutes. Thirty minutes with the prospect, 15 minutes of blocked time immediately afterward for the AE and SE. If you schedule back-to-back discovery calls without debrief blocks, the nuance of the first call is entirely erased by the second call. You will lose the deal intelligence you just generated.

2. **The AE's perspective (Opportunity).** The debrief starts with the AE: "What did we hear that tells us this deal is real?" The AE focuses on budget signals, timeline catalysts, business pain, and champion dynamics. "The VP confirmed their month-end close delay is costing $144K annually, and they need a solution in place before the Q4 audit. The urgency is there."

3. **The SE's perspective (Risk).** The SE role in the debrief is to play devil's advocate. "What did we hear that tells us this deal might fail?" Focus on technical gaps, unaddressed stakeholders, and integration risks. "The pain is real, but their architecture relies on three legacy mainframes that we struggle to integrate with. Also, the Principal Security Architect was on the call but didn't speak once. We have a silent detractor risk." This isn't pessimism — it's structural risk assessment.

4. **Align on the "Go / No-Go" decision.** Not every discovery call warrants a next step. The debrief is the moment to decide if the deal meets your investment threshold. "Does this deal deserve a custom demo and a POC?" If the AE says "yes" but the SE points out a hard security qualifier gap (e.g., they require on-premise deployment, and you're cloud-only), the decision must be "no-go" or "conditional advance." If you advance a deal with a hard-qualifier gap, you are building pipeline fiction.

5. **Assign clear next steps.** If the decision is "go," assign the follow-up tasks immediately. "I'll write the 1-page discovery summary and send it to you by 3 PM. You review and forward it to the champion by 5 PM. I will outline the demo agenda and we can review it tomorrow at 10 AM." Leaving the debrief without named owners and deadlines guarantees that momentum will stall.

> **War Story:** An AE and SE hung up after a discovery call with a major retailer. The AE said: "That was incredible. They loved the analytics capabilities. They want a demo next Tuesday. Let's start building it." The SE paused and ran the debrief process: "Hold on. They loved the analytics, yes. But when I asked about their data warehouse, they said they're locked into a 3-year contract with [Competitor] and have no budget to replace it. We only sell our analytics on top of our own warehouse. If they can't buy our warehouse, they can't use our analytics." The AE had heard the excitement; the SE had heard the hard qualifier. They agreed to email the prospect and clarify the prerequisite. The prospect confirmed they couldn't buy the warehouse. The deal was killed the same day. The 10-minute debrief saved the SE 15 hours of demo preparation for a deal that was structurally impossible to win.

> **Failure Mode:** The SE who defers entirely to the AE's interpretation of the call. The AE says "Great call, let's schedule a POC," and the SE agrees, even though they know the prospect's legacy API won't support the required throughput. The SE stays silent because they don't want to "kill the vibe" or be seen as negative. They end up running a 4-week POC that fails for exactly the reason they suspected in minute 20 of the discovery call.

**Interview Angle:**
"How do you process information with your AE immediately after a discovery call?"
A strong answer describes a structured debrief where the SE explicitly plays the role of risk identifier, balancing the AE's opportunity focus. A weak answer says "we chat about next steps."

**Practical Reference: The 10-Minute Internal Debrief Agenda**

| Question | Owner | Focus | Time |
|----------|-------|-------|------|
| "What makes this deal real?" | AE | Pain, budget, timeline | 2 mins |
| "What could kill this deal?" | SE | Tech gaps, security, unmapped stakeholders | 3 mins |
| "What information are we missing?" | Both | Gaps in our DART framework | 2 mins |
| "Go / No-Go for next step?" | Both | Does this meet our investment threshold? | 1 min |
| "Who is doing what today?" | Both | Summary, follow-ups, prep | 2 mins |

🟡 **Mid-Level** — The AE's job is to find reasons to advance the deal. The SE's job is to find reasons the deal might fail. When both do their jobs in the debrief, truth emerges.

---

## 3.6.3 Using Discovery Outputs to Frame the Demo

A generic demo says: "Look at what our product can do." A discovery-framed demo says: "Look at how our product solves the specific $144K problem you described last week." The difference in conversion rate between these two demo styles is staggeringly high.

Discovery isn't just an information-gathering exercise; it's the architectural blueprint for your demo. If you do excellent discovery but deliver a standard "harbour tour" demo, you've wasted the intelligence you captured.

1. **The "You said, We heard, Let's show" opening.** Never start a demo by immediately sharing your screen and logging into the product. Start with a slide or a statement that proves you listened. "In our call last Thursday, **you said** that manual schema updates take 6 hours a week. **We heard** that this delay prevents your operations team from getting their morning reports on time. Today, **let's show** how we eliminate that manual step entirely, saving those 6 hours and getting operations their data by 7 AM." This framing anchors everything you are about to show directly to their stated business pain.

2. **Map demo features to specific stakeholders.** If the VP of Finance is joining the demo, don't just show the reporting dashboard. Frame it around their discovery statement: "Sarah, during discovery you mentioned that lack of visibility into real-time spend was your biggest risk. I've configured this dashboard specifically to show how you would track that spend automatically." Tagging a feature with a stakeholder's name and their stated pain point guarantees their attention. It says: "This part of the demo is just for you."

3. **Skip 70% of the product.** If discovery revealed that the prospect's sole problem is data integration, your demo should be 90% data integration. Do not spend 15 minutes demonstrating your machine learning module just because it looks cool. "I've deliberately removed several modules from today's demo, including ML and Advanced Visualisation, because based on our discovery, your immediate priority is integration reliability. We can explore those other areas later if you wish, but today I want to focus 100% on solving the reliability problem." This radical focus builds massive credibility because it proves you aren't a feature-pusher.

4. **Use their terminology.** If the prospect calls their data warehouse "The Hub," you call it "The Hub" in your demo. If they call their customers "Guests," your demo data should say "Guests." If they call their process "The Friday Reconciliation," name your demo workflow "Friday Reconciliation Automation." The psychological gap between "Vendor Product" and "Our Solution" shrinks dramatically when the product speaks the prospect's institutional language.

5. **The "Check-Down" validation.** After demonstrating the solution to a specific pain point mapped in discovery, pause and validate: "We just walked through the automated schema detection. Does this look like it would eliminate the 6 hours of manual work you described last week?" If they say yes, you've earned a micro-commitment. If they say no, or "partially," you catch the gap immediately rather than discovering it three weeks later.

> **War Story:** An SE was preparing a demo for a logistics company. The standard company demo script was 45 minutes long and covered 6 modules. During discovery, the SE learned the prospect only cared about one thing: the inability to track return shipments in real-time, which was costing them $2M annually in lost goods. The SE threw out the standard demo. He built a 15-minute demo focused entirely on the Returns module. He opened the meeting: "I know you booked 60 minutes. But based on our discovery, you have a $2M problem with returns tracking. I'm going to spend 15 minutes showing you exactly how we fix that. If I succeed, we can use the remaining 45 minutes to discuss implementation. If not, I'll give you your time back." The VP of Supply Chain leaned forward in his chair. The SE nailed the 15-minute focused demo. They spent the next 45 minutes discussing commercial terms.

> **Failure Mode:** The SE who runs discovery, takes great notes, and then delivers the exact same demo they delivered to the last three prospects. "I know we talked about your data pipeline issues, but first let me show you our new user interface..." The prospect immediately thinks: "They didn't listen. They're just reading a script." The moment you show a feature that doesn't map to a discovered pain, you transition from "trusted advisor" back to "software vendor."

**Interview Angle:**
"How do you prepare for a demo after a completed discovery call?"
A strong answer describes discarding irrelevant features, using the "You said/We show" framework, and aggressively tailoring the narrative to the discovery notes. A weak answer describes "making sure the demo environment works."

**Practical Reference: The Demo Framing Matrix**

| Discovery Finding (The Pain) | Person Stating Pain | Demo Feature (The Solution) | The Audio Track (How I Frame It) |
|-----------------------------|---------------------|----------------------------|---------------------------------|
| "Batch takes 9 hours" | John (Data Eng VP) | Streaming ingestion | "John, you mentioned the 9-hour batch window..." |
| "Reports are 1 day late" | Sarah (Ops Dir) | Real-time views | "Sarah, to solve the 1-day delay you brought up..." |
| "Security audits are manual" | David (CISO) | Compliance dashboard | "David, regarding the manual audits you highlighted..." |

**If a feature on your demo agenda doesn't map to a row on this matrix, delete it from the agenda.**

🟡 **Mid-Level** — A demo is not a product tour. A demo is the visual proof that you understood the discovery.

---

## 3.6.4 When Discovery Reveals the Deal Should Not Proceed

The hardest action for an SE to take is to walk away from a deal after completing a thorough discovery. You've invested time. The prospect likes you. The AE is forecasting it. But your discovery has revealed a fundamental flaw: the prospect doesn't have the technical prerequisites, their budget expectations are wildly misaligned with your pricing, or your product flat-out cannot solve their core problem without massive custom engineering.

Discovery is an evaluation mechanism for *both* sides. Sometimes, the evaluation concludes with "we are not a fit."

1. **The "Professional Disqualification."** When you discover a hard-qualifier gap (e.g., they need on-premise, you are cloud-only), address it the moment you confirm it. Do not wait until the end of the call. "I want to pause here because what you just described is an absolute requirement for your architecture, and our platform is strictly cloud-native. Rather than spend the next 20 minutes showing you a solution you can't architecturally support, I'd like to be transparent: I don't believe we are the right technical fit for this project."

2. **Why prospects respect the early kill.** No prospect has ever been angry that a vendor saved them 10 hours of evaluation time by being honest about a bad fit. They will respect your integrity. "You're the first vendor who has ever told us 'no' in the first meeting." This creates immense personal credibility. When that prospect changes companies a year later, or when their architecture requirements evolve, they will call you first — because they know you won't waste their time.

3. **The "Custom Engineering" trap.** Discovery reveals that your product solves 80% of their needs, but the remaining 20% requires extensive custom development, fragile workarounds, or stretching the product beyond its designed use cases. The AE wants to say yes. The prospect is pushing for yes. As the SE, you must say no. "We can physically build that workaround, but it will be fragile, difficult to maintain, and will break during our next major upgrade. It is not an enterprise-grade solution. I strongly advise against attempting this architecture with our platform." Winning a deal that becomes an unmitigated disaster in implementation is a worse outcome than losing the deal respectfully during discovery.

4. **Managing the AE's emotional reaction.** When you kill a deal in discovery, the AE loses pipeline. They will be frustrated. Manage this structurally, not emotionally. Present the data: "If we proceed, we will spend 40 hours on a POC. At the end of that POC, the InfoSec team will reject us due to [Specific Gap]. We have a 0% chance of closing this to revenue. Those 40 hours are better spent accelerating [Tier 1 Deal]." You are not killing their deal to be difficult; you are protecting their time (and yours) from a guaranteed zero-ROI investment.

5. **Provide a soft landing.** When disqualifying, don't just hang up. Be consultative. Point them in the right direction. "Based on your need for deep legacy ERP integration, our platform isn't the best fit. I would recommend evaluating [Competitor A] or [Competitor B]. Their architectures are better suited to the on-premise requirements you've described." You are still acting as a trusted advisor, even if they aren't buying your software. An SE who recommends a competitor because it's the right technical answer is an SE who operates with ultimate professional confidence.

> **War Story:** An SE was conducting discovery with a university evaluating a new student data platform. Twenty minutes in, the SE realised the university required the platform to be fully air-gapped (no internet connectivity whatsoever) due to a specific government research grant they held. The SE's product was a multi-tenant SaaS that required continuous internet connection. The AE tried to pivot: "Well, we have a proxy solution..." The SE cut in gently but firmly: "I want to be upfront. Our proxy solution isn't truly air-gapped, and if the grant requires true physical separation, we will fail your compliance audit. I recommend we stop the evaluation here. You should look at [Competitor], who offers a true on-premise installation." The AE was furious for exactly one day, until the university's VP called the AE's manager to praise the SE's integrity. Eighteen months later, a different department at the same university (without the air-gap requirement) bypassed the RFP process and bought the SE's software directly. Why? "We knew you wouldn't sell us something that wouldn't work."

> **Failure Mode:** The "Hopium" SE. They discover a massive technical gap during discovery but choose to ignore it, hoping the prospect will somehow forget the requirement, or that product engineering will suddenly build the missing feature before the deal closes. They drag the prospect through a 6-week evaluation built on "hopium." The deal dies anyway, but only after wasting dozens of hours and destroying the SE's credibility.

**Interview Angle:**
"Tell me about a time you disqualified a prospect or walked away from a deal."
A strong answer describes discovering a hard gap, handling the AE dynamic, communicating the DQ professionally to the prospect, and ideally providing an alternative recommendation. A weak answer implies they try to win every deal regardless of fit.

**Practical Reference: The DQ (Disqualification) Script**

| Situation | Script |
|-----------|--------|
| Technical Hard-Qualifier Gap | "Based on your absolute requirement for [X], I want to be transparent: our platform does not support that architecture. I recommend we pause the evaluation here to save your team's time." |
| Budget/Pricing Disconnect | "You mentioned a budget of $20K. Our platform starts at $150K. Given that gap, it's unlikely we can align commercially, even if the technical fit is strong." |
| "Frankenstein" Workaround Required | "While we could technically build a script to do [X], it goes against our architectural best practices and will create maintenance headaches for your team. I cannot recommend our solution for this specific use case." |

🟡 **Entry-Level** — Anybody can build pipeline. Professionals filter pipeline. A timely "no" is second only to a "yes" in presales value. A "maybe" that drags on for 3 months is the enemy.
