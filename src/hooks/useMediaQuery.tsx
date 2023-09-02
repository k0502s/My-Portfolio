import { useCallback, useEffect, useMemo, useState } from "react";

export const useMediaQuery = (width: number) => {
  const [windowWidth, setWindowWidth] = useState(0);

  const resizeWindow = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  const result = useMemo(
    () => (windowWidth ? windowWidth <= width : false),
    [windowWidth, width],
  );

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", resizeWindow);
    return () => {
      window.removeEventListener("resize", resizeWindow);
    };
  }, [windowWidth, resizeWindow]);

  return result;
};
