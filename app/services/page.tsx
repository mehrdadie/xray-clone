'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      subtitle="From quick system integrations to full data platform builds — we connect your systems, automate your workflows, and build dashboards that drive decisions."
    >
      <section className="py-8 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              name: 'DataLift Hourly',
              href: '/datalift-hourly',
              desc: 'Flexible, hourly support for connecting systems, fixing automations, or building dashboards — no long-term commitment.',
            },
            {
              name: 'DataLift Monthly',
              href: '/datalift-monthly',
              desc: 'A dedicated automation specialist and project manager for full system integration and ongoing support.',
            },
            {
              name: 'Team Workshops',
              href: '/datalift-workshops',
              desc: 'Practical training to help your non-technical team use dashboards, automation tools, and AI confidently.',
            },
          ].map((service) => (
            <Reveal key={service.name}>
              <a
                href={service.href}
                className="block rounded-2xl bg-white p-4 sm:p-5 md:p-8 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-lg sm:text-xl font-semibold">{service.name}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/80 leading-relaxed">{service.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tight mb-3 md:mb-4">How we work</h2>
            <p className="max-w-3xl text-[var(--foreground)]/80 text-base sm:text-lg leading-relaxed">
              Every engagement starts with understanding your current systems and where the gaps are. Then we connect, automate, and build — using the tools you already have.
            </p>
          </Reveal>
          <div className="mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {[
              { title: 'Assess', body: 'We map your current systems, identify where data is disconnected, and find quick wins.' },
              { title: 'Connect & Automate', body: 'We build integrations and automations that connect your CRM, sales, marketing, and payments.' },
              { title: 'Dashboard & Scale', body: 'We build dashboards and AI tools, then train your team so they can run without us.' },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white p-4 sm:p-5 md:p-6 shadow-sm">
                  <div className="text-sm font-semibold text-blue-600">Step {i + 1}</div>
                  <h3 className="mt-2 text-lg sm:text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/80 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
