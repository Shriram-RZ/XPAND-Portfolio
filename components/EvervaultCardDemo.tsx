import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

const cardData = [
  { text: "hover 1" },
  { text: "hover 2" },
  { text: "hover 3" },
  { text: "hover 4" },
];

const textdata = [
  {
    heading: "Social Media Branding",
    description:
      "Build a strong, cohesive brand identity across all platforms.",
  },
  {
    heading: "Video Editing",
    description:
      "High-quality, engaging video content tailored to your audience.",
  },
  {
    heading: "Content Creation",
    description: "Strategic content that boosts engagement and conversions.",
  },
  {
    heading: "Personal Branding",
    description: "Position yourself as an authority in your niche.",
  },
];

export function EvervaultCardDemo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center">
      {cardData.map((data, index) => (
        <div
          key={index}
          className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-full mx-auto p-4 relative h-auto"
        >
          <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
          <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

          <EvervaultCard text={data.text} />

          <h2 className="dark:text-white text-black mt-4 text-lg font-semibold">
            {textdata[index].heading}
          </h2>
          <p className="text-sm mt-2 text-gray-700 dark:text-gray-300">
            {textdata[index].description}
          </p>
        </div>
      ))}
    </div>
  );
}
