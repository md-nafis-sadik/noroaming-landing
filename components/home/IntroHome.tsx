'use client'

import { useEffect, useRef, useState } from "react";
import TextFadeIn from "../animations/TextFadeIn";


function useCountUp(start: number, end: number, duration: number, trigger: boolean) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / (duration * 1000), 1);
      const value = Math.floor(start + (end - start) * progressRatio);
      setCount(value);

      if (progressRatio < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [trigger, start, end, duration]);

  return count;
}

const IntroHome = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  const [hasAnimated, setHasAnimated] = useState(false);

  // Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setInView(true);
          setHasAnimated(true); 
        }
      },
      { threshold: 0.3 }
    );

    const el = containerRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated]);

  // Counters
  const studentCount = useCountUp(0, 50, 2, inView);
  const instituteCount = useCountUp(0, 400, 2, inView);
  const teacherCount = useCountUp(0, 800, 2, inView);

  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);  
  
  return (
    <section className=" bg-[#FFF3C5]">
    <div className="containerX pt-[50px] lg:pt-[60px] pb-[40px] lg:pb-[50px] flex flex-col lg:flex-row justify-between items-center text-center lg:text-left">
      
    <TextFadeIn text="A Smarter Way to Manage Your Institution" className="w-full lg:max-w-[522px] text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide"
        />

      <div className="w-full lg:w-2/5">
      <section className="py-6 lg:py-12">
        
      <div
      ref={ref}
      className={`text-[#4f4f4f] text-xs md:text-sm lg:text-lg max-w-3xl mb-7 lg:mb-10 font-medium leading-relaxed
        transition-opacity duration-1000 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}
    >
      A Smart & Trusted Solution Helping Schools, Teachers, and Students Streamline Learning and Management
    </div>

      <div
      ref={containerRef}
      className="flex flex-row items-center lg:justify-start justify-between gap-6 lg:gap-20 max-w-xl mx-auto"
    >
      <div>
        <div className="text-2xl lg:text-4xl font-bold text-text-850">
          {studentCount}k<span className="text-skyish-700">+</span>
        </div>
        <p className="text-gray-600 mt-2 text-xs lg:text-sm">Total Students</p>
      </div>

      <div>
        <div className="text-2xl lg:text-4xl font-bold text-text-850">
          {instituteCount}<span className="text-skyish-700">+</span>
        </div>
        <p className="text-gray-600 mt-2 text-xs lg:text-sm">Total Institutes</p>
      </div>

      <div>
        <div className="text-2xl lg:text-4xl font-bold text-text-850">
          {teacherCount}<span className="text-skyish-700">+</span>
        </div>
        <p className="text-text-600 mt-2 text-xs lg:text-sm">Total Teachers</p>
      </div>
    </div>
    </section>
      </div>
      
    </div>
    </section>
  );
};

export default IntroHome;
