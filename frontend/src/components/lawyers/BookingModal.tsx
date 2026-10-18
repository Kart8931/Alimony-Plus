'use client';

import React, { useState } from 'react';
import { Lawyer, TimeSlot } from '../../types';
import { X, Calendar, Clock, CheckCircle } from 'lucide-react';
import { Appointment } from './ClientAppointment';

interface BookingModalProps {
  lawyer: Lawyer;
  onClose: () => void;
  onBookingSuccess: (appointment: Appointment) => void;
}

const MOCK_SLOTS: TimeSlot[] = [
  { id: '1', time: '10:00 AM - 10:30 AM', isAvailable: true },
  { id: '2', time: '11:30 AM - 12:00 PM', isAvailable: true },
  { id: '3', time: '02:00 PM - 02:30 PM', isAvailable: false },
  { id: '4', time: '04:00 PM - 04:30 PM', isAvailable: true },
];

export const BookingModal: React.FC<BookingModalProps> = ({ lawyer, onClose, onBookingSuccess }) => {
  const [selectedDate, setSelectedDate] = useState<string>('2026-10-25');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [consultationType, setConsultationType] = useState<'Video' | 'Audio' | 'In-Person'>('Video');
  const [clientNotes, setClientNotes] = useState<string>('');
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) {
      alert('Please select an available time slot.');
      return;
    }
    const slotObj = MOCK_SLOTS.find(s => s.id === selectedSlot);
    const newAppointment: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      lawyerName: lawyer.name,
      date: selectedDate,
      time: slotObj ? slotObj.time : '10:00 AM',
      mode: consultationType,
      fee: lawyer.consultationFee,
      status: 'Confirmed',
    };

    onBookingSuccess(newAppointment);
    setIsConfirmed(true);
  };

  if (isConfirmed) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-2xl max-w-md w-full p-8 text-center shadow-xl">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={36} />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Consultation Confirmed!</h3>
          <p className="text-sm text-gray-600 mb-6">
            Your session has been successfully scheduled with <span className="font-semibold text-gray-900">{lawyer.name}</span>.
          </p>
          <button
            onClick={onClose}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-xl text-sm transition-colors"
          >
            View My Appointments
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl relative max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        <h2 className="text-xl font-bold text-gray-900 mb-1">Book Consultation</h2>
        <p className="text-xs text-gray-500 mb-6">Schedule a session with {lawyer.name}</p>

        <form onSubmit={handleBookingSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
              <Calendar size={16} className="mr-1.5 text-indigo-600" /> Select Date
            </label>
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center">
              <Clock size={16} className="mr-1.5 text-indigo-600" /> Available Time Slots
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              {MOCK_SLOTS.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  disabled={!slot.isAvailable}
                  onClick={() => setSelectedSlot(slot.id)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border text-center transition-all ${
                    !slot.isAvailable 
                      ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                      : selectedSlot === slot.id
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-600 ring-2 ring-indigo-500/20'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  {slot.time}
                  {!slot.isAvailable && <span className="block text-[10px] text-gray-400">Booked</span>}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Consultation Mode</label>
            <div className="grid grid-cols-3 gap-2">
              {(['Video', 'Audio', 'In-Person'] as const).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setConsultationType(mode)}
                  className={`py-2 text-xs font-medium rounded-lg border text-center transition-all ${
                    consultationType === mode
                      ? 'bg-indigo-600 text-white border-indigo-600 shadow-xs'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  }`}
                >
                  {mode}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brief Case Summary / Notes</label>
            <textarea
              rows={3}
              placeholder="Provide a brief summary for the advocate..."
              value={clientNotes}
            onChange={(e) => setClientNotes(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="text-xs text-gray-400 block">Total Fee</span>
              <span className="text-lg font-bold text-gray-900">₹{lawyer.consultationFee}</span>
            </div>
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-2.5 rounded-xl shadow-sm transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};