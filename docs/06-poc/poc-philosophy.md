# 6.1 The POC Philosophy

## 6.1.1 The True Cost of a Free POC

In the early stages of a tech company’s growth, offering "Free Proof of Concepts" (POCs) is a common strategy to build market share. However, as the product matures and deal sizes enter the enterprise tier ($250k+ ARR), the "Free POC" transforms from a growth engine into a silent killer of margin and deal velocity.

When an Account Executive (AE) happily tells you, "Great news! They agreed to a free 30-day POC!", they are often celebrating a massive strategic failure. 

To a prospect, "free" means "zero risk." And when a prospect has zero risk, they have zero urgency.

**The Invisible Costs of "Free"**

1.  **The Priority Deficit:**
    If a CTO has not spent a single dollar on a POC, it ranks at the absolute bottom of their team’s priority list. When your SE asks the prospect's data engineering team to configure the necessary network infrastructure to test your product, the data engineering team will ignore you. Why? Because their boss hasn't tied any financial capital to your success. 

2.  **The Infinite Scope Creep:**
    Because the POC is free, the prospect feels no pressure to finalize testing. A "30-day POC" routinely stretches into 60 or 90 days. "Can we test just one more data connector?" they will ask entirely consequence-free. You are now providing free tier-1 consulting.

3.  **The Devaluation of Your Software:**
    When you give away your most valuable asset—your product and the time of your senior Solutions Engineers—for free, you implicitly tell the prospect that your product is a commodity. You destroy leverage before the final pricing negotiation even begins.

**The Solution:**
You must train your AEs to treat POCs not as a favor you grant to the prospect to win their business, but as a mutual investment of massive resources that must be earned. 

> **War Story:** An enterprise software vendor offered a free 45-day POC to a massive retail bank. The bank happily accepted. The vendor's SE spent 80 hours configuring a custom demo environment and integrating it with the bank's legacy CRM. Three weeks into the "POC," the bank's project sponsor stopped returning emails. Six weeks later, the sponsor admitted, "We just wanted to see what the modern UI was like to help us draft an RFP for next year. We had no budget." The SE burned 80 hours of highly-paid technical time because the AE failed to establish mutual risk.

> **Failure Mode:** "The Begging Sales Cycle." The AE and SE are so desperate for a logo that they offer a free POC without demanding access to the ultimate economic buyer, a confirmed budget, or a mutually signed success plan. The prospect tests the software lazily and eventually ghosts the vendor.

**Interview Angle:**
"Tell me about a time you pushed back on an AE who wanted to offer a free POC."
A strong answer is: "A free POC without strict governance is just free consulting. I refused to execute a free POC for a telecom client until the AE secured a meeting with the VP of Infrastructure to explicitly align the POC outcome with a defined, funded Q3 initiative. If the VP wouldn't give us 30 minutes, they weren't going to give us $300k."

🟡 **Senior-Level** — Free is the most expensive word in enterprise sales.

---

## 6.1.2 The "Skin in the Game" Principle (Paid POCs)

The most effective strategy to counter the failures of the "Free POC" is forcing the prospect to invest political, temporal, and financial capital before the technical engagement begins. 

This is the **"Skin in the Game" Principle**. A paid POC completely changes the psychology of the evaluation. 

When a prospect pays for a POC, three magical things happen:
1. **The Executive Sponsor engages.** If a VP signs off on a $15,000 POC, they will personally ensure that their team completes the testing on time. Their budget and reputation are now attached to the outcome.
2. **The "Scope" becomes a rigid contract.** A prospect will rarely ask to test "just one more feature" if that feature isn't listed in the paid SOW (Statement of Work) because they know it will trigger a change order and delay the results they paid for.
3. **The "Tech Win" forces the "Commercial Win."** If a prospect is willing to spend $15k to test a platform, they possess the $300k necessary to buy it. You eliminate tire-kickers entirely.

**How to Position a Paid POC without Losing the Deal**

AEs and SEs often fear that asking for $15,000 to test the software will insult the prospect. The key is in the framing. You are not charging them to *test* the software; you are charging them for *enablement and risk-mitigation*. 

