import { Link } from "react-router";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconChartBar,
  IconCheck,
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
import { PlainHero } from "@/components/layout/PlainHero";
import { NAV_ITEMS } from "@/components/motion/MotionNav";
import { ScrollReveal, WatermarkText, WordReveal } from "@/components/motion/MotionText";

export function meta() {
  return [
    { title: "TASKVERSE — Intelligent Assessment Platform · PlaceValue" },
    {
      name: "description",
      content:
        "TASKVERSE is PlaceValue's proprietary educational platform bringing real-time analytics, adaptive skill pathways and verifiable project experience together in one place.",
    },
  ];
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
    <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase">
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
        <ScrollReveal className="flex flex-col gap-4 max-w-2xl">
          <SectionLabel>PLATFORM ARCHITECTURE</SectionLabel>
          <h2 className="font-display text-[34px] sm:text-[44px] lg:text-[50px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
            <span>Engineering better outcomes</span>
            <br />
            <span className="text-outline">through intelligent assessment.</span>
          </h2>
          <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.65] text-brand-body">
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
                      <span className="flex size-12 items-center justify-center rounded-[14px] bg-brand-night text-white shadow-sm transition-transform group-hover:scale-110">
                        <Icon size={22} stroke={2} />
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
                          <IconCheck size={14} className="text-brand-orange shrink-0" />
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
              <IconShieldCheck size={22} className="text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-foreground">LTI 1.3 Certified</p>
                <p className="mt-1 text-xs text-brand-muted">Drop-in compatibility with Canvas, Blackboard and Moodle.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-2xl bg-white p-5 border border-brand-line shadow-sm">
              <IconLock size={22} className="text-brand-orange shrink-0 mt-0.5" />
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
              <span className="text-[11px] font-semibold text-[#DFCFB6] bg-white/10 px-3 py-1 rounded-full">v3.4 Production</span>
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
          <Link
            to="/contact"
            className={cn(
              orangePill,
              "h-[52px] px-8 text-sm font-bold shadow-md hover:brightness-105 transition-all",
            )}
          >
            Request Institutional Demo
            <IconArrowRight size={16} />
          </Link>
          <Link
            to="/consultancy"
            className="inline-flex h-[52px] items-center gap-2 rounded-full border border-brand-line bg-brand-sand px-8 text-sm font-bold text-foreground hover:bg-brand-sand/80 transition-colors"
          >
            Explore Consulting Services
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
          <div className="flex items-center gap-3">
            <span className="font-display text-2xl font-black tracking-tight text-white">PlaceValue</span>
          </div>
          <p className="max-w-sm text-sm text-brand-muted leading-relaxed">
            Empowering education through technology, strategic consulting and intelligent software solutions.
          </p>
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
          <p className="text-xs font-bold uppercase tracking-widest text-[#DFCFB6]">Platform Access</p>
          <p className="text-sm text-brand-muted leading-relaxed">
            TASKVERSE is available for licensed university campuses, academies and enterprise partner organizations.
          </p>
          <Link to="/contact" className="text-sm font-bold text-brand-orange hover:underline inline-flex items-center gap-1.5 mt-2">
            Contact Support & Licensing <IconArrowUpRight size={14} />
          </Link>
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

export default function TaskverseRoute() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <PlainHero
        activeNav="TASKVERSE"
        badge="AI-POWERED PLATFORM"
        badgeRight="INTELLIGENT ASSESSMENT"
        watermarkText="TASKVERSE"
        line1="Engineering Better"
        line2Outline="Outcomes Through"
        line3Highlight="Intelligence."
        highlightTone="blue"
        supportingText="TASKVERSE redefines how institutions assess, adapt and accelerate talent with adaptive pathways and cryptographically verified portfolios."
        scrollTargetId="platform-overview"
      />
      <TaskversePlatformOverview />
      <TaskverseStatsBand />
      <TaskverseEnterpriseStandards />
      <TaskverseCta />
      <SiteFooter />
    </div>
  );
}

