import Link from "next/link";

const newsItems = [
  {
    tag: "Talent Retention",
    title: "How to retain top talent in 2026",
    excerpt:
      "The competition for skilled professionals has never been fiercer. We explore what companies across Sweden are doing to keep their best people engaged.",
  },
  {
    tag: "Hiring Strategy",
    title: "The power of Second Opinion in hiring decisions",
    excerpt:
      "SHL-based analysis adds an objective dimension to recruitment. Here is why more organisations are making it a standard part of their process.",
  },
  {
    tag: "Leadership",
    title: "Building leadership through development programmes",
    excerpt:
      "IPU-certified coaching and group programmes help leaders grow in ways that traditional training rarely achieves.",
  },
];

const teamQuotes = [
  {
    quote:
      "Enoem found us a finance director who transformed our entire controlling function. The process was smooth and the match was exceptional.",
    author: "CEO, manufacturing company in Jönköping",
  },
  {
    quote:
      "We appreciated the honesty throughout the recruitment process. No sugar-coating — just clear, professional guidance.",
    author: "HR Director, tech company in Göteborg",
  },
  {
    quote:
      "The Second Opinion analysis gave our board the confidence to make a bold leadership hire. Worth every krona.",
    author: "Chairman, family-owned business in Halland",
  },
];

const assignments = [
  { title: "Projektledare", location: "Halmstad", sector: "Construction" },
  { title: "Affärscontroller", location: "Göteborg", sector: "Finance" },
  { title: "Servicetekniker", location: "Malmö", sector: "Engineering" },
  { title: "Exportsäljare", location: "Stockholm", sector: "Sales" },
  { title: "HR-chef", location: "Halmstad", sector: "HR" },
  { title: "Produktionschef", location: "Jönköping", sector: "Manufacturing" },
];

