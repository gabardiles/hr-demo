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

const services = [
  {
    id: "search",
    title: "Search",
    tagline: "Find the people others can't",
    description:
      "We use targeted methods to identify and approach the right candidates — including those not actively looking. Our network and industry connections across Sweden give you access to talent that a standard job posting simply won't reach.",
    detail: "Discreet · Targeted · Network-driven",
  },
  {
    id: "recruitment",
    title: "Recruitment",
    tagline: "Full process or partial support",
    description:
      "We handle every stage of recruitment — from defining the role and sourcing candidates to interviews, references, and final selection. Based in Halmstad and operating across all of Sweden, we adapt to your needs.",
    detail: "End-to-end · Flexible · Sweden-wide",
  },
  {
    id: "analysis",
    title: "Analysis",
    tagline: "Second Opinion — another dimension",
    description:
      "Important hiring decisions deserve more than intuition. Our Second Opinion service, built on SHL's proven psychometric methods, adds an objective layer that complements your own assessment and reduces the risk of costly mistakes.",
    detail: "SHL-based · Objective · Evidence-driven",
  },
  {
    id: "development",
    title: "Development",
    tagline: "Individual & group growth",
    description:
      "Using IPU's pedagogical dialogue tools, we work with behaviour, drivers, and emotional intelligence to create lasting change. Whether developing a single manager or an entire leadership team, we tailor every programme to the people involved.",
    detail: "IPU-based · Behaviour · EQ · Leadership",
  },
];

const assignments = [
  { title: "Projektledare", location: "Halmstad", type: "Permanent", industry: "Construction & Infrastructure" },
  { title: "Affärscontroller", location: "Göteborg", type: "Permanent", industry: "Finance & Commerce" },
  { title: "Servicetekniker", location: "Malmö", type: "Permanent", industry: "Engineering & Maintenance" },
  { title: "Exportsäljare", location: "Stockholm", type: "Permanent", industry: "Sales & Business Development" },
  { title: "HR-chef", location: "Halmstad", type: "Permanent", industry: "Human Resources" },
  { title: "Produktionschef", location: "Jönköping", type: "Permanent", industry: "Manufacturing" },
];

