# 8.2 Integration Patterns

## 8.2.1 REST vs. GraphQL vs. Webhooks

When a prospect asks "What's your API?", the answer is not just "REST." The SE must understand three distinct API paradigms and position the right one for the prospect's specific use case.

---

### The Three Paradigms

#### REST (Representational State Transfer)
The default API standard. Resources are accessed via HTTP methods (GET, POST, PUT, DELETE) at specific endpoints.

**Best for:** CRUD operations, standard integrations, well-documented APIs.
**Weakness:** Over-fetching (getting more data than you need) and under-fetching (needing multiple calls to assemble one view).

#### GraphQL
A query language that lets the client specify exactly which fields they need in a single request.

**Best for:** Complex UIs that need data from multiple resources in a single call, mobile applications with bandwidth constraints.
**Weakness:** Caching is harder. Query complexity can overwhelm the server if not rate-limited. Steeper learning curve.

#### Webhooks (Event-Driven)
Instead of the client polling the server for changes, the server pushes events to the client when something happens.

**Best for:** Real-time notifications, integration triggers, reducing API call volume.
**Weakness:** The client must expose a publicly accessible endpoint. Delivery is not guaranteed without retry logic.

### The SE Positioning Matrix

| Prospect Need | Recommend | Positioning |
|---|---|---|
| Simple data sync between systems | REST | "Our documented REST API handles standard integrations with minimal configuration." |
| Complex dashboards pulling from multiple entities | GraphQL | "Our GraphQL API lets your frontend request exactly the data it needs in a single call." |
| Real-time notifications when data changes | Webhooks | "Our webhook system pushes events to your system in real-time, eliminating the need for polling." |
| All three | Hybrid | "We support REST for standard CRUD, GraphQL for complex queries, and webhooks for event-driven workflows." |

> **War Story:** A prospect's frontend team was building a custom dashboard that needed data from 7 different API endpoints. Using the SE's REST API, each page load required 7 separate HTTP calls, resulting in a 3-second load time. The SE introduced the GraphQL endpoint, which consolidated all 7 requests into a single query. Page load dropped to 400ms. The frontend team became vocal internal champions.

> **Failure Mode:** "The REST-Only SE." This SE doesn't understand GraphQL or webhooks. When a prospect asks "Do you support webhooks for real-time event triggering?" the SE says "You can poll our REST API every 5 seconds." This is architecturally wasteful, creates unnecessary API load, and demonstrates a lack of modern integration awareness.

**Interview Angle:**
"When would you recommend GraphQL over REST?"
A strong answer is: "I recommend GraphQL when the client needs data from multiple related resources in a single request—typically complex dashboards or mobile apps with bandwidth constraints. REST is better for simple CRUD operations and standard integrations. Webhooks are best for event-driven triggering where the client needs to react to changes in real-time without polling."

🟡 **Mid-Level** — Knowing which API paradigm to recommend for which use case is fundamental integration fluency.

---

## 8.2.2 Bypassing Legacy Mainframes

In large enterprises—especially banks, insurers, and government agencies—you will inevitably encounter a mainframe. The mainframe has been running for 30 years. It processes millions of transactions daily. Nobody fully understands how it works. And the team that maintains it will fight to the death to protect it.

---

### The Mainframe Defender

Every organization with a mainframe has a "Mainframe Defender"—a senior engineer or architect who has built their entire career around the mainframe. This person will sabotage your evaluation if they perceive your platform as a threat to their relevance.

**Do not attack the mainframe.** Position your platform as a complementary layer that extracts value from the mainframe without replacing it.

> *"We're not here to replace your core transaction engine. That system processes your most critical workloads and it does so reliably. What we're here to do is give your business teams access to the data that's locked inside that system—in real-time—so they can make better decisions without your engineering team having to build custom batch extracts."*

### The Integration Play

#### Option 1: Change Data Capture (CDC)
Use CDC tools (Debezium, IBM InfoSphere CDC, Attunity) to stream changes from the mainframe database to your platform in near real-time, without modifying the mainframe application.

#### Option 2: API Facade
Build a lightweight API layer (using IBM z/OS Connect or CICS Transaction Server) that exposes mainframe transactions as modern REST APIs, allowing your platform to call them.

#### Option 3: File-Based Batch Extract
The simplest approach: the mainframe exports flat files (CSV, fixed-width) to a shared storage location (SFTP, S3), and your platform ingests them on a schedule.

### Positioning to the CIO

