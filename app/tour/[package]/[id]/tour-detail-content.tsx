"use client";

import Link from "next/link";
import InteractiveBentoGallery from "@/components/interactive-bento-gallery";
import { TourTimeline } from "@/components/ui/timeline";
import { FlexibleSheetDemo } from "@/components/flexible-sheet";
import { Modal } from "@/components/ui/animated-modal";
 
interface TourDetailClientProps {
  tourData: {
    title: string;
    fullDescription: string ;
    detailImages: string[];
    image: string;
    itinerary: { day: string; title: string; description: string }[];
   };
  packageName: string;
  tourId: string;
}

export default function TourDetailClient({
  tourData,
  packageName,
}: TourDetailClientProps) {
  const shouldShowImages = packageName !== "Temple Tour Package";
  const imagesToDisplay = shouldShowImages ? tourData.detailImages : [];
 
  if (!tourData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Tour Not Found</h1>
        <p className="mb-8 text-white">
          The tour you are looking for does not exist or has been removed.
        </p>
        <Link
          href="/"
          className="bg-red-600 text-white py-2 px-6 rounded-md hover:bg-red-700 transition duration-300"
        >
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="md:padding container pt-20 bg-black min-h-screen">
      
      <div className="mx-auto px-4 md:px-10 py-8">
      
         {/* Title and Description */}
        <div className="mt-4 flex justify-center flex-col text-center items-center">
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text mb-6">
            {tourData.title}
          </h1>
        </div>

        {/* Only render the gallery if we have images to display */}
        {imagesToDisplay.length > 0 && (
          <div className="min-h-screen overflow-y-auto mb-12 bg-white rounded-2xl w-full  md:max-w-5xl 2xl:max-w-6xl mx-auto">
            <InteractiveBentoGallery
              images={imagesToDisplay}
              alt={tourData.title || "Tour Images"}
            />
          </div>
        )}

        <div className="flex justify-center mb-16">
          <p className="text-lg text-gray-300 text-justify lg:max-w-6xl">
            {tourData.fullDescription}
          </p>
        </div>

        {/* Itinerary */}
        <div className="text-justify bg-black mb-">
          {tourData.itinerary && (
            <TourTimeline itinerary={tourData.itinerary} />
          )}
        </div>

        <div className="py- flex items-center justify-center mb-16">
          <Modal>
            <div>
              <FlexibleSheetDemo buttonType="Hamburger" />
            </div>
          </Modal>
        </div>
        <div className="flex flex-col lg:flex-row justify-between gap-8 px-4 md:px-10 mb-16">
          {/* Exclusions Section */}
          <div className="mb-12 lg:w-1/2 backdrop-blur-sm bg-gray-100 rounded-xl p-6 border border-red-900/30">
  <h2 className="text-2xl font-bold text-red-500 mb-6 pb-2 border-b border-red-500/50">
    Exclusions
  </h2>
  <ul className="space-y-4">
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Toll gate charges and parking fees</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Other state permit charges</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Other state entry taxes</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Hotel stay (unless mentioned in package)</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Driver food and accommodation</span>
    </li>
  </ul>
</div>

{/* Terms and Conditions Section */}
<div className="mb-12 lg:w-1/2 backdrop-blur-sm bg-gray-100 rounded-xl p-6 border border-red-900/30">
  <h2 className="text-2xl font-bold text-red-500 mb-6 pb-2 border-b border-red-500/50">
    Terms and Conditions
  </h2>
  <ul className="space-y-4">
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Booking confirmation requires 10% advance payment</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Cancellation up to  15–30 days before departure: 100% refund</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Cancellation between 15 days: 90% refund</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Cancellation less than 2 days: No refund</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>The itinerary is subject to change due to unforeseen circumstances</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>All participants must carry valid ID proof</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>The company is not liable for any loss, injury, or damage to personal belongings</span>
    </li>
    <li className="text-gray-700 flex items-start">
      <span className="text-red-500 mr-2">•</span>
      <span>Participants are responsible for meeting basic health and travel requirements</span>
    </li>
  </ul>
</div>

        </div>
      </div>
    </section>
  );
}
