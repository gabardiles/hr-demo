"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const people = [
  {
    name: "Andreas Nilsson",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=700&fit=crop&crop=face",
    bio: "Konsult inom HR sedan 2007. Tidigare arbetat som marknadsanalytiker och projektledare inom internationell tillverkningsindustri. Läst projektledning på IHM och ledarskap på Dale Carnegie. Licensierad inom SHL:s bedömningsinstrument sedan 2007. Behörig IPU-konsult sedan 2012. EQ tillkom 2017. Maskiningenjör som senare skrivit magisteruppsats i psykologi och kandidatuppsats i företagsekonomi.",
  },
  {
    name: "Carin Mossberger",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=700&fit=crop&crop=face",
    bio: "Konsult inom HR sedan 1999. Tidigare bakgrund från resebranschen. Läst ledarskap och försäljning på Dale Carnegie. Licensierad inom SHL:s bedömningsinstrument sedan 2002. IPU-konsult sedan 2012. EQ-analysen tillkom 2017. Humanist med akademiska meriter inom beteendevetenskap och företagsekonomi.",
  },
];

const pillars = [
  { number: "01", title: "Search", description: "Effektiv metod för att identifiera och kontakta lämpliga kandidater. Vi har nätverket och kontaktvägarna." },
  { number: "02", title: "Rekrytering", description: "Vi möter ert behov i hela eller delar av rekryteringsprocessen. Vi utgår från Halmstad och arbetar främst i Halland." },
  { number: "03", title: "Analys", description: "Second Opinion ger ytterligare en dimension i ert beslut. Analyserna grundar sig på SHL:s välbeprövade metoder." },
  { number: "04", title: "Utveckling", description: "Individ- och grupputveckling med IPU:s pedagogiska dialogunderlag. Vi arbetar med beteende, drivkrafter och EQ." },
  { number: "05", title: "Personalfrågor", description: "Genom samarbete med HR-Tjänst AB erbjuder vi specialistkompetens inom bl.a. organisations- och ledarskapsutveckling, arbetsrätt, GDPR och strategiskt HR-arbete." },
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
          <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>Nilsson &amp; Mossberger</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl" style={{ color: "rgba(255,255,255,0.9)", fontWeight: 200, letterSpacing: "-0.04em" }}>Mer om oss</h1>
        </div>
      </section>

      <div style={{ height: "60px", backgroundColor: "#fff" }} />

      {/* Intro */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl mb-8" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Välkommen till Nilsson &amp; Mossberger
            </h2>
            <p className="text-base leading-relaxed max-w-3xl mb-4" style={{ color: "#999", fontWeight: 400 }}>
              Nilsson &amp; Mossberger grundades i Halmstad år 2008 av Andreas Nilsson och Carin Mossberger. Ärlighet, etik och moral är viktigt för oss i såväl affärsrelationer som i det dagliga.
            </p>
            <p className="text-base leading-relaxed max-w-3xl" style={{ color: "#999", fontWeight: 400 }}>
              Det ska upplevas enkelt och effektivt att samarbeta med oss. Vi har lång erfarenhet av att rekrytera och utvärdera nyckelpersoner till olika tjänster inom olika branscher. Tillsammans hittar vi ett upplägg som möter ert behov och era önskemål.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* People — real bios */}
      <section style={{ backgroundColor: "#F8F8F8" }} className="py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {people.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.2}>
                <div>
                  <div className="relative mb-8" style={{ height: "500px" }}>
                    <Image src={p.image} alt={p.name} fill className="object-cover" />
                  </div>
                  <h3 className="text-2xl mb-4" style={{ color: "#111", fontWeight: 200 }}>{p.name}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>{p.bio}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our services — all 5 including Personalfrågor */}
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
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Våra tjänster</p>
            <h2 className="text-4xl lg:text-5xl text-white mb-16" style={{ fontWeight: 200, letterSpacing: "-0.03em" }}>
              Vi rekryterar, analyserar och utvecklar kompetens
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {pillars.map((p, i) => (
              <FadeIn key={p.number} delay={i * 0.1}>
                <div>
                  <p className="text-3xl font-mono mb-4" style={{ color: "#D02C2B", fontWeight: 200, opacity: 0.5 }}>{p.number}</p>
                  <h3 className="text-lg text-white mb-3" style={{ fontWeight: 300 }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Våra värderingar</p>
              <h2 className="text-4xl lg:text-5xl mb-8" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
                Ärlighet, etik och moral
              </h2>
              <p className="text-base leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>
                Ärlighet, etik och moral är viktigt för oss i såväl affärsrelationer som i det dagliga. Om ni vill tar vi ansvar för hela processen eller så stöttar vi er i vissa delar. Vi utgår från Halmstad men har Sverige som arbetsområde.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Quote + CTA */}
      <section style={{ backgroundColor: "#F8F8F8" }} className="py-28">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <FadeIn>
            <blockquote className="mb-12">
              <p className="text-3xl lg:text-4xl leading-relaxed" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
                Tillsammans når vi framgång
              </p>
            </blockquote>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Link href="/#contact" className="block text-center px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ backgroundColor: "#D02C2B", color: "#fff", fontWeight: 600 }}>Kontakta oss</Link>
              <Link href="/" className="block text-center px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ border: "1px solid #CCC", color: "#333", fontWeight: 600 }}>Tillbaka till startsidan</Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
