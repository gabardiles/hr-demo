import Link from "next/link";

const insights = [
  {
    tag: "Talent Retention",
    date: "March 2026",
    title: "How to retain top talent in 2026",
    excerpt:
      "As competition for skilled professionals intensifies, companies that invest in culture, clarity of purpose, and individual development see measurably lower turnover.",
  },
  {
    tag: "Hiring Strategy",
    date: "February 2026",
    title: "The power of Second Opinion in hiring decisions",
    excerpt:
      "Adding an SHL-based analysis layer to your process doesn't slow recruitment — it sharpens it. Our Second Opinion service reduces costly mis-hires by up to 40%.",
  },
  {
    tag: "Leadership",
    date: "January 2026",
    title: "Building leadership through development programmes",
    excerpt:
      "IPU's pedagogical dialogue tools create lasting behavioural change. We share what we've seen work across industries in Halland and beyond.",
  },
];

const teamQuotes = [
  {
    quote:
      "Enoem found us a production manager we'd been looking for ourselves for six months. Within ten weeks of engaging them, we had our candidate.",
    author: "Operations Director",
    company: "Manufacturing company, Halland",
  },
  {
    quote:
      "The Second Opinion analysis gave our board the confidence to make a difficult hire. It surfaced things our interviews hadn't — and it was right.",
    author: "CEO",
    company: "Technology firm, Gothenburg",
  },
  {
    quote:
      "Andreas and Carin are refreshingly honest. No overselling. Just solid advice and a process that works. We use them for all senior hires now.",
    author: "HR Manager",
    company: "Retail group, Sweden",
  },
  {
    quote:
      "Their candidate analysis gave us a language to talk about people we wouldn't have had otherwise. It transformed how we approach leadership hiring.",
    author: "Managing Director",
    company: "Infrastructure company, Skåne",
  },
];

const services = [
  {
    id: "search",
    title: "Search",
    tagline: "Find the people others can't",
    description:
      "We use targeted methods to identify and approach the right candidates — including those not actively looking. Our network and industry connections across Sweden give you access to talent a standard posting won't reach.",
  },
  {
    id: "recruitment",
    title: "Recruitment",
    tagline: "Full process or partial support",
    description:
      "We handle every stage of recruitment — from defining the role and sourcing candidates to interviews, references, and final selection. Based in Halmstad and operating across all of Sweden.",
  },
  {
    id: "analysis",
    title: "Analysis",
    tagline: "Second Opinion — another dimension",
    description:
      "Important hiring decisions deserve more than intuition. Our Second Opinion service, built on SHL's proven psychometric methods, adds an objective layer that reduces the risk of costly mistakes.",
  },
  {
    id: "development",
    title: "Development",
    tagline: "Individual & group growth",
    description:
      "Using IPU's pedagogical dialogue tools, we work with behaviour, drivers, and emotional intelligence to create lasting change — for individual managers and entire leadership teams.",
  },
];

