# Running an Executive Briefing

An executive briefing is not a longer demo with better slides. It is a different genre of meeting with different physics: the audience decides in the first five minutes whether you're worth listening to, delegates mentally the moment you drop below their altitude, and remembers exactly one thing from the entire hour. Design for those three facts and you'll run briefings that move deals; ignore them and you'll deliver a very polished presentation to people answering email.

The structural error most SEs make is treating the briefing as a broadcast. Executives don't attend meetings to receive information — they attend to make or unmake decisions. Your job is to frame a decision so clearly that making it feels like their idea.

---

## The 10/40/10 Structure

For a 60-minute briefing, the winning shape is:

| Segment | Time | What happens |
|---------|------|--------------|
| Frame | 10 min | You state the problem in *their* numbers, the decision on the table, and what you'll prove in the next 40 minutes. No company overview. No agenda-slide theater. |
| Evidence | 40 min | Structured conversation around 3 proof points max — each anchored to a pain their own team validated. Dialogue, not monologue: plan a question *to them* every 10 minutes. |
| Decision | 10 min | Restate the decision structure (do nothing / alternative / proposed), name the risk honestly, make the specific ask with a date. |

The discipline is in what's absent: product architecture, feature tours, company history, customer logo slides. If an executive wants any of those, they'll ask — and an answer to a question lands ten times harder than the same content broadcast unrequested.

## Pre-Wire or Don't Bother

A briefing where you learn the executives' positions *in the room* is a briefing you've already lost. Before the meeting:

1. **Your champion reviews the deck** and tells you which slide will draw fire, and from whom.
2. **Each executive gets a one-page pre-read** ([template](docs/13-templates/executive-briefing-one-pager.md)) 48 hours out — the decision structure, not the pitch.
3. **You know each attendee's initiative.** The CIO's platform consolidation mandate, the CFO's cost-out program. Every proof point gets bound to one of them, by name: "This is what removes the scaling blocker on the consolidation program."

## Handling the Altitude Drop

Someone — usually a lieutenant brought along to evaluate — will drag the conversation into the weeds: "What's your API rate limit?" Answer in one sentence, then restore altitude: "Two thousand requests a second, which is why your team signed off on the throughput criterion — the more interesting question for this group is what that unlocks for the Q1 launch." You've respected the question, demonstrated command, and returned the room to the decision.

> **War Story:** An SE opened a CIO briefing with the customary five-minute company overview. Ninety seconds in, the CIO said: "I know who you are — that's why you're here. What should I do?" The SE froze; the AE improvised badly; the meeting never recovered its frame. The SE's rebuilt opening for the next executive meeting was one sentence: "You're spending roughly $2M a year working around a batch window, your team has verified we can remove it, and I'm here to recommend how — and where the risks are." That briefing ran twenty minutes over because the executives wouldn't stop asking questions. The difference wasn't confidence. It was starting at the altitude the audience lives at.

> **Failure Mode:** The SE who aces the 40-minute evidence segment and then lets the meeting end with "great, let's keep the conversation going." No decision restated, no ask, no date. Executives leave impressed and uncommitted — and an impressed-but-uncommitted executive is indistinguishable, three weeks later, from one who never attended. The last ten minutes *are* the meeting. Everything before them is earning the right to run them.

**Interview Angle:**
"Walk me through how you'd run a briefing for a CIO who's skeptical of your platform."
A strong answer covers pre-wiring through a champion, a decision-first opening in the CIO's numbers, planned dialogue rather than broadcast, and a specific ask with a date. A weak answer describes a really good demo with executive-looking slides.

🔵 **Senior** — Executives attend briefings to make decisions. Bring them a decision, or you've brought them a waste of an hour.

---
