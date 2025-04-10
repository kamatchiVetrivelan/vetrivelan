"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { tourPackagesData } from "@/components/tour-packages/tour-data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Lens } from "@/components/magicui/lens";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FlexibleSheetDemo } from "../flexible-sheet";
import { useSearchParams } from "next/navigation";

export default function TourHerosection() {
  const searchParams = useSearchParams();
  
  // Get the package from URL params or localStorage or default to Tamil Nadu
  const getInitialPackage = () => {
    // First check URL params
    const paramPackage = searchParams.get("package");
    if (paramPackage) {
      return decodeURIComponent(paramPackage);
    }
    
    // Then check localStorage
    if (typeof window !== "undefined") {
      const savedPackage = localStorage.getItem("selectedTourPackage");
      if (savedPackage) {
        return savedPackage;
      }
    }
    
    // Default to Tamil Nadu
    return "Tamil Nadu Tour Package";
  };
  
  const [selectedPackage, setSelectedPackage] = useState<string>(getInitialPackage());

  // Update localStorage when package changes
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("selectedTourPackage", selectedPackage);
    }
  }, [selectedPackage]);

  const images = [
    {
      title: "Hill Station Tour Package",
      src: "/tp-hero/Hill.jpeg",
      alt: "Hill stations",
    },
    {
      title: "Temple Tour Package",
      src: "/tp-hero/comboTemple.jpeg",
      alt: "Temple tours",
    },
    {
      title: "Kerala Tour Package",
      src: "/tp-hero/kerala.jpg",
      alt: "Kerala tourism",
    },
    {
      title: "Tamil Nadu Tour Package",
      src: "/tp-places/thiru2.jpg",
      alt: "Tamil Nadu tourism",
    },
    {
      title: "Karnataka Tour Package",
      src: "/tp-hero/karnataka.jpeg",
      alt: "Karnataka Tour Package",
    },
    {
      title: "Combo Tour Package",
      src: "/mysorepalacev.jpg",
      alt: "Combo tour packages",
    },
  ];

  const handleViewDetails = (packageTitle: string) => {
    setSelectedPackage(packageTitle);
    
    // Scroll to the feature section
    setTimeout(() => {
      const featureSection = document.getElementById("feature-section");
      if (featureSection) {
        featureSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Verify the selected package exists in the data
  useEffect(() => {
    if (selectedPackage && !tourPackagesData[selectedPackage as keyof typeof tourPackagesData]) {
      console.error(`Package data not found for: ${selectedPackage}`);
      
      // Find the first available package in the data
      const availablePackage = Object.keys(tourPackagesData)[0];
      if (availablePackage) {
        setSelectedPackage(availablePackage);
      }
    }
  }, [selectedPackage]);

  // Check if the selected package exists in the data
  const packageData = tourPackagesData[selectedPackage as keyof typeof tourPackagesData];

  return (
    <>
      <div className="min-h-[300px] mx-auto bg-black px-4 lg:px-12 pt-6 md:pt-10 relative">
        <div className="grid grid-cols-2 xs:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2 2xl:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center rounded-lg p-2 2xl:p-4 h-full"
            >
              <div className="mb-2 sm:mb-4 w-full md:h-80 h-64 flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={400}
                  className="rounded-xl h-full w-full object-cover border-b-4 rounded-tl-2xl rounded-tr-sm border-white"
                />
              </div>
              <div className="h-12 sm:h-16 flex items-center justify-center">
                <h3 className="text-sm sm:text-lg font-bold text-blue-50 px-2">
                  {image.title}
                </h3>
              </div>
              <Button
                onClick={() => handleViewDetails(image.title)}
                className={`mt-2 py-1 sm:py-2 px-2 sm:px-4 rounded-md text-xs sm:text-sm transition duration-300 flex justify-center items-center gap-1 sm:gap-2 w-full ${
                  selectedPackage === image.title
                    ? "bg-primary text-white border-b-4 rounded-b-xl border-primary"
                    : "bg-white text-primary  border-b-4 rounded-b-xl border-primary hover:text-white"
                }`}
              >
                View Details
                {selectedPackage === image.title ? (
                  <ChevronUp size={14} />
                ) : (
                  <ChevronDown size={14} />
                )}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Section */}
      {packageData ? (
        <section id="feature-section" className="py-16 bg-black rounded-t-">
          <div className="container mx-auto px-4 padding flex flex-col justify-center items-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-blue-50 mb-4">
                {packageData.title}
              </h2>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {"description" in packageData ? String(packageData.description) : " "}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packageData.features.map((feature, index) => (
                <Card key={index} className="relative max-w-md shadow-none">
                  <CardHeader>
                    <Lens defaultPosition={{ x: 260, y: 150 }}>
                      <Image
                        src={feature.image || "/placeholder.svg"}
                        alt={feature.title}
                        width={500}
                        height={200}
                        className="h-80 w-full object-cover"
                      />
                    </Lens>
                  </CardHeader>

                  <CardContent>
                    <CardTitle className="text-2xl font-bold text-blue-950 mb-2">
                      {feature.title}
                    </CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardContent>

                  <CardFooter className="flex justify-between mt-4 bottom-0">
                    <Button>
                      <Link
                        href={`/tour/${selectedPackage
                          .replace(/\s+/g, "-")
                          .toLowerCase()}/${feature.id}?fromPackage=${encodeURIComponent(selectedPackage)}`}
                        className=""
                      >
                        View More
                      </Link>
                    </Button>
                    <FlexibleSheetDemo buttonType={"Tour"} />
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <div className="py-16 bg-black text-center text-white">
          <p>Package data not found. Please select another package.</p>
        </div>
      )}
    </>
  );
}