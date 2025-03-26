// app/tour/[package]/[id]/tour-detail-client.tsx
"use client"

import { useState } from "react"
 import Link from "next/link"
 import InteractiveBentoGallery from "@/components/interactive-bento-gallery"
import { TourTimeline } from "@/components/ui/timeline";

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
   const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    adults: 1,
    children: 0,
    specialRequests: "",
  })

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

  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to your backend
    alert("Booking request submitted! We will contact you shortly.")
    console.log(formData)
  }
 
  return (
    <section className="md:padding container ">
    <div className=" mx-auto px-10 py-8 ">
       {/* Title and Description */}
       <div className="mt-4 flex justify-center flex-col text-justify items-center ">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">{tourData.title}</h1>
        <p className="text-lg text-gray-700 flex justify-center  lg:max-w-6xl">{tourData.fullDescription}</p>
      </div>
  <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        images={tourData.detailImages}
        alt={tourData.title || "Tour Images"}
       />
    </div>
        {/* Itinerary */}
   
      <div>
      {tourData.itinerary && <TourTimeline itinerary={tourData.itinerary} />}

      </div>

      {/* Exclusions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-950 mb-6 pb-2 border-b">Exclusions</h2>
        <ul className="list-disc pl-6 space-y-2">
          {tourData.exclusions?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Terms and Conditions */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-blue-950 mb-6 pb-2 border-b">Terms and Conditions</h2>
        <ul className="list-disc pl-6 space-y-2">
          {tourData.termsAndConditions?.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Booking Form */}
      <div className="bg-gray-50 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-950 mb-6">Book This Tour</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="travelDate" className="block text-sm font-medium text-gray-700 mb-1">
              Preferred Travel Date
            </label>
            <input
              type="date"
              id="travelDate"
              name="travelDate"
              value={formData.travelDate}
              onChange={handleInputChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Adults
            </label>
            <select
              id="adults"
              name="adults"
              value={formData.adults}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="children" className="block text-sm font-medium text-gray-700 mb-1">
              Number of Children
            </label>
            <select
              id="children"
              name="children"
              value={formData.children}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </div>
          <div className="md:col-span-2">
            <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
              Special Requests
            </label>
            <textarea
              id="specialRequests"
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleInputChange}
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            ></textarea>
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-md text-lg font-medium transition duration-300"
            >
              Submit Booking Request
            </button>
          </div>
        </form>
      </div>
    </div></section>
  )
}