import React, { lazy, Suspense, useCallback, useState } from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
const ServicesOverviewPage = lazy(() => import('./pages/ServicesOverviewPage').then(module => ({ default: module.ServicesOverviewPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(module => ({ default: module.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage').then(module => ({ default: module.ImpressumPage })));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage').then(module => ({ default: module.DatenschutzPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(module => ({ default: module.NotFoundPage })));
import { ScrollAnimations } from './components/ScrollAnimations';
import { PageLoader } from './components/PageLoader';

function AppContent({ loading }: { loading: boolean }) {
  const { currentPath } = useRouter();

  // Normalize path
  const path = currentPath.length > 1 && currentPath.endsWith('/') ? currentPath.slice(0, -1) : currentPath;

  const renderPage = () => {
    if (path === '' || path === '/') {
      return <HomePage />;
    }

    if (path === '/leistungen') {
      return <ServicesOverviewPage />;
    }


    if (path === '/ueber-uns') {
      return <AboutPage />;
    }

    if (path === '/kontakt') {
      return <ContactPage />;
    }

    if (path === '/impressum') {
      return <ImpressumPage />;
    }

    if (path === '/datenschutz') {
      return <DatenschutzPage />;
    }

    return <NotFoundPage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#ece7e1] text-[#2f2e2e]">
      <Header />
      {!loading && <ScrollAnimations route={path} />}
      <main id="main-content" className="flex-1" inert={loading}>
        <Suspense fallback={<div className="min-h-[60vh]" role="status" aria-label="Seite wird geladen" />}>{renderPage()}</Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const finishLoading = useCallback(() => setLoading(false), []);
  return (
    <RouterProvider>
      {loading && <PageLoader onComplete={finishLoading} />}
      <AppContent loading={loading} />
    </RouterProvider>
  );
}
