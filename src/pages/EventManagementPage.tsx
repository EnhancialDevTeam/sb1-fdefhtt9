import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { EventHero } from '../components/event-management/EventHero';
import { EventTypes } from '../components/event-management/EventTypes';
import { PlanningProcess } from '../components/event-management/PlanningProcess';
import { EventPackages } from '../components/event-management/EventPackages';
import { PortfolioGallery } from '../components/event-management/PortfolioGallery';
import { EventTestimonials } from '../components/event-management/EventTestimonials';
import { EventBottomCTA } from '../components/event-management/EventBottomCTA';

export function EventManagementPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <EventHero />
        <EventTypes />
        <PlanningProcess />
        <EventPackages />
        <PortfolioGallery />
        <EventTestimonials />
        <EventBottomCTA />
      </main>
      <Footer />
    </div>
  );
}

export default EventManagementPage;