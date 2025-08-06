import { useState, useEffect } from "react";

interface WindowDimensions {
  width: number | undefined;
  height: number | undefined;
  orientation: "landscape" | "portrait" | undefined;
}

export function useWindowDimensions(): WindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
    width: undefined,
    height: undefined,
    orientation: undefined,
  });

  useEffect(() => {
    function getWindowDimensions(): WindowDimensions {
      const { innerWidth: width, innerHeight: height } = window;
      const orientation = width > height ? "landscape" : "portrait";
      return {
        width,
        height,
        orientation,
      };
    }

    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    // Only run on client side
    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return windowDimensions;
}