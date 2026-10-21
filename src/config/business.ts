/**
 * Zentralisierte Unternehmensdaten für Liox Fliessen.
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
  brandName: 'Liox Fliessen',
  industry: 'Professionelle Fliesenverlegung & Handwerk',
  city: '[CITY]',
  serviceArea: '[ACTUAL SERVICE AREA]',
  phone: '49 123 123',
  phoneRaw: '+49123123',
  email: 'epllana03@gmail.com',
  address: '[BUSINESS ADDRESS]',
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
    metaTitle: 'Fliesenverlegung in [CITY] – Liox Fliessen',
    metaDescription: 'Präzise Fliesenarbeiten für Böden und Wände in Wohn- und Gewerberäumen. Saubere Fugentechnik und plane Verlegung in [CITY] und Umgebung.',
    heroHeadline: 'Präzise Fliesenarbeiten für anspruchsvolle Innenräume.',
    heroSubtitle: 'Von klassischen Formaten bis zu individuellen Verlegemustern: Wir schaffen ebene Oberflächen mit exaktem Fugenbild und dauerhafter Belastbarkeit.',
    description: 'Fliesen sind weit mehr als ein robuster Belag. Sie prägen die Raumwirkung, die Haptik und die Wertigkeit eines Gebäudes. Wir verlegen Wand- und Bodenfliesen im gesamten Wohn- und Objektbereich mit modernsten Nivelliersystemen und exakt abgestimmten Klebemörteln.',
    benefits: [
      'Exaktes Fugenbild mit millimetergenauer Ausrichtung',
      'Verzugsfreie Ebenheit durch professionelle Nivelliersysteme',
      'Fachgerechte Untergrundvorbereitung und Rissüberbrückung',
      'Saubere Übergänge zu Parkett, Estrich und Türelementen',
      'Zuverlässige Termineinhaltung und saubere Baustellenführung',
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
    image: '/images/1.webp',
    imageAlt: 'Präzise Fliesenverlegung im Detail mit exakter Fugenkante',
  },
  {
    id: 'badfliesen',
    slug: 'badfliesen',
    title: 'Badfliesen & Badsanierung',
    shortTitle: 'Badfliesen',
    kicker: 'Wellness & Feuchteschutz',
    metaTitle: 'Badfliesen in [CITY] – Liox Fliessen',
    metaDescription: 'Moderne Badfliesen, bodengleiche Duschen und normgerechte Verbundabdichtung nach DIN 18534 in [CITY] und Umgebung.',
    heroHeadline: 'Elegante Bäder mit maximalem Feuchtigkeitsschutz.',
    heroSubtitle: 'Vom privaten Wellnessbad bis zum barrierefreien Duschbereich: Wir verbinden anspruchsvolle Ästhetik mit normgerechter Verbundabdichtung.',
    description: 'Im Badezimmer treffen Wasser, Dampf und höchste Gestaltungsansprüche aufeinander. Neben fugenarmen Großkeramiken und eleganten Nischenausbildungen hat der bauphysikalische Feuchtigkeitsschutz höchste Priorität. Wir arbeiten strikt nach den anerkannten Regeln der Technik.',
    benefits: [
      'Zertifizierte Verbundabdichtung nach DIN 18534 (Wassereinwirkungsklassen W0-I bis W3-I)',
      'Bodengleiche, barrierefreie Walk-in-Duschbereiche mit Gefälleausbildung',
      'Akkurat auf Gehrung geschliffene Fliesenkanten (Jolly-Kante) ohne sichtbare Schienen',
      'Eingebaute und beleuchtete Ablagenischen für Duschutensilien',
      'Pilzhemmende und wasserabweisende Sanitärverfugung',
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
      image: '/images/2.webp',
    imageAlt: 'Modernes Bad mit großformatigen Natursteinoptik-Fliesen und begehbarer Dusche',
  },
  {
    id: 'grossformatfliesen',
    slug: 'grossformatfliesen',
    title: 'Großformatfliesen & XXL-Keramik',
    shortTitle: 'Großformatfliesen',
    kicker: 'Monolithisch & Fugenarm',
    metaTitle: 'Großformatfliesen in [CITY] – Liox Fliessen',
    metaDescription: 'Spezialisierte Verlegung von XXL-Fliesen (120x120 cm, 120x260 cm und mehr). Nahezu fugenlose Raumkonzepte in [CITY] und Umgebung.',
    heroHeadline: 'Beeindruckende Dimensionen. Nahezu fugenlose Ästhetik.',
    heroSubtitle: 'XXL-Fliesen verlangen absolute Genauigkeit, Spezialwerkzeug und geschulte Handgriffe. Wir beherrschen das anspruchsvolle Großformat.',
    description: 'Großformatfliesen bis zu 120 x 280 cm verwandeln Räume in ruhige, architektonische Kunstwerke. Die Reduzierung von Fugen auf ein absolutes Minimum erzeugt eine außergewöhnlich homogene Optik. Der Transport und die Verlegung dieser Dimensionen dulden keinerlei Toleranzfehler.',
    benefits: [
      'Ruhige, zusammenhängende Flächenwirkung durch minimale Fugenanteile',
      'Einsatz von Vakuumsaughebern und Spezial-Führungsschienen für saubere Schnitte',
      'Vollflächige Verklebung im Buttering-Floating-Verfahren zur Vermeidung von Lufteinschlüssen',
      'Höchste Pflegeleichtigkeit im Vergleich zu kleinformatigen Fliesenbelägen',
      'Exklusive Optik für Bäder, repräsentative Wohnräume und Empfangsbereiche',
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
    image: '/images/3.webp',
    imageAlt: 'Großformatige Bodenfliesen in einem offenen, modernen Wohnbereich',
  },
  {
    id: 'terrassenfliesen',
    slug: 'terrassenfliesen',
    title: 'Terrassen & Außenbereiche',
    shortTitle: 'Terrassenfliesen',
    kicker: 'Witterungsbeständig & Frostsicher',
    metaTitle: 'Terrassenfliesen in [CITY] – Liox Fliessen',
    metaDescription: 'Frostsichere Keramikplatten und Terrassenfliesen auf Stelzlagern, Splittbett oder Drainagemörtel in [CITY] und Umgebung.',
    heroHeadline: 'Dauerhaft wetterfeste Ästhetik im Außenbereich.',
    heroSubtitle: 'Terrassen, Balkone und Eingangsbereiche erfordern höchste Beständigkeit gegen Frost, Nässe und Temperaturwechsel. Wir verlegen mit System.',
    description: 'Im Außenbereich entscheidet der richtige Schichtenaufbau über die Dauerhaftigkeit. Stauende Nässe und Frostsprengung sind die häufigsten Schadensursachen bei fehlerhafter Ausführung. Ob Verlegung auf verstellbaren Stelzlagern, im drainierenden Splittbett oder auf Drainbeton: Wir wählen das passende System für Ihren Außenbereich.',
    benefits: [
      'Garantierte Frostbeständigkeit durch 2 cm starke Outdoor-Keramik',
      'Effiziente Entwässerung durch Gefälleausbildung und Drainagesysteme',
      'Trockenverlegung auf Stelzlagern für barrierefreie Zugänge und Revisionsmöglichkeiten',
      'Rutschhemmende Oberflächenklassen (R10 bis R11) für Sicherheit bei Nässe',
      'Farbecht, UV-beständig und resistent gegen Moos- und Algenbildung',
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
    image: '/images/4.webp',
    imageAlt: 'Moderne Gartenterrasse mit großformatigen witterungsbeständigen Terrassenplatten',
  },
];

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'bad' | 'grossformat' | 'terrasse' | 'wohnbereich';
  categoryLabel: string;
  locationNote: string;
  materialsNote: string;
  scopeNote: string;
  description: string;
  result: string;
  image: string;
  imageAlt: string;
  isVerifiedDemo: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: 'bad-penthouse-natursteinoptik',
    slug: 'bad-penthouse-natursteinoptik',
    title: 'Exklusives Masterbad in Naturstein-Optik',
    category: 'bad',
    categoryLabel: 'Badsanierung',
    locationNote: '[STANDORT NACH FREIGABE / REGION]',
    materialsNote: 'Feinsteinzeug 120 x 120 cm, Sandstein-Struktur, Gehrungskanten',
    scopeNote: 'Bodengleiche Walk-in-Dusche, Doppelwaschtisch-Vormauerung, Wandnische',
    description: 'Vollständige Neugestaltung eines Masterbads mit warmen, sandsteinfarbenen Keramikflächen. Die Kanten der eingelassenen Dusch-Nische wurden auf 45-Grad-Gehrung präzise geschliffen, um ein ruhiges Gesamtbild ohne Metallprofile zu erreichen.',
    result: 'Ein fugenarmer Raum mit monolithischem Charakter, vollständiger Verbundabdichtung nach DIN 18534 und barrierefreiem Duschzugang.',
    image: '/images/5.webp',
    imageAlt: 'Fertiggestelltes Masterbad mit Gehrungskanten und bodengleicher Dusche',
    isVerifiedDemo: true,
  },
  {
    id: 'wohnbereich-xxl-boden',
    slug: 'wohnbereich-xxl-boden',
    title: 'Offener Wohn- & Essbereich mit XXL-Keramik',
    category: 'grossformat',
    categoryLabel: 'Großformat',
    locationNote: '[STANDORT NACH FREIGABE / REGION]',
    materialsNote: 'Großformatplatten 120 x 240 cm, mattes Kalkstein-Finish',
    scopeNote: 'Ebenheitsausgleich, Verlegung über 85 m² mit 2 mm Haarfuge',
    description: 'Verlegung großformatiger Feinsteinzeugplatten in einem lichtdurchfluteten Wohnbereich. Durch sorgfältige Vorab-Nivellierung des Heizestrichs entstand ein stufenloser Belag mit perfektem Fugenbild zur Fensterfront.',
    result: 'Ein elegantes, großzügiges Raumgefühl mit gleichmäßiger Wärmeleitung der Fußbodenheizung und minimalem Pflegeaufwand.',
    image: '/images/6.webp',
    imageAlt: 'Lichtdurchfluteter Wohnbereich mit durchgehender Großformatverlegung',
    isVerifiedDemo: true,
  },
  {
    id: 'terrasse-schwellenloser-austritt',
    slug: 'terrasse-schwellenloser-austritt',
    title: 'Gartenterrasse mit schwellenlosem Übergang',
    category: 'terrasse',
    categoryLabel: 'Terrassenbelag',
    locationNote: '[STANDORT NACH FREIGABE / REGION]',
    materialsNote: '20 mm Outdoor-Feinsteinzeug 60 x 120 cm auf Stelzlagern',
    scopeNote: 'Schwellenlose Rinnenentwässerung, Randabschluss, Stufenanlage',
    description: 'Gestaltung einer großflächigen Außenterrasse mit schwellenlosem Übergang vom Wohnraum in den Garten. Das Stelzlagersystem ermöglicht einen raschen Wasserabfluss und bleibt revisionierbar.',
    result: 'Frost- und verwitterungsbeständiger Außenbelag mit rutschhemmender Oberfläche und makelloser Fluchtlinie.',
    image: '/images/7.webp',
    imageAlt: 'Schwellenlose Terrasse mit hochwertigen Outdoor-Keramikplatten',
    isVerifiedDemo: true,
  },
];

export const WORK_PROCESS = [
  {
    step: '01',
    title: 'Anfrage & Erstgespräch',
    description: 'Sie teilen uns Ihre Wünsche, die ungefähre Fläche und den geplanten Zeitrahmen über unser Formular oder telefonisch mit. Wir klären erste bauliche Rahmenbedingungen.',
  },
  {
    step: '02',
    title: 'Besichtigung & Planung',
    description: 'Vor Ort prüfen wir den Untergrund (Ebenheit, Feuchte, Risse), besprechen die ideale Fugenachse, passende Fliesenformate und erforderliche Abdichtungsmaßnahmen.',
  },
  {
    step: '03',
    title: 'Angebot & Abstimmung',
    description: 'Sie erhalten ein transparent gegliedertes, verbindliches Angebot ohne versteckte Kostenpositionen. Nach Ihrer Freigabe stimmen wir den Ausführungszeitraum ab.',
  },
  {
    step: '04',
    title: 'Fachgerechte Umsetzung',
    description: 'Pünktlicher Beginn, saubere Baustellenführung mit Staubschutz und handwerkliche Ausführung nach den anerkannten Regeln der Technik bis zur gemeinsamen Abnahme.',
  },
];

export const GENERAL_FAQS = [
  {
    question: 'Wie läuft eine unverbindliche Anfrage bei Liox Fliessen ab?',
    answer: 'Über unser Online-Formular oder telefonisch beschreiben Sie Ihr Vorhaben kurz. Innerhalb von ein bis zwei Werktagen melden wir uns bei Ihnen, um Details abzustimmen und bei Bedarf einen kostenfreien Vor-Ort-Termin zu vereinbaren.',
  },
  {
    question: 'Welche Informationen werden für eine erste Kosteneinschätzung benötigt?',
    answer: 'Hilfreich sind die ungefähre Quadratmeterzahl, der Raumtyp (z. B. Bad, Küche, Terrasse), das gewünschte Fliesenformat und der Zustand des Untergrunds (z. B. Neubau-Estrich oder Altbestand zum Sanieren).',
  },
  {
    question: 'Wer besorgt die Fliesen – Sie oder ich als Kunde?',
    answer: 'Beides ist möglich. Gerne unterstützen wir Sie bei der Auswahl und beziehen hochwertige Qualitätsfliesen über den qualifizierten Fachhandel. Wenn Sie Ihre Fliesen bereits selbst ausgewählt oder gekauft haben, übernehmen wir die fachgerechte Verlegung.',
  },
  {
    question: 'Wie lange im Voraus sollte ein Projekt angefragt werden?',
    answer: 'Je früher Sie mit uns in Kontakt treten, desto zuverlässiger können wir Ihren Wunschtermin einplanen. Bei Sanierungen empfehlen wir eine Vorlaufzeit von circa vier bis acht Wochen.',
  },
  {
    question: 'Welche Vorkehrungen treffen Sie zum Schutz von Bestandsräumen?',
    answer: 'Vor Beginn der Arbeiten schützen wir angrenzende Bodenbeläge mit robustem Abdeckvlies, setzen bei staubintensiven Arbeiten Staubschutztüren ein und hinterlassen die Baustelle am Tagesende stets aufgeräumt.',
  },
  {
    question: 'In welchem Umkreis um [CITY] bieten Sie Ihre Leistungen an?',
    answer: 'Wir arbeiten im gesamten Einzugsgebiet von [ACTUAL SERVICE AREA]. Bei größeren Projekten oder speziellen Großformatverlegungen übernehmen wir auf Anfrage auch Aufträge darüber hinaus.',
  },
];
