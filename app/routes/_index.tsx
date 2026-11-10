import { Link } from "react-router";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconBulb,
  IconChartBar,
  IconCheck,
  IconCode,
  IconCpu,
  IconDeviceDesktop,
  IconFileCertificate,
  IconLock,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconSchool,
  IconSettings,
  IconShieldCheck,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { MotionNav } from "@/components/motion/MotionNav";
import { FaqSection } from "@/components/ui/FaqSection";
import {
  DrawingUnderline,
  MaskedLine,
  ScrollReveal,
  WatermarkText,
  WordReveal,
} from "@/components/motion/MotionText";

export function meta() {
  return [
    { title: "PlaceValue — Empowering Education for a Brighter Tomorrow" },
    {
      name: "description",
      content:
        "We blend technology, strategy and innovation to help educational institutions and organisations create lasting impact.",
    },
  ];
}

type TablerIcon = typeof IconCode;
type Tone = "orange" | "blue";

const TONE_BG: Record<Tone, string> = {
  orange: "bg-brand-orange",
  blue: "bg-brand-blue",
};

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Consultancy", to: "/consultancy" },
  { label: "TASKVERSE", to: "/taskverse" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
];

const SERVICES: {
  icon: TablerIcon;
  tone: Tone;
  title: string;
  body: string;
  tag: string;
  highlight: string;
}[] = [
  {
    icon: IconDeviceDesktop,
    tone: "orange",
    title: "Technology Consulting",
    body: "We define modern technology strategies that align people, process and systems — so institutions can move faster, scale with confidence and deliver better outcomes.",
    tag: "Strategy",
    highlight: "Roadmaps, architecture and implementation planning",
  },
  {
    icon: IconCode,
    tone: "blue",
    title: "Software Development",
    body: "We build custom digital products, platforms and tools that solve real-world problems — with clarity, quality and a focus on user experience.",
    tag: "Delivery",
    highlight: "Products, platforms and tools built for real-world use",
  },
  {
    icon: IconSettings,
    tone: "orange",
    title: "AI & Automation",
    body: "We apply intelligent systems to automate workflows, improve decision-making and unlock new efficiency — without losing the human insight that matters.",
    tag: "Intelligence",
    highlight: "Automation, analytics and smarter workflows",
  },
  {
    icon: IconSchool,
    tone: "blue",
    title: "Student Opportunities",
    body: "We connect students with real-world projects, mentorship and industry exposure — helping the next generation build practical skills and lasting confidence.",
    tag: "Talent",
    highlight: "Internships, mentorship and real-world learning",
  },
];

const PILLARS: { icon: TablerIcon; title: string; body: string }[] = [
  {
    icon: IconShieldCheck,
    title: "Trusted by Institutions",
    body: "Partnering with leading universities and enterprises to deliver lasting value.",
  },
  {
    icon: IconUsers,
    title: "Student-First Approach",
    body: "Empowering the next generation through mentorship, internships and live projects.",
  },
  {
    icon: IconBulb,
    title: "Innovation-Driven",
    body: "Applying emerging technology to create smarter systems and better outcomes.",
  },
];

const HERO_STATS = [
  { value: "50+", label: "Projects Delivered" },
  { value: "100+", label: "Students Empowered" },
  { value: "4+", label: "Years of Excellence" },
];

const IMPACT_METRICS = [
  { value: "50+", label: "Projects Delivered", tone: "text-foreground" },
  { value: "20+", label: "Happy Clients", tone: "text-brand-blue" },
  { value: "100+", label: "Students Empowered", tone: "text-brand-orange" },
  { value: "4+", label: "Years of Experience", tone: "text-foreground" },
];

const FOOTER_QUICK_LINKS = NAV_ITEMS;

const FOOTER_SERVICES = [
  "Technology Consulting",
  "Software Development",
  "AI & Automation",
  "Cloud & DevOps",
  "Student Programmes",
];

