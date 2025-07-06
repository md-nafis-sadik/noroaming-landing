"use client";
import { useRef, ReactNode, JSX } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ParallaxContainerProps {
  children: ReactNode;
  containerClassName?: string;
  scaleAmount?: number;
  movement?: number;
  duration?: number;
}

const ParallaxContainer = ({
  children,
  containerClassName = "",
  scaleAmount = 1.3,
  movement = 60,
  duration = 0.3,
}: ParallaxContainerProps): JSX.Element => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const content = contentRef.current;

      if (!container || !content) return;

      const handleMouseEnter = (): void => {
        gsap.to(content, {
          duration,
          scale: scaleAmount,
        });
      };

      const handleMouseLeave = (): void => {
        gsap.to(content, {
          duration,
          scale: 1,
          x: 0,
          y: 0,
        });
      };

      const handleMouseMove = (e: MouseEvent): void => {
        const rect = container.getBoundingClientRect();
        const relX = e.clientX - rect.left;
        const relY = e.clientY - rect.top;

        gsap.to(content, {
          duration,
          x: ((relX - rect.width / 2) / rect.width) * movement,
          y: ((relY - rect.height / 2) / rect.height) * movement,
          ease: "power2.out",
        });
      };

      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      container.addEventListener("mousemove", handleMouseMove);

      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
        container.removeEventListener("mousemove", handleMouseMove);
      };
    },
    { scope: containerRef }
  ); // Dependencies array is empty as we want this to run once

  return (
    <div
      ref={containerRef}
      className={`overflow-visible ${containerClassName}`}
    >
      <div
        ref={contentRef}
        className="origin-center"
        style={{
          transform: "translate(0, 0) scale(1)",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ParallaxContainer;
