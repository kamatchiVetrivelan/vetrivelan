import { cn } from "@/lib/utils";
import {
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconRouteAltLeft,
} from "@tabler/icons-react";

export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Free 100 kms",
      description:
        "This summer vacation with our exclusive offer – enjoy the first 100 km free on every trip!",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Explore Anywhere",
      description:
        "Whether it's a vacation, business trip, airport transfer, or a simple ride, we’ve got you covered.  ",
      icon: <IconRouteAltLeft />,
    },

    {
      title: "Easiest Booking",
      description:
        "You can book us through whatsapp or just a phone call, it's that easy!",
      icon: <IconEaseInOut />,
    },

    {
      title: "Safest drivers",
      description: "Drivers with 8+ years of experience, to ensure a safet and comfortable ride.",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="pt-16 md:pt-24">
      <h2 className="text-2xl md:text-4xl font-bold text-left md:text-center text-white pb-8">Why we are the best</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 max-w-7xl mx-auto ">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col  border-b lg:border-b-0 lg:border-r  py-5 md:py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border- dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-200 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-white transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-200 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-primary dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
