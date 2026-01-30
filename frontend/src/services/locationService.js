import axios from 'axios';

// Simple location service that loads static data
class LocationService {
  constructor() {
    this.cache = new Map();
    this.dataSource = 'static';
  }

  async fetchAllLocations() {
    try {
      console.log('📁 Loading location data...');
      
      // Load the main locations file
      const response = await axios.get('/colocation-finder/api/locations.json');
      const locations = response.data || [];
      
      console.log(`✅ Loaded ${locations.length} locations`);
      return locations;
      
    } catch (error) {
      console.error('❌ Error loading locations:', error);
      throw new Error('Failed to load location data');
    }
  }

  async refreshAllLocations() {
    console.log('🔄 Refreshing location data...');
    this.cache.clear();
    return this.fetchAllLocations();
  }

  getCacheStatus() {
    return {
      dataSource: this.dataSource,
      message: 'Using static JSON data files'
    };
  }

  getAPIImplementationInfo() {
    return {
      note: "To implement live API fetching, you would need:",
      requirements: [
        "Backend service with API authentication",
        "API keys from each provider", 
        "Server-side API calls to avoid CORS",
        "Data transformation and caching layer"
      ]
    };
  }
}

export default new LocationService();