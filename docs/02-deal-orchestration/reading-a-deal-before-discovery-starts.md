# 2.1 Reading a Deal Before Discovery Starts

## 2.1.1 Scoring Deal Quality in the First 15 Minutes

You don't need a 60-minute discovery call to know whether a deal is worth your investment. You need 15 minutes and five questions. The best SEs in the industry make their first resource-allocation decision within the first quarter-hour of engagement — not by gut feel, but by running a rapid quality score that separates real opportunities from pipeline theatre.

1. **Question 1: "What's happening in your business that made you take this meeting?"** This is the single most diagnostic question in presales. A real opportunity produces a specific answer: "Our data pipeline breaks every time the schema changes, and it's costing us 6 hours of engineering time per incident." A pipeline theatre opportunity produces a vague answer: "We're just exploring what's out there" or "My VP asked me to look at vendors." Specific pain with a quantifiable impact = high score. Vague exploration with no triggering event = low score. Note the difference between *exploring* (no urgency) and *evaluating* (urgency exists).

2. **Question 2: "Who else is involved in this decision?"** The answer tells you two things: whether the deal is single-threaded (dangerous) and whether you're talking to the right person. If the answer is "just me for now," the deal is either very early or politically orphaned. If the answer is "our VP of Engineering and our CISO are part of the evaluation committee," you have a structured buying process — which means the opportunity is real. The number and seniority of people involved is a direct proxy for deal seriousness.

3. **Question 3: "Have you evaluated solutions like ours before?"** Past evaluation behaviour predicts future evaluation behaviour. A prospect who looked at competitors 12 months ago and didn't buy is a different animal from a prospect evaluating for the first time. The first has established decision criteria, known objections, and potentially a failed implementation that created scar tissue. The second is a blank canvas. Both are valid opportunities — but they require completely different approaches. Knowing which one you're in prevents wasted effort.

4. **Question 4: "What does your timeline look like for making a decision?"** This is the urgency test. A prospect with a board mandate to have a solution in production by Q3 is a fundamentally different deal from a prospect who's "hoping to have something in place by year-end, maybe." The first has a forcing function. The second doesn't. Deals without forcing functions have an 80% probability of stalling, regardless of how strong your product is. Urgency is not something you create — it's something the prospect's business creates. You discover it or you discover its absence.

5. **Question 5: "Is there a budget allocated for this project?"** Ask it directly. SEs who avoid this question because it "feels too salesy" are giving themselves permission to invest weeks of effort in deals that have no funding. You don't need the exact number. You need one of three answers: "Yes, we've allocated budget" (green), "We're in the budget approval process" (yellow), or "We haven't discussed budget yet" (red). A red answer doesn't mean walk away — it means this deal needs commercial qualification before it gets technical investment.

**The 15-Minute Score:**

| Factor | Score 3 (Strong) | Score 2 (Moderate) | Score 1 (Weak) |
|--------|-----------------|-------------------|---------------|
| Pain specificity | Quantified, urgent | Acknowledged but vague | "Just exploring" |
| Stakeholder breadth | 3+ people, includes decision-maker | 2 people, evaluator level | Single contact, junior |
| Evaluation history | First time or active re-evaluation | Looked before, no decision | Perpetual "explorer" |
| Timeline | Hard deadline with business driver | General timeframe | "No rush" |
| Budget | Allocated or in approval | Not yet discussed but plausible | No budget conversation at all |

**Score 12–15:** Full investment — this deal is real.
**Score 8–11:** Conditional investment — address the weak factors before going deep.
**Score 5–7:** Minimal investment — this needs qualification, not a demo.

> **War Story:** An SE received 4 new deal requests on a Monday morning. Instead of accepting all 4, she ran a 15-minute qualification call on each one. Scores: 14, 11, 7, 6. She invested fully in the 14 and the 11, ran a light qualification process on the 7, and told the AE on the 6 to "come back when there's a champion and a timeline." By quarter end, the 14 and the 11 closed. The 7 stalled and eventually died. The 6 never progressed. She'd saved 80+ hours of effort by scoring quality on day one.