const testimonials = [
  {
    quote:
      "Enoem found us a production manager we'd been looking for ourselves for six months. Within ten weeks of engaging them, we had our candidate. The quality of the match was exceptional.",
    author: "Operations Director",
    company: "Manufacturing company, Halland",
  },
  {
    quote:
      "The Second Opinion analysis gave our board the confidence to make a difficult hire. It surfaced things our interviews hadn't — and it was right. We've not looked back.",
    author: "CEO",
    company: "Technology firm, Gothenburg",
  },
  {
    quote:
      "Andreas and Carin are refreshingly honest. No overselling. Just solid advice and a process that works. We use them for all senior hires now.",
    author: "HR Manager",
    company: "Retail group, Sweden",
  },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(255,255,255,.3) 79px,rgba(255,255,255,.3) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(255,255,255,.3) 79px,rgba(255,255,255,.3) 80px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-32 lg:py-44">
          <div className="max-w-3xl">
            <p className="text-accent-light text-xs tracking-[0.3em] uppercase font-semibold mb-6">
              Strategic HR · Halmstad, Sweden
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8">
              Together We Build
              <br />
              <span className="text-accent-light">Stronger Teams</span>
            </h1>
            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-12">
              Enoem brings deep HR expertise, honest counsel, and proven methods to every assignment.
              Search, Recruitment, Analysis, and Development — tailored to your needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/who-we-are"
                className="px-8 py-3.5 bg-accent text-white text-sm font-semibold tracking-wide uppercase hover:bg-accent-light transition-colors"
              >
                About Us
              </Link>
              <Link
                href="#services"
                className="px-8 py-3.5 border border-white/30 text-white text-sm font-semibold tracking-wide uppercase hover:border-white/70 hover:bg-white/5 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10" />
      </section>

      {/* ── About banner ── */}
      <section className="bg-navy-mid py-10 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-white/80 text-base leading-relaxed max-w-2xl">
              Founded in 2008 in Halmstad by Andreas Nilsson and Carin Mossberger.
              Built on honesty, ethics, and a genuine commitment to the people we work with.
            </p>
            <Link
              href="/who-we-are"
              className="shrink-0 text-accent-light text-sm font-semibold tracking-widest uppercase hover:text-white transition-colors flex items-center gap-2"
            >
              Who We Are
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Insights ── */}
      <section className="bg-gray-light py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                Insights
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight">
                Perspectives on people &amp; performance
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insights.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-gray-mid p-8 hover:shadow-lg transition-shadow group cursor-pointer"
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold tracking-wider uppercase text-accent px-2.5 py-1 bg-accent/10">
                    {item.tag}
                  </span>
                  <span className="text-xs text-gray-text">{item.date}</span>
                </div>
                <h3 className="text-lg font-bold text-navy mb-3 group-hover:text-accent transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-text leading-relaxed">{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Team ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Our Team
            </p>
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              The people behind Enoem
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Andreas */}
            <div className="border border-gray-mid p-8 bg-gray-light/50">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-navy flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">AN</span>
                </div>
                <h3 className="text-xl font-bold text-navy">Andreas Nilsson</h3>
                <p className="text-sm text-accent font-medium tracking-wide mt-1">
                  Co-founder &amp; Senior Consultant
                </p>
              </div>
              <p className="text-sm text-gray-text leading-relaxed mb-4">
                Andreas brings over 15 years of experience in executive search and recruitment.
                His expertise spans construction, industry, and commercial sectors, with a strong
                track record of placing senior and specialist roles across Sweden.
              </p>
              <div className="space-y-1">
                <a href="tel:+46701460391" className="text-xs text-navy/70 hover:text-navy transition-colors block">
                  0701-460 391
                </a>
                <a href="mailto:nilsson@enoem.se" className="text-xs text-navy/70 hover:text-navy transition-colors block">
                  nilsson@enoem.se
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-gray-mid">
                <p className="text-xs text-gray-text uppercase tracking-wider font-semibold mb-2">Focus areas</p>
                <div className="flex flex-wrap gap-2">
                  {["Search", "Recruitment", "Executive Roles"].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-navy/10 text-navy">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Carin */}
            <div className="border border-gray-mid p-8 bg-gray-light/50">
              <div className="mb-6">
                <div className="w-14 h-14 rounded-full bg-navy-mid flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">CM</span>
                </div>
                <h3 className="text-xl font-bold text-navy">Carin Mossberger</h3>
                <p className="text-sm text-accent font-medium tracking-wide mt-1">
                  Co-founder &amp; Senior Consultant
                </p>
              </div>
              <p className="text-sm text-gray-text leading-relaxed mb-4">
                Carin specialises in analysis and individual development, certified in SHL's
                psychometric tools and IPU's dialogue-based methodology. She works closely with
                clients and candidates to ensure every process is professional, transparent, and fair.
              </p>
              <div className="space-y-1">
                <a href="tel:+46701460390" className="text-xs text-navy/70 hover:text-navy transition-colors block">
                  0701-460 390
                </a>
                <a href="mailto:mossberger@enoem.se" className="text-xs text-navy/70 hover:text-navy transition-colors block">
                  mossberger@enoem.se
                </a>
              </div>
              <div className="mt-5 pt-5 border-t border-gray-mid">
                <p className="text-xs text-gray-text uppercase tracking-wider font-semibold mb-2">Focus areas</p>
                <div className="flex flex-wrap gap-2">
                  {["Analysis (SHL)", "Development (IPU)", "Candidate Experience"].map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 bg-navy/10 text-navy">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="border-t border-gray-mid pt-16">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Client Voices
            </p>
            <h3 className="text-2xl font-bold text-navy mb-10">What our clients say</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((t) => (
                <blockquote key={t.author} className="bg-gray-light p-8 border-l-4 border-accent">
                  <p className="text-sm text-gray-dark leading-relaxed italic mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer>
                    <p className="text-xs font-semibold text-navy">{t.author}</p>
                    <p className="text-xs text-gray-text">{t.company}</p>
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="bg-gray-light py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Our Services
            </p>
            <h2 className="text-3xl font-bold text-navy tracking-tight max-w-xl">
              Four disciplines. One trusted partner.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((svc, i) => (
              <div key={svc.id} className="bg-white p-10 border border-gray-mid hover:border-accent/30 hover:shadow-md transition-all group">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <span className="text-xs text-gray-text tabular-nums font-mono mb-2 block">
                      0{i + 1}
                    </span>
                    <h3 className="text-2xl font-bold text-navy group-hover:text-accent transition-colors">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-accent mt-1 font-medium">{svc.tagline}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-text leading-relaxed mb-6">
                  {svc.description}
                </p>
                <div className="pt-4 border-t border-gray-mid">
                  <p className="text-xs text-gray-text/70 tracking-wider">{svc.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Reach ── */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent-light text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Our Reach
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight mb-6">
                Based in Halmstad.
                <br />
                Working across Sweden.
              </h2>
              <p className="text-white/70 leading-relaxed mb-4">
                Our roots are in Halland — a region we know intimately, with the local relationships
                and market knowledge that make a real difference when finding the right fit.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                But we have placed candidates from Malmö to Stockholm, from Gothenburg to Sundsvall.
                Distance is not a barrier. We recruit where talent and opportunity meet.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10">
                {[
                  { stat: "2008", label: "Founded" },
                  { stat: "Sweden", label: "National reach" },
                  { stat: "Halland", label: "Home region" },
                ].map(({ stat, label }) => (
                  <div key={label}>
                    <p className="text-2xl font-bold text-white">{stat}</p>
                    <p className="text-xs text-white/50 mt-1 uppercase tracking-wider">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="bg-navy-mid border border-white/10 p-10 space-y-5">
                <p className="text-xs tracking-widest uppercase text-white/40 font-semibold">
                  Regions we serve
                </p>
                {[
                  "Halland (home region)",
                  "Västra Götaland",
                  "Skåne",
                  "Stockholm",
                  "Jönköping / Småland",
                  "All of Sweden on request",
                ].map((region) => (
                  <div key={region} className="flex items-center gap-3 text-sm text-white/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {region}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Assignments ── */}
      <section id="assignments" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                Current Assignments
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight">
                Open positions
              </h2>
            </div>
            <p className="hidden md:block text-sm text-gray-text max-w-xs text-right">
              Interested in any of these roles? Get in touch to learn more.
            </p>
          </div>
          <div className="divide-y divide-gray-mid border-t border-b border-gray-mid">
            {assignments.map((a) => (
              <div
                key={a.title}
                className="flex flex-col sm:flex-row sm:items-center justify-between py-5 gap-3 group hover:bg-gray-light/50 px-2 -mx-2 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-5">
                  <span className="w-8 h-8 rounded-full bg-navy/10 flex items-center justify-center shrink-0">
                    <span className="text-navy text-xs font-bold">
                      {a.title[0]}
                    </span>
                  </span>
                  <div>
                    <p className="font-semibold text-navy group-hover:text-accent transition-colors">
                      {a.title}
                    </p>
                    <p className="text-xs text-gray-text mt-0.5">{a.industry}</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 sm:gap-8 ml-13 sm:ml-0">
                  <span className="text-sm text-gray-text">{a.location}</span>
                  <span className="text-xs bg-navy/10 text-navy px-2.5 py-1 font-medium">
                    {a.type}
                  </span>
                  <span className="text-accent text-sm font-medium hidden sm:block">
                    Enquire →
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-sm text-gray-text mb-4">
              Don&apos;t see the right role? Send us an open application.
            </p>
            <a
              href="mailto:nilsson@enoem.se"
              className="inline-block px-8 py-3.5 bg-navy text-white text-sm font-semibold tracking-wide uppercase hover:bg-navy-mid transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-accent py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 tracking-tight">
            Ready to find your next key person?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contact Andreas or Carin directly. Honest advice, no obligation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:nilsson@enoem.se"
              className="px-8 py-3.5 bg-white text-accent text-sm font-bold tracking-wide uppercase hover:bg-gray-light transition-colors"
            >
              Contact Andreas
            </a>
            <a
              href="mailto:mossberger@enoem.se"
              className="px-8 py-3.5 border-2 border-white text-white text-sm font-bold tracking-wide uppercase hover:bg-white/10 transition-colors"
            >
              Contact Carin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
