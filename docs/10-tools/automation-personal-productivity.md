# 10.3 Automation & Personal Productivity

## 10.3.1 Auto-Generating Post-Call Technical Summaries

The [discovery summary that gets read](docs/03-discovery/discovery-output-handoff.md?id=_361-writing-the-discovery-summary-that-gets-read) has a mortal enemy: the calendar. The call ends at 2:55, the next one starts at 3:00, and by Friday the week's five calls have blurred into one soup of half-remembered quotes. Summaries written late are summaries written badly — and increasingly, summaries not written at all.

Transcription plus LLM summarization has changed the economics completely. What used to be a 40-minute synthesis job can now be a 10-minute *review* job. The craft has shifted: from writing summaries to engineering the pipeline that drafts them — and then editing with judgment the machine doesn't have.

---

### The Pipeline

1. **Capture.** Your [revenue-intelligence platform](docs/10-tools/presales-tech-stack.md?id=_1011-revenue-intelligence-gong-chorus) or meeting bot already produces a transcript. (Recording consent and customer-data policy are prerequisites, not footnotes — know what your company permits before building anything.)
2. **Extract with a structured prompt.** Don't ask for "a summary" — you'll get a book report. Ask for *your document's fields*: the [discovery summary template's](docs/13-templates/discovery-summary.md) sections, verbatim. A prompt worth stealing:

   > "From this transcript, extract: (1) every pain statement with the speaker's exact words and any numbers attached; (2) each stakeholder who spoke, their role if stated, and their apparent stance; (3) systems, tools, and vendors mentioned, with context; (4) stated decision criteria or success measures; (5) explicit commitments made by either side, with owners and dates; (6) questions we were asked that we did not fully answer. Quote verbatim wherever possible. Mark anything ambiguous as UNCERTAIN rather than guessing."

3. **Review against your own memory — same day.** The draft is raw material. You verify quotes actually carry the meaning the transcript's punctuation suggests, fix the attribution the diarization scrambled, and add the layer no transcript contains (see below).
4. **Route the outputs.** Internal version to the deal file and [CRM fields](docs/10-tools/presales-tech-stack.md?id=_1014-se-specific-crm-hygiene); external "did I capture this correctly?" version to the champion; action items to whoever owns them. Ten minutes, done while the call is still warm.

### What the Machine Cannot Hear

The transcript records what was said. Your summary's *value* is disproportionately in what wasn't: the [glance exchanged](docs/09-executive-selling/customer-empathy-at-senior-level.md?id=_944-reading-the-room) at the pricing mention, the pause before "yes, we have executive support," the question the CISO asked twice with different words, who went quiet after the integration discussion. This is exactly the layer that distinguishes an SE's summary from a stenographer's — and it evaporates within hours. The automation exists to buy you the ten minutes to write it down, not to excuse you from it. Add a **"Read of the room"** section to every draft, manually, every time.

### Trust, but Verify — Especially Quotes

LLM summarizers paraphrase fluently and confidently, which is precisely the danger: a paraphrase entered into your deal record as a verbatim quote is a small forgery that [compounds](docs/03-discovery/pain-quantification.md?id=_354-documenting-what-you-heard-vs-what-theyll-deny). House rules: anything in quote marks gets checked against the transcript before the summary ships; numbers get double-checked (transcription mishears "fifteen" and "fifty" at the worst possible moments); and hallucinated specifics — the model helpfully "remembering" a date nobody said — are why the UNCERTAIN instruction is in the prompt.

> **War Story:** An SE covering nine active deals built exactly this pipeline in an afternoon — meeting bot, one structured prompt saved as a snippet, a 10-minute calendar block after every call titled "summary or it didn't happen." Two quarters later the compound interest was visible in the deal record: every opportunity had a same-day summary trail, the [business case](docs/13-templates/business-case-one-pager.md) for the biggest deal was assembled almost entirely from already-extracted verbatim quotes with dates attached, and — the moment that sold the whole team on the practice — a prospect's procurement lead challenged "we never said the migration deadline was hard" and received, politely, their own VP's exact sentence with a timestamp. The AE called it the easiest negotiation recovery of his career. The SE's actual writing time per summary: eleven minutes, median.

> **Failure Mode:** The SE who automates the summary and stops *attending* the call — half-listening in meetings because "the bot's got it," then shipping the machine draft unedited because the week got busy. The result is a deal file full of fluent, structured, subtly wrong documents: paraphrases dressed as quotes, stances guessed from politeness, the room's actual temperature absent entirely. Automated summaries are a floor under your documentation, not a substitute for your attention. The moment the draft ships unreviewed, you've replaced your judgment with autocomplete — and the deal record is now confidently lying to everyone who reads it.

