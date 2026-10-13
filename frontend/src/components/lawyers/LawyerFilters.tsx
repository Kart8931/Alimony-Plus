import React from 'react';
import { CourtSpecialization, LawyerFilterState } from '../../types';

interface LawyerFiltersProps {
  filters: LawyerFilterState;
  onFilterChange: (updatedFilters: Partial<LawyerFilterState>) => void;
}

export const LawyerFilters: React.FC<LawyerFiltersProps> = ({ filters, onFilterChange }) => {
  const courts: (CourtSpecialization | 'All')[] = ['All', 'Supreme Court', 'High Court', 'District Court', 'Family Court'];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 mb-8">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Find Verified Advocates</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Search Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Search Name / ID</label>
          <input
            type="text"
            placeholder="e.g. Rajesh Sharma"
            value={filters.searchQuery}
            onChange={(e) => onFilterChange({ searchQuery: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm"
          />
        </div>

        {/* Court Specialization Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Court Jurisdiction</label>
          <select
            value={filters.selectedCourt}
            onChange={(e) => onFilterChange({ selectedCourt: e.target.value as CourtSpecialization | 'All' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none text-sm bg-white"
          >
            {courts.map((court) => (
              <option key={court} value={court}>{court}</option>
            ))}
          </select>
        </div>

        {/* Max Consultation Fee Filter */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Max Fee: ₹{filters.maxFee}
          </label>
          <input
            type="range"
            min="500"
            max="5000"
            step="100"
            value={filters.maxFee}
            onChange={(e) => onFilterChange({ maxFee: Number(e.target.value) })}
            className="w-full accent-indigo-600 mt-2"
          />
        </div>
      </div>
    </div>
  );
};