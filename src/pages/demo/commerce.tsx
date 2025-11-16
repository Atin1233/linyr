import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'Insights', href: '#insights' },
];

const heroHighlights = [
  {
    title: 'Fractional CFO Pods',
    description:
      'Executive leadership that writes the board deck, leads forecast reviews, and keeps your cash story tight.',
  },
  {
    title: 'Finance Ops Engine',
    description:
      'Controllers and analysts embedded in your systems to deliver a clean close and dependable reporting.',
  },
  {
    title: 'Deal & Diligence Desk',
    description:
      'Project-level pods built for fundraising, M&A, and strategic pricing work when timing matters.',
  },
];

const services = [
  {
    title: 'Fractional CFO Program',
    copy: 'Partner-level finance leadership with standing cadences, investor comms, and scenario planning.',
    bullets: [
      'Weekly finance leadership and OKR reviews',
      'Board-ready models, decks, and narratives',
      'Capital planning, pipeline & pricing strategy',
    ],
  },
  {
    title: 'Finance Operations Suite',
    copy: 'Close management, reporting, and RevOps handled by controllers and analysts in our pod structure.',
    bullets: [
      'Close + consolidation playbooks',
      'Revenue operations & billing governance',
      'Compliance and control monitoring',
    ],
  },
  {
    title: 'Transactions & Advisory',
    copy: 'Specialized pods for diligence, integrations, cost programs, and liquidity events.',
    bullets: [
      'Buy-side and sell-side diligence support',
      'Integration roadmaps with KPI guardrails',
      'Margin & cost optimization sprints',
    ],
  },
];

const caseStudies = [
  {
    company: 'Northwind Labs',
    industry: 'AI Security',
    headline:
      'Extended runway by 16 months and completed a $24M extension round.',
    body: 'We rebuilt the operating model, orchestrated investor updates, and coached leadership through pricing and hiring moves.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80',
  },
  {
    company: 'Cascade Robotics',
    industry: 'Manufacturing',
    headline:
      'Lifted gross margin to 54% while scaling production across three sites.',
    body: 'Implemented vendor scorecards, automated inventory reporting, and stood up a close cadence that aligned ops and finance.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80',
  },
  {
    company: 'Atlas Banking',
    industry: 'Fintech',
    headline: 'Navigated diligence and closed a Series C within 90 days.',
    body: 'Built the data room, wrote investor narratives, and managed diligence workflows across legal, HR, and finance teams.',
    image:
      'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=1400&q=80',
  },
];

const processSteps = [
  {
    title: 'Discover & Map',
    description:
      'Two-week immersion into tooling, models, and leadership priorities. Deliverable: finance scorecard + 90-day plan.',
  },
  {
    title: 'Operate & Embed',
    description:
      'Pods take over close, reporting, and meeting rhythms. We keep executives informed and investors confident.',
  },
  {
    title: 'Advise & Scale',
    description:
      'Finance leadership supports strategy, fundraising, and special projects while we grow the pod alongside your team.',
  },
];

const insightCards = [
  {
    title: '2025 SaaS Finance Benchmarks',
    description:
      'Key metrics, burn multiples, and runway guidance from 120 venture-backed finance teams.',
  },
  {
    title: 'Founder Finance Operating Guide',
    description:
      'How to staff finance, when to add RevOps, and frameworks for healthy cash conversations.',
  },
  {
    title: 'Diligence Playbook',
    description:
      'Checklists, data room structure, and narrative guidance before running a process.',
  },
];

const testimonials = [
  {
    quote:
      '“Redwood Ledger dropped burn multiple below 1.0x and walked us into an extension round with clean, confident numbers.”',
    name: 'Maya Chen',
    title: 'CEO, Atlas Banking',
  },
  {
    quote:
      '“They operate like an in-house CFO team—weekly signals, fast scenario work, and depth when diligence hit.”',
    name: 'Jordan Blake',
    title: 'COO, Northwind Labs',
  },
];

const financeLogos = [
  'Northwind',
  'Cascade Robotics',
  'Atlas',
  'Pilotworks',
  'Motive',
];

