# 🚀 Deploy Your Colocation Finder - Step by Step

Hi! Your code is ready and committed locally. Follow these steps to deploy to GitHub.

## ✅ Current Status

- ✅ Git repository initialized
- ✅ All files committed
- ✅ Remote configured: https://github.com/mandar301190/colocation-finder.git
- ⏳ Ready to push to GitHub

---

## 📋 Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com/new
2. **Repository name**: `colocation-finder`
3. **Description**: "A web app to find colocation data centers from Equinix, Megaport, and 11:11 Systems"
4. **Visibility**: Public (required for free GitHub Pages)
5. **DO NOT** check "Initialize this repository with a README"
6. Click **"Create repository"**

---

## 📤 Step 2: Push Your Code to GitHub

Run this command in your terminal:

```bash
git push -u origin main
```

**Note**: You'll be prompted for your GitHub credentials. If you have 2FA enabled, you'll need to use a Personal Access Token instead of your password.

### Creating a Personal Access Token (if needed):
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token" → "Generate new token (classic)"
3. Give it a name: "Colocation Finder"
4. Select scopes: Check `repo` (full control of private repositories)
5. Click "Generate token"
6. **Copy the token** (you won't see it again!)
7. Use this token as your password when pushing

---

## 🖥️ Step 3: Deploy Backend to Vercel

1. **Go to Vercel**: https://vercel.com
2. Click **"Sign Up"** or **"Login"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub account
5. Click **"Add New Project"**
6. Find and import **"colocation-finder"** repository
7. **Configure the project**:
   - Framework Preset: **Other**
   - Root Directory: **backend**
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
   - Install Command: `npm install`
8. Click **"Deploy"**
9. Wait 1-2 minutes for deployment
10. **Copy your backend URL** (e.g., `https://colocation-finder-xyz.vercel.app`)

---

## 🌐 Step 4: Deploy Frontend to GitHub Pages

### 4.1 Configure Frontend with Backend URL

In your terminal, run:

```bash
cd frontend
echo "VITE_API_URL=https://your-backend-url.vercel.app" > .env.production
```

**Replace** `https://your-backend-url.vercel.app` with your actual Vercel URL from Step 3.

### 4.2 Install Dependencies and Deploy

```bash
npm install
npm run build
npm run deploy
```

This will:
- Install all frontend dependencies
- Build the production version
- Create a `gh-pages` branch
- Deploy to GitHub Pages

---

## ⚙️ Step 5: Enable GitHub Pages

1. Go to your repository: https://github.com/mandar301190/colocation-finder
2. Click **"Settings"** (top menu)
3. Scroll down and click **"Pages"** in the left sidebar
4. Under **"Source"**:
   - Select **"Deploy from a branch"**
   - Choose **"gh-pages"** branch
   - Select **"/ (root)"** folder
5. Click **"Save"**
6. Wait 2-3 minutes for deployment

---

## 🎉 Step 6: Access Your Live App!

Your app will be available at:

```
https://mandar301190.github.io/colocation-finder/
```

---

## 🔍 Verify Everything Works

1. **Open your app** in a browser
2. **Click "Refresh Data"** to fetch locations
3. **Try filtering** by provider (Equinix, Megaport, 11:11 Systems)
4. **Switch to Map view** to see locations on the map
5. **Search** for a city like "London" or "New York"

---

## 🐛 Troubleshooting

### Issue: "Permission denied" when pushing to GitHub

**Solution**: Use a Personal Access Token (see Step 2 above)

### Issue: Frontend shows "Failed to fetch locations"

**Solution**: 
1. Check that your backend is deployed and accessible
2. Verify the `VITE_API_URL` in `frontend/.env.production` is correct
3. Rebuild and redeploy:
   ```bash
   cd frontend
   npm run build
   npm run deploy
   ```

### Issue: GitHub Pages shows 404

**Solution**:
1. Wait 2-3 minutes after enabling GitHub Pages
2. Check that `gh-pages` branch exists in your repository
3. Clear browser cache and try again

### Issue: Map doesn't display

**Solution**:
1. Check browser console for errors
2. Disable ad blockers (they may block map tiles)
3. Refresh the page

---

## 📊 Your URLs

| Service | URL |
|---------|-----|
| GitHub Repository | https://github.com/mandar301190/colocation-finder |
| Backend (Vercel) | https://your-backend.vercel.app |
| Frontend (GitHub Pages) | https://mandar301190.github.io/colocation-finder/ |

---

## 🔄 Updating Your App

### Update Backend
```bash
# Make changes to backend files
git add .
git commit -m "Update backend"
git push
```
Vercel will automatically redeploy.

### Update Frontend
```bash
# Make changes to frontend files
git add .
git commit -m "Update frontend"
git push

# Rebuild and redeploy
cd frontend
npm run build
npm run deploy
```

---

## 📞 Need Help?

- **Documentation**: Check the docs in your repository
- **FAQ**: See FAQ.md for common questions
- **Issues**: Open an issue on GitHub

---

## ✅ Deployment Checklist

- [ ] Created GitHub repository
- [ ] Pushed code to GitHub
- [ ] Deployed backend to Vercel
- [ ] Copied backend URL
- [ ] Configured frontend with backend URL
- [ ] Deployed frontend to GitHub Pages
- [ ] Enabled GitHub Pages in settings
- [ ] Verified app is working

---

## 🎊 Congratulations!

Once you complete these steps, your Colocation Finder will be live and accessible to anyone on the internet!

**Your live app**: https://mandar301190.github.io/colocation-finder/

Share it with the world! 🌍

---

**Questions?** Check the comprehensive documentation in your repository or open an issue on GitHub.
