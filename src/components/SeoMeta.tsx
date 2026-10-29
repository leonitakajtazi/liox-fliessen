import { useEffect } from 'react';
import { useRouter } from '../context/RouterContext';

interface SeoMetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  type?: string;
}

export function SeoMeta({ title, description, canonicalPath, type = 'website' }: SeoMetaProps) {
  const { currentPath } = useRouter();
  const effectivePath = canonicalPath || currentPath;

  useEffect(() => {
    const siteOrigin = import.meta.env.VITE_SITE_URL || window.location.origin;
    const canonicalUrl = new URL(effectivePath, siteOrigin).href;
    const socialImage = new URL('/images/logo-meisterbetrieb.png', siteOrigin).href;
    document.querySelector('meta[property="og:image"]')?.setAttribute('content', socialImage);
    document.querySelector('meta[name="twitter:image"]')?.setAttribute('content', socialImage);
    // 1. Update Title
    document.title = title;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // 3. Update OpenGraph Tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);
    document.querySelector('meta[property="og:type"]')?.setAttribute('content', type);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', description);

    let structuredData = document.getElementById('business-schema') as HTMLScriptElement | null;
    if (!structuredData) {
      structuredData = document.createElement('script');
      structuredData.id = 'business-schema';
      structuredData.type = 'application/ld+json';
      document.head.appendChild(structuredData);
    }
    structuredData.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'HomeAndConstructionBusiness',
      name: 'Liox Fliesen',
      url: new URL('/', siteOrigin).href,
      logo: new URL('/images/logo-meisterbetrieb.webp', siteOrigin).href,
    });

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [title, description, effectivePath, type]);

  return null;
}
