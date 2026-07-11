# 3.4 Stakeholder Mapping

## 3.4.1 Isolating the True Economic Buyer

The economic buyer is the person who can say "yes" to the expenditure — the person with unilateral authority to approve budget allocation for your deal. In MEDDPICC language, they're the "E." In practical terms, they're the most important person you'll never meet enough.

Most SEs never interact with the economic buyer directly. They deal with the champion, the technical evaluators, and occasionally the champion's manager. The economic buyer exists somewhere above — making the decision based on information filtered through layers of internal communication. Your job is to identify them, understand what they care about, and arm your champion to sell to them.

1. **The economic buyer is not always who the AE thinks it is.** AEs often identify the economic buyer based on title — "the VP of Engineering" or "the CTO." But budget authority doesn't always follow the org chart. In many organisations, budget for technology purchases sits with the business line (the VP of Operations, the CMO, or the CFO), not with the technology team. The CTO may have a strong opinion about which product to buy, but the budget to buy it comes from a different pocket. Ask the champion: "When the purchase order is created, whose budget does it come from?" That person is the economic buyer.

2. **Test with the "funding question."** "If your evaluation concludes that our solution is the best fit, who signs off on the expenditure?" This is a cleaner question than "who is the decision-maker?" because decision-making is collaborative (many people influence it) while expenditure authority is specific (one person controls the budget). The champion's answer reveals the true economic buyer — and often reveals that the champion doesn't know, which is itself a critical data point.

3. **Understand what the economic buyer measures.** Economic buyers don't care about features, architecture elegance, or technical differentiators. They care about: time to value ("how quickly does this generate return?"), risk mitigation ("what happens if it fails?"), total cost of ownership ("what's the all-in cost over 3 years, including implementation?"), and strategic alignment ("does this support our company's stated priorities?"). Your champion's pitch to the economic buyer must be in this language, not in technical language. If you arm your champion with a technical architecture document, they'll struggle. If you arm them with a one-page business impact summary, they'll have a tool designed for the audience.

4. **Create the artefact the economic buyer will read.** The economic buyer will receive a packet of information from the champion. Most of that packet will be ignored. The one document they will read is the executive summary — a single page that answers: what is the problem (in business terms), what is the proposed solution (in outcome terms, not feature terms), what does it cost, what does it save, and what is the timeline to value. You should write this document — not the AE, not the champion — because you're the person who best understands the technical solution and the quantified pain.

5. **Seek a direct interaction when possible.** The most effective deal acceleration is a direct meeting between your team and the economic buyer. An Executive Briefing — a 30-minute session where you present the business case (not the product) to the economic buyer — can compress weeks of internal selling into a single conversation. Not every deal warrants this, and not every champion can arrange it. But when it's possible, it's the highest-ROI meeting in the deal cycle.

> **War Story:** An SE was working a deal where the champion insisted the CTO was the economic buyer. For 3 months, the SE designed the architecture, built the POC, and framed the value narrative for a CTO audience. When the deal reached procurement, it was denied. Not by the CTO — by the CFO, who had never been briefed and didn't understand why $800K of IT budget should go to a data pipeline tool. The CTO had influence. The CFO had the budget. The SE had been selling to the wrong person's priorities for an entire quarter. After the deal was revived (3 weeks of emergency executive briefings), the SE now asks every champion: "Walk me through the approval process for a purchase of this size. Who has to say yes, and in what order?"

> **Failure Mode:** The SE who assumes the champion can sell internally without help. Champions are technically competent, but they rarely have practice presenting business cases to their CFO. They'll present the architecture diagram instead of the business impact summary. They'll lead with features instead of outcomes. They'll answer "why this product?" instead of "why this investment now?" Arm them. Coach them. Give them the document they need.

**Interview Angle:**
"How do you identify and engage the economic buyer in your deals?"
A strong answer describes specific techniques (the funding question, executive briefing, champion coaching). A weak answer conflates the decision committee with the economic buyer.

**Practical Reference: The Economic Buyer Discovery Questions**

