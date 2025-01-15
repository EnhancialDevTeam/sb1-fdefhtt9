import React from 'react';
import { ClipboardList, Users, Calendar, Trophy } from 'lucide-react';

const steps = [
  {
    icon: <ClipboardList className="w-6 h-6" />,
    title: 'Initial Consultation',
    description: 'We discuss your vision, requirements, and objectives for the event.',
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Planning & Design',
    description: 'Creating detailed plans, timelines, and coordinating with vendors.',
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Coordination',
    description: 'Managing all logistics and ensuring smooth execution.',
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: 'Event Success',
    description: 'Delivering an exceptional experience that exceeds expectations.',
  },
];

export function PlanningProcess() {
  return (
    <section className="py-20 bg-brand-ice">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Our Planning Process
          </h2>
          <p className="text-xl text-gray-600">
            A proven approach to creating exceptional events
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                <div className="text-brand-teal">{step.icon}</div>
              </div>
              <h3 className="text-xl font-medium text-brand-teal mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-[2px] bg-brand-teal/20">
                  <div className="absolute right-0 top-[-3px] w-2 h-2 bg-brand-teal rounded-full" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}