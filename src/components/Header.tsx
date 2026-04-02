"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header style={{ backgroundColor: "#111" }} className="fixed top-0 left-0 right-0 z-50">
      <div style={{ height: "3px", backgroundColor: "#D02C2B" }} />
      <div className="flex items-center justify-between px-6 py-5">
        <Link href="/" className="text-white text-lg font-bold tracking-[0.3em]">
          ENOEM
        </Link>
        <button
          onClick={() => setOpen(!open)}
          aria-label="Meny"
          className="flex flex-col gap-[5px] cursor-pointer p-1"
        >
          <span className="block w-6 h-[1.5px] bg-white" />
          <span className="block w-6 h-[1.5px] bg-white" />
          <span className="block w-6 h-[1.5px] bg-white" />
        </button>
      </div>

      {open && (
        <nav
          style={{ backgroundColor: "#111", borderTop: "1px solid rgba(255,255,255,0.1)" }}
          className="px-6 py-8 flex flex-col gap-6"
        >
          {[
            { label: "Hem", href: "/" },
            { label: "Om oss", href: "/who-we-are" },
            { label: "Tjänster", href: "/#services" },
            { label: "Uppdrag", href: "/#assignments" },
            { label: "Kontakt", href: "/#contact" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/70 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
