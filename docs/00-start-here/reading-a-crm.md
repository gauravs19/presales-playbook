#### 0.2.4 How to Read a CRM Like a Deal Story

Your company's CRM — Salesforce, HubSpot, Dynamics, whatever — is not a data entry obligation. It's a living deal narrative. The problem is, most SEs treat it like a bureaucratic nuisance rather than a strategic intelligence tool. Meanwhile, the information that would have saved your last deal is sitting in a CRM field that nobody reads.

Here's how to extract signal from the noise:

1. **Read the AE's notes before every meeting.** This sounds obvious. It is not widely practised. Before any customer-facing interaction, open the opportunity record and read the last 5 activity entries. What did the AE discuss? What was promised? What objections were raised? Walking into a meeting without reading the CRM history is like a doctor walking into a follow-up appointment without reading the patient's chart. You'll ask questions that were already answered, miss context that was already established, and look like you don't care.

2. **Understand the pipeline stages.** Every CRM has a pipeline view that moves deals through stages (Qualification → Discovery → Demo → POC → Proposal → Closed). The stage definitions are specific to your company. Learn them. When an AE says a deal is "in Stage 3," you need to instantly know what that means in terms of SE involvement, expected deliverables, and probability of close. If you don't know your company's stage definitions by the end of your first month, ask your manager for the pipeline stage playbook.

3. **Check the close date — and be sceptical.** AEs are structurally incentivised to set optimistic close dates because it keeps their pipeline forecast looking healthy. If a deal has a close date of "end of this quarter" and there's no mutual close plan, no procurement engagement, and no legal review in progress — that deal is not closing this quarter. Your time allocation should reflect reality, not optimism.

4. **Look for ghost fields.** Most CRM setups include fields that are technically required but routinely left blank — MEDDPICC scores, competitor information, technical requirements, risk flags. If these fields are empty, it means the AE hasn't qualified the deal properly. That's your signal to dig deeper in discovery. If the "Identified Pain" field is blank and the deal is in Stage 4, something is very wrong.

5. **Log your own technical notes.** The CRM is not just the AE's responsibility. After every customer interaction, log a brief technical note: what architecture was discussed, what requirements were surfaced, what integration concerns were raised, and what's still unknown. These notes serve three purposes: they protect you if the deal goes sideways ("I flagged the data sovereignty risk in my notes on March 3rd"), they help the next SE if you're pulled off the deal, and they build a pattern library that makes your discovery sharper on the next deal.

6. **Use the CRM to forecast your own bandwidth.** Sort your active deals by stage and close date. Count how many POCs are in flight. Count how many demos are scheduled in the next two weeks. If you have 4 POCs running simultaneously, you don't have the capacity to take on a fifth — regardless of what the AE says. Use the CRM data to push back on overload with evidence, not emotion.

> **War Story:** An SE was assigned to a "hot deal" that the AE swore was closing in two weeks. The SE blocked out her entire week to prepare a custom demo. Before starting, she opened the CRM and read the activity history. The last customer interaction was 37 days ago. The "next steps" field said "prospect will circulate internally." The competitive field was blank. The MEDDPICC score was 2 out of 10. She called the AE and asked: "When was the last time you spoke to the champion?" Silence. The champion had gone dark three weeks ago. The deal wasn't hot — it was cold. The SE redirected her week to a deal that actually had momentum. That deal closed. The "hot deal" was Closed-Lost two months later.

> **Failure Mode:** The SE who never opens the CRM and relies entirely on the AE's verbal brief. The AE says "they love us, just do a quick demo and we'll close it." The SE runs the demo. The prospect asks about a competitor comparison that the AE never mentioned. The SE is blindsided. If they'd checked CRM, the competitor was logged in the record with notes from a previous conversation. They would have prepared a competitive positioning slide. Instead, they improvised poorly, and the competitor's SE — who clearly did their homework — won the technical evaluation.

**Interview Angle:**
"How do you use your company's CRM to prepare for customer engagements?"
A strong answer describes a systematic pre-call habit: reading activity history, checking qualification fields, and logging technical notes after calls. A weak answer says "I don't really use the CRM, I just ask the AE."

**Practical Reference: The 5-Minute CRM Pre-Call Checklist**
Before every customer meeting, check these 6 fields:

| Field | What You're Looking For |
|-------|------------------------|
| Last Activity Date | How recent? If > 21 days, deal may be stale |
| Close Date | Is it realistic given current stage? |
| Next Steps | Are they specific or vague? |
| Competitor | Who are we up against? |
| Champion | Is one identified? Is it the right person? |
| MEDDPICC / Qualification Score | Any blanks = blind spots you need to fill in discovery |

Takes 5 minutes. Saves you from walking into a meeting unprepared. Non-negotiable.

🟢 **Beginner** — At this level, simply building the habit of opening the CRM before every call puts you ahead of 50% of SEs in the industry. That's not an exaggeration — most SEs treat CRM as a post-activity logging chore, not a pre-activity intelligence source.

---
