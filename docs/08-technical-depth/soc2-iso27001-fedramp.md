# SOC 2, ISO 27001, and FedRAMP Explained for SEs

These three compliance frameworks appear in every enterprise security questionnaire. If you cannot explain them—and differentiate between them—in 30 seconds, you will lose credibility with InfoSec evaluators.

---

## The Quick Reference

### SOC 2 Type II
**What it is:** An audit report that validates your company's operational controls for security, availability, processing integrity, confidentiality, and privacy over a defined period (typically 12 months).

**Who cares:** Every enterprise buyer in the US. This is table stakes.

**What SEs must know:**
*   Type I = point-in-time snapshot. Type II = sustained evidence over an audit period. Type II is the standard.
*   The report is available under NDA—you cannot publish it publicly.
*   The audit period matters: if your last audit ended 10 months ago, you're still within the valid window.

### ISO 27001
**What it is:** An international standard for Information Security Management Systems (ISMS). Certification demonstrates that your company has a systematic approach to managing sensitive information.

**Who cares:** European and international enterprises. Required for many EU/UK government and financial services deals.

**What SEs must know:**
*   ISO 27001 is a certification (pass/fail), not a report. You either have the certificate or you don't.
*   The certificate has an expiry date (typically 3 years, with annual surveillance audits).
*   It covers the management system, not specific technical controls. SOC 2 covers the controls.

### FedRAMP (Federal Risk and Authorization Management Program)
**What it is:** A US government framework for authorizing cloud service providers to handle federal data. 

**Who cares:** US Federal agencies. If you sell to the US government, FedRAMP is mandatory.

**What SEs must know:**
*   Three authorization levels: Low, Moderate, High. Most civilian agencies require Moderate.
*   FedRAMP authorization takes 12-18 months and costs $1M+. If your company doesn't have it, you cannot sell to federal agencies.
*   FedRAMP Authorized means a specific agency has approved you. FedRAMP Ready means you've been assessed but not yet authorized.

## The Positioning Matrix

| Prospect Type | Required Framework | SE Positioning |
|---|---|---|
| US Commercial Enterprise | SOC 2 Type II | "Our current SOC 2 Type II report covers [date range]. Available under NDA." |
| European / International Enterprise | ISO 27001 + SOC 2 | "We hold both ISO 27001 certification and SOC 2 Type II to cover international requirements." |
| US Federal Agency | FedRAMP | "We are FedRAMP Authorized at the [Low/Moderate] level." |
| Healthcare (US) | SOC 2 + HIPAA BAA | "We are SOC 2 Type II compliant and execute HIPAA Business Associate Agreements." |

> **War Story:** An SE told a prospect "We're SOC 2 compliant" during the first meeting. The prospect's InfoSec lead asked: "Type I or Type II?" The SE said "I'm not sure—I'll check." This 5-second hesitation cost the SE 2 weeks of credibility recovery. The InfoSec lead flagged the vendor as "immature" and demanded additional security documentation before allowing the evaluation to proceed. The competitor's SE had answered "SOC 2 Type II, audit period January through December 2025, report available under NDA" without hesitation.

> **Failure Mode:** "The Compliance Name-Dropper." This SE lists every compliance framework on their company's marketing page—"SOC 2, ISO 27001, HIPAA, GDPR compliant!"—but cannot explain what any of them mean or answer follow-up questions. InfoSec sees through the veneer immediately and treats the vendor with suspicion.

**Interview Angle:**
"What is the difference between SOC 2 Type I and Type II?"
A strong answer is: "Type I is a point-in-time assessment—it validates that controls were designed correctly on a specific date. Type II validates that controls were operating effectively over a sustained period, typically 12 months. Enterprise buyers require Type II because it demonstrates ongoing operational discipline, not just a one-time snapshot."

🟡 **Mid-Level** — SOC 2 Type II is table stakes. ISO 27001 opens international deals. FedRAMP opens government deals. Know all three cold.

---