> **Failure Mode:** The SE who treats every new deal as equally deserving. They run full discoveries, build custom demos, and prepare detailed architectures for deals scoring 5–7. By mid-quarter, they're exhausted, their calendar is full, and their high-quality deals are being starved of attention. The 14-scoring deal that should have gotten their best work got their leftover energy instead. It slipped to next quarter. Equal effort is not fair — it's wasteful.

**Interview Angle:**
"How do you assess whether a new deal is worth your full investment?"
A strong answer describes a rapid qualification framework with specific criteria. A weak answer says "I give every deal my best effort."

🟡 **Mid-Level** — Deal scoring isn't about being selective for its own sake. It's about investing your finite bandwidth where it generates the highest return. This is portfolio management, not laziness.

---

## 2.1.2 The Fast No Framework

The most valuable skill an SE can develop is the ability to say "no" quickly, clearly, and without guilt. Not because they don't want to help — but because every hour spent on a deal that will never close is an hour stolen from a deal that could.

The Fast No Framework is a four-gate filter. If a deal fails any gate, it gets a "no" — or, more precisely, a "not yet, and here's what needs to change."

1. **Gate 1: Is there identified pain with business impact?** "We're looking at tools" is not pain. "Our reconciliation process takes 6 hours daily and has caused two regulatory findings this year" is pain. If the prospect can't articulate a specific problem with measurable consequences, the deal is exploratory — not evaluative. Fast No response: "I'd love to help, but to invest our engineering team's time, I need to understand the specific problem you're solving. Can we schedule a 30-minute discovery call to identify whether there's a fit?"

2. **Gate 2: Is there a champion who will sell internally?** You cannot sell to an organisation from the outside. You need someone on the inside who believes your solution is the right answer and who is willing to spend their political capital to advocate for it. If you have no champion, you have no deal — you have a series of meetings. Fast No response: "Who on your team would be the internal sponsor for this project? Without a clear sponsor, we typically find that evaluations don't progress past the initial stages."

3. **Gate 3: Is there a plausible path to budget?** Not "is there budget today" — but "can budget exist?" If the prospect says "we have $50K" and your solution starts at $200K, there isn't a plausible path. If the prospect says "we don't have budget yet, but our VP has committed to funding this initiative in Q2," that's plausible. Fast No response: "Our solution typically runs $X–$Y annually. Does that range align with what your team is expecting to invest? If not, let me suggest an alternative approach that might fit your budget."

4. **Gate 4: Can we technically win?** This is the SE's unique gate. The AE might not know that the prospect runs a mainframe-centric architecture that your cloud-native product can't integrate with. The AE might not know that the prospect's security requirements include certifications you don't have. If you assess that your product cannot meet the prospect's core requirements — not edge cases, but core requirements — the deal should be flagged immediately. Fast No response: "Based on what I'm hearing about your requirements, I want to be transparent: our platform is strong in areas X and Y, but I see a potential gap in area Z. Before we invest further, can we validate whether Z is a hard requirement?"

**What a Fast No sounds like:**

It never sounds like "no." It sounds like: "Here's what I'd need to see before we invest further." This preserves the relationship while protecting your time. If the AE pushes back, escalate with data: "I've scored this deal at 6/15 on our quality framework. I'm happy to re-engage when the champion is identified and the budget conversation has happened."

> **War Story:** An SE received a request to demo for a Fortune 500 company. The AE was ecstatic — "massive logo, huge potential." The SE ran a 15-minute qualification call. No identified pain (they were "future-proofing"). No champion (the person on the call was an analyst doing research). No timeline ("maybe next fiscal year"). The SE told the AE: "I'll send a pre-recorded demo and some case studies. If they come back with specific questions about their use case, I'll invest time in a live session. Right now, this isn't a deal — it's brand awareness." The AE was disappointed. Six months later, the analyst left the company. The "deal" evaporated. The SE had saved 20+ hours of effort by saying "not yet." A different SE on the team, facing the exact same situation with a different analyst at a different company, ran a full discovery, two custom demos, and a solution design. That deal also evaporated. That SE lost 60 hours.

