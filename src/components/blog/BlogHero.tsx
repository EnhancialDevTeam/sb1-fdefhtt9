import React from 'react';
import { Search } from 'lucide-react';

export function BlogHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-ice to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-brand-teal mb-6">
            Insights & Expertise
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Discover valuable insights, industry trends, and expert advice to help your business thrive
          </p>
          
          <div className="relative max-w-xl mx-auto">
            <input
              type="search"
              placeholder="Search articles..."
              className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 pl-14"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}