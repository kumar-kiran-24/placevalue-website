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
 * - Refined dark luxury obsidian theme (#0B1524 to #020408) replacing electric royal blue
 * - Ambient dual-tone glowing orbs (PlaceValue blue #1596D2 and orange #F47735) with breathing pulse
 * - Original PlaceValue logo centered prominently with dynamic shimmer sheen sweep
 * - Dynamic loading animation: smooth 0% -> 100% precision progress track with live counter
 * - Synchronized status phases: "INITIALIZING" -> "CALIBRATING" -> "READY"
 * - Cinematic exit transition smoothly revealing the website and hero video
 * - Managed per session via sessionStorage with URL ?intro=1 override support
 */
export function LoadingIntroProvider({ children }: LoadingIntroProviderProps) {
  const shouldReduceMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);
  const [isIntroComplete, setIsIntroComplete] = useState(true);
  const [progress, setProgress] = useState(0);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    if (hasStartedRef.current) return;
    hasStartedRef.current = true;

    try {
      const forceIntro =
        typeof window !== "undefined" &&
        new URLSearchParams(window.location.search).has("intro");
      const alreadySeen = sessionStorage.getItem(SESSION_STORAGE_KEY);

      if (!forceIntro && (alreadySeen === "true" || shouldReduceMotion)) {
        setIsVisible(false);
        setIsIntroComplete(true);
        return;
      }
    } catch {
      // Storage unavailable or disabled
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

    // Animate progress smoothly from 0 to 100 over ~1.2 seconds
    const startTime = performance.now();
    const duration = 1200;
    let rafId: number;

    const animateProgress = (now: number) => {
      const elapsed = now - startTime;
      const rawProgress = Math.min(1, elapsed / duration);
      // Elegant deceleration curve
      const eased = 1 - Math.pow(1 - rawProgress, 2.4);
      setProgress(Math.round(eased * 100));

      if (rawProgress < 1) {
        rafId = requestAnimationFrame(animateProgress);
      }
    };

    rafId = requestAnimationFrame(animateProgress);

    // Transition timing:
    // 1. Progress reaches 100% at ~1.2s
    // 2. Short hold (150ms) to acknowledge completion
    // 3. At 1.35s: trigger isIntroComplete (starts the homepage hero animations)
    const completeTimer = setTimeout(() => {
      setIsIntroComplete(true);
      markSeen();
    }, 1350);

    // 4. At 1.55s: overlay begins smooth exit fade (0.55s), unmounting by 2.1s
    const dismissTimer = setTimeout(() => {
      setIsVisible(false);
    }, 1550);

    // Hard failsafe limit: guaranteed unmount by 2.3s so users are never blocked
    const failsafeTimer = setTimeout(() => {
      setIsIntroComplete(true);
      setIsVisible(false);
      markSeen();
    }, 2300);

    return () => {
      cancelAnimationFrame(rafId);
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
              scale: 1.03,
              transition: {
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden cursor-default select-none transform-gpu will-change-transform"
            style={{
              background:
                "radial-gradient(ellipse 90% 70% at 50% 45%, #0D1624 0%, #080E17 40%, #05080E 75%, #020407 100%)",
            }}
          >
            {/* Ambient dynamic dual-tone glowing orbs (PlaceValue Blue & Orange) */}
            <div
              aria-hidden="true"
              className="absolute pointer-events-none -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[600px] h-[600px]"
            >
              {/* Left brand blue aura */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.28, 0.42, 0.28],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-20 -top-16 w-[300px] h-[300px] sm:w-[420px] sm:h-[420px] rounded-full bg-brand-blue/35 blur-[100px] transform-gpu"
              />

              {/* Right brand orange aura */}
              <motion.div
                animate={{
                  scale: [1.15, 1, 1.15],
                  opacity: [0.22, 0.35, 0.22],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-20 -bottom-16 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full bg-brand-orange/30 blur-[95px] transform-gpu"
              />

              {/* Central subtle core glow */}
              <div className="absolute inset-0 m-auto w-[180px] h-[180px] sm:w-[240px] sm:h-[240px] rounded-full bg-white/10 blur-[60px] transform-gpu" />
            </div>

            {/* Centered Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.65,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 flex flex-col items-center justify-center px-6"
            >
              {/* Logo container with light glint sweep */}
              <div className="relative overflow-hidden py-3 px-6 rounded-2xl">
                <img
                  src="/placevalue-logo.png"
                  alt="PlaceValue"
                  width={600}
                  height={120}
                  className="h-11 sm:h-14 md:h-18 lg:h-20 w-auto object-contain select-none filter drop-shadow-[0_0_32px_rgba(21,150,210,0.3)] drop-shadow-[0_16px_36px_rgba(0,0,0,0.7)]"
                  loading="eager"
                />

                {/* Animated light sheen sweep across logo */}
                <motion.div
                  aria-hidden="true"
                  initial={{ x: "-130%" }}
                  animate={{ x: "230%" }}
                  transition={{
                    duration: 1.2,
                    delay: 0.25,
                    ease: [0.25, 1, 0.5, 1],
                  }}
                  className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 pointer-events-none"
                />
              </div>

              {/* Dynamic Loading Progress Track */}
              <div className="mt-7 flex flex-col items-center w-52 sm:w-60 md:w-68">
                {/* Precision Progress Bar */}
                <div className="w-full h-[3px] bg-white/12 rounded-full overflow-hidden relative backdrop-blur-sm border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-brand-blue via-[#38BDF8] to-brand-orange rounded-full relative"
                    style={{ width: `${progress}%` }}
                  >
                    {/* Glowing tip bead */}
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_10px_#F47735] transform-gpu" />
                  </div>
                </div>

                {/* Micro Status Line with Percentage */}
                <div className="w-full mt-3 flex items-center justify-between text-[11px] font-mono tracking-wider text-white/55">
                  <span className="flex items-center gap-1.5 text-[10px] tracking-[0.24em] uppercase text-white/65 font-sans font-medium">
                    <span
                      className={`inline-block w-1.5 h-1.5 rounded-full ${
                        progress >= 100
                          ? "bg-emerald-400 shadow-[0_0_8px_#34D399]"
                          : "bg-brand-orange animate-pulse shadow-[0_0_8px_#F47735]"
                      }`}
                    />
                    {progress < 50
                      ? "Initializing"
                      : progress < 98
                      ? "Calibrating"
                      : "Ready"}
                  </span>
                  <span className="text-brand-orange font-semibold font-mono text-xs">
                    {progress}%
                  </span>
                </div>

                {/* Micro Brand Tagline */}
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.6 }}
                  className="mt-4 text-[10px] sm:text-[11px] font-medium tracking-[0.28em] uppercase text-[#DFCFB6]/50 text-center"
                >
                  Education • Technology • Innovation
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LoadingIntroContext.Provider>
  );
}