*The Narrative Framing:*
"We treat our POCs as the first 30 days of your successful implementation. We don't just hand you a sandbox; we align our Senior Architects to integrate your live data pipelines, train your engineering team on best practices, and build the first three production-ready dashboards for your executive review. Because this requires intense, dedicated resources from our top tier, we charge a nominal $15,000 onboarding fee. However, if the platform proves the ROI we discussed, that $15k is fully credited against your year-one subscription."

**The "Credit Toward Purchase" Mechanism**
This is the golden rule of Paid POCs. Fully credit the POC price against the final annual contract. This completely neutralizes the financial objection. It proves to the prospect that you are confident they will buy.

> **War Story:** An SE at a massive data warehousing startup noticed their POCs were running 90+ days because their prospects’ DBA teams kept deprioritizing the integration work. The startup mandated that all enterprise POCs required a $20k fee, fully creditable. The DBA teams immediately stopped ghosting the startup. Why? Because the CTO had just spent $20k of their quarterly budget, and the CTO was demanding weekly updates on the ROI. The start-up's POC conversion rate doubled.

> **Failure Mode:** "The Uncredited Paid POC." Charging a prospect $25k to test a platform, but refusing to credit it against the final purchase price. The prospect views this as double-dipping and will often angrily cancel the evaluation.

**Interview Angle:**
"If a Fortune 500 company demands a free, custom POC, how do you handle it?"
A strong answer is: "I educate my AEs on the 'Skin in the Game' principle. I refuse to execute a 40-hour technical validation until the prospect either agrees to a nominal, creditable paid POC, or explicitly commits massive temporal capital—like a hardlined 14-day timeline with daily required check-ins with their VP of Engineering."

🟡 **Senior-Level** — A prospect who refuses to invest $15k in a paid POC does not have $250k to buy the software.

---

## 6.1.3 When to Refuse a Custom Build

The single most dangerous sentence an SE can utter during an enterprise discovery call is: "Oh, yeah, our engineers can build that integration specifically for your architecture during the POC."

You just sold vaporware. You committed your engineering team to unpaid, custom development to win a single logo, without the CTO’s permission.

**The "Custom Build" Fallacy**

Many presales engineers believe their job is to bend reality to accommodate whatever bizarre legacy system the prospect has running in their basement. If the prospect demands natively ingesting a proprietary mainframe log format during the 30-day POC, the junior SE will stay up till 2 AM writing a custom python script to hack a solution together.

What happens next?
1. The script breaks during the final demo.
2. The prospect assumes your entire enterprise platform is buggy.
3. You lose the deal.

**The Rule of Core Competency**
A POC is a controlled environment designed to prove your platform’s *existing* core competency. It is not a 30-day hackathon where you prototype roadmap features on the prospect’s behalf.

*Action:* You must learn to say "No" to custom builds. 

If a multinational bank says, "We will only run the POC if you build a custom SSO integration to our legacy 1998 identity provider," your response must be an immediate rejection. 
*The Re-frame:* "Building custom SSO integrations for a 14-day technical validation introduces unnecessary risk to both our timelines. Instead, let's execute the POC using a standard SAML integration to validate the core routing capabilities we discussed. Once we prove the ROI of the routing engine and are moving towards a commercial contract, our Professional Services team will scope the legacy SSO build for the full production rollout."

*What you just did:*
1. You eliminated the technical risk of a buggy custom script ruining the evaluation.
2. You protected 40 hours of your own time.
3. You shifted the cost of the custom build from "Free Presales Work" to "Paid Professional Services."
4. You proved to the prospect that you are a peer consultant, not an anxious vendor desperate to say "Yes."

**The Exception to the Rule**
There is exactly one time when an SE is allowed to execute a custom build during a POC. 

When your company is desperately trying to enter a completely new market vertical, and your VP of Product expressly authorizes your presales team to build the feature *because the entire engineering org needs to learn how to do it for the roadmap*. 

If the VP of Product didn't ask you to build it, you don't build it.

> **War Story:** An overly eager SE spent three weeks of a 30-day POC building a custom data parser for a prospect's proprietary IoT devices. He delivered it proudly. The prospect tested it once, said "Neat," and bought the competitor because the competitor spent those three weeks executing a flawless MVP data dashboard that proved how much money the core product would save. The SE built an integration for a feature the prospect didn't actually care about.

