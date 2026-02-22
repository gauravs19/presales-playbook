#### 5.4.3 CLI and Terminal Screen Hygiene

When presenting to DevOps engineers, SREs, or system administrators, you will invariably need to open a Command Line Interface (CLI) or a terminal window. These personas live in the terminal.

However, an unhygienic terminal window instantly destroys an SE's credibility. If your terminal is filled with garbled text, misspelled path errors, or irrelevant output from last week's work, the audience will assume you do not know what you are doing.

A Master-Class SE curates their terminal screen as carefully as they design an executive dashboard.

**1. The "Clear" Command is Your Best Friend**
Before executing any command on a live screen share, ensure the terminal is completely blank. The cognitive load required for an audience to parse a terminal screen is massive. If they see 40 lines of old error messages, their brain is busy reading the errors, not watching what you are typing right now.
*SE Action:* Always, always type `clear` (Linux/Mac) or `cls` (Windows) before sharing your screen, and immediately after a command finishes outputting the required result.

**2. Font Size and Color Contrast**
The default terminal font size (usually 11pt) is impossible to read over Zoom compression, especially for someone joining the call on a laptop.
*SE Action:* Permanently increase your terminal profile font size to at least 16pt for presentations. Use a high-contrast theme (classic green-on-black or white-on-black). Avoid translucent backgrounds where your desktop wallpaper bleeds through and distorts the text. 

**3. Aliases and Scripts (The Double-Edged Sword)**
Using `.bashrc` or `.zshrc` aliases (e.g., typing `deploy-prod` instead of a 150-character `kubectl apply -f ./manifests...` string) is excellent for personal speed, but terrible for live demonstrations. 
If an SRE sees you type an alias, they don't know what you just did. They assume you ran a magic script that hides the complexity of your product.
*SE Action:* Do not use custom aliases in a demo. Manually type the explicit command structure (e.g., `docker-compose up -d`) so the audience can see exactly how the tool is invoked natively.
*Exception:* If the command is absurdly long (like an AWS CLI string with 10 flags), save it in a clean text file visible on screen, and copy-paste it line-by-line while verbally explaining what each flag does.

**4. The "No Typos" Rule (Using History)**
Typing errors during a live CLI demo ruin the momentum. If you misspell a directory and get a `No such file or directory` error, the prospect's confidence dips slightly.
*SE Action:* Do not rely on your typing speed under pressure. Use the terminal's reverse-search history (`Ctrl+R`) to pull up perfectly executed commands from your practice run an hour prior. 
*Execution:* Press `Ctrl+R`, start typing the command prefix, hit the right arrow to accept the perfect syntax, and hit Enter.

**5. Splitting the Pane (Transparency)**
When showing causality (e.g., executing a command that triggers a log event elsewhere), do not constantly Alt-Tab between windows.
*SE Action:* Use a terminal multiplexer like `tmux` or modern terminal tabs (e.g., iTerm2) to split the screen vertically.
*Execution:* The left pane shows your CLI input. The right pane runs a continuous `tail -f` on the application logs. When you hit Enter on the left, the logs scrolling on the right instantly prove the command worked. This visual confirmation is incredibly powerful for technical buyers.

> **War Story:** An SE was demonstrating a Kubernetes platform to a room of Senior SREs. The SREs were arms crossed, skeptical of the UI. The SE dragged over his customized Zsh terminal (split panes, git-branch status visible in the prompt, distinct highlighting). Without breaking eye contact with the lead SRE, he typed the 4 deployment commands manually, split the pane to show the pods spinning up in real-time, and cleared the screen. The lead SRE uncrossed his arms and said, "Alright, finally someone who actually uses this stuff in production."

> **Failure Mode:** "The Typo Spiral." The SE misremembers the IP address of a server. They ping the wrong box. Then they misspell `ssh`. Then they paste the wrong RSA key path. After 5 minutes of terminal errors, the technical audience has mentally disqualified the SE and the product entirely.

**Interview Angle:**
"How do you ensure a highly technical terminal demonstration remains easy to follow over a video call?"
A strong answer is: "I prioritize terminal hygiene. I increase the font size significantly, use a high-contrast theme, keep the pane split to show real-time logs alongside execution commands, and constantly use the `clear` command to reduce cognitive load on the audience by showing only a pristine screen."

🟡 **Senior-Level** — Your terminal is your workbench. Keep it clean, bright, and organized before inviting the customer to look at it.

---
