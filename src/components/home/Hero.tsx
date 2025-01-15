import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50" />
      
      <div className="container mx-auto px-4 pt-20 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl font-medium leading-tight">
              Elevate Your Business with Professional
              <span className="text-indigo-600"> Virtual Support</span>
            </h1>
            
            <p className="text-xl text-gray-600">
              Comprehensive virtual assistance and event management services tailored to help your business thrive.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition flex items-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Discovery Call
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-full hover:border-indigo-600 hover:text-indigo-600 transition flex items-center">
                View Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80"
              alt="Emma Louise - Virtual Assistant and Event Manager"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-medium text-lg">Emma Louise</p>
              <p className="text-gray-600">Virtual Assistant & Event Management Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}