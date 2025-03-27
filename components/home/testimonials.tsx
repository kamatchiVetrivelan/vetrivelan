"use client";

import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div>
      <div className="pt-16 md:pt-20 rounded-md flex flex-col antialiased bg-black dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <h2 className="text-2xl md:text-4xl font-bold text-white pb-8">
          What our customers say
        </h2>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Vetrivelan Cars made our family trip to Ooty absolutely easy! The car was well-maintained, and the journey was smooth.",
    name: "Arun K",
    avatar: "/arun.jpg", // Replace with actual path
  },
  {
    quote:
      "We booked a Sabarimala pilgrimage trip with Vetrivelan Travels. The driver was respectful and knowledgeable about the routes.",
    name: "Lakshmi",
    avatar: "/lakshmi.jpg", // Replace with actual path
  },
  {
    quote:
      "Coimbatore to Palani, Vetrivelan Cars provided us with a clean and comfortable Innova. Reasonable pricing.",
    name: "Darshan Raju",
    avatar: "/darshan.jpg", // Replace with actual path
  },
  {
    quote:
      "We rented a Maharaja 8-seater for a family wedding, and it was an excellent choice. The vehicle was spacious and luxurious.",
    name: "Ravi Kumar",
    avatar: "/ravi.jpg", // Replace with actual path
  },
  {
    quote:
      "Our company booked Vetrivelan Cars for a business trip to Chennai. Very spacious innova crysta!",
    name: "Syed Rizwan",
    avatar: "/rizwan.jpg", // Replace with actual path
  },
];
