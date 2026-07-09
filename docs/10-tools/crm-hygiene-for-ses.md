# SE-Specific CRM Hygiene

Most SEs treat the CRM as the AE's paperwork — a place they're occasionally nagged to log a meeting. This gets the ownership exactly backwards. The CRM's *commercial* fields belong to the AE; its *technical truth* has no owner at all unless the SE claims it. And unclaimed technical truth is how organizations end up with pipelines full of deals whose evaluation status exists only in one SE's head, unreadable by managers, unusable by [capacity planning](docs/12-scaling/se-capacity-model.md), and lost entirely when that SE changes jobs.

The discipline isn't "log more." It's logging the *specific small set of fields* that make technical deal state legible — in about fifteen minutes a week.

---

## The SE's Minimum Viable Record

Whatever your CRM's schema calls them, these are the fields worth owning per opportunity:

| Field | Content | Why it matters |
|---|---|---|
| Technical stage | Discovery / demo / POC / technical win / [handed off](docs/13-templates/se-to-delivery-handoff.md) | The single field that makes SE pipeline visible at all |
| Success criteria status | e.g. "2 of 3 signed off; #3 blocked on their data team" | Turns "POC in progress" into an inspectable claim |
| Technical risk, one line | "SSO assumption unverified — flagged in design doc §6" | The [assumptions register's](docs/13-templates/solution-design-document.md) headline, where the forecast can see it |
| Competitor + technical angle | "Vendor X in play; attacking on implementation time" | Feeds the [competitive dossier](docs/11-metrics/competitive-intelligence-dossier.md) beyond your own memory |
| Key artifact links | Discovery summary, design doc, POC plan | The deal's technical file, findable by someone who isn't you |
| Technical win date | The date the [win was declared](docs/13-templates/technical-win-report.md) | The timestamp every [SE metric worth having](docs/11-metrics/technical-win-rate.md) is computed from |

Notice what's absent: meeting transcripts, activity logs, feelings. [Revenue intelligence tools](docs/10-tools/revenue-intelligence-tools.md) capture activity automatically; the CRM record is for *state and judgment*, which no tool captures for you.

## Why This Is Self-Interest, Not Compliance

- **Your impact becomes countable.** SE-influenced revenue, demo-to-POC conversion, technical win rate — every metric that justifies your next [comp conversation](docs/01-foundations/negotiating-your-comp.md) or your team's [headcount case](docs/12-scaling/headcount-advocacy.md) is computed from fields only you can populate. Empty fields mean your work literally doesn't count.
- **Your judgment gets an audit trail.** "Technical risk: data quality, flagged March 3" sitting in the record since March is what separates *the SE who called it* from *everyone who claims they saw it coming* when the deal craters in July.
- **Your deals survive you.** Vacation, promotion, the [junior SE taking over a thread](docs/09-executive-selling/mentoring-mid-deal.md) — a legible record is the difference between a handoff and an archaeology dig.

## Making It Cheap

Hygiene fails when it's expensive. Batch it: fifteen minutes, once a week, same calendar slot, ideally feeding your [weekly deal review](docs/02-deal-orchestration/weekly-se-deal-review.md) — the review is just reading the fields out loud. Automate the transcription layer ([post-call summaries](docs/10-tools/post-call-summaries.md) draft; you approve). And ruthlessly ignore fields that serve nobody: if a field is never read by a human or a report, stop feeding it and say so — hygiene discipline includes pruning.

> **War Story:** An SE inherited a "late-stage" opportunity when a colleague left the company: eight months of evaluation history, $900K on the forecast, and a CRM record containing four logged meetings and the word "ongoing." No criteria status, no risk notes, no artifact links; the departed SE's OneDrive was already deprovisioned. Reconstructing the technical state took three weeks of re-asking the prospect questions they'd already answered — which the prospect's eval lead noted, dryly, was "not confidence-inspiring at this stage." The deal survived, barely, a quarter late. The team's response became policy: the six fields above are mandatory at stage transitions, checked in deal review — not for the managers' dashboards, but because *any SE might be the next one doing archaeology.*

> **Failure Mode:** The SE who over-corrects into CRM maximalism — logging every interaction in paragraph form, duplicating the call recorder, decorating every optional field — and burning ninety minutes a week on data entry that no report consumes. Hygiene's enemy isn't only neglect; it's cost. The record exists to make technical state legible in six fields, and every minute past that is minutes taken from deals. If your CRM discipline doesn't fit in fifteen weekly minutes, you're not being thorough — you're doing the tool's job instead of yours.

**Interview Angle:**
"What does your CRM discipline look like as an SE?"
Strong answers name specific technical-state fields they own, connect them to metrics and handoffs, and describe a cheap batching habit. Weak answers are either confession ("honestly, the AE handles it") or compliance theater ("I log everything") — both reveal that technical deal state lives in their head, which is precisely the risk.

🟢 **Entry-Level** — If your technical work isn't in the system, then organizationally speaking, it didn't happen — and neither, at review time, did you.

---
