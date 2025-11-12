import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const navLinks = [
  { label: 'Overview', href: '#overview' },
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'Resources', href: '#resources' },
];

const serviceCards = [
  {
    title: 'Fractional CFO Program',
    description:
      'Dedicated finance leadership that plugs into your executive meetings, planning cycles, and investor updates.',
    features: [
      'Weekly KPI review and forecasting rhythm',
      'Board decks, fundraising support, and diligence prep',
      'Hiring, compensation, and cash planning guidance',
    ],
  },
  {
    title: 'Finance Operations Suite',
    description:
      'Reliable close, reporting, and compliance handled by a blended controller and accounting team.',
    features: [
      'Close management and multi-entity consolidations',
      'Revenue recognition, billing, and collections support',
      'Payroll, tax, and compliance monitoring',
    ],
  },
  {
    title: 'Transaction & Advisory Desk',
    description:
      'Project-based support for M&A, capital raises, and special finance initiatives with senior oversight.',
    features: [
      'Scenario modeling and capital structure analysis',
      'Integration roadmaps and post-close KPI tracking',
      'Buy-side and sell-side diligence coordination',
    ],
  },
];

const resultStories = [
  {
    client: 'Northwind Labs',
    headline: 'Extended runway by 16 months with a new capital plan.',
    detail:
      'Partnered with the founding team to recalibrate pricing, rebuild the board update cadence, and secure a $24M Series B extension.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80',
    tag: 'Venture-backed security',
  },
  {
    client: 'Cascade Robotics',
    headline: 'Brought gross margin to 54% while scaling production.',
    detail:
      'Implemented rolling forecasts, vendor scorecards, and unit-economics dashboards to guide a 3-site manufacturing rollout.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80',
    tag: 'Manufacturing & hardware',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Onboard & Assess',
    description:
      'Two-week immersion into your models, current tooling, and leadership priorities. We deliver a finance scorecard with the first 90-day roadmap.',
  },
  {
    step: '02',
    title: 'Stabilize & Build',
    description:
      'Stand up the right mix of leadership, operations, and automation. Weekly cadences and dashboards surface the signals your team needs.',
  },
  {
    step: '03',
    title: 'Scale & Advise',
    description:
      'As growth plans evolve, we guide scenario planning, fundraising, and strategic initiatives with the same pod of finance leads.',
  },
];

const testimonials = [
  {
    quote:
      '“Redwood Ledger felt like an extension of our exec team from day one. Our burn multiple dropped under 1.0x and we walked into our raise with bulletproof metrics.”',
    name: 'Maya Chen',
    role: 'CEO, Atlas Banking',
  },
  {
    quote:
      '“They rebuilt our reporting stack, re-negotiated key vendor contracts, and coached our finance hire through the handoff. It’s the best partnership we’ve had.”',
    name: 'Jordan Blake',
    role: 'COO, Northwind Labs',
  },
];

const resourceArticles = [
  {
    title: '2025 SaaS Finance Benchmarks',
    description:
      'Benchmarks, playbooks, and margin levers for venture-backed finance teams preparing for the next round.',
    href: '/',
  },
  {
    title: 'Founder’s Guide to Finance Ops',
    description:
      'How to staff, automate, and measure the first 24 months of your finance function.',
    href: '/',
  },
  {
    title: 'Capital Raise Checklist',
    description:
      'A detailed prep list for data rooms, diligence Q&A, and board readiness before you run a process.',
    href: '/',
  },
];

const clientLogos = ['Northwind', 'Cascade', 'Atlas', 'Pilotworks', 'Motive'];

