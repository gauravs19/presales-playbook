# Scoring an RFP's Real Win Probability

<!-- {"level": "Senior"} -->

Before the Solutions Engineering team commits 60 hours writing a 300-page RFP response, Presales Leadership must ruthlessly evaluate the actual probability of winning the deal.

Hope is not a strategy. Answering every inbound RFP because "we might win" is the fastest way to burn out a technical team and dramatically lower your overall win rate.

---

## The "RFP Triage" Qualification Matrix

To justify the technical investment required by an RFP, the Account Executive and SE must score the opportunity against these five criteria. 

If the deal fails the Triage, it must be legally escalated to VP of Sales for a "No Bid" decision.

### 1. Who Wrote the Requirements?
The single largest predictor of RFP success is identifying the author of the requirements. 
*   **We helped write them (+5 Points):** You engaged the prospect early, steered their architecture, and provided the evaluation matrix. You are the technical favorite.
*   **The questions are generic (+0 Points):** A procurement team downloaded a template from the internet. You have a chance, but it's a toss-up and usually comes down to price. 
*   **The questions read like a competitor's brochure (-10 Points):** The requirements mandate specific acronyms (e.g., "Snowpipe") or esoteric architectures that exclusively fit a competitor. **(Action: NO BID. You are column fodder.)**

### 2. Do We Have Access to the Business Owner?
If you are locked in a procurement portal and forbidden from speaking to the actual end-users or executive sponsors, you cannot execute technical discovery or align to value.
*   **Direct Access (+5 Points):** The sponsor is communicating outside the procurement portal and is aligning the evaluation to their OKRs.
*   **Portal Only (-5 Points):** You are competing strictly on a matrix of generic yes/no checkboxes against cheaper software.

### 3. Is the Use Case Identifiable and Differentiated?
Does the RFP clearly articulate a massive, urgent business pain, or is it a shopping list of 500 random features?
*   **Clear, High-Risk Pain (+5 Points):** They are replacing a system that just crashed and cost them $5M. Your platform uniquely solves this (e.g., via HA architecture).
*   **We lack differentiation (-5 Points):** The RFP asks for basic features (User login, exporting to CSV) that 15 other vendors can cũng do for half your price.

### 4. Is the Budget Validated?
Does the AE actually know the budget envelope, or are they guessing? 
*   **Validated Budget (+5 Points):** The sponsor confirmed they have $250k allocated because the board mandated a new security posture. 
*   **"We're just exploring the market" (-5 Points):** They are comparing vendors to build a budget request for next year. You are providing free consulting. 

### 5. Can We Deliver on the Extensibility / Integrations?
If the RFP mandates five critical integrations (e.g., legacy SAP instances, precise bi-directional syncing, custom SSO), do you have them?
*   **Native / Out of the Box (+5 Points):** Simple architecture. High margin.
*   **Heavy Custom Build (-10 Points):** The deal will require 200 hours of Professional Services to integrate, and Legal will spend 3 months fighting over code ownership.

---

## The Scoring Rubric

*   **10 to 20 Points:** "Must Win." Treat this as a Tier-1 priority. Dedicate your best SEs, customize the architecture diagrams, and assign an executive sponsor from your C-Suite to over-index on the response.
*   **0 to 10 Points:** "At Risk." You can bid, but you must use pre-canned library responses to minimize the SE hour investment. Do not build custom architectures unless the AE can secure an executive meeting.
*   **Below 0 Points:** "NO BID." You are going to lose. The SE Manager must block the request and protect their team's capacity to work on winnable deals. 

When you formally submit a "No Bid" citing lack of executive access or misaligned architecture, it occasionally creates a shockwave that forces the prospect to open back up to you. (See "Deciding When to Refuse an RFP").

> **War Story:** An SE Manager implemented the Triage Scoring system across their 8-person team. In the first quarter, they formally declined 4 RFPs that scored below zero (saving roughly 200 SE hours). Of those 4 declined RFPs, 2 prospects came back 60 days later asking for a direct engagement—bypassing the RFP entirely. The team's overall win rate jumped from 22% to 38% in one quarter, purely by refusing to waste time on unwinnable deals.

> **Failure Mode:** "The Democratic SE Manager." This manager lets every AE submit RFP requests without any triage or scoring. The SE team is permanently buried in low-probability RFP responses, has no time for high-value POCs, and burns out. The top SEs quit because they spend 80% of their week on paperwork instead of architecture.

**Interview Angle:**
"How do you prioritize competing demands on your time when multiple deals need SE support simultaneously?"
A strong answer is: "I use a qualification framework that scores each opportunity on five criteria: authorship of the RFP, executive access, budget validation, compelling event, and architectural differentiation. Deals scoring above 15 get full custom treatment. Deals below 5 get library-only responses. Deals below zero get a formal No Bid. This framework increased my personal win rate from 25% to 40% because I only invested deeply in deals I could actually win."

🔴 **Senior-Level** — Your time is a finite, non-renewable resource. Scoring RFPs before committing SE hours is not optional; it is survival.

---
