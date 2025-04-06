"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

// Import your tour packages data
import { tourPackagesData } from "@/components/tour-packages/tour-data";

// WhatsApp contact details
const whatsappNumber = "+91 98946 92692";
const baseUrl = "https://api.whatsapp.com/send/";
const encodedMessage = `Hello, I want details regarding tour packages.`;
const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

export function TourPackagesTeaser() {
  // Get the first destination from each tour package
  const teaserPackages = (Object.keys(tourPackagesData) as Array<keyof typeof tourPackagesData>).map((packageKey) => {
    const packageData = tourPackagesData[packageKey];
    return {
      id: packageKey.replace(/\s+/g, "-").toLowerCase(),
      title: packageData.title,
      feature: packageData.features[0], // Get the first feature as a preview
    };
  });

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
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
    <div className="w-full pt-16 md:pt-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Tour Packages
          </h2>
          <Link
            href="/tour-packages"
            className="flex items-center text-primary font-medium"
          >
            View All Packages
            <ChevronRight className="ml-1 h-5 w-5" />
          </Link>
        </div>

        <div className="relative">
          {showScrollIndicator && (
            <div className="absolute right-0 top-1/2 -translate-y-1/2 bg-gradient-to-l from-gray-900 to-transparent w-16 h-full z-10 flex items-center justify-end pr-2 no-visible-scrollbar">
              <div className="bg-primary text-white rounded-full p-2 shadow-md">
                <ChevronRight size={20} />
              </div>
            </div>
          )}

          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto pb-6 gap-5 scrollbar-hide no-visible-scrollbar"
          >
            {teaserPackages.map((packageItem) => (
              <div
                key={packageItem.id}
                className="flex-shrink-0 w-72 bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="p-3 bg-primary text-white text-sm font-medium">
                  {packageItem.title}
                </div>
                <div className="h-40 flex items-center justify-center">
                  <Image
                    src={packageItem.feature.image}
                    alt={packageItem.feature.title}
                    width={200}
                    height={120}
                    className="object-cover"
                    style={{
                      maxHeight: "140px",
                      width: "auto",
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2">
                    {packageItem.feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {packageItem.feature.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <button className="bg-primary text-white px-3 py-1.5 rounded-md text-sm hover:bg-purple-700 transition-colors">
                      <Link href={whatsappLink}>More Details</Link>
                    </button>
                    <Link
                      href="/tour-packages"
                      className="text-primary text-sm font-medium flex items-center"
                    >
                      More like this
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/tour-packages"
              className="flex-shrink-0 w-72 bg-gradient-to-br from-primary to-rose-950 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow flex items-center justify-center text-white p-8"
            >
              <div className="text-center">
                <h3 className="font-bold text-xl mb-2">Explore All Packages</h3>
                <p className="text-rose-100 mb-4">
                  Discover our curated tour packages for unforgettable
                  experiences
                </p>
                <div className="inline-flex items-center justify-center bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-50 transition-colors">
                  View All Packages
                  <ChevronRight className="ml-1 h-5 w-5" />
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="text-primary text-xs md:text-sm font-semibold pb-4">
          Note: All tour packages include transportation with professional
          drivers and experienced guides.
        </div>
      </div>
    </div>
  );
}
