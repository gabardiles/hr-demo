import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Om oss — Enoem (Nilsson & Mossberger)",
  description: "Grundat 2008 i Halmstad av Andreas Nilsson och Carin Mossberger. Läs om Enoems historia, värderingar och arbetssätt inom HR, rekrytering och utveckling.",
};

const pillars = [
  {
    number: "01",
    title: "Kundpartnerskap",
    description: "Vi hittar upplägget som möter era specifika behov och önskemål. Hela rekryteringsprocessen eller delar av den — vi är flexibla av design. Vissa kunder behöver oss från dag ett till slutgiltigt erbjudande. Andra behöver ett enskilt steg gjort väl.",
    accent: "Vi arbetar med er, inte bara för er.",
  },
  {
    number: "02",
    title: "Kandidatfokus",
    description: "För kandidater erbjuder vi en transparent och professionell process från första kontakt till slutgiltig återkoppling. Vi kommunicerar tydligt, respekterar er tid och ger ärlig vägledning — oavsett om ni går vidare i processen eller inte.",
    accent: "Respekt. Transparens. Genuin feedback.",
  },
  {
    number: "03",
    title: "Beprövade metoder",
    description: "Vi använder SHL:s internationellt validerade psykometriska verktyg för vår Second Opinion-analystjänst, och IPU:s pedagogiska dialogmetodik för individ- och grupputveckling. Vi gör inte dessa val lättvindigt — de fungerar.",
    accent: "SHL-analys · IPU-utvecklingsramverk.",
  },
];

const testimonials = [
  {
    quote: "Enoem hittade en produktionschef åt oss som vi själva letat efter i sex månader. Inom tio veckor hade vi vår kandidat. Kvaliteten på matchningen var exceptionell.",
    author: "Driftchef",
    company: "Tillverkningsföretag, Halland",
  },
  {
    quote: "Second Opinion-analysen gav vår styrelse trygghet att genomföra en svår rekrytering. Den lyfte fram saker som våra intervjuer inte fångade — och den hade rätt. Vi har inte ångrat oss.",
    author: "VD",
    company: "Teknikföretag, Göteborg",
  },
  {
    quote: "Andreas och Carin är uppfriskande ärliga. Ingen överförsäljning. Bara gedigen rådgivning och en process som fungerar. Vi använder dem för alla seniora rekryteringar nu.",
    author: "HR-chef",
    company: "Detaljhandelsgrupp, Sverige",
  },
];

