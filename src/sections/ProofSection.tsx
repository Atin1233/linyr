type Stat = {
  label: string;
  value: string;
  caption: string;
};

type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

const proofContent = {
  logos: [
    { name: 'Arcjet', src: '/assets/images/arcjet-light.svg' },
    { name: 'Coderabbit', src: '/assets/images/coderabbit-logo-light.svg' },
    { name: 'Sentry', src: '/assets/images/sentry-white.png' },
    { name: 'Clerk', src: '/assets/images/clerk-logo-white.png' },
  ],
  stats: [
    {
      label: 'Conversion Lift',
      value: '↑128%',
      caption: 'Average increase in post-launch conversions',
    },
    {
      label: 'Load Speed',
      value: '1.7s',
      caption: 'Largest contentful paint across portfolio',
    },
    {
      label: 'Client NPS',
      value: '9.6/10',
      caption: 'Sustained partner satisfaction score',
    },
  ] as Stat[],
  testimonials: [
    {
      quote:
        'Linyr Digital rebuilt our entire funnel in under five weeks. The new experience paid for itself in the first month.',
      name: 'Jordan Blake',
      role: 'VP Growth, Northwind Labs',
    },
  ] as Testimonial[],
};

const ProofSection = () => {
  const [primaryTestimonial] = proofContent.testimonials;

  return (
    <section
      className="relative mx-auto max-w-7xl px-6 pb-28 pt-10 text-linyr-charcoal md:px-10"
      id="proof"
    >
      <div className="rounded-3xl bg-linyr-charcoal text-linyr-offWhite shadow-glass">
        <div className="border-b border-white/10 px-6 py-10 md:px-12">
          <p className="text-sm uppercase tracking-[0.4em] text-white/60">
            Trusted By Fast-Growing Teams
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-between gap-8">
            {proofContent.logos.map((logo) => (
              <div
                key={logo.name}
                className="flex h-16 w-40 items-center justify-center rounded-2xl bg-white/5 p-4 transition-transform duration-300 ease-out hover:-translate-y-1"
              >
                <img
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  className="max-h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-10 px-6 py-12 md:grid-cols-[2fr,3fr] md:px-12">
          <div className="space-y-8">
            <div>
              <h2 className="font-heading text-3xl text-linyr-offWhite md:text-4xl">
                Proof that performance and polish can coexist.
              </h2>
              <p className="mt-4 text-base text-white/70">
                We pair obsessive craftsmanship with conversion frameworks to
                deliver sites that feel effortless and sell relentlessly.
              </p>
            </div>
            {primaryTestimonial && (
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-inner">
                <blockquote className="text-lg text-white/90">
                  “{primaryTestimonial.quote}”
                </blockquote>
                <p className="mt-6 text-sm font-semibold text-white">
                  {primaryTestimonial.name}
                </p>
                <p className="text-sm text-white/60">
                  {primaryTestimonial.role}
                </p>
              </div>
            )}
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            {proofContent.stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/5 bg-white/10 px-6 py-8 transition duration-300 ease-out hover:border-linyr-gold/60 hover:bg-white/15"
              >
                <p className="text-sm font-medium uppercase tracking-wide text-white/70">
                  {stat.label}
                </p>
                <p className="mt-4 font-heading text-3xl text-linyr-gold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-3 text-sm text-white/60">{stat.caption}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { ProofSection };
