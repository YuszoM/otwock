import { ProcessStepIcon } from "@/components/ornaments/process-step-icon";

const stepLabels = ["Diagnoza", "Terapia", "Wsparcie"] as const;

/** Pure SVG/CSS panel — replaces raster process-care illustration. */
export function CareProcessIllustration() {
  return (
    <div
      className="relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-[var(--radius-md)] border border-[var(--sand-200)] bg-gradient-to-br from-[var(--sand-50)] via-white to-[var(--pine-700)]/5 p-8"
      aria-hidden
    >
      <svg
        viewBox="0 0 320 240"
        className="absolute inset-0 h-full w-full text-[var(--wood-700)] opacity-[0.07]"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          d="M0 120c40-20 80-20 120 0s80 20 120 0 80-20 120 0"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          d="M20 60c30-12 60-12 90 0s60 12 90 0 60-12 90 0"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeWidth="0.75"
          d="M20 180c30-12 60-12 90 0s60 12 90 0 60-12 90 0"
        />
      </svg>

      <ol className="relative z-[1] flex w-full max-w-xs flex-col gap-6">
        {stepLabels.map((label, i) => (
          <li key={label} className="flex items-center gap-4">
            <ProcessStepIcon step={(i + 1) as 1 | 2 | 3} className="h-12 w-12" />
            <span className="text-sm font-semibold text-[var(--pine-900)]">{label}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
