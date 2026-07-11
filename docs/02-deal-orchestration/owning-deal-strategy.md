# 2.2 Owning Deal Strategy

## 2.2.1 When the AE's Strategy Is Wrong

You've been briefed on a deal. The AE's strategy: demo next week, push for POC commitment, compress to close by end of quarter. You've reviewed the opportunity: the prospect has no confirmed budget, the champion is an individual contributor with no executive sponsor, and the competitor is the incumbent with a contract that doesn't expire for 9 months. The AE's strategy isn't wrong because they're bad at their job. It's wrong because it doesn't match the deal reality you can see from the technical side.

Your job isn't to execute a strategy you know will fail. Your job is to propose a better one.

1. **Start with shared facts, not your opinion.** Don't say "I think your strategy is wrong." Say: "I've reviewed the deal and I want to share some data points. The prospect's current contract with [Incumbent] runs through Q3. Their champion is an IC without executive sponsorship. Discovery hasn't uncovered quantified pain yet. Given these factors, I'm concerned that pushing for a POC commitment next week will feel premature." Facts first. Opinions second. This framing makes it a collaborative problem-solving conversation, not a confrontation.

2. **Propose an alternative with the same goal.** The AE wants to accelerate the deal? Good — so do you. But acceleration through the wrong motion produces the opposite result. Your alternative: "Instead of a demo next week, I'd recommend a 45-minute Executive Discovery session where we map their current architecture pain and quantify the cost of delay. That gives us the ammunition to build an executive champion — which is what we need to overcome the incumbent relationship. Then we can position the demo as a 'solution to the specific problems we identified' rather than a generic product overview." Same goal (accelerate). Better path.

3. **Frame your alternative in terms the AE values.** AEs think in pipeline stage progression, revenue impact, and forecast accuracy. Translate your technical perspective into their language: "If we demo before discovery, we'll likely hear 'thanks, we'll get back to you' — which moves the deal backward, not forward. If we run discovery first, we can produce a pain-quantification document that the champion can take to their VP. That's what moves this from Stage 2 to Stage 3." You're not speaking SE language. You're speaking deal language.

4. **Accept that you may be overruled.** You've presented your case. The AE disagrees. Their manager backs them. You've lost the argument. Execute the strategy you disagreed with — but execute it well. Half-hearted execution of someone else's strategy is worse than fully committed execution of a suboptimal strategy. And document your recommendation so that when the post-mortem happens (and it will), your perspective is on record.

5. **Track the outcome.** If your alternative was right, the deal will stall or lose against the AE's approach. If the AE's approach was right, the deal will progress. Either way, the outcome becomes data for your next strategic disagreement. SEs who are right 70%+ of the time earn significant strategic influence. SEs who are right 50% of the time learn from their misses. SEs who never disagree never find out whether they would have been right.

> **War Story:** An AE wanted to respond to a large RFP from a healthcare company. The SE reviewed the RFP requirements and identified that 25% of the technical criteria were specific to a competitor — language, feature names, and use cases that aligned perfectly with the incumbent. The SE's assessment: "This RFP was ghostwritten by [Competitor]. We're column fodder — they need three vendor responses, and we're vendor #3." The AE insisted they respond: "It's a $2M opportunity; we can't not bid." The SE proposed a compromise: "Let's respond, but invest minimal effort — standard responses, no custom demo, no solution architecture. If they come back with genuine interest after our response, I'll invest fully. If they don't, we've spent 8 hours instead of 80." They submitted a standard response. The prospect selected the incumbent without requesting a demo from any competitor. The SE's 8-hour investment was the right call. A full response would have consumed two weeks.

> **Failure Mode:** The SE who silently disagrees with the AE's strategy and then executes it passively. They know the demo is premature, so they deliver a mediocre one. They know the POC is scoped incorrectly, so they run it at 50% effort. They're not being intentionally sabotaging — they're just not invested in a strategy they don't believe in. The result is equally destructive: the deal fails, and the post-mortem blames the SE's execution rather than the strategy. If you disagree, say so. If you're overruled, execute fully. There is no middle ground.

**Interview Angle:**
"Tell me about a time you disagreed with your AE's deal strategy. What did you do?"
A strong answer describes a specific disagreement, the evidence used, the alternative proposed, and the willingness to commit fully regardless of the outcome. A weak answer describes compliance without contribution.

🟡 **Mid-Level** — Owning deal strategy isn't overstepping. It's the Senior SE's obligation. If you can see the deal is heading for a cliff and you stay silent, the wreck is partly your responsibility.

---

