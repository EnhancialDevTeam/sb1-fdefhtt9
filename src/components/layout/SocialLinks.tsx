import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from './Link';

export function SocialLinks() {
  const socialLinks = [
    { href: '#', icon: Instagram, label: 'Instagram' },
    { href: '#', icon: Linkedin, label: 'LinkedIn' },
    { href: '#', icon: Twitter, label: 'Twitter' },
  ];

  return (
    <div className="flex space-x-4">
      {socialLinks.map(({ href, icon: Icon, label }) => (
        <Link key={label} href={href} aria-label={label}>
          <Icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
}