import type { ServiceSlug } from "@/data/services";

const ICON_COLOR = "#1a3a2f";

type ServiceIconProps = {
  slug: ServiceSlug;
  className?: string;
};

function IconSvg({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

const icons: Record<ServiceSlug, React.ReactNode> = {
  "terapia-indywidualna": (
  <>
    <circle cx="24" cy="16" r="6" stroke={ICON_COLOR} strokeWidth="2" />
    <path
      d="M12 38c0-6.627 5.373-12 12-12s12 5.373 12 12"
      stroke={ICON_COLOR}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
  ),
  "terapia-par": (
  <>
    <circle cx="17" cy="16" r="5" stroke={ICON_COLOR} strokeWidth="2" />
    <circle cx="31" cy="16" r="5" stroke={ICON_COLOR} strokeWidth="2" />
    <path
      d="M8 38c0-5 4.03-9 9-9 2.2 0 4.2.8 5.8 2.1M40 38c0-5-4.03-9-9-9-2.2 0-4.2.8-5.8 2.1"
      stroke={ICON_COLOR}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M20 28h8" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
  </>
  ),
  diagnoza: (
  <>
    <rect x="10" y="8" width="28" height="32" rx="3" stroke={ICON_COLOR} strokeWidth="2" />
    <path d="M16 18h16M16 24h12M16 30h8" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
    <circle cx="32" cy="32" r="6" stroke={ICON_COLOR} strokeWidth="2" />
    <path d="M30 32l1.5 1.5L35 30" stroke={ICON_COLOR} strokeWidth="1.5" strokeLinecap="round" />
  </>
  ),
  "integracja-sensoryczna": (
  <>
    <circle cx="24" cy="24" r="14" stroke={ICON_COLOR} strokeWidth="2" />
    <path
      d="M24 10v28M10 24h28M14.5 14.5l19 19M33.5 14.5l-19 19"
      stroke={ICON_COLOR}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </>
  ),
  "warsztaty-tus": (
  <>
    <circle cx="16" cy="18" r="4" stroke={ICON_COLOR} strokeWidth="2" />
    <circle cx="32" cy="18" r="4" stroke={ICON_COLOR} strokeWidth="2" />
    <circle cx="24" cy="14" r="4" stroke={ICON_COLOR} strokeWidth="2" />
    <path
      d="M10 36c0-4 2.7-7 6-7M38 36c0-4-2.7-7-6-7M18 36c0-3 2.7-5 6-5s6 2 6 5"
      stroke={ICON_COLOR}
      strokeWidth="2"
      strokeLinecap="round"
    />
  </>
  ),
  "psycholog-dzieciecy": (
  <>
    <circle cx="24" cy="14" r="7" stroke={ICON_COLOR} strokeWidth="2" />
    <path
      d="M10 40c0-7.732 6.268-14 14-14s14 6.268 14 14"
      stroke={ICON_COLOR}
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path d="M20 12l2 2 4-4" stroke={ICON_COLOR} strokeWidth="1.5" strokeLinecap="round" />
  </>
  ),
  "terapia-vr": (
  <>
    <rect x="8" y="18" width="32" height="16" rx="4" stroke={ICON_COLOR} strokeWidth="2" />
    <path d="M16 18v-4a8 8 0 0116 0v4" stroke={ICON_COLOR} strokeWidth="2" />
    <circle cx="18" cy="26" r="3" stroke={ICON_COLOR} strokeWidth="1.5" />
    <circle cx="30" cy="26" r="3" stroke={ICON_COLOR} strokeWidth="1.5" />
    <path d="M24 34v4" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
  </>
  ),
  "opieka-wytchnieniowa": (
  <>
    <path
      d="M12 32h24l-3-12H15l-3 12z"
      stroke={ICON_COLOR}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <circle cx="20" cy="20" r="5" stroke={ICON_COLOR} strokeWidth="2" />
    <path d="M28 16c2 0 4 2 4 4" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
    <path d="M14 38h20" stroke={ICON_COLOR} strokeWidth="2" strokeLinecap="round" />
  </>
  ),
};

export function ServiceIcon({ slug, className = "h-12 w-12" }: ServiceIconProps) {
  return <IconSvg className={className}>{icons[slug]}</IconSvg>;
}
