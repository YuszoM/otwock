import { SOSNA_PATH } from "@/components/ornaments/pine-path";

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
        d={SOSNA_PATH}
      />
    </svg>
  );
}
