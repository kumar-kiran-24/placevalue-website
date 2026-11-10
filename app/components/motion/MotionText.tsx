import { useEffect, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface MaskedLineProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  lineClassName?: string;
}

/**
 * Hero Line-by-Line Reveal with clipping mask effect.
 * Each line slides upward smoothly out of an overflow-hidden mask.
 */
export function MaskedLine({
  children,
  delay = 0,
  className,
  lineClassName,
}: MaskedLineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className={cn("overflow-hidden leading-none py-1", className)}>
      <motion.div
        initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { y: "115%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: shouldReduceMotion ? 0 : 0.65,
          delay: shouldReduceMotion ? 0 : delay,
          ease: [0.16, 1, 0.3, 1], // Smooth editorial cubic-bezier
        }}
        className={lineClassName}
      >
        {children}
      </motion.div>
    </div>
  );
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

/**
 * Scroll-triggered reveal animation for section headings, descriptions, and blocks.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  yOffset = 24,
  duration = 0.55,
  direction = "up",
}: ScrollRevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const getInitialPosition = () => {
    if (shouldReduceMotion) return { opacity: 1, x: 0, y: 0 };
    switch (direction) {
      case "down":
        return { opacity: 0, y: -yOffset, x: 0 };
      case "left":
        return { opacity: 0, x: yOffset, y: 0 };
      case "right":
        return { opacity: 0, x: -yOffset, y: 0 };
      case "none":
        return { opacity: 0, x: 0, y: 0 };
      case "up":
      default:
        return { opacity: 0, y: yOffset, x: 0 };
    }
  };

  return (
    <motion.div
      initial={getInitialPosition()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface DrawingUnderlineProps {
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Editorial golden underline that draws in smoothly from left to right.
 */
export function DrawingUnderline({
  delay = 0.5,
  duration = 0.85,
  className,
}: DrawingUnderlineProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : duration,
        delay: shouldReduceMotion ? 0 : delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ originX: 0 }}
      className={cn("h-[1.5px] bg-[#DFCFB6] will-change-transform", className)}
      aria-hidden="true"
    />
  );
}

interface WordRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: "p" | "span" | "div";
}

function toPlainText(node: React.ReactNode): string {
  if (typeof node === "string") return node;
  if (typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(toPlainText).join("");
  return "";
}

/**
 * Word-by-word animated plain text reveal.
 * Triggers when scrolled into the viewport, progressively animating each word
 * into view with smooth upward translation and subtle blur-to-sharp focus.
 */
export function WordReveal({
  children,
  className,
  delay = 0,
  stagger = 0.02,
  as: Component = "p",
}: WordRevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const text = toPlainText(children);
  const words = text.trim().split(/\s+/).filter(Boolean);

  if (shouldReduceMotion || words.length === 0) {
    return <Component className={className}>{children}</Component>;
  }

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.38,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const MotionComponent = (Component === "div"
    ? motion.div
    : Component === "span"
    ? motion.span
    : motion.p) as typeof motion.p;

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block mr-[0.28em] will-change-transform"
        >
          {word}
        </motion.span>
      ))}
    </MotionComponent>
  );
}

interface AnimatedLetterProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  targetOpacity: number;
  shouldReduceMotion: boolean;
}

function AnimatedLetter({
  char,
  index,
  total,
  progress,
  targetOpacity,
  shouldReduceMotion,
}: AnimatedLetterProps) {
  // Stagger window of 0.38 allows progressive overlapping reveals from left to right
  const windowSize = total > 1 ? 0.38 : 0.8;
  const start = total > 1 ? (index / (total - 1)) * (1 - windowSize) : 0;
  const end = Math.min(start + windowSize, 1);

  // Smooth upward translation from behind clipping container (110% -> 0%)
  const y = useTransform(
    progress,
    [start, end],
    shouldReduceMotion ? ["0%", "0%"] : ["110%", "0%"],
    { clamp: true }
  );

  // Opacity fade in from 0 to targetOpacity
  const opacity = useTransform(
    progress,
    [start, end],
    shouldReduceMotion ? [targetOpacity, targetOpacity] : [0, targetOpacity],
    { clamp: true }
  );

  // Subtle dimensional scaling effect (0.91 -> 1.0)
  const scale = useTransform(
    progress,
    [start, end],
    shouldReduceMotion ? [1, 1] : [0.91, 1],
    { clamp: true }
  );

  if (char === " ") {
    return <span className="inline-block w-[0.25em]">&nbsp;</span>;
  }

  return (
    <span className="inline-block overflow-hidden leading-[0.88] pt-2 pb-6 -mb-6 select-none">
      <motion.span
        style={{ y, opacity, scale }}
        className="inline-block will-change-transform transform-gpu"
      >
        {char}
      </motion.span>
    </span>
  );
}

