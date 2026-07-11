# 6.2 Structuring the POV (Proof of Value)

## 6.2.1 POC vs POV: Shifting from Math to Value

In modern enterprise presales, the term "Proof of Concept" (POC) is dangerous. It implies that the prospect is testing whether the concept of your software actually works. 

Are they testing if your cloud platform can ingest 10,000 logs a second? Are they testing if your UI can generate a PDF report? If you are a mature enterprise company, the answer is yes. Your software works. You do not need to prove the *concept* of your software to a prospect; you have hundreds of paying customers who already prove it daily.

What you must prove is the *value* of your software applied specifically to their broken business process.

This is the shift from a **Proof of Concept (POC)** to a **Proof of Value (POV)**.

**The Anatomy of a POC (The feature-checklist trap)**
A traditional POC is managed by a mid-level manager who hands the SE an Excel spreadsheet with 85 required features.
"Can the system export to CSV? Yes/No."
"Does it have an API? Yes/No."
"Is there a dark mode? Yes/No."
The SE spends 30 days checking 85 boxes. The mid-level manager tells the VP, "The software does everything they said it would." The VP replies, "Great. But why should I spend $400k on it?" The deal stalls.

**The Anatomy of a POV (The financial outcome)**
A POV is completely disconnected from an Excel checklist. It is a hyper-focused experiment designed to prove a specific financial, operational, or risk-mitigating outcome that was agreed upon with the executive sponsor during Discovery (Section 3).

*The Execution:*
Instead of checking 85 boxes, you define 1 to 3 massive business outcomes.
1. "Currently, it takes your Data Analysts 14 hours to generate the weekly pipeline risk report. We will ingest a sample of your live SFDC data into our platform. The sole success metric of this 14-day POV is proving that your Analysts can generate that exact same report perfectly in under 12 minutes."

You do not care if they test the API. You do not care if they test the dark mode. The entire 14 days are spent driving towards that single, undeniable metric of value: Time saved. 

**Reframing the Prospect's Demand**
<dialogue>
Prospect: "We need a 30-day POC to validate all of these features."
SE: "We understand. However, we find that broad feature-testing often leads to evaluation fatigue and stalled projects. Instead of a 30-day sandbox, we require a highly structured 14-day Proof of Value. Let's pick the single most painful workflow your team suffers from today. If we dedicate the next 14 days strictly to solving that one problem, and we prove we can reduce the processing time by 80%, would you be ready to move forward commercially?"
</dialogue>

> **War Story:** An SE was stuck in a 90-day POC spiral with a massive logistics company. The prospect's technical team kept adding new feature tests to the spreadsheet. The SE finally escalated to the VP of Supply Chain. "We've proven the software works. What are we actually trying to solve?" The VP admitted they needed to reduce shipment routing errors by 5% to hit their quarterly bonus. The SE instantly killed the 90-day feature checklist, dumped a localized subset of routing data into the platform, and proved a 7% error reduction in exactly 48 hours. The VP signed the contract that Friday.

> **Failure Mode:** "The Yes-Man SE." An SE who happily accepts a 100-line requirement spreadsheet from a junior analyst and spends a month proving individual features work, without ever asking "Why are we doing this?" They win the technical validation, but lose the commercial deal to "No Decision" because no executive sponsor cared about the checklist. 

**Interview Angle:**
"How do you distinguish between a Proof of Concept and a Proof of Value? Which do you prefer to run?"
A strong answer is: "A POC proves the software isn't broken. A POV proves the software is worth buying. I refuse to run POCs for mature products. I will only run a POV if the AE and I have successfully extracted a quantified financial or operational metric from an executive sponsor during discovery. We then brutally scope the evaluation strictly to proving that singular metric, ignoring all feature requests that don't directly serve that outcome."

🟡 **Principal-Level** — Stop proving that your software works. Start proving that their current process is financially irresponsible to maintain.

---

## 6.2.2 The 3-Mandatory-Requirements Rule

The fastest way to stall a technical evaluation is to accept a prospect’s spreadsheet containing 120 "Critical Requirements" for the POC. 

If you accept that spreadsheet, you are no longer a trusted advisor determining if the platform solves their business pain. You are a glorified human software-testing bot. You will spend six weeks checking boxes, and at the end of it, the prospect will tell you, "You only hit 115 out of 120. Your competitor hit 117. We are going with them."

You lost on a technicality that had zero bearing on the actual business outcome. 

