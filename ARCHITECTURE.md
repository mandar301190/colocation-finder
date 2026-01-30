# Architecture Overview

## System Design

The Colocation Finder is a full-stack web application with a clear separation between frontend and backend.

```
┌─────────────────────────────────────────────────────────────┐
│                         User Browser                         │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │         React Frontend (Vite + TailwindCSS)        │    │
│  │                                                     │    │
│  │  • Interactive UI with filters                     │    │
│  │  • Map view (Leaflet)                              │    │
│  │  • List view with cards                            │    │
│  │  • Real-time search                                │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/REST API
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend API (Node.js)                     │
│                                                              │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Express Server + Cache                │    │
│  │                                                     │    │
│  │  • REST API endpoints                              │    │
│  │  • In-memory caching (1 hour TTL)                  │    │
│  │  • CORS handling                                   │    │
│  └────────────────────────────────────────────────────┘    │
│                            │                                 │
│  ┌────────────────────────────────────────────────────┐    │
│  │              Data Scrapers/Fetchers                │    │
│  │                                                     │    │
│  │  • Equinix scraper                                 │    │
│  │  • Megaport API client                             │    │
│  │  • 11:11 Systems scraper                           │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                            │
                            │ HTTP/Web Scraping
                            ▼
┌─────────────────────────────────────────────────────────────┐
│                    External Data Sources                     │
│                                                              │
│  • Equinix website                                          │
│  • Megaport API                                             │
│  • 11:11 Systems listings                                   │
└─────────────────────────────────────────────────────────────┘
```

## Frontend Architecture

### Technology Stack
- **React 18**: Component-based UI framework
- **Vite**: Fast build tool and dev server
- **TailwindCSS**: Utility-first CSS framework
- **Leaflet**: Interactive maps
- **Axios**: HTTP client

### Component Structure
```
App.jsx (Root)
├── Header.jsx
├── FilterPanel.jsx
├── LocationList.jsx (List View)
│   └── Location Cards
├── MapView.jsx (Map View)
│   └── Leaflet Map + Markers
└── LoadingSpinner.jsx
```

### State Management
- Local state with React hooks (useState, useEffect)
- No external state management library needed
- Filters and data managed in App.jsx

### Styling Approach
- TailwindCSS utility classes
- Custom color scheme with gradients
- Responsive design (mobile-first)
- Provider-specific color coding

## Backend Architecture

### Technology Stack
- **Node.js**: Runtime environment
- **Express**: Web framework
- **Axios**: HTTP client for API calls
- **Cheerio**: HTML parsing for web scraping
- **node-cache**: In-memory caching

### API Layer
```
server.js
├── Express app setup
├── CORS configuration
├── Route handlers
└── Error handling
```

### Data Layer
```
scrapers/
├── index.js (Orchestrator)
├── equinix.js (Equinix scraper)
├── megaport.js (Megaport API client)
└── 1111systems.js (11:11 Systems scraper)
```

### Caching Strategy
- In-memory cache with 1-hour TTL
- Separate cache keys for:
  - All locations
  - Provider-specific locations
- Manual refresh endpoint to clear cache

## Data Flow

### Initial Load
1. User opens webapp
2. Frontend requests `/api/locations`
3. Backend checks cache
4. If cache miss:
   - Fetch from all providers in parallel
   - Store in cache
   - Return data
5. Frontend displays locations

### Filtering
1. User changes filter
2. Frontend filters data locally (no API call)
3. UI updates immediately

### Refresh
1. User clicks refresh button
2. Frontend calls `/api/refresh`
3. Backend clears cache
4. Frontend requests `/api/locations`
5. Backend fetches fresh data
6. UI updates with new data

## Deployment Architecture

### Frontend (GitHub Pages)
```
GitHub Repository
    │
    ├── GitHub Actions (CI/CD)
    │   └── Build & Deploy on push
    │
    └── GitHub Pages
        └── Static files served
```

### Backend (Vercel/Railway)
```
GitHub Repository
    │
    └── Vercel/Railway
        ├── Auto-deploy on push
        ├── Serverless functions
        └── Global CDN
```

## Security Considerations

1. **CORS**: Configured to allow frontend domain
2. **Rate Limiting**: Should be added for production
3. **Input Validation**: Provider names validated
4. **Error Handling**: Graceful degradation
5. **No Sensitive Data**: All data is public

## Performance Optimizations

1. **Caching**: 1-hour cache reduces API calls
2. **Parallel Fetching**: All providers fetched simultaneously
3. **Client-side Filtering**: No server round-trips
4. **Code Splitting**: Vite handles automatically
5. **Lazy Loading**: Map only loads when needed

## Scalability Considerations

### Current Limitations
- In-memory cache (lost on restart)
- No database (stateless)
- Single server instance

### Future Improvements
- Redis for distributed caching
- Database for historical data
- Load balancing for multiple instances
- WebSocket for real-time updates
- Background jobs for periodic scraping

## Error Handling

### Frontend
- Loading states
- Error messages
- Fallback UI for empty states
- Network error handling

### Backend
- Try-catch blocks
- Promise.allSettled for parallel operations
- Graceful degradation (partial data)
- Logging for debugging

## Testing Strategy

### Frontend Testing (Future)
- Unit tests for components
- Integration tests for user flows
- E2E tests with Cypress

### Backend Testing (Future)
- Unit tests for scrapers
- API endpoint tests
- Mock external services

## Monitoring & Logging

### Current
- Console logging
- Browser DevTools
- Vercel/Railway logs

### Recommended
- Error tracking (Sentry)
- Analytics (Google Analytics)
- Uptime monitoring
- Performance monitoring

## Development Workflow

1. Local development with hot reload
2. Git commit with descriptive message
3. Push to GitHub
4. Automatic deployment
5. Verify in production

## Technology Choices Rationale

- **React**: Popular, well-documented, component-based
- **Vite**: Fast builds, modern tooling
- **TailwindCSS**: Rapid UI development, consistent design
- **Express**: Simple, flexible, widely used
- **Leaflet**: Open-source, feature-rich maps
- **GitHub Pages**: Free, easy deployment
- **Vercel**: Serverless, auto-scaling, free tier
