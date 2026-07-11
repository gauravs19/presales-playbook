# 2.3 Managing Deal Velocity

## 2.3.1 Compressing 18-Month Procurement Cycles

Enterprise procurement is where deals go to die slowly. You've won the technical evaluation. The champion is enthusiastic. The executive sponsor has approved the budget. And then procurement says, "We need to run our standard review. It usually takes 12–18 months." Your heart sinks. Your AE panics. Your forecast moves from Q2 to "TBD."

The truth about long procurement cycles: they're not fixed timelines. They're bureaucratic processes with expandable and compressible sections. The SE who understands procurement mechanics — not just the technical evaluation — can compress these cycles by 30–50%.

1. **Map the procurement process in week 1, not week 20.** Most SEs never ask about procurement until they've already won the technical evaluation. By then, they've invested 3–4 months of effort. Ask early: "Walk me through what happens after you decide you want to move forward. What steps does your procurement team require?" The answer reveals the roadblocks: security questionnaire, legal review, data processing agreement, vendor risk assessment, executive committee approval. Each of these has a timeline. Your job is to discover these timelines early enough to run them in parallel with your evaluation — not in sequence after it.

2. **Pre-fill security questionnaires before they're requested.** Most SEs wait for the prospect's security team to send their questionnaire. Then they scramble to fill it out — a process that takes 1–3 weeks internally because it requires input from your security, legal, and engineering teams. Instead: at the start of every deal with an enterprise prospect, send your pre-filled security questionnaire, SOC 2 report, and data processing agreement proactively. "Here's our standard security documentation. We find this accelerates the process by 4–6 weeks." The prospect's security team now has what they need before they ask for it.

3. **Run parallel tracks, not sequential ones.** In most procurement cycles, the sequence is: technical evaluation → security review → legal review → executive approval → contract negotiation. Each phase waits for the previous to complete. Compress by running tracks 2 and 3 in parallel with track 1. While you're running your POC (technical evaluation), the security team should already be reviewing your documentation. While the security team is reviewing, legal should already have your standard terms. This requires proactive relationship-building with the prospect's security and legal teams — not waiting for the champion to manage it.

4. **Create a mutual action plan (MAP).** A mutual action plan is a shared document between you and the prospect that lists every remaining step, who owns it, and the target date. This sounds obvious but is rarely done. The MAP makes the procurement timeline visible to everyone — including the prospect's internal teams, who often don't realise how many sequential dependencies they've created. "Here's our mutual action plan. As you can see, if the security review starts after the POC completes (week 8), rather than in parallel with it (week 3), the timeline extends by 6 weeks. Would your security team be open to starting their review now?"

5. **Use the champion's authority to escalate.** Procurement delays are often caused by low-priority queues — your contract is sitting in a legal queue behind 40 other contracts. Your champion can escalate internally: "This project has VP sponsorship and a Q2 deadline. Can we move the vendor risk assessment to priority review?" The SE's job is to arm the champion with the justification for escalation: "Based on the timeline we mapped, the procurement process will push us past your Q2 deadline unless we can accelerate the security review. Would your VP be willing to flag this as a priority?"

> **War Story:** An SE was working a deal at a major UK bank. The bank's standard procurement process was 18 months. The SE asked the champion to map the full process in week 2. It turned out that 8 of the 18 months were sequential waiting: security waiting for technical approval, legal waiting for security approval, vendor risk waiting for legal approval. The SE proposed running all three in parallel: he sent the security documentation to the bank's InfoSec team in week 3 (while the POC was still running), sent standard contract terms to legal in week 5, and submitted the vendor risk assessment package in week 6. The result: the procurement process that "usually takes 18 months" was completed in 7 months. Not by changing the process — but by parallelising it.

> **Failure Mode:** The SE who views procurement as "someone else's problem" — the AE's, the champion's, or just the inevitable cost of enterprise sales. They invest 4 months in a flawless technical evaluation and then watch the deal die in a 12-month procurement queue that they never mapped, never anticipated, and never attempted to compress. The technical win is meaningless if the contract doesn't get signed.

**Interview Angle:**
"How do you handle long procurement cycles in enterprise deals?"
A strong answer describes proactive procurement mapping, parallel tracking, pre-filled security documentation, and mutual action plans. A weak answer says "you just have to be patient with enterprise procurement."

**Practical Reference: The Procurement Compression Checklist**

