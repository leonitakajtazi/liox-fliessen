import { useEffect, useState } from 'react';

export function PageLoader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let ready = document.readyState !== 'loading';
    const started = performance.now();
    const loaded = () => { ready = true; };
    document.addEventListener('DOMContentLoaded', loaded);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    let finishTimer: ReturnType<typeof setTimeout>;
    let exitTimer: ReturnType<typeof setTimeout>;
    const timer = window.setInterval(() => {
      const elapsed = performance.now() - started;
      if ((ready && elapsed >= 600) || elapsed >= 4000) {
        setProgress(100);
        window.clearInterval(timer);
        finishTimer = setTimeout(() => {
          setLeaving(true);
          exitTimer = setTimeout(onComplete, 300);
        }, 150);
      } else {
        setProgress(Math.min(90, 10 + (1 - Math.exp(-elapsed / 650)) * 80));
      }
    }, 60);
    return () => {
      window.clearInterval(timer);
      clearTimeout(finishTimer);
      clearTimeout(exitTimer);
      document.removeEventListener('DOMContentLoaded', loaded);
      document.body.style.overflow = previousOverflow;
    };
  }, [onComplete]);

  return (
    <div className={`page-loader ${leaving ? 'page-loader-leaving' : ''}`} role="status" aria-label="Website wird geladen">
      <div className="flex flex-col items-center gap-7">
        <div className="w-56 h-56">
          <img src="/images/logo-meisterbetrieb.webp" alt="Liox Fliesen" width={1000} height={1000}
            className="block w-full h-full object-contain" />
        </div>
        <div className="h-[3px] w-56 overflow-hidden bg-[#a09282]/25" aria-hidden="true">
          <div className="h-full bg-[#a09282] transition-[width] duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
        <span className="sr-only">Wird geladen…</span>
      </div>
    </div>
  );
}
