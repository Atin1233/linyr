import Link from 'next/link';

const heroContent = {
  eyebrow: 'Premium Web Experience Studio',
  title: 'Linyr Digital',
  subtitle: 'Fast. Beautiful. Built to Convert.',
  description:
    'We craft AI-era websites that load instantly, feel luxurious, and turn your visitors into loyal customers. Let’s design a digital flagship that sets you apart.',
  ctaLabel: 'Get Your Free Quote',
  ctaHref: '#book-consultation',
  supportText: 'Projects delivered in 6 weeks or less.',
};

const HeroSection = () => (
  <section
    className="relative overflow-hidden bg-linyr-offWhite text-linyr-charcoal"
    id="start"
  >
    <div
      className="pointer-events-none absolute inset-0 bg-linyr-hero"
      aria-hidden
    />
    <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-white/60 to-white/0 backdrop-blur-sm" />
    <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-32 pt-36 text-center md:px-10">
      <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/70 px-4 py-2 text-sm font-medium uppercase tracking-[0.3em] text-linyr-slate shadow-glass backdrop-blur">
        {heroContent.eyebrow}
      </span>
      <div className="mx-auto max-w-3xl">
        <h1 className="font-heading text-4xl leading-tight text-linyr-charcoal md:text-6xl">
          {heroContent.title}
        </h1>
        <p className="mt-4 font-heading text-2xl text-linyr-blue md:text-3xl">
          {heroContent.subtitle}
        </p>
        <p className="mt-8 text-lg text-linyr-slate md:text-xl">
          {heroContent.description}
        </p>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href={heroContent.ctaHref}
          className="group inline-flex items-center justify-center rounded-full bg-linyr-blue px-8 py-3 text-base font-semibold text-white shadow-glow transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(30,64,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
        >
          {heroContent.ctaLabel}
          <span className="ml-2 inline-flex size-6 items-center justify-center rounded-full bg-white/90 text-linyr-blue transition-transform duration-300 ease-out group-hover:translate-x-1">
            →
          </span>
        </Link>
        <p className="text-sm text-linyr-slate">{heroContent.supportText}</p>
      </div>
    </div>
    <div
      className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-linyr-offWhite to-transparent"
      aria-hidden
    />
  </section>
);

export { HeroSection };
