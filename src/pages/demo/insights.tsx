import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const InsightsDemo = () => (
  <>
    <Meta
      title={`Lumina Smiles Dental Demo — ${AppConfig.title}`}
      description="Step through Lumina Smiles Dental, a patient-first dental studio website crafted by Linyr Digital."
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
              Lumina Smiles Dental — Welcoming, Credible, Conversion-Focused
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-linyr-slate">
              Explore how we help a modern dental studio highlight expertise,
              showcase results, and make it effortless for new patients to book
              their first appointment.
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
                alt="Lumina Smiles dental demo hero mockup"
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-6 rounded-3xl border border-linyr-blue/15 bg-white p-8 shadow-glass">
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                Designed for Patient Reassurance
              </h2>
              <p className="text-sm leading-relaxed text-linyr-slate">
                {`Lumina Smiles combines calming visuals with data-backed proof to help anxious patients feel confident booking. The site clarifies treatments, showcases results, and gives multiple ways to connect in under a minute.`}
              </p>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Smile Confidence Hero
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Life-style photography, outcome stats, and calming copy ease
                    first-visit nerves.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Patient Assurance Stack
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Insurance logos, safety protocol highlights, and doctor bios
                    reinforce credibility.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Treatment Deep-Dives
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Accordion FAQs and before/after sliders for cosmetic,
                    restorative, and pediatric services.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Frictionless Booking Flow
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    New patient forms, virtual consult scheduler, and phone CTA
                    available from every section.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="rounded-3xl border border-linyr-blue/15 bg-white p-10 shadow-glass">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl text-linyr-charcoal">
                  Services Presented With Care
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-linyr-slate">
                  Treatment cards outline benefits, recovery time, and financing
                  options. Icons and microcopy keep the tone welcoming and
                  informative.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-linyr-slate">
                  <li className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                    <span className="font-heading text-base text-linyr-charcoal">
                      Invisalign® Smile Plans
                    </span>
                    <p className="mt-2">
                      Clear aligner roadmaps with monthly payment explainer and
                      progress tracking app preview.
                    </p>
                  </li>
                  <li className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                    <span className="font-heading text-base text-linyr-charcoal">
                      Comfort Care Restorations
                    </span>
                    <p className="mt-2">
                      Same-day crowns and sedation options described plainly to
                      reduce patient hesitation.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="space-y-6 rounded-3xl border border-linyr-blue/10 bg-linyr-blue/5 p-8">
                <h3 className="font-heading text-xl text-linyr-charcoal">
                  Results &amp; Reputation
                </h3>
                <div className="grid gap-6 text-center md:grid-cols-2">
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">
                      15K+
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      smiles transformed
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">98%</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      new patient satisfaction
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">
                      24/7
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      emergency support
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">
                      4.9★
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      average review
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-linyr-slate">
                  These real-world outcomes sit alongside testimonial videos and
                  credential badges to cement trust.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-linyr-blue/15 bg-white p-10 shadow-glass md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                Patient Journey Support
              </h2>
              <p className="mt-4 text-sm text-linyr-slate">
                {`Prospective patients can explore financing, meet the care team, or preview the clinic’s calming spaces. Educational resources and downloadable guides nurture long-term loyalty.`}
              </p>
              <ul className="mt-6 space-y-3 text-sm text-linyr-slate">
                <li>Interactive office tour with 360° photography.</li>
                <li>Dental wellness blog with preventative care tips.</li>
                <li>Insurance checker &amp; payment calculator modal.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-linyr-blue/10 bg-linyr-blue/5 p-8">
              <h3 className="font-heading text-xl text-linyr-charcoal">
                Patient Testimonial
              </h3>
              <blockquote className="mt-4 text-sm italic text-linyr-slate">
                “The site walked me through every step before my veneers
                appointment. Scheduling, financing, even parking directions were
                handled in minutes.”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-linyr-charcoal">
                Jasmine Moore, Lumina Smiles Patient
              </p>
            </div>
          </section>

          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 text-center shadow-glass backdrop-blur">
            <h3 className="font-heading text-2xl text-linyr-charcoal">
              Let’s build a patient experience that converts online.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-linyr-slate">
              Linyr Digital pairs elevated visuals with proof-driven narratives
              so healthcare brands stand out and stay fully booked.
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
