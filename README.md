<div id="playbook-hero" style="position: relative; background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%); color: white; padding: 5rem 2rem; border-radius: 12px; margin-bottom: 2.5rem; text-align: center; box-shadow: 0 10px 30px rgba(0,0,0,0.15); overflow: hidden;">
    <canvas id="neural-canvas" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; opacity: 0.6;"></canvas>
    <div style="position: relative; z-index: 2;">
        <h1 class="fade-in" style="color: white; margin: 0; font-size: 3.5rem; font-weight: 800; letter-spacing: -1px; padding-bottom: 0; border-bottom: none;">The Enterprise Presales Playbook</h1>
        <p class="fade-in delay-1" style="font-size: 1.4rem; opacity: 0.9; margin-top: 1.5rem; max-width: 800px; margin-left: auto; margin-right: auto; line-height: 1.6;">The practitioner-built field guide to orchestrating complex enterprise deals — bridging the gap between technical architecture and commercial value.</p>
    </div>
</div>

---

## What This Is

This is not a training manual. Training manuals are written by people who used to do the job. This playbook is written by people who are still doing it — and who've lost enough deals to know what actually matters versus what sounds good on a slide.

The Enterprise Presales Playbook is a structured, graduated resource that serves everyone from a first-week SE who doesn't know what MEDDPICC stands for, to a VP of Solutions Engineering deciding how to scale their team from 8 to 40.

Every section contains:
- **Core content** — Specific, numbered, practitioner-level guidance
- **War stories** — Real scenarios from real deals, messy and instructive
- **Failure modes** — What goes wrong, why it seemed reasonable at the time, and what it cost
- **Interview angles** — The exact questions senior hiring managers ask to probe each competency
- **Practical references** — Templates, frameworks, checklists, and scripts you can actually use

---

## How the Playbook Is Structured

The content is organised into **13 sections** across **253 individual topics**, each as its own focused page. The sections follow a deliberate progression:

| Section | Title | Who It's For |
|---------|-------|-------------|
| **0** | [Start Here](docs/00-start-here/what-is-presales.md) | Brand new to presales — no prior experience needed |
| **1** | [Foundations](docs/01-foundations/se-as-revenue-architect.md) | The SE identity, the AE partnership, and career architecture |
| **2** | [Deal Orchestration](docs/02-deal-orchestration/scoring-deal-quality.md) | Reading, owning, and accelerating deals |
| **3** | [Discovery Framework](docs/03-discovery/pre-call-research.md) | From preparation to pain quantification |
| **4** | [Solution Design](docs/04-solution-design/boat-framework.md) | Architecting solutions that win, not just work |
| **5** | [Demo Excellence](docs/05-demo-excellence/abolishing-harbor-tour.md) | From harbor tour to revenue-generating narrative |
| **6** | [POC Management](docs/06-poc-management/paid-vs-free-poc.md) | Control, criteria, execution, and the technical win |
| **7** | [Commercial Influence](docs/07-commercial-influence/margin-and-discount-literacy.md) | Pricing literacy, RFP strategy, and proposal architecture |
| **8** | [Technical Depth](docs/08-technical-depth/cloud-platform-translation.md) | Cloud, integration, AI/ML, and security fluency |
| **9** | [Executive Selling & Soft Skills](docs/09-executive-selling/running-executive-briefings.md) | Influence, presence, negotiation, and empathy |
| **10** | [Tools & Infrastructure](docs/10-tools/revenue-intelligence-tools.md) | The presales tech stack and productivity systems |
| **11** | [Metrics & Continuous Improvement](docs/11-metrics/demo-to-poc-conversion.md) | Measuring what matters and getting better |
| **12** | [Scaling Presales Teams](docs/12-scaling/ae-to-se-ratio.md) | For SE managers and presales leaders |

---

## Where to Start

### If you're new to presales
Start at **[Section 0: Start Here](docs/00-start-here/what-is-presales.md)**. It assumes zero prior knowledge. You'll learn what the role actually is (not what the job description says), who the key players are in every deal, what every acronym means, and how to navigate your first 90 days without embarrassing yourself or burning out.

### If you're an experienced SE looking to level up
Jump to **[Section 1: Foundations](docs/01-foundations/se-as-revenue-architect.md)** or directly to the section that maps to your current gap. If you're losing deals at the demo stage, go to Section 5. If your POCs keep stalling, go to Section 6. If you want to understand pricing and commercial strategy, go to Section 7.

### If you're an SE manager or presales leader
Start at **[Section 12: Scaling Presales Teams](docs/12-scaling/ae-to-se-ratio.md)** for team architecture, hiring, enablement, and operations. Then work backwards through **Section 11 (Metrics)** and **Section 2 (Deal Orchestration)** to build your management framework.

---

## The Graduation Model

The playbook uses a three-tier progression system:

- **Beginner** — No prior presales experience. Covers the "what" and the "how" of the SE role at a foundational level.
- **Mid-Level** — 1–3 years of SE experience. Covers deal strategy, advanced discovery, and commercial influence.
- **Senior** — 3+ years. Covers executive selling, team scaling, product influence, and leadership.

Each section is tagged with its level. Graduation checkpoints between tiers help you self-assess whether you're ready to progress.

---

## How to Use This Playbook

**Don't read it cover to cover.** This isn't a novel. It's a reference manual with a narrative thread. Use it in three ways:

1. **Sequential learning** — If you're new, work through Sections 0–3 in order. Each builds on the last.
2. **Problem-driven lookup** — If you have a specific challenge (e.g., "how do I handle a hostile CTO in a demo"), navigate directly to the relevant subsection.
3. **Team enablement** — If you're a manager, assign specific sections as pre-reading before deal reviews, SKOs, or onboarding programmes.

---

## Project Details

Built with [Docsify](https://docsify.js.org/) and hosted on [GitHub Pages](https://gauravs19.github.io/presales-playbook/).

```
presales-playbook/
├── docs/
│   ├── 00-start-here/        # Section 0 — 17 topics
│   ├── 01-foundations/        # Section 1 — 20 topics
│   ├── 02-deal-orchestration/ # Section 2 — 16 topics
│   ├── 03-discovery/          # Section 3 — 24 topics
│   ├── 04-solution-design/    # Section 4 — 20 topics
│   ├── 05-demo-excellence/    # Section 5 — 24 topics
│   ├── 06-poc-management/     # Section 6 — 20 topics
│   ├── 07-commercial-influence/ # Section 7 — 20 topics
│   ├── 08-technical-depth/    # Section 8 — 20 topics
│   ├── 09-executive-selling/  # Section 9 — 20 topics
│   ├── 10-tools/              # Section 10 — 16 topics
│   ├── 11-metrics/            # Section 11 — 16 topics
│   └── 12-scaling/            # Section 12 — 20 topics
├── _sidebar.md                # 3-level navigation (253 topics)
├── index.html                 # Docsify configuration
└── README.md                  # This page
```

---

**[Start Reading →](docs/00-start-here/what-is-presales.md)**
