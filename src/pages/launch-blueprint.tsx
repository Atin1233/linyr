import Link from 'next/link';

import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const heroHighlights = [
  {
    title: 'Positioning & Messaging',
    description:
      'ICP-specific messaging pillars, conversion narrative, and launch story mapped for every key page.',
  },
  {
    title: 'Experience Architecture',
    description:
      'UI flows, content hierarchy, and motion moments that translate your brand into a high-conversion experience.',
  },
  {
    title: 'Launch Readiness',
    description:
      'Exact roadmap, responsibilities, analytics plan, and tooling hand-off so your team can ship with confidence.',
  },
];

const timeline = [
  {
    phase: 'Week 0 · Alignment',
    title: 'Kickoff & Strategy Intensive',
    summary:
      'Stakeholder interviews, current-state audit, analytics snapshot, and KPI mapping to establish the launch brief.',
    outputs: [
      'Vision deck & competitive teardown',
      'Conversion framework prioritized by funnel stage',
      'Success metrics & experimentation backlog',
    ],
  },
  {
    phase: 'Week 1-2 · Storyline',
    title: 'Experience Narrative & Wireflows',
    summary:
      'Craft the core storyline, section flow, and UX moments that guide prospects from intrigue to action.',
    outputs: [
      'Interactive copy deck & content prompts',
      'Wireflows with animation, state, and CMS notes',
      'SEO, performance, and accessibility checklist',
    ],
  },
  {
    phase: 'Week 3-4 · Craft',
    title: 'Interface Design & Build Sprint',
    summary:
      'High-fidelity design system, component library, and production-ready build in Next.js + Tailwind.',
    outputs: [
      'Design system: typography, motion, component specs',
      'Responsive layouts with micro-interaction guidelines',
      'Code implementation with analytics & SEO wired in',
    ],
  },
  {
    phase: 'Week 5-6 · Launch',
    title: 'QA, Enablement & Growth Engine',
    summary:
      'Cross-device QA, performance tuning, enablement workshops, and launch-ready experimentation roadmap.',
    outputs: [
      'Launch checklist & go-live runbook',
      'Team training & CMS documentation',
      'Post-launch optimization & measurement plan',
    ],
  },
];

const collaborationTracks = [
  {
    tag: 'Strategy',
    items: [
      'ICP clarity and messaging matrix',
      'Conversion hierarchy & user journeys',
      'Funnel diagnostics & analytics instrumentation',
    ],
  },
  {
    tag: 'Creative',
    items: [
      'Signature hero moment & storytelling anchors',
      'Component-driven design system & motion specs',
      'Asset plan for imagery, iconography, and video',
    ],
  },
  {
    tag: 'Growth',
    items: [
      'Experiment backlog with priority scores',
      'Lifecycle touchpoints & nurture prompts',
      'Search, performance, and CRO checklist',
    ],
  },
];

const operatingRhythm = [
  {
    title: 'Dedicated Pod',
    description:
      'Partner directly with a lead strategist, design director, and engineering lead for the full engagement.',
  },
  {
    title: 'Weekly Reviews',
    description:
      'Standing review cadence with async Loom recaps, Figma prototypes, and turnkey decision packets.',
  },
  {
    title: 'Transparent Systems',
    description:
      'Linear board access, shared dashboards, and instant visibility into progress, blockers, and next moves.',
  },
];

