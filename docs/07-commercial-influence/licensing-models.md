# Understanding Licensing vs. Compute vs. Consumption Models

<!-- {"level": "Senior"} -->

A brilliant technical solution that misaligns with the vendor's pricing model is a failed solution. As a Solutions Engineer, you sit at the precise intersection of how a system works (architecture) and how your company gets paid for it (economics).

To thrive in enterprise presales, you must possess total fluency in the commercial models dictating how your software is monetized.

---

## 1. The Per-Seat (Per-User) License Model

This is the traditional SaaS model. The customer pays a flat fee for every human (or sometimes system account) that logs into the platform. This is common for CRMs (Salesforce), Productivity Suites (Google Workspace), or Support Tools (Zendesk).

### The Mathematical Goal
Grow the deployment horizontally across teams, maximizing the number of logins.

### The SE Focus
*   **The Trap:** Spending 3 weeks over-engineering an incredibly complex workflow that automates an entire process so perfectly that the customer only needs to buy *one admin license* to run the company. You just automated away your own revenue.
*   **The Strategy:** Focus on collaboration features, sharing governance, and cross-departmental dashboards. If you are selling to the Marketing team, you want to show how the Sales team can securely log in (buying more seats) to view the Marketing data without breaking permissions. 

---

## 2. The Compute & Infrastructure Model

This pricing model charges for the underlying resources consumed by the application. Common metrics include vCPUs, GBs of RAM, node counts, or dedicated server instances. This is standard for Cloud Providers (AWS/Azure), Databases (Elasticsearch, MongoDB), and heavy processing engines.

### The Mathematical Goal
Prove that the infrastructure elasticity handles massive scale efficiently, encouraging the customer to migrate heavier workloads.

### The SE Focus
*   **The Trap (The "Under-Scoping Disaster"):** Recommending a minimal cluster size to hit a low initial price point. During production, the system crashes under load. The prospect churns because "the product doesn't scale." You sacrificed trust to win a small deal.
*   **The Strategy:** Always design for Peak Compute or High Availability (HA) first. You must anchor the prospect on the robust, expensive architecture. 
> *"If you want this tier-1 application to survive Black Friday traffic with zero downtime, you need a 3-node HA cluster across two availability zones. If we downgrade to a single node to save $20k, we expose the business to a $500k outage risk."*

---

## 3. The Pure Consumption (Usage) Model

This is the fastest-growing model in modern SaaS (Snowflake, Twilio, Stripe). The customer pays strictly for what they use—API calls, gigabytes scanned, SMS messages sent, or credit card transactions processed. 

### The Mathematical Goal
Remove all friction to usage and find the customer's "Data Gravity."

### The SE Focus
*   **The Trap:** The classic "Shelfware" problem no longer exists here. If the customer buys but doesn't deploy the code, your company makes $0. A signed contract means nothing until the customer's systems are actively pushing volume through your API.
*   **The Strategy:** In a consumption model, the SE's true job often begins *after* the technical win. You must focus your discovery on identifying the customer's heaviest, most critical workloads.
> *"I see you are planning to route your password reset emails through our API. That's a great start. But let's look at your daily transaction receipts—if we route those 2 million daily emails through our system as well, we can consolidate your reporting."* (The SE just 100x'd the account consumption).

---

## 4. The Hybrid Model (The "Platform + Usage" Trap)

Many enterprise platforms blend models (e.g., $100,000 flat platform fee + $0.05 per API call over 1M/month).

### The SE Focus
When selling a hybrid model, prospects will hyper-fixate on the variable consumption cost because it feels uncontrollable. 

Your architectural design must focus on **efficiency and predictability**.
*   **Predictability:** Build calculators and models during POCs. *"Based on your 14-day POC volume, we project you will hit 850k API calls per month, keeping you safely under the overage threshold."*
*   **Efficiency:** Show them how to write better integrations. *"If you switch from a polling architecture to webhook payloads, you'll reduce your API calls by 80%, saving you $40k a year in consumption fees."* 

By actively teaching the prospect how to spend less money on your variable usage model, you establish absolute trust, making it vastly easier for the AE to secure the large, flat platform fee.
