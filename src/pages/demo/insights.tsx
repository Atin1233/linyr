import Link from 'next/link';

import { Meta } from '../../layout/Meta';
import { AppConfig } from '../../utils/AppConfig';

const treatmentGrid = [
  {
    name: 'Smile Design Studio',
    copy: 'Digital mockups, wax-up previews, and veneer artistry guided by our cosmetic atelier.',
    perks: [
      '3D smile preview session',
      'Custom veneer roadmap',
      'Personalized shading &amp; texture',
    ],
  },
  {
    name: 'Comfort Restorations',
    copy: 'Sedation choices, same-day crowns, and guided recovery ensure restorative care stays stress-free.',
    perks: [
      'Spa-inspired sedation suites',
      'In-house milling &amp; lab partners',
      'Post-visit wellness kit',
    ],
  },
  {
    name: 'Family Wellness',
    copy: 'Preventative care for every age, with tailored guidance for parents and teens.',
    perks: [
      'Fluoride varnish &amp; sealants',
      'Growth monitoring &amp; orthodontic screening',
      'Gentle education moments',
    ],
  },
];

const LuminaSmilesDemo = () => (
  <>
    <Meta
      title={`Lumina Smiles Dental Demo — ${AppConfig.title}`}
      description="Step through Lumina Smiles Dental, a serene dental studio landing page crafted by Linyr Digital for patient confidence and online bookings."
    />
    <main className="bg-[#f4f9ff] text-[#0f172a]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8ec5fc] via-[#e0c3fc] to-[#a5f3fc]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6 pb-24 pt-28 md:px-12">
          <div className="grid gap-12 md:grid-cols-[1.1fr,0.9fr]">
            <div>
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/20 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white">
                Modern Dental Studio Demo
              </span>
              <h1 className="mt-6 font-heading text-4xl leading-tight text-[#0f172a] md:text-6xl">
                Lumina Smiles — Calming care, luminous results.
              </h1>
              <p className="mt-6 text-lg text-[#1e293b]/80 md:text-xl">
                This concept site shows patients every reason to feel at
                ease—soft gradients, welcoming copy, interactive before/after
                stories, and multiple ways to connect with the care team.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  href="#treatments"
                  className="inline-flex items-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#2563eb] shadow-[0_18px_40px_rgba(134,192,255,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(134,192,255,0.45)]"
                >
                  Explore treatments
                </Link>
                <Link
                  href="/#book-consultation"
                  className="inline-flex items-center rounded-full border border-white/60 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
                >
                  Schedule a consult →
                </Link>
              </div>
            </div>
            <div className="rounded-3xl border border-white/40 bg-white/40 p-8 backdrop-blur">
              <h2 className="font-heading text-2xl text-[#0f172a]">
                New patient overview
              </h2>
              <ul className="mt-6 space-y-4 text-sm text-[#1e293b]/80">
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#2563eb]" />
                  <span>Calming welcome video with virtual office tour.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#2563eb]" />
                  <span>
                    Insurance concierge with instant benefits checker.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1 inline-flex size-2 rounded-full bg-[#2563eb]" />
                  <span>
                    Online booking for virtual consultations and in-studio
                    appointments.
                  </span>
                </li>
              </ul>
              <p className="mt-6 text-sm text-[#1e293b]/70">
                Throughout the page, we pair emotional reassurance with clinical
                credibility, nudging visitors toward the CTA with gentle
                transitions.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/40 bg-white/50 p-6 text-sm text-[#1e293b]/80 shadow-[0_25px_60px_rgba(140,197,252,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                Comfort
              </p>
              <h3 className="mt-3 font-heading text-xl text-[#0f172a]">
                Spa-inspired sedation lounge
              </h3>
              <p className="mt-2">
                Aromatherapy, weighted blankets, and tranquil audio create a
                restorative atmosphere for anxious patients.
              </p>
            </div>
            <div className="rounded-3xl border border-white/40 bg-white/50 p-6 text-sm text-[#1e293b]/80 shadow-[0_25px_60px_rgba(140,197,252,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                Technology
              </p>
              <h3 className="mt-3 font-heading text-xl text-[#0f172a]">
                3D Smile Lab
              </h3>
              <p className="mt-2">
                Iterative previews with AI-assisted modelling ensure patients
                visualize their transformation before treatment.
              </p>
            </div>
            <div className="rounded-3xl border border-white/40 bg-white/50 p-6 text-sm text-[#1e293b]/80 shadow-[0_25px_60px_rgba(140,197,252,0.35)]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                Care Team
              </p>
              <h3 className="mt-3 font-heading text-xl text-[#0f172a]">
                Concierge follow-through
              </h3>
              <p className="mt-2">
                SMS check-ins, recovery kits, and curated post-care routines
                drive satisfaction and referrals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="treatments" className="bg-white py-24 text-[#0f172a]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-end md:justify-between">
            <div>
              <span className="inline-flex items-center rounded-full bg-[#2563eb]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
                Treatments
              </span>
              <h2 className="mt-6 font-heading text-3xl md:text-4xl">
                Personalized journeys for every smile stage.
              </h2>
            </div>
            <p className="mt-4 max-w-xl text-sm text-[#475569] md:mt-0">
              Treatment tiles combine empathy and clarity. We share benefits,
              key differentiators, and next steps while inviting users to
              schedule consults tailored to their goals.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {treatmentGrid.map((item) => (
              <div
                key={item.name}
                className="flex h-full flex-col rounded-3xl border border-[#bfdbfe]/80 bg-[#eff6ff] p-8 shadow-[0_22px_50px_rgba(148,163,184,0.18)] transition hover:-translate-y-1 hover:shadow-[0_28px_65px_rgba(148,163,184,0.26)]"
              >
                <h3 className="font-heading text-xl text-[#1d4ed8]">
                  {item.name}
                </h3>
                <p className="mt-3 text-sm text-[#475569]">{item.copy}</p>
                <ul className="mt-6 space-y-2 text-sm text-[#475569]">
                  {item.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2">
                      <span className="mt-1 inline-flex size-2 rounded-full bg-[#1d4ed8]" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-[#1d4ed8] transition hover:text-[#1e40af]"
                >
                  Book this experience →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#e8f4ff] py-24 text-[#0f172a]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl">
                Visualize transformation with Lumina’s Smile Gallery.
              </h2>
              <p className="mt-4 text-sm text-[#475569]">
                Before/after sliders combine photography, procedure summaries,
                and patient quotes. A subtle CTA invites viewers to “Create my
                smile map.”
              </p>
              <ul className="mt-6 space-y-3 text-sm text-[#475569]">
                <li>
                  Detailed captions sharing treatment timelines and care teams.
                </li>
                <li>
                  Color-coded tags for cosmetic, restorative, and wellness
                  categories.
                </li>
                <li>
                  Consent-based storytelling highlighting comfort, confidence,
                  and care.
                </li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[#bfdbfe] bg-white p-6 shadow-lg">
              <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                Patient Testimonial
              </p>
              <blockquote className="mt-4 text-sm leading-relaxed text-[#475569]">
                “Lumina’s site made it easy to review treatments, calculate
                financing, and schedule a virtual consult. I felt taken care of
                before I even stepped into the studio.”
              </blockquote>
              <p className="mt-4 text-sm font-semibold text-[#1d4ed8]">
                Avery Martinez — Wedding Photographer
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 text-[#0f172a]">
        <div className="mx-auto max-w-6xl px-6 md:px-12">
          <div className="md:flex md:items-start md:justify-between">
            <div className="max-w-xl">
              <span className="inline-flex items-center rounded-full bg-[#2563eb]/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-[#2563eb]">
                Care Journey
              </span>
              <h2 className="mt-6 font-heading text-3xl md:text-4xl">
                Every step feels supported, calm, and transparent.
              </h2>
              <p className="mt-4 text-sm text-[#475569]">
                Timeline cards outline the Lumina care experience from virtual
                introductions to follow-up wellness calls. Links to new patient
                forms and financing calculators are woven in contextually.
              </p>
            </div>
            <div className="mt-8 grid gap-6 md:mt-0">
              <div className="rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                  01 · Discover
                </p>
                <h3 className="mt-3 font-heading text-xl text-[#1d4ed8]">
                  Virtual consult &amp; smile mapping
                </h3>
                <p className="mt-2 text-sm text-[#475569]">
                  Meet your dentist online, review goals, and receive a curated
                  treatment preview in 48 hours.
                </p>
              </div>
              <div className="rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                  02 · Design
                </p>
                <h3 className="mt-3 font-heading text-xl text-[#1d4ed8]">
                  Comfort-first visit
                </h3>
                <p className="mt-2 text-sm text-[#475569]">
                  Enjoy spa amenities, sedation choices, and real-time 3D
                  imaging to finalize your personalized plan.
                </p>
              </div>
              <div className="rounded-3xl border border-[#bfdbfe] bg-[#eff6ff] p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-[#2563eb]">
                  03 · Glow
                </p>
                <h3 className="mt-3 font-heading text-xl text-[#1d4ed8]">
                  Guided recovery
                </h3>
                <p className="mt-2 text-sm text-[#475569]">
                  Post-care kits, tele-dentistry check-ins, and wellness plans
                  ensure comfort long after your visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#d9f1ff] via-[#e0c3fc] to-[#c3f0f7] py-24 text-[#0f172a]">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl">
            Ready to make Lumina your home for dental wellness?
          </h2>
          <p className="mt-4 text-sm text-[#475569] md:text-base">
            Book a consultation and we’ll craft a personalized care journey.
            Prefer to talk it through? Call our concierge team at{' '}
            <span className="font-semibold">(555) 012-4567</span>.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#book-consultation"
              className="inline-flex items-center rounded-full bg-[#2563eb] px-7 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1e40af]"
            >
              Schedule consultation
            </Link>
            <Link
              href="/"
              className="inline-flex items-center rounded-full border border-[#2563eb]/50 px-6 py-3 text-sm font-semibold text-[#2563eb] transition hover:border-[#2563eb] hover:text-[#1e40af]"
            >
              Download new patient guide
            </Link>
          </div>
        </div>
      </section>
    </main>
  </>
);

export default LuminaSmilesDemo;
