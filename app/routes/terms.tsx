import { Link } from "react-router";
import {
  IconArrowUpRight,
  IconShieldCheck,
  IconList,
  IconArrowUp,
  IconBrandLinkedin,
  IconBrandThreads,
  IconBrandInstagram,
  IconMail,
  IconPhone,
} from "@tabler/icons-react";
import { MotionNav, NAV_ITEMS } from "@/components/motion/MotionNav";
import { createSeoMeta, createCanonicalLink } from "@/lib/seo";

export function meta() {
  return createSeoMeta({
    title: "Terms of Service | PlaceValue",
    description:
      "Review the terms and conditions governing the use of PlaceValue websites, products, services, and educational platforms.",
    canonicalPath: "/terms",
  });
}

export function links() {
  return createCanonicalLink("/terms");
}

interface SectionItem {
  id: string;
  number: string;
  title: string;
  content: React.ReactNode;
}

const TERMS_SECTIONS: SectionItem[] = [
  {
    id: "acceptance-of-terms",
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        By accessing or using PlaceValue&apos;s websites, products, or services,
        you agree to be bound by these Terms &amp; Conditions and our{" "}
        <Link to="/privacy" className="text-brand-blue font-bold hover:underline">
          Privacy Policy
        </Link>
        . If you do not agree, you must not use the services.
      </p>
    ),
  },
  {
    id: "services-offered",
    number: "02",
    title: "Services Offered",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        PlaceValue provides technology-driven platforms, tools, and related
        services. We may update, modify, or discontinue any feature at our sole
        discretion, with or without notice, in order to improve quality,
        security, or performance.
      </p>
    ),
  },
  {
    id: "user-responsibilities",
    number: "03",
    title: "User Responsibilities",
    content: (
      <div className="flex flex-col gap-4 text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        <p>As a user of PlaceValue, you agree to:</p>
        <ul className="flex flex-col gap-3 pl-1">
          <li className="flex items-start gap-3">
            <span className="size-2 rounded-full bg-brand-orange mt-2.5 shrink-0" />
            <span>Provide accurate, current, and complete information when required.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="size-2 rounded-full bg-brand-orange mt-2.5 shrink-0" />
            <span>Maintain the confidentiality of your account credentials.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="size-2 rounded-full bg-brand-orange mt-2.5 shrink-0" />
            <span>Use the platform only for lawful purposes and in compliance with these Terms.</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="size-2 rounded-full bg-brand-orange mt-2.5 shrink-0" />
            <span>Not attempt to disrupt, reverse engineer, or compromise the integrity of the service.</span>
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    number: "04",
    title: "Intellectual Property",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        All content, trademarks, logos, software, and materials provided through
        PlaceValue are the property of PlaceValue or its licensors and are
        protected by applicable intellectual property laws. You may not copy,
        modify, distribute, or create derivative works without prior written
        consent.
      </p>
    ),
  },
  {
    id: "platform-usage",
    number: "05",
    title: "Platform Usage",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        Your access to the platform is granted on a limited, non-exclusive,
        non-transferable basis. Any misuse — including unauthorized access,
        automated scraping, or interference with other users — may result in
        immediate suspension or termination of access.
      </p>
    ),
  },
  {
    id: "limitation-of-liability",
    number: "06",
    title: "Limitation of Liability",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        To the maximum extent permitted by law, PlaceValue and its affiliates
        shall not be liable for any indirect, incidental, consequential, special,
        or punitive damages, including loss of profits, data, or goodwill,
        arising out of or related to your use of the services.
      </p>
    ),
  },
  {
    id: "service-availability",
    number: "07",
    title: "Service Availability",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        While we strive to keep our services available at all times, we do not
        guarantee uninterrupted access. Services may be temporarily unavailable
        due to maintenance, upgrades, or factors beyond our reasonable control.
      </p>
    ),
  },
  {
    id: "termination",
    number: "08",
    title: "Termination",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        We reserve the right to suspend or terminate your access to the services
        at any time, with or without notice, for conduct that we believe violates
        these Terms or is otherwise harmful to other users, PlaceValue, or third
        parties.
      </p>
    ),
  },
  {
    id: "governing-law",
    number: "09",
    title: "Governing Law",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        These Terms shall be governed by and construed in accordance with the
        applicable laws of the jurisdiction in which PlaceValue operates, without
        regard to its conflict of law principles. Any disputes shall be subject
        to the exclusive jurisdiction of the competent courts therein.
      </p>
    ),
  },
  {
    id: "contact-information",
    number: "10",
    title: "Contact Information",
    content: (
      <p className="text-stone-800 leading-[1.8] text-[16px] sm:text-[17px]">
        For any questions regarding these Terms &amp; Conditions, please contact us
        at{" "}
        <a
          href="mailto:legal@placevalue.in"
          className="text-brand-orange font-bold hover:underline inline-flex items-center gap-1"
        >
          legal@placevalue.in <IconArrowUpRight size={15} />
        </a>
        .
      </p>
    ),
  },
];

