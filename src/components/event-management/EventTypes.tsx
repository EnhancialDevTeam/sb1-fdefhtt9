import React from 'react';
import { Building2, GlassWater, PartyPopper, Rocket, Users, Store } from 'lucide-react';

const eventTypes = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Corporate Gatherings',
    description: 'From conferences to team-building events, we create professional and engaging corporate experiences.',
    features: ['Conferences', 'Seminars', 'Award Ceremonies', 'Team Building'],
  },
  {
    icon: <GlassWater className="w-6 h-6" />,
    title: 'Luxury Weddings',
    description: 'Crafting elegant and memorable celebrations for your special day.',
    features: ['Full Planning', 'Partial Planning', 'Day-of Coordination', 'Destination Weddings'],
  },
  {
    icon: <PartyPopper className="w-6 h-6" />,
    title: 'Social Celebrations',
    description: 'Milestone celebrations designed to create lasting memories.',
    features: ['Birthday Parties', 'Anniversary Events', 'Gala Dinners', 'Holiday Parties'],
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Product Launches',
    description: 'Innovative launch events that make a lasting impact.',
    features: ['Brand Activations', 'Press Events', 'VIP Experiences', 'Pop-up Events'],
  },
];

export function EventTypes() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Event Types & Services
          </h2>
          <p className="text-xl text-gray-600">
            Expertly crafted events for every occasion
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {eventTypes.map((type, index) => (
            <div key={index} className="bg-brand-ice rounded-xl p-8 hover:shadow-lg transition group">
              <div className="text-brand-teal mb-4 transform group-hover:scale-110 transition">
                {type.icon}
              </div>
              <h3 className="text-xl font-medium text-brand-teal mb-3">{type.title}</h3>
              <p className="text-gray-600 mb-6">{type.description}</p>
              <ul className="space-y-2">
                {type.features.map((feature, idx) => (
                  <li key={idx} className="text-gray-600 flex items-center">
                    <span className="w-1.5 h-1.5 bg-brand-sage rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}