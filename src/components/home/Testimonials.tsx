import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80',
    content: 'Emma has been an absolute game-changer for our business. Her virtual assistance has helped us streamline operations and focus on growth.',
  },
  {
    name: 'Michael Chen',
    role: 'Event Director, GlobalCon',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    content: 'The attention to detail in event management is outstanding. Emma turned our vision into reality, exceeding all expectations.',
  },
  {
    name: 'Emily Roberts',
    role: 'Founder, Design Studio',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80',
    content: 'Working with Emma has been transformative. Her organizational skills and professionalism are unmatched.',
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600">
            Don't just take our word for it - hear what our clients have to say.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}