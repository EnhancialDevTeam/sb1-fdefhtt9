import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string;
  content: string;
}

export function TestimonialCard({ name, role, image, content }: TestimonialCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition">
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-600">{content}</p>
    </div>
  );
}