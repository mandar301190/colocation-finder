# 🚀 Quick Reference Card

## One-Line Commands

```bash
# Start everything locally
./start.sh

# Setup GitHub repository
./init-repo.sh

# Install all dependencies
npm run install:all

# Deploy frontend
cd frontend && npm run deploy
```

## Important URLs

| Service | URL |
|---------|-----|
| Local Frontend | http://localhost:5173 |
| Local Backend | http://localhost:3001 |
| GitHub Pages | https://YOUR_USERNAME.github.io/colocation-finder/ |
| Vercel Dashboard | https://vercel.com/dashboard |

## Key Files

| File | Purpose |
|------|---------|
| `backend/server.js` | Main API server |
| `frontend/src/App.jsx` | Main React component |
| `README.md` | Start here |
| `DEPLOYMENT.md` | Deploy guide |

## API Endpoints

```
GET  /                      # Health check
GET  /api/locations         # All locations
GET  /api/locations/:provider  # Provider locations
POST /api/refresh           # Force refresh
```

## Common Commands

### Development
```bash
# Backend
cd backend && npm run dev

# Frontend
cd frontend && npm run dev
```

### Build
```bash
# Frontend only
cd frontend && npm run build
```

### Deploy
```bash
# Frontend to GitHub Pages
cd frontend && npm run deploy
```

## Provider Colors

- 🔴 Equinix: Red (#ef4444)
- 🔵 Megaport: Blue (#3b82f6)
- 🟣 11:11 Systems: Purple (#a855f7)

## File Structure

```
colocation-finder/
├── backend/          # API server
├── frontend/         # React app
├── .github/          # CI/CD
└── *.md             # Documentation
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Port in use | `lsof -ti:3001 \| xargs kill -9` |
| Module not found | `npm install` |
| Can't connect | Check backend is running |
| 404 on GitHub Pages | Wait 2-3 minutes |

## Environment Variables

### Backend
```bash
PORT=3001
NODE_ENV=development
```

### Frontend
```bash
VITE_API_URL=http://localhost:3001
```

## Git Commands

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"
git remote add origin URL
git push -u origin main

# Updates
git add .
git commit -m "Update"
git push
```

## Documentation Quick Links

- 📖 [README.md](README.md) - Overview
- ⚡ [QUICKSTART.md](QUICKSTART.md) - 5-min setup
- 🔧 [SETUP.md](SETUP.md) - Detailed setup
- 🚀 [DEPLOYMENT.md](DEPLOYMENT.md) - Deploy guide
- 🐙 [GETTING_STARTED_WITH_GITHUB.md](GETTING_STARTED_WITH_GITHUB.md) - GitHub guide
- 📡 [API.md](API.md) - API docs
- 🏗️ [ARCHITECTURE.md](ARCHITECTURE.md) - Architecture
- 🤝 [CONTRIBUTING.md](CONTRIBUTING.md) - Contribute
- ❓ [FAQ.md](FAQ.md) - Questions
- 📝 [CHANGELOG.md](CHANGELOG.md) - History

## Tech Stack

**Frontend**: React + Vite + TailwindCSS + Leaflet
**Backend**: Node.js + Express + Axios + Cheerio
**Deploy**: GitHub Pages + Vercel

## Support

- 📖 Read the docs
- 🐛 Open an issue
- 💬 Start a discussion
- ⭐ Star the repo

---

**Keep this card handy for quick reference!**
