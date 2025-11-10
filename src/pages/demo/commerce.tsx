import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const featureSections = [
  {
    title: 'CFO Advisory Blueprint',
    description:
      'Positioning module that translates complex finance guidance into a digestible offer stack for founders and operators.',
  },
  {
    title: 'Compliance & Tax HQ',
    description:
      'Service grid and explainer blocks covering tax strategy, payroll, and audit readiness without overwhelming visitors.',
  },
  {
    title: 'Client Confidence Hub',
    description:
      'Testimonial carousel, credentials, and ROI proof so prospects know exactly why Redwood Ledger is their safest choice.',
  },
];

const CommerceDemo = () => (
  <>
    <Meta
      title={`Redwood Ledger CPA Demo — ${AppConfig.title}`}
      description="Explore Redwood Ledger CPA, the boutique accounting concept site crafted by Linyr Digital."
    />
    <main className="min-h-screen bg-linyr-offWhite text-linyr-charcoal">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,197,66,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(30,64,255,0.18),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:px-10">
          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 shadow-glass backdrop-blur">
            <span className="inline-flex items-center rounded-full border border-linyr-blue/20 bg-linyr-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-linyr-blue">
              Demo Experience
            </span>
            <h1 className="mt-6 font-heading text-4xl text-linyr-charcoal md:text-5xl">
              Redwood Ledger CPA — Fractional Finance for Modern Teams
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-linyr-slate">
              This demo shows how we position a boutique accounting firm as a
              strategic finance partner. It blends trust signals, clear service
              paths, and decisive calls-to-action so prospects book discovery
              calls with confidence.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#demo-overview"
                className="inline-flex items-center rounded-full bg-linyr-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(30,64,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
              >
                See the Highlights
              </Link>
              <Link
                href="/#services"
                className="inline-flex items-center rounded-full border border-linyr-blue/30 px-6 py-3 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/50 hover:text-linyr-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
              >
                Back to Services
              </Link>
            </div>
          </div>

          <div
            id="demo-overview"
            className="grid gap-8 md:grid-cols-[1.4fr,1fr]"
          >
            <div className="overflow-hidden rounded-3xl border border-linyr-blue/15 bg-white shadow-glass">
              <img
                src="/assets/images/nextjs-landing-page-screenshot.png"
                alt="Commerce demo hero mockup"
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-6 rounded-3xl border border-linyr-blue/15 bg-white p-8 shadow-glass">
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                Experience Pillars
              </h2>
              <ul className="space-y-4 text-sm leading-relaxed text-linyr-slate">
                {featureSections.map((feature) => (
                  <li
                    key={feature.title}
                    className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4"
                  >
                    <p className="font-heading text-base text-linyr-charcoal">
                      {feature.title}
                    </p>
                    <p className="mt-2">{feature.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 text-center shadow-glass backdrop-blur">
            <h3 className="font-heading text-2xl text-linyr-charcoal">
              Ready to modernize your professional services site?
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-linyr-slate">
              Linyr Digital merges strategic messaging with premium execution to
              deliver credibility and conversions for firms like yours.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#book-consultation"
                className="inline-flex items-center rounded-full bg-linyr-gold px-6 py-3 text-sm font-semibold text-linyr-charcoal transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(245,197,66,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-blue focus-visible:ring-offset-2"
              >
                Book Your Consultation
              </Link>
              <Link
                href="/"
                className="inline-flex items-center rounded-full border border-linyr-blue/30 px-6 py-3 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/50 hover:text-linyr-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
);
export default CommerceDemo;
