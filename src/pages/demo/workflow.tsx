import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const signatureItems = [
  {
    title: 'Fire-Kissed Espresso',
    description:
      'Small-batch beans, maple smoked vanilla, and oat creme brûlée foam create a signature finish.',
    price: '$5.50',
  },
  {
    title: 'Harvest Tartine',
    description:
      'Sourdough, whipped lemon ricotta, roasted root vegetables, micro herbs, and citrus drizzle.',
    price: '$12.00',
  },
  {
    title: 'Midnight Chai',
    description:
      'Black tea, cardamom caramel, charred orange zest, and smoked cinnamon cloud.',
    price: '$5.00',
  },
];

const eventHighlights = [
  {
    name: 'Vinyl & V60 Nights',
    copy: 'Every Thursday — curated vinyl DJs, pour-over flights, and dessert pairings.',
  },
  {
    name: 'Farm-to-Cup Tastings',
    copy: 'Monthly producer spotlight with origin stories, Q&A, and limited micro-lot beans.',
  },
  {
    name: 'Maker Market Saturdays',
    copy: 'Local artists, florist pop-ups, and seasonal latte collaborations in the courtyard.',
  },
];

const HearthHarvestDemo = () => (
  <>
    <Meta
      title={`Hearth & Harvest Cafe Demo — ${AppConfig.title}`}
      description="Experience Hearth & Harvest Cafe, a hospitality landing page crafted by Linyr Digital to capture the warmth of an artisan coffeehouse."
    />
    <main className="bg-[#2a1403] text-[#fdf5ed]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#7c2d12] via-[#ea580c] to-[#f97316] opacity-90" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/80">
                Neighborhood Cafe Demo
              </span>
              <h1 className="mt-6 font-heading text-4xl leading-tight text-white md:text-6xl">
                Hearth &amp; Harvest Cafe — Sip, savor, stay awhile.
              </h1>
              <p className="mt-6 text-lg text-white/80 md:text-xl">
                This demo evokes the sensory experience of our cafe: earthy
                textures, fire-kissed drinks, community events, and crave-worthy
                storytelling designed to turn browsers into regulars.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#menu"
                  className="inline-flex items-center rounded-full bg-white/95 px-7 py-3 text-sm font-semibold text-[#7c2d12] shadow-[0_18px_40px_rgba(249,115,22,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(249,115,22,0.45)]"
                >
                  Explore the seasonal menu
                </Link>
                <Link
                  href="/#book-consultation"
                  className="inline-flex items-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white/80 transition hover:border-white/60 hover:text-white"
                >
                  Book a tasting →
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur">
              <h2 className="font-heading text-2xl text-white">
                Tonight at the Hearth
              </h2>
              <p className="mt-4 text-sm text-white/80">
                Reserve a seat at our chef’s counter, discover the story behind
                every roast, and unlock member-only menu drops.
              </p>
              <div className="mt-6 grid gap-4 text-sm text-white/80">
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-semibold text-white">
                    Happy Hour Fireside
                  </p>
                  <p className="mt-1">
                    Mon–Fri · 4-6PM · $2 off signature drinks &amp; small plates
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <p className="font-semibold text-white">Reserve a Table</p>
                  <p className="mt-1">
                    Weekend brunch seating with tasting menu and live acoustic
                    sets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Roastery
              </p>
              <h3 className="mt-3 font-heading text-xl text-white">
                Single Origin Fire Roast
              </h3>
              <p className="mt-2">
                Beans charred over mesquite, cooled in copper drums, and
                profiled for layered caramel smoke.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Community
              </p>
              <h3 className="mt-3 font-heading text-xl text-white">
                A gathering place for makers
              </h3>
              <p className="mt-2">
                Art installations, artisan goods, and co-working nooks nurture
                creativity beyond the cup.
              </p>
            </div>
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 text-sm text-white/80">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Experience
              </p>
              <h3 className="mt-3 font-heading text-xl text-white">
                Sensory-first storytelling
              </h3>
              <p className="mt-2">
                Immersive copy, ingredient spotlights, and motion accents
                communicate warmth before guests step inside.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#fff7f1] py-24 text-[#3b1b0a]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#f97316]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#c2410c]">
                Seasonal Menu
              </span>
              <h2 className="mt-6 font-heading text-3xl md:text-4xl">
                Crafted plates &amp; pours inspired by hearth and harvest.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#6b3a21] md:mt-0">
              Menu tiles blend appetizing descriptions, tasting notes, and quick
              pricing. On mobile, an “order now” bar pins to the bottom with
              loyalty upsells.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {signatureItems.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#f97316]/10 bg-white p-6 shadow-[0_22px_45px_rgba(231,111,33,0.18)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(231,111,33,0.26)]"
              >
                <header className="flex items-center justify-between">
                  <h3 className="font-heading text-xl text-[#7c2d12]">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-[#f97316]/10 px-3 py-1 text-xs font-semibold text-[#7c2d12]">
                    {item.price}
                  </span>
                </header>
                <p className="mt-3 text-sm leading-relaxed text-[#6b3a21]">
                  {item.description}
                </p>
                <Link
                  href="/"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-[#7c2d12] transition hover:text-[#5a1e09]"
                >
                  Order now →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#f97316]/15 bg-white p-8 md:flex md:items-center md:justify-between">
            <div className="max-w-xl">
              <h3 className="font-heading text-2xl text-[#7c2d12]">
                Join our loyalty collective &amp; unlock members-only brews.
              </h3>
              <p className="mt-3 text-sm text-[#6b3a21]">
                Integrated loyalty CTAs trigger modals to capture guest emails.
                Members access drop notifications, private tastings, and
                surprise Rewards.
              </p>
            </div>
            <Link
              href="/"
              className="mt-6 inline-flex items-center rounded-full bg-[#f97316] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ea580c] md:mt-0"
            >
              Join Harvest Rewards
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#3b1b0a] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-start md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-white/70">
                Experiences
              </span>
              <h2 className="mt-6 font-heading text-3xl md:text-4xl">
                Hospitality is a rhythm—our digital experience mirrors it.
              </h2>
              <p className="mt-4 text-sm text-white/75">
                Event tiles, RSVP buttons, and calendar sync make it effortless
                to plan a visit. A dynamic “tonight at the hearth” ticker keeps
                the page feeling alive.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:mt-0">
              {eventHighlights.map((event) => (
                <div
                  key={event.name}
                  className="rounded-3xl border border-white/15 bg-black/20 p-6 text-sm text-white/80"
                >
                  <p className="font-heading text-lg text-white">
                    {event.name}
                  </p>
                  <p className="mt-2 leading-relaxed">{event.copy}</p>
                  <Link
                    href="/"
                    className="mt-4 inline-flex items-center text-sm font-semibold text-white transition hover:text-orange-200"
                  >
                    Reserve your spot →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f1] py-24 text-[#3b1b0a]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl">
                A space designed for lingering—and sharing.
              </h2>
              <p className="mt-4 text-sm text-[#6b3a21]">
                Image carousels, playlist embeds, and user-generated content
                loops keep fans engaged. The site encourages social sharing with
                styled quote cards and printable menu teasers.
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#6b3a21]">
                <li>
                  Spotify playlist integration for “Morning Pour” and “Late
                  Night Ember”.
                </li>
                <li>
                  Interactive map with parking tips, bike storage, and transit
                  lines.
                </li>
                <li>
                  Accessibility notes covering allergen labeling and quiet
                  seating zones.
                </li>
              </ul>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl border border-[#f97316]/15 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c2410c]">
                  Guest Story
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#6b3a21]">
                  “The site feels like walking into the cafe—staying up to date
                  on specials, booking a tasting, even grabbing gifts is as
                  smooth as their espresso.”
                </p>
                <p className="mt-4 text-sm font-semibold text-[#7c2d12]">
                  Talia Mendes — Food Critic, City Spoon
                </p>
              </div>
              <div className="rounded-3xl border border-[#f97316]/15 bg-white p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#c2410c]">
                  Press Highlight
                </p>
                <p className="mt-4 text-sm leading-relaxed text-[#6b3a21]">
                  Featured in “Top 10 Cafes Redefining Brunch” with direct links
                  to press articles and downloadable media kit.
                </p>
                <Link
                  href="/"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-[#7c2d12] transition hover:text-[#5a1e09]"
                >
                  View press kit →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#431d0a] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl">
            Let’s craft your digital hospitality moment.
          </h2>
          <p className="mt-4 text-sm text-white/70 md:text-base">
            Ready to elevate your cafe or restaurant online experience? We’ll
            build a site that captures aroma, ambiance, and unforgettable
            service.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-[#f97316] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ea580c]"
            >
              Book a tasting session
            </Link>
            <Link
              href="/#portfolio"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              See more case studies
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default HearthHarvestDemo;
