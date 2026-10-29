import React, { useEffect, useState } from 'react';
import { SERVICES, BUSINESS_CONFIG } from '../config/business';
import { Link } from '../context/RouterContext';
import { scrollToSection } from '../utils/scrollToSection';
import { SeoMeta } from '../components/SeoMeta';

import { ArrowDown, ArrowRight, Check, Shield, Layers, Hammer } from 'lucide-react';

function jumpTo(e: React.MouseEvent<HTMLAnchorElement>, slug: string) {
  e.preventDefault();
  scrollToSection(slug);
  window.history.replaceState({}, '', `/leistungen#${slug}`);
}

export function ServicesOverviewPage() {
  const [activeSlug, setActiveSlug] = useState(SERVICES[0].slug);

  // Highlight the service currently in view in the sticky sub navigation
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSlug(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    SERVICES.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={`Fliesenarbeiten & Leistungen in ${BUSINESS_CONFIG.city} – Liox Fliesen`}
        description={`Alle Leistungen auf einen Blick: Fachgerechte Fliesenverlegung, moderne Badfliesen, Großformatfliesen und Terrassenplatten in ${BUSINESS_CONFIG.city} und Umgebung.`}
        canonicalPath="/leistungen"
      />

      {/* Header Banner */}
      <section className="hero-surface relative isolate overflow-hidden bg-[#2f2e2e] text-[#ece7e1]">
        <img src="/images/projects/baeder-01.webp" alt="Badezimmer mit Badewanne, Holzoptik-Fliesen und Glasdusche"
          fetchPriority="high" width={1376} height={768}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center] sm:object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2f2e2e]/90 via-[#2f2e2e]/70 to-[#2f2e2e]/25" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
          <div data-reveal-sequence className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#d4c4b1] mb-5">
              Unsere Leistungen
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif text-[#ece7e1] mb-6 leading-tight [text-wrap:balance]">
              Fliesen, die zu Ihrem Leben passen.
            </h1>
            <p className="text-base sm:text-lg text-[#ece7e1]/90 leading-relaxed max-w-xl">
              Ob Bad, Wohnraum oder Terrasse: Wir unterstützen Sie bei der Gestaltung und übernehmen die Fliesenarbeiten – abgestimmt auf Ihre Wünsche und die Anforderungen vor Ort.
            </p>
            <a href="#leistungsuebersicht" onClick={(e) => jumpTo(e, 'leistungsuebersicht')}
              className="inline-flex items-center gap-3 mt-8 pb-2 border-b border-[#d4c4b1]/60 text-sm text-[#ece7e1] hover:text-[#d4c4b1] group">
              Leistungen entdecken
              <ArrowDown className="w-4 h-4 transition-transform duration-500 group-hover:translate-y-1" />
            </a>
          </div>
        </div>
      </section>

      <section id="leistungsuebersicht" className="py-10 sm:py-14 scroll-mt-24 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick overview of all services */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#a09282]/30 border border-[#a09282]/30">
            {SERVICES.map((service, index) => (
              <a
                key={service.id}
                href={`#${service.slug}`}
                onClick={(e) => jumpTo(e, service.slug)}
                className="group bg-[#ece7e1] hover:bg-white p-6 flex flex-col justify-between gap-6 transition-colors"
              >
                <div>
                  <div className="font-mono tracking-normal tabular-nums whitespace-nowrap text-sm font-bold text-[#a09282] mb-3">{String(index + 1).padStart(2, '0')}</div>
                  <div className="text-base font-serif text-[#2f2e2e] mb-1">{service.title}</div>
                  <div className="text-xs text-[#2f2e2e]/70">{service.kicker}</div>
                </div>
                <ArrowDown className="w-4 h-4 text-[#a09282] transition-transform group-hover:translate-y-1" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky in-page navigation */}
      <nav
        aria-label="Leistungen auf dieser Seite"
        data-service-navigation
        className="sticky top-[var(--header-offset,80px)] transition-[top] duration-300 ease-in-out z-30 bg-[#ece7e1]/95 backdrop-blur-md border-b border-[#a09282]/25"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid grid-cols-2 sm:flex sm:flex-wrap gap-x-4 sm:gap-x-6 text-xs sm:text-sm">
            {SERVICES.map((service) => (
              <li key={service.id} className="min-w-0">
                <a
                  href={`#${service.slug}`}
                  onClick={(e) => jumpTo(e, service.slug)}
                  aria-current={activeSlug === service.slug ? 'true' : undefined}
                  className={`block py-3.5 border-b-2 transition-colors ${
                    activeSlug === service.slug
                      ? 'border-[#2f2e2e] text-[#2f2e2e] font-semibold'
                      : 'border-transparent text-[#2f2e2e]/70 hover:text-[#2f2e2e]'
                  }`}
                >
                  {service.shortTitle}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* All services in full */}
      {SERVICES.map((service, index) => (
        <section
          key={service.id}
          id={service.slug}
          aria-labelledby={`${service.slug}-title`}
          className={`scroll-mt-36 py-20 border-b border-[#a09282]/20 ${index % 2 === 0 ? 'bg-white' : 'bg-[#ece7e1]'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="aspect-[4/3] bg-[#2f2e2e] relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover card-image-zoom"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#2f2e2e]/90 text-[#ece7e1] text-xs font-semibold uppercase tracking-wider px-3 py-1">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                </div>
              </div>

              <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                  {service.kicker}
                </div>
                <h2 id={`${service.slug}-title`} className="text-3xl sm:text-4xl font-serif text-[#2f2e2e] mb-4 leading-tight [text-wrap:balance]">
                  {service.title}
                </h2>
                <p className="text-base text-[#2f2e2e]/80 leading-relaxed mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[#2f2e2e]/85">
                      <Check className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/kontakt?service=${service.id}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2f2e2e] text-[#ece7e1] text-xs font-semibold uppercase tracking-wider border border-[#2f2e2e] hover:bg-[#2f2e2e]/90 transition-colors"
                >
                  <span>Angebot für {service.shortTitle}</span>
                  <ArrowRight className="w-4 h-4 text-[#a09282]" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Planning & Quality Standards Guide */}
      <section className="py-20 border-b border-[#a09282]/20 bg-[#2f2e2e] text-[#ece7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
              Fachwissen & Beratung
            </div>
            <h2 className="text-3xl font-serif text-[#ece7e1] mb-4">
              Die richtige Grundlage für Ihr Projekt.
            </h2>
            <p className="text-sm text-[#ece7e1]/75 leading-relaxed">
              Gute Fliesenarbeiten beginnen vor der ersten verlegten Fliese. Wir schauen uns die Gegebenheiten an und stimmen Vorbereitung, Material und Ausführung darauf ab.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-[#a09282]/40 p-8">
              <Layers className="w-8 h-8 text-[#a09282] mb-4" />
              <h3 className="text-lg font-semibold text-[#ece7e1] mb-3">
                Untergrund & Nivellierung
              </h3>
              <p className="text-xs text-[#ece7e1]/70 leading-relaxed">
                Ein tragfähiger, ebener Untergrund ist die Basis für die Verlegung. Wir prüfen den vorhandenen Aufbau und besprechen, welche Vorbereitung erforderlich ist.
              </p>
            </div>

            <div className="border border-[#a09282]/40 p-8">
              <Shield className="w-8 h-8 text-[#a09282] mb-4" />
              <h3 className="text-lg font-semibold text-[#ece7e1] mb-3">
                Abdichtung im Bad
              </h3>
              <p className="text-xs text-[#ece7e1]/70 leading-relaxed">
                Gerade in Dusche und Bad kommt es auf die Bereiche unter den Fliesen an. Abdichtung, Anschlüsse und Übergänge werden passend zur Nutzung geplant und ausgeführt.
              </p>
            </div>

            <div className="border border-[#a09282]/40 p-8">
              <Hammer className="w-8 h-8 text-[#a09282] mb-4" />
              <h3 className="text-lg font-semibold text-[#ece7e1] mb-3">
                Buttering-Floating-Verfahren
              </h3>
              <p className="text-xs text-[#ece7e1]/70 leading-relaxed">
                Bei diesem Verfahren wird Kleber auf den Untergrund und die Fliesenrückseite aufgetragen. Je nach Format und Einsatzbereich unterstützt das eine gleichmäßige Einbettung.
              </p>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}
