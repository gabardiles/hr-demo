import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-navy text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white uppercase tracking-widest text-sm font-semibold">
            ENOEM
          </Link>

          {/* Hamburger */}
          <button
            aria-label="Open menu"
            className="flex flex-col gap-[5px] cursor-pointer"
          >
            <span className="block w-6 h-[1.5px] bg-white"></span>
            <span className="block w-6 h-[1.5px] bg-white"></span>
            <span className="block w-6 h-[1.5px] bg-white"></span>
          </button>
        </div>
      </div>
    </header>
  );
}
