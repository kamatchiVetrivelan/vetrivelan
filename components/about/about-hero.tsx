'use client'
 import React from 'react';

const AboutHeroPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 bg-cover bg-center filter   " 
           style={{
             backgroundImage: 'url("/Images/hero-1.jpg")',
             backgroundSize: 'cover',
             zIndex: -1
           }}
      ></div>

      {/* Content Container */}
      <div className="relative z-10 flex items-center h-full px-8 md:px-16 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full p-20">
          {/* Left Side - Quote */}
          <div className="bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg">
            <blockquote className="text-2xl md:text-3xl lg:text-2xl font-serif italic text-gray-800 mb-4">
              &quot;Travel is the only thing you buy that makes you richer.&quot;
            </blockquote>
            <p className="text-right text-lg font-semibold text-gray-600">
              - Anonymous
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default AboutHeroPage;