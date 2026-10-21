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
    if (ogUrl) ogUrl.setAttribute('content', `https://[DOMAIN]${effectivePath}`);

    // 4. Update Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', `https://[DOMAIN]${effectivePath}`);
    }
  }, [title, description, effectivePath]);

  return null;
}
