import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

export function VAHero() {
  const keyPoints = [
    'Professional Administrative Support',
    'Streamlined Business Operations',
    'Dedicated Virtual Assistant',
    'Flexible Service Packages',
  ];

  return (
    <section className="relative min-h-[80vh] flex items-center bg-gradient-to-br from-brand-ice to-white">
      <div className="container mx-auto px-4 pt-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-brand-teal/10 text-brand-teal rounded-full text-sm font-medium">
              Virtual Assistant Services
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-brand-teal">
              Elevate Your Business with Expert Virtual Support
            </h1>
            
            <p className="text-xl text-gray-600 max-w-xl">
              Transform your business operations with professional virtual assistance 
              tailored to your unique needs. Let us handle the details while you 
              focus on growth.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-brand-sage" />
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>

            <button className="bg-brand-teal text-white px-8 py-4 rounded-full hover:bg-brand-teal-light transition flex items-center group">
              <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition" />
              Schedule a Consultation
            </button>
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
              alt="Virtual Assistant Services"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
              <p className="text-brand-teal font-medium">Trusted by 500+ Businesses</p>
              <p className="text-gray-600 text-sm mt-1">Delivering excellence since 2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}