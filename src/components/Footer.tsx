import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand & Address */}
          <div>
            <div className="text-xl font-bold tracking-[0.25em] uppercase text-white mb-6">
              ENOEM
            </div>
            <address className="not-italic text-sm text-white/60 leading-relaxed space-y-1 mb-6">
              <p>Klammerdammsgatan 2</p>
              <p>302 43 Halmstad</p>
            </address>
            <div className="space-y-4 text-sm text-white/60">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  Andreas Nilsson
                </p>
                <a
                  href="tel:+46701460391"
                  className="block hover:text-white/90 transition-colors"
                >
                  0701-460 391
                </a>
                <a
                  href="mailto:nilsson@enoem.se"
                  className="block hover:text-white/90 transition-colors"
                >
                  nilsson@enoem.se
                </a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">
                  Carin Mossberger
                </p>
                <a
                  href="tel:+46701460390"
                  className="block hover:text-white/90 transition-colors"
                >
                  0701-460 390
                </a>
                <a
                  href="mailto:mossberger@enoem.se"
                  className="block hover:text-white/90 transition-colors"
                >
                  mossberger@enoem.se
                </a>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
              Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Privacy policy", href: "#" },
                { label: "Cookie policy", href: "#" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-white transition-colors underline underline-offset-4"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <h4 className="text-xs font-semibold tracking-widest uppercase text-white/40 mb-4">
                Follow us
              </h4>
              <div className="flex gap-5 text-sm text-white/60">
                <a href="#" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} Enoem AB — Nilsson &amp; Mossberger
          </p>
        </div>
      </div>
    </footer>
  );
}
