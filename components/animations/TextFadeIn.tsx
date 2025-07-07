"use client";
import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

interface TextFadeInProps {
  text: string;
  className?: string;
  extraClassName?: string;
}

const TextFadeIn: React.FC<TextFadeInProps> = ({ text, className = "", extraClassName = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    const container = containerRef.current;

    if (container) {
      const wordElements = container.querySelectorAll(".word");

      const animation = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      wordElements.forEach((wordEl, wordIndex) => {
        const letters = wordEl.querySelectorAll(".letter");

        animation.fromTo(
          letters,
          {
            x: "100%",
            opacity: 0,
          },
          {
            x: "0%",
            opacity: 1,
            duration: 0.3,
            stagger: 0.05,
            ease: "power1.out",
          },
          wordIndex * 0.2
        );
      });

      return () => {
        animation.scrollTrigger?.kill();
      };
    }
  }, [words]);

  useEffect(() => {
    if (containerRef.current) {
      const breakWords = (text: string) => {
        const tempDiv = document.createElement("div");
        tempDiv.style.position = "absolute";
        tempDiv.style.visibility = "hidden";
        tempDiv.style.width = `${containerRef.current?.clientWidth || 500}px`;
        tempDiv.style.whiteSpace = "normal";
        tempDiv.innerHTML = text;
        document.body.appendChild(tempDiv);

        const words = text.split(" ");
        const processedWords: string[] = [];
        let currentLine = "";

        words.forEach((word) => {
          const testLine = currentLine ? `${currentLine} ${word}` : word;
          tempDiv.innerHTML = testLine;

          if (tempDiv.scrollWidth > tempDiv.clientWidth) {
            processedWords.push(currentLine);
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        });

        if (currentLine) {
          processedWords.push(currentLine);
        }

        document.body.removeChild(tempDiv);
        return processedWords;
      };

      setWords(breakWords(text));
    }
  }, [text]);

  return (
    <div
      ref={containerRef}
      className={cn(`flex flex-col font-inter`, className)}
    >
      {words.map((line: string, lineIndex: React.Key | null | undefined) => (
        <div key={lineIndex} className={`flex flex-wrap justify-center ${extraClassName}`}>
          {line
            .split(" ")
            .map((word: string, wordIndex: React.Key | null | undefined) => (
              <div key={wordIndex} className="word flex mr-2">
                {word
                  .split("")
                  .map(
                    (char: string, charIndex: React.Key | null | undefined) => (
                      <span
                        key={charIndex}
                        className="letter opacity-0 inline-block"
                      >
                        {char}
                      </span>
                    )
                  )}
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default TextFadeIn;
