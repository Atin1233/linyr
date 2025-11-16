import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const navigationLinks = [
  { label: 'Home', href: '#overview' },
  { label: 'Treatments', href: '#treatments' },
  { label: 'Team', href: '#team' },
  { label: 'Patients', href: '#patient-info' },
  { label: 'Gallery', href: '#gallery' },
];

const treatmentCategories = [
  {
    title: 'Cosmetic Dentistry',
    description:
      'Veneers, bonding, whitening, and smile design plans crafted to enhance aesthetics while protecting long-term health.',
    items: [
      'Smile design consults',
      'Porcelain veneers & bonding',
      'Professional whitening',
      'Aligners & retainers',
    ],
    image:
      'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Restorative Care',
    description:
      'Same-day crowns, implants, and restorative dentistry using digital imaging for comfort and precision.',
    items: [
      'CEREC same-day crowns',
      'Dental implants & bridges',
      'Inlays/onlays',
      'TMJ therapy',
    ],
    image:
      'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Wellness & Prevention',
    description:
      'Comprehensive exams, hygiene visits, and preventative plans for the entire family, including pediatric specialists.',
    items: [
      'Comprehensive exams',
      'Periodontal therapy',
      'Pediatric dentistry',
      'Night guards & sleep care',
    ],
    image:
      'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=1200&q=80',
  },
];

const doctorProfiles = [
  {
    name: 'Dr. Mina Hartley',
    role: 'Cosmetic & Restorative Dentist',
    bio: "Spearheads Lumina's cosmetic studio with 12+ years designing minimally invasive smile makeovers.",
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Dr. Julian Park',
    role: 'Implant & Surgical Specialist',
    bio: 'Board-certified surgeon focused on implants, gum grafts, and complex restorative treatment.',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=1000&q=80',
  },
  {
    name: 'Amelia Chen, RDH',
    role: 'Lead Hygienist & Wellness Coach',
    bio: 'Coordinates hygiene, home-care plans, and wellness workshops for families and professionals.',
    image:
      'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=1000&q=80',
  },
];

const patientResources = [
  {
    label: 'Address',
    value: '721 Aurora Avenue · Suite 300 · Seattle, WA 98109',
  },
  { label: 'Patient line', value: '(206) 555-0148 · care@luminasmiles.com' },
  { label: 'Hours', value: 'Mon–Thu 7a–6p · Fri 7a–3p · Select Sat by appt' },
  { label: 'After-hours', value: '24/7 emergency line and on-call dentist' },
];

const insurancePartners = [
  'Delta Dental',
  'MetLife',
  'Guardian',
  'Blue Cross Blue Shield',
  'Cigna',
];

const smileGallery = [
  {
    src: 'https://images.unsplash.com/photo-1505849864904-01b9e182ed1e?auto=format&fit=crop&w=1400&q=80',
    label: 'Smile transformation',
  },
  {
    src: 'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1400&q=80',
    label: 'Cosmetic enhancement',
  },
  {
    src: 'https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=1400&q=80',
    label: 'Restorative care',
  },
  {
    src: 'https://images.unsplash.com/photo-1580281780460-82d277b0e3f1?auto=format&fit=crop&w=1400&q=80',
    label: 'Patient consultation',
  },
  {
    src: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80',
    label: 'Modern operatory',
  },
];

const testimonials = [
  {
    quote:
      '"From the warm welcome to the digital smile preview, I felt informed and cared for. The team explained every step and my new smile feels natural."',
    name: 'Avery Martinez',
    detail: 'Wedding photographer · Invisalign & whitening',
  },
  {
    quote:
      '"The sedation options, recovery guides, and follow-up calls made implant surgery surprisingly smooth. Lumina truly delivers concierge care."',
    name: 'Daniel Rios',
    detail: 'Entrepreneur · Implant restoration',
  },
];

const heroHighlights = [
  {
    title: 'Digital smile previews',
    description: 'See results before treatment',
    icon: '✨',
  },
  {
    title: 'Sedation & comfort options',
    description: 'for every appointment',
    icon: '🛋️',
  },
  {
    title: 'First visit',
    description:
      'Welcome consult, comfort menu, and 3D imaging in under 90 minutes.',
    icon: '📋',
  },
  {
    title: '98% patient satisfaction',
    description: 'from over 15,000 transformed smiles',
    icon: '⭐',
  },
  {
    title: '24/7 emergency line',
    description: 'for urgent care and after-hours support',
    icon: '📞',
  },
];

