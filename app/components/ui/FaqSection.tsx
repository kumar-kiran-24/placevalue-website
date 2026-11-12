import { useState } from "react";
import { Link } from "react-router";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { IconArrowRight } from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { ScrollReveal, WatermarkText } from "@/components/motion/MotionText";

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface FaqSectionProps {
  id?: string;
  badge?: string;
  headingLine1?: string;
  headingLine2?: string;
  items?: FaqItem[];
  watermarkText?: string;
  accentDotColor?: "blue" | "orange";
  allowMultiple?: boolean;
  defaultOpenId?: string;
  showContactPrompt?: boolean;
  className?: string;
}

/**
 * Core PlaceValue FAQ Dataset (Homepage)
 */
export const DEFAULT_PLACEVALUE_FAQS: FaqItem[] = [
  {
    id: "what-does-placevalue-do",
    question: "What does PlaceValue do?",
    answer:
      "PlaceValue connects education, technology, and strategy. We partner with educational institutions, enterprises, and student communities to design modern digital platforms, streamline academic and organizational workflows, and execute high-impact technology initiatives.",
  },
  {
    id: "who-does-placevalue-work-with",
    question: "Who does PlaceValue work with?",
    answer:
      "We collaborate across the education ecosystem — from universities, colleges, and schools to education technology startups and established enterprises. We also engage directly with students through structured mentorship, industry projects, and skill-building programmes.",
  },
  {
    id: "what-services-does-placevalue-offer",
    question: "What services does PlaceValue offer?",
    answer:
      "Our core services encompass Strategic Technology Consulting (digital roadmaps and system architecture), Custom Software Development (enterprise portals and educational tools), AI & Automation (intelligent workflows and data analytics), and Student Talent & Internship Programmes.",
  },
  {
    id: "what-is-taskverse",
    question: "What is TASKVERSE?",
    answer:
      "TASKVERSE is PlaceValue's proprietary educational and assessment platform. It delivers adaptive evaluation pathways, real-time analytics, skill benchmarking, and verifiable project portfolios to help educators assess capability accurately and help learners grow with confidence.",
  },
  {
    id: "customized-technology-solutions",
    question: "Do you provide customized technology solutions?",
    answer:
      "Yes. Every institution and business operates with distinct legacy systems, user requirements, and operational goals. We design, build, and deploy bespoke architectures tailored specifically to your institution's infrastructure and long-term roadmap.",
  },
  {
    id: "how-can-we-start-working",
    question: "How can we start working with PlaceValue?",
    answer:
      "You can begin by reaching out via our Contact page. We schedule an initial discovery conversation to understand your goals and current challenges, after which we define a tailored scope of work, project milestones, and an agile delivery plan.",
  },
  {
    id: "student-opportunities",
    question: "How can students explore opportunities with PlaceValue?",
    answer:
      "Students can connect with us through campus partnership programmes or direct enquiry on our Contact page. We provide hands-on internship opportunities, real-world engineering project experience, and dedicated mentorship from industry professionals.",
  },
];

/**
 * Consultancy Page FAQ Dataset
 */
export const CONSULTANCY_FAQS: FaqItem[] = [
  {
    id: "consultancy-methodology",
    question: "What is PlaceValue's consultancy methodology?",
    answer:
      "We follow a collaborative 4-phase framework: Discovery & Architecture, System Design & Prototyping, Agile Engineering & Integration, and Adoption & Continuous Optimisation. This ensures strategic clarity before any code is committed.",
  },
  {
    id: "legacy-integration",
    question: "How do you handle legacy institutional integrations?",
    answer:
      "We build robust, secure API layers and middleware that bridge legacy student information systems (SIS), ERPs, and database registries with modern web and cloud applications without disrupting ongoing operations.",
  },
  {
    id: "ai-readiness",
    question: "Can PlaceValue assist with AI adoption and automation strategy?",
    answer:
      "Yes. We assess institutional data maturity, design governance and privacy protocols, and deploy targeted AI solutions for automated workflows, learner analytics, and administrative efficiency.",
  },
  {
    id: "project-timelines",
    question: "How long does a strategic consultancy engagement take?",
    answer:
      "Engagements range from focused 4-to-6 week architectural audits and roadmap sprints to multi-quarter phased product delivery programmes, structured around clear milestone deliverables.",
  },
];

/**
 * TASKVERSE Page FAQ Dataset
 */
