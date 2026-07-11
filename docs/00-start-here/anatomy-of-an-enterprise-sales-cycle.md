# 0.2 The Anatomy of an Enterprise Sales Cycle

## 0.2.1 The Full Deal Journey

Every enterprise deal follows the same rough arc, and yet most new SEs have never seen the full journey mapped end-to-end. They get dropped into the middle of a cycle — "join this demo Thursday" — with no concept of what came before or what needs to happen after. That's like joining a relay race at the third leg without knowing where the finish line is.

Here is the full deal journey. Not every deal will follow every stage. Some will skip stages, loop back, or stall indefinitely. But this is the structural blueprint you need to carry in your head.

1. **Lead Generation & Initial Qualification (SDR → AE)** — An SDR or inbound marketing effort generates a lead. The AE has an initial conversation to determine whether it's worth pursuing. At this point, you usually don't exist yet in the prospect's world. The AE is asking: is there pain, is there budget, is there a timeline? If the answers are sufficiently promising, the AE requests SE involvement.

2. **Discovery (SE-Led)** — Your first direct interaction with the prospect. This is where you diagnose the real problem, map the existing environment, identify stakeholders, and quantify the business impact of inaction. Discovery is the most underinvested stage in most sales organisations — and the stage that determines everything that follows. Botch discovery, and every subsequent stage will miss the mark.

3. **Solution Design (SE-Led)** — Based on what you learned in discovery, you architect a solution that maps your product's capabilities to the prospect's specific pain. This is not a generic "here's what our product does" exercise. It's a bespoke answer to "here's what your world looks like today, and here's what it could look like with us."

4. **Demonstration (SE-Led)** — You present the solution to the prospect's team, typically through a live product demo, a guided sandbox, or a combination. The demo is not a feature tour. It's a narrative that shows the prospect their own problem being solved in real time.

5. **Proof of Concept (SE-Led)** — If the prospect needs to validate the solution in their own environment, you build and execute a POC. This is the most resource-intensive stage. It typically takes 2–6 weeks and involves daily interactions with the prospect's technical team. The POC ends with a formal technical win — or it doesn't.

6. **Proposal & Commercial Negotiation (AE-Led, SE-Supported)** — The AE presents the commercial proposal, including pricing, licensing, implementation scope, and terms. You support by ensuring the technical scope is accurate, the architecture documents are complete, and any technical objections from procurement or legal are addressed.

7. **Procurement & Legal Review (AE-Led, SE-Supported)** — The prospect's procurement team reviews the contract, negotiates terms, and requests security documentation. This stage can take 2 weeks or 6 months depending on the organisation. Your role is to complete security questionnaires, participate in technical reviews, and prevent deal-killing surprises.

8. **Closed-Won (or Closed-Lost)** — The contract is signed — or it isn't. Either way, the deal is over. In a well-run presales org, both outcomes trigger a debrief. What worked? What didn't? What intelligence can be extracted for the next deal?

> **War Story:** A mid-market SE assumed the deal was over after a successful demo. The prospect said "this looks great, we'll be in touch." The AE was happy. The SE moved on to other deals. Three weeks of silence. The AE followed up — radio silence. What happened? The prospect's procurement team had flagged a data sovereignty concern that nobody had discussed. The deal died in legal review. If the SE had proactively surfaced the sovereignty question during discovery, the deal would have closed. One unasked question, one dead deal.

> **Failure Mode:** The SE who only shows up for discovery and demo, then disappears. They treat the deal as "AE's problem" once the technical work is done. But deals don't close in the demo — they close in the weeks that follow, when procurement sends a 200-question security questionnaire and the legal team red-lines the data processing agreement. If the SE isn't available to respond quickly, the deal loses momentum and competitors fill the vacuum.

**Interview Angle:**
"Walk me through the lifecycle of a typical enterprise deal and where the SE adds the most value."
A strong answer covers the full cycle and emphasises discovery, solution design, and POC as SE-led stages. A weak answer focuses exclusively on the demo.

**Practical Reference: The Deal Stage Tracker**
Maintain a personal log for each active deal:

| Stage | Status | My Key Deliverable | Blocker / Risk | Next Action |
|-------|--------|-------------------|---------------|-------------|
| Discovery | Complete | Pain quantified at $380K/yr | InfoSec requirements not yet surfaced | Schedule security-focused follow-up |
| Demo | Scheduled | Persona-mapped narrative built | CTO not confirmed as attendee | Ask champion to confirm CTO attendance |

🟢 **Beginner** — Knowing the full journey means knowing when to invest your energy and when to hold back. The fastest way to burn out in presales is treating every stage with equal intensity.

---

