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
    className="relative overflow-hidden bg-linyr-offWhite py-24 text-linyr-charcoal"
  >
    <div
      className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,197,66,0.28),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(30,64,255,0.28),transparent_55%)] opacity-80"
      aria-hidden
    />
    <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-br from-linyr-blue via-[#2333ff] to-[#101c6b] p-10 text-center text-linyr-offWhite shadow-[0_25px_65px_rgba(10,19,70,0.45)] backdrop-blur">
      <h2 className="font-heading text-3xl md:text-4xl">{ctaContent.title}</h2>
      <p className="mx-auto mt-5 max-w-3xl text-base text-white/75 md:text-lg">
        {ctaContent.subtitle}
      </p>

      <ul className="mt-8 flex flex-col items-center justify-center gap-4 text-sm text-white/80 md:flex-row">
        {ctaContent.bulletPoints.map((point) => (
          <li
            key={point}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2"
          >
            <span className="inline-flex size-2 rounded-full bg-linyr-gold" />
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <a
          href={ctaContent.ctaHref}
          className="inline-flex items-center rounded-full bg-linyr-gold px-8 py-3 text-base font-semibold text-linyr-charcoal transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(245,197,66,0.45)]"
        >
          {ctaContent.ctaLabel}
        </a>
        <span className="text-sm text-white/80">
          {ctaContent.secondaryLabel}
        </span>
      </div>
    </div>
    <div className="relative mx-auto mt-16 flex max-w-5xl flex-col items-center justify-between gap-4 border-t border-linyr-charcoal/10 pt-6 text-sm text-linyr-charcoal sm:flex-row">
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
