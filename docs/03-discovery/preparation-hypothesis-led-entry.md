# 3.1 Preparation & Hypothesis-Led Entry

## 3.1.1 Pre-Call LinkedIn & Earnings Transcript Recon

The SE who walks into a discovery call without researching their prospect is gambling with the most precious resource in presales: first impression credibility. The first 5 minutes of a discovery call determine whether the prospect mentally categorises you as "vendor who will waste my time" or "professional who has done their homework." Research is the difference.

And the research doesn't need to take long. Fifteen minutes of structured recon produces disproportionate ROI.

1. **LinkedIn: the people, not the company.** Start with the individuals who will be on the call, not the company page. For each person, note: their tenure (new in role = different dynamic than 10-year veteran), their career trajectory (came from a competitor's customer? — they know the space), their recent activity (liked a post about cloud migration? — that's a signal), and mutual connections (your SE peer worked at their previous company? — warm introduction possibility). The specific insight you're looking for: what does this person care about professionally right now?

2. **Earnings transcripts: the company's actual priorities.** For publicly traded companies, the most recent quarterly earnings call transcript is a goldmine. Search for mentions of: technology investments ("We're investing $40M in digital transformation this year"), operational challenges ("Our legacy systems are creating reconciliation delays"), and strategic initiatives ("We plan to expand into three new European markets by Q4"). These aren't vague signals — they're public commitments by the CEO to shareholders. When you reference them in discovery, you're speaking the language of their C-suite.

3. **Annual reports and 10-K filings.** For deep enterprise deals, skim the risk factors section of the 10-K. This section lists the company's self-identified vulnerabilities — regulatory risks, technology debt, competitive threats. If your product addresses one of these risk factors, you have a ready-made business case: "Your 10-K identifies data governance as a material risk. Our platform directly addresses the auditability and lineage requirements that would mitigate that risk."

4. **Recent news and press releases.** A 2-minute Google News search reveals: recent acquisitions (integration complexity incoming), leadership changes (new CTO = new vendor evaluations), product launches (scaling challenges), and regulatory actions (compliance urgency). Each of these is a potential discovery entry point. "I noticed your company recently acquired [Company X]. Integration projects like that often surface data pipeline complexity that wasn't visible before the acquisition. Is that something your team is experiencing?"

5. **Their technology stack.** Use tools like BuiltWith, Wappalyzer, or simply browse their job postings to identify their current technology stack. If they're hiring Snowflake engineers, they're investing in cloud data. If they're posting for Kubernetes engineers, they're containerising. If they're hiring SIEM analysts, security is top of mind. Job postings are a live roadmap of a company's technical priorities.

> **War Story:** An SE was preparing for a discovery call with the VP of Data Engineering at a logistics company. Her 15-minute recon uncovered: the VP had been in role for 4 months (new hire = looking to make an impact), the company's latest earnings call mentioned "operational efficiency improvements through data modernisation," and their job postings showed 6 open positions for Apache Kafka engineers (real-time streaming is a priority). She opened the call: "Congratulations on the new role — I know the first few months are about understanding the landscape. I noticed your team is investing heavily in streaming infrastructure. We work with several logistics companies on real-time pipeline architectures. I'd love to understand what's driving that investment on your side." The VP's response: "You're the first vendor who didn't open with a product pitch. Let's talk." That single opening — informed by 15 minutes of research — set the tone for a deal that closed at $480K.

> **Failure Mode:** The SE who opens every discovery call with: "So, tell me about your company." This question broadcasts: "I did zero research." The prospect thinks: "I'm about to waste 30 minutes explaining my business to someone who should have spent 10 minutes on Google." First impression: damaged. Trust gap: widened. The demo jockey reputation: reinforced.

**Interview Angle:**
"How do you prepare for a first meeting with a new prospect?"
A strong answer describes a specific research routine (LinkedIn, earnings, news, tech stack) with an example of how research informed the conversation. A weak answer says "I review the CRM notes and the company website."

