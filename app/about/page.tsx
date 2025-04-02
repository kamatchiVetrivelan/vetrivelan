import React from 'react';
import AboutPageMeta from '@/components/about/about-page-meta';
import AboutTravels from '@/components/about/about-travels';
import AboutFeature from '@/components/about/about-feature';
import TravelMetrics from '@/components/about/animated -numbers';
import WhyChooseUs from '@/components/about/why-choose-us';

const About = () => {
  return (
    <>
      <AboutPageMeta />
      <div className="bg-black min-h-screen">
        <div className="container mx-auto pt-40 md:pt-24 pb-">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-white mb-8">
            About Vetri Velan Travels <span className="text-red-500">Coimbatore</span>
          </h1>
          <p className="text-xl text-gray-300 text-center max-w-4xl mx-auto mb-8">
            Discover the story behind Coimbatore's most trusted travel agency and our commitment to creating unforgettable journeys for travelers across the region.
          </p>
        </div>
        
        <AboutTravels />
        <TravelMetrics />
        <AboutFeature />
        <WhyChooseUs />
      </div>
    </>
  );
};

export default About;