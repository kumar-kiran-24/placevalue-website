import { useState, useEffect } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconArrowRight, IconMenu2, IconX } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { useAppScroll } from "./useAppScroll";

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Consultancy", to: "https://consultancy.placevalue.in", external: true },
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

  // Prevent background scrolling and support Escape key when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMobileOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [mobileOpen]);

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
            "hidden lg:flex items-center rounded-full transition-all duration-300",
            isScrolled
              ? "p-1 gap-1"
              : "bg-brand-night/95 backdrop-blur-md p-1.5 shadow-md border border-white/10"
          )}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === activeNav;
            const isExternal = "external" in item && item.external;
            const navLinkClass = cn(
              "rounded-full transition-all duration-200 whitespace-nowrap",
              isScrolled
                ? "px-3.5 py-1 text-[12px] font-medium"
                : "px-4.5 py-1.5 text-[13px] font-medium",
              isActive
                ? "bg-white font-semibold text-brand-night shadow-sm"
                : "text-white/85 hover:text-white hover:bg-white/10"
            );

            if (isExternal) {
              return (
                <a
                  key={item.label}
                  href={item.to}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={navLinkClass}
                >
                  {item.label}
                </a>
              );
            }

            return (
              <Link
                key={item.label}
                to={item.to}
                className={navLinkClass}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: CTA Button - Directs to Consultancy Project Enquiry */}
        <div className="hidden lg:flex items-center shrink-0">
          <a
            href="https://consultancy.placevalue.in/contact"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              orangePill,
              isScrolled
                ? "h-[34px] px-4 text-xs hover:shadow-[0_4px_14px_-2px_rgba(241,90,36,0.5)]"
                : "h-[42px] px-5 text-[13px] hover:shadow-[0_6px_18px_-4px_rgba(241,90,36,0.5)] hover:-translate-y-0.5"
            )}
          >
            Start a Project
            <IconArrowRight size={isScrolled ? 12 : 14} />
          </a>
        </div>

        {/* Mobile / Tablet controls */}
        <div className="flex items-center gap-2 lg:hidden shrink-0">
          <a
            href="https://consultancy.placevalue.in/contact"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              orangePill,
              isScrolled ? "h-[30px] px-3 text-[11px]" : "h-[36px] px-3.5 text-xs"
            )}
          >
            Start a Project
            <IconArrowRight size={11} />
          </a>
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

      {/* Full-Screen Mobile / Tablet Navigation Overlay matching reference design */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] pointer-events-auto bg-[#FDFBF7]/98 backdrop-blur-2xl flex flex-col justify-between px-6 py-6 sm:px-8 sm:py-8 lg:hidden select-none"
          >
            {/* Top pill bar: Logo on left, Close (X) button on right */}
            <div className="w-full max-w-sm mx-auto flex items-center justify-between rounded-full border border-black/10 bg-white/95 px-5 py-2.5 sm:py-3 shadow-sm">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className="flex items-center"
              >
                <img
                  src="/placevalue-logo.png"
                  alt="PlaceValue"
                  className="h-6 sm:h-7 w-auto"
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close navigation menu"
                className="flex items-center justify-center size-8 rounded-full text-foreground hover:bg-black/5 transition-colors"
              >
                <IconX size={20} />
              </button>
            </div>

            {/* Centered navigation items stack in bold uppercase typography */}
            <nav className="flex flex-col items-center justify-center gap-5 sm:gap-6 my-auto py-8">
              {NAV_ITEMS.map((item, index) => {
                const isActive = item.label === activeNav;
                const isExternal = "external" in item && item.external;
                const linkClass = cn(
                  "font-display text-[26px] sm:text-[30px] font-black uppercase tracking-[-0.01em] transition-colors",
                  isActive
                    ? "text-brand-orange"
                    : "text-[#0A0D11] hover:text-brand-orange"
                );

                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: shouldReduceMotion ? 0 : 0.04 * (index + 1),
                      duration: 0.28,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {isExternal ? (
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileOpen(false)}
                        className={linkClass}
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        onClick={() => setMobileOpen(false)}
                        className={linkClass}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom: Solid Black CTA Pill Button */}
            <div className="w-full flex justify-center pb-4 sm:pb-6">
              <a
                href="https://consultancy.placevalue.in/contact"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="w-full max-w-[280px] h-[52px] rounded-full bg-black text-white font-display font-extrabold text-[15px] tracking-wider uppercase flex items-center justify-center shadow-lg active:scale-95 hover:bg-neutral-900 transition-all"
              >
                Start a Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

