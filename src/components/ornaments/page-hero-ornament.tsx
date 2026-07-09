type PageHeroOrnamentProps = {
  className?: string;
};

/** Świdermajer villa gable (sunburst + lambrekin) for forest page heroes. */
export function PageHeroOrnament({ className = "" }: PageHeroOrnamentProps) {
  return (
    <svg
      viewBox="0 0 260 300"
      className={`text-[var(--sand-200)] ${className}`}
      aria-hidden
      role="presentation"
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      >
        <line x1="130" y1="52" x2="130" y2="18" />
        <circle cx="130" cy="12" r="5" fill="currentColor" stroke="none" />
        <path d="M118 30 Q130 20 142 30" />
        <path d="M130 34 L36 210 L224 210 Z" />
        <g strokeWidth="1.3" opacity="0.9">
          <line x1="130" y1="40" x2="60" y2="210" />
          <line x1="130" y1="40" x2="83" y2="210" />
          <line x1="130" y1="40" x2="106" y2="210" />
          <line x1="130" y1="40" x2="130" y2="210" />
          <line x1="130" y1="40" x2="154" y2="210" />
          <line x1="130" y1="40" x2="177" y2="210" />
          <line x1="130" y1="40" x2="200" y2="210" />
        </g>
        <circle cx="130" cy="96" r="15" />
        <circle cx="130" cy="96" r="6" fill="currentColor" stroke="none" />
        <line x1="24" y1="214" x2="236" y2="214" strokeWidth="3" />
        <g strokeWidth="1.6">
          <path d="M28 216 C 40 220, 44 250, 55 250 C 66 250, 70 220, 82 216" />
          <path d="M82 216 C 94 220, 98 250, 109 250 C 120 250, 124 220, 136 216" />
          <path d="M136 216 C 148 220, 152 250, 163 250 C 174 250, 178 220, 190 216" />
          <path d="M190 216 C 202 220, 206 250, 217 250 C 228 250, 232 220, 244 216" />
          <circle cx="55" cy="228" r="3" />
          <circle cx="109" cy="228" r="3" />
          <circle cx="163" cy="228" r="3" />
          <circle cx="217" cy="228" r="3" />
        </g>
      </g>
    </svg>
  );
}
