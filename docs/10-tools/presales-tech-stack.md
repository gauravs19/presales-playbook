# 10.1 The Presales Tech Stack

## 10.1.1 Revenue Intelligence — Gong & Chorus

Revenue intelligence platforms — Gong, Chorus, and their successors — record, transcribe, and analyze every customer conversation your team has. Sales leadership bought them to inspect pipeline. The under-exploited fact is that they're at least as valuable to SEs, who are sitting on a searchable corpus of every discovery answer, every objection, every competitor mention, and every demo that ever succeeded or died — and mostly using it to re-watch their own meetings.

Treat the call library as a queryable dataset about how deals are actually won in your company, and it becomes one of the highest-leverage tools in your stack.

---

### The SE Queries That Pay

| Query | What it gives you |
|---|---|
| Competitor name, last 90 days, lost deals | The competitor's *current* attack lines, verbatim — not the six-month-old battlecard version |
| "security review" / "InfoSec" across stalled deals | The exact questions that stall deals in your segment → [pre-answer them](docs/07-commercial-influence/templates-accelerators.md?id=_751-pre-populating-security-questionnaires) |
| Your own discovery calls, talk-ratio and question count | Whether you're actually running [the questioning discipline](docs/03-discovery/questioning-techniques.md?id=_324-the-mute-listen-tactic) you think you are |
| The top SE's demos of the module you're learning | How the best person in the building [frames, sequences, and answers](docs/00-start-here/how-to-learn-from-senior-ses.md?id=_043-reverse-engineering-a-senior-ses-deal-approach) — on demand, at 1.5× speed |
| "pricing" mentions in technical evaluations | Where commercial questions leak into your technical sessions, and how well they're being deflected |

### Three Practices Worth Institutionalizing

1. **The pre-call binge.** Before any meeting with a returning stakeholder, search their name and watch their last two appearances. Their objection patterns, their vocabulary, what made them lean in — you walk in with a stakeholder-specific brief that [pre-call research](docs/03-discovery/preparation-hypothesis-led-entry.md?id=_311-pre-call-linkedin-earnings-transcript-recon) from LinkedIn alone can't produce.
2. **The self-audit loop.** Once a month, watch one of your own calls with a single-variable focus (talk ratio, filler density, [pause discipline](docs/09-executive-selling/presentation-communication-mastery.md?id=_951-voice-modulation-pacing-strategic-silence), how long your answers run). Nothing in your development plan outperforms watching yourself lose the thread of a question in real time. Pair it with the [demo scoring rubric](docs/05-demo-excellence/demo-measurement-improvement.md?id=_561-scoring-your-own-demo).
3. **The evidence pull.** Building a [discovery summary](docs/13-templates/discovery-summary.md) or [business case](docs/13-templates/business-case-one-pager.md)? Pull the customer's numbers as verbatim quotes with timestamps. "40 engineer-hours a month, stated by their VP Eng on the March 12 call" is unimpeachable in a way your notes never are.

### The Etiquette and the Limits

Recording lives under consent and policy — never quote a customer's recorded words back to *them* in negotiation (it reads as surveillance), and never search recordings for ammunition against colleagues. Internally, the corpus is for patterns and self-development; the moment call review becomes gotcha material in deal disputes, people start performing for the recorder and the dataset's honesty — its entire value — dies.

And remember what the AI summaries are: pattern matchers. Gong's "deal risk" flags and auto-summaries are directionally useful and contextually blind — they can't tell a [strategic walk-away](docs/09-executive-selling/negotiation-for-ses.md?id=_934-walking-away-with-the-relationship-intact) from a collapse. The transcript is data; the judgment stays yours.

> **War Story:** An SE team kept losing to the same competitor in mid-market deals, and the battlecard counters weren't landing. One SE spent an afternoon running the competitor's name across every loss transcript from the prior quarter and found something the battlecard missed: the competitor had changed pitch — they weren't attacking features anymore, they were attacking *implementation time*, with a specific "live in three weeks" claim, and it appeared in eleven of thirteen losses, always via the economic buyer, never in technical sessions. The counter wasn't technical at all: reference customers with honest go-live timelines, deployed at the executive level early. Win rate against that competitor doubled inside two quarters. The intelligence had been sitting in the call library the whole time — nobody had asked it a question.

