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
import { PlainHero } from "@/components/layout/PlainHero";
import { FaqSection, ABOUT_FAQS } from "@/components/ui/FaqSection";
import { ScrollReveal, WatermarkText, WordReveal } from "@/components/motion/MotionText";

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

function OurBeginnings() {
  return (
    <section
      id="beginnings"
      className="relative overflow-hidden border-t border-brand-line px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24"
    >
      <WatermarkText text="JOURNEY" />

      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column */}
        <ScrollReveal className="lg:col-span-5">
          <SectionLabel>OUR BEGINNINGS</SectionLabel>
          <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
            Every journey starts with a question.
          </h2>
          <WordReveal className="mt-5 text-lg sm:text-xl font-medium leading-snug text-brand-body" delay={0.15}>
            What could education make possible when technology serves people?
          </WordReveal>
        </ScrollReveal>

        {/* Right Column */}
        <ScrollReveal delay={0.15} className="lg:col-span-7 flex flex-col justify-center">
          <WordReveal className="text-base sm:text-lg leading-[30px] text-brand-body" delay={0.2}>
            Education and technology meet in everyday decisions: how people learn,
            how institutions adapt and how organisations move ideas forward.
            PlaceValue brings an education technology and consulting perspective to
            that shared space.
          </WordReveal>

          <div className="my-8 border-t border-brand-line" />

          <div>
            <span className="inline-block rounded-full border border-brand-line bg-brand-sand/70 px-3.5 py-1 text-[11px] font-bold tracking-wider text-brand-muted uppercase">
              FOUNDING CONVICTION
            </span>
            <h3 className="mt-3 text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              Bridging the divide between talent and opportunity.
            </h3>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-brand-body">
              PlaceValue was established by Abhishek Sarangapani and Nikita Valke under the foundational conviction
              that talent is universal, but opportunity is not. We unite technology consulting, modern digital platforms,
              and experiential student initiatives to create lasting capability for educational institutions and learners.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const CORE_VALUES = [
  {
    title: "People before platforms",
    body: "Start with the learner, educator and the real need. Let technology follow.",
  },
  {
    title: "Curiosity with intent",
    body: "Ask better questions. Explore new ideas with a clear purpose.",
  },
  {
    title: "Progress together",
    body: "Listen openly, share understanding and build through collaboration.",
  },
  {
    title: "Integrity in action",
    body: "Be clear about what we know, what we promise and what still needs work.",
  },
];

function WhatGuidesUs() {
  return (
    <section
      id="guides"
      className="relative overflow-hidden border-y border-white/10 bg-brand-night text-white px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24"
    >
      <WatermarkText text="VALUES" />
      {/* Header row */}
      <ScrollReveal direction="up" className="relative z-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
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
      </ScrollReveal>

      {/* 2 Mission & Vision Cards */}
      <div className="relative z-10 mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Mission Card */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/12 bg-[#183344] p-8 sm:p-10 transition hover:border-white/25">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Our mission
              </h3>
              <span className="font-mono text-xs font-bold tracking-wider text-brand-orange uppercase">
                01
              </span>
            </div>
            <p className="my-8 text-lg sm:text-xl font-medium leading-relaxed text-white/90">
              To connect education and technology in ways that make learning more
              meaningful and change more practical.
            </p>
            <span className="self-start rounded-full border border-brand-orange/30 bg-brand-orange/15 px-3.5 py-1 text-[11px] font-bold tracking-[0.15em] text-brand-orange uppercase">
              WHY WE DO IT
            </span>
          </div>
        </ScrollReveal>

        {/* Vision Card */}
        <ScrollReveal direction="up" delay={0.2}>
          <div className="flex h-full flex-col justify-between rounded-[24px] border border-white/12 bg-[#183344] p-8 sm:p-10 transition hover:border-white/25">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                Our vision
              </h3>
              <span className="font-mono text-xs font-bold tracking-wider text-brand-blue uppercase">
                02
              </span>
            </div>
            <p className="my-8 text-lg sm:text-xl font-medium leading-relaxed text-white/90">
              An education ecosystem where people can learn, contribute and grow,
              supported by thoughtful technology.
            </p>
            <span className="self-start rounded-full border border-brand-blue/30 bg-brand-blue/15 px-3.5 py-1 text-[11px] font-bold tracking-[0.15em] text-brand-blue uppercase">
              WHAT WE LOOK TOWARDS
            </span>
          </div>
        </ScrollReveal>
      </div>

      {/* Core Values */}
      <div className="mt-16 border-t border-white/10 pt-10">
        <span className="text-[11px] font-bold tracking-[0.25em] text-white/45 uppercase block mb-8">
          OUR CORE VALUES
        </span>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {CORE_VALUES.map(({ title, body }, idx) => (
            <div key={title} className="flex flex-col">
              <span className="font-mono text-xs font-bold text-brand-orange mb-3 tracking-widest uppercase">
                {`0${idx + 1}`}
              </span>
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
    <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      <WatermarkText text="LEADERS" />
      {/* Header */}
      <ScrollReveal direction="up" className="relative z-10 mb-14 sm:mb-16">
        <SectionLabel>THE PEOPLE BEHIND THE PURPOSE</SectionLabel>
        <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
          Leadership with a personal perspective.
        </h2>
      </ScrollReveal>

      {/* Founder Message Block */}
      <ScrollReveal direction="up" delay={0.1} className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center mb-16">
        {/* Left: Founder Portrait */}
        <div className="lg:col-span-5">
          <div className="relative aspect-square sm:aspect-[4/5] max-w-[420px] overflow-hidden rounded-[28px] border border-brand-line bg-brand-sand shadow-sm group">
            <img
              src="/src/about/founder.jpg"
              alt="Abhishek Sarangapani, Founder & CEO of PlaceValue"
              className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 left-4 z-10 rounded-full bg-white/95 backdrop-blur-xs px-3.5 py-1 text-[11px] font-bold text-brand-night shadow-xs border border-black/5">
              Founder & CEO
            </div>
          </div>
        </div>

        {/* Right: Founder Message Body */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase">
            FOUNDER&apos;S PERSPECTIVE
          </span>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Building where purpose meets possibility.
          </h3>

          {/* Core Guiding Quotes */}
          <div className="my-6 border-l-2 border-brand-orange pl-5 sm:pl-6 space-y-3.5">
            <blockquote className="font-display text-[17px] sm:text-[19px] font-medium tracking-tight text-foreground italic leading-snug">
              &ldquo;Talent is universal. Opportunity is not.&rdquo;
            </blockquote>
            <blockquote className="font-display text-[17px] sm:text-[19px] font-medium tracking-tight text-foreground italic leading-snug">
              &ldquo;Growth begins where familiarity ends.&rdquo;
            </blockquote>
            <blockquote className="font-display text-[17px] sm:text-[19px] font-medium tracking-tight text-foreground italic leading-snug">
              &ldquo;The world changes because someone decides to build it.&rdquo;
            </blockquote>
          </div>

          <WordReveal className="text-base sm:text-lg leading-[29px] text-brand-body" delay={0.15}>
            PlaceValue was founded on a simple conviction: technology should expand human agency,
            not replace it. We partner with educational institutions, enterprises and student communities
            to cultivate real capability, dismantle barriers to opportunity, and build what comes next.
          </WordReveal>

          <div className="mt-8 border-t border-brand-line pt-6">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Abhishek Sarangapani
            </h4>
            <p className="text-sm font-semibold text-brand-orange mt-0.5">
              Founder & CEO, PlaceValue
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/* Divider between leadership profiles */}
      <div className="relative z-10 my-16 sm:my-20 border-t border-brand-line/60" />

      {/* Co-Founder Profile (Matching Founder UI Layout) */}
      <ScrollReveal direction="up" delay={0.15} className="relative z-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14 items-center">
        {/* Left: Co-Founder Portrait */}
        <div className="lg:col-span-5">
          <div className="relative aspect-square sm:aspect-[4/5] max-w-[420px] overflow-hidden rounded-[28px] border border-brand-line bg-brand-sand shadow-sm group">
            <img
              src="/src/about/co-founder.jpeg"
              alt="Nikita Valke, Director and Co-founder of PlaceValue"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
            />
            <div className="absolute top-4 left-4 z-10 rounded-full bg-white/95 backdrop-blur-xs px-3.5 py-1 text-[11px] font-bold text-brand-night shadow-xs border border-black/5">
              Director & Co-Founder
            </div>
          </div>
        </div>

        {/* Right: Co-Founder Bio Body */}
        <div className="lg:col-span-7">
          <span className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase">
            DIRECTOR & CO-FOUNDER
          </span>
          <h3 className="mt-3 font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-foreground leading-tight">
            Empowering potential through strong foundations.
          </h3>

          {/* Three Core Guiding Principles (matching Founder's quote styling with blue accent) */}
          <div className="my-6 border-l-2 border-brand-blue pl-5 sm:pl-6 space-y-3.5">
            <blockquote className="font-display text-[17px] sm:text-[19px] font-medium tracking-tight text-foreground italic leading-snug">
              &ldquo;Strong conceptual foundations.&rdquo;
            </blockquote>
            <blockquote className="font-display text-[17px] sm:text-[19px] font-medium tracking-tight text-foreground italic leading-snug">
              &ldquo;Confidence in communication.&rdquo;
            </blockquote>
            <blockquote className="font-display text-[17px] sm:text-[19px] font-medium tracking-tight text-foreground italic leading-snug">
              &ldquo;Alignment with evolving industry expectations.&rdquo;
            </blockquote>
          </div>

          <WordReveal className="text-base sm:text-lg leading-[29px] text-brand-body" delay={0.15}>
            Steering institutional delivery and educational programmes at PlaceValue, Nikita is dedicated
            to fostering strong conceptual foundations, confidence in communication, and alignment with
            evolving industry expectations. Her leadership ensures that every engagement bridges the gap
            between theoretical learning and real-world execution.
          </WordReveal>

          <div className="mt-8 border-t border-brand-line pt-6">
            <h4 className="font-display text-xl sm:text-2xl font-bold text-foreground">
              Nikita Valke
            </h4>
            <p className="text-sm font-semibold text-brand-blue mt-0.5">
              Director & Co-founder, PlaceValue
            </p>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}

const TIMELINE_NODES = [
  {
    year: "Founding",
    tag: "The Foundation",
    title: "Established by Abhishek Sarangapani & Nikita Valke",
    desc: "Founded on the core principle that talent is universal, but opportunity is not — bringing technology consulting and education together.",
    tone: "orange",
  },
  {
    year: "Phase I",
    tag: "Institutional Delivery",
    title: "Enterprise Learning & Strategic Architecture",
    desc: "Partnering with educational institutions and organizations to design agile curriculum systems, modern digital infrastructure, and student talent initiatives.",
    tone: "dark",
  },
  {
    year: "Phase II",
    tag: "Platform Engineering",
    title: "Development of TASKVERSE Evaluation Engine",
    desc: "Engineering an adaptive diagnostic and assessment platform that turns continuous problem-solving into verified, employer-ready skill transcripts.",
    tone: "dark",
  },
  {
    year: "Phase III",
    tag: "The Road Ahead",
    title: "Scalable Ecosystem for Lifelong Learning",
    desc: "Expanding cross-institutional collaboration networks, modern AI capabilities, and verifiable student portfolios across global learning communities.",
    tone: "blue",
  },
];

function OurJourney() {
  return (
    <section className="relative overflow-hidden border-y border-[#d3c0a5] bg-[#dfcfb6] px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24">
      <WatermarkText text="MILESTONES" />
      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column */}
        <ScrollReveal direction="up" className="lg:col-span-5">
          <span className="inline-flex w-fit items-center rounded-full border border-[#c4ae91] bg-[#d3c0a5] px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-[#4d3f30] uppercase">
            OUR JOURNEY
          </span>
          <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
            The moments that shape us.
          </h2>
          <WordReveal className="mt-4 text-base sm:text-lg leading-relaxed text-[#524434]" delay={0.2}>
            A chronological space for the decisions, collaborations and milestones
            behind PlaceValue.
          </WordReveal>
          <p className="mt-6 text-xs italic leading-relaxed text-[#756451]">
            Timeline content slots - dates and details awaiting approval. Arrange by
            confirmed date before publication.
          </p>
        </ScrollReveal>

        {/* Right Column: Timeline */}
        <ScrollReveal direction="up" delay={0.15} className="lg:col-span-7">
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
        </ScrollReveal>
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
        <SectionLabel>IMPACT & ECOSYSTEM</SectionLabel>
        <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
          Delivering meaningful outcomes.
        </h2>
        <p className="mt-3 max-w-2xl text-sm sm:text-base leading-relaxed text-brand-body">
          Our initiatives bridge academia and enterprise, creating lasting capability across institutions, learners, and partners.
        </p>
      </div>

      {/* 3 Achievement Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
        {/* Card 1 */}
        <div className="flex flex-col justify-between rounded-[22px] border border-brand-line bg-brand-sand/40 p-7 hover:bg-brand-sand/60 transition">
          <div>
            <span className="text-xs font-bold tracking-wider text-brand-orange uppercase">
              Institutional Delivery
            </span>
            <h3 className="my-3 font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
              Curriculum & Assessment Modernization
            </h3>
            <p className="text-sm text-brand-body leading-relaxed">
              Equipping universities and academic faculties with adaptive diagnostics, continuous rubrics, and seamless LMS interoperability.
            </p>
          </div>
          <span className="mt-6 self-start rounded-full border border-brand-line bg-brand-sand/80 px-3.5 py-1 text-[10px] font-bold tracking-[0.15em] text-brand-muted uppercase">
            EDUCATION TECHNOLOGY
          </span>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col justify-between rounded-[22px] border border-brand-line bg-brand-sand/40 p-7 hover:bg-brand-sand/60 transition">
          <div>
            <span className="text-xs font-bold tracking-wider text-brand-blue uppercase">
              Student Progress
            </span>
            <h3 className="my-3 font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
              Experiential Project Pathways
            </h3>
            <p className="text-sm text-brand-body leading-relaxed">
              Transforming theoretical coursework into verifiable, employer-ready project execution transcripts and direct industry mentorship.
            </p>
          </div>
          <span className="mt-6 self-start rounded-full border border-brand-line bg-brand-sand/80 px-3.5 py-1 text-[10px] font-bold tracking-[0.15em] text-brand-muted uppercase">
            TALENT DEVELOPMENT
          </span>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col justify-between rounded-[22px] border border-brand-line bg-brand-sand/40 p-7 hover:bg-brand-sand/60 transition">
          <div>
            <span className="text-xs font-bold tracking-wider text-brand-night uppercase">
              Enterprise Value
            </span>
            <h3 className="my-3 font-display text-lg sm:text-xl font-bold text-foreground leading-snug">
              Digital Architecture & Advisory
            </h3>
            <p className="text-sm text-brand-body leading-relaxed">
              Partnering with enterprise organizations to engineer scalable web architectures, automated workflows, and data-driven systems.
            </p>
          </div>
          <span className="mt-6 self-start rounded-full border border-brand-line bg-brand-sand/80 px-3.5 py-1 text-[10px] font-bold tracking-[0.15em] text-brand-muted uppercase">
            STRATEGIC CONSULTING
          </span>
        </div>
      </div>

      {/* Partner Ecosystem Row */}
      <div>
        <h4 className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase text-center mb-6">
          ENGAGEMENT ECOSYSTEM
        </h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            "Higher Education Campuses",
            "Engineering & Tech Academies",
            "EdTech & Software Startups",
            "Enterprise Technology Partners",
          ].map((sector) => (
            <div
              key={sector}
              className="flex h-20 items-center justify-center rounded-[18px] border border-brand-line/80 bg-white/70 px-4 text-center text-xs font-bold text-foreground shadow-2xs hover:bg-white hover:border-brand-line transition-all"
            >
              {sector}
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
      <PlainHero
        activeNav="About"
        badge="ABOUT PLACEVALUE"
        badgeRight="PEOPLE · PURPOSE · POSSIBILITY"
        watermarkText="ABOUT"
        line1="Built on Innovation."
        line2Outline="Driven by"
        line3Highlight="Purpose."
        supportingText="PlaceValue works at the intersection of education technology and consulting, connecting the needs of institutions, students and organisations. This is a space for our journey, the people behind it and the purpose that guides what comes next."
        highlightTone="orange"
        scrollTargetId="beginnings"
      />
      <OurBeginnings />
      <WhatGuidesUs />
      <Leadership />
      <OurJourney />
      <ContextSection />
      <AchievementsAndPartners />
      <FaqSection
        badge="ORGANISATION FAQS"
        items={ABOUT_FAQS}
        watermarkText="PURPOSE"
        accentDotColor="blue"
      />
      <AboutCta />
      <SiteFooter />
    </div>
  );
}

