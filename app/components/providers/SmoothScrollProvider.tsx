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
 * - Dynamically auto-resizes on route changes, image loads, DOM mutations, and animation frames
 *   so scroll boundaries and limits never get stuck or clamped prematurely.
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
      content: mainEl,
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

    // Dynamic dimension synchronizer in animation frame:
    // Guarantees Lenis scrollHeight and limit always match actual DOM scrollHeight,
    // eliminating any stuck/frozen scroll when navigating or loading images.
    let rafId: number;
    function raf(time: number) {
      if (mainEl && (lenis as any).dimensions) {
        const actualScrollHeight = mainEl.scrollHeight;
        const recordedScrollHeight = (lenis as any).dimensions.scrollHeight;
        if (Math.abs(actualScrollHeight - recordedScrollHeight) > 2) {
          lenis.resize();
        }
      }
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Watch for DOM mutations (new route contents, expandable accordions, dynamic blocks)
    const mutationObserver = new MutationObserver(() => {
      lenis.resize();
    });
    mutationObserver.observe(mainEl, {
      childList: true,
      subtree: true,
    });

    // Listen for image loads and window resize within the main container
    const handleResize = () => {
      lenis.resize();
    };
    mainEl.addEventListener("load", handleResize, { capture: true, passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

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
      mutationObserver.disconnect();
      mainEl.removeEventListener("load", handleResize, { capture: true });
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleAnchorClick, { capture: true });
      lenis.destroy();
      lenisRef.current = null;
      setLenisInstance(null);
    };
  }, []);

  // On route changes, immediately reset scroll position to top and trigger recalibration
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
      lenisRef.current.resize();

      // Staggered resizes to account for route transitions, image rendering and font loading
      const timers = [50, 150, 300, 600, 1000].map((delay) =>
        setTimeout(() => {
          lenisRef.current?.resize();
        }, delay)
      );

      return () => {
        timers.forEach(clearTimeout);
      };
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
