# Selling Around Legacy Mainframes and On-Prem Resistance

In large enterprises—especially banks, insurers, and government agencies—you will inevitably encounter a mainframe. The mainframe has been running for 30 years. It processes millions of transactions daily. Nobody fully understands how it works. And the team that maintains it will fight to the death to protect it.

---

## The Mainframe Defender

Every organization with a mainframe has a "Mainframe Defender"—a senior engineer or architect who has built their entire career around the mainframe. This person will sabotage your evaluation if they perceive your platform as a threat to their relevance.

**Do not attack the mainframe.** Position your platform as a complementary layer that extracts value from the mainframe without replacing it.

> *"We're not here to replace your core transaction engine. That system processes your most critical workloads and it does so reliably. What we're here to do is give your business teams access to the data that's locked inside that system—in real-time—so they can make better decisions without your engineering team having to build custom batch extracts."*

## The Integration Play

### Option 1: Change Data Capture (CDC)
Use CDC tools (Debezium, IBM InfoSphere CDC, Attunity) to stream changes from the mainframe database to your platform in near real-time, without modifying the mainframe application.

### Option 2: API Facade
Build a lightweight API layer (using IBM z/OS Connect or CICS Transaction Server) that exposes mainframe transactions as modern REST APIs, allowing your platform to call them.

### Option 3: File-Based Batch Extract
The simplest approach: the mainframe exports flat files (CSV, fixed-width) to a shared storage location (SFTP, S3), and your platform ingests them on a schedule.

## Positioning to the CIO

> *"Your mainframe is the system of record. Our platform is the system of intelligence. Together, they give your organization both the transactional reliability of your mainframe and the modern analytics and automation capabilities your business teams are demanding."*

> **War Story:** An SE tried to sell a data analytics platform to a major bank by positioning it as a "mainframe replacement." The bank's Chief Architect—a 25-year mainframe veteran—killed the evaluation in the first meeting. The SE's manager reassigned the deal to a senior SE who repositioned the platform as a "data liberation layer" that would let business teams access mainframe data via REST APIs. The Chief Architect became the strongest internal champion because the SE made his mainframe more valuable, not less.

> **Failure Mode:** "The Mainframe Killer." This SE positions their modern cloud platform as a replacement for the prospect's legacy systems. The prospect's infrastructure team—whose jobs depend on the mainframe—immediately becomes adversarial. They sabotage the POC by withholding data access, introducing impossible requirements, and escalating "security concerns" to block the evaluation.

**Interview Angle:**
"How do you sell a modern platform into an organization with significant legacy infrastructure?"
A strong answer is: "I never position against the legacy system. I position as a complementary layer that makes the legacy system more valuable. For mainframe environments, I propose Change Data Capture or API Facade approaches that extract data without modifying the core system. This makes the mainframe team an ally, not an adversary."

🔴 **Senior-Level** — The mainframe team will kill your deal if you threaten their relevance. Make them your ally by making their system more valuable.

---
