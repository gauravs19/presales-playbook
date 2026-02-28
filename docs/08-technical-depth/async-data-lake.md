# Async Architectures, Data Lakes, and the Streaming Conversation

When a prospect says "we need real-time data," they almost never actually need real-time data. Understanding the spectrum between batch processing, near real-time, and true streaming is one of the most valuable technical literacy skills an SE can possess.

Getting this wrong costs deals. Over-engineering a streaming architecture inflates the price. Under-engineering it creates a technical gap the competitor will exploit.

---

## The Data Processing Spectrum

### Batch Processing (Hours/Daily)
Data is collected, stored, and processed in scheduled intervals. Think nightly ETL jobs, daily reports, weekly data warehouse refreshes. Technologies: Apache Spark, AWS Glue, dbt.

**When to position batch:** The prospect's use case tolerates latency (financial reconciliation, compliance reporting, historical analytics).

### Micro-Batch / Near Real-Time (Seconds to Minutes)
Data is processed in small, frequent batches—typically every 1-60 seconds. Technologies: Spark Streaming, AWS Kinesis Firehose, Google Dataflow.

**When to position micro-batch:** The prospect says "real-time" but their actual SLA is "within a few minutes." This covers 90% of enterprise "real-time" requirements.

### True Streaming (Milliseconds)
Every event is processed individually as it arrives, with sub-second latency. Technologies: Apache Kafka, Apache Flink, AWS Kinesis Data Streams.

**When to position true streaming:** Financial trading, fraud detection, IoT sensor monitoring, live gaming leaderboards—use cases where even a 5-second delay has measurable business impact.

## Data Lakes vs. Data Warehouses

| | Data Lake | Data Warehouse |
|---|---|---|
| **Schema** | Schema-on-read (flexible) | Schema-on-write (structured) |
| **Data Types** | Raw, unstructured, semi-structured | Structured, curated |
| **Cost** | Cheap storage (S3, GCS, ADLS) | Expensive compute (Snowflake, BigQuery, Redshift) |
| **Users** | Data Engineers, Data Scientists | Business Analysts, Executives |
| **Risk** | "Data Swamp" if ungoverned | Rigid schema changes are expensive |

### The SE's Positioning Play
If the prospect is debating Lake vs. Warehouse, position your platform as the **orchestration layer** that sits between both:

> *"You don't need to choose between a data lake and a warehouse. The modern architecture is a Lakehouse—raw data lands in your lake (cheap storage), our platform orchestrates the transformation, and curated data is served to your warehouse for analytics. You get flexibility and governance."*

> **War Story:** A prospect told the SE they needed "a real-time streaming architecture for their customer analytics dashboard." The SE asked one question: "How often does your executive team actually look at this dashboard?" The answer: "Every Monday morning in the leadership meeting." The prospect didn't need real-time streaming—they needed a batch job that refreshed every Sunday night. The SE designed a batch pipeline that cost $30k/year instead of the $180k/year streaming architecture the competitor had proposed. The prospect's CFO loved the cost savings.

> **Failure Mode:** "The Over-Architect." This SE hears "real-time" and immediately designs a Kafka + Flink streaming pipeline with exactly-once processing guarantees. The architecture is technically magnificent but 6x more expensive than what the prospect actually needs. The competitor, who correctly identified that micro-batch was sufficient, wins on price.

**Interview Angle:**
"How do you determine the right data processing architecture for a prospect?"
A strong answer is: "I always ask: 'What is the maximum acceptable data latency for this use case?' If the answer is minutes, we use micro-batch. If it's sub-second, we use true streaming. If it's daily, we use batch. I've found that 90% of prospects who say 'real-time' actually mean 'within a few minutes.' Correctly diagnosing this saves the prospect hundreds of thousands in unnecessary infrastructure."

🔴 **Senior-Level** — "Real-time" is the most misused term in enterprise data. Diagnose the actual latency requirement before you design the architecture.

---
