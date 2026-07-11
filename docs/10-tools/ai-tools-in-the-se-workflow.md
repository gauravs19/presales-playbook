# 10.4 AI Tools in the SE Workflow

## 10.4.1 Using AI to Accelerate Pre-Call Research

[Pre-call research](docs/03-discovery/preparation-hypothesis-led-entry.md?id=_311-pre-call-linkedin-earnings-transcript-recon) has always been the highest-ROI, lowest-glamour work in presales — and the first thing sacrificed to a busy calendar. LLMs with web access have changed its economics by an order of magnitude: the two hours of reading earnings transcripts, scanning job postings, and cross-referencing LinkedIn profiles compresses into twenty minutes of directed prompting plus verification. The SEs who exploit this don't do *less* research; they do research that was previously unaffordable for every call, not just the big ones.

The discipline that survives the tooling change: research exists to produce a [testable hypothesis](docs/03-discovery/preparation-hypothesis-led-entry.md?id=_312-formulating-the-hypothesis-before-you-ask), not a dossier. AI accelerates the gathering. The hypothesis is still yours.

---

### The 20-Minute AI Research Stack

Run these as separate directed prompts, not one mega-query:

1. **Business context sweep.** "Summarize [company]'s last two earnings calls / annual report: stated strategic priorities, named technology initiatives, cost pressures, and any mention of [your problem domain]. Quote exact phrases with sources." Public companies narrate their pain quarterly; private ones leak it through press releases and executive interviews.
2. **Tech-stack fingerprinting.** "Based on [company]'s current engineering job postings, what can be inferred about their stack, cloud provider, and current initiatives?" Job posts are involuntary architecture disclosures — a posting for "Senior Engineer, Kafka migration" is a discovery answer you didn't have to ask for.
3. **Attendee mapping.** For each meeting attendee: role history, tenure, public talks or posts, and — the useful inference — what their career path suggests they'll care about. An ex-consultant VP reads differently than a promoted-from-ops VP. (This layer feeds the [influence map](docs/03-discovery/stakeholder-mapping.md?id=_344-the-org-chart-you-draw-vs-the-one-that-matters), not just small talk.)
4. **Competitive and incumbent scan.** "What vendors in [category] does [company] currently use or partner with, based on public evidence — case studies, tech blogs, conference talks?" Knowing the incumbent before the call reshapes [your entire loaded-question strategy](docs/03-discovery/stakeholder-mapping.md?id=_343-loading-questions-to-expose-competitor-weaknesses).
5. **The synthesis prompt.** Feed the outputs back: "Given all of the above, propose three testable hypotheses for why this company is evaluating [category] now, ranked by evidence strength, each with the evidence cited." You'll discard or rewrite at least one — that act of disagreement is where the preparation actually happens.

### The Verification Tax (Pay It)

AI research output is fluent, structured, and intermittently fabricated. The rules:

- **Anything you'll say out loud gets a source.** "I saw in your Q3 call that..." must trace to the actual transcript, because the prospect *was on that call* and will remember what wasn't said. A hallucinated specific, spoken confidently, is a [credibility bankruptcy](docs/01-foundations/what-is-presales-redefined.md?id=_112-the-technical-trust-gap-why-it-costs-deals) in the first five minutes.
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

## 10.4.2 AI-Assisted RFP Drafting

If [RFP automation platforms](docs/10-tools/presales-tech-stack.md?id=_1013-rfp-automation-loopio-seismic-responsive) industrialized answer *retrieval*, LLMs industrialized answer *composition* — drafting responses in your company's voice, adapting a canonical answer to this prospect's terminology, and turning a bullet-point capability list into flowing prose at zero marginal cost. Teams now routinely draft 80% of an RFP response in a day.

Which moves the bottleneck — and the differentiation — entirely to judgment. When every vendor's response is fluently written, fluent writing is worth nothing. What wins is what was always underneath: [choosing the right bids](docs/13-templates/rfp-response-matrix.md), knowing which twenty questions decide the evaluation, and saying true things a competitor can't say. AI amplifies a good RFP strategy and *launders* a bad one into professional-looking failure.

---

### Where AI Genuinely Helps

