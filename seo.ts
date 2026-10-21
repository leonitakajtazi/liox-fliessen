export const seoPaths = ['/', '/leistungen', '/ueber-uns',
  '/kontakt', '/impressum', '/datenschutz'];

export function siteOrigin(value?: string) {
  if (!value) return '';
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol)) throw new Error('VITE_SITE_URL must be an HTTP(S) URL');
  return url.origin;
}

const xmlEscape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('"', '&quot;');
export const robots = (origin: string) => `User-agent: *\nAllow: /\nDisallow: /api/\n${origin ? `\nSitemap: ${origin}/sitemap.xml\n` : ''}`;
export const sitemap = (origin: string) => `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${origin ? seoPaths.map((path) => `  <url><loc>${xmlEscape(origin + path)}</loc></url>`).join('\n') : ''}\n</urlset>\n`;
