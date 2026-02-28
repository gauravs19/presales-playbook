# REST vs. GraphQL vs. Webhooks: Knowing When Each Matters

When a prospect asks "What's your API?", the answer is not just "REST." The SE must understand three distinct API paradigms and position the right one for the prospect's specific use case.

---

## The Three Paradigms

### REST (Representational State Transfer)
The default API standard. Resources are accessed via HTTP methods (GET, POST, PUT, DELETE) at specific endpoints.

**Best for:** CRUD operations, standard integrations, well-documented APIs.
**Weakness:** Over-fetching (getting more data than you need) and under-fetching (needing multiple calls to assemble one view).

### GraphQL
A query language that lets the client specify exactly which fields they need in a single request.

**Best for:** Complex UIs that need data from multiple resources in a single call, mobile applications with bandwidth constraints.
**Weakness:** Caching is harder. Query complexity can overwhelm the server if not rate-limited. Steeper learning curve.

### Webhooks (Event-Driven)
Instead of the client polling the server for changes, the server pushes events to the client when something happens.

**Best for:** Real-time notifications, integration triggers, reducing API call volume.
**Weakness:** The client must expose a publicly accessible endpoint. Delivery is not guaranteed without retry logic.

## The SE Positioning Matrix

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