1. **Adaptation, not invention.** The highest-value prompt pattern takes your *verified* canonical answer plus this deal's context: "Rewrite this approved answer for a hospital-network audience; use their term 'clinical systems' instead of 'core applications'; keep every factual claim identical; 150 words." Facts stay anchored; the register personalizes. This is the safe zone — the model is styling truth, not generating claims.
2. **First-draft prose from SME bullets.** Your security engineer gives you six bullets; the model gives you the paragraph; the engineer approves the paragraph. Twenty minutes of expert time becomes five, and the expert stays the author of record.
3. **Compliance-language hygiene.** "Flag any sentence in this response that overpromises, commits to dates, or uses absolute terms like 'always/never/guaranteed'" — an LLM is a tireless reviewer of exactly the language that [legal will red-line](docs/07-commercial-influence/proposal-architecture.md?id=_734-technical-writing-that-eliminates-procurement-friction) or that will haunt the contract.
4. **Reading the RFP itself.** Feed the document (policy permitting) and extract: scoring weights, mandatory versus scored requirements, [fingerprints of a competitor's authorship](docs/07-commercial-influence/rfp-strategy.md?id=_722-ghost-writing-specs-before-the-rfp-is-released), internally contradictory requirements worth a clarification question. Ten minutes of extraction that used to be an afternoon of highlighting.

### The Rules That Keep It Safe

- **The model never states a capability.** It rephrases capabilities *you gave it*. Every factual claim in the output must trace to an approved source — the canonical library, the SME's bullets, the [design doc](docs/13-templates/solution-design-document.md). An LLM asked "how does our product handle X?" will answer, fluently, whether or not it knows — and an RFP is [a representation with contract gravity](docs/10-tools/automation-personal-productivity.md?id=_1034-automating-security-questionnaire-pre-population).
- **Differentiator questions get human authorship.** The 15–20 questions where the bid is won deserve your best thinking, [strategic-yes structure](docs/07-commercial-influence/rfp-strategy.md?id=_723-answering-yes-strategically), and deal-specific proof. Draft them by hand; let AI *edit* for clarity, never originate.
- **De-slop the voice.** Unedited LLM prose has a recognizable perfume — "seamlessly leverages," "robust and scalable," symmetrical paragraph triads — and evaluators reading forty responses have learned the scent. Edit toward your company's actual voice, keep the occasional short blunt sentence, cut every adjective that isn't doing work.
- **Confidentiality gates.** The RFP document and your response both carry NDA weight. Sanctioned tools only, per your company's AI policy — a leaked-training-data story involving a prospect's RFP is a category of incident no win rate survives.

### The Strategic Trap Nobody Prices

AI collapsed the *cost* of responding — which quietly destroys the discipline that scarcity used to enforce. When a response cost 100 hours, [bid/no-bid decisions](docs/07-commercial-influence/rfp-strategy.md?id=_721-deciding-when-to-refuse-an-rfp) were forced; at 15 hours, "why not respond to everything?" feels rational. It isn't: your win rate on poorly-qualified RFPs didn't improve because drafting got cheap — you've just automated the production of polished losses, and every one still consumes review cycles, SME attention, and pipeline credibility. Hold the triage gate *harder* now that the slope below it is frictionless.

> **War Story:** A mid-market vendor's bid team, newly LLM-equipped, hit a 40-question technical RFP with a 5-day deadline — previously a decline-by-default scenario. The play: the SE spent day one entirely on triage and strategy (win probability: decent; two differentiator questions identified; one trap question written around the incumbent's architecture). Days two and three: canonical answers adapted by AI, SME bullets converted to prose, everything routed through review. Day four: the SE hand-wrote the two differentiators and the trap-question reframe, then ran the overpromise-flagging prompt across the full document — it caught a generated sentence claiming "zero-downtime upgrades in all configurations," which was true in *most*. They shipped on day five and made the shortlist; the eval feedback specifically cited the honesty of a caveated answer the flagging pass had produced. The AI wrote most of the words. The five that mattered — "in most configurations, except..." — were the review's.

