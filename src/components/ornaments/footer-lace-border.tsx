import { SwidermajerLambrekin } from "@/components/ornaments/swidermajer-lambrekin";

type FooterLaceBorderProps = {
  className?: string;
};

/** Footer top lambrekin strip — repeating świdermajer wooden lace. */
export function FooterLaceBorder({ className = "" }: FooterLaceBorderProps) {
  return <SwidermajerLambrekin className={className} />;
}