const LaunchBlueprint = () => (
  <>
    <Meta
      title={`Launch Blueprint — ${AppConfig.title}`}
      description="See how Linyr Digital ships premium websites in six weeks or less."
    />
    <main className="bg-linyr-offWhite text-linyr-charcoal">
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(30,64,255,0.12),transparent_60%),radial-gradient(circle_at_bottom_right,rgba(245,197,66,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.4fr,1fr]">
            <div className="fade-up space-y-6">
              <span className="inline-flex items-center rounded-full border border-linyr-blue/20 bg-linyr-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-linyr-blue">
                Linyr Launch Blueprint
              </span>
              <h1 className="font-heading text-4xl leading-tight md:text-5xl">
                The six-week pathway we use to launch revenue-ready experiences.
              </h1>
              <p className="text-lg text-linyr-slate md:text-xl">
                From kickoff to post-launch optimization, every engagement
                follows a repeatable playbook built for speed, clarity, and
                measurable outcomes. Here’s exactly what to expect when we
                partner together.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full bg-linyr-blue px-7 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(30,64,255,0.28)] transition hover:-translate-y-1"
                >
                  Explore the main site →
                </Link>
                <Link
                  href="https://calendly.com/atinjain117/linyr"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center rounded-full border border-linyr-blue/40 px-6 py-3 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/60 hover:text-linyr-gold"
                >
                  Book a consultation
                </Link>
              </div>
            </div>

            <div className="fade-right space-y-5 rounded-3xl border border-linyr-blue/15 bg-white/70 p-8 shadow-glass backdrop-blur">
              <p className="text-sm uppercase tracking-[0.35em] text-linyr-blue/70">
                Key Outcomes
              </p>
              <ul className="space-y-4 text-sm text-linyr-slate">
                {heroHighlights.map((item) => (
                  <li
                    key={item.title}
                    className="rounded-2xl border border-linyr-blue/10 bg-white/70 p-4 shadow-[0_14px_38px_rgba(17,24,39,0.08)]"
                  >
                    <p className="font-heading text-lg text-linyr-charcoal">
                      {item.title}
                    </p>
                    <p className="mt-2 leading-relaxed">{item.description}</p>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/10 p-4 text-xs text-linyr-slate">
                Typical engagement duration: 5.5 weeks from kickoff to launch
                hand-off.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 py-24 md:px-12">
        <div className="mb-12 max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-linyr-blue">
            Timeline & Milestones
          </p>
          <h2 className="mt-4 font-heading text-3xl md:text-4xl">
            Where our team focuses each week — and what you receive.
          </h2>
          <p className="mt-4 text-base text-linyr-slate">
            Every phase blends strategy, design, and engineering so we can ship
            quickly without sacrificing craft. Deliverables are in your hands as
            we go — no big reveals, just steady momentum.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {timeline.map((step) => (
            <div
              key={step.phase}
              className="group rounded-3xl border border-linyr-blue/15 bg-white/80 p-8 shadow-[0_25px_65px_rgba(17,24,39,0.12)] transition hover:-translate-y-1 hover:border-linyr-gold/40"
            >
              <span className="inline-flex items-center rounded-full border border-linyr-blue/20 bg-linyr-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-linyr-blue">
                {step.phase}
              </span>
              <h3 className="mt-5 font-heading text-2xl text-linyr-charcoal">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-linyr-slate">{step.summary}</p>
              <ul className="mt-6 space-y-3 text-sm text-linyr-slate">
                {step.outputs.map((output) => (
                  <li key={output} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                    <span>{output}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-linyr-blue/10 bg-gradient-to-br from-white via-linyr-blue/5 to-white py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(30,64,255,0.08),transparent_65%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 md:px-12">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-linyr-blue">
              Collaboration Tracks
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Strategy, creative, and growth move in lockstep.
            </h2>
            <p className="mt-4 text-base text-linyr-slate">
              Your pod works across three lenses simultaneously so nothing slips
              between workflow hand-offs. Here’s the checklist we run each
              sprint.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {collaborationTracks.map((track) => (
              <div
                key={track.tag}
                className="rounded-3xl border border-linyr-blue/10 bg-white/80 p-8 text-sm text-linyr-slate shadow-[0_22px_55px_rgba(17,24,39,0.08)]"
              >
                <span className="inline-flex items-center rounded-full border border-linyr-blue/20 bg-linyr-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-linyr-blue">
                  {track.tag}
                </span>
                <ul className="mt-6 space-y-3">
                  {track.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24 md:px-12">
        <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
          <div className="rounded-3xl border border-linyr-blue/15 bg-white/80 p-10 shadow-[0_30px_70px_rgba(17,24,39,0.12)]">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-linyr-blue">
              Operating Rhythm
            </p>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Embedded collaboration designed for momentum.
            </h2>
            <ul className="mt-8 space-y-6 text-base text-linyr-slate">
              {operatingRhythm.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border border-linyr-blue/10 bg-white/70 p-5"
                >
                  <p className="font-heading text-lg text-linyr-charcoal">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-8 rounded-3xl border border-linyr-blue/15 bg-white/80 p-10 shadow-[0_30px_70px_rgba(17,24,39,0.12)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-linyr-blue">
                Decision Packet
              </p>
              <h3 className="mt-3 font-heading text-2xl text-linyr-charcoal">
                What you receive before greenlighting the build.
              </h3>
            </div>
            <ul className="space-y-4 text-sm text-linyr-slate">
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                <span>
                  Signature hero concept, above-the-fold copy, and supporting
                  narrative structure.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                <span>
                  Modular section blueprint with wireflow notes, component
                  usage, and motion cues.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                <span>
                  Launch roadmap detailing owners, milestones, and timeline
                  options (express, standard, concierge).
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                <span>
                  Investment ranges with flexible scenarios for experimentation,
                  growth marketing, and retention programs.
                </span>
              </li>
            </ul>

            <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/10 p-6 text-sm text-linyr-slate">
              <p className="font-heading text-lg text-linyr-charcoal">
                Ready to see it applied to your product?
              </p>
              <p className="mt-2">
                We tailor the blueprint in under five business days — then walk
                your team through timelines, responsibilities, and next steps.
              </p>
              <Link
                href="https://calendly.com/atinjain117/linyr"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center rounded-full bg-linyr-gold px-6 py-2 text-sm font-semibold text-linyr-charcoal transition hover:-translate-y-0.5"
              >
                Reserve your strategy session →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(30,64,255,0.12),transparent_60%),radial-gradient(circle_at_bottom_left,rgba(245,197,66,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-5xl flex-col gap-10 rounded-3xl border border-linyr-blue/15 bg-white/80 p-12 text-center shadow-[0_30px_70px_rgba(17,24,39,0.14)] backdrop-blur">
          <div>
            <span className="inline-flex items-center rounded-full border border-linyr-blue/20 bg-linyr-blue/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-linyr-blue">
              Next Steps
            </span>
            <h2 className="mt-6 font-heading text-3xl md:text-4xl">
              Let’s co-create the blueprint for your next launch.
            </h2>
            <p className="mt-4 text-base text-linyr-slate">
              We ship in less than six weeks, with momentum you feel from day
              one. Book a call and we’ll tailor this framework to your product
              and goals.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="https://calendly.com/atinjain117/linyr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-linyr-blue px-7 py-3 text-sm font-semibold text-white shadow-[0_20px_60px_rgba(30,64,255,0.28)] transition hover:-translate-y-1"
            >
              Schedule your consultation
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-linyr-blue/40 px-6 py-3 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/60 hover:text-linyr-gold"
            >
              Return to main site
            </Link>
          </div>
        </div>
      </section>
    </main>
    <style jsx>{`
      .fade-up {
        animation: fade-up 0.8s ease-out forwards;
        opacity: 0;
        transform: translateY(20px);
      }
      .fade-right {
        animation: fade-right 0.8s ease-out forwards;
        opacity: 0;
        transform: translateX(-20px);
      }
      @keyframes fade-up {
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      @keyframes fade-right {
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `}</style>
  </>
);

export default LaunchBlueprint;
