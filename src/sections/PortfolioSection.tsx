import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Demo Site #1',
    description:
      'Boutique CPA firm flagship that builds trust while guiding prospects to book consultations.',
    preview: {
      gradient:
        'linear-gradient(155deg, #0b1739 0%, #1f2f63 55%, rgba(30, 64, 175, 0.95) 100%)',
      tag: 'Boutique CPA & Advisory',
      heading: 'Fractional finance partner.',
      subheading: 'Board-ready dashboards & audit-ready execution.',
      stats: ['42% faster close cycles', '$6.8M capital raised'],
      textColor: 'text-white',
      tagColor: 'text-white/80',
      statsVariant: 'light',
    },
    href: '/demo/commerce',
  },
  {
    title: 'Demo Site #2',
    description:
      'Neighborhood cafe launch experience with menu storytelling and seamless ordering.',
    preview: {
      gradient:
        'linear-gradient(150deg, #44200d 0%, #7c3a1d 50%, rgba(249, 115, 22, 0.85) 100%)',
      tag: 'Hearth & Harvest Cafe',
      heading: 'Brunch • Vinyl • Fire-roasted espresso.',
      subheading: 'Order ahead & join Harvest Rewards.',
      stats: ['4.9★ guest rating', '+18K loyalty members'],
      textColor: 'text-white',
      tagColor: 'text-white/80',
      statsVariant: 'light',
    },
    href: '/demo/workflow',
  },
  {
    title: 'Demo Site #3',
    description:
      'Modern dental studio site focused on patient confidence and online bookings.',
    preview: {
      gradient:
        'linear-gradient(160deg, #8ec5fc 0%, #e0c3fc 40%, rgba(165, 243, 252, 0.9) 100%)',
      tag: 'Lumina Smiles Dental',
      heading: 'Spa-grade comfort & concierge care.',
      subheading: 'Virtual consults • 24/7 emergency support.',
      stats: ['15K+ smiles transformed', '98% satisfaction'],
      textColor: 'text-[#0f172a]',
      tagColor: 'text-[#0f172a]/70',
      statsVariant: 'dark',
    },
    href: '/demo/insights',
  },
];

const PortfolioSection = () => (
  <section
    className="relative mx-auto max-w-7xl px-6 pb-28 text-linyr-charcoal md:px-10"
    id="portfolio"
  >
    <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-linyr-blue">
          Selected Work
        </span>
        <h2 className="mt-4 font-heading text-3xl md:text-4xl">
          Crafted for clarity, performance, and trust.
        </h2>
        <p className="mt-3 max-w-2xl text-base text-linyr-slate">
          These showcase builds only scratch the surface of what we deliver. We
          tailor every engagement to your brand, layering in custom flows,
          integrations, and feature sets to match your company’s roadmap.
        </p>
      </div>

      <a
        href="#book-consultation"
        className="inline-flex items-center rounded-full border border-linyr-blue/30 bg-linyr-blue/10 px-5 py-2 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/60 hover:bg-linyr-gold/15"
      >
        Request the full case studies →
      </a>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {portfolioItems.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex flex-col overflow-hidden rounded-3xl border border-linyr-blue/10 bg-white shadow-glass transition duration-300 hover:-translate-y-1 hover:border-linyr-gold/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-4"
        >
          <div className="relative h-52 overflow-hidden rounded-b-none">
            <div
              className="absolute inset-0"
              style={{ background: item.preview.gradient }}
            />
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border-b border-white/10 p-6">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
                <span
                  className={`inline-flex size-2 rounded-full ${item.preview.statsVariant === 'dark' ? 'bg-[#0f172a]/60' : 'bg-white/70'}`}
                />
                <span className={item.preview.tagColor}>
                  {item.preview.tag}
                </span>
              </div>
              <div>
                <p
                  className={`font-heading text-lg leading-snug ${item.preview.textColor}`}
                >
                  {item.preview.heading}
                </p>
                <p
                  className={`mt-2 text-xs ${item.preview.textColor} opacity-80`}
                >
                  {item.preview.subheading}
                </p>
              </div>
              <div className="mt-4 grid gap-2 text-[11px] font-medium sm:grid-cols-2">
                {item.preview.stats.map((stat) => {
                  const statClasses =
                    item.preview.statsVariant === 'dark'
                      ? 'inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-[#0f172a] backdrop-blur'
                      : 'inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-white/90 backdrop-blur-sm';
                  const dotClasses =
                    item.preview.statsVariant === 'dark'
                      ? 'inline-flex h-1.5 w-1.5 rounded-full bg-[#0f172a]/70'
                      : 'inline-flex h-1.5 w-1.5 rounded-full bg-white/70';
                  return (
                    <span key={stat} className={statClasses}>
                      <span className={dotClasses} />
                      {stat}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="font-heading text-xl text-linyr-charcoal">
              {item.title}
            </h3>
            <p className="mt-3 text-sm text-linyr-slate">{item.description}</p>
            <span className="mt-auto pt-6 text-sm font-semibold text-linyr-blue transition group-hover:text-linyr-gold">
              Explore the demo →
            </span>
          </div>
        </Link>
      ))}
    </div>
  </section>
);

export { PortfolioSection };
