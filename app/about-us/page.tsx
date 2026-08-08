'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function AboutUsPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="We're a UK-based data, automation, and AI company. We connect disconnected systems and build tools that save your team hours every week."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <Reveal>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h3 className="text-lg sm:text-xl font-semibold">What we do</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">
                DataLift connects your CRM, sales, marketing, and payment systems so data flows automatically between them.
                We build dashboards that give you real-time visibility, and we automate the manual work that slows your team down.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
              <h3 className="text-lg sm:text-xl font-semibold">Who we serve</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">
                UK businesses with 10-200 employees who use tools like Salesforce, GoHighLevel, Chargebee, and Google Sheets —
                but have disconnected systems and manual processes eating up their team&apos;s time. No technical knowledge required from you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-8 md:mb-10">How We Work</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {[
              { title: 'Connect First:', desc: 'We start by connecting your disconnected systems — CRM, sales, marketing, payments — so data flows automatically.' },
              { title: 'Dashboards That Matter:', desc: 'We build clear, real-time dashboards that show revenue, bookings, and performance — all in one place.' },
              { title: 'Automate the Boring Stuff:', desc: 'We use automation tools like n8n to remove manual data entry, copy-paste, and spreadsheet errors.' },
              { title: 'AI That Actually Helps:', desc: 'We build practical AI tools — smart summaries, lead scoring, predictive insights — that your non-technical team can use.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="flex gap-5 rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                  <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 shrink-0 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-100 text-2xl md:text-3xl shadow-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm md:text-base text-[var(--foreground)]/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
