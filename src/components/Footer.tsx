import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand + Address */}
          <div>
            <div className="text-white uppercase tracking-widest text-sm font-semibold mb-6">
              ENOEM
            </div>
            <address className="not-italic text-sm leading-loose" style={{ color: "rgba(255,255,255,0.65)" }}>
              <p>Klammerdammsgatan 2</p>
              <p>302 43 Halmstad</p>
            </address>
            <div className="mt-6 space-y-4 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Andreas Nilsson</p>
                <a href="tel:+46701460391" className="block hover:text-white transition-colors">0701-460 391</a>
                <a href="mailto:nilsson@enoem.se" className="block hover:text-white transition-colors">nilsson@enoem.se</a>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Carin Mossberger</p>
                <a href="tel:+46701460390" className="block hover:text-white transition-colors">0701-460 390</a>
                <a href="mailto:mossberger@enoem.se" className="block hover:text-white transition-colors">mossberger@enoem.se</a>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Navigation</h4>
            <ul className="space-y-3 text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Who We Are", href: "/who-we-are" },
                { label: "Services", href: "/#services" },
                { label: "Assignments", href: "/#assignments" },
                { label: "Contact", href: "/#contact" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className="hover:text-white transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Legal */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/40 mb-6">Follow us</h4>
            <div className="flex gap-4 mb-8">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com"
                aria-label="LinkedIn"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              {/* Facebook */}
              <a
                href="https://www.facebook.com"
                aria-label="Facebook"
                className="w-9 h-9 border border-white/20 flex items-center justify-center hover:border-white/60 transition-colors"
                style={{ color: "rgba(255,255,255,0.65)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
            <ul className="space-y-2 text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
              <li><Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/cookies" className="hover:text-white/70 transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © {new Date().getFullYear()} Enoem AB. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
