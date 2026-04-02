"use client";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

const insights = [
  { tag: "Talent", date: "Mars 2026", title: "Så behåller du dina bästa medarbetare 2026", excerpt: "Företag som investerar i kultur, tydligt syfte och individuell utveckling ser mätbart lägre personalomsättning." },
  { tag: "Rekrytering", date: "Februari 2026", title: "Kraften i Second Opinion vid rekrytering", excerpt: "Att lägga till ett SHL-baserat analyslager i er process bromsar inte rekryteringen — det skärper den." },
  { tag: "Ledarskap", date: "Januari 2026", title: "Bygga ledarskap genom utvecklingsprogram", excerpt: "IPU:s pedagogiska dialogverktyg skapar bestående beteendeförändring. Vi delar vad vi sett fungera." },
];

const teamQuotes = [
  { quote: "Enoem hittade en produktionschef åt oss som vi själva letat efter i sex månader. Inom tio veckor hade vi vår kandidat.", author: "Driftchef", company: "Tillverkningsföretag, Halland" },
  { quote: "Second Opinion-analysen gav vår styrelse trygghet att genomföra en svår rekrytering.", author: "VD", company: "Teknikföretag, Göteborg" },
  { quote: "Andreas och Carin är uppfriskande ärliga. Ingen överförsäljning. Bara gedigen rådgivning.", author: "HR-chef", company: "Detaljhandelsgrupp, Sverige" },
  { quote: "Deras kandidatanalys gav oss ett språk för att prata om människor som vi inte hade haft annars.", author: "VD", company: "Infrastrukturföretag, Skåne" },
];

const services = [
  { id: "search", title: "Search", tagline: "Hitta de som andra inte når", description: "Vi använder riktade metoder för att identifiera och kontakta rätt kandidater — även de som inte aktivt söker." },
  { id: "rekrytering", title: "Rekrytering", tagline: "Hela processen eller delar av den", description: "Vi hanterar varje steg i rekryteringen — från rolldefiniering och sourcing till intervjuer, referenser och slutligt urval." },
  { id: "analys", title: "Analys", tagline: "Second Opinion — en extra dimension", description: "Vår Second Opinion-tjänst, byggd på SHL:s beprövade psykometriska metoder, lägger till ett objektivt lager." },
  { id: "utveckling", title: "Utveckling", tagline: "Individ- & grupputveckling", description: "Med IPU:s pedagogiska dialogverktyg arbetar vi med beteende, drivkrafter och emotionell intelligens." },
];

