import axios from 'axios';
import * as cheerio from 'cheerio';

export async function scrape1111SystemsLocations() {
  try {
    // Static data based on public information from datacenters.com
    const staticLocations = [
      { name: '11:11 Systems Carrollton', city: 'Carrollton', state: 'Texas', country: 'United States', region: 'Americas', lat: 32.9537, lng: -96.8903 },
      { name: '11:11 Systems Manchester', city: 'Manchester', country: 'United Kingdom', region: 'Europe', lat: 53.4808, lng: -2.2426 },
      { name: '11:11 Systems Netherlands', city: 'Schiphol-Rijk', country: 'Netherlands', region: 'Europe', lat: 52.2968, lng: 4.7519 },
      { name: '11:11 Systems Mississauga', city: 'Mississauga', state: 'Ontario', country: 'Canada', region: 'Americas', lat: 43.5890, lng: -79.6441 },
      { name: '11:11 Systems Scottsdale', city: 'Scottsdale', state: 'Arizona', country: 'United States', region: 'Americas', lat: 33.4942, lng: -111.9261 },
      { name: '11:11 Systems Denver', city: 'Denver', state: 'Colorado', country: 'United States', region: 'Americas', lat: 39.7392, lng: -104.9903 },
      { name: '11:11 Systems London', city: 'London', country: 'United Kingdom', region: 'Europe', lat: 51.5074, lng: -0.1278 },
      { name: '11:11 Systems Sydney', city: 'Sydney', country: 'Australia', region: 'Asia-Pacific', lat: -33.8688, lng: 151.2093 }
    ];

    return staticLocations.map(loc => ({
      provider: '11:11 Systems',
      name: loc.name,
      city: loc.city,
      state: loc.state,
      country: loc.country,
      region: loc.region,
      latitude: loc.lat,
      longitude: loc.lng,
      address: loc.state ? `${loc.city}, ${loc.state}, ${loc.country}` : `${loc.city}, ${loc.country}`
    }));
  } catch (error) {
    console.error('Error scraping 11:11 Systems locations:', error);
    return [];
  }
}
