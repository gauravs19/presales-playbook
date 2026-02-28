# Preventing and Managing Scope Creep

Scope creep is the silent killer of POC economics. It starts with an innocent request—"Can we test one more integration?"—and ends with the SE spending 80 hours on a 14-day evaluation that should have consumed 30.

Every hour of scope creep is an hour stolen from another deal. The cumulative effect across a full SE team is devastating: lower win rates, longer deal cycles, and engineer burnout.

---

## The Anatomy of Scope Creep

Scope creep during a POC follows a predictable pattern:

1. **Day 1-3:** The SE and prospect align on the success criteria. Everyone is focused.
2. **Day 4-7:** The prospect's team starts exploring the platform beyond the agreed criteria. They discover adjacent capabilities. They get excited.
3. **Day 8-12:** The prospect starts asking: "While we have the sandbox, can we also test [X]?" The SE, wanting to be helpful, says yes.
4. **Day 13-14:** The originally scoped POC is nowhere near complete because 40% of the SE's time was spent on un-scoped work. The prospect asks for an extension.

## The Prevention Protocol

### 1. The Sandbox Lock Document (Your Shield)
Every POC must start with a signed Sandbox Lock Document (see "Locking the Sandbox"). This document is your contractual defense against scope creep.

### 2. The "Parking Lot" Technique
When the prospect asks for something outside scope, do not say "No." Say "Not now."

> *"That's an excellent idea. I'm adding it to our Parking Lot. We'll address it during the implementation phase after we conclude this evaluation. For the remaining 5 days, I want to make sure we conclusively prove the 3 core criteria we agreed on."*

Maintain a visible "Parking Lot" list (a shared Google Doc or Notion page) where you document every out-of-scope request. This serves two purposes:
1. The prospect sees that their requests are being captured, not dismissed.
2. The AE can use the Parking Lot list as implementation scope during commercial negotiations.

### 3. The "Time Budget" Disclosure
At the start of the POC, be transparent about the time investment:

> *"Our team has allocated 40 hours of Solutions Architecture time to this evaluation. That's enough to rigorously prove all 5 success criteria. If we add scope mid-cycle, we'll need to either extend the timeline or remove a success criterion to stay within the time budget."*

This forces the prospect to prioritize. If they want to add Snowflake integration testing, they have to acknowledge that it comes at the cost of removing the load test scenario.

> **War Story:** An SE had a prospect who kept adding "quick tests" to a 14-day POC. By Day 10, the SE had spent 50 of the allocated 40 hours and hadn't completed 2 of the 5 original success criteria. The SE finally implemented the Parking Lot technique—but it was too late. The original evaluation was inconclusive because the SE's time had been diluted across 12 unplanned test scenarios. The prospect asked for a "do-over" POC, and the SE lost an additional 3 weeks.

> **Failure Mode:** "The Agreeable SE." This SE says yes to every request because they believe accommodation equals good customer service. By the end of the POC, the scope has tripled, the timeline has doubled, and the success criteria have been so diluted that no clear verdict can be reached. The prospect doesn't make a buying decision because the evaluation never produced a definitive result.

**Interview Angle:**
"How do you handle scope creep during a POC?"
A strong answer is: "I use a Parking Lot technique. Every out-of-scope request is acknowledged and documented in a shared list, then deferred to the implementation phase. I'm transparent about the time budget at the start of the POC, so the prospect understands that adding scope means either extending the timeline or removing existing criteria. This keeps the evaluation focused and ensures a clear pass/fail verdict."

🟡 **Mid-Level** — Scope creep is not the prospect being difficult. It is the SE failing to enforce boundaries. Own the discipline.

---
