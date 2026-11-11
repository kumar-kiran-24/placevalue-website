import { useEffect, useRef } from "react";
import { Link } from "react-router";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandX,
  IconBrandYoutube,
  IconBuilding,
  IconBulb,
  IconChartBar,
  IconCheck,
  IconCode,
  IconCompass,
  IconCpu,
  IconDeviceDesktop,
  IconHeartHandshake,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconRocket,
  IconSchool,
  IconSettings,
  IconTopologyStarRing3,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import { MotionNav } from "@/components/motion/MotionNav";
import { FaqSection, CONSULTANCY_FAQS } from "@/components/ui/FaqSection";
import {
  DrawingUnderline,
  MaskedLine,
  ScrollReveal,
  WatermarkText,
  WordReveal,
} from "@/components/motion/MotionText";

export function meta() {
  return [
    { title: "Consultancy — PlaceValue" },
    {
      name: "description",
      content:
        "We bring technology, strategy and innovation together to help institutions and organisations solve complex challenges — and build what comes next.",
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

const CONSULTANCY_SERVICES: {
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
    body: "Align your technology with your ambitions. We assess your systems, shape practical roadmaps and help you make confident investment decisions.",
    tag: "Strategy",
    highlight: "Technology audits · Architecture · Roadmaps",
  },
  {
    icon: IconCode,
    tone: "blue",
    title: "Software Development",
    body: "Turn a real-world need into intuitive, dependable software. We design and build custom platforms with your users and long-term growth in mind.",
    tag: "Build",
    highlight: "Web platforms · Applications · Integrations",
  },
  {
    icon: IconSettings,
    tone: "orange",
    title: "AI & Automation",
    body: "Make room for more meaningful work. We identify where AI and automation can simplify workflows and support better, human-led decisions.",
    tag: "Intelligence",
    highlight: "Workflow automation · AI integration · Analytics",
  },
  {
    icon: IconTopologyStarRing3,
    tone: "blue",
    title: "Digital Transformation",
    body: "Connect people, processes and technology. We modernise how your organisation works, with a clear plan for adoption and lasting change.",
    tag: "Change",
    highlight: "Modernisation · Connected systems · Adoption",
  },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discover",
    body: "We listen to your team, explore existing systems and uncover the challenge behind the brief.",
    highlight: "A shared understanding",
  },
  {
    step: "02",
    title: "Define",
    body: "Together, we prioritise opportunities and agree a practical roadmap, scope and measures of success.",
    highlight: "A clear direction",
  },
  {
    step: "03",
    title: "Develop",
    body: "We design, build and test in focused iterations, bringing your team into the process at every stage.",
    highlight: "A solution shaped with you",
  },
  {
    step: "04",
    title: "Deliver",
    body: "We launch with care, support adoption and refine the solution against your agreed goals.",
    highlight: "Confidence to move forward",
  },
];

const WHO_WE_WORK_WITH = [
  {
    icon: IconSchool,
    title: "Educational Institutions",
    body: "Connected campuses, better learning experiences and systems that support educators.",
  },
  {
    icon: IconBuilding,
    title: "Enterprises",
    body: "Smarter operations, integrated platforms and a practical path to digital change.",
  },
  {
    icon: IconRocket,
    title: "Startups",
    body: "From early ideas to scalable products, with the right foundations for growth.",
  },
  {
    icon: IconDeviceDesktop,
    title: "Training Organisations",
    body: "Digital tools that make learning delivery, assessment and administration simpler.",
  },
];

const WHY_CHOOSE_ITEMS = [
  {
    icon: IconCompass,
    title: "Expertise with perspective",
    body: "Strategic thinking and technical depth, grounded in the needs of education and business.",
  },
  {
    icon: IconBulb,
    title: "Innovation with purpose",
    body: "We choose what is useful, not just what is new — applying technology where it makes a difference.",
  },
  {
    icon: IconHeartHandshake,
    title: "End-to-end support",
    body: "One connected partnership, from discovery and development to adoption and ongoing improvement.",
  },
  {
    icon: IconChartBar,
    title: "Measurable impact",
    body: "We agree what success looks like, then evaluate progress against the outcomes that matter to you.",
  },
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

function ServiceCard({
  tone,
  title,
  body,
  tag,
  highlight,
  index = 0,
}: (typeof CONSULTANCY_SERVICES)[number] & { index?: number }) {
  const isOrange = tone === "orange";
  return (
    <ScrollReveal delay={index * 0.08} yOffset={20}>
      <article className="flex flex-col justify-between h-full rounded-[22px] border border-brand-line/60 bg-brand-sand p-6 lg:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-black/15">
        <div>
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs font-bold tracking-widest text-brand-orange uppercase">
              {`0${index + 1}`}
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-0.5 text-[10px] font-bold tracking-wider uppercase border",
                isOrange
                  ? "bg-brand-orange/10 text-brand-orange border-brand-orange/20"
                  : "bg-brand-blue/10 text-brand-blue border-brand-blue/20",
              )}
            >
              {tag}
            </span>
          </div>
          <h3 className="mt-4 font-display text-[20px] lg:text-[22px] font-extrabold tracking-[-0.02em] text-[#141416]">
            {title}
          </h3>
          <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.55] text-brand-body">
            {body}
          </p>
        </div>
        <div className="mt-6 border-t border-brand-line/60 pt-3">
          <span className="text-xs leading-tight text-brand-muted font-medium">
            {highlight}
          </span>
        </div>
      </article>
    </ScrollReveal>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-background pt-12 pb-16 md:pt-20 md:pb-24 px-6 md:px-12 lg:px-16 xl:px-24">
      <WatermarkText text="SOLUTIONS" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] items-start gap-10 lg:gap-14">
        {/* Left info column */}
        <ScrollReveal>
          <div className="flex flex-col gap-4 max-w-md">
            <SectionLabel>OUR SERVICES</SectionLabel>
            <h2 className="font-display text-[38px] sm:text-[46px] lg:text-[50px] leading-[1.0] font-extrabold tracking-[-0.03em] text-foreground">
              <span className="block text-[#141416]">Expertise that</span>
              <span className="block text-brand-orange">moves you</span>
              <span className="block text-brand-orange">forward.</span>
            </h2>
            <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-brand-body">
              From your first question to your next big milestone, we bring clarity
              to complexity and build technology that serves a purpose.
            </p>
            <p className="text-xs text-brand-muted font-medium leading-[1.5]">
              Focused advice or an end-to-end partnership — shaped around what you
              need.
            </p>
          </div>
        </ScrollReveal>

        {/* 2x2 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {CONSULTANCY_SERVICES.map((service, idx) => (
            <ServiceCard key={service.title} index={idx} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ApproachSection() {
  return (
    <section className="relative overflow-hidden bg-background px-6 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24">
      <WatermarkText text="METHOD" />
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] gap-10 lg:gap-16 items-center">
        {/* Left: Meeting Image */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="overflow-hidden rounded-[28px] shadow-sm">
            <img
              src="/consultancy-meeting.jpg"
              alt="Consultancy team meeting with client"
              className="w-full h-full object-cover max-h-[440px]"
            />
          </div>
        </ScrollReveal>

        {/* Right: Approach Copy */}
        <ScrollReveal direction="up" delay={0.2} className="flex flex-col">
          <SectionLabel>ABOUT OUR APPROACH</SectionLabel>
          <h2 className="mt-5 font-display text-[36px] sm:text-[44px] lg:text-[48px] leading-[1.05] font-extrabold tracking-[-0.03em] text-[#141416]">
            <span>Better technology starts with </span>
            <span className="text-brand-blue">understanding people.</span>
          </h2>
          <WordReveal className="mt-5 text-[15px] sm:text-[16px] leading-[1.6] text-brand-body" delay={0.1}>
            Every institution and organisation has its own ambitions, constraints
            and ways of working. We take the time to understand yours before
            recommending a solution.
          </WordReveal>
          <WordReveal className="mt-3 text-[15px] sm:text-[16px] leading-[1.6] text-brand-body" delay={0.2}>
            By combining strategic thinking with hands-on delivery, we connect the
            right technology to the right challenge — building useful systems and
            the confidence to use them.
          </WordReveal>

          <div className="mt-8 flex flex-col gap-4">
            <div className="flex items-start gap-3.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                <IconCheck size={16} stroke={2.5} />
              </span>
              <div>
                <h3 className="font-display text-[15px] font-bold text-[#141416]">
                  Listen before we build
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">
                  Your context shapes the solution.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <span className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                <IconCheck size={16} stroke={2.5} />
              </span>
              <div>
                <h3 className="font-display text-[15px] font-bold text-[#141416]">
                  Work with you, not around you
                </h3>
                <p className="text-xs text-brand-muted mt-0.5">
                  Shared decisions, clear communication and practical knowledge
                  transfer.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section className="relative overflow-hidden bg-brand-night text-white px-6 md:px-12 lg:px-16 xl:px-24 py-20 md:py-24">
      <WatermarkText text="PROCESS" />
      <div className="relative z-10">
        <ScrollReveal direction="up">
          <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-white/70 uppercase">
            OUR PROCESS
          </span>
          <h2 className="mt-6 font-display text-[40px] sm:text-[50px] lg:text-[58px] leading-[1.0] font-extrabold tracking-[-0.03em]">
            <span>From a better question to </span>
            <span className="text-brand-orange">a better solution.</span>
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] sm:text-[16px] leading-[1.6] text-white/70">
            A clear, collaborative journey. No unnecessary complexity — just
            considered steps that turn ambition into action.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {PROCESS_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} direction="up" delay={idx * 0.1} className="flex flex-col relative">
              <div className="flex items-center gap-4 mb-6">
                <span className="flex items-center justify-center rounded-lg border border-white/20 bg-white/5 px-2.5 py-1 text-xs font-bold text-brand-orange">
                  {step.step}
                </span>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="hidden lg:block h-px flex-1 bg-white/15" />
                )}
              </div>

              <h3 className="font-display text-[22px] lg:text-[24px] font-bold text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-[13.5px] leading-[1.65] text-white/70">
                {step.body}
              </p>
              <p className="mt-6 text-[11.5px] font-semibold text-white/50 tracking-wider">
                {step.highlight}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhoWeWorkWithSection() {
  return (
    <section className="bg-background px-6 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24">
      <div>
        <SectionLabel>WHO WE WORK WITH</SectionLabel>
        <h2 className="mt-6 font-display text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.02] font-extrabold tracking-[-0.03em] text-[#141416]">
          <span>Different ambitions. </span>
          <span className="text-brand-blue">Shared possibilities.</span>
        </h2>
        <p className="mt-4 max-w-xl text-[15px] sm:text-[16px] leading-[1.6] text-brand-body">
          We adapt our expertise to your world — and the people you serve.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHO_WE_WORK_WITH.map((item, idx) => (
            <div
              key={item.title}
              className="flex flex-col rounded-[22px] border border-brand-line/60 bg-brand-sand/50 p-6 lg:p-7 transition-shadow hover:shadow-md"
            >
              <span className="font-mono text-xs font-bold text-brand-orange uppercase">
                {`0${idx + 1}`}
              </span>
              <h3 className="mt-4 font-display text-[18px] lg:text-[19px] font-bold text-[#141416]">
                {item.title}
              </h3>
              <p className="mt-2 text-[13px] leading-[1.6] text-brand-body">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section className="bg-brand-sand px-6 md:px-12 lg:px-16 xl:px-24 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-start">
        {/* Left side */}
        <div className="flex flex-col">
          <SectionLabel>WHY CHOOSE PLACEVALUE</SectionLabel>
          <h2 className="mt-6 font-display text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.02] font-extrabold tracking-[-0.03em] text-[#141416]">
            <span>A partner for </span>
            <span className="text-brand-orange text-outline">the</span>
            <br />
            <span className="text-brand-orange text-outline">whole journey.</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] sm:text-[16px] leading-[1.6] text-brand-body">
            Good consultancy leaves you with more than a recommendation. It gives
            your people the tools, understanding and support to keep moving
            forward.
          </p>
        </div>

        {/* Right side: 2x2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div key={item.title} className="flex flex-col gap-2.5">
              <span className="font-mono text-xs font-bold text-brand-orange tracking-widest uppercase">
                {`0${idx + 1}`}
              </span>
              <h3 className="font-display text-[18px] font-bold text-[#141416]">
                {item.title}
              </h3>
              <p className="text-[13px] leading-[1.6] text-brand-body">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConsultancyCta() {
  return (
    <section className="relative overflow-hidden bg-brand-night px-6 md:px-12 lg:px-16 xl:px-24 py-20 text-center text-white md:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-16 size-[320px] rounded-full bg-brand-blue/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 size-[280px] rounded-full bg-brand-orange/20 blur-[90px]"
      />

      <div className="relative mx-auto flex max-w-[860px] flex-col items-center">
        <span className="inline-flex items-center rounded-full bg-white/10 px-5 py-2 text-[11px] font-bold tracking-[2px] text-white/70 uppercase">
          LET&apos;S BUILD TOGETHER
        </span>
        <h2 className="mt-8 font-display text-[44px] sm:text-[56px] md:text-[68px] lg:text-[74px] leading-[0.98] font-extrabold tracking-[-0.03em] text-white">
          <span className="block">Let&apos;s Build Something</span>
          <span className="block text-brand-orange text-outline">Meaningful Together</span>
        </h2>
        <p className="mt-6 max-w-[560px] text-base leading-6 text-white/60 md:text-[17px] md:leading-[26px]">
          Have a challenge to solve or an idea to explore? Let&apos;s talk about
          where you are, where you want to go and how we can help.
        </p>
        <div className="mt-10 flex w-full flex-col sm:flex-row items-center justify-center gap-3.5">
          <Link
            to="/contact#conversation-form"
            className={cn(
              orangePill,
              "h-[50px] w-full sm:w-[220px] justify-center text-sm font-bold shadow-lg shadow-brand-orange/20",
            )}
          >
            Start a Project
            <IconArrowRight size={15} />
          </Link>
          <Link
            to="/contact#conversation-form"
            className="inline-flex h-[50px] w-full sm:w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-8 text-sm font-bold text-white hover:bg-white/10 transition"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-brand-footer px-6 md:px-12 lg:px-16 xl:px-24 pt-14 pb-10 text-white">
      <div className="flex flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex max-w-[300px] flex-col gap-5">
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
          <div className="text-[13px] leading-[21px] text-brand-muted">
            <p>Technology · Consulting · Innovation</p>
            <p className="mt-3">
              Empowering education and organisations through technology and
              strategic insight.
            </p>
          </div>
          <div className="flex gap-2">
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

        <div className="grid grid-cols-2 gap-8 md:flex md:gap-[72px]">
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-[13px] leading-4 font-bold text-white">
              Quick Links
            </h3>
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "text-[13px] leading-[18px] text-brand-muted hover:text-white transition",
                  item.label === "Consultancy" && "text-brand-blue",
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <h3 className="font-display text-[13px] leading-4 font-bold text-white">
              Our Services
            </h3>
            {[
              "Technology Consulting",
              "Software Development",
              "AI & Automation",
              "Cloud & DevOps",
              "Student Programmes",
            ].map((service) => (
              <Link
                key={service}
                to="/consultancy"
                className="text-[13px] leading-[18px] text-brand-muted hover:text-white transition"
              >
                {service}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="font-display text-[13px] leading-4 font-bold text-white">
            Get in Touch
          </h3>
          <a
            href="mailto:hello@placevalue.in"
            className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted hover:text-white transition"
          >
            <IconMail size={14} />
            hello@placevalue.in
          </a>
          <a
            href="tel:+918317474679"
            className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted hover:text-white transition"
          >
            <IconPhone size={14} />
            +91 83174 74679
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
        </div>
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

function ConsultancyHero() {
  const shouldReduceMotion = useReducedMotion();
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Set cinematic slow-motion playback rate exclusively for Consultancy page
    const SLOW_SPEED = 0.55;
    video.playbackRate = SLOW_SPEED;

    const enforceSlowSpeed = () => {
      video.playbackRate = SLOW_SPEED;
    };
    video.addEventListener("play", enforceSlowSpeed);
    video.addEventListener("loadedmetadata", enforceSlowSpeed);
    video.addEventListener("canplay", enforceSlowSpeed);

    // Explicitly guarantee playback at startup and handle any browser autoplay policies
    const playVideo = () => {
      video.playbackRate = SLOW_SPEED;
      if (video.paused) {
        video.play().catch(() => {});
      }
    };
    playVideo();

    // Listen to scroll on the main scrollable container
    const mainEl =
      document.querySelector<HTMLElement>(".agent-native-app-main") ||
      document.documentElement;

    const handleScroll = () => {
      // Only pause when scrolled more than 1.1x viewport heights away
      if (mainEl.scrollTop > window.innerHeight * 1.1) {
        if (!video.paused) video.pause();
      } else {
        if (video.paused) playVideo();
      }
    };

    mainEl.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      video.removeEventListener("play", enforceSlowSpeed);
      video.removeEventListener("loadedmetadata", enforceSlowSpeed);
      video.removeEventListener("canplay", enforceSlowSpeed);
      mainEl.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      aria-label="Consultancy Hero"
      className="relative w-full h-[100svh] min-h-[100svh] flex flex-col justify-between overflow-hidden bg-[#0A0D11] text-white"
    >
      {/* Cinematic 3D Background Video spanning 100% full screen */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden transform-gpu will-change-transform" aria-hidden="true">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          onLoadedMetadata={(e) => {
            e.currentTarget.playbackRate = 0.55;
          }}
          poster="/hero-video-fallback.jpg"
          className="hero-bg-video motion-reduce:hidden absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-center"
        >
          <source
            src="/Glass_structures_connecting_and_…_3efebb03_1080p.mp4"
            type="video/mp4"
          />
          <img
            src="/hero-video-fallback.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-center"
          />
        </video>

        {/* Static fallback image when reduced motion is preferred */}
        <img
          src="/hero-video-fallback.jpg"
          alt=""
          aria-hidden="true"
          className="hero-bg-fallback hidden motion-reduce:block absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-center"
        />

        {/* Subtle, restrained cinematic vignettes balancing the video with PlaceValue warm charcoal identity */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-black/75 sm:from-black/45 sm:via-transparent sm:to-black/65 pointer-events-none" />
        {/* Top-Right corner vignette for desktop editorial label legibility */}
        <div className="hidden sm:block absolute top-0 right-0 w-full max-w-xl h-72 bg-gradient-to-bl from-black/75 via-black/25 to-transparent pointer-events-none" />
        {/* Bottom-Left corner vignette for desktop headline legibility */}
        <div className="hidden sm:block absolute bottom-0 left-0 w-full max-w-2xl lg:max-w-3xl h-[460px] bg-gradient-to-tr from-black/85 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* 1. TOP-RIGHT FLOATING EDITORIAL COMPOSITION */}
      <div className="relative z-10 w-full flex justify-center sm:justify-end px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 pt-20 sm:pt-28 md:pt-32 lg:pt-36">
        <div className="flex flex-col items-center sm:items-end text-center sm:text-right">
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.75,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col items-center sm:items-end"
          >
            <span className="text-[10px] xs:text-[11px] sm:text-[12px] md:text-[12.5px] font-semibold tracking-[0.24em] sm:tracking-[0.28em] text-[#F5EFEB] uppercase font-sans">
              ADVISORY · ENGINEERING · ADOPTION
            </span>
          </motion.div>
          {/* Thin muted-gold underline directly beneath top-right text */}
          <DrawingUnderline
            delay={0.45}
            duration={0.85}
            className="mt-2 sm:mt-2.5 sm:mt-3 h-[1.5px] w-40 sm:w-60 md:w-72 bg-gradient-to-r from-transparent via-[#DFCFB6] to-transparent sm:to-[#DFCFB6]"
          />
        </div>
      </div>

      {/* 2. HEADLINE & DESCRIPTION COMPOSITION: Lifted higher & centered on mobile, anchored bottom-left on desktop */}
      <div className="relative z-10 w-full px-6 sm:px-10 md:px-14 lg:px-20 xl:px-28 my-auto sm:my-0 sm:mt-auto pt-6 sm:pt-0 pb-10 sm:pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-2xl lg:max-w-3xl xl:max-w-4xl flex flex-col items-center text-center sm:items-start sm:text-left mx-auto sm:mx-0">
          {/* Small section badge */}
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.6,
              delay: shouldReduceMotion ? 0 : 0.05,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-3.5 sm:mb-5 flex justify-center sm:justify-start"
          >
            <span className="inline-flex w-fit items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-white uppercase">
              STRATEGIC CONSULTANCY
            </span>
          </motion.div>

          {/* Main Headline with Staggered Line-by-Line Reveal out of clipping mask */}
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-white text-[32px] xs:text-[36px] sm:text-[50px] md:text-[62px] lg:text-[72px] xl:text-[80px] leading-[1.04] sm:leading-[1.02]">
            <MaskedLine delay={0.1}>
              <span className="block text-[#F5EFEB]">Turning Complexity</span>
            </MaskedLine>
            <MaskedLine delay={0.22}>
              <span className="block text-[#F5EFEB]/95">into Real</span>
            </MaskedLine>
            <MaskedLine delay={0.34}>
              <span className="block text-brand-orange animate-text-shimmer">
                Opportunities.
              </span>
            </MaskedLine>
          </h1>

          {/* Supporting text description */}
          <ScrollReveal delay={0.46}>
            <p className="mt-3.5 sm:mt-5 max-w-[560px] text-[14px] xs:text-[15px] sm:text-[16.5px] md:text-[17.5px] leading-[1.55] sm:leading-[1.6] text-[#F5EFEB]/85 font-normal">
              We bring technology, strategy and innovation together to help educational
              institutions and modern enterprises build what comes next.
            </p>
          </ScrollReveal>

          {/* Thin elegant golden underline directly beneath supporting sentence */}
          <DrawingUnderline
            delay={0.62}
            duration={0.9}
            className="mt-5 sm:mt-7 h-[1.5px] w-32 sm:w-52 md:w-64 bg-gradient-to-r from-transparent via-[#DFCFB6] to-transparent sm:from-[#DFCFB6] sm:via-[#DFCFB6]/80 sm:to-transparent"
          />
        </div>
      </div>

      {/* Floating Scroll Indicator on the bottom right */}
      <div className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16 z-20 hidden sm:flex items-center">
        <a
          href="#services"
          className="group inline-flex items-center gap-2 text-[10.5px] font-bold tracking-[2.5px] uppercase text-[#DFCFB6]/70 hover:text-white transition-colors"
        >
          <span>Scroll</span>
          <IconArrowRight
            size={13}
            className="rotate-90 text-brand-orange group-hover:translate-y-0.5 transition-transform"
          />
        </a>
      </div>
    </section>
  );
}

export default function ConsultancyRoute() {
  return (
    <div className="min-h-full bg-background text-foreground relative">
      <MotionNav activeNav="Consultancy" theme="dark" />
      <ConsultancyHero />
      <ServicesSection />
      <ApproachSection />
      <ProcessSection />
      <WhoWeWorkWithSection />
      <WhyChooseSection />
      <FaqSection
        badge="CONSULTANCY FAQS"
        items={CONSULTANCY_FAQS}
        watermarkText="SOLUTIONS"
        accentDotColor="orange"
      />
      <ConsultancyCta />
      <SiteFooter />
    </div>
  );
}

