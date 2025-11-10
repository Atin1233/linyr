import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const WorkflowDemo = () => (
  <>
    <Meta
      title={`Hearth & Harvest Cafe Demo — ${AppConfig.title}`}
      description="Preview Hearth & Harvest Cafe, the hospitality landing concept designed by Linyr Digital."
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
              Hearth & Harvest Cafe — Crafted for Crave-Worthy Moments
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-linyr-slate">
              See how we translate a neighborhood cafe’s ambiance into a digital
              experience. From flavor storytelling to frictionless ordering, the
              experience is built to boost foot traffic and repeat visits.
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
                alt="Hearth & Harvest Cafe demo hero mockup"
                className="size-full object-cover"
              />
            </div>
            <div className="space-y-6 rounded-3xl border border-linyr-blue/15 bg-white p-8 shadow-glass">
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                Crafted to Boost Foot Traffic &amp; Orders
              </h2>
              <p className="text-sm leading-relaxed text-linyr-slate">
                {`The cafe homepage opens with a sensory-rich hero, then moves into menu storytelling, community programming, and streamlined ordering. It’s built for guests browsing on mobile before choosing where to meet.`}
              </p>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Seasonal Menu Story
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Chef notes, photography, and rotating specials show what’s
                    in bloom each week.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Order &amp; Loyalty Ready
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    One-tap paths for mobile ordering, Rewards, and “Reserve a
                    Table” keep the visit momentum high.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Neighborhood Credibility
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Press quotes, farmers market partnerships, and community
                    events keep locals engaged.
                  </p>
                </div>
                <div className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                  <p className="font-heading text-base text-linyr-charcoal">
                    Atmosphere Gallery
                  </p>
                  <p className="mt-2 text-linyr-slate">
                    Scrolling gallery blending interior shots, latte art, and
                    live music glimpses.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <section className="rounded-3xl border border-linyr-blue/15 bg-white p-10 shadow-glass">
            <div className="grid gap-10 md:grid-cols-2">
              <div>
                <h2 className="font-heading text-2xl text-linyr-charcoal">
                  Menu Highlights &amp; Pricing
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-linyr-slate">
                  This curated menu section showcases crowd favorites with clear
                  pricing, tasting notes, and dietary badges, making the
                  decision effortless before guests walk in.
                </p>
                <ul className="mt-6 space-y-3 text-sm text-linyr-slate">
                  <li className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                    <span className="font-heading text-base text-linyr-charcoal">
                      Hearth Roasted Latte — $5.50
                    </span>
                    <p className="mt-2">
                      Single-origin espresso, maple vanilla, smoked sea salt.
                    </p>
                  </li>
                  <li className="rounded-2xl border border-linyr-blue/10 bg-linyr-blue/5 p-4">
                    <span className="font-heading text-base text-linyr-charcoal">
                      Greenmarket Tartine — $12
                    </span>
                    <p className="mt-2">
                      Sourdough, whipped herbed ricotta, seasonal vegetables,
                      fresh herbs.
                    </p>
                  </li>
                </ul>
              </div>
              <div className="space-y-6 rounded-3xl border border-linyr-blue/10 bg-linyr-blue/5 p-8">
                <h3 className="font-heading text-xl text-linyr-charcoal">
                  Experience Metrics
                </h3>
                <div className="grid gap-6 text-center md:grid-cols-2">
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">
                      +28%
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      increase in reservations
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">
                      4.9★
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      guest rating
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">18K</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      loyalty members
                    </p>
                  </div>
                  <div>
                    <p className="font-heading text-4xl text-linyr-blue">3X</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.3em] text-linyr-slate">
                      mobile order growth
                    </p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-linyr-slate">
                  These cards are paired with short success blurbs to show
                  tangible impact of the cafe’s marketing refresh.
                </p>
              </div>
            </div>
          </section>

          <section className="grid gap-8 rounded-3xl border border-linyr-blue/15 bg-white p-10 shadow-glass md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="font-heading text-2xl text-linyr-charcoal">
                Community Programming &amp; Events
              </h2>
              <p className="mt-4 text-sm text-linyr-slate">
                Event tiles make it easy for guests to RSVP or add happenings to
                their calendar. A monthly newsletter teaser drives signups for
                latte workshops, vinyl nights, and weekend pop-ups.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-linyr-slate">
                <li>Latte art workshops with limited seating notifications.</li>
                <li>Local maker market calendar with vendor highlights.</li>
                <li>Acoustic Sundays featuring playlists and artist bios.</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-linyr-blue/10 bg-linyr-blue/5 p-8">
              <h3 className="font-heading text-xl text-linyr-charcoal">
                Guest Testimonial
              </h3>
              <blockquote className="mt-4 text-sm italic text-linyr-slate">
                “The new Hearth &amp; Harvest site feels like stepping into the
                cafe. Ordering ahead, booking a tasting, even gifting coffee
                subscriptions is effortless.”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-linyr-charcoal">
                Caleb Nguyen, Food Blogger — Midtown Spoon
              </p>
            </div>
          </section>

          <div className="rounded-3xl border border-linyr-blue/15 bg-white/90 p-10 text-center shadow-glass backdrop-blur">
            <h3 className="font-heading text-2xl text-linyr-charcoal">
              Let’s turn your hospitality brand into a destination.
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-linyr-slate">
              Linyr Digital blends editorial storytelling with conversion UX so
              restaurants and cafes can grow loyal communities.
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
export default WorkflowDemo;
