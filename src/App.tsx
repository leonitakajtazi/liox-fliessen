import React from 'react';
import { RouterProvider, useRouter } from './context/RouterContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesOverviewPage } from './pages/ServicesOverviewPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ImpressumPage } from './pages/ImpressumPage';
import { DatenschutzPage } from './pages/DatenschutzPage';
import { NotFoundPage } from './pages/NotFoundPage';

function AppContent() {
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

    if (path === '/leistungen/fliesenverlegung') {
      return <ServiceDetailPage slug="fliesenverlegung" />;
    }

    if (path === '/leistungen/badfliesen') {
      return <ServiceDetailPage slug="badfliesen" />;
    }

    if (path === '/leistungen/grossformatfliesen') {
      return <ServiceDetailPage slug="grossformatfliesen" />;
    }

    if (path === '/leistungen/terrassenfliesen') {
      return <ServiceDetailPage slug="terrassenfliesen" />;
    }

    if (path === '/referenzen' || path.startsWith('/referenzen/')) {
      return <ProjectsPage />;
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
      <main id="main-content" className="flex-1">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <AppContent />
    </RouterProvider>
  );
}
