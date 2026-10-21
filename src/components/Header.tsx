import React, { useState, useEffect } from 'react';
import { useRouter, Link } from '../context/RouterContext';
import { BUSINESS_CONFIG, SERVICES } from '../config/business';
import { Phone, Menu, X, ChevronDown, ArrowRight } from 'lucide-react';

export function Header() {
  const { currentPath } = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [currentPath]);

  return (
    <>
      {/* Skip Link for WCAG 2.2 AA Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#2f2e2e] focus:text-[#ece7e1] focus:ring-2 focus:ring-[#a09282] rounded-none text-sm font-medium"
      >
        Direkt zum Inhalt springen
      </a>

      {/* Main Top Header adhering strictly to the Top Bar Contract: 3 zones */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#ece7e1]/95 backdrop-blur-md border-b border-[#a09282]/25 shadow-sm'
            : 'bg-[#ece7e1] border-b border-[#a09282]/15'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-8 h-20">
            {/* Zone 1: Single text element wordmark */}
            <Link
              href="/"
              className="group flex items-baseline gap-1 text-2xl font-semibold tracking-tight text-[#2f2e2e] whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
              aria-label="Liox Fliessen Startseite"
            >
              <span className="font-serif tracking-normal">Liox</span>
              <span className="font-sans font-light tracking-widest uppercase text-base text-[#a09282]">Fliessen</span>
            </Link>

            {/* Zone 2: 4–5 single-line clean text navigation links */}
            <nav className="hidden md:flex items-center gap-7 text-[15px] font-medium text-[#2f2e2e]" aria-label="Hauptnavigation">
              <Link
                href="/"
                className={`transition-colors py-1 whitespace-nowrap shrink-0 border-b-2 ${
                  currentPath === '/'
                    ? 'border-[#2f2e2e] text-[#2f2e2e]'
                    : 'border-transparent text-[#2f2e2e]/80 hover:text-[#2f2e2e] hover:border-[#a09282]'
                }`}
              >
                Startseite
              </Link>

              {/* Leistungen Dropdown */}
              <div
                className="relative py-1"
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
              >
                <div className="flex items-center gap-1 cursor-pointer">
                  <Link
                    href="/leistungen"
                    className={`transition-colors whitespace-nowrap shrink-0 border-b-2 ${
                      currentPath.startsWith('/leistungen')
                        ? 'border-[#2f2e2e] text-[#2f2e2e]'
                        : 'border-transparent text-[#2f2e2e]/80 hover:text-[#2f2e2e] hover:border-[#a09282]'
                    }`}
                  >
                    Leistungen
                  </Link>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setServicesDropdownOpen(!servicesDropdownOpen);
                    }}
                    className="p-1 text-[#2f2e2e]/70 hover:text-[#2f2e2e]"
                    aria-expanded={servicesDropdownOpen}
                    aria-label="Untermenü Leistungen öffnen"
                  >
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>

                {/* Dropdown Menu */}
                {servicesDropdownOpen && (
                  <div className="absolute left-0 top-full pt-2 w-72 z-50">
                    <div className="bg-[#ece7e1] border border-[#a09282]/30 shadow-lg py-2">
                      <Link
                        href="/leistungen"
                        className="block px-4 py-2.5 text-xs uppercase tracking-wider font-semibold text-[#a09282] hover:bg-[#a09282]/10"
                      >
                        Alle Leistungen im Überblick
                      </Link>
                      <div className="h-px bg-[#a09282]/20 my-1"></div>
                      {SERVICES.map((s) => (
                        <Link
                          key={s.id}
                          href={`/leistungen/${s.slug}`}
                          className={`block px-4 py-2 text-sm text-[#2f2e2e] hover:bg-[#a09282]/15 transition-colors ${
                            currentPath === `/leistungen/${s.slug}` ? 'bg-[#a09282]/10 font-semibold' : ''
                          }`}
                        >
                          <div className="font-medium">{s.title}</div>
                          <div className="text-xs text-[#2f2e2e]/60">{s.kicker}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/referenzen"
                className={`transition-colors py-1 whitespace-nowrap shrink-0 border-b-2 ${
                  currentPath === '/referenzen'
                    ? 'border-[#2f2e2e] text-[#2f2e2e]'
                    : 'border-transparent text-[#2f2e2e]/80 hover:text-[#2f2e2e] hover:border-[#a09282]'
                }`}
              >
                Referenzen
              </Link>

              <Link
                href="/ueber-uns"
                className={`transition-colors py-1 whitespace-nowrap shrink-0 border-b-2 ${
                  currentPath === '/ueber-uns'
                    ? 'border-[#2f2e2e] text-[#2f2e2e]'
                    : 'border-transparent text-[#2f2e2e]/80 hover:text-[#2f2e2e] hover:border-[#a09282]'
                }`}
              >
                Über uns
              </Link>

              <Link
                href="/kontakt"
                className={`transition-colors py-1 whitespace-nowrap shrink-0 border-b-2 ${
                  currentPath === '/kontakt'
                    ? 'border-[#2f2e2e] text-[#2f2e2e]'
                    : 'border-transparent text-[#2f2e2e]/80 hover:text-[#2f2e2e] hover:border-[#a09282]'
                }`}
              >
                Kontakt
              </Link>
            </nav>

            {/* Zone 3: 1 primary action */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a
                href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#2f2e2e] hover:text-[#a09282] transition-colors py-2 px-1 whitespace-nowrap"
                title={`Anrufen unter ${BUSINESS_CONFIG.phone}`}
              >
                <Phone className="w-4 h-4 text-[#a09282]" />
                <span className="tabular-nums">{BUSINESS_CONFIG.phone}</span>
              </a>

              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#ece7e1] bg-[#2f2e2e] hover:bg-[#2f2e2e]/90 active:bg-[#2f2e2e] transition-colors shadow-sm whitespace-nowrap shrink-0 border border-[#2f2e2e]"
              >
                Angebot anfordern
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-3">
              <Link
                href="/kontakt"
                className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ece7e1] bg-[#2f2e2e] border border-[#2f2e2e]"
              >
                Angebot
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#2f2e2e] hover:bg-[#a09282]/15 transition-colors focus:ring-2 focus:ring-[#2f2e2e]"
                aria-label={mobileMenuOpen ? 'Menü schließen' : 'Menü öffnen'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#ece7e1] border-b border-[#a09282]/30 px-6 pt-4 pb-8 shadow-lg">
            <nav className="flex flex-col gap-4 text-base font-medium text-[#2f2e2e]">
              <Link
                href="/"
                className={`py-2 border-b border-[#a09282]/20 ${currentPath === '/' ? 'font-bold text-[#2f2e2e]' : ''}`}
              >
                Startseite
              </Link>

              <div className="py-2 border-b border-[#a09282]/20">
                <div className="flex justify-between items-center mb-2">
                  <Link href="/leistungen" className="font-semibold text-[#2f2e2e]">
                    Leistungen
                  </Link>
                </div>
                <div className="pl-4 flex flex-col gap-2.5 text-sm text-[#2f2e2e]/80">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.id}
                      href={`/leistungen/${s.slug}`}
                      className={`hover:text-[#2f2e2e] ${currentPath === `/leistungen/${s.slug}` ? 'font-semibold text-[#2f2e2e]' : ''}`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/referenzen"
                className={`py-2 border-b border-[#a09282]/20 ${currentPath === '/referenzen' ? 'font-bold text-[#2f2e2e]' : ''}`}
              >
                Referenzen
              </Link>

              <Link
                href="/ueber-uns"
                className={`py-2 border-b border-[#a09282]/20 ${currentPath === '/ueber-uns' ? 'font-bold text-[#2f2e2e]' : ''}`}
              >
                Über uns
              </Link>

              <Link
                href="/kontakt"
                className={`py-2 border-b border-[#a09282]/20 ${currentPath === '/kontakt' ? 'font-bold text-[#2f2e2e]' : ''}`}
              >
                Kontakt & Anfrage
              </Link>

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href={`tel:${BUSINESS_CONFIG.phoneRaw}`}
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#2f2e2e]"
                >
                  <Phone className="w-4 h-4 text-[#a09282]" />
                  <span>Jetzt anrufen: {BUSINESS_CONFIG.phone}</span>
                </a>
                <Link
                  href="/kontakt"
                  className="w-full text-center px-4 py-3 text-xs font-semibold uppercase tracking-wider text-[#ece7e1] bg-[#2f2e2e] border border-[#2f2e2e]"
                >
                  Unverbindliches Angebot anfordern
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
