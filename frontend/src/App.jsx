import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/Header';
import FilterPanel from './components/FilterPanel';
import LocationList from './components/LocationList';
import MapView from './components/MapView';
import LoadingSpinner from './components/LoadingSpinner';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001';

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
      const response = await axios.get(`${API_URL}/api/locations`);
      setLocations(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch locations. Please try again later.');
      console.error('Error fetching locations:', err);
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
    await fetchLocations();
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
            {error}
          </div>
        ) : (
          <>
            <div className="mb-4 text-sm text-gray-600">
              Showing {filteredLocations.length} of {locations.length} locations
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
