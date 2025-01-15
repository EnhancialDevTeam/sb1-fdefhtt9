import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function VABottomCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-sage text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Book a free consultation to discuss how our VA services can support your growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-teal px-8 py-4 rounded-full hover:bg-brand-ice transition flex items-center justify-center group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition" />
              Schedule a Discovery Call
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full hover:bg-white/10 transition flex items-center justify-center group">
              Download Service Brochure
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
            </button>
          </div>

          <div className="mt-12 flex items-center justify-center space-x-8">
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2" />
              10+ Years Experience
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2" />
              500+ Happy Clients
            </div>
            <div className="flex items-center">
              <span className="w-3 h-3 bg-white rounded-full mr-2" />
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}