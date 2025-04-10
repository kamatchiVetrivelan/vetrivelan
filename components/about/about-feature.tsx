'use client'
import React from 'react'
import { Card, CardContent } from '../ui/card';
import { motion } from 'framer-motion';
 
const AboutFeature = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-10 pb-20 padding bg-black">
      {/* Vision Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="shadow-md bg-gray-900 border border-gray-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-red-900/20 flex items-center justify-center">
                <svg  
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            </div>
            <p className="text-gray-300">
              To be Coimbatore&apos;s leading travel agency known for creating transformative travel experiences that inspire and connect people with diverse cultures and landscapes. We envision making travel accessible and enriching for all Coimbatore residents.
            </p>
            <ul className="mt-6 space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                <span>Creating unforgettable travel memories from Coimbatore</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                <span>Promoting sustainable tourism practices</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                <span>Connecting Coimbatore travelers with authentic experiences</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>

      {/* Mission Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Card className="shadow-md bg-gray-900 border border-gray-800">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-red-900/20 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-red-500"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            </div>
            <p className="text-gray-300">
              As Coimbatore&apos;s premier travel agency, our mission is to provide exceptional travel experiences that exceed expectations. We&apos;re dedicated to turning Coimbatore residents&apos; travel dreams into reality while ensuring comfort, safety, and value.
            </p>
            <ul className="mt-6 space-y-2 text-gray-300">
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                <span>Delivering personalized travel solutions for Coimbatore travelers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                <span>Ensuring customer satisfaction at every step</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-red-500 mt-2"></div>
                <span>Providing exceptional value with transparent pricing</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}

export default AboutFeature;