const primaryPill =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-night text-sm font-bold text-white";
const orangePill =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange text-sm font-bold text-white";

function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/placevalue-logo.png"
      alt="PlaceValue"
      className={cn("h-8 md:h-9 w-auto", className)}
    />
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase">
      {children}
    </span>
  );
}

function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="hero"
      data-node-id="3311:1376"
      className="relative w-full h-[100svh] min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0A0D11] text-white"
    >
      {/* Animated MP4 Video Background spanning 100% full screen */}
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

        {/* Static fallback image when reduced motion is preferred */}
        <img
          src="/hero-video-fallback.jpg"
          alt=""
          aria-hidden="true"
          className="hero-bg-fallback hidden motion-reduce:block absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Subtle, restrained cinematic vignettes: keeping the center unobstructed so the 3D rotating glass sculpture remains the primary focal point */}
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
              EDUCATION • TECHNOLOGY • INNOVATION
            </span>
          </motion.div>
          {/* Thin muted-gold underline directly beneath top-right text */}
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
          {/* Main Headline with Staggered Line-by-Line Reveal out of clipping mask */}
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-white text-[38px] sm:text-[50px] md:text-[62px] lg:text-[72px] xl:text-[80px] leading-[1.02]">
            <MaskedLine delay={0.1}>
              <span className="block text-[#F5EFEB]">Empowering</span>
            </MaskedLine>
            <MaskedLine delay={0.22}>
              <span className="block text-[#F5EFEB]/95">Education for a</span>
            </MaskedLine>
            <MaskedLine delay={0.34}>
              <span className="block text-brand-orange animate-text-shimmer">
                Brighter Tomorrow.
              </span>
            </MaskedLine>
          </h1>

          {/* Short supporting sentence underneath */}
          <ScrollReveal delay={0.46}>
            <p className="mt-4 sm:mt-5 max-w-[540px] text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-[1.6] text-[#F5EFEB]/85 font-normal">
              We blend technology, strategy and innovation to help educational
              institutions and organisations create lasting impact.
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
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16 z-20 hidden sm:flex items-center gap-2.5">
        <a
          href="#services"
          className="group inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[2px] uppercase text-[#DFCFB6]/70 hover:text-white transition-colors"
        >
          <span>Scroll</span>
          <div className="flex h-5 w-3.5 items-start justify-center rounded-full border border-[#DFCFB6]/30 p-0.5 group-hover:border-white/60 transition">
            <div className="h-1.5 w-0.5 rounded-full bg-brand-orange animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}

function ServiceCard({
  icon: Icon,
  tone,
  title,
  body,
  tag,
  highlight,
  index = 0,
}: (typeof SERVICES)[number] & { index?: number }) {
  const isOrange = tone === "orange";
  return (
    <ScrollReveal delay={index * 0.08} yOffset={20}>
      <article className="group flex flex-col justify-between h-full rounded-[22px] border border-brand-line/60 bg-brand-sand p-6 lg:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-black/15">
        <div>
          <span
            className={cn(
              "flex size-12 items-center justify-center rounded-[14px] text-white shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6",
              isOrange ? "bg-brand-orange" : "bg-brand-blue",
            )}
          >
            <Icon size={22} stroke={2} />
          </span>
          <h3 className="mt-4 font-display text-[20px] lg:text-[22px] font-extrabold tracking-[-0.02em] text-foreground transition-colors group-hover:text-brand-night">
            {title}
          </h3>
          <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.55] text-brand-body">
            {body}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-2">
          <span
            className={cn(
              "rounded-full px-3 py-1 text-[11px] font-bold text-white tracking-wide uppercase shadow-sm",
              isOrange ? "bg-brand-orange" : "bg-brand-blue",
            )}
          >
            {tag}
          </span>
          <span className="text-xs leading-tight text-brand-muted font-medium">
            {highlight}
          </span>
        </div>
      </article>
    </ScrollReveal>
  );
}