> **Failure Mode:** The SE who lets the recorder replace the notebook — "it's all in Gong" — and stops synthesizing. Six weeks later, the [discovery documentation](docs/03-discovery/pain-quantification.md?id=_354-documenting-what-you-heard-vs-what-theyll-deny) doesn't exist, the deal's narrative lives in nine hours of unwatched video, and reconstructing what the prospect actually said requires an afternoon of scrubbing timelines. Recording is storage, not comprehension. The synthesis discipline — summary written within 24 hours, decisions logged — survives the tool; skipping it because the tool exists is how deals lose their memory.

**Interview Angle:**
"How do you use call recording tools in your workflow?"
Strong answers go beyond "I review my calls" to querying the corpus — competitive patterns, stakeholder prep, evidence extraction — plus a deliberate self-review loop. Weak answers reveal the tool as a compliance artifact they appear in rather than an instrument they play.

🟡 **Mid-Level** — Your company already owns a recording of every deal it ever won or lost. The only question is whether anyone's asking it questions.

---

## 10.1.2 Demo Automation — Reprise, Navattic & Storylane

Demo automation platforms — Reprise, Navattic, Storylane, Walnut and kin — capture your product into interactive, clickable replicas: guided tours a prospect can walk through alone, sandboxed environments that can't break, product stories embedded in a follow-up email. The pitch to SE leadership is scale: stop burning senior SE hours on repetitive first-look demos.

The pitch is correct, and it comes with a trap. The tools are excellent at *distributing* a demo and incapable of *deciding* what the demo should be. Automate a harbor tour and you've simply industrialized [the thing this playbook spends a chapter abolishing](docs/05-demo-excellence/demo-strategy.md?id=_511-abolishing-the-harbor-tour-forever).

---

### Where Automated Demos Belong in the Deal

| Deal moment | Format | Why |
|---|---|---|
| Pre-first-meeting / marketing handoff | Short guided tour (3–5 min, one workflow) | Qualifies interest before an SE hour is spent |
| Post-demo follow-up | Interactive replay of the 2–3 scenes *they reacted to* | Your champion can't re-perform your demo — this does it for them, [in the room you're not in](docs/05-demo-excellence/storytelling-persona-binding.md?id=_523-making-your-champion-the-hero-of-the-story) |
| Multi-stakeholder deals | Persona-specific tours (ops view, admin view, exec dashboard) | Stakeholders you'll never get meetings with still experience the product |
| Between demo and POC | Sandboxed hands-on environment | Keeps momentum alive without [unscoped free evaluation](docs/06-poc/poc-philosophy.md?id=_611-the-true-cost-of-a-free-poc) |
| RFP / procurement stage | Linked evidence for specific claims | "Click here to see the audit trail" beats a paragraph asserting one |

What doesn't belong in automation: the tailored evaluation demo itself. The moments that win deals — [reading the room](docs/09-executive-selling/customer-empathy-at-senior-level.md?id=_944-reading-the-room), the improvised whiteboard, the objection handled live — are precisely the ones that can't be recorded in advance.

### Building Tours That Sell (Not Tours That Tour)

The [storyboard discipline](docs/13-templates/demo-storyboard.md) applies with *more* force to automated demos, not less, because there's no presenter to rescue a wandering narrative:

1. **One tour, one pain, one persona.** The self-guided viewer gives you ninety seconds before abandoning. A tour that shows "the platform" loses to a tour that shows "your Monday-morning pipeline triage, fixed."
2. **Front-load the aha.** The [5-minute rule](docs/05-demo-excellence/demo-strategy.md?id=_513-the-5-minute-aha-rule) becomes a 60-second rule when nobody's socially obligated to keep watching.
3. **Instrument everything.** The analytics are half the value: who opened it, where they lingered, where they abandoned, who forwarded it. A tour abandoned at the pricing-adjacent step by three stakeholders is deal intelligence, not just content performance.
4. **Version per deal, not per quarter.** The generic tour is marketing's asset. Yours should carry the prospect's terminology and data shapes — most platforms make a deal-specific fork a 30-minute job, and [the industry-matched version](docs/10-tools/demo-environment-management.md?id=_1023-scripting-dummy-data-generation) converts measurably better.

