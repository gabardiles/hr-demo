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
      "We say what we mean and mean what we say — to clients, to candidates, and to each other. If a role isn't right for a candidate, we say so. Honesty is not a policy; it is who we are.",
  },
  {
    title: "Ethics",
    description:
      "Every process we run is conducted with full integrity. Candidate information is handled with respect and discretion. Clients receive our honest assessment, not our optimistic one.",
  },
  {
    title: "Morality",
    description:
      "We think about the long-term impact of our work. A good hire changes a person's life. A poor one affects an entire organisation. We take that responsibility seriously.",
  },
];

const approach = [
  {
    number: "01",
    title: "Client Partnership",
    description:
      "We find the setup that meets your specific needs and wishes. Full recruitment process or partial support — we are flexible by design. Both are fine with us.",
    accent: "We work with you, not just for you.",
  },
  {
    number: "02",
    title: "Candidate Focus",
    description:
      "For candidates, we offer a transparent and professional process from first contact to final feedback. We communicate clearly, respect your time, and give honest guidance.",
    accent: "Respect. Transparency. Genuine feedback.",
  },
  {
    number: "03",
    title: "Proven Methods",
    description:
      "We use SHL's internationally validated psychometric tools for our Second Opinion analysis service, and IPU's pedagogical dialogue methodology for development.",
    accent: "SHL analysis · IPU development frameworks.",
  },
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
      {/* ── 1. HERO ── */}
      <section
        style={{
          background: "linear-gradient(135deg, #C4A882 0%, #A8896A 100%)",
          padding: "96px 0 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(27,42,61,0.3)",
          }}
        />
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12"
          style={{ position: "relative" }}
        >
          <p
            className="uppercase tracking-widest text-xs mb-5"
            style={{ color: "rgba(255,255,255,0.65)" }}
          >
            Enoem · Nilsson &amp; Mossberger
          </p>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.95)",
              lineHeight: 1.2,
              maxWidth: 540,
              margin: "0 0 20px",
            }}
          >
            Who we are
          </h1>
          <p
            style={{
              color: "rgba(255,255,255,0.75)",
              fontSize: "1.05rem",
              lineHeight: 1.7,
              maxWidth: 520,
            }}
          >
            An HR and recruitment company built on long experience, honest
            relationships, and a genuine belief that the right person in the
            right role changes everything.
          </p>
        </div>
      </section>

      {/* ── 2. INTRO TWO-COLUMN ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="uppercase tracking-widest text-xs mb-4"
                style={{ color: "#8A9BAD" }}
              >
                Our Story
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 400,
                  color: "#1B2A3D",
                  marginBottom: 24,
                }}
              >
                Founded in Halmstad, 2008
              </h2>
              <div style={{ color: "#5A6472", lineHeight: 1.8, display: "flex", flexDirection: "column", gap: 16 }}>
                <p>
                  Andreas Nilsson and Carin Mossberger founded Enoem with a clear
                  idea: that HR consulting and recruitment could be done better —
                  with more honesty, more rigour, and more genuine care for the
                  people on both sides of the process.
                </p>
                <p>
                  We started in Halland, a region we know deeply, with the local
                  business relationships and market understanding that matter when
                  placing people in roles that fit. Over time, our work spread
                  across Sweden.
                </p>
                <p>
                  Today Enoem serves clients from Malmö to Stockholm, with the same
                  approach it started with: simple partnerships, effective methods,
                  and a commitment to getting it right — not just getting it done.
                </p>
              </div>
            </div>
            <div>
              {/* Placeholder gray box */}
              <div
                style={{
                  background: "#E8EDF1",
                  height: 320,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 24,
                }}
              >
                <span style={{ color: "#8A9BAD", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: "0.1em" }}>
                  Halmstad, Sweden
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "2008", label: "Year founded", sub: "16+ years experience" },
                  { value: "200+", label: "Positions filled", sub: "Across all industries" },
                  { value: "Sweden", label: "National reach", sub: "From Halland and beyond" },
                  { value: "SHL & IPU", label: "Certified methods", sub: "Objective, proven tools" },
                ].map(({ value, label, sub }) => (
                  <div key={label} style={{ background: "#E8EDF1", padding: "20px 18px" }}>
                    <p
                      style={{
                        fontFamily: "Georgia, serif",
                        fontSize: "1.25rem",
                        color: "#1B2A3D",
                        marginBottom: 4,
                      }}
                    >
                      {value}
                    </p>
                    <p style={{ fontSize: "0.75rem", color: "#2C3E50", fontWeight: 600, marginBottom: 2 }}>
                      {label}
                    </p>
                    <p style={{ fontSize: "0.72rem", color: "#8A9BAD" }}>{sub}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. VALUES ── */}
      <section style={{ background: "#E8EDF1", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ color: "#8A9BAD" }}
          >
            Our Values
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              color: "#1B2A3D",
              marginBottom: 48,
            }}
          >
            What we stand for
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <div key={v.title} style={{ background: "#fff", padding: "36px 28px" }}>
                <p
                  style={{
                    fontSize: "0.7rem",
                    color: "#8A9BAD",
                    textTransform: "uppercase",
                    letterSpacing: "0.12em",
                    marginBottom: 12,
                  }}
                >
                  0{i + 1}
                </p>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.15rem",
                    fontWeight: 400,
                    color: "#1B2A3D",
                    marginBottom: 14,
                  }}
                >
                  {v.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#5A6472", lineHeight: 1.7 }}>
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. THE ENOEM WAY ── */}
      <section style={{ background: "#1B2A3D", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            The Enoem Way
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.92)",
              marginBottom: 48,
            }}
          >
            How we approach every engagement
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {approach.map((a) => (
              <div
                key={a.number}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "32px 36px",
                  display: "flex",
                  gap: 32,
                }}
              >
                <span
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "2rem",
                    color: "rgba(255,255,255,0.12)",
                    flexShrink: 0,
                    lineHeight: 1,
                    marginTop: 4,
                  }}
                >
                  {a.number}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.1rem",
                      fontWeight: 400,
                      color: "rgba(255,255,255,0.9)",
                      marginBottom: 10,
                    }}
                  >
                    {a.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 10 }}>
                    {a.description}
                  </p>
                  <p
                    style={{
                      fontSize: "0.75rem",
                      color: "rgba(255,255,255,0.4)",
                      fontStyle: "italic",
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                    }}
                  >
                    {a.accent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. TESTIMONIALS ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <p
                className="uppercase tracking-widest text-xs mb-3"
                style={{ color: "#8A9BAD" }}
              >
                Experience
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 400,
                  color: "#1B2A3D",
                  marginBottom: 20,
                }}
              >
                Industries we know well
              </h2>
              <p style={{ color: "#5A6472", lineHeight: 1.75, marginBottom: 32 }}>
                Over 16 years of active recruitment has given us genuine knowledge
                across a wide range of sectors.
              </p>
              <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                {industries.map((ind) => (
                  <div
                    key={ind}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: "0.85rem",
                      color: "#2C3E50",
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: "#8A9BAD",
                        flexShrink: 0,
                      }}
                    />
                    {ind}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <blockquote
                style={{
                  background: "#E8EDF1",
                  padding: "32px 28px",
                  borderLeft: "3px solid #1B2A3D",
                  margin: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "#2C3E50",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  &ldquo;I&apos;ve been working in recruitment for over fifteen years, and
                  the thing I keep coming back to is this: every placement affects
                  real people&apos;s lives. That responsibility is what drives how we
                  work at Enoem.&rdquo;
                </p>
                <footer>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1B2A3D" }}>
                    Andreas Nilsson
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#8A9BAD" }}>Co-founder, Enoem</p>
                </footer>
              </blockquote>
              <blockquote
                style={{
                  background: "#E8EDF1",
                  padding: "32px 28px",
                  borderLeft: "3px solid #8A9BAD",
                  margin: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "#2C3E50",
                    lineHeight: 1.7,
                    marginBottom: 16,
                  }}
                >
                  &ldquo;Good recruitment isn&apos;t just about finding the right skills.
                  It&apos;s about understanding the whole person. That&apos;s what the SHL
                  tools and IPU methodology help us do.&rdquo;
                </p>
                <footer>
                  <p style={{ fontSize: "0.8rem", fontWeight: 600, color: "#1B2A3D" }}>
                    Carin Mossberger
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#8A9BAD" }}>Co-founder, Enoem</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. CTA ── */}
      <section style={{ background: "#E8EDF1", padding: "72px 0", borderTop: "1px solid #D1D9E0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12" style={{ textAlign: "center" }}>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.4rem, 3vw, 2rem)",
              fontWeight: 400,
              color: "#1B2A3D",
              marginBottom: 12,
            }}
          >
            Let&apos;s start a conversation
          </h2>
          <p style={{ color: "#5A6472", marginBottom: 32, maxWidth: 420, margin: "0 auto 32px", fontSize: "0.9rem", lineHeight: 1.7 }}>
            Whether you&apos;re looking to fill a critical role or develop your
            leadership team, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/#contact"
              style={{
                background: "#1B2A3D",
                color: "#fff",
                padding: "13px 30px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                display: "inline-block",
              }}
            >
              Get in Touch
            </Link>
            <Link
              href="/"
              style={{
                background: "transparent",
                color: "#1B2A3D",
                padding: "13px 30px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                border: "1px solid #1B2A3D",
                display: "inline-block",
              }}
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
