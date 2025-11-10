import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const workflowHighlights = [
  {
    title: 'AI Operations Control Center',
    description:
      'High-contrast dashboard layout showing mission-critical automations, response times, and ROI to reassure technical buyers.',
  },
  {
    title: 'Journey-Based Storytelling',
    description:
      'Segment-specific content tracks that speak to RevOps, Support, and Product leaders with tailored proof and CTAs.',
  },
  {
    title: 'Interactive Pricing Designer',
    description:
      'Scenario selector that helps buyers estimate impact and encourages them to convert through a guided “Build your workflow” flow.',
  },
];

const HelixWorkflowsDemo = () => (
  <>
    <Meta
      title={`Helix Workflows Demo — ${AppConfig.title}`}
      description="Preview the Helix Workflows concept site designed by Linyr Digital."
    />
    <main className="min-h-screen bg-linyr-offWhite text-linyr-charcoal">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,64,255,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(245,197,66,0.18),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:px-10">
          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 shadow-glass backdrop-blur">
            <span className="inline-flex items-center rounded-full border border-linyr-blue/20 bg-linyr-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-linyr-blue">
              Demo Experience
            </span>
            <h1 className="mt-6 font-heading text-4xl text-linyr-charcoal md:text-5xl">
              Helix Workflows — Automation with Authority
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-linyr-slate">
              A narrative-first site engineered for automation leaders looking
              to orchestrate complex processes. We humanize technical detail,
              surface real performance, and create frictionless paths to
              schedule a build session.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#workflow-highlights"
                className="inline-flex items-center rounded-full bg-linyr-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(30,64,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
              >
                Explore the Flow
              </Link>
              <Link
                href="/#portfolio"
                className="inline-flex items-center rounded-full border border-linyr-blue/30 px-6 py-3 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/50 hover:text-linyr-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
              >
                Back to Portfolio
              </Link>
            </div>
          </div>

          <div
            id="workflow-highlights"
            className="grid gap-8 md:grid-cols-[1.4fr,1fr]"
          >
            <div className="overflow-hidden rounded-3xl border border-linyr-blue/15 bg-white shadow-glass">
              <img
                src="/assets/images/nextjs-landing-page-banner.png"
                alt="Helix Workflows demo hero mockup"
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-6 rounded-3xl border border-linyr-blue/15 bg-white p-8 shadow-glass">
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                What We Engineered
              </h2>
              <ul className="space-y-4 text-sm leading-relaxed text-linyr-slate">
                {workflowHighlights.map((highlight) => (
                  <li
                    key={highlight.title}
                    className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4"
                  >
                    <p className="font-heading text-base text-linyr-charcoal">
                      {highlight.title}
                    </p>
                    <p className="mt-2">{highlight.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 text-center shadow-glass backdrop-blur">
            <h3 className="font-heading text-2xl text-linyr-charcoal">
              Launch a workflow experience that closes deals faster.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-linyr-slate">
              With Linyr Digital, you’re partnering with specialists who
              translate complex product value into journeys that inspire
              confidence and action.
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
export default HelixWorkflowsDemo;
