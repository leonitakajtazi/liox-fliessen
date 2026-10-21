import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { scrollToSection } from '../utils/scrollToSection';

interface RouterContextType {
  currentPath: string;
  navigate: (to: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: window.location.pathname,
  navigate: () => {},
});

export function useRouter() {
  return useContext(RouterContext);
}

function scrollToHash(id: string, attempts = 40) {
  if (!scrollToSection(id) && attempts > 0) {
    window.setTimeout(() => scrollToHash(id, attempts - 1), 50);
  }
}

// Former service detail pages (/leistungen/<slug>) are now sections on /leistungen
function currentLocationPath() {
  let p = window.location.pathname;
  p = p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
  const legacy = p.match(/^\/leistungen\/([^/]+)$/);
  if (legacy) {
    window.history.replaceState({}, '', `/leistungen#${legacy[1]}`);
    return '/leistungen';
  }
  return p;
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [currentPath, setCurrentPath] = useState<string>(currentLocationPath);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(currentLocationPath());
      if (window.location.hash) scrollToHash(window.location.hash.slice(1));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Initial load with an #anchor: wait for the lazy page, then scroll to it
  useEffect(() => {
    if (window.location.hash) scrollToHash(window.location.hash.slice(1));
  }, []);

  const navigate = (to: string) => {
    if (to.startsWith('http') || to.startsWith('tel:') || to.startsWith('mailto:')) {
      window.location.href = to;
      return;
    }

    // Normalizing target path, keeping an optional #anchor
    const [pathPart, hash] = to.split('#');
    const target = pathPart || currentPath;
    const normalized = target.length > 1 && target.endsWith('/') ? target.slice(0, -1) : target;
    const url = hash ? `${normalized}#${hash}` : normalized;

    if (url !== window.location.pathname + window.location.hash) {
      window.history.pushState({}, '', url);
    }
    if (normalized !== currentPath) setCurrentPath(normalized);

    if (hash) scrollToHash(hash);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  children: ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export function Link({ href, className = '', children, onClick, ...rest }: LinkProps) {
  const { navigate, currentPath } = useRouter();
  const hrefPath = href.split('#')[0];
  const normalizedHref = hrefPath.length > 1 && hrefPath.endsWith('/') ? hrefPath.slice(0, -1) : hrefPath;
  const isActive = currentPath === normalizedHref && !href.includes('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);

    // If external link, open normally
    if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('#')) {
      return;
    }

    e.preventDefault();
    navigate(href);
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      aria-current={isActive ? 'page' : undefined}
      {...rest}
    >
      {children}
    </a>
  );
}
