const servicesContent = {
  title: 'The Linyr Launch Package',
  description:
    'A holistic engagement to uncover, design, and deploy a revenue-ready digital experience in just six weeks.',
  priceBadge: '$5,000 Starting Engagement',
  deliverables: [
    'Flagship landing page engineered for speed, SEO, and conversion',
    'Brand-aligned UI kit with reusable design tokens and components',
    'AI-assisted copywriting tuned to your ICP and funnel stage',
    'Analytics, heatmaps, and experimentation framework wired in',
    'CMS handoff with team training and launch playbook',
  ],
  process: [
    {
      title: '01 • Strategy Sprint',
      description:
        'Immersive workshop, competitor tear-down, ICP clarity, KPI mapping, and conversion hierarchy.',
    },
    {
      title: '02 • Design & Prototype',
      description:
        'Interactive prototype with motion, microcopy, and modular components ready for stakeholder review.',
    },
    {
      title: '03 • Build & Launch',
      description:
        'Production-grade Next.js build, performance tuning, QA, launch orchestration, and post-launch optimization.',
    },
  ],
};

const ServicesSection = () => (
  <section
    className="relative mx-auto max-w-7xl px-6 py-28 text-linyr-charcoal md:px-10"
    id="services"
  >
    <div className="grid gap-12 rounded-3xl bg-gradient-to-br from-linyr-blue via-[#2333ff] to-[#101c6b] p-10 text-linyr-offWhite shadow-glass md:grid-cols-[1.1fr,0.9fr] md:p-16">
      <div>
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/80">
          Premium Package
        </span>
        <h2 className="mt-6 font-heading text-3xl text-linyr-offWhite md:text-4xl">
          {servicesContent.title}
        </h2>
        <p className="mt-5 text-base text-white/80 md:text-lg">
          {servicesContent.description}
        </p>
        <p className="mt-6 inline-flex items-center rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-linyr-offWhite shadow-md backdrop-blur">
          {servicesContent.priceBadge}
        </p>

        <ul className="mt-10 space-y-4 text-base text-white/80">
          {servicesContent.deliverables.map((deliverable) => (
            <li
              key={deliverable}
              className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/10 p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-linyr-gold/40"
            >
              <span className="mt-1 inline-flex size-6 flex-none items-center justify-center rounded-full bg-linyr-gold/90 text-sm font-semibold text-linyr-charcoal shadow-glow">
                ✓
              </span>
              <span className="text-white/90">{deliverable}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-6">
        {servicesContent.process.map((step) => (
          <div
            key={step.title}
            className="rounded-3xl border border-white/10 bg-white/10 p-6 shadow-glass transition duration-300 hover:-translate-y-1 hover:border-linyr-gold/50 hover:shadow-[0_25px_60px_rgba(10,19,70,0.35)]"
          >
            <h3 className="font-heading text-xl text-linyr-offWhite">
              {step.title}
            </h3>
            <p className="mt-3 text-sm text-white/80">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export { ServicesSection };
