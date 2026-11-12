import { useEffect, useRef } from "react";
import { useLocation } from "react-router";
import { HeaderActionsProvider } from "@agent-native/toolkit/app-shell";
import { LoadingIntroProvider } from "@/components/ui/LoadingIntro";

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

  return (
    <LoadingIntroProvider>
      <HeaderActionsProvider>
        <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden bg-background text-foreground">
          <main
            ref={mainRef}
            tabIndex={0}
            className="agent-native-app-main min-w-0 flex-1 overflow-y-auto overflow-x-hidden mockup-scrollbar focus:outline-none"
          >
            {children}
          </main>
        </div>
      </HeaderActionsProvider>
    </LoadingIntroProvider>
  );
}
