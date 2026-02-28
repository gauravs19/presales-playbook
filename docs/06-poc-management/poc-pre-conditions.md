# POC Pre-Conditions

Before a single line of demo data is loaded or a sandbox environment is provisioned, the SE must validate that a set of non-negotiable pre-conditions are met. Starting a POC without these pre-conditions is the equivalent of deploying to production without running tests.

---

## The POC Pre-Condition Checklist

### 1. Budget Validation
- [ ] The AE has confirmed the prospect has allocated (or is actively requesting) budget for this purchase.
- [ ] The AE knows the approximate budget range and has validated that your solution's price fits within it.

**If budget is not validated:** Do not start the POC. Run a discovery call to align on commercial viability first.

### 2. Executive Sponsorship
- [ ] The AE has identified the executive sponsor (VP/CIO/CFO) who will approve the purchase.
- [ ] The executive sponsor is aware the evaluation is happening and has been briefed on the business objectives.

**If no executive sponsor exists:** The evaluation is a science experiment. Pause until the champion secures executive buy-in.

### 3. Signed Success Criteria
- [ ] A Sandbox Lock Document or mutual evaluation criteria document has been drafted.
- [ ] The document contains 3-5 measurable, binary (Pass/Fail) success criteria.
- [ ] The prospect's technical sponsor has reviewed and acknowledged the criteria.

**If criteria are not signed:** You are running a POC with no definition of success. The prospect will evaluate forever.

### 4. Prospect Resource Commitment
- [ ] The prospect has assigned named technical resources to participate in the POC.
- [ ] Those resources have confirmed availability for the evaluation timeframe.
- [ ] Access to required data sources, staging environments, and credentials has been provisioned (or is scheduled to be provisioned by Day 1).

**If resources are not committed:** The POC will stall on Day 3 because the prospect's DBA is on vacation and nobody can grant access to the staging database.

### 5. Competitive Landscape
- [ ] The AE has identified which competitors (if any) are also being evaluated.
- [ ] The SE understands the competitor's strengths and has prepared differentiation messaging.

**If the competitive landscape is unknown:** You may be walking into a bake-off blind, unable to position your architecture against the specific threats.

### 6. Timeline Agreement
- [ ] A fixed start date and end date have been agreed upon by both parties.
- [ ] There is a hard deadline driving the evaluation (contract expiry, board mandate, fiscal year-end).

**If no timeline exists:** The prospect has no urgency. The POC will drag on indefinitely.

## The "POC Readiness Gate"

The SE Manager should implement a formal **POC Readiness Gate** — a 15-minute internal review where the AE and SE present the pre-condition checklist to the SE Manager before any POC is approved to start.

If any of the 6 pre-conditions above are not met, the POC is not approved. The AE is sent back to complete the missing items before SE resources are allocated.

> **War Story:** An SE Manager implemented the POC Readiness Gate and rejected 30% of incoming POC requests in the first quarter. AEs initially pushed back aggressively. By the end of the quarter, the team's POC-to-Close conversion rate had jumped from 25% to 48% because the SEs were only running evaluations for deals that had genuine purchase intent, validated budget, and executive sponsorship.

> **Failure Mode:** "The Open Door POC Team." Every AE request for a POC is approved without qualification. The SE team is permanently running 8-10 simultaneous POCs, most of which have no budget, no executive sponsor, and no success criteria. The SEs burn out, the win rate drops to 15%, and the best SEs quit for competitors where their time is respected.

**Interview Angle:**
"What criteria do you use to decide whether a deal deserves a POC?"
A strong answer is: "I use a 6-point pre-condition checklist covering budget validation, executive sponsorship, signed success criteria, prospect resource commitment, competitive landscape, and timeline agreement. If any pre-condition is missing, I work with the AE to address it before allocating SE time. This ensures I only invest deeply in deals with genuine purchase intent."

🔴 **Senior-Level** — Starting a POC without pre-conditions is like deploying untested code. You might get lucky, but you'll usually regret it.

---
