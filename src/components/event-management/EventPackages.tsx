import React from 'react';
import { CheckCircle, Calendar } from 'lucide-react';

const packages = [
  {
    name: 'Essential',
    price: '2,997',
    description: 'Perfect for intimate gatherings and small corporate events',
    features: [
      'Event Strategy & Planning',
      'Vendor Coordination',
      'Timeline Management',
      'On-site Coordination',
      'Guest List Management',
    ],
  },
  {
    name: 'Premium',
    price: '5,997',
    description: 'Ideal for medium to large-scale events',
    features: [
      'All Essential Features',
      'Custom Design Concepts',
      'Full Vendor Management',
      'Budget Administration',
      'Marketing Support',
      'Guest Experience Design',
      'Technical Production',
    ],
    popular: true,
  },
  {
    name: 'Luxury',
    price: '9,997',
    description: 'Comprehensive support for luxury events',
    features: [
      'All Premium Features',
      'VIP Guest Management',
      'Security Coordination',
      'International Vendor Network',
      'Custom Brand Integration',
      'Multi-day Event Planning',
      'Legacy Documentation',
      '24/7 Dedicated Support',
    ],
  },
];

export function EventPackages() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Event Packages
          </h2>
          <p className="text-xl text-gray-600">
            Tailored solutions for every event size and type
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
                  <span className="text-4xl font-medium">From ${pkg.price}</span>
                </div>
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
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}