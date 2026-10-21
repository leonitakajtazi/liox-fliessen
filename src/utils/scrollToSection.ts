/** Position anchors below both sticky menus without creating a nested scroller. */
export function scrollToSection(id: string) {
  const element = document.getElementById(id);
  if (!element) return false;
  const headerHeight = document.querySelector('header')?.getBoundingClientRect().height ?? 80;
  const navigationHeight = document.querySelector('[data-service-navigation]')?.getBoundingClientRect().height ?? 0;
  window.scrollTo({
    top: Math.max(0, window.scrollY + element.getBoundingClientRect().top - headerHeight - navigationHeight - 12),
    behavior: 'smooth',
  });
  return true;
}