const RedwoodLedgerDemo = () => (
  <>
    <Meta
      title={`Redwood Ledger CPA Demo — ${AppConfig.title}`}
      description="Explore Redwood Ledger’s fractional CFO, finance operations, and advisory services delivered by embedded finance pods."
    />
    <main className="bg-[#f7f9fc] text-[#16324f]">
      <header className="sticky top-0 z-30 border-b border-[#d9e2f1] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-[#16324f]"
          >
            Redwood Ledger
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1 text-[#1f4060]/75 transition hover:bg-[#e8eff9] hover:text-[#16324f]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#book-consultation"
            className="inline-flex items-center rounded-full bg-[#16324f] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(22,50,79,0.25)] transition hover:-translate-y-0.5"
          >
            Talk to finance leadership
          </Link>
        </div>
      </header>

      <section
        id="overview"
        className="border-b border-[#d9e2f1] bg-white"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(247,249,252,0.88) 0%, rgba(247,249,252,1) 55%), url(https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.15fr,0.85fr] md:px-12">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#1f4060]">
              Fractional finance leadership
            </span>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              Finance pods that turn metrics into momentum.
            </h1>
            <p className="text-base text-[#375273]">
              We embed senior CFOs, controllers, and analysts into your team.
              They operate your close, build executive-ready reporting, and
              steer capital conversations so founders stay focused on customers
              and product.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center rounded-full bg-[#16324f] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Explore service pods
              </Link>
              <Link
                href="/#book-consultation"
                className="inline-flex items-center rounded-full border border-[#16324f]/30 px-6 py-3 text-sm font-semibold text-[#16324f] transition hover:border-[#16324f]"
              >
                Request a finance assessment →
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-[#375273] sm:grid-cols-3">
              {heroHighlights.map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-[#d9e2f1] bg-white/80 p-4 shadow-sm"
                >
                  <p className="font-heading text-base text-[#16324f]">
                    {highlight.title}
                  </p>
                  <p className="mt-2 text-xs">{highlight.description}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#8fa3bf]">
              {financeLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-[#d9e2f1] bg-white/90 shadow-[0_16px_45px_rgba(22,50,79,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                alt="Finance team collaborating"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-4 border-t border-[#d9e2f1] bg-white p-6 text-sm text-[#375273] md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#1f4060]">
                    Leader cadence
                  </p>
                  <p className="mt-1">
                    Weekly exec review packets, cash dashboards, and rolling
                    forecasts.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#1f4060]">
                    Investor readiness
                  </p>
                  <p className="mt-1">
                    Data rooms, diligence coaching, and on-call support when the
                    process starts.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#d9e2f1] bg-white/90 p-6 text-sm text-[#375273] shadow-[0_16px_45px_rgba(22,50,79,0.1)]">
              <p className="font-heading text-base text-[#16324f]">
                Signals we deliver weekly
              </p>
              <ul className="mt-3 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#16324f]" />
                  Board-ready scorecards and runway insights
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#16324f]" />
                  Margin and unit economic breakdowns with commentary
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#16324f]" />
                  Action signals for hiring, pricing, and spend controls
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f4060]">
                Services
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Flexible pods aligned to your finance roadmap.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#375273] md:mt-0">
              Start with the pod you need—fractional leadership, dependable
              operations, or transaction support. We adjust scope and talent as
              your business evolves.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-[#d9e2f1] bg-white p-8 shadow-[0_12px_35px_rgba(22,50,79,0.12)]"
              >
                <h3 className="font-heading text-xl text-[#16324f]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[#375273]">{service.copy}</p>
                <ul className="mt-6 space-y-3 text-sm text-[#375273]">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-[#16324f]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-[#e8eff9] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f4060]">
                Case studies
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Proven finance partnerships across sectors.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#375273] md:mt-0">
              We stay engaged through fundraising cycles, expansions, and margin
              programs—delivering finance clarity every week along the way.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex snap-x gap-6">
              {caseStudies.map((study) => (
                <article
                  key={study.company}
                  className="group relative h-[320px] w-[340px] flex-none snap-center overflow-hidden rounded-3xl border border-[#d9e2f1] bg-[#0f4c75] shadow-[0_20px_55px_rgba(22,50,79,0.2)]"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(15,76,117,0.35) 0%, rgba(15,76,117,0.85) 75%), url(${study.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="flex h-full flex-col justify-between p-6 text-white">
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                        {study.industry}
                      </p>
                      <h3 className="font-heading text-lg">{study.company}</h3>
                    </div>
                    <div className="space-y-2 text-sm text-white/85">
                      <p className="font-semibold">{study.headline}</p>
                      <p className="text-xs leading-relaxed text-white/70">
                        {study.body}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f0f4fa] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f4060]">
                Working rhythm
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Clarity from onboarding to advisory.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#375273] md:mt-0">
              Pods communicate proactively, stay aligned with leadership, and
              surface the metrics needed to make confident calls every week.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-[#d9e2f1] bg-white p-6 shadow-[0_12px_35px_rgba(22,50,79,0.12)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#1f4060]">
                  Phase
                </p>
                <h3 className="mt-2 font-heading text-lg text-[#16324f]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#375273]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#e8eff9] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f4060]">
              Testimonials
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Leaders who rely on Redwood every week.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="border[#d9e2f1] bg[#f7f9fc] rounded-3xl border p-6 text-sm text-[#375273] shadow-[0_12px_35px_rgba(22,50,79,0.1)]"
              >
                <p className="text-base text-[#16324f]">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-[#16324f]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#1f4060]">
                  {testimonial.title}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="bg-[#f7f9fc] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#1f4060]">
                Insights & templates
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Resources we give every finance pod.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#375273] md:mt-0">
              Browse examples of the frameworks, benchmarks, and playbooks that
              help our clients operate finance with clarity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insightCards.map((insight) => (
              <article
                key={insight.title}
                className="rounded-3xl border border-[#d9e2f1] bg-white p-6 text-sm text-[#375273] shadow-[0_12px_35px_rgba(22,50,79,0.1)]"
              >
                <h3 className="font-heading text-lg text-[#16324f]">
                  {insight.title}
                </h3>
                <p className="mt-3">{insight.description}</p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#16324f] transition hover:text-[#0d2337]"
                >
                  Download resource →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#16324f] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-0">
          <h2 className="font-heading text-3xl md:text-4xl">
            Ready for finance leadership that keeps pace with your goals?
          </h2>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            Share your roadmap and gaps. We’ll propose a pod structure,
            timeline, and measurable impact for the first 90 days.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#16324f] transition hover:-translate-y-0.5 hover:bg-[#f7f9fc]"
            >
              Schedule a consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Review service pods
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default RedwoodLedgerDemo;
