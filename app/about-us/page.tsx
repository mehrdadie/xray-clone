'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function AboutUsPage() {
  return (
    <PageShell
      title="About Us"
      subtitle="We're a UK-based data, automation, and AI company. We connect disconnected systems and build tools that save your team hours every week."
    >
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
          <Reveal>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">What we do</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/80 leading-relaxed">
                DataLift connects your CRM, sales, marketing, and payment systems so data flows automatically between them.
                We build dashboards that give you real-time visibility, and we automate the manual work that slows your team down.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Who we serve</h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/80 leading-relaxed">
                UK businesses with 10-200 employees who use tools like Salesforce, GoHighLevel, Chargebee, and Google Sheets —
                but have disconnected systems and manual processes eating up their team's time. No technical knowledge required from you.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-6 md:mb-10">How We Work</h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {[
              { title: 'Connect First:', desc: 'We start by connecting your disconnected systems — CRM, sales, marketing, payments — so data flows automatically.' },
              { title: 'Dashboards That Matter:', desc: 'We build clear, real-time dashboards that show revenue, bookings, and performance — all in one place.' },
              { title: 'Automate the Boring Stuff:', desc: 'We use automation tools like n8n to remove manual data entry, copy-paste, and spreadsheet errors.' },
              { title: 'AI That Actually Helps:', desc: 'We build practical AI tools — smart summaries, lead scoring, predictive insights — that your non-technical team can use.' },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
                  <h3 className="text-lg sm:text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/80 leading-relaxed">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
