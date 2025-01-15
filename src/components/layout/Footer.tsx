import React from 'react';
import { Mail, Instagram, Linkedin, Twitter, Calendar } from 'lucide-react';
import { Link } from './Link';
import { FooterSection } from './FooterSection';
import { SocialLinks } from './SocialLinks';

export function Footer() {
  const serviceLinks = [
    { href: '/va-services', text: 'Virtual Assistant Services' },
    { href: '/event-management', text: 'Event Management' },
    { href: '/packages', text: 'Packages & Pricing' },
    { href: '/process', text: 'Our Process' },
  ];

  const companyLinks = [
    { href: '/about', text: 'About Emma' },
    { href: '/blog', text: 'Blog' },
    { href: '/testimonials', text: 'Testimonials' },
    { href: '/faq', text: 'FAQ' },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium">Emma Turnbull</h3>
            <p className="text-gray-600">
              Empowering your business with professional virtual assistance and event management services.
            </p>
            <SocialLinks />
          </div>

          <FooterSection title="Services" links={serviceLinks} />
          <FooterSection title="Company" links={companyLinks} />

          <div>
            <h4 className="font-medium mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <Link href="mailto:info@emmalouisevc.com" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@emmalouisevc.com
                </Link>
              </li>
              <li>
                <button className="bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-teal-light transition w-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">© 2024 Emma Turnbull. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy">Privacy Policy</Link>
              <Link href="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}