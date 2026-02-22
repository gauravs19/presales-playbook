#### 2.2.4 Designing the Technical Proof Path Backwards From Close

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

---
