# The Ethical Line — What You Should Never Let AI Do

Every previous chapter in this section argues for more AI in the SE workflow. This one is the counterweight, and it exists because the failure modes of AI in live deals aren't productivity failures — they're *integrity* failures, and integrity is the SE's entire stock in trade. [Technical trust](docs/01-foundations/technical-trust-gap.md) takes months to build and one discovered deception to destroy; AI simply industrializes the speed at which the deception can be manufactured.

The test that organizes everything below: **would you be comfortable if the prospect could see exactly how this was produced?** Research assistance, drafting, rehearsal — nobody flinches. The items on this page fail that test.

---

## The Never List

1. **Never let AI answer live questions you can't stand behind.** Reading a chatbot's answer to a prospect's technical question, in real time, as if it were your knowledge — this is the bright line from [the demo-scripts chapter](docs/10-tools/ai-demo-scripts.md), and it's worth restating as ethics rather than technique: the prospect is paying attention to *you* because your judgment is the product. An answer you can't verify isn't your judgment; delivering it as such is impersonation. The honest version costs nothing: "I want to give you the precise answer — I'll confirm and send it today." [The pause and the deferral read as senior](docs/09-executive-selling/three-second-pause.md); the teleprompter reads as fraud the day it's discovered.
2. **Never fabricate evidence.** No AI-generated "customer quotes," no synthetic benchmark numbers presented as measured, no invented reference scenarios, no doctored screenshots of results the product didn't produce. This was always fraud; AI just made it effortless — and made *checking* for it routine on the buyer's side. Every number in your [business case](docs/13-templates/business-case-one-pager.md) traces to their data or your tested product, or it doesn't ship.
3. **Never feed confidential prospect material into unsanctioned tools.** The RFP under NDA, their architecture diagrams, the security review, recorded calls — these belong only in tools your company has contractually vetted. "The model provider probably doesn't train on API traffic" is not a sentence you want to say in a breach postmortem. Know your company's policy; where it's silent, ask before pasting.
4. **Never let AI impersonate you to customers.** Auto-sent "personal" follow-ups the sender never read, AI-answered customer emails in your voice, bots attending meetings as you — the moment a customer discovers one artifact of fake attention, [every past artifact of real attention is repriced](docs/10-tools/snippet-library.md). Drafting is fine. *Unreviewed sending* is the violation.
5. **Never use AI to reconstruct what NDAs and ethics walls forbid.** "Summarize everything leakable about [competitor]'s roadmap" or laundering a previous employer's confidential knowledge through a model doesn't change what it is. The tool is new; the line isn't.

## Why This Is Strategy, Not Just Scruple

Buying organizations are deploying AI-detection instincts faster than vendors are deploying AI: procurement teams now spot template-generated responses, evaluation committees compare notes on "vendor slop," and security teams ask *directly* what AI touched the questionnaire. In that environment, verified human judgment is becoming the scarce, differentiating asset — the thing the [vendor-fatigued buyer](docs/09-executive-selling/vendor-fatigue.md) is starving for. Every shortcut on this page trades that asset for minutes. It's a bad trade even before anyone gets caught.

There's an internal version too: the SE who leans on AI for every answer stops *building* the judgment the answers were supposed to reflect. Reps skipped are [competence not compounded](docs/00-start-here/reverse-engineering-seniors.md). The tool should be compressing your learning curve, not replacing the climb.

## What This Page Is Not

It's not abstinence. The SE who refuses AI entirely is choosing artisanal slowness in a market that no longer pays for it, and this playbook spends three chapters saying so. The position is narrower and harder: **total leverage in preparation, total authorship in performance.** Machines draft, simulate, summarize, and generate — behind you. In front of the customer, every claim, every artifact, and every apparent moment of attention is real.

> **War Story:** A prospect's CTO, mid technical deep-dive, asked a question about failure semantics under a specific partition scenario. The SE — who had an AI assistant open on the second monitor like half the industry — visibly stopped, thought, and said: "I believe it's X, but the honest answer is I'm not certain about the ordering guarantee in that exact case, and I'd rather check than guess. You'll have it in writing today." The CTO later told the champion that this was the moment the vendor won: "The last three vendors answered every question instantly and perfectly. Nobody knows everything instantly. Either they rehearsed my questions — or something was answering for them. Your guy *thought*." The follow-up email, drafted with AI assistance from verified docs and reviewed line by line, arrived in four hours. Both halves of that story are the point.

> **Failure Mode:** The slow slide, not the dramatic breach. It starts with AI drafting follow-ups (fine), then sending a few unread on a busy Friday (risky), then answering a prospect's emailed technical question fully-auto because the last ten drafts were accurate (the line, crossed quietly). Month four: a prospect replies to "your" email pointing out it confidently describes a feature configuration that doesn't exist, and cc's the economic buyer. There was never a decision to deceive — just a review gate that eroded one busy week at a time. Ethics in AI-assisted selling isn't a stance you declare; it's a checklist you keep running when you're tired.

**Interview Angle:**
"Where do you draw the line on AI use in customer-facing work?"
Strong answers have an actual line — stated crisply, with the reasoning (authorship, verifiability, confidentiality) and evidence of a personal review discipline. Weak answers are vibes: "I use it responsibly." The follow-up "tell me about a time you chose *not* to use it" separates the two instantly.

🔵 **Senior** — Let AI do everything behind you and nothing instead of you. The customer is buying your judgment; make sure that's what they're getting.

---
