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

const services = [
  {
    title: 'Fractional CFO Desk',
    description:
      'Executive-grade finance leadership managing planning cycles, board communications, and capital strategy on retainer.',
    points: [
      'Weekly finance leadership meetings',
      'Investor reporting and fundraising support',
      'Scenario modeling and cash planning',
    ],
  },
  {
    title: 'Finance Operations Suite',
    description:
      'Reliable close and reporting managed by controllers and senior accountants embedded in your workflows.',
    points: [
      'Close management and consolidations',
      'Revenue operations and billing oversight',
      'Compliance monitoring and controls',
    ],
  },
  {
    title: 'Transactions & Advisory',
    description:
      'Project-based support for M&A, diligence, and special finance initiatives with tailored pods.',
    points: [
      'Data room preparation and diligence Q&A',
      'Integration roadmaps and KPI alignment',
      'Unit economics and pricing projects',
    ],
  },
];

const caseStudies = [
  {
    client: 'Northwind Labs',
    industry: 'AI Security',
    result:
      'Extended runway by 16 months with a new capital plan and pricing strategy.',
    description:
      'Built an integrated operating model, rebuilt the weekly leadership cadence, and guided investor conversations leading into a $24M extension round.',
  },
  {
    client: 'Cascade Robotics',
    industry: 'Manufacturing',
    result:
      'Lifted gross margin to 54% while scaling production across three facilities.',
    description:
      'Implemented cost dashboards, vendor scorecards, and a new close playbook, giving executives dependable data for expansion decisions.',
  },
];

const processSteps = [
  {
    title: 'Scope & Onboard',
    detail:
      'A two-week assessment to map systems, team workflows, and reporting gaps. We deliver a finance scorecard and 90-day priorities.',
  },
  {
    title: 'Stabilize & Operate',
    detail:
      'Your pod embeds into leadership and operations. We establish reporting cadences, automate data, and manage day-to-day finance tasks.',
  },
  {
    title: 'Advise & Scale',
    detail:
      'As strategy evolves, we drive scenario planning, investor updates, and special projects with the same pod that understands your business.',
  },
];

const insights = [
  {
    title: '2025 SaaS Finance Benchmarks',
    blurb:
      'Key metrics, burn multiples, and growth levers from 120 venture-backed finance teams preparing for the next round.',
  },
  {
    title: 'Checklist: Preparing for Diligence',
    blurb:
      'A practical guide covering data rooms, KPIs, and stakeholder prep before kicking off a fundraising or M&A process.',
  },
  {
    title: 'Finance Ops Hiring Guide',
    blurb:
      'How to staff your first controller, when to add RevOps support, and playbooks for onboarding new hires.',
  },
];

const testimonials = [
  {
    quote:
      '“Redwood Ledger operates like an in-house finance team. They built our metrics infrastructure, coached our executives, and walked us into a successful raise.”',
    name: 'Maya Chen',
    role: 'CEO, Atlas Banking',
  },
  {
    quote:
      '“From weekly cash reporting to diligence prep, they kept us informed and investors impressed. It’s the best finance partnership we’ve had.”',
    name: 'Jordan Blake',
    role: 'COO, Northwind Labs',
  },
];

