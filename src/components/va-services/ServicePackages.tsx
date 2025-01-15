import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const packages = [
  {
    name: 'Basic',
    price: '997',
    description: 'Perfect for small businesses and entrepreneurs',
    hours: '20',
    features: [
      'Email Management',
      'Calendar Organization',
      'Basic Customer Support',
      'Document Preparation',
      'Travel Arrangements',
    ],
  },
  {
    name: 'Professional',
    price: '1,997',
    description: 'Ideal for growing businesses',
    hours: '40',
    features: [
      'All Basic Features',
      'Social Media Management',
      'Project Coordination',
      'CRM Management',
      'Basic Bookkeeping',
      'Meeting Minutes',
      'Research & Reports',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '2,997',
    description: 'Comprehensive support for established businesses',
    hours: '60',
    features: [
      'All Professional Features',
      'Executive Support',
      'Strategic Planning',
      'Team Coordination',
      'Process Optimization',
      'KPI Tracking',
      'Custom Reporting',
      'Priority Support',
    ],
  },
];

export function ServicePackages() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Service Packages
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 ${
                pkg.popular
                  ? 'bg-brand-teal text-white ring-4 ring-brand-sage/20'
                  : 'bg-brand-ice'
              }`}
            >
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-medium mb-2 ${
                  pkg.popular ? 'text-white' : 'text-brand-teal'
                }`}>
                  {pkg.name}
                </h3>
                <p className={pkg.popular ? 'text-white/80' : 'text-gray-600'}>
                  {pkg.description}
                </p>
                <div className="mt-4">
                  <span className="text-4xl font-medium">${pkg.price}</span>
                  <span className={pkg.popular ? 'text-white/80' : 'text-gray-600'}>
                    /month
                  </span>
                </div>
                <p className={`text-sm mt-2 ${
                  pkg.popular ? 'text-white/80' : 'text-gray-600'
                }`}>
                  Up to {pkg.hours} hours of support
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start space-x-3">
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                      pkg.popular ? 'text-white' : 'text-brand-sage'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 rounded-full flex items-center justify-center transition ${
                  pkg.popular
                    ? 'bg-white text-brand-teal hover:bg-brand-ice'
                    : 'bg-brand-teal text-white hover:bg-brand-teal-light'
                }`}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}