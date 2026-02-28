# Pass/Fail Scorecards

A POC without a scorecard is a POC without a verdict. If the evaluation ends and the prospect says "We need to discuss internally," you have failed to create a definitive, binary outcome.

The Pass/Fail Scorecard is the mechanism that forces the prospect to declare a Technical Win or a Technical Loss at the end of the evaluation—eliminating the ambiguity that kills deal velocity.

---

## Scorecard Design

The scorecard must be agreed upon *before* the POC starts. It is a direct extension of the Sandbox Lock Document and typically takes the form of a simple table.

### Template

| # | Success Criterion | Target Metric | Actual Result | Pass / Fail |
|---|---|---|---|---|
| 1 | Data ingestion from PostgreSQL staging database | 1M records in ≤60 minutes | [Filled during POC] | ☐ Pass ☐ Fail |
| 2 | Real-time dashboard refresh rate | ≤5 second refresh on live data | [Filled during POC] | ☐ Pass ☐ Fail |
| 3 | SSO authentication via Okta | Successful login for 3 test users | [Filled during POC] | ☐ Pass ☐ Fail |
| 4 | Role-based access control enforcement | Admin vs. Viewer permissions verified | [Filled during POC] | ☐ Pass ☐ Fail |
| 5 | API response time under concurrent load | ≤200ms at 500 concurrent requests | [Filled during POC] | ☐ Pass ☐ Fail |

**Overall POC Result:** ☐ **PASS** (all criteria met) / ☐ **FAIL** (one or more criteria not met)

### Design Rules

1. **Maximum 5 criteria.** More than 5 dilutes focus and makes it easy for the prospect to find one failure to justify delaying the decision.
2. **Every criterion must be quantifiable.** "The platform should be fast" is not a criterion. "API response ≤200ms at 500 concurrent requests" is.
3. **Binary outcomes only.** Pass or Fail. No "Partial" or "Needs Further Testing." Ambiguity is the enemy of deal velocity.
4. **The prospect fills in the "Actual Result" column.** This is critical. If the SE fills it in, the prospect can claim the results were biased. When the prospect's own team records the results, they own the outcome.

## Presenting the Scorecard

At the end of the POC, schedule a formal "Technical Review" call with the prospect's technical evaluator and their manager (or executive sponsor, if possible).

Walk through the scorecard line by line, confirming each result. Then ask the definitive question:

> *"Based on the results your team has recorded, all 5 criteria have been met. Do we have a Technical Win?"*

If they say yes, immediately transition to: "Excellent. I'll hand you over to [AE Name] to discuss the commercial next steps."

If they hesitate, probe: "Which specific criterion are you uncertain about?" Force them to articulate the objection so you can address it on the spot.

> **War Story:** An SE ran a 21-day POC and achieved outstanding results. But at the end, the prospect said: "The results are good, but we want to test a few more scenarios before we commit." There was no scorecard. There was no definition of "done." The prospect tested for another 45 days before finally admitting they didn't have budget. With a scorecard, the SE would have forced a Pass/Fail verdict on Day 21 and either secured the Technical Win or identified the budget gap immediately.

> **Failure Mode:** "The Endless Evaluator." Without a scorecard, the prospect keeps asking for "just one more test." The SE obliges because they don't have a mechanism to declare the evaluation complete. The POC extends from 14 days to 60 days. The SE's other deals suffer. The AE misses the quarter.

**Interview Angle:**
"How do you define success for a POC?"
A strong answer is: "I co-create a Pass/Fail Scorecard with the prospect before the POC starts, limiting it to 5 quantifiable criteria. The prospect's team records the actual results during the evaluation. At the end, I walk through the scorecard in a formal review call and ask for a definitive Technical Win or Technical Loss. This eliminates ambiguity and compresses the post-POC decision timeline."

🟡 **Mid-Level** — Without a scorecard, a POC never ends. With one, it ends exactly when it should.

---
