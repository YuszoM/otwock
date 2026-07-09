"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { List, X } from "@phosphor-icons/react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="on-forest sticky top-0 z-50 border-b border-forest-border bg-forest shadow-[0_1px_0_rgba(21,46,38,0.08)]">
      <div
        className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-4 px-4 lg:px-6"
        style={{ minHeight: "var(--header-height-mobile)" }}
      >
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2 text-sm font-semibold text-on-forest"
        >
          {siteConfig.logoSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={siteConfig.logoSrc} alt="" width={32} height={32} className="h-8 w-auto" />
          ) : null}
          <span>{siteConfig.siteName}</span>
        </Link>

        <nav aria-label="Główne" className="hidden items-center gap-8 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="link-nav"
              aria-current={isActive(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href={siteConfig.bookingCta.href}
          className="btn-honey hidden px-3 text-sm sm:inline-flex xl:px-4 xl:text-base"
        >
          <span className="xl:hidden" aria-hidden="true">
            Umów
          </span>
          <span className="hidden xl:inline">{siteConfig.bookingCta.label}</span>
        </Link>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-forest-border text-on-forest lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      <div
        className={cn(
          "on-forest border-t border-forest-border bg-forest lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav className="flex flex-col gap-4 px-4 py-4" aria-label="Menu mobilne">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-lg font-semibold text-on-forest"
              aria-current={isActive(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href={siteConfig.bookingCta.href} className="btn-honey w-full" onClick={() => setOpen(false)}>
            {siteConfig.bookingCta.label}
          </Link>
        </nav>
      </div>
    </header>
  );
}
