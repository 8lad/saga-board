import { useEffect, useState } from "react";

interface ScreenSize {
  width: number;
  height: number;
}

export const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const resizeHandler = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      setScreenSize({ width, height });
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return {
    width: screenSize.width,
    height: screenSize.height,
  };
};