export default function Home() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section
        style={{
          height: "65vh",
          minHeight: 420,
          background: "linear-gradient(160deg, #8A9BAD 0%, #B0BEC5 100%)",
          position: "relative",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(27,42,61,0.45) 0%, transparent 55%)",
          }}
        />
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 pb-12 w-full"
          style={{ position: "relative" }}
        >
          <p
            className="uppercase tracking-widest text-xs mb-4"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            HR · Recruitment · Development
          </p>
          <h1
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 400,
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.15,
              maxWidth: 600,
              margin: 0,
            }}
          >
            Welcome to Enoem
          </h1>
        </div>
      </section>

      {/* ── 2. ABOUT BANNER ── */}
      <section
        style={{
          height: 200,
          background: "linear-gradient(120deg, #C4A882 0%, #B8966A 100%)",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(27,42,61,0.25)",
          }}
        />
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12 w-full flex items-center justify-between"
          style={{ position: "relative" }}
        >
          <div>
            <p
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(1.4rem, 3vw, 2rem)",
                color: "rgba(255,255,255,0.95)",
                margin: 0,
                fontWeight: 400,
              }}
            >
              About us
            </p>
            <p
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "0.875rem",
                marginTop: 6,
              }}
            >
              Founded 2008 · Halmstad, Sweden
            </p>
          </div>
          <Link
            href="/who-we-are"
            style={{
              color: "rgba(255,255,255,0.9)",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              borderBottom: "1px solid rgba(255,255,255,0.5)",
              paddingBottom: 2,
            }}
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* ── 3. INSIGHTS ── */}
      <section style={{ background: "#E8EDF1", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ color: "#8A9BAD" }}
          >
            Insights
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              marginBottom: 48,
              color: "#1B2A3D",
            }}
          >
            Perspectives on people &amp; performance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article
                key={item.title}
                style={{
                  background: "#fff",
                  padding: "32px 28px",
                  cursor: "pointer",
                }}
              >
                <p
                  className="uppercase tracking-widest text-xs mb-4"
                  style={{ color: "#8A9BAD" }}
                >
                  {item.tag}
                </p>
                <h3
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 400,
                    color: "#1B2A3D",
                    marginBottom: 12,
                    lineHeight: 1.35,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.875rem", color: "#5A6472", lineHeight: 1.65 }}>
                  {item.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. TEAM / QUOTES ── */}
      <section style={{ background: "#fff", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ color: "#8A9BAD" }}
          >
            Our Team
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              marginBottom: 48,
              color: "#1B2A3D",
            }}
          >
            Two consultants. One shared commitment.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            {teamQuotes.map((q, i) => (
              <blockquote
                key={i}
                style={{
                  borderLeft: "2px solid #D1D9E0",
                  paddingLeft: 24,
                  margin: 0,
                }}
              >
                <p
                  style={{
                    fontFamily: "Georgia, serif",
                    fontStyle: "italic",
                    fontSize: "1rem",
                    color: "#2C3E50",
                    lineHeight: 1.65,
                    marginBottom: 12,
                  }}
                >
                  &ldquo;{q.quote}&rdquo;
                </p>
                <cite
                  style={{
                    fontSize: "0.75rem",
                    color: "#8A9BAD",
                    fontStyle: "normal",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {q.author}
                </cite>
              </blockquote>
            ))}
          </div>
          <div className="flex gap-2">
            {teamQuotes.map((_, i) => (
              <span
                key={i}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: i === 0 ? "#1B2A3D" : "#D1D9E0",
                  display: "inline-block",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. SERVICES ── */}
      <section
        id="services"
        style={{ background: "#fff", padding: "80px 0", borderTop: "1px solid #E8EDF1" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <p
                className="uppercase tracking-widest text-xs mb-3"
                style={{ color: "#8A9BAD" }}
              >
                Services
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
                What we do
              </h2>
              <p style={{ color: "#5A6472", lineHeight: 1.75, marginBottom: 28 }}>
                Enoem provides specialist HR services to organisations across Sweden.
                Whether you need to find an executive, validate a hiring decision, or
                grow your leadership capacity, we bring the methods and the honesty
                the process demands.
              </p>
              <Link
                href="/who-we-are"
                style={{
                  fontSize: "0.8rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.15em",
                  color: "#1B2A3D",
                  borderBottom: "1px solid #1B2A3D",
                  paddingBottom: 2,
                }}
              >
                See our services
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { name: "Search", desc: "Find the people others can't" },
                { name: "Recruitment", desc: "Full process or partial support" },
                { name: "Analysis", desc: "Second Opinion — SHL certified" },
                { name: "Development", desc: "Individual & group growth — IPU" },
              ].map(({ name, desc }) => (
                <div
                  key={name}
                  style={{ background: "#E8EDF1", padding: "28px 24px" }}
                >
                  <h3
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.05rem",
                      fontWeight: 400,
                      color: "#1B2A3D",
                      marginBottom: 8,
                    }}
                  >
                    {name}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "#5A6472" }}>{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. REACH ── */}
      <section style={{ background: "#1B2A3D", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <p
                className="uppercase tracking-widest text-xs mb-3"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Our reach
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 400,
                  color: "rgba(255,255,255,0.92)",
                  marginBottom: 20,
                }}
              >
                Based in Halmstad.
                <br />
                Working across Sweden.
              </h2>
              <p style={{ color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
                Our home is Halland, but our assignments span the full length of
                Sweden. From Malmö to Stockholm, we travel where the right match
                requires.
              </p>
            </div>
            <div
              className="grid grid-cols-3 gap-px"
              style={{ background: "rgba(255,255,255,0.08)" }}
            >
              {[
                { value: "2008", label: "Founded" },
                { value: "Sweden", label: "National reach" },
                { value: "Halland", label: "Home region" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  style={{
                    background: "#1B2A3D",
                    padding: "32px 20px",
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1.5rem",
                      color: "rgba(255,255,255,0.9)",
                      marginBottom: 6,
                    }}
                  >
                    {value}
                  </p>
                  <p
                    style={{
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.4)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 7. ASSIGNMENTS ── */}
      <section id="assignments" style={{ background: "#fff", padding: "80px 0" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ color: "#8A9BAD" }}
          >
            Assignments
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 400,
              color: "#1B2A3D",
              marginBottom: 40,
            }}
          >
            Current openings
          </h2>
          <div style={{ borderTop: "1px solid #E8EDF1" }}>
            {assignments.map((a, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "20px 0",
                  borderBottom: "1px solid #E8EDF1",
                  cursor: "pointer",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "Georgia, serif",
                      fontSize: "1rem",
                      color: "#1B2A3D",
                      marginBottom: 2,
                    }}
                  >
                    {a.title}
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "#8A9BAD" }}>
                    {a.location} · {a.sector}
                  </p>
                </div>
                <span style={{ fontSize: "1.2rem", color: "#D1D9E0" }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. CONTACT CTA ── */}
      <section id="contact" style={{ background: "#E8EDF1", padding: "80px 0" }}>
        <div
          className="max-w-7xl mx-auto px-6 lg:px-12"
          style={{ textAlign: "center" }}
        >
          <p
            className="uppercase tracking-widest text-xs mb-3"
            style={{ color: "#8A9BAD" }}
          >
            Get in touch
          </p>
          <h2
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 400,
              color: "#1B2A3D",
              marginBottom: 16,
            }}
          >
            Ready to find the right people?
          </h2>
          <p
            style={{
              color: "#5A6472",
              maxWidth: 480,
              margin: "0 auto 36px",
              lineHeight: 1.7,
            }}
          >
            Reach out directly — no gatekeepers, no forms. Just a conversation
            with the person who will run your assignment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:nilsson@enoem.se"
              style={{
                background: "#1B2A3D",
                color: "#fff",
                padding: "14px 32px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                display: "inline-block",
              }}
            >
              Contact Andreas
            </a>
            <a
              href="mailto:mossberger@enoem.se"
              style={{
                background: "transparent",
                color: "#1B2A3D",
                padding: "14px 32px",
                fontSize: "0.8rem",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                border: "1px solid #1B2A3D",
                display: "inline-block",
              }}
            >
              Contact Carin
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