export default function WhoWeAre() {
  return (
    <>
      {/* 1. Hero */}
      <section style={{ minHeight: "55vh", background: "linear-gradient(135deg, #555 0%, #888 100%)", display: "flex", alignItems: "flex-end" }}>
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 pb-16 lg:pb-20">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "rgba(255,255,255,0.5)" }}>Enoem · Nilsson &amp; Mossberger</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-tight font-bold" style={{ color: "rgba(255,255,255,0.9)" }}>Om oss</h1>
        </div>
      </section>

      {/* 2. Intro */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#D02C2B" }}>Vår historia</p>
              <h2 className="text-3xl lg:text-4xl mb-8 font-bold" style={{ color: "#111" }}>Grundat i Halmstad, 2008</h2>
              <div className="space-y-4 text-sm leading-relaxed" style={{ color: "#666" }}>
                <p>Andreas Nilsson och Carin Mossberger grundade Enoem med en tydlig idé: att HR-konsulting och rekrytering kunde göras bättre — med mer ärlighet, mer noggrannhet och mer genuint engagemang för människorna på båda sidor av processen.</p>
                <p>Vi startade i Halland, en region vi känner på djupet, med de lokala affärsrelationer och den marknadsförståelse som spelar roll när man placerar rätt person i rätt roll. Med tiden spred sig vårt arbete över hela Sverige.</p>
                <p>Idag betjänar Enoem kunder från Malmö till Stockholm, med samma approach som vi startade med: enkla partnerskap, effektiva metoder och ett åtagande att göra det rätt — inte bara göra det klart.</p>
              </div>
            </div>
            <div className="hidden lg:block" style={{ backgroundColor: "#E5E5E5", minHeight: "360px" }} />
          </div>
        </div>
      </section>

      {/* 3. Values */}
      <section style={{ backgroundColor: "#F2F2F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#D02C2B" }}>Våra värderingar</p>
              <h2 className="text-3xl lg:text-4xl mb-8 font-bold" style={{ color: "#111" }}>Det vi står för</h2>
              <div className="space-y-6">
                {[
                  { title: "Ärlighet", text: "Vi säger vad vi menar och menar vad vi säger — till kunder, kandidater och varandra. Ärlighet är ingen policy; det är vilka vi är." },
                  { title: "Etik", text: "Varje process vi driver genomförs med full integritet. Kunder får vår ärliga bedömning, inte vår optimistiska." },
                  { title: "Moral", text: "Vi tänker på den långsiktiga effekten av vårt arbete. En bra rekrytering förändrar en persons liv. Vi tar det ansvaret på allvar." },
                ].map(({ title, text }) => (
                  <div key={title}>
                    <h3 className="text-base font-semibold mb-1" style={{ color: "#111" }}>{title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#666" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
            <blockquote className="p-10" style={{ backgroundColor: "white" }}>
              <p className="text-xl lg:text-2xl leading-relaxed mb-6 italic" style={{ color: "#333" }}>&ldquo;Tillsammans når vi framgång.&rdquo;</p>
              <footer>
                <p className="text-xs tracking-widest uppercase" style={{ color: "#999" }}>Enoems ledord — vår grundprincip</p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 4. Culture */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#D02C2B" }}>Kultur</p>
            <h2 className="text-3xl lg:text-4xl mb-6 font-bold" style={{ color: "#111" }}>Små av val. Starka av övertygelse.</h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#666" }}>Enoem är ett medvetet litet företag. Vi tror att direkta relationer — mellan oss och våra kunder, mellan oss och våra kandidater — ger bättre resultat än processer i stor skala.</p>
            <p className="text-sm leading-relaxed" style={{ color: "#666" }}>När ni arbetar med Enoem arbetar ni direkt med Andreas eller Carin. Inga överlämnanden till juniora medarbetare. Inga kontohanteringslager. De personer ni möter i början är de som gör jobbet.</p>
          </div>
        </div>
      </section>

      {/* 5. The Enoem Way */}
      <section style={{ backgroundColor: "#111" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-12">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#D02C2B" }}>Enoems arbetssätt</p>
            <h2 className="text-3xl lg:text-4xl text-white font-bold">Så här närmar vi oss varje uppdrag</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: "#333" }}>
            {pillars.map((p) => (
              <div key={p.number} className="p-10" style={{ backgroundColor: "#111" }}>
                <p className="text-4xl font-bold font-mono mb-6" style={{ color: "#D02C2B", opacity: 0.4 }}>{p.number}</p>
                <h3 className="text-xl text-white mb-4 font-bold">{p.title}</h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "#999" }}>{p.description}</p>
                <p className="text-xs font-semibold tracking-wide" style={{ color: "#666" }}>{p.accent}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section style={{ backgroundColor: "#F2F2F2" }} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-10">
            <p className="text-xs tracking-[0.3em] uppercase font-semibold mb-4" style={{ color: "#111" }}>Kundröster</p>
            <h2 className="text-3xl font-bold" style={{ color: "#111" }}>Vad våra kunder säger</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <blockquote key={t.author} className="bg-white p-8">
                <p className="text-base leading-relaxed mb-6 italic" style={{ color: "#333" }}>&ldquo;{t.quote}&rdquo;</p>
                <footer>
                  <p className="text-xs font-semibold" style={{ color: "#111" }}>{t.author}</p>
                  <p className="text-xs" style={{ color: "#999" }}>{t.company}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Founder quote */}
      <section className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <blockquote>
            <p className="text-2xl lg:text-3xl leading-relaxed mb-8 italic" style={{ color: "#333" }}>
              &ldquo;Varje placering påverkar riktiga människors liv — kandidaten, deras familj, teamet de ansluter sig till, organisationen de hjälper att bygga. Det ansvaret är vad som driver hur vi arbetar på Enoem.&rdquo;
            </p>
            <footer>
              <p className="text-sm font-semibold" style={{ color: "#111" }}>Andreas Nilsson</p>
              <p className="text-sm" style={{ color: "#999" }}>Medgrundare, Enoem</p>
            </footer>
          </blockquote>
          <div className="flex flex-wrap justify-center gap-4 mt-12">
            <Link href="/#contact" className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors hover:opacity-90" style={{ backgroundColor: "#D02C2B", color: "#fff" }}>Kontakta oss</Link>
            <Link href="/" className="px-8 py-3.5 text-sm font-semibold tracking-wide uppercase transition-colors" style={{ border: "1px solid #333", color: "#333" }}>Tillbaka till startsidan</Link>
          </div>
        </div>
      </section>
    </>
  );
}