> *"Your mainframe is the system of record. Our platform is the system of intelligence. Together, they give your organization both the transactional reliability of your mainframe and the modern analytics and automation capabilities your business teams are demanding."*

> **War Story:** An SE tried to sell a data analytics platform to a major bank by positioning it as a "mainframe replacement." The bank's Chief Architect—a 25-year mainframe veteran—killed the evaluation in the first meeting. The SE's manager reassigned the deal to a senior SE who repositioned the platform as a "data liberation layer" that would let business teams access mainframe data via REST APIs. The Chief Architect became the strongest internal champion because the SE made his mainframe more valuable, not less.

> **Failure Mode:** "The Mainframe Killer." This SE positions their modern cloud platform as a replacement for the prospect's legacy systems. The prospect's infrastructure team—whose jobs depend on the mainframe—immediately becomes adversarial. They sabotage the POC by withholding data access, introducing impossible requirements, and escalating "security concerns" to block the evaluation.

**Interview Angle:**
"How do you sell a modern platform into an organization with significant legacy infrastructure?"
A strong answer is: "I never position against the legacy system. I position as a complementary layer that makes the legacy system more valuable. For mainframe environments, I propose Change Data Capture or API Facade approaches that extract data without modifying the core system. This makes the mainframe team an ally, not an adversary."

🔴 **Senior-Level** — The mainframe team will kill your deal if you threaten their relevance. Make them your ally by making their system more valuable.

---

## 8.2.3 The Async Data Lake Pattern

When a prospect says "we need real-time data," they almost never actually need real-time data. Understanding the spectrum between batch processing, near real-time, and true streaming is one of the most valuable technical literacy skills an SE can possess.

Getting this wrong costs deals. Over-engineering a streaming architecture inflates the price. Under-engineering it creates a technical gap the competitor will exploit.

---

### The Data Processing Spectrum

#### Batch Processing (Hours/Daily)
Data is collected, stored, and processed in scheduled intervals. Think nightly ETL jobs, daily reports, weekly data warehouse refreshes. Technologies: Apache Spark, AWS Glue, dbt.

**When to position batch:** The prospect's use case tolerates latency (financial reconciliation, compliance reporting, historical analytics).

#### Micro-Batch / Near Real-Time (Seconds to Minutes)
Data is processed in small, frequent batches—typically every 1-60 seconds. Technologies: Spark Streaming, AWS Kinesis Firehose, Google Dataflow.

**When to position micro-batch:** The prospect says "real-time" but their actual SLA is "within a few minutes." This covers 90% of enterprise "real-time" requirements.

#### True Streaming (Milliseconds)
Every event is processed individually as it arrives, with sub-second latency. Technologies: Apache Kafka, Apache Flink, AWS Kinesis Data Streams.

**When to position true streaming:** Financial trading, fraud detection, IoT sensor monitoring, live gaming leaderboards—use cases where even a 5-second delay has measurable business impact.

### Data Lakes vs. Data Warehouses

| | Data Lake | Data Warehouse |
|---|---|---|
| **Schema** | Schema-on-read (flexible) | Schema-on-write (structured) |
| **Data Types** | Raw, unstructured, semi-structured | Structured, curated |
| **Cost** | Cheap storage (S3, GCS, ADLS) | Expensive compute (Snowflake, BigQuery, Redshift) |
| **Users** | Data Engineers, Data Scientists | Business Analysts, Executives |
| **Risk** | "Data Swamp" if ungoverned | Rigid schema changes are expensive |

#### The SE's Positioning Play
If the prospect is debating Lake vs. Warehouse, position your platform as the **orchestration layer** that sits between both:

> *"You don't need to choose between a data lake and a warehouse. The modern architecture is a Lakehouse—raw data lands in your lake (cheap storage), our platform orchestrates the transformation, and curated data is served to your warehouse for analytics. You get flexibility and governance."*

> **War Story:** A prospect told the SE they needed "a real-time streaming architecture for their customer analytics dashboard." The SE asked one question: "How often does your executive team actually look at this dashboard?" The answer: "Every Monday morning in the leadership meeting." The prospect didn't need real-time streaming—they needed a batch job that refreshed every Sunday night. The SE designed a batch pipeline that cost $30k/year instead of the $180k/year streaming architecture the competitor had proposed. The prospect's CFO loved the cost savings.

> **Failure Mode:** "The Over-Architect." This SE hears "real-time" and immediately designs a Kafka + Flink streaming pipeline with exactly-once processing guarantees. The architecture is technically magnificent but 6x more expensive than what the prospect actually needs. The competitor, who correctly identified that micro-batch was sufficient, wins on price.

