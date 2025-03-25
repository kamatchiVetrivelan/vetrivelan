"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
  text: string;
  type: "primary" | "secondary";
}

interface Vehicle {
  id: string;
  title: string;
  description: string;
  image: string;
  buttons: ButtonProps[];
}

interface CategoryData {
  title: string;
  value: string;
  vehicles: Vehicle[];
}

interface CarData {
  categories: CategoryData[];
}

// When importing the JSON, explicitly type it
import carDataJson from "@/app/services/carData.json";
const carData = carDataJson as CarData;

export function FleetTeaser() {
  // Get the first vehicle from each category
  const teaserVehicles = carData.categories.map((category) => ({
    ...category.vehicles[0],
    categoryTitle: category.title,
  }));

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  // Check if scrolling is possible
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const hasOverflow = container.scrollWidth > container.clientWidth;
      setShowScrollIndicator(hasOverflow);
    }
  }, []);

  return (
    <div className="w-full pt-16 md:pt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Our Fleet
          </h2>
          <Link
            href="/services"
            className="flex items-center text-primary  font-medium"
          >
            View All Fleet
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>

        <div className="relative">
          {showScrollIndicator && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-white to-transparent w-16 h-full z-10 flex items-center justify-end pr-2  no-visible-scrollbar">
              <div className="bg-primary text-white rounded-full p-2 shadow-md">
                <ChevronRight size={20} />
              </div>
            </div>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 gap-5 scrollbar-hide no-visible-scrollbar"
          >
            {teaserVehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-primary text-white text-sm font-medium">
                  {vehicle.categoryTitle}
                </div>
                <div className="h-40  flex items-center justify-center">
                  <Image
                    src={vehicle.image}
                    alt={vehicle.title}
                    width={200}
                    height={120}
                    className="object-contain"
                    style={{
                      maxHeight: "140px",
                      width: "auto",
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">{vehicle.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {vehicle.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="bg-primary text-white px-3 py-1.5 rounded-md text-sm hover:bg-purple-700 transition-colors">
                      View Details
                    </button>
                    <Link
                      href="/services"
                      className="text-primary  text-sm font-medium flex items-center"
                    >
                      More like this
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/services"
              className="flex-shrink-0 w-72 bg-gradient-to-br from-primary to-rose-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-white p-8"
            >
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">Explore Full Fleet</h3>
                <p className="text-rose-100 mb-4">
                  Discover all our vehicles and find the perfect match for your
                  needs
                </p>
                <div className="inline-flex items-center justify-center bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-purple-50 transition-colors">
                  View All Vehicles
                  <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-primary text-xs md:text-sm font-semibold">
          Note: Our professional driver will accompany you — self-drive cars are
          not available.
        </div>
      </div>
    </div>
  );
}
