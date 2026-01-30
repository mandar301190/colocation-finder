# 🚀 Manual GitHub Pages Deployment Guide

If the automated GitHub Actions deployment fails, you can deploy manually using these steps.

## 🔧 Prerequisites

You'll need Node.js installed locally. If you don't have it:

**macOS (using Homebrew):**
```bash
brew install node
```

**Alternative - Download directly:**
Go to https://nodejs.org and download the LTS version.

## 📋 Manual Deployment Steps

### Step 1: Clone and Setup (if needed)
```bash
# If you don't have the repo locally
git clone https://github.com/mandar301190/colocation-finder.git
cd colocation-finder
```

### Step 2: Install Dependencies
```bash
cd frontend
npm install
```

### Step 3: Build the App
```bash
npm run build
```

### Step 4: Deploy to GitHub Pages
```bash
npm run deploy
```

This will:
- Build your app for production
- Create a `gh-pages` branch
- Push the built files to GitHub Pages

### Step 5: Enable GitHub Pages
1. Go to: https://github.com/mandar301190/colocation-finder/settings/pages
2. Source: **"Deploy from a branch"**
3. Branch: **"gh-pages"**
4. Folder: **"/ (root)"**
5. Save

## 🌐 Your Live App

After deployment, your app will be available at:
**https://mandar301190.github.io/colocation-finder/**

## 🔄 Update Your App

To update your live app:

```bash
# Make changes to your code
git add .
git commit -m "Update app"
git push origin main

# Rebuild and deploy
cd frontend
npm run build
npm run deploy
```

## 🐛 Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org

### "Permission denied"
```bash
sudo npm install -g npm
```

### Build fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Deploy fails
```bash
# Check if gh-pages is installed
npm install --save-dev gh-pages
npm run deploy
```

## ✅ Verify Deployment

1. Visit: https://mandar301190.github.io/colocation-finder/
2. Check that the map loads with 9 locations
3. Test filtering by provider
4. Try searching for cities

Your app should be fully functional with sample colocation data!

## 📞 Need Help?

If manual deployment doesn't work, you can also:

1. **Use GitHub Codespaces**: Edit and deploy directly in the browser
2. **Use Netlify**: Drag and drop the `frontend/dist` folder to netlify.com/drop
3. **Use Surge.sh**: Simple static hosting with `npm install -g surge && surge frontend/dist`

The manual deployment method is the most reliable way to get your app live on GitHub Pages!