'client'
import React from 'react';
import { LawyerDirectory } from '@/components/lawyers/LawyerDirectory';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Top Navbar Header */}
      <header className="bg-white border-b border-gray-200 py-4 px-6 mb-6 shadow-xs">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-indigo-600">Alimony+</span>
            <span className="text-xs bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded-md font-medium">Client Portal</span>
          </div>
          <span className="text-sm text-gray-500 font-medium">Tech Tomorrow Internship</span>
        </div>
      </header>

      {/* Main Directory Component */}
      <LawyerDirectory />
    </main>
  );
}