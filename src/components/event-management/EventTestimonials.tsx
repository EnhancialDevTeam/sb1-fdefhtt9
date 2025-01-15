import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    content: "Emma and her team delivered beyond our expectations. Our corporate conference was flawlessly executed, and the attention to detail was remarkable.",
    author: "James Wilson",
    role: "CEO, TechCorp International",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "Our wedding was absolutely perfect. Every detail was thoughtfully planned and executed, creating memories that will last a lifetime.",
    author: "Sarah & Michael",
    role: "Newlyweds",
    image: "https://images.unsplash.com/photo-1623091411395-09e79fdbfcf5?auto=format&fit=crop&w=150&q=80"
  },
  {
    content: "The product launch event was a massive success. The team's creativity and professionalism helped us make a lasting impression on our clients.",
    author: "Lisa Chen",
    role: "Marketing Director, InnovateTech",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80"
  }
];

export function EventTestimonials() {
  return (
    <section className="py-20 bg-brand-ice">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600">
            What our clients say about their experience
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