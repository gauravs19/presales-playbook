# Security Reviews, InfoSec Questionnaires & Legal Red-Lines

<!-- {"level": "Senior"} -->

The InfoSec review is where good deals go to die. A technical win means nothing if the prospect's security team spends 8 weeks reviewing your platform and ultimately issues a "High Risk" classification that blocks the purchase.

Elite SEs treat the security review as a parallel workstream that must be initiated *during* the POC, not after the commercial proposal is submitted.

---

## 1. The Three Types of Security Reviews

### Type A: The Standard Questionnaire (SIG, CAIQ, Custom)
Most enterprises use one of three standard questionnaire frameworks:
*   **SIG (Standardized Information Gathering):** A 700+ question spreadsheet from Shared Assessments. Common in Financial Services.
*   **CAIQ (Consensus Assessments Initiative Questionnaire):** A 300+ question spreadsheet from the Cloud Security Alliance (CSA). Common in Technology companies.
*   **Custom:** The prospect's InfoSec team has built their own 100-500 question spreadsheet, usually a Frankenstein combination of SIG, CAIQ, and SOC 2 controls.

**The SE Strategy:** Maintain a **Pre-Populated Master Questionnaire** that contains your company's answers to the 200 most common security questions across all frameworks. When a new questionnaire arrives, 60-80% of the answers can be copied directly from your master file, reducing weeks of work to days.

### Type B: The Penetration Test Request
Some prospects will require a third-party penetration test report before they approve the vendor.

**The SE Strategy:** Your company should commission an annual pen test from a reputable firm (e.g., NCC Group, Bishop Fox, Coalfire). Have the executive summary available under NDA. If the prospect demands a *new* pen test specifically for their evaluation, this is a paid engagement—not a pre-sales activity.

### Type C: The Architecture Review Board (ARB)
In the most security-conscious enterprises (Banks, Government, Defense), the prospect's internal Architecture Review Board will schedule a live review session where their senior architects interrogate your system design.

**The SE Strategy:** This is your moment. Prepare a dedicated "Security Architecture Deep Dive" deck that covers:
*   Network topology (VPCs, subnets, firewall rules).
*   Identity and Access Management (IAM roles, least-privilege model).
*   Data flow diagrams showing encryption points.
*   Incident response procedures and breach notification timelines.

---

## 2. Navigating the Questionnaire Efficiently

### The "Copy-Paste" Trap
Never blindly copy-paste answers from your master questionnaire without reading the specific question. Questionnaire reviewers are trained to spot generic, copy-pasted answers. If your answer doesn't precisely match the question's framing, they will flag it as "Incomplete" and send it back.

### The "N/A" Strategy
Not every question will apply to your architecture. If you are a pure SaaS vendor, questions about "physical server room access controls" are not applicable.

**Do not leave the cell blank.** Write: *"N/A — [Your Company] is a cloud-native SaaS platform hosted on [AWS/Azure/GCP]. Physical infrastructure security is managed by [Cloud Provider] under their SOC 2 Type II and ISO 27001 certifications. Relevant compliance reports are available at [link]."*

This demonstrates competence. A blank cell signals ignorance.

### The "Compensating Control" Technique
If your platform does not meet a specific security requirement exactly as stated, do not simply answer "No." Offer a **compensating control**—an alternative mechanism that achieves the same security outcome.

*   **Question:** *"Does the platform support on-premise deployment behind our corporate firewall?"*
*   **Bad Answer:** *"No."*
*   **Elite Answer:** *"Our platform is cloud-hosted. As a compensating control, we offer AWS PrivateLink / Azure Private Endpoint connectivity, ensuring that all traffic between your network and our platform traverses a private, non-internet-routable path. This provides equivalent network isolation to an on-premise deployment."*

---

## 3. The Legal Red-Line Process

After the security questionnaire is approved, the deal enters Legal Red-Line—where the prospect's lawyers modify (red-line) your Master Service Agreement (MSA).

### Common Red-Line Battles and SE Involvement

1.  **Data Processing Agreement (DPA):** Legal will want to append a DPA for GDPR/CCPA compliance. The SE may need to clarify what personal data the platform processes and where it is stored.
2.  **SLA Penalties:** Legal may demand financial penalties (service credits) for SLA breaches. The SE must validate that the proposed SLA targets (e.g., 99.9% uptime) are technically achievable.
3.  **Data Deletion Clause:** Legal will require a clause specifying how and when customer data is deleted post-termination. The SE must confirm the technical feasibility (e.g., "Data purged from primary within 7 days, backups within 30 days").
4.  **Liability Cap:** Legal will often try to remove or increase the liability cap. This is purely a commercial/legal negotiation—the SE should not be involved.

**The Golden Rule:** Never make a legal commitment on a technical capability that you have not validated with your own Engineering team. If Legal asks, "Can you guarantee RPO of zero?" and you say "Yes" without checking, you have just created a contractual obligation your infrastructure may not support.

> **War Story:** An SE proactively submitted a pre-populated security questionnaire to a financial services prospect on Day 1 of the POC—before the prospect even asked for it. The InfoSec team was so impressed by the preparedness that they fast-tracked the review, completing it in 8 business days instead of the typical 6 weeks. The SE's competitor, who waited until Week 4 to submit their questionnaire, was still stuck in security review when the SE's deal was already in Legal Redline.

> **Failure Mode:** "The Reactive Security SE." This SE waits until the prospect sends a custom 500-question security questionnaire, then spends 3 weeks answering it from scratch. By the time the questionnaire is submitted, the deal has lost all momentum. The prospect's evaluation committee has moved on to other priorities and the deal enters a 3-month zombie state.

**Interview Angle:**
"How do you handle the security review process in enterprise deals?"
A strong answer is: "I maintain a pre-populated master questionnaire library covering 200+ common security controls across SIG, CAIQ, and NIST frameworks. When a new questionnaire arrives, I can auto-map 80% of the answers within hours. I also proactively submit our Security Posture document at the start of every POC so the InfoSec review runs in parallel with the technical evaluation, rather than sequentially—which typically saves 3-4 weeks on the deal timeline."

🟡 **Mid-Level** — The security review is a parallel workstream, not a sequential gate. Start it on Day 1, not after the technical win.

---
