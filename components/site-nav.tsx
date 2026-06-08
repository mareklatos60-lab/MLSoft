"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Products", href: "#products" },
  { label: "Why MLSoft", href: "#why-mlsoft" },
  { label: "Company", href: "#company-information", labelWide: "Company information" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="site-nav__inner">
        <Link
          href="#dashboard"
          className="site-nav__logo"
          aria-label="MLSoft home"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/MLSoft_Logo_Design.png"
            alt="MLSoft"
            width={160}
            height={64}
            priority
            className="site-nav__logo-img"
          />
        </Link>

        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={open}
          aria-controls="site-nav-menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="site-nav__toggle-icon" aria-hidden="true" />
          <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        </button>

        <nav
          id="site-nav-menu"
          className={`site-nav__links${open ? " site-nav__links--open" : ""}`}
          aria-label="Main"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="site-nav__link"
              onClick={() => setOpen(false)}
            >
              <span className="site-nav__link-short">{link.label}</span>
              {"labelWide" in link ? (
                <span className="site-nav__link-wide">{link.labelWide}</span>
              ) : null}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
