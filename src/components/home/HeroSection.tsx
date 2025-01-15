import React from 'react';
import { HeroContent } from './HeroContent';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-brand-ice to-brand-mint-light overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOGMzLjE4IDAgNi4xNzUtLjgyNCA4Ljc3MS0yLjI3MSAyLjU5Ni0xLjQ0NyA0Ljc1NC0zLjYwNSA2LjIwMS02LjIwMUMzNS4xNzYgNDEuODI1IDM2IDM4LjgzIDM2IDM1LjYyNXMtLjgyNC02LjItMi4yNzEtOC43OTZjLTEuNDQ3LTIuNTk2LTMuNjA1LTQuNzU0LTYuMjAxLTYuMjAxQzI0LjE3NSAxOC44MjQgMjEuMTggMTggMTggMTh6IiBmaWxsPSIjMGU1MjVhIiBmaWxsLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="container mx-auto px-4 pt-24">
        <div className="max-w-4xl mx-auto">
          <HeroContent />
        </div>
      </div>
    </section>
  );
}