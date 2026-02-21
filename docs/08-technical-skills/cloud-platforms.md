# Cloud Platforms in Presales Engineering

As enterprises rapidly modernize, a profound understanding of cloud platforms is no longer optional for Presales Engineers—it is a core competency. Whether you are selling a SaaS product, an infrastructure tool, or an enterprise application, you must speak the language of the cloud to build credibility with technical stakeholders.

---

## ☁️ The Big Three Providers

A Presales Engineer must be fluent in the terminology and architectural models of the three major hyper-scalers: AWS, Azure, and Google Cloud Platform (GCP).

### 1. Amazon Web Services (AWS)
The dominant force in public cloud. AWS is often favored by engineering-heavy organizations and startups.
- **Compute**: EC2 (Virtual Machines), ECS/EKS (Containers/Kubernetes), Lambda (Serverless).
- **Storage**: S3 (Object Storage), EBS (Block Storage).
- **Databases**: RDS (Relational), DynamoDB (NoSQL), Redshift (Data Warehouse).
- **Networking**: VPC (Virtual Private Cloud), Route 53 (DNS), Direct Connect.
- **In Presales**: Frame your solution’s integration with AWS using terms like multi-AZ deployments, IAM roles, and CloudWatch metrics. 

### 2. Microsoft Azure
The go-to choice for enterprises deeply embedded in the Microsoft ecosystem. Azure is historically strong in hybrid cloud deployments and identity management.
- **Compute**: Azure Virtual Machines, AKS (Kubernetes), Azure Functions (Serverless).
- **Storage**: Azure Blob Storage, Azure Disk Storage.
- **Databases**: Azure SQL Database, Cosmos DB (NoSQL), Synapse Analytics.
- **Identity**: Active Directory (Entra ID) is the centerpiece of Azure security.
- **In Presales**: Frame your pitch around seamless integration with their existing Microsoft estate (Office 365, Teams) and hybrid flexibility via Azure Arc.

### 3. Google Cloud Platform (GCP)
Known for excellence in data analytics, machine learning, and its contributions to open-source (specifically Kubernetes).
- **Compute**: Compute Engine, GKE (Kubernetes Engine), Cloud Run (Serverless Containers).
- **Storage**: Cloud Storage.
- **Databases**: Cloud SQL, Spanner (Globally distributed relational), BigQuery (Data Warehouse).
- **In Presales**: If a prospect is leveraging GCP, they are likely data-driven. Anchor your discovery around their BigQuery usage and container orchestration pipelines.

---

## 🏗️ Cloud Architectural Models (IaaS, PaaS, SaaS)

Presales Engineers must correctly identify how their product maps to the client's preferred architectural model:

### 1. Infrastructure as a Service (IaaS)
The client rents raw compute, storage, and networking (e.g., EC2, Azure VMs).
- **Pros for the Client**: Ultimate control and customization.
- **Presales Strategy**: If you sell a tool that manages IaaS (like a monitoring agent or security scanner), you must prove how you simplify the massive complexity of managing raw infrastructure.

### 2. Platform as a Service (PaaS)
The provider manages the underlying infrastructure; the client focuses solely on application code (e.g., Heroku, AWS Elastic Beanstalk, Azure App Service).
- **Pros for the Client**: Faster time-to-market, drastically reduced DevOps overhead.
- **Presales Strategy**: If your product integrates with PaaS, highlight how you maintain their developer velocity without introducing new infrastructure bottlenecks.

### 3. Software as a Service (SaaS)
The provider manages the entire stack, from infrastructure to the application layer (e.g., Salesforce, Slack, Workday).
- **Pros for the Client**: Immediate value, zero maintenance burden.
- **Presales Strategy**: When selling SaaS, technical discussions focus heavily on APIs, Webhooks, Single Sign-On (SSO), and data sovereignty protocols rather than compute limits.

---

## 🌐 Navigating the "Multi-Cloud" Conversation

Enterprise clients often pursue a multi-cloud or hybrid-cloud strategy to avoid vendor lock-in and optimize costs. 

**The Challenge:** Multi-cloud introduces massive operational complexity—managing disparate security policies, networking protocols, and CI/CD pipelines across AWS, Azure, and on-premises data centers.

**The Presales Play:** 
If your solution is cloud-agnostic, this is your golden ticket.
> *"I understand you're moving workloads from your on-premise VMware environment to both AWS and Azure. A major challenge in multi-cloud is fragmented visibility. Our platform provides a single pane of glass, allowing your SRE team to monitor workloads identically, regardless of where they are running."*

---

## 🔐 Cloud Security and Shared Responsibility

Every presales conversation involving the cloud will eventually pivot to security. You must understand the **Shared Responsibility Model**.

The hyper-scaler (AWS/Azure/GCP) is responsible for the security **OF** the cloud (physical data centers, network infrastructure, host hypervisors). 
The customer is responsible for security **IN** the cloud (customer data, IAM policies, firewall rules, application code).

### Security Presales Checklist:
1. **Data Sovereignty**: Can you prove where the client's data physically resides to comply with GDPR or CCPA?
2. **Encryption**: Is data encrypted at rest (AES-256) and in transit (TLS 1.2+)?
3. **Identity**: Do you support SAML 2.0 or OIDC for Single Sign-On, enforcing the client's existing multi-factor authentication (MFA) policies?
4. **Compliance**: Are your cloud environments SOC 2 Type II, ISO 27001, or HIPAA compliant? Support your claims with a published trust center.

---
**Next Step**: Learn how these platforms connect by studying **[Integration Patterns](integration-patterns.md)** or dive deeper into handling the data layer in **[Data & Analytics](data-analytics.md)**.
