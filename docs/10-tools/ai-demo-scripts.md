# Generating Demo Data, Scripts & Responses With AI

Three of the most time-hungry demo-preparation chores — plausible data content, narrative scripting, and anticipating the Q&A — have become dramatically cheaper with LLMs in the workflow. Used with intent, AI turns a generic demo into a prospect-skinned one in an evening. Used lazily, it generates the same synthetic gloss for you as for every competitor, and the audience — who now reads AI output daily — can tell.

The organizing principle: **AI generates volume and variation; you keep authorship of story and truth.**

---

## Data Content at Industry Fidelity

[Scripted data generation](docs/10-tools/dummy-data-generation.md) handles structure — volumes, distributions, referential integrity. What it historically couldn't produce is *content* that reads native: five hundred support tickets that sound like a telecom's actual queue, product reviews in a retailer's actual customer voice, work-order notes that a plant engineer would nod at. That's now a prompt: "Generate 200 support tickets for a mid-size logistics company: realistic subject lines, severity mix skewed 70/20/10, recurring themes around EDI failures and customs documentation, occasional typos and shorthand." Feed the output through your deterministic seeder so the *shapes* stay reproducible while the *text* reads human. Keep the [narrative fixtures](docs/13-templates/demo-storyboard.md) hand-authored — the record your story pivots on is a protagonist, not filler.

## Scripts and Storyboards: Draft, Then Disagree

- **Storyboard acceleration.** Feed the model your [discovery summary](docs/13-templates/discovery-summary.md) and the storyboard template: "Propose a 3-scene demo narrative mapping these discovered pains to these capabilities, with a tension/relief beat per scene." The draft will be 70% right and reliably generic at the emotional beats — its value is that critiquing a draft is faster than facing a blank page. The scene you *rewrite in disagreement* is usually the one that wins the demo.
- **Talk-track variants.** "Rewrite this demo narration for a CFO audience / for a hands-on engineering audience / 40% shorter" — cheap altitude-shifting for [multi-stakeholder rooms](docs/09-executive-selling/features-as-career-savers.md).
- **The red-team rehearsal.** The most underused prompt in demo prep: "You are a skeptical principal architect at [prospect] who prefers [competitor]. Here's my demo flow — attack it. Interrupt where they would, object where the flow is weakest." Twenty minutes of adversarial rehearsal surfaces the [objections](docs/05-demo-excellence/feature-gap-objections.md) you'd otherwise meet live, and drafts your [hold-and-validate](docs/05-demo-excellence/hold-and-validate.md) responses while the stakes are zero.

## Live-Deal Responses: The Assist Line

Between meetings, AI is a legitimate drafting partner for follow-ups, objection responses, and technical explanations — subject to the [snippet-library customization rule](docs/10-tools/snippet-library.md): nothing ships unedited, and every factual claim traces to something you know true. *During* meetings is a different country: typing a prospect's hard question into a chatbot mid-call and reading back the answer is (a) visible on your face and your eyes, (b) a violation of the basic contract that they're talking to *you*, and (c) one hallucinated specific away from disaster with no review gate. The line is bright: AI prepares you for the room; [in the room, it's you](docs/10-tools/ai-ethics-in-live-deals.md).

## Verification, Because It's Still an LLM

Generated ticket content can accidentally include real company names or real-sounding personal data — scan before seeding. Generated technical narration can drift into capabilities you don't have — every product claim in an AI-drafted script gets checked against the product, not against the marketing site the model may have memorized. And generated industry color ("as every logistics operator knows...") can be subtly wrong in ways that only your audience would catch — which is the worst possible reviewer to catch it.

> **War Story:** An SE preparing for a demo to a European rail-freight operator — an industry the SE had never touched — spent one evening on a three-prompt sequence: first, industry immersion ("explain rail freight operations, key roles, jargon, and daily pain points, with the caveats of what varies by country"); second, data content generation (consignment records, delay codes, terminal names — checked against two public industry glossaries); third, the red-team rehearsal as a skeptical operations director. The demo opened with a dashboard showing *wagon dwell time at Hamburg-Maschen* — a metric and location the audience lived in daily. The operations director's first comment: "Finally, a vendor who didn't show us retail data with the labels changed." The deal advanced; the SE's actual rail expertise at demo time was eleven days old. The AI didn't know rail. It compressed the *learning* of rail into an evening — the SE still did the knowing.

> **Failure Mode:** The uncanny-valley demo. Every element generated, nothing verified: data whose "industry terminology" is subtly off (the model called them "shipments"; this industry says "consignments" — [the exact thing discovery vocabulary exists for](docs/13-templates/discovery-summary.md)), a talk track with the unmistakable LLM cadence, and Q&A answers rehearsed from hallucinated product claims. Each flaw is small; together they produce a demo that feels like it was made *about* the prospect by someone who never met them — because it was. The audience can't always name what's wrong, but they trust their unease. Generation without grounding doesn't scale your preparation; it scales your distance from the customer.

**Interview Angle:**
"How has AI changed your demo preparation?"
Strong answers show specific leverage points (content generation, red-team rehearsal, altitude variants) each paired with its verification step, and a bright line at live meetings. Weak answers are either abstinence ("I don't trust it") or dependence ("it basically writes my demos") — the interviewer is listening for *authorship retained*.

🟡 **Mid-Level** — Let the machine generate the five hundred tickets. The one record the story turns on, and every word you'll say out loud — those stay yours.

---
