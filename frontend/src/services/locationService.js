import axios from 'axios';

// Provider API configurations
// Note: These providers don't offer public APIs that can be called directly from frontend
// A production implementation would require:
// 1. Backend service with API keys for authenticated endpoints
// 2. Web scraping service for provider websites
// 3. Periodic data synchronization from official sources
const PROVIDER_CONFIGS = {
  equinix: {
    name: 'Equinix',
    // Official API: https://developer.equinix.com/ (requires authentication)
    apiUrl: null, // No public API available
    fallbackUrl: '/colocation-finder/api/locations/equinix.json',
    officialSource: 'https://www.equinix.com/data-centers'
  },
  megaport: {
    name: 'Megaport', 
    // Official API: https://api.megaport.com/v3/locations (requires authentication)
    apiUrl: null, // Requires API key and authentication
    fallbackUrl: '/colocation-finder/api/locations/megaport.json',
    officialSource: 'https://www.megaport.com/megaport-enabled-locations/'
  },
  '1111systems': {
    name: '11:11 Systems',
    // No public API available
    apiUrl: null, // No public API
    fallbackUrl: '/colocation-finder/api/locations/1111systems.json',
    officialSource: 'https://1111systems.com/services/hosted-private-cloud/#locations'
  }
};

class LocationService {
  constructor() {
    this.cache = new Map();
    this.cacheTimeout = 3600000; // 1 hour
    this.dataSource = 'comprehensive-static'; // Current data source
  }

  async fetchAllLocations() {
    try {
      console.log('🔄 Loading comprehensive location data...');
      console.log('ℹ️ Note: Provider APIs require authentication or have no public endpoints');
      console.log('📊 Using comprehensive static data compiled from official sources');
      
      // In a production environment, this would:
      // 1. Check for backend API availability
      // 2. Attempt authenticated API calls through backend
      // 3. Fall back to cached/static data
      
      const providers = Object.keys(PROVIDER_CONFIGS);
      const locationPromises = providers.map(provider => 
        this.fetchProviderLocations(provider)
      );
      
      const results = await Promise.allSettled(locationPromises);
      const allLocations = [];
      let successCount = 0;
      
      results.forEach((result, index) => {
        const provider = providers[index];
        if (result.status === 'fulfilled' && result.value.length > 0) {
          allLocations.push(...result.value);
          successCount++;
          console.log(`✅ ${PROVIDER_CONFIGS[provider].name}: ${result.value.length} locations loaded`);
        } else {
          console.warn(`❌ ${PROVIDER_CONFIGS[provider].name}: Failed to load data`);
        }
      });

      if (allLocations.length === 0) {
        throw new Error('No location data could be loaded');
      }

      console.log(`🎉 Successfully loaded ${allLocations.length} locations from ${successCount}/${providers.length} providers`);
      this.dataSource = 'comprehensive-static';
      return allLocations;
      
    } catch (error) {
      console.error('💥 Error loading location data:', error);
      throw error;
    }
  }

  async fetchProviderLocations(provider) {
    const cacheKey = `${provider}_locations`;
    const cached = this.cache.get(cacheKey);
    
    if (cached && Date.now() - cached.timestamp < this.cacheTimeout) {
      console.log(`📋 Using cached data for ${PROVIDER_CONFIGS[provider].name}`);
      return cached.data;
    }

    try {
      // Load comprehensive static data (compiled from official sources)
      const locations = await this.loadProviderData(provider);
      
      if (locations.length > 0) {
        // Cache the data
        this.cache.set(cacheKey, {
          data: locations,
          timestamp: Date.now()
        });
        return locations;
      } else {
        throw new Error('No locations found in data file');
      }
      
    } catch (error) {
      console.error(`❌ Failed to load data for ${PROVIDER_CONFIGS[provider].name}:`, error);
      return [];
    }
  }

  async loadProviderData(provider) {
    try {
      const dataUrl = PROVIDER_CONFIGS[provider].fallbackUrl;
      console.log(`📁 Loading comprehensive data for ${PROVIDER_CONFIGS[provider].name}`);
      console.log(`🔗 Official source: ${PROVIDER_CONFIGS[provider].officialSource}`);
      
      const response = await axios.get(dataUrl);
      return response.data || [];
      
    } catch (error) {
      console.error(`❌ Data loading failed for ${PROVIDER_CONFIGS[provider].name}:`, error);
      return [];
    }
  }

  // Method to force refresh data (reload from files)
  async refreshAllLocations() {
    console.log('🔄 Refreshing all location data...');
    this.cache.clear();
    return this.fetchAllLocations();
  }

  // Method to get cache and data source status
  getCacheStatus() {
    const status = {
      dataSource: this.dataSource,
      providers: {},
      totalCached: 0,
      lastUpdate: null
    };
    
    for (const [key, value] of this.cache.entries()) {
      const age = Date.now() - value.timestamp;
      status.providers[key] = {
        cached: true,
        age: Math.round(age / 1000), // seconds
        expires: Math.round((this.cacheTimeout - age) / 1000), // seconds until expiry
        count: value.data.length,
        lastUpdate: new Date(value.timestamp).toISOString()
      };
      status.totalCached += value.data.length;
      
      if (!status.lastUpdate || value.timestamp > new Date(status.lastUpdate).getTime()) {
        status.lastUpdate = new Date(value.timestamp).toISOString();
      }
    }
    
    return status;
  }

  // Method to get information about implementing live APIs
  getAPIImplementationInfo() {
    return {
      note: "To implement live API fetching, you would need:",
      requirements: [
        "Backend service with API authentication",
        "API keys from each provider",
        "CORS proxy or server-side API calls",
        "Data transformation and caching layer",
        "Fallback mechanism for API failures"
      ],
      providers: Object.entries(PROVIDER_CONFIGS).map(([key, config]) => ({
        name: config.name,
        hasPublicAPI: config.apiUrl !== null,
        officialSource: config.officialSource,
        notes: key === 'megaport' ? 'Has API but requires authentication' : 
               key === 'equinix' ? 'Has developer API but requires authentication' :
               'No public API available'
      }))
    };
  }
}

export default new LocationService();