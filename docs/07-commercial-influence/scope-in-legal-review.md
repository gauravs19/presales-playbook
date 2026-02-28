# Negotiating Technical Scope in the Legal Review Stage

<!-- {"level": "Senior"} -->

Most SEs consider their job complete after the Technical Win is declared. They hand the deal to the AE, sit back, and wait for the "Closed Won" notification. This is a critical vulnerability.

During the Legal Review stage, the prospect's lawyers will scrutinize every technical commitment you made during the sales cycle. If you over-promised during a demo, ghost-wrote ambitious requirements into the SOW, or casually committed to a custom integration during a discovery call, those words will now become **legally binding contractual obligations.**

---

## 1. How Technical Scope Creeps Into Contracts

Legal teams don't invent new requirements. They codify what was said during the sales process. Every email, slide deck, and meeting note is fair game.

### The "Demo Promise" Trap
During a live demo, the SE says: *"Yes, our platform can absolutely handle real-time bi-directional syncing with SAP."*

Six weeks later, the prospect's Legal team inserts this clause into the contract:
> *"Vendor shall provide real-time, bi-directional data synchronization with Customer's SAP S/4HANA instance as part of the standard subscription, at no additional cost."*

The SE now has two options:
1.  **Accept it:** Your engineering team now has a contractual obligation to build and maintain a custom SAP connector. This will cost $200k in engineering time, destroying the deal margin.
2.  **Push back:** The prospect's champion feels betrayed because "your SE said you could do it." Trust is damaged.

**The Prevention:** Never make a technical capability statement during a demo or discovery call without immediately qualifying it with scope boundaries.

> *"Our platform supports SAP integration via our REST API layer. The standard configuration handles batch synchronization. Real-time, bi-directional sync is achievable but requires a scoping engagement with our Solutions Architecture team to validate against your specific SAP instance configuration."*

---

## 2. The SE's Role During Legal Review

You are not a lawyer. You should not be negotiating indemnification clauses or liability caps. But you *must* be available as a technical subject matter expert to answer three critical questions:

### Question 1: "Is this technically feasible as written?"
Legal will send you specific contract clauses and ask: "Can we actually do this?"

*   **Clause:** *"Vendor guarantees 99.99% uptime across all service endpoints."*
*   **SE Response:** *"Our standard SLA covers 99.9% uptime on the core application tier. 99.99% requires a dedicated HA deployment with cross-region failover, which is available as an add-on SKU. I recommend we amend the clause to reference our published SLA document."*

### Question 2: "What is the cost to deliver this?"
If the contract includes a custom deliverable (e.g., "Vendor will build a custom dashboard"), the SE must immediately estimate the Professional Services hours required and flag it to the AE so it can be priced into the deal.

### Question 3: "Does this create an ongoing obligation?"
Some contract clauses create perpetual maintenance obligations that extend far beyond the initial deal.

*   **Dangerous Clause:** *"Vendor shall ensure ongoing compatibility with Customer's current and future versions of Oracle Database."*
*   **SE Red Flag:** This is an open-ended obligation. If the customer upgrades to Oracle 23c next year and your connector breaks, you are contractually obligated to fix it—forever. Flag this immediately. Recommend amending to: *"Vendor shall ensure compatibility with Oracle Database versions [X] and [Y] as specified at the time of contract execution."*

---

## 3. The "Scope Freeze" Technique

Before the deal enters Legal Review, the SE and AE should conduct a **Scope Freeze Meeting**—an internal alignment session to lock down exactly what the company is committing to deliver.

### The Scope Freeze Checklist

*   [ ] What SKUs/modules are included in the subscription?
*   [ ] What integrations are included out-of-the-box vs. requiring Professional Services?
*   [ ] What is the contracted SLA (uptime, response times)?
*   [ ] Are there any custom deliverables promised during the sales cycle? If so, what is the estimated engineering cost?
*   [ ] What data residency or compliance requirements have been committed to?
*   [ ] Is there a training or onboarding commitment included in the deal?

Every item on this checklist must be explicitly documented in the Statement of Work (SOW) so that Legal reviews the *actual* scope, not an inflated version of what the prospect *thinks* was promised.

If the AE or SE cannot answer every item on this checklist, the deal is **not ready for Legal Review.** Sending an un-scoped deal to Legal is a guaranteed recipe for weeks of painful back-and-forth redlines.
