# Auto-Generating Post-Call Technical Summaries

The [discovery summary that gets read](docs/03-discovery/discovery-summary-writing.md) has a mortal enemy: the calendar. The call ends at 2:55, the next one starts at 3:00, and by Friday the week's five calls have blurred into one soup of half-remembered quotes. Summaries written late are summaries written badly — and increasingly, summaries not written at all.

Transcription plus LLM summarization has changed the economics completely. What used to be a 40-minute synthesis job can now be a 10-minute *review* job. The craft has shifted: from writing summaries to engineering the pipeline that drafts them — and then editing with judgment the machine doesn't have.

---

## The Pipeline

1. **Capture.** Your [revenue-intelligence platform](docs/10-tools/revenue-intelligence-tools.md) or meeting bot already produces a transcript. (Recording consent and customer-data policy are prerequisites, not footnotes — know what your company permits before building anything.)
2. **Extract with a structured prompt.** Don't ask for "a summary" — you'll get a book report. Ask for *your document's fields*: the [discovery summary template's](docs/13-templates/discovery-summary.md) sections, verbatim. A prompt worth stealing:

   > "From this transcript, extract: (1) every pain statement with the speaker's exact words and any numbers attached; (2) each stakeholder who spoke, their role if stated, and their apparent stance; (3) systems, tools, and vendors mentioned, with context; (4) stated decision criteria or success measures; (5) explicit commitments made by either side, with owners and dates; (6) questions we were asked that we did not fully answer. Quote verbatim wherever possible. Mark anything ambiguous as UNCERTAIN rather than guessing."

3. **Review against your own memory — same day.** The draft is raw material. You verify quotes actually carry the meaning the transcript's punctuation suggests, fix the attribution the diarization scrambled, and add the layer no transcript contains (see below).
4. **Route the outputs.** Internal version to the deal file and [CRM fields](docs/10-tools/crm-hygiene-for-ses.md); external "did I capture this correctly?" version to the champion; action items to whoever owns them. Ten minutes, done while the call is still warm.

## What the Machine Cannot Hear

The transcript records what was said. Your summary's *value* is disproportionately in what wasn't: the [glance exchanged](docs/09-executive-selling/reading-the-room.md) at the pricing mention, the pause before "yes, we have executive support," the question the CISO asked twice with different words, who went quiet after the integration discussion. This is exactly the layer that distinguishes an SE's summary from a stenographer's — and it evaporates within hours. The automation exists to buy you the ten minutes to write it down, not to excuse you from it. Add a **"Read of the room"** section to every draft, manually, every time.

## Trust, but Verify — Especially Quotes

LLM summarizers paraphrase fluently and confidently, which is precisely the danger: a paraphrase entered into your deal record as a verbatim quote is a small forgery that [compounds](docs/03-discovery/discovery-documentation.md). House rules: anything in quote marks gets checked against the transcript before the summary ships; numbers get double-checked (transcription mishears "fifteen" and "fifty" at the worst possible moments); and hallucinated specifics — the model helpfully "remembering" a date nobody said — are why the UNCERTAIN instruction is in the prompt.

> **War Story:** An SE covering nine active deals built exactly this pipeline in an afternoon — meeting bot, one structured prompt saved as a snippet, a 10-minute calendar block after every call titled "summary or it didn't happen." Two quarters later the compound interest was visible in the deal record: every opportunity had a same-day summary trail, the [business case](docs/13-templates/business-case-one-pager.md) for the biggest deal was assembled almost entirely from already-extracted verbatim quotes with dates attached, and — the moment that sold the whole team on the practice — a prospect's procurement lead challenged "we never said the migration deadline was hard" and received, politely, their own VP's exact sentence with a timestamp. The AE called it the easiest negotiation recovery of his career. The SE's actual writing time per summary: eleven minutes, median.

> **Failure Mode:** The SE who automates the summary and stops *attending* the call — half-listening in meetings because "the bot's got it," then shipping the machine draft unedited because the week got busy. The result is a deal file full of fluent, structured, subtly wrong documents: paraphrases dressed as quotes, stances guessed from politeness, the room's actual temperature absent entirely. Automated summaries are a floor under your documentation, not a substitute for your attention. The moment the draft ships unreviewed, you've replaced your judgment with autocomplete — and the deal record is now confidently lying to everyone who reads it.

**Interview Angle:**
"How do you keep documentation quality high across a heavy call load?"
Strong answers describe an automation pipeline *plus* a same-day human review layer, verbatim-quote discipline, and the non-verbal read the machine can't capture. Weak answers either romanticize manual notes ("I just take good notes") or fully delegate to the tool — the two failure modes, wearing different clothes.

🟡 **Mid-Level** — Automate the transcription, keep the judgment. The machine drafts what was said; only you can record what happened.

---