| Question | Purpose |
|----------|---------|
| "When the purchase order is created, whose budget does it come from?" | Identify the actual budget owner |
| "What's the approval process for a purchase of this size?" | Map the funding chain |
| "Has your [EB title] been briefed on this initiative?" | Assess EB awareness |
| "What does your [EB title] care about most this year?" | Align your value narrative |
| "Would an executive briefing for your leadership be valuable?" | Create direct access |

🟡 **Mid-Level** — Deals are won in the evaluation. Deals are funded by the economic buyer. If you only focus on the first, you'll win evaluations that never get funded.

---

## 3.4.2 Uncovering Silent Detractors

The most dangerous person in a deal isn't the one who argues with you in meetings. It's the one who says nothing in meetings and then argues against you in the internal discussions you'll never see. Silent detractors kill deals because they exercise their influence in the shadows — in hallway conversations, Slack messages, and 1:1s with the economic buyer that happen without your knowledge.

1. **Why detractors stay silent.** They're not silent because they agree with you. They're silent because they've already decided against you and don't see value in debating it publicly. Or they're silent because they don't want to create conflict in front of a vendor. Or they're silent because they're waiting to voice their concerns in the internal decision meeting — where you won't be present and won't be able to respond. All three scenarios are dangerous.

2. **The "go-around" technique.** At the end of every multi-stakeholder meeting, address each person individually: "Sarah, I want to make sure I've addressed your team's concerns. Is there anything specific about security that you'd want us to dive deeper into?" "James, from an infrastructure perspective, did anything come up today that you'd want to explore further?" The go-around gives each person a direct, personal invitation to raise concerns. Silent detractors often break their silence when directly and politely asked — because refusing to answer a direct question is socially more difficult than remaining silent during a group discussion.

3. **Ask the champion who's sceptical.** Champions know who the detractors are — they work with them daily. "Is there anyone on the evaluation team who has reservations about this project, or about working with an external vendor specifically?" Champions will usually share this intelligence, sometimes with relief: "Yeah, our VP of Infrastructure is convinced he can build this internally. He hasn't said it publicly, but he's been vocal about it in our leadership meetings."

4. **Watch for passive resistance signals.** The detractor who doesn't attend scheduled meetings. The detractor who sends a delegate instead of coming themselves. The detractor who submits evaluation criteria that are designed around a competitor's strengths. The detractor who delays their portion of the security review. These are all forms of passive resistance — and they're more corrosive than active opposition because they're harder to address directly.

5. **Convert or neutralise, don't ignore.** You have two options with a silent detractor: convert them by addressing their specific (but unstated) concern, or neutralise them by ensuring the other stakeholders have strong enough conviction to proceed despite the objection. Converting is better: request a 1:1 meeting. "I'd love to spend 30 minutes understanding your team's specific requirements. I want to make sure our solution addresses the infrastructure perspective, not just the data perspective." In the 1:1, the detractor often opens up — because the social dynamics of a 1:1 are different from a group meeting.

> **War Story:** An SE was running a deal that seemed to be going perfectly. Three stakeholders attending every meeting. All questions answered. POC criteria agreed. Then, two days before the POC kickoff, the champion called: "Bad news. Our VP of Architecture vetoed the POC. He thinks we should build this ourselves." The VP had attended one meeting, said nothing, and then killed the deal in a leadership meeting the next day. The SE had noticed the VP's silence but hadn't probed it. After this loss, the SE implemented a rule: if any stakeholder is silent for more than one meeting, request a direct 1:1. The cost of a 30-minute conversation is negligible. The cost of an undetected veto is catastrophic.

> **Failure Mode:** The SE who interprets silence as agreement. "Nobody raised any concerns in the meeting, so we must be in good shape." This interpretation is almost always wrong in enterprise sales. Stakeholders who agree are often the most vocal. Stakeholders who disagree are often the most silent. The absence of objection is not the presence of agreement.

**Interview Angle:**
"How do you handle stakeholders who are quiet or disengaged during evaluations?"
A strong answer describes proactive techniques (go-around, 1:1 requests, champion intelligence). A weak answer says "I focus on the people who are engaged."

🟡 **Mid-Level** — Silence in enterprise deals is never neutral. It's either agreement or concealed opposition. Always assume the latter until proven otherwise.

---

