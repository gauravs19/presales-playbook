#### 3.2.1 The Layered Diagnostic — D.A.R.T. Framework

Most SEs ask questions in a flat sequence: "What tools do you use? How many users? What's your budget?" Each question stands alone. There's no structure building toward a deeper diagnosis. The prospect answers each one mechanically, like filling out a form. By question 8, they're bored. By question 12, they're checking email.

D.A.R.T. is a layered diagnostic framework designed to move from surface to depth in a natural conversational flow. Each layer builds on the previous one, creating a progressive deepening that feels like a conversation, not an interrogation.

**D — Describe** (Surface Layer)
Ask the prospect to describe their current state. No judgement, no analysis — just observation.
- "Walk me through what happens when a new data source needs to be onboarded."
- "Describe the flow from raw data to the report your CFO sees every Monday."
- "Tell me what a typical day looks like for your data engineering team."

The purpose: understanding the "what." What exists. What they do. What the process looks like. This layer is non-threatening and easy for the prospect to answer because they're simply describing their reality.

**A — Analyse** (Diagnostic Layer)
Once you understand the "what," probe the "why" and "where."
- "Where in that flow does the process typically break down or require manual intervention?"
- "Which step takes the longest, and why?"
- "Of the 6 data sources you described, which one causes the most headaches — and what does that look like when it fails?"

The purpose: identifying pain points, bottlenecks, and fragility in their current process. You're moving from observation to diagnosis. The prospect starts to articulate problems they may not have previously verbalised.

**R — Resolve** (Impact Layer)
Once you've identified the pain, quantify the impact and explore their vision for resolution.
- "When the pipeline breaks and requires manual intervention, how many hours does that take? How often does it happen?"
- "If you could eliminate that manual step entirely, what would your team do with the recovered time?"
- "What does 'solved' look like for you — what would success mean operationally?"

The purpose: translating problems into quantifiable impact and desired outcomes. This layer produces the metrics you'll need for ROI arguments and the success criteria you'll use for your proof-of-concept.

**T — Test** (Validation Layer)
Test your understanding and validate your hypothesis against their reality.
- "Let me play back what I'm hearing: your core problem is X, it's costing you approximately Y hours per week, and a successful solution would need to do Z. Am I capturing that accurately?"
- "If I could show you a solution that addresses X and Y but requires a trade-off on Z, would that still be valuable?"
- "Is there anything I haven't asked about that's important to your decision?"

The purpose: confirming your diagnosis, testing deal-impacting assumptions, and catching anything you missed. The playback technique is particularly powerful because it demonstrates listening and gives the prospect a chance to correct or add nuance.

> **War Story:** An SE was running discovery with a manufacturing company. Using the D.A.R.T. framework: **Describe** — the prospect walked through their SAP-to-data-warehouse pipeline. Six steps, three manual handoffs. **Analyse** — the SE identified that step 4 (schema validation) was the bottleneck: it failed 3x per week and required 2 hours of manual intervention each time. **Resolve** — the impact: 6 hours/week, or $156K/year in engineering time, plus delayed reports that caused the operations team to make decisions on stale data. **Test** — the SE played it back: "So the core issue is schema drift in the SAP feed that breaks your warehouse load, costing 6 hours/week and delaying operational reporting by a day. Is that accurate?" The prospect's Engineering Director said: "That's the first time a vendor has actually understood our problem." That single sentence — spoken 20 minutes into the call — was the moment the SE won the deal. The product demo was a formality.

> **Failure Mode:** The SE who stays stuck in the Describe layer. They ask 15 questions about the current environment — tools, versions, user counts, data volumes — and never move to Analyse or Resolve. They leave the call with a comprehensive inventory of the prospect's technology stack but no understanding of where it hurts, how much it costs, or what good looks like. Inventory is not discovery. Diagnosis is.

**Interview Angle:**
"Walk me through how you structure your discovery conversations."
A strong answer describes a layered framework (D.A.R.T. or equivalent) with examples of how each layer progressively deepens insight. A weak answer describes "asking about their tech stack and requirements."

**Practical Reference: D.A.R.T. Question Bank**

| Layer | Question Type | Example |
|-------|--------------|---------|
| **D**escribe | Process walkthrough | "Walk me through the end-to-end data flow for your reporting." |
| **D**escribe | Team structure | "Who on your team is responsible for maintaining the pipeline?" |
| **A**nalyse | Breakdown identification | "Where does this process most often fail or require manual intervention?" |
| **A**nalyse | Root cause probing | "What causes that failure? Is it data quality, volume, schema changes?" |
| **R**esolve | Impact quantification | "How many hours per week does your team spend on that manual work?" |
| **R**esolve | Vision of success | "If this problem were solved, what would change for your team operationally?" |
| **T**est | Playback validation | "Let me summarise what I'm hearing…" |
| **T**est | Assumption testing | "If we could address X but not Y, would that still be valuable?" |

🟢 **Entry-Level** — D.A.R.T. turns discovery from a flat Q&A into a diagnostic conversation. Practise each layer until the transitions feel natural.

---
