import { useState } from 'react';

function Header({ onRefresh }) {
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setTimeout(() => setRefreshing(false), 1000);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">🌐 Colocation Finder</h1>
            <p className="text-blue-100">
              Discover data centers from Equinix, Megaport & 11:11 Systems
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={refreshing}
            className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
          >
            {refreshing ? '🔄 Refreshing...' : '🔄 Refresh Data'}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
