import {
  Baby,
  Brain,
  ClipboardCheck,
  Coffee,
  Gamepad2,
  HeartHandshake,
  ScanSearch,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { ServiceSlug } from "@/data/services";

const ICON_COLOR = "#1a3a2f";
const ICON_PROPS = { color: ICON_COLOR, strokeWidth: 1.75, absoluteStrokeWidth: true } as const;

const iconMap: Record<ServiceSlug, LucideIcon> = {
  "terapia-indywidualna": User,
  "terapia-par": HeartHandshake,
  diagnoza: ScanSearch,
  "integracja-sensoryczna": Brain,
  "warsztaty-tus": Users,
  "psycholog-dzieciecy": Baby,
  "terapia-vr": Gamepad2,
  "opieka-wytchnieniowa": Coffee,
};

type ServiceIconProps = {
  slug: ServiceSlug;
  className?: string;
};

export function ServiceIcon({ slug, className = "h-12 w-12" }: ServiceIconProps) {
  const Icon = iconMap[slug] ?? ClipboardCheck;
  return <Icon className={className} {...ICON_PROPS} aria-hidden />;
}
