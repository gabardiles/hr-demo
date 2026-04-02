import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Who We Are — Enoem (Nilsson & Mossberger)",
  description:
    "Founded in 2008 in Halmstad by Andreas Nilsson and Carin Mossberger. Learn about Enoem's story, values, and approach to HR, recruitment, and people development.",
};

const pillars = [
  {
    number: "01",
    title: "Client Partnership",
    description:
      "We find the setup that meets your specific needs and wishes. Full recruitment process or partial support — we are flexible by design. Some clients need us from day one through final offer. Others need a single stage done well.",
    accent: "We work with you, not just for you.",
  },
  {
    number: "02",
    title: "Candidate Focus",
    description:
      "For candidates, we offer a transparent and professional process from first contact to final feedback. We communicate clearly, respect your time, and give honest guidance — whether you move forward in the process or not.",
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

export default function WhoWeAre() {
  return (
    <>
      {/* 1. Hero — warm gradient */}
      <section
        style={{
          minHeight: "55vh",
          background: "linear-gradient(135deg, #C4A882 0%, #D4B896 100%)",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <p
            className="text-xs tracking-[0.3em] uppercase mb-4"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Enoem · Nilsson &amp; Mossberger
          </p>
          <h1
            className="text-5xl sm:text-6xl lg:text-7xl leading-tight"
            style={{
              fontFamily: "Georgia, 'Times New Roman', serif",
              color: "rgba(255,255,255,0.9)",
            }}
          >
            Who we are
          </h1>
        </div>
      </section>

      {/* 2. Intro — 2-col, text left, placeholder right */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
                style={{ color: "#1B2A3D" }}
              >
                Our Story
              </p>
              <h2
                className="text-3xl lg:text-4xl mb-8"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
              >
                Founded in Halmstad, 2008
              </h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                <p>
                  Andreas Nilsson and Carin Mossberger founded Enoem with a clear idea: that HR
                  consulting and recruitment could be done better — with more honesty, more rigour,
                  and more genuine care for the people on both sides of the process.
                </p>
                <p>
                  We started in Halland, a region we know deeply, with the local business
                  relationships and market understanding that matter when placing people in roles
                  that fit. Over time, our work spread across Sweden.
                </p>
                <p>
                  Today Enoem serves clients from Malmö to Stockholm, with the same approach it
                  started with: simple partnerships, effective methods, and a commitment to getting
                  it right — not just getting it done.
                </p>
              </div>
            </div>

            {/* Gray placeholder */}
            <div
              className="hidden lg:block"
              style={{ backgroundColor: "#E8EDF1", minHeight: "360px" }}
            />
          </div>
        </div>
      </section>

      {/* 3. Values section with quote */}
      <section style={{ backgroundColor: "#E8EDF1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
                style={{ color: "#1B2A3D" }}
              >
                Our Values
              </p>
              <h2
                className="text-3xl lg:text-4xl mb-8"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
              >
                What we stand for
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Honesty",
                    text: "We say what we mean and mean what we say — to clients, candidates, and each other. Honesty is not a policy; it is who we are.",
                  },
                  {
                    title: "Ethics",
                    text: "Every process we run is conducted with full integrity. Clients receive our honest assessment, not our optimistic one.",
                  },
                  {
                    title: "Morality",
                    text: "We think about the long-term impact of our work. A good hire changes a person's life. We take that responsibility seriously.",
                  },
                ].map(({ title, text }) => (
                  <div key={title}>
                    <h3
                      className="text-base font-semibold mb-1"
                      style={{ color: "#1B2A3D" }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <blockquote
              className="p-10"
              style={{ backgroundColor: "white" }}
            >
              <p
                className="text-xl lg:text-2xl leading-relaxed mb-6"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "#1B2A3D",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Tillsammans når vi framgång.&rdquo;
              </p>
              <p
                className="text-base leading-relaxed mb-4"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  color: "#8A9BAD",
                  fontStyle: "italic",
                }}
              >
                &ldquo;Together we achieve success.&rdquo;
              </p>
              <footer>
                <p className="text-xs tracking-widest uppercase" style={{ color: "#9CA3AF" }}>
                  Enoem tagline — our founding principle
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. Culture section */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "#1B2A3D" }}
            >
              Culture
            </p>
            <h2
              className="text-3xl lg:text-4xl mb-6"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
            >
              Small by choice. Strong by conviction.
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#6B7280" }}>
              Enoem is a deliberately small company. We believe that direct relationships — between
              us and our clients, between us and our candidates — produce better outcomes than
              processes managed at scale.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "#6B7280" }}>
              When you work with Enoem, you work with Andreas or Carin directly. No handoffs to
              junior staff. No account management layers. The people you meet at the start are the
              people who do the work.
            </p>
          </div>
        </div>
      </section>

      {/* 5. The Enoem Way — 3 pillars */}
      <section style={{ backgroundColor: "#1B2A3D" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              The Enoem Way
            </p>
            <h2
              className="text-3xl lg:text-4xl text-white"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              How we approach every engagement
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "rgba(255,255,255,0.1)" }}>
            {pillars.map((p) => (
              <div
                key={p.number}
                className="p-10"
                style={{ backgroundColor: "#1B2A3D" }}
              >
                <p
                  className="text-4xl font-bold font-mono mb-6"
                  style={{ color: "rgba(255,255,255,0.15)" }}
                >
                  {p.number}
                </p>
                <h3
                  className="text-xl text-white mb-4"
                  style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
                >
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)" }}>
                  {p.description}
                </p>
                <p
                  className="text-xs font-semibold tracking-wide"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  {p.accent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonial carousel */}
      <section style={{ backgroundColor: "#E8EDF1" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <p
              className="text-xs tracking-[0.3em] uppercase font-semibold mb-4"
              style={{ color: "#1B2A3D" }}
            >
              Client Voices
            </p>
            <h2
              className="text-3xl"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif", color: "#1B2A3D" }}
            >
              What our clients say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="bg-white p-8">
                <p
                  className="text-base leading-relaxed mb-6"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    color: "#1B2A3D",
                    fontStyle: "italic",
                  }}
                >
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer>
                  <p className="text-xs font-semibold" style={{ color: "#1B2A3D" }}>
                    {t.author}
                  </p>
                  <p className="text-xs" style={{ color: "#9CA3AF" }}>
                    {t.company}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Founder quote closing */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <blockquote>
            <p
              className="text-2xl lg:text-3xl leading-relaxed mb-8"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                color: "#1B2A3D",
                fontStyle: "italic",
              }}
            >
              &ldquo;Every placement affects real people&apos;s lives — the candidate, their family,
              the team they join, the organisation they help build. That responsibility is what drives
              how we work at Enoem.&rdquo;
            </p>
            <footer>
              <p className="text-sm font-semibold" style={{ color: "#1B2A3D" }}>
                Andreas Nilsson
              </p>
              <p className="text-sm" style={{ color: "#9CA3AF" }}>
                Co-founder, Enoem
              </p>
            </footer>
          </blockquote>

          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link
              href="/#contact"
              className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-90"
              style={{ backgroundColor: "#D02C2B", color: "#fff" }}
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors"
              style={{ border: "1px solid #D02C2B", color: "#D02C2B" }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
