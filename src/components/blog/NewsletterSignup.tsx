import React from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSignup() {
  return (
    <section className="py-20 bg-brand-ice">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-medium text-brand-teal mb-6">
            Stay Updated with Industry Insights
          </h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest trends, tips, and expert advice
            delivered directly to your inbox.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-teal/20 pl-12"
              />
            </div>
            <button
              type="submit"
              className="bg-brand-teal text-white px-8 py-4 rounded-full hover:bg-brand-teal-light transition whitespace-nowrap"
            >
              Subscribe Now
            </button>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}