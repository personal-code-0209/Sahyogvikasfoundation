"use client";

import Link from "next/link";
import { ArrowUpRight, Heart, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const storageKey = "sahyog-donation-popup-shown";

export default function SiteDonationPopup() {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(false);
  const hasShown = useRef(false);

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

    const timer = window.setTimeout(() => {
      hasShown.current = true;
      try {
        window.sessionStorage.setItem(storageKey, "true");
      } catch {
        // The popup remains available for this page session.
      }
      setIsVisible(true);
    }, 8000);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <aside className="donation-popup" role="dialog" aria-labelledby="donation-popup-title">
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
  );
}
