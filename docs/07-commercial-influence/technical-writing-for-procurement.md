# Technical Writing That Eliminates Procurement Friction

<!-- {"level": "Mid-Level"} -->

The fastest way to kill your own deal is to write a proposal that a non-technical procurement officer cannot understand.

Your proposal will pass through at least three distinct audiences: the Technical Evaluator (who understands APIs), the Business Sponsor (who understands ROI), and the Procurement Officer (who understands contracts, risk, and compliance). If your proposal is written exclusively in engineer-speak, it will stall at procurement for weeks while they send you clarification emails.

Elite SEs write proposals that are technically precise *and* commercially readable.

---

## 1. The "Two-Voice" Writing Rule

Every section of your technical proposal must be written in two layers:

### Layer 1: The Executive Summary (For Procurement & Business)
A 2-3 sentence plain-language summary at the top of every section that explains the *business outcome* of the technical capability.

### Layer 2: The Technical Detail (For the Engineering Evaluator)
The deep, precise technical specification that follows immediately below the summary.

**Example — Authentication Section:**

> **Executive Summary:** Our platform ensures that only authorized personnel can access the system. We support your organization's existing identity provider (e.g., Okta, Azure AD), eliminating the need for separate usernames and passwords and fully complying with your internal access governance policies.
>
> **Technical Specification:** Authentication is handled via SAML 2.0 and OpenID Connect (OIDC) protocols. The platform supports IdP-initiated and SP-initiated SSO flows, with Just-In-Time (JIT) user provisioning via SCIM 2.0. Session tokens are issued as signed JWTs with a configurable TTL (default: 8 hours). MFA enforcement is delegated to the customer's IdP.

The procurement officer reads the first paragraph and checks "Meets Requirement." The CTO reads the second paragraph and confirms the technical integrity. Neither person has to wait for the other to explain what it means.

---

## 2. Words That Kill Deals (And Their Replacements)

Certain words trigger alarm bells in procurement and legal departments. Avoid them entirely.

| ❌ Dangerous Word | Why It Kills the Deal | ✅ Safe Replacement |
|---|---|---|
| **"Unlimited"** | Legal will never approve an unlimited liability clause. | *"Up to [X] per the terms of the selected tier."* |
| **"Guaranteed"** | Implies a legally binding warranty. | *"Targeted" or "Designed to achieve."* |
| **"Real-time"** | Procurement asks: "What is the SLA if it's not real-time?" | *"Near real-time (sub-second latency under standard load)."* |
| **"Seamless integration"** | Every vendor says this. It means nothing. | *"Pre-built connector available; typical configuration time: 2 hours."* |
| **"Best-in-class"** | Unsubstantiated marketing claim. Procurement ignores it. | *"Ranked #1 in [Analyst Report] for [Category], Q4 2025."* |
| **"Cutting-edge"** | Implies immaturity and risk. | *"Production-hardened" or "Battle-tested across [X] enterprise deployments."* |

---

## 3. Formatting Rules for Procurement-Friendly Proposals

### Rule 1: Number Everything
Procurement officers reference specific sections during contract negotiations. If your proposal uses only headers and paragraphs, they cannot efficiently cite your commitments. Every section, sub-section, and requirement response must have a unique identifier (e.g., 3.2.1, 3.2.2).

### Rule 2: Never Embed Critical Terms in Paragraphs
If your SLA commitment, data retention policy, or support hours are buried in the middle of a 500-word paragraph, procurement will miss them. Extract all commitments into standalone tables or bullet points.

**Bad:**
> "Our platform generally achieves an uptime of around 99.9% and we typically respond to critical issues within about an hour during business hours."

**Good:**

| Commitment | Detail |
|---|---|
| **Uptime SLA** | 99.9% measured monthly, excluding scheduled maintenance windows (communicated 72 hours in advance). |
| **P1 Response Time** | 1-hour acknowledgment, 24/7/365. |
| **P2 Response Time** | 4-hour acknowledgment, business hours (Mon-Fri, 8am-8pm ET). |

### Rule 3: Define All Acronyms on First Use
Do not assume the procurement officer knows what "RBAC," "SCIM," or "mTLS" means. Define every acronym on its first appearance. This is not about dumbing it down; it is about eliminating friction so the document does not get sent back to you with 30 clarification questions.
