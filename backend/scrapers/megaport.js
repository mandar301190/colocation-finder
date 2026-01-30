import axios from 'axios';

export async function scrapeMegaportLocations() {
  try {
    // Megaport has a public locations API endpoint
    // Note: This may require authentication in production
    const response = await axios.get('https://api.megaport.com/v3/locations', {
      headers: {
        'Content-Type': 'application/json'
      },
      timeout: 10000
    }).catch(() => null);

    if (response && response.data && response.data.data) {
      return response.data.data.map(loc => ({
        provider: 'Megaport',
        name: loc.name || `${loc.dataCentre?.name} ${loc.city}`,
        city: loc.city,
        country: loc.country,
        region: loc.market,
        latitude: loc.latitude,
        longitude: loc.longitude,
        address: loc.address ? `${loc.address.street}, ${loc.city}` : loc.city,
        status: loc.status
      }));
    }

    // Fallback static data
    const staticLocations = [
      { name: 'Megaport Sydney', city: 'Sydney', country: 'Australia', region: 'Asia-Pacific', lat: -33.8688, lng: 151.2093 },
      { name: 'Megaport Singapore', city: 'Singapore', country: 'Singapore', region: 'Asia-Pacific', lat: 1.3521, lng: 103.8198 },
      { name: 'Megaport London', city: 'London', country: 'United Kingdom', region: 'Europe', lat: 51.5074, lng: -0.1278 },
      { name: 'Megaport Los Angeles', city: 'Los Angeles', country: 'United States', region: 'Americas', lat: 34.0522, lng: -118.2437 },
      { name: 'Megaport Tokyo', city: 'Tokyo', country: 'Japan', region: 'Asia-Pacific', lat: 35.6762, lng: 139.6503 },
      { name: 'Megaport Frankfurt', city: 'Frankfurt', country: 'Germany', region: 'Europe', lat: 50.1109, lng: 8.6821 },
      { name: 'Megaport Hong Kong', city: 'Hong Kong', country: 'Hong Kong', region: 'Asia-Pacific', lat: 22.3193, lng: 114.1694 },
      { name: 'Megaport Amsterdam', city: 'Amsterdam', country: 'Netherlands', region: 'Europe', lat: 52.3676, lng: 4.9041 },
      { name: 'Megaport New York', city: 'New York', country: 'United States', region: 'Americas', lat: 40.7128, lng: -74.0060 },
      { name: 'Megaport Melbourne', city: 'Melbourne', country: 'Australia', region: 'Asia-Pacific', lat: -37.8136, lng: 144.9631 }
    ];

    return staticLocations.map(loc => ({
      provider: 'Megaport',
      name: loc.name,
      city: loc.city,
      country: loc.country,
      region: loc.region,
      latitude: loc.lat,
      longitude: loc.lng,
      address: `${loc.city}, ${loc.country}`,
      status: 'Active'
    }));
  } catch (error) {
    console.error('Error scraping Megaport locations:', error);
    return [];
  }
}