const assignments = [
  { title: "Projektledare", location: "Halmstad", industry: "Construction & Infrastructure" },
  { title: "Affärscontroller", location: "Göteborg", industry: "Finance & Commerce" },
  { title: "Servicetekniker", location: "Malmö", industry: "Engineering & Maintenance" },
  { title: "Exportsäljare", location: "Stockholm", industry: "Sales & Business Development" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero — 65vh, gradient, "Welcome" bottom-left serif */}
      <section
        style={{
          minHeight: "65vh",
          background: "linear-gradient(135deg, #8A9BAD 0%, #B0BEC5 100%)",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.6)" }}
          >
            Strategic HR · Halmstad, Sweden
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl leading-tight"
            style={{ color: "rgba(255,255,255,0.85)", fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Welcome
          </h1>
        </div>
      </section>

      {/* 2. About banner — ~200px, warm gradient, "About us" top-left */}
      <Link href="/who-we-are" className="block" style={{ textDecoration: "none" }}>
        <section
          style={{
            minHeight: "200px",
            background: "linear-gradient(135deg, #C4A882 0%, #D4B896 100%)",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "2rem 1.5rem",
          }}
          className="lg:px-12 cursor-pointer group"
        >
          <p
            className="text-sm tracking-widest uppercase font-medium"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            About us
          </p>
          <div className="flex items-end justify-between">
            <p
              className="text-2xl lg:text-3xl max-w-xl leading-snug"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "rgba(255,255,255,0.85)" }}
            >
              Founded in 2008 by Andreas Nilsson and Carin Mossberger — built on honesty, ethics, and
              genuine care for people.
            </p>
            <span
              className="text-sm tracking-widest uppercase hidden md:block group-hover:translate-x-1 transition-transform"
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              Read more →
            </span>
          </div>
        </section>
      </Link>

      {/* 3. Insights — #E8EDF1 bg */}
      <section style={{ backgroundColor: "#E8EDF1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "#1B2A3D" }}
            >
              Insights
            </p>
            <h2
              className="text-3xl lg:text-4xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
            >
              Perspectives on people &amp; performance
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((item) => (
              <article
                key={item.title}
                className="bg-white p-8 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1"
                    style={{ backgroundColor: "rgba(208,44,43,0.1)", color: "#D02C2B" }}
                  >
                    {item.tag}
                  </span>
                  <span className="text-xs" style={{ color: "#6B7280" }}>
                    {item.date}
                  </span>
                </div>
                <h3
                  className="text-lg mb-3 leading-snug"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
                >
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team — white bg, quote carousel (static 4 dots) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "#1B2A3D" }}
            >
              Our Team
            </p>
            <h2
              className="text-3xl lg:text-4xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
            >
              The people behind Enoem
            </h2>
          </div>

          {/* Testimonial display — show first quote large, 4 dots below */}
          <div className="max-w-3xl">
            <blockquote className="mb-8">
              <p
                className="text-xl lg:text-2xl leading-relaxed mb-6"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "#1B2A3D",
                  fontStyle: "italic",
                }}
              >
                &ldquo;{teamQuotes[0].quote}&rdquo;
              </p>
              <footer>
                <p className="text-sm font-semibold" style={{ color: "#1B2A3D" }}>
                  {teamQuotes[0].author}
                </p>
                <p className="text-sm" style={{ color: "#6B7280" }}>
                  {teamQuotes[0].company}
                </p>
              </footer>
            </blockquote>
            {/* 4 dots */}
            <div className="flex gap-2 mt-6">
              {teamQuotes.map((_, i) => (
                <span
                  key={i}
                  className="block w-2 h-2 rounded-full"
                  style={{ backgroundColor: i === 0 ? "#D02C2B" : "#C4C4C4" }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services — white bg */}
      <section id="services" className="bg-white py-24" style={{ borderTop: "1px solid #E8EDF1" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "#1B2A3D" }}
            >
              Services
            </p>
            <h2
              className="text-3xl lg:text-4xl max-w-xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
            >
              Deep HR expertise across four disciplines
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#E8EDF1" }}>
            {services.map((svc, i) => (
              <div key={svc.id} className="bg-white p-10">
                <p
                  className="text-xs font-mono mb-4"
                  style={{ color: "#D02C2B" }}
                >
                  0{i + 1}
                </p>
                <h3
                  className="text-2xl mb-2"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
                >
                  {svc.title}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: "#8A9BAD" }}>
                  {svc.tagline}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                  {svc.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reach — dark navy */}
      <section style={{ backgroundColor: "#1B2A3D" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2
            className="text-3xl lg:text-4xl text-white mb-4"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Based in Halmstad, working across Sweden
          </h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)" }}>
            Our roots are in Halland. Our reach extends from Malmö to Stockholm — wherever talent and
            opportunity meet.
          </p>
        </div>
      </section>

      {/* 7. Assignments — white bg */}
      <section id="assignments" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <h2
              className="text-3xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
            >
              Current assignments
            </h2>
          </div>
          <div style={{ borderTop: "1px solid #E8EDF1", borderBottom: "1px solid #E8EDF1" }}>
            {assignments.map((a) => (
              <div
                key={a.title}
                className="flex items-center justify-between py-5 cursor-pointer group"
                style={{ borderBottom: "1px solid #E8EDF1" }}
              >
                <div>
                  <p
                    className="font-medium text-base"
                    style={{ color: "#1B2A3D" }}
                  >
                    {a.title}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: "#9CA3AF" }}>
                    {a.industry}
                  </p>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-sm hidden sm:block" style={{ color: "#6B7280" }}>
                    {a.location}
                  </span>
                  <span
                    className="text-sm group-hover:translate-x-1 transition-transform"
                    style={{ color: "#8A9BAD" }}
                  >
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA — #E8EDF1 bg */}
      <section id="contact" style={{ backgroundColor: "#E8EDF1" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "#1B2A3D" }}
            >
              Contact
            </p>
            <h2
              className="text-3xl lg:text-4xl mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
            >
              Ready to find your next key person?
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#6B7280" }}>
              Contact Andreas or Carin directly. Honest advice, no obligation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:nilsson@enoem.se"
                className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-90"
                style={{ backgroundColor: "#D02C2B", color: "#fff" }}
              >
                Contact Andreas
              </a>
              <a
                href="mailto:mossberger@enoem.se"
                className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors"
                style={{ border: "1px solid #D02C2B", color: "#D02C2B" }}
              >
                Contact Carin
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
