import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function HeroContent() {
  return (
    <div className="text-center space-y-8">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
        Empowering Your
        <span className="text-brand-teal"> Business Success</span>
      </h1>
      
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        Transform your business operations with expert virtual assistance and seamless event management services. Let's create extraordinary experiences together.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button className="bg-brand-teal text-white px-8 py-4 rounded-full hover:bg-brand-teal-light transition flex items-center justify-center group">
          <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition" />
          Book a Discovery Call
        </button>
        <button className="border-2 border-brand-teal text-brand-teal px-8 py-4 rounded-full hover:bg-brand-teal hover:text-white transition flex items-center justify-center group">
          Explore Services
          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
        </button>
      </div>

      <div className="flex items-center justify-center space-x-6 pt-4">
        <div className="flex -space-x-3">
          {[...Array(4)].map((_, i) => (
            <img
              key={i}
              src={`https://i.pravatar.cc/100?img=${i + 10}`}
              alt="Happy Client"
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          ))}
        </div>
        <div>
          <div className="flex items-center space-x-1 text-brand-sage justify-center">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <p className="text-sm text-gray-600">Trusted by 500+ clients</p>
        </div>
      </div>
    </div>
  );
}