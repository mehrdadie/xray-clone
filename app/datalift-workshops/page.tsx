'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function WorkshopsPage() {
  return (
    <PageShell
      title="Workshops"
      subtitle="In-person and remote workshops designed to teach your non-technical team how to use dashboards, automation tools, and AI — with practical education, not theory."
    >
      <section className="py-8 md:py-12 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {['Practical Education', 'Tool Setup & Configuration', 'Dashboard Training', 'Automation Basics', 'AI for Non-Technical Teams'].map((item) => (
            <Reveal key={item}>
              <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
                <h3 className="text-base sm:text-lg font-semibold">{item}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          <Reveal>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold">Intensive workshops for team up-skilling</h2>
              <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/80">1 Day • 1 Focus = Enable your team to work with data, automation, and AI every day.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
              <h3 className="font-semibold">Our Packages</h3>
              <div className="mt-4 space-y-3 sm:space-y-4">
                <div className="rounded-xl border border-black/5 p-3 sm:p-4">
                  <div className="text-sm font-medium">1 Day • Remote</div>
                  <div className="text-xl sm:text-2xl font-bold">£2,500</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">6-8 hours of intensive learning, system setup, and automation training through a hands-on remote workshop.</p>
                </div>
                <div className="rounded-xl border border-black/5 p-3 sm:p-4">
                  <div className="text-sm font-medium">1 Day • In-person</div>
                  <div className="text-xl sm:text-2xl font-bold">£7,500</div>
                  <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">Similar outcomes as the remote workshop, but all the magic of an in-person event. Travel & logistics fees included.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Ready to lift your business?</h2>
            <a href="#" className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium text-white hover:bg-[var(--foreground)]/90">Book a Free Consultation</a>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
