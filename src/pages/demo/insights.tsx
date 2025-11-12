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
  },
];

const doctorProfiles = [
  {
    name: 'Dr. Mina Hartley',
    role: 'Cosmetic & Restorative Dentist',
    bio: 'Spearheads Lumina’s cosmetic studio with 12+ years designing minimally invasive smile makeovers.',
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
  'https://images.unsplash.com/photo-1505849864904-01b9e182ed1e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1573496529574-be85d6a60704?auto=format&fit=crop&w=1200&q=80',
];

const testimonials = [
  {
    quote:
      '“From the warm welcome to the digital smile preview, I felt informed and cared for. The team explained every step and my new smile feels natural.”',
    name: 'Avery Martinez',
    detail: 'Wedding photographer · Invisalign & whitening',
  },
  {
    quote:
      '“The sedation options, recovery guides, and follow-up calls made implant surgery surprisingly smooth. Lumina truly delivers concierge care.”',
    name: 'Daniel Rios',
    detail: 'Entrepreneur · Implant restoration',
  },
];

const LuminaSmilesDemo = () => (
  <>
    <Meta
      title={`Lumina Smiles Dental Demo — ${AppConfig.title}`}
      description="Tour Lumina Smiles Dental, a contemporary practice site featuring treatments, team introductions, patient resources, and a calming visual gallery."
    />
    <main className="bg-[#f5f8ff] text-[#0f172a]">
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-12">
          <Link
            href="/"
            className="font-heading text-lg font-semibold text-[#2563eb]"
          >
            Lumina Smiles
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="rounded-full px-3 py-1 text-[#1e293b]/80 transition hover:bg-[#e6efff] hover:text-[#2563eb]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#book-consultation"
            className="inline-flex items-center rounded-full bg-[#2563eb] px-4 py-2 text-xs font-semibold text-white shadow-[0_8px_22px_rgba(37,99,235,0.25)] transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
          >
            Book an appointment
          </Link>
        </div>
      </header>

      <section id="overview" className="border-b border-[#e0e7ff] bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.1fr,0.9fr] md:px-12">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-[#e6efff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-[#2563eb]">
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
                className="inline-flex items-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Explore treatments
              </Link>
              <Link
                href="#patient-info"
                className="inline-flex items-center rounded-full border border-[#2563eb]/30 px-6 py-3 text-sm font-semibold text-[#2563eb] transition hover:border-[#2563eb]"
              >
                New patient guide →
              </Link>
            </div>
            <ul className="grid gap-4 text-sm text-[#475569] sm:grid-cols-2">
              <li className="rounded-2xl border border-[#e0e7ff] bg-[#f5f8ff] p-4">
                <p className="font-heading text-base text-[#0f172a]">
                  Digital smile previews
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#2563eb]">
                  see results before treatment
                </p>
              </li>
              <li className="rounded-2xl border border-[#e0e7ff] bg-[#f5f8ff] p-4">
                <p className="font-heading text-base text-[#0f172a]">
                  Sedation & comfort options
                </p>
                <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#2563eb]">
                  for every appointment
                </p>
              </li>
            </ul>
          </div>
          <div className="overflow-hidden rounded-3xl border border-[#e0e7ff] shadow-[0_20px_60px_rgba(37,99,235,0.12)]">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=80"
              alt="Dental studio reception"
              className="h-72 w-full object-cover"
              loading="lazy"
            />
            <div className="grid gap-4 border-t border-[#e0e7ff] bg-white px-6 py-5 text-sm text-[#475569]">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                  First visit
                </p>
                <p className="mt-1">
                  Welcome consult, comfort menu, and 3D imaging in under 90
                  minutes.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="rounded-2xl border border-[#e0e7ff] bg-[#f5f8ff] p-4 text-center">
                  <p className="font-heading text-xl text-[#2563eb]">98%</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#2563eb]/70">
                    patient satisfaction
                  </p>
                </div>
                <div className="rounded-2xl border border-[#e0e7ff] bg-[#f5f8ff] p-4 text-center">
                  <p className="font-heading text-xl text-[#2563eb]">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[#2563eb]/70">
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
              <span className="inline-flex items-center rounded-full bg-[#e6efff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
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
                className="rounded-3xl border border-[#e0e7ff] bg-[#f5f8ff] p-8 shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
              >
                <h3 className="font-heading text-xl text-[#0f172a]">
                  {category.title}
                </h3>
                <p className="mt-3 text-sm text-[#475569]">
                  {category.description}
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[#475569]">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-[#2563eb]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="bg-[#f0f4ff] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]/70">
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
                className="overflow-hidden rounded-3xl border border-[#e0e7ff] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.1)]"
              >
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="space-y-2 p-6 text-sm text-[#475569]">
                  <h3 className="font-heading text-lg text-[#0f172a]">
                    {doctor.name}
                  </h3>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
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
              <span className="inline-flex items-center rounded-full bg-[#e6efff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
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
                    className="rounded-2xl border border-[#e0e7ff] bg-[#f5f8ff] p-4"
                  >
                    <dt className="font-heading text-base text-[#0f172a]">
                      {item.label}
                    </dt>
                    <dd>{item.value}</dd>
                  </div>
                ))}
              </dl>
              <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
                {insurancePartners.map((partner) => (
                  <span
                    key={partner}
                    className="rounded-full border border-[#e0e7ff] bg-white px-4 py-2"
                  >
                    {partner}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="tel:12065550148"
                  className="inline-flex items-center rounded-full bg-[#2563eb] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
                >
                  Call the studio
                </Link>
                <Link
                  href="/#book-consultation"
                  className="inline-flex items-center rounded-full border border-[#2563eb]/40 px-6 py-3 text-sm font-semibold text-[#2563eb] transition hover:border-[#2563eb]"
                >
                  Book online
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#e0e7ff] shadow-[0_18px_55px_rgba(15,23,42,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1400&q=80"
                alt="Dental operatory"
                className="h-72 w-full object-cover"
                loading="lazy"
              />
              <div className="grid gap-4 border-t border-[#e0e7ff] bg-white p-6 text-sm text-[#475569] md:grid-cols-2">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                    Parking
                  </p>
                  <p className="mt-1">
                    Reserved spots in the building garage · validated for 90
                    minutes.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
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

      <section id="gallery" className="bg-[#f0f4ff] py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]/70">
                Smile gallery
              </span>
              <h2 className="mt-4 font-heading text-3xl md:text-4xl">
                Before-and-after stories from our patients.
              </h2>
            </div>
            <Link
              href="/#book-consultation"
              className="mt-4 inline-flex items-center rounded-full border border-[#2563eb]/30 px-6 py-3 text-sm font-semibold text-[#2563eb] transition hover:border-[#2563eb] md:mt-0"
            >
              Request a smile preview
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {smileGallery.map((image) => (
              <div
                key={image}
                className="overflow-hidden rounded-3xl border border-[#e0e7ff] bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)]"
              >
                <img
                  src={image}
                  alt="Lumina patient smile"
                  className="h-64 w-full object-cover"
                  loading="lazy"
                />
                <div className="px-5 py-4 text-xs uppercase tracking-[0.3em] text-[#2563eb]/70">
                  Cosmetic & Wellness journey
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="text-center">
            <span className="inline-flex items-center rounded-full bg-[#e6efff] px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
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
                className="rounded-3xl border border-[#e0e7ff] bg-[#f5f8ff] p-6 text-sm text-[#475569] shadow-[0_16px_45px_rgba(15,23,42,0.08)]"
              >
                <p className="text-base text-[#0f172a]">{testimonial.quote}</p>
                <p className="mt-4 font-semibold text-[#0f172a]">
                  {testimonial.name}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                  {testimonial.detail}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#2563eb] py-24 text-white">
        <div className="mx-auto max-w-4xl px-6 text-center md:px-0">
          <h2 className="font-heading text-3xl md:text-4xl">
            Start your Lumina Smiles journey today.
          </h2>
          <p className="mt-4 text-sm text-white/80 md:text-base">
            Submit an inquiry or call our patient concierge to reserve a
            consultation. We’ll tailor next steps within one business day.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-[#2563eb] transition hover:-translate-y-0.5 hover:bg-[#f5f8ff]"
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
