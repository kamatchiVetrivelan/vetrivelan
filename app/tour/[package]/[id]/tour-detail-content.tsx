// app/tour/[package]/[id]/tour-detail-client.tsx
"use client"

  import Link from "next/link"
 import InteractiveBentoGallery from "@/components/interactive-bento-gallery"
import { TourTimeline } from "@/components/ui/timeline";
import { FlexibleSheetDemo } from "@/components/flexible-sheet";
import { Modal, ModalTrigger } from "@/components/ui/animated-modal";

interface TourDetailClientProps {
  tourData: {
    title: string;
    fullDescription: string;
    detailImages: string[];
    image: string;
    itinerary: { day: string; title: string; description: string }[];
    exclusions: string[];
    termsAndConditions: string[];
  };
  packageName: string;
  tourId: string;
}

export default function TourDetailClient({ tourData }: TourDetailClientProps) {
  

  if (!tourData) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Tour Not Found</h1>
        <p className="mb-8">The tour you are looking for does not exist or has been removed.</p>
        <Link href="/" className="bg-primary text-white py-2 px-6 rounded-md hover:bg-primary/90">
          Return to Home
        </Link>
      </div>
    )
  }

  
 
  return (
    <section className="md:padding container ">
    <div className=" mx-auto px-10 py-8 ">
       {/* Title and Description */}
       <div className="mt-4 flex justify-center flex-col text-justify items-center ">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">{tourData.title}</h1>
      </div>
  <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        images={tourData.detailImages}
        alt={tourData.title || "Tour Images"}
       />

    </div>
    <div className="flex justify-center">
<p className="text-lg text-gray-700   text-justify  lg:max-w-6xl">{tourData.fullDescription}</p>

</div>

        {/* Itinerary */}
   
      <div className="text-justify">
      {tourData.itinerary && <TourTimeline itinerary={tourData.itinerary} />}
        
      </div>
      <div className="py-10 flex items-center justify-center">
      <Modal>
        <div>
          <ModalTrigger className=" bg-primary dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500 font-bold py-1 px-2">
              Get in Touch
            </span>
            <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
              <FlexibleSheetDemo buttonType="Touch" />
            </div>
          </ModalTrigger>
        </div>
      </Modal>
    </div>

      <div className="flex flex-col lg:flex-row justify-between px-10">
      {/* Exclusions Section */}
      <div className="mb-12 lg:w-1/2 lg:mr-8">
        <h2 className="text-2xl font-bold text-blue-950 mb-6 pb-2 border-b border-blue-950">
          Exclusions
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {tourData.exclusions?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Terms and Conditions Section */}
      <div className="mb-12 lg:w-1/2 lg:ml-8">
        <h2 className="text-2xl font-bold text-blue-950 mb-6 pb-2 border-b border-blue-950">
          Terms and Conditions
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          {tourData.termsAndConditions?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>


      
    </div></section>
  )
}