function SiteFooter() {
  return (
    <footer className="bg-brand-footer text-white px-6 md:px-12 lg:px-16 xl:px-24 pt-16 pb-12 border-t border-black/10 mt-24">
      <div className="max-w-7xl mx-auto">
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
            <p className="max-w-sm text-sm text-white/60 leading-relaxed">
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
                  className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/60 hover:text-white hover:border-brand-orange/40 hover:text-brand-orange transition"
                >
                  <Icon size={16} stroke={1.75} />
                </a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-3">
            <p className="text-xs font-bold uppercase tracking-widest text-[#DFCFB6]">Quick Links</p>
            <ul className="flex flex-col gap-2 text-sm text-white/60">
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
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
            >
              <IconMail size={15} />
              hello@placevalue.in
            </a>
            <a
              href="tel:+918317474679"
              className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition"
            >
              <IconPhone size={15} />
              +91 83174 74679
            </a>
            <p className="text-xs text-white/50 leading-relaxed mt-1">
              For legal and compliance notices, write to{" "}
              <a href="mailto:legal@placevalue.in" className="text-brand-orange hover:underline font-semibold">
                legal@placevalue.in
              </a>
              .
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 PlaceValue Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition">Privacy Policy</Link>
            <Link to="/terms" className="text-white font-semibold hover:underline">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function TermsRoute() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -110;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      history.pushState(null, "", `#${id}`);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-full bg-background text-foreground relative flex flex-col justify-between selection:bg-brand-orange selection:text-white">
      {/* Sticky Morphing Navigation */}
      <MotionNav activeNav="Home" theme="light" />

      {/* Blueprint grid background */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.035] bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:44px_44px]"
        aria-hidden="true"
      />

      {/* Ambient background glow */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-brand-blue/[0.04] blur-[140px] rounded-full"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-96 right-0 w-[500px] h-[500px] bg-brand-orange/[0.04] blur-[150px] rounded-full"
        aria-hidden="true"
      />

      {/* Dedicated Navbar Clearance Spacer: Guarantees title & badge never collide with header */}
      <div className="h-28 sm:h-36 md:h-44 w-full pointer-events-none shrink-0" aria-hidden="true" />

      {/* Main Container - Center Aligned */}
      <main className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-6 pb-20 sm:pt-8 md:pt-10 md:pb-28">
        {/* Header Block - Centered & Fully Clear of Navbar */}
        <div className="text-center max-w-2xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-stone-300/80 bg-white/80 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold tracking-[2px] text-stone-700 uppercase shadow-xs">
            <IconShieldCheck size={14} className="text-brand-orange" />
            <span>LEGAL &amp; COMPLIANCE</span>
          </div>

          <h1 className="mt-6 font-display text-[40px] sm:text-[52px] md:text-[60px] font-black tracking-[-0.035em] text-stone-950 leading-[1.05]">
            Terms &amp; Conditions
          </h1>

          <p className="mt-4 text-[17px] sm:text-[19px] text-stone-600 leading-[1.6]">
            Terms governing the use of PlaceValue services and platforms.
          </p>

          <p className="mt-3 text-[13px] font-mono text-stone-500 tracking-wide">
            Last updated: June 20, 2026
          </p>
        </div>

        {/* Centered Table of Contents Grid Card (Clean 2-column layout, no horizontal scrollbar) */}
        <div className="mt-12 mb-16 rounded-[24px] border border-stone-200/90 bg-white/80 backdrop-blur-md p-6 sm:p-8 shadow-xs">
          <div className="flex items-center justify-between pb-4 border-b border-stone-200/80 mb-5">
            <div className="flex items-center gap-2 font-mono text-xs font-bold tracking-widest text-stone-500 uppercase">
              <IconList size={16} className="text-brand-orange" />
              <span>TABLE OF CONTENTS</span>
            </div>
            <span className="font-mono text-xs text-stone-400">10 Sections</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            {TERMS_SECTIONS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => scrollToSection(e, item.id)}
                className="group flex items-center justify-between py-2.5 px-3.5 rounded-xl border border-stone-200/50 bg-stone-50/60 hover:bg-white hover:border-stone-300 hover:shadow-xs transition-all duration-150 text-left"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className="font-mono text-xs font-bold text-brand-orange shrink-0">
                    {item.number}
                  </span>
                  <span className="text-sm font-medium text-stone-800 group-hover:text-stone-950 truncate">
                    {item.title}
                  </span>
                </div>
                <IconArrowUpRight
                  size={14}
                  className="text-stone-400 group-hover:text-brand-orange transition-colors shrink-0 ml-2"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Centered Document Sections Body */}
        <div className="flex flex-col gap-12 sm:gap-14 w-full">
          {TERMS_SECTIONS.map((item) => (
            <article
              key={item.id}
              id={item.id}
              className="scroll-mt-28 rounded-[24px] border border-stone-200/80 bg-white/80 backdrop-blur-xs p-7 sm:p-10 shadow-xs hover:border-stone-300/90 transition-colors"
            >
              <div className="flex items-center justify-between pb-4 border-b border-stone-100 mb-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-brand-orange uppercase px-2.5 py-1 rounded-md bg-brand-orange/10 border border-brand-orange/20 select-none">
                    SECTION {item.number}
                  </span>
                  <h2 className="font-display text-[22px] sm:text-[26px] md:text-[28px] font-bold text-stone-950 tracking-tight">
                    {item.title}
                  </h2>
                </div>
                <button
                  type="button"
                  onClick={scrollToTop}
                  title="Back to top"
                  className="text-stone-400 hover:text-brand-orange p-1.5 rounded-lg hover:bg-stone-100 transition-colors hidden sm:inline-flex items-center gap-1 text-xs font-mono"
                >
                  <IconArrowUp size={14} />
                  <span>Top</span>
                </button>
              </div>

              <div className="w-full">
                {item.content}
              </div>
            </article>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
