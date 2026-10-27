import { useEffect, useRef, useState } from 'react';
import { Fancybox } from '@fancyapps/ui/dist/fancybox/';
import '@fancyapps/ui/dist/fancybox/fancybox.css';
import { PROJECT_CATEGORIES } from '../config/projectGallery';

export function ProjectGallery() {
  const [category, setCategory] = useState('alle');
  const galleryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = galleryRef.current;
    if (!container) return;

    Fancybox.bind(container, '[data-fancybox]', {
      closeButton: true,
      backdropClick: 'close',
      l10n: {
        CLOSE: 'Schließen',
        NEXT: 'Nächstes Bild',
        PREV: 'Vorheriges Bild',
      },
    });

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, []);

  return (
    <section ref={galleryRef} id="referenzen" className="py-20 lg:py-28 border-b border-[#a09282]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#756451] mb-3">Unsere Arbeiten</p>
          <h2 className="text-3xl sm:text-4xl font-serif mb-4">Handwerk, das sich sehen lässt.</h2>
          <p className="text-sm leading-relaxed text-[#2f2e2e]/75">Entdecken Sie unsere Fliesenarbeiten – nach Bereichen sortiert, vom Badezimmer bis zur Terrasse.</p>
        </div>

        <div className="flex flex-wrap gap-2 mb-12" role="group" aria-label="Projektkategorie auswählen">
          {[{ id: 'alle', title: 'Alle Arbeiten' }, ...PROJECT_CATEGORIES].map((item) => (
            <button key={item.id} type="button" aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
              className={`px-4 py-3 text-sm border transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#756451] ${category === item.id ? 'bg-[#2f2e2e] text-[#ece7e1] border-[#2f2e2e]' : 'border-[#a09282]/50 hover:bg-white'}`}>
              {item.title}
            </button>
          ))}
        </div>

        <div className="space-y-14" aria-live="polite" aria-atomic="false">
          {PROJECT_CATEGORIES.filter((group) => category === 'alle' || category === group.id).map((group) => (
            <div key={group.id}>
              <div className="mb-6 border-b border-[#a09282]/30 pb-5">
                <h3 className="text-2xl font-serif mb-2">{group.title} <span className="ml-2 font-sans text-sm text-[#756451]">({group.images.length})</span></h3>
                <p className="text-sm text-[#2f2e2e]/75">{group.description}</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {group.images.map((photo) => (
                  <figure key={photo.src} className="bg-white border border-[#a09282]/25">
                    <a href={photo.src} data-fancybox={group.id} data-caption={photo.alt} className="block cursor-zoom-in overflow-hidden focus-visible:outline-2 focus-visible:outline-[#756451]" aria-label={`${photo.alt} – Bild vergrößern`}>
                      <img src={photo.src} alt={photo.alt} width={photo.width} height={photo.height} loading="lazy" decoding="async" className="block w-full aspect-[4/3] object-cover bg-[#e1dcd5] transition-transform duration-500 hover:scale-[1.03]" />
                    </a>
                    <figcaption className="px-4 py-4 text-sm leading-relaxed">{photo.alt}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
