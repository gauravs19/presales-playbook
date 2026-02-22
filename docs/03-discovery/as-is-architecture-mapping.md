#### 3.3.1 Mapping As-Is Architecture Without Insulting Their Team

Technical discovery requires you to understand the prospect's current architecture in detail. The challenge: the people who built that architecture are often in the room. If your questions imply that their system is poorly designed, outdated, or inadequate, they'll stop sharing information and start defending their work. You'll lose access to the exact details you need.

Mapping the as-is architecture is a diplomatic exercise as much as a technical one.

1. **Frame the session as documentation, not evaluation.** Open with explicit framing: "I'd like to understand your current architecture so I can design a solution that integrates cleanly with what you've already built. I'm not here to evaluate your system — I'm here to understand it so our solution fits, rather than fights, your environment." This sets the tone: you're here to integrate, not to replace. The prospect's team built something that works — you're acknowledging that while learning where it might benefit from augmentation.

2. **Use the "What was the design intention?" question.** Instead of asking "Why does this pipeline run as a batch process?" (which implies it shouldn't), ask "What was the design intention behind the batch approach? Was it optimised for throughput, cost, or something else?" This validates the original decision while opening the conversation to discuss whether the original constraints still apply. Often, the answer reveals the real story: "We designed it as batch because real-time wasn't needed 3 years ago. Now the business wants real-time, but the architecture wasn't built for it." You've identified the gap without criticism.

3. **Praise before probing.** When the prospect describes something genuinely well-built, say so — specifically. "Your event-driven architecture for the payment processing pipeline is really clean — the separation between ingestion and transformation is exactly what I'd recommend." Specific praise builds trust because it shows you understand the work. Generic praise ("looks great!") is ignored because it's obviously non-substantive. After praise, probe: "One area I'd like to understand better is the reconciliation between the event stream and the batch warehouse. How do you handle late-arriving events?"

4. **Ask them to tell the story, not describe the system.** "How did this architecture evolve?" is a better question than "What does your architecture look like?" The first produces a narrative — when it was built, what constraints existed, what changed over time, where complexity accumulated. The second produces a static diagram. Narratives reveal pain organically because the person telling the story naturally identifies the moments where things got difficult: "We added the third data source in 2022 and that's when things started getting complicated."

5. **Whiteboard collaboratively, don't present.** If you're in person or on a virtual whiteboard, don't draw the architecture yourself. Hand the marker (or mouse) to the prospect: "Could you sketch the high-level data flow? I'll ask questions as you go." When the prospect draws their own architecture, two things happen: they reveal more detail than they would verbally (drawing prompts memory), and they take ownership of the document — which means they'll be more honest about its weaknesses because they're the ones presenting it.

> **War Story:** An SE was mapping the architecture of a telecommunications company. The Lead Architect had been with the company for 12 years and had built most of the data infrastructure personally. The SE asked: "What would you change about this architecture if you could start from scratch?" The Lead Architect stiffened: "There's nothing fundamentally wrong with it." Wrong question — it implied criticism. The SE pivoted: "What I mean is, knowing what your business needs today, what capabilities would you add that weren't necessary when you first designed this?" The Lead Architect relaxed: "Honestly? Real-time event processing. When I designed this in 2013, batch was fine. Now the business wants sub-second analytics, and the batch architecture wasn't designed for that." Same question, completely different framing. The first version felt like "what's wrong with your work?" The second felt like "how has the world changed around your work?"

> **Failure Mode:** The SE who walks into technical discovery with thinly veiled criticism. "Is this running on on-premise servers? Interesting." "You're still using Informatica PowerCenter? How does that handle modern streaming use cases?" "Are these manual processes, or is there orchestration?" Each question implies that the current environment is outdated, manual, or insufficient. The prospect's team hears: "You're behind." They stop volunteering information and start defending decisions. The SE leaves with a partial architecture understanding and a hostile technical audience.

**Interview Angle:**
"How do you approach understanding a prospect's current technical environment?"
A strong answer describes a diplomatic approach (design intention questions, narrative-based exploration, collaborative whiteboarding) and acknowledges the sensitivity of evaluating someone else's work. A weak answer describes "asking them to describe their stack" without awareness of the interpersonal dynamics.

**Practical Reference: Architecture Mapping Question Bank**

| Type | Question | What It Reveals |
|------|----------|----------------|
| Design intention | "What was the design intention behind [approach]?" | Original constraints; whether they still apply |
| Evolution narrative | "How has this architecture evolved over the last 2–3 years?" | Where complexity accumulated; what triggered changes |
| Scale + limits | "What happens when data volumes spike? Any limits you're aware of?" | Scalability concerns without criticising current capacity |
| Integration | "How do these systems communicate with each other?" | Integration complexity; manual steps; hidden fragility |
| Wish list | "If you could add one capability to this environment, what would it be?" | The gap they know about but haven't addressed |

🟡 **Mid-Level** — The prospect's architecture is their team's work product. Treat it with the same respect you'd want someone to show when reviewing your code. You'll learn more and build more trust.

---
