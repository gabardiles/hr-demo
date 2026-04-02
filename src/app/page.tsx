import Link from "next/link";

const insights = [
  {
    tag: "Talent",
    date: "Mars 2026",
    title: "Så behåller du dina bästa medarbetare 2026",
    excerpt: "Företag som investerar i kultur, tydligt syfte och individuell utveckling ser mätbart lägre personalomsättning. Vi delar vad vi sett fungera.",
  },
  {
    tag: "Rekrytering",
    date: "Februari 2026",
    title: "Kraften i Second Opinion vid rekrytering",
    excerpt: "Att lägga till ett SHL-baserat analyslager i er process bromsar inte rekryteringen — det skärper den. Vår Second Opinion-tjänst minskar kostsamma felrekryteringar med upp till 40%.",
  },
  {
    tag: "Ledarskap",
    date: "Januari 2026",
    title: "Bygga ledarskap genom utvecklingsprogram",
    excerpt: "IPU:s pedagogiska dialogverktyg skapar bestående beteendeförändring. Vi delar med oss av vad vi sett fungera i Halland och resten av Sverige.",
  },
];

const teamQuotes = [
  {
    quote: "Enoem hittade en produktionschef åt oss som vi själva letat efter i sex månader. Inom tio veckor hade vi vår kandidat.",
    author: "Driftchef",
    company: "Tillverkningsföretag, Halland",
  },
  {
    quote: "Second Opinion-analysen gav vår styrelse trygghet att genomföra en svår rekrytering. Den lyfte fram saker som våra intervjuer inte fångade — och den hade rätt.",
    author: "VD",
    company: "Teknikföretag, Göteborg",
  },
  {
    quote: "Andreas och Carin är uppfriskande ärliga. Ingen överförsäljning. Bara gedigen rådgivning och en process som fungerar. Vi använder dem för alla seniora rekryteringar nu.",
    author: "HR-chef",
    company: "Detaljhandelsgrupp, Sverige",
  },
  {
    quote: "Deras kandidatanalys gav oss ett språk för att prata om människor som vi inte hade haft annars. Det förändrade hur vi ser på ledarskapsrekrytering.",
    author: "VD",
    company: "Infrastrukturföretag, Skåne",
  },
];

