import { Link } from "react-router";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandX,
  IconBrandYoutube,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconCpu,
  IconDeviceDesktop,
  IconFileCertificate,
  IconLock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconShieldCheck,
  IconSparkles,
  IconUsers,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { createSeoMeta, createCanonicalLink } from "@/lib/seo";
import { MotionNav, NAV_ITEMS } from "@/components/motion/MotionNav";
import { FaqSection, TASKVERSE_FAQS } from "@/components/ui/FaqSection";
import { TaskverseHeroTypography } from "@/components/taskverse/TaskverseHeroTypography";
import { ScrollReveal, WatermarkText, WordReveal } from "@/components/motion/MotionText";

export function meta() {
  return createSeoMeta({
    title: "TASKVERSE | AI-Powered Assessment & Learning Platform",
    description:
      "Discover TASKVERSE by PlaceValue — an AI-powered assessment and learning platform transforming student evaluations, skill verification and personalized learning workflows.",
    canonicalPath: "/taskverse",
  });
}

export function links() {
  return createCanonicalLink("/taskverse");
}

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
    <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase mx-auto sm:mx-0">
      {children}
    </span>
  );
}

const PLATFORM_PILLARS = [
  {
    icon: IconCpu,
    tag: "Assessment Engine",
    title: "Adaptive Skill Diagnostics",
    description:
      "Dynamically calibrates question difficulty and project criteria to evaluate deep competency, problem-solving agility and core conceptual understanding in real time.",
    benefits: ["Multi-dimensional rubrics", "Automated code & logic analysis", "Individualized growth baselines"],
  },
  {
    icon: IconChartBar,
    tag: "Intelligence",
    title: "Real-Time Institutional Analytics",
    description:
      "Gives educators and administrators immediate visibility into cohort mastery, early risk indicators, skill gaps and institutional curriculum benchmarks.",
    benefits: ["Instant cohort heatmaps", "Predictive intervention flags", "Custom accreditation exports"],
  },
  {
    icon: IconSparkles,
    tag: "Progression",
    title: "Personalised Learning Pathways",
    description:
      "Maps out individualized learning sequences that adapt as students build confidence, bridging theoretical classroom knowledge with industry expectations.",
    benefits: ["Dynamic milestone branching", "Goal-oriented pacing", "Integrated mentorship touchpoints"],
  },
  {
    icon: IconFileCertificate,
    tag: "Credentials",
    title: "Verifiable Project Portfolios",
    description:
      "Translates completed assignments and live client briefs into immutable, employer-ready skill transcripts backed by verifiable execution evidence.",
    benefits: ["Cryptographically verified evidence", "Direct industry alignment", "Shareable digital credentials"],
  },
];

const PLATFORM_STATS = [
  { value: "12,000+", label: "Active Learners Evaluated" },
  { value: "95.4%", label: "Curriculum Completion Rate" },
  { value: "3.2x", label: "Faster Skill Verification" },
  { value: "99.9%", label: "Uptime & High Reliability" },
];

