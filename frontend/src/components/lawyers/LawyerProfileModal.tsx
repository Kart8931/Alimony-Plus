'use client';

import React from 'react';
import { Lawyer } from '../../types';
import { ShieldCheck, Star, Award, MapPin, Calendar, ArrowLeft } from 'lucide-react';

interface LawyerProfileProps {
  lawyer: Lawyer;
  onBack: () => void;
  onBookClick: (lawyer: Lawyer) => void;
}

export const LawyerProfile: React.FC<LawyerProfileProps> = ({ lawyer, onBack, onBookClick }) => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-indigo-600 mb-6 transition-colors"
      >
        <ArrowLeft size={16} className="mr-2" /> Back to Directory
      </button>

      {/* Profile Header Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center space-x-5">
            <img 
              src={lawyer.avatarUrl} 
              alt={lawyer.name} 
              className="w-24 h-24 rounded-full object-cover border-4 border-indigo-50 shadow-inner" 
            />
            <div>
              <div className="flex items-center space-x-2">
                <h1 className="text-2xl font-bold text-gray-900">{lawyer.name}</h1>
                {lawyer.isBarCouncilVerified && (
                  <span className="flex items-center text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    <ShieldCheck size={14} className="mr-1 text-emerald-600" /> Bar Verified
                  </span>
                )}
              </div>
              <p className="text-sm font-medium text-indigo-600 mt-1">Bar Council ID: {lawyer.barCouncilId}</p>
              <div className="flex items-center space-x-4 mt-3 text-sm text-gray-500">
                <span className="flex items-center"><Award size={16} className="mr-1 text-gray-400" /> {lawyer.experienceYears} Years Exp</span>
                <span className="flex items-center"><Star size={16} className="mr-1 text-amber-500 fill-amber-400" /> {lawyer.rating} ({lawyer.totalReviews} reviews)</span>
              </div>
            </div>
          </div>

          {/* Fee & Action Box */}
          <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 w-full md:w-auto text-center md:text-right">
            <span className="text-xs text-gray-500 block">Consultation Fee</span>
            <span className="text-2xl font-extrabold text-gray-900">₹{lawyer.consultationFee}</span>
            <button
              onClick={() => onBookClick(lawyer)}
              className="mt-3 w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-6 py-2.5 rounded-lg text-sm shadow-sm transition-all flex items-center justify-center space-x-2"
            >
              <Calendar size={16} />
              <span>Book Consultation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          {/* About Section */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About Advocate</h3>
            <p className="text-gray-600 leading-relaxed text-sm">{lawyer.bio}</p>
          </div>

          {/* Court Specializations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Court Specializations</h3>
            <div className="flex flex-wrap gap-2">
              {lawyer.courts.map((court) => (
                <span key={court} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1.5 rounded-lg border border-indigo-100 flex items-center">
                  <MapPin size={14} className="mr-1.5 text-indigo-500" /> {court}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Languages Spoken</h3>
            <div className="flex flex-wrap gap-1.5">
              {lawyer.languages.map((lang) => (
                <span key={lang} className="bg-gray-100 text-gray-700 text-xs px-2.5 py-1 rounded-md">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};