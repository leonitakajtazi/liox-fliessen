import { useLayoutEffect } from 'react';

/** Reveal each content block once, including content added by filters or routes. */
export function ScrollAnimations({ route }: { route: string }) {
  useLayoutEffect(() => {
    const root = document.getElementById('main-content');
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!root || preference.matches || !('IntersectionObserver' in window)) return;

    const observed = new Set<Element>();
    const frames = new Set<number>();
    const observer = new IntersectionObserver((entries) => {
      let order = 0;
      entries.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top).forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).style.setProperty('--reveal-delay', `${Math.min(order++, 5) * 100}ms`);
          const frame = requestAnimationFrame(() => {
            entry.target.classList.add('is-revealed');
            frames.delete(frame);
          });
          frames.add(frame);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0, rootMargin: '0px 0px -32px 0px' });

    const scan = () => {
      const blocks = Array.from(root.querySelectorAll(
        '[data-reveal-sequence] > *, section .grid > [class*="border"], section form, section details'
      )).filter((element) => !element.closest('[data-hero-sequence]'));
      const outerBlocks = blocks.filter((element) => !blocks.some((other) => other !== element && other.contains(element)));
      const candidates = Array.from(root.querySelectorAll(
        'section h1, section h2, section h3, section p, section li, section img, section .grid > div, section [class*="tracking-widest"]'
      )).filter((element) => !element.closest('[data-hero-sequence]') && !element.closest('.absolute') &&
        !outerBlocks.some((block) => block.contains(element)));
      const targets = [...outerBlocks, ...candidates.filter((element) => !candidates.some((other) =>
        other !== element && element.contains(other)))];
      targets.forEach((element) => {
        if (observed.has(element)) return;
        observed.add(element);
        element.classList.add('scroll-reveal');
        observer.observe(element);
      });
    };

    scan();
    const mutations = new MutationObserver(scan);
    mutations.observe(root, { childList: true, subtree: true });
    const showAll = () => {
      if (preference.matches) observed.forEach((element) => element.classList.add('is-revealed'));
    };
    preference.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      frames.forEach(cancelAnimationFrame);
      mutations.disconnect();
      preference.removeEventListener('change', showAll);
      observed.forEach((element) => {
        element.classList.remove('scroll-reveal', 'is-revealed');
        (element as HTMLElement).style.removeProperty('--reveal-delay');
      });
    };
  }, [route]);

  return null;
}
