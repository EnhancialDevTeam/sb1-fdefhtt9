import React from 'react';
import { CheckCircle } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

export function ServiceCard({ icon, title, description, features }: ServiceCardProps) {
  return (
    <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition">
      <div className="text-indigo-600 mb-4">{icon}</div>
      <h3 className="text-2xl font-medium mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <button className="mt-8 border border-indigo-600 text-indigo-600 px-6 py-2 rounded-full hover:bg-indigo-600 hover:text-white transition">
        Learn More
      </button>
    </div>
  );
}