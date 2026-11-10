import { motion, useReducedMotion } from "framer-motion";
import { MotionNav } from "@/components/motion/MotionNav";
import { MaskedLine, ScrollReveal, WatermarkText, WordReveal } from "@/components/motion/MotionText";

export interface PlainHeroProps {
  activeNav: "About" | "Consultancy" | "TASKVERSE" | "Insights" | "Contact";
  badge: string;
  badgeRight?: string;
  watermarkText: string;
  line1: string;
  line2Outline: string;
  line3Prefix?: string;
  line3Highlight: string;
  supportingText: string;
  highlightTone?: "orange" | "blue";
  scrollTargetId?: string;
  children?: React.ReactNode;
}

/**
 * Plain Editorial Hero Component for secondary pages (About, Contact, Consultancy, TASKVERSE, Insights).
 * 
 * Recreates the editorial typography entrance demonstrated in the reference screen recording:
 * 1. Line 1: Solid bold display text sliding up out of a clipping mask
 * 2. Line 2: Outlined typography (.text-outline) sliding up with staggered timing
 * 3. Line 3: Accent-colored keyword with an animated hand-drawn curved underline drawing left-to-right
 * 4. Background: Oversized, low-opacity watermark text (WatermarkText)
 * 5. Supporting paragraph with smooth reveal
 * 6. Light theme sticky navbar (MotionNav)
 */
export function PlainHero({
  activeNav,
  badge,
  badgeRight,
  watermarkText,
  line1,
  line2Outline,
  line3Prefix,
  line3Highlight,
  supportingText,
  highlightTone = "orange",
  scrollTargetId,
  children,
}: PlainHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const accentColorClass = highlightTone === "blue" ? "text-brand-blue" : "text-brand-orange";

  return (
    <>
      {/* Light theme sticky morphing navigation */}
      <MotionNav activeNav={activeNav} theme="light" />

      <section className="relative overflow-hidden bg-background px-6 pt-24 pb-16 md:px-12 md:pt-32 md:pb-24 lg:px-16 xl:px-24">
        {/* Oversized background watermark typography */}
        <WatermarkText text={watermarkText} />

        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Top badges row */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase">
              {badge}
            </span>
            {badgeRight && (
              <span className="text-[11px] font-bold tracking-[0.25em] text-brand-muted uppercase">
                {badgeRight}
              </span>
            )}
          </div>

          {/* Headline matching the editorial typography in reference recording */}
          <div className="mt-8 sm:mt-10 max-w-5xl">
            <h1 className="font-display font-extrabold tracking-[-0.035em] text-foreground text-[44px] sm:text-[64px] md:text-[76px] lg:text-[88px] leading-[1.02]">
              {/* Line 1: Solid bold */}
              <MaskedLine delay={0.06}>
                <span className="block text-foreground">{line1}</span>
              </MaskedLine>

              {/* Line 2: Outlined typography */}
              <MaskedLine delay={0.18}>
                <span className="block text-outline mt-1 sm:mt-1.5">{line2Outline}</span>
              </MaskedLine>

              {/* Line 3: Bold text with accent word & animated hand-drawn underline */}
              <MaskedLine delay={0.30}>
                <span className="block mt-1 sm:mt-1.5">
                  {line3Prefix && <span className="text-foreground mr-3 sm:mr-4">{line3Prefix}</span>}
                  <span className={`relative inline-block ${accentColorClass}`}>
                    <span>{line3Highlight}</span>
                    {/* Animated curved underline drawing from left to right */}
                    <motion.svg
                      viewBox="0 0 240 18"
                      fill="none"
                      className={`absolute -bottom-2 sm:-bottom-3 left-0 w-full h-3 sm:h-4 ${accentColorClass} pointer-events-none overflow-visible`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.48, duration: 0.2 }}
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M 2 10 C 60 16, 140 4, 238 9"
                        stroke="currentColor"
                        strokeWidth="4"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: shouldReduceMotion ? 0 : 0.75,
                          delay: shouldReduceMotion ? 0 : 0.52,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                      />
                    </motion.svg>
                  </span>
                </span>
              </MaskedLine>
            </h1>

            {/* Supporting intro paragraph with word-by-word reveal */}
            <ScrollReveal delay={0.46}>
              <WordReveal className="mt-6 sm:mt-8 max-w-2xl text-[16px] sm:text-[18px] md:text-[19px] leading-[1.65] text-brand-body font-normal">
                {supportingText}
              </WordReveal>
            </ScrollReveal>

            {children}
          </div>
        </div>

        {/* Subtle vertical scroll cue at bottom right */}
        {scrollTargetId ? (
          <a
            href={`#${scrollTargetId}`}
            className="group absolute bottom-6 right-6 sm:right-12 lg:right-16 hidden sm:flex items-center gap-2.5 text-[10.5px] font-bold tracking-[2px] uppercase text-brand-muted/70 hover:text-foreground transition-colors"
          >
            <span>Scroll</span>
            <div className="flex h-5 w-3.5 items-start justify-center rounded-full border border-brand-line p-0.5 group-hover:border-foreground/60 transition">
              <div className="h-1.5 w-0.5 rounded-full bg-brand-orange animate-bounce" />
            </div>
          </a>
        ) : (
          <div className="absolute bottom-6 right-6 sm:right-12 lg:right-16 hidden sm:flex items-center gap-2.5 text-[10.5px] font-bold tracking-[2px] uppercase text-brand-muted/70">
            <span>Scroll</span>
            <div className="flex h-5 w-3.5 items-start justify-center rounded-full border border-brand-line p-0.5">
              <div className="h-1.5 w-0.5 rounded-full bg-brand-orange animate-bounce" />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
