import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-2xl font-bold tracking-[0.25em] text-white group-hover:text-accent-light transition-colors">
              ENOEM
            </span>
            <span className="text-[10px] tracking-widest text-white/60 uppercase font-medium">
              Nilsson &amp; Mossberger
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#services"
              className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors uppercase"
            >
              Services
            </Link>
            <Link
              href="/who-we-are"
              className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors uppercase"
            >
              Who We Are
            </Link>
            <Link
              href="/#assignments"
              className="text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors uppercase"
            >
              Assignments
            </Link>
            <Link
              href="/#contact"
              className="ml-4 px-5 py-2 border border-white/40 text-sm font-medium tracking-wide text-white hover:bg-white hover:text-navy transition-colors uppercase"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile: show contact link only */}
          <Link
            href="/#contact"
            className="md:hidden text-sm font-medium tracking-wide text-white/80 hover:text-white transition-colors uppercase"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
