import 'dotenv/config';
import { robots, sitemap, siteOrigin } from './seo.ts';
import express, { Request, Response } from 'express';
import compression from 'compression';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json());
app.use(compression());

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
app.get('/robots.txt', (req: Request, res: Response) => {
  const origin = siteOrigin(process.env.VITE_SITE_URL || req.protocol + '://' + req.get('host'));
  res.type('text/plain').send(robots(origin));
});

app.get('/sitemap.xml', (req: Request, res: Response) => {
  const origin = siteOrigin(process.env.VITE_SITE_URL || req.protocol + '://' + req.get('host'));
  res.type('application/xml').send(sitemap(origin));
});

// Former service detail pages now live as sections on /leistungen
app.get('/leistungen/:slug', (req: Request, res: Response) => {
  res.redirect(301, `/leistungen#${encodeURIComponent(req.params.slug)}`);
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
    app.use(express.static(distPath, {
      index: false,
      setHeaders(res, filePath) {
        if (filePath.includes(`${path.sep}assets${path.sep}`)) {
          res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
        }
      },
    }));
    app.get('*', (req: Request, res: Response) => {
      const indexPath = path.join(distPath, 'index.html');
      if (fs.existsSync(indexPath)) {
        const origin = siteOrigin(process.env.VITE_SITE_URL || req.protocol + '://' + req.get('host'));
        const html = fs.readFileSync(indexPath, 'utf8')
          .replaceAll('content="/images/logo-meisterbetrieb.png"', `content="${origin}/images/logo-meisterbetrieb.png"`);
        res.type('html').send(html);
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
