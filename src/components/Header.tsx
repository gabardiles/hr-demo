"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Who We Are", href: "/who-we-are" },
  { label: "Services", href: "/#services" },
  { label: "Assignments", href: "/#assignments" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl font-bold tracking-[0.25em] uppercase text-white"
            onClick={() => setOpen(false)}
          >
            ENOEM
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex flex-col gap-[5px] p-2 text-white"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
            <span className="block w-6 h-0.5 bg-white" />
          </button>
        </div>
      </div>

      {/* Dropdown menu */}
      {open && (
        <div className="bg-navy border-t border-white/10">
          <nav className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col gap-5">
            {navLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium tracking-widest uppercase text-white/70 hover:text-white transition-colors"
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
