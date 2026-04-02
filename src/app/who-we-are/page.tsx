"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const pillars = [
  { number: "01", title: "Kundpartnerskap", description: "Vi hittar upplägget som möter era specifika behov och önskemål. Hela rekryteringsprocessen eller delar av den — vi är flexibla av design.", accent: "Vi arbetar med er, inte bara för er." },
  { number: "02", title: "Kandidatfokus", description: "För kandidater erbjuder vi en transparent och professionell process från första kontakt till slutgiltig återkoppling. Vi kommunicerar tydligt och ger ärlig vägledning.", accent: "Respekt. Transparens. Genuin feedback." },
  { number: "03", title: "Beprövade metoder", description: "Vi använder SHL:s internationellt validerade psykometriska verktyg och IPU:s pedagogiska dialogmetodik. Vi gör inte dessa val lättvindigt — de fungerar.", accent: "SHL-analys · IPU-utvecklingsramverk." },
];

const testimonials = [
  { quote: "Enoem hittade en produktionschef åt oss som vi själva letat efter i sex månader. Kvaliteten på matchningen var exceptionell.", author: "Driftchef", company: "Tillverkningsföretag, Halland" },
  { quote: "Second Opinion-analysen gav vår styrelse trygghet att genomföra en svår rekrytering. Den lyfte fram saker som våra intervjuer inte fångade.", author: "VD", company: "Teknikföretag, Göteborg" },
  { quote: "Andreas och Carin är uppfriskande ärliga. Ingen överförsäljning. Bara gedigen rådgivning och en process som fungerar.", author: "HR-chef", company: "Detaljhandelsgrupp, Sverige" },
];

