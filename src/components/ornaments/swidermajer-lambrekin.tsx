import { useId } from "react";

type SwidermajerLambrekinProps = {
  className?: string;
};

/**
 * Repeating świdermajer lambrekin (wooden eave lace) — fill via `currentColor`.
 * Tiles an 80px-wide tooth across full width.
 */
export function SwidermajerLambrekin({ className = "" }: SwidermajerLambrekinProps) {
  const uid = useId().replace(/:/g, "");
  const toothId = `swidermajer-lambrekin-tooth-${uid}`;
  const patternId = `swidermajer-lambrekin-pattern-${uid}`;

  return (
    <svg
      viewBox="0 0 320 52"
      preserveAspectRatio="none"
      className={`block h-[52px] w-full text-[var(--sand-200)] ${className}`}
      aria-hidden
      role="presentation"
    >
      <defs>
        <path
          id={toothId}
          fillRule="evenodd"
          fill="currentColor"
          d="M0 0 H80 V9 C 70 12, 58 48, 40 48 C 22 48, 10 12, 0 9 Z M35 17 a5 5 0 1 0 10 0 a5 5 0 1 0 -10 0 Z M40 28 C 44 32, 44 37, 40 40 C 36 37, 36 32, 40 28 Z M14 13 a2.4 2.4 0 1 0 4.8 0 a2.4 2.4 0 1 0 -4.8 0 Z M61.2 13 a2.4 2.4 0 1 0 4.8 0 a2.4 2.4 0 1 0 -4.8 0 Z"
        />
        <pattern
          id={patternId}
          width="80"
          height="52"
          patternUnits="userSpaceOnUse"
        >
          <use href={`#${toothId}`} />
        </pattern>
      </defs>
      <rect width="100%" height="52" fill={`url(#${patternId})`} />
    </svg>
  );
}
