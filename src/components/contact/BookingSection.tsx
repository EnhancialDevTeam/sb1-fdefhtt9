import React from 'react';
import { Calendar, Clock } from 'lucide-react';

export function BookingSection() {
  return (
    <div className="bg-brand-teal text-white p-8 rounded-xl">
      <h2 className="text-2xl font-medium mb-6">Schedule a Call</h2>
      
      <div className="space-y-6">
        <p className="opacity-90">
          Book a free consultation to discuss your needs and how we can help your business grow.
        </p>

        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Clock className="w-5 h-5" />
            <span>Available Session Lengths:</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-3 text-center">
              15 min
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              30 min
            </div>
            <div className="bg-white/10 rounded-lg p-3 text-center">
              60 min
            </div>
          </div>
        </div>

        <button className="w-full bg-white text-brand-teal px-6 py-3 rounded-full hover:bg-brand-ice transition flex items-center justify-center">
          <Calendar className="w-5 h-5 mr-2" />
          Book Your Session
        </button>

        <p className="text-sm opacity-75">
          All times are shown in your local timezone
        </p>
      </div>
    </div>
  );
}