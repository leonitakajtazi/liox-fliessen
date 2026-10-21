import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { Link } from '../context/RouterContext';
import { AlertCircle } from 'lucide-react';

export function ImpressumPage() {
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e] py-16 lg:py-24">
      <SeoMeta
        title={`Impressum – ${BUSINESS_CONFIG.brandName}`}
        description={`Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 TMG / DDG für ${BUSINESS_CONFIG.brandName}.`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-6 border-b border-[#a09282]/20">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
            Gesetzliche Anbieterkennzeichnung
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e]">
            Impressum
          </h1>
        </div>

        {/* Legal Review Notice */}
        <div className="p-5 bg-white border border-[#a09282] text-xs text-[#2f2e2e]/85 mb-10 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#a09282] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#2f2e2e] block mb-1">Hinweis zur rechtlichen Fertigstellung:</strong>
            Diese Impressumsseite enthält die gesetzlich vorgeschriebene Grundstruktur nach § 5 TMG / Digitale-Dienste-Gesetz (DDG). Vor der offiziellen Inbetriebnahme der Domain müssen die in eckigen Klammern markierten Platzhalter (wie Handwerkskammer-Eintrag, Steuernummer und Inhabername) mit den tatsächlichen Firmendaten ergänzt und durch einen Rechtsbeistand final freigegeben werden.
          </div>
        </div>

        <div className="space-y-8 text-sm text-[#2f2e2e]/85 leading-relaxed bg-white border border-[#a09282]/30 p-8 sm:p-12">
          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Angaben gemäß § 5 DDG (ehemals TMG)</h2>
            <p className="font-semibold text-base text-[#2f2e2e]">{BUSINESS_CONFIG.brandName}</p>
            <p>{BUSINESS_CONFIG.address}</p>
            <p>{BUSINESS_CONFIG.city}</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Vertreten durch</h2>
            <p>{BUSINESS_CONFIG.responsiblePerson}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Kontakt</h2>
            <p>Telefon: {BUSINESS_CONFIG.phone}</p>
            <p>E-Mail: {BUSINESS_CONFIG.email}</p>
            <p>Website: https://{BUSINESS_CONFIG.domain}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Registereintrag & Aufsichtsbehörde</h2>
            <p className="text-xs text-[#2f2e2e]/70 mb-1">
              Eintragung im Handelsregister oder Verzeichnis der handwerksähnlichen Gewerbe / Handwerkskammer:
            </p>
            <p className="font-mono text-xs bg-[#ece7e1]/50 p-2 border border-[#a09282]/20">
              {BUSINESS_CONFIG.registerNumberPlaceholder}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Umsatzsteuer-Identifikationsnummer</h2>
            <p className="text-xs text-[#2f2e2e]/70 mb-1">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:
            </p>
            <p className="font-mono text-xs bg-[#ece7e1]/50 p-2 border border-[#a09282]/20">
              {BUSINESS_CONFIG.taxIdPlaceholder}
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>{BUSINESS_CONFIG.responsiblePerson}</p>
            <p>{BUSINESS_CONFIG.address}</p>
            <p>{BUSINESS_CONFIG.city}</p>
          </section>

          <section className="pt-6 border-t border-[#a09282]/20 text-xs text-[#2f2e2e]/70 space-y-4">
            <h3 className="font-semibold text-sm text-[#2f2e2e]">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG / DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG / DDG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
            </p>

            <h3 className="font-semibold text-sm text-[#2f2e2e]">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
            </p>

            <h3 className="font-semibold text-sm text-[#2f2e2e]">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>

            <h3 className="font-semibold text-sm text-[#2f2e2e]">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h3>
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
