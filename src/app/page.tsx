"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

/* --- Data matching real enoem.se content --- */

const services = [
  { id: "search", title: "Search", description: "Effektiv metod för att identifiera och kontakta lämpliga kandidater. Vi har nätverket och kontaktvägarna." },
  { id: "rekrytering", title: "Rekrytering", description: "Vi möter ert behov i hela eller delar av rekryteringsprocessen. Vi utgår från Halmstad och arbetar främst i Halland." },
  { id: "analys", title: "Analys", description: "Second Opinion ger ytterligare en dimension i ert beslut. Analyserna grundar sig på SHL:s välbeprövade metoder." },
  { id: "utveckling", title: "Utveckling", description: "Individ- och grupputveckling med IPU:s pedagogiska dialogunderlag. Vi arbetar med beteende, drivkrafter och EQ." },
];

const people = [
  {
    name: "Andreas Nilsson",
    role: "Grundare",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
    quote: "Varje placering påverkar riktiga människors liv. Det ansvaret driver hur vi arbetar.",
    bio: "Konsult inom HR sedan 2007. Maskiningenjör, magister i psykologi. SHL-licensierad sedan 2007, IPU-konsult sedan 2012.",
  },
  {
    name: "Carin Mossberger",
    role: "Grundare",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    quote: "Det ska upplevas enkelt och effektivt att samarbeta med oss.",
    bio: "Konsult inom HR sedan 1999. Beteendevetare och företagsekonom. SHL-licensierad sedan 2002, IPU-konsult sedan 2012.",
  },
];

const vacancies = [
  "Transportledare",
  "Miljö- och Hållbarhetsspecialist",
  "Erfaren Projektledare",
  "Erfaren Säljare inom Medtech/Pharma",
  "Affärscontroller",
  "Spontanansökan",
];