## 3.4.3 Loading Questions to Expose Competitor Weaknesses

Every deal has a competitor — either a named vendor or the prospect's option to build internally, do nothing, or renew the incumbent. Your discovery questions should subtly surface the areas where your competitor is weakest while your solution is strongest. This isn't manipulation — it's positioning. You're shaping the evaluation criteria around the capabilities that matter most, which happen to be the capabilities where you have the strongest differentiation.

The key word is *subtly*. Heavy-handed competitor bashing destroys credibility. Surgical competitive questioning builds it.

1. **The "experience" question.** If your competitor is weak on customer experience (complex onboarding, poor support), ask: "How important is it to your team that the implementation process is guided and predictable? Have you had experiences with vendors where the onboarding was more complex than expected?" This question naturally surfaces past frustrations with vendors who have poor implementation experiences — without naming any competitor. If the prospect describes a bad onboarding (which is common), you've anchored the evaluation around implementation quality.

2. **The "at scale" question.** If your competitor struggles at high data volumes, ask: "What happens to your pipeline when data volumes spike — say, during end-of-quarter or seasonal peaks? How confident are you that any solution you evaluate needs to handle 3–5x your current daily volume without degradation?" You've made scale a primary evaluation criterion — and positioned it in terms of the prospect's real-world scenario, not an abstract benchmark.

3. **The "flexible architecture" question.** If your competitor is rigid (limited deployment options, single-cloud, or monolithic architecture), ask: "Your infrastructure will evolve over the next 3 years. Does the solution you choose need to support multi-cloud, hybrid deployment, or a change in your tech stack without a rip-and-replace?" The prospect will likely say yes — and you've established architectural flexibility as a criterion where your solution excels.

4. **The "total cost" question.** If your competitor has hidden costs (professional services, per-connector charges, overage fees), ask: "Beyond the license cost, what's your expectation for total cost of ownership? Some solutions in this space charge separately for implementation, connectors, premium support, and data overage. How important is pricing predictability for your budgeting process?" This loads the evaluation toward total transparency — and positions competitors who nickel-and-dime as a risk.

5. **The "roadmap trust" question.** If your competitor makes promises about future features that don't materialise, ask: "If a vendor promises a capability that's on their roadmap but not yet available, how would your team evaluate that? Would you be comfortable making a decision based on roadmap commitments, or do you need to test production-ready capabilities?" This question makes the prospect wary of roadmap promises — which is exactly where your competitor is most vulnerable.

**The ethical line:** Competitive positioning is legitimate. Competitive dishonesty is not. Never assert something false about a competitor. Never exaggerate their weaknesses. Never name them unless the prospect brings them up first. Your goal is to shape the evaluation criteria so that the prospect independently discovers the competitor's limitations — through their own testing, their own questions, and their own analysis.

> **War Story:** An SE was competing against a well-known incumbent. The incumbent had a strong brand but a notorious scaling problem at high transaction volumes. During discovery, the SE asked the prospect's Data Engineering Lead: "What's the maximum transaction rate you need to support during peak periods?" Answer: "About 50K events per second during our Black Friday sale." SE: "And how do you currently test for that capacity before peak season?" Answer: "We don't — we just hope it works." SE: "In our POC, would it be valuable to include a load test at 2x your peak volume — 100K events per second — to give your team confidence before the next Black Friday?" The prospect agreed. The POC included a load test. The SE's solution handled 120K events/second. The competitor's solution (which the prospect tested independently) degraded significantly beyond 40K. The SE never mentioned the competitor's weakness. The evaluation criteria made it visible.

> **Failure Mode:** The SE who trash-talks competitors directly. "Their platform can't scale. Their support is terrible. Their pricing is predatory." Even if all of these statements are true, asserting them makes you look desperate and unprofessional. The prospect immediately wonders: "If they're spending time attacking the competition instead of showing me their product, maybe their product can't stand on its own merits." Let the criteria do the work. Let the prospect draw the conclusions.

**Interview Angle:**
"How do you handle competitive situations without resorting to direct competitor criticism?"
A strong answer describes criteria-shaping through discovery questions that surface competitor weaknesses organically. A weak answer describes either avoiding competitive discussions entirely or engaging in direct competitor criticism.