## 2.2.2 Requalifying Stalled Deals

Every SE has them: deals that were "90-day closes" eight months ago. The prospect loved the demo. The champion was enthusiastic. The technical evaluation went well. And then... nothing. No response to your follow-up. No progress on procurement. No next steps. The deal sits in the pipeline like a phantom — technically alive, practically dead.

Stalled deals are the most expensive items in your portfolio because they consume mindshare without producing revenue. Requalifying them is the discipline of determining whether a stalled deal is dormant (temporarily paused, with a real path back to life) or dead (no longer a viable opportunity, masquerading as pipeline).

1. **The 3-touch test.** Before investing any additional effort, send three escalating communications over 10 business days. Touch 1: a value-add message ("I came across a case study from [similar company] that maps to the architecture challenges you raised — thought it might be useful"). Touch 2: a direct status inquiry ("We haven't connected in a few weeks — has anything changed on your end with the timeline?"). Touch 3: a polite ultimatum ("I want to respect your team's time. If the project is no longer active, I'm happy to close this out and reconnect when timing is better. If it is active, I'd love to schedule 30 minutes to align on next steps"). If all three go unanswered, the deal is dead. Remove it from your active portfolio.

2. **Diagnose why it stalled.** Stalled deals fall into five categories:

| Stall Type | Root Cause | Requalification Path |
|-----------|-----------|---------------------|
| Budget freeze | Funding was redirected or cut | Re-engage when the next budget cycle opens |
| Champion departure | Your internal advocate left the company or changed roles | Identify a new champion or deprioritise |
| Priority shift | A bigger project consumed the team's attention | Wait it out; re-engage when their priority project completes |
| Competitive loss | They chose a competitor but didn't tell you | Ask directly — "Did you go with another solution?" |
| Decision paralysis | Too many stakeholders, no consensus | Propose a smaller scope to reduce the decision burden |

3. **Re-engage with new value, not old context.** The worst requalification approach: "Just following up on our conversation from March." This tells the prospect you have nothing new to offer. The best requalification approach: "Since we last spoke, we've released [relevant feature/capability]. I also noticed your company announced [relevant news — acquisition, expansion, regulatory change]. Both might change the calculus on the project you were evaluating. Worth a 15-minute call?" New value combined with business-relevant awareness signals that you've been paying attention — not just waiting.

4. **Set a kill date for every stalled deal.** If a deal has been stalled for 6 months with no response to your 3-touch sequence, it's dead. Mark it as closed-lost in the CRM, log the reason, and move on. The emotional resistance to closing stalled deals is strong — "but what if they come back?" — and it's the reason sales pipelines are routinely inflated by 30–40%. Dead deals don't come back because you kept them in the pipeline. They come back because the prospect's business situation changes — and when it does, they'll reach out regardless of your CRM status.

5. **Use stalled deals as a learning mechanism.** Every stall has a lesson. If multiple deals stall after the POC phase, your POC process may not be creating enough urgency. If deals stall after discovery, your discovery may not be surfacing deep enough pain. If deals stall after the champion engagement, your champion coaching may be insufficient. Track stall patterns quarterly and adjust your process accordingly.

> **War Story:** An SE had 7 stalled deals in his pipeline totalling $4.2M. His manager required him to run the 3-touch sequence on all 7 within 2 weeks. Results: 3 deals responded — 2 reactivated with revised timelines, 1 admitted they'd chosen a competitor 4 months ago. 4 deals didn't respond to any touch. The SE closed all 4 as lost. His pipeline dropped from $8M to $4.6M — but his pipeline accuracy went from 40% to 75%. The VP of Sales, who initially worried about the pipeline reduction, later cited it as the most valuable exercise of the quarter: "I'd rather have $4.6M of real pipeline than $8M of fiction."

> **Failure Mode:** The SE who keeps stalled deals alive because they're afraid their pipeline will look thin. They don't run the 3-touch sequence because they don't want to hear "we've gone with someone else." They report stalled deals as "in progress" in pipeline reviews because it's less uncomfortable than admitting the deal is dead. The result: inflated pipeline, inaccurate forecasts, and SE bandwidth allocated to phantom deals instead of real ones.

**Interview Angle:**
"How do you handle deals that go dark or stall after initial engagement?"
A strong answer describes a systematic requalification process (escalating touches, root cause diagnosis, kill date discipline). A weak answer says "I keep following up" without a defined endpoint.

🟡 **Mid-Level** — Pipeline hygiene isn't glamorous. It's necessary. The SE who can cleanly separate dormant from dead deals has the most accurate forecast on the team — and the most productive use of their time.

