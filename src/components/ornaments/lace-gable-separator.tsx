type LaceGableSeparatorProps = {
  className?: string;
};

/** Świdermajer lace gable (ażur) — section separator motif. */
export function LaceGableSeparator({ className = "" }: LaceGableSeparatorProps) {
  return (
    <svg
      viewBox="0 0 1200 48"
      preserveAspectRatio="xMidYMid slice"
      className={`w-full text-[var(--wood-700)] ${className}`}
      aria-hidden
      role="presentation"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        d="M0 36h80l20-12 20 12h40l16-10 16 10h40l12-8 12 8h40l20-14 20 14h40l16-10 16 10h40l12-8 12 8h40l20-12 20 12h40l16-10 16 10h40l12-8 12 8h40l20-14 20 14h40l16-10 16 10h40l12-8 12 8h40l20-12 20 12h80"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.85"
        opacity="0.65"
        d="M60 28c20-8 40-8 60 0s40 8 60 0 40-8 60 0 40 8 60 0 40-8 60 0 40 8 60 0 40-8 60 0 40 8 60 0 40-8 60 0 40 8 60 0 40-8 60 0 40 8 60 0 40-8 60 0 40 8 60 0"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        d="M0 44h1200"
        opacity="0.35"
      />
    </svg>
  );
}
