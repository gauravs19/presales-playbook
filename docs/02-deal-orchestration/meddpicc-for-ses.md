#### 2.1.4 MEDDPICC Translation for Technical Stakeholders

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

---
