import React from 'react';
import { Mail, Clock, MapPin } from 'lucide-react';

export function ContactHero() {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-brand-ice to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-medium text-brand-teal mb-6">
            Let's Connect
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Ready to transform your business? We're here to help you achieve your goals.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Mail className="w-6 h-6 text-brand-teal mb-4 mx-auto" />
              <h3 className="font-medium mb-2">Email Us</h3>
              <a href="mailto:info@emmalouisevc.com" className="text-gray-600 text-sm hover:text-brand-teal transition">
                info@emmalouisevc.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <Clock className="w-6 h-6 text-brand-teal mb-4 mx-auto" />
              <h3 className="font-medium mb-2">Business Hours</h3>
              <p className="text-gray-600 text-sm">
                Mon-Fri: 9:00 AM - 5:00 PM GMT
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <MapPin className="w-6 h-6 text-brand-teal mb-4 mx-auto" />
              <h3 className="font-medium mb-2">Location</h3>
              <p className="text-gray-600 text-sm">
                London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}