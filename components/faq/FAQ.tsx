'use client'

import { useState, useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqData } from "@/services/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TextFadeIn from "../animations/TextFadeIn";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);

const categories = [
  "General Information",
  "Features & Benefits",
  "Security & Privacy",
  "Getting Started",
  "Mobile App & Access",
];

const FAQ = () => {

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const filteredFaqs = faqData.filter((item) => item.category === selectedCategory);

  const scrollTabs = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -150 : 150,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !accordionRef.current) return;
  
      // Section animation
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }
      );
  
      // Accordion items animation
      gsap.fromTo(accordionRef.current.querySelectorAll('.accordion-item'),
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: accordionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          }
        }
      );
  
      // 👇 Refresh ScrollTrigger
      ScrollTrigger.refresh();
    }, sectionRef);
  
    return () => ctx.revert();
  }, [selectedCategory]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
  
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
  
    const handleMouseDown = (e: MouseEvent) => {
      isDown = true;
      el.classList.add('cursor-grabbing');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    };
  
    const handleMouseLeave = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };
  
    const handleMouseUp = () => {
      isDown = false;
      el.classList.remove('cursor-grabbing');
    };
  
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // scroll-fast multiplier
      el.scrollLeft = scrollLeft - walk;
    };
  
    el.addEventListener('mousedown', handleMouseDown);
    el.addEventListener('mouseleave', handleMouseLeave);
    el.addEventListener('mouseup', handleMouseUp);
    el.addEventListener('mousemove', handleMouseMove);
  
    return () => {
      el.removeEventListener('mousedown', handleMouseDown);
      el.removeEventListener('mouseleave', handleMouseLeave);
      el.removeEventListener('mouseup', handleMouseUp);
      el.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  

  return (
    <section className="bg-white flex_center flex-col w-full py-16 lg:py-20">
      <div>
        <div className="flex justify-center w-full"><TextFadeIn text="FAQ" className=" text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-6"
        /></div>
        <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-7 lg:mb-10 font-medium leading-relaxed
        transition-opacity duration-1000 ease-out text-center">
          Find answers to common questions about Smart Pathshala.
        </p>
      </div>

      {/* Category Tabs with Scroll */}
      <div className="relative w-full containerX mt-6 lg:mt-10">
        
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar space-x-4 lg:space-x-11 w-[95%] lg:w-full  mx-auto scroll"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={cn(
                "flex-shrink-0 px-5 w-40 lg:w-52 lg:px-8 py-2.5 lg:py-4 rounded-full border text-xs lg:text-sm font-medium transition-all",
                selectedCategory === cat
                  ? "bg-skyish-700 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
        
      </div>

      {/* Accordion */}
      <div className="containerX mt-10"  ref={accordionRef}>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full mx-auto flex flex-col gap-3"
        >
          {filteredFaqs.map(({ question, answer }, index) => (
            <AccordionItem key={index} value={`item-${index}`} >
              <AccordionTrigger
                className={cn(
                  "text-sm md:text-xl font-medium md:font-bold text-black !leading-[1.4] md:!leading-[1.1] text-start font-inter"
                )}
              >
                {question}
              </AccordionTrigger>
              <AccordionContent
                className={cn(
                  "text-xs md:text-base text-gray-600 font-normal font-inter"
                )}
              >
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

<div className="hidden lg:flex gap-6 mt-10">
      <div className="">
          <button onClick={() => scrollTabs("left")} className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1">
            <ChevronLeft />
          </button>
        </div>
        <div className="">
          <button onClick={() => scrollTabs("right")} className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1">
            <ChevronRight />
          </button>
        </div>
        </div>
    </section>
  );
};

export default FAQ;
