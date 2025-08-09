"use client";

import { useCallback } from "react";
import type { EmblaCarouselType } from "embla-carousel";

const useEmblaButtons = (emblaApi: EmblaCarouselType | null) => {
  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return {
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export default useEmblaButtons;