function Services() {
  return (
    <section
      id="services"
      data-node-id="3311:1416"
      className="relative overflow-hidden bg-background pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 lg:px-16 xl:px-24"
    >
      {/* Oversized background watermark typography */}
      <WatermarkText text="SERVICES" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] items-start gap-10 lg:gap-14">
        {/* Left info column with ScrollReveal */}
        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-md">
            <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase">
              OUR SERVICES
            </span>
            <h2 className="font-display text-[38px] sm:text-[46px] lg:text-[50px] leading-[1.0] font-extrabold tracking-[-0.03em] text-foreground">
              <span>Expertise that</span>
              <br />
              <span className="text-outline">drives impact.</span>
            </h2>
            <WordReveal className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-brand-body">
              From strategy to delivery, we help institutions and organisations
              build modern technology foundations, smarter systems and
              meaningful opportunities for students.
            </WordReveal>
          </div>
        </ScrollReveal>

        {/* 2x2 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={service.title} index={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section
      data-node-id="3311:1470"
      className="relative overflow-hidden bg-background px-6 md:px-12 lg:px-16 xl:px-24 py-16 md:py-[88px]"
    >
      {/* Oversized background watermark typography */}
      <WatermarkText text="PURPOSE" />

      <ScrollReveal className="relative z-10">
        <div>
          <SectionLabel>ABOUT PLACEVALUE</SectionLabel>
          <h2 className="mt-6 font-display text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.02] font-extrabold tracking-[-0.03em] text-foreground">
            <span>A Consultancy With</span>
            <br />
            <span>a </span>
            <span className="text-outline">Bigger Purpose.</span>
          </h2>
          <WordReveal className="mt-5 max-w-[860px] text-base leading-[27px] text-brand-body">
            We partner with organisations and educational institutions to solve
            complex challenges through technology — while creating meaningful
            opportunities for students to learn, build and grow in real
            environments.
          </WordReveal>

          <ul className="mt-8 flex flex-col max-w-[860px]">
            {PILLARS.map(({ icon: Icon, title, body }, idx) => (
              <ScrollReveal key={title} delay={idx * 0.08} yOffset={16}>
                <li className="flex items-start gap-3 border-t border-brand-line py-4">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-brand-sand">
                    <Icon size={16} stroke={1.75} />
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-[13px] leading-4 font-bold text-foreground">
                      {title}
                    </h3>
                    <p className="text-xs leading-[15px] text-brand-muted">{body}</p>
                  </div>
                </li>
              </ScrollReveal>
            ))}
          </ul>

          <Link
            to="/about"
            className={cn(
              primaryPill,
              "mt-7 h-[50px] w-full max-w-[860px] justify-center text-sm font-bold shadow-sm hover:bg-black transition-colors",
            )}
          >
            Know More About Us
            <IconArrowRight size={14} />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function Impact() {
  return (
    <section
      data-node-id="3311:1274"
      className="px-6 pb-16 md:hidden"
    >
      <ScrollReveal>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[20px] border border-brand-line bg-brand-line">
          {IMPACT_METRICS.map((metric) => (
            <div key={metric.label} className="flex flex-col gap-1 bg-background p-4">
              <span
                className={cn(
                  "font-display text-[40px] leading-none font-extrabold tracking-[-1.5px]",
                  metric.tone,
                )}
              >
                {metric.value}
              </span>
              <span className="text-xs text-brand-body">{metric.label}</span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}

function TaskverseSection() {
  return (
    <section
      data-node-id="3311:1505"
      className="relative overflow-hidden bg-brand-night px-6 md:px-12 lg:px-16 xl:px-24 py-20 text-white md:py-28 border-t border-white/10"
    >
      {/* Architectural background watermark typography */}
      <WatermarkText text="TASKVERSE" opacity={0.035} />

      {/* Ambient background glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-[420px] rounded-full bg-brand-blue/20 blur-[100px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 size-[380px] rounded-full bg-brand-orange/15 blur-[100px]"
      />

      <div className="relative z-10 grid gap-14 lg:grid-cols-12 lg:gap-16 items-center">
        {/* Left Column: Editorial Capability Narrative */}
        <ScrollReveal className="flex flex-col lg:col-span-6">
          <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-brand-blue uppercase">
            <span className="size-1.5 rounded-full bg-brand-blue animate-pulse" />
            PROPRIETARY TECHNOLOGY ARCHITECTURE
          </span>

          <h2 className="mt-6 font-display font-black text-[38px] sm:text-[46px] md:text-[52px] leading-[1.04] tracking-[-0.035em] text-white">
            <span>Reimagining Capability</span>
            <br />
            <span className="text-outline text-white/90">Beyond Standardized Testing.</span>
          </h2>

          <p className="mt-5 text-[15.5px] sm:text-[16.5px] leading-[1.68] text-white/75 font-normal">
            TASKVERSE is PlaceValue&apos;s proprietary assessment architecture. Engineered for universities,
            enterprises, and skill academies, it replaces static multiple-choice examinations with adaptive,
            real-time diagnostic pathways and verifiable execution portfolios.
          </p>

          {/* Three Core Architectural Capabilities */}
          <div className="mt-8 space-y-4 border-t border-white/10 pt-6">
            <div className="flex items-start gap-3.5">
              <div className="mt-1 flex size-5 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue shrink-0">
                <IconCheck size={12} stroke={3} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Adaptive Diagnostic Engine</h4>
                <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-white/60">
                  Calibrates evaluation difficulty dynamically in response to deep problem-solving capability.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="mt-1 flex size-5 items-center justify-center rounded-full bg-brand-orange/20 text-brand-orange shrink-0">
                <IconCheck size={12} stroke={3} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Cryptographic Evidence Transcripts</h4>
                <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-white/60">
                  Translates student code commits, architectural designs, and project work into tamper-evident credentials.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="mt-1 flex size-5 items-center justify-center rounded-full bg-brand-blue/20 text-brand-blue shrink-0">
                <IconCheck size={12} stroke={3} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white tracking-tight">Institutional Telemetry & Standards</h4>
                <p className="mt-0.5 text-xs sm:text-[13px] leading-relaxed text-white/60">
                  Provides leadership with real-time cohort mastery metrics, risk indicators, and curriculum alignment.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/taskverse"
              className="inline-flex h-[48px] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-bold text-brand-night transition-all hover:bg-[#F5EFEB] hover:scale-[1.02] shadow-md"
            >
              <span>Explore Platform Architecture</span>
              <IconArrowUpRight size={15} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-[48px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white/90 transition hover:bg-white/10"
            >
              Request Institutional Brief
            </Link>
          </div>
        </ScrollReveal>

        {/* Right Column: Architectural Telemetry Blueprint Canvas */}
        <ScrollReveal delay={0.15} yOffset={25} className="lg:col-span-6">
          <div className="relative rounded-[26px] border border-white/12 bg-white/[0.03] backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)]">
            {/* Top Bar of Blueprint */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs">
              <div className="flex items-center gap-2.5">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-mono text-[11px] font-semibold text-white tracking-wider uppercase">
                  TASKVERSE · EVALUATION ENGINE
                </span>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 font-mono text-[10px] text-white/60">
                LTI 1.3 · SECURE RUNTIME
              </span>
            </div>

            {/* Live Module 1: Diagnostic Capability Stream */}
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-white/60 font-medium">
                <span className="flex items-center gap-2 text-white">
                  <IconCpu size={15} className="text-brand-blue" />
                  <span>Adaptive Evaluation Stream</span>
                </span>
                <span className="font-mono text-emerald-400 text-[11px]">Calibrating in Real-Time</span>
              </div>

              <div className="mt-3.5 flex items-center justify-between text-sm">
                <span className="font-bold text-white tracking-tight">Systems Engineering & Algorithmic Design</span>
                <span className="font-mono text-xs font-semibold text-brand-orange">Level 8.9 / 10</span>
              </div>

              {/* Progress Calibration Bar */}
              <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full rounded-full bg-gradient-to-r from-brand-blue via-brand-blue to-brand-orange w-[88%]" />
              </div>
              <div className="mt-2 flex justify-between text-[10px] font-mono text-white/40">
                <span>Core Competency: Validated</span>
                <span>Response Depth: High Velocity</span>
              </div>
            </div>

            {/* Live Module 2: Cryptographic Credential Record */}
            <div className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-4 sm:p-5">
              <div className="flex items-center justify-between text-xs text-white/60 font-medium">
                <span className="flex items-center gap-2 text-white">
                  <IconFileCertificate size={15} className="text-brand-orange" />
                  <span>Verifiable Execution Artifact</span>
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-brand-blue text-[11px]">
                  <IconShieldCheck size={13} /> Immutable SHA-256
                </span>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Production Microservice Architecture</p>
                  <p className="mt-0.5 text-xs text-white/60 font-mono">42 Verified Commits · Peer Reviewed</p>
                </div>
                <span className="rounded-full bg-emerald-500/15 border border-emerald-500/30 px-3 py-1 text-[11px] font-bold text-emerald-400">
                  Verified
                </span>
              </div>
            </div>

            {/* Three Minimal Institutional Metrics */}
            <div className="mt-4 grid grid-cols-3 gap-3 border-t border-white/10 pt-4 text-center">
              <div className="rounded-xl bg-white/[0.02] border border-white/5 py-3 px-2">
                <p className="font-display text-xl sm:text-2xl font-extrabold text-white">95.4%</p>
                <p className="mt-0.5 text-[10.5px] uppercase tracking-wider text-white/50 font-semibold">Mastery Rate</p>
              </div>
              <div className="rounded-xl bg-white/[0.02] border border-white/5 py-3 px-2">
                <p className="font-display text-xl sm:text-2xl font-extrabold text-brand-blue">3.2×</p>
                <p className="mt-0.5 text-[10.5px] uppercase tracking-wider text-white/50 font-semibold">Verification</p>
              </div>
              <div className="rounded-xl bg-white/[0.02] border border-white/5 py-3 px-2">
                <p className="font-display text-xl sm:text-2xl font-extrabold text-brand-orange">100%</p>
                <p className="mt-0.5 text-[10.5px] uppercase tracking-wider text-white/50 font-semibold">Audit Trail</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProjectCta() {
  return (
    <section
      data-node-id="3311:1556"
      className="relative overflow-hidden border-t border-white/10 bg-brand-night px-6 md:px-12 lg:px-16 xl:px-24 py-20 text-center text-white md:py-[88px]"
    >
      {/* Oversized background watermark typography */}
      <WatermarkText text="COLLABORATE" />

      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-16 size-[320px] rounded-full bg-brand-blue/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 size-[280px] rounded-full bg-brand-orange/20 blur-[90px]"
      />

      <ScrollReveal className="relative z-10 mx-auto flex max-w-[860px] flex-col items-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-[11px] font-bold tracking-[2px] text-white/60">
          LET&apos;S BUILD TOGETHER
        </span>
        <h2 className="mt-8 font-display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[74px] leading-[0.98] font-extrabold tracking-[-0.03em] text-white">
          <span className="block">Ready to Start Your</span>
          <span className="block text-outline">Next Project?</span>
        </h2>
        <p className="mt-6 max-w-[560px] text-base leading-6 text-white/60 md:text-[17px] md:leading-[26px]">
          Let&apos;s collaborate to bring your ideas to life — whether it&apos;s
          a technology solution, a consulting engagement, or a student
          programme.
        </p>
        <div className="mt-10 flex w-full flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/contact"
            className={cn(orangePill, "h-[50px] w-full sm:w-[220px] justify-center text-sm font-bold shadow-lg shadow-brand-orange/20")}
          >
            Start a Project
            <IconArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-[50px] w-full sm:w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-bold text-white hover:bg-white/10 transition"
          >
            Get In Touch
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function FooterColumn({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-display text-[13px] leading-4 font-bold text-white">
        {title}
      </h3>
      {children}
    </div>
  );
}

function SiteFooter() {
  return (
    <footer
      data-node-id="3311:1568"
      className="border-t border-white/10 bg-brand-footer px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-10 text-white"
    >
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex max-w-[300px] flex-col gap-5">
          <Logo />
          <div className="text-[13px] leading-[21px] text-brand-muted">
            <p>Technology · Consulting · Innovation</p>
            <p className="mt-3">
              Empowering education and organisations through technology and
              strategic insight.
            </p>
          </div>
          <div className="flex gap-2">
            {[
              { icon: IconBrandLinkedin, label: "LinkedIn" },
              { icon: IconBrandX, label: "X" },
              { icon: IconBrandYoutube, label: "YouTube" },
              { icon: IconBrandInstagram, label: "Instagram" },
            ].map(({ icon: Icon, label }) => (
              <button
                key={label}
                type="button"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-brand-muted hover:text-white transition"
              >
                <Icon size={16} stroke={1.75} />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 md:flex md:gap-[72px]">
          <FooterColumn title="Quick Links">
            {FOOTER_QUICK_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "text-[13px] leading-[18px] text-brand-muted hover:text-white transition",
                  item.label === "Home" && "text-brand-blue",
                )}
              >
                {item.label}
              </Link>
            ))}
          </FooterColumn>
          <FooterColumn title="Our Services">
            {FOOTER_SERVICES.map((service) => (
              <Link
                key={service}
                to="/consultancy"
                className="text-[13px] leading-[18px] text-brand-muted hover:text-white transition"
              >
                {service}
              </Link>
            ))}
          </FooterColumn>
        </div>

        <FooterColumn title="Get in Touch">
          <a
            href="mailto:info@placevalue.com"
            className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted hover:text-white transition"
          >
            <IconMail size={14} />
            info@placevalue.com
          </a>
          <a
            href="tel:+911234567890"
            className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted hover:text-white transition"
          >
            <IconPhone size={14} />
            +91 12345 67890
          </a>
          <span className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted">
            <IconMapPin size={14} />
            Bengaluru, Karnataka, India
          </span>

          <div className="mt-4 flex flex-col gap-2.5">
            <span className="text-xs font-semibold text-white">Stay Updated</span>
            <div className="flex h-10 items-center justify-between rounded-full border border-white/15 bg-brand-panel pr-1 pl-4">
              <span className="text-xs text-brand-body">Your email address</span>
              <button
                type="button"
                className="h-8 rounded-full bg-brand-orange px-4 text-[11px] font-bold text-white hover:brightness-105 transition"
              >
                Subscribe
              </button>
            </div>
          </div>
        </FooterColumn>
      </div>

      <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-brand-muted md:mt-10 md:flex-row md:items-center md:justify-between">
        <p>© 2024 PlaceValue. All rights reserved.</p>
        <div className="flex flex-wrap gap-6">
          <Link to="/privacy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:text-white transition">
            Terms of Service
          </Link>
          <Link to="/cookies" className="hover:text-white transition">
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function HomeRoute() {
  return (
    <div className="min-h-full bg-background text-foreground relative">
      {/* Dynamic Sticky Morphing Navigation: transforms from expanded to compact floating pill on scroll */}
      <MotionNav activeNav="Home" theme="dark" />
      <Hero />
      <Services />
      <About />
      <Impact />
      <TaskverseSection />
      <FaqSection />
      <ProjectCta />
      <SiteFooter />
    </div>
  );
}
