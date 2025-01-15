import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { VideoHero } from '../components/home/VideoHero';
import { BenefitsSection } from '../components/home/BenefitsSection';
import { Testimonials } from '../components/home/Testimonials';
import { CTASection } from '../components/home/CTASection';

export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <VideoHero />
        <BenefitsSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}