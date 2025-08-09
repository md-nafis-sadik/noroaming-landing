"use client";
import FAQ from "@/components/home/FAQ";
import Testimonial from "@/components/testimonial/Testimonial";
import HeroHome from "@/components/home/HeroHome";
import OurGoals from "@/components/home/OurGoals";
import Destinations from "@/components/home/Destinations";
import WhyChoose from "@/components/home/WhyChoose";
import CollaborateMarquee from "@/components/home/CollaborateMarquee";
import LetsTalkHome from "@/components/home/LetsTalkHome";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Prevents hydration mismatch
  }

  return (
    <main
      className="relative mt-[-127px] overflow-hidden"
      suppressHydrationWarning
    >
      <HeroHome />
      <Destinations />
      <WhyChoose />
      <OurGoals />
      <Testimonial />
      <FAQ />
      <CollaborateMarquee />
      <LetsTalkHome />
    </main>
  );
};

export default HomePage;
