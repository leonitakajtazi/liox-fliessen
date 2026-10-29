import React from 'react';
import { Link } from '../context/RouterContext';
import { SeoMeta } from '../components/SeoMeta';
import { ArrowLeft, Home, Phone, HelpCircle } from 'lucide-react';
import { SERVICES, BUSINESS_CONFIG } from '../config/business';

export function NotFoundPage() {
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e] py-24 sm:py-32">
      <SeoMeta
        title={`Seite nicht gefunden (404) – Liox Fliesen`}
        description="Die angeforderte Unterseite konnte leider nicht gefunden werden. Nutzen Sie unsere Übersicht, um zur Startseite oder zu unseren Leistungen zu gelangen."
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="font-mono text-5xl sm:text-6xl font-bold text-[#a09282] mb-4">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e] mb-4 [text-wrap:balance]">
          Diese Seite konnte nicht gefunden werden.
        </h1>

        <p className="text-base text-[#2f2e2e]/80 max-w-xl mx-auto mb-8 leading-relaxed">
          Möglicherweise wurde die Adresse geändert, die Seite verschoben oder Sie haben einen unvollständigen Link aufgerufen.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2f2e2e] text-[#ece7e1] text-xs uppercase tracking-wider font-semibold border border-[#2f2e2e] hover:bg-[#2f2e2e]/90 transition-colors"
          >
            <Home className="w-4 h-4 text-[#a09282]" />
            <span>Zur Startseite</span>
          </Link>

          <Link
            href="/kontakt"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-[#2f2e2e] text-xs uppercase tracking-wider font-semibold border border-[#a09282] hover:bg-[#a09282]/10 transition-colors"
          >
            <Phone className="w-4 h-4 text-[#a09282]" />
            <span>Kontakt aufnehmen</span>
          </Link>
        </div>

        <div className="p-8 bg-white border border-[#a09282]/30 text-left">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#a09282] mb-4">
            Direkte Orientierung
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <Link href="/" className="hover:text-[#a09282] transition-colors py-1">
              · Startseite
            </Link>
            <Link href="/leistungen" className="hover:text-[#a09282] transition-colors py-1">
              · Leistungsübersicht
            </Link>
            {SERVICES.map((s) => (
              <Link
                key={s.id}
                href={`/leistungen#${s.slug}`}
                className="hover:text-[#a09282] transition-colors py-1 text-xs text-[#2f2e2e]/80"
              >
                · {s.title}
              </Link>
            ))}
            <Link href="/ueber-uns" className="hover:text-[#a09282] transition-colors py-1">
              · Über Liox Fliesen
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
