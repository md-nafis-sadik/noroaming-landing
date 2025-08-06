"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ScrollStickToTopProps = {
  children: React.ReactNode;
  cardHeight: number;
  marginY: number;
  className?: string;
};

const ScrollStickToTop: React.FC<ScrollStickToTopProps> = ({
  children,
  cardHeight,
  marginY,
  className = "",
}) => {
  const stackRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  useEffect(() => {
    setIsMounted(true); // Mark component as mounted
    
    const stackElement = stackRef.current;
    if (!stackElement) return;

    const cards = Array.from(stackElement.children) as HTMLElement[];

    // Set initial styles that match SSR render
    gsap.set(cards, {
      y: 0,
      scale: 1,
      transformOrigin: "center top"
    });

    scrollTriggerRef.current = ScrollTrigger.create({
      trigger: stackElement,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        const topOffset = stackElement.getBoundingClientRect().top;
        
        cards.forEach((card, index) => {
          const translateY = marginY * index;
          const scale = Math.max(0.8, 1 - Math.abs(topOffset * 0.002));
          const adjustedScale = scale - index * 0.05;

          gsap.to(card, {
            y: translateY,
            scale: adjustedScale,
            duration: 0.2,
            ease: "power2.out",
          });
        });
      },
      onLeave: () => {
        // Reset to initial state when leaving scroll area
        gsap.to(cards, {
          y: 0,
          scale: 1,
          duration: 0.5
        });
      }
    });

    return () => {
      scrollTriggerRef.current?.kill();
    };
  }, [cardHeight, marginY]);

  return (
    <div
      ref={stackRef}
      className={`relative ${className}`}
      style={{ perspective: "1000px" }}
    >
      {React.Children.map(children, (child, index) => (
        <div
          key={index}
          className="stack-card-item relative bg-white shadow-lg rounded-lg overflow-hidden w-screen"
          style={{
            height: `${cardHeight}px`,
            marginTop: index === 0 ? 0 : `${marginY}px`,
            // Ensure initial state matches SSR
            transform: isMounted ? undefined : 'translateY(0) scale(1)'
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollStickToTop;