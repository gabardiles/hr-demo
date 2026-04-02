import Link from "next/link";
import QuoteCarousel from "@/components/QuoteCarousel";

const newsItems = [
  {
    tag: "Talent Retention",
    title: "How to retain top talent in 2026",
    excerpt:
      "As competition for skilled professionals intensifies, companies that invest in culture, clarity of purpose, and individual development see measurably lower turnover.",
  },
  {
    tag: "Hiring Strategy",
    title: "The power of Second Opinion in hiring decisions",
    excerpt:
      "Adding an SHL-based analysis layer to your process doesn't slow recruitment — it sharpens it. Our Second Opinion service reduces costly mis-hires.",
  },
  {
    tag: "Leadership",
    title: "Building leadership through development programmes",
    excerpt:
      "IPU's pedagogical dialogue tools create lasting behavioural change. We share what we've seen work across industries in Halland and beyond.",
  },
];

const teamQuotes = [
  {
    text: "Every placement affects real people's lives — the candidate, their family, the team they join, the organisation they help build. That responsibility is what drives how we work.",
    name: "Andreas Nilsson",
    title: "Co-founder, Enoem",
  },
  {
    text: "Good recruitment isn't just about finding the right skills. It's about understanding the whole person. That's what the SHL tools and IPU methodology help us do.",
    name: "Carin Mossberger",
    title: "Co-founder, Enoem",
  },
];

const assignments = [
  "Projektledare",
  "Affärscontroller",
  "Servicetekniker",
  "Exportsäljare",
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end"
        style={{
          height: "65vh",
          minHeight: "420px",
          background:
            "linear-gradient(160deg, #6B7D8E 0%, #8A9BAD 45%, #B0BEC5 100%)",
        }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16 pb-16 lg:pb-20">
          <h1
            className="font-serif text-7xl lg:text-9xl leading-none"
            style={{ color: "rgba(255,255,255,0.72)" }}
          >
            Welcome
          </h1>
        </div>
      </section>

      {/* ── About Us Banner ── */}
      <section
        className="relative"
        style={{
          height: "200px",
          background:
            "linear-gradient(135deg, #C4A882 0%, #D4B896 100%)",
        }}
      >
        <Link href="/who-we-are" className="absolute inset-0 flex items-start">
          <div className="max-w-7xl w-full mx-auto px-8 lg:px-16 pt-8">
            <p className="text-white text-xl font-medium tracking-wide">
              About us
            </p>
          </div>
        </Link>
      </section>

      {/* ── News ── */}
      <section className="bg-bg-section py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <p className="text-xs tracking-[0.3em] uppercase font-semibold text-navy/50 mb-4">
            News
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-14 leading-snug">
            Perspectives on people &amp; performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article
                key={item.title}
                className="bg-white p-8 hover:shadow-md transition-shadow cursor-pointer"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-navy/60 mb-4">
                  {item.tag}
                </p>
                <h3 className="font-serif text-xl text-navy leading-snug mb-4">
                  {item.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">{item.excerpt}</p>
              </article>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="#"
              className="text-sm text-navy underline underline-offset-4 hover:text-muted transition-colors"
            >
              See all
            </Link>
          </div>
        </div>
      </section>

      {/* ── Our Team / Quote Carousel ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <p className="text-xs tracking-[0.3em] uppercase font-semibold text-navy/50 mb-4">
            Our Team
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-10 leading-snug">
            Our goal is to be exceptional together
          </h2>

          {/* Filter dropdowns */}
          <div className="flex flex-wrap gap-4 mb-4">
            <select className="border border-gray-300 px-4 py-2.5 text-sm text-navy bg-white focus:outline-none">
              <option>Service Area</option>
              <option>Search &amp; Executive</option>
              <option>Recruitment</option>
              <option>Analysis</option>
              <option>Development</option>
            </select>
            <select className="border border-gray-300 px-4 py-2.5 text-sm text-navy bg-white focus:outline-none">
              <option>Industry</option>
              <option>Construction</option>
              <option>Finance</option>
              <option>Technology</option>
              <option>Manufacturing</option>
            </select>
          </div>

          <QuoteCarousel quotes={teamQuotes} />
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-white py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-6 leading-snug max-w-2xl">
            We are experts across the full HR lifecycle
          </h2>
          <p className="text-muted leading-relaxed max-w-2xl mb-8 text-base">
            From identifying the right candidate to developing your existing leadership team — Enoem
            brings integrity, proven methods, and genuine care to every engagement. We don&apos;t cut
            corners, and we don&apos;t oversell.
          </p>
          <Link
            href="/who-we-are"
            className="text-sm text-navy underline underline-offset-4 hover:text-muted transition-colors"
          >
            See our services
          </Link>
        </div>
      </section>

      {/* ── Our Reach (dark) ── */}
      <section className="py-24 lg:py-32 bg-navy">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-white mb-6 leading-snug">
            Based in Halmstad,<br />working across Sweden
          </h2>
          <p className="text-white/60 leading-relaxed max-w-xl mb-10 text-base">
            Our roots are in Halland — a region we know intimately, with local relationships and market
            knowledge that make a real difference. But we place candidates from Malmö to Stockholm,
            wherever talent and opportunity meet.
          </p>
          <Link
            href="/who-we-are"
            className="text-sm text-white/70 underline underline-offset-4 hover:text-white transition-colors"
          >
            Read more
          </Link>
        </div>
      </section>

      {/* ── Current Assignments ── */}
      <section id="assignments" className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-serif text-4xl lg:text-5xl text-navy mb-4 leading-snug">
            Current assignments
          </h2>
          <p className="text-muted leading-relaxed mb-6 max-w-xl text-base">
            We work on a range of assignments at any given time. Below is a selection of current open
            positions. Contact us to learn more about any role.
          </p>
          <Link
            href="#contact"
            className="text-sm text-navy underline underline-offset-4 hover:text-muted transition-colors"
          >
            Read more
          </Link>

          <ul className="mt-12 space-y-5 border-t border-gray-100 pt-10">
            {assignments.map((a) => (
              <li key={a}>
                <a
                  href="mailto:nilsson@enoem.se"
                  className="text-navy hover:underline underline-offset-4 text-lg font-medium"
                >
                  {a}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="#"
              className="text-sm text-navy underline underline-offset-4 hover:text-muted transition-colors"
            >
              See all assignments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
