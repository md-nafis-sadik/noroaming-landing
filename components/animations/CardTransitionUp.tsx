"use client";

import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useGSAP } from "@gsap/react";

interface CardTransitionUpProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

const CardTransitionUp: React.FC<CardTransitionUpProps> = ({
  children,
  index,
  className,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          y: 400,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: "0px",
          opacity: 1,
          scale: 1,
          duration: 0.5 * (index + 1),
          ease: "power1.in",
          scrollTrigger: {
            trigger: cardRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  }, [index]);

  return (
    <div ref={cardRef} className={cn("w-full", className)}>
      {children}
    </div>
  );
};

export default CardTransitionUp;
