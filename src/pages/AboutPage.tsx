import React from 'react';
import { PageHero } from '../components/PageHero';
import { BUSINESS_CONFIG } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { Link } from '../context/RouterContext';
import { Check } from 'lucide-react';

const services = [
  'Hochwertige Fliesen- und Natursteinarbeiten',
  'Moderne Badgestaltung und Badsanierung',
  'Großformatige Fliesen und XXL-Formate',
  'Fachgerechte Abdichtungsarbeiten',
  'Balkon- und Terrassenbeläge',
  'Individuelle Fliesenlösungen für Neubau und Sanierung',
];

export function AboutPage() {
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={`Über Liox Fliesen – Ihr Meisterbetrieb in ${BUSINESS_CONFIG.city}`}
        description="Über 10 Jahre Berufserfahrung und mehr als 100 erfolgreich abgeschlossene Projekte: LIOX Fliesen ist Ihr Meisterbetrieb für hochwertige Fliesenarbeiten in Alzey und Umgebung."
      />

      <PageHero
        image="/images/projects/terrassen-02.webp"
        imageAlt="Geflieste Terrasse mit Übergang zum Garten"
        eyebrow="Über Liox Fliesen"
        title="LIOX FLIESEN – Handwerk mit Leidenschaft. Qualität mit Meisteranspruch."
        description="Über 10 Jahre Berufserfahrung. Mehr als 100 erfolgreich abgeschlossene Projekte. Ein Anspruch: Perfektion bis ins kleinste Detail."
      />

      <section aria-label="LIOX Fliesen in Zahlen" className="bg-[#ece7e1] border-b border-[#a09282]/20 py-6 sm:py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="grid grid-cols-3 divide-x divide-[#a09282]/30">
            {[
              { value: '10+', label: 'Jahre Berufserfahrung' },
              { value: '100+', label: 'Erfolgreiche Projekte' },
              { value: '100 %', label: 'Meisteranspruch' },
            ].map((stat) => (
              <div key={stat.label} className="px-2 sm:px-6 py-2 text-center flex flex-col items-center gap-2">
                <dt className="order-2 max-w-[10rem] text-[10px] sm:text-xs leading-relaxed text-[#2f2e2e]/75">{stat.label}</dt>
                <dd className="order-1 text-2xl sm:text-3xl font-serif leading-none text-[#2f2e2e] tabular-nums whitespace-nowrap">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-20 border-b border-[#a09282]/20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-[#2f2e2e] overflow-hidden">
                <img
                  src="/images/projects/balkone-01.webp"
                  alt="Anthrazitfarbene Balkonfliesen entlang der Hausfassade"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="space-y-5 text-sm text-[#2f2e2e]/80 leading-relaxed">
                <p className="text-lg font-semibold text-[#2f2e2e]">
                  LIOX Fliesen ist Ihr zuverlässiger Meisterbetrieb für hochwertige Fliesenarbeiten, moderne Badgestaltung und individuelle Fliesenlösungen in Alzey und Umgebung.
                </p>
                <p>
                  Hinter unserem Unternehmen stehen langjährige Erfahrung, fundiertes Fachwissen und die Leidenschaft für präzises Handwerk. Als inhabergeführter Meisterbetrieb verbinden wir traditionelle Handwerkskunst mit modernen Verlegetechniken, hochwertigen Materialien und einem besonderen Gespür für Ästhetik und Design.
                </p>
                <p>
                  Ob exklusive Badsanierung, großformatige Fliesen, anspruchsvolle Natursteinarbeiten oder individuelle Gestaltungskonzepte – jedes Projekt wird mit höchster Sorgfalt, fachlicher Kompetenz und Liebe zum Detail umgesetzt.
                </p>
                <p>
                  Dabei legen wir besonderen Wert auf eine persönliche Beratung, transparente Kommunikation, zuverlässige Planung und eine saubere, termingerechte Ausführung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div>
          <h2 className="text-3xl font-serif text-[#2f2e2e] mb-6">
            Erfahrung, die Vertrauen schafft.
          </h2>
          <div className="space-y-4 text-base text-[#2f2e2e]/80 leading-relaxed">
            <p>
              Mit über 10 Jahren Berufserfahrung und mehr als 100 erfolgreich abgeschlossenen Projekten wissen wir, worauf es bei hochwertigen Fliesenarbeiten ankommt.
            </p>
            <p>
              Unser Ziel ist es, nicht einfach nur Fliesen zu verlegen, sondern Räume zu gestalten, die durch Qualität, Funktionalität und zeitlose Eleganz überzeugen.
            </p>
          </div>
          </div>
          <div className="overflow-hidden border border-[#a09282]/20">
            <img src="/images/projects/baeder-03.webp" alt="Helles Badezimmer mit großformatigen grauen Fliesen, Glasdusche und Holzwaschtisch" width={1600} height={1200} loading="lazy" decoding="async" className="w-full aspect-[4/3] lg:aspect-[3/2] object-cover object-center" />
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20 bg-white border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 overflow-hidden border border-[#a09282]/20">
            <img src="/images/projects/baeder-05.webp" alt="Individuelle Badgestaltung mit Doppelwaschtisch, beleuchtetem Spiegel und Terrazzo-Fliesen" width={1200} height={1600} loading="lazy" decoding="async" className="w-full aspect-[4/3] lg:aspect-square object-cover" />
          </div>
          <div className="order-1 lg:order-2">
          <h2 className="text-3xl font-serif text-[#2f2e2e] mb-6">Unsere Philosophie</h2>
          <div className="space-y-5 text-base text-[#2f2e2e]/80 leading-relaxed">
            <p className="text-lg font-semibold text-[#2f2e2e]">
              Qualität ist für uns kein Versprechen, sondern unser täglicher Anspruch.
            </p>
            <p>
              Jedes Zuhause ist einzigartig. Deshalb nehmen wir uns Zeit für Ihre Wünsche und entwickeln individuelle Lösungen, die perfekt zu Ihren Vorstellungen passen.
            </p>
            <p>
              Von der ersten Beratung über die sorgfältige Vorbereitung bis zur letzten Fuge stehen Präzision, Zuverlässigkeit und Kundenzufriedenheit bei uns an erster Stelle.
            </p>
            <p className="font-semibold text-[#2f2e2e]">
              LIOX FLIESEN – Ihr Meisterbetrieb für Qualität, die man sieht und spürt.
            </p>
          </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif text-[#2f2e2e] mb-10">Unsere Leistungen auf einen Blick</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
            {services.map((service) => (
              <li key={service} className="bg-white border border-[#a09282]/30 p-6 flex items-start gap-3">
                <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" aria-hidden="true" />
                <span className="text-sm leading-relaxed">{service}</span>
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
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
