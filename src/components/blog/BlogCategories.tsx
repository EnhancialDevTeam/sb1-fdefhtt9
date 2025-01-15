import React from 'react';
import { TrendingUp, Briefcase, Users, Lightbulb } from 'lucide-react';

const categories = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: 'Future Content Marketing',
    description: 'Latest trends and strategies in digital marketing',
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Industry Insights',
    description: 'Expert analysis of market developments',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Client Success Stories',
    description: 'Real results and implementation stories',
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Business Tips',
    description: 'Practical advice for business growth',
  },
];

export function BlogCategories() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <button
              key={index}
              className="p-6 rounded-xl bg-brand-ice hover:bg-brand-ice/80 transition group text-left"
            >
              <div className="text-brand-teal mb-4 transform group-hover:scale-110 transition">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium text-brand-teal mb-2">
                {category.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {category.description}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}