**Interview Angle:**
"How do you keep documentation quality high across a heavy call load?"
Strong answers describe an automation pipeline *plus* a same-day human review layer, verbatim-quote discipline, and the non-verbal read the machine can't capture. Weak answers either romanticize manual notes ("I just take good notes") or fully delegate to the tool — the two failure modes, wearing different clothes.

🟡 **Mid-Level** — Automate the transcription, keep the judgment. The machine drafts what was said; only you can record what happened.

---

## 10.3.2 Templating Discovery Questionnaires

Every SE eventually notices they're asking the same thirty questions in every deal — environment, integrations, security posture, volumes, stakeholders, timeline. The tempting conclusion is to stop asking them live and send a questionnaire instead. The correct conclusion is subtler: **template the questions, but be deliberate about which ones deserve a form and which ones deserve a conversation.**

A questionnaire is a tool for collecting *facts*. Discovery is a process for uncovering *meaning*. Confuse the two and you'll efficiently gather data while the deal's actual story walks past you.

---

### The Split: Form Questions vs. Conversation Questions

| Belongs in a questionnaire | Belongs in a live conversation |
|---|---|
| Environment inventory (cloud, versions, regions) | Anything starting with "why" |
| Integration list & auth methods | Pain, cost, and consequence — [the onion](docs/03-discovery/questioning-techniques.md?id=_322-peeling-the-pain-onion) |
| Data volumes, user counts, SLAs | Political landscape, [who actually decides](docs/03-discovery/stakeholder-mapping.md?id=_341-isolating-the-true-economic-buyer) |
| Compliance regimes in scope | What they've tried before and what failed |
| Current tooling & vendors | Anything where the *hesitation* is the answer |

The test: if a wrong or evasive answer would matter, ask it live — forms can't [hear pauses](docs/09-executive-selling/customer-empathy-at-senior-level.md?id=_944-reading-the-room). If the answer is a fact nobody would shade, collect it asynchronously and spend the precious live minutes on the right-hand column. A pre-call questionnaire that clears the left column is what makes a 45-minute call [hypothesis-led](docs/03-discovery/preparation-hypothesis-led-entry.md?id=_312-formulating-the-hypothesis-before-you-ask) instead of inventory-taking.

### Building the Template Set

1. **One core + per-context modules.** A base questionnaire (environment, scale, security basics) plus bolt-on modules by work type — the AI module asks about data pipelines and governance; the migration module asks about the legacy estate and [the integration graveyard](docs/03-discovery/technical-discovery.md?id=_334-identifying-the-hidden-integration-graveyard). Mirror how [your risk questions already branch](docs/02-deal-orchestration/reading-a-deal-before-discovery-starts.md?id=_211-scoring-deal-quality-in-the-first-15-minutes).
2. **Every question earns its place.** For each question, you should be able to say what decision its answer changes — scoping, architecture, [qualification](docs/13-templates/deal-qualification-scorecard.md), or disqualification. Questions that change nothing are homework you're assigning a prospect for free, and prospects notice being assigned homework.
3. **Cap it brutally.** Completion rates fall off a cliff past ~20 questions. If your form needs 60 answers, you're outsourcing discovery, not preparing it — and the prospect who receives it correctly reads "this vendor's process is heavy" as a preview of the implementation.
4. **Pre-fill everything you can.** Public filings, the tech-stack fingerprints in their job postings, [what AI research surfaced](docs/10-tools/ai-tools-in-the-se-workflow.md?id=_1041-using-ai-to-accelerate-pre-call-research) — arrive with half the form already drafted and ask them to *correct* it. "We think you're running Kafka on AKS across two regions — is that right?" earns credibility a blank form never will, and takes five minutes of their time instead of forty.
5. **Route the answers somewhere structural.** The questionnaire's output should land in the [discovery summary](docs/13-templates/discovery-summary.md) and the design doc's assumptions register automatically — a form whose answers die in an inbox attachment collected facts nobody uses.

### The Etiquette Layer

Who fills forms matters as much as what's on them. Send the technical inventory to the *technical contact your champion nominates* — never to the executive sponsor, who reads a 20-question form as a vendor who doesn't value their time. Frame it as preparation, not gating: "so our session focuses on your priorities instead of my inventory questions." And always, visibly, *use* the answers in the next meeting — nothing kills future questionnaire compliance like a call that re-asks what the form already answered.

