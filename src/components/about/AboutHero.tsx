import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

export function AboutHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://lightslategray-weasel-638310.hostingersite.com/wp-content/uploads/2025/01/101224-EmmaTurnbull_Headshots-30-scaled.jpg"
          alt="Office Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/90 to-brand-teal/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="text-white space-y-8">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
              About Emma Turnbull
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium leading-tight">
              Transforming Visions into Reality
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              With over a decade of experience in virtual assistance and event management, 
              I'm passionate about helping businesses thrive through strategic support and 
              exceptional service delivery.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-brand-teal px-8 py-4 rounded-full hover:bg-brand-ice transition flex items-center justify-center group">
                <Calendar className="w-5 h-5 mr-2 group-hover:scale-110 transition" />
                Book a Discovery Call
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition flex items-center justify-center group">
                View Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition" />
              </button>
            </div>
          </div>

          {/* Profile Image Card */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-white p-6 shadow-2xl">
              <img
                src="https://lightslategray-weasel-638310.hostingersite.com/wp-content/uploads/2025/01/101224-EmmaTurnbull_Headshots-30-scaled.jpg"
                alt="Emma Turnbull - Virtual Assistant and Event Manager"
                className="w-full aspect-[3/4] object-cover rounded-lg mb-6"
              />
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-12 bg-brand-teal rounded-full" />
                  <div>
                    <h3 className="text-2xl font-medium text-brand-teal">Emma Turnbull</h3>
                    <p className="text-gray-600">Founder & Principal Consultant</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                    10+ Years Experience
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-brand-sage rounded-full mr-2" />
                    500+ Projects Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-brand-sage/20 rounded-2xl" />
            <div className="absolute -z-20 -bottom-12 -right-12 w-full h-full bg-brand-sky/20 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}