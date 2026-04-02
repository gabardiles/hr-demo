import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#1B2A3D" }} className="text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand + address */}
          <div>
            <div className="text-xl font-bold tracking-[0.3em] text-white mb-4">ENOEM</div>
            <address className="not-italic space-y-1 text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
              <p>Klammerdammsgatan 2</p>
              <p>302 43 Halmstad</p>
              <p>Sweden</p>
            </address>
          </div>

          {/* Contacts */}
          <div className="space-y-6">
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                Andreas Nilsson
              </p>
              <a
                href="tel:+46701460391"
                className="block text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                0701-460 391
              </a>
              <a
                href="mailto:nilsson@enoem.se"
                className="block text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                nilsson@enoem.se
              </a>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase mb-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                Carin Mossberger
              </p>
              <a
                href="tel:+46701460390"
                className="block text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                0701-460 390
              </a>
              <a
                href="mailto:mossberger@enoem.se"
                className="block text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.7)" }}
              >
                mossberger@enoem.se
              </a>
            </div>
          </div>

          {/* Links + social */}
          <div className="space-y-6">
            <div className="flex flex-col gap-2">
              <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "rgba(255,255,255,0.4)" }}>
                Quick links
              </p>
              {[
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: "rgba(255,255,255,0.6)" }}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/enoem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                LinkedIn
              </a>
              <a
                href="https://www.facebook.com/enoem"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-sm hover:text-white transition-colors"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div
          className="pt-8 text-xs"
          style={{ borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.35)" }}
        >
          © 2026 Enoem AB — Nilsson &amp; Mossberger
        </div>
      </div>
    </footer>
  );
}
