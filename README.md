# 🌐 Colocation Finder

> A beautiful, modern web application that aggregates colocation data centers from multiple providers into a single, user-friendly interface.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![React](https://img.shields.io/badge/react-18.2.0-blue)](https://reactjs.org/)

[Live Demo](#) | [Documentation](#documentation) | [Quick Start](#quick-start) | [Contributing](CONTRIBUTING.md)

---

## ✨ Features

### 🎯 Core Features
- **Multi-Provider Support**: View colocation facilities from Equinix, Megaport, and 11:11 Systems
- **Interactive Map View**: Visualize all locations on a beautiful world map with custom markers
- **List View**: Detailed cards with comprehensive location information
- **Advanced Filtering**: Filter by provider, region, or search by name/city/country
- **Real-Time Updates**: Automatically fetches the latest location data
- **Search Functionality**: Lightning-fast search across all locations

### 🎨 Design Features
- **Modern UI**: Beautiful gradient backgrounds and smooth animations
- **Color-Coded Providers**: Each provider has a distinct, vibrant color
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Intuitive Interface**: Clean, easy-to-use design
- **Loading States**: Smooth loading animations and transitions

## Tech Stack

- **Frontend**: React 18, Vite, TailwindCSS, Leaflet (maps)
- **Backend**: Node.js, Express, Cheerio (web scraping), Axios
- **Deployment**: GitHub Pages (frontend), Vercel/Railway (backend)

## 🚀 Quick Start

### One-Command Setup (Recommended)

```bash
# Clone the repository
git clone https://github.com/mandar301190/colocation-finder.git
cd colocation-finder

# Run the quick start script
chmod +x start.sh
./start.sh
```

This will install all dependencies and start both servers automatically!

### Manual Setup

<details>
<summary>Click to expand manual setup instructions</summary>

#### Prerequisites
- Node.js 18+ and npm
- Git

#### Installation

1. **Install backend dependencies**:
```bash
cd backend
npm install
```

2. **Install frontend dependencies**:
```bash
cd ../frontend
npm install
```

#### Running Locally

1. **Start the backend** (Terminal 1):
```bash
cd backend
npm run dev
```
Backend runs on http://localhost:3001

2. **Start the frontend** (Terminal 2):
```bash
cd frontend
npm run dev
```
Frontend runs on http://localhost:5173

3. **Open your browser** to http://localhost:5173

</details>

## 📸 Screenshots

### List View
Beautiful cards showing all colocation locations with provider-specific colors.

### Map View
Interactive world map with custom markers for each provider.

### Filtering
Advanced filtering by provider, region, and search functionality.

## 📦 Deployment

### Quick Deploy to GitHub

```bash
# Initialize and push to GitHub
./init-repo.sh

# Follow the prompts to set up your repository
```

### Detailed Deployment

See our comprehensive guides:
- **[Getting Started with GitHub](GETTING_STARTED_WITH_GITHUB.md)** - Complete beginner-friendly guide
- **[Deployment Guide](DEPLOYMENT.md)** - Detailed deployment instructions
- **[Quick Start](QUICKSTART.md)** - Get running in 5 minutes

### Deployment Platforms

| Component | Recommended | Alternatives |
|-----------|-------------|--------------|
| Frontend | GitHub Pages | Vercel, Netlify, Cloudflare Pages |
| Backend | Vercel | Railway, Heroku, DigitalOcean |

## API Endpoints

- `GET /api/locations` - Fetch all colocation locations
- `GET /api/locations/:provider` - Fetch locations for a specific provider
- `GET /api/refresh` - Force refresh location data

## Data Sources

- **Equinix**: Scraped from public location pages ([source]([https://www.equinix.com/data-centers]))
- **Megaport**: Fetched from Megaport API ([source](https://docs.megaport.com/api/api-port/))
- **11:11 Systems**: Scraped from datacenters.com listings ([source](https://1111systems.com/services/hosted-private-cloud/#locations))

Content was rephrased for compliance with licensing restrictions.

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [README.md](README.md) | You are here! Project overview |
| [QUICKSTART.md](QUICKSTART.md) | Get started in 5 minutes |
| [SETUP.md](SETUP.md) | Detailed setup instructions |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deploy to GitHub & Vercel |
| [GETTING_STARTED_WITH_GITHUB.md](GETTING_STARTED_WITH_GITHUB.md) | Beginner-friendly GitHub guide |
| [API.md](API.md) | API endpoints and usage |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Technical architecture details |
| [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |
| [FAQ.md](FAQ.md) | Frequently asked questions |
| [CHANGELOG.md](CHANGELOG.md) | Version history |
| [PROJECT_SUMMARY.md](PROJECT_SUMMARY.md) | Complete project overview |

## 🤝 Contributing

We love contributions! Here's how you can help:

1. 🐛 **Report bugs** - Open an issue
2. 💡 **Suggest features** - Open an issue with your idea
3. 🔧 **Submit PRs** - Fix bugs or add features
4. 📖 **Improve docs** - Help make our docs better
5. ⭐ **Star the repo** - Show your support!

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Location data sourced from provider websites and public APIs
- Map tiles from [OpenStreetMap](https://www.openstreetmap.org/) contributors
- Built with amazing open-source tools

## 📞 Support

- 📖 **Documentation**: Check our comprehensive docs above
- 🐛 **Bug Reports**: [Open an issue](https://github.com/YOUR_USERNAME/colocation-finder/issues)
- 💬 **Questions**: [Start a discussion](https://github.com/YOUR_USERNAME/colocation-finder/discussions)
- ⭐ **Show Support**: Star this repository!

## 🗺️ Roadmap

- [ ] Export data to CSV/JSON
- [ ] Add more providers (Digital Realty, CyrusOne, etc.)
- [ ] Advanced filtering options
- [ ] Location comparison tool
- [ ] Email notifications for new locations
- [ ] Dark mode
- [ ] Multi-language support

See [CHANGELOG.md](CHANGELOG.md) for version history.

---

<div align="center">

**Built with ❤️ for the developer community**

[⬆ Back to Top](#-colocation-finder)

</div>
