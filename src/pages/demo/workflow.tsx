import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const signatureItems = [
  {
    title: 'Fire-Kissed Espresso',
    description:
      'Small-batch beans, maple smoked vanilla, and oat creme brûlée foam create a signature finish.',
    price: '$5.50',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Harvest Tartine',
    description:
      'Sourdough, whipped lemon ricotta, roasted root vegetables, micro herbs, and citrus drizzle.',
    price: '$12.00',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Midnight Chai',
    description:
      'Black tea, cardamom caramel, charred orange zest, and smoked cinnamon cloud.',
    price: '$5.00',
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1200&q=80',
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

const bakeryItems = [
  {
    name: 'Smoked Honey Cruffin',
    description:
      'Laminate dough, burnt honey butter, cinnamon sugar, vanilla bean custard.',
    image:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b4?auto=format&fit=crop&w=1200&q=80',
    price: '$4.75',
  },
  {
    name: 'Stone Fruit Galette',
    description:
      'Flaky rye crust, roasted peaches, thyme syrup, mascarpone whip.',
    image:
      'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80',
    price: '$6.50',
  },
  {
    name: 'Savory Garden Quiche',
    description:
      'Heirloom tomatoes, goat cheese, caramelized onions, basil pesto drizzle.',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
    price: '$7.25',
  },
];

const pantryGoods = [
  {
    title: 'House Granola Blend',
    detail: 'Almond brittle, cacao nibs, sorghum clusters, dried mulberries.',
    image:
      'https://images.unsplash.com/photo-1515504459833-1f1f26736e4b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Seasonal Syrup Flight',
    detail:
      'Smoked rosemary, vanilla bean, burnt orange, and lavender cardamom.',
    image:
      'https://images.unsplash.com/photo-1455853659719-4b521eebc76d?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Roaster’s Reserve Beans',
    detail: 'Honey-processed Guatemala El Injerto · 12oz whole bean.',
    image:
      'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1200&q=80',
  },
];

const HearthHarvestDemo = () => (
  <>
    <Meta
      title={`Hearth & Harvest Cafe Demo — ${AppConfig.title}`}
      description="Experience Hearth & Harvest Cafe, a hospitality landing page crafted by Linyr Digital to capture the warmth of an artisan coffeehouse."
    />
    <main className="bg-[#221107] text-[#fdf5ed]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(250,204,21,0.25),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(180,83,9,0.35),transparent_60%),linear-gradient(135deg,#4b1f0f_0%,#8a3c1a_60%,#c2410c_100%)] opacity-95" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 py-28 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div className="fade-up">
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
                  className="inline-flex items-center rounded-full bg-[#fef3c7] px-7 py-3 text-sm font-semibold text-[#7c2d12] shadow-[0_24px_45px_rgba(120,61,20,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_28px_55px_rgba(120,61,20,0.45)]"
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
            <div className="fade-right relative overflow-hidden rounded-3xl border border-white/10 bg-black/15 p-6 shadow-[0_25px_60px_rgba(17,10,6,0.55)] backdrop-blur-sm">
              <div className="absolute -left-24 top-8 size-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(255,237,213,0.3),transparent)]" />
              <div className="absolute -right-16 bottom-0 size-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(134,89,60,0.4),transparent)]" />
              <div className="relative space-y-6">
                <div className="grid gap-4">
                  <div className="relative overflow-hidden rounded-3xl border border-white/15">
                    <img
                      src="https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=80"
                      alt="Cafe interior"
                      className="h-48 w-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-white/20" />
                    <p className="absolute bottom-4 left-4 text-sm font-semibold text-white">
                      Tonight’s sensory experience
                    </p>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                        Happy hour fireside
                      </p>
                      <p className="mt-2">
                        {`Mon–Fri · 4-6PM · $2 off signature drinks & small plates`}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-sm text-white/80">
                      <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                        Reserve the chef’s counter
                      </p>
                      <p className="mt-2">
                        {`Brunch tasting menu with chef introductions and vinyl DJs.`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/15 bg-black/30 p-6 text-sm text-white/80 shadow-[0_20px_45px_rgba(20,10,6,0.5)]">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Roastery
              </p>
              <h3 className="mt-3 font-heading text-xl text-white">
                Single Origin Fire Roast
              </h3>
              <p className="mt-2">
                {`Beans charred over mesquite, cooled in copper drums, and profiled for layered caramel smoke.`}
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-black/30 p-6 text-sm text-white/80 shadow-[0_20px_45px_rgba(20,10,6,0.5)]">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Community
              </p>
              <h3 className="mt-3 font-heading text-xl text-white">
                A gathering place for makers
              </h3>
              <p className="mt-2">
                {`Art installations, artisan goods, and co-working nooks nurture creativity beyond the cup.`}
              </p>
            </div>
            <div className="rounded-3xl border border-white/15 bg-black/30 p-6 text-sm text-white/80 shadow-[0_20px_45px_rgba(20,10,6,0.5)]">
              <p className="text-xs uppercase tracking-[0.35em] text-white/60">
                Experience
              </p>
              <h3 className="mt-3 font-heading text-xl text-white">
                Sensory-first storytelling
              </h3>
              <p className="mt-2">
                {`Immersive copy, ingredient spotlights, and motion accents communicate warmth before guests step inside.`}
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
                className="overflow-hidden rounded-3xl border border-[#f97316]/15 bg-white shadow-[0_22px_45px_rgba(231,111,33,0.18)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(231,111,33,0.26)]"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="size-full object-cover transition duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white">
                    {item.price}
                  </span>
                </div>
                <div className="space-y-3 px-6 py-5">
                  <h3 className="font-heading text-xl text-[#7c2d12]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#6b3a21]">
                    {item.description}
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center text-sm font-semibold text-[#7c2d12] transition hover:text-[#5a1e09]"
                  >
                    Order now →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#f97316]/15 bg-[#fff2e2] p-8 md:flex md:items-center md:justify-between">
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

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h3 className="font-heading text-2xl text-[#7c2d12]">
                From the bakery case
              </h3>
              <p className="mt-3 text-sm text-[#6b3a21]">
                Fresh every dawn, showcased with photography that makes guests
                hungry before they arrive.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {bakeryItems.map((item) => (
                  <figure
                    key={item.name}
                    className="overflow-hidden rounded-3xl border border-[#f97316]/15 bg-white shadow-[0_12px_35px_rgba(231,111,33,0.15)]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 w-full object-cover transition duration-500 hover:scale-105"
                      loading="lazy"
                    />
                    <figcaption className="space-y-2 p-4 text-sm text-[#6b3a21]">
                      <div className="flex items-center justify-between">
                        <p className="font-heading text-base text-[#7c2d12]">
                          {item.name}
                        </p>
                        <span className="rounded-full bg-[#f97316]/10 px-2 py-1 text-xs font-semibold text-[#7c2d12]">
                          {item.price}
                        </span>
                      </div>
                      <p>{item.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[#f97316]/15 bg-white p-6 shadow-[0_18px_45px_rgba(231,111,33,0.16)]">
              <h3 className="font-heading text-2xl text-[#7c2d12]">
                Pantry & market shelf
              </h3>
              <p className="mt-3 text-sm text-[#6b3a21]">
                Retail modules drive add-on revenue and capture holiday
                preorders.
              </p>
              <ul className="mt-6 space-y-4">
                {pantryGoods.map((good) => (
                  <li
                    key={good.title}
                    className="flex gap-4 rounded-2xl border border-[#f97316]/15 bg-[#fff7f1] p-4"
                  >
                    <img
                      src={good.image}
                      alt={good.title}
                      className="size-14 flex-none rounded-xl object-cover"
                      loading="lazy"
                    />
                    <div className="text-sm text-[#6b3a21]">
                      <p className="font-heading text-base text-[#7c2d12]">
                        {good.title}
                      </p>
                      <p>{good.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
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

      <section className="bg-[#2a1403] py-24 text-white">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="max-w-xl">
              <h2 className="font-heading text-3xl md:text-4xl">
                {`A gallery of moments brewed daily.`}
              </h2>
              <p className="mt-4 text-sm text-white/80">
                {`Scrollable media blocks show latte pours, pastry prep, and the glow of evening service. Motion on hover keeps guests immersed.`}
              </p>
            </div>
            <Link
              href="/"
              className="fade-right mt-8 inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white md:mt-0"
            >
              View our lookbook →
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80',
              'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=80&sat=-50',
            ].map((src, index) => (
              <div
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                className="fade-up group relative overflow-hidden rounded-3xl border border-white/15 bg-black/20"
              >
                <img
                  src={src}
                  alt="Cafe lifestyle"
                  className="h-64 w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <p className="absolute bottom-6 left-6 text-sm font-semibold tracking-wide text-white">
                  Hearth moments
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff7f1] py-24 text-[#3b1b0a]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1fr,1.1fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-[#f97316]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#c2410c]">
                Visit Hearth & Harvest
              </span>
              <h2 className="font-heading text-3xl md:text-4xl">
                Warm hospitality waiting in downtown Asheville.
              </h2>
              <p className="text-sm text-[#6b3a21]">
                Practical modules help locals find hours, parking, and same-day
                preorder options. Everything translates seamlessly to Google
                Business Profile and delivery partners.
              </p>
              <dl className="grid gap-4 text-sm text-[#6b3a21] sm:grid-cols-2">
                <div className="rounded-2xl border border-[#f97316]/15 bg-white p-4">
                  <dt className="font-heading text-base text-[#7c2d12]">
                    Address
                  </dt>
                  <dd>78 Cedar Street · Asheville, NC 28801</dd>
                  <dd className="mt-1 text-xs uppercase tracking-widest text-[#c2410c]">
                    Free street parking after 6p
                  </dd>
                </div>
                <div className="rounded-2xl border border-[#f97316]/15 bg-white p-4">
                  <dt className="font-heading text-base text-[#7c2d12]">
                    Hours
                  </dt>
                  <dd>Mon–Thu · 7a–7p · Fri–Sat · 7a–11p · Sun · 8a–4p</dd>
                </div>
                <div className="rounded-2xl border border-[#f97316]/15 bg-white p-4">
                  <dt className="font-heading text-base text-[#7c2d12]">
                    Contact
                  </dt>
                  <dd>(828) 555-0136 · hello@hearthharvest.com</dd>
                </div>
                <div className="rounded-2xl border border-[#f97316]/15 bg-white p-4">
                  <dt className="font-heading text-base text-[#7c2d12]">
                    Same-day pickup
                  </dt>
                  <dd>Order pastries and beans by 2p for evening pickup.</dd>
                </div>
              </dl>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/#book-consultation"
                  className="inline-flex items-center rounded-full bg-[#f59e0b] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d97706]"
                >
                  Schedule a cafe tour
                </Link>
                <Link
                  href="/"
                  className="inline-flex items-center rounded-full border border-[#f97316]/30 px-6 py-3 text-sm font-semibold text-[#7c2d12] transition hover:border-[#f97316]/60 hover:text-[#5a1e09]"
                >
                  View catering menu
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#f97316]/15 bg-white shadow-[0_24px_55px_rgba(231,111,33,0.2)]">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1200&q=80"
                alt="Cafe exterior on Cedar Street"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-6 p-6 md:grid-cols-2">
                {[
                  {
                    label: 'Neighborhood',
                    value: 'Historic River Arts District',
                  },
                  {
                    label: 'Transit',
                    value: 'Bus R7 · Cedar & 2nd stop out front',
                  },
                  {
                    label: 'Private Events',
                    value: 'Fireside room for 25 guests',
                  },
                  {
                    label: 'Accessibility',
                    value: 'ADA entrance & hearing assistance',
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#f97316]/15 bg-[#fff7f1] p-4 text-sm text-[#6b3a21]"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c2410c]">
                      {item.label}
                    </p>
                    <p className="mt-2 font-heading text-base text-[#7c2d12]">
                      {item.value}
                    </p>
                  </div>
                ))}
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
              className="inline-flex items-center rounded-full bg-[#f59e0b] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#d97706]"
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

    <style jsx>{`
      @keyframes fadeUp {
        from {
          opacity: 0;
          transform: translateY(28px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes fadeRight {
        from {
          opacity: 0;
          transform: translateX(24px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      .fade-up {
        animation: fadeUp 1s ease-out both;
      }

      .fade-right {
        animation: fadeRight 1.1s ease-out both;
      }
    `}</style>
  </>
);

export default HearthHarvestDemo;
