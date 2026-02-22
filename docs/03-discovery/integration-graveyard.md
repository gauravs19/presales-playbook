#### 3.3.4 Identifying the Hidden Integration Graveyard

Every enterprise has an integration graveyard — a collection of point-to-point integrations, API connections, file-based data transfers, and "temporary" workarounds that were built over years, rarely documented, and never decommissioned. These integrations are invisible until your solution needs to interact with them. Then they become the primary source of implementation delays, POC failures, and post-sale escalations.

Your job in technical discovery is to find the graveyard before you build on top of it.

1. **Ask how many systems feed into the system you're replacing.** The prospect says they want to replace System A. You ask: "How many other systems feed data into System A, or receive data from it?" The answer is almost always larger than expected. "We have 5 main integrations." "Tell me about each one." As they describe them, the number grows: "Well, there's also the finance extract... and the compliance reporting feed... and the Excel macro that pulls data for the VP's dashboard." The actual number is usually 2–3x the initial estimate. Each hidden integration is a dependency your solution needs to handle.

2. **Map the integration technology.** For each integration, understand: what technology it uses (API, SFTP, database link, file drop, custom script), who built it (in-house engineer, consultant, vendor), when it was built (2 years ago vs. 10 years ago), and who maintains it now (named person vs. "nobody"). Integrations built by consultants who left 5 years ago and maintained by nobody are the most dangerous — they're undocumented, fragile, and essential. When they break during your implementation, nobody knows how to fix them.

3. **Ask about the "Friday afternoon file."** Every company has at least one critical process that depends on a manual file transfer, an Excel transformation, or a cron job running on someone's desktop. "Is there any step in this process that requires someone to manually move a file, run a script, or copy data from one place to another?" If the answer is yes (and it almost always is), you've found a hidden dependency that your architecture needs to account for. The Friday afternoon file is rarely in the architecture diagram — but it's always in the critical path.

4. **Identify the data quality handshake points.** Where does data cross a boundary between two systems? Each crossing is a potential quality degradation point: schema mismatches, data type conversions, timezone handling, null value treatment, encoding differences. Ask: "When data moves from System A to System B, is there a quality check at the boundary? Or does it flow through unchecked?" Unchecked boundaries are where data quality problems accumulate — and where your solution will be blamed for issues that pre-existed your arrival.

5. **Build the integration dependency graph.** After your discovery, create a visual map of all integrations touching the prospect's current system and the system you're proposing to implement. Share this map with the prospect: "Here's what I've documented about your integration landscape. Does this look complete?" The prospect will invariably add 2–3 integrations you missed — and thank you for creating a document that didn't previously exist. This map becomes a planning tool for implementation and a trust-building artefact for the deal.

> **War Story:** An SE was designing a solution to replace a prospect's legacy data warehouse. The prospect described their architecture as "simple — just 3 source systems feeding the warehouse." During integration discovery, the SE asked about every data flow in and out. The actual count: 3 primary source systems, 7 secondary feeds (compliance extracts, CRM syncs, log aggregation), 4 outbound feeds (BI tools, operational dashboards, partner data exchanges), and 2 "temporary" scripts that had been running for 4 years. Total: 16 integrations, not 3. If the SE had designed the solution based on "3 source systems," the implementation would have failed spectacularly when the other 13 integrations went unaccounted for. The integration map the SE built became the most referenced document in the entire implementation project.

> **Failure Mode:** The SE who accepts the prospect's integration description at face value. "We have a simple architecture" always means "I'm describing the parts I remember." No enterprise architecture is simple. The SE who doesn't probe for hidden integrations designs a solution that works in the POC and breaks in production — because the POC environment didn't include the 12 integrations nobody mentioned.

**Interview Angle:**
"How do you ensure your solution design accounts for a prospect's full integration landscape?"
A strong answer describes a systematic integration discovery process (counting flows, mapping technology, identifying owners, building dependency graphs). A weak answer accepts the prospect's initial description without probing.

**Practical Reference: The Integration Discovery Matrix**

| Integration | Source → Target | Technology | Built By | Maintained By | Documented? | Criticality | Risk Level |
|------------|----------------|-----------|----------|--------------|-------------|-------------|-----------|
| | System A → DW | API | In-house | DevOps team | Yes | High | Low |
| | CRM → DW | SFTP file | Consultant (gone) | Nobody | No | Medium | High |
| | Excel → Dashboard | Manual copy | VP's assistant | VP's assistant | No | Low | High |

**If the "Documented?" column has more than 2 "No" entries, your implementation plan needs a dedicated integration discovery phase.**

🟡 **Mid-Level** — The integration graveyard is where implementations go to die. Find it during discovery, not during deployment.

---
