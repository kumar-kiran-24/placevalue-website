import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useAppScroll } from "./useAppScroll";

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Consultancy", to: "/consultancy" },
  { label: "TASKVERSE", to: "/taskverse" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

interface MotionNavProps {
  activeNav?: "Home" | "About" | "Consultancy" | "TASKVERSE" | "Insights" | "Contact";
  theme?: "light" | "dark";
}

export function MotionNav({ activeNav = "Home", theme = "dark" }: MotionNavProps) {
  const { isScrolled } = useAppScroll(50);
  const [mobileOpen, setMobileOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const orangePill =
    "inline-flex items-center justify-center gap-1.5 rounded-full bg-brand-orange text-white font-bold transition-all hover:brightness-105 shadow-sm";

  return (
    <div className="sticky top-0 z-50 w-full flex justify-center pointer-events-none h-0 overflow-visible">
      <motion.header
        layout={!shouldReduceMotion}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.42,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={cn(
          "pointer-events-auto flex items-center justify-between transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] transform-gpu isolate",
          isScrolled
            ? "mt-2.5 sm:mt-3 w-[94%] max-w-[1060px] h-[52px] sm:h-[56px] px-4 sm:px-6 rounded-full bg-brand-night/92 backdrop-blur-xl border border-white/15 shadow-[0_12px_36px_-6px_rgba(0,0,0,0.35)] text-white"
            : "w-full h-[74px] md:h-[84px] px-6 md:px-10 lg:px-14 xl:px-20 bg-transparent"
        )}
      >
        {/* Left: Brand Logo */}
        <Link
          to="/"
          aria-label="PlaceValue home"
          className="flex items-center transition-transform hover:scale-[1.02] shrink-0"
        >
          <div
            className={cn(
              "flex items-center transition-all",
              isScrolled
                ? "bg-white/95 px-2.5 py-1 rounded-full shadow-sm"
                : theme === "light"
                ? ""
                : "bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-sm"
            )}
          >
            <img
              src="/placevalue-logo.png"
              alt="PlaceValue"
              className={cn(
                "w-auto transition-all duration-300",
                isScrolled ? "h-6 sm:h-6.5" : "h-7 md:h-8"
              )}
            />
          </div>
        </Link>

        {/* Center: Nav Items */}
        <nav
          aria-label="Primary"
          className={cn(
            "hidden md:flex items-center rounded-full transition-all duration-300",
            isScrolled
              ? "p-1 gap-1"
              : "bg-brand-night/95 backdrop-blur-md p-1.5 shadow-md border border-white/10"
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === activeNav;
            return (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "rounded-full transition-all duration-200 whitespace-nowrap",
                  isScrolled
                    ? "px-3.5 py-1 text-[12px] font-medium"
                    : "px-4.5 py-1.5 text-[13px] font-medium",
                  isActive
                    ? "bg-white font-semibold text-brand-night shadow-sm"
                    : "text-white/85 hover:text-white hover:bg-white/10"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button */}
        <div className="hidden md:flex items-center shrink-0">
          <Link
            to="/contact"
            className={cn(
              orangePill,
              isScrolled
                ? "h-[34px] px-4 text-xs hover:shadow-[0_4px_14px_-2px_rgba(241,90,36,0.5)]"
                : "h-[42px] px-5 text-[13px] hover:shadow-[0_6px_18px_-4px_rgba(241,90,36,0.5)] hover:-translate-y-0.5"
            )}
          >
            Start a Project
            <IconArrowRight size={isScrolled ? 12 : 14} />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden shrink-0">
          <Link
            to="/contact"
            className={cn(
              orangePill,
              isScrolled ? "h-[30px] px-3 text-[11px]" : "h-[36px] px-3.5 text-xs"
            )}
          >
            Start a Project
            <IconArrowRight size={11} />
          </Link>
          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className={cn(
              "flex items-center justify-center rounded-full transition-all",
              isScrolled
                ? "size-8 bg-white/20 text-white"
                : "size-9 bg-brand-sand/80 backdrop-blur-md text-foreground"
            )}
          >
            {mobileOpen ? <IconX size={16} /> : <IconMenu2 size={16} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-[70px] left-4 right-4 rounded-2xl border border-white/15 bg-brand-night/95 backdrop-blur-2xl p-4 shadow-2xl md:hidden"
          >
            <nav className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = item.label === activeNav;
                return (
                  <Link
                    key={item.label}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition",
                      isActive
                        ? "bg-white text-brand-night"
                        : "text-white/85 hover:bg-white/10"
                    )}
                  >
                    {item.label}
                    {isActive && <span className="text-xs text-brand-orange">●</span>}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

