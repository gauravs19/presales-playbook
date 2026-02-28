# Translating Between AWS, Azure, and GCP for Prospects

Enterprise prospects are rarely cloud-agnostic. They have already committed to AWS, Azure, or GCP—and they expect you to speak their cloud dialect fluently.

If you demo on AWS and the prospect runs Azure, every service name you mention is unfamiliar. "We use S3 for blob storage" means nothing to an Azure team that calls it "Blob Storage in Azure Storage Accounts." This friction erodes confidence.

---

## The Cloud Translation Table

| Capability | AWS | Azure | GCP |
|---|---|---|---|
| Object Storage | S3 | Blob Storage | Cloud Storage |
| Serverless Compute | Lambda | Azure Functions | Cloud Functions |
| Container Orchestration | EKS | AKS | GKE |
| Managed Database (SQL) | RDS / Aurora | Azure SQL Database | Cloud SQL |
| Managed Database (NoSQL) | DynamoDB | Cosmos DB | Firestore / Bigtable |
| Data Warehouse | Redshift | Synapse Analytics | BigQuery |
| Streaming | Kinesis | Event Hubs | Pub/Sub |
| API Gateway | API Gateway | API Management | Apigee |
| Identity & Access | IAM | Azure AD / Entra ID | Cloud IAM |
| CDN | CloudFront | Azure CDN / Front Door | Cloud CDN |
| Monitoring | CloudWatch | Azure Monitor | Cloud Monitoring |
| Secret Management | Secrets Manager | Key Vault | Secret Manager |
| Private Connectivity | PrivateLink | Private Endpoint | Private Service Connect |

## The Positioning Rule

When presenting to a prospect, always translate your architecture into their cloud's terminology—even if your product runs on a different cloud.

> *"Our platform runs on AWS, but your data never leaves your Azure environment. We connect via Azure Private Endpoint, and all data at rest is encrypted using your Azure Key Vault CMKs."*

This sentence demonstrates three things simultaneously: you understand their security model, you can integrate with their cloud, and their data stays under their control.

> **War Story:** An SE was demoing to a major bank that runs exclusively on Azure. The SE kept saying "Lambda functions" and "S3 buckets" throughout the demo. The bank's Lead Architect stopped the demo and said: "Do you even know what cloud we use?" The SE had to backtrack and retranslate every concept into Azure terminology. By then, the damage was done—the SE looked unprepared. The competitor, who had pre-translated their entire deck into Azure language, won the deal.

> **Failure Mode:** "The AWS-Only SE." This SE learned everything on AWS and cannot translate concepts to Azure or GCP. When a prospect asks "How does your platform integrate with Cosmos DB?" the SE freezes because they only know DynamoDB. The prospect interprets this as a platform limitation, not a knowledge gap.

**Interview Angle:**
"How do you adapt your technical presentations for different cloud environments?"
A strong answer is: "Before every engagement, I identify the prospect's primary cloud provider and translate my entire architecture narrative into their terminology. If they're on Azure, I use Azure AD, Blob Storage, and AKS instead of IAM, S3, and EKS. I also call out specific integration points using their cloud's native services—Private Endpoint, Key Vault, Event Hubs—to demonstrate that our platform operates natively in their environment."

🟡 **Mid-Level** — Speaking your prospect's cloud language is not optional. It is the baseline for technical credibility.

---
