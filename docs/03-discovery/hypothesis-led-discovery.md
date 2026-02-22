#### 3.1.2 Formulating the Hypothesis Before You Ask

Most SEs walk into discovery calls with a list of questions. Good SEs walk into discovery calls with a hypothesis — a specific, falsifiable belief about what the prospect's problem is, what's causing it, and what the impact might be. The hypothesis doesn't need to be right. It needs to be specific enough to provoke a reaction that reveals the truth.

The difference: a question-led discovery says "Tell me about your challenges." A hypothesis-led discovery says "Based on what I've seen in companies your size running similar architecture, I'd guess your main bottleneck is the overnight batch processing window — it's probably running 6–8 hours and causing your morning reports to be stale. Am I close?"

1. **Why hypotheses work better than open questions.** Open questions ("What are your biggest challenges?") put the cognitive burden on the prospect. They have to think about their entire landscape, prioritise, and articulate — all while a stranger is listening. Most prospects default to surface-level answers because deep reflection requires trust that hasn't been built yet. A hypothesis flips the dynamic: you do the thinking, and the prospect reacts. Reacting is cognitively easier than generating. And their reaction — "Yes, exactly" or "Actually, it's not the batch window, it's the schema changes that break the pipeline" — gives you deeper information than any open question would.

2. **Build your hypothesis from three sources.** Source 1: your pre-call research (Section 3.1.1) — what you learned about their company, industry, and personnel. Source 2: pattern matching from similar deals — "Companies in financial services with legacy mainframe architectures almost always have a reconciliation problem." Source 3: information from your AE or champion — anything shared in pre-brief or CRM notes. Combine these sources into a 1–2 sentence hypothesis: "I believe your team is spending more than 20 hours per week on manual data quality remediation because your legacy ETL pipelines don't have schema drift detection."

3. **Present the hypothesis with permission.** Don't assert your hypothesis as fact. Frame it as a testable assumption: "Based on what I've seen in similar environments, here's my working theory about what might be happening. I'd love for you to tell me where I'm right and where I'm off." This framing accomplishes three things: it demonstrates expertise (you've seen this pattern before), it invites correction (the prospect feels empowered, not lectured), and it accelerates the conversation (you skip 10 minutes of surface-level questioning and jump to the real issue).

4. **A wrong hypothesis is more useful than no hypothesis.** If your hypothesis is wrong, the prospect will correct you — and their correction contains the real answer. "Actually, the batch window isn't our problem. It's the fact that three different teams are writing to the same data lake without any governance, and we have no idea which version of the data is correct." You just got a deeper, more specific answer than any open question would have produced. Being wrong with specificity creates better conversations than being vague with openness.

5. **Prepare 2–3 hypotheses per call.** Don't rely on a single hypothesis. Prepare a primary hypothesis (the most likely problem based on your research) and two secondary hypotheses (alternative problems that are common in similar environments). If the primary doesn't land, pivot: "Interesting — the batch window isn't the issue. Let me test another theory: are you seeing challenges with data lineage or auditability, particularly around regulatory reporting?"

> **War Story:** An SE walking into a discovery call with a healthcare SaaS company prepared three hypotheses. Primary: "Their HIPAA compliance reporting is manual and takes 2+ weeks per quarter." Secondary 1: "Their patient data integration between EHR systems is fragmented." Secondary 2: "Their analytics team can't access production data due to PHI restrictions, so they're working with stale copies." The primary hypothesis was wrong — their compliance reporting was actually well-automated. But when she pivoted to hypothesis 2, the VP of Engineering lit up: "That's exactly our problem. We have 4 EHR systems feeding into a data warehouse with no real-time reconciliation. Our care coordination team is making decisions on 24-hour-old patient data." That single accurate hypothesis — the backup, not the primary — became the anchor for a deal that closed at $720K. If she'd used open questions, she would have spent 20 minutes fishing. The hypothesis got her there in 3.

> **Failure Mode:** The SE who uses hypotheses as disguised product pitches. "I hypothesise that your current solution doesn't have real-time CDC capabilities, which is causing data latency." That's not a hypothesis — it's a leading question designed to create a gap that your product fills. Prospects see through this instantly. A genuine hypothesis is about *their* problem. A disguised pitch is about *your* product. The difference is obvious to anyone who's been sold to before.

**Interview Angle:**
"How do you approach the first discovery call with a new prospect?"
A strong answer describes hypothesis formation, the research that informs it, and the technique for presenting it. A weak answer describes "asking open-ended questions to understand their needs."

**Practical Reference: The Hypothesis Formation Template**

```
Company: [Name]
Industry: [Vertical]

Research Signals:
- [Signal 1 from earnings/news]
- [Signal 2 from LinkedIn/job postings]
- [Signal 3 from AE/champion intel]

Primary Hypothesis:
"Based on [signals], I believe [specific problem] is causing [specific impact]."

Secondary Hypothesis 1:
"Alternatively, [different problem] may be driving [different impact]."

Secondary Hypothesis 2:
"It's also possible that [third problem] is their primary concern."

Opening: "I've done some research and I have a working theory about 
what your team might be dealing with. Can I share it and have you 
tell me where I'm right and where I'm off?"
```

🟡 **Mid-Level** — Hypothesis-led discovery is the technique that separates Senior SEs from everyone else. It demonstrates expertise, accelerates insight, and builds trust faster than any question list.

---
