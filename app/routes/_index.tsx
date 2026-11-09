import { Link } from "react-router";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconBulb,
  IconCode,
  IconDeviceDesktop,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconSchool,
  IconSettings,
  IconShieldCheck,
  IconUsers,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

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

const TASKVERSE_PILLS = [
  "Adaptive Assessments",
  "Real-Time Analytics",
  "Personalised Pathways",
  "Smart Reporting",
];

const DASHBOARD_STATS = [
  { value: "12k", label: "Active Learners", tone: "text-white" },
  { value: "95%", label: "Completion Rate", tone: "text-brand-blue" },
  { value: "1,244", label: "Assessments Run", tone: "text-brand-orange" },
];

const DASHBOARD_BARS: { height: number; tone: string }[] = [
  { height: 60, tone: "bg-brand-blue" },
  { height: 75, tone: "bg-brand-blue" },
  { height: 45, tone: "bg-brand-blue/25" },
  { height: 90, tone: "bg-brand-blue" },
  { height: 69, tone: "bg-brand-orange" },
  { height: 85, tone: "bg-brand-blue" },
  { height: 100, tone: "bg-brand-blue" },
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

function SiteHeader() {
  return (
    <header
      data-node-id="3311:1357"
      className="relative z-20 bg-background"
    >
      <div className="flex h-[88px] items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24">
        <Link to="/" aria-label="PlaceValue home" className="flex items-center">
          <Logo />
        </Link>

        {/* Center Nav Pill */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center rounded-full bg-brand-night p-1.5 shadow-sm"
        >
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              to={item.to}
              className={cn(
                "rounded-full px-5 py-2 text-[13px] font-medium transition-colors whitespace-nowrap",
                index === 0
                  ? "bg-white font-semibold text-brand-night shadow-sm"
                  : "text-white/80 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className={cn(
              orangePill,
              "h-[44px] px-6 text-[13.5px] font-bold shadow-sm hover:brightness-105 transition",
            )}
          >
            Start a Project
            <IconArrowRight size={15} />
          </Link>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            to="/contact"
            className={cn(orangePill, "h-[38px] px-4 text-xs")}
          >
            Start a Project
            <IconArrowRight size={12} />
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            className="flex size-10 items-center justify-center rounded-full bg-brand-sand/60 text-foreground"
          >
            <IconMenu2 size={18} />
          </button>
        </div>
      </div>

      {/* Mobile nav row */}
      <div className="px-6 pb-3 md:hidden">
        <nav
          aria-label="Primary Mobile"
          className="flex w-full items-center justify-between overflow-x-auto rounded-full bg-brand-night p-1"
        >
          {NAV_ITEMS.map((item, index) => (
            <Link
              key={item.label}
              to={item.to}
              className={cn(
                "rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap",
                index === 0
                  ? "bg-white font-semibold text-brand-night"
                  : "text-white/80",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section
      data-node-id="3311:1376"
      className="bg-background pt-3 pb-12 md:pt-4 md:pb-16"
    >
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1.2fr)] xl:grid-cols-[minmax(0,1fr)_minmax(0,1.18fr)]">
        {/* Left Column: follows left content alignment */}
        <div className="flex flex-col pl-6 md:pl-12 lg:pl-16 xl:pl-24 pr-6 lg:pr-8 pt-2 md:pt-4">
          <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase">
            EDUCATION · TECHNOLOGY · CONSULTING
          </span>

          <h1 className="mt-4 sm:mt-5 font-display font-extrabold tracking-[-0.035em] text-[#141416] text-[38px] sm:text-[48px] md:text-[54px] lg:text-[58px] xl:text-[70px] 2xl:text-[80px] leading-[0.94]">
            <span className="block text-[#141416]">Empowering</span>
            <span className="block text-outline whitespace-nowrap">Education for a</span>
            <span className="block text-brand-orange whitespace-nowrap">Brighter</span>
            <span className="block text-brand-orange whitespace-nowrap">Tomorrow.</span>
          </h1>

          <p className="mt-6 max-w-[500px] text-[15px] sm:text-[17px] leading-[1.55] text-brand-body">
            We blend technology, strategy and innovation to help educational
            institutions and organisations create lasting impact.
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <Link
              to="/services"
              className={cn(
                primaryPill,
                "h-[52px] w-full sm:w-auto px-7 text-sm font-bold shadow-sm hover:bg-black transition-colors justify-between sm:justify-center gap-3",
              )}
            >
              Explore Our Services
              <IconArrowRight size={15} />
            </Link>
            <Link
              to="/taskverse"
              className="inline-flex h-[52px] w-full sm:w-auto items-center justify-between sm:justify-center gap-2.5 rounded-full border border-brand-line bg-brand-sand px-7 text-sm font-bold text-foreground hover:bg-brand-sand/80 transition-colors shadow-sm"
            >
              Discover TASKVERSE
              <IconArrowUpRight size={15} />
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-6 sm:gap-8 pt-2">
            {HERO_STATS.map((stat, index) => (
              <div key={stat.label} className="flex items-center gap-6 sm:gap-8">
                {index > 0 && (
                  <span className="h-8 w-px bg-brand-line" />
                )}
                <div className="flex flex-col">
                  <span className="font-display text-[26px] sm:text-[30px] font-extrabold leading-none tracking-tight text-foreground">
                    {stat.value}
                  </span>
                  <span className="mt-1.5 text-xs text-brand-muted font-medium">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Hero Photo flush to the right edge with custom curve */}
        <div className="relative w-full h-[380px] sm:h-[480px] md:h-[540px] lg:h-[580px] xl:h-[620px] overflow-hidden rounded-t-[28px] sm:rounded-tl-[36px] lg:rounded-tl-[40px] rounded-b-none lg:rounded-bl-[88px] lg:rounded-r-none shadow-sm">
          <img
            src="/hero-campus-clean.jpg"
            alt="Students inside modern campus building"
            className="w-full h-full object-cover"
          />

          {/* Overlaid Promise Card */}
          <div className="absolute top-5 left-5 sm:top-8 sm:left-8 w-[200px] sm:w-[225px] rounded-2xl bg-white p-5 sm:p-6 shadow-xl shadow-black/10 border border-black/5">
            <p className="text-[10px] font-bold tracking-[1.5px] text-brand-orange uppercase">
              OUR PROMISE
            </p>
            <p className="mt-2 font-display text-[15px] sm:text-[17px] leading-[1.2] font-extrabold text-[#141416]">
              From Ideas
              <br />
              to Real Impact
            </p>
            <p className="mt-2.5 text-[11px] sm:text-xs leading-[1.45] text-[#6b645b] font-medium">
              Technology. People.
              <br />
              Opportunities. Growth.
            </p>
          </div>
        </div>
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
}: (typeof SERVICES)[number]) {
  const isOrange = tone === "orange";
  return (
    <article className="flex flex-col justify-between rounded-[22px] border border-brand-line/60 bg-brand-sand p-6 lg:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-shadow hover:shadow-md">
      <div>
        <span
          className={cn(
            "flex size-12 items-center justify-center rounded-[14px] text-white shadow-sm",
            isOrange ? "bg-brand-orange" : "bg-brand-blue",
          )}
        >
          <Icon size={22} stroke={2} />
        </span>
        <h3 className="mt-4 font-display text-[20px] lg:text-[22px] font-extrabold tracking-[-0.02em] text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-[13px] sm:text-[14px] leading-[1.55] text-brand-body">
          {body}
        </p>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-2.5 pt-2">
        <span
          className={cn(
            "rounded-full px-3 py-1 text-[11px] font-bold text-white tracking-wide uppercase",
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
  );
}

function Services() {
  return (
    <section
      data-node-id="3311:1416"
      className="bg-background pt-10 pb-16 md:pt-16 md:pb-24 px-6 md:px-12 lg:px-16 xl:px-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[400px_minmax(0,1fr)] items-start gap-10 lg:gap-14">
        {/* Left info column */}
        <div className="flex flex-col gap-4 max-w-md">
          <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase">
            OUR SERVICES
          </span>
          <h2 className="font-display text-[38px] sm:text-[46px] lg:text-[50px] leading-[1.0] font-extrabold tracking-[-0.03em] text-foreground">
            <span>Expertise that</span>
            <br />
            <span className="text-outline">drives impact.</span>
          </h2>
          <p className="mt-2 text-[15px] sm:text-[16px] leading-[1.6] text-brand-body">
            From strategy to delivery, we help institutions and organisations
            build modern technology foundations, smarter systems and
            meaningful opportunities for students.
          </p>
        </div>

        {/* 2x2 cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} {...service} />
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
      className="bg-background px-6 md:px-12 lg:px-16 xl:px-24 py-16 md:py-[88px]"
    >
      <div>
        <SectionLabel>ABOUT PLACEVALUE</SectionLabel>
        <h2 className="mt-6 font-display text-[40px] sm:text-[50px] lg:text-[56px] leading-[1.02] font-extrabold tracking-[-0.03em] text-foreground">
          <span>A Consultancy With</span>
          <br />
          <span>a </span>
          <span className="text-outline">Bigger Purpose.</span>
        </h2>
        <p className="mt-5 max-w-[860px] text-base leading-[27px] text-brand-body">
          We partner with organisations and educational institutions to solve
          complex challenges through technology — while creating meaningful
          opportunities for students to learn, build and grow in real
          environments.
        </p>

        <ul className="mt-8 flex flex-col max-w-[860px]">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <li
              key={title}
              className="flex items-start gap-3 border-t border-brand-line py-4"
            >
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
    </section>
  );
}

function Impact() {
  return (
    <section
      data-node-id="3311:1274"
      className="px-6 pb-16 md:hidden"
    >
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
    </section>
  );
}

function TaskverseSection() {
  return (
    <section
      data-node-id="3311:1505"
      className="relative overflow-hidden bg-brand-night px-6 md:px-12 lg:px-16 xl:px-24 py-16 text-white md:py-[88px]"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 size-[400px] rounded-full bg-brand-blue/30 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -bottom-24 size-[360px] rounded-full bg-brand-orange/25 blur-[90px]"
      />

      <div className="relative grid gap-12 lg:grid-cols-[520px_minmax(0,1fr)] lg:items-center">
        <div className="flex flex-col">
          <span className="inline-flex w-fit items-center rounded-full bg-brand-blue/15 px-4 py-2 text-[11px] font-bold tracking-[2px] text-brand-blue">
            AI-POWERED LEARNING PLATFORM
          </span>
          <h2 className="mt-6 font-display text-[56px] leading-none font-extrabold tracking-[-3px] md:text-[64px]">
            TASKVERSE
          </h2>
          <p className="mt-2 font-display text-base font-medium tracking-[-0.3px] text-white/60">
            AI-Powered Assessment and Learning Platform
          </p>
          <p className="mt-5 text-[15px] leading-6 text-white/75 md:text-base md:leading-[26px]">
            TASKVERSE redefines how educators assess and how students learn.
            Powered by AI, it delivers adaptive assessments, real-time
            analytics, and personalised learning pathways — all in one
            intelligent platform.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {TASKVERSE_PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full bg-white/10 px-3.5 py-2 text-[13px] font-medium text-white"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/taskverse"
              className={cn(orangePill, "h-[50px] bg-brand-blue px-6")}
            >
              Explore TASKVERSE
              <IconArrowRight size={14} />
            </Link>
            <Link
              to="/taskverse"
              className="inline-flex h-[50px] items-center justify-center rounded-full border border-white/20 px-6 text-sm font-medium text-white"
            >
              See How It Works
            </Link>
          </div>
        </div>

        <div className="rounded-[20px] border border-white/10 bg-brand-panel p-6">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-white">
              TASKVERSE Dashboard
            </span>
            <span className="rounded-full bg-brand-blue/15 px-3 py-1 text-[11px] font-semibold text-brand-blue">
              Live
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-3">
            {DASHBOARD_STATS.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-brand-surface p-4">
                <p
                  className={cn(
                    "font-display text-2xl leading-8 font-extrabold",
                    stat.tone,
                  )}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-[11px] leading-[13px] text-brand-muted">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-3 rounded-xl bg-brand-surface p-5">
            <p className="text-xs font-semibold text-white/60">
              Performance Trends
            </p>
            <div className="mt-4 flex h-20 items-end gap-2">
              {DASHBOARD_BARS.map((bar, index) => (
                <span
                  key={index}
                  className={cn("flex-1 rounded-t", bar.tone)}
                  style={{ height: `${bar.height}%` }}
                />
              ))}
            </div>
          </div>
        </div>
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
      <div
        aria-hidden
        className="pointer-events-none absolute -top-16 -left-16 size-[320px] rounded-full bg-brand-blue/20 blur-[90px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-0 size-[280px] rounded-full bg-brand-orange/20 blur-[90px]"
      />

      <div className="relative mx-auto flex max-w-[860px] flex-col items-center">
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
      </div>
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
    <div className="min-h-full bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <Services />
      <About />
      <Impact />
      <TaskverseSection />
      <ProjectCta />
      <SiteFooter />
    </div>
  );
}
