import { useState } from "react";
import { Link } from "react-router";
import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUpRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconBulb,
  IconCheck,
  IconHeartHandshake,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconPhone,
  IconShieldCheck,
  IconTarget,
  IconUsers,
  IconX,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";

export function meta() {
  return [
    { title: "About Us — PlaceValue" },
    {
      name: "description",
      content:
        "PlaceValue works at the intersection of education technology and consulting, connecting the needs of institutions, students and organisations.",
    },
  ];
}

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Consultancy", to: "/consultancy" },
  { label: "TASKVERSE", to: "/taskverse" },
  { label: "Insights", to: "/insights" },
  { label: "Contact", to: "/contact" },
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
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-20 bg-background">
      <div className="flex h-[88px] items-center justify-between px-6 md:px-12 lg:px-16 xl:px-24">
        <Link to="/" aria-label="PlaceValue home" className="flex items-center">
          <Logo />
        </Link>

        {/* Center Nav Pill */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center rounded-full bg-brand-night p-1.5 shadow-sm"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = item.label === "About";
            return (
              <Link
                key={item.label}
                to={item.to}
                className={cn(
                  "rounded-full px-5 py-2 text-[13px] font-medium transition-colors whitespace-nowrap",
                  isActive
                    ? "bg-white font-semibold text-brand-night shadow-sm"
                    : "text-white/80 hover:text-white",
                )}
              >
                {item.label}
              </Link>
            );
          })}
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
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
            className="flex size-10 items-center justify-center rounded-full border border-brand-line bg-brand-sand text-foreground"
          >
            {mobileOpen ? <IconX size={18} /> : <IconMenu2 size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-b border-brand-line bg-background px-6 pt-2 pb-6 md:hidden">
          <nav className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = item.label === "About";
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition",
                    isActive
                      ? "bg-brand-night text-white"
                      : "text-foreground hover:bg-brand-sand/60",
                  )}
                >
                  {item.label}
                  {isActive && <span className="text-xs text-brand-orange">●</span>}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative px-6 pt-4 pb-16 md:px-12 md:pb-24 lg:px-16 xl:px-24">
      {/* Top badges bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <SectionLabel>ABOUT PLACEVALUE</SectionLabel>
        <span className="text-[11px] font-bold tracking-[0.25em] text-brand-muted uppercase">
          PEOPLE. PURPOSE. POSSIBILITY.
        </span>
      </div>

      {/* Headline */}
      <div className="mt-8 max-w-5xl">
        <h1 className="font-display text-[44px] leading-[1.02] font-extrabold tracking-[-0.035em] text-foreground sm:text-[64px] md:text-[76px] lg:text-[88px]">
          <span className="block text-foreground">Built on Innovation.</span>
          <span className="block mt-1 sm:mt-2">
            <span className="text-brand-orange text-outline font-extrabold">Driven by</span>{" "}
            <span className="text-foreground text-outline font-extrabold">Purpose.</span>
          </span>
        </h1>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[720px] text-base leading-[28px] text-brand-body sm:text-lg">
            PlaceValue works at the intersection of education technology and
            consulting, connecting the needs of institutions, students and
            organisations. This is a space for our journey, the people behind it
            and the purpose that guides what comes next.
          </p>

          <a
            href="#beginnings"
            className="inline-flex items-center gap-2 text-sm font-bold text-foreground transition-colors hover:text-brand-orange shrink-0 self-start md:self-auto"
          >
            Get to know PlaceValue
            <IconArrowDown size={15} />
          </a>
        </div>
      </div>

      {/* Large Centered Atrium Photo */}
      <div className="mt-12 md:mt-16">
        <div className="relative aspect-[16/9] w-full max-h-[580px] overflow-hidden rounded-[26px] sm:rounded-[34px] border border-brand-line bg-brand-sand shadow-sm">
          <img
            src="/hero-campus.jpg"
            alt="Students gathering in modern educational campus atrium"
            className="h-full w-full object-cover"
          />

          {/* Floating badge inside photo */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10 flex items-center gap-2.5 rounded-full bg-white/95 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-bold text-brand-night shadow-lg">
            <span className="size-2.5 rounded-full bg-brand-blue" />
            <span>Education is our context. People are our focus.</span>
          </div>
        </div>

        <p className="mt-3 text-xs italic text-brand-muted">
          Illustrative education imagery — not a PlaceValue team or partner photograph.
        </p>
      </div>
    </section>
  );
}

