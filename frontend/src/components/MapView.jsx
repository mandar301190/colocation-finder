import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icons in React-Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

// Custom marker icons for different providers
const createCustomIcon = (color) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `<div style="background-color: ${color}; width: 25px; height: 25px; border-radius: 50%; border: 3px solid white; box-shadow: 0 2px 5px rgba(0,0,0,0.3);"></div>`,
    iconSize: [25, 25],
    iconAnchor: [12, 12],
  });
};

const equinixIcon = createCustomIcon('#ef4444');
const megaportIcon = createCustomIcon('#3b82f6');
const systems1111Icon = createCustomIcon('#a855f7');

function MapView({ locations }) {
  const getIcon = (provider) => {
    if (provider.includes('Equinix')) return equinixIcon;
    if (provider.includes('Megaport')) return megaportIcon;
    if (provider.includes('11:11')) return systems1111Icon;
    return equinixIcon;
  };

  const validLocations = locations.filter(
    loc => loc.latitude && loc.longitude && 
           !isNaN(loc.latitude) && !isNaN(loc.longitude)
  );

  if (validLocations.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-lg">
        <div className="text-6xl mb-4">🗺️</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No locations to display</h3>
        <p className="text-gray-500">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden" style={{ height: '600px' }}>
      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%' }}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {validLocations.map((location, index) => (
          <Marker
            key={index}
            position={[location.latitude, location.longitude]}
            icon={getIcon(location.provider)}
          >
            <Popup>
              <div className="p-2">
                <h3 className="font-bold text-lg mb-2">{location.name}</h3>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Provider:</strong> {location.provider}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Location:</strong> {location.city}, {location.country}
                </p>
                {location.region && (
                  <p className="text-sm text-gray-600">
                    <strong>Region:</strong> {location.region}
                  </p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default MapView;
