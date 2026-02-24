# Understanding Margin, Discount Authority & Deal Economics

<!-- {"level": "Senior"} -->

The most dangerous assumption a Solutions Engineer can make is that "pricing is the Account Executive's job." 

If you do not understand the commercial mechanics of the deal, you cannot properly scope the solution. You will inadvertently give away premium features for free, agree to custom engineering that destroys the profit margin, or build an architecture that prices your company out of the deal completely.

To become a Revenue Architect, you must understand the math behind the sale.

---

## 1. The Anatomy of Deal Margin

When you build a technical architecture, you are simultaneously building a Profit & Loss (P&L) statement. 

**Margin** is the difference between what the customer pays (Revenue) and what it costs your company to deliver and support the solution (COGS - Cost of Goods Sold).

### How SEs Destroy Margin (Without Knowing It)
*   **"Sure, we can include that module."** (Adding licensed products without increasing the ACV).
*   **"We'll just pull that data every 5 minutes."** (Exploding compute, API, or storage costs on the backend).
*   **"Our Customer Success team will build those 50 custom dashboards for you."** (Committing hundreds of hours of unbilled professional services).

*Every technical concession you make in scope directly attacks the deal margin.* Elite SEs understand whether the solution they are designing is highly profitable software revenue or low-margin services revenue.

---

## 2. Discount Authority & The "Give/Get"

Account Executives operate within a framework of **Discount Authority**. 
*   An AE might have the authority to discount up to 10% on their own.
*   Their Director might have authority up to 20%.
*   The VP might need to approve anything up to 30%.
*   Anything beyond that goes to the CFO.

### The Problem with "Free" Scope
When a prospect says, *"We won't buy unless you include the Advanced Security module,"* the AE is often mathematically constrained. If they just "give" the module away to save the deal, it requires a 40% discount approval that the VP will reject.

### The "Give/Get" Ratio
Instead of discounting, elite SEs use **Technical Scoping as a commercial weapon**. 

When the prospect asks for a heavy concession, the SE steps in to enforce a "Give/Get" dynamic:

<div class="roleplay-script">
  <div class="dialogue-row">
    <div class="speaker-avatar">CTO</div>
    <div class="speaker-message">
      <strong>Prospect CTO</strong>
      "We need the Advanced Security module included, but we don't have budget for it. You guys need to throw it in to get this done by end of quarter."
    </div>
  </div>
  <div class="dialogue-action">(The weak SE stays silent. The AE panics about their discount authority. The Elite SE speaks.)</div>
  <div class="dialogue-row">
    <div class="speaker-avatar">SE</div>
    <div class="speaker-message">
      <strong>Elite SE</strong>
      "If we're going to include the Advanced Security module, which carries a high compute cost on our side, we need to balance the architecture. I can include it, but we'll need to cap your daily API calls to 50,000, and remove the custom integration build for your legacy CRM."
    </div>
  </div>
</div>

You didn't say no. You made them choose. You forced them to prioritize their technical requests by attaching a commercial weight to them.

---

## 3. Top-Down vs. Bottom-Up Pricing Economics

Depending on your product, you are generally selling in one of two models. You must tailor your technical discovery to the pricing model you are constrained by.

### A. The License Model (User/Seat-Based)
*   **The Math:** Revenue grows by adding more humans to the platform.
*   **The SE's Job:** Prove platform breadth. Your discovery should constantly be looking for *other departments* (Marketing, HR, Finance) that could adopt the tool. 
*   **The Trap:** Spending 4 weeks doing a POC for a 5-person team. The juice isn't worth the squeeze.

### B. The Consumption Model (Compute/Storage/API-Based)
*   **The Math:** Revenue grows when the customer's technical volume scales (AWS, Snowflake, Twilio). 
*   **The SE's Job:** Prove friction-less scalability. Your discovery should be hunting for data gravity—finding the heaviest, most critical workloads and getting them onto your platform.
*   **The Trap:** Designing an overly efficient architecture that minimizes the customer's spend so much that the deal is no longer worth your AE's commission. 

---

## 4. The Commercial Rule of "No Surprises"

The fastest way to ruin your relationship with an Account Executive is to wait until the pricing proposal is being drafted to mention a massive technical constraint.

**The "No Surprises" Checklist:**
*   [ ] Do I know exactly which SKUs are required to fulfill the architecture I just pitched?
*   [ ] Do I know if those SKUs will blow up the customer's stated budget?
*   [ ] Have I identified any hidden Professional Services costs required to get the customer live?

If you suspect your architecture is going to cost $500k, and the AE thinks they are selling a $100k deal, you must flag it immediately after the discovery call. Do not wait for the proposal review.
