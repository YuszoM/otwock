import Link from "next/link";
import { siteConfig } from "@/config/site";

export function SiteFooter() {
  const { footer } = siteConfig;

  return (
    <footer className="on-forest bg-forest text-on-forest">
      <div className="mx-auto grid max-w-[var(--container-max)] gap-8 px-4 py-16 sm:grid-cols-2 lg:px-6">
        <div>
          <p className="text-2xl font-semibold leading-tight">{siteConfig.siteName}</p>
          <p className="mt-2 max-w-prose text-base opacity-90">{footer.tagline}</p>
        </div>
        <div className="text-sm">
          {footer.email ? (
            <p>
              Email:{" "}
              <a href={`mailto:${footer.email}`} className="underline-offset-4 hover:underline">
                {footer.email}
              </a>
            </p>
          ) : null}
          {footer.phone ? (
            <p className="mt-1">
              Tel.:{" "}
              <a
                href={`tel:${footer.phone.replace(/\s/g, "")}`}
                className="underline-offset-4 hover:underline"
              >
                {footer.phone}
              </a>
            </p>
          ) : null}
          {footer.addressLines?.length ? (
            <address className="mt-3 not-italic opacity-90">
              {footer.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          ) : null}
        </div>
      </div>

      {footer.legalLinks?.length ? (
        <nav aria-label="Informacje prawne" className="border-t border-forest-border px-4 py-4">
          <ul className="mx-auto flex max-w-[var(--container-max)] flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
            {footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="underline-offset-4 hover:underline">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}

      <div className="border-t border-forest-border py-4 text-center text-xs opacity-75">
        © {new Date().getFullYear()} {siteConfig.siteName}
      </div>
    </footer>
  );
}
