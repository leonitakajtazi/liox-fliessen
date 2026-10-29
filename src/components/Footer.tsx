import React from 'react';
import { Link } from '../context/RouterContext';
import { BUSINESS_CONFIG, SERVICES } from '../config/business';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export function Footer() {


  return (
    <>
      <footer className="bg-[#2f2e2e] text-[#ece7e1] border-t border-[#a09282]/30 pt-16 pb-24 md:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Col 1: Brand & Philosophy */}
            <div className="flex flex-col">
              <Link href="/" aria-label="Liox Fliesen Startseite" className="block w-40 h-40 mb-4">
                <img src="/images/logo-meisterbetrieb.webp" alt="Liox Fliesen" className="block w-full h-full object-contain" />
              </Link>
              <p className="text-sm text-[#ece7e1]/75 leading-relaxed mb-6">
                Fachgerechte Fliesenarbeiten, moderne Badsanierung, Großformatverlegung und Terrassenbeläge mit höchstem Anspruch an Präzision und Langlebigkeit.
              </p>
              <div className="text-xs text-[#a09282] uppercase tracking-wider font-semibold">
                Handwerkliche Sorgfalt · Zuverlässigkeit · Klare Planung
              </div>
            </div>

            {/* Col 2: Services */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#a09282] mb-4">
                Leistungen
              </h3>
              <ul className="space-y-2.5 text-sm text-[#ece7e1]/80">
                {SERVICES.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={`/leistungen#${s.slug}`}
                      className="hover:text-[#ece7e1] hover:underline transition-colors flex items-center justify-between group"
                    >
                      <span>{s.title}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-[#a09282]" />
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/leistungen"
                    className="text-xs uppercase tracking-wider text-[#a09282] hover:text-[#ece7e1] pt-2 inline-block"
                  >
                    Alle Leistungen im Detail →
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 3: Navigation & Company */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#a09282] mb-4">
                Unternehmen
              </h3>
              <ul className="space-y-2.5 text-sm text-[#ece7e1]/80">
                <li>
                  <Link href="/" className="hover:text-[#ece7e1] transition-colors">
                    Startseite
                  </Link>
                </li>
                
                <li>
                  <Link href="/ueber-uns" className="hover:text-[#ece7e1] transition-colors">
                    Über uns & Philosophie
                  </Link>
                </li>
                <li>
                  <Link href="/kontakt" className="hover:text-[#ece7e1] transition-colors">
                    Kontakt & Angebot
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="hover:text-[#ece7e1] transition-colors">
                    Impressum
                  </Link>
                </li>
                <li>
                  <Link href="/datenschutz" className="hover:text-[#ece7e1] transition-colors">
                    Datenschutz
                  </Link>
                </li>
              </ul>
            </div>

            {/* Col 4: Contact & Area */}
            <div>
              <h3 className="text-sm font-semibold tracking-wider uppercase text-[#a09282] mb-4">
                Kontakt & Servicegebiet
              </h3>
              <ul className="space-y-3 text-sm text-[#ece7e1]/80">
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-medium text-[#ece7e1]">{BUSINESS_CONFIG.address}</span>
                    <span className="text-xs text-[#ece7e1]/60">Standort: {BUSINESS_CONFIG.city}</span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
                  <a
                    href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                    className="hover:text-[#ece7e1] transition-colors tabular-nums"
                  >
                    {BUSINESS_CONFIG.phone}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${BUSINESS_CONFIG.email}`}
                    className="hover:text-[#ece7e1] transition-colors"
                  >
                    {BUSINESS_CONFIG.email}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#a09282] shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed">{BUSINESS_CONFIG.businessHours}</span>
                </li>
              </ul>

              <div className="mt-4 pt-4 border-t border-[#a09282]/20">
                <p className="text-xs text-[#ece7e1]/70">
                  <strong className="text-[#ece7e1]">Einsatzgebiet:</strong> {BUSINESS_CONFIG.serviceArea}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#a09282]/20 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#ece7e1]/60">
            <div>
              © {new Date().getFullYear()} Liox Fliessen. Alle Rechte vorbehalten.
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <Link href="/impressum" className="hover:text-[#ece7e1] transition-colors">
                Impressum
              </Link>
              <span aria-hidden="true">·</span>
              <Link href="/datenschutz" className="hover:text-[#ece7e1] transition-colors">
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Contact Bar (<15% screen height limit, strictly non-obscuring) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#ece7e1]/95 backdrop-blur-md border-t border-[#a09282]/30 px-3 py-2.5 shadow-lg flex items-center justify-between gap-2">
        <a
          href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#2f2e2e] bg-white border border-[#a09282]/40 active:bg-[#a09282]/20"
        >
          <Phone className="w-3.5 h-3.5 text-[#a09282]" />
          <span>Anrufen</span>
        </a>
        <Link
          href="/kontakt"
          className="flex-1 inline-flex items-center justify-center py-2.5 px-3 text-xs font-semibold uppercase tracking-wider text-[#ece7e1] bg-[#2f2e2e] active:bg-[#2f2e2e]/90 text-center"
        >
          Angebot anfragen
        </Link>
      </div>
    </>
  );
}
