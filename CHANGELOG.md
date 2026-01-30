# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-30

### Added
- Initial release of Colocation Finder
- Support for three providers: Equinix, Megaport, and 11:11 Systems
- Interactive map view using Leaflet
- List view with detailed location cards
- Filter by provider, region, and search
- Responsive design for mobile and desktop
- Real-time data refresh functionality
- Backend API with caching (1-hour TTL)
- Comprehensive documentation:
  - README.md
  - SETUP.md
  - DEPLOYMENT.md
  - API.md
  - ARCHITECTURE.md
  - CONTRIBUTING.md
  - FAQ.md
- GitHub Actions workflow for automated deployment
- Vercel configuration for backend deployment
- MIT License

### Features
- **Multi-Provider Support**: View locations from Equinix, Megaport, and 11:11 Systems
- **Interactive Map**: Visualize all locations on a world map with custom markers
- **Advanced Filtering**: Filter by provider, region, or search by name/city/country
- **Responsive UI**: Beautiful, modern interface that works on all devices
- **Auto-Refresh**: Automatic data updates with manual refresh option
- **Color-Coded**: Each provider has a distinct color for easy identification

### Technical
- React 18 with Vite for fast development
- TailwindCSS for styling
- Express backend with Node.js
- In-memory caching for performance
- RESTful API design
- Modular scraper architecture

## [Unreleased]

### Planned
- Export data to CSV/JSON
- Additional providers (Digital Realty, CyrusOne, etc.)
- Advanced filtering (by capacity, certifications, etc.)
- Comparison tool for locations
- Email notifications for new locations
- Database integration for historical data
- User accounts and saved searches
- API rate limiting
- Enhanced error handling
- Unit and integration tests
- Performance monitoring
- Analytics integration

### Under Consideration
- Dark mode
- Multiple language support
- Mobile app (React Native)
- Provider API integrations (where available)
- Real-time updates via WebSocket
- Location reviews and ratings
- Cost comparison tools
- Availability checker

## Version History

- **1.0.0** (2026-01-30): Initial release

---

## How to Contribute

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this project.

## Reporting Issues

Found a bug or have a feature request? Please open an issue on GitHub.
