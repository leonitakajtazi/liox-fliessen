import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { Link } from '../context/RouterContext';
import { Check, ShieldCheck, Ruler, Sparkles, Phone, ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={`Über uns & Philosophie – Liox Fliessen in ${BUSINESS_CONFIG.city}`}
        description={`Handwerkliche Sorgfalt, präzise Planung und Respekt vor der Bausubstanz. Erfahren Sie mehr über Liox Fliessen in ${BUSINESS_CONFIG.city} und Umgebung.`}
      />

      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-3">
              Handwerk aus Überzeugung
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#2f2e2e] mb-6 leading-tight [text-wrap:balance]">
              Präzision im Detail. Respekt vor Raum und Material.
            </h1>
            <p className="text-lg text-[#2f2e2e]/85 leading-relaxed">
              Bei Liox Fliessen verstehen wir unser Handwerk als Zusammenspiel aus akribischer Vorbereitung, moderner Werkzeugtechnik und dem geschulten Auge für harmonische Raumfluchten.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy & Approach */}
      <section className="py-20 border-b border-[#a09282]/20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-[#2f2e2e] border border-[#a09282]/30 overflow-hidden shadow-sm">
                <img
                  src="/src/assets/images/craftsmanship_detail_1792594035805.jpg"
                  alt="Akkurate handwerkliche Fliesenbearbeitung im Detail"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Unsere Arbeitsweise
              </div>
              <h2 className="text-3xl font-serif text-[#2f2e2e] mb-6">
                Warum gute Fliesenarbeiten bereits beim Estrich beginnen.
              </h2>
              <div className="space-y-4 text-sm text-[#2f2e2e]/80 leading-relaxed mb-8">
                <p>
                  Viele Bauherren achten zunächst nur auf das Fliesenmuster oder die Oberflächenfarbe. Doch die eigentliche Langlebigkeit eines Belags entscheidet sich im Verborgenen: bei der Prüfung von Restfeuchte, der Rissverharzung, der Ebenheit des Untergrunds und der lückenlosen Verbundabdichtung.
                </p>
                <p>
                  Wir nehmen uns die nötige Zeit für die Vorbereitung, messen Achsen exakt ein, um unschöne Randstreifen zu vermeiden, und schneiden Kanten dort auf Gehrung, wo andere zu simplen Plastikschienen greifen.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2f2e2e]">
                    <strong>Keine Scheinlösungen:</strong> Was technisch nicht dauerhaft hält, wird von uns offen angesprochen und fachgerecht gelöst.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2f2e2e]">
                    <strong>Staubschutz & Sauberkeit:</strong> Sorgfältiges Abkleben von Laufwegen und Staubschutztüren während der Ausführung.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2f2e2e]">
                    <strong>Verlässliche Termine:</strong> Vereinbarte Arbeitsphasen und Meilensteine werden gewissenhaft eingehalten.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars of Quality */}
      <section className="py-20 border-b border-[#a09282]/20 bg-[#ece7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
              Qualitätsversprechen
            </div>
            <h2 className="text-3xl font-serif text-[#2f2e2e] mb-4">
              Vier feste Grundsätze für jede Baustelle
            </h2>
            <p className="text-sm text-[#2f2e2e]/75">
              Ohne künstliche Werbeversprechen, sondern messbar am fertigen Gewerk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between">
              <div>
                <Ruler className="w-8 h-8 text-[#a09282] mb-4" />
                <h3 className="text-lg font-semibold text-[#2f2e2e] mb-2">
                  Planheit & Symmetrie
                </h3>
                <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                  Präzise Achsausrichtung vor dem ersten Schnitt und Einsatz von Zuglaschen-Nivelliersystemen gegen störende Überzähne.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-[#a09282] mb-4" />
                <h3 className="text-lg font-semibold text-[#2f2e2e] mb-2">
                  DIN-Normen & Feuchteschutz
                </h3>
                <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                  Strikte Ausführung nach DIN 18534 (Innenraumabdichtung) und DIN 18202 (Toleranzen im Hochbau) mit zugelassenen Systemkomponenten.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between">
              <div>
                <Sparkles className="w-8 h-8 text-[#a09282] mb-4" />
                <h3 className="text-lg font-semibold text-[#2f2e2e] mb-2">
                  Gehrungen & Kanten
                </h3>
                <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                  Nassschnitt und 45°-Gehrungsschliff für architektonisch nahtlose Kanten an Wandnischen und Außenecken.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between">
              <div>
                <Check className="w-8 h-8 text-[#a09282] mb-4" />
                <h3 className="text-lg font-semibold text-[#2f2e2e] mb-2">
                  Klare Kommunikation
                </h3>
                <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                  Detaillierte Angebote ohne versteckte Posten, verlässliche Absprachen und eine persönliche Betreuung von Anfang bis Ende.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Team Note */}
      <section className="py-20 bg-white border-b border-[#a09282]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
            Regionaler Fachbetrieb
          </div>
          <h2 className="text-3xl font-serif text-[#2f2e2e] mb-6">
            Verwurzelt in {BUSINESS_CONFIG.city} und der Region
          </h2>
          <p className="text-base text-[#2f2e2e]/80 leading-relaxed mb-8">
            Wir betreuen Bauprojekte in {BUSINESS_CONFIG.serviceArea}. Kurze Anfahrtswege ermöglichen uns flexible Besichtigungstermine und eine enge Begleitung während der gesamten Bauphase.
          </p>

          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/kontakt"
              className="px-8 py-4 bg-[#2f2e2e] text-[#ece7e1] text-xs uppercase tracking-wider font-semibold"
            >
              Projekt unverbindlich anfragen
            </Link>
            <Link
              href="/leistungen"
              className="px-8 py-4 border border-[#a09282] text-[#2f2e2e] text-xs uppercase tracking-wider font-semibold hover:bg-[#a09282]/10"
            >
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
