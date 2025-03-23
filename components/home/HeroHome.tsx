"use client";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";





export default function HeroSection() {
  return (
    <>
      <section className="relative ">
        <div className="mx-auto md:hidden pt-2 w-full  flex flex-col lg:flex-row gap-10 lg:gap-12">
          <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
            <Image
              src="/carmobile.png"
              alt="Hero image"
              width={500}
              height={100}
              className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cove lg:max-h-none max-h-96"
            />
          </div>
          <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
            <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl  blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
            <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl  blur-xl opacity-80" />
          </div>
          <span className="w-4/12 lg:w-2/12 aspect-square absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
          <div
            className="relative flex flex-col items-start text-left lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
          >
            <h1
              className="text-2xl/tight sm:text-4xl/tight md:text-5xl/tight xl:text-6xl/tight
   font-bold text-white dark:text-white"
            >
              Any dream destination,
              <br />
              we&apos;ve got you!
            </h1>
            <p className="mt-8 text-gray-300 dark:text-gray-300 text-sm">
              Discover breathtaking destinations from scenic Ooty, Kodaikanal
              and Mysore to sacred Sabarimala with our premium tour services.
              Our fleet ranges from comfortable cars to spacious buses and
              everything in your budget.
              <br />
              Your dream vacation is just a click away!
            </p>
            <div className="mt-10  w-full flex items-start justify-start gap-x-4 max-w-md mx-auto lg:mx-0">
              <Button asChild>
                <Link href="/tourpackages">Dream Destinations</Link>
              </Button>
              <Button asChild>
                <Link href="/services">Our Vehicles</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="mx-auto pt-16  w-full  flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
              <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl  blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
              <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl  blur-xl opacity-80" />
            </div>
            <span className="w-4/12 lg:w-2/12 aspect-square absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
            <div
              className="relative flex flex-col items-start text-left lg:text-left lg:py-7 xl:py-8 
      lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2"
            >
              <h1
                className="text-3xl/tight sm:text-4xl/tight md:text-5xl/tight lg:text-5xl/tight xl:text-5xl/tightest
   font-bold text-white dark:text-white"
              >
                Any dream destination,
                <br />
                we&apos;ve got you!
              </h1>
              <p className="mt-8 text-gray-300 dark:text-gray-300">
                Discover breathtaking destinations from scenic Ooty, Kodaikanal
                and Mysore to sacred Sabarimala with our premium tour services.
                Our fleet ranges from comfortable cars to spacious buses and
                everything in your budget.
                <br />
                Your dream vacation is just a click away!
              </p>
              <div className="mt-10  w-full flex items-start justify-start gap-x-4 max-w-md mx-auto lg:mx-0">
                <Button asChild>
                  <Link href="/tourpackages">Dream Destinations</Link>
                </Button>
                <Button asChild>
                  <Link href="/services">Our Vehicles</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
              <Image
                src="/carmobile.png"
                alt="Hero image"
                width={400}
                height={100}
                className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cove lg:max-h-none max-h-96"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