const LuminaSmilesDemo = () => (
  <>
    <Meta
      title={`Lumina Smiles Dental Demo — ${AppConfig.title}`}
      description="Tour Lumina Smiles Dental, a contemporary practice site featuring treatments, team introductions, patient resources, and a calming visual gallery."
    />
    <main className="bg-[#f0fdfa] text-[#0f172a]">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-[#0d9488]"
          >
            Lumina Smiles
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1 text-[#1e293b]/80 transition hover:bg-[#ccfbf1] hover:text-[#0d9488]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#book-consultation"
            className="inline-flex items-center rounded-full bg-[#0d9488] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_22px_rgba(13,148,136,0.25)] transition hover:-translate-y-0.5 hover:bg-[#0f766e]"
          >
            Book an appointment
          </Link>
        </div>
      </header>

      <section
        id="overview"
        className="border-b border-[#ccfbf1] bg-white"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(240,253,250,0.92) 0%, rgba(240,253,250,1) 55%), url(https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.1fr,0.9fr] md:px-12">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#0d9488]">
              Calm, concierge dental care
            </span>
            <h1 className="font-heading text-4xl leading-tight md:text-5xl">
              A dental studio built around comfort, technology, and lasting
              wellness.
            </h1>
            <p className="text-base text-[#475569]">
              From virtual smile design to gentle recovery plans, Lumina Smiles
              brings together specialists, hygienists, and patient coordinators
              under one roof. Explore treatments, meet the team, and plan your
              first visit.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="#treatments"
                className="inline-flex items-center rounded-full bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f766e]"
              >
                Explore treatments
              </Link>
              <Link
                href="#patient-info"
                className="inline-flex items-center rounded-full border border-[#0d9488]/30 px-6 py-3 text-sm font-semibold text-[#0d9488] transition hover:border-[#0d9488]"
              >
                New patient guide →
              </Link>
            </div>
            <div className="grid gap-4 text-sm text-[#475569] sm:grid-cols-2">
              {heroHighlights.slice(0, 4).map((highlight) => (
                <div
                  key={highlight.title}
                  className="rounded-2xl border border-[#ccfbf1] bg-white/80 p-4 shadow-sm"
                >
                  <p className="font-heading text-base text-[#0f172a]">
                    {highlight.icon} {highlight.title}
                  </p>
                  <p className="mt-1 text-xs text-[#64748b]">
                    {highlight.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-[#ccfbf1] bg-white/90 shadow-[0_20px_60px_rgba(13,148,136,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
                alt="Dental studio reception"
                className="h-64 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-4 border-t border-[#ccfbf1] bg-white px-6 py-5 text-sm text-[#475569] md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0d9488]">
                    First visit
                  </p>
                  <p className="mt-1">
                    Welcome consult, comfort menu, and 3D imaging in under 90
                    minutes.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0d9488]">
                    Patient care
                  </p>
                  <p className="mt-1">
                    Concierge follow-up, recovery kits, and personalized
                    wellness plans.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-3xl border border-[#ccfbf1] bg-white/90 p-6 shadow-[0_20px_60px_rgba(13,148,136,0.1)]">
              <p className="font-heading text-base text-[#0f172a]">
                Patient highlights
              </p>
              <div className="mt-4 grid gap-3 text-center sm:grid-cols-2">
                <div className="rounded-2xl border border-[#ccfbf1] bg-[#f0fdfa] p-4">
                  <p className="font-heading text-2xl text-[#0d9488]">98%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#0d9488]/70">
                    satisfaction
                  </p>
                </div>
                <div className="rounded-2xl border border-[#ccfbf1] bg-[#f0fdfa] p-4">
                  <p className="font-heading text-2xl text-[#0d9488]">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#0d9488]/70">
                    emergency line
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="treatments" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#ccfbf1] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d9488]">
                Treatments
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Comprehensive dentistry, personalized to you.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#475569] md:mt-0">
              We blend cosmetic expertise, restorative technology, and
              preventative care so every patient has a confident path forward.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {treatmentCategories.map((category) => (
              <article
                key={category.title}
                className="group overflow-hidden rounded-3xl border border-[#ccfbf1] bg-white shadow-[0_16px_45px_rgba(13,148,136,0.08)] transition hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(13,148,136,0.15)]"
              >
                <div
                  className="relative h-48 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(180deg, rgba(13,148,136,0.15) 0%, rgba(13,148,136,0.35) 100%), url(${category.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
                  <h3 className="absolute bottom-4 left-4 font-heading text-xl text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="p-6">
                  <p className="mt-3 text-sm text-[#475569]">
                    {category.description}
                  </p>
                  <ul className="mt-6 space-y-2 text-sm text-[#475569]">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex size-2 rounded-full bg-[#0d9488]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#f0fdfa] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d9488]/70">
                Meet the team
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Specialists, hygienists, and coordinators who know your name.
              </h2>
            </div>
            <p className="mt-4 max-w-lg text-sm text-[#475569] md:mt-0">
              Each patient is paired with a lead dentist and wellness
              coordinator so communication is easy and every visit feels
              familiar.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {doctorProfiles.map((doctor) => (
              <article
                key={doctor.name}
                className="overflow-hidden rounded-3xl border border-[#ccfbf1] bg-white shadow-[0_18px_55px_rgba(13,148,136,0.1)] transition hover:-translate-y-1"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-64 w-full object-cover transition duration-500 hover:scale-105"
                  loading="lazy"
                />
                <div className="space-y-2 p-6 text-sm text-[#475569]">
                  <h3 className="font-heading text-lg text-[#0f172a]">
                    {doctor.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0d9488]">
                    {doctor.role}
                  </p>
                  <p>{doctor.bio}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="patient-info" className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <span className="inline-flex items-center rounded-full bg-[#ccfbf1] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d9488]">
                Patient resources
              </span>
              <h2 className="font-heading text-3xl md:text-4xl">
                Clear details before your first visit.
              </h2>
              <p className="text-sm text-[#475569]">
                We make it easy to transfer records, check insurance, and feel
                comfortable from the moment you arrive. Call or message us
                anytime.
              </p>
              <dl className="grid gap-4 text-sm text-[#475569] sm:grid-cols-2">
                {patientResources.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-[#ccfbf1] bg-[#f0fdfa] p-4"
                  >
                    <dt className="font-heading text-base text-[#0f172a]">
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d9488]">
                {insurancePartners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full border border-[#ccfbf1] bg-white px-4 py-2"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="tel:12065550148"
                  className="inline-flex items-center rounded-full bg-[#0d9488] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#0f766e]"
                >
                  Call the studio
                </Link>
                <Link
                  href="/#book-consultation"
                  className="inline-flex items-center rounded-full border border-[#0d9488]/40 px-6 py-3 text-sm font-semibold text-[#0d9488] transition hover:border-[#0d9488]"
                >
                  Book online
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#ccfbf1] shadow-[0_18px_55px_rgba(13,148,136,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80"
                alt="Dental operatory"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-4 border-t border-[#ccfbf1] bg-white p-6 text-sm text-[#475569] md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0d9488]">
                    Parking
                  </p>
                  <p className="mt-1">
                    Reserved spots in the building garage · validated for 90
                    minutes.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#0d9488]">
                    Transit
                  </p>
                  <p className="mt-1">
                    Link Light Rail – Lake Union stop · Bus routes 40, 70, and C
                    Line.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#f0fdfa] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d9488]/70">
                Smile gallery
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Before-and-after stories from our patients.
              </h2>
              <p className="mt-3 max-w-xl text-sm text-[#475569]">
                Explore patient transformations, modern operatory spaces, and
                the calming environment that defines Lumina Smiles.
              </p>
            </div>
            <p className="text-xs uppercase tracking-[0.3em] text-[#0d9488]">
              drag or tap to explore
            </p>
          </div>
          <div className="mt-10 overflow-x-auto pb-4">
            <div className="flex snap-x gap-6">
              {smileGallery.map((item) => (
                <div
                  key={item.src}
                  className="group relative h-72 w-[320px] flex-none snap-center overflow-hidden rounded-3xl border border-white/60 bg-white shadow-[0_20px_55px_rgba(13,148,136,0.18)]"
                >
                  <img
                    src={item.src}
                    alt={item.label}
                    className="size-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/60 via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d9488]">
                    {item.label}
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
            <span className="inline-flex items-center rounded-full bg-[#ccfbf1] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#0d9488]">
              Patient voices
            </span>
            <h2 className="mt-4 font-heading text-3xl md:text-4xl">
              Kind words from the community.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-3xl border border-[#ccfbf1] bg-[#f0fdfa] p-6 text-sm text-[#475569] shadow-[0_16px_45px_rgba(13,148,136,0.08)]"
              >
                <p className="text-base text-[#0f172a]">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-[#0f172a]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#0d9488]">
                  {testimonial.detail}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d9488] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-0">
          <h2 className="font-heading text-3xl md:text-4xl">
            Start your Lumina Smiles journey today.
          </h2>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            Submit an inquiry or call our patient concierge to reserve a
            consultation. We&apos;ll tailor next steps within one business day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#0d9488] transition hover:-translate-y-0.5 hover:bg-[#f0fdfa]"
            >
              Book consultation
            </Link>
            <Link
              href="tel:12065550148"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Call the patient line
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default LuminaSmilesDemo;
