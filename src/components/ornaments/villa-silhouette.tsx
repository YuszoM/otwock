type VillaSilhouetteProps = {
  className?: string;
};

/** Subtle Otwock Świdermajer villa elevation — wood line-art. */
export function VillaSilhouette({ className = "" }: VillaSilhouetteProps) {
  return (
    <svg
      viewBox="0 0 320 120"
      className={`text-[var(--wood-700)] ${className}`}
      aria-hidden
      role="presentation"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16 96V52l36-20 36 20v44M88 32l36-16 36 16v64M160 16l36 16v80"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.7"
        d="M52 52h24v28H52zM124 48h24v32h-24zM196 44h24v36h-24z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
        opacity="0.55"
        d="M40 40c8-4 16-4 24 0M112 36c8-4 16-4 24 0M184 32c8-4 16-4 24 0"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.4"
        d="M8 104h304"
      />
    </svg>
  );
}
