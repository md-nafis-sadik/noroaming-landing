"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollStickToTopProps = {
  children: React.ReactNode; // Content for the stack cards
  cardHeight: number; // Height of a single card
  marginY: number; // Vertical margin between cards
};

const ScrollStickToTop: React.FC<ScrollStickToTopProps> = ({
  children,
  cardHeight,
  marginY,
}) => {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stackElement = stackRef.current;
    if (!stackElement) return;

    const cards = Array.from(stackElement.children) as HTMLElement[];

    cards.forEach((card, index) => {
      gsap.set(card, { transformOrigin: "center top" }); // Set the transform origin for each card
    });

    ScrollTrigger.create({
      trigger: stackElement,
      start: "top bottom", // Trigger when the stack enters the viewport
      end: "bottom top", // Trigger ends when the stack leaves the viewport
      scrub: true, // Smooth animation tied to scroll
      onUpdate: (self) => {
        const progress = self.progress * 100;
        const topOffset = stackElement.getBoundingClientRect().top;

        cards.forEach((card, index) => {
          const translateY = marginY * index;
          const scale = Math.max(0.8, 1 - Math.abs(topOffset * 0.002)); // Scale based on scroll
          const adjustedScale = scale - index * 0.05; // Add a progressive scale for depth effect

          gsap.to(card, {
            y: translateY,
            scale: adjustedScale,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      },
    });
  }, [cardHeight, marginY]);

  return (
    <div
      ref={stackRef}
      className="relative space-y-4"
      style={{ perspective: "1000px" }} // Adding perspective for a 3D effect
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="stack-card-item relative bg-white shadow-lg rounded-lg overflow-hidden w-screen"
          style={{
            height: `${cardHeight}px`,
            marginTop: index === 0 ? 0 : `${marginY}px`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollStickToTop;
