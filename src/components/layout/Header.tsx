import React from 'react';
import { Menu, X, Calendar } from 'lucide-react';
import { Link } from './Link';
import { Logo } from './Logo';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navigationLinks = [
    { href: '/about', text: 'About Emma' },
    { href: '/va-services', text: 'VA Services' },
    { href: '/event-management', text: 'Event Management' },
    { href: '/blog', text: 'Blog' },
    { href: '/contact', text: 'Contact' },
  ];

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm z-50 border-b border-brand-ice">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href}>{link.text}</Link>
            ))}
            <button className="bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-teal-light transition flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call
            </button>
          </div>

          <button 
            className="md:hidden text-brand-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navigationLinks.map((link) => (
              <Link key={link.href} href={link.href} className="block py-2">
                {link.text}
              </Link>
            ))}
            <button className="w-full bg-brand-teal text-white px-6 py-2 rounded-full hover:bg-brand-teal-light transition flex items-center justify-center">
              <Calendar className="w-4 h-4 mr-2" />
              Book a Call
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}