import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TaskverseStatement {
  number: string;
  tag: string;
  watermark: string;
  leadWord: string;
  accentWord: string;
  accentColor: string; // Tailwind text class
  accentBg: string; // Tailwind bg class
  accentBorder: string;
  accentHex: string;
  description: string;
}

export const TASKVERSE_STATEMENTS: TaskverseStatement[] = [
  {
    number: "01",
    tag: "SKILL DIAGNOSTICS",
    watermark: "INTELLIGENCE",
    leadWord: "Assess",
    accentWord: "Skills.",
    accentColor: "text-[#1596D2]", // PlaceValue Blue
    accentBg: "bg-[#1596D2]",
    accentBorder: "border-[#1596D2]/40",
    accentHex: "#1596D2",
    description: "Adaptive evaluations calibrated to assess deep conceptual problem-solving and real competency in real time.",
  },
  {
    number: "02",
    tag: "PERFORMANCE INTELLIGENCE",
    watermark: "PERFORMANCE",
    leadWord: "Analyse",
    accentWord: "Performance.",
    accentColor: "text-[#F47735]", // Muted Orange
    accentBg: "bg-[#F47735]",
    accentBorder: "border-[#F47735]/40",
    accentHex: "#F47735",
    description: "Real-time visibility into student mastery trends, cohort velocity, early skill risks and curriculum benchmarks.",
  },
  {
    number: "03",
    tag: "ADAPTIVE PATHWAYS",
    watermark: "LEARNING",
    leadWord: "Personalise",
    accentWord: "Learning.",
    accentColor: "text-[#1596D2]", // PlaceValue Blue
    accentBg: "bg-[#1596D2]",
    accentBorder: "border-[#1596D2]/40",
    accentHex: "#1596D2",
    description: "Individualized learning sequences that dynamically adapt as learners build confidence and mastery.",
  },
  {
    number: "04",
    tag: "VERIFIED PORTFOLIOS",
    watermark: "POTENTIAL",
    leadWord: "Unlock",
    accentWord: "Potential.",
    accentColor: "text-[#F47735]", // Muted Orange
    accentBg: "bg-[#F47735]",
    accentBorder: "border-[#F47735]/40",
    accentHex: "#F47735",
    description: "Translates coursework and real project experience into immutable, employer-ready skill portfolios.",
  },
];

const PHRASE_DURATION_MS = 3800;

