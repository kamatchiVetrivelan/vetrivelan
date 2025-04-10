'use client'
import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

const AboutTravels = () => {
  return (
    <div className="bg-black p-2 md:px-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Card className="overflow-hidden shadow-lg padding bg-gray-900 border border-gray-800">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Left side - Image */}
              <div className="relative h-80 md:h-auto min-h-[400px] overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1 }}
                  className="h-full w-full"
                >
                  <Image
                    src="/Images/hero-9.jpg?height=800&width=1000"
                    alt="Vetri Velan Travels Coimbatore"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              
              {/* Right side - Text content */}
              <div className="md:p-8 p-2 py-4 md:py-0 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-red-900/20 text-red-500 inline-block px-4 py-1 rounded-full text-sm font-medium mb-4">
                    <h1 className="">Established in 2009 • 15+ Years of Excellence in Coimbatore</h1>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-white">Our Journey in Coimbatore</h2>
                  <p className="mb-6 text-gray-300">
                    Founded in 2009, Vetri Velan Travels has grown from a small local agency to Coimbatore&apos;s most trusted name in the travel industry. With over 15 years of experience, we&apos;ve helped thousands of Coimbatore residents create unforgettable memories across the globe.
                  </p>
                  
                  <p className="mb-6 text-gray-300">
                    Our dedicated team of travel experts in Coimbatore is committed to providing exceptional service and creating personalized travel experiences that cater to your unique preferences. Whether you&apos;re planning a family vacation, a romantic getaway, or a corporate retreat, we&apos;re Coimbatore&apos;s top choice for memorable journeys.
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="flex flex-col sm:flex-row gap-4 mt-2"
                >
                   
                  <Button variant="ghost" className="border border-red-500 text-red-500 hover:bg-red-900/20 hover:text-gray-200 px-6 py-3 rounded-md font-medium transition-all duration-300">
                   <Link href={"/tourpackages"}>
                   View Our Packages
                   </Link> 
                  </Button>
                </motion.div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutTravels;