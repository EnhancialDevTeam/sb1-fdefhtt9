import React from 'react';
import { Briefcase, Users } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

const services = [
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Virtual Assistant Services',
    description: 'Comprehensive administrative support to keep your business running smoothly.',
    features: ['Email Management', 'Calendar Organization', 'Document Preparation', 'Travel Arrangements'],
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Event Management',
    description: 'End-to-end event planning and coordination for memorable experiences.',
    features: ['Venue Selection', 'Vendor Management', 'Timeline Planning', 'On-site Coordination'],
  },
];

export function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium mb-4">Professional Services</h2>
          <p className="text-xl text-gray-600">
            Tailored solutions to help you focus on what matters most - growing your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}