# Quick Setup Guide

Follow these steps to get the Colocation Finder running locally.

## 1. Install Dependencies

### Backend
```bash
cd backend
npm install
```

### Frontend
```bash
cd frontend
npm install
```

## 2. Start Development Servers

### Terminal 1 - Backend
```bash
cd backend
npm run dev
```
Backend will run on http://localhost:3001

### Terminal 2 - Frontend
```bash
cd frontend
npm run dev
```
Frontend will run on http://localhost:5173

## 3. Open in Browser

Navigate to http://localhost:5173 to see the app.

## Features to Try

1. **Filter by Provider**: Use the dropdown to view locations from specific providers
2. **Search**: Type a city name or country to find specific locations
3. **Map View**: Click the "Map" button to see locations on an interactive map
4. **Refresh Data**: Click the refresh button to fetch the latest location data

## Project Structure

```
colocation-finder/
├── backend/
│   ├── server.js           # Express server
│   ├── scrapers/           # Data fetching logic
│   │   ├── index.js
│   │   ├── equinix.js
│   │   ├── megaport.js
│   │   └── 1111systems.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # Entry point
│   ├── index.html
│   └── package.json
└── README.md
```

## Next Steps

- See [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions
- See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines
- Check [README.md](README.md) for full documentation

## Troubleshooting

### Port Already in Use
If port 3001 or 5173 is already in use, you can change them:
- Backend: Edit `backend/server.js` and change `PORT`
- Frontend: Edit `frontend/vite.config.js` and change `server.port`

### Module Not Found
Make sure you've run `npm install` in both backend and frontend directories.

### API Connection Failed
Ensure the backend is running before starting the frontend.
