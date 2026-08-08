'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

export default function WorkshopsPage() {
  return (
    <PageShell
      title="Workshops"
      subtitle="In-person and remote workshops designed to teach your non-technical team how to use dashboards, automation tools, and AI — with practical education, not theory."
    >
      <section className="py-6 md:py-10 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {['Practical Education', 'Tool Setup & Configuration', 'Dashboard Training', 'Automation Basics', 'AI for Non-Technical Teams'].map((item) => (
            <Reveal key={item}>
              <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                <h3 className="text-base sm:text-lg font-semibold">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          <Reveal>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">Intensive workshops for team up-skilling</h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/70">1 Day • 1 Focus = Enable your team to work with data, automation, and AI every day.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h3 className="font-semibold">Our Packages</h3>
              <div className="mt-4 space-y-3 sm:space-y-4">
                {[
                  { name: '1 Day • Remote', price: '£2,500', desc: '6-8 hours of intensive learning, system setup, and automation training through a hands-on remote workshop.' },
                  { name: '1 Day • In-person', price: '£7,500', desc: 'Similar outcomes as the remote workshop, but all the magic of an in-person event. Travel & logistics fees included.' },
                ].map((pkg) => (
                  <div key={pkg.name} className="rounded-2xl border border-black/5 p-3 sm:p-4 transition hover:shadow-card-hover">
                    <div className="flex items-center justify-between">
                      <div className="text-sm font-medium">{pkg.name}</div>
                      <div className="text-xl sm:text-2xl font-bold">{pkg.price}</div>
                    </div>
                    <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">{pkg.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Ready to lift your business?</h2>
            <Link href="/contact" className="btn-primary inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium shadow-glow mt-6">
              Book a Free Consultation
            </Link>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