| Action | Timing | Owner |
|--------|--------|-------|
| Map full procurement process with champion | Week 1–2 | SE + Champion |
| Send pre-filled security docs (SOC 2, DPA, security questionnaire) | Week 2–3 | SE |
| Share standard commercial terms with legal | Week 3–4 | AE + SE |
| Submit vendor risk assessment package | Week 4–5 | SE |
| Create mutual action plan (MAP) | Week 3 | SE + AE + Champion |
| Identify bottleneck steps and request prioritisation | Ongoing | Champion (armed by SE) |
| Review MAP weekly and flag slippage | Weekly | SE |

🟡 **Mid-Level** — Procurement compression is the SE's secret weapon. The SE who can shave 6 months off a procurement cycle is worth more to the business than the SE who wins the technical evaluation — because without the first, the second doesn't matter.

---

## 2.3.2 Using Technical Milestones as Commercial Leverage

The AE negotiates the contract. The SE wins the technical evaluation. These two tracks are usually treated as separate workflows. They shouldn't be — because every technical milestone you achieve creates commercial leverage, and every technical risk you surface changes the commercial negotiation dynamics.

The SE who understands this connection doesn't just win technical evaluations. They accelerate deal closures.

1. **Frame every POC success as a buying signal.** When your POC passes a success criterion, don't just document it internally. Present it to the champion with commercial language: "Your team confirmed that our platform processed 50M records in under 15 minutes — meeting your performance requirement with 40% headroom. This means you can scale to next year's data volumes without re-architecture. Shall we align with [AE name] to outline the next steps toward production deployment?" The POC result is the evidence. The commercial framing is the leverage.

2. **Use technical validation to compress commercial timelines.** Once the technical evaluation produces positive results, urgency should increase — not decrease. "Now that your team has validated that our solution meets all five of your technical requirements, the remaining step is aligning on commercial terms. We can have a proposal to you by Friday and, based on your procurement timeline, target contract execution by [date]." This language prevents the common post-POC drift where the technical win is celebrated and then nothing happens for 6 weeks.

3. **Surface technical risks as commercial urgency creators.** If your discovery reveals that the prospect's current system has a critical vulnerability — a scaling bottleneck that will break during their peak season, a compliance gap that exposes them to regulatory penalties — frame it commercially: "Based on our architecture review, your current batch processing won't handle the November peak. If we start implementation on August 1, we can have the new pipeline operational by October 15, giving you a 2-week buffer. Starting later than August 1 puts the November deadline at risk." You're not selling fear. You're selling accuracy — and accuracy creates urgency.

4. **Tie pricing to technical scope explicitly.** Your architecture design directly determines the commercial model. If you've designed a 3-phase implementation, help the AE structure the proposal accordingly: "Phase 1 covers the core data pipeline at $X. Phase 2 adds real-time streaming at $Y. Phase 3 extends to their European operations at $Z. The champion wants to start with Phase 1 and prove value before committing to the full scope." This phased approach is easier for the prospect to approve because the initial commitment is smaller, and each phase has a clear technical justification.

5. **Create "technical events" that drive commercial decisions.** A POC completion date is a natural inflection point. An architecture sign-off is another. Use these events as triggers: "Once we present the POC results to the CTO next Thursday, the next logical step is the commercial proposal. Can we schedule the AE's pricing conversation for the following Monday?" Technical events create natural momentum. If you let momentum dissipate between technical milestones and commercial conversations, you'll lose 2–4 weeks each time.

> **War Story:** An SE completed a POC that met all 6 success criteria with strong results. Instead of celebrating and waiting for the AE to "handle the commercial side," she wrote a one-page "Technical Win Summary" that mapped each POC result to a business outcome. She then proposed a timeline: "Technical win confirmed → Executive summary delivered to CFO Tuesday → Commercial terms discussion Thursday → Contract review begins next Monday." The AE loved it — she'd created the momentum that typically takes weeks to build. The deal closed 3 weeks after the POC ended, versus the team average of 8 weeks post-POC.

> **Failure Mode:** The SE who treats the technical evaluation and commercial negotiation as completely separate tracks. They win the technical evaluation beautifully and then hand the deal to the AE with "I'm done — over to you." The AE, who has been focused on other deals during the POC, needs 2 weeks to re-engage. The champion's enthusiasm cools. The executive sponsor gets pulled into another priority. The technical win expires like milk — technically still there, but less compelling by the day.

**Interview Angle:**
"How do you connect your technical milestones to the deal's commercial trajectory?"
A strong answer describes specific examples of using POC results, architecture validations, or risk findings to create commercial urgency. A weak answer treats technical and commercial tracks as independent.

🟡 **Mid-Level** — Technical milestones are not endpoints. They're launchpads for the commercial conversation. The SE who understands this accelerates deal velocity without the AE asking them to.

---

