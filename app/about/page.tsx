import AboutFeature from '@/components/about/about-feature';
import AboutHeroPage from '@/components/about/about-hero';
import AboutTravels from '@/components/about/about-travels';
import TravelMetrics from '@/components/about/animated -numbers';
import React from 'react'
 
function AboutPage() {
  return <div className='pt-20'>
     <AboutTravels/>
    <TravelMetrics/>
    <AboutFeature/>
  </div>;
}

export default AboutPage
