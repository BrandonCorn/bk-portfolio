"use client";

import { useEffect, useState } from "react";

/**
 * Determines screen width of a device
 * @returns - width of the device screen
 */
const getViewPortWidth = () => {
  const width = Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
  return width;
};

/**
 * Determines based on screen width if using a mobile device
 * @param breakpoint - size of screen by width where we render for mobile
 * @returns
 */
const isMobileViewport = (breakpoint = 768) => {
  const width = getViewPortWidth();
  return width < breakpoint;
};

/**
 * Hook for determining what type of device we're using, mobile or desktop
 * @param breakpoint - width of the screen where we decide we're on mobile device
 * @returns - boolean value whether we are or are not on mobile device
 */
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(isMobileViewport());

  useEffect(() => {
    function handleResize() {
      setIsMobile(isMobileViewport(breakpoint));
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
