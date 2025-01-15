import React from 'react';
import { MessageSquare, ClipboardList, Zap, Trophy } from 'lucide-react';

const steps = [
  {
    icon: <MessageSquare />,
    title: 'Discovery Call',
    description: 'We discuss your needs and how we can support your business goals',
  },
  {
    icon: <ClipboardList />,
    title: 'Custom Plan',
    description: 'We create a tailored service package based on your requirements',
  },
  {
    icon: <Zap />,
    title: 'Onboarding',
    description: 'Quick and smooth integration with your existing workflows',
  },
  {
    icon: <Trophy />,
    title: 'Execution',
    description: 'Delivering exceptional results while maintaining clear communication',
  },
];

export function ProcessFlow() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">
            A simple, effective process to get started
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-brand-ice rounded-full flex items-center justify-center mx-auto mb-6">
                  <div className="text-brand-teal">{step.icon}</div>
                </div>
                <h3 className="text-xl font-medium text-brand-teal mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
          
          <div className="hidden md:block relative mt-8">
            <div className="absolute top-[-80px] left-[15%] right-[15%] h-[2px] bg-brand-ice">
              <div className="absolute top-[-4px] left-[33%] w-3 h-3 bg-brand-teal rounded-full" />
              <div className="absolute top-[-4px] left-[66%] w-3 h-3 bg-brand-teal rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}