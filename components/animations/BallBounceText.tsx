"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FC, useRef } from "react";

interface BallBounceTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const BallBounceText: FC<BallBounceTextProps> = ({
  children,
  className,
  delay = 0.3,
}) => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useGSAP(() => {
    if (!textRef.current) return;

    const target = textRef.current;

    // Set initial position
    gsap.set(target, {
      y: -100,
      opacity: 0,
      scale: 1,
    });

    const tl = gsap.timeline({
      delay: delay, // 300ms delay
    });

    tl
      // Initial drop with impact
      .to(target, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.in",
      })
      // Squash on impact
      .to(
        target,
        {
          scaleX: 1.4,
          scaleY: 0.6,
          duration: 0.08,
          ease: "power1.out",
        },
        "-=0.08"
      )
      // First bounce up
      .to(target, {
        y: -40,
        scaleX: 1,
        scaleY: 1,
        duration: 0.25,
        ease: "power2.out",
      })
      // Small final bounce and settle
      .to(target, {
        y: 0,
        duration: 0.2,
        ease: "power2.in",
      })
      .to(
        target,
        {
          scaleX: 1.2,
          scaleY: 0.8,
          duration: 0.1,
          ease: "power1.out",
        },
        "-=0.1"
      )
      // Return to original shape
      .to(target, {
        scale: 1,
        duration: 0.2,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <span ref={textRef} className={className}>
      {children}
    </span>
  );
};

export default BallBounceText;