**Practical Reference: The 15-Minute Pre-Call Recon Checklist**

| Source | Time | What to Look For | Where to Use It |
|--------|------|-----------------|----------------|
| LinkedIn (people) | 5 min | Tenure, trajectory, recent activity, mutual connections | Personalised opening, rapport building |
| Earnings transcript / 10-K | 5 min | Technology investments, operational challenges, strategic priorities | Hypothesis formation, pain framing |
| News + press releases | 3 min | Acquisitions, leadership changes, regulatory actions | Discovery entry points |
| Job postings / tech stack | 2 min | Technology investments, team scaling, infrastructure priorities | Technical discovery anchoring |

🟢 **Entry-Level** — This checklist is non-negotiable. Do it before every first meeting. No exceptions.

---

## 3.1.2 Formulating the Hypothesis Before You Ask

Most SEs walk into discovery calls with a list of questions. Good SEs walk into discovery calls with a hypothesis — a specific, falsifiable belief about what the prospect's problem is, what's causing it, and what the impact might be. The hypothesis doesn't need to be right. It needs to be specific enough to provoke a reaction that reveals the truth.

The difference: a question-led discovery says "Tell me about your challenges." A hypothesis-led discovery says "Based on what I've seen in companies your size running similar architecture, I'd guess your main bottleneck is the overnight batch processing window — it's probably running 6–8 hours and causing your morning reports to be stale. Am I close?"

1. **Why hypotheses work better than open questions.** Open questions ("What are your biggest challenges?") put the cognitive burden on the prospect. They have to think about their entire landscape, prioritise, and articulate — all while a stranger is listening. Most prospects default to surface-level answers because deep reflection requires trust that hasn't been built yet. A hypothesis flips the dynamic: you do the thinking, and the prospect reacts. Reacting is cognitively easier than generating. And their reaction — "Yes, exactly" or "Actually, it's not the batch window, it's the schema changes that break the pipeline" — gives you deeper information than any open question would.

2. **Build your hypothesis from three sources.** Source 1: your pre-call research (Section 3.1.1) — what you learned about their company, industry, and personnel. Source 2: pattern matching from similar deals — "Companies in financial services with legacy mainframe architectures almost always have a reconciliation problem." Source 3: information from your AE or champion — anything shared in pre-brief or CRM notes. Combine these sources into a 1–2 sentence hypothesis: "I believe your team is spending more than 20 hours per week on manual data quality remediation because your legacy ETL pipelines don't have schema drift detection."

3. **Present the hypothesis with permission.** Don't assert your hypothesis as fact. Frame it as a testable assumption: "Based on what I've seen in similar environments, here's my working theory about what might be happening. I'd love for you to tell me where I'm right and where I'm off." This framing accomplishes three things: it demonstrates expertise (you've seen this pattern before), it invites correction (the prospect feels empowered, not lectured), and it accelerates the conversation (you skip 10 minutes of surface-level questioning and jump to the real issue).

4. **A wrong hypothesis is more useful than no hypothesis.** If your hypothesis is wrong, the prospect will correct you — and their correction contains the real answer. "Actually, the batch window isn't our problem. It's the fact that three different teams are writing to the same data lake without any governance, and we have no idea which version of the data is correct." You just got a deeper, more specific answer than any open question would have produced. Being wrong with specificity creates better conversations than being vague with openness.

5. **Prepare 2–3 hypotheses per call.** Don't rely on a single hypothesis. Prepare a primary hypothesis (the most likely problem based on your research) and two secondary hypotheses (alternative problems that are common in similar environments). If the primary doesn't land, pivot: "Interesting — the batch window isn't the issue. Let me test another theory: are you seeing challenges with data lineage or auditability, particularly around regulatory reporting?"

