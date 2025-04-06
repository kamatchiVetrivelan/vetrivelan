"use client";

import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

interface ButtonProps {
  text: string;
  type: "primary" | "secondary"; // Using literal union type instead of just string
}

interface Vehicle {
  capacity: string;
  id: string;
  title: string;
  description: string;
  image: string;
  buttons: ButtonProps[];
}

interface CategoryData {
  title: string;
  value: string;
  vehicles: Vehicle[];
}

interface CarData {
  categories: CategoryData[];
}
const whatsappNumber = "+91 98946 92692";
const baseUrl = "https://api.whatsapp.com/send/";
const encodedMessage = `Hello, I want details regarding rental cars.`;
const whatsappLink = `${baseUrl}?phone=${whatsappNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;

// When importing the JSON, explicitly type it
import carDataJson from "@/components/services/carData.json";
import Link from "next/link";
import { FlexibleSheetDemo } from "../flexible-sheet";
const carData = carDataJson as CarData;

export function TabsDemo() {
  // Create a new "All" category that contains all vehicles from all categories
  const allVehicles: Vehicle[] = carData.categories.flatMap(
    (category) => category.vehicles
  );

  // Create the "All" category object
  const allCategory: CategoryData = {
    title: "All",
    value: "all",
    vehicles: allVehicles,
  };

  // Create new array with "All" as the first category, followed by existing categories
  const categoriesWithAll = [allCategory, ...carData.categories];

  // Transform the updated data into the tabs format
  const tabs = categoriesWithAll.map((category) => ({
    title: category.title,
    value: category.value,
    content: (
      <div className="w-full overflow-hidden relative h-full rounded-2xl p-4 md:p-6 text-white bg-gradient-to-br from-purple-700 to-violet-900 ">
        <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-6 px-3">
          {category.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-6 px-3 no-visible-scrollbar overflow-y-auto max-h-[calc(100%-3rem)] md:max-h-[calc(100%-4rem)]">
          {category.vehicles.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <div className="h-screen md:h-[37rem] 2xl:h-[43rem] relative flex flex-col max-w-5xl mx-auto w-full items-start justify-start pt-4 md:pt-8 ">
      <Tabs tabs={tabs} containerClassName=" z-30" />
      <p className="py-2 text-primary text-sm font-medium">We also undertake school and college trips.</p>
    </div>
  );
}

const VehicleCard = ({ vehicle }: { vehicle: Vehicle }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg text-gray-800 flex flex-col h-full">
      <div className="relative w-full h-40 flex items-center justify-center ">
        <Image
          src={vehicle.image}
          alt={vehicle.title}
          className="object-contain mx-auto flex justify-center items-center"
          width={280}
          height={160}
          style={{
            width: "100%",
            height: "100%",
            maxHeight: "160px",
          }}
        />
      </div>
      <div className="p-3 md:p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-base md:text-lg  text-transparent bg-clip-text bg-gradient-to-br from-purple-700 to-violet-900">
          {vehicle.title}
        </h3>
        <h4 className="text-xs text-gray-500 font-bold">
          {vehicle.capacity}
        </h4>

        <p className="text-xs md:text-sm mt-3 mb-2 md:mb-4 flex-grow">
          {vehicle.description}
        </p>
        <div className="flex flex-wrap justify-between gap-2">
          {vehicle.buttons.map((button, index) => (
            <button
              key={index}
              className={`px-2 md:px-4 py-1 md:py-2 rounded text-xs md:text-sm ${
                button.type === "primary"
                  ? "bg-purple-600 text-white hover:bg-purple-700"
                  : null
              }`}
            >
              <Link href={whatsappLink}>{button.text}</Link>
            </button>
          ))}
          <FlexibleSheetDemo buttonType={"Services"} />
        </div>
      </div>
    </div>
  );
};
