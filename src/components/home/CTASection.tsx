import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-sage text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-medium mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-12 opacity-90">
            Book a free consultation to discuss how we can support your business growth
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-teal px-8 py-4 rounded-full hover:bg-brand-ice transition flex items-center justify-center">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule a Discovery Call
            </button>
            <button className="border-2 border-white px-8 py-4 rounded-full hover:bg-white/10 transition flex items-center justify-center">
              View Service Packages
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <p className="mt-8 text-sm opacity-75">
            Typical response time: Within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}