**The 3-Requirements Framework**
A Master-Class SE dictates the rules of engagement. When a prospect hands you a massive spreadsheet of requirements, you must pivot the conversation.

*The Re-frame:* "We’re happy to review this exhaustive list of features post-sale during implementation. However, to ensure we don’t waste 30 days of your engineers' time testing hundreds of micro-features, we require that every POV is scoped to exactly **1 to 3 mandatory success criteria.** These are the three ‘Make or Break’ business outcomes that, if proven true, will justify the $300k investment to your CIO."

By enforcing this boundary, you achieve the following:
1.  **You compress the timeline.** It takes 14 days to prove 3 massive workflows. It takes 90 days to prove 120 micro-features.
2.  **You smoke out false urgency.** If the prospect cannot immediately articulate the top 3 critical business pains they are trying to solve, they do not have a real project. They are just window-shopping.
3.  **You secure the Technical Win.** When you inevitably prove the 3 mandatory criteria flawlessly, the evaluation is over. The prospect cannot move the goalposts.

**How to extract the 3 Requirements**
You cannot let the prospect's junior analysts define the 3 requirements; they will pick technical minutiae (e.g., "Must natively support custom CSS toggles"). You must align the criteria with the executive sponsor’s goals (e.g., "Must reduce MTTR of severity-1 incidents by 40%").

If the prospect fights back: "But our security team needs to validate the RBAC module before we buy!"
*The SE response:* "We completely understand. Our RBAC module is deployed at five tier-1 banks. I will provide your security team with our SOC2 report and a pre-recorded 10-minute deep-dive video of the RBAC configuration today. However, we will dedicate the actual live POC bandwidth exclusively to proving the 40% reduction in MTTR, as that is the metric your CIO told us was critical to Q3 funding."

**The Mutual Success Plan Integration**
Once the AE, the SE, and the prospect’s Economic Buyer agree on the exactly 3 mandatory criteria, they are locked into the **Mutual Success Plan** (covered in Section 6.3). Nothing else is tested.

> **War Story:** An SE at an identity-management vendor was handed a 300-point RFP spreadsheet for a POC. He refused to execute it. He sat down with the prospect's VP of Identity and said, "If we hit all 300 points, will you buy?" The VP said, "Yes." The SE countered, "If we only hit 3 points, but those 3 points allow you to fully automate your 14-day manual employee offboarding process—saving you $2M in compliance fines—will you buy?" The VP paused, then agreed. The SE defined those 3 criteria, executed the POC in 8 days, and closed a massive, high-margin deal. 

> **Failure Mode:** "Death by Requirements." The SE accepts the 120-point spreadsheet to please the prospect. On day 45, the prospect adds 15 new requirements to the list. The SE sighs and keeps testing. The deal never closes. 

**Interview Angle:**
"A prospect provides you with a 50-point checklist they want validated during a 30-day POC. What is your strategy?"
A strong answer is: "I refuse the checklist as the basis for the live evaluation. I explain that a successful Proof of Value is an executive-level experiment, not a QA session. I work directly with the business sponsor to distill that massive list down to exactly 1 to 3 critical business metrics that definitively prove our ROI. The remaining 47 points can be handled asynchronously via documentation, references, or post-sale implementation."

🟡 **Principal-Level** — He who defines the testing criteria wins the evaluation. Never accept a competitor's spreadsheet.

---

## 6.2.3 Locking the Sandbox So Goalposts Can't Move

Every POC must operate within a locked sandbox—a rigidly defined set of success criteria, data sources, integrations, and timelines that cannot be modified once the evaluation begins.

Without a locked sandbox, the prospect will continuously add new requirements mid-POC, effectively converting your 14-day evaluation into a 90-day free consulting engagement.

---

### The Sandbox Lock Document

Before the POC begins, the SE must co-author a **Sandbox Lock Document** with the prospect's technical evaluator. This is a 1-page agreement that defines:

#### 1. Success Criteria (Maximum 5)
List exactly 3-5 measurable outcomes that define a successful POC. Each criterion must be binary (Pass/Fail), not subjective.

*   ✅ **Good:** "The platform successfully ingests 1M records from the PostgreSQL staging database within 60 minutes."
*   ❌ **Bad:** "The platform performs well with our data."

#### 2. Data Sources (Locked)
Specify exactly which data sources will be used during the evaluation. No new data sources can be added mid-POC.

