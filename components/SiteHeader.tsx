"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/about", label: "Our story" },
  { href: "/programs", label: "What we do" },
  { href: "/get-involved", label: "Get involved" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="top-note">
        <span className="top-note-dot" />
        Rooted in community. Growing toward possibility.
      </div>
      <div className="nav-wrap">
        <Link className="brand" href="/" aria-label="Sahyog Vikas Foundation home" onClick={() => setIsOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">
            SAHYOG <b>VIKAS</b>
            <small>FOUNDATION</small>
          </span>
        </Link>
        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          className="menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
        <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Main navigation">
          {links.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link className="nav-donate" href="/donate" onClick={() => setIsOpen(false)}>
            Support our work <ArrowUpRight size={15} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
