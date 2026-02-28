# API Gateways, iPaaS, and the ESB Conversation

In almost every enterprise deal, the prospect will ask: "How does your platform integrate with our existing systems?" The answer depends entirely on the prospect's integration architecture—and most SEs don't understand the differences between these three paradigms well enough to position their product correctly.

---

## The Three Integration Paradigms

### 1. Enterprise Service Bus (ESB)
The legacy approach. A centralized middleware layer (e.g., MuleSoft, IBM Integration Bus, TIBCO) that routes all messages between systems through a single hub. Think of it as a massive telephone switchboard.

**When the prospect uses an ESB:**
*   Their IT team is likely conservative and risk-averse.
*   Integration changes require weeks of development and testing.
*   They are paying $500k+/year in ESB licensing.
*   Position your product as reducing their ESB dependency, not replacing it.

### 2. API Gateway (Kong, Apigee, AWS API Gateway)
A modern approach focused on managing, securing, and throttling API traffic. The gateway doesn't transform data—it controls access to APIs.

**When the prospect uses an API Gateway:**
*   Their architecture is likely microservices-based.
*   They value developer self-service and API-first design.
*   Position your product's API as a first-class citizen that plugs directly into their gateway with minimal configuration.

### 3. Integration Platform as a Service (iPaaS) (Workato, Boomi, Tray.io)
A cloud-native, low-code integration platform designed for business users and citizen integrators. Pre-built connectors handle most common SaaS-to-SaaS integrations.

**When the prospect uses iPaaS:**
*   They want fast, low-code integrations (days, not months).
*   Their IT team is small and cannot sustain custom middleware development.
*   Position your product's pre-built connectors and webhook support as iPaaS-friendly.

## The SE's Integration Positioning Matrix

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

---
