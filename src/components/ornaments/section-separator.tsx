type SectionSeparatorProps = {
  className?: string;
  /** Use on dark/forest backgrounds (hero bottom). */
  variant?: "default" | "on-forest";
};

/**
 * Between-section divider — thin rule with centered świdermajer diamond motif.
 * Symmetric, crisp SVG (no wavy hand-drawn peaks).
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
        viewBox="0 0 480 20"
        className={`h-5 w-full max-w-2xl ${colorClass}`}
        preserveAspectRatio="xMidYMid meet"
      >
        <line x1="0" y1="10" x2="196" y2="10" stroke="currentColor" strokeWidth="1" />
        <line x1="284" y1="10" x2="480" y2="10" stroke="currentColor" strokeWidth="1" />
        <g transform="translate(240, 10)">
          <path
            d="M0 -9 L9 0 L0 9 L-9 0 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinejoin="miter"
          />
          <path
            d="M0 -5 L5 0 L0 5 L-5 0 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.75"
            opacity="0.75"
          />
          <circle cx="0" cy="0" r="1.25" fill="currentColor" />
          <line x1="0" y1="-5" x2="0" y2="5" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
          <line x1="-5" y1="0" x2="5" y2="0" stroke="currentColor" strokeWidth="0.5" opacity="0.5" />
        </g>
      </svg>
    </div>
  );
}
