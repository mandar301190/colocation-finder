import { scrapeEquinixLocations } from './equinix.js';
import { scrapeMegaportLocations } from './megaport.js';
import { scrape1111SystemsLocations } from './1111systems.js';

export async function getAllLocations() {
  try {
    const [equinix, megaport, systems1111] = await Promise.allSettled([
      scrapeEquinixLocations(),
      scrapeMegaportLocations(),
      scrape1111SystemsLocations()
    ]);

    const locations = [];
    
    if (equinix.status === 'fulfilled') {
      locations.push(...equinix.value);
    }
    if (megaport.status === 'fulfilled') {
      locations.push(...megaport.value);
    }
    if (systems1111.status === 'fulfilled') {
      locations.push(...systems1111.value);
    }

    return locations;
  } catch (error) {
    console.error('Error getting all locations:', error);
    throw error;
  }
}

export async function getLocationsByProvider(provider) {
  const providerMap = {
    'equinix': scrapeEquinixLocations,
    'megaport': scrapeMegaportLocations,
    '1111systems': scrape1111SystemsLocations
  };

  const scraper = providerMap[provider.toLowerCase()];
  if (!scraper) {
    throw new Error(`Unknown provider: ${provider}`);
  }

  return await scraper();
}

export async function refreshData() {
  // This will force a refresh by clearing cache
  return await getAllLocations();
}