export const TASKVERSE_FAQS: FaqItem[] = [
  {
    id: "taskverse-difference",
    question: "How does TASKVERSE differ from traditional learning management systems?",
    answer:
      "Unlike static repositories, TASKVERSE focuses on adaptive assessment, real-time capability diagnostics, and cryptographically verifiable skill portfolios based on live project contributions rather than rote memorisation.",
  },
  {
    id: "lms-integration",
    question: "Can TASKVERSE integrate with our existing campus LMS?",
    answer:
      "Yes. TASKVERSE is architected with modern LTI standards and secure REST APIs, enabling frictionless single sign-on (SSO) and roster synchronisation with existing campus infrastructure.",
  },
  {
    id: "data-privacy-security",
    question: "How is institutional and student data protected?",
    answer:
      "Security and privacy are core to our architecture. We employ end-to-end encryption, strict role-based access controls, and strict compliance with global educational privacy regulations.",
  },
  {
    id: "portfolio-verification",
    question: "How do employers and universities verify student portfolios?",
    answer:
      "TASKVERSE generates tamper-evident, cryptographically signed project credentials that students can share with prospective employers and higher education admissions teams for instant verification.",
  },
];

/**
 * Contact Page FAQ Dataset
 */
export const CONTACT_FAQS: FaqItem[] = [
  {
    id: "contact-response-time",
    question: "How quickly does the PlaceValue team respond?",
    answer:
      "Our team reviews new institutional enquiries within 24–48 business hours. A practice lead will follow up directly to arrange a discovery conversation.",
  },
  {
    id: "nda-confidentiality",
    question: "Can PlaceValue sign a mutual NDA before initial discussions?",
    answer:
      "Yes. We routinely execute mutual non-disclosure agreements with universities, enterprises, and partners to ensure complete confidentiality from the very first discovery call.",
  },
  {
    id: "detailed-brief-needed",
    question: "Do we need a finalized technical brief before contacting you?",
    answer:
      "No. Many of our most successful partnerships begin with an exploratory question or high-level strategic challenge. We assist in formulating the technical specifications during initial discovery.",
  },
  {
    id: "location-remote",
    question: "Do you offer remote or on-premise collaboration?",
    answer:
      "We operate globally with a hybrid delivery model, supporting distributed engineering teams and on-site discovery workshops across key partner campuses and enterprise hubs.",
  },
];

/**
 * About Page FAQ Dataset
 */
export const ABOUT_FAQS: FaqItem[] = [
  {
    id: "founding-vision",
    question: "What is the core purpose behind PlaceValue?",
    answer:
      "PlaceValue was founded to eliminate the disconnect between modern technological capabilities and real-world educational practices. We build tools and strategies that empower people rather than replace them.",
  },
  {
    id: "campus-partnerships",
    question: "How can universities and schools form institutional partnerships?",
    answer:
      "Institutions can partner with PlaceValue for custom software engineering, curriculum technology audits, student internship cohorts, or enterprise licensing of the TASKVERSE platform.",
  },
  {
    id: "student-involvement",
    question: "How are students directly involved in PlaceValue's ecosystem?",
    answer:
      "Students contribute to production engineering initiatives, receive direct industry mentorship, and develop verifiable project portfolios that tangibly accelerate their professional careers.",
  },
];

/**
 * Animated Plus / Minus Square Button
 */
function AccordionToggleButton({ isOpen }: { isOpen: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      className={cn(
        "size-9 sm:size-10 rounded-lg border border-black/10 sm:border-black/15 bg-white/70 flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs group-hover:bg-white group-hover:border-foreground/30",
        isOpen && "bg-white border-brand-orange/40 text-brand-orange shadow-xs"
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 sm:size-4.5"
      >
        {/* Horizontal bar - always present */}
        <line x1="5" y1="12" x2="19" y2="12" />

        {/* Vertical bar - smoothly scales to 0 and fades out when open */}
        <motion.line
          x1="12"
          y1="5"
          x2="12"
          y2="19"
          initial={false}
          animate={{
            scaleY: isOpen ? 0 : 1,
            opacity: isOpen ? 0 : 1,
          }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.24,
            ease: [0.16, 1, 0.3, 1],
          }}
          style={{ originX: "12px", originY: "12px" }}
        />
      </svg>
    </div>
  );
}

/**
 * Individual Accordion Question Item
 */
function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const shouldReduceMotion = useReducedMotion();
  const questionId = `faq-q-${item.id}`;
  const answerId = `faq-a-${item.id}`;

  return (
    <div className="border-b border-brand-line/70 transition-colors">
      <button
        type="button"
        id={questionId}
        aria-expanded={isOpen}
        aria-controls={answerId}
        onClick={onToggle}
        className="group flex w-full items-center justify-between py-6 sm:py-7 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/50 rounded-sm cursor-pointer"
      >
        <span className="pr-4 font-display text-[17px] sm:text-[19px] md:text-[21px] font-bold text-foreground tracking-[-0.015em] transition-colors group-hover:text-brand-orange">
          {item.question}
        </span>
        <AccordionToggleButton isOpen={isOpen} />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={answerId}
            role="region"
            aria-labelledby={questionId}
            initial={shouldReduceMotion ? { opacity: 1, height: "auto" } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: shouldReduceMotion ? 0 : 0.36, ease: [0.16, 1, 0.3, 1] },
              opacity: { duration: shouldReduceMotion ? 0 : 0.24, delay: shouldReduceMotion ? 0 : 0.05 },
            }}
            className="overflow-hidden"
          >
            <div className="pb-6 sm:pb-7 pr-4 sm:pr-14 text-[15px] sm:text-[16px] leading-[1.68] text-brand-body font-normal">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Editorial FAQ Section matching the split-screen reference screenshot:
 * - Left column: Blue circular dot, uppercase label, bold split-line heading "FREQUENTLY ASKED"
 * - Right column: Clean accordion list separated by subtle horizontal dividers with square plus/minus toggle buttons
 */
