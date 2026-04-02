import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are — Enoem (Nilsson & Mossberger)",
  description:
    "Founded in 2008 in Halmstad by Andreas Nilsson and Carin Mossberger. Learn about Enoem's story, values, and approach to HR, recruitment, and people development.",
};

const values = [
  {
    title: "Honesty",
    description:
      "We say what we mean and mean what we say — to clients, to candidates, and to each other. If a role isn't right for a candidate, we say so. If a brief is unclear, we push back. Honesty is not a policy; it is who we are.",
  },
  {
    title: "Ethics",
    description:
      "Every process we run is conducted with full integrity. Candidate information is handled with respect and discretion. Clients receive our honest assessment, not our optimistic one. We hold the same standard for everyone in the room.",
  },
  {
    title: "Morality",
    description:
      "We think about the long-term impact of our work. A good hire changes a person's life. A poor one affects an entire organisation. We take that responsibility seriously, and we work accordingly.",
  },
];

const approach = [
  {
    number: "01",
    title: "Client Partnership",
    description:
      "We find the setup that meets your specific needs and wishes. Full recruitment process or partial support — we are flexible by design. Some clients need us from day one through final offer. Others need a single stage done well. Both are fine with us.",
    accent: "We work with you, not just for you.",
  },
  {
    number: "02",
    title: "Candidate Focus",
    description:
      "For candidates, we offer a transparent and professional process from first contact to final feedback. We communicate clearly, respect your time, and give honest guidance — whether you move forward in the process or not. Candidates remember how they were treated.",
    accent: "Respect. Transparency. Genuine feedback.",
  },
  {
    number: "03",
    title: "Proven Methods",
    description:
      "We use SHL's internationally validated psychometric tools for our Second Opinion analysis service, and IPU's pedagogical dialogue methodology for individual and group development. We don't make these choices lightly — they work.",
    accent: "SHL analysis · IPU development frameworks.",
  },
];

const trustStats = [
  { value: "2008", label: "Year founded", sub: "16+ years of experience" },
  { value: "200+", label: "Positions filled", sub: "Across all industries" },
  { value: "Sweden", label: "National reach", sub: "From Halland and beyond" },
  { value: "SHL & IPU", label: "Certified methods", sub: "Objective, proven tools" },
];

const industries = [
  "Construction & Infrastructure",
  "Manufacturing & Industry",
  "Finance & Accounting",
  "Technology & Engineering",
  "Sales & Business Development",
  "Human Resources & Management",
  "Healthcare & Life Sciences",
  "Retail & Commerce",
];

