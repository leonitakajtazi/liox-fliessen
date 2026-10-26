import { PageHero } from '../components/PageHero';
import React from 'react';
import { BUSINESS_CONFIG, SERVICES } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { ContactForm } from '../components/ContactForm';
import { Phone, Mail, MapPin, Clock, Calendar, CheckCircle, Shield } from 'lucide-react';

export function ContactPage() {
  const requestedService = new URLSearchParams(window.location.search).get('service');
  const defaultService = SERVICES.some((service) => service.id === requestedService)
    ? requestedService!
    : undefined;
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e]">
      <SeoMeta
        title={`Kontakt & Angebot anfordern – Liox Fliessen in ${BUSINESS_CONFIG.city}`}
        description={`Fordern Sie Ihr unverbindliches Angebot für Fliesenarbeiten, Badsanierung oder Terrassenverlegung in ${BUSINESS_CONFIG.city} und Umgebung an.`}
      />

      <PageHero
        image="/images/projects/baeder-03.webp"
        imageAlt="Badezimmer mit grauen Fliesen und Glasdusche"
        eyebrow="Kontakt & Beratung"
        title="Ihr Projekt beginnt mit einem Gespräch."
        description="Erzählen Sie uns von Ihrer Idee. Wir beraten Sie persönlich und unverbindlich."
      />

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Contact Info & Direct Links */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-serif text-[#2f2e2e] mb-6">
                  Direkte Kontaktaufnahme
                </h2>

                <div className="space-y-6 mb-10">
                  <div className="p-6 bg-white border border-[#a09282]/30">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#ece7e1] text-[#2f2e2e]">
                        <Phone className="w-5 h-5 text-[#a09282]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-1">
                          Telefon & Rückfragen
                        </div>
                        <a
                          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                          className="text-lg font-semibold text-[#2f2e2e] hover:text-[#a09282] transition-colors tabular-nums block"
                        >
                          {BUSINESS_CONFIG.phone}
                        </a>
                        <div className="text-xs text-[#2f2e2e]/75 mt-1">
                          Erreichbar: {BUSINESS_CONFIG.businessHours}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white border border-[#a09282]/30">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#ece7e1] text-[#2f2e2e]">
                        <Mail className="w-5 h-5 text-[#a09282]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-1">
                          E-Mail für Baupläne & Anfragen
                        </div>
                        <a
                          href={`mailto:${BUSINESS_CONFIG.email}`}
                          className="text-base font-semibold text-[#2f2e2e] hover:text-[#a09282] transition-colors block break-all"
                        >
                          {BUSINESS_CONFIG.email}
                        </a>
                        <div className="text-xs text-[#2f2e2e]/75 mt-1">
                          Gerne können Sie uns Pläne und Maßskizzen vorab per E-Mail zusenden.
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 bg-white border border-[#a09282]/30">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-[#ece7e1] text-[#2f2e2e]">
                        <MapPin className="w-5 h-5 text-[#a09282]" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-1">
                          Geschäftsadresse & Standort
                        </div>
                        <div className="text-sm font-semibold text-[#2f2e2e]">
                          {BUSINESS_CONFIG.brandName}
                        </div>
                        <div className="text-sm text-[#2f2e2e]/80">
                          {BUSINESS_CONFIG.address}
                        </div>
                        <div className="text-xs text-[#2f2e2e]/75 mt-1">
                          Standort: {BUSINESS_CONFIG.city}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-[#2f2e2e] text-[#ece7e1] border border-[#a09282]/40">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#a09282] mb-2">
                    Einsatzgebiet & Vor-Ort-Termine
                  </div>
                  <p className="text-sm text-[#ece7e1]/85 leading-relaxed mb-3">
                    Wir führen Verlegearbeiten im gesamten Raum <strong>{BUSINESS_CONFIG.serviceArea}</strong> durch.
                  </p>
                  <p className="text-xs text-[#ece7e1]/70">
                    Eine Vor-Ort-Besichtigung zur genauen Vermessung und Untergrundbegutachtung ist nach Absprache möglich.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Full Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm key={defaultService || 'sonstiges'} defaultService={defaultService} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
