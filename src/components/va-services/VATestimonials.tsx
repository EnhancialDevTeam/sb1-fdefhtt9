import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Emma's VA services have transformed how I run my business. I can finally focus on growth while knowing the day-to-day operations are in capable hands.",
    author: "Sarah Johnson",
    role: "CEO, TechStart Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The level of professionalism and attention to detail is outstanding. Having a dedicated VA has increased our productivity tenfold.",
    author: "Michael Chen",
    role: "Founder, GlobalTech Solutions",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Exceptional service that goes above and beyond. Emma's team has become an integral part of our business operations.",
    author: "Emily Roberts",
    role: "Director, Creative Studios",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

export function VATestimonials() {
  return (
    <section className="py-20 bg-brand-ice">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600">
            See what our clients have to say about working with us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-medium text-brand-teal">
                    {testimonial.author}
                  </h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}