const RedwoodLedgerDemo = () => (
  <>
    <Meta
      title={`Redwood Ledger CPA Demo — ${AppConfig.title}`}
      description="Explore Redwood Ledger CPA, a boutique finance partner delivering fractional leadership, finance operations, and transaction support."
    />
    <main className="bg-[#f7f9fc] text-[#0b1739]">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-[#0b1739]"
          >
            Redwood Ledger
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-full px-3 py-1 text-[#0b1739]/75 transition hover:bg-[#e6ecf8] hover:text-[#0b1739]"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#book-consultation"
            className="inline-flex items-center rounded-full bg-[#0b1739] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(11,23,57,0.25)] transition hover:-translate-y-0.5 hover:bg-[#091131]"
          >
            Schedule consultation
          </Link>
        </div>
      </header>

      <section id="overview" className="border-b border-[#d8deea] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:px-12">
          <div className="max-w-xl space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#0b1739]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-[#0b1739]/70">
              Finance leadership on call
            </span>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              Finance partners who make board meetings feel easy.
            </h1>
            <p className="text-base text-[#213156]">
              Redwood Ledger pairs experienced CFOs, controllers, and analysts
              with venture-backed teams that need clear numbers and confident
              storytelling. We manage the work, build the models, and keep
              leadership focused on growth.
            </p>
            <ul className="space-y-3 text-sm text-[#213156]">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#0b1739]" />
                Fractional CFO pods with weekly exec cadences
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#0b1739]" />
                Close management, clean reporting, and automated dashboards
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#0b1739]" />
                Fundraising, investor relations, and diligence support on tap
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#services"
                className="inline-flex items-center rounded-full bg-[#0b1739] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#091131]"
              >
                Explore services
              </Link>
              <Link
                href="/#book-consultation"
                className="inline-flex items-center rounded-full border border-[#0b1739]/20 px-6 py-3 text-sm font-semibold text-[#0b1739] transition hover:border-[#0b1739]/50"
              >
                Talk with a partner →
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-[#94a3c0]">
              {clientLogos.map((logo) => (
                <span key={logo}>{logo}</span>
              ))}
            </div>
          </div>
          <div className="w-full sm:max-w-lg">
            <div className="overflow-hidden rounded-3xl border border-[#d8deea] bg-[#f3f6fb] shadow-[0_20px_60px_rgba(11,23,57,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=80"
                alt="Finance team collaborating in a conference room"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="space-y-3 px-6 py-5 text-sm text-[#213156]">
                <p className="font-heading text-base text-[#0b1739]">
                  Weekly finance leadership, investor updates, and scenario
                  planning delivered as a service.
                </p>
                <p>
                  Your pod joins exec meetings, owns finance rhythms, and
                  prepares the reporting packages investors expect.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#e6ecf8] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1739]">
                Services
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Tailored programs for high-growth finance teams.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#213156] md:mt-0">
              Whether you need fractional leadership, reliable operations, or
              help navigating a strategic moment, we scope a pod around your
              needs and scale it with you.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="flex h-full flex-col rounded-3xl border border-[#d8deea] bg-[#f7f9fc] p-8 shadow-[0_16px_45px_rgba(11,23,57,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(11,23,57,0.12)]"
              >
                <h3 className="font-heading text-xl text-[#0b1739]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[#213156]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#1f2f63]">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-[#0b1739]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#book-consultation"
                  className="mt-auto inline-flex items-center rounded-full border border-[#0b1739]/20 px-4 py-2 text-sm font-semibold text-[#0b1739] transition hover:border-[#0b1739]/40"
                >
                  Discuss scope →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="case-studies" className="bg-[#f0f4fb] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1739]/70">
                Case studies
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Results from teams we serve every week.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#213156] md:mt-0">
              From venture-backed SaaS to hardware and fintech, we stay engaged
              through fundraising cycles, scaling operations, and strategic
              transactions.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {resultStories.map((story) => (
              <article
                key={story.client}
                className="overflow-hidden rounded-3xl border border-[#d8deea] bg-white shadow-[0_20px_60px_rgba(11,23,57,0.08)]"
              >
                <img
                  src={story.image}
                  alt={`${story.client} finance team`}
                  className="h-56 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-3 p-6 text-sm text-[#213156]">
                  <span className="inline-flex items-center rounded-full bg-[#e6ecf8] px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1739]/70">
                    {story.tag}
                  </span>
                  <h3 className="font-heading text-xl text-[#0b1739]">
                    {story.client}
                  </h3>
                  <p className="font-semibold text-[#0b1739]">
                    {story.headline}
                  </p>
                  <p>{story.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#e6ecf8] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1739]">
                Working together
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                A clear operating rhythm from day one.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#213156] md:mt-0">
              We keep engagements structured and transparent so leadership
              always knows what’s in motion and what decisions are needed next.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="rounded-3xl border border-[#d8deea] bg-[#f7f9fc] p-6 shadow-[0_16px_45px_rgba(11,23,57,0.08)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#94a3c0]">
                  Step {step.step}
                </span>
                <h3 className="mt-3 font-heading text-xl text-[#0b1739]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#213156]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f0f4fb] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1739]/70">
              Testimonials
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Trusted by founders and operators.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-3xl border border-[#d8deea] bg-white p-6 text-sm text-[#213156] shadow-[0_16px_45px_rgba(11,23,57,0.08)]"
              >
                <p className="text-base text-[#0b1739]">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-[#0b1739]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#94a3c0]">
                  {testimonial.role}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:justify_between md:flex md:items-end">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#e6ecf8] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1739]">
                Resources
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Finance guides to support your next milestone.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#213156] md:mt-0">
              Browse a sample of the reports, playbooks, and templates we
              provide to clients throughout an engagement.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {resourceArticles.map((article) => (
              <article
                key={article.title}
                className="rounded-3xl border border-[#d8deea] bg-[#f7f9fc] p-6 text-sm text-[#213156] shadow-[0_12px_35px_rgba(11,23,57,0.08)]"
              >
                <h3 className="font-heading text-lg text-[#0b1739]">
                  {article.title}
                </h3>
                <p className="mt-3">{article.description}</p>
                <Link
                  href={article.href}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#0b1739] transition hover:text-[#091131]"
                >
                  Access resource →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1739] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-0">
          <h2 className="font-heading text-3xl md:text-4xl">
            Ready to put steady finance leadership behind your growth?
          </h2>
          <p className="mt-4 text-sm text-white/75 md:text-base">
            Book a consultation and we’ll map the pod, timeline, and outcomes
            you can expect in the first 90 days.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0b1739] transition hover:-translate-y-0.5 hover:bg-[#f0f4fb]"
            >
              Schedule a call
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              See detailed offerings
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default RedwoodLedgerDemo;
