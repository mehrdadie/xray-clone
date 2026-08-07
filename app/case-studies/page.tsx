'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

const testimonials = [
  {
    quote:
      "DataLift connected our Salesforce, GoHighLevel, and Chargebee so everything just works. Our sales team no longer wastes hours copying data between systems. It's all automated, and we can see everything on one dashboard.",
    author: 'Operations Manager',
    title: 'Property Training Company, Essex',
  },
  {
    quote:
      "We had disconnected systems everywhere — CRM, marketing, payments, spreadsheets. DataLift built a central dashboard and automated the data flow. Our team now focuses on selling, not admin.",
    author: 'Sales Director',
    title: 'Education Company, UK',
  },
  {
    quote:
      "The dashboards DataLift built give us real-time visibility into bookings, revenue, and student progress — all pulled from Salesforce and Chargebee automatically. It changed how we make decisions.",
    author: 'Managing Director',
    title: 'Trading Education Company, London',
  },
];

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Case Studies"
      subtitle="Real results from UK businesses we've helped — measured in hours saved, errors removed, and decisions made faster."
    >
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-4 md:space-y-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-8 shadow-sm">
                <p className="text-base sm:text-lg md:text-2xl leading-relaxed font-medium">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-4 md:mt-6">
                  <div className="font-semibold">{t.author}</div>
                  <div className="text-sm text-[var(--foreground)]/70">{t.title}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