interface WatermarkTextProps {
  text: string;
  className?: string;
  opacity?: number;
}

/**
 * Oversized, low-opacity background typography.
 * Progressively reveals individual letters from left to right as the section enters the viewport,
 * synchronised with scroll progress (scrub-based). Once fully revealed, stays stationary.
 */
export function WatermarkText({
  text,
  className,
  opacity = 0.05,
}: WatermarkTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgress = useMotionValue(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      scrollProgress.set(1);
      return;
    }

    const containerEl = containerRef.current;
    if (!containerEl) return;

    // Detect parent section
    const sectionEl =
      containerEl.closest("section") || containerEl.parentElement || containerEl;

    // Scroll container reference
    const mainEl = document.querySelector<HTMLElement>(".agent-native-app-main");

    let isVisible = false;
    let isFullyRevealed = false;

    const updateProgress = () => {
      if (isFullyRevealed) return;
      const rect = sectionEl.getBoundingClientRect();
      const viewportHeight = window.innerHeight || 800;

      // Enter point: when section top reaches 95% of viewport height
      const enterPoint = viewportHeight * 0.95;
      // Full reveal point: when section top reaches 25% of viewport height (comfortably in view)
      const fullPoint = viewportHeight * 0.25;

      const raw = (enterPoint - rect.top) / (enterPoint - fullPoint);
      const clamped = Math.min(Math.max(raw, 0), 1);
      scrollProgress.set(clamped);

      // Lock when fully revealed and top is past fullPoint
      if (clamped >= 1 && rect.top <= fullPoint) {
        isFullyRevealed = true;
      }
    };

    updateProgress();

    // Use IntersectionObserver to completely suspend scroll updates when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);
        if (isVisible) {
          updateProgress();
        }
      },
      { root: mainEl ?? null, rootMargin: "300px 0px" }
    );
    observer.observe(sectionEl);

    let ticking = false;
    const handleScroll = () => {
      if (!isVisible || isFullyRevealed) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          updateProgress();
          ticking = false;
        });
        ticking = true;
      }
    };

    if (mainEl) {
      mainEl.addEventListener("scroll", handleScroll, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      if (mainEl) {
        mainEl.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [scrollProgress, shouldReduceMotion]);

  const chars = text.split("");
  const totalLetters = chars.filter((c) => c !== " ").length || chars.length;

  let letterIndex = 0;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute -top-4 sm:-top-8 md:-top-12 lg:-top-16 left-0 right-0 overflow-hidden select-none z-0",
        className
      )}
    >
      <div className="flex items-center whitespace-nowrap pl-4 sm:pl-8 lg:pl-12 font-display font-black tracking-[-0.04em] uppercase text-current text-[110px] sm:text-[170px] md:text-[220px] lg:text-[270px] xl:text-[320px] leading-none select-none">
        {chars.map((char, i) => {
          const isSpace = char === " ";
          const currentIndex = isSpace ? letterIndex : letterIndex++;
          return (
            <AnimatedLetter
              key={`${char}-${i}`}
              char={char}
              index={currentIndex}
              total={totalLetters}
              progress={scrollProgress}
              targetOpacity={opacity}
              shouldReduceMotion={shouldReduceMotion ?? false}
            />
          );
        })}
      </div>
    </div>
  );
}
