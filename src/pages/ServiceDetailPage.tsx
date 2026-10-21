import React from 'react';
import { SERVICES, ServiceItem, BUSINESS_CONFIG } from '../config/business';
import { Link, useRouter } from '../context/RouterContext';
import { SeoMeta } from '../components/SeoMeta';
import { ContactForm } from '../components/ContactForm';
import { ArrowLeft, ArrowRight, Check, ChevronRight, HelpCircle } from 'lucide-react';

interface ServiceDetailPageProps {
  slug: string;
}

export function ServiceDetailPage({ slug }: ServiceDetailPageProps) {
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="py-24 text-center max-w-lg mx-auto px-4">
        <h1 className="text-3xl font-serif text-[#2f2e2e] mb-4">Leistung nicht gefunden</h1>
        <p className="text-sm text-[#2f2e2e]/75 mb-6">
          Die angeforderte Leistungsseite existiert nicht oder wurde verschoben.
        </p>
        <Link
          href="/leistungen"
          className="inline-block px-6 py-3 bg-[#2f2e2e] text-[#ece7e1] text-xs uppercase tracking-wider font-semibold"
        >
          Zur Leistungsübersicht
        </Link>
      </div>
    );
  }

  // Related services (excluding current)
  const otherServices = SERVICES.filter((s) => s.slug !== slug);

  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={service.metaTitle.replace('[CITY]', BUSINESS_CONFIG.city)}
        description={service.metaDescription.replace('[CITY]', BUSINESS_CONFIG.city)}
        canonicalPath={`/leistungen/${service.slug}/`}
      />

      {/* Breadcrumb Navigation (Natural unboxed typography) */}
      <div className="border-b border-[#a09282]/20 bg-[#ece7e1]/50 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs text-[#2f2e2e]/70" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-[#2f2e2e]">Startseite</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#a09282]" />
            <Link href="/leistungen" className="hover:text-[#2f2e2e]">Leistungen</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#a09282]" />
            <span className="text-[#2f2e2e] font-semibold" aria-current="page">{service.shortTitle}</span>
          </nav>
        </div>
      </div>

      {/* Service Hero */}
      <section className="py-16 lg:py-24 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-3">
                {service.kicker} · Fachbetrieb {BUSINESS_CONFIG.city}
              </div>
              <h1 className="text-4xl sm:text-5xl font-serif text-[#2f2e2e] mb-6 leading-tight [text-wrap:balance]">
                {service.heroHeadline}
              </h1>
              <p className="text-lg text-[#2f2e2e]/85 leading-relaxed mb-8">
                {service.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#angebot"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#2f2e2e] text-[#ece7e1] text-xs font-semibold uppercase tracking-wider border border-[#2f2e2e] hover:bg-[#2f2e2e]/90 transition-colors shadow-sm text-center"
                >
                  Unverbindliches Angebot anfordern
                </a>
                <Link
                  href="/referenzen"
                  className="inline-flex items-center justify-center px-6 py-4 bg-transparent text-[#2f2e2e] text-xs font-semibold uppercase tracking-wider border border-[#a09282] hover:bg-[#a09282]/10 transition-colors text-center"
                >
                  Projektbeispiele ansehen
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="aspect-[4/3] bg-[#2f2e2e] border border-[#a09282]/30 overflow-hidden shadow-md">
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Scope */}
      <section className="py-20 border-b border-[#a09282]/20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Qualitätsmerkmale
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2f2e2e] mb-6">
                Warum Bauherren auf diese Ausführung setzen
              </h2>
              <div className="space-y-4">
                {service.benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-[#ece7e1]/30 border border-[#a09282]/20">
                    <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                    <span className="text-sm text-[#2f2e2e]/90 leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Leistungsumfang
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2f2e2e] mb-6">
                Was in dieser Leistung enthalten ist
              </h2>
              <ul className="space-y-3 mb-8">
                {service.scope.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-[#2f2e2e]/80">
                    <span className="w-2 h-2 rounded-none bg-[#a09282] shrink-0 mt-2"></span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-[#ece7e1]/50 border border-[#a09282]/30">
                <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-2">
                  Eingesetzte Materialien
                </div>
                <ul className="text-xs text-[#2f2e2e]/80 space-y-1.5">
                  {service.materials.map((m, i) => (
                    <li key={i}>· {m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process for this Service */}
      <section className="py-20 border-b border-[#a09282]/20 bg-[#ece7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
              Schritt für Schritt
            </div>
            <h2 className="text-3xl font-serif text-[#2f2e2e] mb-3">
              Unser handwerklicher Ablauf bei {service.shortTitle}
            </h2>
            <p className="text-sm text-[#2f2e2e]/75">
              Jeder Schritt wird nach den anerkannten Regeln der Bautechnik ausgeführt und dokumentiert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between">
                <div>
                  <div className="font-mono text-xl font-bold text-[#a09282] mb-3">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-semibold text-[#2f2e2e] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Specific FAQ */}
      <section className="py-20 border-b border-[#a09282]/20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
              Häufige Fragen
            </div>
            <h2 className="text-3xl font-serif text-[#2f2e2e] mb-3">
              Fragen zu {service.title}
            </h2>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-[#ece7e1]/30 border border-[#a09282]/30 p-6 [&_summary::-webkit-details-marker]:hidden cursor-pointer"
              >
                <summary className="flex items-center justify-between text-base font-semibold text-[#2f2e2e] gap-4">
                  <span>{faq.question}</span>
                  <span className="text-[#a09282] text-xl font-light transition-transform duration-200 group-open:rotate-45">
                    +
                  </span>
                </summary>
                <div className="mt-4 pt-4 border-t border-[#a09282]/20 text-sm text-[#2f2e2e]/80 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 border-b border-[#a09282]/20 bg-[#ece7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
            Weitere Leistungen
          </div>
          <h2 className="text-2xl font-serif text-[#2f2e2e] mb-8">
            Das könnte Sie ebenfalls interessieren
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                href={`/leistungen/${other.slug}`}
                className="bg-white border border-[#a09282]/30 p-6 block hover:border-[#a09282] transition-colors group"
              >
                <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-1">
                  {other.kicker}
                </div>
                <h3 className="text-lg font-serif text-[#2f2e2e] mb-2 group-hover:text-[#a09282] transition-colors">
                  {other.title}
                </h3>
                <p className="text-xs text-[#2f2e2e]/70 line-clamp-2 mb-4">
                  {other.description}
                </p>
                <div className="text-xs font-semibold uppercase tracking-wider text-[#2f2e2e] flex items-center gap-1">
                  <span>Details ansehen</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#a09282]" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Anchor Section */}
      <section id="angebot" className="py-20 bg-[#ece7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Projektanfrage
              </div>
              <h2 className="text-3xl font-serif text-[#2f2e2e] mb-4">
                Angebot für {service.shortTitle} anfordern
              </h2>
              <p className="text-sm text-[#2f2e2e]/80 leading-relaxed mb-6">
                Teilen Sie uns Ihre geplanten Maße, Raumdaten oder Skizzen mit. Wir melden uns umgehend mit einer fundierten ersten Rückmeldung oder einem Besichtigungstermin.
              </p>
              <div className="p-4 bg-white border border-[#a09282]/30 text-xs text-[#2f2e2e]/75">
                <strong>Direktkontakt:</strong> Rufen Sie uns auch gerne direkt unter{' '}
                <a href={`tel:${BUSINESS_CONFIG.phoneRaw}`} className="underline font-semibold">
                  {BUSINESS_CONFIG.phone}
                </a>{' '}
                an.
              </div>
            </div>

            <div className="lg:col-span-7">
              <ContactForm defaultService={service.id} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