const assignments = [
  { title: "Projektledare", location: "Halmstad", industry: "Bygg & Infrastruktur" },
  { title: "Affärscontroller", location: "Göteborg", industry: "Ekonomi & Handel" },
  { title: "Servicetekniker", location: "Malmö", industry: "Teknik & Underhåll" },
  { title: "Exportsäljare", location: "Stockholm", industry: "Försäljning & Affärsutveckling" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          minHeight: "70vh",
          background: "linear-gradient(135deg, #555 0%, #888 100%)",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-8 lg:px-16 pb-20">
          <p className="text-xs tracking-[0.25em] uppercase mb-5 fade-in" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
            Strategisk HR · Halmstad, Sverige
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl fade-in" style={{ color: "rgba(255,255,255,0.8)", fontWeight: 200, letterSpacing: "-0.04em" }}>
            Välkommen
          </h1>
        </div>
      </section>

      {/* About banner */}
      <Link href="/who-we-are" className="block" style={{ textDecoration: "none" }}>
        <section
          style={{ minHeight: "220px", backgroundColor: "#333", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2.5rem 2rem" }}
          className="lg:px-16 cursor-pointer group"
        >
          <p className="text-xs tracking-[0.25em] uppercase" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Om oss</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl lg:text-3xl max-w-xl leading-snug" style={{ color: "rgba(255,255,255,0.8)", fontWeight: 300 }}>
              Grundat 2008 av Andreas Nilsson och Carin Mossberger — byggt på ärlighet, etik och genuint engagemang för människor.
            </p>
            <span className="text-xs tracking-[0.2em] uppercase hidden md:block group-hover:translate-x-1 transition-transform" style={{ color: "#D02C2B", fontWeight: 600 }}>
              Läs mer →
            </span>
          </div>
        </section>
      </Link>

      {/* Insights */}
      <section style={{ backgroundColor: "#F2F2F2" }} className="py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#999", fontWeight: 600, fontSize: "11px" }}>Insikter</p>
            <h2 className="text-4xl lg:text-5xl mb-16" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Perspektiv på människor &amp; prestation
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <article className="bg-white p-8 hover:shadow-lg transition-shadow cursor-pointer" style={{ transition: "box-shadow 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs tracking-wider uppercase px-2.5 py-1" style={{ backgroundColor: "rgba(208,44,43,0.08)", color: "#D02C2B", fontWeight: 600, fontSize: "10px" }}>{item.tag}</span>
                    <span className="text-xs" style={{ color: "#BBB" }}>{item.date}</span>
                  </div>
                  <h3 className="text-xl mb-3 leading-snug" style={{ color: "#111", fontWeight: 300 }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>{item.excerpt}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <div className="mt-10">
              <span className="link-underline text-xs cursor-pointer" style={{ color: "#111", fontWeight: 600 }}>Visa alla</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Team quotes */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#999", fontWeight: 600, fontSize: "11px" }}>Vårt team</p>
            <h2 className="text-4xl lg:text-5xl mb-16" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Människorna bakom Enoem
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="max-w-3xl">
              <blockquote className="mb-10">
                <p className="text-2xl lg:text-3xl leading-relaxed mb-8" style={{ color: "#333", fontWeight: 200, fontStyle: "italic", letterSpacing: "-0.02em" }}>
                  &ldquo;{teamQuotes[0].quote}&rdquo;
                </p>
                <footer>
                  <p className="text-sm" style={{ color: "#111", fontWeight: 600 }}>{teamQuotes[0].author}</p>
                  <p className="text-sm" style={{ color: "#BBB", fontWeight: 400 }}>{teamQuotes[0].company}</p>
                </footer>
              </blockquote>
              <div className="flex gap-2.5">
                {teamQuotes.map((_, i) => (
                  <span key={i} className="block w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? "#D02C2B" : "#DDD", transition: "background-color 0.45s" }} />
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="bg-white py-28" style={{ borderTop: "1px solid #EBEBEB" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#999", fontWeight: 600, fontSize: "11px" }}>Tjänster</p>
            <h2 className="text-4xl lg:text-5xl max-w-xl mb-16" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Djup HR-expertis inom fyra områden
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#EBEBEB" }}>
            {services.map((svc, i) => (
              <FadeIn key={svc.id} delay={i * 0.1}>
                <div className="bg-white p-12">
                  <p className="text-xs font-mono mb-5" style={{ color: "#D02C2B", fontWeight: 400 }}>0{i + 1}</p>
                  <h3 className="text-3xl mb-3" style={{ color: "#111", fontWeight: 200 }}>{svc.title}</h3>
                  <p className="text-sm mb-5" style={{ color: "#BBB", fontWeight: 500 }}>{svc.tagline}</p>
                  <p className="text-sm leading-relaxed" style={{ color: "#999", fontWeight: 400 }}>{svc.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Reach */}
      <section style={{ backgroundColor: "#111" }} className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl text-white mb-5" style={{ fontWeight: 200, letterSpacing: "-0.03em" }}>
              Baserade i Halmstad, verksamma i hela Sverige
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "#777", fontWeight: 400 }}>
              Våra rötter finns i Halland. Vår räckvidd sträcker sig från Malmö till Stockholm.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Assignments */}
      <section id="assignments" className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <h2 className="text-4xl lg:text-5xl mb-12" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Aktuella uppdrag
            </h2>
          </FadeIn>
          <div style={{ borderTop: "1px solid #EBEBEB" }}>
            {assignments.map((a, i) => (
              <FadeIn key={a.title} delay={i * 0.1}>
                <div className="flex items-center justify-between py-6 cursor-pointer group" style={{ borderBottom: "1px solid #EBEBEB" }}>
                  <div>
                    <p className="text-lg" style={{ color: "#111", fontWeight: 300 }}>{a.title}</p>
                    <p className="text-xs mt-1" style={{ color: "#BBB", fontWeight: 400 }}>{a.industry}</p>
                  </div>
                  <div className="flex items-center gap-8">
                    <span className="text-sm hidden sm:block" style={{ color: "#999" }}>{a.location}</span>
                    <span className="text-sm group-hover:translate-x-1" style={{ color: "#D02C2B", transition: "transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>→</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <span className="link-underline text-xs cursor-pointer" style={{ color: "#111", fontWeight: 600 }}>Visa alla uppdrag</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{ backgroundColor: "#F2F2F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <div className="max-w-xl">
              <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#999", fontWeight: 600, fontSize: "11px" }}>Kontakt</p>
              <h2 className="text-4xl lg:text-5xl mb-8" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
                Redo att hitta er nästa nyckelperson?
              </h2>
              <p className="text-sm leading-relaxed mb-10" style={{ color: "#999", fontWeight: 400 }}>
                Kontakta Andreas eller Carin direkt. Ärlig rådgivning, utan förpliktelser.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="mailto:nilsson@enoem.se" className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ backgroundColor: "#D02C2B", color: "#fff", fontWeight: 600 }}>
                  Kontakta Andreas
                </a>
                <a href="mailto:mossberger@enoem.se" className="px-8 py-3.5 text-xs tracking-[0.15em] uppercase hover:opacity-80" style={{ border: "1px solid #CCC", color: "#333", fontWeight: 600 }}>
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
