import React from 'react';
import { SERVICES, BUSINESS_CONFIG } from '../config/business';
import { Link } from '../context/RouterContext';
import { SeoMeta } from '../components/SeoMeta';
import { ContactForm } from '../components/ContactForm';
import { ArrowRight, Check, Shield, Layers, Hammer, Sparkles } from 'lucide-react';

export function ServicesOverviewPage() {
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={`Fliesenarbeiten & Leistungen in ${BUSINESS_CONFIG.city} – Liox Fliessen`}
        description={`Alle Leistungen im Überblick: Fachgerechte Fliesenverlegung, moderne Badfliesen, Großformatfliesen und Terrassenplatten in ${BUSINESS_CONFIG.city} und Umgebung.`}
      />

      {/* Header Banner */}
      <section className="py-16 lg:py-24 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-3">
              Leistungsspektrum & Handwerksstandards
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#2f2e2e] mb-6 leading-tight [text-wrap:balance]">
              Präzise Handwerksleistungen für private und gewerbliche Bauherren.
            </h1>
            <p className="text-lg text-[#2f2e2e]/85 leading-relaxed">
              Vom millimetergenau eingemessenen Wohnzimmerboden bis zur anspruchsvollen Badsanierung nach DIN 18534: Entdecken Sie unsere spezialisierten Leistungsbereiche.
            </p>
          </div>
        </div>
      </section>

      {/* Detailed Services Grid */}
      <section className="py-20 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white border border-[#a09282]/30 p-8 sm:p-12 shadow-sm"
              >
                <div className={`lg:col-span-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="aspect-[4/3] bg-[#2f2e2e] relative overflow-hidden border border-[#a09282]/20">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-4 left-4 bg-[#2f2e2e]/90 text-[#ece7e1] text-xs font-semibold uppercase tracking-wider px-3 py-1">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-6 flex flex-col justify-between ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-2">
                      {service.kicker}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-serif text-[#2f2e2e] mb-4">
                      {service.title}
                    </h2>
                    <p className="text-sm text-[#2f2e2e]/75 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {service.benefits.slice(0, 4).map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#2f2e2e]/85">
                          <Check className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4 border-t border-[#a09282]/20">
                    <Link
                      href={`/leistungen/${service.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#2f2e2e] text-[#ece7e1] text-xs font-semibold uppercase tracking-wider border border-[#2f2e2e] hover:bg-[#2f2e2e]/90 transition-colors"
                    >
                      <span>Leistungsseite aufrufen</span>
                      <ArrowRight className="w-4 h-4 text-[#a09282]" />
                    </Link>
                    <Link
                      href={`/kontakt?service=${service.id}`}
                      className="inline-flex items-center justify-center px-6 py-3 bg-transparent text-[#2f2e2e] text-xs font-semibold uppercase tracking-wider border border-[#a09282] hover:bg-[#a09282]/10 transition-colors"
                    >
                      Angebot anfordern
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning & Quality Standards Guide */}
      <section className="py-20 border-b border-[#a09282]/20 bg-[#ece7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
              Fachwissen & Beratung
            </div>
            <h2 className="text-3xl font-serif text-[#2f2e2e] mb-4">
              Wichtige Planungsgrundlagen für Ihr Bauvorhaben
            </h2>
            <p className="text-sm text-[#2f2e2e]/80 leading-relaxed">
              Vor dem ersten Spachtelzug müssen Untergrundbeschaffenheit, Raumfeuchte, Dehnungsfugen und Lastabtragungen exakt geprüft werden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-[#a09282]/30 p-8">
              <Layers className="w-8 h-8 text-[#a09282] mb-4" />
              <h3 className="text-lg font-semibold text-[#2f2e2e] mb-3">
                Untergrund & Nivellierung
              </h3>
              <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                Große Fliesen verzeihen keine Estrichunebenheiten. Wir kontrollieren die Ebenheit nach DIN 18202 und gleichen Höhenunterschiede mit faserverstärkten Spachtelmassen aus.
              </p>
            </div>

            <div className="bg-white border border-[#a09282]/30 p-8">
              <Shield className="w-8 h-8 text-[#a09282] mb-4" />
              <h3 className="text-lg font-semibold text-[#2f2e2e] mb-3">
                Verbundabdichtung DIN 18534
              </h3>
              <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                In Duschen und Bädern ist ein mehrlagiges Dichtsystem unerlässlich. Dichtmanschetten um Rohrdurchführungen und Eckdichtbänder garantieren absoluten Feuchteschutz der Bausubstanz.
              </p>
            </div>

            <div className="bg-white border border-[#a09282]/30 p-8">
              <Hammer className="w-8 h-8 text-[#a09282] mb-4" />
              <h3 className="text-lg font-semibold text-[#2f2e2e] mb-3">
                Buttering-Floating-Verfahren
              </h3>
              <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                Der Fliesenkleber wird sowohl auf den Untergrund als auch auf die Fliesenrückseite aufgetragen. Dies verhindert Hohlräume und schützt vor Plattenbruch bei Punktlasten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-serif text-[#2f2e2e] mb-4">
                Welches Vorhaben planen Sie?
              </h2>
              <p className="text-sm text-[#2f2e2e]/80 leading-relaxed mb-6">
                Teilen Sie uns Ihre Wünsche mit. Wir beraten Sie herstellerunabhängig und erstellen ein transparentes, detailliert kalkuliertes Angebot.
              </p>
              <div className="p-4 bg-white border border-[#a09282]/30 text-xs text-[#2f2e2e]/75">
                <strong>Vor-Ort-Besichtigung:</strong> Im Stadtgebiet von {BUSINESS_CONFIG.city} und {BUSINESS_CONFIG.serviceArea} führen wir die Erstbesichtigung nach Absprache gerne kostenfrei durch.
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm defaultService="fliesenverlegung" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
