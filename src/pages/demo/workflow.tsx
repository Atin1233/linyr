import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const navigationLinks = [
  { label: 'Home', href: '#overview' },
  { label: 'Menu', href: '#menu' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

const signatureMenu = [
  {
    name: 'Fireside Flat White',
    description:
      'Double shot espresso, burnt sugar syrup, steamed whole milk, smoked salt finish.',
    price: '$5.50',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Woodland Tartine',
    description:
      'Toasted sourdough, whipped ricotta, roasted mushrooms, farm herbs, chili honey.',
    price: '$11.00',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Harvest Chai Latte',
    description:
      'House-milled spice blend, Assam tea, maple, cream, charred orange zest.',
    price: '$5.00',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
];

const featuredFood = [
  {
    name: 'Smoked Honey Cruffin',
    description: 'Laminate dough, burnt honey butter, vanilla bean custard.',
    price: '$4.75',
    image:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Stone Fruit Galette',
    description: 'Rye crust, roasted peaches, thyme syrup, mascarpone whip.',
    price: '$6.50',
    image:
      'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Garden Quiche',
    description:
      'Heirloom tomato, goat cheese, caramelized onion, basil pesto.',
    price: '$7.25',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
  },
];

const eventSchedule = [
  {
    day: 'Thursdays',
    title: 'Vinyl & Pour Over Nights',
    detail: 'Guest DJs, limited roast flights, desserts, 6–9p.',
  },
  {
    day: 'Saturdays',
    title: 'Farm Brunch Seating',
    detail: 'Pre-fixe brunch with seasonal produce, seatings at 10a + noon.',
  },
  {
    day: 'Sundays',
    title: 'Maker Market Courtyard',
    detail: 'Local artists, pop-up florist, and collaborative drinks.',
  },
];

const testimonials = [
  {
    quote:
      '“Warm service, espresso done right, and a brunch menu that changes weekly. Hearth & Harvest feels like my home away from home.”',
    name: 'Chloe W.',
    detail: 'Local guest • Asheville, NC',
  },
  {
    quote:
      '“Our regular team meetings happen here—the staff always remembers our order and the space inspires great conversations.”',
    name: 'James R.',
    detail: 'Founder • Cedar Street Studio',
  },
];

const galleryImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1481833761820-0509d3217039?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1400&q=80',
];

const visitDetails = [
  { label: 'Address', value: '78 Cedar Street · Asheville, NC 28801' },
  { label: 'Hours', value: 'Mon–Thu 7a–7p · Fri–Sat 7a–11p · Sun 8a–4p' },
  { label: 'Contact', value: '(828) 555-0136 · hello@hearthharvest.com' },
  {
    label: 'Same-day pickup',
    value: 'Order pastries and beans by 2p for evening pickup.',
  },
];

const quickFacts = [
  { label: 'Neighborhood', value: 'River Arts District' },
  { label: 'Transit', value: 'Bus R7 · Cedar & 2nd stop out front' },
  { label: 'Private Events', value: 'Fireside room for up to 25 guests' },
  {
    label: 'Accessibility',
    value: 'ADA entrance, hearing assistance, allergen-friendly menu',
  },
];

const HearthHarvestDemo = () => (
  <>
    <Meta
      title={`Hearth & Harvest Cafe Demo — ${AppConfig.title}`}
      description="Experience Hearth & Harvest Cafe, a warm neighborhood cafe website with seasonal menu storytelling, events, and practical visitor info."
    />
    <main className="bg-[#faf7f3] text-[#3b1b0a]">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-[#7c2d12]"
          >
            Hearth &amp; Harvest
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1 text-[#7c2d12]/80 transition hover:bg-[#fbe8cf] hover:text-[#7c2d12]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#visit"
            className="inline-flex items-center rounded-full bg-[#7c2d12] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(124,45,18,0.25)] transition hover:-translate-y-0.5 hover:bg-[#5a1e09]"
          >
            Reserve a table
          </Link>
        </div>
      </header>

      <section id="overview" className="border-b border-[#f0e4d8] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr,0.9fr] md:px-12">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#fbe8cf] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#7c2d12]">
              Brunch • Espresso • Gatherings
            </span>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              A cozy Asheville cafe for mornings,meetings, and lingering
              weekends.
            </h1>
            <p className="text-base text-[#5a3b25]">
              Hearth &amp; Harvest is a neighborhood space built around
              wood-fired espresso, seasonal brunch, and a calendar of local
              makers. This site highlights who we are, what’s on the menu, and
              how to plan your visit.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#menu"
                className="inline-flex items-center rounded-full bg-[#7c2d12] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5a1e09]"
              >
                View seasonal menu
              </Link>
              <Link
                href="#events"
                className="inline-flex items-center rounded-full border border-[#7c2d12]/30 px-6 py-3 text-sm font-semibold text-[#7c2d12] transition hover:border-[#7c2d12]"
              >
                Upcoming events →
              </Link>
            </div>
            <ul className="grid gap-4 text-sm text-[#5a3b25] sm:grid-cols-2">
              <li className="rounded-2xl border border-[#f0e4d8] bg-[#fff7ed] p-4">
                <p className="font-heading text-base text-[#7c2d12]">
                  Roastery & bakery on site
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#b36b38]">
                  fresh daily
                </p>
              </li>
              <li className="rounded-2xl border border-[#f0e4d8] bg-[#fff7ed] p-4">
                <p className="font-heading text-base text-[#7c2d12]">
                  Order ahead & curbside pickup
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#b36b38]">
                  7a - 6p daily
                </p>
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-[#f0e4d8] shadow-[0_18px_55px_rgba(58,29,9,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1400&q=80"
              alt="Barista preparing coffee"
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute bottom-0 w-full bg-white/80 px-6 py-5 backdrop-blur">
              <p className="font-heading text-lg text-[#7c2d12]">
                House espresso roasted on Cedar Street.
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#b36b38]">
                single origin • seasonal blends
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#fdf5ed] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#c2410c]">
                Seasonal menu
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Crafted drinks and plates from our hearth kitchen.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#5a3b25] md:mt-0">
              Everything is made in-house, sourced from local farms, and updated
              each season. Browse a few guest favorites below.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {signatureMenu.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-3xl border border-[#f0e4d8] bg-white shadow-[0_16px_45px_rgba(58,29,9,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-3 px-6 py-5 text-sm text-[#5a3b25]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg text-[#7c2d12]">
                      {item.name}
                    </h3>
                    <span className="rounded-full bg-[#fbe8cf] px-3 py-1 text-xs font-semibold text-[#7c2d12]">
                      {item.price}
                    </span>
                  </div>
                  <p>{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-[1.2fr,0.8fr]">
            <div>
              <h3 className="font-heading text-2xl text-[#7c2d12]">
                From the bakery case
              </h3>
              <p className="mt-3 text-sm text-[#5a3b25]">
                Fresh every morning, baked by our pastry team and sold until we
                run out. Pre-order available for larger gatherings.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {featuredFood.map((item) => (
                  <figure
                    key={item.name}
                    className="overflow-hidden rounded-3xl border border-[#f0e4d8] bg-white shadow-[0_12px_35px_rgba(58,29,9,0.08)]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="space-y-1 p-4 text-sm text-[#5a3b25]">
                      <div className="flex items-center justify-between">
                        <p className="font-heading text-base text-[#7c2d12]">
                          {item.name}
                        </p>
                        <span className="rounded-full bg-[#fbe8cf] px-2 py-1 text-xs font-semibold text-[#7c2d12]">
                          {item.price}
                        </span>
                      </div>
                      <p>{item.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl border border-[#f0e4d8] bg-white p-6 shadow-[0_16px_45px_rgba(58,29,9,0.08)]">
              <h3 className="font-heading text-2xl text-[#7c2d12]">
                Hearth Rewards loyalty
              </h3>
              <p className="mt-3 text-sm text-[#5a3b25]">
                Earn points on every visit, enjoy birthday drinks, and get first
                access to seasonal drops. Members receive monthly tasting
                invites.
              </p>
              <Link
                href="/#book-consultation"
                className="mt-4 inline-flex items-center rounded-full bg-[#f97316] px-6 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#ea580c]"
              >
                Join the program →
              </Link>
            </aside>
          </div>
        </div>
      </section>

      <section id="events" className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[1fr,1fr] md:px-12">
          <div>
            <span className="inline-flex items-center rounded-full bg-[#fbe8cf] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#7c2d12]">
              Events & happenings
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Something new every week at the cafe.
            </h2>
            <p className="mt-3 text-sm text-[#5a3b25]">
              From vinyl nights and roaster tours to pop-up maker markets, we
              love bringing neighbors together. Check the calendar below for
              upcoming gatherings.
            </p>
            <div className="mt-6 space-y-4 text-sm text-[#5a3b25]">
              {eventSchedule.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-[#f0e4d8] bg-[#fff7ed] p-5 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#c2410c]">
                    {event.day}
                  </p>
                  <p className="mt-2 font-heading text-lg text-[#7c2d12]">
                    {event.title}
                  </p>
                  <p className="mt-1">{event.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#f0e4d8] bg-[#fff7ed] p-8 shadow-[0_18px_55px_rgba(58,29,9,0.12)]">
            <h3 className="font-heading text-2xl text-[#7c2d12]">
              Private events & catering
            </h3>
            <p className="mt-3 text-sm text-[#5a3b25]">
              Host morning meetings, intimate dinners, or launch events in our
              fireside room or courtyard. We offer small-plate catering, pairing
              menus, and dedicated staff.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#5a3b25]">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#7c2d12]" />
                Fireside room for up to 25 seated guests
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#7c2d12]" />
                Custom menu design with our culinary team
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#7c2d12]" />
                Local musicians and floral partners available
              </li>
            </ul>
            <Link
              href="/#book-consultation"
              className="mt-6 inline-flex items-center rounded-full border border-[#7c2d12]/40 px-6 py-2 text-sm font-semibold text-[#7c2d12] transition hover:border-[#7c2d12]"
            >
              Inquire about availability →
            </Link>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#fff3e4] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#c2410c]">
                Gallery
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                A peek inside Hearth &amp; Harvest.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[#5a3b25]">
                Warm tones, natural light, and handcrafted details define our
                space. Swipe through to see mornings, evenings, and everything
                in between.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#b36b38]">
              drag or tap to explore
            </p>
          </div>
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex snap-x gap-6">
              {galleryImages.map((src) => (
                <div
                  key={src}
                  className="group relative h-72 w-[320px] flex-none snap-center overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_20px_55px_rgba(58,29,9,0.18)]"
                >
                  <img
                    src={src}
                    alt="Cafe interior"
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3b1b0a]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#7c2d12]">
                    Hearth moment
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#fbe8cf] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#7c2d12]">
              Guests say it best
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Loved by locals and visitors alike.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-3xl border border-[#f0e4d8] bg-[#fff7ed] p-6 text-sm text-[#5a3b25] shadow-[0_16px_45px_rgba(58,29,9,0.08)]"
              >
                <p className="text-base text-[#7c2d12]">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-[#7c2d12]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#b36b38]">
                  {testimonial.detail}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#faf7f3] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-[#fbe8cf] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#7c2d12]">
                Visit Hearth &amp; Harvest
              </span>
              <h2 className="font-heading text-3xl md:text-4xl">
                Practical details before you stop by.
              </h2>
              <p className="text-sm text-[#5a3b25]">
                We’re tucked into Asheville’s River Arts District with plenty of
                parking, bike storage, and a friendly team ready to welcome you
                in.
              </p>
              <dl className="grid gap-4 text-sm text-[#5a3b25] sm:grid-cols-2">
                {visitDetails.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#f0e4d8] bg-white p-4"
                  >
                    <dt className="font-heading text-base text-[#7c2d12]">
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-3 text-sm text-[#5a3b25]">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-full border border-[#f0e4d8] bg-white px-4 py-2"
                  >
                    <span className="font-semibold text-[#7c2d12]">
                      {fact.label}:
                    </span>{' '}
                    {fact.value}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://maps.google.com"
                  className="inline-flex items-center rounded-full bg-[#7c2d12] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#5a1e09]"
                >
                  Get directions
                </Link>
                <Link
                  href="tel:18285550136"
                  className="inline-flex items-center rounded-full border border-[#7c2d12]/30 px-6 py-3 text-sm font-semibold text-[#7c2d12] transition hover:border-[#7c2d12]"
                >
                  Call the cafe
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#f0e4d8] shadow-[0_20px_60px_rgba(58,29,9,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80"
                alt="Cafe exterior on Cedar Street"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-4 border-t border-[#f0e4d8] bg-white p-6 text-sm text-[#5a3b25] md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b36b38]">
                    Parking
                  </p>
                  <p className="mt-1">
                    Free street parking after 6p • Two paid lots within 1 block.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#b36b38]">
                    Bike & transit
                  </p>
                  <p className="mt-1">
                    Bike rack out front • Bus R7 drops at Cedar & 2nd every 15
                    minutes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#7c2d12] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-0">
          <h2 className="font-heading text-3xl md:text-4xl">
            We’ll save you a seat by the fire.
          </h2>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            Drop by any day of the week, or reach out to plan your next
            gathering with us. We can’t wait to welcome you to Hearth &amp;
            Harvest.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#visit"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#7c2d12] transition hover:-translate-y-0.5 hover:bg-[#fff3e4]"
            >
              Plan your visit
            </Link>
            <Link
              href="#events"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              View events calendar
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default HearthHarvestDemo;
