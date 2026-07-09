# Docker & Kubernetes Local Sandbox

The SE who depends entirely on the shared demo cloud is one VPN hiccup, one noisy-neighbor incident, or one "scheduled maintenance window" away from presenting slides instead of software. A local containerized sandbox — your product (or a faithful subset) running on your own machine via Docker Compose or a single-node Kubernetes — is the SE's equivalent of a musician owning their instrument: rehearsal without booking studio time, experiments without breaking anything shared, and a fallback when the stage catches fire.

This is not about becoming a platform engineer. It's about owning a small, disposable, resettable copy of the thing you sell.

---

## What the Sandbox Buys You

1. **Rehearsal without consequences.** Practice the [failure-simulation demo](docs/05-demo-excellence/failure-simulation.md) ten times, kill containers mid-transaction, restore, repeat — on the shared environment this is vandalism; locally it's Tuesday.
2. **Real answers to integration questions.** "Does your webhook fire before or after the commit?" is answerable in two minutes against a local stack, versus filing a ticket against the shared one. SEs with sandboxes give [fewer confidently-wrong answers](docs/08-technical-depth/talking-about-unknown-tech.md).
3. **The offline demo.** Customer site with hostile guest Wi-Fi, a booth, a flight — `docker compose up` and you're demoing from localhost while competitors apologize for their SaaS login page.
4. **Genuine technical credibility.** When the prospect's platform team realizes mid-call that you're comfortably reading container logs, that's [technical trust](docs/01-foundations/technical-trust-gap.md) earned at the layer they live in.

## A Sane Setup (and Where the Line Is)

- **Compose first, Kubernetes only if your product story needs it.** A `docker-compose.yml` covers most demo topologies with a tenth of the operational surface. Reach for k3d/kind/minikube when what you *sell* is Kubernetes-adjacent — operators, Helm charts, service mesh behavior — and the audience will want to see it scheduled onto a real cluster.
- **Everything as files in a repo.** Compose file, seed scripts, [demo data generators](docs/10-tools/dummy-data-generation.md), a `reset.sh`, and a README your teammates can follow — the sandbox is [version-controlled like any other demo asset](docs/10-tools/version-controlling-environments.md).
- **One-command reset is the whole point.** `docker compose down -v && docker compose up -d && ./seed.sh` — under five minutes back to pristine. A sandbox you're afraid to break has failed at its only job.
- **Know your resource envelope.** A laptop that's running the full stack plus Zoom plus screen-share will remind you of thermodynamics mid-demo. Know what you can *demo* locally versus what you can *verify* locally.
- **Never let it impersonate production scale.** The local stack answers "how does it behave"; it cannot answer "how does it perform at your volumes." Blurring that line in front of a prospect is a [simplification that lies](docs/04-solution-design/simplifying-without-lying.md) — and their engineers will catch it.

> **War Story:** An SE arrived at a manufacturer's plant for a final-stage demo to find the promised network was a guest VLAN that blocked, apparently, everything invented after 2015 — the shared demo cloud unreachable, the backup 4G dongle showing one bar. The SE's laptop carried the standard team sandbox: full stack, seeded overnight with [industry-plausible data](docs/10-tools/dummy-data-generation.md). The demo ran from localhost, projected in the plant's conference room, including the failure-recovery scene run *live* by killing a container — which the plant's automation engineers, who spent their lives distrusting network dependencies, loved more than any slide about resilience. The deal's post-mortem quote from the champion: "The other vendor couldn't demo because our Wi-Fi was bad. Think about what that predicts."

> **Failure Mode:** The SE whose sandbox becomes a hobby. Weeks disappear into a seventeen-service Kubernetes homelab with ingress controllers, cert rotation, and a Grafana stack — none of which any prospect will ever see — while [discovery summaries](docs/13-templates/discovery-summary.md) go unwritten and the actual demo narrative stagnates. The sandbox is infrastructure *for selling*; the moment its maintenance exceeds an hour or two a month, it's consuming the deal time it was supposed to protect. Build the minimum that rehearses your story, automate its reset, and go back to selling.

**Interview Angle:**
"How do you prepare for a demo when you can't rely on the standard environment?"
Strong answers include a personally-owned fallback — local containers, an offline path, a rehearsed reset — plus honesty about its limits versus production. Weak answers reveal total dependence on shared infrastructure ("I'd reschedule"), which is an availability statement about every demo they'll ever give.

🟡 **Mid-Level** — Own a copy of what you sell, small enough to break and scripted enough to rebuild before the coffee's done.

---