## 0.2.2 Short Deals vs. Long Deals

A 30-day SMB deal and an 18-month enterprise procurement exist in the same industry but require completely different muscles. The SE who crushes a transactional mid-market pipeline will drown in a strategic enterprise cycle — and vice versa. Understanding which game you're playing before you play it is the difference between efficient execution and wasted months.

1. **Short-cycle deals (30–90 days)** are volume games. You'll run multiple discoveries and demos per week. The prospect usually has a clear, immediate pain point — their current tool is broken, the contract is expiring, or a new compliance requirement is forcing a change. Decision-making is concentrated in 1–2 people. The SE motion is: diagnose fast, demo fast, close fast. Your biggest risk is spending too much time on any single deal. Over-investing in a $40K deal that should take 3 weeks is the most expensive mistake in transactional presales.

2. **Long-cycle deals (6–18 months)** are strategy games. You might have one or two of these per quarter. The prospect is evaluating a platform-level change that touches multiple departments, requires board approval, and involves a formal procurement process with legal, security, and compliance reviews. Decision-making is distributed across 5–15 stakeholders. The SE motion is: build relationships slowly, multi-thread aggressively, and manage your stamina. Your biggest risk is losing momentum during the "quiet periods" between milestones — the 6 weeks of silence between your POC and the procurement review where the deal appears dead but is actually grinding through internal approvals.

3. **The hybrid deal** — Starts small and grows. A department-level pilot ($50K) that, if successful, expands to an enterprise license ($500K+). These are the most rewarding and most dangerous deals. Rewarding because you get early technical validation. Dangerous because the pilot's success criteria are often disconnected from the enterprise buyer's decision criteria. You can win the pilot brilliantly and still lose the expansion because somebody at the C-suite level decided to go with a "strategic partner" instead.

4. **Time kills deals — differently.** In short cycles, time kills by giving the prospect space to deprioritise. If you don't close a transactional deal in the momentum window, the prospect moves on to the next fire. In long cycles, time kills by introducing new stakeholders, budget shifts, and priority changes. A deal that was #1 priority in Q1 can drop to #5 by Q3 because the CEO attended a conference and got excited about a different initiative.

5. **SE bandwidth allocation must match deal length.** If you have 10 short-cycle deals and 2 long-cycle deals, you should be spending roughly 40% of your time on the 2 enterprise deals and 60% spread across the 10 transactional ones — not evenly distributing your calendar. The enterprise deals will generate 4x the revenue. Staff them accordingly.

> **War Story:** An SE joined from a mid-market team where deals closed in 45 days. She was reassigned to an enterprise account that had been in motion for 8 months. She applied her mid-market playbook — pushing for a demo in week one, following up daily, asking for a decision timeline on every call. The prospect's CTO called the AE and said, "Your SE seems a bit aggressive — we're still 6 months from procurement." She wasn't being aggressive. She was being transactional in a strategic context. The AE had to recalibrate her expectations: in enterprise, patience isn't laziness. It's strategy.

> **Failure Mode:** The SE who treats a long-cycle deal like a short-cycle one and burns out the prospect before they're ready to decide. They send weekly check-in emails, request status updates after every internal meeting, and propose additional demos that nobody asked for. The prospect starts avoiding their calls. The champion goes dark — not because they lost interest, but because the SE became exhausting. The deal doesn't die. It just gets handed to a competitor who knows how to play the long game.

**Interview Angle:**
"How do you adjust your approach when working a 30-day deal versus a 12-month enterprise cycle?"
A strong answer identifies specific behavioural differences: pacing, depth of discovery, stakeholder strategy, and resource allocation. A weak answer says "the process is the same, just longer."

**Practical Reference: Deal Length Heuristic**
Use these signals to estimate deal length before you invest:

| Signal | Likely Short (< 90 days) | Likely Long (6+ months) |
|--------|------------------------|----------------------|
| Buyer type | Department head, individual budget | VP/C-suite, board-approved budget |
| Stakeholders | 1–3 | 5–15+ |
| Procurement | Credit card or standard PO | Formal RFP, legal review, security audit |
| Competitor | Maybe 1 alternative | 3–5 vendors in structured evaluation |
| Your ACV | < $100K | > $250K |

🟢 **Beginner** — At this level, simply recognising which type of deal you're in will prevent the most common pacing errors. As you progress, you'll develop an instinct for when a "short deal" is actually going to become a "long deal" — and how to manage that transition.

---

## 0.2.3 Where Deals Die

Deals don't usually die in a dramatic explosion. They die quietly — a missed follow-up, an unasked question, a stakeholder who was never engaged. The SE who understands where deals die can prevent those deaths before they happen. This is preventative medicine, not emergency surgery.

