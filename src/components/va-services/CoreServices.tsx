import React from 'react';
import { 
  Inbox, Calendar, Headphones, Plane,
  FileText, Mail, Facebook, Instagram,
  LayoutGrid, Hash, PenTool
} from 'lucide-react';

const businessAdmin = [
  { icon: <FileText />, name: 'Accountancy Support', description: 'Xero integration and bookkeeping' },
  { icon: <Calendar />, name: 'Diary Management', description: 'Professional scheduling and organization' },
  { icon: <Headphones />, name: 'Customer Service', description: 'Client follow-up and support' },
  { icon: <Plane />, name: 'Travel Planning', description: 'Itinerary creation and booking' },
  { icon: <Inbox />, name: 'Personal Admin', description: 'Day-to-day administrative tasks' },
];

const marketing = [
  { icon: <Mail />, name: 'Email Campaigns', description: 'Mailchimp campaign management' },
  { icon: <Facebook />, name: 'Social Media', description: 'Facebook & Instagram management' },
  { icon: <LayoutGrid />, name: 'Content Planning', description: 'Strategic content scheduling' },
  { icon: <Hash />, name: 'Hashtag Research', description: 'Strategic hashtag optimization' },
  { icon: <PenTool />, name: 'Content Creation', description: 'Basic Canva designs' },
];

export function CoreServices() {
  return (
    <section className="py-20 bg-brand-ice">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-medium text-brand-teal mb-4">
            Core Services
          </h2>
          <p className="text-xl text-gray-600">
            Comprehensive virtual support tailored to your needs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-medium text-brand-teal mb-8">
              Business Administration
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {businessAdmin.map((service) => (
                <div key={service.name} className="bg-white p-6 rounded-xl">
                  <div className="text-brand-teal mb-4">{service.icon}</div>
                  <h4 className="font-medium text-lg mb-2">{service.name}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-medium text-brand-teal mb-8">
              Marketing & Social Media
            </h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {marketing.map((service) => (
                <div key={service.name} className="bg-white p-6 rounded-xl">
                  <div className="text-brand-teal mb-4">{service.icon}</div>
                  <h4 className="font-medium text-lg mb-2">{service.name}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}