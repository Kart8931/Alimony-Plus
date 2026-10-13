'use client';

import React from 'react';
import { LawyerDirectory } from '@/components/lawyers/LawyerDirectory';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function LawyersPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto mb-6">
        <Link href="/dashboard" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800">
          <ArrowLeft size={16} className="mr-1" /> Back to Dashboard
        </Link>
      </div>
      <LawyerDirectory />
    </main>
  );
}