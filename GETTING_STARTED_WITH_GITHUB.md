# Getting Started with GitHub Deployment

This guide walks you through deploying the Colocation Finder to your GitHub account, even if you're new to GitHub.

## Prerequisites

- A GitHub account ([Sign up here](https://github.com/join))
- Git installed on your computer ([Download here](https://git-scm.com/downloads))
- Node.js 18+ installed ([Download here](https://nodejs.org/))

## Step-by-Step Guide

### Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `colocation-finder`
   - **Description**: "A web app to find colocation data centers from multiple providers"
   - **Visibility**: Public (required for free GitHub Pages)
   - **DO NOT** check "Initialize this repository with a README"
5. Click **"Create repository"**

### Step 2: Configure Git (First Time Only)

If you haven't used Git before, configure it:

```bash
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"
```

### Step 3: Initialize and Push Your Code

Open Terminal (Mac/Linux) or Command Prompt (Windows) and navigate to your project:

```bash
# Navigate to your project directory
cd path/to/colocation-finder

# Initialize Git repository
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Colocation Finder webapp"

# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/colocation-finder.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note**: You may be prompted to enter your GitHub username and password. If you have 2FA enabled, you'll need to use a [Personal Access Token](https://github.com/settings/tokens) instead of your password.

### Step 4: Deploy Backend to Vercel

1. Go to [Vercel](https://vercel.com)
2. Click **"Sign Up"** and choose **"Continue with GitHub"**
3. Authorize Vercel to access your GitHub account
4. Click **"Add New Project"**
5. Find and import your `colocation-finder` repository
6. Configure the project:
   - **Framework Preset**: Other
   - **Root Directory**: `backend`
   - **Build Command**: (leave empty)
   - **Output Directory**: (leave empty)
   - **Install Command**: `npm install`
7. Click **"Deploy"**
8. Wait for deployment to complete (1-2 minutes)
9. **Copy your backend URL** (e.g., `https://colocation-finder-abc123.vercel.app`)

### Step 5: Configure Frontend for Production

1. Create a file `frontend/.env.production` with your backend URL:

```bash
# In your terminal
cd frontend
echo "VITE_API_URL=https://your-backend-url.vercel.app" > .env.production
```

Replace `https://your-backend-url.vercel.app` with your actual Vercel URL from Step 4.

2. Commit this change:

```bash
cd ..
git add frontend/.env.production
git commit -m "Add production API URL"
git push
```

### Step 6: Deploy Frontend to GitHub Pages

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (if not already done)
npm install

# Build the project
npm run build

# Deploy to GitHub Pages
npm run deploy
```

This will:
- Build your React app
- Create a `gh-pages` branch
- Push the built files to that branch

### Step 7: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** (top menu)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Choose **"gh-pages"** branch
   - Select **"/ (root)"** folder
5. Click **"Save"**
6. Wait 1-2 minutes for deployment

Your site will be available at:
```
https://YOUR_USERNAME.github.io/colocation-finder/
```

### Step 8: Verify Deployment

1. Open your GitHub Pages URL in a browser
2. You should see the Colocation Finder app
3. Test the features:
   - Click "Refresh Data" to fetch locations
   - Try filtering by provider
   - Switch to map view
   - Search for a city

## Troubleshooting

### Issue: "Permission denied" when pushing to GitHub

**Solution**: You need to authenticate. Use one of these methods:

1. **HTTPS with Personal Access Token**:
   - Go to GitHub Settings > Developer settings > Personal access tokens
   - Generate new token with `repo` scope
   - Use token as password when prompted

2. **SSH Key**:
   - Follow [GitHub's SSH guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Issue: GitHub Pages shows 404

**Solutions**:
1. Wait 2-3 minutes after enabling GitHub Pages
2. Check that `gh-pages` branch exists in your repository
3. Verify the base path in `frontend/vite.config.js` matches your repo name
4. Clear browser cache and try again

### Issue: Frontend can't connect to backend

**Solutions**:
1. Verify your backend is deployed and accessible
2. Check `frontend/.env.production` has the correct API URL
3. Rebuild and redeploy frontend:
   ```bash
   cd frontend
   npm run build
   npm run deploy
   ```

### Issue: "npm: command not found"

**Solution**: Install Node.js from [nodejs.org](https://nodejs.org/)

### Issue: Backend deployment fails on Vercel

**Solutions**:
1. Check that `backend/package.json` exists
2. Verify Node.js version in `backend/package.json`:
   ```json
   "engines": {
     "node": ">=18.0.0"
   }
   ```
3. Check Vercel deployment logs for specific errors

## Updating Your Deployment

### Update Backend

```bash
# Make your changes
git add .
git commit -m "Update backend"
git push
```

Vercel will automatically redeploy.

### Update Frontend

```bash
# Make your changes
git add .
git commit -m "Update frontend"
git push

# Rebuild and redeploy
cd frontend
npm run build
npm run deploy
```

## Using the Automated Script

We've included a script to automate the GitHub setup:

```bash
chmod +x init-repo.sh
./init-repo.sh
```

This script will:
- Initialize Git repository
- Configure the project
- Add remote
- Create initial commit
- Provide step-by-step instructions

## Setting Up GitHub Actions (Optional)

For automatic deployment on every push:

1. Go to your repository on GitHub
2. Click **"Settings"** > **"Secrets and variables"** > **"Actions"**
3. Click **"New repository secret"**
4. Add secret:
   - Name: `VITE_API_URL`
   - Value: Your Vercel backend URL
5. Push any change to trigger deployment

The workflow is already configured in `.github/workflows/deploy.yml`.

## Custom Domain (Optional)

### For Frontend (GitHub Pages)

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Add a `CNAME` file in `frontend/public/`:
   ```
   yourdomain.com
   ```
3. Configure DNS with your registrar:
   - Type: CNAME
   - Name: www (or @)
   - Value: YOUR_USERNAME.github.io
4. In GitHub repository settings > Pages, add your custom domain
5. Enable "Enforce HTTPS"

### For Backend (Vercel)

1. Go to your Vercel project settings
2. Click "Domains"
3. Add your domain (e.g., api.yourdomain.com)
4. Follow DNS configuration instructions
5. Update `frontend/.env.production` with new API URL

## Security Best Practices

1. **Never commit sensitive data**:
   - Use `.env` files (already in `.gitignore`)
   - Use GitHub Secrets for CI/CD

2. **Keep dependencies updated**:
   ```bash
   npm audit
   npm update
   ```

3. **Enable 2FA on GitHub**:
   - Go to Settings > Password and authentication
   - Enable two-factor authentication

4. **Review permissions**:
   - Only grant necessary permissions to third-party apps
   - Regularly review authorized applications

## Getting Help

- **GitHub Docs**: [docs.github.com](https://docs.github.com)
- **Vercel Docs**: [vercel.com/docs](https://vercel.com/docs)
- **Project Issues**: Open an issue on your repository
- **Community**: GitHub Discussions

## Next Steps

Once deployed:

1. ⭐ Star your repository
2. 📝 Update README.md with your live URLs
3. 🎨 Customize the design
4. 🚀 Add new features
5. 🤝 Invite collaborators
6. 📢 Share with the community

## Checklist

- [ ] GitHub account created
- [ ] Repository created on GitHub
- [ ] Code pushed to GitHub
- [ ] Backend deployed to Vercel
- [ ] Frontend configured with backend URL
- [ ] Frontend deployed to GitHub Pages
- [ ] GitHub Pages enabled
- [ ] Site is accessible and working
- [ ] README updated with live URLs

## Congratulations! 🎉

You've successfully deployed your Colocation Finder app to GitHub!

Your app is now live at:
- **Frontend**: `https://YOUR_USERNAME.github.io/colocation-finder/`
- **Backend**: `https://your-backend.vercel.app`

Share it with the world! 🌍

---

**Need more help?** Check out:
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [FAQ.md](FAQ.md) - Common questions
- [SETUP.md](SETUP.md) - Local development setup
