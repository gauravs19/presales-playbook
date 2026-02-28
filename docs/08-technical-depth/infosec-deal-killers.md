# The Top InfoSec Deal Killers (And How to Survive Them)

InfoSec teams have explicit veto power over vendor approvals in most enterprise organizations. If the CISO or InfoSec team flags your platform as "High Risk," no amount of executive sponsorship or technical brilliance will save the deal.

---

## The 5 Most Common InfoSec Deal Killers

### 1. No SOC 2 Type II Report
If you cannot produce a current SOC 2 Type II report, you are disqualified from approximately 70% of enterprise evaluations before the conversation even starts.

**Survival:** If your company is in the process of obtaining SOC 2, provide the prospect with a Bridge Letter from your auditor and a timeline for completion.

### 2. Shared Tenancy Without Isolation
When the prospect asks "Is our data isolated from other customers?" and the answer is "We use logical separation in a shared database," InfoSec teams in regulated industries will reject you.

**Survival:** Offer a single-tenant deployment option (even at a premium) or demonstrate that your logical isolation is enforced at the database, network, and application layers with audit logging.

### 3. No Customer-Managed Encryption Keys
If you encrypt data with your own keys and the customer cannot control (or revoke) those keys, you are telling the prospect: "Trust us with your crown jewels."

**Survival:** Implement CMK support via the prospect's cloud KMS. If this is not available, provide a detailed roadmap with a committed delivery date.

### 4. Production Access by Vendor Employees
If your engineering team has persistent, unrestricted access to customer production environments, InfoSec will flag it as an unacceptable insider threat.

**Survival:** Demonstrate your Just-In-Time (JIT) access model with full audit logging and customer notification.

### 5. No Data Deletion Policy
If you cannot clearly articulate what happens to customer data after contract termination, Legal will block the deal.

**Survival:** Provide a written Data Retention and Deletion Policy (primary data purged in 7 days, backups in 30 days, Certificate of Destruction upon request).

> **War Story:** An SE was 3 weeks from closing a $500k deal when the prospect's InfoSec team discovered that the SE's company did not support customer-managed encryption keys. The CISO sent a 1-line email: "Vendor rejected. Data encryption keys must be customer-controlled per our security policy." Six months of work—gone in one email. The SE escalated to Product, who fast-tracked CMK support. The SE re-engaged the prospect 4 months later with CMK fully deployed and won the deal on the second attempt.

> **Failure Mode:** "The Security Afterthought SE." This SE focuses entirely on features and performance during the POC and doesn't engage InfoSec until the proposal is submitted. By then, it's too late—InfoSec discovers 3 deal-killing gaps that the SE could have addressed proactively if they had initiated the security review during the POC.

**Interview Angle:**
"What is the most common reason an enterprise deal fails during the security review?"
A strong answer is: "Lack of customer-managed encryption keys. In regulated industries, the prospect's InfoSec team requires absolute control over the encryption lifecycle. I proactively address this in every first meeting by stating: 'You control the keys. If you revoke them, we cannot access your data.' I also submit our security posture document before the prospect asks for it, so the InfoSec review runs in parallel with the evaluation."

🔴 **Senior-Level** — InfoSec has veto power. Engage them early, address their concerns proactively, and never let security be an afterthought.

---
