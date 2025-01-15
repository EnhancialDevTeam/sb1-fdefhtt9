import React from 'react';

interface HeroImageProps {
  imageUrl: string;
  name: string;
  role: string;
}

export function HeroImage({ imageUrl, name, role }: HeroImageProps) {
  return (
    <div className="relative">
      <div className="aspect-[3/4] md:aspect-[4/5] relative">
        <img
          src={imageUrl}
          alt={`${name} - ${role}`}
          className="w-full h-full object-cover rounded-2xl shadow-2xl"
        />
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
        <div className="flex items-center space-x-3">
          <div className="w-1 h-12 bg-brand-teal rounded-full" />
          <div>
            <h3 className="font-medium text-xl text-brand-teal">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}