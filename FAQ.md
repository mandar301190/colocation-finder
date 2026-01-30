# Frequently Asked Questions

## General Questions

### What is Colocation Finder?
Colocation Finder is a web application that aggregates data center locations from multiple colocation providers (Equinix, Megaport, and 11:11 Systems) into a single, easy-to-use interface.

### Is this an official tool from these providers?
No, this is an independent project that collects publicly available information from these providers' websites and APIs.

### Is the data real-time?
The data is cached for 1 hour to reduce load on provider websites. You can manually refresh to get the latest data.

### How often is the data updated?
The app automatically fetches fresh data when the cache expires (every hour) or when you click the refresh button.

## Technical Questions

### What technologies are used?
- **Frontend**: React, Vite, TailwindCSS, Leaflet
- **Backend**: Node.js, Express, Axios, Cheerio
- **Deployment**: GitHub Pages (frontend), Vercel/Railway (backend)

### Why are some locations missing coordinates?
Some providers don't publish exact coordinates. We use city-level coordinates as fallbacks.

### Can I add more providers?
Yes! See [CONTRIBUTING.md](CONTRIBUTING.md) for instructions on adding new providers.

### Does this work offline?
No, the app requires an internet connection to fetch location data.

### Is there a mobile app?
Not currently, but the web app is fully responsive and works on mobile browsers.

## Usage Questions

### How do I filter by provider?
Use the "Provider" dropdown in the filter panel to select a specific provider or view all.

### How do I search for a specific location?
Use the search box to filter by city, country, or location name.

### What's the difference between List and Map view?
- **List view**: Shows locations as cards with detailed information
- **Map view**: Shows locations on an interactive world map

### Can I export the data?
Not currently, but this feature could be added. See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute.

### Why don't I see any locations?
- Check your filters - try resetting to "All Providers" and "All Regions"
- Click the refresh button to fetch fresh data
- Check your internet connection
- Check browser console for errors

## Deployment Questions

### How do I deploy this to my own GitHub account?
See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step instructions.

### Can I use a custom domain?
Yes! See the "Custom Domain" section in [DEPLOYMENT.md](DEPLOYMENT.md).

### Is it free to deploy?
Yes, using GitHub Pages (frontend) and Vercel/Railway free tier (backend).

### How much does it cost to run?
With the free tiers:
- GitHub Pages: Free
- Vercel: Free for hobby projects
- Railway: Free tier available

### Can I deploy to other platforms?
Yes! The frontend can be deployed to any static hosting (Netlify, Cloudflare Pages, etc.) and the backend to any Node.js hosting (Heroku, DigitalOcean, AWS, etc.).

## Data Questions

### Where does the data come from?
- **Equinix**: Public location pages
- **Megaport**: Public API
- **11:11 Systems**: Public listings on datacenters.com

### Is the data accurate?
We strive for accuracy, but data is sourced from public information and may not always be up-to-date. Always verify with the provider directly.

### Can I trust this data for business decisions?
This tool is for informational purposes. Always verify critical information directly with providers.

### Why are some locations duplicated?
Some providers may have multiple facilities in the same city. Each entry represents a distinct data center.

### How do I report incorrect data?
Open an issue on GitHub with details about the incorrect information.

## Development Questions

### How do I run this locally?
See [SETUP.md](SETUP.md) for quick setup instructions.

### Can I contribute?
Yes! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### What's the license?
MIT License - see [LICENSE](LICENSE) file.

### How do I report bugs?
Open an issue on GitHub with:
- Description of the bug
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

### How do I request features?
Open an issue on GitHub with the "enhancement" label and describe your feature request.

## Troubleshooting

### The app won't load
1. Check your internet connection
2. Clear browser cache
3. Try a different browser
4. Check if the backend is running (for local development)

### I see "Failed to fetch locations"
1. Check if the backend is running
2. Verify the API URL is correct
3. Check browser console for CORS errors
4. Try refreshing the page

### The map doesn't display
1. Check if you have an ad blocker (may block map tiles)
2. Verify internet connection
3. Check browser console for errors
4. Try refreshing the page

### Filters don't work
1. Clear all filters and try again
2. Refresh the page
3. Check browser console for errors

### GitHub Pages shows 404
1. Verify the repository name matches the base path in vite.config.js
2. Check that gh-pages branch exists
3. Verify GitHub Pages is enabled in repository settings

### Backend deployment fails
1. Check that package.json is in the backend directory
2. Verify Node.js version compatibility
3. Check deployment logs for errors
4. Ensure all dependencies are listed in package.json

## Performance Questions

### Why is the initial load slow?
The first load fetches data from multiple providers. Subsequent loads use cached data and are faster.

### Can I improve performance?
- Use the cache (don't refresh unnecessarily)
- Filter data client-side (no API calls)
- Use list view instead of map for faster rendering

### Does this work on slow connections?
Yes, but initial load may take longer. The app shows a loading spinner while fetching data.

## Privacy & Security

### Do you collect user data?
No, the app doesn't collect or store any user data.

### Is my search history saved?
No, all filtering and searching happens client-side and is not stored.

### Are there any tracking scripts?
No tracking scripts are included by default. If you deploy your own instance, you control what's included.

### Is the connection secure?
Yes, when deployed to GitHub Pages and Vercel, all connections use HTTPS.

## Future Plans

### What features are planned?
- Export data to CSV/JSON
- More providers
- Advanced filtering options
- Comparison tools
- Email alerts for new locations

### Can I sponsor this project?
Currently not set up, but contributions are welcome!

### Will there be a premium version?
No plans for a premium version. This is an open-source project.

## Still Have Questions?

Open an issue on GitHub or check the documentation:
- [README.md](README.md) - Overview
- [SETUP.md](SETUP.md) - Quick setup
- [DEPLOYMENT.md](DEPLOYMENT.md) - Deployment guide
- [API.md](API.md) - API documentation
- [ARCHITECTURE.md](ARCHITECTURE.md) - Technical details
