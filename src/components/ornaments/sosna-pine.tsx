type SosnaPineProps = {
  className?: string;
};

/** Scots pine line-art — "miasto w lesie" accent for Otwock sections. */
export function SosnaPine({ className = "" }: SosnaPineProps) {
  return (
    <svg
      viewBox="0 0 120 210"
      className={`text-[var(--pine-700)] ${className}`}
      aria-hidden
      role="presentation"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M60 10 L42 46 L50 46 L34 82 L44 82 L26 122 L38 122 L20 166 L54 166 L54 194 L66 194 L66 166 L100 166 L82 122 L94 122 L76 82 L86 82 L70 46 L78 46 Z"
      />
    </svg>
  );
}
