
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import ActionCards from '../components/ActionCards';
import HowItWorks from '../components/HowItWorks';
import LatestListings from '../components/LatestListings';
import Benefits from '../components/Benefits';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <Categories />
        <ActionCards />
        <HowItWorks />
        <LatestListings />
        <Benefits />
        <CTASection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
