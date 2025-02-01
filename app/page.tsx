"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Timeline, { TimelineDemo } from "@/components/TimelineDemo";
import { CardSpotlightDemo } from "@/components/CardSpotlightDemo";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { SparklesPreview } from "@/components/SparklesPreview";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <AuroraBackgroundDemo />
        <HeroScrollDemo />
        <SparklesPreview />
        <TimelineDemo />
        <SignupFormDemo />
      </div>
    </main>
  );
};

export default Home;
