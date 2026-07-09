import { SosnaPine } from "@/components/ornaments/sosna-pine";

type SectionPineAccentProps = {
  /** Corner or edge placement — purely decorative. */
  position?: "top-right" | "bottom-left" | "bottom-right";
  className?: string;
};

const positionClasses: Record<NonNullable<SectionPineAccentProps["position"]>, string> = {
  "top-right": "right-0 top-0 translate-x-1/4 -translate-y-1/6",
  "bottom-left": "bottom-0 left-0 -translate-x-1/5 translate-y-1/6",
  "bottom-right": "bottom-0 right-0 translate-x-1/5 translate-y-1/6",
};

/** Subtle pine cluster — fills empty section space without competing with content. */
export function SectionPineAccent({
  position = "bottom-right",
  className = "",
}: SectionPineAccentProps) {
  return (
    <div
      className={`pointer-events-none absolute z-0 select-none opacity-[0.16] ${positionClasses[position]} ${className}`}
      aria-hidden
    >
      <div className="flex items-end gap-1 sm:gap-2">
        <SosnaPine className="motion-calm-float h-16 w-10 sm:h-20 sm:w-12" />
        <SosnaPine className="motion-calm-float-delayed mb-2 h-20 w-12 sm:mb-3 sm:h-24 sm:w-14" />
        <SosnaPine className="motion-calm-sway hidden h-14 w-9 sm:block sm:h-16 sm:w-10" />
      </div>
    </div>
  );
}