export function TaskverseHeroTypography({ className }: { className?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (shouldReduceMotion || isHovered) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TASKVERSE_STATEMENTS.length);
    }, PHRASE_DURATION_MS);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [shouldReduceMotion, isHovered]);

  const current = (TASKVERSE_STATEMENTS[activeIndex] ?? TASKVERSE_STATEMENTS[0])!;

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative w-full select-text flex flex-col justify-between",
        "py-4 sm:py-6 lg:py-8 lg:pl-6 xl:pl-10",
        className
      )}
    >
      {/* 1. ARCHITECTURAL BACKGROUND WATERMARK: Subtle oversized typography for depth */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-start overflow-hidden select-none -z-0"
        aria-hidden="true"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={`watermark-${current.watermark}`}
            initial={shouldReduceMotion ? { opacity: 0.035 } : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 0.04, scale: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="font-display font-black text-[72px] xs:text-[88px] sm:text-[120px] md:text-[145px] lg:text-[160px] xl:text-[180px] tracking-[-0.045em] text-foreground uppercase whitespace-nowrap leading-none pl-2 select-none"
          >
            {current.watermark}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* 2. ARCHITECTURAL DRAFTING ACCENTS & GUIDELINES: Elegant, non-cluttering lines */}
      <div className="pointer-events-none absolute -left-2 sm:-left-3 top-4 bottom-4 w-[1px] bg-gradient-to-b from-transparent via-[#DFCFB6]/60 to-transparent hidden lg:block" aria-hidden="true" />
      <div className="pointer-events-none absolute left-0 right-0 -top-2 h-[1px] bg-gradient-to-r from-transparent via-[#DFCFB6]/40 to-transparent hidden sm:block" aria-hidden="true" />

      {/* Subtle architectural coordinate markers */}
      <div className="pointer-events-none absolute -top-5 right-2 hidden sm:flex items-center gap-3 text-[10px] font-mono tracking-widest text-[#B5A593] select-none" aria-hidden="true">
        <span>+ ARCH.0{activeIndex + 1}</span>
        <span className="opacity-40">/</span>
        <span>PV//SYS.2026</span>
      </div>

      {/* 3. EDITORIAL TOP METADATA: Pill, Category, Step counter */}
      <div className="relative z-10 flex items-center justify-between pb-4 sm:pb-5 border-b border-brand-line/60">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <span className="font-mono text-xs sm:text-[13px] font-extrabold text-brand-orange tracking-widest">
            {current.number}
          </span>
          <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase text-brand-muted">
            / 04
          </span>
          <span className="h-3 w-[1px] bg-brand-line mx-0.5 sm:mx-1" />
          <AnimatePresence mode="wait">
            <motion.span
              key={`tag-${current.tag}`}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.3 }}
              className="text-[11px] sm:text-[12px] font-bold tracking-[0.2em] uppercase text-foreground"
            >
              {current.tag}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2">
          <span className="relative flex size-2">
            <span
              className={cn(
                "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
                current.accentBg
              )}
            />
            <span
              className={cn(
                "relative inline-flex rounded-full size-2",
                current.accentBg
              )}
            />
          </span>
          <span className="text-[10px] sm:text-[10.5px] font-bold tracking-[0.16em] text-brand-muted uppercase hidden xs:inline">
            Platform Focus
          </span>
        </div>
      </div>

      {/* 4. MAIN STATEMENT WITH CLIPPING-MASK REVEAL & STAGGERED WORDS */}
      <div className="relative z-10 my-6 sm:my-8 lg:my-10 min-h-[170px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              hidden: { y: "110%", opacity: 0 },
              visible: {
                y: "0%",
                opacity: 1,
                transition: {
                  duration: shouldReduceMotion ? 0.2 : 0.68,
                  ease: [0.16, 1, 0.3, 1], // Apple/editorial deceleration
                  staggerChildren: shouldReduceMotion ? 0 : 0.08,
                },
              },
              exit: {
                y: "-110%",
                opacity: 0,
                transition: {
                  duration: shouldReduceMotion ? 0.2 : 0.48,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
            className="flex flex-col"
          >
            {/* Statement headline with small numbered indicator beside */}
            <div className="flex items-baseline gap-2.5 xs:gap-3 sm:gap-4 md:gap-5 flex-wrap">
              {/* Small numbered indicator beside the statement */}
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
                className="font-mono text-xl xs:text-2xl sm:text-3xl md:text-4xl font-black text-brand-orange/90 tracking-tight shrink-0 select-none"
              >
                {current.number} —
              </motion.span>

              {/* Oversized Bold Typography with Highlighted Keywords */}
              <div className="font-display font-black text-[38px] xs:text-[46px] sm:text-[58px] md:text-[68px] lg:text-[72px] xl:text-[80px] leading-[0.98] tracking-[-0.038em] flex flex-wrap items-baseline gap-x-2.5 xs:gap-x-3.5 sm:gap-x-4">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className="inline-block text-foreground"
                >
                  {current.leadWord}
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 16 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
                  }}
                  className={cn("inline-block", current.accentColor)}
                >
                  {current.accentWord}
                </motion.span>
              </div>
            </div>

            {/* Editorial statement description */}
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.16 } },
              }}
              className="mt-4 sm:mt-5 max-w-xl text-[14.5px] xs:text-[15.5px] sm:text-[16.5px] leading-[1.62] text-brand-body font-normal"
            >
              {current.description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 5. THIN ANIMATED PROGRESS LINE & STATEMENT CONTROLS */}
      <div className="relative z-10 pt-5 sm:pt-6 border-t border-brand-line/60">
        <div className="flex items-center gap-2 sm:gap-3">
          {TASKVERSE_STATEMENTS.map((item, idx) => {
            const isActive = idx === activeIndex;
            const isCompleted = idx < activeIndex;

            return (
              <button
                key={item.number}
                type="button"
                onClick={() => setActiveIndex(idx)}
                aria-label={`Jump to statement ${item.number}: ${item.leadWord} ${item.accentWord}`}
                className="group relative flex-1 flex flex-col gap-2 py-1 cursor-pointer text-left focus:outline-none"
              >
                {/* Thin animated line */}
                <div className="relative h-[2.5px] sm:h-[3px] w-full rounded-full bg-brand-line/70 overflow-hidden transition-all group-hover:h-[4px]">
                  {isCompleted && (
                    <div className="h-full w-full bg-foreground/60 rounded-full" />
                  )}
                  {isActive && (
                    <motion.div
                      key={`progress-${idx}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{
                        duration: shouldReduceMotion || isHovered ? 0 : PHRASE_DURATION_MS / 1000,
                        ease: "linear",
                      }}
                      style={{ originX: 0 }}
                      className={cn("h-full w-full rounded-full", item.accentBg)}
                    />
                  )}
                </div>

                {/* Step indicator label */}
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "font-mono text-[10px] sm:text-[11px] font-bold tracking-wider transition-colors",
                      isActive
                        ? "text-foreground font-black"
                        : "text-brand-muted/70 group-hover:text-foreground"
                    )}
                  >
                    {item.number}
                  </span>
                  <span
                    className={cn(
                      "text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider hidden md:inline transition-colors",
                      isActive
                        ? item.accentColor
                        : "text-transparent group-hover:text-brand-muted/50"
                    )}
                  >
                    {item.leadWord}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
