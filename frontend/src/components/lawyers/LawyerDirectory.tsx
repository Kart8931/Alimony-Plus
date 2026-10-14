'use client';

import React, { useState } from 'react';
import { MOCK_LAWYERS } from '../../data/lawyers';
import { Lawyer, LawyerFilterState } from '../../types';
import { LawyerFilters } from './LawyerFilters';
import { LawyerProfile } from './LawyerProfileModal'; 

export const LawyerDirectory: React.FC = () => {
  const [selectedLawyer, setSelectedLawyer] = useState<Lawyer | null>(null); // <-- Nayi state

  const [filters, setFilters] = useState<LawyerFilterState>({
    searchQuery: '',
    selectedCourt: 'All',
    minExperience: 0,
    maxFee: 5000,
    language: 'All',
  });

  const handleFilterChange = (updated: Partial<LawyerFilterState>) => {
    setFilters((prev) => ({ ...prev, ...updated }));
  };

  const filteredLawyers = MOCK_LAWYERS.filter((lawyer) => {
    const matchesSearch = lawyer.name.toLowerCase().includes(filters.searchQuery.toLowerCase()) ||
                          lawyer.barCouncilId.toLowerCase().includes(filters.searchQuery.toLowerCase());
    const matchesCourt = filters.selectedCourt === 'All' || lawyer.courts.includes(filters.selectedCourt);
    const matchesFee = lawyer.consultationFee <= filters.maxFee;
    return matchesSearch && matchesCourt && matchesFee;
  });

  // AGAR KOI LAWYER CLICK HUA HAI, TOH USKA PROFILE PAGE DIKHAO
  if (selectedLawyer) {
    return (
      <LawyerProfile 
        lawyer={selectedLawyer} 
        onBack={() => setSelectedLawyer(null)} 
        onBookClick={(lawyer) => alert(`Opening consultation slot booking flow for ${lawyer.name}`)}
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Bar Council Verified Advocates</h1>
        <p className="text-gray-600 text-sm mt-1">Connect with specialized legal experts for structured pre-briefing and consultation.</p>
      </div>

      <LawyerFilters filters={filters} onFilterChange={handleFilterChange} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLawyers.map((lawyer) => (
          <div 
            key={lawyer.id} 
            onClick={() => setSelectedLawyer(lawyer)} // <-- Card click par profile open hogi
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col justify-between hover:shadow-md transition-shadow cursor-pointer"
          >
            <div>
              <div className="flex items-center space-x-4 mb-4">
                <img src={lawyer.avatarUrl} alt={lawyer.name} className="w-14 h-14 rounded-full object-cover border" />
                <div>
                  <h4 className="font-semibold text-gray-900 hover:text-indigo-600">{lawyer.name}</h4>
                  <span className="text-xs text-indigo-600 font-medium bg-indigo-50 px-2 py-0.5 rounded-full">
                    {lawyer.barCouncilId}
                  </span>
                </div>
              </div>

              <p className="text-xs text-gray-500 mb-3">Courts: {lawyer.courts.join(', ')}</p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{lawyer.bio}</p>

              <div className="flex flex-wrap gap-1 mb-4">
                {lawyer.languages.map((lang) => (
                  <span key={lang} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div>
                <span className="text-xs text-gray-400 block">Consultation Fee</span>
                <span className="text-base font-bold text-gray-900">₹{lawyer.consultationFee}</span>
              </div>
              <span className="text-indigo-600 text-sm font-medium hover:underline">
                View Profile &rarr;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};