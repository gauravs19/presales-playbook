# Explaining Encryption Without Losing the Room

Every enterprise deal involves an encryption conversation. The problem is that most SEs either over-explain it (losing the business audience) or under-explain it (failing the technical evaluator). You must be able to calibrate your encryption explanation to the room.

---

## The Three Layers

### Layer 1: Encryption at Rest
Data stored on disk (databases, file systems, backups) is encrypted so that even if someone steals the physical hard drive, they cannot read the data.

**For the CTO:** "All data at rest is encrypted using AES-256 via your cloud provider's KMS. You can bring your own customer-managed keys (CMKs), giving your InfoSec team full control of the encryption lifecycle—including the ability to revoke access."

**For the VP:** "Even if someone physically stole our server, they cannot read your data without the encryption key—which only your team controls."

### Layer 2: Encryption in Transit
Data moving between systems (API calls, database queries, user sessions) is encrypted so that it cannot be intercepted or tampered with during transmission.

**For the CTO:** "All traffic uses TLS 1.3. Internal service-to-service communication uses mTLS with certificate rotation managed by our service mesh."

**For the VP:** "When your data moves from your browser to our servers, or between our internal services, it is encrypted in a way that makes it invisible to anyone intercepting the network traffic."

### Layer 3: Encryption in Use (Advanced)
Data is encrypted even while being processed in memory. This is the most advanced and least common form, typically using technologies like Intel SGX, AMD SEV, or AWS Nitro Enclaves.

**For the CTO:** "For highly sensitive workloads, we support confidential computing via AWS Nitro Enclaves, ensuring data is encrypted even in memory during processing."

**For the VP:** "For your most sensitive data, we offer an option where the data remains encrypted even while our system is actively working with it—so at no point is unencrypted data accessible."

## Customer-Managed Keys (CMK) — The Trust Play

The single most powerful encryption statement you can make in an enterprise deal:

> *"You control the keys. If you revoke the key, we cannot access your data. Period."*

This eliminates the prospect's deepest fear: that your company can read their data.

> **War Story:** During a security review for a healthcare deal, the CISO asked: "If we terminate the contract, can your engineers still access our patient data?" The SE responded: "No. Your data is encrypted with your CMKs stored in your AWS KMS account. When you revoke the key, our platform physically cannot decrypt the data—even if we wanted to. Additionally, we provide a Certificate of Data Destruction 30 days post-termination." The CISO approved the vendor within 48 hours.

> **Failure Mode:** "The Jargon Bomber." This SE rattles off "AES-256-GCM with HKDF-derived subkeys and ECDHE key exchange" to a room that includes a VP of Operations who just wanted to know if their data is safe. The VP tunes out, assumes the SE is hiding something behind jargon, and flags a concern to procurement.

**Interview Angle:**
"How do you explain encryption to non-technical stakeholders?"
A strong answer is: "I use a layered approach. For the VP, I explain encryption in plain language: 'Your data is locked with a key that only you control. Nobody—including us—can read it without that key.' For the CTO, I go deep: AES-256, TLS 1.3, mTLS, customer-managed KMS keys. The key is reading the room and calibrating the explanation to the audience's technical depth."

🟡 **Mid-Level** — Every SE must explain encryption at two levels: the executive summary and the technical deep dive. Master both.

---
