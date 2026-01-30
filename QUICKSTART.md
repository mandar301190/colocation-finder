# Quick Start Guide

Get up and running in 5 minutes!

## Prerequisites

- Node.js 18+ ([Download](https://nodejs.org/))
- Git ([Download](https://git-scm.com/))
- A GitHub account

## Option 1: Automated Setup (Recommended)

### For macOS/Linux:

```bash
# Make the script executable
chmod +x start.sh

# Run the quick start script
./start.sh
```

This will:
1. Install all dependencies
2. Start the backend server
3. Start the frontend server
4. Open your browser automatically

### For Windows:

```bash
# Install dependencies
npm run install:all

# Start backend (in one terminal)
npm run dev:backend

# Start frontend (in another terminal)
npm run dev:frontend
```

## Option 2: Manual Setup

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 3: Start Backend
```bash
cd backend
npm run dev
```
Backend runs on http://localhost:3001

### Step 4: Start Frontend (New Terminal)
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

### Step 5: Open Browser
Navigate to http://localhost:5173

## What You'll See

1. **Header**: Title and refresh button
2. **Filters**: Provider, region, and search filters
3. **View Toggle**: Switch between list and map views
4. **Locations**: Data centers from all three providers

## Try These Features

- **Filter by Provider**: Select "Equinix" from the dropdown
- **Search**: Type "London" in the search box
- **Map View**: Click the "Map" button to see locations on a map
- **Refresh**: Click "Refresh Data" to fetch latest information

## Next Steps

- **Deploy to GitHub**: See [DEPLOYMENT.md](DEPLOYMENT.md)
- **Customize**: Modify colors, add features
- **Contribute**: See [CONTRIBUTING.md](CONTRIBUTING.md)

## Troubleshooting

### Port Already in Use
If you see "Port 3001 is already in use":
```bash
# Find and kill the process
lsof -ti:3001 | xargs kill -9
```

### Module Not Found
```bash
# Reinstall dependencies
cd backend && npm install
cd ../frontend && npm install
```

### Can't Connect to Backend
1. Make sure backend is running on port 3001
2. Check `frontend/src/App.jsx` - API_URL should be `http://localhost:3001`

## Need Help?

- Check [FAQ.md](FAQ.md) for common questions
- See [SETUP.md](SETUP.md) for detailed setup
- Open an issue on GitHub

## Development Tips

- Backend auto-reloads on file changes (nodemon)
- Frontend hot-reloads on file changes (Vite HMR)
- Check browser console for errors
- Check terminal for backend logs

## Project Structure

```
colocation-finder/
├── backend/          # Node.js API
│   ├── server.js     # Express server
│   └── scrapers/     # Data fetchers
├── frontend/         # React app
│   └── src/
│       ├── App.jsx   # Main component
│       └── components/
└── docs/             # Documentation
```

## Ready to Deploy?

Once you're happy with local development:

1. Push to GitHub
2. Deploy backend to Vercel
3. Deploy frontend to GitHub Pages

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete instructions.

---

**Happy coding! 🚀**