const services = [
  {
    id: "search",
    title: "Search",
    tagline: "Hitta de som andra inte når",
    description: "Vi använder riktade metoder för att identifiera och kontakta rätt kandidater — även de som inte aktivt söker. Vårt nätverk och branschkontakter över hela Sverige ger er tillgång till talang som en vanlig annons inte når.",
  },
  {
    id: "rekrytering",
    title: "Rekrytering",
    tagline: "Hela processen eller delar av den",
    description: "Vi hanterar varje steg i rekryteringen — från rolldefiniering och sourcing till intervjuer, referenser och slutligt urval. Baserade i Halmstad och verksamma i hela Sverige.",
  },
  {
    id: "analys",
    title: "Analys",
    tagline: "Second Opinion — en extra dimension",
    description: "Viktiga rekryteringsbeslut förtjänar mer än magkänsla. Vår Second Opinion-tjänst, byggd på SHL:s beprövade psykometriska metoder, lägger till ett objektivt lager som minskar risken för kostsamma misstag.",
  },
  {
    id: "utveckling",
    title: "Utveckling",
    tagline: "Individ- & grupputveckling",
    description: "Med IPU:s pedagogiska dialogverktyg arbetar vi med beteende, drivkrafter och emotionell intelligens för att skapa varaktig förändring — för enskilda chefer och hela ledningsgrupper.",
  },
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
      {/* 1. Hero */}
      <section
        style={{
          minHeight: "65vh",
          background: "linear-gradient(135deg, #555 0%, #888 100%)",
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>
            Strategisk HR · Halmstad, Sverige
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>
            Välkommen
          </h1>
        </div>
      </section>

      {/* 2. About banner */}
      <Link href="/who-we-are" className="block" style={{ textDecoration: "none" }}>
        <section
          style={{ minHeight: "200px", backgroundColor: "#333", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2rem 1.5rem" }}
          className="lg:px-12 cursor-pointer group"
        >
          <p className="text-sm tracking-widest uppercase font-medium" style={{ color: "#D02C2B" }}>Om oss</p>
          <div className="flex items-end justify-between">
            <p className="text-2xl lg:text-3xl max-w-xl leading-snug font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>
              Grundat 2008 av Andreas Nilsson och Carin Mossberger — byggt på ärlighet, etik och genuint engagemang för människor.
            </p>
            <span className="text-sm tracking-widest uppercase hidden md:block group-hover:translate-x-1 transition-transform" style={{ color: "#D02C2B" }}>
              Läs mer →
            </span>
          </div>
        </section>
      </Link>

      {/* 3. Insights */}
      <section style={{ backgroundColor: "#F2F2F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#111" }}>Insikter</p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "#111" }}>Perspektiv på människor &amp; prestation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {insights.map((item) => (
              <article key={item.title} className="bg-white p-8 hover:shadow-md transition-shadow cursor-pointer">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-xs font-semibold tracking-wider uppercase px-2.5 py-1" style={{ backgroundColor: "rgba(208,44,43,0.1)", color: "#D02C2B" }}>{item.tag}</span>
                  <span className="text-xs" style={{ color: "#999" }}>{item.date}</span>
                </div>
                <h3 className="text-lg mb-3 leading-snug font-semibold" style={{ color: "#111" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{item.excerpt}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Team quotes */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#111" }}>Vårt team</p>
            <h2 className="text-3xl lg:text-4xl font-bold" style={{ color: "#111" }}>Människorna bakom Enoem</h2>
          </div>
          <div className="max-w-3xl">
            <blockquote className="mb-8">
              <p className="text-xl lg:text-2xl leading-relaxed mb-6 italic" style={{ color: "#333" }}>
                &ldquo;{teamQuotes[0].quote}&rdquo;
              </p>
              <footer>
                <p className="text-sm font-semibold" style={{ color: "#111" }}>{teamQuotes[0].author}</p>
                <p className="text-sm" style={{ color: "#999" }}>{teamQuotes[0].company}</p>
              </footer>
            </blockquote>
            <div className="flex gap-2 mt-6">
              {teamQuotes.map((_, i) => (
                <span key={i} className="block w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? "#D02C2B" : "#CCC" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Services */}
      <section id="services" className="bg-white py-24" style={{ borderTop: "1px solid #E5E5E5" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#111" }}>Tjänster</p>
            <h2 className="text-3xl lg:text-4xl max-w-xl font-bold" style={{ color: "#111" }}>Djup HR-expertis inom fyra områden</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: "#E5E5E5" }}>
            {services.map((svc, i) => (
              <div key={svc.id} className="bg-white p-10">
                <p className="text-xs font-mono mb-4" style={{ color: "#D02C2B" }}>0{i + 1}</p>
                <h3 className="text-2xl mb-2 font-bold" style={{ color: "#111" }}>{svc.title}</h3>
                <p className="text-sm font-medium mb-4" style={{ color: "#999" }}>{svc.tagline}</p>
                <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Reach */}
      <section style={{ backgroundColor: "#111" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-3xl lg:text-4xl text-white mb-4 font-bold">Baserade i Halmstad, verksamma i hela Sverige</h2>
          <p className="text-sm max-w-lg mx-auto" style={{ color: "#999" }}>
            Våra rötter finns i Halland. Vår räckvidd sträcker sig från Malmö till Stockholm — överallt där talang och möjligheter möts.
          </p>
        </div>
      </section>

      {/* 7. Assignments */}
      <section id="assignments" className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <h2 className="text-3xl font-bold" style={{ color: "#111" }}>Aktuella uppdrag</h2>
          </div>
          <div style={{ borderTop: "1px solid #E5E5E5", borderBottom: "1px solid #E5E5E5" }}>
            {assignments.map((a) => (
              <div key={a.title} className="flex items-center justify-between py-5 cursor-pointer group" style={{ borderBottom: "1px solid #E5E5E5" }}>
                <div>
                  <p className="font-medium text-base" style={{ color: "#111" }}>{a.title}</p>
                  <p className="text-xs mt-0.5" style={{ color: "#999" }}>{a.industry}</p>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-sm hidden sm:block" style={{ color: "#666" }}>{a.location}</span>
                  <span className="text-sm group-hover:translate-x-1 transition-transform" style={{ color: "#D02C2B" }}>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA */}
      <section id="contact" style={{ backgroundColor: "#F2F2F2" }} className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-xl">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#111" }}>Kontakt</p>
            <h2 className="text-3xl lg:text-4xl mb-6 font-bold" style={{ color: "#111" }}>Redo att hitta er nästa nyckelperson?</h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "#666" }}>Kontakta Andreas eller Carin direkt. Ärlig rådgivning, utan förpliktelser.</p>
            <div className="flex flex-wrap gap-4">
              <a href="mailto:nilsson@enoem.se" className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-90" style={{ backgroundColor: "#D02C2B", color: "#fff" }}>
                Kontakta Andreas
              </a>
              <a href="mailto:mossberger@enoem.se" className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors" style={{ border: "1px solid #333", color: "#333" }}>
                Kontakta Carin
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
