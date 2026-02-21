# Deployment Guide - GitHub Pages Setup

This guide walks through deploying the Presales Playbook to GitHub Pages using Docsify.

## Prerequisites

- GitHub account
- Git installed locally
- Repository access to `ag-wks`

## Deployment Steps

### Step 1: Repository Configuration

1. **Navigate to Repository Settings**
   - Go to your GitHub repository
   - Click **Settings** → **Pages**

2. **Configure GitHub Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/presales-playbook` or `/ (root)` depending on your setup
   - Click **Save**

3. **Custom Domain (Optional)**
   - Add a custom domain: `playbook.yourdomain.com`
   - Configure DNS with your domain provider
   - Enable HTTPS (recommended)

### Step 2: Verify Docsify Setup

The playbook uses Docsify for documentation rendering. Ensure these files exist:

```
presales-playbook/
├── index.html          # Docsify configuration
├── README.md           # Homepage content
├── _sidebar.md         # Navigation menu
└── docs/               # Content directory
```

### Step 3: Local Testing (Optional but Recommended)

Test the site locally before deploying:

```bash
# Install docsify-cli globally
npm install -g docsify-cli

# Navigate to presales-playbook directory
cd presales-playbook

# Serve the site locally
docsify serve .

# Open browser to http://localhost:3000
```

### Step 4: Push to GitHub

```bash
# Stage all changes
git add presales-playbook/

# Commit changes
git commit -m "Add presales playbook structure and initial content"

# Push to GitHub
git push origin main
```

### Step 5: Access Your Site

After pushing, GitHub Pages will automatically build and deploy your site:

- **Default URL**: `https://YOUR_USERNAME.github.io/ag-wks/presales-playbook/`
- **Custom Domain**: `https://playbook.yourdomain.com` (if configured)

**Note**: Initial deployment may take 1-2 minutes. Subsequent updates are faster.

## GitHub Actions Workflow (Recommended)

For automated deployment and validation, create a GitHub Actions workflow:

**File**: `.github/workflows/deploy-playbook.yml`

```yaml
name: Deploy Presales Playbook

on:
  push:
    branches: [main]
    paths:
      - 'presales-playbook/**'
  workflow_dispatch:
