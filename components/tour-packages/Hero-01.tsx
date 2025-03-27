"use client";

import { useState } from "react";
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

export default function TourHerosection() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(
    "Tamil Nadu Tour Package"
  );

  const images = [
    {
      title: "Tamil Nadu Tour Package",
      src: "/Images/TamilNadu.jpg",
      alt: "Tamil Nadu tourism",
    },
    {
      title: "Kerala Tour Package",
      src: "/Images/kerala.jpg",
      alt: "Kerala tourism",
    },
    {
      title: "Hill Station Tour Package",
      src: "/Images/Hills.jpg",
      alt: "Hill stations",
    },
    {
      title: "Temple Tour Package",
      src: "/Images/Temple.jpg",
      alt: "Temple tours",
    },
    {
      title: "Combine Tour Package",
      src: "/Images/mussoorie-7243347.jpg",
      alt: "Combined tour packages",
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

  return (
    <>
      <section
        className="bg-green-950 items-center justify-center flex flex-col w-full lg:p-2 mb-[250px] md:h-[400px] object-cover"
        style={{
          backgroundImage: "url('/Images/hero-5.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute flex flex-col items-center justify-center text-center p-4">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Amazing Tour Packages
          </h1>
          <p className="text-xl text-white max-w-2xl">
            Explore India&apos;s most beautiful destinations with our carefully
            curated tour packages designed for unforgettable experiences.
          </p>
        </div>

        <div className="min-h-[300px] mx-auto bg-white rounded-t-full px-2 md:px-40 py-20 mt-[400px] -mb-[100px] relative">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 lg:gap-4 -mt-12 ">
      {images.map((image, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-center borde rounded-lg p-4 h-full"
        >
          <div className="mb-4 w-full h-48 flex items-center justify-center">
            <Image
              src={image.src}
              alt={image.alt}
              width={400}
              height={400}
              className="rounded-xl w-48 h-48 object-cover border-b-4 rounded-tl-2xl rounded-tr-sm  border-primary"
            />
          </div>
          <div className="h-16 flex items-center justify-center">
            <h3 className="text-lg font-bold text-blue-950 px-2">
              {image.title}
            </h3>
          </div>
          <Button
            onClick={() => handleViewDetails(image.title)}
            className={`mt-2 py-2 px-4 rounded-md text-sm transition duration-300 flex justify-center items-center gap-2 w-full ${
              selectedPackage === image.title
                ? "bg-primary text-white  border-b-4 rounded-b-xl  border-slate-500"
                : "bg-slate-500  border-b-4 rounded-b-xl  border-primary text-white"
            }`}
          >
            View Details
            {selectedPackage === image.title ? (
              <ChevronUp size={16} />
            ) : (
              <ChevronDown size={16} />
            )}
          </Button>
        </div>
      ))}
    </div>

        </div>
      </section>

      {/* Feature Section */}
      {selectedPackage &&
        tourPackagesData[selectedPackage as keyof typeof tourPackagesData] && (
          <section id="feature-section" className="py-16 bg-black rounded-t-3xl  padding  ">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-blue-50 mb-4">
                  {
                    tourPackagesData[
                      selectedPackage as keyof typeof tourPackagesData
                    ]?.title
                  }
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  {
                    tourPackagesData[
                      selectedPackage as keyof typeof tourPackagesData
                    ]?.description
                  }
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {tourPackagesData[
                  selectedPackage as keyof typeof tourPackagesData
                ].features.map((feature, index) => (
                  <Card key={index} className="relative max-w-md shadow-none">
                    <CardHeader>
                      <Lens defaultPosition={{ x: 260, y: 150 }}>
                        <Image
                          src={feature.image || "/placeholder.svg"}
                          alt={feature.title}
                          width={500}
                          height={200}
                          className=" h-80 w-full object-cover  "
                        />
                      </Lens>{" "}
                    </CardHeader>

                    <CardContent>
                      <CardTitle className="text-2xl font-bold text-blue-950 mb-2">
                        {feature.title}
                      </CardTitle>
                      <CardDescription>{feature.description} </CardDescription>
                    </CardContent>

                    <CardFooter className="flex justify-between mt-4 bottom-0">
                      <Button>
                        <Link
                          href={`/tour/${selectedPackage
                            .replace(/\s+/g, "-")
                            .toLowerCase()}/${feature.id}`}
                          className=" "
                        >
                          View More
                        </Link>{" "}
                      </Button>
                      <Button variant="secondary"> Book Now</Button>{" "}
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}
    </>
  );
}
