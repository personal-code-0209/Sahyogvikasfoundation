"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const storageKey = "sahyog-donation-popup-shown-v2";

export default function SiteDonationPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const hasShown = useRef(false);
  const popupRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (hasShown.current || pathname === "/donate" || pathname.startsWith("/donate/")) return;

    try {
      if (window.sessionStorage.getItem(storageKey)) {
        hasShown.current = true;
        return;
      }
    } catch {
      // Continue without session persistence when browser storage is unavailable.
    }

    const firstSection = document.querySelector("main section");
    if (!firstSection) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting || entry.boundingClientRect.top >= 0) return;
      hasShown.current = true;
      try {
        window.sessionStorage.setItem(storageKey, "true");
      } catch {
        // The popup remains available for this page session.
      }
      setIsVisible(true);
      observer.disconnect();
    });

    observer.observe(firstSection);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!isVisible) return;

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusableElements = popupRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
    focusableElements?.[0]?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsVisible(false);
      if (event.key !== "Tab" || !focusableElements?.length) return;

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="donation-popup-backdrop" onClick={() => setIsVisible(false)}>
      <aside
        aria-labelledby="donation-popup-title"
        aria-modal="true"
        className="donation-popup"
        onClick={(event) => event.stopPropagation()}
        ref={popupRef}
        role="dialog"
      >
        <button
          aria-label="Dismiss donation message"
          className="donation-popup-close"
          onClick={() => setIsVisible(false)}
          type="button"
        >
          <X size={17} />
        </button>
        <span className="donation-popup-icon" aria-hidden="true"><Heart size={17} /></span>
        <div className="donation-popup-copy">
          <h2 id="donation-popup-title">Small acts can create lasting change.</h2>
          <p>Your contribution supports community-led work.</p>
          <Link href="/donate" onClick={() => setIsVisible(false)}>
            Make a contribution <ArrowUpRight size={15} />
          </Link>
        </div>
      </aside>
    </div>
  );
}