function OurBeginnings() {
  return (
    <section
      id="beginnings"
      className="border-t border-brand-line px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24"
    >
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <SectionLabel>OUR BEGINNINGS</SectionLabel>
          <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
            Every journey starts with a question.
          </h2>
          <p className="mt-5 text-lg sm:text-xl font-medium leading-snug text-brand-body">
            What could education make possible when technology serves people?
          </p>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <p className="text-base sm:text-lg leading-[30px] text-brand-body">
            Education and technology meet in everyday decisions: how people learn,
            how institutions adapt and how organisations move ideas forward.
            PlaceValue brings an education technology and consulting perspective to
            that shared space.
          </p>

          <div className="my-8 border-t border-brand-line" />

          <div>
            <span className="inline-block rounded-full border border-brand-line bg-brand-sand/70 px-3.5 py-1 text-[11px] font-bold tracking-wider text-brand-muted uppercase">
              Origin story · pending approval
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              [Founding story to be confirmed]
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-brand-muted">
              [Add the founding motivation, the education challenge that prompted it
              and the first steps taken. Include only confirmed people, places and dates.]
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CORE_VALUES = [
  {
    icon: IconUsers,
    title: "People before platforms",
    body: "Start with the learner, educator and the real need. Let technology follow.",
  },
  {
    icon: IconBulb,
    title: "Curiosity with intent",
    body: "Ask better questions. Explore new ideas with a clear purpose.",
  },
  {
    icon: IconHeartHandshake,
    title: "Progress together",
    body: "Listen openly, share understanding and build through collaboration.",
  },
  {
    icon: IconShieldCheck,
    title: "Integrity in action",
    body: "Be clear about what we know, what we promise and what still needs work.",
  },
];

function WhatGuidesUs() {
  return (
    <section
      id="guides"
      className="border-y border-white/10 bg-brand-night text-white px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24"
    >
      {/* Header row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-white/80 uppercase">
            WHAT GUIDES US
          </span>
          <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-white">
            A clear purpose. A human perspective.
          </h2>
        </div>
        <p className="text-xs text-white/50 md:text-right shrink-0">
          Mission, vision & core values · Draft positioning statements for approval.
        </p>
      </div>

      {/* 2 Mission & Vision Cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Mission Card */}
        <div className="flex flex-col justify-between rounded-[24px] border border-white/12 bg-[#183344] p-8 sm:p-10 transition hover:border-white/25">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Our mission
            </h3>
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
              <IconTarget size={20} />
            </div>
          </div>
          <p className="my-8 text-lg sm:text-xl font-medium leading-relaxed text-white/90">
            To connect education and technology in ways that make learning more
            meaningful and change more practical.
          </p>
          <span className="self-start rounded-full border border-brand-orange/30 bg-brand-orange/15 px-3.5 py-1 text-[11px] font-bold tracking-[0.15em] text-brand-orange uppercase">
            WHY WE DO IT
          </span>
        </div>

        {/* Vision Card */}
        <div className="flex flex-col justify-between rounded-[24px] border border-white/12 bg-[#183344] p-8 sm:p-10 transition hover:border-white/25">
          <div className="flex items-center justify-between">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
              Our vision
            </h3>
            <div className="flex size-10 items-center justify-center rounded-full bg-brand-blue/15 text-brand-blue border border-brand-blue/30">
              <IconArrowUpRight size={20} />
            </div>
          </div>
          <p className="my-8 text-lg sm:text-xl font-medium leading-relaxed text-white/90">
            An education ecosystem where people can learn, contribute and grow,
            supported by thoughtful technology.
          </p>
          <span className="self-start rounded-full border border-brand-blue/30 bg-brand-blue/15 px-3.5 py-1 text-[11px] font-bold tracking-[0.15em] text-brand-blue uppercase">
            WHAT WE LOOK TOWARDS
          </span>
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-16 border-t border-white/10 pt-10">
        <span className="text-[11px] font-bold tracking-[0.25em] text-white/45 uppercase block mb-8">
          OUR CORE VALUES
        </span>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map(({ icon: Icon, title, body }) => (
            <div key={title} className="flex flex-col">
              <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-brand-orange">
                <Icon size={20} stroke={1.75} />
              </div>
              <h4 className="font-display text-base font-bold text-white mb-2">
                {title}
              </h4>
              <p className="text-sm leading-relaxed text-white/65">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Leadership() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      {/* Header */}
      <div className="mb-14 sm:mb-16">
        <SectionLabel>THE PEOPLE BEHIND THE PURPOSE</SectionLabel>
        <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
          Leadership with a personal perspective.
        </h2>
      </div>

      {/* Founder Message Block */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14 items-center mb-16">
        {/* Left: Founder Portrait Placeholder */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/5] max-w-[420px] overflow-hidden rounded-[28px] border border-brand-line bg-brand-sand shadow-sm">
            <img
              src="/about-founder.jpg"
              alt="PlaceValue Founder executive portrait"
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 z-10 rounded-full bg-white/90 backdrop-blur-xs px-3.5 py-1 text-[11px] font-bold text-brand-night shadow-xs">
              Founder & Director
            </div>
          </div>
        </div>

        {/* Right: Founder Message Body */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase">
            FOUNDER&apos;S MESSAGE
          </span>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            [A personal vision for education and possibility]
          </h3>
          <p className="mt-4 text-base sm:text-lg leading-[29px] text-brand-body">
            [Founder&apos;s message awaiting approved copy. Share the personal
            motivation behind PlaceValue, the change you hope to contribute to and
            what you want institutions, students and organisations to know.]
          </p>

          <div className="mt-8 border-t border-brand-line pt-6">
            <h4 className="font-display text-xl font-bold text-foreground">
              [Founder Name]
            </h4>
            <p className="text-sm font-semibold text-brand-muted">Founder</p>
            <span className="mt-2.5 inline-block rounded-full border border-brand-line bg-brand-sand/80 px-3 py-1 text-xs font-semibold text-brand-muted">
              Awaiting approved copy
            </span>
          </div>
        </div>
      </div>

      {/* Co-Founder Card */}
      <div className="rounded-[28px] border border-brand-line bg-brand-sand/50 p-6 sm:p-8 lg:p-10 shadow-xs">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 items-center">
          {/* Left: Co-Founder Portrait Placeholder */}
          <div className="md:col-span-4 lg:col-span-3">
            <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden rounded-[22px] border border-brand-line bg-brand-sand shadow-xs">
              <img
                src="/about-cofounder.jpg"
                alt="PlaceValue Co-Founder executive portrait"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-3 left-3 z-10 rounded-full bg-white/90 backdrop-blur-xs px-3 py-0.5 text-[10px] font-bold text-brand-night shadow-xs">
                Co-Founder & VP
              </div>
            </div>
          </div>

          {/* Right: Co-Founder Bio */}
          <div className="md:col-span-8 lg:col-span-9">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase">
              MEET OUR CO-FOUNDER
            </span>
            <h3 className="mt-2 font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              [Co-Founder Name]
            </h3>
            <p className="text-sm font-bold text-brand-orange mb-3">Co-Founder</p>
            <p className="text-sm sm:text-base leading-relaxed text-brand-body mb-4">
              [Professional biography awaiting approved copy. Introduce the co-founder&apos;s
              role at PlaceValue, relevant experience and contribution to the company&apos;s
              direction. Include only verified credentials.]
            </p>
            <span className="inline-block rounded-full border border-brand-line bg-brand-sand px-3 py-1 text-xs font-semibold text-brand-muted">
              Awaiting approved copy
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

const TIMELINE_NODES = [
  {
    year: "[Year]",
    tag: "The beginning",
    title: "[Founding story to be confirmed]",
    desc: "[Confirm the founding date, motivation and original focus.]",
    tone: "orange",
  },
  {
    year: "[Year]",
    tag: "The first collaboration",
    title: "[First institutional collaboration — details pending approval]",
    desc: "[Confirm partner name, year and scope before publishing.]",
    tone: "dark",
  },
  {
    year: "[Year]",
    tag: "A step forward",
    title: "[Education technology milestone — details pending approval]",
    desc: "[Confirm milestone details, impact and year before publishing.]",
    tone: "dark",
  },
  {
    year: "[Year]",
    tag: "The next chapter",
    title: "[Next strategic milestone — details pending approval]",
    desc: "[Confirm future direction and upcoming initiatives before publishing.]",
    tone: "blue",
  },
];

function OurJourney() {
  return (
    <section className="border-y border-[#d3c0a5] bg-[#dfcfb6] px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5">
          <span className="inline-flex w-fit items-center rounded-full border border-[#c4ae91] bg-[#d3c0a5] px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#4d3f30] uppercase">
            OUR JOURNEY
          </span>
          <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
            The moments that shape us.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[#524434]">
            A chronological space for the decisions, collaborations and milestones
            behind PlaceValue.
          </p>
          <p className="mt-6 text-xs italic leading-relaxed text-[#756451]">
            Timeline content slots - dates and details awaiting approval. Arrange by
            confirmed date before publication.
          </p>
        </div>

        {/* Right Column: Timeline */}
        <div className="lg:col-span-7">
          <div className="relative border-l-2 border-[#bfa98a] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
            {TIMELINE_NODES.map((node) => {
              const bulletColor =
                node.tone === "orange"
                  ? "bg-brand-orange"
                  : node.tone === "blue"
                  ? "bg-brand-blue"
                  : "bg-brand-night";
              const yearColor =
                node.tone === "orange"
                  ? "text-brand-orange"
                  : node.tone === "blue"
                  ? "text-brand-blue"
                  : "text-foreground";

              return (
                <div key={node.tag} className="relative">
                  {/* Timeline bullet */}
                  <span
                    className={cn(
                      "absolute -left-[31px] sm:-left-[39px] top-1.5 size-4 rounded-full ring-4 ring-[#dfcfb6]",
                      bulletColor,
                    )}
                  />

                  {/* Year & Tag */}
                  <div className="flex items-center gap-2">
                    <span className={cn("font-display text-lg sm:text-xl font-bold", yearColor)}>
                      {node.year}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#635342]">
                      {node.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="mt-1 font-display text-lg sm:text-xl font-bold text-foreground">
                    {node.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#524434] leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContextSection() {
  return (
    <section className="px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      {/* Header */}
      <div className="mb-14">
        <SectionLabel>OUR WORK, OUR CONTEXT</SectionLabel>
        <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
          Different perspectives. Shared possibilities.
        </h2>
        <p className="mt-4 max-w-3xl text-base sm:text-lg leading-relaxed text-brand-body">
          Our work brings education technology and consulting into conversations
          with institutions, students and organisations.
        </p>
      </div>

      {/* 2-column layout */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
        {/* Left: Students Photo */}
        <div className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[26px] border border-brand-line bg-brand-sand shadow-sm">
            <img
              src="/about-context-students.jpg"
              alt="Students collaborating and studying around laptop and books"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Right: 3 Context Focus Areas */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Educational institutions
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-brand-body">
              A conversation about learning environments, institutional needs and
              the role of technology in education.
            </p>
          </div>

          <div className="border-t border-brand-line pt-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Students
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-brand-body">
              A focus on the learner: connecting education, practical
              understanding and possibilities for growth.
            </p>
          </div>

          <div className="border-t border-brand-line pt-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground tracking-tight">
              Organisations
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-brand-body">
              An education technology and consulting perspective on real needs,
              shared challenges and practical next steps.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsAndPartners() {
  return (
    <section className="border-t border-brand-line px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      {/* Header */}
      <div className="mb-14">
        <SectionLabel>ACHIEVEMENTS & PARTNERS</SectionLabel>
        <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
          A place for proof.
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-brand-muted">
          Reserved for approved achievements and partner identities. No results or
          partnerships are claimed in the placeholders below.
        </p>
      </div>

      {/* 3 Achievement Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
        {/* Card 1 */}
        <div className="flex flex-col justify-between rounded-[22px] border border-brand-line bg-brand-sand/40 p-7 hover:bg-brand-sand/60 transition">
          <div>
            <span className="text-xs font-bold tracking-wider text-brand-muted uppercase">
              Institutional impact
            </span>
            <h3 className="my-4 font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
              [Approved institutional achievement]
            </h3>
          </div>
          <span className="self-start rounded-full border border-brand-line bg-brand-sand/80 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-brand-muted uppercase">
            PENDING APPROVAL
          </span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between rounded-[22px] border border-brand-line bg-brand-sand/40 p-7 hover:bg-brand-sand/60 transition">
          <div>
            <span className="text-xs font-bold tracking-wider text-brand-muted uppercase">
              Student progress
            </span>
            <h3 className="my-4 font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
              [Approved student achievement]
            </h3>
          </div>
          <span className="self-start rounded-full border border-brand-line bg-brand-sand/80 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-brand-muted uppercase">
            PENDING APPROVAL
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between rounded-[22px] border border-brand-line bg-brand-sand/40 p-7 hover:bg-brand-sand/60 transition">
          <div>
            <span className="text-xs font-bold tracking-wider text-brand-muted uppercase">
              Organisational value
            </span>
            <h3 className="my-4 font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
              [Approved consulting achievement]
            </h3>
          </div>
          <span className="self-start rounded-full border border-brand-line bg-brand-sand/80 px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-brand-muted uppercase">
            PENDING APPROVAL
          </span>
        </div>
      </div>

      {/* Partner Logos Row */}
      <div>
        <h4 className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase text-center mb-6">
          PARTNER ORGANISATIONS · PENDING CONFIRMATION
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="flex h-20 items-center justify-center rounded-[18px] border-2 border-dashed border-brand-line bg-brand-sand/30 px-4 text-center text-xs font-semibold text-brand-muted/80"
            >
              [Approved partner logo]
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutCta() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-brand-night px-6 py-20 text-center text-white md:px-12 md:py-28 lg:px-16 xl:px-24">
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -left-40 size-96 rounded-full bg-brand-orange/15 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -right-40 size-96 rounded-full bg-brand-blue/15 blur-3xl"
      />

      <div className="relative z-10 max-w-3xl mx-auto">
        <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-white/80 uppercase">
          LET&apos;S BUILD TOGETHER
        </span>

        <h2 className="mt-8 font-display text-[38px] sm:text-[54px] lg:text-[64px] leading-[1.05] font-extrabold tracking-[-0.035em] text-white">
          <span>What could we make</span>{" "}
          <span className="text-brand-orange text-outline font-extrabold">
            possible together?
          </span>
        </h2>

        <p className="mt-6 text-base sm:text-lg leading-relaxed text-white/70 max-w-xl mx-auto">
          Bring a challenge, an idea or a different perspective. Let&apos;s explore
          where education and technology can go next.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-7 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
          >
            Start a Project
            <IconArrowRight size={15} />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
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
    <footer className="border-t border-white/10 bg-brand-footer px-6 pt-16 pb-12 text-white md:px-12 lg:px-16 xl:px-24">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Col 1: Brand */}
        <div className="flex flex-col gap-4">
          <Link to="/" aria-label="PlaceValue home">
            <Logo />
          </Link>
          <p className="text-xs font-semibold tracking-wider text-brand-muted uppercase">
            Technology · Consulting · Innovation
          </p>
          <p className="text-[13px] leading-5 text-brand-muted">
            Empowering education and organisations through technology and
            strategic insight.
          </p>
          <div className="mt-2 flex items-center gap-3 text-brand-muted">
            <a
              href="https://linkedin.com"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="flex size-8 items-center justify-center rounded-full bg-brand-panel hover:text-white transition"
            >
              <IconBrandLinkedin size={15} />
            </a>
            <a
              href="https://x.com"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noreferrer"
              className="flex size-8 items-center justify-center rounded-full bg-brand-panel hover:text-white transition"
            >
              <IconBrandX size={15} />
            </a>
            <a
              href="https://instagram.com"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
              className="flex size-8 items-center justify-center rounded-full bg-brand-panel hover:text-white transition"
            >
              <IconBrandInstagram size={15} />
            </a>
            <a
              href="https://youtube.com"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
              className="flex size-8 items-center justify-center rounded-full bg-brand-panel hover:text-white transition"
            >
              <IconBrandYoutube size={15} />
            </a>
          </div>
        </div>

        {/* Col 2 & 3: Quick Links & Services */}
        <div className="grid grid-cols-2 gap-8 md:col-span-1 lg:col-span-2">
          <div className="flex flex-col gap-3">
            <h3 className="font-display text-[13px] leading-4 font-bold text-white">
              Quick Links
            </h3>
            {NAV_ITEMS.map((item) => {
              const isActive = item.label === "About";
              return (
                <Link
                  key={item.label}
                  to={item.to}
                  className={cn(
                    "text-[13px] leading-[18px] transition",
                    isActive
                      ? "font-semibold text-brand-orange underline underline-offset-4"
                      : "text-brand-muted hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
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

        {/* Col 4: Get in Touch */}
        <div className="flex flex-col gap-3">
          <h3 className="font-display text-[13px] leading-4 font-bold text-white">
            Get in Touch
          </h3>
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

export default function AboutRoute() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <OurBeginnings />
      <WhatGuidesUs />
      <Leadership />
      <OurJourney />
      <ContextSection />
      <AchievementsAndPartners />
      <AboutCta />
      <SiteFooter />
    </div>
  );
}

