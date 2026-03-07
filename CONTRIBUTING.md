# Contributing to The Enterprise Presales Playbook

Thank you for your interest in contributing to The Enterprise Presales Playbook! 

This repository is designed to be a living, breathing document that captures the best practices, war stories, and tactical frameworks of high-performing Sales Engineers and Solutions Architects globally.

## How Can I Contribute?

### 1. Suggesting New Tactics & War Stories
If you have successfully defended a complex architecture, rescued a stalled POC, or developed a new discovery framework that consistently wins, we want it in the playbook.
* Please open an **Issue** using the "New Tactic Proposal" template.
* Outline the scenario, the tactic applied, and the outcome. If approved, we will invite you to draft the section via a Pull Request.

### 2. Fixing Errors or Updating Content
The technology landscape changes rapidly, as do enterprise sales methodologies. 
* If you spot a typo, a broken link, or a referenced technology/concept that is out of date, please submit a **Pull Request (PR)** directly. 
* See the *Submitting a Pull Request* section below.

### 3. Sharing Feedback
If you disagree with a framework presented in the playbook, or have a counter-example where a specific tactic failed, please open an Issue. The strongest playbooks are forged through rigorous debate.

## Submitting a Pull Request (PR)

1. **Fork** the repository and clone it locally.
2. **Create a new branch** off `main` for your contribution (e.g., `feat/add-new-poc-tactic` or `fix/broken-url`).
3. Make your changes in the appropriate Markdown file inside the `docs/` folder.
4. **Follow the formatting guidelines:**
    * Use standard Markdown.
    * Maintain an objective, authoritative tone (avoid overly colloquial language).
    * If introducing a new concept, provide a concrete, real-world "War Story" example to ground it.
5. Create a Pull Request against the `main` branch. 
6. Fill out the **Pull Request Template** completely.
7. A maintainer will review your PR. You may be asked to make formatting or content adjustments before the merge.

## Local Development

If you'd like to preview your changes locally using Docsify before submitting a PR:

1. You need Node.js installed on your machine.
2. Install docsify-cli globally: `npm i docsify-cli -g`
3. Serve the repository locally: `docsify serve .`
4. Open your browser to `http://localhost:3000`

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md). We are committed to fostering a welcoming and collaborative environment for professionals of all backgrounds.
