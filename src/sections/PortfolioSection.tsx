import Link from 'next/link';

const portfolioItems = [
  {
    title: 'Commerce',
    description:
      'High-converting SaaS commerce landing system engineered for fast launches.',
    image: '/assets/images/nextjs-landing-page-screenshot.png',
    href: '/demo/commerce',
  },
  {
    title: 'Workflow',
    description:
      'Operational automation story blending traction metrics with product depth.',
    image: '/assets/images/nextjs-landing-page-screenshot.png',
    href: '/demo/workflow',
  },
  {
    title: 'Insights',
    description:
      'Narrative analytics experience that builds trust around complex data.',
    image: '/assets/images/nextjs-landing-page-screenshot.png',
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
          Every launch pairs strategic conversion design with intentional
          interaction patterns so your team can scale with confidence.
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
          <div className="relative h-52 overflow-hidden bg-linyr-charcoal/5">
            <img
              src={item.image}
              alt={`${item.title} mockup`}
              className="size-full object-cover transition duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-linyr-charcoal/60 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
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
