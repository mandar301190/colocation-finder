function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-blue-200 rounded-full"></div>
        <div className="w-20 h-20 border-4 border-blue-600 rounded-full animate-spin border-t-transparent absolute top-0 left-0"></div>
      </div>
      <p className="mt-6 text-lg font-semibold text-gray-700 animate-pulse">
        Loading colocation data...
      </p>
      <p className="mt-2 text-sm text-gray-500">
        Fetching locations from Equinix, Megaport & 11:11 Systems
      </p>
    </div>
  );
}

export default LoadingSpinner;