> **War Story:** An SE walking into a discovery call with a healthcare SaaS company prepared three hypotheses. Primary: "Their HIPAA compliance reporting is manual and takes 2+ weeks per quarter." Secondary 1: "Their patient data integration between EHR systems is fragmented." Secondary 2: "Their analytics team can't access production data due to PHI restrictions, so they're working with stale copies." The primary hypothesis was wrong — their compliance reporting was actually well-automated. But when she pivoted to hypothesis 2, the VP of Engineering lit up: "That's exactly our problem. We have 4 EHR systems feeding into a data warehouse with no real-time reconciliation. Our care coordination team is making decisions on 24-hour-old patient data." That single accurate hypothesis — the backup, not the primary — became the anchor for a deal that closed at $720K. If she'd used open questions, she would have spent 20 minutes fishing. The hypothesis got her there in 3.

> **Failure Mode:** The SE who uses hypotheses as disguised product pitches. "I hypothesise that your current solution doesn't have real-time CDC capabilities, which is causing data latency." That's not a hypothesis — it's a leading question designed to create a gap that your product fills. Prospects see through this instantly. A genuine hypothesis is about *their* problem. A disguised pitch is about *your* product. The difference is obvious to anyone who's been sold to before.

**Interview Angle:**
"How do you approach the first discovery call with a new prospect?"
A strong answer describes hypothesis formation, the research that informs it, and the technique for presenting it. A weak answer describes "asking open-ended questions to understand their needs."

**Practical Reference: The Hypothesis Formation Template**

```
Company: [Name]
Industry: [Vertical]

Research Signals:
- [Signal 1 from earnings/news]
- [Signal 2 from LinkedIn/job postings]
- [Signal 3 from AE/champion intel]

Primary Hypothesis:
"Based on [signals], I believe [specific problem] is causing [specific impact]."

Secondary Hypothesis 1:
"Alternatively, [different problem] may be driving [different impact]."

Secondary Hypothesis 2:
"It's also possible that [third problem] is their primary concern."

Opening: "I've done some research and I have a working theory about 
what your team might be dealing with. Can I share it and have you 
tell me where I'm right and where I'm off?"
```

🟡 **Mid-Level** — Hypothesis-led discovery is the technique that separates Senior SEs from everyone else. It demonstrates expertise, accelerates insight, and builds trust faster than any question list.

---

## 3.1.3 Mapping Political Landmines Before You Walk In

Every organisation has politics. Every deal is influenced by those politics. The SE who ignores the political landscape and focuses exclusively on technical merit will be blindsided by decisions that "don't make sense" — because they make perfect sense when you understand the power dynamics behind them.

Political mapping isn't manipulation. It's situational awareness. You can't navigate a minefield you can't see.

1. **Ask the champion directly.** Most SEs are afraid to ask about internal politics because it feels invasive. It's not — it's practical. "Who in your organisation might have concerns about this project, and why?" Champions will tell you because they're navigating the same politics daily. Common answers: "Our VP of Infrastructure doesn't want to move to the cloud because he built the on-prem environment." "The CISO is suspicious of any vendor that isn't on the approved list." "The Director of Data Engineering just joined from [Competitor], and she's loyal to their platform." Each of these is a political landmine that will detonate during your evaluation if you don't see it coming.

2. **Map the decision-making axis.** In every deal, there are two axes of power: formal authority (who has the title and budget to approve the purchase) and informal influence (who shapes opinions and can block decisions without formal authority). These often don't overlap. The CTO has formal authority but the Principal Engineer has informal influence — because the CTO trusts her judgement and won't approve anything she vetoes. If you're only engaging the CTO, you're missing the actual decision-maker.

