#### 5.5.1 The 30-Minute Pre-Flight Checklist

A professional pilot never assumes the plane works just because it flew yesterday. They execute a rigorous pre-flight checklist before every single takeoff. 

Junior SEs often jump into a demo call two minutes before it starts, log into the SaaS portal alongside the prospect, and hope the environment is stable. This is how demos die. A Master-Class SE uses a strict, non-negotiable 30-minute pre-flight checklist to eliminate variable risks before the prospect ever joins the Zoom room.

- [ ] **1. The "Clean Slate" Reset**
  Never reuse a dirty demo environment. If the prospect sees old test data ("Test_Acc_123", "Asdfghjkl"), the illusion of a premium enterprise product is instantly destroyed.
  *Action:* Run your environment cleanup scripts. Delete yesterday's test users. Reset dashboards. Ensure the data visible is pristine and explicitly relevant to today's prospect.

- [ ] **2. The Hard Refresh (Cache Purge)**
  Browsers cache assets aggressively. If your product engineering team pushed a silent update overnight, your cached browser might render the UI incorrectly or break a critical button.
  *Action:* Perform a hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`) on every single tab you plan to show. Confirm the UI is rendering the latest production build perfectly.

- [ ] **3. The "Path of Execution" Dry Run**
  Do not assume a button works. Click it. 
  *Action:* Physically execute the exact 5 or 6 critical clicks of your "Aha!" moment. Generate the report. Trigger the webhook. If the staging environment is experiencing 10-second latency today due to load testing, you need to know *before* the prospect is watching, so you can adjust your narrative pacing to cover the lag.

- [ ] **4. The Credential Sanity Check**
  Nothing destroys credibility faster than typing an incorrect password three times while sharing your screen, locking the admin account, and forcing a password reset in front of the CIO.
  *Action:* Log out of every persona account. Log back in manually. If you are demonstrating RBAC (Role-Based Access Control) by switching between an "Admin" and a "Read-Only User", open two different browsers (e.g., Chrome and Firefox) and preemptively log into both. 

- [ ] **5. The "Desktop Mute"**
  Your personal digital life must be eradicated from the screen.
  *Action:* Turn on "Do Not Disturb" (Mac) or "Focus Assist" (Windows) to block all OS-level notifications. Quit Slack, Microsoft Teams, and WhatsApp Desktop entirely. (Closing the window is not enough; quit the background processes). Hide your desktop icons.

> **War Story:** An SE was scheduled to demo a cloud security platform to a massive retail bank. 30 minutes before the call, during his pre-flight check, he clicked the "Generate Compliance PDF" button. It failed with a 500 error. He immediately checked the release notes; engineering had pushed a patch that broke the PDF generation service 10 minutes prior. Because he found it during pre-flight, he didn't panic on the live call. He proactively pivoted the narrative: "I'm going to show you the live, interactive compliance dashboard today instead of a static PDF, because our banking clients prefer real-time drill-down capabilities." The prospect agreed, and the SE bypassed the broken feature entirely.

> **Failure Mode:** The "Wait, Let Me Log In" SE. The SE shares their screen, navigates to the login page, realizes their password manager extension isn't working, spends 45 seconds hunting for the password in a notepad file, and accidentally displays a list of competitor passwords on screen.

**Interview Angle:**
"Walk me through your exact routine in the 30 minutes before a high-stakes demonstration begins."
A strong answer is: "I execute a strict pre-flight checklist. I purge browser caches, reset my demo environment to a pristine state, physically dry-run the exact sequential clicks of my core use cases to check for latency, and aggressively silence all OS and application notifications to ensure a flawless execution."

🟡 **Entry-Level** — Professionals don't rely on luck. They rely on checklists.

---
