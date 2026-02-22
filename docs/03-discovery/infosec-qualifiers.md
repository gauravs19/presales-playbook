#### 3.3.3 The Unbreakable InfoSec Hard-Qualifiers

Information Security requirements are the deal-killers that arrive late and kill fast. You can win every technical criterion, deliver a flawless POC, and build unshakeable champion confidence — and then the CISO's team submits a 200-question security questionnaire that reveals a gap you can't close. Game over. Six months of work, undone by a question you should have asked in week 1.

InfoSec hard-qualifiers are the non-negotiable security requirements that, if unmet, kill the deal regardless of every other factor. Your job is to identify them in the first two weeks, not the last two.

1. **Data residency and sovereignty.** "Where will our data physically reside?" For EU customers under GDPR, this is non-negotiable. For financial services under national regulations, this is non-negotiable. For government agencies under data sovereignty laws, this is non-negotiable. If your platform can't guarantee that data stays in the required geography, the deal is dead — no exceptions, no workarounds, no "we're working on it." Ask this in the first meeting: "Do you have data residency requirements that restrict where your data can be processed or stored?"

2. **Encryption standards.** "Do you require encryption at rest and in transit? What standard?" Most enterprise buyers require AES-256 at rest and TLS 1.2+ in transit. Some require customer-managed encryption keys (CMEK/BYOK) — meaning you hold the key, not the vendor. If your platform uses vendor-managed keys only and the prospect requires BYOK, that's a hard-qualifier gap. Ask early: "Does your security team require customer-managed encryption keys?"

3. **Compliance certifications.** SOC 2 Type II, ISO 27001, HIPAA BAA, FedRAMP, PCI DSS — each of these certifications represents months or years of investment. If a prospect requires FedRAMP and you don't have it, you can't get it in time to close the deal. Period. Ask: "What compliance certifications does your vendor evaluation require?" Get the specific list. Cross-reference against your current certifications. If there's a gap, flag it immediately.

4. **Authentication and access control.** "Do you require SAML SSO? SCIM provisioning? MFA enforcement? Role-based access control (RBAC) at the data level?" These aren't edge features — they're binary qualifiers. If the prospect's security policy mandates SAML SSO and your platform supports only username/password, the deal fails the InfoSec review. Ask during technical discovery, not during POC.

5. **Audit logging and data retention.** "Does your security team require comprehensive audit logs of all data access? What's your required retention period?" Regulated industries often require 7+ years of audit log retention. If your platform retains logs for 90 days, that's a disqualifying gap. Similarly, if the prospect requires immutable audit logs (logs that can't be modified or deleted), verify that your platform supports this.

6. **Network and deployment model.** "Does your security team require private network connectivity (VPN, PrivateLink, peering)? Or is public internet access acceptable?" Some enterprise prospects — particularly in financial services and healthcare — will not allow any data to traverse the public internet. They require private endpoints, VPC peering, or dedicated connectivity. If your SaaS platform is internet-only, this is a deal-breaker at the CISO level.

> **War Story:** An SE ran a 4-month evaluation with a major European financial institution. The POC passed all criteria. The champion was ready to proceed. The proposed contract value was €1.4M. Then the information security questionnaire arrived. Question 47: "Does the platform support customer-managed encryption keys with key rotation and revocation?" The answer was no. The SE's platform used vendor-managed keys with no BYOK option. The CISO vetoed the deal. Non-negotiable. The SE had never asked about encryption key management during discovery — it wasn't on her standard question list. She added it permanently after that loss. Four months of work, eliminated by a single security question that could have been answered in the first meeting.

> **Failure Mode:** The SE who treats InfoSec as "something procurement handles" and doesn't engage with security requirements during discovery. They view security questions as bureaucratic obstacles rather than deal-defining qualifiers. By the time the security questionnaire arrives — typically in procurement, weeks after the technical evaluation — it's too late to address gaps. The deal dies in the administrative review that nobody on the presales team was paying attention to.

**Interview Angle:**
"How do you handle InfoSec requirements during the evaluation process?"
A strong answer describes proactive security qualification in the first two meetings, with specific examples of hard-qualifiers identified early. A weak answer describes "filling out the security questionnaire when it arrives."

**Practical Reference: The InfoSec Hard-Qualifier Checklist**
Ask these in the first 2 meetings. Non-negotiable.

| Requirement | Question | Your Platform Status | Gap? |
|-------------|----------|---------------------|------|
| Data residency | Where must data physically reside? | | Y/N |
| Encryption (at rest) | AES-256? BYOK/CMEK required? | | Y/N |
| Encryption (in transit) | TLS 1.2+ minimum? | | Y/N |
| Compliance certifications | SOC 2, ISO 27001, HIPAA, FedRAMP, PCI DSS? | | Y/N |
| Authentication | SAML SSO, SCIM, MFA enforcement? | | Y/N |
| Audit logging | Immutable logs? Retention period? | | Y/N |
| Network model | Private connectivity required? | | Y/N |
| Pen testing | Recent third-party pen test results available? | | Y/N |

**Any "Y" in the Gap column = immediate escalation. Don't wait.**

🟡 **Mid-Level** — InfoSec qualification is not optional. It's the most efficient deal quality filter in enterprise presales — because it eliminates impossibilities before you invest in possibilities.

---