> **Failure Mode:** "The Hero Complex SE." This SE writes thousands of lines of custom code in every single POC to prove they are the smartest person in the room. They win 2 deals a year because they only have time for 3 evaluations. The entire presales organization's win rate tanks because a senior resource is doing the work of a Junior Systems Integrator.

**Interview Angle:**
"Describe a time you refused a prospect's request during a technical evaluation."
A strong answer is: "During a $400k evaluation, the prospect demanded we write a custom API to connect to an unsupported legacy DB before they would sign. I refused. I explained that building custom APIs before signing commercial contracts violated our engineering protocols, but I immediately offered a workaround using our standard batch-ingest tool to prove out the core value of our analytics engine while keeping the POC on a 14-day timeline. They respected the boundary and bought the software anyway."

🟡 **Senior-Level** — Your job is to prove value, not to be a free system integrator. Never build a custom solution for an unsigned contract.

---

## 6.1.4 Paid vs. Free POC

The default operating model for most SaaS vendors is to offer free Proofs of Concept. This is a catastrophic strategic error that trains prospects to extract unlimited free labor from your presales team.

A free POC communicates one thing to the prospect: your time has no value. If your engineering resources are free, your software must not be worth much either.

---

### When to Demand a Paid POC

A paid POC is appropriate when any of the following conditions are true:

1. **The POC requires significant SE time (>40 hours).** If the prospect is demanding a production-replica sandbox, custom data ingestion, or a multi-week evaluation with daily standups, they are consuming consulting-grade resources. Consulting-grade resources cost money.
2. **The prospect has no validated budget.** If the AE cannot confirm that the prospect has allocated budget for this purchase, a paid POC forces the prospect to prove financial commitment. Prospects who refuse to pay even $10k for a structured POC almost never sign a $200k contract.
3. **The deal involves a new market vertical.** If your company is entering Healthcare, Government, or Financial Services for the first time, the POC will require custom compliance work (HIPAA, FedRAMP, SOC 2 scoping). This is paid professional work, not free presales.

### How to Position the Paid POC

Never frame the paid POC as a cost. Frame it as risk mitigation for the prospect.

<div class="roleplay-script">
  <div class="dialogue-row">
    <div class="speaker-avatar">SE</div>
    <div class="speaker-message">
      <strong>Elite SE</strong>
      "Given the complexity of your environment—specifically the legacy SAP integration and the multi-region data residency requirement—a standard 14-day evaluation won't give your team enough time to validate the architecture properly. What we recommend is a structured 30-day Proof of Value, jointly staffed by our Solutions Architecture team and your IT leads. The investment is $15,000, which is fully credited toward the annual subscription if you proceed to contract."
    </div>
  </div>
</div>

The "fully credited toward the subscription" clause is critical. It eliminates the prospect's objection that they are "paying for a demo." They are pre-paying for software they intend to buy.

### The Free POC Exception

Free POCs are acceptable in exactly one scenario: when the deal is strategically critical for your company's market positioning (e.g., a Fortune 50 logo that unlocks an entire vertical), *and* the VP of Sales has explicitly authorized the resource investment.

If the VP didn't approve it, it's not strategic—it's just free consulting.

> **War Story:** An SE team ran a free 45-day POC for a mid-market logistics company. The SE dedicated 120 hours to building custom dashboards, data connectors, and a production-ready sandbox. At the end of the POC, the prospect said: "This was incredibly helpful. We've decided to build it in-house using your architecture as a reference. Thanks!" The SE had just provided $50k worth of free consulting to a company that never intended to buy.

> **Failure Mode:** "The Free Consulting Factory." The SE team runs 8 free POCs per quarter, each consuming 40-80 hours. Only 1 converts to a paid contract. The other 7 prospects extracted free architecture design, free data migration testing, and free integration validation—then either built it themselves or used the SE's work as leverage to negotiate a discount with a competitor.

