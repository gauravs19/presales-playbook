# Managing the Daily Standup Without Becoming Free Consulting

The daily standup during a POC is the most dangerous meeting on your calendar. In theory, it is a 15-minute alignment check. In practice, it becomes a 60-minute free consulting session where the prospect's team asks you to debug their legacy infrastructure, redesign their data pipelines, and train their junior developers.

---

## The Standup Rules

### Rule 1: 15 Minutes Maximum
Set a hard timer. When the timer rings, the meeting ends. If there are unresolved items, schedule a separate focused session—but only if the item is within the POC scope.

### Rule 2: The Three-Question Format
Every standup follows exactly three questions:

1. **"What did we accomplish since our last sync?"** (The SE reports progress on success criteria.)
2. **"What is blocked?"** (Identify any access issues, data problems, or pending decisions from the prospect's side.)
3. **"What are we doing next?"** (Align on the next 24 hours of evaluation activity.)

That's it. Nothing else.

### Rule 3: Redirect Off-Topic Requests
When the prospect uses the standup to ask questions outside the POC scope, redirect immediately.

> *"That's a great question about your Kafka cluster configuration, but it's outside the scope of this evaluation. Let me capture it as a topic for the implementation kickoff call after we finalize the commercial agreement."*

You just acknowledged the question (they feel heard), deferred it (you protected your time), and tied it to the commercial close (the AE now has leverage).

## The "Consulting Creep" Warning Signs

*   The prospect starts sending you architecture diagrams of systems that are not part of the POC and asking for your opinion.
*   Their junior developers start attending the standup and asking how-to questions about your API documentation.
*   The standup duration has crept from 15 minutes to 45 minutes over the course of the POC.

When you see these signs, reset immediately by re-reading the Sandbox Lock Document at the start of the next standup.

> **War Story:** An SE ran a 14-day POC and spent 2 hours per day on "standups" that were actually consulting sessions. By Day 10, the SE had designed an entire ETL pipeline for the prospect, debugged their existing Apache Airflow instance, and trained two junior developers on REST API best practices. None of this was in the success criteria. The POC technically succeeded, but the prospect had extracted $20k worth of free consulting and used the SE's architecture designs to build the solution in-house.

> **Failure Mode:** "The Helpful Teacher." This SE loves solving problems so much that they can't help answering every question, even when it's outside the POC scope. The prospect's team starts treating the SE as an extension of their own engineering department. The SE's other deals are neglected because they're spending 4 hours per day on a single POC standup.

**Interview Angle:**
"How do you manage your time during a multi-week POC?"
A strong answer is: "I enforce a strict 15-minute standup format focused on three questions: progress, blockers, and next steps. If the prospect raises topics outside the POC scope, I acknowledge them but defer to the implementation phase. This keeps the evaluation focused and prevents the POC from becoming an unpaid consulting engagement."

🟡 **Mid-Level** — The standup exists to drive the evaluation forward, not to give the prospect free consulting hours.

---
