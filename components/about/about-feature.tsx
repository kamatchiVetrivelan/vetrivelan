import React from 'react'
import { Card, CardContent } from '../ui/card';

 
const AboutFeature = ( ) => {
  return (
  
       
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8  py-10 pb-20 padding bg-black">
        {/* Vision Section */}
        <Card className="shadow-md">
          <CardContent className="p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                  className="text-primary"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Our Vision</h2>
            </div>
            <p className="text-muted-foreground">
              To be the leading travel agency known for creating transformative travel experiences that inspire,
              educate, and connect people with the world's diverse cultures and landscapes. We envision a world where
              travel is accessible, sustainable, and enriching for all.
            </p>
            <ul className="mt-6 space-y-2">
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <span>Creating unforgettable travel memories</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <span>Promoting sustainable tourism practices</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
                <span>Connecting travelers with authentic experiences</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Mission Section */}
      <Card className="shadow-md">
        <CardContent className="p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                className="text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground">
            At Vetri Velan Travels, our mission is to provide exceptional travel experiences that exceed expectations.
            We're dedicated to turning your travel dreams into reality while ensuring comfort, safety, and value
            through personalized service and attention to detail.
          </p>
          <ul className="mt-6 space-y-2">
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
              <span>Delivering personalized travel solutions</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
              <span>Ensuring customer satisfaction at every step</span>
            </li>
            <li className="flex items-start gap-2">
              <div className="h-2 w-2 rounded-full bg-primary mt-2"></div>
              <span>Providing exceptional value and transparent pricing</span>
            </li>
          </ul>
        </CardContent>
      </Card>
      </div>
 )
}

export default AboutFeature;