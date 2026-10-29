/**
 * Zentralisierte Unternehmensdaten für Liox Fliesen.
 * Platzhalter sind klar gekennzeichnet und können vor dem offiziellen Launch
 * mit den tatsächlichen Firmendaten des Kunden überschrieben werden.
 */

export interface BusinessConfig {
  brandName: string;
  industry: string;
  city: string;
  serviceArea: string;
  phone: string;
  phoneRaw: string;
  email: string;
  address: string;
  domain: string;
  businessHours: string;
  taxIdPlaceholder: string;
  registerNumberPlaceholder: string;
  responsiblePerson: string;
}

export const BUSINESS_CONFIG: BusinessConfig = {
  brandName: 'Liox Fliesen',
  industry: 'Professionelle Fliesenverlegung & Handwerk',
  city: 'Alzey',
  serviceArea: 'Alzey und Umgebung',
  phone: '+4915228908333',
  phoneRaw: '+4915228908333',
  email: 'info@liox-fliesen.de',
  address: 'Kurfürstenstraße 34, 55232 Alzey',
  domain: typeof window !== 'undefined' ? new URL(import.meta.env.VITE_SITE_URL || window.location.origin).host : '',
  businessHours: 'Mo – Fr: 07:30 – 17:30 Uhr · Sa nach Vereinbarung',
  taxIdPlaceholder: '[UMSATZSTEUER-ID GEMÄSS § 27A UStG]',
  registerNumberPlaceholder: '[HANDELSREGISTER / HANDWERKSKAMMER EINTRAGUNG]',
  responsiblePerson: '[INHABER / GESCHÄFTSFÜHRER]',
};

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  kicker: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubtitle: string;
  description: string;
  benefits: string[];
  scope: string[];
  materials: string[];
  processSteps: { title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  image: string;
  imageAlt: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'fliesenverlegung',
    slug: 'fliesenverlegung',
    title: 'Fachgerechte Fliesenverlegung',
    shortTitle: 'Fliesenverlegung',
    kicker: 'Präzision & Langlebigkeit',
    metaTitle: 'Fliesenverlegung in Alzey – Liox Fliesen',
    metaDescription: 'Präzise Fliesenarbeiten für Böden und Wände in Wohn- und Gewerberäumen. Saubere Fugentechnik und plane Verlegung in Alzey und Umgebung.',
    heroHeadline: 'Präzise Fliesenarbeiten für anspruchsvolle Innenräume.',
    heroSubtitle: 'Von klassischen Formaten bis zu individuellen Verlegemustern: Wir schaffen ebene Oberflächen mit exaktem Fugenbild und dauerhafter Belastbarkeit.',
    description: 'Neue Fliesen geben Ihren Räumen einen eigenen Charakter. Wir verlegen Wand- und Bodenfliesen in Wohn- und Geschäftsräumen und stimmen Format, Verlegemuster und Fugen auf Ihre Vorstellungen ab.',
    benefits: [
      "Persönliche Beratung zu Formaten und Verlegemustern",
      "Sorgfältige Vorbereitung des Untergrunds",
      "Gleichmäßiges Fugenbild und saubere Abschlüsse",
      "Abgestimmte Übergänge zu angrenzenden Bodenbelägen",
      "Fliesenarbeiten im Neubau und bei Renovierungen"
    ],
    scope: [
      'Wohnbereichs-, Küchen- und Flurbeläge',
      'Boden- und Wandfliesen aller gängigen Formate',
      'Treppenanlagen und Stufenbeläge mit Kantenschutz',
      'Sockelausbildungen und akkurate Fugenanschlüsse',
      'Ausbesserungs- und Modernisierungsarbeiten',
    ],
    materials: [
      'Feinsteinzeug (glasiert, unglasiert, poliert)',
      'Steingut- und Steinzeugfliesen',
      'Naturstein-Optiken und strukturierte Keramik',
      'Zementgebundene und polymermodifizierte Dünnbettmörtel',
      'Hochwertige Zement- und Epoxidharzfugen',
    ],
    processSteps: [
      {
        title: 'Untergrundprüfung & Vorbereitung',
        desc: 'Messung von Restfeuchte (CM-Messung), Prüfung der Tragfähigkeit, Grundierung und Ausgleich unebener Untergründe.',
      },
      {
        title: 'Verlegeplan & Achsausrichtung',
        desc: 'Festlegung der optischen Hauptachse zur Vermeidung unschöner Randschnitte und für ein harmonisches Gesamtbild.',
      },
      {
        title: 'Kleberauftrag & Einbettung',
        desc: 'Auftrag im kombinierten Buttering-Floating-Verfahren für maximale Hohlraumfreiheit und sichere Haftung.',
      },
      {
        title: 'Verfugung & elastische Randfugen',
        desc: 'Farbangepasste Zement- oder Epoxidharzverfugung sowie normgerechte elastische Silikonfugen an allen Bauwerksfugen.',
      },
    ],
    faqs: [
      {
        question: 'Wie wird ein unebener Estrich vor der Verlegung ausgeglichen?',
        answer: 'Wir prüfen die Ebenheitstoleranzen nach DIN 18202. Bei Unebenheiten bringen wir eine faserarmierte Nivelliermasse oder Ausgleichsspachtel nach fachgerechter Grundierung auf, um eine ebene Basis zu gewährleisten.',
      },
      {
        question: 'Welches Verlegemuster eignet sich am besten für kleine Räume?',
        answer: 'Größere Fliesenformate mit schmalen, unauffälligen Fugen lassen kleinere Räume ruhiger und optisch weitläufiger wirken. Im persönlichen Vor-Ort-Termin erörtern wir die Wirkung von Kreuzfuge, Halbverband oder Richtungsverlegung.',
      },
      {
        question: 'Können neue Fliesen direkt auf alte Fliesen gelegt werden?',
        answer: 'Eine Fliese-auf-Fliese-Verlegung ist grundsätzlich möglich, wenn der Altbelag tragfähig, hohlraumfrei und fest haftend ist. Dies wird im Vor-Ort-Termin detailliert geprüft und mit Spezialhaftgrund vorbereitet.',
      },
    ],
    image: '/images/projects/innenraeume-02.webp',
    imageAlt: 'Grauer Fliesenboden im Wohnraum',
  },
  {
    id: 'badfliesen',
    slug: 'badfliesen',
    title: 'Badfliesen & Badsanierung',
    shortTitle: 'Badfliesen',
    kicker: 'Wohlfühlen & Alltag',
    metaTitle: 'Badfliesen in Alzey – Liox Fliesen',
    metaDescription: 'Moderne Badfliesen, bodengleiche Duschen und normgerechte Verbundabdichtung nach DIN 18534 in Alzey und Umgebung.',
    heroHeadline: 'Elegante Bäder mit maximalem Feuchtigkeitsschutz.',
    heroSubtitle: 'Vom privaten Wellnessbad bis zum barrierefreien Duschbereich: Wir verbinden anspruchsvolle Ästhetik mit normgerechter Verbundabdichtung.',
    description: 'Ihr Bad soll schön aussehen und im Alltag zu Ihnen passen. Wir übernehmen die Fliesenarbeiten bei Neubau und Sanierung – von Wand und Boden bis zu Duschbereichen, Nischen und passenden Abschlüssen.',
    benefits: [
      "Fliesengestaltung für neue und bestehende Badezimmer",
      "Duschbereiche passend zu den baulichen Möglichkeiten",
      "Abgestimmte Abdichtung und sorgfältige Anschlüsse",
      "Individuelle Details an Nischen und Kanten",
      "Materialauswahl mit Blick auf Nutzung und Pflege"
    ],
    scope: [
      'Komplettverfliesung von Neubau- und Sanierungsbädern',
      'Bodengleiche Duschzonen mit Duschrinne oder Punktablauf',
      'Vormauerungen für Vorwandelemente und Waschtische',
      'Integrierte Nischen und Sitzbänke in der Dusche',
      'Feuchtebeständige Fugen auf Zement- oder Epoxidharzbasis',
    ],
    materials: [
      'Feinsteinzeug in Naturstein-, Beton- oder Marmoroptik',
      'Großkeramik für minimale Fugen im Duschbereich',
      'Flüssigabdichtungen und Dichtmanschetten nach DIN 18534',
      'Hochwertige Edelstahlablaufgarnituren und Duschprofile',
      'Fungizid eingestellte Spezialsilikone für Sanitärbereiche',
    ],
    processSteps: [
      {
        title: 'Untergrundabdichtung nach DIN 18534',
        desc: 'Lückenloser Auftrag der Verbundabdichtung inklusive Dichtbändern in allen Eck- und Wand-Boden-Übergängen.',
      },
      {
        title: 'Gefälleausbildung im Duschbereich',
        desc: 'Präziser Einbau des Gefälleestrichs (mindestens 1,5 bis 2 %) zur sicheren Entwässerung in Rinne oder Ablauf.',
      },
      {
        title: 'Gehrungsschnitte (Jolly)',
        desc: 'Sorgfältiger 45-Grad-Schliff an allen Außenecken für monolithische Kanten ohne Kunststoffschienen.',
      },
      {
        title: 'Verfugung & elastische Dehnfugen',
        desc: 'Ausfugen mit wasserabweisendem Fugenmörtel und dauerelastische Abdichtung der Anschlussfugen.',
      },
    ],
    faqs: [
      {
        question: 'Wie wird sichergestellt, dass kein Wasser in die Bausubstanz eindringt?',
        answer: 'Wir bringen eine zertifizierte Verbundabdichtung gemäß DIN 18534 auf. Sämtliche Rohrdurchführungen, Wannenkanten und Eckfugen werden mit System-Dichtmanschetten und Dichtbändern nahtlos eingearbeitet.',
      },
      {
        question: 'Sind Großformatfliesen für die Dusche sinnvoll?',
        answer: 'Sehr sinnvoll. Weniger Fugen bedeuten weniger Angriffsfläche für Kalk und Schmutz sowie eine deutlich leichtere Reinigung und ein großzügiges, elegantes Raumgefühl.',
      },
      {
        question: 'Was ist eine Gehrungskante (Jolly-Kante)?',
        answer: 'Hierbei werden die Fliesen an Außenkanten im 45-Grad-Winkel geschliffen und stoßen direkt aneinander. Dadurch entfallen optisch auffällige Kunststoff- oder Metallschienen.',
      },
    ],
      image: '/images/projects/baeder-01.webp',
    imageAlt: 'Badezimmer mit Badewanne, Holzoptik-Fliesen und Glasdusche',
  },
  {
    id: 'grossformatfliesen',
    slug: 'grossformatfliesen',
    title: 'Großformatfliesen & XXL-Keramik',
    shortTitle: 'Großformatfliesen',
    kicker: 'Großzügig & Klar',
    metaTitle: 'Großformatfliesen in Alzey – Liox Fliesen',
    metaDescription: 'Spezialisierte Verlegung von XXL-Fliesen (120x120 cm, 120x260 cm und mehr). Nahezu fugenlose Raumkonzepte in Alzey und Umgebung.',
    heroHeadline: 'Beeindruckende Dimensionen. Nahezu fugenlose Ästhetik.',
    heroSubtitle: 'XXL-Fliesen verlangen absolute Genauigkeit, Spezialwerkzeug und geschulte Handgriffe. Wir beherrschen das anspruchsvolle Großformat.',
    description: 'Große Fliesen bringen Ruhe und Weite in den Raum. Wir beraten Sie zur Wirkung und Eignung der Formate und achten bei der Verlegung auf einen passenden Untergrund, saubere Schnitte und ein stimmiges Fugenbild.',
    benefits: [
      "Ruhige Flächenwirkung mit weniger Fugen",
      "Beratung zum passenden Format für Ihren Raum",
      "Sorgfältige Vorbereitung und präzise Verarbeitung",
      "Abgestimmte Übergänge und Kanten",
      "Für Bäder, Wohnräume und gewerbliche Flächen"
    ],
    scope: [
      'Wand- und Bodenbeläge ab Formaten 100x100 cm bis 120x280 cm',
      'Großformatige Duschrückwände aus einem Stück ohne Fuge',
      'Kaminverkleidungen und Raumteiler mit XXL-Keramik',
      'Küchenrückwände und Arbeitsplattenverkleidungen',
      'Büro- und Geschäftsräume mit repräsentativem Anspruch',
    ],
    materials: [
      'Hochwertige Feinsteinzeugplatten in 6 mm und 9 mm Stärke',
      'Marmor-, Beton- und Terrazzo-Interpretationen in XXL-Dimension',
      'Hochflexibler S1- und S2-Fliesenkleber nach EN 12004',
      'Spezielle Nivellierlaschen für schwere und großflächige Platten',
      'Feinkörnige Spezialfugenmassen für Haarfugen ab 1,5 mm',
    ],
    processSteps: [
      {
        title: 'Präzisions-Untergrundvorbereitung',
        desc: 'Höchste Anforderung an Ebenheit (deutlich strenger als Standard-DIN). Gezieltes Spachteln und Entkoppeln.',
      },
      {
        title: 'Transport & Schnitt mit Führungsschienen',
        desc: 'Handling über verstellbare Vakuum-Saugsysteme. Maßgenaue Schnitte und Bohrungen mit Diamantwerkzeugen.',
      },
      {
        title: 'Buttering-Floating & Verlegung',
        desc: 'Kleberauftrag auf Untergrund und Plattenrückseite. Einlegen und vibrationsunterstütztes Anklopfen.',
      },
      {
        title: 'Nivellierung & Fugenverschluss',
        desc: 'Präzises Ausrichten mit mechanischen Nivelliersystemen gegen Überzähne. Feinstrukturierter Fugenverschluss.',
      },
    ],
    faqs: [
      {
        question: 'Wie groß können Großformatfliesen sein?',
        answer: 'Typische Großformate reichen von 100x100 cm und 120x120 cm bis hin zu raumhohen Platten von 120x280 cm oder 160x320 cm.',
      },
      {
        question: 'Welche Anforderungen gelten an den Untergrund?',
        answer: 'Der Untergrund muss absolut plan, tragfähig und schwingungsfrei sein. Höhendifferenzen von mehr als 1 mm auf 1 Meter müssen im Vorfeld vollflächig ausgeglichen werden.',
      },
      {
        question: 'Können Großformatfliesen in jedes Stockwerk geliefert werden?',
        answer: 'Das Treppenhaus und die Zugangswege müssen für die Plattenabmessungen ausreichend dimensioniert sein. Dies klären wir vorab bei der Vor-Ort-Besichtigung.',
      },
    ],
    image: '/images/projects/innenraeume-03.webp',
    imageAlt: 'Großformatige Bodenfliesen in einem offenen, modernen Wohnbereich',
  },
  {
    id: 'terrassenfliesen',
    slug: 'terrassenfliesen',
    title: 'Terrassen & Außenbereiche',
    shortTitle: 'Terrassenfliesen',
    kicker: 'Draußen zu Hause',
    metaTitle: 'Terrassenfliesen in Alzey – Liox Fliesen',
    metaDescription: 'Frostsichere Keramikplatten und Terrassenfliesen auf Stelzlagern, Splittbett oder Drainagemörtel in Alzey und Umgebung.',
    heroHeadline: 'Dauerhaft wetterfeste Ästhetik im Außenbereich.',
    heroSubtitle: 'Terrassen, Balkone und Eingangsbereiche erfordern höchste Beständigkeit gegen Frost, Nässe und Temperaturwechsel. Wir verlegen mit System.',
    description: 'Machen Sie Terrasse und Balkon zu einem Platz, an dem Sie gerne Zeit verbringen. Wir besprechen geeignete Beläge und die passende Verlegeart – mit Blick auf Untergrund, Entwässerung und den Übergang zum Haus.',
    benefits: [
      "Beratung zu geeigneten Belägen für den Außenbereich",
      "Verlegeaufbau passend zum vorhandenen Untergrund",
      "Berücksichtigung von Gefälle und Entwässerung",
      "Sorgfältige Anschlüsse an Türen und angrenzende Flächen",
      "Neue Beläge und Sanierung bestehender Außenflächen"
    ],
    scope: [
      'Terrassenflächen und Dachterrassen',
      'Balkone und Loggien mit Abdichtung',
      'Hauseingänge, Podeste und Außentreppen',
      'Poolumrandungen und Gartenwege',
      'Sanierung geschädigter Bestandsbeläge im Außenbereich',
    ],
    materials: [
      '20 mm Feinsteinzeug-Terrassenplatten in verschiedenen Formaten',
      'Höhenverstellbare Stelzlager mit Gefälleausgleichsköpfen',
      'Drainagematten und kapillarbrechende Schüttungen',
      'Edelstahl-Abschlussprofile und Entwässerungsrinnen',
      'Wasserdurchlässiger Kunstharz- oder Zement-Pflasterfugenmörtel',
    ],
    processSteps: [
      {
        title: 'Gefälle- & Entwässerungsplanung',
        desc: 'Überprüfung des Unterbaus auf mindestens 2 % Gefälle vom Baukörper weg zur sicheren Wasserableitung.',
      },
      {
        title: 'Bauwerksabdichtung im Außenbereich',
        desc: 'Fachgerechter Anschluss an Türelemente und Fassaden nach DIN 18531 / DIN 18533 zum Schutz der Gebäudehülle.',
      },
      {
        title: 'Schichtenaufbau (Stelzlager / Drainage)',
        desc: 'Wahl des optimalen Verlegesystems zur Vermeidung von Staunässe und thermischen Spannungen.',
      },
      {
        title: 'Verlegung & Randausbildung',
        desc: 'Präzises Verlegen der Platten mit einheitlichem Fugenbild und stabilen Randabschlussleisten.',
      },
    ],
    faqs: [
      {
        question: 'Warum sind 2 cm Feinsteinzeugplatten ideal für die Terrasse?',
        answer: 'Feinsteinzeug nimmt nahezu kein Wasser auf (< 0,5 %), wodurch Frostsprengungen ausgeschlossen sind. Zudem ist das Material extrem kratzfest, säurebeständig und bleicht durch Sonnenlicht nicht aus.',
      },
      {
        question: 'Was sind die Vorteile von Stelzlagern?',
        answer: 'Die Platten liegen trocken auf verstellbaren Füßen. Wasser fließt über die offenen Fugen direkt nach unten ab. Kabel oder Rohre können darunter verlegt werden, und Platten lassen sich bei Bedarf zerstörungsfrei anheben.',
      },
      {
        question: 'Wie wird ein barrierefreier Austritt zur Terrasse gelöst?',
        answer: 'Durch eine vorgelagerte Entwässerungsrinne vor der Terrassentür und das passende Verlegeniveau kann die vorgeschriebene Anschlusshöhe von 15 cm fachgerecht auf null reduziert werden.',
      },
    ],
    image: '/images/projects/terrassen-02.webp',
    imageAlt: 'Moderne Gartenterrasse mit großformatigen witterungsbeständigen Terrassenplatten',
  },
];