---

## 2.2.3 Multi-Threading Before the Competition Does

Single-threaded deals die. It's not a risk — it's a statistical certainty. If your entire deal depends on one relationship (your champion), one champion departure, one organisational restructure, or one budget reallocation will kill it instantly. Multi-threading — building relationships with multiple stakeholders across different levels and functions — is the deal insurance policy that most SEs buy too late.

1. **Multi-thread by level.** Your champion is typically a mid-level technical evaluator. They have influence but not authority. You also need: someone at the executive level who owns the budget decision, someone at the peer level who will validate the champion's recommendation, and someone at the implementation level who will confirm that your solution is deployable. Four threads across three levels transforms a single point of failure into a resilient deal structure.

2. **Multi-thread by function.** Technical evaluators only see the technical picture. You also need relationships with: the business owner who will measure ROI (they care about outcomes, not architecture), the security team who will validate compliance (they can veto the deal at the 11th hour), and the procurement contact who will manage the contract (they control the timeline from technical win to signature). Each function has different concerns. Address them in parallel, not sequentially.

3. **Use meetings to introduce new threads naturally.** The best way to multi-thread: at the end of every meeting, ask "Would it be valuable to include [role] in our next conversation? I want to make sure we're addressing [their concern] early so it doesn't become a blocker downstream." This isn't pushy — it's helpful. You're preventing future delays by including stakeholders now rather than surprising them later. Most champions will agree because they also want to avoid late-stage blockers.

4. **Your competitor is multi-threading right now.** If you're not building relationships with the economic buyer, security team, and implementation lead, your competitor is. And when the decision comes down to two technically equivalent solutions, the vendor with broader stakeholder relationships wins — because more people in the room know them, trust them, and are invested in their success. Multi-threading is not optional. It's competitive survival.

5. **Map your threads visually.** Create a simple stakeholder map for every deal with 3+ stakeholders. For each person, note: their name, their role, their stance (champion / neutral / sceptic / blocker), your last interaction, and their primary concern. Review this map weekly. If you have a gap (no executive thread, no security thread), close it this week — not next month.

> **War Story:** An SE had a strong champion — a Director of Engineering who loved the product. The POC was successful. The technical evaluation was positive. The deal was forecasted to close in Q2. In week 3 of Q2, the Director of Engineering left the company for a competitor. The deal had zero other threads. The new Director brought in their own preferred vendor. The deal, worth $650K, was dead within a week. The SE had spent 4 months on the evaluation. If they'd built even one additional thread — an executive sponsor, a peer-level advocate — the deal would have survived the champion departure. After this loss, the SE adopted a strict rule: no deal stays single-threaded past the second meeting.

> **Failure Mode:** The SE who relies entirely on the champion for all communication. The champion schedules meetings. The champion relays information to the executive team. The champion manages internal procurement. The SE never speaks directly to anyone else. This is comfortable — single-threaded deals are easier to manage — but it's fragile. One champion departure, one champion vacation, one champion getting pulled onto another project, and the deal goes dark with no backup relationships.

**Interview Angle:**
"How do you build relationships beyond your primary champion in a deal?"
A strong answer describes deliberate multi-threading tactics (meeting introductions, parallel tracks for security/procurement, executive sponsor cultivation). A weak answer relies entirely on the champion for all stakeholder access.

**Practical Reference: The Stakeholder Thread Map**

| Name | Title | Function | Stance | Last Contact | Primary Concern | Next Action |
|------|-------|----------|--------|-------------|----------------|-------------|
| | | Technical | Champion | | | |
| | | Executive | | | | |
| | | Security | | | | |
| | | Procurement | | | | |
| | | Implementation | | | | |

**Rule: no deal should have fewer than 3 active threads by the time you enter POC stage.** If you're single-threaded entering a POC, your POC result is meaningless — there's no one to carry it to the decision.

🟡 **Mid-Level** — Multi-threading is effort. Single-threading is risk. In enterprise sales, effort is recoverable. Lost deals are not.

---

## 2.2.4 Designing the Technical Proof Path Backwards From Close

Most SEs design proof paths forward: "First we'll do discovery, then a demo, then a POC, then a proposal." This is logical. It's also why most proof paths take 30% longer than they should — because they're sequenced by tradition, not by the deal's specific requirements.

The proof path should be designed backwards from the technical win criteria and the close date, with every step directly serving one purpose: removing a specific remaining objection, risk, or uncertainty.

