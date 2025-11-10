import Link from 'next/link';

const ctaContent = {
  title: 'Book Your Free Consultation',
  subtitle:
    'Let’s identify the quick wins, the long-term vision, and how we ship a launch-ready experience in record time.',
  bulletPoints: [
    '30-minute strategy session with a lead strategist',
    'Actionable insights tailored to your current funnel',
    'No obligations — we only pitch if there’s a clear fit',
  ],
  ctaLabel: 'Schedule a Call',
  ctaHref: 'mailto:hello@linyr.digital',
  secondaryLabel: 'hello@linyr.digital',
};

const CTAFooter = () => (
  <section
    id="book-consultation"
    className="relative overflow-hidden bg-linyr-offWhite py-28 text-linyr-charcoal"
  >
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.85),transparent_55%)]"
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

          <ul className="grid gap-3 text-sm text-white/80 md:grid-cols-2">
            {ctaContent.bulletPoints.map((point) => (
              <li
                key={point}
                className="inline-flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
              >
                <span className="mt-1 inline-flex size-2 rounded-full bg-linyr-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col gap-4 text-sm text-white/70 md:flex-row md:items-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <span className="inline-flex size-1.5 rounded-full bg-linyr-gold" />
              Launch blueprint delivered in 5 business days.
            </div>
            <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2">
              <span className="inline-flex size-1.5 rounded-full bg-linyr-gold" />
              Dedicated strategist & creative lead on every project.
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <a
              href={ctaContent.ctaHref}
              className="inline-flex items-center rounded-full bg-linyr-gold px-8 py-3 text-base font-semibold text-linyr-charcoal transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(245,197,66,0.45)]"
            >
              {ctaContent.ctaLabel}
            </a>
            <Link
              href="/demo/commerce"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white hover:text-white"
            >
              View launch blueprint →
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/5 p-6 shadow-[0_22px_55px_rgba(5,8,25,0.45)]">
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Contact
            </p>
            <p className="mt-3 text-lg font-semibold text-white">
              {ctaContent.secondaryLabel}
            </p>
            <p className="mt-1 text-white/60">
              Available Monday–Friday · 9a–7p EST
            </p>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/10 p-5 text-sm text-white/80">
            <p className="text-xs uppercase tracking-[0.35em] text-white/60">
              Recent wins
            </p>
            <ul className="mt-3 space-y-2">
              <li>● Crypto security platform → +128% conversion in 6 weeks</li>
              <li>
                ● Hospitality marketplace → 3× trial signups post redesign
              </li>
              <li>● AI workflow SaaS → Brand relaunch in 42 days</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-5 text-sm text-white/70">
            <p className="text-xs uppercase tracking-[0.35em] text-white/50">
              Availability
            </p>
            <p className="mt-3 text-base font-semibold text-white">
              2 kickoff slots remaining for this quarter.
            </p>
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
