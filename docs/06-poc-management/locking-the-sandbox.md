# Locking the Sandbox So Goalposts Can't Move

Every POC must operate within a locked sandbox—a rigidly defined set of success criteria, data sources, integrations, and timelines that cannot be modified once the evaluation begins.

Without a locked sandbox, the prospect will continuously add new requirements mid-POC, effectively converting your 14-day evaluation into a 90-day free consulting engagement.

---

## The Sandbox Lock Document

Before the POC begins, the SE must co-author a **Sandbox Lock Document** with the prospect's technical evaluator. This is a 1-page agreement that defines:

### 1. Success Criteria (Maximum 5)
List exactly 3-5 measurable outcomes that define a successful POC. Each criterion must be binary (Pass/Fail), not subjective.

*   ✅ **Good:** "The platform successfully ingests 1M records from the PostgreSQL staging database within 60 minutes."
*   ❌ **Bad:** "The platform performs well with our data."

### 2. Data Sources (Locked)
Specify exactly which data sources will be used during the evaluation. No new data sources can be added mid-POC.

### 3. Integrations (Locked)
List every integration that will be tested. If the prospect decides mid-POC that they also want to test a Salesforce connector, it is out of scope and will be addressed during implementation.

### 4. Timeline (Hard Deadline)
The POC has a fixed start date and a fixed end date. Extensions are not granted unless the prospect's own team caused a delay (e.g., they failed to provision access to their staging database on time).

### 5. Decision Framework
At the end of the POC, if all success criteria are met (Pass), the prospect commits to entering commercial negotiations within 5 business days. This clause is the most important line in the document.

## Enforcing the Lock

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