> **War Story:** An SE team selling into regulated industries kept losing early momentum to a specific pattern: the first two discovery calls consumed entirely by security-and-compliance inventory, with the actual pain conversation never starting until call three — by which point one competitor was already demoing. The fix was a compliance pre-questionnaire, sent through the champion after the intro call: nineteen questions, half pre-filled from public certifications and the prospect's own trust page, returnable in fifteen minutes. First live call, the SE opened with: "Your team's answers put you in the strictest tier — so I'm going to skip the basics and show you the two controls that tier actually turns on." Deals in that vertical reached demo one full call earlier on average, and — unexpectedly — the pre-filled forms became a credibility signal prospects mentioned unprompted: *these people did their homework before asking for ours.*

> **Failure Mode:** The questionnaire that ate discovery. The team's form grows a question with every deal post-mortem — "we should have asked about X!" — until it's a 74-item audit that prospects delegate to an intern, answer minimally, or quietly ignore. Worse, the SEs start treating a completed form as *completed discovery*, walking into demos armed with facts and no meaning: they know the Kafka version and not the political landscape, the user count and not the compelling event. The form was supposed to clear the runway for the conversation. Instead it replaced it — and form-fed deals demo well, quantify nothing, and [die in the business case](docs/03-discovery/pain-quantification.md?id=_351-translating-its-slow-into-dollar-metrics).

**Interview Angle:**
"What's your discovery preparation process?"
Strong answers show the split — asynchronous fact collection (pre-filled where possible), live conversation reserved for pain, politics, and why — plus evidence they cap and prune their templates. Weak answers either wing it entirely or proudly describe a comprehensive questionnaire, which is the same mistake in the opposite direction.

🟢 **Entry-Level** — Forms collect facts; conversations collect truth. Template the first so you never waste a live minute on it, and protect the second like the deal depends on it — because it does.

---

## 10.3.3 Building a Personal Snippet Library

Track a week of your own output honestly and a pattern emerges: you are writing the same twenty things over and over, slightly worse each time you're rushed. The follow-up email skeleton. The explanation of your data-residency model. The answer to "how does your licensing work with SSO?" The POC kickoff agenda. The polite [redirect of a pricing question](docs/03-discovery/preparation-hypothesis-led-entry.md?id=_314-the-pre-flight-ae-alignment-checklist). Each written from scratch, each costing five to twenty minutes, each a small quality lottery depending on the day's energy.

The personal snippet library is the compounding fix: every answer you craft well once becomes an asset you deploy in seconds forever. It is the cheapest productivity system in presales and — because quality compounds too — quietly one of the biggest credibility systems.

---

### What Belongs in the Library

| Category | Examples |
|---|---|
| Deal-motion emails | Follow-up skeleton, [summary-for-confirmation](docs/13-templates/discovery-summary.md) framing, meeting-request-with-agenda, [the exit note](docs/09-executive-selling/negotiation-for-ses.md?id=_934-walking-away-with-the-relationship-intact) |
| Hard-question answers | Your best-ever articulation of security posture, scalability story, licensing model, [roadmap-question deflection](docs/06-poc/structuring-the-pov-proof-of-value.md?id=_626-excluding-roadmap-features-from-the-poc) |
| Objection responses | The written form of your [objection dictionary](docs/11-metrics/personal-development-system.md?id=_1133-curating-your-personal-objection-dictionary) — competitor comparisons, "why not build it ourselves," the works |
| Process scaffolds | POC kickoff agenda, [pre-flight checklist](docs/05-demo-excellence/demo-environment-logistics.md?id=_551-the-30-minute-pre-flight-checklist), demo-follow-up structure, escalation email shapes |
| Technical explainers | The three-paragraph version of each architecture concept you're asked monthly, [per-audience variants](docs/04-solution-design/technical-documentation-that-moves-deals.md?id=_432-translating-api-specs-for-the-cfo-audience) |
| Prompts | Your tuned [summarization](docs/10-tools/automation-personal-productivity.md?id=_1031-auto-generating-post-call-technical-summaries) and [research](docs/10-tools/ai-tools-in-the-se-workflow.md?id=_1041-using-ai-to-accelerate-pre-call-research) prompts — prompts are snippets |

