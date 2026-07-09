/** Subtle świdermajer corner ornament for hero sections. */
export function HeroOrnament() {
  return (
    <svg
      className="pointer-events-none absolute bottom-6 right-4 z-[3] hidden h-24 w-32 text-[var(--wood-700)] opacity-70 sm:block lg:right-8 lg:h-28 lg:w-40"
      viewBox="0 0 160 112"
      aria-hidden
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        d="M8 104V32c0-12 24-12 36-12M8 104h36c12 0 20-8 20-20M8 104c16-4 24-12 32-24"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.7"
        d="M52 88c8-6 16-6 24 0M76 72c8-6 16-6 24 0M100 56c8-6 16-6 24 0"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.5"
        d="M120 40l8 8-8 8M132 52l8 8-8 8"
      />
    </svg>
  );
}
