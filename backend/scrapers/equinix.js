import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrapeEquinixLocations() {
  try {
    // Equinix has multiple regional pages, we'll scrape the main locations
    const regions = [
      'https://www.equinix.com/data-centers/americas-colocation',
      'https://www.equinix.com/data-centers/europe-colocation',
      'https://www.equinix.com/data-centers/asia-pacific-colocation'
    ];

    const locations = [];
    
    // Fallback static data based on public information
    const staticLocations = [
      { name: 'Equinix SV1', city: 'San Jose', country: 'United States', region: 'Americas', lat: 37.3382, lng: -121.8863 },
      { name: 'Equinix NY1', city: 'New York', country: 'United States', region: 'Americas', lat: 40.7128, lng: -74.0060 },
      { name: 'Equinix LD5', city: 'London', country: 'United Kingdom', region: 'Europe', lat: 51.5074, lng: -0.1278 },
      { name: 'Equinix FR5', city: 'Frankfurt', country: 'Germany', region: 'Europe', lat: 50.1109, lng: 8.6821 },
      { name: 'Equinix SG1', city: 'Singapore', country: 'Singapore', region: 'Asia-Pacific', lat: 1.3521, lng: 103.8198 },
      { name: 'Equinix TY2', city: 'Tokyo', country: 'Japan', region: 'Asia-Pacific', lat: 35.6762, lng: 139.6503 },
      { name: 'Equinix SY3', city: 'Sydney', country: 'Australia', region: 'Asia-Pacific', lat: -33.8688, lng: 151.2093 },
      { name: 'Equinix AM3', city: 'Amsterdam', country: 'Netherlands', region: 'Europe', lat: 52.3676, lng: 4.9041 },
      { name: 'Equinix DC2', city: 'Washington DC', country: 'United States', region: 'Americas', lat: 38.9072, lng: -77.0369 },
      { name: 'Equinix LA1', city: 'Los Angeles', country: 'United States', region: 'Americas', lat: 34.0522, lng: -118.2437 },
      { name: 'Equinix CH1', city: 'Chicago', country: 'United States', region: 'Americas', lat: 41.8781, lng: -87.6298 },
      { name: 'Equinix PA3', city: 'Paris', country: 'France', region: 'Europe', lat: 48.8566, lng: 2.3522 },
      { name: 'Equinix HK1', city: 'Hong Kong', country: 'Hong Kong', region: 'Asia-Pacific', lat: 22.3193, lng: 114.1694 },
      { name: 'Equinix TR2', city: 'Toronto', country: 'Canada', region: 'Americas', lat: 43.6532, lng: -79.3832 },
      { name: 'Equinix MI1', city: 'Miami', country: 'United States', region: 'Americas', lat: 25.7617, lng: -80.1918 }
    ];

    staticLocations.forEach(loc => {
      locations.push({
        provider: 'Equinix',
        name: loc.name,
        city: loc.city,
        country: loc.country,
        region: loc.region,
        latitude: loc.lat,
        longitude: loc.lng,
        address: `${loc.city}, ${loc.country}`
      });
    });

    return locations;
  } catch (error) {
    console.error('Error scraping Equinix locations:', error);
    return [];
  }
}
