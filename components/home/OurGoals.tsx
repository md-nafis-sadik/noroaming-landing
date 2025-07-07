'use client'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ConnectionIcon, ComputerIcon, images } from "@/services";
import TextFadeIn from "../animations/TextFadeIn";

// Define TypeScript types
type GoalItem = {
  title: string;
  description: string;
  customclass: string;
  titleclass: string;
  descriptionclass: string;
  icon: React.ReactNode;
  bg: string;
  borderColor: string;
  bgImage?: string; // Add this line
};

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function OurGoals() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const goals: GoalItem[] = [
    {
      title: "Choose Your Plan",
      description:
        "Select a country or global plan that fits your needs.",
      icon: <ComputerIcon/>,
      titleclass: "text-main-600",
      descriptionclass: "text-main-600",
      customclass: 'bg-paste-600',
      bg: "bg-main-600 text-white",
      borderColor: "border-sky-200",
    },
    {
      title: "Install an eSIM",
      description:
        "Scan a QR code or use our app for instant activation.",
      icon: <ConnectionIcon />,
      titleclass: "text-white",
      descriptionclass: "text-paste-600",
      customclass: 'bg-main-600',
      bg: "bg-white text-main-600",
      borderColor: "border-yellow-200",
      bgImage: "/images/card-background.png", // Add this line with your image path
    },
    {
      title: "Stay Connected",
      description:
        "Scan a QR code or use our app for instant activation.",
      icon: <ConnectionIcon />,
      titleclass: "text-main-600",
      descriptionclass: "text-main-600",
      customclass: 'bg-paste-600',
      bg: "bg-main-600 text-white",
      borderColor: "border-yellow-200",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
  
    // Get cards with proper typing
    const cards: HTMLElement[] = Array.from(containerRef.current.children) as HTMLElement[];
    
    if (!cards.length) return;
  
    // Set initial state
    gsap.set(cards, {
      opacity: 0,
      y: 50,
    });
  
    // Create animation for each card
    cards.forEach((card, index) => {
      gsap.to(card, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: index * 0.15,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        }
      });
    });
  
    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="py-10 md:py-20 xl:py-28">
      <div className="containerX mx-auto text-center">
        <p className="text-base lg:text-lg text-main-600 bg-neutral-100 border border-neutral-300 tracking-wide mb-4 inline-block py-2 px-5 rounded-full">How It Works</p>
        <div className="flex justify-center w-full">
          <TextFadeIn 
            text="How Noroaming Works in 3 Simple Steps" 
            className="text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-main-600 tracking-wide"
          />
        </div>

        <div 
          ref={containerRef}
          className="mt-10 lg:mt-16 grid gap-6 grid-cols-1 lg:grid-cols-3 px-4 md:px-0"
        >
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 lg:p-12 transition-transform hover:scale-105 hover:shadow-lg duration-300 ${goal?.customclass} ${
                goal.bgImage ? "relative overflow-hidden" : ""
              }`}
            >
              {/* Background image for the second card */}
              {goal.bgImage && (
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-100"
                  style={{ backgroundImage: `url(${goal.bgImage})` }}
                />
              )}
              <div className="w-full flex mb-8">
                <div
                  className={`p-3 rounded-full flex items-center justify-center text-[29px] w-[62px] h-[62px] ${goal.bg}`}
                >
                  0{index+1}
                </div>
              </div>
              <h3 className={`text-lg md:text-xl lg:text-[34px] ${goal.titleclass} text-left relative z-10`}>
                {goal.title}
              </h3>
              <p className={`text-xs md:text-sm mt-4 ${goal.descriptionclass} lg:text-base text-left relative z-10`}>
                {goal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}