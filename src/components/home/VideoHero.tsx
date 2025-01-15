import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function VideoHero() {
  return (
    <section className="relative h-[75vh] overflow-hidden">
      {/* Video Background with Fallback */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover relative z-10"
          poster="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
        >
          <source src="https://staging.jestoneedu.com/wp-content/uploads/2024/12/Virtual-Assistant.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50 z-20" />
      </div>

      {/* Content Overlay */}
      <div className="relative h-full flex items-center z-30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight mb-6">
              Empowering Your Business with Professional Support
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Expert virtual assistance and event management services tailored to help your business thrive
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-brand-teal px-8 py-4 rounded-full hover:bg-brand-ice transition flex items-center justify-center group">
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition" />
                Book a Discovery Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition flex items-center justify-center group">
                Explore Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2" />
                10+ Years Experience
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2" />
                500+ Happy Clients
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-white rounded-full mr-2" />
                Award-Winning Service
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}