import express from 'express';
import cors from 'cors';
import NodeCache from 'node-cache';
import { getAllLocations, getLocationsByProvider, refreshData } from './scrapers/index.js';

const app = express();
const PORT = process.env.PORT || 3001;

// Cache for 1 hour
const cache = new NodeCache({ stdTTL: 3600 });

app.use(cors());
app.use(express.json());

// Health check
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Colocation Finder API' });
});

// Get all locations
app.get('/api/locations', async (req, res) => {
  try {
    const cached = cache.get('all_locations');
    if (cached) {
      return res.json(cached);
    }

    const locations = await getAllLocations();
    cache.set('all_locations', locations);
    res.json(locations);
  } catch (error) {
    console.error('Error fetching locations:', error);
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
});

// Get locations by provider
app.get('/api/locations/:provider', async (req, res) => {
  try {
    const { provider } = req.params;
    const cacheKey = `locations_${provider}`;
    
    const cached = cache.get(cacheKey);
    if (cached) {
      return res.json(cached);
    }

    const locations = await getLocationsByProvider(provider);
    cache.set(cacheKey, locations);
    res.json(locations);
  } catch (error) {
    console.error(`Error fetching ${req.params.provider} locations:`, error);
    res.status(500).json({ error: 'Failed to fetch locations' });
  }
});

// Force refresh data
app.post('/api/refresh', async (req, res) => {
  try {
    cache.flushAll();
    await refreshData();
    res.json({ message: 'Data refreshed successfully' });
  } catch (error) {
    console.error('Error refreshing data:', error);
    res.status(500).json({ error: 'Failed to refresh data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