## 2.3.3 Surviving the Change of Champion Mid-Deal

Your champion just left the company. Or got promoted to a different division. Or went on extended leave. Or got fired. Whatever the reason, the person who was carrying your deal internally — the person who believed in your solution, attended every meeting, sold to their leadership, and protected you from detractors — is gone.

This is the single most devastating event in enterprise presales. And it happens on roughly 15–20% of deals that run longer than 6 months.

1. **The first 48 hours are critical.** When you learn that your champion is gone, your immediate action is not to panic — it's to identify who inherits their initiatives. Ask the departing champion (if accessible): "Who on your team will be taking the lead on the projects you were driving?" Ask your AE: "Do we have any other contacts in the account who know about our evaluation?" Ask LinkedIn: search the company for new hires or role changes that might indicate a successor. The faster you identify the new point of contact, the less time the deal spends in vacuum.

2. **The new champion knows nothing about your deal.** Even if the replacement was tangentially aware of the evaluation, they don't have the context that your original champion had. They haven't seen the discovery findings. They haven't experienced the demo. They haven't built conviction in your solution. You're starting the relationship at zero trust and zero context. Accept this. Don't make the mistake of assuming "they must have been briefed." They weren't.

3. **Offer a brief "reset" session.** Contact the new person with a concise message: "I understand you're taking over the [project name] initiative. We've been working with [previous champion] on a technical evaluation. Rather than assume you have all the context, I'd like to offer a 30-minute reset session where I can walk you through where we are, what we've validated, and what the remaining steps look like. No sales pitch — just a handover so you can make an informed decision about how to proceed." This positions you as helpful, not desperate. It also gives you the opportunity to re-establish technical trust with the new stakeholder.

4. **The new champion may not share the old champion's priorities.** Your original champion cared about data pipeline performance. The new person might care about security compliance. Your original champion was an advocate for your solution. The new person might be neutral — or might already have a preferred competitor. Don't assume alignment. Run a mini-discovery with the new champion to understand their priorities, concerns, and biases. You may need to reposition your entire solution narrative.

5. **This is why you multi-thread.** (See Section 2.2.3.) If you have 3+ active threads in the account, a champion departure is a setback, not a death sentence. Your executive sponsor is still there. Your technical evaluator contact is still there. Your security relationship is still there. The deal survives because it was built on multiple relationships, not a single dependency. If you're single-threaded when the champion leaves, you've just learned the most expensive lesson in presales.

> **War Story:** An SE was 3 weeks from a technical win at a major logistics company. The champion — a VP of Data Engineering — accepted a role at a different company. The SE's first reaction was panic. His second reaction was process. He checked his thread map: he had a technical evaluator (the VP's direct report) and a security contact. He called the technical evaluator: "I know [champion] has moved on. We're close to completing the evaluation. Would you be comfortable leading the final steps internally, or would you prefer me to connect with [champion's replacement]?" The evaluator — who had been deeply involved in the POC — said, "I can carry this forward. The results speak for themselves." The deal closed 5 weeks later, delayed by 2 weeks but not destroyed. The evaluator became the new champion because the SE had invested in that relationship throughout the deal, not just in the original champion.

> **Failure Mode:** The SE who treats the champion departure as the deal's death and stops investing effort. "Without [champion], this deal is dead." Maybe. But deals have been won after champion departures when the SE was proactive about rebuilding. The SE who gives up immediately loses 100% of deals after champion departures. The SE who runs the recovery playbook saves 30–40% of them. 30–40% of a deal that was going to die is significant revenue recovered.

**Interview Angle:**
"Has a champion ever left a deal mid-cycle? How did you handle it?"
A strong answer describes the specific deal, the immediate actions taken, the recovery strategy, and the outcome.  A weak answer says "it was devastating" without describing a structured response.

**Practical Reference: The Champion Departure Recovery Playbook**

| Timeframe | Action |
|-----------|--------|
| Day 1 | Identify successor or interim contact through champion, AE, or LinkedIn |
| Day 1–2 | Brief your AE and SE manager; assess deal impact |
| Day 2–3 | Send "reset session" offer to new contact |
| Week 1 | Conduct reset session; run mini-discovery on new priorities |
| Week 1–2 | Re-establish technical narrative based on new champion's concerns |
| Week 2+ | Resume proof path, adjusted for new stakeholder dynamics |

🟡 **Mid-Level** — Champion departures test your multi-threading discipline, your stakeholder mapping, and your emotional resilience. Prepare for them before they happen — because they will.

---

## 2.3.4 The Pre-Mortem

Post-mortems happen after a deal dies. Pre-mortems happen while the deal is still alive — and they're dramatically more useful because you can still change the outcome.

