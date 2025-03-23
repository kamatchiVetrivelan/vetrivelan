
import HeroSection from '@/components/home/HeroHome';
import Image from 'next/image';
import React from 'react'

function HomePage() {
  return (
    <div className="bg-black">
      <div className=" px-8 md:px-12 2xl:px-16 ">
        <HeroSection />
      </div>
      
    </div>
  );
}

export default HomePage
