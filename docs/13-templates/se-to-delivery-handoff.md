#### 13.7.3 SE-to-Delivery Handoff

<div class="template-meta">
  <span class="stage-badge st-close">Stage 07 · Close</span>
  <a class="stage-badge" href="docs/13-templates/html/se-to-delivery-handoff.html" target="_blank" style="text-decoration:none">&#128424;&#65039; Printable HTML version</a>
</div>

Everything you learned in nine months of selling — the promises, the politics, the workaround you demoed but never mentioned again — evaporates the day the deal closes, unless you write it down. Delivery then rediscovers it the expensive way, and the customer's first ninety days pay the bill. This handoff protects the renewal you just sold. It connects to [Shadowing Post-Sales Implementations](docs/11-metrics/post-sales-shadowing.md) and [Protecting SE Bandwidth From Post-Sales](docs/12-scaling/protecting-se-bandwidth.md).

| | |
|---|---|
| **When to use** | Within 5 business days of signature — before kickoff, while you still remember |
| **Owner** | SE, delivered in a live 45-minute session (never just emailed) |
| **Time to complete** | ~30 minutes to write |
| **Output goes to** | Delivery/implementation lead, CSM, account team of record |

---

## The Template

```markdown
# SE → Delivery Handoff — [Account] · Signed [date]

## 1. Why They Bought (one paragraph)
[Account] bought to fix [pain #1: their number], driven by [compelling event].
Success in THEIR words: "[verbatim from discovery/POC]".
**If phase 1 doesn't visibly move [that metric] by [date], the renewal is already at risk.**

## 2. What Was Promised — the complete list, including the uncomfortable ones
| # | Promise / expectation set | Where it was set (call/POC/proposal, date) | Contractual? | Delivery impact |
|---|---------------------------|---------------------------------------------|--------------|-----------------|
| 1 | | | Y / N / **implied** | |

## 3. What Was Demoed vs. What They Bought
- Demoed with [workaround/config X] but sold as standard: ______
- POC ran on [conditions]; production differs by: ______
- Roadmap items referenced in the cycle (and the exact language used): ______

## 4. Technical Landscape (verified vs. assumed)
- Verified during POC: ______
- **Assumed, never verified** (from Solution Design §6): ______
- Known integration risks / the one system nobody would give us access to: ______

## 5. The People
| Name | Role | Stance | What they need | Handle with |
|------|------|--------|----------------|-------------|
| | Champion | Invested — their credibility rides on this | Early visible win | Weekly wins email |
| | | **Detractor — opposed us throughout** | | Involve early, small asks |

## 6. Red Flags I'd Watch (the section only the SE can write)
1. [e.g. "Their data quality is worse than anyone admitted — phase 1 estimates assume clean input"]
2. [e.g. "The champion overpromised the go-live date internally by ~3 weeks"]

## 7. Commitments Requiring SE Continuity
- [e.g. "I committed to reviewing the phase-1 architecture — one session, week 2"]
- SE availability for delivery questions: [X hrs/week for Y weeks, then done]

## 8. First 30 Days — what delivery should do differently because of all the above
1. ______
2. ______
```

---

## How to Fill It In

1. **Section 2 includes the implied promises.** The contract says what was sold; the customer remembers what was *said*. "The AE mentioned 'typically live in six weeks' on the March 3rd call" is exactly the expectation that detonates in week seven — hand it over armed with a date and context.
2. **Section 3 is an act of honesty, not confession.** Every deal has demo-vs-production gaps. Documented, they're a configuration plan; discovered, they're an escalation with your name in the postmortem.
3. **Section 6 is the reason this is a live session.** The red flags are judgment, not data — the champion's internal overpromise, the detractor waiting for a stumble. That transfers in conversation, with questions; it doesn't transfer by email.
4. **Section 7 protects you as much as delivery.** Bounded, written continuity ("one architecture review, week 2, then done") is how you stay helpful without [becoming the unpaid implementation engineer](docs/12-scaling/protecting-se-bandwidth.md) for the next two quarters.

> **Failure Mode:** The handoff that consists of forwarding the proposal deck and adding delivery to a Slack channel. Six weeks later: delivery discovers the unverified SSO assumption, the customer repeats a promise nobody on the project has heard of, and the SE gets pulled back into the account anyway — mid-quarter, unplanned, for a deal that already paid out. Thirty minutes of writing now, or thirty hours of archaeology later. The renewal remembers which one you chose.

🔵 **Senior** — The close isn't the end of the deal; it's the start of the renewal. The handoff is the first artifact of the next sale.
