import { useEffect } from 'react';

export function ComingSoonPage() {
  useEffect(() => {
    document.title = 'Coming Soon | Liox Fliessen';
  }, []);

  return (
    <main className="flex min-h-screen min-h-[100svh] items-center justify-center bg-[#ece7e1] px-6 py-16 text-center text-[#2f2e2e]">
      <div className="w-full max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em]">Liox Fliessen</p>
        <div className="mx-auto my-10 h-px w-16 bg-[#a09282]" aria-hidden="true" />
        <h1 className="text-5xl font-medium tracking-tight sm:text-7xl" style={{ fontFamily: "'Playfair Display', serif" }}>
          Coming Soon
        </h1>
        <p className="mt-6 text-base leading-relaxed sm:text-lg">
          Unsere Website ist bald für Sie da.
        </p>
        <p className="mt-2 text-sm leading-relaxed">Wir freuen uns auf Ihren Besuch.</p>
        <p className="mt-12 text-xs text-[#2f2e2e]/70">created by Ernis Pllana</p>
      </div>
    </main>
  );
}
