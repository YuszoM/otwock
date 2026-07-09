type SectionSeparatorProps = {
  className?: string;
  /** Use on dark/forest backgrounds (hero bottom). */
  variant?: "default" | "on-forest";
};

/**
 * Between-section divider — thin rule with centered świdermajer lambrekin diamond motif.
 */
export function SectionSeparator({
  className = "",
  variant = "default",
}: SectionSeparatorProps) {
  const colorClass =
    variant === "on-forest" ? "text-[var(--sand-50)]" : "text-[var(--wood-700)]";

  return (
    <div
      className={`flex w-full items-center justify-center px-4 py-5 sm:py-6 ${className}`}
      aria-hidden
      role="presentation"
    >
      <svg
        viewBox="0 0 480 28"
        className={`h-7 w-full max-w-2xl ${colorClass}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="0" y1="14" x2="188" y2="14" stroke="currentColor" strokeWidth="1" />
        <line x1="292" y1="14" x2="480" y2="14" stroke="currentColor" strokeWidth="1" />
        <g transform="translate(240, 14)" fill="currentColor">
          <path
            fillRule="evenodd"
            d="M-18 -10 H18 V-4 C 14 -2, 10 10, 0 10 C -10 10, -14 -2, -18 -4 Z M-4 -6 a2.5 2.5 0 1 0 5 0 a2.5 2.5 0 1 0 -5 0 Z M0 0 C 2 2, 2 4, 0 5 C -2 4, -2 2, 0 0 Z"
            opacity="0.85"
          />
          <circle cx="-12" cy="-6" r="1.5" opacity="0.7" />
          <circle cx="12" cy="-6" r="1.5" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}
