import React from 'react';
import { Clock, Mail, Phone } from 'lucide-react';

export function ContactInfo() {
  return (
    <div className="bg-brand-ice p-8 rounded-xl">
      <h2 className="text-2xl font-medium text-brand-teal mb-6">Contact Information</h2>
      
      <div className="space-y-6">
        <div className="flex items-start space-x-4">
          <Clock className="w-5 h-5 text-brand-teal mt-1" />
          <div>
            <h3 className="font-medium mb-2">Business Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM GMT</p>
            <p className="text-gray-600">Response Time: Within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-5 h-5 text-brand-teal mt-1" />
          <div>
            <h3 className="font-medium mb-2">Email</h3>
            <a href="mailto:info@emmalouisevc.com" className="text-gray-600 hover:text-brand-teal transition">
              info@emmalouisevc.com
            </a>
            <p className="text-gray-600">For general inquiries and support</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Phone className="w-5 h-5 text-brand-teal mt-1" />
          <div>
            <h3 className="font-medium mb-2">Phone</h3>
            <a href="tel:+447360363119" className="text-gray-600 hover:text-brand-teal transition">
              +44 (0) 7360 363 119
            </a>
            <p className="text-gray-600">Available during business hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}