#### 3. Integrations (Locked)
List every integration that will be tested. If the prospect decides mid-POC that they also want to test a Salesforce connector, it is out of scope and will be addressed during implementation.

#### 4. Timeline (Hard Deadline)
The POC has a fixed start date and a fixed end date. Extensions are not granted unless the prospect's own team caused a delay (e.g., they failed to provision access to their staging database on time).

#### 5. Decision Framework
At the end of the POC, if all success criteria are met (Pass), the prospect commits to entering commercial negotiations within 5 business days. This clause is the most important line in the document.

### Enforcing the Lock

When the prospect inevitably tries to expand scope mid-POC, the SE must reference the Sandbox Lock Document directly.

<div class="roleplay-script">
  <div class="dialogue-row">
    <div class="speaker-avatar">CTO</div>
    <div class="speaker-message">
      <strong>Prospect CTO</strong>
      "Hey, quick question—can we also test the Snowflake connector while we have the sandbox set up? It would be really helpful."
    </div>
  </div>
  <div class="dialogue-row">
    <div class="speaker-avatar">SE</div>
    <div class="speaker-message">
      <strong>Elite SE</strong>
      "I appreciate you thinking ahead. The Snowflake connector is absolutely something we can validate, but per our jointly agreed evaluation criteria, the current POC scope is focused on the PostgreSQL ingestion and the real-time dashboard. Adding Snowflake mid-cycle would dilute our ability to rigorously prove the core use case within the agreed timeline. Let's lock in the Snowflake validation as the first milestone of the implementation phase, immediately after we formalize the commercial agreement."
    </div>
  </div>
</div>

You just said "Yes, but later"—protecting the timeline while keeping the prospect excited about the next phase.

> **War Story:** An SE ran a 21-day POC for an e-commerce company. By Day 10, the prospect had added 4 new data sources, 2 new integrations, and changed the primary success criterion from "data ingestion speed" to "real-time anomaly detection." The SE scrambled to accommodate every request. On Day 21, the prospect said: "We tested a lot of things but didn't conclusively prove any single capability. We need another 30 days." The SE lost 51 days to a single evaluation that should have taken 14.

> **Failure Mode:** "The Scope Creep Enabler." This SE is terrified of saying no because they believe accommodating every request demonstrates flexibility and customer obsession. In reality, it demonstrates a lack of control. The prospect loses confidence because the SE cannot manage a simple evaluation timeline—raising doubts about whether the platform can manage a complex production deployment.

**Interview Angle:**
"How do you prevent scope creep during a technical evaluation?"
A strong answer is: "Before every POC, I co-author a Sandbox Lock Document with the prospect that defines exactly 3-5 binary success criteria, the specific data sources and integrations in scope, and a hard deadline. When new requests arise mid-POC, I acknowledge them but defer them to the implementation phase. This protects the evaluation's integrity and forces a clear Pass/Fail decision at the end."

🟡 **Mid-Level** — A POC without a locked sandbox is not an evaluation. It is an open-ended, unpaid consulting engagement.

---

## 6.2.4 Getting Legal Sign-Off on the Criteria Document

Most SEs treat the POC success criteria as an informal agreement—a slide deck or an email thread. This is a mistake that costs deals.

If the success criteria are not formally documented and acknowledged by both parties *before* the POC begins, the prospect can retroactively redefine what "success" means after the evaluation is complete.

---

### Why Legal Sign-Off Matters

Without a signed criteria document, you are vulnerable to two devastating scenarios:

#### Scenario 1: The Moving Goalposts
The prospect agreed verbally that "successful data ingestion within 60 minutes" was the criterion. After you achieve it, they say: "Actually, we also need real-time streaming. The batch ingestion doesn't fully meet our needs." You passed the test they gave you, but they changed the test.

#### Scenario 2: The Zombie POC
The POC ends successfully. All criteria are met. The prospect says: "Great work. We'll get back to you." Six months later, they haven't made a decision. Without a written commitment to enter commercial negotiations post-success, you have no leverage to force a timeline.

### The Criteria Document Structure

The criteria document should be a 1-2 page formal document (not an email) that includes:

1. **Evaluation Objectives:** A brief statement of the business problem being solved.
2. **Success Criteria (3-5 max):** Each criterion must be measurable and binary (Pass/Fail).
3. **Evaluation Timeline:** Fixed start and end dates.
4. **Resource Commitments:** Named individuals from both sides who will participate.
5. **Post-Evaluation Commitment:** "Upon successful completion of all success criteria, [Prospect Company] commits to entering commercial negotiations within [5] business days."
6. **Signatures:** Both the SE (or SE Manager) and the prospect's technical sponsor must sign.