> **Failure Mode:** The full-auto response. RFP in, PDF out, nobody with product knowledge read page 30 — where the model, pattern-matching from marketing material, confidently described a federation capability the product doesn't have. The prospect shortlists them *because* of page 30, discovers the truth in the demo, and the meeting's tone shifts from evaluation to cross-examination of everything else the document said. An AI-drafted overclaim isn't a typo; it's a seed planted at the exact depth where it germinates during the live evaluation. Speed you didn't spend on review wasn't saved — it was borrowed, at demo-day interest rates.

**Interview Angle:**
"How do you use AI in RFP responses, and where do you draw the line?"
Strong answers describe adaptation-not-invention, human authorship of differentiators, systematic overclaim review, and *tightened* bid discipline. Weak answers celebrate throughput ("we respond to 3× more RFPs now") — the metric that goes up when judgment goes down.

🟡 **Mid-Level** — AI made every vendor's RFP response readable. Yours has to be true, chosen, and aimed — and those three stayed manual.

---

## 10.4.3 Generating Demo Data, Scripts & Responses With AI

Three of the most time-hungry demo-preparation chores — plausible data content, narrative scripting, and anticipating the Q&A — have become dramatically cheaper with LLMs in the workflow. Used with intent, AI turns a generic demo into a prospect-skinned one in an evening. Used lazily, it generates the same synthetic gloss for you as for every competitor, and the audience — who now reads AI output daily — can tell.

The organizing principle: **AI generates volume and variation; you keep authorship of story and truth.**

---

### Data Content at Industry Fidelity

[Scripted data generation](docs/10-tools/demo-environment-management.md?id=_1023-scripting-dummy-data-generation) handles structure — volumes, distributions, referential integrity. What it historically couldn't produce is *content* that reads native: five hundred support tickets that sound like a telecom's actual queue, product reviews in a retailer's actual customer voice, work-order notes that a plant engineer would nod at. That's now a prompt: "Generate 200 support tickets for a mid-size logistics company: realistic subject lines, severity mix skewed 70/20/10, recurring themes around EDI failures and customs documentation, occasional typos and shorthand." Feed the output through your deterministic seeder so the *shapes* stay reproducible while the *text* reads human. Keep the [narrative fixtures](docs/13-templates/demo-storyboard.md) hand-authored — the record your story pivots on is a protagonist, not filler.

### Scripts and Storyboards: Draft, Then Disagree

- **Storyboard acceleration.** Feed the model your [discovery summary](docs/13-templates/discovery-summary.md) and the storyboard template: "Propose a 3-scene demo narrative mapping these discovered pains to these capabilities, with a tension/relief beat per scene." The draft will be 70% right and reliably generic at the emotional beats — its value is that critiquing a draft is faster than facing a blank page. The scene you *rewrite in disagreement* is usually the one that wins the demo.
- **Talk-track variants.** "Rewrite this demo narration for a CFO audience / for a hands-on engineering audience / 40% shorter" — cheap altitude-shifting for [multi-stakeholder rooms](docs/09-executive-selling/customer-empathy-at-senior-level.md?id=_943-reframing-features-as-career-saving-decisions).
- **The red-team rehearsal.** The most underused prompt in demo prep: "You are a skeptical principal architect at [prospect] who prefers [competitor]. Here's my demo flow — attack it. Interrupt where they would, object where the flow is weakest." Twenty minutes of adversarial rehearsal surfaces the [objections](docs/05-demo-excellence/handling-live-objections.md?id=_532-diffusing-missing-feature-attacks) you'd otherwise meet live, and drafts your [hold-and-validate](docs/05-demo-excellence/handling-live-objections.md?id=_531-the-hold-and-validate-method) responses while the stakes are zero.

### Live-Deal Responses: The Assist Line

