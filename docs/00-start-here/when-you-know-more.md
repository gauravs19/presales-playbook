#### 0.4.4 When You Know More Than the Senior SE — And What to Do

It will happen sooner than you expect. You'll be sitting in a meeting and a prospect will ask about a Kubernetes orchestration pattern, a GraphQL federation approach, or a machine learning pipeline architecture — and you'll know the answer. The senior SE won't. They'll either bluff, deflect, or look at you with the universal "help me" expression that every SE learns to recognise.

This moment is a minefield. Handle it well and you become an indispensable complement to the senior team. Handle it badly and you become "that junior SE who made Sarah look bad in front of the customer."

1. **Never correct a senior SE in front of a customer.** This is the cardinal rule and it has no exceptions. Even if the senior SE just told the prospect something factually incorrect, do not jump in with "actually, that's not quite right." The prospect's trust in your team evaporates the moment they see internal disagreement. Wait until after the call. Address it privately. If the error could cause a material problem (a false compliance claim, an impossible performance guarantee), message the SE privately during the call: "Hey, I want to make sure we're precise on that point — want me to clarify?" Let them invite you in.

2. **Use the "add-on" technique, not the "correction" technique.** If you need to contribute your expertise in real time, frame it as an addition: "Building on what Sarah said, one thing I'd add specifically for your Kubernetes environment is..." This positions you as deepening the answer, not contradicting it. The senior SE looks good because their answer is being "expanded upon" rather than "fixed."

3. **Offer your expertise in advance, not in the moment.** If you know you have domain knowledge the senior SE lacks, brief them *before* the meeting: "Hey, I noticed the prospect's architecture section mentions gRPC service mesh. I've worked with Istio and Linkerd extensively — want me to take the integration questions if they come up?" This lets the senior SE delegate gracefully instead of being surprised.

4. **Document your contributions without self-promotion.** After a call where your technical depth was critical, don't send a Slack message saying "I really saved that meeting when the Kafka question came up." Instead, log detailed technical notes in the CRM and let the record speak for itself. Your manager will notice. The senior SE will notice. The contribution is visible without you pointing at it.

5. **Build a reputation as the team's specialist, not a threat.** If you have deep expertise in cloud architecture, ML pipelines, or security — make yourself the team's go-to resource for that domain. When other SEs get questions they can't answer, they should think of you first. Being the specialist everyone calls upon is the fastest path to influence and respect. Being the junior who corrects seniors is the fastest path to isolation.

> **War Story:** A new SE with a background in data engineering joined a team where the senior SEs were generalists. In a customer meeting, the prospect's data architect asked about Change Data Capture (CDC) patterns for real-time replication from Oracle to Snowflake. The senior SE gave a vague answer about "our platform handles data movement." The new SE could see the data architect losing interest — the answer was too shallow for a technical evaluator. The new SE messaged the senior SE: "Want me to take this one? I've implemented CDC with Debezium in production." The senior SE said, "Please." The new SE spent 5 minutes walking through CDC architecture specific to the prospect's Oracle version. The data architect said, "That's the first time a vendor has actually understood our replication challenge." The deal progressed. The senior SE thanked the new SE publicly at the team meeting. The new SE became the team's go-to for all data integration conversations — three weeks into the job.

> **Failure Mode:** The new SE who, knowing more about a specific technology, starts subtly undermining the senior SE's credibility. They sigh audibly when the senior SE gives a simplified answer. They send "helpful" articles to the senior SE after meetings. They tell AEs, "You should really bring me into that deal instead of Sarah — I know the technology better." Within weeks, they've earned a reputation as arrogant. The senior SE stops inviting them to calls. AEs don't request their involvement. Their technical brilliance becomes irrelevant because nobody wants to work with them.

**Interview Angle:**
"Tell me about a time you knew more about a topic than a senior colleague in a customer meeting. How did you handle it?"
A strong answer demonstrates restraint, collaboration, and a focus on the deal outcome rather than personal recognition. A weak answer focuses on how they were right and how the senior person was wrong.

**Practical Reference: The Expertise Contribution Framework**

| Situation | Do This | Don't Do This |
|-----------|---------|---------------|
| Senior SE gives a vague answer | Message privately, offer to take the question | Correct them publicly |
| You have domain expertise coming into the meeting | Brief the senior SE beforehand | Wait for them to struggle, then rescue |
| Your contribution was critical to the deal | Log detailed notes in CRM | Send a team Slack highlighting your save |
| Senior SE asks for help mid-call | Accept gracefully, deliver cleanly | Make it obvious they needed help |

🟢 **Beginner** — At this level, knowing when to speak and when to stay silent is more important than what you actually know. Technical superiority without political intelligence is a net negative.

---