### Getting the Signature

Prospects will resist signing. They will say: "We don't need all this formality. Let's just get started."

Your response:

> *"This document protects both of us. It ensures that your team's evaluation objectives are crystal clear, and it ensures that our Solutions Architecture team is focused on exactly the right outcomes. Without this alignment, we risk spending 3 weeks testing the wrong things."*

Frame the signature as protection for *them*, not a sales tactic for you.

> **War Story:** An SE completed a flawless 30-day POC for a $350k deal. Every success criterion was met. The prospect's technical team was enthusiastic. But when the AE asked for next steps, the VP of IT said: "We never formally agreed that passing the POC meant we had to buy. We're going to evaluate two more vendors." Without a signed criteria document, the SE had no leverage. The deal entered a 6-month competitive bake-off that the SE eventually lost.

> **Failure Mode:** "The Handshake Deal." The SE starts the POC based on a verbal agreement with the technical champion. The champion leaves the company mid-evaluation. The new technical lead has no context on the agreed criteria and redefines the entire evaluation from scratch. The SE restarts a POC they had already completed.

**Interview Angle:**
"How do you ensure that a successful POC translates into commercial momentum?"
A strong answer is: "Before every POC, I require a signed criteria document that defines 3-5 measurable success criteria, a fixed timeline, and a post-evaluation commitment to enter commercial negotiations within 5 business days of a successful outcome. This prevents moving goalposts and creates a contractual foundation for the AE to drive the close."

🔴 **Senior-Level** — An unsigned POC criteria document is a gentleman's agreement. Gentlemen's agreements don't close enterprise deals.

---

## 6.2.5 POC Pre-Conditions

Before a single line of demo data is loaded or a sandbox environment is provisioned, the SE must validate that a set of non-negotiable pre-conditions are met. Starting a POC without these pre-conditions is the equivalent of deploying to production without running tests.

---

### The POC Pre-Condition Checklist

#### 1. Budget Validation
- [ ] The AE has confirmed the prospect has allocated (or is actively requesting) budget for this purchase.
- [ ] The AE knows the approximate budget range and has validated that your solution's price fits within it.

**If budget is not validated:** Do not start the POC. Run a discovery call to align on commercial viability first.

#### 2. Executive Sponsorship
- [ ] The AE has identified the executive sponsor (VP/CIO/CFO) who will approve the purchase.
- [ ] The executive sponsor is aware the evaluation is happening and has been briefed on the business objectives.

**If no executive sponsor exists:** The evaluation is a science experiment. Pause until the champion secures executive buy-in.

#### 3. Signed Success Criteria
- [ ] A Sandbox Lock Document or mutual evaluation criteria document has been drafted.
- [ ] The document contains 3-5 measurable, binary (Pass/Fail) success criteria.
- [ ] The prospect's technical sponsor has reviewed and acknowledged the criteria.

**If criteria are not signed:** You are running a POC with no definition of success. The prospect will evaluate forever.

#### 4. Prospect Resource Commitment
- [ ] The prospect has assigned named technical resources to participate in the POC.
- [ ] Those resources have confirmed availability for the evaluation timeframe.
- [ ] Access to required data sources, staging environments, and credentials has been provisioned (or is scheduled to be provisioned by Day 1).

**If resources are not committed:** The POC will stall on Day 3 because the prospect's DBA is on vacation and nobody can grant access to the staging database.

#### 5. Competitive Landscape
- [ ] The AE has identified which competitors (if any) are also being evaluated.
- [ ] The SE understands the competitor's strengths and has prepared differentiation messaging.

**If the competitive landscape is unknown:** You may be walking into a bake-off blind, unable to position your architecture against the specific threats.

#### 6. Timeline Agreement
- [ ] A fixed start date and end date have been agreed upon by both parties.
- [ ] There is a hard deadline driving the evaluation (contract expiry, board mandate, fiscal year-end).

**If no timeline exists:** The prospect has no urgency. The POC will drag on indefinitely.

### The "POC Readiness Gate"

The SE Manager should implement a formal **POC Readiness Gate** — a 15-minute internal review where the AE and SE present the pre-condition checklist to the SE Manager before any POC is approved to start.