🟡 **Mid-Level** — The best competitive strategy isn't attacking. It's positioning. Shape the criteria. Let the competition reveal their own weaknesses through the prospect's evaluation process.

---

## 3.4.4 The Org Chart You Draw vs. The One That Matters

Every large deal requires an org chart. The question is: which org chart? The one HR publishes — where boxes and lines represent formal reporting relationships — or the one that actually governs how decisions are made?

In enterprise organisations, formal authority and actual influence are rarely the same thing. The CTO may sit at the top of the technology org chart but defer technical decisions to a Principal Engineer who's been at the company for 15 years. The VP of Data may own the budget but rely entirely on a Senior Director to make vendor recommendations. The CISO may have formal veto authority but only exercises it when prompted by a Security Architect who secretly runs the InfoSec evaluation.

The org chart you draw in your CRM tells you who reports to whom. The influence map you draw tells you who listens to whom. The second one determines whether your deal closes.

1. **Build the influence map, not the org chart.** For every deal with 4+ stakeholders, map: who influences whom (trust-based relationships, not reporting lines), who has veto authority (formal or informal), who gains or loses from this purchase decision (political interests), and who the economic buyer listens to most (the trusted advisor, not necessarily a direct report). Draw lines of influence, not lines of authority.

2. **Identify the "grey eminence."** In many organisations, there's a person who has no formal authority over the decision but whose opinion is disproportionately influential. They might be a long-tenured architect, a former CTO who's now an IC, or a board advisor who drops into technology conversations. They don't attend vendor meetings. They don't appear in org charts. But when they say "I don't think this is the right solution," the deal dies. Your champion knows who this person is. Ask: "Is there anyone whose technical opinion carries unusual weight with the decision-makers — even if they're not on the evaluation committee?"

3. **Map motivations, not just positions.** For each person on your influence map, understand their personal motivation: are they a builder (wants the best technical solution), a politician (wants the option that advances their career), a protector (wants the safest option with the least risk), or a disruptor (wants to change the status quo)? Your narrative to each person should match their motivation. The builder wants architecture depth. The politician wants to champion a successful project. The protector wants risk mitigation and references. The disruptor wants innovation and competitive advantage.

4. **Track changes in the influence map.** Organisations are dynamic. People get promoted, transferred, or fired. New leaders join with new priorities. Budget authority shifts between departments. Your influence map should be reviewed and updated at every deal milestone. If you built the map at the discovery stage and never updated it, the map you're using during the POC may be fiction.

5. **Share your map with the champion.** When you present your understanding of the decision dynamics to the champion, you validate (or correct) your assumptions and build trust. "Here's how I understand the decision dynamics: the CTO has budget authority, your VP makes the recommendation, and the Principal Architect has informal veto power. Is that accurate?" Champions appreciate this because it shows strategic awareness — and they'll correct you if you're wrong, which is even more valuable.

> **War Story:** An SE drew the standard org chart for a deal: CTO → VP Engineering → Director of Data → Senior Engineers (evaluation team). The deal was progressing well with the Director and the VPs. Two weeks before the expected decision, the SE learned that the company had recently created a "Technology Advisory Board" — three external consultants who reviewed all vendor selections above $500K. This board wasn't on any internal org chart because they were external. The SE had no relationship with any of the three consultants. The advisory board recommended a competitor. The deal was lost. The formal org chart was accurate. The actual decision structure was invisible.

> **Failure Mode:** The SE who relies on the CRM org chart and never investigates influence dynamics. They engage the people in the boxes, follow the lines, and assume that decisions flow naturally from the bottom of the chart to the top. In reality, decisions flow through trust networks, political alliances, and shadow governance structures that no CRM has ever captured. The org chart is a legal document. The influence map is a political document. Politics determine enterprise purchases.

**Interview Angle:**
"How do you map the decision-making dynamics within a prospect's organisation?"
A strong answer distinguishes between formal authority and informal influence, describes techniques for identifying hidden influencers, and provides an example. A weak answer describes "mapping the org chart."

🟡 **Mid-Level** — The org chart tells you structure. The influence map tells you power. In enterprise sales, power closes deals.
