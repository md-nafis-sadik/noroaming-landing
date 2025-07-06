"use client";
import { scoutCond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

interface IFHeader {
  dark?: boolean;
  lite?: boolean;
  text: string;
  className?: string;
}

const SectionHeader = ({ dark, lite, text, className }: IFHeader) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      if (!container) return;

      // Clear any existing content
      container.innerHTML = "";

      // Split text into individual letters while preserving spaces
      const letters = text.split("").map((char) => {
        const span = document.createElement("span");
        span.textContent = char === " " ? "\u00A0" : char;
        span.style.display = "inline-block";
        if (char === " ") {
          span.style.marginRight = "0.1em";
        }
        container.appendChild(span);
        return span;
      });

      // Create animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
          markers: false,
          once: true,
          scrub: false,
        },
      });

      tl.fromTo(
        letters,
        {
          opacity: 0,
          x: 50,
          rotate: () => gsap.utils.random(-45, 45),
        },
        {
          opacity: 1,
          x: 0,
          rotate: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power2.out",
        }
      );

      // Cleanup
      return () => {
        tl.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        "text-5xl md:text-[128px] font-bold !leading-[0.9] uppercase text-center font-scoutcond",
        dark && "text-black",
        lite && "text-white",
        className
      )}
    />
  );
};

export default SectionHeader;
