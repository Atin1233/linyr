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
    name: 'Hearth Flat White',
    description:
      'Smoky espresso, caramelized sugar syrup, steamed milk, cocoa dust.',
    price: '$5.50',
    image:
      'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Woodland Tartine',
    description:
      'Toasted rye, whipped ricotta, roasted mushrooms, charred lemon oil.',
    price: '$11.00',
    image:
      'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Golden Chai Latte',
    description:
      'Turmeric chai, local honey, oat milk, toasted clove and orange.',
    price: '$5.25',
    image:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  },
];

const bakeryItems = [
  {
    name: 'Rosemary Honey Cruffin',
    description: 'Laminate dough, rosemary honey butter, vanilla bean custard.',
    price: '$4.75',
    image:
      'https://images.unsplash.com/photo-1483695028939-5bb13f8648b4?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Farm Stone Fruit Galette',
    description:
      'Buttery crust, roasted peaches, hazelnut crumble, mascarpone.',
    price: '$6.50',
    image:
      'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Garden Quiche',
    description: 'Heirloom tomato, chèvre, caramelized onion, basil pesto.',
    price: '$7.25',
    image:
      'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1200&q=80',
  },
];

const eventSchedule = [
  {
    day: 'Thursdays',
    title: 'Vinyl & Pour Over Nights',
    detail: 'Guest DJs, curated pour-over flights, dessert pairing menu, 6–9p.',
  },
  {
    day: 'Saturdays',
    title: 'Farm Brunch Seating',
    detail: 'Pre-fixe brunch with farm produce, seatings at 10a and noon.',
  },
  {
    day: 'Sundays',
    title: 'Maker Courtyard Market',
    detail: 'Local artists, pop-up floral bar, seasonal collaborative drinks.',
  },
];

const testimonials = [
  {
    quote:
      '“The cafe feels like home—warm service, thoughtful food, and spaces for both quiet mornings and lively evenings.”',
    name: 'Chloe W.',
    detail: 'Local artist • Asheville, NC',
  },
  {
    quote:
      '“Our studio holds planning sessions here weekly. The staff remembers every order and the atmosphere sparks ideas.”',
    name: 'James R.',
    detail: 'Founder • Cedar Street Studio',
  },
];

const gallerySlides = [
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
  { label: 'Transit', value: 'Bus R7 · Cedar & 2nd stop outside the cafe' },
  {
    label: 'Private Events',
    value: 'Fireside room for 25 guests, courtyard gatherings for 60',
  },
  {
    label: 'Accessibility',
    value: 'ADA entrance, hearing assistance, allergen-friendly menu',
  },
];

