import React from 'react';

const expertise = [
  {
    area: 'Virtual Assistance',
    skills: ['Email Management', 'Calendar Organization', 'Travel Planning', 'Document Preparation'],
  },
  {
    area: 'Event Management',
    skills: ['Corporate Events', 'Virtual Conferences', 'Team Building', 'Product Launches'],
  },
  {
    area: 'Business Operations',
    skills: ['Process Optimization', 'Project Management', 'Team Coordination', 'Client Relations'],
  },
];

export function Expertise() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-medium text-brand-teal text-center mb-16">
          Areas of Expertise
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {expertise.map((area, index) => (
            <div key={index} className="border border-brand-ice p-8 rounded-xl">
              <h3 className="text-xl font-medium text-brand-teal mb-6">
                {area.area}
              </h3>
              <ul className="space-y-3">
                {area.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-brand-sage rounded-full mr-3" />
                    <span className="text-gray-600">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}