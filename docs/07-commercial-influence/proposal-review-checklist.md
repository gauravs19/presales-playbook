# Proposal Review Checklist

<!-- {"level": "Mid-Level"} -->

Before any enterprise proposal leaves your desk, it must survive a ruthless internal review. The single biggest source of post-sale escalations, margin erosion, and customer dissatisfaction is a proposal that promises capabilities the platform cannot deliver—or commits resources the company cannot afford.

This checklist is designed to be executed jointly by the SE and AE before the proposal is submitted to the prospect.

---

## The Pre-Submission Review Checklist

### Section 1: Commercial Alignment

- [ ] **Is the pricing correct?** Have you validated that all SKUs, modules, and tiers referenced in the proposal match the current price book?
- [ ] **Is the discount within authority?** If a discount has been applied, has it been approved by the appropriate level (AE Manager, VP, CFO)?
- [ ] **Are Professional Services scoped and priced?** If the proposal includes any custom deliverables (integrations, migrations, training), have the PS hours been estimated and included in the total price?
- [ ] **Is the contract term correct?** Annual vs. multi-year. Does the proposal clearly state the start date and renewal terms?
- [ ] **Are there any hidden costs?** Infrastructure add-ons, overage charges, or third-party license fees that the customer will encounter but that are not mentioned in the proposal?

### Section 2: Technical Accuracy

- [ ] **Does the architecture match what was demonstrated?** Review every claim in the technical section against what was actually shown during the POC or demo. If you demo'd Feature X but the proposed tier doesn't include Feature X, you have a problem.
- [ ] **Are integration commitments realistic?** If the proposal states "out-of-the-box integration with SAP," is that actually true, or does it require 40 hours of custom middleware development?
- [ ] **Are SLA commitments accurate?** Does the proposed SLA (uptime, response times, RPO/RTO) match your company's published SLA for the selected tier?
- [ ] **Are data residency commitments valid?** If the proposal states "data stored in EU (Frankfurt)," confirm that your platform actually supports that region for the selected tier.
- [ ] **Have you validated scalability claims?** If you stated the platform handles 10,000 concurrent users, has engineering confirmed this for the prospect's specific use case and data model?

### Section 3: Security & Compliance

- [ ] **Is the Security Posture appendix attached?** (See: "Formatting Security Postures for Risk-Averse Buyers")
- [ ] **Are all compliance certifications current?** SOC 2 Type II report dates, ISO 27001 certificate validity, GDPR DPA template—all must reference current, not expired, documentation.
- [ ] **Has the security questionnaire been submitted (or prepared)?** Ideally, the security questionnaire should be submitted to the prospect's InfoSec team simultaneously with the commercial proposal.

### Section 4: Proposal Formatting & Readability

- [ ] **Is the Executive Letter customized?** (See: "The Executive Letter That Sets the Tone"). Generic "Dear Valued Customer" letters are rejected.
- [ ] **Is the proposal numbered?** Every section and sub-section must have a unique identifier (e.g., 3.2.1) for procurement to reference during negotiations.
- [ ] **Are all acronyms defined on first use?** RBAC, SCIM, mTLS, JIT—every acronym must be spelled out the first time it appears.
- [ ] **Is the "Two-Voice" writing rule applied?** Every technical section should have a plain-language executive summary followed by the technical detail. (See: "Technical Writing That Eliminates Procurement Friction")
- [ ] **Has someone outside the deal team read the proposal?** A fresh pair of eyes will catch inconsistencies, typos, and unclear language that you are blind to after weeks of working on the deal.

### Section 5: Competitive & Strategic

- [ ] **Does the proposal address the prospect's stated pain?** Re-read the discovery notes. Does every section of the proposal map directly to a business problem the prospect articulated?
- [ ] **Is the Time-to-Value narrative clear?** Does the proposal lead with milestones and business outcomes, not feature lists? (See: "Highlighting Rapid Time-to-Value Over Feature Lists")
- [ ] **Have you pre-empted the competitor's strengths?** If you know the prospect is also evaluating Competitor X, does your proposal address the specific areas where Competitor X is perceived as stronger?

---

## The "Kill the Proposal" Rule

If you cannot check every box in Sections 1 and 2 above, **do not submit the proposal.** It is better to delay a proposal by 3 days to fix a technical inaccuracy than to submit a flawed document that erodes trust, triggers Legal red-lines, or creates a post-sale implementation disaster.

A proposal is not a draft. It is a contract-adjacent document. Treat it with the same rigor you would treat production code: review it, test it, and ship it only when it's ready.