**Interview Angle:**
"How do you evaluate whether a POC should be paid or free?"
A strong answer is: "I assess three factors: the estimated SE hours required, whether the prospect has validated budget, and the strategic importance of the logo. If the POC exceeds 40 hours and the prospect hasn't confirmed budget, I recommend a paid POC with the fee credited toward the subscription. This filters out tire-kickers and ensures the prospect has genuine purchase intent."

🔴 **Senior-Level** — Free POCs attract tire-kickers. Paid POCs attract buyers. The fee is a filter, not a barrier.

---

## 6.1.5 The POC You Should Refuse

Not every POC is worth running. Some evaluations are designed to extract free consulting, validate a decision that has already been made, or satisfy a procurement checkbox exercise where you are the designated loser.

Learning to refuse a POC is one of the most valuable commercial skills an SE can develop.

---

### The 5 POCs You Must Refuse

#### 1. The "Column Fodder" POC
The prospect has already selected a vendor. Procurement requires three evaluations. You are Vendor B or Vendor C, invited only to satisfy the process.

**Red Flags:**
*   The prospect cannot articulate why they are evaluating *your* platform specifically.
*   The success criteria suspiciously match a competitor's exact feature set.
*   You have zero access to the executive sponsor.

#### 2. The "Free Consulting" POC
The prospect has no intention of buying. They want your SE team to design their architecture for free, validate their internal assumptions, or train their junior engineers on modern design patterns.

**Red Flags:**
*   The prospect's questions are more educational than evaluative ("Can you explain how event-driven architectures work?").
*   They request access to your full documentation library before agreeing to any commercial terms.
*   The POC scope keeps expanding but the prospect refuses to discuss pricing.

#### 3. The "No Budget" POC
The prospect genuinely likes your platform but has not secured budget. They want to run the POC first and "use the results to request budget." This almost never works. Budget requests take 1-2 quarters. Your POC results will be stale by then.

**Red Flags:**
*   The champion says: "If the POC goes well, I can take this to my VP to get funding."
*   There is no compelling event or hard deadline.

#### 4. The "Infinite Scope" POC
The prospect wants to test everything—15 integrations, 6 data sources, 3 user personas—in a 14-day window. This is not a POC; it is a full implementation project disguised as an evaluation.

**Red Flags:**
*   The success criteria document has more than 10 requirements.
*   The prospect's team cannot prioritize which 3 capabilities matter most.

#### 5. The "Ghost Champion" POC
Your champion—the person who initiated the evaluation—has gone silent. They are not responding to emails, not attending standups, and not providing the data access you need. This means they have either lost internal political support, been reassigned, or simply lost interest.

**Red Flags:**
*   Two or more missed standups without explanation.
*   Data or environment access requests unanswered for more than 5 business days.

### How to Refuse Gracefully

> *"Based on our assessment, we don't believe the current evaluation framework will produce a conclusive result for your team. Specifically, [cite the missing pre-condition]. Rather than invest time in an evaluation that may not lead to a clear outcome, we'd recommend we address [budget validation / executive alignment / scope definition] first. Once those are in place, we're confident we can deliver a high-impact evaluation within [14] days."*

> **War Story:** An SE Manager refused a POC request from a Fortune 500 retailer because the AE could not confirm budget or executive sponsorship. The AE was furious—"This is a Fortune 500 logo!" Three months later, the same retailer came back with a confirmed budget, a named executive sponsor, and a 30-day timeline tied to a contract expiry. The SE team ran the POC in 14 days and closed a $400k deal. The refusal forced the prospect to get serious.

> **Failure Mode:** "The Yes-to-Everything SE Manager." This manager approves every POC request to avoid conflict with sales. The SE team runs 12 POCs per quarter, wins 1, and loses 11. The SEs are exhausted, demoralized, and the best ones leave for companies that respect their time.

**Interview Angle:**
"Tell me about a time you refused to run a POC. What happened?"
A strong answer is: "I declined a POC for a prospect that had no confirmed budget and no executive sponsor. The AE was initially frustrated, but I explained that running the POC without those pre-conditions would waste 60 hours of SE time on a deal with a sub-10% close probability. Three months later, the prospect returned with both items in place, and we won the deal."

🔴 **Senior-Level** — The POCs you refuse define your win rate more than the POCs you run.
