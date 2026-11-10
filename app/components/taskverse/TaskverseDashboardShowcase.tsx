import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  IconActivity,
  IconArrowUpRight,
  IconCertificate,
  IconChartBar,
  IconCheck,
  IconCpu,
  IconDatabase,
  IconFlame,
  IconLayersLinked,
  IconRefresh,
  IconShieldCheck,
  IconTrendingUp,
  IconUsers,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";

interface CompetencyDomain {
  name: string;
  code: string;
  mastery: number;
  highlight?: boolean;
  benchmark: number;
}

const COMPETENCY_DOMAINS: CompetencyDomain[] = [
  { name: "Systems Logic", code: "SYS", mastery: 94, benchmark: 78 },
  { name: "Data Structures", code: "DSA", mastery: 88, benchmark: 72 },
  { name: "Algorithmic Design", code: "ALG", mastery: 96, benchmark: 80 },
  { name: "Distributed Systems", code: "DST", mastery: 82, highlight: true, benchmark: 68 },
  { name: "Cloud & APIs", code: "CLD", mastery: 91, benchmark: 75 },
  { name: "Applied AI & Logic", code: "AI", mastery: 87, benchmark: 70 },
];

export function TaskverseDashboardShowcase({ className }: { className?: string }) {
  const shouldReduceMotion = useReducedMotion();
  const [activeDomain, setActiveDomain] = useState<string>("DST");
  const [activeTab, setActiveTab] = useState<"overview" | "telemetry">("overview");

  const defaultDomain: CompetencyDomain = {
    name: "Distributed Systems",
    code: "DST",
    mastery: 82,
    highlight: true,
    benchmark: 68,
  };
  const selectedDomainData: CompetencyDomain =
    COMPETENCY_DOMAINS.find((d) => d.code === activeDomain) ?? defaultDomain;

  return (
    <div
      className={cn(
        "relative rounded-[26px] sm:rounded-[32px] border border-white/12 bg-[#0C1A24]/90 p-5 sm:p-7 md:p-8 text-white shadow-[0_24px_70px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl overflow-hidden group",
        className
      )}
    >
      {/* Ambient background glow accents */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-brand-blue/20 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-20 -left-20 size-64 rounded-full bg-brand-orange/15 blur-[80px]"
        aria-hidden="true"
      />

      {/* Top Header Bar */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-5">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-brand-blue shadow-inner">
            <IconCpu size={19} />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-sm sm:text-[15px] font-bold tracking-tight text-white">
                TASKVERSE Enterprise Engine
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-blue/15 px-2.5 py-0.5 text-[10px] font-semibold text-brand-blue border border-brand-blue/30">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-blue"></span>
                </span>
                v3.4 Live
              </span>
            </div>
            <p className="text-[11px] text-white/50 font-medium">
              42 Institutional Nodes · Active Stream
            </p>
          </div>
        </div>

        {/* Tab Pills */}
        <div className="flex items-center rounded-full bg-white/5 p-1 border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("overview")}
            className={cn(
              "px-3 py-1 rounded-full font-medium transition-all text-xs",
              activeTab === "overview"
                ? "bg-white/15 text-white shadow-xs"
                : "text-white/60 hover:text-white"
            )}
          >
            Analytics
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("telemetry")}
            className={cn(
              "px-3 py-1 rounded-full font-medium transition-all text-xs",
              activeTab === "telemetry"
                ? "bg-white/15 text-white shadow-xs"
                : "text-white/60 hover:text-white"
            )}
          >
            Live Telemetry
          </button>
        </div>
      </div>

      {/* Top 3 KPI Metrics Grid */}
      <div className="relative z-10 mt-5 grid grid-cols-3 gap-2.5 sm:gap-3.5">
        {/* KPI 1 */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 sm:p-4.5 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/15">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Evaluated
            </span>
            <span className="hidden sm:inline-flex items-center gap-0.5 text-[10px] font-bold text-emerald-400">
              <IconTrendingUp size={12} />
              +14%
            </span>
          </div>
          <p className="mt-1.5 font-display text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight text-white leading-tight">
            12,480
          </p>
          <p className="mt-1 text-[10px] sm:text-[11px] text-white/60 truncate">
            Active Learners
          </p>
        </div>

        {/* KPI 2 */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 sm:p-4.5 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/15">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Completion
            </span>
            <span className="hidden sm:inline-flex items-center rounded-full bg-brand-blue/20 px-1.5 py-0.5 text-[9px] font-bold text-brand-blue">
              Top 5%
            </span>
          </div>
          <p className="mt-1.5 font-display text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight text-brand-blue leading-tight">
            95.4%
          </p>
          <p className="mt-1 text-[10px] sm:text-[11px] text-white/60 truncate">
            Curriculum Mastery
          </p>
        </div>

        {/* KPI 3 */}
        <div className="rounded-2xl border border-white/8 bg-white/[0.03] p-3.5 sm:p-4.5 transition-all duration-200 hover:bg-white/[0.06] hover:border-white/15">
          <div className="flex items-center justify-between">
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/50">
              Credentials
            </span>
            <span className="hidden sm:inline-flex items-center text-brand-orange">
              <IconShieldCheck size={13} />
            </span>
          </div>
          <p className="mt-1.5 font-display text-xl sm:text-2xl lg:text-[28px] font-black tracking-tight text-[#DFCFB6] leading-tight">
            3,820
          </p>
          <p className="mt-1 text-[10px] sm:text-[11px] text-white/60 truncate">
            Verified Transcripts
          </p>
        </div>
      </div>

      {/* Main Chart / Visualizer Card */}
      <div className="relative z-10 mt-5 rounded-2xl border border-white/10 bg-white/[0.02] p-4 sm:p-5">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white tracking-tight flex items-center gap-1.5">
              <span>Cohort Competency Calibration</span>
              <span className="text-[10px] font-medium text-white/40">(vs. Baseline)</span>
            </h4>
            <p className="text-[11px] text-white/50 mt-0.5">
              Multi-dimensional evaluation across live code & conceptual rubrics
            </p>
          </div>

          <div className="flex items-center gap-3 text-[10px] text-white/60">
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-xs bg-brand-blue" />
              <span>Calibrated Mastery</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="size-2 rounded-xs bg-brand-orange" />
              <span>Focal Module</span>
            </span>
          </div>
        </div>

        {/* Chart Visualization Area */}
        <div className="relative mt-2 pt-4">
          {/* Reference Grid lines */}
          <div className="pointer-events-none absolute inset-x-0 top-4 bottom-7 flex flex-col justify-between opacity-15">
            <div className="w-full border-b border-dashed border-white" />
            <div className="w-full border-b border-dashed border-white" />
            <div className="w-full border-b border-dashed border-white" />
          </div>

          {/* 6 Competency Columns */}
          <div className="relative grid grid-cols-6 gap-2 sm:gap-3.5 h-36 sm:h-40 items-end pb-7">
            {COMPETENCY_DOMAINS.map((domain, index) => {
              const isSelected = activeDomain === domain.code;
              const barColor = domain.highlight
                ? "from-brand-orange/90 to-brand-orange shadow-[0_0_18px_rgba(240,106,43,0.35)]"
                : "from-brand-blue/80 to-brand-blue";

              return (
                <div
                  key={domain.code}
                  onClick={() => setActiveDomain(domain.code)}
                  className="group/bar flex flex-col items-center h-full justify-end cursor-pointer"
                >
                  {/* Tooltip / Value on Hover or Selected */}
                  <span
                    className={cn(
                      "mb-1.5 text-[10px] sm:text-[11px] font-bold font-mono transition-all duration-200",
                      isSelected
                        ? "text-white opacity-100 scale-105"
                        : "text-white/60 opacity-80 group-hover/bar:opacity-100 group-hover/bar:text-white"
                    )}
                  >
                    {domain.mastery}%
                  </span>

                  {/* Vertical Track & Animated Bar */}
                  <div className="relative w-full max-w-[36px] sm:max-w-[44px] h-full flex flex-col justify-end rounded-t-lg bg-white/[0.04] p-1 border border-white/5 transition-colors group-hover/bar:border-white/15">
                    {/* Ghost Baseline marker */}
                    <div
                      className="absolute inset-x-1 border-t border-dashed border-white/30"
                      style={{ bottom: `${domain.benchmark}%` }}
                      title={`Baseline: ${domain.benchmark}%`}
                    />

                    {/* Animated Fill */}
                    <motion.div
                      initial={shouldReduceMotion ? { height: `${domain.mastery}%` } : { height: 0 }}
                      animate={{ height: `${domain.mastery}%` }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.7,
                        delay: shouldReduceMotion ? 0 : index * 0.08,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={cn(
                        "w-full rounded-t-md bg-gradient-to-t transition-all",
                        barColor,
                        isSelected && "ring-2 ring-white/40"
                      )}
                    />
                  </div>

                  {/* Domain Code Label */}
                  <span
                    className={cn(
                      "mt-2 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors",
                      isSelected ? "text-white font-bold" : "text-white/50 group-hover/bar:text-white/80"
                    )}
                  >
                    {domain.code}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Domain Micro-Detail */}
        <div className="mt-2 pt-3 border-t border-white/8 flex items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-brand-orange" />
            <span className="font-semibold text-white">{selectedDomainData.name}:</span>
            <span>{selectedDomainData.mastery}% Mastery</span>
            <span className="text-[11px] text-emerald-400 font-medium">
              (+{(selectedDomainData.mastery - selectedDomainData.benchmark).toFixed(0)}% over cohort baseline)
            </span>
          </div>
          <span className="hidden sm:inline text-[11px] text-white/40">Click any bar to inspect</span>
        </div>
      </div>

      {/* Live Diagnostic Telemetry Ticker (Bottom Module) */}
      <div className="relative z-10 mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs">
        <div className="flex items-center gap-2.5">
          <div className="flex size-7 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
            <IconCheck size={14} stroke={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-white/90 text-[11px] sm:text-xs">
              <span className="text-brand-orange font-bold">Candidate #4092:</span> Distributed Architecture Capstone
            </span>
            <span className="text-[10px] text-white/45">
              Grade Calibrated: 98.4 / 100 · LTI 1.3 Hash Verified
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] font-semibold text-[#DFCFB6] border border-white/10">
            <IconCertificate size={12} className="text-brand-orange" />
            Tamper-Evident
          </span>
          <span className="text-[10px] text-white/40">Just now</span>
        </div>
      </div>
    </div>
  );
}
