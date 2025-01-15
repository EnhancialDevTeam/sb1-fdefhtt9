import React from 'react';
import { Link } from './Link';

export function Logo() {
  return (
    <Link href="/" className="block">
      <img
        src="https://lightslategray-weasel-638310.hostingersite.com/wp-content/uploads/2025/01/Virtual-Collaborations-with-Emma-Louise_Primary-Logo-MAIN.png"
        alt="Virtual Collaborations with Emma Louise"
        className="h-12 w-auto"
      />
    </Link>
  );
}