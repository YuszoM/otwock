"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import {
  COOKIE_BANNER_BODY,
  COOKIE_BANNER_NOTE,
  COOKIE_BANNER_TITLE,
  COOKIE_BTN_ACCEPT_ALL,
  COOKIE_BTN_NECESSARY_ONLY,
} from "@/lib/cookies/cookie-consent-copy";
import {
  buildConsentState,
  COOKIE_CONSENT_KEY,
  parseConsentState,
  type CookieConsentLevel,
} from "@/lib/cookies/consent";

function setConsentStorage(level: CookieConsentLevel) {
  const state = buildConsentState(level);
  const encoded = JSON.stringify(state);
  localStorage.setItem(COOKIE_CONSENT_KEY, encoded);
  document.cookie = `${COOKIE_CONSENT_KEY}=${encodeURIComponent(encoded)}; Path=/; Max-Age=31536000; SameSite=Lax`;
  window.dispatchEvent(new CustomEvent("mz-cookie-consent-change", { detail: state }));
}

function readHasConsent(): boolean {
  if (typeof window === "undefined") return false;
  const localValue = parseConsentState(localStorage.getItem(COOKIE_CONSENT_KEY));
  const cookieRaw = document.cookie
    .split(";")
    .map((part) => part.trim())
    .find((part) => part.startsWith(`${COOKIE_CONSENT_KEY}=`))
    ?.split("=")
    .slice(1)
    .join("=");
  const cookieValue = parseConsentState(
    cookieRaw
      ? (() => {
          try {
            return decodeURIComponent(cookieRaw);
          } catch {
            return cookieRaw;
          }
        })()
      : null,
  );
  return Boolean(localValue || cookieValue);
}

export function CookieConsentBanner() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [visible, setVisible] = useState(() => !readHasConsent());

  useEffect(() => {
    const onConsentChange = () => setVisible(false);
    window.addEventListener("mz-cookie-consent-change", onConsentChange);
    return () => window.removeEventListener("mz-cookie-consent-change", onConsentChange);
  }, []);

  if (!mounted || !visible) return null;

  return createPortal(
    <div
      style={{ position: "fixed", inset: 0, zIndex: 2147483647 }}
      className="on-forest flex items-center justify-center bg-[rgba(21,46,38,0.65)] p-4"
    >
      <div className="on-forest w-full max-w-lg rounded-[var(--radius-md)] border border-forest-border bg-forest p-6 text-on-forest shadow-2xl">
        <h3 className="text-xl font-semibold">{COOKIE_BANNER_TITLE}</h3>
        <p className="mt-3 text-sm leading-6 opacity-90">{COOKIE_BANNER_BODY}</p>
        <p className="mt-2 text-xs opacity-80">{COOKIE_BANNER_NOTE}</p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row">
          <button type="button" onClick={() => { setConsentStorage("all"); setVisible(false); }} className="btn-honey flex-1">
            {COOKIE_BTN_ACCEPT_ALL}
          </button>
          <button
            type="button"
            onClick={() => { setConsentStorage("necessary"); setVisible(false); }}
            className="flex-1 rounded-[var(--radius-sm)] border border-forest-border px-4 py-2.5 text-sm font-semibold text-on-forest transition hover:bg-[rgba(232,220,200,0.08)]"
            style={{ minHeight: "44px" }}
          >
            {COOKIE_BTN_NECESSARY_ONLY}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}
