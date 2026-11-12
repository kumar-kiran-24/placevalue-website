import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const SESSION_STORAGE_KEY = "pv_loading_intro_seen";

interface LoadingIntroContextType {
  isIntroComplete: boolean;
}

const LoadingIntroContext = createContext<LoadingIntroContextType>({
  isIntroComplete: true,
});

export function useLoadingIntro() {
  return useContext(LoadingIntroContext);
}

interface LoadingIntroProviderProps {
  children: React.ReactNode;
}

/**
 * Premium Full-Screen Animated Loading Intro for PlaceValue
 *
 * Visual specification:
 * - Deep royal-blue gradient background with central luminosity
 * - Original PlaceValue logo centered prominently with subtle ambient glow
 * - Smooth fade-in & scale-up animation
 * - Brief hold (~0.5s) followed by cinematic fade-out transition revealing the website
 * - Managed globally per browser session via sessionStorage (first visit only)
 * - Failsafe timeouts, reduced-motion compliance, and zero white flash / layout shifts
 */
export function LoadingIntroProvider({ children }: LoadingIntroProviderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(true);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    try {
      const alreadySeen = sessionStorage.getItem(SESSION_STORAGE_KEY);
      if (alreadySeen === "true" || shouldReduceMotion) {
        setIsVisible(false);
        setIsIntroComplete(true);
        return;
      }
    } catch {
      // Storage unavailable or disabled (e.g. strict sandbox mode)
      setIsVisible(false);
      setIsIntroComplete(true);
      return;
    }

    // First visit in this session: display animated loading intro
    setIsVisible(true);
    setIsIntroComplete(false);

    const markSeen = () => {
      try {
        sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
      } catch {}
    };

    // Transition timing:
    // Logo scales up and fades in over ~0.65s, holds for ~0.5s, then signals hero reveal at 1.15s
    const completeTimer = setTimeout(() => {
      setIsIntroComplete(true);
      markSeen();
    }, 1150);

    // Overlay fades & subtly scales out over 0.55s, unmounting completely by 1.75s
    const dismissTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1750);

    // Hard failsafe limit: guaranteed unmount by 2.0s so users are never blocked
    const failsafeTimer = setTimeout(() => {
      setIsIntroComplete(true);
      setIsVisible(false);
      markSeen();
    }, 2000);

    return () => {
      clearTimeout(completeTimer);
      clearTimeout(dismissTimer);
      clearTimeout(failsafeTimer);
    };
  }, [shouldReduceMotion]);

  const handleDismissImmediately = useCallback(() => {
    try {
      sessionStorage.setItem(SESSION_STORAGE_KEY, "true");
    } catch {}
    setIsIntroComplete(true);
    setIsVisible(false);
  }, []);

  return (
    <LoadingIntroContext.Provider value={{ isIntroComplete }}>
      {children}
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key="pv-loading-intro-overlay"
            role="status"
            aria-live="polite"
            aria-label="Loading PlaceValue"
            onClick={handleDismissImmediately}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.04,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden cursor-default select-none transform-gpu will-change-transform"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, #084BC9 0%, #0036A4 45%, #002272 80%, #00154D 100%)",
            }}
          >
            {/* Subtle luminous ambient glow directly behind the centered logo */}
            <div
              aria-hidden="true"
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              {/* Soft royal blue wide radial aura */}
              <div className="w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] rounded-full bg-blue-400/25 blur-[90px] transform-gpu" />
              {/* Centered luminous soft-white glow */}
              <div className="absolute inset-0 m-auto w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] rounded-full bg-white/20 blur-[50px] transform-gpu" />
              {/* Core bright light */}
              <div className="absolute inset-0 m-auto w-[130px] h-[130px] rounded-full bg-white/30 blur-[25px] transform-gpu" />
            </div>

            {/* Original PlaceValue Logo prominently centered */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 6 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex flex-col items-center justify-center px-6"
            >
              <img
                src="/placevalue-logo.png"
                alt="PlaceValue"
                width={600}
                height={120}
                className="h-11 sm:h-14 md:h-18 lg:h-20 w-auto object-contain select-none filter drop-shadow-[0_0_28px_rgba(255,255,255,0.45)] drop-shadow-[0_12px_32px_rgba(0,0,0,0.35)]"
                loading="eager"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingIntroContext.Provider>
  );
}

