function FilterPanel({ filters, setFilters, locations, viewMode, setViewMode }) {
  const providers = ['all', 'equinix', 'megaport', '1111systems'];
  const regions = ['all', ...new Set(locations.map(loc => loc.region).filter(Boolean))];

  const providerColors = {
    equinix: 'bg-red-500',
    megaport: 'bg-blue-500',
    '1111systems': 'bg-purple-500',
    all: 'bg-gradient-to-r from-red-500 via-blue-500 to-purple-500'
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
        {/* Provider Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Provider
          </label>
          <select
            value={filters.provider}
            onChange={(e) => setFilters({ ...filters, provider: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {providers.map(provider => (
              <option key={provider} value={provider}>
                {provider === 'all' ? 'All Providers' : 
                 provider === '1111systems' ? '11:11 Systems' :
                 provider.charAt(0).toUpperCase() + provider.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Region Filter */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Region
          </label>
          <select
            value={filters.region}
            onChange={(e) => setFilters({ ...filters, region: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {regions.map(region => (
              <option key={region} value={region}>
                {region === 'all' ? 'All Regions' : region}
              </option>
            ))}
          </select>
        </div>

        {/* Search */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Search
          </label>
          <input
            type="text"
            placeholder="City, country, or name..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* View Mode */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            View Mode
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('list')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              📋 List
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`flex-1 px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'map'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              🗺️ Map
            </button>
          </div>
        </div>
      </div>

      {/* Provider Legend */}
      <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200">
        <span className="text-sm font-semibold text-gray-700">Legend:</span>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-500 rounded"></div>
          <span className="text-sm text-gray-600">Equinix</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-600">Megaport</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-500 rounded"></div>
          <span className="text-sm text-gray-600">11:11 Systems</span>
        </div>
      </div>
    </div>
  );
}

export default FilterPanel;
