'use client'
import React, { useEffect, useState } from 'react';

const SleekCarAnimation = () => {
  const [position, setPosition] = useState(-20);
  
  useEffect(() => {
    const animateCar = () => {
      setPosition(prevPosition => {
        // Reset position when car goes off-screen
        if (prevPosition > 1000) return -20;
        // Medium speed
        return prevPosition + 10;
      });
    };
    
    const animationId = setInterval(animateCar, 30);
    return () => clearInterval(animationId);
  }, []);

  return (
    <div className="flex items-center min-w-full h-48 overflow-hidden relative bg-gradient-to-b  ">
      {/* Car container with animation */}
      <div 
        className="absolute transition-transform duration-100"
        style={{ transform: `translateX(${position}%)` }}
      >
        {/* Car */}
        <div className="relative">
          {/* Car body - more sleek and sporty design */}
          <div className="bg-gradient-to-r from-red-600 to-red-500 w-40 h-8 rounded-t-lg rounded-r-3xl rounded-bl-sm rounded-br-sm relative shadow-lg">
            {/* Car top/cabin - sportier, lower profile */}
            <div className="absolute -top-4 left-10 w-20 h-4 bg-gradient-to-r from-red-600 to-red-500 rounded-t-lg rounded-r-2xl transform -skew-x-12"></div>
            
            {/* Windows - tinted */}
            <div className="absolute -top-3 left-12 w-16 h-3 bg-gray-800 bg-opacity-70 rounded-t-sm rounded-r-lg transform -skew-x-12"></div>
            
            {/* Headlights - modern LED style */}
            <div className="absolute right-0 top-2 w-3 h-1 bg-yellow-100 rounded-full shadow-md blur-[0.5px]"></div>
            <div className="absolute right-1 top-4 w-2 h-1 bg-yellow-100 rounded-full shadow-md blur-[0.5px]"></div>
            
            {/* Taillights - LED strip style */}
            <div className="absolute left-1 top-2 w-3 h-1 bg-red-400 rounded-full"></div>
            
            {/* Front wheel - larger, sportier */}
            <div className="wheel-animation absolute -bottom-4 right-6 w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600 flex items-center justify-center shadow-md">
              <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            
            {/* Back wheel - larger, sportier */}
            <div className="wheel-animation absolute -bottom-4 left-6 w-8 h-8 bg-gray-900 rounded-full border-2 border-gray-600 flex items-center justify-center shadow-md">
              <div className="w-5 h-5 bg-gray-800 rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              </div>
            </div>
            
            {/* Spoiler */}
            <div className="absolute -top-1 right-8 w-3 h-2 bg-red-800 rounded-sm"></div>
            
            {/* Exhaust */}
            <div className="absolute left-0 bottom-1 w-1 h-1 bg-gray-600 rounded-full"></div>
            
            {/* Door line */}
            <div className="absolute top-1 left-14 w-px h-6 bg-red-700"></div>
            
            {/* Hood line */}
            <div className="absolute top-1 left-24 w-px h-2 bg-red-700"></div>
            
            {/* Ground reflection - subtle shadow */}
            <div className="absolute -bottom-6 left-4 w-full h-2 bg-black bg-opacity-10 rounded-full blur-sm"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes wheelRotation {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .wheel-animation {
          animation: wheelRotation 100s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SleekCarAnimation;