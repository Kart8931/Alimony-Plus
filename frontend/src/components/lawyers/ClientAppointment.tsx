'use client';

import React from 'react';
import { Calendar, Clock, Video, CheckCircle2 } from 'lucide-react';

export interface Appointment {
  id: string;
  lawyerName: string;
  date: string;
  time: string;
  mode: string;
  fee: number;
  status: 'Confirmed' | 'Pending';
}

interface ClientAppointmentsProps {
  appointments: Appointment[];
}

export const ClientAppointments: React.FC<ClientAppointmentsProps> = ({ appointments }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mt-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">My Scheduled Consultations</h3>
      
      {appointments.length === 0 ? (
        <p className="text-sm text-gray-500 py-4 text-center">No consultations booked yet. Select an advocate from the directory to book a slot.</p>
      ) : (
        <div className="space-y-4">
          {appointments.map((apt) => (
            <div key={apt.id} className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                  <Calendar size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{apt.lawyerName}</h4>
                  <div className="flex items-center space-x-3 text-xs text-gray-500 mt-1">
                    <span className="flex items-center"><Calendar size={14} className="mr-1" /> {apt.date}</span>
                    <span className="flex items-center"><Clock size={14} className="mr-1" /> {apt.time}</span>
                    <span className="flex items-center"><Video size={14} className="mr-1" /> {apt.mode}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-4 w-full md:w-auto justify-between md:justify-end">
                <span className="text-sm font-bold text-gray-900">₹{apt.fee}</span>
                <span className="flex items-center text-xs font-medium text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <CheckCircle2 size={13} className="mr-1 text-emerald-600" /> {apt.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};