The admission test is simple: **the third time you write something, it goes in the library.** Not the first (might be a one-off), not after deliberation (you'll never do it) — the third time, mechanically.

### Mechanics That Make It Stick

1. **Frictionless retrieval or death.** The library lives wherever expansion is instant — a text expander (Espanso, TextExpander, Alfred), your notes tool with hotkeys, even a well-organized markdown repo with fuzzy search. If deploying a snippet takes longer than 10 seconds, you'll stop deploying them within a month.
2. **Snippets are skeletons, not letters.** Every snippet ships with `[PLACEHOLDERS]` for the prospect's name, pain, and specifics — and a hard personal rule that no snippet leaves your machine without customization. The library saves you the *structure and the phrasing you already perfected*; the deal-specific 20% is still handcrafted, every time.
3. **Version the good ones upward.** When a snippet's answer wins — the security explanation that visibly landed, the objection response that ended the objection — note it. Your library should evolve toward your *best* performances, not your average ones. This is the personal-scale version of [the team's benchmark library](docs/05-demo-excellence/demo-measurement-improvement.md?id=_564-the-demo-benchmark-library).
4. **Prune quarterly.** Product changes rot snippets exactly like they [rot RFP libraries](docs/10-tools/presales-tech-stack.md?id=_1013-rfp-automation-loopio-seismic-responsive), just smaller. A quarterly half-hour pass — delete the dead, update the drifted — keeps the library trustworthy enough to use without re-verifying, which was the whole point.
5. **Share the greatest hits.** The snippets that survive a year of your own use are enablement content the [team playbook](docs/12-scaling/enablement-knowledge-systems.md?id=_1221-building-a-playbook-that-doesnt-become-shelfware) wants. Contributing them is also how [internal brand](docs/01-foundations/senior-se-identity.md?id=_132-building-your-internal-brand) gets built — the SE whose phrasings everyone else deploys.

> **War Story:** Two SEs on the same team, same product, same territory tier. One answered every security-review question from scratch — thoughtful, accurate, forty-five minutes each time, quality varying with the hour of the day. The other had spent a year banking every hard answer she'd ever polished: her data-residency explanation had been through eleven revisions across eleven deals and read like documentation the company wished it had. When a strategic prospect's InfoSec team sent both vendors' teams (it was a partner-led deal with two SE orgs involved) the same 40-question deep-dive with a 48-hour turnaround, her response went out in three hours, fully customized; the scratch-writer's took two days and shipped with a wrong version number in question 31. The prospect's security lead specifically praised the first response's clarity in the eval readout. Eleven revisions versus one tired evening — that's not a talent gap. It's compound interest versus starting over.

> **Failure Mode:** The copy-paste SE. The library grows, the customization rule erodes, and one day a prospect receives a follow-up email containing another company's name — or worse, an answer describing a capability configuration that was true for the *last* deal and materially false for this one. One pasted artifact like that costs more trust than the library saved in a quarter, because it reveals the mechanism: *you are receiving templated attention.* The library's entire license to exist is that the recipient can never tell. The moment efficiency becomes visible, it reads as indifference.

**Interview Angle:**
"How do you maintain response quality when you're covering many deals at once?"
Strong answers describe a deliberate reuse system — captured best answers, placeholder discipline, pruning — plus the customization rule. Weak answers claim heroic memory ("I just know our story cold") or admit to ad-hoc searching through their own sent mail, which is a snippet library with none of the benefits.

🟢 **Entry-Level** — Never write anything excellent only once. The third time you type it, it becomes infrastructure.

---

## 10.3.4 Automating Security Questionnaire Pre-Population

Somewhere between the technical win and the signature sits the great filter: the security questionnaire. SIG, CAIQ, VSA, or the prospect's homegrown 400-row spreadsheet — they arrive late in the deal, they're due in days, they're 80% identical to the last twelve you answered, and they land on the SE's desk because nobody else can answer row 217. Handled manually, they're a week of expert time spent retyping known facts. Handled badly, they [stall the close plan](docs/13-templates/mutual-close-plan.md) at the exact moment momentum matters most.

This is the most automatable document in presales — precisely *because* it's the one where the answers must never be improvised.

---

### The Architecture: One Source of Truth, Many Renderings