> **Failure Mode:** The SE who can't say no because they're afraid of conflict with AEs or afraid of missing a deal that turns out to be real. So they say yes to everything, invest equally in everything, and produce mediocre results across the board. Their win rate is low not because they're bad at presales — but because they're spending 40% of their time on deals that were never going to close. The Fast No isn't about rejecting deals. It's about accelerating your investment toward deals that deserve it.

**Interview Angle:**
"Tell me about a time you recommended not pursuing a deal. What happened?"
A strong answer describes a specific deal, the qualification evidence that led to the recommendation, how it was communicated, and the outcome (vindicated by a loss or the deal not progressing). A weak answer can't recall ever recommending a "no."

**Practical Reference: The Fast No Email Template**

```
Hi [AE Name],

I've reviewed the [Prospect] opportunity and run an initial qualification. 
Here's my assessment:

- Pain: [Specific / Vague / Not Identified]
- Champion: [Named / Unnamed / None]
- Budget: [Allocated / In Process / Unknown]  
- Technical Fit: [Strong / Moderate / Gap in X]
- Quality Score: [X/15]

Recommendation: [Full investment / Conditional — need X before proceeding / Not ready for SE time]

Happy to re-engage when [specific condition] is met.
```

🟡 **Mid-Level** — The Fast No is the deal quality filter that protects your pipeline, your energy, and your win rate. Use it unapologetically.

---

## 2.1.3 Recognising a Fishing Expedition vs. a Real Opportunity

Not every prospect who agrees to a meeting wants to buy something. Some are collecting competitive intelligence for a vendor they've already chosen. Some are building a business case by gathering vendor proposals they'll never act on. Some are satisfying a procurement requirement to "evaluate three vendors" when their preferred supplier was selected months ago. These are fishing expeditions — and they will consume your time, your energy, and your optimism if you can't identify them early.

1. **Signal: the prospect won't share their current environment.** A real buyer has no reason to hide their architecture, their pain points, or their existing tools. A fishing expedition prospect deflects: "We'd rather not get into specifics right now — just show us what you can do." This is a red flag because it means one of two things: they don't trust you enough to share (in which case discovery needs to happen before a demo), or they don't want you to tailor your pitch because they're not actually comparing — they're just collecting.

2. **Signal: the evaluation criteria are pre-written and non-negotiable.** Real evaluations develop criteria collaboratively — the prospect describes their needs, and both sides shape the evaluation approach. Fishing expedition criteria arrive as a completed spreadsheet with 200 line items, many of which read like they were copied from a competitor's marketing material. If the criteria feel designed for someone else to win, they probably were.

3. **Signal: no access to the decision-maker.** If you're presenting to a team of analysts who "will take the findings to leadership," you're not in a deal — you're in a research project. Real deals involve decision-makers, or at minimum champions who have a direct line to the decision-maker and a mandate to recommend. Research projects involve people who are compiling options for someone else who may or may not act on them.

4. **Signal: the timeline is elastic or non-existent.** "We're not in a rush." "We want to take our time and do this right." "There's no hard deadline." These phrases are not signs of careful evaluation. They're signs that there's no compelling event driving the decision. Without a forcing function — a contract expiry, a regulatory deadline, a board initiative — deals in motion tend to stay in motion forever, which means they stay in your pipeline forever, consuming bandwidth without producing revenue.

5. **The validation test:** Tell the prospect something mildly unfavourable about your product. "Our platform doesn't support on-premise deployment — we're cloud-only." Watch their reaction. A real buyer will engage: "That's a concern — our security team has strong feelings about data residency." A fishing expedition prospect will note it politely and move on. Why? Because they don't actually care about your limitations — they're not building a real decision model. They're filling a spreadsheet.

