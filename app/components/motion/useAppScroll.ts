import { useEffect, useRef, useState } from "react";

/**
 * High-performance scroll state tracker for PlaceValue navigation and layout.
 *
 * Optimized to prevent layout thrashing and render storms:
 * - Only triggers React state updates when the scroll position crosses the threshold boundary.
 * - Uses RAF-throttling to eliminate duplicate callbacks within the same frame.
 * - Listens with { passive: true } so the browser compositing thread is never blocked.
 */
export function useAppScroll(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const isScrolledRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mainEl = document.querySelector<HTMLElement>(".agent-native-app-main");

    const getScrollTop = () => {
      const mainTop = mainEl ? mainEl.scrollTop : 0;
      const winTop = window.scrollY || document.documentElement.scrollTop || 0;
      return Math.max(mainTop, winTop);
    };

    const evaluate = () => {
      const top = getScrollTop();
      const nextScrolled = top > threshold;
      if (nextScrolled !== isScrolledRef.current) {
        isScrolledRef.current = nextScrolled;
        setIsScrolled(nextScrolled);
      }
      setScrollY(top);
    };

    // Initial evaluation
    evaluate();

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const top = getScrollTop();
          const nextScrolled = top > threshold;
          if (nextScrolled !== isScrolledRef.current) {
            isScrolledRef.current = nextScrolled;
            setIsScrolled(nextScrolled);
          }
          setScrollY(top);
          ticking = false;
        });
        ticking = true;
      }
    };

    if (mainEl) {
      mainEl.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (mainEl) {
        mainEl.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return { isScrolled, scrollY };
}
