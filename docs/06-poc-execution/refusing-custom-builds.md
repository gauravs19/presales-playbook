#### 6.1.3 When to Refuse a Custom Build

The single most dangerous sentence an SE can utter during an enterprise discovery call is: "Oh, yeah, our engineers can build that integration specifically for your architecture during the POC."

You just sold vaporware. You committed your engineering team to unpaid, custom development to win a single logo, without the CTO’s permission.

**The "Custom Build" Fallacy**

Many presales engineers believe their job is to bend reality to accommodate whatever bizarre legacy system the prospect has running in their basement. If the prospect demands natively ingesting a proprietary mainframe log format during the 30-day POC, the junior SE will stay up till 2 AM writing a custom python script to hack a solution together.

What happens next?
1. The script breaks during the final demo.
2. The prospect assumes your entire enterprise platform is buggy.
3. You lose the deal.

**The Rule of Core Competency**
A POC is a controlled environment designed to prove your platform’s *existing* core competency. It is not a 30-day hackathon where you prototype roadmap features on the prospect’s behalf.

*Action:* You must learn to say "No" to custom builds. 

If a multinational bank says, "We will only run the POC if you build a custom SSO integration to our legacy 1998 identity provider," your response must be an immediate rejection. 
*The Re-frame:* "Building custom SSO integrations for a 14-day technical validation introduces unnecessary risk to both our timelines. Instead, let's execute the POC using a standard SAML integration to validate the core routing capabilities we discussed. Once we prove the ROI of the routing engine and are moving towards a commercial contract, our Professional Services team will scope the legacy SSO build for the full production rollout."

*What you just did:*
1. You eliminated the technical risk of a buggy custom script ruining the evaluation.
2. You protected 40 hours of your own time.
3. You shifted the cost of the custom build from "Free Presales Work" to "Paid Professional Services."
4. You proved to the prospect that you are a peer consultant, not an anxious vendor desperate to say "Yes."

**The Exception to the Rule**
There is exactly one time when an SE is allowed to execute a custom build during a POC. 

When your company is desperately trying to enter a completely new market vertical, and your VP of Product expressly authorizes your presales team to build the feature *because the entire engineering org needs to learn how to do it for the roadmap*. 

If the VP of Product didn't ask you to build it, you don't build it.

> **War Story:** An overly eager SE spent three weeks of a 30-day POC building a custom data parser for a prospect's proprietary IoT devices. He delivered it proudly. The prospect tested it once, said "Neat," and bought the competitor because the competitor spent those three weeks executing a flawless MVP data dashboard that proved how much money the core product would save. The SE built an integration for a feature the prospect didn't actually care about.

> **Failure Mode:** "The Hero Complex SE." This SE writes thousands of lines of custom code in every single POC to prove they are the smartest person in the room. They win 2 deals a year because they only have time for 3 evaluations. The entire presales organization's win rate tanks because a senior resource is doing the work of a Junior Systems Integrator.

**Interview Angle:**
"Describe a time you refused a prospect's request during a technical evaluation."
A strong answer is: "During a $400k evaluation, the prospect demanded we write a custom API to connect to an unsupported legacy DB before they would sign. I refused. I explained that building custom APIs before signing commercial contracts violated our engineering protocols, but I immediately offered a workaround using our standard batch-ingest tool to prove out the core value of our analytics engine while keeping the POC on a 14-day timeline. They respected the boundary and bought the software anyway."

🟡 **Senior-Level** — Your job is to prove value, not to be a free system integrator. Never build a custom solution for an unsigned contract.

---
