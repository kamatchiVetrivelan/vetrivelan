import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
const AboutTravels = () => {
  return (
    <div className="bg-black p-2 pt-10">
      <Card className="overflow-hidden shadow-lg padding ">
        <CardContent className="p-0">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left side - Image */}
            <div className="relative h-80 md:h-auto min-h-[400px]">
              <Image
                src="/Images/hero-9.jpg?height=800&width=1000"
                alt="Vetri Velan Travels"
                fill
                className="object-cover"
              />
            </div>

            {/* Right side - Text content */}
            <div className="p-8 flex flex-col justify-center">
             <div>
             <div className="bg-primary/10 text-primary inline-block px-4 py-1 rounded-full text-sm font-medium mb-4">
                <h1 className=""> Established in 2009 • 15+ Years of Excellence</h1>{" "}
              </div>
             </div>

              <h2 className="text-2xl font-bold mb-4">Our Journey</h2>
              <p className="mb-6 text-muted-foreground">
                Founded in 2009, Vetri Velan Travels has grown from a small
                local agency to one of the region's most trusted names in the
                travel industry. With over 15 years of experience, we've helped
                thousands of travelers create unforgettable memories across the
                globe.
              </p>

              <p className="mb-6 text-muted-foreground">
                Our dedicated team of travel experts is committed to providing
                exceptional service and creating personalized travel experiences
                that cater to your unique preferences and requirements. Whether
                you're planning a family vacation, a romantic getaway, or a
                corporate retreat, we have the expertise and resources to make
                it memorable.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
                  Contact Us
                </button>
                <button className="border border-primary text-primary hover:bg-primary/10 px-6 py-3 rounded-md font-medium">
                  View Our Packages
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutTravels;
