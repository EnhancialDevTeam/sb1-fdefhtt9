import React from 'react';
import { Calendar } from 'lucide-react';

export function AboutCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-teal to-brand-sage text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-medium mb-6">Let's Work Together</h2>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Ready to transform your business operations and create exceptional experiences? 
          Schedule a discovery call to discuss how we can support your goals.
        </p>
        <button className="bg-white text-brand-teal px-8 py-4 rounded-full hover:bg-brand-ice transition flex items-center mx-auto">
          <Calendar className="w-5 h-5 mr-2" />
          Schedule a Discovery Call
        </button>
      </div>
    </section>
  );
}