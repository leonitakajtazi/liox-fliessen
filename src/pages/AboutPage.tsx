import { PageHero } from '../components/PageHero';

import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { Link } from '../context/RouterContext';
import { Check, ShieldCheck, Ruler, Sparkles, Phone, ArrowRight } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={`Über Liox Fliesen – Ihr Meisterbetrieb in ${BUSINESS_CONFIG.city}`}
        description={`Lernen Sie Liox Fliesen aus ${BUSINESS_CONFIG.city} kennen: persönliche Beratung, klare Absprachen und sorgfältige Fliesenarbeiten für Ihre Räume.`}
      />

      <PageHero
        image="/images/projects/terrassen-02.webp"
        imageAlt="Geflieste Terrasse mit Übergang zum Garten"
        eyebrow="Über Liox Fliesen"
        title="Ihr Zuhause. Unser Handwerk."
        description="Liox Fliesen ist Ihr Meisterbetrieb in Alzey. Wir gestalten Bäder, Wohnräume und Außenbereiche mit Sorgfalt und einem Blick fürs Detail."
      />

      {/* Philosophy & Approach */}
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
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Unsere Arbeitsweise
              </div>
              <h2 className="text-3xl font-serif text-[#2f2e2e] mb-6">
                Wir nehmen uns Zeit für das, was Ihnen wichtig ist.
              </h2>
              <div className="space-y-4 text-sm text-[#2f2e2e]/80 leading-relaxed mb-8">
                <p>
                  Ein neues Bad, ein schöner Wohnbereich oder eine einladende Terrasse: Hinter jedem Auftrag steht eine persönliche Vorstellung. Wir hören zu, besprechen Ihre Wünsche und finden gemeinsam eine Lösung, die zu Ihren Räumen und Ihrem Alltag passt.
                </p>
                <p>
                  Von der Vorbereitung des Untergrunds bis zur letzten Fuge achten wir auf eine sorgfältige Ausführung. Dabei sind uns klare Absprachen und ein respektvoller Umgang mit Ihrem Zuhause genauso wichtig wie das fertige Ergebnis.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2f2e2e]">
                    <strong>Ehrliche Beratung:</strong> Wir erklären, was zu Ihrem Vorhaben passt, und sprechen mögliche Herausforderungen frühzeitig an.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2f2e2e]">
                    <strong>Sorgfältiges Arbeiten:</strong> Wir achten auf Ihre Räume und eine geordnete Baustelle.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#2f2e2e]">
                    <strong>Klare Absprachen:</strong> Wir stimmen die Arbeitsschritte mit Ihnen ab und halten Sie über den Fortschritt auf dem Laufenden.
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
              Was uns wichtig ist
            </div>
            <h2 className="text-3xl font-serif text-[#2f2e2e] mb-4">
              Gute Arbeit beginnt mit einer guten Zusammenarbeit.
            </h2>
            <p className="text-sm text-[#2f2e2e]/75">
              So gehen wir Ihr Projekt an – vom ersten Gespräch bis zur gemeinsamen Übergabe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between">
              <div>
                <Ruler className="w-8 h-8 text-[#a09282] mb-4" />
                <h3 className="text-lg font-semibold text-[#2f2e2e] mb-2">
                  Durchdachte Gestaltung
                </h3>
                <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                  Wir stimmen Formate, Verlegemuster und Fugen aufeinander ab, damit ein stimmiges Gesamtbild entsteht.
                </p>
              </div>
            </div>

            <div className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-[#a09282] mb-4" />
                <h3 className="text-lg font-semibold text-[#2f2e2e] mb-2">
                  Sorgfältige Vorbereitung
                </h3>
                <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                  Wir prüfen den Untergrund und berücksichtigen die Anforderungen des Raums, bevor die Verlegung beginnt.
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
                  Passende Abschlüsse, saubere Schnitte und ein gleichmäßiges Fugenbild machen für uns den Unterschied.
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
                  Wir besprechen Leistungen und Ablauf verständlich und bleiben während der Umsetzung mit Ihnen im Austausch.
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
            Für Sie in {BUSINESS_CONFIG.city} und Umgebung
          </h2>
          <p className="text-base text-[#2f2e2e]/80 leading-relaxed mb-8">
            Unser Standort ist {BUSINESS_CONFIG.city}. Von hier aus begleiten wir Ihre Fliesenarbeiten in der Region – bei Neubauten ebenso wie bei der Renovierung bestehender Räume. Sprechen Sie uns gerne auf Ihr Vorhaben an.
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