### The Maintenance Tax

Every captured demo is a snapshot that starts aging on capture day. UI refreshes, renamed features, deprecated flows — a stale tour showing last year's interface does active damage in an evaluation ("is this even the same product?"). Assign ownership: every published tour has a named owner and a review date, exactly like [golden-state environments](docs/10-tools/demo-environment-management.md?id=_1022-maintaining-the-golden-state-environment). An unowned tour library rots into a liability within two quarters.

> **War Story:** An SE team covering mid-market at a data-platform vendor was drowning: forty demo requests a quarter, half of them first-look tire-kickers. They built exactly three Navattic tours — one per core persona, each built from their best-converting live demo's storyboard, each ending with a calendar link. Results after one quarter: first-look demo requests to the SE team dropped 60%; the meetings that *did* get booked arrived pre-educated, with discovery-grade questions; and — the unplanned win — the tours' analytics became a qualification signal. Prospects who completed the tour converted to POC at four times the rate of those who abandoned in the first minute. The team had accidentally built a [deal-quality scorecard input](docs/02-deal-orchestration/reading-a-deal-before-discovery-starts.md?id=_211-scoring-deal-quality-in-the-first-15-minutes) out of a content tool.

> **Failure Mode:** The team that automates in the wrong direction — recording their longest, most comprehensive demo as "the definitive tour," all thirty features, twenty-two minutes. Completion analytics tell the story within a week: median abandonment at ninety seconds, right after the viewer has learned the product has a lot of menus. Automation multiplies whatever you feed it. Feed it the harbor tour and you get the harbor tour at scale, with a dashboard proving nobody finishes it.

**Interview Angle:**
"Where do interactive demos fit in your deal process?"
Strong answers place automation at specific deal moments (leave-behind, multi-threading, pre-qualification), keep the tailored evaluation demo human, and mention analytics as deal signal. Weak answers treat the tools as either a threat ("nothing replaces a live demo") or a replacement ("we automate everything") — both miss that it's a distribution channel for demo *strategy*.

🟡 **Mid-Level** — Demo automation scales whatever demo philosophy you already have. Fix the philosophy first; then, and only then, multiply it.

---

## 10.1.3 RFP Automation — Loopio, Seismic & Responsive

RFP response platforms — Loopio, Responsive (née RFPIO), Seismic and their peers — maintain a library of approved answers and assemble first-draft responses against incoming questionnaires. For teams facing hundreds of RFPs and security questionnaires a year, they convert a soul-destroying copy-paste marathon into library curation plus review.

Used well, they buy back the one resource that wins RFPs: senior attention for the twenty questions that actually differentiate. Used badly, they industrialize mediocrity — perfectly formatted, factually current, strategically inert responses that read exactly like what they are.

---

### What the Machine Does Well

- **The commodity 60–70%.** Company facts, certifications, hosting details, standard security posture, support tiers — questions with one true answer that changes rarely. Automate ruthlessly; there is zero glory in hand-typing your SOC 2 status for the ninetieth time. This is the same corpus that powers [security questionnaire pre-population](docs/10-tools/automation-personal-productivity.md?id=_1034-automating-security-questionnaire-pre-population).
- **Version truth.** One approved answer per fact, owned, dated, reviewed on schedule — the platform is the single source that prevents the year-old data-residency answer from resurfacing in a live bid.
- **Assembly and audit.** Who answered what, which SME signed off, what shipped in which bid. When a delivered response gets challenged during contracting, the trail matters.

### What Must Stay Human

The [triage decision](docs/13-templates/rfp-response-matrix.md) — *should we respond at all* — comes before any tool touches the document. No platform scores [win probability](docs/07-commercial-influence/rfp-strategy.md?id=_724-scoring-an-rfps-real-win-probability), detects a [ghost-written spec](docs/07-commercial-influence/rfp-strategy.md?id=_722-ghost-writing-specs-before-the-rfp-is-released), or tells you the incumbent has it locked. Automating the response to an unwinnable RFP just loses faster and cheaper.

Then, within a bid you've chosen to fight, split the questions:

