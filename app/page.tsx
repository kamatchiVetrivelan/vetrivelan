
import { AnimatedTestimonialsDemo } from '@/components/home/animated-testimonial-demo';
import { FeaturesSectionDemo } from '@/components/home/feature-demo-home';
import { FleetTeaser } from '@/components/home/FleetTeaser';

// import HeroSection from '@/components/home/HeroHome';
import { InfiniteMovingCardsDemo } from '@/components/home/testimonials';
import { TourPackagesTeaser } from '@/components/home/tour-teaser';
// import Image from 'next/image';

// import HeroSection from '@/components/home/HeroHome';
  import React from 'react'
 
 

function HomePage() {
  return (
    <div className="bg-black padding py-10">
      <div className="">
        {/* <HeroSection /> */}
        <AnimatedTestimonialsDemo />
        <FeaturesSectionDemo />
        <TourPackagesTeaser />
        <FleetTeaser />
        <InfiniteMovingCardsDemo />
      </div>
    </div>
  );
}

export default HomePage