function TaskversePlatformOverview() {
  return (
    <section id="platform-overview" className="relative overflow-hidden bg-background pt-16 pb-20 md:pt-24 md:pb-28 px-6 md:px-12 lg:px-16 xl:px-24">
      <WatermarkText text="ARCHITECTURE" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col gap-4 max-w-2xl items-center text-center md:items-start md:text-left mx-auto md:mx-0">
          <SectionLabel>PLATFORM ARCHITECTURE</SectionLabel>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground text-center md:text-left">
            <span>Engineering better outcomes</span>
            <br />
            <span className="text-outline">through intelligent assessment.</span>
          </h2>
          <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.65] text-brand-body text-center md:text-left">
            TASKVERSE was engineered from the ground up to solve the disconnect between academic evaluation and real-world workplace readiness.
          </p>
        </ScrollReveal>

        {/* 2x2 Grid of Capabilities */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {PLATFORM_PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={idx * 0.1} yOffset={20}>
                <div className="group flex flex-col justify-between h-full rounded-[24px] border border-brand-line/70 bg-brand-sand p-7 sm:p-8 lg:p-9 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-black/15">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
                        {`0${idx + 1}`}
                      </span>
                      <span className="rounded-full bg-brand-sand/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-brand-orange border border-brand-orange/20">
                        {pillar.tag}
                      </span>
                    </div>

                    <h3 className="mt-6 font-display text-[22px] sm:text-[24px] font-extrabold text-foreground group-hover:text-brand-night transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.6] text-brand-body">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="mt-8 border-t border-brand-line/50 pt-5">
                    <ul className="flex flex-col gap-2">
                      {pillar.benefits.map((b) => (
                        <li key={b} className="flex items-center gap-2 text-xs font-semibold text-foreground">
                          <span className="size-1 rounded-full bg-brand-orange shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function TaskverseStatsBand() {
  return (
    <section className="bg-brand-night text-white py-14 md:py-16 px-6 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">
        {PLATFORM_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="font-display text-[32px] sm:text-[40px] lg:text-[46px] font-extrabold tracking-tight text-[#DFCFB6]">
              {stat.value}
            </span>
            <span className="mt-1 text-xs sm:text-[13px] text-white/70 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function TaskverseEnterpriseStandards() {
  return (
    <section className="relative overflow-hidden bg-brand-sand/40 border-t border-brand-line/60 py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-24">
      <WatermarkText text="SECURITY" />
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <ScrollReveal direction="up" delay={0.1} className="lg:col-span-6 flex flex-col gap-5">
          <SectionLabel>INSTITUTIONAL GRADE</SectionLabel>
          <h2 className="font-display text-[32px] sm:text-[42px] leading-[1.08] font-extrabold text-foreground">
            Built for enterprise compliance and seamless integration.
          </h2>
          <WordReveal className="text-[15px] sm:text-[16px] leading-[1.65] text-brand-body" delay={0.15}>
            TASKVERSE integrates directly with existing LMS infrastructure, single sign-on (SSO) directories and institutional Student Information Systems (SIS).
          </WordReveal>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-brand-line shadow-sm">
              <span className="size-2 rounded-full bg-brand-blue shrink-0 mt-1.5" />
              <div>
                <p className="text-sm font-bold text-foreground">LTI 1.3 Certified</p>
                <p className="mt-1 text-xs text-brand-muted">Drop-in compatibility with Canvas, Blackboard and Moodle.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-brand-line shadow-sm">
              <span className="size-2 rounded-full bg-brand-orange shrink-0 mt-1.5" />
              <div>
                <p className="text-sm font-bold text-foreground">GDPR & SOC2 Ready</p>
                <p className="mt-1 text-xs text-brand-muted">Zero-knowledge credential hashing and strict student data privacy.</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2} className="lg:col-span-6 flex justify-center">
          <div className="w-full max-w-md rounded-[28px] bg-brand-night p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between pb-6 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="size-3 rounded-full bg-brand-orange" />
                <span className="text-xs font-bold tracking-wider uppercase text-white/80">TASKVERSE Live Feed</span>
              </div>
              <a
                href="https://taskverse.placevalue.in/login"
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-semibold text-[#DFCFB6] hover:text-white bg-white/10 hover:bg-white/20 px-3 py-1 rounded-full inline-flex items-center gap-1 transition"
              >
                <span>Platform Login</span>
                <IconArrowUpRight size={12} />
              </a>
            </div>

            <div className="mt-6 flex flex-col gap-4 font-mono text-xs">
              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <div className="flex justify-between text-white/60 mb-1">
                  <span>Diagnostic Module: Systems Architecture</span>
                  <span className="text-[#DFCFB6]">98.2%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange rounded-full" style={{ width: "98.2%" }} />
                </div>
              </div>

              <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                <div className="flex justify-between text-white/60 mb-1">
                  <span>Adaptive Logic Verification: Cohort A</span>
                  <span className="text-brand-blue">Active</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue rounded-full" style={{ width: "84%" }} />
                </div>
              </div>

              <p className="text-[11px] text-white/50 pt-2">
                Real-time benchmark ingestion active across 42 concurrent institutional nodes.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function TaskverseCta() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-28 px-6 md:px-12 lg:px-16 xl:px-24 border-t border-brand-line">
      <WatermarkText text="DEPLOY" />
      <ScrollReveal direction="up" className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionLabel>EXPERIENCE TASKVERSE</SectionLabel>
        <h2 className="mt-6 font-display text-[36px] sm:text-[46px] md:text-[54px] font-extrabold tracking-tight text-foreground leading-[1.05]">
          Ready to transform institutional assessment?
        </h2>
        <p className="mt-4 max-w-xl text-[15px] sm:text-[17px] leading-[1.6] text-brand-body">
          Request a guided walkthrough of the TASKVERSE platform tailored to your institution’s curriculum and accreditation goals.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="https://taskverse.placevalue.in/login"
            target="_blank"
            rel="noreferrer"
            className={cn(
              orangePill,
              "h-[52px] px-8 text-sm font-bold shadow-md hover:brightness-105 transition-all",
            )}
          >
            Login to TASKVERSE
            <IconArrowUpRight size={16} />
          </a>
          <Link
            to="/contact"
            className="inline-flex h-[52px] items-center gap-2 rounded-full border border-brand-line bg-brand-sand px-8 text-sm font-bold text-foreground hover:bg-brand-sand/80 transition-colors"
          >
            Request Institutional Demo
            <IconArrowRight size={16} />
          </Link>
        </div>
      </ScrollReveal>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-brand-footer text-white px-6 md:px-12 lg:px-16 xl:px-24 pt-16 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/10 pb-12">
        <div className="md:col-span-5 flex flex-col gap-4">
          <Link
            to="/"
            onClick={() => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            aria-label="PlaceValue Home"
            className="inline-flex items-center transition-transform hover:scale-[1.03] w-fit"
          >
            <div className="flex items-center rounded-full bg-white px-3.5 py-1.5 shadow-sm">
              <img
                src="/placevalue-logo.png"
                alt="PlaceValue"
                className="h-7 sm:h-8 w-auto"
              />
            </div>
          </Link>
          <p className="max-w-sm text-sm text-brand-muted leading-relaxed">
            Empowering education through technology, strategic consulting and intelligent software solutions.
          </p>
          <div className="flex gap-2 mt-1">
            {[
              { icon: IconBrandLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/placevalue-in" },
              { icon: IconBrandThreads, label: "Threads", href: "https://www.threads.net/@placevalue.in" },
              { icon: IconBrandInstagram, label: "Instagram", href: "https://www.instagram.com/placevalue.in/" },
            ].map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex size-9 items-center justify-center rounded-full border border-white/15 text-brand-muted hover:text-white hover:border-brand-orange/40 hover:text-brand-orange transition"
              >
                <Icon size={16} stroke={1.75} />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-3 flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#DFCFB6]">Quick Links</p>
          <ul className="flex flex-col gap-2 text-sm text-brand-muted">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <Link to={item.to} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-4 flex flex-col gap-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[#DFCFB6]">Get in Touch</p>
          <a
            href="mailto:hello@placevalue.in"
            className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition"
          >
            <IconMail size={15} />
            hello@placevalue.in
          </a>
          <a
            href="tel:+918317474679"
            className="flex items-center gap-2 text-sm text-brand-muted hover:text-white transition"
          >
            <IconPhone size={15} />
            +91 83174 74679
          </a>
          <p className="text-xs text-brand-muted leading-relaxed mt-1">
            TASKVERSE is available for licensed university campuses, academies and enterprise partner organizations.
          </p>
          <div className="flex flex-wrap items-center gap-4 mt-1">
            <a
              href="https://taskverse.placevalue.in/login"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-bold text-white hover:text-brand-orange inline-flex items-center gap-1.5 transition"
            >
              Sign In to Platform <IconArrowUpRight size={14} />
            </a>
            <Link to="/contact" className="text-sm font-bold text-brand-orange hover:underline inline-flex items-center gap-1.5">
              Contact Support & Licensing <IconArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </div>

      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
        <p>© 2024 PlaceValue Technologies. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-white transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}

function TaskverseHero() {
  const scrollToOverview = () => {
    const el = document.getElementById("platform-overview");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[85vh] lg:min-h-screen bg-background text-foreground overflow-hidden flex flex-col justify-between">
      {/* Decorative Oversized Watermark */}
      <WatermarkText text="TASKVERSE" opacity={0.035} />

      {/* Ambient background glows */}
      <div
        className="pointer-events-none absolute -top-40 -left-32 size-[480px] rounded-full bg-brand-blue/5 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-32 size-[440px] rounded-full bg-brand-orange/5 blur-[120px]"
        aria-hidden="true"
      />

      {/* Hero Content Container */}
      <div className="relative z-10 flex-1 flex items-center px-6 pt-28 pb-16 md:px-12 md:pt-36 md:pb-20 lg:px-16 xl:px-24">
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Product Positioning & Narrative (Less text, clean typography) */}
          <div className="lg:col-span-5 flex flex-col">
            <ScrollReveal direction="up" delay={0.05}>
              <SectionLabel>ASSESSMENT PLATFORM</SectionLabel>
            </ScrollReveal>

            {/* Main Headline */}
            <ScrollReveal direction="up" delay={0.1}>
              <h1 className="mt-6 font-display font-black text-[50px] sm:text-[64px] md:text-[72px] lg:text-[78px] leading-[0.94] tracking-[-0.04em] text-foreground uppercase">
                TASKVERSE
              </h1>
            </ScrollReveal>

            {/* Concise Product Description */}
            <ScrollReveal direction="up" delay={0.15}>
              <p className="mt-4 text-[16px] sm:text-[17px] leading-[1.65] text-brand-body max-w-md">
                Adaptive skill diagnostics and verifiable capability portfolios engineered for modern educational institutions and learners.
              </p>
            </ScrollReveal>

            {/* Action Buttons */}
            <ScrollReveal direction="up" delay={0.2}>
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href="https://taskverse.placevalue.in/login"
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    orangePill,
                    "h-[50px] px-7 text-sm font-bold shadow-sm hover:brightness-105 transition-all"
                  )}
                >
                  <span>Login to TASKVERSE</span>
                  <IconArrowUpRight size={15} />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex h-[50px] items-center gap-2 rounded-full border border-brand-line bg-brand-sand/60 px-6 text-sm font-semibold text-foreground hover:bg-brand-sand/90 hover:border-brand-orange/40 hover:text-brand-orange transition-all"
                >
                  Request Institutional Demo
                  <IconArrowRight size={15} />
                </Link>
                <button
                  type="button"
                  onClick={scrollToOverview}
                  className="inline-flex h-[50px] items-center gap-2 rounded-full border border-brand-line/60 bg-transparent px-5 text-sm font-medium text-brand-body hover:text-foreground hover:bg-brand-sand/40 transition-all cursor-pointer"
                >
                  <span>Explore TASKVERSE</span>
                  <IconChevronDown size={15} className="text-brand-muted" />
                </button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Sophisticated Animated Typography Experience */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={0.15} yOffset={24}>
              <TaskverseHeroTypography />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TaskverseRoute() {
  return (
    <div className="min-h-full bg-background text-foreground relative">
      <MotionNav activeNav="TASKVERSE" theme="light" />
      <TaskverseHero />
      <TaskversePlatformOverview />
      <TaskverseStatsBand />
      <TaskverseEnterpriseStandards />
      <FaqSection
        badge="PLATFORM FAQS"
        items={TASKVERSE_FAQS}
        watermarkText="TASKVERSE"
        accentDotColor="blue"
      />
      <TaskverseCta />
      <SiteFooter />
    </div>
  );
}