If any of the 6 pre-conditions above are not met, the POC is not approved. The AE is sent back to complete the missing items before SE resources are allocated.

> **War Story:** An SE Manager implemented the POC Readiness Gate and rejected 30% of incoming POC requests in the first quarter. AEs initially pushed back aggressively. By the end of the quarter, the team's POC-to-Close conversion rate had jumped from 25% to 48% because the SEs were only running evaluations for deals that had genuine purchase intent, validated budget, and executive sponsorship.

> **Failure Mode:** "The Open Door POC Team." Every AE request for a POC is approved without qualification. The SE team is permanently running 8-10 simultaneous POCs, most of which have no budget, no executive sponsor, and no success criteria. The SEs burn out, the win rate drops to 15%, and the best SEs quit for competitors where their time is respected.

**Interview Angle:**
"What criteria do you use to decide whether a deal deserves a POC?"
A strong answer is: "I use a 6-point pre-condition checklist covering budget validation, executive sponsorship, signed success criteria, prospect resource commitment, competitive landscape, and timeline agreement. If any pre-condition is missing, I work with the AE to address it before allocating SE time. This ensures I only invest deeply in deals with genuine purchase intent."

🔴 **Senior-Level** — Starting a POC without pre-conditions is like deploying untested code. You might get lucky, but you'll usually regret it.

---

## 6.2.6 Excluding Roadmap Features from the POC

One of the fastest ways to destroy trust in an enterprise deal is to demonstrate a feature during a POC that doesn't actually exist in the shipping product.

When an SE shows a beta feature, a staging-only capability, or a roadmap item as if it were production-ready, they are selling vaporware. If the prospect buys based on that demonstration and the feature isn't available at go-live, you have a churn event, a legal dispute, or both.

---

### The Rule: If It's Not GA, It's Not In the POC

General Availability (GA) means the feature is fully released, supported, documented, and covered by your company's SLA. Anything that is in Alpha, Beta, Private Preview, or "coming in Q3" must be explicitly excluded from the POC success criteria.

#### Why SEs Break This Rule
*   **Fear of losing the deal:** "If I don't show the AI feature, the competitor will."
*   **Engineering confidence:** "The PM told me it's shipping next month. It'll be fine."
*   **Impressing the prospect:** "If I show them the roadmap, they'll see our vision and commit."

All three of these justifications lead to the same outcome: the prospect builds their business case around a feature that doesn't exist, and the SE's company is contractually or morally obligated to deliver it.

### How to Handle Roadmap Requests

When a prospect asks to evaluate a feature that is on the roadmap but not yet GA:

<div class="roleplay-script">
  <div class="dialogue-row">
    <div class="speaker-avatar">CTO</div>
    <div class="speaker-message">
      <strong>Prospect CTO</strong>
      "We saw in your product blog that you're building a native GraphQL API. Can we test that during the POC?"
    </div>
  </div>
  <div class="dialogue-row">
    <div class="speaker-avatar">SE</div>
    <div class="speaker-message">
      <strong>Elite SE</strong>
      "Great question. The GraphQL API is currently in Private Beta and is not yet covered by our production SLA. I wouldn't want to base your evaluation on a feature that's still under development. For this POC, let's validate the core use case using our production REST API, which is fully GA and battle-tested. I can arrange a separate roadmap briefing with our Product team so you have full visibility into the GraphQL timeline and can plan your future architecture accordingly."
    </div>
  </div>
</div>

You just protected the deal from a post-sale failure while keeping the prospect excited about the future.

### The "Roadmap Briefing" as a Strategic Tool

Offering a separate roadmap briefing (outside the POC) achieves two things:
1. The prospect gets visibility into your product direction, building long-term confidence.
2. The POC remains focused on proving value with production-ready capabilities, eliminating risk.

> **War Story:** An SE demonstrated a machine learning anomaly detection feature to a financial services prospect. The feature was in Beta. The prospect built their entire business case around it. When the contract was signed and implementation began, the ML feature was delayed by 6 months due to a regulatory compliance issue. The customer's VP called it "bait and switch" and threatened to cancel the contract. The SE's company was forced to offer a 40% discount on Year 2 to save the relationship.

> **Failure Mode:** "The Roadmap Salesman." This SE treats the product roadmap as a catalog of features they can sell today. They show beta screens, staging environments, and Figma mockups during demos. When prospects buy and the features don't materialize on schedule, the SE blames Product. But the SE made the promise—not Product.

