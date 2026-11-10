import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router";
import Lenis from "lenis";

export interface SmoothScrollContextType {
  lenis: Lenis | null;
  scrollTo: (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      immediate?: boolean;
      duration?: number;
      lock?: boolean;
    }
  ) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export function useLenis() {
  return useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * Global Lenis Smooth Scroll Provider
 *
 * Implements a unified, high-performance smooth scrolling engine for the PlaceValue website:
 * - Targets the presentation shell inner scroll container (.agent-native-app-main)
 * - Captures wheel events from the entire window (including ambient margins/backdrop)
 * - Balanced lerp (0.09) for a buttery, responsive, natural feel without floaty lag
 * - Native touch scrolling on mobile/tablet (syncTouch: false) for zero touch latency
 * - Respects prefers-reduced-motion (disables smooth wheel interpolation)
 * - Intercepts anchor links (e.g. #services, #faqs) for smooth targeted scrolling
 * - Resets scroll immediately to top on route transitions
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    // Check if client-side
    if (typeof window === "undefined") return;

    // Detect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Find the primary scroll wrapper
    const mainEl =
      document.querySelector<HTMLElement>(".agent-native-app-main") ||
      document.documentElement;

    const lenis = new Lenis({
      wrapper: mainEl === document.documentElement ? window : mainEl,
      content: mainEl === document.documentElement ? document.documentElement : (mainEl.firstElementChild as HTMLElement) || mainEl,
      eventsTarget: window,
      lerp: prefersReducedMotion ? 1 : 0.09,
      duration: prefersReducedMotion ? 0 : 1.0,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.0,
      smoothWheel: !prefersReducedMotion,
      syncTouch: false, // Preserve natural 1:1 mobile and tablet touch inertia
      autoResize: true,
      prevent: (node: HTMLElement) => {
        return (
          node.hasAttribute?.("data-lenis-prevent") ||
          node.classList?.contains("lenis-prevent")
        );
      },
    });

    lenisRef.current = lenis;
    setLenisInstance(lenis);

    // Drive Lenis through requestAnimationFrame
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Global anchor link smooth scroll handler
    const handleAnchorClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest<HTMLAnchorElement>("a[href*='#']");
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#" || href.startsWith("#!")) return;

      // Extract hash target
      const hashIndex = href.indexOf("#");
      if (hashIndex === -1) return;
      const hash = href.slice(hashIndex);
      if (hash.length <= 1) return;

      const targetEl = document.querySelector<HTMLElement>(hash);
      if (targetEl) {
        e.preventDefault();
        lenis.scrollTo(targetEl, {
          offset: -80,
          duration: prefersReducedMotion ? 0 : 0.9,
        });
      }
    };

    document.addEventListener("click", handleAnchorClick, { capture: true });

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  // On route changes, immediately reset scroll position to top
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
  }, [location.pathname]);

  const scrollTo: SmoothScrollContextType["scrollTo"] = (target, options) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, options);
    }
  };

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance, scrollTo }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