Here are the six failure points that kill more enterprise deals than any competitor ever could:

1. **Death by Poor Discovery.** The SE runs a surface-level discovery, accepts the prospect's stated requirements at face value, and builds a demo around symptoms rather than root causes. The demo looks fine but doesn't resonate because it's solving a problem the prospect didn't actually prioritise. The prospect says "impressive technology, not sure it's the right fit." What they mean is: "You didn't understand our real problem." This is the most common and most preventable failure in presales. Roughly 60% of lost deals can be traced back to insufficient discovery.

2. **Death by No Champion.** The SE and AE engage with willing participants who attend meetings, ask questions, and seem enthusiastic — but none of them are willing to fight for the deal internally. Without a champion who will navigate internal politics, build the business case, and push procurement, the deal sits in "evaluation" permanently. The telltale sign: nobody at the prospect's organisation is proactively scheduling next steps. If you're always the one proposing the next meeting, you probably don't have a champion.

3. **Death by Single-Threading.** The entire deal relationship runs through one person on the prospect's side. That person changes roles, goes on leave, or loses influence. The deal has no other relationships to sustain it. Within two weeks, the new contact "wants to re-evaluate from scratch." You've just lost 3 months of work because you didn't build a second bridge.

4. **Death by Late Security Surprise.** The deal progresses beautifully through discovery, demo, and POC. The technical win is declared. Then procurement sends a 400-question security questionnaire that reveals a data residency requirement you can't meet, or an encryption standard you don't support, or an integration with a GRC platform you've never heard of. The deal is frozen for 8 weeks while your security team scrambles. The competitor, who surfaced these questions in discovery, has already submitted their answers. They close. You don't.

5. **Death by Internal Champion Overload.** This is the opposite of "no champion." Your champion is *too* enthusiastic and takes on the entire internal selling burden themselves. They burn out. They face political resistance they didn't anticipate. They can't get a meeting with the economic buyer. The deal stalls because your champion ran out of organizational energy, and you never helped them share the load. Elite SEs don't just find champions — they coach champions, arm them with talking points, and help them distribute the internal selling effort.

6. **Death by Procurement Attrition.** The technical decision is made. Everyone agrees your solution is the best fit. But the contract sits in procurement for 4 months. Approvals are needed from legal, compliance, data protection, and finance — each with a 2-week SLA that nobody enforces. During those 4 months, the competitor calls the economic buyer and offers a 30% discount. Your deal doesn't die because the technology failed. It dies because the commercial process took so long that someone blinked.

> **War Story:** An SE ran a flawless POC. The prospect's engineering team wrote an internal report recommending her product unanimously. The champion forwarded the report to the VP of Engineering. The VP never read it. The champion assumed he had. Four months later, the VP chose a competitor based on a recommendation from a peer at another company. The champion called the AE in disbelief: "But we won the technical evaluation." They did. They lost the political evaluation. The SE never mapped the VP as a stakeholder because the champion kept saying "don't worry, he'll sign whatever I recommend." He didn't.

> **Failure Mode:** The SE who completes a beautiful demo and declares "my job is done, it's in the AE's hands now." They move on to the next deal while the current one bleeds out slowly in procurement. When the deal is marked Closed-Lost three months later, the SE is genuinely surprised. They don't connect their absence in the post-demo phase to the outcome because nobody taught them that deals are won or lost in the follow-through, not the performance.

**Interview Angle:**
"Tell me about a deal you lost and what you would do differently now."
A strong answer identifies a specific failure point, takes ownership of what they could have influenced, and describes a process change they adopted as a result. A weak answer blames the AE, the product, or the prospect.

**Practical Reference: The Deal Health Pulse Check**
Run this weekly on every active deal:

| Question | Healthy | At Risk |
|----------|---------|---------|
| Do we have an identified champion? | Yes, they're scheduling next steps | No, or they've gone quiet |
| Are we multi-threaded? | 3+ active contacts | 1 contact |
| Has security been discussed? | Yes, requirements documented | Not yet raised |
| Is there a mutual close plan? | Yes, shared timeline exists | No, dates are vague |
| Is the economic buyer aware? | Yes, briefed by champion | Unknown or not engaged |

If 3 or more answers are "At Risk," the deal needs intervention this week — not next month.

🟢 **Beginner** — Knowing where deals die doesn't prevent every death. But it makes you the SE who asks the uncomfortable questions early — which is the SE who saves the most deals.

---

## 0.2.4 How to Read a CRM Like a Deal Story

Your company's CRM — Salesforce, HubSpot, Dynamics, whatever — is not a data entry obligation. It's a living deal narrative. The problem is, most SEs treat it like a bureaucratic nuisance rather than a strategic intelligence tool. Meanwhile, the information that would have saved your last deal is sitting in a CRM field that nobody reads.