| Question type | Handling |
|---|---|
| Commodity fact | Library, auto-filled, spot-checked |
| Capability with nuance ("describe how your platform handles X") | Library *skeleton*, rewritten against this prospect's discovered pain and vocabulary |
| Differentiator territory — the 15–20 questions where the evaluation is actually decided | Hand-written, [strategic-yes language](docs/07-commercial-influence/rfp-strategy.md?id=_723-answering-yes-strategically), proof points attached, senior review |
| The trap questions (written around a competitor's strengths) | Hand-written reframes; the library answer walks straight into the trap |

The tell of an automated response is uniformity: every answer the same length, the same register, the same absence of the prospect's own language. Evaluators who read forty of these a year clock it in minutes — and read it, correctly, as a statement of how much you wanted this deal.

### Library Hygiene Is the Whole Game

An answer library is a garden that becomes a landfill without tending: stale answers outliving product changes, four near-duplicate variants of the same question, dead certifications cited proudly. Minimum viable discipline — a named owner per content domain, a quarterly review cycle pinned to release cadence, dedup on ingest, and a hard rule that *lost-deal answers get autopsied*: when an RFP response loses on a question you answered from the library, [that finding flows back](docs/11-metrics/win-loss-intelligence.md?id=_1121-the-objective-deal-autopsy) into the library as a rewrite, or the same answer loses again next quarter.

> **War Story:** A security questionnaire response assembled entirely from a well-maintained library cost a vendor a seven-figure deal over a single stale sentence: the encryption-key-management answer, approved fourteen months earlier, described the *previous* architecture — accurate then, wrong now, and materially weaker than what the product actually did. The prospect's security team caught the discrepancy against the live documentation and concluded the vendor either didn't know its own product or didn't read its own responses. Neither interpretation survived procurement. The fix that followed was cheap and permanent: every library answer got an owner and an expiry date, and any answer past expiry blocked assembly until re-verified. The library had never been wrong before — it had just never been wrong in front of money.

> **Failure Mode:** The team that measures the tool by throughput — "we responded to 40% more RFPs this quarter!" — and celebrates automating the wrong decision. Response capacity is not the constraint that wins bids; [selectivity is](docs/07-commercial-influence/rfp-strategy.md?id=_721-deciding-when-to-refuse-an-rfp). If automation's dividend is spent responding to more low-probability RFPs instead of going deeper on fewer good ones, the tool has made the win rate *worse* while the activity metrics glow. The correct dividend of RFP automation is measured in senior hours redeployed to differentiator questions, not in responses shipped.

**Interview Angle:**
"Walk me through how you'd handle a 300-question RFP due in two weeks."
Strong answers start with triage (respond at all? on what conditions?), then a split: automate the commodity layer, hand-craft the differentiators, senior review on the trap questions. Weak answers start with effort allocation ("divide the questions among the team") — mechanics without strategy, which is exactly the response that loses.

🟡 **Mid-Level** — RFP automation buys back hours. The bid is won or lost by where you choose to spend them.

---

## 10.1.4 SE-Specific CRM Hygiene

Most SEs treat the CRM as the AE's paperwork — a place they're occasionally nagged to log a meeting. This gets the ownership exactly backwards. The CRM's *commercial* fields belong to the AE; its *technical truth* has no owner at all unless the SE claims it. And unclaimed technical truth is how organizations end up with pipelines full of deals whose evaluation status exists only in one SE's head, unreadable by managers, unusable by [capacity planning](docs/12-scaling/presales-operations.md?id=_1231-building-the-se-capacity-model), and lost entirely when that SE changes jobs.

The discipline isn't "log more." It's logging the *specific small set of fields* that make technical deal state legible — in about fifteen minutes a week.

---

### The SE's Minimum Viable Record

Whatever your CRM's schema calls them, these are the fields worth owning per opportunity:

| Field | Content | Why it matters |
|---|---|---|
| Technical stage | Discovery / demo / POC / technical win / [handed off](docs/13-templates/se-to-delivery-handoff.md) | The single field that makes SE pipeline visible at all |
| Success criteria status | e.g. "2 of 3 signed off; #3 blocked on their data team" | Turns "POC in progress" into an inspectable claim |
| Technical risk, one line | "SSO assumption unverified — flagged in design doc §6" | The [assumptions register's](docs/13-templates/solution-design-document.md) headline, where the forecast can see it |
| Competitor + technical angle | "Vendor X in play; attacking on implementation time" | Feeds the [competitive dossier](docs/11-metrics/win-loss-intelligence.md?id=_1124-building-the-competitive-intelligence-dossier) beyond your own memory |
| Key artifact links | Discovery summary, design doc, POC plan | The deal's technical file, findable by someone who isn't you |
| Technical win date | The date the [win was declared](docs/13-templates/technical-win-report.md) | The timestamp every [SE metric worth having](docs/11-metrics/kpis-that-actually-matter.md?id=_1112-technical-win-rate-by-segment) is computed from |

Notice what's absent: meeting transcripts, activity logs, feelings. [Revenue intelligence tools](docs/10-tools/presales-tech-stack.md?id=_1011-revenue-intelligence-gong-chorus) capture activity automatically; the CRM record is for *state and judgment*, which no tool captures for you.

### Why This Is Self-Interest, Not Compliance

- **Your impact becomes countable.** SE-influenced revenue, demo-to-POC conversion, technical win rate — every metric that justifies your next [comp conversation](docs/01-foundations/skills-career-architecture.md?id=_144-negotiating-your-own-compensation) or your team's [headcount case](docs/12-scaling/leadership-culture.md?id=_1241-advocating-for-se-headcount) is computed from fields only you can populate. Empty fields mean your work literally doesn't count.
- **Your judgment gets an audit trail.** "Technical risk: data quality, flagged March 3" sitting in the record since March is what separates *the SE who called it* from *everyone who claims they saw it coming* when the deal craters in July.
- **Your deals survive you.** Vacation, promotion, the [junior SE taking over a thread](docs/09-executive-selling/stakeholder-influence.md?id=_924-mentoring-a-junior-se-in-a-live-deal) — a legible record is the difference between a handoff and an archaeology dig.

### Making It Cheap

Hygiene fails when it's expensive. Batch it: fifteen minutes, once a week, same calendar slot, ideally feeding your [weekly deal review](docs/02-deal-orchestration/portfolio-management.md?id=_242-the-weekly-se-deal-review) — the review is just reading the fields out loud. Automate the transcription layer ([post-call summaries](docs/10-tools/automation-personal-productivity.md?id=_1031-auto-generating-post-call-technical-summaries) draft; you approve). And ruthlessly ignore fields that serve nobody: if a field is never read by a human or a report, stop feeding it and say so — hygiene discipline includes pruning.

> **War Story:** An SE inherited a "late-stage" opportunity when a colleague left the company: eight months of evaluation history, $900K on the forecast, and a CRM record containing four logged meetings and the word "ongoing." No criteria status, no risk notes, no artifact links; the departed SE's OneDrive was already deprovisioned. Reconstructing the technical state took three weeks of re-asking the prospect questions they'd already answered — which the prospect's eval lead noted, dryly, was "not confidence-inspiring at this stage." The deal survived, barely, a quarter late. The team's response became policy: the six fields above are mandatory at stage transitions, checked in deal review — not for the managers' dashboards, but because *any SE might be the next one doing archaeology.*

> **Failure Mode:** The SE who over-corrects into CRM maximalism — logging every interaction in paragraph form, duplicating the call recorder, decorating every optional field — and burning ninety minutes a week on data entry that no report consumes. Hygiene's enemy isn't only neglect; it's cost. The record exists to make technical state legible in six fields, and every minute past that is minutes taken from deals. If your CRM discipline doesn't fit in fifteen weekly minutes, you're not being thorough — you're doing the tool's job instead of yours.

**Interview Angle:**
"What does your CRM discipline look like as an SE?"
Strong answers name specific technical-state fields they own, connect them to metrics and handoffs, and describe a cheap batching habit. Weak answers are either confession ("honestly, the AE handles it") or compliance theater ("I log everything") — both reveal that technical deal state lives in their head, which is precisely the risk.

🟢 **Entry-Level** — If your technical work isn't in the system, then organizationally speaking, it didn't happen — and neither, at review time, did you.