const RedwoodLedgerDemo = () => (
  <>
    <Meta
      title={`Redwood Ledger CPA Demo — ${AppConfig.title}`}
      description="See how Redwood Ledger delivers fractional CFO leadership, dependable finance operations, and strategic advisory for modern teams."
    />
    <main className="bg-[#f5f7fb] text-[#142640]">
      <header className="sticky top-0 z-30 border-b border-[#d8dee8] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-[#142640]"
          >
            Redwood Ledger
          </Link>
          <nav className="hidden gap-6 text-sm font-medium md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1 text-[#142640]/75 transition hover:bg-[#e8edf6] hover:text-[#142640]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#book-consultation"
            className="inline-flex items-center rounded-full bg-[#142640] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_18px_rgba(20,38,64,0.25)] transition hover:-translate-y-0.5"
          >
            Talk to finance leadership
          </Link>
        </div>
      </header>

      <section id="overview" className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.15fr,0.85fr] md:px-12">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#e8edf6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#405a83]">
              Fractional finance leadership
            </span>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              Finance partners that give founders clarity, investors confidence,
              and teams more time.
            </h1>
            <p className="text-base text-[#435573]">
              Redwood Ledger embeds experienced CFOs, controllers, and analysts
              directly into your company. We manage the close, build the models,
              support fundraising, and keep metrics board-ready so leadership
              can stay focused on the business.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#services"
                className="inline-flex items-center rounded-full bg-[#142640] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Explore service pods
              </Link>
              <Link
                href="/#book-consultation"
                className="inline-flex items-center rounded-full border border-[#142640]/25 px-6 py-3 text-sm font-semibold text-[#142640] transition hover:border-[#142640]"
              >
                Request a finance assessment →
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-[#435573] sm:grid-cols-2">
              <div className="rounded-2xl border border-[#d8dee8] bg-[#f0f3f9] p-4">
                <p className="font-heading text-lg text-[#142640]">
                  Executive reporting
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#405a83]">
                  weekly dashboards & board decks
                </p>
              </div>
              <div className="rounded-2xl border border-[#d8dee8] bg-[#f0f3f9] p-4">
                <p className="font-heading text-lg text-[#142640]">
                  Investor readiness
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#405a83]">
                  data rooms · diligence · runway plans
                </p>
              </div>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#d8dee8] shadow-[0_20px_60px_rgba(20,38,64,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              alt="Finance team working"
              className="h-72 w-full object-cover"
              loading="lazy"
            />
            <div className="grid gap-4 border-t border-[#d8dee8] bg-white p-6 text-sm text-[#435573] md:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#405a83]">
                  Week-over-week visibility
                </p>
                <p className="mt-1">
                  Rolling forecasts, cash dashboards, and revenue analytics
                  delivered every Monday.
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#405a83]">
                  Finance pod structure
                </p>
                <p className="mt-1">
                  CFO + controller + analyst blend tuned to company stage and
                  complexity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f5f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#405a83]">
                Services
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Tailored pods that scale finance without the overhead.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#435573] md:mt-0">
              Each engagement is built around deliverables, cadence, and
              outcomes you need—then adapted as your company evolves.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-3xl border border-[#d8dee8] bg-white p-8 shadow-[0_16px_45px_rgba(20,38,64,0.1)]"
              >
                <h3 className="font-heading text-xl text-[#142640]">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm text-[#435573]">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3 text-sm text-[#435573]">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-[#142640]" />
                      <span>{point}</span>
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
              <span className="inline-flex items-center rounded-full bg-[#e8edf6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#405a83]">
                Case studies
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Recent results from teams we partner with.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#435573] md:mt-0">
              We combine executive partnership and dependable operations to
              remove finance surprises and keep leadership confident.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <article
                key={study.client}
                className="rounded-3xl border border-[#d8dee8] bg-[#f5f7fb] p-8 shadow-[0_16px_45px_rgba(20,38,64,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#405a83]">
                  {study.industry}
                </p>
                <h3 className="mt-3 font-heading text-xl text-[#142640]">
                  {study.client}
                </h3>
                <p className="mt-2 font-semibold text-[#142640]">
                  {study.result}
                </p>
                <p className="mt-3 text-sm text-[#435573]">
                  {study.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="bg-[#f5f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#405a83]">
                Process
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                A clear rhythm from onboarding to advisory.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#435573] md:mt-0">
              Your finance pod stays consistent, communicates proactively, and
              keeps leadership focused on the next decision—not the last
              spreadsheet.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step) => (
              <article
                key={step.title}
                className="rounded-3xl border border-[#d8dee8] bg-white p-6 shadow-[0_12px_35px_rgba(20,38,64,0.08)]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#405a83]">
                  Step
                </p>
                <h3 className="mt-2 font-heading text-lg text-[#142640]">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-[#435573]">{step.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#e8edf6] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#405a83]">
              Testimonials
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Finance teams and founders who trust Redwood.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-3xl border border-[#d8dee8] bg-[#f5f7fb] p-6 text-sm text-[#435573] shadow-[0_12px_35px_rgba(20,38,64,0.08)]"
              >
                <p className="text-base text-[#142640]">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-[#142640]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#405a83]">
                  {testimonial.role}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="bg-[#f5f7fb] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#405a83]">
                Insights & tools
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Guides and templates we share with clients.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#435573] md:mt-0">
              A sample of the playbooks, checklists, and templates we provide
              throughout each engagement for planning, diligence, and hiring.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {insights.map((insight) => (
              <article
                key={insight.title}
                className="rounded-3xl border border-[#d8dee8] bg-white p-6 text-sm text-[#435573] shadow-[0_12px_35px_rgba(20,38,64,0.08)]"
              >
                <h3 className="font-heading text-lg text-[#142640]">
                  {insight.title}
                </h3>
                <p className="mt-3">{insight.blurb}</p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#142640] transition hover:text-[#0c1d34]"
                >
                  Download resource →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-0">
          <h2 className="font-heading text-3xl md:text-4xl">
            Ready for finance leadership that scales with you?
          </h2>
          <p className="mt-4 text-sm text-[#435573] md:text-base">
            Share your goals and current pain points. We’ll come prepared with a
            pod structure, timeline, and measurable targets for the first 90
            days.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-[#142640] px-8 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Schedule a consultation
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center rounded-full border border-[#142640]/40 px-6 py-3 text-sm font-semibold text-[#142640] transition hover:border-[#142640]"
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
