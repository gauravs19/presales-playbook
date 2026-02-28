# When the Prospect Moves the Goalposts

Moving goalposts is not the same as scope creep. Scope creep is additive—the prospect adds new requirements on top of the existing criteria. Moving goalposts is substitutive—the prospect changes the definition of success after you've already started proving the original criteria.

This is far more dangerous because it invalidates work you've already completed.

---

## Why Goalposts Move

### Reason 1: Internal Politics Shifted
The original champion defined the success criteria based on their team's priorities. But their VP attended a competitor's demo last week and is now interested in a completely different capability. The champion is forced to realign the POC to the VP's new interest.

### Reason 2: The Prospect Realized They Asked for the Wrong Thing
During the POC, the prospect's team discovers that the problem they thought they had (slow data ingestion) is actually a symptom of a deeper problem (poor data quality). They want to redirect the evaluation toward data cleansing rather than ingestion speed.

### Reason 3: A Competitor Set a Trap
The competitor's SE learned about your POC and strategically positioned a capability that forces the prospect to re-evaluate their criteria. The prospect now wants to test something they never cared about before—because the competitor told them to care about it.

## How to Handle Moving Goalposts

### Step 1: Acknowledge, Don't Resist
Do not refuse the change outright. That makes you look inflexible. Instead, acknowledge the new requirement and ask for the business context:

> *"I understand the team is now interested in evaluating data quality capabilities in addition to ingestion speed. Can you help me understand what changed? I want to make sure we're solving the right problem."*

### Step 2: Renegotiate the Sandbox Lock
The new criteria must be formally documented as an amendment to the evaluation plan. Use the conversation to extend the timeline:

> *"If we're adding data quality validation as a success criterion, I'd recommend we extend the evaluation by 5 business days to ensure we can rigorously test it without compromising the original ingestion criteria."*

### Step 3: Address the Competitor's Influence
If you suspect a competitor planted the new requirement, address it directly with the champion:

> *"Some of these new requirements sound very specific—almost like they're designed around a particular vendor's architecture. Are you evaluating another platform in parallel? If so, I'd like to understand their approach so I can provide a fair technical comparison."*

## When to Walk Away

If the prospect changes the success criteria more than twice, the evaluation is fundamentally broken. The prospect either doesn't know what they want, has no internal alignment, or is using the POC to explore the market without purchase intent.

After the second goalpost move, have a direct conversation:

> *"We've now adjusted the evaluation criteria twice, which tells me the internal requirements may still be evolving. Rather than continue investing time in an evaluation that might shift again, I'd suggest we pause the POC and schedule a discovery session with your full stakeholder group to lock in the final requirements. Once everyone is aligned, we can resume with a fresh, focused evaluation."*

> **War Story:** An SE was 10 days into a 14-day POC when the prospect's Director of Engineering attended a standup for the first time and said: "Forget the data ingestion—I want to see how your platform handles ML model scoring." The SE had never discussed ML capabilities in any discovery call. The Director had just returned from a conference where a competitor demonstrated ML scoring. The SE asked for a 5-minute sidebar, learned the Director's true business need (predicting delivery delays), and demonstrated how the platform's existing data pipeline could feed into their current ML tooling—without requiring the platform to natively score models. The Director was satisfied, and the original criteria were preserved.

> **Failure Mode:** "The Doormat SE." This SE accepts every goalpost change without pushback. By Day 14, the evaluation has been redirected 3 times, no original criteria have been conclusively proven, and the prospect declares the POC "inconclusive." The SE is sent back to run a second evaluation—this time with criteria that will probably change again.

**Interview Angle:**
"How do you handle a situation where the prospect changes their evaluation criteria mid-POC?"
A strong answer is: "I first understand why the criteria changed—internal politics, deeper problem discovery, or competitive influence. Then I formally amend the evaluation plan, negotiate a timeline extension, and document the new criteria. If the goalposts have moved more than twice, I recommend pausing the POC and running a stakeholder alignment session to lock in the final requirements before resuming."

🔴 **Senior-Level** — Moving goalposts means something broke in the prospect's internal alignment. Diagnose it before you accommodate it.

---
