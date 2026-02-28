# Technical Scope Concessions and Commercial Consequences

<!-- {"level": "Mid-Level"} -->

One of the most dangerous dynamics in an enterprise sales cycle occurs when the Account Executive (AE) and the Solutions Engineer (SE) fail to operate as a unified commercial front. 

When a prospect pushes for custom features, extended POC timelines, or white-glove onboarding, they will often try to bypass the AE and ask the SE directly:

> *"Hey, couldn't your team just build a quick script to connect our legacy on-prem database to your cloud platform? It would make this so much easier for us to get approved."*

If the SE simply answers the technical question—*"Yes, technically we can build that via an API gateway..."*—they have just unknowingly triggered massive commercial consequences.

---

## The Butterfly Effect of a "Technical Yes"

When you grant a technical scope concession without tying it back to a commercial consequence, you destroy the AE's leverage.

Let's look at the cascade effect of the "Yes" above:

1.  **Margin Erodes:** The custom script requires 40 hours of Professional Services (PS) time. That time costs your company money. Unless the AE charges for it (which the prospect will now refuse to pay for because you made it sound "quick and easy"), the deal margin just plummeted.
2.  **Implementation Risk Spikes:** Custom scripts break. When the prospect upgrades their legacy database next year, the script will fail, triggering a massive Customer Success escalation and potentially causing churn. 
3.  **Timeline Derails:** You can no longer close the deal next week. Legal now has to draft a custom Statement of Work (SOW) to define who owns the intellectual property of the custom script.

---

## How to Handle the "Sneaky" Scope Request

Elite SEs understand that they are the gatekeepers of scope. You must master the art of the "Conditional Yes." 

**Never say "Yes" without attaching a "But..."**

### The Framework: Validate, Isolate, Consolidate

When a prospect asks a "quick technical favour," run this mental framework:

*   **Validate:** Acknowledge the request so they feel heard.
*   **Isolate:** Confirm this is the final hurdle to them buying.
*   **Consolidate (with the AE):** Toss the ball back to the AE to handle the commercial component.

<div class="roleplay-script">
  <div class="dialogue-row">
    <div class="speaker-avatar">CTO</div>
    <div class="speaker-message">
      <strong>Prospect CTO</strong>
      "Can we get your engineering team to build a custom SSO integration for our proprietary internal portal before we sign?"
    </div>
  </div>
  <div class="dialogue-action">(The dangerous SE says: "Yes, our engineering team has built custom SSO before, I can submit a Jira ticket.")</div>
  <div class="dialogue-row">
    <div class="speaker-avatar">SE</div>
    <div class="speaker-message">
      <strong>Elite SE</strong>
      "We absolutely have the engineering capability to build custom SSO integrations via our API layer. However, custom builds require dedicated Solutions Architecture resources which fall outside our standard SaaS licensing."
    </div>
  </div>
    <div class="dialogue-row">
    <div class="speaker-avatar">SE</div>
    <div class="speaker-message">
      <strong>Elite SE (Pivoting)</strong>
      "If we commit the engineering hours to build this custom connector for you... is there anything else preventing us from moving forward with the contract this week? Or is this the final technical requirement?"
    </div>
  </div>
    <div class="dialogue-row">
    <div class="speaker-avatar">AE</div>
    <div class="speaker-message">
      <strong>Account Executive (Taking the cue)</strong>
      "Exactly. If [SE Name] can get our engineering leads to approve the custom build, I'll need to package those Professional Services hours into the proposal. If we do that, can we get procurement to sign off by Friday?"
    </div>
  </div>
</div>

Notice what happened here:
1.  **You didn't lie.** You affirmed technical capability.
2.  **You protected margin.** You clearly stated it requires dedicated resources (money).
3.  **You gave the AE leverage.** The AE immediately stepped in to use the SE's technical concession as a bargaining chip for a specific close date.

---

## Recognizing the "Free Consulting" Trap

Prospects will often use the SE evaluation stage to extract free consulting or architecture design under the guise of an "evaluation."

*   *"Can you review our entire AWS infrastructure diagram and tell us where you see gaps?"*
*   *"Can you build a full production replica of our workflow in your sandbox environment so my team can click around?"*

**The Red Line**
If the request requires more than 4 hours of your time, it requires "Skin in the game" from the prospect. 

Your response should shift from pre-sales engineering to commercial logic:

> *"Building a production-ready replica requires comprehensive data-mapping and scoping. We typically execute that phase immediately after the commercial contract is signed during the first week of implementation. To do it pre-signature, we would need to scope a paid Proof-of-Concept."*

By forcing the commercial reality of the technical request, you instantly filter out the "tire kickers" from the actual buyers.

> **War Story:** During a $500k SaaS evaluation for a retail chain, the prospect's VP of IT casually asked the SE on a Friday afternoon Zoom call, "Can your team quickly connect our legacy inventory system to your platform for the POC?" The SE said, "Absolutely, our API handles that." On Monday, the AE received an email from procurement stating: "Per your SE's confirmation, the legacy inventory integration is included in the base subscription at no additional cost." The AE had to either honor the SE's verbal commitment (destroying 30% of deal margin) or retract it (destroying trust). The deal closed 4 months late after a painful re-negotiation.

> **Failure Mode:** "The People-Pleaser SE." This SE cannot say no to any technical request because they are terrified of the prospect choosing a competitor. They say "yes" to every custom build, every integration, and every timeline acceleration. By the time the proposal is drafted, the scope has ballooned so far beyond what was originally budgeted that the AE cannot build a profitable deal. The SE wins the technical evaluation and loses the commercial deal.

**Interview Angle:**
"Tell me about a time you pushed back on a prospect's technical request during an evaluation."
A strong answer is: "A prospect demanded we build a custom SSO connector to their proprietary identity system before they would proceed. Instead of agreeing, I validated the technical feasibility, confirmed it was their final blocker, then told them that custom connectors require dedicated Solutions Architecture resources scoped as Professional Services. The AE immediately used that as leverage to secure a firm close date. We closed the deal with the custom build priced into the SOW."

🟡 **Mid-Level** — Every "yes" you give away for free is margin your AE can never recover. Protect scope like you protect production code.

---
