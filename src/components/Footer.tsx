import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <div className="text-2xl font-bold tracking-[0.25em] text-white mb-1">ENOEM</div>
              <div className="text-xs tracking-widest text-white/50 uppercase">Nilsson &amp; Mossberger</div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mt-4">
              Tillsammans når vi framgång.
            </p>
            <p className="text-xs text-white/40 mt-1 italic">
              Together we achieve success.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
              Services
            </h4>
            <ul className="space-y-2">
              {["Search", "Recruitment", "Analysis", "Development"].map((s) => (
                <li key={s}>
                  <Link
                    href={`/#services`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Home", href: "/" },
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Current Assignments", href: "/#assignments" },
                { label: "Contact", href: "/#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h4 className="text-xs font-semibold tracking-widest uppercase text-white/50 mb-4">
              Contact
            </h4>
            <address className="not-italic space-y-3">
              <div>
                <p className="text-sm text-white/90">Klammerdammsgatan 2</p>
                <p className="text-sm text-white/90">302 43 Halmstad</p>
                <p className="text-sm text-white/90">Sweden</p>
              </div>
              <div className="space-y-1 pt-1">
                <p className="text-xs text-white/50 uppercase tracking-wider">Andreas Nilsson</p>
                <a href="tel:+46701460391" className="block text-sm text-white/80 hover:text-white transition-colors">
                  0701-460 391
                </a>
                <a href="mailto:nilsson@enoem.se" className="block text-sm text-white/80 hover:text-white transition-colors">
                  nilsson@enoem.se
                </a>
              </div>
              <div className="space-y-1 pt-1">
                <p className="text-xs text-white/50 uppercase tracking-wider">Carin Mossberger</p>
                <a href="tel:+46701460390" className="block text-sm text-white/80 hover:text-white transition-colors">
                  0701-460 390
                </a>
                <a href="mailto:mossberger@enoem.se" className="block text-sm text-white/80 hover:text-white transition-colors">
                  mossberger@enoem.se
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Enoem AB — Nilsson &amp; Mossberger. All rights reserved.
          </p>
          <p className="text-xs text-white/30">
            enoem.se · Halmstad, Sweden
          </p>
        </div>
      </div>
    </footer>
  );
}
