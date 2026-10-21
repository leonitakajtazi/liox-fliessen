interface PageHeroProps {
  image: string;
  imageAlt: string;
  eyebrow: string;
  title: string;
  description: string;
}

export function PageHero({ image, imageAlt, eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="hero-surface relative isolate overflow-hidden bg-[#2f2e2e] text-[#ece7e1]">
      <img src={image} alt={imageAlt} fetchPriority="high"
        className="absolute inset-0 -z-20 w-full h-full object-cover object-[65%_center] sm:object-center" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#2f2e2e]/90 via-[#2f2e2e]/70 to-[#2f2e2e]/30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div data-reveal-sequence className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#d4c4b1] mb-5">{eyebrow}</div>
          <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-serif mb-5 leading-tight [text-wrap:balance]">{title}</h1>
          <p className="max-w-xl text-base sm:text-lg text-[#ece7e1]/90 leading-relaxed">{description}</p>
        </div>
      </div>
    </section>
  );
}
