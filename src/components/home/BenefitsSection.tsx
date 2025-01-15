import React from 'react';
import { Clock, Shield, Heart, Zap, Users, Trophy } from 'lucide-react';

const benefits = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: 'Time Savings',
    description: 'Reclaim your valuable time by delegating tasks to our expert team',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Reliable Support',
    description: 'Consistent, professional assistance you can count on',
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: 'Personalized Service',
    description: 'Tailored solutions that match your unique needs',
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: 'Increased Efficiency',
    description: 'Streamlined processes that boost productivity',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Expert Team',
    description: 'Access to skilled professionals for various tasks',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Quality Results',
    description: 'Exceptional outcomes that exceed expectations',
  },
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Why Choose Virtual Collaborations?
          </h2>
          <p className="text-xl text-gray-600">
            Experience the difference of working with a dedicated professional team
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-brand-ice hover:shadow-md transition"
            >
              <div className="text-brand-teal mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-medium text-brand-teal mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}