Here's how to extract signal from the noise:

1. **Read the AE's notes before every meeting.** This sounds obvious. It is not widely practised. Before any customer-facing interaction, open the opportunity record and read the last 5 activity entries. What did the AE discuss? What was promised? What objections were raised? Walking into a meeting without reading the CRM history is like a doctor walking into a follow-up appointment without reading the patient's chart. You'll ask questions that were already answered, miss context that was already established, and look like you don't care.

2. **Understand the pipeline stages.** Every CRM has a pipeline view that moves deals through stages (Qualification → Discovery → Demo → POC → Proposal → Closed). The stage definitions are specific to your company. Learn them. When an AE says a deal is "in Stage 3," you need to instantly know what that means in terms of SE involvement, expected deliverables, and probability of close. If you don't know your company's stage definitions by the end of your first month, ask your manager for the pipeline stage playbook.

3. **Check the close date — and be sceptical.** AEs are structurally incentivised to set optimistic close dates because it keeps their pipeline forecast looking healthy. If a deal has a close date of "end of this quarter" and there's no mutual close plan, no procurement engagement, and no legal review in progress — that deal is not closing this quarter. Your time allocation should reflect reality, not optimism.

4. **Look for ghost fields.** Most CRM setups include fields that are technically required but routinely left blank — MEDDPICC scores, competitor information, technical requirements, risk flags. If these fields are empty, it means the AE hasn't qualified the deal properly. That's your signal to dig deeper in discovery. If the "Identified Pain" field is blank and the deal is in Stage 4, something is very wrong.

5. **Log your own technical notes.** The CRM is not just the AE's responsibility. After every customer interaction, log a brief technical note: what architecture was discussed, what requirements were surfaced, what integration concerns were raised, and what's still unknown. These notes serve three purposes: they protect you if the deal goes sideways ("I flagged the data sovereignty risk in my notes on March 3rd"), they help the next SE if you're pulled off the deal, and they build a pattern library that makes your discovery sharper on the next deal.

6. **Use the CRM to forecast your own bandwidth.** Sort your active deals by stage and close date. Count how many POCs are in flight. Count how many demos are scheduled in the next two weeks. If you have 4 POCs running simultaneously, you don't have the capacity to take on a fifth — regardless of what the AE says. Use the CRM data to push back on overload with evidence, not emotion.

> **War Story:** An SE was assigned to a "hot deal" that the AE swore was closing in two weeks. The SE blocked out her entire week to prepare a custom demo. Before starting, she opened the CRM and read the activity history. The last customer interaction was 37 days ago. The "next steps" field said "prospect will circulate internally." The competitive field was blank. The MEDDPICC score was 2 out of 10. She called the AE and asked: "When was the last time you spoke to the champion?" Silence. The champion had gone dark three weeks ago. The deal wasn't hot — it was cold. The SE redirected her week to a deal that actually had momentum. That deal closed. The "hot deal" was Closed-Lost two months later.

> **Failure Mode:** The SE who never opens the CRM and relies entirely on the AE's verbal brief. The AE says "they love us, just do a quick demo and we'll close it." The SE runs the demo. The prospect asks about a competitor comparison that the AE never mentioned. The SE is blindsided. If they'd checked CRM, the competitor was logged in the record with notes from a previous conversation. They would have prepared a competitive positioning slide. Instead, they improvised poorly, and the competitor's SE — who clearly did their homework — won the technical evaluation.

**Interview Angle:**
"How do you use your company's CRM to prepare for customer engagements?"
A strong answer describes a systematic pre-call habit: reading activity history, checking qualification fields, and logging technical notes after calls. A weak answer says "I don't really use the CRM, I just ask the AE."

**Practical Reference: The 5-Minute CRM Pre-Call Checklist**
Before every customer meeting, check these 6 fields:

| Field | What You're Looking For |
|-------|------------------------|
| Last Activity Date | How recent? If > 21 days, deal may be stale |
| Close Date | Is it realistic given current stage? |
| Next Steps | Are they specific or vague? |
| Competitor | Who are we up against? |
| Champion | Is one identified? Is it the right person? |
| MEDDPICC / Qualification Score | Any blanks = blind spots you need to fill in discovery |

Takes 5 minutes. Saves you from walking into a meeting unprepared. Non-negotiable.

🟢 **Beginner** — At this level, simply building the habit of opening the CRM before every call puts you ahead of 50% of SEs in the industry. That's not an exaggeration — most SEs treat CRM as a post-activity logging chore, not a pre-activity intelligence source.
