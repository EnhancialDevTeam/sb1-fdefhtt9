import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:');
  const classes = `text-gray-600 hover:text-brand-teal transition ${className}`;

  if (isExternal) {
    return (
      <a 
        href={href} 
        className={classes}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <RouterLink 
      to={href} 
      className={classes}
      {...props}
    >
      {children}
    </RouterLink>
  );
}