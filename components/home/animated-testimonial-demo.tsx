import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Beat the summer heat with trips to Ooty, Kodaikanal, Munnar and other breathtaking hill stations.",
      name: "This summer, Escape to the hills!",
      src: "/teagarden.jpg",
    },
    {
      quote:
        "A wide range of vehicles from cars, vans and buses at the best price.",
      name: "Best Ride, Best Price",
      src: "/Images/trip.jpg",
    },
    {
      quote: "Enjoy this exclusive summer vacation offer!",
      name: "100 KM Free on Every Ride",
      src: "/offer.jpg",
    },
    {
      quote: "Comfortably travel to Sabarimala, Palani, and all major temples.",
      name: "Temple Pilgrimage Made Easy",
      src: "/sabarimala.jpg",
    },

    {
      quote: "We take you wherever you wish to go from Coimbatore.",
      name: "Travel Anywhere in South India",
      src: "/cardesktop.jpg",
    },
  ];
  return (
    <div className=" min-h-screen flex items-center justify-center pt-2">
      <AnimatedTestimonials
        testimonials={testimonials}
        autoplay={true} // Optional, true by default
        interval={4000}
      />
    </div>
  );
}
