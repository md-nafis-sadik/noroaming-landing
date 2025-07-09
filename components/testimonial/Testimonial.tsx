"use client";

import { useState } from 'react';
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import useEmblaButtons from "@/hooks/EmblaCarousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonialsData } from "@/services/data/shared.data";
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TextFadeIn from '../animations/TextFadeIn';

const Testimonial = () => {
  const autoplayOptions = { delay: 3000 };
  const options = { 
    align: "start", 
    loop: true,
    breakpoints: {
      '(min-width: 1024px)': { slidesToScroll: 3, slidesToShow: 3 },
      '(min-width: 768px)': { slidesToScroll: 2, slidesToShow: 2 },
    }
  } as const;
  
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay(autoplayOptions),
  ]);
  const { onPrevButtonClick, onNextButtonClick } = useEmblaButtons(emblaApi);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="containerX w-full relative font-inter">
      <div className='text-center'>
        <p className="text-base lg:text-lg text-main-600 bg-neutral-100 border border-neutral-300 tracking-wide mb-4 inline-block py-2 px-5 rounded-full">Features</p>
        <div className="flex justify-center items-center w-full mx-auto">
          <TextFadeIn
            text="Our Happy Client Say"
            className="text-2xl lg:text-5xl max-w-full lg:text-[48px] font-[700] !leading-[1.2] text-main-600 tracking-wide mb-6"
          />
        </div>
      </div>

      {/* CAROUSEL */}
      <div className="w-full overflow-x-hidden mt-4 md:mt-12">
        <div className="w-full" ref={emblaRef}>
          <div className="flex w-full py-1">
            {testimonialsData.map(({ name, title, avatar, id, message, designation, customclass, bg, titleclass, descriptionclass }) => (
              <div key={id} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 pl-4">
                <TestimonialCard
                  name={name}
                  title={title}
                  titleclass={titleclass}
                  descriptionclass={descriptionclass}
                  customclass={customclass}
                  bg={bg}
                  avatar={avatar}
                  message={message}
                  designation={designation}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="hidden md:flex justify-center gap-4 mt-4 lg:mt-10 md:mt-[60px]">
        <button
          onClick={onPrevButtonClick}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="p-2 lg:p-[10px] bg-white hover:bg-main-600 hover:text-white transition-all rounded-lg border border-neutral-300"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={onNextButtonClick}
          className="p-2 lg:p-[10px] bg-white hover:bg-main-600 hover:text-white transition-all rounded-lg border border-neutral-300"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;