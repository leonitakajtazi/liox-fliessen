import { FaqItem } from '../components/FaqItem';
import materialImage from '../assets/images/service_large_format_1792594035315.webp';
import bundledImage0 from '../assets/images/hero_liox_tiles_1792594033003.webp';
import React, { useRef, useEffect } from 'react';
import { Link } from '../context/RouterContext';
import { BUSINESS_CONFIG, SERVICES, WORK_PROCESS, GENERAL_FAQS, PROJECTS } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { ContactForm } from '../components/ContactForm';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { ArrowRight, Check, Shield, Layers, Compass, Ruler, Sparkles, Phone, HelpCircle, MapPin } from 'lucide-react';

export function HomePage() {
  const videoRef = useRef<HTMLVideoElement>(null);


  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    video.play().catch(() => {});
  }, []);

  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title="Liox Fliessen – Präzise Fliesenverlegung & Handwerk"
        description={`Fliesenarbeiten für anspruchsvolle Wohn- und Geschäftsräume in ${BUSINESS_CONFIG.city} und Umgebung. Meisterhafte Fliesenverlegung, Badfliesen & Großformat.`}
      />

      {/* ---------------------------------------------------- */}
      {/* 1. Hero Section with Looping Background Video (Muted)*/}
      {/* ---------------------------------------------------- */}
      <section className="hero-surface relative overflow-hidden min-h-[520px] sm:min-h-[600px] lg:min-h-[720px] flex items-center bg-[#2f2e2e]">
        {/* Background Video Layer - Optimized for Mobile & Desktop */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            ref={videoRef}
            src="/assets/aistudio/gemini_generated_video_e6a6855f_7090bfd6.mp4"
            autoPlay
            preload="metadata"
            loop
            muted
            playsInline
            poster={bundledImage0}
            className="w-full h-full object-cover object-[62%_center] sm:object-center scale-100"
            aria-hidden="true"
          >
          </video>

          {/* Balanced cinematic scrim: soft on mobile, directional on desktop */}
          <div className="absolute inset-0 bg-[#2f2e2e]/30 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b sm:bg-gradient-to-r from-[#2f2e2e]/75 via-[#2f2e2e]/35 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#ece7e1] via-[#ece7e1]/20 to-transparent pointer-events-none" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Column (7 cols on desktop, full width on mobile) */}
            <div data-reveal-sequence className="lg:col-span-7 flex flex-col justify-center">
              {/* Hero introduction */}
              <div className="flex items-center justify-between gap-2 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#a09282]">
                  <span className="w-2 h-2 bg-[#a09282] animate-pulse"></span>
                  <span>Handwerkliche Präzision</span>
                  <span aria-hidden="true" className="hidden sm:inline">·</span>
                  <span className="hidden sm:inline">{BUSINESS_CONFIG.city} & Umgebung</span>
                </div>


              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif tracking-tight text-[#ece7e1] leading-[1.12] mb-4 sm:mb-6 [text-wrap:balance] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]">
                Präzise verlegt. <br />
                <span className="italic font-normal text-[#a09282]">Zeitlos schön.</span>
              </h1>

              <p className="text-sm sm:text-lg lg:text-xl text-[#ece7e1] leading-relaxed max-w-2xl mb-6 sm:mb-8 drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
                Fliesenarbeiten für anspruchsvolle Wohn- und Geschäftsräume in{' '}
                <strong className="font-semibold text-white">{BUSINESS_CONFIG.city}</strong> und Umgebung. Von modernen Bädern bis zu fugenarmen Großformaten.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#ece7e1] text-[#2f2e2e] text-xs font-semibold uppercase tracking-wider border border-[#ece7e1] hover:bg-[#a09282] hover:text-[#ece7e1] hover:border-[#a09282] active:bg-[#ece7e1] transition-[background-color,color,border-color,box-shadow] duration-500 ease-in-out hover:shadow-xl text-center shadow-lg"
                >
                  Unverbindliches Angebot anfordern
                </Link>

                <Link
                  href="/leistungen"
                  className="inline-flex items-center justify-center px-6 sm:px-8 py-3.5 sm:py-4 bg-[#2f2e2e]/50 backdrop-blur-sm text-[#ece7e1] text-xs font-semibold uppercase tracking-wider border border-[#a09282] hover:bg-[#a09282]/30 transition-[background-color,color,border-color,box-shadow] duration-500 ease-in-out hover:shadow-lg text-center group shadow-md"
                >
                  <span>Leistungen entdecken</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-500 ease-in-out text-[#a09282]" />
                </Link>
              </div>

              {/* Trust markers */}
              <div className="pt-4 sm:pt-6 border-t border-[#a09282]/40 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 text-xs text-[#ece7e1] drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)]">
                <div>
                  <div className="font-semibold text-white text-sm">DIN 18534</div>
                  <div className="text-[#ece7e1]/85">Fachgerechte Badabdichtung</div>
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">Nivelliersystem</div>
                  <div className="text-[#ece7e1]/85">Garantierte Planheit</div>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <div className="font-semibold text-white text-sm">Staubschutz</div>
                  <div className="text-[#ece7e1]/85">Saubere Baustellenführung</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 2. Introduction Section                              */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#ece7e1] border-b border-[#a09282]/20">
        <div data-reveal-sequence className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-3">
            Über Liox Fliessen
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e] mb-8 leading-snug [text-wrap:balance]">
            Präzises Handwerk. Dauerhafte Qualität.
          </h2>
          <div className="max-w-2xl mx-auto text-base sm:text-lg text-[#2f2e2e]/80 leading-relaxed text-center">
            <p>
              <strong className="font-semibold text-[#2f2e2e]">Liox Fliessen</strong> steht für sorgfältige Vorbereitung, exakte Verlegung und saubere Ergebnisse. Mit moderner Technik und Liebe zum Detail schaffen wir langlebige Flächen für Ihr Zuhause und Gewerbe.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 3. Confirmed Services (Bento Grid)                   */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#ece7e1] border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Leistungsspektrum
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e]">
                Unsere Kernkompetenzen
              </h2>
            </div>
            <Link
              href="/leistungen"
              className="text-xs font-semibold uppercase tracking-wider text-[#2f2e2e] hover:text-[#a09282] transition-colors flex items-center gap-1.5"
            >
              <span>Alle Leistungen ansehen</span>
              <ArrowRight className="w-4 h-4 text-[#a09282]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="bg-white border border-[#a09282]/30 flex flex-col justify-between group hover:border-[#a09282] transition-colors duration-300"
              >
                <div className="aspect-[16/10] overflow-hidden bg-[#2f2e2e] relative">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover card-image-zoom"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-[#2f2e2e]/90 text-[#ece7e1] text-xs font-semibold uppercase tracking-wider px-3 py-1 backdrop-blur-sm">
                    0{index + 1} · {service.shortTitle}
                  </div>
                </div>

                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-2">
                      {service.kicker}
                    </div>
                    <h3 className="text-2xl font-serif text-[#2f2e2e] mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-[#2f2e2e]/75 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="space-y-2 mb-8">
                      {service.benefits.slice(0, 3).map((benefit, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#2f2e2e]/85">
                          <Check className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#a09282]/20 flex items-center justify-between">
                    <Link
                      href={`/leistungen#${service.slug}`}
                      className="text-xs font-semibold uppercase tracking-wider text-[#2f2e2e] group-hover:text-[#a09282] transition-colors flex items-center gap-2"
                    >
                      <span>Leistungsdetails & Ablauf</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 4. Featured Work & Craftsmanship Demonstration       */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#ece7e1] border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Referenzen & Ausführungsbeispiele
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e]">
                Einblick in unsere Verlegequalität
              </h2>
            </div>
            <div className="text-xs text-[#2f2e2e]/75 max-w-sm">
              Demonstrations-Galerie architektonischer Verlegungen. Gerne zeigen wir Ihnen im persönlichen Gespräch weitere Details.
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className="bg-white border border-[#a09282]/30 overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[4/3] bg-[#2f2e2e] relative overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.imageAlt}
                      className="w-full h-full object-cover card-image-zoom"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 bg-[#2f2e2e]/90 text-[#ece7e1] text-xs font-semibold uppercase tracking-wider px-2.5 py-1">
                      {proj.categoryLabel}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-serif text-[#2f2e2e] mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-[#2f2e2e]/70 leading-relaxed mb-4">
                      {proj.description}
                    </p>

                    <div className="pt-3 border-t border-[#a09282]/20 space-y-1.5 text-xs text-[#2f2e2e]/80">
                      <div>
                        <strong className="text-[#2f2e2e]">Material:</strong> {proj.materialsNote}
                      </div>
                      <div>
                        <strong className="text-[#2f2e2e]">Umfang:</strong> {proj.scopeNote}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Before/After Demonstration */}
          <div className="bg-white border border-[#a09282]/30 p-6 sm:p-10">
            <div className="max-w-2xl mb-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-1">
                Interaktiver Vergleich
              </div>
              <h3 className="text-2xl font-serif text-[#2f2e2e] mb-2">
                Vorher & Nachher: Verwandlung durch Meisterhand
              </h3>
              <p className="text-xs sm:text-sm text-[#2f2e2e]/75">
                Ziehen Sie den mittleren Schieberegler nach links und rechts, um die Wirkung präziser, fugenarmer Fliesenverlegung im direkten Vergleich zu sehen.
              </p>
            </div>

            <BeforeAfterSlider
              beforeImage='/images/8.webp'
              afterImage='/images/9.webp'
              beforeAlt="Badezimmer vor der Sanierung"
              afterAlt="Badezimmer nach der Sanierung mit exklusiven großformatigen Kalksteinfliesen von Liox Fliessen"
              beforeLabel="Vorher"
              afterLabel="Nachher"
            />
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 5. Process: 4 Clear Steps                            */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#ece7e1] border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
              Verlässlicher Projektablauf
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e] mb-4">
              In vier Schritten zu Ihrem Wunschbelag
            </h2>
            <p className="text-sm text-[#2f2e2e]/75">
              Transparente Kommunikation und eine verbindliche Organisation schützen vor unliebsamen Überraschungen und Verzögerungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORK_PROCESS.map((p) => (
              <div
                key={p.step}
                className="bg-white border border-[#a09282]/30 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="font-mono text-2xl font-bold text-[#a09282] mb-4">
                    {p.step}
                  </div>
                  <h3 className="text-lg font-semibold text-[#2f2e2e] mb-2">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#2f2e2e]/75 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 6. Materials & Details Section                       */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#ece7e1] border-b border-[#a09282]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6">
              <div className="aspect-[4/3] bg-[#2f2e2e] overflow-hidden">
                <img
                  src={materialImage}
                  alt="Heller Wohnbereich mit großformatigen Natursteinfliesen und feinen Fugen"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
                Materialien & Details
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e] mb-6">
                Perfektion zeigt sich an den Kanten und Fugen.
              </h2>
              <div className="space-y-4 text-sm text-[#2f2e2e]/80 leading-relaxed mb-8">
                <p>
                  Ob schmale Haarfugen ab 1,5 mm, exakt auf Gehrung geschliffene Fliesenkanten (Jolly-Schnitt) oder der lückenlose Hohlraumschutz im Dünnbettverfahren: Es sind die scheinbar unscheinbaren handwerklichen Details, die den Unterschied zwischen einem gewöhnlichen Belag und meisterhafter Verlegung ausmachen.
                </p>
                <p>
                  Wir arbeiten ausschließlich mit geprüften Systemklebern nach DIN EN 12004 und hochwertigen, farbbeständigen Fugenmörteln führender deutscher Bauchemie-Hersteller.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="group relative overflow-hidden rounded-xl bg-[#2f2e2e] p-6 text-[#ece7e1] shadow-sm transition-shadow duration-500 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#a09282]/20 text-[#d4c4b1]">
                      <Ruler className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="text-3xl font-serif text-[#d4c4b1]">45°</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug mb-2">Gehrungskanten <span className="block text-sm font-sans text-[#d4c4b1] mt-1">Jolly-Schnitt</span></h3>
                  <p className="text-xs leading-relaxed text-[#ece7e1]/80">Präziser Schliff im 45°-Winkel für elegante Kanten ohne sichtbare Schienen.</p>
                  <div className="mt-5 pt-4 border-t border-[#ece7e1]/15 text-[10px] uppercase tracking-widest text-[#d4c4b1]">Feine Kanten. Klare Linien.</div>
                </div>
                <div className="group relative overflow-hidden rounded-xl bg-[#f6f3ef] p-6 ring-1 ring-inset ring-[#a09282]/25 shadow-sm transition-shadow duration-500 hover:shadow-lg">
                  <div className="flex items-center justify-between mb-6">
                    <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#a09282]/15 text-[#756451]">
                      <Layers className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[#756451]">Starker Verbund</span>
                  </div>
                  <h3 className="font-serif text-xl leading-snug mb-2">Buttering-Floating <span className="block text-sm font-sans text-[#756451] mt-1">Doppelte Kleberauftragung</span></h3>
                  <p className="text-xs leading-relaxed text-[#2f2e2e]/80">Kleber auf Untergrund und Fliesenrückseite für eine hohlraumfreie, belastbare Verlegung.</p>
                  <div className="mt-5 pt-4 border-t border-[#a09282]/25 text-[10px] uppercase tracking-widest text-[#756451]">Sicherer Halt. Dauerhafte Qualität.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 7. Frequently Asked Questions (FAQ)                  */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#ece7e1] border-b border-[#a09282]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
              Häufige Fragen
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e] mb-4">
              Wissenswertes zu Ihrer Fliesenverlegung
            </h2>
            <p className="text-sm text-[#2f2e2e]/75">
              Hier finden Sie sachliche Antworten auf die wichtigsten Fragen zur Vorbereitung und Beauftragung.
            </p>
          </div>

          <div className="space-y-4">
            {GENERAL_FAQS.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* 8. Final Contact Section                             */}
      {/* ---------------------------------------------------- */}
      <section className="py-20 lg:py-28 bg-[#ece7e1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-3">
                Persönliche Beratung
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e] mb-6 leading-tight">
                Lassen Sie uns Ihr Projekt besprechen.
              </h2>
              <p className="text-base text-[#2f2e2e]/80 leading-relaxed mb-8">
                Ganz gleich, ob Sie ein konkretes Bauvorhaben planen oder eine erste fachliche Einschätzung zu Formaten und Untergründen wünschen: Wir stehen Ihnen gerne beratend zur Seite.
              </p>

              <div className="space-y-4 text-sm text-[#2f2e2e] mb-8">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs text-[#2f2e2e]/75">Telefonischer Direktkontakt:</div>
                    <a
                      href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                      className="font-semibold text-base hover:text-[#a09282] transition-colors tabular-nums"
                    >
                      {BUSINESS_CONFIG.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="text-xs text-[#2f2e2e]/75 w-5 text-center font-bold text-[#a09282]">@</div>
                  <div>
                    <div className="text-xs text-[#2f2e2e]/75">E-Mail für Pläne & Unterlagen:</div>
                    <a
                      href={`mailto:${BUSINESS_CONFIG.email}`}
                      className="font-semibold text-base hover:text-[#a09282] transition-colors"
                    >
                      {BUSINESS_CONFIG.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-xl bg-[#f6f3ef] p-6 sm:p-7 ring-1 ring-inset ring-[#a09282]/20">
                <div className="absolute inset-y-6 left-0 w-[3px] rounded-r-full bg-[#a09282]" aria-hidden="true" />
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#a09282]/15 text-[#756451]">
                    <MapPin className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-serif text-xl text-[#2f2e2e] mb-2">Standort & Einsatzbereich</h3>
                    <p className="text-sm leading-relaxed text-[#2f2e2e]/80 break-words">{BUSINESS_CONFIG.address}</p>
                    <div className="mt-4 pt-3 border-t border-[#a09282]/25">
                      <span className="block text-[10px] uppercase tracking-widest font-semibold text-[#756451] mb-1">Für Sie vor Ort</span>
                      <p className="text-xs leading-relaxed text-[#2f2e2e]/80 break-words">{BUSINESS_CONFIG.serviceArea}</p>
                    </div>
                  </div>
                </div>
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
