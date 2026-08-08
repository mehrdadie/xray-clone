'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      subtitle="From quick system integrations to full data platform builds — we connect your systems, automate your workflows, and build dashboards that drive decisions."
    >
      <section className="py-6 md:py-10">
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
              <Link
                href={service.href}
                className="group block rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">{service.name}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{service.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">How we work</h2>
            <p className="max-w-3xl text-base md:text-lg text-[var(--foreground)]/70 leading-relaxed">
              Every engagement starts with understanding your current systems and where the gaps are. Then we connect, automate, and build — using the tools you already have.
            </p>
          </Reveal>
          <div className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {[
              { title: 'Assess', body: 'We map your current systems, identify where data is disconnected, and find quick wins.' },
              { title: 'Connect & Automate', body: 'We build integrations and automations that connect your CRM, sales, marketing, and payments.' },
              { title: 'Dashboard & Scale', body: 'We build dashboards and AI tools, then train your team so they can run without us.' },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="flex flex-col rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
                  <div className="text-sm font-semibold text-[var(--accent)]">Step {i + 1}</div>
                  <h3 className="mt-2 text-lg sm:text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
