import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const advisoryHighlights = [
  {
    title: 'Strategic Finance Pods',
    body: 'Dedicated CFO, controller, and analyst embedded with your leadership team to model scenarios and steer board conversations.',
  },
  {
    title: 'Compliance Orchestrated',
    body: 'Tax, payroll, and audit readiness automated through a single portal so founders can focus on growth instead of paperwork.',
  },
  {
    title: 'Capital Raise Playbooks',
    body: 'Investor decks, data rooms, and diligence trackers designed to accelerate fundraising cycles without sacrificing rigor.',
  },
];

const servicePackages = [
  {
    name: 'Fractional CFO Residency',
    price: 'Starting at $6,800 / month',
    bullets: [
      'Weekly leadership syncs and KPI instrumentation',
      '12-month forecast, cash runway, and scenario modeling',
      'Investor relations support and board reporting',
    ],
  },
  {
    name: 'Compliance Engine',
    price: 'Starting at $2,900 / month',
    bullets: [
      'Full-cycle bookkeeping and multi-entity consolidation',
      'Quarterly tax strategy, filings, and audit snapshots',
      'Dedicated support channel with < 2 hour response time',
    ],
  },
  {
    name: 'Transaction Desk',
    price: 'Custom engagement',
    bullets: [
      'M&A diligence, carve-out modeling, and integration roadmaps',
      'Equity compensation, waterfall design, and 409A coordination',
      'Collaborative war room with secure document vault',
    ],
  },
];

const workspaceGallery = [
  {
    src: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    alt: 'Finance leadership workshop in modern boardroom',
    caption: 'Founder working session inside Redwood Ledger HQ.',
  },
  {
    src: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1200&q=80',
    alt: 'Financial models and dashboards on laptop',
    caption: 'Live dashboards and scenario modeling at work.',
  },
  {
    src: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    alt: 'Advisor reviewing paperwork with client',
    caption: 'Client advisory pods meeting on-site with founders.',
  },
];

const clientSnapshots = [
  {
    company: 'Northwind Labs',
    industry: 'AI Security',
    headline: 'Extended runway by 18 months with redesigned capital stack.',
    image:
      'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    company: 'Cascade Robotics',
    industry: 'Robotics Manufacturing',
    headline: 'Reduced burn multiple to 0.9× after unit economics overhaul.',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    company: 'Atlas Banking',
    industry: 'Fintech',
    headline: 'Closed Series B with investor-ready diligence package.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80',
  },
];

