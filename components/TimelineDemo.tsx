import React from "react";
import { Timeline } from "./ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2017 - 2018",
      content: (
        <div>
          <h2>
            Video Editor <span>Hackbox</span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Collaborated with the team to create visually appealing and
            impactful content aligned with the startup goals.
          </p>
        </div>
      ),
    },
    {
      title: "2019- 2023",
      content: (
        <div>
          <h2>
            Co-Founder FattyCraft <span>(E-commerce Platform)</span>
          </h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Implemented marketing strategies that boosted brand visibility and
            customer engagement,Planning to raise funds.
          </p>
        </div>
      ),
    },
    {
      title: "2023- ONGOING",
      content: (
        <div>
          <h2>Founder & CEO Xpand (Social Media Branding Agency)</h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Founded and scaled a social media branding agency, working with over
            12 clients, including 5 international clients.
          </p>
        </div>
      ),
    },
    {
      title: "2023- ONGOING",
      content: (
        <div>
          <h2>Industrial Member Founders Space</h2>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Leveraged the Founders Space ecosystem to build connections, explore
            funding opportunities, and refine business models
          </p>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
