import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CompetencyDomain {
  name: string;
  code: string;
  mastery: number;
  highlight?: boolean;
  benchmark: number;
}

const COMPETENCY_DOMAINS: CompetencyDomain[] = [
  { name: "Logic", code: "LOG", mastery: 94, benchmark: 78 },
  { name: "Data", code: "DAT", mastery: 88, benchmark: 72 },
  { name: "Algorithms", code: "ALG", mastery: 96, benchmark: 80 },
  { name: "Systems", code: "SYS", mastery: 82, highlight: true, benchmark: 68 },
  { name: "Cloud", code: "CLD", mastery: 91, benchmark: 75 },
  { name: "Applied AI", code: "AI", mastery: 87, benchmark: 70 },
];

export interface TaskverseDashboardShowcaseProps {
  theme?: "light" | "dark";
  className?: string;
}

export function TaskverseDashboardShowcase({
  theme = "light",
  className,
}: TaskverseDashboardShowcaseProps) {
  const shouldReduceMotion = useReducedMotion();
  const [activeCode, setActiveCode] = useState<string>("SYS");

  const isLight = theme === "light";
  const defaultDomain: CompetencyDomain = COMPETENCY_DOMAINS[3]!;
  const selectedDomain: CompetencyDomain =
    COMPETENCY_DOMAINS.find((d) => d.code === activeCode) ?? defaultDomain;

  return (
    <div
      className={cn(
        "relative rounded-[26px] sm:rounded-[30px] p-5 sm:p-7 transition-all duration-300 overflow-hidden",
        isLight
          ? "border border-brand-line/80 bg-white/95 text-foreground shadow-[0_20px_50px_-15px_rgba(0,0,0,0.07)] backdrop-blur-md"
          : "border border-white/12 bg-[#0C1A24]/90 text-white shadow-[0_24px_70px_-12px_rgba(0,0,0,0.7)] backdrop-blur-2xl",
        className
      )}
    >
      {/* Subtle ambient glow */}
      <div
        className={cn(
          "pointer-events-none absolute -top-20 -right-20 size-60 rounded-full blur-[70px]",
          isLight ? "bg-brand-blue/10" : "bg-brand-blue/20"
        )}
        aria-hidden="true"
      />
      <div
        className={cn(
          "pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full blur-[70px]",
          isLight ? "bg-brand-orange/8" : "bg-brand-orange/15"
        )}
        aria-hidden="true"
      />

      {/* Top Header Bar */}
      <div
        className={cn(
          "relative z-10 flex items-center justify-between pb-4 border-b",
          isLight ? "border-brand-line/60" : "border-white/10"
        )}
      >
        <div className="flex items-center gap-2">
          <span
            className={cn(
              "font-display text-sm font-bold tracking-tight block",
              isLight ? "text-foreground" : "text-white"
            )}
          >
            TASKVERSE Analytics
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold",
              isLight
                ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
            )}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
            </span>
            Live
          </span>
          <span
            className={cn(
              "text-[10px] font-medium px-2 py-0.5 rounded-full",
              isLight ? "bg-brand-sand/50 text-brand-muted" : "bg-white/10 text-white/60"
            )}
          >
            v3.4
          </span>
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="relative z-10 mt-4 grid grid-cols-3 gap-2.5 sm:gap-3">
        {/* KPI 1 */}
        <div
          className={cn(
            "rounded-xl p-3 sm:p-3.5 transition-all",
            isLight
              ? "bg-brand-sand/30 border border-brand-line/70"
              : "bg-white/[0.04] border border-white/8"
          )}
        >
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider block",
              isLight ? "text-brand-muted" : "text-white/50"
            )}
          >
            Learners
          </span>
          <p
            className={cn(
              "mt-1 font-display text-lg sm:text-2xl font-black tracking-tight",
              isLight ? "text-foreground" : "text-white"
            )}
          >
            12.4k
          </p>
        </div>

        {/* KPI 2 */}
        <div
          className={cn(
            "rounded-xl p-3 sm:p-3.5 transition-all",
            isLight
              ? "bg-brand-sand/30 border border-brand-line/70"
              : "bg-white/[0.04] border border-white/8"
          )}
        >
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider block",
              isLight ? "text-brand-muted" : "text-white/50"
            )}
          >
            Mastery
          </span>
          <p className="mt-1 font-display text-lg sm:text-2xl font-black tracking-tight text-brand-blue">
            95.4%
          </p>
        </div>

        {/* KPI 3 */}
        <div
          className={cn(
            "rounded-xl p-3 sm:p-3.5 transition-all",
            isLight
              ? "bg-brand-sand/30 border border-brand-line/70"
              : "bg-white/[0.04] border border-white/8"
          )}
        >
          <span
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wider block",
              isLight ? "text-brand-muted" : "text-white/50"
            )}
          >
            Verified
          </span>
          <p className="mt-1 font-display text-lg sm:text-2xl font-black tracking-tight text-brand-orange">
            3,820
          </p>
        </div>
      </div>

      {/* Competency Chart Card */}
      <div
        className={cn(
          "relative z-10 mt-4 rounded-xl p-3.5 sm:p-4.5 border",
          isLight
            ? "bg-brand-sand/20 border-brand-line/60"
            : "bg-white/[0.02] border-white/10"
        )}
      >
        <div className="flex items-center justify-between mb-2">
          <span
            className={cn(
              "text-xs font-bold tracking-tight",
              isLight ? "text-foreground" : "text-white"
            )}
          >
            Cohort Competencies
          </span>
          <div className="flex items-center gap-2.5 text-[10px]">
            <span
              className={cn(
                "flex items-center gap-1 font-medium",
                isLight ? "text-brand-muted" : "text-white/60"
              )}
            >
              <span className="size-2 rounded-xs bg-brand-blue" />
              <span>Calibrated</span>
            </span>
            <span
              className={cn(
                "flex items-center gap-1 font-medium",
                isLight ? "text-brand-muted" : "text-white/60"
              )}
            >
              <span className="size-2 rounded-xs bg-brand-orange" />
              <span>Target</span>
            </span>
          </div>
        </div>

        {/* Slender Visual Bars */}
        <div className="relative pt-3">
          {/* Reference Line */}
          <div
            className={cn(
              "pointer-events-none absolute inset-x-0 top-3 bottom-6 border-b border-dashed",
              isLight ? "border-black/10" : "border-white/10"
            )}
          />

          <div className="relative grid grid-cols-6 gap-2 sm:gap-3 h-28 sm:h-32 items-end pb-6">
            {COMPETENCY_DOMAINS.map((domain, index) => {
              const isSelected = activeCode === domain.code;
              const barColor = domain.highlight
                ? "from-brand-orange to-amber-500 shadow-xs"
                : "from-brand-blue to-sky-400";

              return (
                <div
                  key={domain.code}
                  onClick={() => setActiveCode(domain.code)}
                  className="group/bar flex flex-col items-center h-full justify-end cursor-pointer"
                >
                  {/* Percentage label */}
                  <span
                    className={cn(
                      "mb-1 text-[10px] font-mono font-bold transition-all",
                      isSelected
                        ? isLight
                          ? "text-brand-orange scale-105"
                          : "text-white scale-105"
                        : isLight
                        ? "text-brand-muted group-hover/bar:text-foreground"
                        : "text-white/60 group-hover/bar:text-white"
                    )}
                  >
                    {domain.mastery}%
                  </span>

                  {/* Vertical bar slot */}
                  <div
                    className={cn(
                      "relative w-full max-w-[28px] sm:max-w-[34px] h-full flex flex-col justify-end rounded-t-md p-0.5 border transition-all",
                      isLight
                        ? "bg-brand-sand/40 border-black/5 group-hover/bar:border-black/15"
                        : "bg-white/[0.04] border-white/5 group-hover/bar:border-white/15",
                      isSelected && (isLight ? "ring-2 ring-brand-orange/40" : "ring-2 ring-white/40")
                    )}
                  >
                    <motion.div
                      initial={shouldReduceMotion ? { height: `${domain.mastery}%` } : { height: 0 }}
                      animate={{ height: `${domain.mastery}%` }}
                      transition={{
                        duration: shouldReduceMotion ? 0 : 0.6,
                        delay: shouldReduceMotion ? 0 : index * 0.06,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={cn("w-full rounded-t-[3px] bg-gradient-to-t", barColor)}
                    />
                  </div>

                  {/* Domain code */}
                  <span
                    className={cn(
                      "mt-1.5 text-[10px] font-semibold tracking-wider transition-colors",
                      isSelected
                        ? isLight
                          ? "text-foreground font-bold"
                          : "text-white font-bold"
                        : isLight
                        ? "text-brand-muted"
                        : "text-white/50"
                    )}
                  >
                    {domain.code}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Micro-detail status */}
        <div
          className={cn(
            "pt-2 border-t flex items-center justify-between text-[11px]",
            isLight ? "border-brand-line/60 text-brand-body" : "border-white/8 text-white/70"
          )}
        >
          <div className="flex items-center gap-1.5 font-medium">
            <span className="size-1.5 rounded-full bg-brand-orange" />
            <span>{selectedDomain.name}:</span>
            <span className="font-bold">{selectedDomain.mastery}% Mastery</span>
          </div>
          <span className={cn("text-[10px]", isLight ? "text-brand-muted" : "text-white/40")}>
            Calibrated
          </span>
        </div>
      </div>

      {/* Clean Bottom Credential Badge */}
      <div
        className={cn(
          "relative z-10 mt-3 pt-3 border-t flex items-center justify-between text-[11px]",
          isLight ? "border-brand-line/60 text-brand-muted" : "border-white/10 text-white/50"
        )}
      >
        <span className="font-medium tracking-wide uppercase text-[10px]">LTI 1.3 Certified</span>
        <span className="font-medium tracking-wide uppercase text-[10px]">Tamper-Evident Transcripts</span>
      </div>
    </div>
  );
}
