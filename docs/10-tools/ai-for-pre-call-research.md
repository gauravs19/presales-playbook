# Using AI to Accelerate Pre-Call Research

[Pre-call research](docs/03-discovery/pre-call-research.md) has always been the highest-ROI, lowest-glamour work in presales — and the first thing sacrificed to a busy calendar. LLMs with web access have changed its economics by an order of magnitude: the two hours of reading earnings transcripts, scanning job postings, and cross-referencing LinkedIn profiles compresses into twenty minutes of directed prompting plus verification. The SEs who exploit this don't do *less* research; they do research that was previously unaffordable for every call, not just the big ones.

The discipline that survives the tooling change: research exists to produce a [testable hypothesis](docs/03-discovery/hypothesis-led-discovery.md), not a dossier. AI accelerates the gathering. The hypothesis is still yours.

---

## The 20-Minute AI Research Stack

Run these as separate directed prompts, not one mega-query:

1. **Business context sweep.** "Summarize [company]'s last two earnings calls / annual report: stated strategic priorities, named technology initiatives, cost pressures, and any mention of [your problem domain]. Quote exact phrases with sources." Public companies narrate their pain quarterly; private ones leak it through press releases and executive interviews.
2. **Tech-stack fingerprinting.** "Based on [company]'s current engineering job postings, what can be inferred about their stack, cloud provider, and current initiatives?" Job posts are involuntary architecture disclosures — a posting for "Senior Engineer, Kafka migration" is a discovery answer you didn't have to ask for.
3. **Attendee mapping.** For each meeting attendee: role history, tenure, public talks or posts, and — the useful inference — what their career path suggests they'll care about. An ex-consultant VP reads differently than a promoted-from-ops VP. (This layer feeds the [influence map](docs/03-discovery/influence-map.md), not just small talk.)
4. **Competitive and incumbent scan.** "What vendors in [category] does [company] currently use or partner with, based on public evidence — case studies, tech blogs, conference talks?" Knowing the incumbent before the call reshapes [your entire loaded-question strategy](docs/03-discovery/loaded-questions.md).
5. **The synthesis prompt.** Feed the outputs back: "Given all of the above, propose three testable hypotheses for why this company is evaluating [category] now, ranked by evidence strength, each with the evidence cited." You'll discard or rewrite at least one — that act of disagreement is where the preparation actually happens.

## The Verification Tax (Pay It)

AI research output is fluent, structured, and intermittently fabricated. The rules:

- **Anything you'll say out loud gets a source.** "I saw in your Q3 call that..." must trace to the actual transcript, because the prospect *was on that call* and will remember what wasn't said. A hallucinated specific, spoken confidently, is a [credibility bankruptcy](docs/01-foundations/technical-trust-gap.md) in the first five minutes.
- **Dates matter.** Models happily serve three-year-old org charts as current. Cross-check people-facts against LinkedIn *today*; executives move constantly.
- **Confidence-mark your notes.** Verified fact / plausible inference / model speculation — three tiers, marked in your [call plan](docs/13-templates/discovery-call-plan.md). It's the difference between "you run Kafka" (say it) and "you probably run Kafka" (ask it).
- **Check your company's AI policy on inputs.** Public-company research is safe ground; pasting a prospect's confidential RFP into a consumer chatbot is not. Know which tools are sanctioned before the deadline week arrives.

> **War Story:** An SE with four first-calls in one week — previously a "skim LinkedIn in the taxi" situation — ran the full stack on each. For a mid-size logistics prospect, the job-posting sweep surfaced something odd: five simultaneous postings mentioning "warehouse management system replacement" — while the meeting request had been about analytics dashboards. The SE's opening hypothesis test: "Before we talk dashboards — I noticed you're hiring heavily around WMS replacement. Is this analytics evaluation connected to that program?" Silence, then the prospect's IT director, smiling: "Nobody outside the building is supposed to know about that program. Yes — the dashboards are phase one." The conversation that followed was about the real, seven-figure program, not the $80K dashboard project. Twenty minutes of directed prompting had found the deal behind the deal.

> **Failure Mode:** The dossier SE. Armed with cheap research, they arrive with fourteen pages of AI-generated company analysis and proceed to *perform* it — narrating the prospect's own business back to them, mistaking accumulated facts for earned insight, asking no genuine questions because the binder already "knows." Research was supposed to buy better questions; instead it purchased a lecture. The prospect learns nothing about the SE except that they have a subscription. Twenty minutes of research that produces one sharp hypothesis beats two hours that produce a briefing book — the deliverable was never the dossier.

**Interview Angle:**
"Walk me through your preparation for a first call with a company you've never heard of."
Strong answers now include AI acceleration *with* a verification layer and a hypothesis as the end product. Weak answers either ignore the tooling entirely (an efficiency red flag in 2026) or describe trusting its output unverified (a judgment red flag at any date).

🟢 **Entry-Level** — AI made research cheap. It made *verified* research merely affordable — and the hypothesis is still handmade.

---
