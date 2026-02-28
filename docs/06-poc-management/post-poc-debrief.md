# The Post-POC Debrief

Every POC—whether it results in a Technical Win, a Technical Loss, or an inconclusive outcome—must be followed by a structured internal debrief. Without a debrief, the lessons learned during the evaluation evaporate, mistakes are repeated, and the SE team never improves.

---

## The Debrief Framework

Schedule the debrief within 48 hours of the POC completion. Attendees: SE, AE, and SE Manager. Duration: 30 minutes maximum.

### Section 1: Outcome Summary (5 minutes)

| Item | Detail |
|---|---|
| **Prospect** | [Company Name] |
| **Deal Size (ACV)** | $[X]k |
| **POC Duration** | [X] days |
| **Outcome** | Technical Win / Technical Loss / Inconclusive |
| **Competitor(s)** | [Vendor X, Vendor Y, or None] |

### Section 2: What Worked (10 minutes)
*   Which demo scenarios impressed the prospect most?
*   Which success criteria were the easiest to prove?
*   What objections were successfully overcome, and how?
*   Did the prospect's champion provide any specific positive feedback?

### Section 3: What Failed or Struggled (10 minutes)
*   Which success criteria were hardest to achieve, and why?
*   Were there any technical gaps or bugs discovered during the POC?
*   Did any scope creep occur? How was it handled?
*   Did the prospect raise any concerns that were not fully resolved?

### Section 4: Lessons Captured (5 minutes)
*   What should be done differently in the next POC for a similar customer profile?
*   Are there any product gaps that should be escalated to the Product team?
*   Were there any process improvements (sandbox provisioning, data loading, standups) that would improve efficiency?

## Storing the Debrief

Debriefs must be documented and stored in a shared location (Notion, Confluence, or Google Drive). Tag each debrief with:
*   Industry vertical (Healthcare, Finance, Retail, etc.)
*   Deal size tier (SMB, Mid-Market, Enterprise)
*   Outcome (Win / Loss / Inconclusive)
*   Competitor involved

Over time, this library becomes a powerful training resource. New SEs can study 20 past debriefs before running their first POC, learning what works and what fails for specific industries and deal sizes.

> **War Story:** An SE team introduced mandatory debriefs after every POC. Within 6 months, they identified a pattern: 70% of POC losses in the Healthcare vertical were caused by the same security objection (data residency in the US vs. EU). The SE Manager escalated the issue to Product, who fast-tracked a EU data residency option. The next 3 Healthcare POCs were all Technical Wins.

> **Failure Mode:** "The Move-On-Immediately SE." This SE finishes a POC—win or lose—and immediately jumps to the next deal. They never debrief, never document what happened, and never share their learnings with the team. The same mistakes are repeated across the organization. The SE team never improves its win rate because nobody is studying the patterns.

**Interview Angle:**
"What do you do after a POC ends, regardless of the outcome?"
A strong answer is: "I run a structured debrief within 48 hours covering what worked, what struggled, and lessons learned. I document the debrief and tag it by industry, deal size, and outcome. Over time, this library becomes a critical training asset. In my last role, analyzing debrief patterns helped us identify a recurring security objection that, once addressed, improved our Healthcare vertical win rate by 30%."

🟡 **Mid-Level** — A POC without a debrief is a missed learning opportunity. The best SE teams study every win and every loss.

---