const RedwoodLedgerDemo = () => (
  <>
    <Meta
      title={`Redwood Ledger CPA Demo — ${AppConfig.title}`}
      description="Explore Redwood Ledger CPA, a premium accounting and finance partner experience crafted by Linyr Digital."
    />
    <main className="bg-[#070d23] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1739] via-[#131f4b] to-[#1f2f63]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 py-28 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.2fr,0.8fr]">
            <div className="fade-up">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Boutique CPA &amp; Advisory
              </span>
              <h1 className="mt-6 font-heading text-4xl leading-tight text-white md:text-6xl">
                {`Redwood Ledger CPA — Fractional finance that scales with ambition.`}
              </h1>
              <p className="mt-6 text-lg text-white/70 md:text-xl">
                {`We position Redwood as the executive finance partner for venture-backed teams. Every section of this demo is tuned to earn board-level trust, surface measurable outcomes, and convert high-consideration prospects.`}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#services"
                  className="inline-flex items-center rounded-full bg-white/90 px-7 py-3 text-sm font-semibold text-[#111d4a] shadow-[0_18px_40px_rgba(255,255,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(255,255,255,0.3)]"
                >
                  View Service Packages
                </Link>
                <Link
                  href="/#book-consultation"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
                >
                  Book a discovery call →
                </Link>
              </div>
            </div>
            <div className="fade-right relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
              <div className="absolute -left-12 -top-12 size-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.4),transparent)]" />
              <div className="absolute -right-16 bottom-0 size-60 rounded-full bg-[radial-gradient(circle_at_center,rgba(148,197,255,0.35),transparent)]" />
              <div className="relative space-y-6">
                <h2 className="font-heading text-2xl text-white">
                  Executive Dashboard
                </h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      ARR
                    </p>
                    <p className="mt-2 font-heading text-3xl">$48.6M</p>
                    <p className="mt-1 text-xs text-white/60">+12% QoQ</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Burn Multiple
                    </p>
                    <p className="mt-2 font-heading text-3xl">0.9×</p>
                    <p className="mt-1 text-xs text-white/60">best-in-class</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Runway
                    </p>
                    <p className="mt-2 font-heading text-3xl">21 mo</p>
                    <p className="mt-1 text-xs text-white/60">scenario safe</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/30 p-4 text-white">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      Retention
                    </p>
                    <p className="mt-2 font-heading text-3xl">97%</p>
                    <p className="mt-1 text-xs text-white/60">net revenue</p>
                  </div>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80"
                  alt="Finance workspace overview"
                  className="w-full rounded-2xl border border-white/10 object-cover shadow-[0_18px_40px_rgba(7,13,35,0.45)]"
                  loading="lazy"
                />
                <p className="text-sm text-white/70">
                  {`Motion elements and hero analytics set expectations for a modern finance function while maintaining Redwood’s premium feel.`}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {advisoryHighlights.map((item) => (
              <div
                key={item.title}
                className="fade-up rounded-3xl border border-white/10 bg-white/10 p-6 text-white/80 shadow-[0_25px_60px_rgba(10,14,40,0.45)]"
              >
                <h3 className="font-heading text-xl text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-[#0b1739]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="fade-up">
              <span className="inline-flex items-center rounded-full border border-[#0b1739]/15 bg-[#0b1739]/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#0b1739]/70">
                Inside the practice
              </span>
              <h2 className="mt-6 font-heading text-3xl md:text-4xl">
                Real finance operators, real rooms, real accountability.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#1f2f63]">
                Prospective partners want a feel for the people they will work
                with. The workspace gallery and hospitality details show Redwood
                Ledger is a hands-on finance house—not a faceless SaaS portal.
              </p>
              <dl className="mt-8 grid gap-4 text-sm text-[#1f2f63] sm:grid-cols-2">
                <div className="rounded-2xl border border-[#0b1739]/10 bg-white/80 p-4">
                  <dt className="font-semibold text-[#0b1739]">Office</dt>
                  <dd>501 Congress Ave, Suite 2600 · Austin, TX</dd>
                </div>
                <div className="rounded-2xl border border-[#0b1739]/10 bg-white/80 p-4">
                  <dt className="font-semibold text-[#0b1739]">
                    Concierge line
                  </dt>
                  <dd>(512) 555-0192 · concierge@redwoodledger.com</dd>
                </div>
                <div className="rounded-2xl border border-[#0b1739]/10 bg-white/80 p-4">
                  <dt className="font-semibold text-[#0b1739]">Client hours</dt>
                  <dd>Monday–Friday · 8:00a–6:30p CST</dd>
                </div>
                <div className="rounded-2xl border border-[#0b1739]/10 bg-white/80 p-4">
                  <dt className="font-semibold text-[#0b1739]">
                    Quarterly summits
                  </dt>
                  <dd>
                    In-person in Austin or live in your HQ, included in every
                    plan.
                  </dd>
                </div>
              </dl>
            </div>
            <div className="fade-right grid gap-6 sm:grid-cols-2">
              {workspaceGallery.map((item) => (
                <figure
                  key={item.alt}
                  className="overflow-hidden rounded-3xl border border-[#0b1739]/10 bg-[#f8faff]"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="h-48 w-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <figcaption className="px-5 py-4 text-sm text-[#1f2f63]">
                    {item.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white py-24 text-linyr-charcoal">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#0b1739]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0b1739]">
                Services
              </span>
              <h2 className="mt-6 font-heading text-3xl md:text-4xl">
                Modular programs engineered around measurable outcomes.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-linyr-slate md:mt-0">
              Packages scale from foundational compliance to executive-level
              finance leadership. Pricing cues are deliberate: transparent
              enough to set expectations, flexible enough to start a
              conversation.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {servicePackages.map((pkg) => (
              <div
                key={pkg.name}
                className="fade-up-delayed flex h-full flex-col rounded-3xl border border-[#0b1739]/10 bg-[#f4f6ff] p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="font-heading text-xl text-[#0b1739]">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-sm font-semibold text-[#1f2f63]">
                  {pkg.price}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#334173]">
                  {pkg.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-[#0b1739]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/#book-consultation"
                  className="mt-auto inline-flex items-center justify-center rounded-full border border-[#0b1739]/20 px-4 py-2 text-sm font-semibold text-[#0b1739] transition hover:border-[#0b1739]/40 hover:text-[#091131]"
                >
                  Request scoping call →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1536] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-start md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Advisory Journey
              </span>
              <h2 className="mt-6 font-heading text-3xl text-white md:text-4xl">
                A guided path from first audit to board peace-of-mind.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Redwood’s onboarding is visualized as a three-stage
                lifecycle—Audit, Build, Elevate—reinforced by status cards and
                interactive scheduling prompts.
              </p>
            </div>
            <div className="mt-10 grid gap-6 md:mt-0">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Stage 01
                </p>
                <h3 className="mt-3 font-heading text-xl text-white">Audit</h3>
                <p className="mt-2 text-sm text-white/70">
                  Rapid finance health report, tooling audit, and compliance
                  triage delivered in two weeks.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Stage 02
                </p>
                <h3 className="mt-3 font-heading text-xl text-white">Build</h3>
                <p className="mt-2 text-sm text-white/70">
                  KPI architecture, operating cadence, and dashboards co-created
                  with your leadership team.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Stage 03
                </p>
                <h3 className="mt-3 font-heading text-xl text-white">
                  Elevate
                </h3>
                <p className="mt-2 text-sm text-white/70">
                  Forecasting, scenario planning, and investor relations that
                  help you navigate milestones with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-linyr-charcoal">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl">
                Trust, proof, and thought leadership in one narrative.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-linyr-slate">
                {`A rotating hub of market reports, deep-dive webinars, and punchy email insights demonstrates Redwood’s command of capital markets and compliance.`}
              </p>
              <div className="mt-8 rounded-3xl border border-[#0b1739]/10 bg-[#0b1739]/5 p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#0b1739]">
                  Featured Insight
                </p>
                <h3 className="mt-3 font-heading text-xl text-[#0b1739]">
                  2025 SaaS Finance Benchmarks
                </h3>
                <p className="mt-2 text-sm text-[#1f2f63]">
                  Learn how 150 seed through Series C companies are
                  restructuring finance teams and the impact on burn multiples.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#0b1739] transition hover:text-[#091131]"
                >
                  Download the report →
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#0b1739]/10 bg-[#f8faff] p-6">
                <p className="text-sm font-semibold text-[#0b1739]">
                  Newsletter Series
                </p>
                <p className="mt-2 text-sm text-[#1f2f63]">
                  Weekly “Ledger Signals” digest covering macro shifts, tax
                  rulings, and revenue strategy tips.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#0b1739] transition hover:text-[#091131]"
                >
                  Join the digest →
                </Link>
              </div>
              <div className="rounded-3xl border border-[#0b1739]/10 bg-[#f8faff] p-6">
                <p className="text-sm font-semibold text-[#0b1739]">
                  Board-Ready Templates
                </p>
                <p className="mt-2 text-sm text-[#1f2f63]">
                  FP&amp;A packs, board memo outlines, and investor update
                  templates available behind an email gate to capture qualified
                  leads.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#0b1739] transition hover:text-[#091131]"
                >
                  Access the vault →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1739]/5 py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-12 text-center text-[#0b1739]">
            <span className="inline-flex items-center rounded-full border border-[#0b1739]/15 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#0b1739]/70">
              Client stories
            </span>
            <h2 className="mt-6 font-heading text-3xl md:text-4xl">
              Operators who rely on Redwood Ledger day-to-day.
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-base text-[#1f2f63]">
              Each engagement showcases real companies, real teams, and the
              tangible wins that followed partnering with our finance pods.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {clientSnapshots.map((client) => (
              <article
                key={client.company}
                className="overflow-hidden rounded-3xl border border-[#0b1739]/10 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,0.16)]"
              >
                <img
                  src={client.image}
                  alt={`${client.company} team`}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-2 px-6 py-5 text-sm text-[#1f2f63]">
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0b1739]/70">
                    {client.industry}
                  </p>
                  <h3 className="font-heading text-lg text-[#0b1739]">
                    {client.company}
                  </h3>
                  <p>{client.headline}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b1739] py-24">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/15 bg-white/5 p-10 text-center shadow-[0_30px_80px_rgba(6,12,30,0.55)] backdrop-blur">
          <p className="text-xs uppercase tracking-[0.35em] text-white/60">
            Client Testimonial
          </p>
          <blockquote className="mt-6 text-xl leading-relaxed text-white">
            “Redwood Ledger stepped in like an executive partner. In 90 days we
            had a finance operating system, investor-ready metrics, and clarity
            on our Series B narrative.”
          </blockquote>
          <p className="mt-4 text-sm font-semibold text-white">
            Jordan Hale — CEO, Manuscript AI
          </p>
        </div>
      </section>

      <section className="bg-white py-24 text-linyr-charcoal">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl">
                FAQs crafted for venture-backed operators.
              </h2>
              <p className="mt-4 text-sm text-linyr-slate">
                Inline FAQ accordions remove friction by covering pricing,
                onboarding timelines, and reporting transparency—key concerns
                for fast-scaling teams.
              </p>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: 'How does onboarding work?',
                  a: 'We begin with a two-week audit sprint that inventories tools, creates a finance scorecard, and maps the first 90-day roadmap.',
                },
                {
                  q: 'Do you integrate with our existing systems?',
                  a: 'Yes. NetSuite, QuickBooks, Ramp, Carta, Workday, Airbase, and custom data warehouses are all supported.',
                },
                {
                  q: 'Can we start with compliance only?',
                  a: 'Absolutely. Many clients begin with Compliance Engine and expand into Fractional CFO Pods once the foundation is stable.',
                },
              ].map((item) => (
                <div
                  key={item.q}
                  className="rounded-2xl border border-[#0b1739]/10 bg-[#f8faff] p-5"
                >
                  <p className="font-heading text-base text-[#0b1739]">
                    {item.q}
                  </p>
                  <p className="mt-2 text-sm text-[#1f2f63]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0b1739] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-xl text-white">
              <h2 className="font-heading text-3xl md:text-4xl">
                {`Interactive reporting brings signals to life.`}
              </h2>
              <p className="mt-4 text-sm text-white/70">
                {`We showcase Redwood’s reporting muscle through a responsive analytics gallery. Each card can animate to reveal drilldowns, boosting perceived sophistication.`}
              </p>
            </div>
            <Link
              href="/"
              className="fade-right mt-8 inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white md:mt-0"
            >
              Launch the analytics demo →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
            ].map((src, i) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={i}
                className="fade-up rounded-3xl border border-white/15 bg-black/30 p-4 shadow-[0_25px_60px_rgba(0,0,0,0.45)]"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-white/10" />
                  <img
                    src={src}
                    alt="Financial data visualization"
                    className="h-48 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                </div>
                <p className="mt-4 text-sm text-white/80">
                  {`Interactive drilldowns, anomaly alerts, and scenario toggles show how Redwood builds modern finance intelligence.`}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-[#0b1739] via-[#111d4a] to-[#1f2f63] py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-3xl text-white md:text-4xl">
            Let’s modernize your finance story.
          </h2>
          <p className="mt-4 px-6 text-sm text-white/70 md:text-base">
            Ready to see how Redwood Ledger can partner with your leadership
            team? Book a consultation and we’ll tailor an engagement roadmap in
            under a week.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0b1739] transition hover:-translate-y-0.5 hover:shadow-[0_20px_50px_rgba(255,255,255,0.25)]"
            >
              Schedule Consultation
            </Link>
            <Link
              href="/#services"
              className="inline-flex items-center rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </section>
    </main>

    <style jsx>{`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(24px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeRight {
        from {
          opacity: 0;
          transform: translateX(24px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .fade-up {
        animation: fadeUp 0.9s ease-out both;
      }

      .fade-up-delayed {
        animation: fadeUp 0.9s ease-out 0.15s both;
      }

      .fade-right {
        animation: fadeRight 1s ease-out both;
      }
    `}</style>
  </>
);

export default RedwoodLedgerDemo;
