"use client";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

import Timeline, { TimelineDemo } from "@/components/TimelineDemo";
import { CardSpotlightDemo } from "@/components/CardSpotlightDemo";
import { SignupFormDemo } from "@/components/SignupFormDemo";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import { SparklesPreview } from "@/components/SparklesPreview";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import { SpotlightNewDemo } from "@/components/SpotlightNewDemo";
import { Spotlight } from "@/components/ui/Spotlight";
import { EvervaultCardDemo } from "@/components/EvervaultCardDemo";
import Clients from "@/components/Clients";

import { GlobeDemo } from "@/components/GlobeDemo";
import { TextRevealCardPreview } from "@/components/TextRevealCardPreview";
import { BackgroundBeamsWithCollisionDemo } from "@/components/BackgroundBeamsWithCollisionDemo";
import { TextHoverEffectDemo } from "@/components/TextHoverEffectDemo";
import { FeaturesSectionDemo } from "@/components/FeaturesSectionDemo";
import HeroSection from "@/components/HeroSection";
import { HeroHighlightDemo } from "@/components/HeroHighlightDemo";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import { VortexDemo } from "@/components/VortexDemo";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <HeroHighlightDemo />
        <FloatingNavDemo />
        <HeroScrollDemo />
        <Clients />
        <RecentProjects />
        <EvervaultCardDemo />

        <TimelineDemo />
        <TextRevealCardPreview />

        <GlobeDemo />

        <SignupFormDemo />
        <TextHoverEffectDemo />
        <BackgroundBeamsWithCollisionDemo />
      </div>
    </main>
  );
};

export default Home;
