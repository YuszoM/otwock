type FooterLaceBorderProps = {
  className?: string;
};

/**
 * Footer top lace strip — repeating świdermajer diamond motif at low opacity.
 * Crisp geometric pattern (not wavy peaked lines).
 */
export function FooterLaceBorder({ className = "" }: FooterLaceBorderProps) {
  return (
    <svg
      viewBox="0 0 1200 16"
      preserveAspectRatio="none"
      className={`block h-4 w-full text-[var(--sand-50)] ${className}`}
      aria-hidden
      role="presentation"
    >
      <defs>
        <pattern id="footer-lace-tile" width="32" height="16" patternUnits="userSpaceOnUse">
          <line x1="0" y1="8" x2="32" y2="8" stroke="currentColor" strokeWidth="0.75" opacity="0.35" />
          <g transform="translate(16, 8)">
            <path
              d="M0 -5 L5 0 L0 5 L-5 0 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.75"
              opacity="0.45"
            />
            <circle cx="0" cy="0" r="0.75" fill="currentColor" opacity="0.5" />
          </g>
        </pattern>
      </defs>
      <rect width="1200" height="16" fill="url(#footer-lace-tile)" />
    </svg>
  );
}