> **War Story:** An SE spent 3 weeks preparing a custom demo, a solution architecture, and a detailed proposal for a prospect that looked perfect: Fortune 500, strong technical requirements, large potential deal size. When the SE sent the proposal, the prospect went dark. No response for 10 days. When the champion finally replied, she said: "Really appreciate the thorough work. We've decided to go with [incumbent vendor] — they offered a contract extension at a significant discount." The SE reviewed the signals retrospectively: the prospect had never shared their current architecture, the evaluation criteria arrived pre-written, and the decision-maker never attended a single meeting. Every signal of a fishing expedition was there. The SE had ignored them because the deal *looked* too good to walk away from.

> **Failure Mode:** The SE who can't distinguish between a cautious buyer (who is genuinely thorough but slow) and a fishing expedition (who is collecting information with no intent to act). The difference: cautious buyers ask hard questions because they need to build conviction. Fishing expedition prospects ask easy questions because they just need to check a box. If every question feels like it came from a template rather than from genuine curiosity, you're probably on a fishing expedition.

**Interview Angle:**
"How do you distinguish a real opportunity from a fishing expedition?"
A strong answer identifies specific signals (lack of access, pre-written criteria, elastic timeline) and describes a validation technique they use. A weak answer says "you can usually tell from the vibe."

**Practical Reference: The Fishing Expedition Scorecard**

| Signal | Real Opportunity | Fishing Expedition |
|--------|-----------------|-------------------|
| Prospect shares current architecture? | Yes, proactively | Deflects or gives minimal info |
| Evaluation criteria | Developed collaboratively | Arrived pre-written, non-negotiable |
| Decision-maker access | Available or on the calendar | "We'll take findings to leadership" |
| Timeline | Hard deadline with business driver | "No rush" / elastic |
| Questions asked | Specific, probing, sometimes hard | Generic, template-like, polite |
| Reaction to limitations | Engages, tests implications | Notes politely, moves on |

**If 4+ signals indicate "Fishing Expedition," reduce your investment to minimal effort and communicate the risk to your AE.**

🟡 **Mid-Level** — The best SEs don't avoid fishing expeditions — they identify them in the first 15 minutes and redirect their energy to real opportunities.

---

## 2.1.4 MEDDPICC Translation for Technical Stakeholders

MEDDPICC (Metrics, Economic Buyer, Decision Criteria, Decision Process, Paper Process, Identify Pain, Champion, Competition) is the dominant enterprise sales qualification methodology. AEs live and breathe it. SEs mostly ignore it — because the terminology feels like sales jargon, and the framework feels like an AE tool.

This is a mistake. MEDDPICC is the SE's most powerful deal intelligence framework — if you translate it into technical language.

1. **Metrics → Quantified technical pain.** The AE asks: "What are the business metrics this deal will impact?" The SE translation: "What's the measurable cost of the current technical problem?" Latency in milliseconds. Failed jobs per week. Hours of manual reconciliation. Cost of downtime per incident. Your job is to discover the technical metric that translates into the business metric the AE needs for the value prop. If the AE's metric is "reduce operational cost by 30%," your metric is "eliminate 22 hours/week of manual data pipeline monitoring." Same story, different language.

2. **Economic Buyer → The person who controls the money.** You may never meet the economic buyer directly, but you need to know what they care about. Ask the champion: "When this goes to [person with budget authority], what will they want to know?" The answer shapes your entire solution design. If the economic buyer cares about time-to-value, your architecture should prioritise a quick Phase 1 win. If they care about risk reduction, your architecture should emphasise security and compliance first.

3. **Decision Criteria → The technical evaluation rubric.** This is your domain. The decision criteria determine whether your product wins or loses the technical evaluation. If you're not involved in shaping these criteria, you're letting the prospect (or worse, your competitor) define the rules of the game. Engage early: "Based on what you've shared about your requirements, here are the criteria I'd recommend including in your evaluation. Do these align with what matters most to your team?"

4. **Decision Process → The sequence of steps from evaluation to purchase.** This includes technical evaluation (your domain), security review (your domain), and often legal/procurement (not your domain, but you need to know the timeline). Ask: "Walk me through what happens after our POC completes. Who reviews the results? What's the process for security approval? How long does procurement typically take?" Every week of unknown process is a week the deal can stall.

