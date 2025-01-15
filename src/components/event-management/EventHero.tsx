import React from 'react';
import { Calendar, Star } from 'lucide-react';

export function EventHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80"
          alt="Luxury Event Setup"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/95 to-brand-teal/80" />
      </div>

      <div className="container mx-auto px-4 pt-24 relative">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white mb-6">
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Premium Event Management Services</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-tight mb-8">
            Transform Your Vision Into Unforgettable Events
          </h1>

          <p className="text-xl text-white/90 max-w-2xl mb-12">
            Elevate your events with our bespoke management services. From intimate gatherings to grand galas, 
            we craft extraordinary experiences that leave lasting impressions.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-white text-brand-teal px-8 py-4 rounded-full hover:bg-brand-ice transition flex items-center justify-center group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition" />
              Start Planning Your Event
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition">
              View Our Portfolio
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-8 text-white/80">
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2" />
              500+ Events Executed
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2" />
              98% Client Satisfaction
            </div>
            <div className="flex items-center">
              <span className="w-2 h-2 bg-white rounded-full mr-2" />
              Award-Winning Service
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}