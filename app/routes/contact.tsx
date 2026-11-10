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
  IconCheck,
  IconClock,
  IconCode,
  IconDeviceDesktop,
  IconInfoCircle,
  IconLock,
  IconMail,
  IconMapPin,
  IconMenu2,
  IconMessages,
  IconPhone,
  IconSettings,
  IconSparkles,
  IconX,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { PlainHero } from "@/components/layout/PlainHero";
import { ScrollReveal, WatermarkText, WordReveal } from "@/components/motion/MotionText";

export function meta() {
  return [
    { title: "Contact Us — PlaceValue" },
    {
      name: "description",
      content:
        "Educational institutions, businesses, startups and individuals — bring your ideas, challenges and ambitions to PlaceValue. Let's explore what we can build together.",
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

function ContactFormSection({
  selectedType,
  onTypeChange,
}: {
  selectedType: string;
  onTypeChange: (type: string) => void;
}) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    phone: "",
    enquiryType: selectedType || "",
    subject: "",
    message: "",
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  if (selectedType && formData.enquiryType !== selectedType) {
    setFormData((prev) => ({ ...prev, enquiryType: selectedType }));
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.agreed) {
      alert("Please fill in all required fields and accept the Privacy Policy.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section
      id="conversation-form"
      className="relative overflow-hidden px-6 py-10 md:px-12 md:py-16 lg:px-16 xl:px-24"
    >
      <WatermarkText text="CONNECT" />
      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-start">
        {/* Left: Contact Form Card */}
        <ScrollReveal direction="up" delay={0.1} className="lg:col-span-7">
          <div className="rounded-[28px] border border-brand-line bg-[#ebe2d8] p-6 sm:p-10 shadow-xs">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Tell us what&apos;s on your mind.
          </h2>
          <p className="mt-1 text-xs text-brand-muted mb-7">
            A little context helps us understand your needs. Fields marked * are required.
          </p>

          {submitted ? (
            <div className="rounded-2xl border border-brand-orange/30 bg-white/90 p-8 text-center backdrop-blur-xs">
              <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-brand-orange/15 text-brand-orange mb-4">
                <IconCheck size={28} />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground">
                Thank you for reaching out!
              </h3>
              <p className="mt-2 text-sm text-brand-body leading-relaxed max-w-md mx-auto">
                We have received your enquiry regarding{" "}
                <span className="font-semibold text-brand-orange">
                  {formData.enquiryType || "PlaceValue services"}
                </span>
                . Our team will review your message and connect with you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    organisation: "",
                    phone: "",
                    enquiryType: "",
                    subject: "",
                    message: "",
                    agreed: false,
                  });
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-night px-6 py-2.5 text-xs font-bold text-white shadow-xs hover:bg-black transition"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Row 1: Name & Work Email */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs font-bold text-foreground mb-1.5"
                  >
                    Name *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="Your full name"
                    className="w-full rounded-[14px] border border-brand-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-brand-muted/70 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs font-bold text-foreground mb-1.5"
                  >
                    Work Email *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="Your work email address"
                    className="w-full rounded-[14px] border border-brand-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-brand-muted/70 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden transition"
                  />
                </div>
              </div>

              {/* Row 2: Organisation & Phone */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="contact-org"
                    className="block text-xs font-bold text-foreground mb-1.5"
                  >
                    Organisation (optional)
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={formData.organisation}
                    onChange={(e) =>
                      setFormData({ ...formData, organisation: e.target.value })
                    }
                    placeholder="Your organisation"
                    className="w-full rounded-[14px] border border-brand-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-brand-muted/70 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden transition"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    className="block text-xs font-bold text-foreground mb-1.5"
                  >
                    Phone Number (optional)
                  </label>
                  <input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    placeholder="Include country code"
                    className="w-full rounded-[14px] border border-brand-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-brand-muted/70 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden transition"
                  />
                </div>
              </div>

              {/* Row 3: Enquiry Type */}
              <div>
                <label
                  htmlFor="contact-enquiry"
                  className="block text-xs font-bold text-foreground mb-1.5"
                >
                  Enquiry Type *
                </label>
                <div className="relative">
                  <select
                    id="contact-enquiry"
                    required
                    value={formData.enquiryType}
                    onChange={(e) => {
                      setFormData({ ...formData, enquiryType: e.target.value });
                      onTypeChange(e.target.value);
                    }}
                    className="w-full appearance-none rounded-[14px] border border-brand-line bg-white px-4 py-3 text-sm text-foreground focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden transition cursor-pointer"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="Technology Consulting">Technology Consulting</option>
                    <option value="Software Development">Software Development</option>
                    <option value="AI & Automation">AI & Automation</option>
                    <option value="TASKVERSE">TASKVERSE</option>
                    <option value="General Enquiries">General Enquiries</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-brand-muted">
                    <IconArrowDown size={15} />
                  </div>
                </div>
              </div>

              {/* Row 4: Subject */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-xs font-bold text-foreground mb-1.5"
                >
                  Subject *
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  placeholder="What would you like to discuss?"
                  className="w-full rounded-[14px] border border-brand-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-brand-muted/70 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden transition"
                />
              </div>

              {/* Row 5: Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold text-foreground mb-1.5"
                >
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Tell us about your idea, challenge or goals..."
                  className="w-full rounded-[14px] border border-brand-line bg-white px-4 py-3 text-sm text-foreground placeholder:text-brand-muted/70 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 focus:outline-hidden transition resize-y"
                />
              </div>

              {/* Checkbox agreement */}
              <div className="pt-1">
                <label className="flex items-start gap-3 cursor-pointer text-xs text-brand-body leading-relaxed">
                  <input
                    type="checkbox"
                    required
                    checked={formData.agreed}
                    onChange={(e) =>
                      setFormData({ ...formData, agreed: e.target.checked })
                    }
                    className="mt-0.5 size-4 rounded-sm border-brand-line text-brand-orange accent-brand-orange focus:ring-brand-orange"
                  />
                  <span>
                    I agree to be contacted about this enquiry and have read the{" "}
                    <Link to="/privacy" className="underline hover:text-foreground">
                      Privacy Policy
                    </Link>
                    . *
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-105 active:scale-95 disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? "Sending..." : "Send Enquiry"}
                  <IconArrowRight size={15} />
                </button>
              </div>

              {/* Sensitive Info Disclaimer */}
              <p className="flex items-center gap-1.5 text-[11px] text-brand-muted pt-1">
                <IconLock size={13} className="shrink-0 text-brand-muted" />
                Please don&apos;t include passwords or sensitive personal information.
              </p>
            </form>
          )}
        </div>
        </ScrollReveal>

        {/* Right: "A conversation starts here." direct contact info */}
        <ScrollReveal direction="up" delay={0.2} className="lg:col-span-5">
          <div className="flex flex-col">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            A conversation starts here.
          </h2>
          <WordReveal className="mt-2 text-sm sm:text-base leading-relaxed text-brand-body mb-6" delay={0.15}>
            Prefer to connect directly? Our official contact channels will be
            shared here once confirmed.
          </WordReveal>

          {/* Verification notice box */}
          <div className="mb-6 flex items-start gap-3 rounded-2xl border border-brand-line bg-brand-sand/60 p-4 text-xs text-brand-muted leading-relaxed">
            <IconInfoCircle size={18} className="shrink-0 text-brand-muted mt-0.5" />
            <span>
              Contact details are awaiting verification. The placeholders below are not
              active contact channels.
            </span>
          </div>

          {/* Direct channels list */}
          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center gap-3.5 rounded-[18px] border border-brand-line bg-brand-sand/40 p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-sand border border-brand-line text-foreground">
                <IconMail size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  Business email
                </span>
                <span className="text-sm font-bold text-foreground">
                  [Email to be confirmed]
                </span>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3.5 rounded-[18px] border border-brand-line bg-brand-sand/40 p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-sand border border-brand-line text-foreground">
                <IconPhone size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  Phone number
                </span>
                <span className="text-sm font-bold text-foreground">
                  [Phone number to be confirmed]
                </span>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-3.5 rounded-[18px] border border-brand-line bg-brand-sand/40 p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-sand border border-brand-line text-foreground">
                <IconMapPin size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  Office address
                </span>
                <span className="text-sm font-bold text-foreground">
                  [Office address to be confirmed]
                </span>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3.5 rounded-[18px] border border-brand-line bg-brand-sand/40 p-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand-sand border border-brand-line text-foreground">
                <IconClock size={18} />
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-muted">
                  Working hours
                </span>
                <span className="text-sm font-bold text-foreground">
                  [Working hours to be confirmed]
                </span>
              </div>
            </div>
          </div>

          {/* Find us online */}
          <div className="mt-8 border-t border-brand-line pt-6">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase block mb-3">
              Find us online
            </span>
            <div className="flex flex-wrap gap-2.5">
              {[
                { name: "LinkedIn", icon: IconBrandLinkedin },
                { name: "X", icon: IconBrandX },
                { name: "YouTube", icon: IconBrandYoutube },
                { name: "Instagram", icon: IconBrandInstagram },
              ].map(({ name, icon: Icon }) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-line bg-brand-sand/70 px-4 py-2 text-xs font-semibold text-foreground"
                >
                  <Icon size={14} />
                  {name}
                  <IconArrowUpRight size={12} className="text-brand-muted" />
                </span>
              ))}
            </div>
            <p className="mt-2 text-xs italic text-brand-muted">
              Social destinations · to be confirmed
            </p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

const SERVICE_ENQUIRY_CARDS = [
  {
    type: "Technology Consulting",
    tone: "orange",
    icon: IconDeviceDesktop,
    badge: "Strategy",
    highlight: "Audits · Architecture · Roadmaps",
    body: "Technology strategy, system reviews and practical roadmaps. Bring us the challenge behind your next decision.",
  },
  {
    type: "Software Development",
    tone: "blue",
    icon: IconCode,
    badge: "Build",
    highlight: "Products · Platforms · Integrations",
    body: "A new product, a better platform or a connected workflow. Let's explore what your users really need.",
  },
  {
    type: "AI & Automation",
    tone: "orange",
    icon: IconSettings,
    badge: "Intelligence",
    highlight: "AI integration · Workflow automation",
    body: "Explore useful AI and smarter workflows, with human needs and responsible implementation at the centre.",
  },
  {
    type: "TASKVERSE",
    tone: "blue",
    icon: IconSparkles,
    badge: "Platform",
    highlight: "AI assessment · Learning pathways",
    body: "Interested in AI-powered assessment and learning? Talk to us about the platform and your institution's needs.",
    linkAction: "Let's talk about it",
  },
  {
    type: "General Enquiries",
    tone: "orange",
    icon: IconMessages,
    badge: "Connect",
    highlight: "Partnerships · Explorations · Questions",
    body: "Partnerships, opportunities or a question that doesn't fit a category. There's a place for your conversation here.",
    linkAction: "Let's talk about it",
  },
];

function WhatCanWeHelpWith({
  onSelectType,
}: {
  onSelectType: (type: string) => void;
}) {
  return (
    <section className="relative overflow-hidden border-t border-brand-line px-6 py-20 md:px-12 md:py-24 lg:px-16 xl:px-24">
      <WatermarkText text="SERVICES" />
      {/* Header */}
      <ScrollReveal direction="up" className="relative z-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
        <div>
          <SectionLabel>WHAT CAN WE HELP WITH?</SectionLabel>
          <h2 className="mt-6 font-display text-[36px] sm:text-[46px] lg:text-[52px] leading-[1.05] font-extrabold tracking-[-0.03em] text-foreground">
            Different ideas.
            <br />
            Shared possibilities.
          </h2>
        </div>
        <p className="max-w-md text-xs sm:text-sm text-brand-body leading-relaxed md:text-right">
          Choose the closest match in the enquiry form. Not sure where to start?
          General Enquiries is a good place.
        </p>
      </ScrollReveal>

      {/* Grid: 3 cards on top, 2 cards on bottom */}
      <div className="relative z-10 space-y-6">
        {/* Top 3 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {SERVICE_ENQUIRY_CARDS.slice(0, 3).map((card) => {
            const isOrange = card.tone === "orange";
            const Icon = card.icon;

            return (
              <div
                key={card.type}
                className="flex flex-col justify-between rounded-[24px] border border-brand-line bg-brand-sand/50 p-6 sm:p-7 shadow-xs hover:bg-brand-sand/75 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-xl text-white shadow-xs",
                        isOrange ? "bg-brand-orange" : "bg-brand-blue",
                      )}
                    >
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {card.type}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-body">
                    {card.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-line/60 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wider",
                        isOrange ? "bg-brand-orange" : "bg-brand-blue",
                      )}
                    >
                      {card.badge}
                    </span>
                    <span className="text-[11px] font-medium text-brand-muted truncate">
                      {card.highlight}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      onSelectType(card.type);
                      document
                        .getElementById("conversation-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-xs font-bold text-foreground hover:text-brand-orange transition shrink-0 ml-2 cursor-pointer"
                  >
                    Select ↗
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom 2 Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICE_ENQUIRY_CARDS.slice(3, 5).map((card) => {
            const isOrange = card.tone === "orange";
            const Icon = card.icon;

            return (
              <div
                key={card.type}
                className="flex flex-col justify-between rounded-[24px] border border-brand-line bg-brand-sand/50 p-6 sm:p-7 shadow-xs hover:bg-brand-sand/75 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={cn(
                        "flex size-10 items-center justify-center rounded-xl text-white shadow-xs",
                        isOrange ? "bg-brand-orange" : "bg-brand-blue",
                      )}
                    >
                      <Icon size={20} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-bold tracking-tight text-foreground">
                    {card.type}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-brand-body">
                    {card.body}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-brand-line/60 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => {
                      onSelectType(card.type);
                      document
                        .getElementById("conversation-form")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-foreground hover:text-brand-orange transition cursor-pointer"
                  >
                    <span>{card.linkAction || "Let's talk about it"}</span>
                    <IconArrowUpRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PreFooterConversation() {
  return (
    <section className="relative overflow-hidden border-t border-white/10 bg-brand-night px-6 py-20 text-white md:px-12 md:py-28 lg:px-16 xl:px-24">
      <WatermarkText text="PARTNER" />
      <div className="relative z-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14 items-center max-w-7xl mx-auto">
        {/* Left: Meeting Scene Photo */}
        <ScrollReveal direction="up" delay={0.1} className="lg:col-span-5">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] border border-white/15 bg-white/5 shadow-md">
            <img
              src="/consultancy-meeting.jpg"
              alt="PlaceValue strategic consulting collaboration scene"
              className="h-full w-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs italic text-white/50">
            Illustrative collaboration scene — not a PlaceValue team photograph.
          </p>
        </ScrollReveal>

        {/* Right: CTA Copy */}
        <ScrollReveal direction="up" delay={0.2} className="lg:col-span-7 flex flex-col justify-center">
          <span className="inline-flex w-fit items-center rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-[10px] sm:text-[11px] font-bold tracking-[2px] text-white/80 uppercase">
            LET&apos;S BUILD TOGETHER
          </span>

          <h2 className="mt-6 font-display text-[38px] sm:text-[50px] lg:text-[58px] leading-[1.05] font-extrabold tracking-[-0.035em] text-white">
            <span>Good things start with a </span>
            <span className="text-brand-orange text-outline font-extrabold">
              conversation.
            </span>
          </h2>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-white/70 max-w-xl">
            You don&apos;t need a finished brief. Share a question, an early idea
            or an ambition — and let&apos;s find a thoughtful way forward.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <a
              href="#conversation-form"
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-105 active:scale-95"
            >
              Start a Conversation
              <IconArrowRight size={15} />
            </a>
          </div>
        </ScrollReveal>
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
          <p className="text-xs text-brand-muted italic mt-1">
            Social links · awaiting verification
          </p>
          <div className="mt-1 flex items-center gap-3 text-brand-muted">
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
              const isActive = item.label === "Contact";
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
          <span className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted">
            <IconMail size={14} />
            Email · to be confirmed
          </span>
          <span className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted">
            <IconPhone size={14} />
            Phone · to be confirmed
          </span>
          <span className="flex items-center gap-3 text-[13px] leading-4 text-brand-muted">
            <IconMapPin size={14} />
            Office address · to be confirmed
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

export default function ContactRoute() {
  const [selectedEnquiry, setSelectedEnquiry] = useState("");

  return (
    <div className="min-h-full bg-background text-foreground">
      <PlainHero
        activeNav="Contact"
        badge="LET'S BUILD TOGETHER"
        badgeRight="START A CONVERSATION"
        watermarkText="CONNECT"
        line1="Good things start"
        line2Outline="with a"
        line3Highlight="conversation."
        supportingText="You don't need a finished brief. Share a question, an early idea or an ambition — and let's find a thoughtful way forward together."
        highlightTone="orange"
        scrollTargetId="conversation-form"
      />
      <ContactFormSection
        selectedType={selectedEnquiry}
        onTypeChange={setSelectedEnquiry}
      />
      <WhatCanWeHelpWith onSelectType={setSelectedEnquiry} />
      <PreFooterConversation />
      <SiteFooter />
    </div>
  );
}