1. **Start with the close date and work backwards.** If the deal needs to close by June 30, and procurement takes 4 weeks, your technical win needs to happen by June 1. If the POC takes 3 weeks, it needs to start by May 11. If the demo and discovery need 2 meetings, they need to happen in the first two weeks of May. This reverse-engineering gives you an exact calendar — with zero buffer for wasted steps. Every step that doesn't serve the close date is a step you should eliminate.

2. **Define the technical win criteria before you start.** The technical win is the moment when the prospect's technical team agrees that your product can meet their requirements. If you don't define what "meet their requirements" means — in writing, with measurable criteria — you'll run a POC that produces subjective opinions instead of objective outcomes. Before starting any POC: "Here are the 5 criteria we'll test. For each criterion, here is the definition of success. If all 5 pass, we achieve technical win. If any fail, we'll document the gap and discuss implications. Agreed?"

3. **Eliminate steps that don't remove objections.** A common proof path includes: discovery call, technical deep-dive, demo, architecture review, POC scoping, POC kickoff, POC execution, POC results presentation, reference call, and proposal. That's 10 steps. Ask yourself: which of these steps removes a specific objection? If the answer is "none — it's just standard process," combine or remove it. A proof path that eliminates all unnecessary steps can compress a 10-week evaluation into 5.

4. **Front-load the hardest validation.** If the prospect's biggest concern is security compliance, don't save the security review for week 8. Run it in week 2. If the prospect's biggest concern is integration compatibility, don't do a generic demo first — do an integration spike. The hardest validation should happen earliest for two reasons: it surfaces deal-killers before you've invested heavily, and it resolves the highest-anxiety objection quickly, which accelerates trust and momentum.

5. **Align each step with a stakeholder outcome.** Every proof path step should produce an artefact or outcome that a specific stakeholder can use. The discovery summary goes to the champion for internal socialisation. The architecture diagram goes to the CTO for validation. The POC results go to the economic buyer for the business case. The security questionnaire goes to InfoSec for compliance approval. If a step doesn't produce something for someone, it's a step the deal doesn't need.

> **War Story:** An SE inherited a deal that had been running for 5 months across 14 meetings with no clear technical win in sight. She reviewed the meeting history: 4 discovery calls (covering the same ground repeatedly), 2 generic demos, 3 architecture discussions, and 5 "follow-up" calls. She designed a backward proof path: "We have 6 weeks until their contract renewal with the incumbent. The CFO needs a business case by week 4. The CTO needs POC results by week 3. That means we need to start the POC on Monday." She compressed the remaining evaluation into 3 weeks by eliminating all redundant steps and running the POC against the 4 criteria the CTO specifically cared about. Technical win on day 18. Business case delivered on day 24. Contract signed on day 39. Five months of drift were resolved in 6 weeks because someone designed the path backwards from the deadline.

> **Failure Mode:** The SE who runs the "standard" proof path regardless of deal context. Every deal gets the same sequence: discover, demo, POC, propose. A deal where the prospect only needs to validate one integration gets a 3-week full POC. A deal where the prospect has already seen a competitor's demo and wants to move fast gets a 2-week discovery process. The standard path isn't standard — it's lazy. It substitutes process for judgement. Every deal should have a custom proof path designed around its specific objections and timeline.

**Interview Angle:**
"Walk me through how you design a proof-of-concept or technical evaluation."
A strong answer describes backward design from close date, written success criteria, and step elimination. A weak answer describes a standard sequence they follow for every deal.

**Practical Reference: The Backward Proof Path Template**

| Date | Step | Objection Removed | Artefact Produced | Stakeholder Served |
|------|------|-------------------|-------------------|-------------------|
| [Close date] | Contract signed | — | Signed agreement | All |
| [Close - 4 weeks] | Procurement submission | — | Legal packet | Procurement |
| [Close - 5 weeks] | Technical win declared | All technical objections | POC results + architecture doc | CTO, Champion |
| [Close - 8 weeks] | POC execution | Performance, integration, security | Test results | Technical team |
| [Close - 9 weeks] | POC kickoff w/ success criteria | Scope ambiguity | Signed success criteria | Champion, SE |
| [Close - 10 weeks] | Demo tailored to discovery findings | Feature uncertainty | Follow-up document | Full stakeholder group |
| [Close - 11 weeks] | Discovery | Pain ambiguity | Discovery summary | Champion |

**Build this for every deal. Share it with the AE. Review it weekly.**

🟡 **Mid-Level** — Forward-designed proof paths follow process. Backward-designed proof paths follow strategy. Strategy wins deals. Process fills calendars.