3. **Identify the "build vs. buy" advocate.** In almost every enterprise deal, someone on the prospect's side believes they can build the solution internally. This person is the most dangerous political opponent — not because they're wrong (sometimes they're right), but because their opposition is deeply personal. They're not just evaluating your product; they're defending their team's capability and their own relevance. Engage them with respect: "Your team clearly has the expertise to build this. The question isn't capability — it's bandwidth and opportunity cost. What would your engineers build if they weren't building this?"

4. **Watch for the silent veto.** Some stakeholders won't say a word during your evaluation. They'll attend meetings, listen quietly, and never raise an objection. Then, in the internal decision meeting that you're not invited to, they'll say: "I don't think this is the right solution." And the deal dies. Silent vetoes come from people who feel they weren't adequately consulted or whose concerns were never addressed. Your defence: at the end of every multi-stakeholder meeting, go around the room: "Is there anything we haven't addressed that's important to you?" Direct the question at the quiet ones. If they have a concern, surface it now — not in a meeting you'll never attend.

5. **Map the political landscape visually.** Create a simple influence map for every deal with 4+ stakeholders. For each person: their name, their role, their formal authority level, their informal influence level, their stance (advocate / neutral / sceptic / blocker), and their primary motivator (career advancement, risk avoidance, team protection, budget conservation). Review this map before every meeting and update it after.

> **War Story:** An SE was running a deal at a large insurance company. The champion — a Senior Director — was enthusiastic. The CTO was supportive. The discovery was excellent. The POC was successful. Two weeks before the expected close, the deal was killed. The SE was devastated. In the debrief, the champion revealed: "The VP of Enterprise Architecture vetoed the project. He was never in any of our meetings because we didn't think his approval was needed. But it turns out, any new infrastructure purchase over $200K requires his sign-off." The SE had mapped the champion and the CTO but missed a stakeholder with veto authority who'd never been visible. The VP's concern — a valid one about integration with their existing service mesh — was never addressed because nobody knew to address it. One unmapped stakeholder. One invisible veto. One dead deal.

> **Failure Mode:** The SE who assumes that enthusiasm from the champion means alignment across the organisation. "Our champion loves us, so the deal will close." Champions don't close deals. Organisations close deals — and organisations are made up of people with competing priorities, insecurities, and career ambitions. If your champion is the only person in the room when the decision is made, their voice is one among many. Map the many.

**Interview Angle:**
"How do you navigate internal politics within a prospect's organisation?"
A strong answer describes proactive political mapping (asking the champion, identifying informal influencers, watching for silent vetoes). A weak answer says "I focus on the technical merits and let the AE handle the politics."

**Practical Reference: The Political Influence Map**

| Name | Title | Formal Authority (1-5) | Informal Influence (1-5) | Stance | Primary Motivator | Risk | My Last Contact |
|------|-------|----------------------|------------------------|--------|-------------------|------|----------------|
| | CTO | 5 | 4 | Advocate | Innovation | Low | |
| | VP Infra | 4 | 5 | Sceptic | Team protection | High — potential veto | |
| | Dir. Data Eng | 3 | 3 | Neutral | Career advance | Medium | |
| | Principal Eng | 2 | 5 | Unknown | Technical quality | High — informal authority | |
| | CISO | 4 | 3 | Unknown | Risk avoidance | Medium — compliance gate | |

**Gaps in this map = gaps in your deal awareness. Fill them before they become surprises.**

🟡 **Mid-Level** — Political mapping isn't optional presales work. It's the work that determines whether your technical win converts to a commercial win or dies in a conference room you were never invited to.

---

## 3.1.4 The Pre-Flight AE Alignment Checklist

The 5 minutes before a discovery call are the most frequently wasted 5 minutes in presales. The AE is multitasking. The SE is reviewing notes. Neither has confirmed: who's opening, who's asking what, what the call's objective is, or what the agreed next step should be. The result is a meeting where two professionals improvise in front of a prospect — and improvisation in enterprise sales is just a polite word for unpreparedness.

The Pre-Flight Alignment takes 5 minutes. It prevents 50 minutes of dysfunction.

1. **Confirm the call objective.** Not "learn about them." A specific, measurable objective: "Confirm whether they have a data pipeline scaling problem, identify who owns the budget, and propose a technical deep-dive as the next step." If the AE's objective is "build rapport" and yours is "run technical discovery," you need to reconcile before the call starts, not during it.

2. **Agree on roles and flow.** "You open with 3 minutes of context and agenda. I take over at minute 5 with discovery questions. You handle any pricing questions — if they ask me, I'll redirect to you. I'll drive the next step proposal at minute 25." This script takes 30 seconds to agree on and prevents the two most common meeting dysfunctions: talking over each other and awkward silences when neither person knows whose turn it is.

3. **Share your hypothesis with the AE.** "Based on my research, I think their main pain is the batch processing bottleneck. I'm going to test that hypothesis in the first 10 minutes." This gives the AE context to support your line of questioning rather than derail it. If the AE has contradicting information — "Actually, the champion told me it's about data governance, not batch processing" — better to know now than in minute 15 of the call.

4. **Align on the "walk-away" signal.** Sometimes, mid-discovery, it becomes clear that the deal isn't real — no pain, no budget, no urgency. Pre-agree on a signal: "If I sense this is exploratory with no near-term action, I'll start wrapping up at minute 15 instead of running the full 30. When I say 'Let me make sure we're focusing on what's most valuable for you,' that's my cue that I'm about to redirect." This prevents the SE from running a full discovery on a non-deal while the AE sits there hoping for a different outcome.

5. **Confirm what "success" looks like.** What needs to be true at the end of this call for it to have been worth everyone's time? "Success is: we've confirmed a quantifiable pain, identified the next stakeholder to engage, and scheduled a follow-up within 10 business days." If three people spend 30 minutes on a call that produces no next step, that call failed — regardless of how friendly the conversation was.

> **War Story:** An AE and SE walked into a discovery call without aligning. The AE opened with a 10-minute company overview — complete with slides about the founding story, number of customers, and recent awards. The prospect checked her phone at minute 4. When the SE finally got to ask discovery questions at minute 12, the prospect's energy was gone — she'd mentally categorised this as another vendor pitch. The SE salvaged what she could, but the discovery was shallow because trust had been damaged in the opening. After the call, the SE implemented a pre-flight rule: "No call starts without a 5-minute AE/SE alignment. No opening exceeds 3 minutes. Every call starts with a question, not a pitch." The next discovery call with a different prospect: the AE opened with a 90-second agenda, the SE launched the hypothesis at minute 2, and the prospect was engaged for the full 30. Pre-flight alignment isn't bureaucracy — it's quality control.

> **Failure Mode:** The AE who refuses to do pre-flight alignment because "I've been doing this for 15 years — I know how to run a meeting." The result: inconsistent meeting quality, role confusion, and an SE who doesn't know when to speak, what to ask, or what the commercial context is. The AE's experience doesn't eliminate the need for alignment — it makes alignment faster. An experienced pilot still does a pre-flight checklist. An experienced AE should do the same.

**Interview Angle:**
"How do you prepare with your AE before a customer meeting?"
A strong answer describes a specific pre-flight process with role definition, hypothesis sharing, and success criteria. A weak answer says "we usually talk briefly before the call" without structure.

**Practical Reference: The 5-Minute Pre-Flight Checklist**

| Item | Time | Example |
|------|------|---------|
| Call objective | 30 sec | "Confirm pain, identify budget owner, propose deep-dive" |
| Roles and flow | 30 sec | "AE opens (3 min), SE discovery (20 min), AE next steps (5 min)" |
| Hypothesis shared | 60 sec | "I think their problem is X. AE confirms or adjusts." |
| Walk-away signal | 30 sec | "If I say 'let me focus on what's most valuable,' I'm wrapping early" |
| Success criteria | 30 sec | "Quantified pain + next meeting scheduled within 10 days" |
| Anti-patterns | 60 sec | "Don't answer pricing. Don't demo. Don't promise timelines." |

**Total: 5 minutes. Non-negotiable. Before every call.**

🟢 **Entry-Level** — The pre-flight checklist is the cheapest insurance policy in presales. Five minutes of alignment prevents an hour of dysfunction.