Between meetings, AI is a legitimate drafting partner for follow-ups, objection responses, and technical explanations — subject to the [snippet-library customization rule](docs/10-tools/automation-personal-productivity.md?id=_1033-building-a-personal-snippet-library): nothing ships unedited, and every factual claim traces to something you know true. *During* meetings is a different country: typing a prospect's hard question into a chatbot mid-call and reading back the answer is (a) visible on your face and your eyes, (b) a violation of the basic contract that they're talking to *you*, and (c) one hallucinated specific away from disaster with no review gate. The line is bright: AI prepares you for the room; [in the room, it's you](docs/10-tools/ai-tools-in-the-se-workflow.md?id=_1044-the-ethical-line-what-you-should-never-let-ai-do).

### Verification, Because It's Still an LLM

Generated ticket content can accidentally include real company names or real-sounding personal data — scan before seeding. Generated technical narration can drift into capabilities you don't have — every product claim in an AI-drafted script gets checked against the product, not against the marketing site the model may have memorized. And generated industry color ("as every logistics operator knows...") can be subtly wrong in ways that only your audience would catch — which is the worst possible reviewer to catch it.

> **War Story:** An SE preparing for a demo to a European rail-freight operator — an industry the SE had never touched — spent one evening on a three-prompt sequence: first, industry immersion ("explain rail freight operations, key roles, jargon, and daily pain points, with the caveats of what varies by country"); second, data content generation (consignment records, delay codes, terminal names — checked against two public industry glossaries); third, the red-team rehearsal as a skeptical operations director. The demo opened with a dashboard showing *wagon dwell time at Hamburg-Maschen* — a metric and location the audience lived in daily. The operations director's first comment: "Finally, a vendor who didn't show us retail data with the labels changed." The deal advanced; the SE's actual rail expertise at demo time was eleven days old. The AI didn't know rail. It compressed the *learning* of rail into an evening — the SE still did the knowing.

> **Failure Mode:** The uncanny-valley demo. Every element generated, nothing verified: data whose "industry terminology" is subtly off (the model called them "shipments"; this industry says "consignments" — [the exact thing discovery vocabulary exists for](docs/13-templates/discovery-summary.md)), a talk track with the unmistakable LLM cadence, and Q&A answers rehearsed from hallucinated product claims. Each flaw is small; together they produce a demo that feels like it was made *about* the prospect by someone who never met them — because it was. The audience can't always name what's wrong, but they trust their unease. Generation without grounding doesn't scale your preparation; it scales your distance from the customer.

**Interview Angle:**
"How has AI changed your demo preparation?"
Strong answers show specific leverage points (content generation, red-team rehearsal, altitude variants) each paired with its verification step, and a bright line at live meetings. Weak answers are either abstinence ("I don't trust it") or dependence ("it basically writes my demos") — the interviewer is listening for *authorship retained*.

🟡 **Mid-Level** — Let the machine generate the five hundred tickets. The one record the story turns on, and every word you'll say out loud — those stay yours.

---

## 10.4.4 The Ethical Line — What You Should Never Let AI Do

Every previous chapter in this section argues for more AI in the SE workflow. This one is the counterweight, and it exists because the failure modes of AI in live deals aren't productivity failures — they're *integrity* failures, and integrity is the SE's entire stock in trade. [Technical trust](docs/01-foundations/what-is-presales-redefined.md?id=_112-the-technical-trust-gap-why-it-costs-deals) takes months to build and one discovered deception to destroy; AI simply industrializes the speed at which the deception can be manufactured.

The test that organizes everything below: **would you be comfortable if the prospect could see exactly how this was produced?** Research assistance, drafting, rehearsal — nobody flinches. The items on this page fail that test.

---

### The Never List

1. **Never let AI answer live questions you can't stand behind.** Reading a chatbot's answer to a prospect's technical question, in real time, as if it were your knowledge — this is the bright line from [the demo-scripts chapter](docs/10-tools/ai-tools-in-the-se-workflow.md?id=_1043-generating-demo-data-scripts-responses-with-ai), and it's worth restating as ethics rather than technique: the prospect is paying attention to *you* because your judgment is the product. An answer you can't verify isn't your judgment; delivering it as such is impersonation. The honest version costs nothing: "I want to give you the precise answer — I'll confirm and send it today." [The pause and the deferral read as senior](docs/09-executive-selling/owning-the-cxo-room.md?id=_913-the-3-second-pause); the teleprompter reads as fraud the day it's discovered.
2. **Never fabricate evidence.** No AI-generated "customer quotes," no synthetic benchmark numbers presented as measured, no invented reference scenarios, no doctored screenshots of results the product didn't produce. This was always fraud; AI just made it effortless — and made *checking* for it routine on the buyer's side. Every number in your [business case](docs/13-templates/business-case-one-pager.md) traces to their data or your tested product, or it doesn't ship.
3. **Never feed confidential prospect material into unsanctioned tools.** The RFP under NDA, their architecture diagrams, the security review, recorded calls — these belong only in tools your company has contractually vetted. "The model provider probably doesn't train on API traffic" is not a sentence you want to say in a breach postmortem. Know your company's policy; where it's silent, ask before pasting.
4. **Never let AI impersonate you to customers.** Auto-sent "personal" follow-ups the sender never read, AI-answered customer emails in your voice, bots attending meetings as you — the moment a customer discovers one artifact of fake attention, [every past artifact of real attention is repriced](docs/10-tools/automation-personal-productivity.md?id=_1033-building-a-personal-snippet-library). Drafting is fine. *Unreviewed sending* is the violation.
5. **Never use AI to reconstruct what NDAs and ethics walls forbid.** "Summarize everything leakable about [competitor]'s roadmap" or laundering a previous employer's confidential knowledge through a model doesn't change what it is. The tool is new; the line isn't.

### Why This Is Strategy, Not Just Scruple

Buying organizations are deploying AI-detection instincts faster than vendors are deploying AI: procurement teams now spot template-generated responses, evaluation committees compare notes on "vendor slop," and security teams ask *directly* what AI touched the questionnaire. In that environment, verified human judgment is becoming the scarce, differentiating asset — the thing the [vendor-fatigued buyer](docs/09-executive-selling/customer-empathy-at-senior-level.md?id=_942-validating-vendor-fatigue-before-it-poisons-the-deal) is starving for. Every shortcut on this page trades that asset for minutes. It's a bad trade even before anyone gets caught.

There's an internal version too: the SE who leans on AI for every answer stops *building* the judgment the answers were supposed to reflect. Reps skipped are [competence not compounded](docs/00-start-here/how-to-learn-from-senior-ses.md?id=_043-reverse-engineering-a-senior-ses-deal-approach). The tool should be compressing your learning curve, not replacing the climb.

### What This Page Is Not

It's not abstinence. The SE who refuses AI entirely is choosing artisanal slowness in a market that no longer pays for it, and this playbook spends three chapters saying so. The position is narrower and harder: **total leverage in preparation, total authorship in performance.** Machines draft, simulate, summarize, and generate — behind you. In front of the customer, every claim, every artifact, and every apparent moment of attention is real.

> **War Story:** A prospect's CTO, mid technical deep-dive, asked a question about failure semantics under a specific partition scenario. The SE — who had an AI assistant open on the second monitor like half the industry — visibly stopped, thought, and said: "I believe it's X, but the honest answer is I'm not certain about the ordering guarantee in that exact case, and I'd rather check than guess. You'll have it in writing today." The CTO later told the champion that this was the moment the vendor won: "The last three vendors answered every question instantly and perfectly. Nobody knows everything instantly. Either they rehearsed my questions — or something was answering for them. Your guy *thought*." The follow-up email, drafted with AI assistance from verified docs and reviewed line by line, arrived in four hours. Both halves of that story are the point.

> **Failure Mode:** The slow slide, not the dramatic breach. It starts with AI drafting follow-ups (fine), then sending a few unread on a busy Friday (risky), then answering a prospect's emailed technical question fully-auto because the last ten drafts were accurate (the line, crossed quietly). Month four: a prospect replies to "your" email pointing out it confidently describes a feature configuration that doesn't exist, and cc's the economic buyer. There was never a decision to deceive — just a review gate that eroded one busy week at a time. Ethics in AI-assisted selling isn't a stance you declare; it's a checklist you keep running when you're tired.

**Interview Angle:**
"Where do you draw the line on AI use in customer-facing work?"
Strong answers have an actual line — stated crisply, with the reasoning (authorship, verifiability, confidentiality) and evidence of a personal review discipline. Weak answers are vibes: "I use it responsibly." The follow-up "tell me about a time you chose *not* to use it" separates the two instantly.

🔵 **Senior** — Let AI do everything behind you and nothing instead of you. The customer is buying your judgment; make sure that's what they're getting.
