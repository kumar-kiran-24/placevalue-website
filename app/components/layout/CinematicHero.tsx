import { motion, useReducedMotion } from "framer-motion";
import { MotionNav } from "@/components/motion/MotionNav";
import { DrawingUnderline, MaskedLine, ScrollReveal } from "@/components/motion/MotionText";

export const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Consultancy", to: "/consultancy" },
  { label: "TASKVERSE", to: "/taskverse" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

export interface CinematicHeroProps {
  activeNav: "About" | "Consultancy" | "TASKVERSE" | "Insights" | "Contact";
  label: string;
  headlineLine1: string;
  headlineLine2?: string;
  headlineHighlight?: string;
  supportingSentence: string;
  scrollTargetId?: string;
}

const DEFAULT_TOP_LABELS: Record<string, string> = {
  About: "ABOUT PLACEVALUE • PURPOSE • PEOPLE",
  Consultancy: "STRATEGIC CONSULTANCY • INNOVATION",
  TASKVERSE: "TASKVERSE PLATFORM • INTELLIGENCE",
  Insights: "THOUGHT LEADERSHIP • PERSPECTIVES",
  Contact: "CONNECT WITH PLACEVALUE • PARTNERSHIP",
};

/**
 * Editorial Cinematic Hero for Secondary Pages
 *
 * Implements the diagonal editorial composition matching Home:
 * 1. TOP-RIGHT: Elegant editorial label with warm ivory typography & left-to-right drawing golden underline.
 * 2. BOTTOM-LEFT: Grand headline with line-by-line staggered upward clipping masks, supporting sentence,
 *    and drawing golden underline.
 * 3. CENTER: Crystal clear and unobstructed view of the continuous rotating 3D glass sculpture.
 * 4. DYNAMIC STICKY NAVBAR: Preserves the PlaceValue logo, navigation links, and Start a Project CTA.
 */
export function CinematicHero({
  activeNav,
  label,
  headlineLine1,
  headlineLine2,
  headlineHighlight,
  supportingSentence,
  scrollTargetId,
}: CinematicHeroProps) {
  const shouldReduceMotion = useReducedMotion();
  const displayLabel = label.includes("•")
    ? label
    : (DEFAULT_TOP_LABELS[activeNav] || label.toUpperCase());

  return (
    <>
      {/* Dynamic Sticky Morphing Navigation: transforms from expanded to compact floating pill on scroll */}
      <MotionNav activeNav={activeNav} theme="dark" />

      <section className="relative w-full h-[100svh] min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0A0D11] text-white">
        {/* Cinematic Continuous MP4 Video Background spanning full screen */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-video-fallback.jpg"
            className="hero-bg-video motion-reduce:hidden absolute inset-0 h-full w-full object-cover object-center"
          >
            <source src="/Glass_sculpture_rotating_in_space_e9e1fb0a_1080p.mp4" type="video/mp4" />
            <img
              src="/hero-video-fallback.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover object-center"
            />
          </video>

          {/* Static fallback for reduced motion */}
          <img
            src="/hero-video-fallback.jpg"
            alt=""
            aria-hidden="true"
            className="hero-bg-fallback hidden motion-reduce:block absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* Subtle, restrained cinematic vignettes: keeping center clear for the rotating 3D glass sculpture */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/65 pointer-events-none" />
          {/* Top-Right corner vignette for editorial label legibility */}
          <div className="absolute top-0 right-0 w-full max-w-xl h-72 bg-gradient-to-bl from-black/75 via-black/25 to-transparent pointer-events-none" />
          {/* Bottom-Left corner vignette for headline legibility */}
          <div className="absolute bottom-0 left-0 w-full max-w-2xl h-[420px] bg-gradient-to-tr from-black/85 via-black/40 to-transparent pointer-events-none" />
        </div>

        {/* 1. TOP-RIGHT FLOATING EDITORIAL COMPOSITION */}
        <div className="relative z-10 w-full flex justify-end px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 pt-24 sm:pt-28 md:pt-32 lg:pt-36">
          <div className="flex flex-col items-end text-right">
            <motion.div
              initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.75,
                delay: shouldReduceMotion ? 0 : 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-end"
            >
              <span className="text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold tracking-[0.28em] text-[#F5EFEB] uppercase font-sans">
                {displayLabel}
              </span>
            </motion.div>
            {/* Thin muted-gold underline directly beneath top-right label */}
            <DrawingUnderline
              delay={0.45}
              duration={0.85}
              className="mt-2.5 sm:mt-3 h-[1.5px] w-48 sm:w-60 md:w-72 bg-gradient-to-r from-transparent via-[#DFCFB6] to-[#DFCFB6]"
            />
          </div>
        </div>

        {/* 2. BOTTOM-LEFT FLOATING HEADLINE COMPOSITION */}
        <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 pb-12 sm:pb-16 md:pb-20 lg:pb-24 mt-auto">
          <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-start text-left">
            {/* Distinctive Headline with Staggered Line-by-Line Reveal out of clipping mask */}
            <h1 className="font-display font-extrabold tracking-[-0.035em] text-white text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] xl:text-[80px] leading-[1.02]">
              <MaskedLine delay={0.1}>
                <span className="block text-[#F5EFEB]">{headlineLine1}</span>
              </MaskedLine>
              {headlineLine2 && (
                <MaskedLine delay={0.22}>
                  <span className="block text-[#F5EFEB]/95 mt-1 sm:mt-1.5">
                    {headlineLine2}{" "}
                    {headlineHighlight && (
                      <span className="text-brand-orange animate-text-shimmer">
                        {headlineHighlight}
                      </span>
                    )}
                  </span>
                </MaskedLine>
              )}
            </h1>

            {/* Single short supporting sentence with ScrollReveal */}
            <ScrollReveal delay={0.46}>
              <p className="mt-4 sm:mt-5 max-w-[560px] text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-[1.6] text-[#F5EFEB]/85 font-normal">
                {supportingSentence}
              </p>
            </ScrollReveal>

            {/* Thin elegant golden underline directly beneath supporting sentence */}
            <DrawingUnderline
              delay={0.62}
              duration={0.9}
              className="mt-6 sm:mt-7 h-[1.5px] w-36 sm:w-52 md:w-64 bg-gradient-to-r from-[#DFCFB6] via-[#DFCFB6]/80 to-transparent"
            />
          </div>
        </div>

        {/* Floating Scroll Indicator on the bottom right */}
        {scrollTargetId && (
          <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16 z-20 hidden sm:flex items-center gap-2.5">
            <a
              href={`#${scrollTargetId}`}
              className="group inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[2px] uppercase text-[#DFCFB6]/70 hover:text-white transition-colors"
            >
              <span>Scroll</span>
              <div className="flex h-5 w-3.5 items-start justify-center rounded-full border border-[#DFCFB6]/30 p-0.5 group-hover:border-white/60 transition">
                <div className="h-1.5 w-0.5 rounded-full bg-brand-orange animate-bounce" />
              </div>
            </a>
          </div>
        )}
      </section>
    </>
  );
}
