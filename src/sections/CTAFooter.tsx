import Link from 'next/link';

const ctaContent = {
  title: 'Book Your Free Consultation',
  subtitle:
    'Let’s identify the quick wins, the long-term vision, and how we ship a launch-ready experience in record time.',
  bulletPoints: [
    '30-minute strategy intensive with a product strategist and creative director.',
    'A funnel audit that maps quick-win launch experiments & long-term opportunities.',
    'A transparent fit check — if the engagement isn’t right, we share resources instead.',
    'Launch blueprint delivered within 5 business days including timeline, team, and investment tiers.',
    'Embedded partner model with a strategist and creative lead from day zero.',
  ],
  ctaLabel: 'Schedule a Call',
  ctaHref: 'https://calendly.com/atinjain117/linyr',
};

const CTAFooter = () => (
  <section
    id="book-consultation"
    className="relative overflow-hidden bg-linyr-offWhite py-28 text-linyr-charcoal"
  >
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.95),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.88),transparent_55%)]"
      aria-hidden
    />
    <div className="relative mx-auto max-w-6xl">
      <div className="absolute -left-16 top-1/2 hidden size-48 -translate-y-1/2 rounded-full bg-[conic-gradient(from_90deg_at_50%_50%,rgba(255,255,255,0.35),transparent_70%)] blur-3xl lg:block" />
      <div className="absolute -right-24 -top-10 hidden size-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(148,163,255,0.35),transparent_65%)] blur-3xl lg:block" />

      <div className="relative grid gap-10 rounded-[32px] border border-white/20 bg-gradient-to-br from-[#18255a] via-[#1f2d6b] to-[#0b1739] px-8 py-12 text-linyr-offWhite shadow-[0_28px_80px_rgba(8,15,38,0.55)] backdrop-blur lg:grid-cols-[1.15fr,0.85fr] lg:px-14 lg:py-16">
        <div className="flex flex-col gap-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
              Let’s collaborate
            </span>
            <h2 className="mt-6 font-heading text-3xl leading-tight md:text-4xl">
              {ctaContent.title}
            </h2>
            <p className="mt-4 max-w-xl text-base text-white/75 md:text-lg">
              {ctaContent.subtitle}
            </p>
          </div>

          <div className="space-y-3 text-sm text-white/85">
            {ctaContent.bulletPoints.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                <p className="leading-relaxed">{point}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={ctaContent.ctaHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-linyr-gold px-8 py-3 text-base font-semibold text-linyr-charcoal transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(245,197,66,0.45)]"
            >
              {ctaContent.ctaLabel}
            </a>
            <Link
              href="/launch-blueprint"
              className="inline-flex items-center gap-2 rounded-full border border-linyr-blue/30 px-6 py-3 text-sm font-semibold text-linyr-blue transition hover:border-linyr-gold/50 hover:text-linyr-gold"
            >
              View launch blueprint →
            </Link>
          </div>
        </div>
        <div className="flex flex-col justify-center gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 text-sm text-white/80 shadow-[0_22px_55px_rgba(5,8,25,0.45)]">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              What you leave with
            </p>
            <ul className="mt-3 space-y-3">
              {[
                'Clarity on messaging pillars & high-impact hero narrative.',
                'UX flow outline with key modules, motion, and content prompts.',
                'Timeline & investment ranges mapped to three engagement tiers.',
              ].map((deliverable) => (
                <li key={deliverable} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                  <span>{deliverable}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div className="relative mx-auto mt-16 flex max-w-6xl flex-col items-center justify-between gap-4 rounded-2xl border border-linyr-charcoal/10 bg-white/70 px-6 py-5 text-sm text-linyr-charcoal backdrop-blur sm:flex-row">
      <span>
        © {new Date().getFullYear()} Linyr Digital. All rights reserved.
      </span>
      <div className="flex gap-6">
        <a
          href="https://www.linkedin.com"
          className="hover:text-linyr-blue"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://dribbble.com"
          className="hover:text-linyr-blue"
          target="_blank"
          rel="noreferrer"
        >
          Dribbble
        </a>
        <a
          href="https://behance.net"
          className="hover:text-linyr-blue"
          target="_blank"
          rel="noreferrer"
        >
          Behance
        </a>
      </div>
    </div>
  </section>
);

export { CTAFooter };