5. **Paper Process → The contract mechanics.** Not your primary domain, but you need to know whether your solution design creates procurement complications. If your architecture requires a data processing agreement (DPA) because you're handling PII, flag that early. If your solution requires a security addendum, prepare it in advance. Technical decisions that create legal surprises are the most common source of late-stage deal delays.

6. **Identify Pain → Technical discovery (your job).** This is the heart of what you do. See Section 3 for the full discovery framework. In the MEDDPICC context, your contribution is translating surface-level pain ("it's slow") into root-cause pain ("the batch processing architecture creates a 6-hour lag between data availability and reporting, which causes the finance team to make decisions on stale data").

7. **Champion → Your internal advocate.** As an SE, you build technical trust with the champion. You're often the relationship they value most — because you're the person who understands their daily reality. Invest in this relationship. Coach them: "When you present this to your VP, here's how I'd frame the technical value." Arm them with materials they can use without your presence.

8. **Competition → Your competitive positioning.** You need to know who you're competing against and what their technical strengths and weaknesses are. Build a competitive matrix for your top 3 competitors from the SE perspective: where they're stronger, where you're stronger, and where the prospect's specific requirements give you a natural advantage. Don't trash competitors. Out-position them.

> **War Story:** An SE joined a deal mid-cycle and asked the AE for the MEDDPICC qualification. Every field was filled in — but when the SE translated it into technical terms, the gaps became obvious. "Metrics" said "improve operational efficiency." The SE asked: "What does that mean technically? What's slow? What breaks? What costs money?" The AE couldn't answer — because the discovery had been commercial, not technical. The SE ran a 45-minute technical discovery call and uncovered the real metric: 400 failed data pipeline jobs per month, each requiring 45 minutes of manual intervention. That was 300 hours/month of engineering time — $540K/year. When the SE added that number to the MEDDPICC, the deal got escalated to the CFO's attention. It closed 3 weeks ahead of forecast.

> **Failure Mode:** The SE who dismisses MEDDPICC as "the AE's framework" and never looks at the deal qualification data. They run their technical process in isolation — great discovery, great demo, great POC — but they're blind to the commercial dynamics. The deal stalls in procurement and they're surprised. The champion leaves the company and they're surprised. The economic buyer kills the project because no one built a business case. If the SE had read the MEDDPICC, they'd have seen every one of these risks weeks earlier.

**Interview Angle:**
"How do you use deal qualification frameworks like MEDDPICC in your SE work?"
A strong answer describes specific elements they translate into technical context, with an example of how MEDDPICC intelligence changed their technical approach. A weak answer dismisses qualification frameworks as "the AE's job."

**Practical Reference: The SE's MEDDPICC Cheat Sheet**

| MEDDPICC Element | AE's Language | SE Translation | Your Contribution |
|-----------------|--------------|----------------|-------------------|
| Metrics | Revenue impact | Quantified technical pain | Discover the technical metric that drives the business metric |
| Economic Buyer | Budget holder | Ultimate decision-maker | Understand what they care about; design architecture accordingly |
| Decision Criteria | Buy vs. no-buy factors | Technical evaluation rubric | Shape the criteria to align with your strengths |
| Decision Process | Steps to purchase | Steps from technical win to close | Map the full timeline including security and procurement |
| Paper Process | Contract mechanics | Legal/compliance requirements | Flag technical decisions that create procurement complications |
| Identify Pain | Business pain | Root-cause technical diagnosis | Translate surface pain into measurable root cause |
| Champion | Internal advocate | Your trusted technical contact | Coach them, arm them, keep them informed |
| Competition | Competitive landscape | Technical differentiation | Build SE-level competitive matrix |

🟡 **Mid-Level** — MEDDPICC isn't a sales tool. It's a deal intelligence system. The SE who can read and contribute to MEDDPICC has visibility into the full deal dynamics — not just the technical slice.
