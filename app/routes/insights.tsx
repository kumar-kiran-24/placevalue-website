import { Link } from "react-router";
import {
  IconArrowRight,
  IconArrowUpRight,
  IconBookmark,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandX,
  IconBrandYoutube,
  IconCalendar,
  IconClock,
  IconFileText,
  IconMail,
  IconMapPin,
  IconPhone,
  IconSparkles,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { PlainHero } from "@/components/layout/PlainHero";
import { NAV_ITEMS } from "@/components/motion/MotionNav";
import { ScrollReveal, WatermarkText, WordReveal } from "@/components/motion/MotionText";

export function meta() {
  return [
    { title: "Insights & Perspectives — PlaceValue" },
    {
      name: "description",
      content:
        "Research, editorial viewpoints and practical frameworks on educational technology, artificial intelligence and modern institutional transformation.",
    },
  ];
}

const primaryPill =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-night text-sm font-bold text-white";
const orangePill =
  "inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange text-sm font-bold text-white";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-brand-line bg-brand-sand/70 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-foreground uppercase">
      {children}
    </span>
  );
}

const FEATURED_ARTICLE = {
  tag: "Strategic Research",
  date: "October 2024",
  readTime: "8 min read",
  title: "AI in Higher Education: Beyond the Hype to Measurable Student Mastery",
  summary:
    "How leading universities are shifting from reactive generative AI policies to proactive institutional intelligence models that elevate critical thinking and verify genuine competence.",
  author: "PlaceValue Research & Strategy Lab",
};

const INSIGHT_ARTICLES = [
  {
    category: "EdTech Strategy",
    date: "September 2024",
    readTime: "6 min read",
    title: "Adaptive Curriculum Architectures: Designing for Continuous Evolution",
    excerpt:
      "Why static four-year degree blueprints are struggling in high-velocity sectors, and how modular, competency-based branching creates resilient student outcomes.",
  },
  {
    category: "Workforce Alignment",
    date: "August 2024",
    readTime: "5 min read",
    title: "Bridging the Academia-Industry Chasm: Real-World Experience at Scale",
    excerpt:
      "A playbook for embedding verifiable client briefs, mentorship touchpoints and project simulations directly into semester schedules.",
  },
  {
    category: "Systems & Security",
    date: "July 2024",
    readTime: "7 min read",
    title: "Data Sovereignty & Student Privacy in Modern Institutional Software",
    excerpt:
      "Navigating GDPR, FERPA and emerging AI compliance standards without stifling analytics capabilities or educator visibility.",
  },
  {
    category: "Institutional Innovation",
    date: "June 2024",
    readTime: "9 min read",
    title: "The Distributed Campus: Re-evaluating Physical Spaces in a Digital-First World",
    excerpt:
      "Examining hybrid campus operations and the architectural technology investments delivering highest retention and community engagement.",
  },
];

const WHITEPAPERS = [
  {
    title: "2025 Institutional Readiness Benchmark",
    pages: "28 Pages",
    format: "PDF Report",
    desc: "A comprehensive comparative study on technology adoption, assessment modernization and student satisfaction across 50+ campuses.",
  },
  {
    title: "The Framework for Verifiable Project Learning",
    pages: "16 Pages",
    format: "Implementation Guide",
    desc: "Step-by-step guidance for department chairs and deans seeking to incorporate industry projects into accredited degree paths.",
  },
];

