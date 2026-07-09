# Templating Discovery Questionnaires

Every SE eventually notices they're asking the same thirty questions in every deal — environment, integrations, security posture, volumes, stakeholders, timeline. The tempting conclusion is to stop asking them live and send a questionnaire instead. The correct conclusion is subtler: **template the questions, but be deliberate about which ones deserve a form and which ones deserve a conversation.**

A questionnaire is a tool for collecting *facts*. Discovery is a process for uncovering *meaning*. Confuse the two and you'll efficiently gather data while the deal's actual story walks past you.

---

## The Split: Form Questions vs. Conversation Questions

| Belongs in a questionnaire | Belongs in a live conversation |
|---|---|
| Environment inventory (cloud, versions, regions) | Anything starting with "why" |
| Integration list & auth methods | Pain, cost, and consequence — [the onion](docs/03-discovery/pain-onion.md) |
| Data volumes, user counts, SLAs | Political landscape, [who actually decides](docs/03-discovery/finding-economic-buyer.md) |
| Compliance regimes in scope | What they've tried before and what failed |
| Current tooling & vendors | Anything where the *hesitation* is the answer |

The test: if a wrong or evasive answer would matter, ask it live — forms can't [hear pauses](docs/09-executive-selling/reading-the-room.md). If the answer is a fact nobody would shade, collect it asynchronously and spend the precious live minutes on the right-hand column. A pre-call questionnaire that clears the left column is what makes a 45-minute call [hypothesis-led](docs/03-discovery/hypothesis-led-discovery.md) instead of inventory-taking.

## Building the Template Set

1. **One core + per-context modules.** A base questionnaire (environment, scale, security basics) plus bolt-on modules by work type — the AI module asks about data pipelines and governance; the migration module asks about the legacy estate and [the integration graveyard](docs/03-discovery/integration-graveyard.md). Mirror how [your risk questions already branch](docs/02-deal-orchestration/scoring-deal-quality.md).
2. **Every question earns its place.** For each question, you should be able to say what decision its answer changes — scoping, architecture, [qualification](docs/13-templates/deal-qualification-scorecard.md), or disqualification. Questions that change nothing are homework you're assigning a prospect for free, and prospects notice being assigned homework.
3. **Cap it brutally.** Completion rates fall off a cliff past ~20 questions. If your form needs 60 answers, you're outsourcing discovery, not preparing it — and the prospect who receives it correctly reads "this vendor's process is heavy" as a preview of the implementation.
4. **Pre-fill everything you can.** Public filings, the tech-stack fingerprints in their job postings, [what AI research surfaced](docs/10-tools/ai-for-pre-call-research.md) — arrive with half the form already drafted and ask them to *correct* it. "We think you're running Kafka on AKS across two regions — is that right?" earns credibility a blank form never will, and takes five minutes of their time instead of forty.
5. **Route the answers somewhere structural.** The questionnaire's output should land in the [discovery summary](docs/13-templates/discovery-summary.md) and the design doc's assumptions register automatically — a form whose answers die in an inbox attachment collected facts nobody uses.

## The Etiquette Layer

Who fills forms matters as much as what's on them. Send the technical inventory to the *technical contact your champion nominates* — never to the executive sponsor, who reads a 20-question form as a vendor who doesn't value their time. Frame it as preparation, not gating: "so our session focuses on your priorities instead of my inventory questions." And always, visibly, *use* the answers in the next meeting — nothing kills future questionnaire compliance like a call that re-asks what the form already answered.

> **War Story:** An SE team selling into regulated industries kept losing early momentum to a specific pattern: the first two discovery calls consumed entirely by security-and-compliance inventory, with the actual pain conversation never starting until call three — by which point one competitor was already demoing. The fix was a compliance pre-questionnaire, sent through the champion after the intro call: nineteen questions, half pre-filled from public certifications and the prospect's own trust page, returnable in fifteen minutes. First live call, the SE opened with: "Your team's answers put you in the strictest tier — so I'm going to skip the basics and show you the two controls that tier actually turns on." Deals in that vertical reached demo one full call earlier on average, and — unexpectedly — the pre-filled forms became a credibility signal prospects mentioned unprompted: *these people did their homework before asking for ours.*

> **Failure Mode:** The questionnaire that ate discovery. The team's form grows a question with every deal post-mortem — "we should have asked about X!" — until it's a 74-item audit that prospects delegate to an intern, answer minimally, or quietly ignore. Worse, the SEs start treating a completed form as *completed discovery*, walking into demos armed with facts and no meaning: they know the Kafka version and not the political landscape, the user count and not the compelling event. The form was supposed to clear the runway for the conversation. Instead it replaced it — and form-fed deals demo well, quantify nothing, and [die in the business case](docs/03-discovery/pain-quantification.md).

**Interview Angle:**
"What's your discovery preparation process?"
Strong answers show the split — asynchronous fact collection (pre-filled where possible), live conversation reserved for pain, politics, and why — plus evidence they cap and prune their templates. Weak answers either wing it entirely or proudly describe a comprehensive questionnaire, which is the same mistake in the opposite direction.

🟢 **Entry-Level** — Forms collect facts; conversations collect truth. Template the first so you never waste a live minute on it, and protect the second like the deal depends on it — because it does.

---
