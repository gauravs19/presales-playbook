# Excluding Roadmap Features from the POC

One of the fastest ways to destroy trust in an enterprise deal is to demonstrate a feature during a POC that doesn't actually exist in the shipping product.

When an SE shows a beta feature, a staging-only capability, or a roadmap item as if it were production-ready, they are selling vaporware. If the prospect buys based on that demonstration and the feature isn't available at go-live, you have a churn event, a legal dispute, or both.

---

## The Rule: If It's Not GA, It's Not In the POC

General Availability (GA) means the feature is fully released, supported, documented, and covered by your company's SLA. Anything that is in Alpha, Beta, Private Preview, or "coming in Q3" must be explicitly excluded from the POC success criteria.

### Why SEs Break This Rule
*   **Fear of losing the deal:** "If I don't show the AI feature, the competitor will."
*   **Engineering confidence:** "The PM told me it's shipping next month. It'll be fine."
*   **Impressing the prospect:** "If I show them the roadmap, they'll see our vision and commit."

All three of these justifications lead to the same outcome: the prospect builds their business case around a feature that doesn't exist, and the SE's company is contractually or morally obligated to deliver it.

## How to Handle Roadmap Requests

When a prospect asks to evaluate a feature that is on the roadmap but not yet GA:

<div class="roleplay-script">
  <div class="dialogue-row">
    <div class="speaker-avatar">CTO</div>
    <div class="speaker-message">
      <strong>Prospect CTO</strong>
      "We saw in your product blog that you're building a native GraphQL API. Can we test that during the POC?"
    </div>
  </div>
  <div class="dialogue-row">
    <div class="speaker-avatar">SE</div>
    <div class="speaker-message">
      <strong>Elite SE</strong>
      "Great question. The GraphQL API is currently in Private Beta and is not yet covered by our production SLA. I wouldn't want to base your evaluation on a feature that's still under development. For this POC, let's validate the core use case using our production REST API, which is fully GA and battle-tested. I can arrange a separate roadmap briefing with our Product team so you have full visibility into the GraphQL timeline and can plan your future architecture accordingly."
    </div>
  </div>
</div>

You just protected the deal from a post-sale failure while keeping the prospect excited about the future.

## The "Roadmap Briefing" as a Strategic Tool

Offering a separate roadmap briefing (outside the POC) achieves two things:
1. The prospect gets visibility into your product direction, building long-term confidence.
2. The POC remains focused on proving value with production-ready capabilities, eliminating risk.

> **War Story:** An SE demonstrated a machine learning anomaly detection feature to a financial services prospect. The feature was in Beta. The prospect built their entire business case around it. When the contract was signed and implementation began, the ML feature was delayed by 6 months due to a regulatory compliance issue. The customer's VP called it "bait and switch" and threatened to cancel the contract. The SE's company was forced to offer a 40% discount on Year 2 to save the relationship.

> **Failure Mode:** "The Roadmap Salesman." This SE treats the product roadmap as a catalog of features they can sell today. They show beta screens, staging environments, and Figma mockups during demos. When prospects buy and the features don't materialize on schedule, the SE blames Product. But the SE made the promise—not Product.

**Interview Angle:**
"How do you handle a situation where a prospect wants to evaluate a feature that isn't yet generally available?"
A strong answer is: "I never include non-GA features in POC success criteria. If a prospect asks about a roadmap item, I offer a separate Product Roadmap Briefing with our PM team while keeping the POC focused on production-ready capabilities. This protects the prospect from building a business case on undelivered promises and protects my company from post-sale escalations."

🟡 **Mid-Level** — Sell what you ship. Demo what is GA. Everything else is a roadmap conversation, not a POC criterion.

---
