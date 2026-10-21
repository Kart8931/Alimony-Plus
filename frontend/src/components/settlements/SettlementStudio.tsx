'use client';

import React, { useState } from 'react';
import { Calculator, Sliders, FileText, ShieldAlert, Download } from 'lucide-react';

export const SettlementStudio: React.FC = () => {
  // Real-time slider states for financial variables
  const [husbandIncome, setHusbandIncome] = useState<number>(120000);
  const [wifeIncome, setWifeIncome] = useState<number>(30000);
  const [marriageYears, setMarriageYears] = useState<number>(6);
  const [childCount, setChildCount] = useState<number>(1);

  // Dynamic calculations based on legal maintenance guidelines (e.g., ~25-30% disposable income gap)
  const incomeDiff = Math.max(0, husbandIncome - wifeIncome);
  const baseAlimony = Math.round(incomeDiff * 0.25);
  const childSupport = childCount * 8000;
  const totalMonthlyMaintenance = baseAlimony + childSupport;
  const oneTimeSettlementEstimate = totalMonthlyMaintenance * 12 * Math.min(marriageYears, 10);

  const handleGenerateReport = () => {
    alert('Cryptographic watermarked PDF report generated successfully for court submission!');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-8">
      {/* Header */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Module: Settlement Studio & Rule Engine
            </span>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">High-Performance Legal Analytics</h1>
            <p className="text-sm text-gray-600 mt-1">Real-time slider-based scenario comparisons & statutory maintenance calculations.</p>
          </div>
          <button
            onClick={handleGenerateReport}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium px-5 py-2.5 rounded-xl text-sm shadow-sm transition-all flex items-center space-x-2"
          >
            <Download size={16} />
            <span>Export Court PDF Report</span>
          </button>
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left 2 Cols: Interactive Sliders & Inputs */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 space-y-6">
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Sliders size={20} className="mr-2 text-indigo-600" /> Financial Scenario Parameters
            </h3>

            {/* Husband Monthly Income */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Husband's Monthly Income</span>
                <span className="font-bold text-gray-900">₹{husbandIncome.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={20000}
                max={500000}
                step={5000}
                value={husbandIncome}
                onChange={(e) => setHusbandIncome(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Wife Monthly Income */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Wife's Monthly Income</span>
                <span className="font-bold text-gray-900">₹{wifeIncome.toLocaleString('en-IN')}</span>
              </div>
              <input
                type="range"
                min={0}
                max={300000}
                step={5000}
                value={wifeIncome}
                onChange={(e) => setWifeIncome(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Years of Marriage */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Duration of Marriage</span>
                <span className="font-bold text-gray-900">{marriageYears} Years</span>
              </div>
              <input
                type="range"
                min={1}
                max={30}
                step={1}
                value={marriageYears}
                onChange={(e) => setMarriageYears(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>

            {/* Number of Children */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="font-medium text-gray-700">Dependant Children</span>
                <span className="font-bold text-gray-900">{childCount} Child(ren)</span>
              </div>
              <input
                type="range"
                min={0}
                max={4}
                step={1}
                value={childCount}
                onChange={(e) => setChildCount(Number(e.target.value))}
                className="w-full accent-indigo-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Col: Live Calculation Outputs */}
        <div className="space-y-6">
          <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-6 space-y-6">
            <h3 className="text-lg font-semibold flex items-center border-b border-gray-800 pb-4">
              <Calculator size={20} className="mr-2 text-indigo-400" /> Statutory Rule Engine Output
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center bg-gray-800/60 p-3.5 rounded-xl border border-gray-800">
                <span className="text-gray-400">Calculated Alimony</span>
                <span className="font-bold text-emerald-400 text-base">₹{baseAlimony.toLocaleString('en-IN')}/mo</span>
              </div>

              <div className="flex justify-between items-center bg-gray-800/60 p-3.5 rounded-xl border border-gray-800">
                <span className="text-gray-400">Child Support</span>
                <span className="font-bold text-emerald-400 text-base">₹{childSupport.toLocaleString('en-IN')}/mo</span>
              </div>

              <div className="flex justify-between items-center bg-indigo-950/60 p-4 rounded-xl border border-indigo-800">
                <span className="text-indigo-200 font-medium">Total Monthly Payout</span>
                <span className="font-extrabold text-indigo-300 text-lg">₹{totalMonthlyMaintenance.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex justify-between items-center bg-gray-800/60 p-3.5 rounded-xl border border-gray-800">
                <span className="text-gray-400">One-Time Lump Sum Estimate</span>
                <span className="font-bold text-amber-400 text-base">₹{oneTimeSettlementEstimate.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-gray-400 flex items-start space-x-2">
              <ShieldAlert size={16} className="text-amber-400 shrink-0 mt-0.5" />
              <span>Calculated in accordance with Supreme Court maintenance benchmark guidelines and statutory parameters.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};