The naive automation is a folder of old questionnaires to copy from. The correct one is a **canonical answer base**: every security fact your company can attest — controls, certifications, encryption posture, subprocessors, data flows, incident history policy — stored once, owned by named people, dated, and mapped to the standard frameworks (SIG/CAIQ question IDs, SOC 2 criteria, [ISO clauses](docs/08-technical-depth/security-compliance.md?id=_841-soc2-iso27001-fedramp)). Incoming questionnaires get matched against the base — by the [RFP platform's](docs/10-tools/presales-tech-stack.md?id=_1013-rfp-automation-loopio-seismic-responsive) engine, an LLM matcher, or both — and pre-populate to 70–85%. The remaining rows are the ones that deserve human minutes.

The matching layer is where LLMs genuinely shine: security questionnaires ask the same fifty things in five hundred phrasings, and semantic matching ("Describe your approach to cryptographic key lifecycle management" → your KMS answer) is exactly the problem class. But match ≠ answer — see the review gate below.

### The Non-Negotiable Review Gate

A security questionnaire is not marketing collateral. It's a **representation the customer will attach to the contract** — answers get warranted, audited against, and litigated over. Which sets the rules:

1. **Every auto-filled answer gets human eyes** — the SE for accuracy-in-context, and security/compliance sign-off for anything the matcher flagged as low-confidence or that touches legal exposure (data residency, breach notification, subprocessor lists).
2. **"It matched" is not "it's true here."** Your canonical answer describes the standard deployment. *This* prospect's deployment — their region, their tier, their [negotiated architecture](docs/13-templates/solution-design-document.md) — may differ, and the questionnaire binds you to this deal's reality, not the median one.
3. **Aspirational answers are prohibited.** "Yes" to a control that's on the roadmap is not optimism; it's a misrepresentation with a paper trail, discovered at the worst possible time — their audit of your production environment. The honest form exists and costs less than it looks: "Not currently; compensating control X; planned Q2." Security reviewers [respect a candid no](docs/07-commercial-influence/navigating-procurement-legal.md?id=_742-security-reviews-infosec-questionnaires-legal-red-line) and hunt suspiciously perfect yes-columns for sport.
4. **The base has expiry dates.** Every canonical answer carries an owner and a review-by date, and expired answers block auto-fill until re-verified — the [same regime that saves RFP libraries](docs/10-tools/presales-tech-stack.md?id=_1013-rfp-automation-loopio-seismic-responsive), with higher stakes.

### The Strategic Layer: Get Ahead of the Questionnaire

The best questionnaire turnaround is the one that never starts from zero. Maintain a **proactive security package** — SOC 2 report, pen-test summary, architecture one-pager, pre-filled CAIQ — and offer it the moment security review appears on the [close plan's horizon](docs/13-templates/mutual-close-plan.md), *before* the prospect's 400-row spreadsheet ships. A meaningful fraction of security teams will accept the standard package plus a delta-conversation instead of their full custom questionnaire — collapsing a three-week gate into a one-hour call. You'll never know which fraction unless you offer.

> **War Story:** A vendor's average security-questionnaire turnaround was nine business days — all of it senior SE and security-engineer time — and two deals in one quarter had slipped past their signature dates waiting on it. The fix took one quarter to build: a canonical base of ~340 answers extracted from the previous two years of responses, each assigned an owner in security engineering and an expiry; an LLM matching layer; and a review workflow with confidence thresholds. First live run: a 380-question financial-services questionnaire pre-populated to 81% in an afternoon, full reviewed response out in *two days* — including one auto-match the SE's review caught and corrected, where the canonical multi-tenancy answer didn't apply to this prospect's single-tenant contract. The prospect's security lead asked, genuinely puzzled, how a company that size had turned it around faster than vendors ten times bigger. That question, the AE noted, was worth more than the two days saved.

> **Failure Mode:** The green-column machine. Automation makes it effortless to produce questionnaires where everything matches, everything's "Yes — fully implemented," and no human with context read row 217 — where the matcher confidently pasted the answer about *encryption at rest* into a question about *encryption of backups in transit*. The customer's security team finds one such mismatch, and their operating assumption flips from "this vendor is organized" to "this vendor's answers are unread autocomplete — audit everything." One unreviewed row can convert a two-week security gate into a two-month adversarial one. Automation that removes the review gate hasn't sped up the questionnaire; it's pre-loaded the delay.

**Interview Angle:**
"A 400-question security questionnaire lands with a one-week deadline. Walk me through your process."
Strong answers describe a maintained answer base, automated matching, a tiered human-review gate, and the proactive-package counter-offer — plus the hard line on aspirational answers. Weak answers describe heroic manual effort, or automation with no review, which are the slow and fast versions of the same failure.

🟡 **Mid-Level** — Security questionnaires are the one document where the answers already exist and must never be improvised. Automate the retrieval; never the accountability.
