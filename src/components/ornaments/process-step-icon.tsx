type ProcessStepIconProps = {
  step: 1 | 2 | 3;
  className?: string;
};

const paths: Record<1 | 2 | 3, string> = {
  1: "M24 44V28c0-6 12-6 18-6s18 0 18 6v16M24 44h36c6 0 10-4 10-10M24 44c8-2 12-6 16-12M30 52h24",
  2: "M20 36c0-8 8-14 18-14s18 6 18 14M20 36h36M28 44h20M32 28c4 4 8 4 12 0",
  3: "M16 40c8-12 20-18 32-18s24 6 32 18M24 44h32M40 24v8M48 20l-8 12 8 12",
};

/** Świdermajer wood-line style icons for care process steps. */
export function ProcessStepIcon({ step, className = "h-8 w-8" }: ProcessStepIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={`shrink-0 text-[var(--wood-700)] ${className}`}
      aria-hidden
    >
      <circle
        cx="32"
        cy="32"
        r="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.35"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d={paths[step]}
      />
    </svg>
  );
}
