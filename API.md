# API Documentation

The Colocation Finder backend provides a RESTful API for accessing colocation data.

## Base URL

- Development: `http://localhost:3001`
- Production: `https://your-backend-url.vercel.app`

## Endpoints

### GET /

Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Colocation Finder API"
}
```

### GET /api/locations

Fetch all colocation locations from all providers.

**Response:**
```json
[
  {
    "provider": "Equinix",
    "name": "Equinix SV1",
    "city": "San Jose",
    "country": "United States",
    "region": "Americas",
    "latitude": 37.3382,
    "longitude": -121.8863,
    "address": "San Jose, United States"
  },
  ...
]
```

**Status Codes:**
- `200 OK`: Success
- `500 Internal Server Error`: Failed to fetch locations

### GET /api/locations/:provider

Fetch locations for a specific provider.

**Parameters:**
- `provider` (string): One of `equinix`, `megaport`, or `1111systems`

**Example:**
```
GET /api/locations/equinix
```

**Response:**
```json
[
  {
    "provider": "Equinix",
    "name": "Equinix SV1",
    "city": "San Jose",
    "country": "United States",
    "region": "Americas",
    "latitude": 37.3382,
    "longitude": -121.8863,
    "address": "San Jose, United States"
  },
  ...
]
```

**Status Codes:**
- `200 OK`: Success
- `500 Internal Server Error`: Failed to fetch locations

### POST /api/refresh

Force refresh of location data (clears cache).

**Response:**
```json
{
  "message": "Data refreshed successfully"
}
```

**Status Codes:**
- `200 OK`: Success
- `500 Internal Server Error`: Failed to refresh data

## Data Model

### Location Object

| Field | Type | Description |
|-------|------|-------------|
| provider | string | Provider name (Equinix, Megaport, 11:11 Systems) |
| name | string | Location name/identifier |
| city | string | City name |
| state | string | State/province (optional) |
| country | string | Country name |
| region | string | Geographic region (Americas, Europe, Asia-Pacific) |
| latitude | number | Latitude coordinate |
| longitude | number | Longitude coordinate |
| address | string | Full address |
| status | string | Status (Active, etc.) - optional |

## Caching

The API implements caching with a 1-hour TTL (Time To Live) to reduce load on data sources:

- All locations are cached for 1 hour
- Provider-specific queries are cached separately
- Use `/api/refresh` to force cache invalidation

## Rate Limiting

Currently, no rate limiting is implemented. Consider adding rate limiting in production environments.

## Error Handling

All endpoints return JSON error responses:

```json
{
  "error": "Error message description"
}
```

## CORS

CORS is enabled for all origins in development. Configure appropriately for production.

## Data Sources

- **Equinix**: Static data based on public information
- **Megaport**: Attempts to fetch from public API, falls back to static data
- **11:11 Systems**: Static data based on public information

## Future Enhancements

- Authentication for admin endpoints
- Rate limiting
- Webhooks for location updates
- Real-time scraping with better error handling
- Database storage for historical data