export const WORK_PROCESS = [
  {
    "step": "01",
    "title": "Anfrage & Erstgespräch",
    "description": "Sie erzählen uns, was Sie vorhaben. Wir hören zu, klären erste Fragen und besprechen, wie wir Sie unterstützen können."
  },
  {
    "step": "02",
    "title": "Besichtigung & Planung",
    "description": "Bei Bedarf schauen wir uns die Gegebenheiten vor Ort an. Gemeinsam stimmen wir Gestaltung, Material und die nötigen Vorarbeiten ab."
  },
  {
    "step": "03",
    "title": "Angebot & Abstimmung",
    "description": "Wir fassen die besprochenen Leistungen in einem nachvollziehbaren Angebot zusammen und stimmen den Zeitrahmen mit Ihnen ab."
  },
  {
    "step": "04",
    "title": "Umsetzung & Übergabe",
    "description": "Wir setzen die vereinbarten Arbeiten sorgfältig um. Zum Abschluss sehen wir uns das Ergebnis gemeinsam an und klären Ihre Fragen zur Pflege."
  }
];

export const GENERAL_FAQS = [
  {
    "question": "Wie läuft eine Anfrage bei Liox Fliesen ab?",
    "answer": "Schreiben Sie uns über das Formular, senden Sie eine E-Mail oder rufen Sie an. Wir besprechen Ihr Vorhaben und klären gemeinsam, welche Informationen oder Termine für die weitere Planung sinnvoll sind."
  },
  {
    "question": "Welche Informationen helfen bei einer ersten Einschätzung?",
    "answer": "Eine kurze Beschreibung, der Projektstandort und die ungefähre Fläche sind ein guter Anfang. Fotos, Skizzen und Wünsche zu den Fliesen helfen zusätzlich. Was noch fehlt, klären wir im Gespräch."
  },
  {
    "question": "Kann ich bereits ausgewählte Fliesen verlegen lassen?",
    "answer": "Sprechen Sie uns gerne darauf an. Wir klären, ob die ausgewählten Fliesen zum Untergrund und zur geplanten Nutzung passen, und stimmen die weiteren Schritte mit Ihnen ab."
  },
  {
    "question": "Wann sollte ich mein Projekt anfragen?",
    "answer": "Melden Sie sich möglichst früh, besonders wenn Sie einen bestimmten Termin im Blick haben. Die mögliche Ausführung hängt vom Umfang, der Vorbereitung und unserer aktuellen Auslastung ab."
  },
  {
    "question": "Wie werden bestehende Räume während der Arbeiten geschützt?",
    "answer": "Wir besprechen vor Beginn, welche Bereiche geschützt werden müssen und wie die Arbeiten Ihren Alltag möglichst wenig beeinträchtigen. Die Schutzmaßnahmen stimmen wir auf die anstehenden Arbeiten ab."
  },
  {
    "question": "Wo ist Liox Fliesen für mich im Einsatz?",
    "answer": "Unser Standort ist Alzey, unser Einsatzgebiet die Stadt und ihre Umgebung. Nennen Sie uns bei Ihrer Anfrage einfach den Projektort. Dann klären wir, ob wir Ihr Vorhaben übernehmen können."
  }
];