**Interview Angle:**
"How do you handle a situation where a prospect wants to evaluate a feature that isn't yet generally available?"
A strong answer is: "I never include non-GA features in POC success criteria. If a prospect asks about a roadmap item, I offer a separate Product Roadmap Briefing with our PM team while keeping the POC focused on production-ready capabilities. This protects the prospect from building a business case on undelivered promises and protects my company from post-sale escalations."

🟡 **Mid-Level** — Sell what you ship. Demo what is GA. Everything else is a roadmap conversation, not a POC criterion.

---

## 6.2.7 Pass/Fail Scorecards

A POC without a scorecard is a POC without a verdict. If the evaluation ends and the prospect says "We need to discuss internally," you have failed to create a definitive, binary outcome.

The Pass/Fail Scorecard is the mechanism that forces the prospect to declare a Technical Win or a Technical Loss at the end of the evaluation—eliminating the ambiguity that kills deal velocity.

---

### Scorecard Design

The scorecard must be agreed upon *before* the POC starts. It is a direct extension of the Sandbox Lock Document and typically takes the form of a simple table.

#### Template

| # | Success Criterion | Target Metric | Actual Result | Pass / Fail |
|---|---|---|---|---|
| 1 | Data ingestion from PostgreSQL staging database | 1M records in ≤60 minutes | [Filled during POC] | ☐ Pass ☐ Fail |
| 2 | Real-time dashboard refresh rate | ≤5 second refresh on live data | [Filled during POC] | ☐ Pass ☐ Fail |
| 3 | SSO authentication via Okta | Successful login for 3 test users | [Filled during POC] | ☐ Pass ☐ Fail |
| 4 | Role-based access control enforcement | Admin vs. Viewer permissions verified | [Filled during POC] | ☐ Pass ☐ Fail |
| 5 | API response time under concurrent load | ≤200ms at 500 concurrent requests | [Filled during POC] | ☐ Pass ☐ Fail |

**Overall POC Result:** ☐ **PASS** (all criteria met) / ☐ **FAIL** (one or more criteria not met)

#### Design Rules

1. **Maximum 5 criteria.** More than 5 dilutes focus and makes it easy for the prospect to find one failure to justify delaying the decision.
2. **Every criterion must be quantifiable.** "The platform should be fast" is not a criterion. "API response ≤200ms at 500 concurrent requests" is.
3. **Binary outcomes only.** Pass or Fail. No "Partial" or "Needs Further Testing." Ambiguity is the enemy of deal velocity.
4. **The prospect fills in the "Actual Result" column.** This is critical. If the SE fills it in, the prospect can claim the results were biased. When the prospect's own team records the results, they own the outcome.

### Presenting the Scorecard

At the end of the POC, schedule a formal "Technical Review" call with the prospect's technical evaluator and their manager (or executive sponsor, if possible).

Walk through the scorecard line by line, confirming each result. Then ask the definitive question:

> *"Based on the results your team has recorded, all 5 criteria have been met. Do we have a Technical Win?"*

If they say yes, immediately transition to: "Excellent. I'll hand you over to [AE Name] to discuss the commercial next steps."

If they hesitate, probe: "Which specific criterion are you uncertain about?" Force them to articulate the objection so you can address it on the spot.

> **War Story:** An SE ran a 21-day POC and achieved outstanding results. But at the end, the prospect said: "The results are good, but we want to test a few more scenarios before we commit." There was no scorecard. There was no definition of "done." The prospect tested for another 45 days before finally admitting they didn't have budget. With a scorecard, the SE would have forced a Pass/Fail verdict on Day 21 and either secured the Technical Win or identified the budget gap immediately.

> **Failure Mode:** "The Endless Evaluator." Without a scorecard, the prospect keeps asking for "just one more test." The SE obliges because they don't have a mechanism to declare the evaluation complete. The POC extends from 14 days to 60 days. The SE's other deals suffer. The AE misses the quarter.

**Interview Angle:**
"How do you define success for a POC?"
A strong answer is: "I co-create a Pass/Fail Scorecard with the prospect before the POC starts, limiting it to 5 quantifiable criteria. The prospect's team records the actual results during the evaluation. At the end, I walk through the scorecard in a formal review call and ask for a definitive Technical Win or Technical Loss. This eliminates ambiguity and compresses the post-POC decision timeline."

🟡 **Mid-Level** — Without a scorecard, a POC never ends. With one, it ends exactly when it should.
