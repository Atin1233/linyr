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

const RedwoodLedgerDemo = () => (
  <>
    <Meta
      title={`Redwood Ledger CPA Demo — ${AppConfig.title}`}
      description="Explore Redwood Ledger CPA, a premium accounting and finance partner experience crafted by Linyr Digital."
    />
    <main className="bg-[#070d23] text-white">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1739] via-[#131f4b] to-[#1f2f63]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 md:px-12">
          <div className="grid gap-10 md:grid-cols-[1.2fr,0.8fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Boutique CPA &amp; Advisory
              </span>
              <h1 className="mt-6 font-heading text-4xl leading-tight text-white md:text-6xl">
                Redwood Ledger CPA — Fractional finance that scales with
                ambition.
              </h1>
              <p className="mt-6 text-lg text-white/70 md:text-xl">
                We position Redwood as the executive finance partner for
                venture-backed teams. Every section of this demo is tuned to
                earn board-level trust, surface measurable outcomes, and convert
                high-consideration prospects.
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
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
              <h2 className="font-heading text-2xl text-white">
                Executive Snapshot
              </h2>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div>
                  <p className="font-heading text-4xl text-white">42%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">
                    faster close cycles
                  </p>
                </div>
                <div>
                  <p className="font-heading text-4xl text-white">$6.8M</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">
                    capital raised last quarter
                  </p>
                </div>
                <div>
                  <p className="font-heading text-4xl text-white">97%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">
                    retention rate
                  </p>
                </div>
                <div>
                  <p className="font-heading text-4xl text-white">12</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/60">
                    industries supported
                  </p>
                </div>
              </div>
              <p className="mt-6 text-sm text-white/70">
                Data pairings throughout the page reinforce Redwood’s command of
                finance operations, while secondary CTAs keep prospects inside
                the conversion funnel.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {advisoryHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/10 p-6 text-white/80 shadow-[0_25px_60px_rgba(10,14,40,0.45)]"
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
                className="flex h-full flex-col rounded-3xl border border-[#0b1739]/10 bg-[#f4f6ff] p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
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
                A rotating hub of market reports, deep-dive webinars, and punchy
                email insights demonstrates Redwood’s command of capital markets
                and compliance.
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
  </>
);

export default RedwoodLedgerDemo;
