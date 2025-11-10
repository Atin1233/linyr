import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const storytellingMoments = [
  {
    title: 'Insight-Led Hero Narrative',
    description:
      'Data visualization hero that frames the problem, surfaces immediate wins, and prompts deeper exploration.',
  },
  {
    title: 'Proof Library',
    description:
      'Case stories and testimonials arranged to highlight measurable uplifts across acquisition, activation, and retention.',
  },
  {
    title: 'Strategic CTA Framework',
    description:
      'Sequenced CTAs that warm analysts with interactive content, then invite executives to book a roadmap session.',
  },
];

const InsightsDemo = () => (
  <>
    <Meta
      title={`Insights Demo — ${AppConfig.title}`}
      description="Step through the Insights analytics concept built by Linyr Digital."
    />
    <main className="min-h-screen bg-linyr-offWhite text-linyr-charcoal">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,64,255,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(245,197,66,0.18),transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-24 md:px-10">
          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 shadow-glass backdrop-blur">
            <span className="inline-flex items-center rounded-full border border-linyr-blue/20 bg-linyr-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-linyr-blue">
              Demo Experience
            </span>
            <h1 className="mt-6 font-heading text-4xl text-linyr-charcoal md:text-5xl">
              Insights — Narrative Intelligence Launchpad
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-linyr-slate">
              A storytelling-driven analytics site that balances credibility
              with emotion. Perfect for platforms that need to articulate impact
              from first glance through conversion.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                href="#storytelling"
                className="inline-flex items-center rounded-full bg-linyr-blue px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(30,64,255,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
              >
                Tour the Story
              </Link>
              <Link
                href="/#book-consultation"
                className="inline-flex items-center rounded-full border border-linyr-blue/30 px-6 py-3 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/50 hover:text-linyr-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-gold focus-visible:ring-offset-2"
              >
                Book a Consultation
              </Link>
            </div>
          </div>

          <div
            id="storytelling"
            className="grid gap-8 md:grid-cols-[1.4fr,1fr]"
          >
            <div className="overflow-hidden rounded-3xl border border-linyr-blue/15 bg-white shadow-glass">
              <img
                src="/assets/images/nextjs-boilerplate-saas.png"
                alt="Insights demo hero mockup"
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-6 rounded-3xl border border-linyr-blue/15 bg-white p-8 shadow-glass">
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                Moments That Matter
              </h2>
              <ul className="space-y-4 text-sm leading-relaxed text-linyr-slate">
                {storytellingMoments.map((moment) => (
                  <li
                    key={moment.title}
                    className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4"
                  >
                    <p className="font-heading text-base text-linyr-charcoal">
                      {moment.title}
                    </p>
                    <p className="mt-2">{moment.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 text-center shadow-glass backdrop-blur">
            <h3 className="font-heading text-2xl text-linyr-charcoal">
              Let’s script your next high-conversion story.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-linyr-slate">
              When your site feels considered, prospects trust faster, insights
              land clearer, and your brand wins the moments that decide
              pipeline.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#services"
                className="inline-flex items-center rounded-full bg-linyr-gold px-6 py-3 text-sm font-semibold text-linyr-charcoal transition hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(245,197,66,0.35)] focus:outline-none focus-visible:ring-2 focus-visible:ring-linyr-blue focus-visible:ring-offset-2"
              >
                Explore Our Process
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
export default InsightsDemo;