export default function WhoWeAre() {
  return (
    <>
      {/* Hero */}
      <section className="relative" style={{ minHeight: "55vh", display: "flex", alignItems: "flex-end" }}>
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=900&fit=crop"
          alt="Kontor"
          fill
          className="object-cover"
          priority
          style={{ filter: "brightness(0.45)" }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-20">
          <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>Enoem · Nilsson &amp; Mossberger</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "rgba(255,255,255,0.9)", fontWeight: 200, letterSpacing: "-0.04em" }}>Om oss</h1>
        </div>
      </section>

      <div style={{ height: "60px", backgroundColor: "#fff" }} />

      {/* Intro — 2 col with portrait */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Vår historia</p>
                <h2 className="text-4xl lg:text-5xl mb-8" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>Grundat i Halmstad, 2008</h2>
                <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>
                  <p>Andreas Nilsson och Carin Mossberger grundade Enoem med en tydlig idé: att HR-konsulting och rekrytering kunde göras bättre — med mer ärlighet, mer noggrannhet och mer genuint engagemang.</p>
                  <p>Vi startade i Halland, en region vi känner på djupet. Med tiden spred sig vårt arbete över hela Sverige.</p>
                  <p>Idag betjänar Enoem kunder från Malmö till Stockholm, med samma approach: enkla partnerskap, effektiva metoder och ett åtagande att göra det rätt.</p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="relative hidden lg:block" style={{ height: "480px" }}>
                <Image
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=face"
                  alt="Andreas Nilsson"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "#F8F8F8" }} className="py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <FadeIn>
              <div>
                <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Våra värderingar</p>
                <h2 className="text-4xl lg:text-5xl mb-10" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>Det vi står för</h2>
                <div className="space-y-8">
                  {[
                    { title: "Ärlighet", text: "Vi säger vad vi menar och menar vad vi säger — till kunder, kandidater och varandra." },
                    { title: "Etik", text: "Varje process vi driver genomförs med full integritet. Kunder får vår ärliga bedömning." },
                    { title: "Moral", text: "Vi tänker på den långsiktiga effekten av vårt arbete. En bra rekrytering förändrar ett liv." },
                  ].map(({ title, text }) => (
                    <div key={title}>
                      <h3 className="text-base mb-2" style={{ color: "#111", fontWeight: 500 }}>{title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>{text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <blockquote className="p-12 bg-white">
                <p className="text-2xl lg:text-3xl leading-relaxed mb-6" style={{ color: "#333", fontWeight: 200, fontStyle: "italic", letterSpacing: "-0.02em" }}>
                  &ldquo;Tillsammans når vi framgång.&rdquo;
                </p>
                <footer>
                  <p className="text-xs tracking-widest uppercase" style={{ color: "#BBB", fontWeight: 400 }}>Enoems ledord</p>
                </footer>
              </blockquote>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Kultur</p>
              <h2 className="text-4xl lg:text-5xl mb-8" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>Små av val. Starka av övertygelse.</h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#999", fontWeight: 400 }}>Enoem är ett medvetet litet företag. Vi tror att direkta relationer ger bättre resultat än processer i stor skala.</p>
              <p className="text-sm leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>När ni arbetar med Enoem arbetar ni direkt med Andreas eller Carin. Inga överlämnanden. De ni möter i början är de som gör jobbet.</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* The Enoem Way */}
      <section className="relative" style={{ minHeight: "600px" }}>
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&h=800&fit=crop"
          alt="Team samarbete"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.2)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 py-28">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Enoems arbetssätt</p>
            <h2 className="text-4xl lg:text-5xl text-white mb-16" style={{ fontWeight: 200, letterSpacing: "-0.03em" }}>Så här närmar vi oss varje uppdrag</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((p, i) => (
              <FadeIn key={p.number} delay={i * 0.15}>
                <div>
                  <p className="text-4xl font-mono mb-6" style={{ color: "#D02C2B", fontWeight: 200, opacity: 0.5 }}>{p.number}</p>
                  <h3 className="text-xl text-white mb-4" style={{ fontWeight: 300 }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>{p.description}</p>
                  <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)", fontWeight: 600 }}>{p.accent}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ backgroundColor: "#F8F8F8" }} className="py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#BBB", fontWeight: 600, fontSize: "11px" }}>Kundröster</p>
            <h2 className="text-4xl lg:text-5xl mb-16" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>Vad våra kunder säger</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeIn key={t.author} delay={i * 0.15}>
                <blockquote className="bg-white p-10">
                  <p className="text-base leading-relaxed mb-8" style={{ color: "#333", fontWeight: 300, fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
                  <footer>
                    <p className="text-xs" style={{ color: "#111", fontWeight: 600 }}>{t.author}</p>
                    <p className="text-xs" style={{ color: "#BBB" }}>{t.company}</p>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
          <div className="flex gap-2.5 mt-10">
            {[0,1,2,3].map((i) => (
              <span key={i} className="block w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? "#D02C2B" : "#DDD" }} />
            ))}
          </div>
        </div>
      </section>

      {/* Founder quote */}
      <section className="bg-white py-28">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <FadeIn>
            <blockquote>
              <p className="text-2xl lg:text-3xl leading-relaxed mb-8" style={{ color: "#333", fontWeight: 200, fontStyle: "italic", letterSpacing: "-0.02em" }}>
                &ldquo;Varje placering påverkar riktiga människors liv — kandidaten, deras familj, teamet de ansluter sig till. Det ansvaret driver hur vi arbetar.&rdquo;
              </p>
              <footer>
                <p className="text-sm" style={{ color: "#111", fontWeight: 600 }}>Andreas Nilsson</p>
                <p className="text-sm" style={{ color: "#BBB" }}>Medgrundare, Enoem</p>
              </footer>
            </blockquote>
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              <Link href="/#contact" className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ backgroundColor: "#D02C2B", color: "#fff", fontWeight: 600 }}>Kontakta oss</Link>
              <Link href="/" className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ border: "1px solid #CCC", color: "#333", fontWeight: 600 }}>Tillbaka till startsidan</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
