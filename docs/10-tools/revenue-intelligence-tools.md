# Revenue Intelligence — Gong & Chorus

Revenue intelligence platforms — Gong, Chorus, and their successors — record, transcribe, and analyze every customer conversation your team has. Sales leadership bought them to inspect pipeline. The under-exploited fact is that they're at least as valuable to SEs, who are sitting on a searchable corpus of every discovery answer, every objection, every competitor mention, and every demo that ever succeeded or died — and mostly using it to re-watch their own meetings.

Treat the call library as a queryable dataset about how deals are actually won in your company, and it becomes one of the highest-leverage tools in your stack.

---

## The SE Queries That Pay

| Query | What it gives you |
|---|---|
| Competitor name, last 90 days, lost deals | The competitor's *current* attack lines, verbatim — not the six-month-old battlecard version |
| "security review" / "InfoSec" across stalled deals | The exact questions that stall deals in your segment → [pre-answer them](docs/07-commercial-influence/security-questionnaire-templates.md) |
| Your own discovery calls, talk-ratio and question count | Whether you're actually running [the questioning discipline](docs/03-discovery/mute-and-listen.md) you think you are |
| The top SE's demos of the module you're learning | How the best person in the building [frames, sequences, and answers](docs/00-start-here/reverse-engineering-seniors.md) — on demand, at 1.5× speed |
| "pricing" mentions in technical evaluations | Where commercial questions leak into your technical sessions, and how well they're being deflected |

## Three Practices Worth Institutionalizing

1. **The pre-call binge.** Before any meeting with a returning stakeholder, search their name and watch their last two appearances. Their objection patterns, their vocabulary, what made them lean in — you walk in with a stakeholder-specific brief that [pre-call research](docs/03-discovery/pre-call-research.md) from LinkedIn alone can't produce.
2. **The self-audit loop.** Once a month, watch one of your own calls with a single-variable focus (talk ratio, filler density, [pause discipline](docs/09-executive-selling/voice-and-pacing.md), how long your answers run). Nothing in your development plan outperforms watching yourself lose the thread of a question in real time. Pair it with the [demo scoring rubric](docs/05-demo-excellence/demo-scoring.md).
3. **The evidence pull.** Building a [discovery summary](docs/13-templates/discovery-summary.md) or [business case](docs/13-templates/business-case-one-pager.md)? Pull the customer's numbers as verbatim quotes with timestamps. "40 engineer-hours a month, stated by their VP Eng on the March 12 call" is unimpeachable in a way your notes never are.

## The Etiquette and the Limits

Recording lives under consent and policy — never quote a customer's recorded words back to *them* in negotiation (it reads as surveillance), and never search recordings for ammunition against colleagues. Internally, the corpus is for patterns and self-development; the moment call review becomes gotcha material in deal disputes, people start performing for the recorder and the dataset's honesty — its entire value — dies.

And remember what the AI summaries are: pattern matchers. Gong's "deal risk" flags and auto-summaries are directionally useful and contextually blind — they can't tell a [strategic walk-away](docs/09-executive-selling/walking-away-cleanly.md) from a collapse. The transcript is data; the judgment stays yours.

> **War Story:** An SE team kept losing to the same competitor in mid-market deals, and the battlecard counters weren't landing. One SE spent an afternoon running the competitor's name across every loss transcript from the prior quarter and found something the battlecard missed: the competitor had changed pitch — they weren't attacking features anymore, they were attacking *implementation time*, with a specific "live in three weeks" claim, and it appeared in eleven of thirteen losses, always via the economic buyer, never in technical sessions. The counter wasn't technical at all: reference customers with honest go-live timelines, deployed at the executive level early. Win rate against that competitor doubled inside two quarters. The intelligence had been sitting in the call library the whole time — nobody had asked it a question.

> **Failure Mode:** The SE who lets the recorder replace the notebook — "it's all in Gong" — and stops synthesizing. Six weeks later, the [discovery documentation](docs/03-discovery/discovery-documentation.md) doesn't exist, the deal's narrative lives in nine hours of unwatched video, and reconstructing what the prospect actually said requires an afternoon of scrubbing timelines. Recording is storage, not comprehension. The synthesis discipline — summary written within 24 hours, decisions logged — survives the tool; skipping it because the tool exists is how deals lose their memory.

**Interview Angle:**
"How do you use call recording tools in your workflow?"
Strong answers go beyond "I review my calls" to querying the corpus — competitive patterns, stakeholder prep, evidence extraction — plus a deliberate self-review loop. Weak answers reveal the tool as a compliance artifact they appear in rather than an instrument they play.

🟡 **Mid-Level** — Your company already owns a recording of every deal it ever won or lost. The only question is whether anyone's asking it questions.

---
