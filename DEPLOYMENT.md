# Deployment Guide

This guide will help you deploy the Colocation Finder webapp to your GitHub account.

## Prerequisites

- GitHub account
- Node.js 18+ installed
- Git installed

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name it `colocation-finder`
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Push Code to GitHub

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Colocation Finder webapp"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/colocation-finder.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy Backend to Vercel

1. Go to [Vercel](https://vercel.com) and sign in with GitHub
2. Click "Add New Project"
3. Import your `colocation-finder` repository
4. Configure:
   - Framework Preset: Other
   - Root Directory: `backend`
   - Build Command: (leave empty)
   - Output Directory: (leave empty)
5. Click "Deploy"
6. Once deployed, copy your backend URL (e.g., `https://your-app.vercel.app`)

## Step 4: Configure Frontend

1. Create `frontend/.env.production` file:
```
VITE_API_URL=https://your-backend-url.vercel.app
```

2. Update `frontend/vite.config.js` base path with your repo name:
```javascript
base: '/colocation-finder/'
```

## Step 5: Deploy Frontend to GitHub Pages

```bash
cd frontend

# Install dependencies
npm install

# Build with production API URL
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Scroll to "Pages" in the left sidebar
4. Under "Source", select "gh-pages" branch
5. Click "Save"
6. Your site will be available at: `https://YOUR_USERNAME.github.io/colocation-finder/`

## Alternative: Deploy Backend to Railway

1. Go to [Railway](https://railway.app) and sign in with GitHub
2. Click "New Project"
3. Select "Deploy from GitHub repo"
4. Choose your `colocation-finder` repository
5. Configure:
   - Root Directory: `backend`
   - Start Command: `npm start`
6. Add environment variable: `PORT=3001`
7. Deploy and copy your backend URL

## Updating the App

### Update Backend
```bash
cd backend
git add .
git commit -m "Update backend"
git push
```
Vercel/Railway will automatically redeploy.

### Update Frontend
```bash
cd frontend
npm run build
npm run deploy
```

## Troubleshooting

### CORS Issues
If you encounter CORS errors, ensure your backend's CORS configuration allows your frontend domain.

### API Not Loading
- Check that `VITE_API_URL` in frontend is correct
- Verify backend is running and accessible
- Check browser console for errors

### GitHub Pages 404
- Ensure `base` in `vite.config.js` matches your repo name
- Verify gh-pages branch exists
- Check GitHub Pages settings

## Monitoring

- Backend logs: Check Vercel/Railway dashboard
- Frontend: Use browser developer tools
- API health: Visit `https://your-backend-url.vercel.app/` to check status

## Custom Domain (Optional)

### For Frontend (GitHub Pages)
1. Add a `CNAME` file in `frontend/public/` with your domain
2. Configure DNS with your domain provider
3. Enable HTTPS in GitHub Pages settings

### For Backend (Vercel)
1. Go to your project settings in Vercel
2. Add your custom domain
3. Configure DNS as instructed

## Security Notes

- The app uses public data sources
- No authentication is required
- Rate limiting is handled by the cache (1 hour TTL)
- Consider adding API keys if providers require them

## Support

For issues or questions, please open an issue on GitHub.
