import { SOSNA_PATH } from "@/components/ornaments/pine-path";

type SectionSeparatorProps = {
  className?: string;
  /** Use on dark/forest backgrounds (hero bottom). */
  variant?: "default" | "on-forest";
};

/**
 * Between-section divider — thin rules with centered Scots pine (Otwock „miasto w lesie”).
 */
export function SectionSeparator({
  className = "",
  variant = "default",
}: SectionSeparatorProps) {
  const isForest = variant === "on-forest";
  const lineClass = isForest ? "bg-[var(--sand-50)]/35" : "bg-[var(--wood-700)]/30";
  const pineClass = isForest ? "text-[var(--sand-50)]" : "text-[var(--pine-700)]";
  const dotClass = isForest ? "bg-[var(--clay-400)]/70" : "bg-[var(--wood-700)]/45";

  return (
    <div
      className={`flex w-full items-center justify-center gap-3 px-4 py-5 sm:gap-4 sm:py-6 ${className}`}
      aria-hidden
      role="presentation"
    >
      <span className={`h-px min-w-0 flex-1 max-w-[14rem] sm:max-w-[18rem] ${lineClass}`} />
      <span className={`h-1 w-1 shrink-0 rounded-full ${dotClass}`} />
      <svg
        viewBox="0 0 120 210"
        className={`h-8 w-[1.15rem] shrink-0 sm:h-9 sm:w-[1.3rem] ${pineClass}`}
        aria-hidden
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          d={SOSNA_PATH}
        />
      </svg>
      <span className={`h-1 w-1 shrink-0 rounded-full ${dotClass}`} />
      <span className={`h-px min-w-0 flex-1 max-w-[14rem] sm:max-w-[18rem] ${lineClass}`} />
    </div>
  );
}