**Interview Angle:**
"How do you determine the right data processing architecture for a prospect?"
A strong answer is: "I always ask: 'What is the maximum acceptable data latency for this use case?' If the answer is minutes, we use micro-batch. If it's sub-second, we use true streaming. If it's daily, we use batch. I've found that 90% of prospects who say 'real-time' actually mean 'within a few minutes.' Correctly diagnosing this saves the prospect hundreds of thousands in unnecessary infrastructure."

🔴 **Senior-Level** — "Real-time" is the most misused term in enterprise data. Diagnose the actual latency requirement before you design the architecture.

---

## 8.2.4 API Gateway, iPaaS & ESB

In almost every enterprise deal, the prospect will ask: "How does your platform integrate with our existing systems?" The answer depends entirely on the prospect's integration architecture—and most SEs don't understand the differences between these three paradigms well enough to position their product correctly.

---

### The Three Integration Paradigms

#### 1. Enterprise Service Bus (ESB)
The legacy approach. A centralized middleware layer (e.g., MuleSoft, IBM Integration Bus, TIBCO) that routes all messages between systems through a single hub. Think of it as a massive telephone switchboard.

**When the prospect uses an ESB:**
*   Their IT team is likely conservative and risk-averse.
*   Integration changes require weeks of development and testing.
*   They are paying $500k+/year in ESB licensing.
*   Position your product as reducing their ESB dependency, not replacing it.

#### 2. API Gateway (Kong, Apigee, AWS API Gateway)
A modern approach focused on managing, securing, and throttling API traffic. The gateway doesn't transform data—it controls access to APIs.

**When the prospect uses an API Gateway:**
*   Their architecture is likely microservices-based.
*   They value developer self-service and API-first design.
*   Position your product's API as a first-class citizen that plugs directly into their gateway with minimal configuration.

#### 3. Integration Platform as a Service (iPaaS) (Workato, Boomi, Tray.io)
A cloud-native, low-code integration platform designed for business users and citizen integrators. Pre-built connectors handle most common SaaS-to-SaaS integrations.

**When the prospect uses iPaaS:**
*   They want fast, low-code integrations (days, not months).
*   Their IT team is small and cannot sustain custom middleware development.
*   Position your product's pre-built connectors and webhook support as iPaaS-friendly.

### The SE's Integration Positioning Matrix

| Prospect's Architecture | Your Positioning |
|---|---|
| ESB (legacy) | "Our platform reduces your ESB load by handling [X] workflow natively, eliminating [Y] ESB routes." |
| API Gateway (modern) | "Our documented REST API plugs directly into your Kong/Apigee gateway. Zero custom middleware needed." |
| iPaaS (low-code) | "We have a certified connector on [Workato/Boomi]. Your ops team can configure the integration in hours." |
| No integration layer | "Our platform includes native webhooks and a battle-tested REST API. You can integrate using standard HTTP calls." |

> **War Story:** An SE was selling a data analytics platform to a manufacturing company. During discovery, the prospect mentioned they use "MuleSoft for all integrations." The SE immediately pivoted the entire demo to show how the platform's data connectors could bypass MuleSoft entirely for the specific data pipeline in question—eliminating a $200k/year MuleSoft route. The prospect's CTO was thrilled: the SE wasn't just selling analytics, they were saving $200k in middleware costs. The deal closed at a $50k premium because the TCO was still lower.

> **Failure Mode:** "The Integration Ignorant SE." This SE positions their product's API as "easy to integrate" without understanding the prospect's existing integration architecture. They demo a REST API call to an audience that runs everything through a legacy ESB—which means the SE just proposed a solution that bypasses the prospect's entire governance framework. The IT team rejects the platform as "incompatible with our architecture."

**Interview Angle:**
"How do you approach integration architecture discussions during discovery?"
A strong answer is: "The first question I ask is: 'How do your systems talk to each other today?' The answer—ESB, API Gateway, iPaaS, or nothing—determines my entire positioning strategy. If they use an ESB, I show how my platform reduces ESB dependency. If they use an API Gateway, I show how our API plugs directly in. If they use iPaaS, I highlight our certified connectors. Misreading the integration paradigm is the fastest way to lose technical credibility."

🔴 **Senior-Level** — The integration conversation is where enterprise deals are won or lost. Know the paradigm before you open your laptop.
