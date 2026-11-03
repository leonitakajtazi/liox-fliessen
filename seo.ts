export const SITE_URL = 'https://liox-fliesen.de';
export const seoPages: Record<string, { title: string; description: string }> = {
  '/': { title: 'Liox Fliesen – Ihr Fliesenleger-Meisterbetrieb in Alzey', description: 'Ihr Meisterbetrieb für Fliesenarbeiten in Alzey und Umgebung. Bäder, Wohnräume und Terrassen – persönlich beraten und sorgfältig umgesetzt.' },
  '/leistungen': { title: 'Fliesenarbeiten & Badsanierung in Alzey | Liox Fliesen', description: 'Fliesenverlegung, Badgestaltung, Großformatfliesen und Terrassen in Alzey und Umgebung. Entdecken Sie unsere Leistungen und fragen Sie Ihr Angebot an.' },
  '/ueber-uns': { title: 'Über Liox Fliesen – Ihr Meisterbetrieb in Alzey', description: 'Lernen Sie Liox Fliesen aus Alzey kennen: persönliche Beratung, sorgfältige Fliesenverlegung und individuelle Lösungen für Ihr Zuhause.' },
  '/kontakt': { title: 'Kontakt & Angebot anfordern – Liox Fliesen in Alzey', description: 'Fordern Sie Ihr unverbindliches Angebot für Fliesenarbeiten, Badsanierung oder Terrassenverlegung in Alzey und Umgebung an.' },
  '/impressum': { title: 'Impressum – Liox Fliesen', description: 'Impressum und gesetzliche Anbieterkennzeichnung gemäß § 5 Digitale-Dienste-Gesetz (DDG) für Liox Fliesen.' },
  '/datenschutz': { title: 'Datenschutzerklärung – Liox Fliesen', description: 'Datenschutzerklärung gemäß DSGVO für Liox Fliesen. Transparente Informationen über die Verarbeitung Ihrer Daten.' },
};
export const seoPaths = Object.keys(seoPages);

export function pageHtml(html: string, pathname: string, origin = SITE_URL) {
  const page = seoPages[pathname];
  if (!page) return html.replace('content="index, follow"', 'content="noindex, follow"');
  const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
  const url = escape(origin + pathname);
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escape(page.title)}</title>`)
    .replace(/(<meta\s+(?:name|property)="(?:description|og:description|twitter:description)"\s+content=")[^"]*/g, (_, prefix) => prefix + escape(page.description))
    .replace(/(<meta\s+(?:name|property)="(?:og:title|twitter:title)"\s+content=")[^"]*/g, (_, prefix) => prefix + escape(page.title))
    .replace(/(<meta property="og:url" content=")[^"]*/, (_, prefix) => prefix + url)
    .replace('</head>', `  <link rel="canonical" href="${url}" />\n</head>`);
}

export function siteOrigin(value?: string) {
  if (!value) return SITE_URL;
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('VITE_SITE_URL must be an HTTP(S) URL');
  return url.origin;
}

const xmlEscape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
export const robots = (origin: string) => `User-agent: *\nAllow: /\nDisallow: /api/\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ''}`;
export const sitemap = (origin: string) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${origin ? seoPaths.map((path) => `  <url><loc>${xmlEscape(origin + path)}</loc></url>`).join('\n') : ''}\n</urlset>\n`;
