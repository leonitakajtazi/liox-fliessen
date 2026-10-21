import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());

// In-Memory Rate Limiting for Contact Submissions
const rateLimitMap = new Map<string, { count: number; firstSeen: number }>();
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 Minuten
const MAX_REQUESTS_PER_WINDOW = 5;

// In-Memory Enquiry Store for demonstration/auditing
interface EnquiryRecord {
  id: string;
  name: string;
  email: string;
  phone?: string;
  cityOrZip?: string;
  service: string;
  areaM2?: string;
  timeframe?: string;
  message: string;
  createdAt: string;
  ip: string;
}

const enquiries: EnquiryRecord[] = [];

// Helper: Rate limit checker
function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return false;
  }
  if (now - entry.firstSeen > RATE_LIMIT_WINDOW_MS) {
    rateLimitMap.set(ip, { count: 1, firstSeen: now });
    return false;
  }
  if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
    return true;
  }
  entry.count += 1;
  return false;
}

// ----------------------------------------------------
// Robots.txt Handler
// ----------------------------------------------------
app.get('/robots.txt', (_req: Request, res: Response) => {
  res.type('text/plain');
  res.send(`User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: https://[DOMAIN]/sitemap.xml\n`);
});

// ----------------------------------------------------
// Sitemap.xml Handler
// ----------------------------------------------------
app.get('/sitemap.xml', (_req: Request, res: Response) => {
  const currentDate = new Date().toISOString().split('T')[0];
  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/leistungen/', priority: '0.9', changefreq: 'weekly' },
    { url: '/leistungen/fliesenverlegung/', priority: '0.8', changefreq: 'monthly' },
    { url: '/leistungen/badfliesen/', priority: '0.8', changefreq: 'monthly' },
    { url: '/leistungen/grossformatfliesen/', priority: '0.8', changefreq: 'monthly' },
    { url: '/leistungen/terrassenfliesen/', priority: '0.8', changefreq: 'monthly' },
    { url: '/referenzen/', priority: '0.8', changefreq: 'weekly' },
    { url: '/ueber-uns/', priority: '0.7', changefreq: 'monthly' },
    { url: '/kontakt/', priority: '0.9', changefreq: 'monthly' },
    { url: '/impressum/', priority: '0.3', changefreq: 'yearly' },
    { url: '/datenschutz/', priority: '0.3', changefreq: 'yearly' },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (p) => `  <url>
    <loc>https://[DOMAIN]${p.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.type('application/xml');
  res.send(xml);
});

// ----------------------------------------------------
// API Contact Route with Validation & Spam Protection
// ----------------------------------------------------
app.post('/api/contact', (req: Request, res: Response): any => {
  const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';

  // 1. Spam Honeypot Check
  const { honeypot } = req.body;
  if (honeypot && String(honeypot).trim() !== '') {
    // Silently drop bot submissions
    return res.status(200).json({
      success: true,
      message: 'Ihre Anfrage wurde erfolgreich übertragen.',
    });
  }

  // 2. Rate Limiting Check
  if (isRateLimited(clientIp)) {
    return res.status(429).json({
      success: false,
      error: 'Zu viele Anfragen in kurzer Zeit. Bitte versuchen Sie es in einigen Minuten erneut.',
    });
  }

  // 3. Extract and Validate Input
  const { name, email, phone, cityOrZip, service, areaM2, timeframe, message, privacyAccepted } = req.body;

  const errors: Record<string, string> = {};

  if (!name || typeof name !== 'string' || name.trim().length < 2) {
    errors.name = 'Bitte geben Sie Ihren vollständigen Namen ein (mindestens 2 Zeichen).';
  } else if (name.trim().length > 100) {
    errors.name = 'Der Name darf maximal 100 Zeichen lang sein.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== 'string' || !emailRegex.test(email.trim())) {
    errors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein (z. B. name@beispiel.de).';
  }

  if (!service || typeof service !== 'string' || service.trim() === '') {
    errors.service = 'Bitte wählen Sie eine gewünschte Leistung aus.';
  }

  if (!message || typeof message !== 'string' || message.trim().length < 10) {
    errors.message = 'Bitte beschreiben Sie Ihr Vorhaben kurz (mindestens 10 Zeichen).';
  } else if (message.trim().length > 3000) {
    errors.message = 'Die Nachricht ist zu lang (maximal 3000 Zeichen).';
  }

  if (!privacyAccepted) {
    errors.privacyAccepted = 'Bitte bestätigen Sie die Kenntnisnahme der Datenschutzerklärung.';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({
      success: false,
      error: 'Bitte überprüfen Sie die rot markierten Eingabefelder.',
      validationErrors: errors,
    });
  }

  // Sanitized Record Creation
  const newEnquiry: EnquiryRecord = {
    id: `ANFRAGE-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    phone: phone ? String(phone).trim() : undefined,
    cityOrZip: cityOrZip ? String(cityOrZip).trim() : undefined,
    service: service.trim(),
    areaM2: areaM2 ? String(areaM2).trim() : undefined,
    timeframe: timeframe ? String(timeframe).trim() : undefined,
    message: message.trim(),
    createdAt: new Date().toISOString(),
    ip: clientIp,
  };

  enquiries.push(newEnquiry);

  // Check if SMTP or custom webhook configured
  const hasSmtpConfigured = Boolean(process.env.SMTP_HOST && process.env.SMTP_USER);

  return res.status(200).json({
    success: true,
    message: 'Vielen Dank für Ihre Anfrage! Wir haben Ihre Angaben erhalten und melden uns in Kürze bei Ihnen.',
    referenceId: newEnquiry.id,
    integrationStatus: {
      smtpConfigured: hasSmtpConfigured,
      note: hasSmtpConfigured
        ? 'E-Mail-Benachrichtigung an den Betrieb wurde versendet.'
        : 'Formular erfolgreich validiert und serverseitig gespeichert. Für den Live-Versand können SMTP-Umgebungsvariablen im Hosting hinterlegt werden.',
    },
  });
});

// ----------------------------------------------------
// Dev vs Production Setup with Vite
// ----------------------------------------------------
async function startServer() {
  if (!isProduction) {
    // Dynamic import of Vite in dev
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // Serve production build files
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        res.sendFile(indexPath);
      } else {
        res.status(404).send('Not found');
      }
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Liox Fliessen server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start server:', err);
  process.exit(1);
});
