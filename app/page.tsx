
import { FeaturesSectionDemo } from '@/components/home/feature-demo-home';
import { FleetTeaser } from '@/components/home/FleetTeaser';
import HeroSection from '@/components/home/HeroHome';
// import Image from 'next/image';
import React from 'react'

function HomePage() {
  return (
    <div className="bg-black padding">
      <div className="">
        <HeroSection />
        <FeaturesSectionDemo/>
        <FleetTeaser/>
      </div>
    </div>
  );
}

export default HomePage
