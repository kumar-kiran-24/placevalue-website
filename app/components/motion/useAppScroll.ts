import { useEffect, useState } from "react";

/**
 * Tracks scroll state within the app canvas scroll container (.agent-native-app-main)
 * and window scroll, whichever is active.
 */
export function useAppScroll(threshold = 30) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const mainEl = document.querySelector<HTMLElement>(".agent-native-app-main");

    const getScrollTop = () => {
      const mainTop = mainEl ? mainEl.scrollTop : 0;
      const winTop = window.scrollY || document.documentElement.scrollTop || 0;
      return Math.max(mainTop, winTop);
    };

    const handleScroll = () => {
      const top = getScrollTop();
      setScrollY(top);
      setIsScrolled(top > threshold);
    };

    // Run initial check
    handleScroll();

    if (mainEl) {
      mainEl.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (mainEl) {
        mainEl.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { isScrolled, scrollY };
}

