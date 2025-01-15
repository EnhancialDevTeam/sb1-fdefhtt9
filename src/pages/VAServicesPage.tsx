import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { VAHero } from '../components/va-services/VAHero';
import { ServicePackages } from '../components/va-services/ServicePackages';
import { CoreServices } from '../components/va-services/CoreServices';
import { ProcessFlow } from '../components/va-services/ProcessFlow';
import { VATestimonials } from '../components/va-services/VATestimonials';
import { VABottomCTA } from '../components/va-services/VABottomCTA';

export function VAServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <VAHero />
        <ServicePackages />
        <CoreServices />
        <ProcessFlow />
        <VATestimonials />
        <VABottomCTA />
      </main>
      <Footer />
    </div>
  );
}

export default VAServicesPage;