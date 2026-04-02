import type { Metadata } from "next";
import Link from "next/link";
import QuoteCarousel from "@/components/QuoteCarousel";

export const metadata: Metadata = {
  title: "Who We Are — Enoem",
  description:
    "Enoem is a strategic HR consultancy based in Halmstad, founded in 2008 by Andreas Nilsson and Carin Mossberger.",
};

const testimonials = [
  {
    text: "Enoem found us a production manager we'd been looking for ourselves for six months. Within ten weeks of engaging them, we had our candidate. The quality of the match was exceptional.",
    name: "Operations Director",
    title: "Manufacturing company, Halland",
  },
  {
    text: "The Second Opinion analysis gave our board the confidence to make a difficult hire. It surfaced things our interviews hadn't — and it was right. We've not looked back.",
    name: "CEO",
    title: "Technology firm, Gothenburg",
  },
  {
    text: "Andreas and Carin are refreshingly honest. No overselling. Just solid advice and a process that works. We use them for all senior hires now.",
    name: "HR Manager",
    title: "Retail group, Sweden",
  },
  {
    text: "The development programme Carin ran for our leadership team had a measurable impact on how we communicate. It's rare to see that kind of real change from a consultancy.",
    name: "Managing Director",
    title: "Industrial company, Halmstad",
  },
];

const enoemWay = [
  {
    title: "Client Partnership",
    body: "We find the setup that meets your specific needs and wishes. Full recruitment process or partial support — we are flexible by design. Some clients need us from day one through final offer. Others need a single stage done well. Both are fine with us.",
  },
  {
    title: "Candidate Focus",
    body: "For candidates, we offer a transparent and professional process from first contact to final feedback. We communicate clearly, respect your time, and give honest guidance — whether you move forward in the process or not.",
  },
  {
    title: "Proven Methods",
    body: "We use SHL's internationally validated psychometric tools for our Second Opinion analysis service, and IPU's pedagogical dialogue methodology for individual and group development. We don't make these choices lightly — they work.",
  },
];

export default function WhoWeAre() {
  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex items-end"
        style={{
          height: "50vh",
          minHeight: "340px",
          background:
            "linear-gradient(135deg, #B08060 0%, #C4A882 50%, #D4B896 100%)",
        }}
      >
        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16 pb-16 lg:pb-20">
          <p className="text-white/60 text-xs uppercase tracking-widest mb-4">
            About us
          </p>
          <h1
            className="font-serif text-6xl lg:text-8xl leading-none"
            style={{ color: "rgba(255,255,255,0.75)" }}
          >
            Who we are
          </h1>
        </div>
      </section>

      {/* ── Intro ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-8 leading-snug">
                Enoem is a strategic HR consultancy based in Halmstad, with roots
                dating back to 2008.
              </h2>
              <div className="space-y-5 text-muted leading-relaxed text-base">
                <p>
                  Founded by Andreas Nilsson and Carin Mossberger, we believe that
                  HR consulting and recruitment can be done better — with more
                  honesty, more rigour, and more genuine care for the people on both
                  sides of the process.
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
            <div className="space-y-6">
              {/* Photo placeholder */}
              <div
                className="w-full rounded-lg"
                style={{ height: "320px", background: "#D4D9DE" }}
              />
              <div
                className="w-2/3 rounded-lg"
                style={{ height: "200px", background: "#C8CDD3" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Values Quote ── */}
      <section className="bg-bg-section py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <p className="font-serif text-2xl lg:text-3xl text-navy italic leading-relaxed">
            &ldquo;We value straightforward partnerships and never compromise on the
            quality of our advice&rdquo;
          </p>
        </div>
      </section>

      {/* ── Culture ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-8">
                Culture
              </h2>
              <div className="space-y-5 text-muted leading-relaxed text-base">
                <p>
                  Honesty, ethics, and trust are not values we display on a wall —
                  they are how we operate, day by day, with every client and every
                  candidate.
                </p>
                <p>
                  We hold ourselves to the same standard we ask of others: clear
                  communication, respect for confidentiality, and a commitment to
                  doing what we say we will do.
                </p>
                <p>
                  Our culture is shaped by long experience in a field where a single
                  wrong decision can affect many lives. We take that seriously.
                </p>
              </div>
            </div>
            <div className="lg:pt-8">
              <blockquote>
                <p className="font-serif text-xl text-navy italic leading-relaxed mb-6">
                  &ldquo;I&apos;ve been working in recruitment for over fifteen years, and
                  the thing I keep coming back to is this: every placement affects
                  real people&apos;s lives — the candidate, their family, the team they
                  join, the organisation they help build. That responsibility is what
                  drives how we work at Enoem.&rdquo;
                </p>
                <footer>
                  <p className="font-semibold text-navy text-sm">Andreas Nilsson</p>
                  <p className="text-muted text-sm">Co-founder, Enoem</p>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ── The Enoem Way ── */}
      <section className="bg-bg-section py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <h2 className="font-serif text-3xl lg:text-4xl text-navy mb-14">
            The Enoem Way
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {enoemWay.map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-serif text-xl text-navy mb-4 font-semibold">
                  {title}
                </h3>
                <p className="text-muted leading-relaxed text-sm">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Story ── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">
            <h2 className="font-serif text-2xl lg:text-3xl text-navy mb-5">
              Our Story
            </h2>
            <p className="text-muted leading-relaxed mb-6 text-base">
              Enoem&apos;s roots date back to 2008, when Andreas Nilsson and Carin
              Mossberger saw an opportunity to build something different — an HR
              consultancy grounded in honesty, expertise, and genuine care.
            </p>
            <Link
              href="/#contact"
              className="text-sm text-navy underline underline-offset-4 hover:text-muted transition-colors"
            >
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* ── Testimonials Carousel ── */}
      <section className="bg-bg-section py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <p className="text-xs tracking-[0.3em] uppercase font-semibold text-navy/50 mb-4">
            Client Voices
          </p>
          <QuoteCarousel quotes={testimonials} showArrows />
        </div>
      </section>

      {/* ── Closing Quote ── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <blockquote>
            <p className="font-serif text-2xl lg:text-3xl text-navy italic leading-relaxed mb-8">
              &ldquo;When we added analysis to our offering, it wasn&apos;t about adding a
              service — it was about giving better answers. Good recruitment isn&apos;t
              just about finding the right skills. It&apos;s about understanding the
              whole person.&rdquo;
            </p>
            <footer>
              <p className="font-semibold text-navy">Carin Mossberger</p>
              <p className="text-muted text-sm">Co-founder, Enoem</p>
            </footer>
          </blockquote>
        </div>
      </section>
    </>
  );
}
