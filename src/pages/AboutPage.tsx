import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { AboutHero } from '../components/about/AboutHero';
import { Journey } from '../components/about/Journey';
import { Values } from '../components/about/Values';
import { Expertise } from '../components/about/Expertise';
import { AboutCTA } from '../components/about/AboutCTA';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AboutHero />
        <Journey />
        <Values />
        <Expertise />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}

export default AboutPage;