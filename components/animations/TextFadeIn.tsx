"use client";

import React, { useRef, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

interface TextFadeInProps {
  text: string;
  className?: string;
  extraClassName?: string;
}

const TextFadeIn: React.FC<TextFadeInProps> = ({ text, className = "", extraClassName = "" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleRef = useCallback((node: HTMLDivElement | null) => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node); // cleanup after visible
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
  }, []);

  return (
    <div
      ref={handleRef}
      className={cn("flex flex-wrap justify-center lg:justify-start font-inter", className)}
    >
      {text.split(" ").map((word, wordIndex) => (
        <div key={wordIndex} className={cn("word flex mr-2", extraClassName)}>
          {word.split("").map((char, charIndex) => {
            const delay = (wordIndex * 0.2 + charIndex * 0.05).toFixed(2);
            return (
              <span
                key={charIndex}
                className={cn(
                  "inline-block transform transition-all duration-500 ease-out",
                  isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
                )}
                style={{ transitionDelay: `${delay}s` }}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TextFadeIn;
