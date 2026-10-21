import React, { useState } from 'react';
import { PROJECTS, ProjectItem, BUSINESS_CONFIG } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { Link } from '../context/RouterContext';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { Filter, ArrowRight, X, Info, Check } from 'lucide-react';

export function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={`Referenzen & Projekte – Liox Fliessen in ${BUSINESS_CONFIG.city}`}
        description={`Ausgewählte Projektbeispiele: Exklusive Badgestaltungen, Großformatkeramik und Terrassenarbeiten in ${BUSINESS_CONFIG.city} und Umgebung.`}
      />

      {/* Header */}
      <section className="py-16 lg:py-24 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-3">
              Portfolio & Werkstattblick
            </div>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#2f2e2e] mb-6 leading-tight [text-wrap:balance]">
              Ausgewählte Projekte und handwerkliche Ausführungen.
            </h1>
            <p className="text-lg text-[#2f2e2e]/85 leading-relaxed mb-6">
              Verschaffen Sie sich einen Eindruck von unserer Arbeitsweise, sauberen Fugenverläufen und hochwertigen Oberflächen.
            </p>

            {/* Transparent Note regarding verified demo gallery */}
            <div className="p-4 bg-white border border-[#a09282]/30 text-xs text-[#2f2e2e]/75 flex items-start gap-3">
              <Info className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#2f2e2e]">Hinweis zu den Bildnachweisen:</strong> Diese Galerie zeigt beispielhafte architektonische Ausführungsstandards zur Veranschaulichung verschiedener Formate und Kantenverarbeitungen. Verifizierte Kundenprojekte aus {BUSINESS_CONFIG.city} werden nach vorheriger Freigabe der Bauherren laufend ergänzt.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs (Interactive filter tabs allowed per frontend design guidelines) */}
      <section className="py-12 border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: 'Alle Projekte' },
              { id: 'bad', label: 'Bäder & Duschen' },
              { id: 'grossformat', label: 'Großformatfliesen' },
              { id: 'terrasse', label: 'Terrassenbeläge' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 text-xs uppercase tracking-wider font-semibold border transition-colors ${
                  selectedCategory === tab.id
                    ? 'bg-[#2f2e2e] text-[#ece7e1] border-[#2f2e2e]'
                    : 'bg-white text-[#2f2e2e] border-[#a09282]/30 hover:border-[#a09282]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredProjects.map((p) => (
              <div
                key={p.id}
                className="bg-white border border-[#a09282]/30 overflow-hidden flex flex-col justify-between group hover:border-[#a09282] transition-colors"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#2f2e2e] relative overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#2f2e2e]/90 text-[#ece7e1] text-xs font-semibold uppercase tracking-wider px-2.5 py-1 backdrop-blur-sm">
                      {p.categoryLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#2f2e2e] mb-2 group-hover:text-[#a09282] transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-[#2f2e2e]/75 leading-relaxed mb-4">
                      {p.description}
                    </p>

                    <div className="pt-3 border-t border-[#a09282]/20 space-y-1.5 text-xs text-[#2f2e2e]/80">
                      <div>
                        <strong className="text-[#2f2e2e]">Material:</strong> {p.materialsNote}
                      </div>
                      <div>
                        <strong className="text-[#2f2e2e]">Umfang:</strong> {p.scopeNote}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <button
                    type="button"
                    onClick={() => setActiveProjectModal(p)}
                    className="w-full py-2.5 bg-transparent border border-[#2f2e2e] text-[#2f2e2e] text-xs uppercase tracking-wider font-semibold hover:bg-[#2f2e2e] hover:text-[#ece7e1] transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Projektdetails ansehen</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Before/After Demonstration */}
          <div className="bg-white border border-[#a09282]/30 p-8 sm:p-12">
            <div className="max-w-2xl mb-8">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-1">
                Sanierungs-Vergleich
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#2f2e2e] mb-3">
                Direkter Vorher/Nachher-Vergleich
              </h2>
              <p className="text-sm text-[#2f2e2e]/75">
                Verschieben Sie den Trenner, um den Unterschied zwischen einem in die Jahre gekommenen Altbelag und präziser Neuverfliesung zu erkennen.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage="/src/assets/images/bathroom_before_reno_1792601098863.jpg"
              afterImage="/src/assets/images/bathroom_after_reno_1792601119894.jpg"
              beforeAlt="Altes Badezimmer vor der Fliesenmodernisierung"
              afterAlt="Modernisiertes Masterbad mit großformatigen Fliesen von Liox Fliessen"
              beforeLabel="Vorher"
              afterLabel="Nachher"
            />
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 bg-[#2f2e2e]/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#ece7e1] text-[#2f2e2e] max-w-3xl w-full p-6 sm:p-10 border border-[#a09282] shadow-2xl overflow-y-auto max-h-[90vh]">
            <div className="flex items-center justify-between mb-6 border-b border-[#a09282]/30 pb-3">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-[#a09282]">
                  {activeProjectModal.categoryLabel}
                </span>
                <h3 className="text-2xl font-serif text-[#2f2e2e]">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="p-1 hover:text-[#a09282] text-xl font-bold"
                aria-label="Modal schließen"
              >
                ✕
              </button>
            </div>

            <div className="aspect-[16/9] bg-[#2f2e2e] overflow-hidden mb-6 border border-[#a09282]/30">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.imageAlt}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="space-y-4 text-sm text-[#2f2e2e]/85 leading-relaxed mb-6">
              <div>
                <h4 className="font-semibold text-base text-[#2f2e2e] mb-1">Aufgabenstellung & Planung:</h4>
                <p>{activeProjectModal.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-base text-[#2f2e2e] mb-1">Ergebnis & Ausführung:</h4>
                <p>{activeProjectModal.result}</p>
              </div>

              <div className="p-4 bg-white border border-[#a09282]/30 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <strong className="text-[#2f2e2e] block">Verwendetes Material:</strong>
                  <span>{activeProjectModal.materialsNote}</span>
                </div>
                <div>
                  <strong className="text-[#2f2e2e] block">Handwerklicher Umfang:</strong>
                  <span>{activeProjectModal.scopeNote}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-[#a09282]/30">
              <button
                type="button"
                onClick={() => setActiveProjectModal(null)}
                className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-semibold border border-[#a09282] hover:bg-[#a09282]/10"
              >
                Schließen
              </button>
              <Link
                href="/kontakt"
                className="w-full sm:w-auto px-6 py-2.5 text-xs uppercase tracking-wider font-semibold bg-[#2f2e2e] text-[#ece7e1] text-center"
              >
                Ähnliches Projekt anfragen
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Call to action */}
      <section className="py-20 border-t border-[#a09282]/20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif text-[#2f2e2e] mb-4">
            Planen Sie ein eigenes Bauvorhaben?
          </h2>
          <p className="text-sm text-[#2f2e2e]/80 mb-8">
            Gerne prüfen wir Ihre Pläne und beraten Sie persönlich zu passenden Formaten und Verlegearten.
          </p>
          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#2f2e2e] text-[#ece7e1] text-xs font-semibold uppercase tracking-wider border border-[#2f2e2e] hover:bg-[#2f2e2e]/90"
          >
            Jetzt unverbindlich anfragen
          </Link>
        </div>
      </section>
    </div>
  );
}