export default function WhoWeAre() {
  return (
    <>
      {/* ── Page Hero ── */}
      <section className="bg-navy py-28 lg:py-36 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg,transparent,transparent 79px,rgba(255,255,255,.3) 79px,rgba(255,255,255,.3) 80px),repeating-linear-gradient(90deg,transparent,transparent 79px,rgba(255,255,255,.3) 79px,rgba(255,255,255,.3) 80px)",
            }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl">
            <p className="text-accent-light text-xs tracking-[0.3em] uppercase font-semibold mb-5">
              Enoem · Nilsson &amp; Mossberger
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-white/70 leading-relaxed">
              An HR and recruitment company built on long experience, honest relationships,
              and a genuine belief that the right person in the right role changes everything.
            </p>
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-4">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight mb-6">
                Founded in Halmstad, 2008
              </h2>
              <div className="space-y-4 text-gray-text leading-relaxed">
                <p>
                  Andreas Nilsson and Carin Mossberger founded Enoem with a clear idea:
                  that HR consulting and recruitment could be done better — with more honesty,
                  more rigour, and more genuine care for the people on both sides of the process.
                </p>
                <p>
                  We started in Halland, a region we know deeply, with the local business
                  relationships and market understanding that matter when placing people in roles
                  that fit. Over time, our work spread across Sweden.
                </p>
                <p>
                  Today Enoem serves clients from Malmö to Stockholm, with the same approach
                  it started with: simple partnerships, effective methods, and a commitment to
                  getting it right — not just getting it done.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-light p-8 border-l-4 border-accent">
                <p className="text-lg font-bold text-navy italic mb-2">
                  &ldquo;Tillsammans når vi framgång.&rdquo;
                </p>
                <p className="text-sm text-gray-text italic mb-4">
                  &ldquo;Together we achieve success.&rdquo;
                </p>
                <p className="text-xs text-gray-text/70 uppercase tracking-wider">
                  Enoem tagline — our founding principle
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {trustStats.map(({ value, label, sub }) => (
                  <div key={label} className="bg-gray-light p-5">
                    <p className="text-2xl font-bold text-navy">{value}</p>
                    <p className="text-xs font-semibold text-gray-dark mt-1">{label}</p>
                    <p className="text-xs text-gray-text mt-0.5">{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="bg-gray-light py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              Our Values
            </p>
            <h2 className="text-3xl font-bold text-navy tracking-tight">
              What we stand for
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={v.title} className="bg-white p-8 border border-gray-mid">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-xs text-gray-text tabular-nums font-mono">0{i + 1}</span>
                  <h3 className="text-xl font-bold text-navy">{v.title}</h3>
                </div>
                <p className="text-sm text-gray-text leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Enoem Way ── */}
      <section className="bg-navy py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-accent-light text-xs tracking-[0.3em] uppercase font-semibold mb-3">
              The Enoem Way
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              How we approach every engagement
            </h2>
          </div>
          <div className="space-y-8">
            {approach.map((a) => (
              <div
                key={a.number}
                className="flex flex-col md:flex-row gap-8 bg-navy-mid border border-white/10 p-8 md:p-10"
              >
                <div className="shrink-0">
                  <span className="text-4xl font-bold text-white/20 font-mono">{a.number}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-3">{a.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4">{a.description}</p>
                  <p className="text-accent-light text-xs font-semibold tracking-wide italic">
                    {a.accent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p className="text-accent text-xs tracking-[0.3em] uppercase font-semibold mb-3">
                Experience
              </p>
              <h2 className="text-3xl font-bold text-navy tracking-tight mb-6">
                Industries we know well
              </h2>
              <p className="text-gray-text leading-relaxed mb-8">
                Over 16 years of active recruitment has given us genuine knowledge across a wide
                range of sectors. We understand the roles, the challenges, and the people.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <div key={ind} className="flex items-center gap-2.5 text-sm text-gray-dark">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <blockquote className="bg-gray-light p-8 border-l-4 border-navy">
                <p className="text-sm text-gray-dark leading-relaxed italic mb-6">
                  &ldquo;I've been working in recruitment for over fifteen years, and the thing I keep
                  coming back to is this: every placement affects real people's lives — the candidate,
                  their family, the team they join, the organisation they help build. That responsibility
                  is what drives how we work at Enoem.&rdquo;
                </p>
                <footer>
                  <p className="text-xs font-bold text-navy">Andreas Nilsson</p>
                  <p className="text-xs text-gray-text">Co-founder, Enoem</p>
                </footer>
              </blockquote>
              <blockquote className="bg-gray-light p-8 border-l-4 border-accent">
                <p className="text-sm text-gray-dark leading-relaxed italic mb-6">
                  &ldquo;When we added analysis to our offering, it wasn't about adding a service — it
                  was about giving better answers. Good recruitment isn't just about finding the right
                  skills. It's about understanding the whole person. That's what the SHL tools and
                  IPU methodology help us do.&rdquo;
                </p>
                <footer>
                  <p className="text-xs font-bold text-navy">Carin Mossberger</p>
                  <p className="text-xs text-gray-text">Co-founder, Enoem</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-gray-light py-20 border-t border-gray-mid">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-2xl font-bold text-navy mb-4">Let&apos;s start a conversation</h2>
          <p className="text-gray-text mb-8 max-w-md mx-auto text-sm leading-relaxed">
            Whether you&apos;re looking to fill a critical role or develop your leadership team,
            we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              className="px-8 py-3.5 bg-navy text-white text-sm font-semibold tracking-wide uppercase hover:bg-navy-mid transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="px-8 py-3.5 border border-navy/30 text-navy text-sm font-semibold tracking-wide uppercase hover:border-navy hover:bg-navy/5 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
