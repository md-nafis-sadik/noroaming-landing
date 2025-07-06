"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface ZRotationTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const ZRotationText = ({ text, delay = 0, className }: ZRotationTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const originalRef = useRef<HTMLDivElement>(null);
  const cloneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !originalRef.current || !cloneRef.current)
      return;

    const originalText = originalRef.current;
    const originalChars = originalRef.current.children;
    const cloneChars = cloneRef.current.children;

    // Set initial states
    gsap.set(originalText, {
      opacity: 1, // Start visible
    });

    // Set initial positions
    gsap.set(cloneChars, {
      rotationX: -90,
      opacity: 0,
      transformOrigin: "50% 50% -50",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse",
      },
      delay,
    });

    // Animation sequence
    tl.to(originalChars, {
      duration: 0.4,
      rotationX: 90,
      transformOrigin: "50% 50% -50",
      stagger: {
        each: 0.02,
        ease: "power2",
        from: "start",
      },
    })
      .to(
        originalChars,
        {
          duration: 0.4,
          opacity: 0,
          stagger: {
            each: 0.02,
            ease: "power4.in",
          },
        },
        0
      )
      .to(
        cloneChars,
        {
          duration: 0.05,
          opacity: 1,
          stagger: {
            each: 0.02,
          },
        },
        0.001
      )
      .to(
        cloneChars,
        {
          duration: 0.4,
          rotationX: 0,
          stagger: {
            each: 0.02,
          },
        },
        0
      );

    return () => {
      tl.kill();
    };
  }, [text, delay]);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-fit whitespace-nowrap", className)}
    >
      <div
        ref={originalRef}
        className="relative whitespace-nowrap"
        style={{ perspective: "600px" }}
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="inline-block text-gray-500"
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
          </span>
        ))}
      </div>
      <div
        ref={cloneRef}
        className="absolute top-0 left-0 whitespace-nowrap"
        style={{ perspective: "600px" }}
      >
        {text.split("").map((char, i) => (
          <span
            key={i}
            className="hero-text-gradient inline-block opacity-0"
            style={{ display: "inline-block", whiteSpace: "pre" }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ZRotationText;
