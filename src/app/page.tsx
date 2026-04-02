"use client";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

/* --- Data --- */

const insights = [
  { tag: "Talent", title: "Så behåller du dina bästa medarbetare 2026" },
  { tag: "Rekrytering", title: "Kraften i Second Opinion vid rekrytering" },
  { tag: "Ledarskap", title: "Bygga ledarskap genom utvecklingsprogram" },
];

const people = [
  {
    name: "Andreas Nilsson",
    role: "Grundare",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop&crop=face",
    quote: "Varje placering påverkar riktiga människors liv. Det ansvaret driver hur vi arbetar.",
  },
  {
    name: "Carin Mossberger",
    role: "Grundare",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop&crop=face",
    quote: "Vi tror på ärlighet framför allt. Våra kunder får vår verkliga bedömning, inte den optimistiska.",
  },
  {
    name: "Driftchef",
    role: "Klient, Halland",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    quote: "Enoem hittade en produktionschef åt oss som vi själva letat efter i sex månader.",
  },
  {
    name: "HR-chef",
    role: "Klient, Sverige",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop&crop=face",
    quote: "Andreas och Carin är uppfriskande ärliga. Ingen överförsäljning. Bara gedigen rådgivning.",
  },
];

const services = [
  { id: "search", title: "Search", tagline: "Hitta de som andra inte når", description: "Vi använder riktade metoder för att identifiera och kontakta rätt kandidater — även de som inte aktivt söker." },
  { id: "rekrytering", title: "Rekrytering", tagline: "Hela processen eller delar av den", description: "Vi hanterar varje steg i rekryteringen — från rolldefiniering och sourcing till intervjuer, referenser och slutligt urval." },
  { id: "analys", title: "Analys", tagline: "Second Opinion — en extra dimension", description: "Vår Second Opinion-tjänst, byggd på SHL:s beprövade psykometriska metoder, lägger till ett objektivt lager." },
  { id: "utveckling", title: "Utveckling", tagline: "Individ- & grupputveckling", description: "Med IPU:s pedagogiska dialogverktyg arbetar vi med beteende, drivkrafter och emotionell intelligens." },
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
      {/* ===== HERO — full-bleed image like Plesner ===== */}
      <section className="relative" style={{ minHeight: "75vh", display: "flex", alignItems: "flex-end" }}>
        <Image
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1800&h=1000&fit=crop"
          alt="Svensk kust"
          fill
          className="object-cover"
          priority
          style={{ filter: "brightness(0.55)" }}
        />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-8 lg:px-16 pb-20">
          <p className="text-xs tracking-[0.25em] uppercase mb-5" style={{ color: "rgba(255,255,255,0.45)", fontWeight: 400 }}>
            Strategisk HR · Halmstad, Sverige
          </p>
          <h1 className="text-6xl sm:text-7xl lg:text-8xl" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 200, letterSpacing: "-0.04em" }}>
            Välkommen
          </h1>
        </div>
      </section>

      {/* ===== Breathing space ===== */}
      <div style={{ height: "60px", backgroundColor: "#fff" }} />

      {/* ===== About us banner — with background image ===== */}
      <Link href="/who-we-are" className="block" style={{ textDecoration: "none" }}>
        <section className="relative cursor-pointer group" style={{ minHeight: "260px", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "2.5rem 2rem" }}>
          <Image
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&h=500&fit=crop"
            alt="Kontor"
            fill
            className="object-cover"
            style={{ filter: "brightness(0.4)" }}
          />
          <p className="relative z-10 text-xs tracking-[0.25em] uppercase" style={{ color: "#D02C2B", fontWeight: 600, fontSize: "11px" }}>Om oss</p>
          <div className="relative z-10 flex items-end justify-between lg:px-8">
            <p className="text-2xl lg:text-3xl max-w-xl leading-snug" style={{ color: "rgba(255,255,255,0.85)", fontWeight: 300 }}>
              Grundat 2008 av Andreas Nilsson och Carin Mossberger — byggt på ärlighet, etik och genuint engagemang.
            </p>
            <span className="text-xs tracking-[0.2em] uppercase hidden md:block group-hover:translate-x-1 transition-transform" style={{ color: "#D02C2B", fontWeight: 600 }}>
              Läs mer →
            </span>
          </div>
        </section>
      </Link>

      {/* ===== NEWS — Plesner minimal: just label + headline, no cards ===== */}
      <section style={{ backgroundColor: "#F8F8F8" }} className="py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#BBB", fontWeight: 600, fontSize: "11px" }}>Insikter</p>
            <h2 className="text-4xl lg:text-5xl mb-16" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Perspektiv på människor &amp; prestation
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
            {insights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <div className="cursor-pointer group">
                  <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "#BBB", fontWeight: 600 }}>{item.tag}</p>
                  <h3 className="text-xl leading-snug group-hover:opacity-60" style={{ color: "#111", fontWeight: 300, transition: "opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
                    {item.title}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.5}>
            <div className="mt-12">
              <span className="link-underline text-xs cursor-pointer" style={{ color: "#111", fontWeight: 600 }}>Visa alla</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== OUR PEOPLE — portrait carousel like Plesner ===== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#BBB", fontWeight: 600, fontSize: "11px" }}>Vårt team</p>
            <h2 className="text-4xl lg:text-5xl mb-20" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Tillsammans når vi framgång
            </h2>
          </FadeIn>

          {/* People grid with photos + quotes — Plesner style */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
              {/* Left: quote */}
              <div>
                <blockquote>
                  <p className="text-2xl lg:text-3xl leading-relaxed mb-8" style={{ color: "#333", fontWeight: 200, fontStyle: "italic", letterSpacing: "-0.02em" }}>
                    &ldquo;{people[0].quote}&rdquo;
                  </p>
                  <footer>
                    <p className="text-sm" style={{ color: "#111", fontWeight: 600 }}>{people[0].name}</p>
                    <p className="text-sm" style={{ color: "#BBB", fontWeight: 400 }}>{people[0].role}</p>
                  </footer>
                </blockquote>
              </div>
              {/* Right: portrait photo */}
              <div className="relative" style={{ height: "500px" }}>
                <Image
                  src={people[0].image}
                  alt={people[0].name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </FadeIn>

          {/* Portrait row — 4 small portraits like Plesner's people carousel */}
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {people.map((p, i) => (
                <div key={p.name} className="cursor-pointer group">
                  <div className="relative mb-4" style={{ height: "280px" }}>
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:opacity-80"
                      style={{ transition: "opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                    />
                  </div>
                  <p className="text-sm" style={{ color: "#111", fontWeight: 500 }}>{p.name}</p>
                  <p className="text-xs" style={{ color: "#BBB", fontWeight: 400 }}>{p.role}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Dots */}
          <div className="flex gap-2.5 mt-10">
            {[0,1,2,3].map((i) => (
              <span key={i} className="block w-2 h-2 rounded-full" style={{ backgroundColor: i === 0 ? "#D02C2B" : "#DDD" }} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="bg-white py-28" style={{ borderTop: "1px solid #EBEBEB" }}>
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <FadeIn>
            <p className="text-xs tracking-[0.25em] uppercase mb-4" style={{ color: "#BBB", fontWeight: 600, fontSize: "11px" }}>Tjänster</p>
            <h2 className="text-4xl lg:text-5xl max-w-xl mb-6" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Djup HR-expertis inom fyra områden
            </h2>
            <p className="text-sm max-w-lg mb-16" style={{ color: "#999", fontWeight: 400 }}>
              Ärlighet, tillit och beprövade metoder genomsyrar allt vi gör. Vi levererar rådgivning av högsta kvalitet och bygger starka, långvariga relationer med våra kunder.
            </p>
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
          <FadeIn delay={0.4}>
            <div className="mt-10">
              <span className="link-underline text-xs cursor-pointer" style={{ color: "#111", fontWeight: 600 }}>Se våra tjänster</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== REACH — full-bleed image section ===== */}
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
              Baserade i Halmstad, verksamma i hela Sverige
            </h2>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "rgba(255,255,255,0.6)", fontWeight: 400 }}>
              Våra rötter finns i Halland. Vår räckvidd sträcker sig från Malmö till Stockholm — överallt där talang och möjligheter möts.
            </p>
            <div className="mt-8">
              <span className="link-underline text-xs cursor-pointer" style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>Läs mer</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ===== CAREER intro + VACANCIES ===== */}
      <section className="bg-white py-28">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          {/* Career intro like Plesner's "Collaboration in focus" */}
          <FadeIn>
            <div className="max-w-2xl mb-20">
              <h2 className="text-4xl lg:text-5xl mb-6" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
                Samarbete i fokus
              </h2>
              <p className="text-sm leading-relaxed mb-4" style={{ color: "#999", fontWeight: 400 }}>
                Det ska upplevas enkelt och effektivt att samarbeta med oss. Vi har lång erfarenhet av att rekrytera och utvärdera nyckelpersoner till olika tjänster inom olika branscher. Tillsammans hittar vi ett upplägg som möter ert behov och era önskemål.
              </p>
              <span className="link-underline text-xs cursor-pointer" style={{ color: "#111", fontWeight: 600 }}>Läs mer</span>
            </div>
          </FadeIn>

          {/* Vacancies list */}
          <FadeIn delay={0.2}>
            <h2 className="text-4xl lg:text-5xl mb-12" style={{ color: "#111", fontWeight: 200, letterSpacing: "-0.03em" }}>
              Lediga tjänster
            </h2>
          </FadeIn>
          <div>
            {vacancies.map((title, i) => (
              <FadeIn key={title} delay={0.25 + i * 0.08}>
                <a href="#" className="block py-5 group" style={{ borderBottom: "1px solid #EBEBEB", textDecoration: "none" }}>
                  <p className="text-base lg:text-lg group-hover:opacity-60" style={{ color: "#111", fontWeight: 300, transition: "opacity 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}>
                    {title}
                  </p>
                </a>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.7}>
            <div className="mt-10">
              <span className="link-underline text-xs cursor-pointer" style={{ color: "#111", fontWeight: 600 }}>Visa alla tjänster</span>
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
