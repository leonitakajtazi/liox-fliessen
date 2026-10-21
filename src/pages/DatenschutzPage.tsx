import React from 'react';
import { BUSINESS_CONFIG } from '../config/business';
import { SeoMeta } from '../components/SeoMeta';
import { ShieldCheck } from 'lucide-react';

export function DatenschutzPage() {
  return (
    <div className="bg-[#ece7e1] text-[#2f2e2e] py-16 lg:py-24">
      <SeoMeta
        title={`Datenschutzerklärung – ${BUSINESS_CONFIG.brandName}`}
        description={`Datenschutzerklärung gemäß DSGVO für ${BUSINESS_CONFIG.brandName}. Transparente Informationen über die Verarbeitung Ihrer Daten.`}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 pb-6 border-b border-[#a09282]/20">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#a09282] mb-2">
            Datenschutz & Privatsphäre (DSGVO)
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif text-[#2f2e2e]">
            Datenschutzerklärung
          </h1>
        </div>

        <div className="space-y-8 text-sm text-[#2f2e2e]/85 leading-relaxed bg-white border border-[#a09282]/30 p-8 sm:p-12">
          <section>
            <h2 className="text-xl font-serif text-[#2f2e2e] mb-3">1. Datenschutz auf einen Blick</h2>
            <h3 className="font-semibold text-[#2f2e2e] mb-1">Allgemeine Hinweise</h3>
            <p className="mb-3">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <h3 className="font-semibold text-[#2f2e2e] mb-1">Datenerfassung auf dieser Website</h3>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#2f2e2e] mb-3">2. Verantwortliche Stelle</h2>
            <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:</p>
            <div className="mt-3 p-4 bg-[#ece7e1]/40 border border-[#a09282]/30 space-y-1">
              <p className="font-semibold text-[#2f2e2e]">{BUSINESS_CONFIG.brandName}</p>
              <p>{BUSINESS_CONFIG.responsiblePerson}</p>
              <p>{BUSINESS_CONFIG.address}</p>
              <p>{BUSINESS_CONFIG.city}</p>
              <p>Telefon: {BUSINESS_CONFIG.phone}</p>
              <p>E-Mail: {BUSINESS_CONFIG.email}</p>
            </div>
            <p className="mt-2 text-xs text-[#2f2e2e]/70">
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#2f2e2e] mb-3">3. Datenerfassung auf unserer Website</h2>

            <h3 className="font-semibold text-[#2f2e2e] mb-1">Server-Log-Dateien</h3>
            <p className="mb-3">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-[#2f2e2e]/80 mb-3">
              <li>Browsertyp und Browserversion</li>
              <li>Verwendetes Betriebssystem</li>
              <li>Referrer URL (zuvor besuchte Seite)</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="text-xs text-[#2f2e2e]/70 mb-4">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO zur Gewährleistung eines störungsfreien Betriebs der Website.
            </p>

            <h3 className="font-semibold text-[#2f2e2e] mb-1">Kontaktformular & E-Mail-Anfragen</h3>
            <p className="mb-2">
              Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p className="text-xs text-[#2f2e2e]/70 mb-4">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen (Angebotserstellung) erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
            </p>

            <h3 className="font-semibold text-[#2f2e2e] mb-1">Keine Tracking-Cookies / Datenschutzfreundliches Konzept</h3>
            <p className="text-xs text-[#2f2e2e]/70">
              Diese Website verwendet keine Tracking-Cookies von Werbenetzwerken oder Drittanbietern und setzt keine Profiling-Tools ein. Aus diesem Grund ist kein störendes Cookie-Banner erforderlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#2f2e2e] mb-3">4. Ihre Rechte als betroffene Person</h2>
            <p className="mb-3">Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
            <ul className="space-y-2 text-xs text-[#2f2e2e]/80">
              <li>
                <strong>Auskunft (Art. 15 DSGVO):</strong> Kostenlose Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft, Empfänger und Zweck der Datenverarbeitung.
              </li>
              <li>
                <strong>Berichtigung (Art. 16 DSGVO):</strong> Das Recht auf unverzügliche Berichtigung unrichtiger oder Vervollständigung unvollständiger personenbezogener Daten.
              </li>
              <li>
                <strong>Löschung (Art. 17 DSGVO):</strong> Das Recht auf Löschung Ihrer bei uns gespeicherten Daten, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </li>
              <li>
                <strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
              <li>
                <strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Das Recht, Daten, die wir automatisiert verarbeiten, an sich oder an einen Dritten aushändigen zu lassen.
              </li>
              <li>
                <strong>Widerspruch (Art. 21 DSGVO):</strong> Sie haben das Recht, jederzeit gegen die Verarbeitung Sie betreffender personenbezogener Daten Widerspruch einzulegen.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-serif text-[#2f2e2e] mb-3">5. SSL- bzw. TLS-Verschlüsselung</h2>
            <p className="text-xs text-[#2f2e2e]/80">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
