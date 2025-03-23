"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const CarouselHome = ({ images = [] }) => {
  const [activeItem, setActiveItem] = useState(0);

  // Default images if none provided
  const carouselImages =
    images.length > 0
      ? images
      : [
          "/carmobile.png",
          "/carmobile.png",
          "/carmobile.png",
          "/carmobile.png",
          "/carmobile.png",
        ];

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveItem((current) =>
        current === carouselImages.length - 1 ? 0 : current + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const goToSlide = (slideIndex: number) => {
    setActiveItem(slideIndex);
  };

  return (
    <div className="w-full h-full relative overflow-hidden rounded-3xl">
      {/* Carousel items */}
      <div className="relative w-full h-full">
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${
              activeItem === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Tour destination ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover md:object-contain lg:object-cover"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Indicators - visible on both mobile and desktop */}
      <div className="absolute z-30 flex -translate-x-1/2 bottom-4 left-1/2 space-x-2">
        {carouselImages.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
              activeItem === index ? "bg-white" : "bg-white/50"
            }`}
            aria-current={activeItem === index}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CarouselHome;