function FeaturedInsight() {
  return (
    <section id="featured-insights" className="relative overflow-hidden bg-background pt-16 pb-14 md:pt-24 md:pb-20 px-6 md:px-12 lg:px-16 xl:px-24">
      <WatermarkText text="RESEARCH" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal className="flex flex-col gap-4 max-w-xl">
          <SectionLabel>LEAD BRIEFING</SectionLabel>
          <h2 className="font-display text-[32px] sm:text-[42px] font-extrabold tracking-tight text-foreground leading-[1.08]">
            Featured Research & Viewpoints
          </h2>
        </ScrollReveal>

        {/* Lead Article Card */}
        <ScrollReveal delay={0.15}>
          <div className="mt-10 rounded-[28px] border border-brand-line/80 bg-brand-sand p-8 sm:p-10 lg:p-12 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-black/15">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className="rounded-full bg-brand-night text-white px-3.5 py-1 tracking-wider uppercase">
                {FEATURED_ARTICLE.tag}
              </span>
              <span className="flex items-center gap-1.5 text-brand-muted">
                <IconCalendar size={14} />
                {FEATURED_ARTICLE.date}
              </span>
              <span className="text-brand-line">•</span>
              <span className="flex items-center gap-1.5 text-brand-muted">
                <IconClock size={14} />
                {FEATURED_ARTICLE.readTime}
              </span>
            </div>

            <h3 className="mt-6 font-display text-[26px] sm:text-[34px] lg:text-[40px] font-extrabold leading-[1.12] text-foreground">
              {FEATURED_ARTICLE.title}
            </h3>

            <WordReveal className="mt-4 max-w-3xl text-[16px] sm:text-[18px] leading-[1.65] text-brand-body" delay={0.15}>
              {FEATURED_ARTICLE.summary}
            </WordReveal>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-brand-line/60">
              <span className="text-xs sm:text-sm font-semibold text-brand-muted">
                By {FEATURED_ARTICLE.author}
              </span>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-foreground transition-colors group"
              >
                <span>Read Full Executive Summary</span>
                <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

function ArticlesGrid() {
  return (
    <section className="relative overflow-hidden bg-brand-sand/30 border-t border-brand-line/70 py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-24">
      <WatermarkText text="ESSAYS" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="flex flex-col gap-3">
          <SectionLabel>PERSPECTIVES & ESSAYS</SectionLabel>
          <h2 className="font-display text-[28px] sm:text-[36px] font-extrabold text-foreground tracking-tight">
            Recent Analysis & Operational Frameworks
          </h2>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {INSIGHT_ARTICLES.map((art, idx) => (
            <ScrollReveal key={art.title} direction="up" delay={idx * 0.08}>
              <article
                className="flex h-full flex-col justify-between rounded-[22px] border border-brand-line/70 bg-white p-7 sm:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-black/15"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-brand-orange uppercase tracking-wider">{art.category}</span>
                    <div className="flex items-center gap-2 text-brand-muted font-medium">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  <h3 className="mt-4 font-display text-[20px] sm:text-[22px] font-extrabold leading-snug text-foreground">
                    {art.title}
                  </h3>
                  <p className="mt-3 text-sm leading-[1.6] text-brand-body">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-line/50 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-night">Educational Technology Series</span>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange hover:text-foreground transition-colors"
                  >
                    Request Briefing <IconArrowUpRight size={14} />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhitepapersSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 md:py-24 px-6 md:px-12 lg:px-16 xl:px-24 border-t border-brand-line">
      <WatermarkText text="PAPERS" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal direction="up" className="flex flex-col gap-3 max-w-xl">
          <SectionLabel>DOWNLOADABLE BRIEFS</SectionLabel>
          <h2 className="font-display text-[28px] sm:text-[36px] font-extrabold text-foreground tracking-tight">
            Comprehensive Institutional Whitepapers
          </h2>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {WHITEPAPERS.map((wp, idx) => (
            <ScrollReveal key={wp.title} direction="up" delay={idx * 0.1}>
              <div
                className="flex h-full flex-col justify-between rounded-[22px] border border-brand-line bg-brand-sand/60 p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold text-[#142B3B]">
                    <IconFileText size={18} className="text-brand-blue" />
                    <span>{wp.format}</span>
                    <span>•</span>
                    <span>{wp.pages}</span>
                  </div>
                  <h3 className="mt-4 font-display text-xl font-extrabold text-foreground">
                    {wp.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-brand-body">
                    {wp.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-line/60">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 text-sm font-bold text-brand-orange hover:text-foreground transition-colors"
                  >
                    Request Copy via Email <IconArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
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
            Leading conversations in educational technology, system architectures and meaningful learning outcomes.
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
          <p className="text-xs font-bold uppercase tracking-widest text-[#DFCFB6]">Editorial Submissions</p>
          <p className="text-sm text-brand-muted leading-relaxed">
            Interested in collaborating with the PlaceValue Research & Strategy team on publications?
          </p>
          <Link to="/contact" className="text-sm font-bold text-brand-orange hover:underline inline-flex items-center gap-1.5 mt-2">
            Get in touch with editorial <IconArrowUpRight size={14} />
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

export default function InsightsRoute() {
  return (
    <div className="min-h-full bg-background text-foreground">
      <PlainHero
        activeNav="Insights"
        badge="THOUGHT LEADERSHIP"
        badgeRight="PERSPECTIVES & ESSAYS"
        watermarkText="INSIGHTS"
        line1="Perspectives on the"
        line2Outline="Future of"
        line3Highlight="Learning."
        supportingText="Research, editorial viewpoints and practical frameworks on educational technology, artificial intelligence and modern institutional transformation."
        highlightTone="orange"
        scrollTargetId="featured-insights"
      />
      <FeaturedInsight />
      <ArticlesGrid />
      <WhitepapersSection />
      <SiteFooter />
    </div>
  );
}