A pre-mortem is a structured exercise where you and your team (AE, SE manager, supporting SEs) imagine that the deal has just been lost, and then work backwards to identify the most likely cause of death. It's a pessimist's exercise designed for optimists — an intentional stress test of your assumptions.

1. **When to run a pre-mortem.** Run a pre-mortem at three points: before committing to a POC (to validate the investment), immediately after a significant stakeholder change (new champion, new competitor, new budget situation), and when you feel uncomfortably confident about a deal. The last trigger is the most important — when everything seems to be going perfectly, you're most likely to miss the risk that kills you.

2. **The pre-mortem question.** Gather the team and say: "Imagine it's 90 days from now, and we've just lost this deal. What went wrong?" Then generate answers — not politely, not diplomatically, but honestly. Common pre-mortem findings:
   - "We never had access to the economic buyer. Our champion couldn't sell internally."
   - "The competitor had an on-premise deployment model we couldn't match."
   - "The prospect's budget was reallocated to a higher-priority project."
   - "Our POC success criteria were too easy — we declared a technical win but the prospect wasn't truly convinced."
   - "Procurement took 6 months and executive sponsorship evaporated during the wait."

3. **Convert findings into actions.** Each pre-mortem finding should produce an action: "We never had access to the economic buyer" → "Schedule an executive briefing within 2 weeks, or downgrade the deal forecast." "Procurement could take 6 months" → "Send security documentation this week and start parallel-tracking procurement." The pre-mortem isn't valuable because of the risks it identifies. It's valuable because of the actions it forces.

4. **Separate likely risks from unlikely risks.** Not every pre-mortem finding is equally dangerous. A budget reallocation is a systemic risk you can't control. A missing executive sponsor is a relationship risk you can address. Prioritise the risks you can influence and monitor the risks you can't. Don't spend 80% of your energy on a risk that has a 5% probability.

5. **Repeat the pre-mortem after every major milestone.** The risks at the POC stage are different from the risks at the procurement stage. A pre-mortem run at the start of the deal might identify "poor technical fit" as the top risk. A pre-mortem run after a successful POC might identify "champion fatigue" or "procurement bottleneck" as the new top risk. The risk landscape evolves. Your pre-mortem should evolve with it.

> **War Story:** An SE team was running a $1.2M deal that felt like a sure thing. The POC was successful. The champion was enthusiastic. The AE had committed it for Q4 close. The SE manager required a pre-mortem as standard process. Finding: "The prospect's CTO has never attended a meeting and has never been briefed on the evaluation. If the CTO doesn't see the results, the deal will die in the executive approval stage." Action: the SE proposed an executive architecture briefing to the CTO. The briefing revealed that the CTO had concerns about data sovereignty that had never been raised — because nobody had talked to him. The SE addressed the concern with a regional deployment architecture. The deal closed in Q4. Without the pre-mortem, the CTO's objection would have surfaced in procurement — and killed the deal with no time to recover.

> **Failure Mode:** The SE who skips the pre-mortem because "the deal feels solid" or "we don't have time for pessimistic exercises." These are the deals that produce the most painful surprises at close. Confidence without stress-testing is complacency. The most experienced SEs are the most paranoid about their best deals — because they've lost enough "sure things" to know that certainty is an illusion.

**Interview Angle:**
"How do you identify risks in a deal that seem to be going well?"
A strong answer describes a systematic approach (pre-mortem, risk register, stakeholder gap analysis) and provides an example of a risk caught early. A weak answer says "I trust my instincts."

**Practical Reference: The Pre-Mortem Template**

| "We lost this deal because..." | Likelihood (H/M/L) | Impact (H/M/L) | Preventive Action | Owner | Due Date |
|-------------------------------|--------------------|-----------------|--------------------|-------|----------|
| No access to economic buyer | H | H | Schedule executive briefing | SE + AE | This week |
| Competitor has on-prem advantage | M | H | Position hybrid deployment roadmap | SE | Before next meeting |
| Champion fatigue / loss | M | H | Multi-thread: cultivate 2 additional contacts | SE | Within 2 weeks |
| Procurement delays past Q4 | H | M | Send security docs; create MAP | SE | This week |
| Product gap in area X | L | H | Confirm with product; prepare roadmap response | SE | Before POC |

**Run this exercise for every deal in your top 3. Spend 20 minutes. Save weeks.**

🟡 **Mid-Level** — The pre-mortem is the highest-ROI 20 minutes you can invest in any deal. It costs nothing, it reveals everything, and it separates the strategically disciplined SE from the reactive one.
