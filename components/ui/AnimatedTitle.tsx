"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

// Define the interface for props
interface AnimatedTitleProps {
  text: string;
  className?: string;
}

const AnimatedText = ({ text, className = "" }: AnimatedTitleProps) => {
  const titleRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    if (!titleRef.current) return;

    gsap.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 40,
        scale: 0.95,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1,
        ease: "power1.out",
      }
    );
  }, []);

  return (
    <div
      ref={titleRef}
      className={`"mt-5 text-sm md:text-lg font-light text-gray-700 ${className}`}
    >
      {text}
    </div>
  );
};

export default AnimatedText;
