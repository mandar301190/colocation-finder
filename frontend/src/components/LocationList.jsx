function LocationList({ locations }) {
  const getProviderColor = (provider) => {
    if (provider.includes('Equinix')) return 'border-red-500 bg-red-50';
    if (provider.includes('Megaport')) return 'border-blue-500 bg-blue-50';
    if (provider.includes('11:11')) return 'border-purple-500 bg-purple-50';
    return 'border-gray-500 bg-gray-50';
  };

  const getProviderBadge = (provider) => {
    if (provider.includes('Equinix')) return 'bg-red-500';
    if (provider.includes('Megaport')) return 'bg-blue-500';
    if (provider.includes('11:11')) return 'bg-purple-500';
    return 'bg-gray-500';
  };

  if (locations.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-lg">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No locations found</h3>
        <p className="text-gray-500">Try adjusting your filters</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {locations.map((location, index) => (
        <div
          key={index}
          className={`border-l-4 ${getProviderColor(location.provider)} rounded-lg shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 p-6 bg-white`}
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-lg font-bold text-gray-800 flex-1">
              {location.name}
            </h3>
            <span className={`${getProviderBadge(location.provider)} text-white text-xs px-2 py-1 rounded-full font-semibold`}>
              {location.provider.replace('11:11 Systems', '11:11')}
            </span>
          </div>
          
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-lg">📍</span>
              <span>{location.city}{location.state ? `, ${location.state}` : ''}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-lg">🌍</span>
              <span>{location.country}</span>
            </div>
            
            {location.region && (
              <div className="flex items-center gap-2">
                <span className="text-lg">🗺️</span>
                <span className="font-medium text-blue-600">{location.region}</span>
              </div>
            )}
            
            {location.address && (
              <div className="flex items-start gap-2 mt-3 pt-3 border-t border-gray-100">
                <span className="text-lg">📮</span>
                <span className="text-xs text-gray-500">{location.address}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default LocationList;
