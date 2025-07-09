'use client'

import { useRef, useEffect } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { faqData } from "@/services/data";
import TextFadeIn from "../animations/TextFadeIn";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'


gsap.registerPlugin(ScrollTrigger);


const FAQ = () => {


  const sectionRef = useRef<HTMLDivElement>(null);
  const accordionRef = useRef<HTMLDivElement>(null);


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
  }, []);

  

  return (
    <section  className="bg-white font-inter flex_center flex-col w-full py-16 lg:py-20">
      <div className='text-center'>
        <p className="text-base lg:text-lg text-main-600 bg-neutral-100 border border-neutral-300 tracking-wide mb-4 inline-block py-2 px-5 rounded-full">FAQ</p>
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="Frequently Asked Questions"
            className="text-2xl lg:text-5xl max-w-full lg:text-[48px] font-[700] !leading-[1.2] text-main-600 tracking-wide mb-6"
          />
        </div>
      </div>


      {/* Accordion */}
      <div className="containerX mt-4 lg:mt-10"  ref={accordionRef}>
        <Accordion
          type="single"
          collapsible
          defaultValue="item-0"
          className="w-full mx-auto flex flex-col gap-3"
        >
          {faqData.map(({ question, answer }, index) => (
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


    </section>
  );
};

export default FAQ;