/* --- Page --- */

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative" style={{ minHeight: "75vh", display: "flex", alignItems: "flex-end" }}>
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1800&h=1000&fit=crop"
          alt="Landskap"
          fill
          className="object-cover"
          priority
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-20">
          <h1 className="text-5xl sm:text-6xl lg:text-8xl mb-8" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 200, letterSpacing: "-0.04em" }}>
            Tillsammans når vi<br />framgång
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <a href="#services" className="block text-center px-6 py-3 text-xs tracking-[0.15em] uppercase" style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 500 }}>För uppdragsgivare</a>
            <a href="#assignments" className="block text-center px-6 py-3 text-xs tracking-[0.15em] uppercase" style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 500 }}>Aktuella tjänster</a>
            <a href="#contact" className="block text-center px-6 py-3 text-xs tracking-[0.15em] uppercase" style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#fff", fontWeight: 500 }}>För kandidater</a>
          </div>
        </div>
      </section>

      {/* ===== Breathing space ===== */}
      <div style={{ height: "60px", backgroundColor: "#fff" }} />

      {/* ===== INTRO — matching their real main copy ===== */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl mb-8" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Vi rekryterar, analyserar och utvecklar kompetens
            </h2>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#999", fontWeight: 400 }}>
              Det ska upplevas enkelt och effektivt att samarbeta med oss. Vi har lång erfarenhet av att rekrytera och utvärdera nyckelpersoner till olika tjänster inom olika branscher. Tillsammans hittar vi ett upplägg som möter ert behov och era önskemål. Om ni vill tar vi ansvar för hela processen eller så stöttar vi er i vissa delar. Vi utgår från Halmstad men har Sverige som arbetsområde.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== SERVICES — using their exact descriptions ===== */}
      <section id="services" style={{ backgroundColor: "#F8F8F8" }} className="py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((svc, i) => (
              <FadeIn key={svc.id} delay={i * 0.12}>
                <div className="cursor-pointer group">
                  <h3 className="text-2xl mb-4 group-hover:opacity-60" style={{ color: "#111", fontWeight: 200, transition: "opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
                    {svc.title}
                  </h3>
                  <div style={{ width: "30px", height: "2px", backgroundColor: "#D02C2B", marginBottom: "16px" }} />
                  <p className="text-sm leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>
                    {svc.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT BANNER ===== */}
      <Link href="/who-we-are" className="block" style={{ textDecoration: "none" }}>
        <section className="relative cursor-pointer group" style={{ minHeight: "280px", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2.5rem 2rem" }}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=500&fit=crop"
            alt="Kontor"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.35)" }}
          />
          <p className="relative z-10 text-xs tracking-[0.25em] uppercase" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Välkommen till Nilsson &amp; Mossberger</p>
          <div className="relative z-10 flex items-end justify-between lg:px-8">
            <p className="text-2xl lg:text-3xl max-w-2xl leading-snug" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 300 }}>
              Nilsson &amp; Mossberger grundades i Halmstad år 2008 av Andreas Nilsson och Carin Mossberger. Ärlighet, etik och moral är viktigt för oss i såväl affärsrelationer som i det dagliga.
            </p>
            <span className="text-xs tracking-[0.2em] uppercase hidden md:block group-hover:translate-x-1 transition-transform" style={{ color: "#D02C2B", fontWeight: 600 }}>
              Läs mer om oss →
            </span>
          </div>
        </section>
      </Link>

      {/* ===== OUR PEOPLE ===== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#BBB", fontWeight: 600, fontSize: "11px" }}>Vårt team</p>
            <h2 className="text-4xl lg:text-5xl mb-20" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Tillsammans når vi framgång
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
              {people.map((p) => (
                <div key={p.name} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  <div className="relative" style={{ height: "400px" }}>
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-1" style={{ color: "#111", fontWeight: 300 }}>{p.name}</h3>
                    <p className="text-xs uppercase tracking-wider mb-4" style={{ color: "#D02C2B", fontWeight: 600 }}>{p.role}</p>
                    <p className="text-sm leading-relaxed mb-4" style={{ color: "#999", fontWeight: 400 }}>{p.bio}</p>
                    <p className="text-sm leading-relaxed italic" style={{ color: "#666", fontWeight: 300 }}>&ldquo;{p.quote}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== REACH ===== */}
      <section className="relative" style={{ minHeight: "400px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Image
          src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1800&h=600&fit=crop"
          alt="Svensk stad"
          fill
          className="object-cover"
          style={{ filter: "brightness(0.3)" }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 text-center py-20">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl text-white mb-5" style={{ fontWeight: 200, letterSpacing: "-0.03em" }}>
              Vi utgår från Halmstad men har Sverige som arbetsområde
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>
              Våra rötter finns i Halland. Vår räckvidd sträcker sig från Malmö till Stockholm — överallt där talang och möjligheter möts.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ===== VACANCIES ===== */}
      <section id="assignments" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl mb-12" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Aktuella uppdrag
            </h2>
          </FadeIn>
          <div>
            {vacancies.map((title, i) => (
              <FadeIn key={title} delay={i * 0.08}>
                <a href="#" className="block py-5 group" style={{ borderBottom: "1px solid #EBEBEB", textDecoration: "none" }}>
                  <p className="text-base lg:text-lg group-hover:opacity-60" style={{ color: "#111", fontWeight: 300, transition: "opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
                    {title}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <div className="mt-10">
              <span className="link-underline text-xs cursor-pointer" style={{ color: "#111", fontWeight: 600 }}>Visa alla uppdrag</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="contact" style={{ backgroundColor: "#F8F8F8" }} className="py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#BBB", fontWeight: 600, fontSize: "11px" }}>Kontakt</p>
              <h2 className="text-4xl lg:text-5xl mb-8" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
                Redo att hitta er nästa nyckelperson?
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "#999", fontWeight: 400 }}>
                Kontakta Andreas eller Carin direkt. Ärlig rådgivning, utan förpliktelser.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href="mailto:nilsson@enoem.se" className="block text-center px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ backgroundColor: "#D02C2B", color: "#fff", fontWeight: 600 }}>
                  Kontakta Andreas
                </a>
                <a href="mailto:mossberger@enoem.se" className="block text-center px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ border: "1px solid #CCC", color: "#333", fontWeight: 600 }}>
                  Kontakta Carin
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
