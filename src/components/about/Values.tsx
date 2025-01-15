import React from 'react';
import { Heart, Shield, Zap, Users } from 'lucide-react';

const values = [
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Passion',
    description: 'Dedicated to delivering exceptional results with enthusiasm and care',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Integrity',
    description: 'Building trust through transparency and honest communication',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Excellence',
    description: 'Committed to the highest standards in every project',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Partnership',
    description: 'Working collaboratively to achieve your business goals',
  },
];

export function Values() {
  return (
    <section className="py-20 bg-brand-ice">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-brand-teal text-center mb-16">
          Core Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="text-brand-teal mb-4">{value.icon}</div>
              <h3 className="text-xl font-medium text-brand-teal mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}