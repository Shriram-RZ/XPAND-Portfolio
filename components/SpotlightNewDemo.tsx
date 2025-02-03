"use client";
import React from "react";
import { Spotlight } from "@/components/ui/spotlight-new";
import { FloatingNavDemo } from "./FloatingNavDemo";
import { SparklesPreview } from "./SparklesPreview";

export function SpotlightNewDemo() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <SparklesPreview />
      </div>
    </div>
  );
}
