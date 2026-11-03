import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';

export function ImpressumPage() {
  const linkClassName = 'underline underline-offset-4 hover:text-[#2f2e2e] break-words';

  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e] py-16 lg:py-24">
      <SeoMeta
        title={`Impressum – ${BUSINESS_CONFIG.brandName}`}
        description={`Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG) für ${BUSINESS_CONFIG.brandName}.`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-6 border-b border-[#a09282]/20">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
            Gesetzliche Anbieterkennzeichnung
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e]">
            Impressum
          </h1>
          <p className="mt-4 text-sm text-[#2f2e2e]/85">
            Angaben gemäß § 5 Digitale-Dienste-Gesetz (DDG)
          </p>
        </div>

        <div className="space-y-8 text-sm text-[#2f2e2e]/85 leading-relaxed bg-white border border-[#a09282]/30 p-8 sm:p-12">
          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Unternehmensangaben</h2>
            <p className="font-semibold text-base text-[#2f2e2e]">LIOX FLIESEN – Meisterbetrieb</p>
            <p className="mt-3">Inhaber: Erduan Osmani</p>
            <p>Rechtsform: Einzelunternehmen</p>
            <p className="mt-3">Kurfürstenstraße 34</p>
            <p>55232 Alzey</p>
            <p>Deutschland</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Kontakt</h2>
            <p>Telefon: <a href="tel:+4915228908333" className={linkClassName}>+49 152 28908333</a></p>
            <p>E-Mail: <a href="mailto:info@liox-fliesen.de" className={linkClassName}>info@liox-fliesen.de</a></p>
            <p>Webseite: <a href="https://liox-fliesen.de" className={linkClassName}>https://liox-fliesen.de</a></p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Berufsrechtliche Angaben</h2>
            <div>
              <p>Berufsbezeichnung: Fliesen-, Platten- und Mosaiklegermeister</p>
              <p>Verliehen in der Bundesrepublik Deutschland</p>
            </div>
            <p>Eingetragener Handwerksbetrieb im zulassungspflichtigen Fliesen-, Platten- und Mosaiklegerhandwerk.</p>
            <div>
              <h3 className="font-semibold text-[#2f2e2e] mb-2">Zuständige Handwerkskammer:</h3>
              <p>Handwerkskammer Rheinhessen</p>
              <p>Dagobertstraße 2</p>
              <p>55116 Mainz</p>
              <p>Deutschland</p>
              <p className="mt-3">Webseite: <a href="https://www.hwk.de" className={linkClassName}>https://www.hwk.de</a></p>
            </div>
            <div>
              <h3 className="font-semibold text-[#2f2e2e] mb-2">Berufsrechtliche Regelungen:</h3>
              <p>Handwerksordnung (HwO)</p>
              <p className="mt-3">Einsehbar unter: <a href="https://www.gesetze-im-internet.de/hwo/" className={linkClassName}>https://www.gesetze-im-internet.de/hwo/</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Verbraucherstreitbeilegung</h2>
            <p>Wir sind weder bereit noch verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
          </section>

          <section className="space-y-4">
            <h2 className="text-lg font-semibold text-[#2f2e2e] mb-2">Urheberrecht</h2>
            <p>Die auf dieser Webseite veröffentlichten Inhalte, insbesondere Texte, Bilder, Fotografien, Grafiken und Gestaltungen, unterliegen dem deutschen Urheberrecht, soweit sie urheberrechtlich geschützt sind.</p>
            <p>Die Vervielfältigung, Bearbeitung, Verbreitung oder sonstige Nutzung außerhalb der gesetzlichen Erlaubnisse bedarf der vorherigen Zustimmung des jeweiligen Rechteinhabers.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
