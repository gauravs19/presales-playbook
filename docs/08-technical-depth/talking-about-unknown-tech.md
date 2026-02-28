# How to Talk About Technology You Don't Fully Understand

At some point in every enterprise deal, a prospect will ask you about a technology that you've heard of but don't deeply understand. Maybe it's eBPF, WebAssembly, Service Mesh, or a niche protocol specific to their industry.

The wrong response is to fake expertise. The right response is controlled honesty.

---

## The Framework: Acknowledge, Bridge, Defer

### Step 1: Acknowledge
Admit that the technology is not your area of deep specialization. Do this confidently, not apologetically.

> *"That's a great question. Service Mesh is adjacent to our core platform, so I want to make sure I give you an accurate answer rather than a superficial one."*

### Step 2: Bridge
Connect the question to something you do know deeply.

> *"What I can tell you is how our platform integrates with service mesh architectures. We support sidecar injection for Istio and Linkerd, and our telemetry pipeline captures service mesh metrics natively."*

### Step 3: Defer
Offer to bring in a specialist or follow up with a detailed answer.

> *"For the deeper Istio configuration questions, I'd like to bring in our Platform Engineering specialist who has deployed our product alongside Istio in 15+ enterprise environments. Can I schedule a 30-minute deep dive for Thursday?"*

## Why This Works

1. **Honesty builds trust.** The CTO knows you're not an expert in everything. Admitting a boundary demonstrates intellectual integrity.
2. **Bridging demonstrates value.** You showed that your platform integrates with the technology, which is what the prospect actually cares about.
3. **Deferring shows organizational depth.** You have specialists. This signals enterprise maturity.

## What NOT to Do

*   ❌ Do not Google it on your phone under the table.
*   ❌ Do not make up an answer and hope they don't follow up.
*   ❌ Do not dismiss the technology: "Nobody really uses that in production."
*   ❌ Do not over-promise: "Oh yeah, we fully support that" when you don't know.

> **War Story:** A prospect's Principal Engineer asked the SE about Apache Arrow Flight for high-performance data transfer. The SE had never heard of it. Instead of faking it, the SE said: "I'm not deeply familiar with Arrow Flight's specifics, but I know it's designed for high-throughput columnar data transfer. Let me connect you with our data engineering team this week—they've been evaluating Arrow Flight for our next release." The Principal Engineer later told the AE: "Your SE was the only vendor who was honest when they didn't know something. Everyone else made stuff up."

> **Failure Mode:** "The Faker." This SE claims expertise in everything. When the prospect asks about Arrow Flight, they say: "Yes, we fully support it." Two weeks later, the prospect discovers the platform has never integrated with Arrow Flight. The SE's credibility is destroyed—and the prospect wonders what else the SE lied about.

**Interview Angle:**
"What do you do when a prospect asks about a technology you don't fully understand?"
A strong answer is: "I use an Acknowledge-Bridge-Defer framework. I honestly say the topic isn't my deep specialization, but I bridge to how our platform integrates with or relates to that technology. Then I offer to bring in a specialist for a detailed follow-up. I've found that controlled honesty builds more credibility than pretending to be an expert."

🟡 **Mid-Level** — Faking technical expertise is a career-ending strategy. Controlled honesty is a career-building one.

---