export function FaqSection({
  id = "faq",
  badge = "COMMON QUESTIONS",
  headingLine1 = "FREQUENTLY",
  headingLine2 = "ASKED",
  items = DEFAULT_PLACEVALUE_FAQS,
  watermarkText = "QUESTIONS",
  accentDotColor = "blue",
  allowMultiple = true,
  defaultOpenId,
  showContactPrompt = true,
  className,
}: FaqSectionProps) {
  // State to track open item ids
  const [openIds, setOpenIds] = useState<string[]>(() =>
    defaultOpenId ? [defaultOpenId] : []
  );

  const toggleItem = (itemId: string) => {
    setOpenIds((prev) => {
      const isAlreadyOpen = prev.includes(itemId);
      if (allowMultiple) {
        return isAlreadyOpen ? prev.filter((id) => id !== itemId) : [...prev, itemId];
      }
      return isAlreadyOpen ? [] : [itemId];
    });
  };

  const dotColorClass =
    accentDotColor === "orange" ? "bg-brand-orange" : "bg-brand-blue";

  return (
    <section
      id={id}
      aria-label="Frequently Asked Questions"
      className={cn(
        "relative overflow-hidden bg-background px-6 py-20 md:px-12 md:py-28 lg:px-16 xl:px-24 border-t border-brand-line/60 text-foreground",
        className
      )}
    >
      {/* Oversized background watermark */}
      <WatermarkText text={watermarkText} opacity={0.035} />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* LEFT COLUMN: Fixed/Sticky Visual Hierarchy with dot, label & bold 2-line heading */}
          <ScrollReveal direction="up" className="lg:col-span-5 xl:col-span-4 lg:sticky lg:top-28 flex flex-col items-center text-center lg:items-start lg:text-left">
            {/* Small decorative circular accent marker matching reference */}
            <div
              className={cn("size-3 sm:size-3.5 rounded-full mb-6 sm:mb-8 mx-auto lg:mx-0", dotColorClass)}
              aria-hidden="true"
            />

            {/* Small uppercase label */}
            <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.22em] text-brand-muted uppercase block font-sans">
              {badge}
            </span>

            {/* Large, bold, oversized heading split across two lines */}
            <h2 className="mt-4 sm:mt-5 font-display font-black text-[46px] sm:text-[58px] md:text-[66px] lg:text-[72px] leading-[0.92] tracking-[-0.04em] text-foreground uppercase text-center lg:text-left">
              <span className="block">{headingLine1}</span>
              <span className="block mt-1 sm:mt-1.5">{headingLine2}</span>
            </h2>

            {showContactPrompt && (
              <div className="mt-8 sm:mt-10 pt-6 border-t border-brand-line/60 flex flex-col items-center text-center lg:items-start lg:text-left w-full">
                <p className="text-sm leading-relaxed text-brand-muted max-w-sm mx-auto lg:mx-0">
                  Have a specific question about your institution or project? We are always glad to connect.
                </p>
                <Link
                  to="/contact"
                  className="mt-3.5 inline-flex items-center justify-center lg:justify-start gap-2 text-sm font-bold text-brand-orange hover:gap-3 transition-all"
                >
                  <span>Speak with our team</span>
                  <IconArrowRight size={15} />
                </Link>
              </div>
            )}
          </ScrollReveal>

          {/* RIGHT COLUMN: Vertically stacked accordion list */}
          <ScrollReveal delay={0.12} direction="up" className="lg:col-span-7 xl:col-span-8">
            <div className="border-t border-brand-line/70">
              {items.map((item) => (
                <AccordionItem
                  key={item.id}
                  item={item}
                  isOpen={openIds.includes(item.id)}
                  onToggle={() => toggleItem(item.id)}
                />
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

