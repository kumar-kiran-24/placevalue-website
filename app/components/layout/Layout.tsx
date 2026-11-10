import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { HeaderActionsProvider } from "@agent-native/toolkit/app-shell";

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Premium Floating Framed Website Presentation Shell
 *
 * Places the PlaceValue website inside an elevated, stably framed presentation canvas
 * mounted on an animated textured stone backdrop with rotating architectural drafting arcs,
 * ambient drifting orbs, dynamic breathing elevation shadows, and smooth inner viewport scrolling.
 */
export function Layout({ children }: LayoutProps) {
  const mainRef = useRef<HTMLElement>(null);
  const location = useLocation();

  // Reset scroll position to top whenever navigating to a new route
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0, behavior: "instant" });
    }
  }, [location.pathname]);

  // Forward wheel events from outer background margins to the inner scroll canvas
  const handleBackdropWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (mainRef.current && e.target !== mainRef.current && !mainRef.current.contains(e.target as Node)) {
      mainRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <HeaderActionsProvider>
      <div
        onWheel={handleBackdropWheel}
        className="relative h-screen w-screen overflow-hidden presentation-backdrop select-none flex items-center justify-center p-1 sm:p-1.5 md:p-2"
      >
        {/* Architectural drafting arc line matching reference image */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden select-none" aria-hidden="true">
          <svg
            className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[1400px] max-w-none h-[760px] text-black/[0.12] sm:text-black/[0.15]"
            fill="none"
            viewBox="0 0 1400 760"
          >
            <circle cx="700" cy="380" r="480" stroke="currentColor" strokeWidth="1.2" />
            <circle cx="700" cy="380" r="620" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 6" opacity="0.65" />
            <line x1="60" y1="380" x2="1340" y2="380" stroke="currentColor" strokeWidth="0.75" opacity="0.5" />
            <line x1="700" y1="0" x2="700" y2="760" stroke="currentColor" strokeWidth="0.75" strokeDasharray="6 6" opacity="0.4" />
          </svg>
        </div>

        {/* Centered elevated floating website canvas: occupies ~99% of the screen with a slim ~0.50% framing background border */}
        <div className="relative z-10 w-full h-full flex flex-col overflow-hidden rounded-[14px] sm:rounded-[18px] md:rounded-[22px] border border-black/15 bg-background text-foreground presentation-card-shadow ring-1 ring-white/80 select-text">
          <main
            ref={mainRef}
            tabIndex={0}
            className="agent-native-app-main min-w-0 flex-1 overflow-y-auto overflow-x-hidden scroll-smooth mockup-scrollbar focus:outline-none"
          >
            {children}
          </main>
        </div>
      </div>
    </HeaderActionsProvider>
  );
}
