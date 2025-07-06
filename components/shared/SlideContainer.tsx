"use client";
import { EmblaOptionsType } from "embla-carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

function SliderContainer({
  options,
  autoPlay = false,
  autoScroll = false,
  ...props
}: {
  options?: EmblaOptionsType;
  autoPlay?: boolean;
  autoScroll?: boolean;
  [x: string]: unknown;
}) {
  const [emblaRef] = useEmblaCarousel(options, [
    Autoplay({ playOnInit: autoPlay, delay: 10000 }),
    AutoScroll({ playOnInit: autoScroll, speed: 1 }),
  ]);
  return <div {...props} ref={emblaRef}></div>;
}

export default SliderContainer;
