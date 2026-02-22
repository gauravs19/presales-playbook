#### 4.1.4 When to Say We Can't Do That

In presales, "yes" is the default answer. When a prospect asks if your software integrates with their obscure, 20-year-old accounting system, the instinct is to say: "Yes, we have an API, so we can build a custom connector." 

Every time you say "yes" to a capability your platform was not designed for, you are accruing technical debt that your implementation team will have to pay with interest. You win the deal, but you destroy your company's margin and your own credibility when the project fails six months later.

Knowing when—and how—to say "we can't do that" is the difference between a Junior SE (who wants to please the AE) and a Principal SE (who protects the company's delivery capability).

1. **The "Core vs. Custom" Boundary.** Your platform has a core identity. If you sell a CRM, and the prospect asks if it can act as a lightweight ERP for inventory management, the answer is no. "While you could technically use our custom objects to track inventory, that violates our architectural design. Our system is optimized for relationship data, not transactional ledger data. Attempting to use it as an ERP will result in massive performance degradation as your inventory scales." 

2. **The "Not on Our Roadmap" Honest.** When asked about a missing feature, do not invent a roadmap. Do not say, "Engineering is looking into that for Q3." If it is not committed on the roadmap, say no. "That is a great use case, but to be completely transparent, that feature is not on our 12-month engineering roadmap because our current focus is entirely on deepening our security posture. If that feature is a day-one prerequisite for you, we are likely not the right fit." 

3. **Saying No with a Partner Solution.** The best way to say no is to augment your platform with an ecosystem expert. "We do not do native document parsing because it requires highly specialized OCR models. Instead of building a mediocre version of that ourselves, we partner natively with [Partner Company], who are world-class at it. I've designed the architecture to seamlessly route the documents to them, extract the data, and return it to our workflow seamlessly." You just said no to building it, but yes to solving the business problem.

4. **The AE Alignment on "No."** Before the meeting, you must have an agreement with your AE: the SE has veto power over technical commitments. If the prospect corners the AE—"So you can guarantee you'll build this feature before we sign?"—and the AE looks at you, you must be empowered to say: "We cannot guarantee that. We do not do custom engineering for single customers because it creates branching codebases that destabilize the platform for everyone else." If your AE gets angry at you for telling the truth, you have an AE problem, not a technical problem.

5. **Protecting the Post-Sales Team.** Presales gets the glory of the win; Post-Sales gets the misery of the implementation. When you evaluate a prospect's architecture request, ask yourself: "Would I want to be the implementation engineer assigned to build this?" If the answer is no, you must kill the requirement. "Your request requires chaining together four different webhook triggers to simulate a native event. This is incredibly fragile. If one hook fails, the entire process silently dies. We will not architect a system for you that is mathematically guaranteed to fail in production."

> **War Story:** A massive retail prospect asked an SE if their SaaS e-commerce platform could support a highly customized, multi-tiered loyalty points algorithm they had designed internally. The AE, desperate for the $800K deal, nudged the SE to say yes. The SE looked at the flowchart the prospect provided. "We cannot support this natively," the SE said. "Our engine calculates points linearly at checkout. To support this algorithm, we would have to intercept the transaction mid-flight, call out to your external rules engine, wait for the calculation, and return it to the cart. That introduces a 2-second delay at checkout, which will absolutely crush your conversion rates. The answer is no." The prospect's VP of E-Commerce sighed and said: "Finally, an engineer who actually cares about checkout latency. Every other vendor said yes. Let's look at simplifying our algorithm to fit your linear engine." The SE won the deal *because* he said no.

> **Failure Mode:** The "We Have an API for That" SE. This SE uses "we have an API" as a magic wand to wave away any missing functionality. They tell the prospect that anything is possible with enough custom code. The prospect buys the vision. Six months later, the implementation team is writing thousands of lines of fragile spaghetti code to force the platform to do something it was never designed to do. The SE got their commission; the company lost money on the account.

**Interview Angle:**
"Tell me about a time you had to tell a prospect that your product could not do what they wanted."
A strong answer describes confidently saying no to protect the architectural integrity of the platform or the sanity of the delivery team. A weak answer describes finding a messy workaround just to keep the deal alive.

🟡 **Entry-Level** — Saying "yes" to a bad technical fit is not selling. It is lying with code. Say no to protect the prospect from their own bad ideas.

---
