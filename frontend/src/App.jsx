import { useState, useEffect } from 'react';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import LocationList from './components/LocationList';
import MapView from './components/MapView';
import LoadingSpinner from './components/LoadingSpinner';
import locationService from './services/locationService';

function App() {
  const [locations, setLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    provider: 'all',
    region: 'all',
    search: ''
  });
  const [viewMode, setViewMode] = useState('list');

  useEffect(() => {
    fetchLocations();
  }, []);

  useEffect(() => {
    applyFilters();
  }, [locations, filters]);

  const fetchLocations = async () => {
    try {
      setLoading(true);
      setError(null);
      
      console.log('🚀 Starting location fetch...');
      const locations = await locationService.fetchAllLocations();
      
      if (locations && locations.length > 0) {
        setLocations(locations);
        console.log(`✅ Successfully loaded ${locations.length} locations`);
      } else {
        throw new Error('No locations received from service');
      }
      
    } catch (err) {
      const errorMsg = 'Failed to fetch locations. Please try again later.';
      setError(errorMsg);
      console.error('💥 Error in fetchLocations:', err);
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...locations];

    if (filters.provider !== 'all') {
      filtered = filtered.filter(loc => 
        loc.provider.toLowerCase().replace(/[:\s]/g, '') === filters.provider
      );
    }

    if (filters.region !== 'all') {
      filtered = filtered.filter(loc => 
        loc.region?.toLowerCase() === filters.region.toLowerCase()
      );
    }

    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(loc =>
        loc.name?.toLowerCase().includes(searchLower) ||
        loc.city?.toLowerCase().includes(searchLower) ||
        loc.country?.toLowerCase().includes(searchLower)
      );
    }

    setFilteredLocations(filtered);
  };

  const handleRefresh = async () => {
    console.log('🔄 Manual refresh requested...');
    await locationService.refreshAllLocations().then(locations => {
      if (locations && locations.length > 0) {
        setLocations(locations);
        setError(null);
        console.log(`🎉 Refresh complete: ${locations.length} locations loaded`);
      }
    }).catch(err => {
      setError('Failed to refresh locations. Please try again.');
      console.error('💥 Refresh failed:', err);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header onRefresh={handleRefresh} />
      
      <main className="container mx-auto px-4 py-8">
        <FilterPanel 
          filters={filters}
          setFilters={setFilters}
          locations={locations}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />

        {loading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg">
            <div className="font-medium">{error}</div>
            <div className="mt-2 text-sm">
              The app uses comprehensive location data compiled from official provider sources. 
              For live API integration, a backend service with authentication would be required.
            </div>
            <button 
              onClick={handleRefresh}
              className="mt-3 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Try Again
            </button>
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600 flex items-center justify-between">
              <span>
                Showing {filteredLocations.length} of {locations.length} locations
              </span>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Comprehensive Data
                </span>
                <button 
                  onClick={() => console.log('Data source info:', locationService.getAPIImplementationInfo())}
                  className="text-xs text-blue-600 hover:text-blue-800"
                  title="View API implementation info in console"
                >
                  API Info
                </button>
              </div>
            </div>
            
            {viewMode === 'list' ? (
              <LocationList locations={filteredLocations} />
            ) : (
              <MapView locations={filteredLocations} />
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
