
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import Features from '@/components/sections/Features';
import Services from '@/components/sections/Services';
import TeamSection from '@/components/sections/TeamSection';
import Coverage from '@/components/sections/Coverage';
import Testimonials from '@/components/sections/Testimonials';
import ContactCTA from '@/components/sections/ContactCTA';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <TeamSection />
      <Testimonials />
      <Coverage />
      <ContactCTA />
      <Footer />
    </div>
  );
};

export default Index;
