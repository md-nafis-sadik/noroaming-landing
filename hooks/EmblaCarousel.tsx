"use client";
import { useCallback } from "react";

// Define the type for the Embla API
interface EmblaApi {
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: () => boolean;
  canScrollNext: () => boolean;
  on: (event: string, callback: (api: EmblaApi) => void) => EmblaApi;
}

const useEmblaButtons = (emblaApi: any) => {
  //   const [prevBtnDisabled, setPrevBtnDisabled] = useState<boolean>(true);
  //   const [nextBtnDisabled, setNextBtnDisabled] = useState<boolean>(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  //   const onSelect = useCallback((emblaApi: EmblaApi) => {
  //     setPrevBtnDisabled(!emblaApi.canScrollPrev());
  //     setNextBtnDisabled(!emblaApi.canScrollNext());
  //   }, []);

  //   useEffect(() => {
  //     if (!emblaApi) return;

  //     onSelect(emblaApi);
  //     emblaApi.on("reInit", onSelect).on("select", onSelect);
  //   }, [emblaApi, onSelect]);

  return {
    // prevBtnDisabled,
    // nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export default useEmblaButtons;
