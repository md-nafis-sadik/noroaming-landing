"use client";

import { useState } from 'react';
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/services/data/shared.data";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonial = () => {
  const autoplayOptions = { delay: 3000 };
  const options = { align: "start", loop: true } as const;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const { onPrevButtonClick, onNextButtonClick } = useEmblaButtons(emblaApi);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="containerX w-full py-20 md:py-[120px] relative">

      <div>
        <div className="w-full text-2xl md:text-4xl lg:text-[48px] font-[700] !leading-[1.2] text-text-850 tracking-wide mb-4 lg:mb-6 text-center">
          Testimonial
        </div>
        <p className="text-[#4f4f4f] text-xs md:text-sm lg:text-lg mb-2 lg:mb-10 font-medium leading-relaxed transition-opacity duration-1000 ease-out text-center">
          Trusted by Schools, Teachers & Administrators Across Bangladesh
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-x-hidden">
        <div className="w-full" ref={emblaRef}>
          <div className="flex gap-3 md:gap-6 lg:gap-8 w-full">
            {testimonialsData.map(({ name, title, avatar, id, message, designation }) => (
              <TestimonialCard
                key={id}
                name={name}
                title={title}
                avatar={avatar}
                message={message}
                designation={designation}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex_center gap-8 mt-10 md:mt-[60px]">
        <button
          onClick={onPrevButtonClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={onNextButtonClick}
          className="p-3 lg:p-[18px] bg-white hover:bg-skyish-700 hover:text-white transition-all shadow-lg rounded-full hover:-translate-y-1"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
