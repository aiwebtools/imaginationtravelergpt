
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ComparisonSection from '@/components/ComparisonSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import FaqSection from '@/components/FaqSection';
import DisclaimerSection from '@/components/DisclaimerSection';
import ConsentPopup from '@/components/ConsentPopup';

const Index = () => {
  return (
    <div className="min-h-screen bg-space text-white overflow-x-hidden">
      <Header />
      
      {/* Main Content */}
      <main role="main">
        <article>
          <HeroSection />
          <section aria-label="Comparison with other AI tools">
            <ComparisonSection />
          </section>
          <section aria-label="How the interdimensional travel works">
            <HowItWorksSection />
          </section>
          <section aria-label="User testimonials and experiences">
            <TestimonialsSection />
          </section>
          <section aria-label="Frequently asked questions">
            <FaqSection />
          </section>
          <section aria-label="Legal disclaimer and terms">
            <DisclaimerSection />
          </section>
        </article>
      </main>
      
      <Footer />
      <ConsentPopup />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]" aria-hidden="true">
        <div className="absolute inset-0 star-field-dense opacity-40"></div>
        
        {/* Shooting Stars */}
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        <div className="shooting-star"></div>
        
        {/* Cyberpunk Grid */}
        <div className="absolute inset-0 bg-cyber-grid bg-[length:60px_60px] opacity-10"></div>
        
        {/* Glowing Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue opacity-5 filter blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 rounded-full bg-neon-magenta opacity-5 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-2/3 left-1/2 w-80 h-80 rounded-full bg-neon-cyan opacity-5 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '4s' }}></div>
      </div>
    </div>
  );
};

export default Index;
