# The RFP Response Triage Template

<!-- {"level": "Mid-Level"} -->

When an RFP lands on the SE team's desk, the first instinct is to open the spreadsheet and start answering questions. This is wrong.

Before a single answer is written, the SE Manager and Account Executive must triage the RFP to determine: (a) whether the deal is worth pursuing, and (b) how to allocate SE resources efficiently. This template provides the exact triage workflow.

---

## 1. The Triage Decision Matrix

Complete this matrix within 24 hours of receiving the RFP. The SE Manager and AE must align on every field.

### Deal Qualification

| Criterion | Answer | Score |
|---|---|---|
| **Did we help write the requirements?** | Yes / No / Unknown | Yes: +5 / No: -10 / Unknown: 0 |
| **Do we have direct access to the business sponsor?** | Yes / Portal Only / Unknown | Yes: +5 / Portal Only: -5 / Unknown: -3 |
| **Is there a validated budget?** | Confirmed / Estimated / Unknown | Confirmed: +5 / Estimated: 0 / Unknown: -5 |
| **Is there a Compelling Event with a hard deadline?** | Yes / Soft / No | Yes: +5 / Soft: +2 / No: -5 |
| **Can we differentiate architecturally?** | Strong / Moderate / Weak | Strong: +5 / Moderate: +2 / Weak: -5 |
| **Estimated deal size (ACV)** | $___k | Qualitative assessment |
| **Total Score** | | Sum of above |

### Triage Decision

| Score Range | Decision | Resource Allocation |
|---|---|---|
| **15-25** | **MUST WIN** | Assign Senior SE. Custom architecture diagrams. Executive sponsor from your C-Suite. Full custom response. |
| **5-14** | **PURSUE WITH CAUTION** | Assign mid-level SE. Use Master Questionnaire Library for 80% of answers. Customize only the differentiating sections. |
| **0-4** | **MINIMAL INVESTMENT** | Use only pre-canned library responses. No custom architecture work. Cap SE time at 8 hours total. |
| **Below 0** | **NO BID** | Formally decline. Send a professional "No Bid" letter to the prospect explaining that the requirements do not align with your platform's core capabilities. |

---

## 2. The "No Bid" Letter Template

When the triage score falls below zero, the AE must send a formal No Bid letter. This is not a rejection—it is a strategic maneuver. A well-crafted No Bid letter occasionally forces the prospect to re-engage on your terms.

> **Subject:** [Your Company] — RFP Response for [Project Name]
>
> Dear [Procurement Contact],
>
> Thank you for the opportunity to participate in [Project Name]. After a thorough review of the requirements by our Solutions Architecture team, we have concluded that the current RFP scope does not fully align with our platform's core architectural strengths.
>
> Rather than submit a response that does not represent our best work, we respectfully decline to bid at this time.
>
> However, if [Prospect Company] is open to a brief scoping call to align the technical requirements with our platform's capabilities, we would welcome the conversation. We believe there may be an architectural approach that delivers the outcomes your team is seeking more effectively than the current RFP framework prescribes.
>
> We remain committed to supporting [Prospect Company] and would be delighted to re-engage should the scope evolve.
>
> Best regards,
> [AE Name], [Title]

---

## 3. The Response Workflow (For Approved RFPs)

Once the RFP passes triage, execute the following workflow:

### Week 1: Divide and Conquer

| Task | Owner | Time Estimate |
|---|---|---|
| Map RFP questions to Master Questionnaire Library | Junior SE / SE Ops | 2-4 hours |
| Complete the auto-mapped answers (80% of questions) | Junior SE | 4-6 hours |
| Identify custom/differentiation questions (20%) | Senior SE | 1 hour |
| Write custom answers for differentiation questions | Senior SE | 4-8 hours |

### Week 2: Review and Package

| Task | Owner | Time Estimate |
|---|---|---|
| Internal review of complete RFP response | SE Manager | 2 hours |
| Executive Letter drafted and customized | AE + SE | 2 hours |
| Security Posture appendix attached | SE | 30 minutes |
| Final formatting and submission | SE Ops / AE | 1 hour |

**Total SE investment for a standard RFP:** 15-25 hours (vs. the typical 40-60 hours when answering from scratch).

---

## 4. Post-Submission Tracking

After the RFP is submitted, track the outcome in a central RFP Tracker:

| RFP | Prospect | Triage Score | Decision | SE Hours | Outcome | Win/Loss Reason |
|---|---|---|---|---|---|---|
| RFP-2025-042 | Acme Corp | 18 (Must Win) | Full Custom | 35 hrs | Won | Strong architecture differentiation |
| RFP-2025-043 | Globex Inc | 3 (Minimal) | Library Only | 8 hrs | Lost | Price (Column Fodder) |
| RFP-2025-044 | Initech | -5 (No Bid) | Declined | 0 hrs | N/A | Re-engaged 3 months later |

Over time, this tracker reveals critical patterns:
*   What is your win rate by Triage Score?
*   How many SE hours are being burned on deals scored below 5?
*   How often does a "No Bid" result in a re-engagement?

This data is how SE Managers justify headcount requests and protect their team from burnout.
