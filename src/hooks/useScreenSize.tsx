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
    setScreenSize({ width: window.innerWidth, height: window.innerHeight });

    const resizeHandler = () => {
      setScreenSize({ width: window.innerWidth, height: window.innerHeight });
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
