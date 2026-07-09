"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/config/site";

const ease = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease },
  },
};

export function HomeHeroIntro() {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--lilac-500)]">
          Słuchamy i wspieramy.
        </p>
        <h1 className="mt-3 text-[clamp(1.65rem,4.8vw,2.65rem)] font-semibold leading-[1.14] tracking-tight text-balance">
          Miejsce, w którym psychologia, terapia i diagnoza działają jako jeden spójny proces
        </h1>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-on-forest/90 sm:mt-5">
          W Otwocku stworzyliśmy przestrzeń, która nie przypomina klasycznej poradni, lecz kompleksowe
          centrum wsparcia dla dzieci, młodzieży i dorosłych. Proces pomocy jest tu uporządkowany od
          pierwszego kontaktu aż po dalszą pracę terapeutyczną.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4">
          <Link href={siteConfig.bookingCta.href} className="btn-honey w-full justify-center sm:w-auto">
            {siteConfig.bookingCta.label}
          </Link>
          <Link
            href="/o-nas"
            className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-sm)] border border-forest-border bg-[var(--pine-900)]/40 px-5 text-sm font-semibold text-on-forest underline-offset-4 backdrop-blur-[2px] transition-colors hover:bg-[var(--pine-900)]/55 sm:w-auto"
          >
            Poznaj ośrodek
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="max-w-2xl"
      variants={container}
      initial="hidden"
      animate="show"
    >
      <motion.p
        variants={item}
        className="text-sm font-semibold uppercase tracking-[0.14em] text-[var(--lilac-500)]"
      >
        Słuchamy i wspieramy.
      </motion.p>
      <motion.h1
        variants={item}
        className="mt-3 text-[clamp(1.65rem,4.8vw,2.65rem)] font-semibold leading-[1.14] tracking-tight text-balance"
      >
        Miejsce, w którym psychologia, terapia i diagnoza działają jako jeden spójny proces
      </motion.h1>
      <motion.p
        variants={item}
        className="mt-4 max-w-xl text-base leading-relaxed text-on-forest/90 sm:mt-5"
      >
        W Otwocku stworzyliśmy przestrzeń, która nie przypomina klasycznej poradni, lecz kompleksowe
        centrum wsparcia dla dzieci, młodzieży i dorosłych. Proces pomocy jest tu uporządkowany od
        pierwszego kontaktu aż po dalszą pracę terapeutyczną.
      </motion.p>
      <motion.div
        variants={item}
        className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:gap-4"
      >
        <Link href={siteConfig.bookingCta.href} className="btn-honey w-full justify-center sm:w-auto">
          {siteConfig.bookingCta.label}
        </Link>
        <Link
          href="/o-nas"
          className="inline-flex min-h-11 w-full items-center justify-center rounded-[var(--radius-sm)] border border-forest-border bg-[var(--pine-900)]/40 px-5 text-sm font-semibold text-on-forest underline-offset-4 backdrop-blur-[2px] transition-colors hover:bg-[var(--pine-900)]/55 sm:w-auto"
        >
          Poznaj ośrodek
        </Link>
      </motion.div>
    </motion.div>
  );
}
