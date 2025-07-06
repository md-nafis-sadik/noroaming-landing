'use client'

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ConnectionIcon, ComputerIcon } from "@/services";
import TextFadeIn from "../animations/TextFadeIn";

// Define TypeScript types
type GoalItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  bg: string;
  borderColor: string;
};

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function OurGoals() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const goals: GoalItem[] = [
    {
      title: "Digitizing Education Management",
      description:
        "Our Mission is to Transform Educational Institution Management by Replacing Traditional Methods with a Smart, Digital, and Efficient System That Simplifies Operations and Boosts Performance.",
      icon: <ComputerIcon/>,
      bg: "bg-sky-100",
      borderColor: "border-sky-200",
    },
    {
      title: "Connecting Students, Teachers & Parents",
      description:
        "Our Goal is to Build a Strong and Seamless Connection Between Students, Teachers, and Guardians Through a Smart Mobile App, Enhancing Communication and Learning.",
      icon: <ConnectionIcon />,
      bg: "bg-yellow-100",
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
    <section className="py-10 md:py-20 xl:py-28 bg-skyish-200">
      <div className="containerX mx-auto text-center">
        <div className="flex justify-center w-full">
          <TextFadeIn 
            text="Our Goals" 
            className="text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6"
          />
        </div>
        <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-7 lg:mb-10 font-medium leading-relaxed transition-opacity duration-1000 ease-out text-center">
          Setting the Path for a Smarter, More Connected Future in Education
        </p>

        <div 
          ref={containerRef}
          className="mt-10 lg:mt-16 grid gap-8 grid-cols-1 md:grid-cols-2 px-4 md:px-0"
        >
          {goals.map((goal, index) => (
            <div
              key={index}
              className={`rounded-2xl p-7 bg-white transition-transform hover:scale-105 hover:shadow-lg duration-300`}
            >
              <div className="w-full flex justify-center lg:justify-start">
                <div
                  className={`w-[40px] lg:w-[72px] h-[40px] lg:h-[72px] mb-5 rounded-xl flex items-center justify-center ${goal.bg}`}
                >
                  {goal.icon}
                </div>
              </div>
              <h3 className="text-base md:text-lg lg:text-[24px] font-bold text-gray-900 text-center lg:text-left">
                {goal.title}
              </h3>
              <p className="text-xs md:text-sm mt-3 text-[#888] lg:text-base text-center lg:text-left">
                {goal.description}
              </p>
              <div className="mt-6 mb-2 w-full flex justify-center lg:justify-start">
                <a
                  href="#"
                  className="text-sm font-semibold text-black flex items-center gap-1 group"
                >
                  Learn More
                  <span className="transform transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}