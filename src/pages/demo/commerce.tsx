import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

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
                Built to Convert Sophisticated Buyers
              </h2>
              <p className="text-sm leading-relaxed text-linyr-slate">
                Redwood Ledger’s homepage pairs strategic storytelling with
                financial authority. The layout surfaces the firm’s signature
                offers, validates outcomes with data, and directs prospects to a
                consultation in under two scrolls.
              </p>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    CFO Advisory Blueprint
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Narrative and visual system that breaks complex financial
                    strategy into approachable building blocks.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Compliance &amp; Tax HQ
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Modular service tiles covering payroll, audits, and tax
                    planning without overwhelming readers.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Client Confidence Hub
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    ROI stats, industry credentials, and rotating testimonials
                    engineered to build trust instantly.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Conversion CTA System
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Consultation prompts, downloadable resources, and phone
                    callbacks designed to capture every lead type.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="rounded-3xl border border-linyr-blue/15 bg-white p-10 shadow-glass">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl text-linyr-charcoal">
                  Services Structured Around Outcomes
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-linyr-slate">
                  Each service block showcases benefits, timeline, and proof of
                  impact. Prospects can explore fractional CFO, controller, and
                  bookkeeping retainers without leaving the hero area.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-linyr-slate">
                  <li className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                    <span className="font-heading text-base text-linyr-charcoal">
                      Fractional CFO Pods
                    </span>
                    <p className="mt-2">
                      {`Dedicated finance partners delivering forecasts, dashboards, and board prep in four-week sprints.`}
                    </p>
                  </li>
                  <li className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                    <span className="font-heading text-base text-linyr-charcoal">
                      Compliance Engine
                    </span>
                    <p className="mt-2">
                      Quarterly tax planning, payroll checks, and audit
                      readiness wrapped in a single predictable program.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="space-y-6 rounded-3xl border border-linyr-blue/10 bg-linyr-blue/5 p-8">
                <h3 className="font-heading text-xl text-linyr-charcoal">
                  Growth Metrics at a Glance
                </h3>
                <div className="grid gap-6 text-center md:grid-cols-2">
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">42%</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      faster close cycles
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">
                      $6.8M
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      capital raised by clients
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">97%</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      retention rate
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">12</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      industries served
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-linyr-slate">
                  Accompanying copy pairs these metrics with a short case study,
                  ensuring founders understand the tangible return of partnering
                  with Redwood.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-linyr-blue/15 bg-white p-10 shadow-glass md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                What Prospects Experience
              </h2>
              <p className="mt-4 text-sm text-linyr-slate">
                From hero to footer, every interaction supports a high-touch
                buying journey. Video testimonials, FAQ accordions, and weekly
                insight snippets nurture CFO-ready leads.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-linyr-slate">
                <li>Embedded Calendly and click-to-call CTAs.</li>
                <li>Downloadable due diligence checklist to capture emails.</li>
                <li>
                  Resource library preview to showcase thought leadership.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-linyr-blue/10 bg-linyr-blue/5 p-8">
              <h3 className="font-heading text-xl text-linyr-charcoal">
                Client Testimonial
              </h3>
              <blockquote className="mt-4 text-sm italic text-linyr-slate">
                “Within the first quarter we had a finance dashboard we trusted,
                an investor-grade model, and a plan to extend runway. Redwood
                Ledger feels like part of our executive team.”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-linyr-charcoal">
                Priya Daniel, COO — Atlas Robotics
              </p>
            </div>
          </section>

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
