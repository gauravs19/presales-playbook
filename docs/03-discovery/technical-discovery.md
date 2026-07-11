# 3.3 Technical Discovery

## 3.3.1 Mapping As-Is Architecture Without Insulting Their Team

Technical discovery requires you to understand the prospect's current architecture in detail. The challenge: the people who built that architecture are often in the room. If your questions imply that their system is poorly designed, outdated, or inadequate, they'll stop sharing information and start defending their work. You'll lose access to the exact details you need.

Mapping the as-is architecture is a diplomatic exercise as much as a technical one.

1. **Frame the session as documentation, not evaluation.** Open with explicit framing: "I'd like to understand your current architecture so I can design a solution that integrates cleanly with what you've already built. I'm not here to evaluate your system — I'm here to understand it so our solution fits, rather than fights, your environment." This sets the tone: you're here to integrate, not to replace. The prospect's team built something that works — you're acknowledging that while learning where it might benefit from augmentation.

2. **Use the "What was the design intention?" question.** Instead of asking "Why does this pipeline run as a batch process?" (which implies it shouldn't), ask "What was the design intention behind the batch approach? Was it optimised for throughput, cost, or something else?" This validates the original decision while opening the conversation to discuss whether the original constraints still apply. Often, the answer reveals the real story: "We designed it as batch because real-time wasn't needed 3 years ago. Now the business wants real-time, but the architecture wasn't built for it." You've identified the gap without criticism.

3. **Praise before probing.** When the prospect describes something genuinely well-built, say so — specifically. "Your event-driven architecture for the payment processing pipeline is really clean — the separation between ingestion and transformation is exactly what I'd recommend." Specific praise builds trust because it shows you understand the work. Generic praise ("looks great!") is ignored because it's obviously non-substantive. After praise, probe: "One area I'd like to understand better is the reconciliation between the event stream and the batch warehouse. How do you handle late-arriving events?"

4. **Ask them to tell the story, not describe the system.** "How did this architecture evolve?" is a better question than "What does your architecture look like?" The first produces a narrative — when it was built, what constraints existed, what changed over time, where complexity accumulated. The second produces a static diagram. Narratives reveal pain organically because the person telling the story naturally identifies the moments where things got difficult: "We added the third data source in 2022 and that's when things started getting complicated."

5. **Whiteboard collaboratively, don't present.** If you're in person or on a virtual whiteboard, don't draw the architecture yourself. Hand the marker (or mouse) to the prospect: "Could you sketch the high-level data flow? I'll ask questions as you go." When the prospect draws their own architecture, two things happen: they reveal more detail than they would verbally (drawing prompts memory), and they take ownership of the document — which means they'll be more honest about its weaknesses because they're the ones presenting it.

> **War Story:** An SE was mapping the architecture of a telecommunications company. The Lead Architect had been with the company for 12 years and had built most of the data infrastructure personally. The SE asked: "What would you change about this architecture if you could start from scratch?" The Lead Architect stiffened: "There's nothing fundamentally wrong with it." Wrong question — it implied criticism. The SE pivoted: "What I mean is, knowing what your business needs today, what capabilities would you add that weren't necessary when you first designed this?" The Lead Architect relaxed: "Honestly? Real-time event processing. When I designed this in 2013, batch was fine. Now the business wants sub-second analytics, and the batch architecture wasn't designed for that." Same question, completely different framing. The first version felt like "what's wrong with your work?" The second felt like "how has the world changed around your work?"

> **Failure Mode:** The SE who walks into technical discovery with thinly veiled criticism. "Is this running on on-premise servers? Interesting." "You're still using Informatica PowerCenter? How does that handle modern streaming use cases?" "Are these manual processes, or is there orchestration?" Each question implies that the current environment is outdated, manual, or insufficient. The prospect's team hears: "You're behind." They stop volunteering information and start defending decisions. The SE leaves with a partial architecture understanding and a hostile technical audience.

**Interview Angle:**
"How do you approach understanding a prospect's current technical environment?"
A strong answer describes a diplomatic approach (design intention questions, narrative-based exploration, collaborative whiteboarding) and acknowledges the sensitivity of evaluating someone else's work. A weak answer describes "asking them to describe their stack" without awareness of the interpersonal dynamics.

**Practical Reference: Architecture Mapping Question Bank**

| Type | Question | What It Reveals |
|------|----------|----------------|
| Design intention | "What was the design intention behind [approach]?" | Original constraints; whether they still apply |
| Evolution narrative | "How has this architecture evolved over the last 2–3 years?" | Where complexity accumulated; what triggered changes |
| Scale + limits | "What happens when data volumes spike? Any limits you're aware of?" | Scalability concerns without criticising current capacity |
| Integration | "How do these systems communicate with each other?" | Integration complexity; manual steps; hidden fragility |
| Wish list | "If you could add one capability to this environment, what would it be?" | The gap they know about but haven't addressed |

🟡 **Mid-Level** — The prospect's architecture is their team's work product. Treat it with the same respect you'd want someone to show when reviewing your code. You'll learn more and build more trust.

---

## 3.3.2 Finding Infrastructure Bottlenecks They Don't Know Exist

The most valuable discovery finding is the one the prospect didn't know about. When you tell a prospect something they already know — "Your pipeline is slow" — you confirm their understanding. When you tell them something they don't know — "Your pipeline is slow because the third transformation step is re-reading the source data instead of using the cached output from step one, which triples I/O load" — you establish yourself as an expert worth listening to.

Finding hidden bottlenecks requires you to think like a systems engineer while interviewing like a consultant.

1. **Look for symptoms, then trace upstream.** The prospect tells you their reports are delayed. That's a symptom. Trace upstream: what feeds the report? A data warehouse. What feeds the warehouse? An ETL pipeline. What feeds the pipeline? Multiple data sources with different schemas, delivery times, and quality levels. The bottleneck is almost never where the prospect says it is — it's 2–3 steps upstream from the visible problem. "Your reports are delayed because your pipeline is slow" is useful. "Your pipeline is slow because Source #3 delivers data 4 hours after Sources #1 and #2, and your batch process waits for all sources before starting" is actionable.

2. **Ask about the "last time something broke."** "Tell me about the last major data incident. What happened, how long did it take to resolve, and what was the root cause?" Incident narratives reveal the deepest architecture weaknesses because incidents expose the assumptions that broke. The prospect will describe a failure that traces through their architecture, highlighting dependencies, manual steps, and fragile connectors that work under normal conditions but collapse under stress.

3. **Question the batch window assumption.** Many enterprise architectures were designed around batch processing because that was the standard when the architecture was built. Ask: "What would happen if your business required real-time data instead of batch? Which parts of the architecture couldn't support that?" The answers reveal single points of failure, monolithic processing steps, and database locking patterns that the team has worked around for years but never addressed because "batch is fine." Until business requirements change — and they always change.

4. **Probe monitoring and observability.** "How do you know when something goes wrong in your pipeline?" If the answer is "our engineers notice when downstream reports don't appear," the prospect has a monitoring gap — they're using business process failure as their alerting mechanism. If the answer is "we have monitoring on each step with automated alerts," ask "what's your mean time to detect a failure?" and "what's your mean time to resolve?" The gap between detect and resolve often contains manual steps that are invisible to management but well-known to the engineering team.

5. **Ask about the "tribal knowledge" risk.** "If the person who built this pipeline left tomorrow, how long would it take someone else to troubleshoot a failure?" This question surfaces undocumented processes, configuration hidden in scripts, and architectural decisions that exist only in one person's memory. Tribal knowledge is a systemic bottleneck because it makes the organisation dependent on specific individuals rather than documented processes. If the answer is "months," you've identified a risk that goes far beyond pipeline performance.

> **War Story:** An SE was doing technical discovery with a retail company that reported "occasional pipeline delays." Standard problem. The SE asked about their last incident. The Data Engineering Lead described a failure that knocked their recommendation engine offline for 11 hours. The root cause: a single PostgreSQL database was handling both the transaction workload and the analytics queries. Under Black Friday load, the analytics queries locked tables that the transaction pipeline needed, creating a cascading failure. The engineering team knew about this architectural weakness but had never raised it because "it only happens under peak load." The SE calculated the cost: 11 hours of recommendation engine downtime during Black Friday = approximately $2.8M in lost incremental revenue. The prospect's VP of Engineering had never seen that number. It became the deal's central justification. The SE found a bottleneck the prospect knew existed but had never quantified.

> **Failure Mode:** The SE who takes the prospect's self-diagnosis at face value. "Our pipeline is slow" → "Let me show you our fast pipeline." This SE never investigates *why* the pipeline is slow, doesn't trace the bottleneck upstream, and doesn't discover the hidden risks. Their demo shows a fast pipeline running against a clean test dataset — which proves nothing about whether it'll be fast against the prospect's messy, complex real-world environment.

**Interview Angle:**
"How do you go about understanding the technical root cause of a prospect's stated problem?"
A strong answer describes upstream tracing, incident analysis, and probing techniques that reveal hidden bottlenecks. A weak answer describes "understanding their requirements."

🟡 **Mid-Level** — The SE who finds bottlenecks the prospect didn't know about earns a fundamentally different level of trust than the SE who confirms bottlenecks the prospect already identified.

---

## 3.3.3 The Unbreakable InfoSec Hard-Qualifiers

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

## 3.3.4 Identifying the Hidden Integration Graveyard

Every enterprise has an integration graveyard — a collection of point-to-point integrations, API connections, file-based data transfers, and "temporary" workarounds that were built over years, rarely documented, and never decommissioned. These integrations are invisible until your solution needs to interact with them. Then they become the primary source of implementation delays, POC failures, and post-sale escalations.

Your job in technical discovery is to find the graveyard before you build on top of it.

1. **Ask how many systems feed into the system you're replacing.** The prospect says they want to replace System A. You ask: "How many other systems feed data into System A, or receive data from it?" The answer is almost always larger than expected. "We have 5 main integrations." "Tell me about each one." As they describe them, the number grows: "Well, there's also the finance extract... and the compliance reporting feed... and the Excel macro that pulls data for the VP's dashboard." The actual number is usually 2–3x the initial estimate. Each hidden integration is a dependency your solution needs to handle.

2. **Map the integration technology.** For each integration, understand: what technology it uses (API, SFTP, database link, file drop, custom script), who built it (in-house engineer, consultant, vendor), when it was built (2 years ago vs. 10 years ago), and who maintains it now (named person vs. "nobody"). Integrations built by consultants who left 5 years ago and maintained by nobody are the most dangerous — they're undocumented, fragile, and essential. When they break during your implementation, nobody knows how to fix them.

3. **Ask about the "Friday afternoon file."** Every company has at least one critical process that depends on a manual file transfer, an Excel transformation, or a cron job running on someone's desktop. "Is there any step in this process that requires someone to manually move a file, run a script, or copy data from one place to another?" If the answer is yes (and it almost always is), you've found a hidden dependency that your architecture needs to account for. The Friday afternoon file is rarely in the architecture diagram — but it's always in the critical path.

4. **Identify the data quality handshake points.** Where does data cross a boundary between two systems? Each crossing is a potential quality degradation point: schema mismatches, data type conversions, timezone handling, null value treatment, encoding differences. Ask: "When data moves from System A to System B, is there a quality check at the boundary? Or does it flow through unchecked?" Unchecked boundaries are where data quality problems accumulate — and where your solution will be blamed for issues that pre-existed your arrival.

5. **Build the integration dependency graph.** After your discovery, create a visual map of all integrations touching the prospect's current system and the system you're proposing to implement. Share this map with the prospect: "Here's what I've documented about your integration landscape. Does this look complete?" The prospect will invariably add 2–3 integrations you missed — and thank you for creating a document that didn't previously exist. This map becomes a planning tool for implementation and a trust-building artefact for the deal.

> **War Story:** An SE was designing a solution to replace a prospect's legacy data warehouse. The prospect described their architecture as "simple — just 3 source systems feeding the warehouse." During integration discovery, the SE asked about every data flow in and out. The actual count: 3 primary source systems, 7 secondary feeds (compliance extracts, CRM syncs, log aggregation), 4 outbound feeds (BI tools, operational dashboards, partner data exchanges), and 2 "temporary" scripts that had been running for 4 years. Total: 16 integrations, not 3. If the SE had designed the solution based on "3 source systems," the implementation would have failed spectacularly when the other 13 integrations went unaccounted for. The integration map the SE built became the most referenced document in the entire implementation project.

> **Failure Mode:** The SE who accepts the prospect's integration description at face value. "We have a simple architecture" always means "I'm describing the parts I remember." No enterprise architecture is simple. The SE who doesn't probe for hidden integrations designs a solution that works in the POC and breaks in production — because the POC environment didn't include the 12 integrations nobody mentioned.

**Interview Angle:**
"How do you ensure your solution design accounts for a prospect's full integration landscape?"
A strong answer describes a systematic integration discovery process (counting flows, mapping technology, identifying owners, building dependency graphs). A weak answer accepts the prospect's initial description without probing.

**Practical Reference: The Integration Discovery Matrix**

| Integration | Source → Target | Technology | Built By | Maintained By | Documented? | Criticality | Risk Level |
|------------|----------------|-----------|----------|--------------|-------------|-------------|-----------|
| | System A → DW | API | In-house | DevOps team | Yes | High | Low |
| | CRM → DW | SFTP file | Consultant (gone) | Nobody | No | Medium | High |
| | Excel → Dashboard | Manual copy | VP's assistant | VP's assistant | No | Low | High |

**If the "Documented?" column has more than 2 "No" entries, your implementation plan needs a dedicated integration discovery phase.**

🟡 **Mid-Level** — The integration graveyard is where implementations go to die. Find it during discovery, not during deployment.