const HearthHarvestDemo = () => (
  <>
    <Meta
      title={`Hearth & Harvest Cafe Demo — ${AppConfig.title}`}
      description="Preview Hearth & Harvest Cafe, a neighborhood cafe website with image-rich storytelling, seasonal menu highlights, events, and visiting info."
    />
    <main className="bg-[#f6f3ed] text-[#2f1d12]">
      <header className="sticky top-0 z-40 border-b border-[#e8ddcf] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-[#4d3b28]"
          >
            Hearth &amp; Harvest
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1 text-[#4d3b28]/80 transition hover:bg-[#e9f2e3] hover:text-[#2f4f21]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="#visit"
            className="inline-flex items-center rounded-full bg-[#2f4f21] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_20px_rgba(47,79,33,0.25)] transition hover:-translate-y-0.5"
          >
            Reserve a table
          </Link>
        </div>
      </header>

      <section
        id="overview"
        className="border-b border-[#e8ddcf] bg-white"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(246,243,237,0.92) 0%, rgba(246,243,237,1) 55%), url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr,0.9fr] md:px-12">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#4d3b28]">
              Brunch • Espresso • Gatherings
            </span>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              Where fire-roasted espresso meets neighborhood hospitality.
            </h1>
            <p className="text-base text-[#5c4838]">
              Hearth &amp; Harvest is an Asheville cafe for early risers, remote
              workers, and weekend lingerers. Our site highlights seasonal
              dishes, curated events, and practical visiting information with
              warm, tactile visuals throughout.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#menu"
                className="inline-flex items-center rounded-full bg-[#2f4f21] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
              >
                Explore the seasonal menu
              </Link>
              <Link
                href="#events"
                className="inline-flex items-center rounded-full border border-[#2f4f21]/30 px-6 py-3 text-sm font-semibold text-[#2f4f21] transition hover:border-[#2f4f21]"
              >
                See upcoming events →
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-[#5c4838] sm:grid-cols-2">
              <div className="rounded-2xl border border-[#e8ddcf] bg-[#fbf2e6]/80 p-4 shadow-sm">
                <p className="font-heading text-base text-[#4d3b28]">
                  House roastery & bakery
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#a86f3b]">
                  fresh daily
                </p>
              </div>
              <div className="rounded-2xl border border-[#e8ddcf] bg-[#fbf2e6]/80 p-4 shadow-sm">
                <p className="font-heading text-base text-[#4d3b28]">
                  Order ahead & curbside pickup
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#a86f3b]">
                  7a – 6p daily
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-[#e8ddcf] bg-white/90 shadow-[0_18px_55px_rgba(47,29,11,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80"
                alt="Cafe interior with cozy lighting"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-4 border-t border-[#e8ddcf] bg-white p-6 text-sm text-[#5c4838] md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a86f3b]">
                    Morning playlist
                  </p>
                  <p className="mt-1">
                    Vinyl curation and pour-over flights from 7–10a.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a86f3b]">
                    Evening menu
                  </p>
                  <p className="mt-1">
                    Wood-fired espresso cocktails and chef tasting plates.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#e8ddcf] bg-white/90 p-6 shadow-[0_18px_55px_rgba(47,29,11,0.15)]">
              <p className="font-heading text-base text-[#4d3b28]">
                Hospitality notes
              </p>
              <ul className="mt-3 space-y-2 text-sm text-[#5c4838]">
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#2f4f21]" />
                  Pet-friendly courtyard with heaters & blankets
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#2f4f21]" />
                  Free gigabit Wi-Fi and community library wall
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#2f4f21]" />
                  Seasonal subscription box for beans & pastries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#f0ece4] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#a86f3b]">
                Seasonal menu
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Signature drinks and plates from our hearth kitchen.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#5c4838] md:mt-0">
              Everything is roasted, baked, or sourced in-house. Browse guest
              favorites below, or download the full menu for daily specials.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {signatureMenu.map((item) => (
              <article
                key={item.name}
                className="overflow-hidden rounded-3xl border border-[#e8ddcf] bg-white shadow-[0_16px_45px_rgba(47,29,11,0.08)]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-3 px-6 py-5 text-sm text-[#5c4838]">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg text-[#4d3b28]">
                      {item.name}
                    </h3>
                    <span className="rounded-full bg-[#e9f2e3] px-3 py-1 text-xs font-semibold text-[#2f4f21]">
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
              <h3 className="font-heading text-2xl text-[#4d3b28]">
                From the bakery case
              </h3>
              <p className="mt-3 text-sm text-[#5c4838]">
                Fresh every morning, baked by our pastry team and sold until we
                run out. Pre-order available for larger gatherings.
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-3">
                {bakeryItems.map((item) => (
                  <figure
                    key={item.name}
                    className="overflow-hidden rounded-3xl border border-[#e8ddcf] bg-white shadow-[0_12px_35px_rgba(47,29,11,0.08)]"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-40 w-full object-cover"
                      loading="lazy"
                    />
                    <figcaption className="space-y-1 p-4 text-sm text-[#5c4838]">
                      <div className="flex items-center justify-between">
                        <p className="font-heading text-base text-[#4d3b28]">
                          {item.name}
                        </p>
                        <span className="rounded-full bg-[#e9f2e3] px-2 py-1 text-xs font-semibold text-[#2f4f21]">
                          {item.price}
                        </span>
                      </div>
                      <p>{item.description}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <aside className="rounded-3xl border border-[#e8ddcf] bg-white p-6 shadow-[0_16px_45px_rgba(47,29,11,0.08)]">
              <h3 className="font-heading text-2xl text-[#4d3b28]">
                Hearth Rewards loyalty
              </h3>
              <p className="mt-3 text-sm text-[#5c4838]">
                Earn points on every visit, enjoy birthday drinks, and get first
                access to seasonal drops. Members receive monthly tasting
                invites.
              </p>
              <Link
                href="/#book-consultation"
                className="mt-4 inline-flex items-center rounded-full bg-[#2f4f21] px-6 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2f4f21]"
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
            <span className="inline-flex items-center rounded-full bg-[#e9f2e3] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2f4f21]">
              Events & happenings
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Something new every week at the cafe.
            </h2>
            <p className="mt-3 text-sm text-[#5c4838]">
              From vinyl nights and roaster tours to pop-up maker markets, we
              love bringing neighbors together. Check the calendar below for
              upcoming gatherings.
            </p>
            <div className="mt-6 space-y-4 text-sm text-[#5c4838]">
              {eventSchedule.map((event) => (
                <div
                  key={event.title}
                  className="rounded-2xl border border-[#e8ddcf] bg-[#fbf2e6]/80 p-5 shadow-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a86f3b]">
                    {event.day}
                  </p>
                  <p className="mt-2 font-heading text-lg text-[#4d3b28]">
                    {event.title}
                  </p>
                  <p className="mt-1">{event.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[#e8ddcf] bg-[#fbf2e6]/80 p-8 shadow-[0_18px_55px_rgba(47,29,11,0.18)]">
            <h3 className="font-heading text-2xl text-[#4d3b28]">
              Private events & catering
            </h3>
            <p className="mt-3 text-sm text-[#5c4838]">
              Host morning meetings, intimate dinners, or launch events in our
              fireside room or courtyard. We offer small-plate catering, pairing
              menus, and dedicated staff.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-[#5c4838]">
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#2f4f21]" />
                Fireside room for up to 25 seated guests
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#2f4f21]" />
                Custom menu design with our culinary team
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 inline-flex size-2 rounded-full bg-[#2f4f21]" />
                Local musicians and floral partners available
              </li>
            </ul>
            <Link
              href="/#book-consultation"
              className="mt-6 inline-flex items-center rounded-full border border-[#2f4f21]/40 px-6 py-2 text-sm font-semibold text-[#2f4f21] transition hover:border-[#2f4f21]"
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
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#a86f3b]">
                Gallery
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                A peek inside Hearth &amp; Harvest.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[#5c4838]">
                Warm tones, natural light, and handcrafted details define our
                space. Swipe through to see mornings, evenings, and everything
                in between.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#a86f3b]">
              drag or tap to explore
            </p>
          </div>
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex snap-x gap-6">
              {gallerySlides.map((src) => (
                <div
                  key={src}
                  className="group relative h-72 w-[320px] flex-none snap-center overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_20px_55px_rgba(47,29,11,0.18)]"
                >
                  <img
                    src={src}
                    alt="Cafe interior"
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2f1d12]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#4d3b28]">
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
            <span className="inline-flex items-center rounded-full bg-[#e9f2e3] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2f4f21]">
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
                className="rounded-3xl border border-[#e8ddcf] bg-[#fbf2e6]/80 p-6 text-sm text-[#5c4838] shadow-[0_16px_45px_rgba(47,29,11,0.08)]"
              >
                <p className="text-base text-[#4d3b28]">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-[#4d3b28]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#a86f3b]">
                  {testimonial.detail}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="visit" className="bg-[#f6f3ed] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-[#e9f2e3] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2f4f21]">
                Visit Hearth &amp; Harvest
              </span>
              <h2 className="font-heading text-3xl md:text-4xl">
                Practical details before you stop by.
              </h2>
              <p className="text-sm text-[#5c4838]">
                We’re tucked into Asheville’s River Arts District with plenty of
                parking, bike storage, and a friendly team ready to welcome you
                in.
              </p>
              <dl className="grid gap-4 text-sm text-[#5c4838] sm:grid-cols-2">
                {visitDetails.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#e8ddcf] bg-white p-4"
                  >
                    <dt className="font-heading text-base text-[#4d3b28]">
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-3 text-sm text-[#5c4838]">
                {quickFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="rounded-full border border-[#e8ddcf] bg-white px-4 py-2"
                  >
                    <span className="font-semibold text-[#4d3b28]">
                      {fact.label}:
                    </span>{' '}
                    {fact.value}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="https://maps.google.com"
                  className="inline-flex items-center rounded-full bg-[#2f4f21] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#2f4f21]"
                >
                  Get directions
                </Link>
                <Link
                  href="tel:18285550136"
                  className="inline-flex items-center rounded-full border border-[#2f4f21]/30 px-6 py-3 text-sm font-semibold text-[#2f4f21] transition hover:border-[#2f4f21]"
                >
                  Call the cafe
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#e8ddcf] shadow-[0_20px_60px_rgba(47,29,11,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?auto=format&fit=crop&w=1400&q=80"
                alt="Cafe exterior on Cedar Street"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-4 border-t border-[#e8ddcf] bg-white p-6 text-sm text-[#5c4838] md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a86f3b]">
                    Parking
                  </p>
                  <p className="mt-1">
                    Free street parking after 6p • Two paid lots within 1 block.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#a86f3b]">
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

      <section className="bg-[#2f4f21] py-24 text-white">
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
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2f4f21] transition hover:-translate-y-0.5 hover:bg-[#fff3e4]"
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
