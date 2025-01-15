import React from 'react';
import { Briefcase, GraduationCap, Award } from 'lucide-react';

const milestones = [
  {
    year: '2012',
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Business Administration Degree',
    description: 'Graduated with honors, specializing in Event Management',
  },
  {
    year: '2014',
    icon: <Briefcase className="w-6 h-6" />,
    title: 'Corporate Event Coordinator',
    description: 'Led successful international conferences and corporate events',
  },
  {
    year: '2018',
    icon: <Award className="w-6 h-6" />,
    title: 'Virtual Collaborations Founded',
    description: 'Launched boutique VA and event management services',
  },
];

export function Journey() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-brand-teal text-center mb-16">
          My Professional Journey
        </h2>
        <div className="max-w-4xl mx-auto">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex gap-8 mb-12 last:mb-0">
              <div className="flex-shrink-0 w-20 h-20 bg-brand-ice rounded-full flex items-center justify-center">
                <div className="text-brand-teal">{milestone.icon}</div>
              </div>
              <div>
                <div className="text-xl font-medium text-brand-teal mb-2">
                  {milestone.year} - {milestone.title}
                </div>
                <p className="text-gray-600">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}