'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function ServicesPage() {
  return (
    <PageShell
      title="Services"
      subtitle="From hands-on support to full-service workflow transformation, our services are built around one outcome: your time back."
    >
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              name: 'XRAY Hourly',
              href: '/xray-hourly',
              desc: 'Flexible, hourly, as-needed support with no long-term commitment. Work side-by-side with a hand-picked expert on a live, recorded Zoom call.',
            },
            {
              name: 'XRAY Monthly',
              href: '/xray-monthly',
              desc: 'A dedicated executive strategist, workflow consultant, and project manager for complex, cross-departmental projects.',
            },
            {
              name: 'Content Creation',
              href: '/content-creation',
              desc: 'Professional content that communicates your value — from frameworks to client-ready assets.',
            },
          ].map((service) => (
            <Reveal key={service.name}>
              <a
                href={service.href}
                className="block rounded-2xl bg-white p-8 shadow-sm transition hover:shadow-md"
              >
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="mt-3 text-[var(--foreground)]/80 leading-relaxed">{service.desc}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white/40">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">How we work</h2>
            <p className="max-w-3xl text-[var(--foreground)]/80 text-lg leading-relaxed">
              Every engagement starts with diagnosis, then moves into implementation with measurable milestones. We use the tools you already know, so adoption is fast and results are durable.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Assess', body: 'We map your workflows, identify friction, and surface quick wins.' },
              { title: 'Automate', body: 'We build integrations and AI automations that remove manual work.' },
              { title: 'Scale', body: 'We hand off playbooks and training so your team can run without us.' },
            ].map((step, i) => (
              <Reveal key={step.title} delay={i * 0.08}>
                <div className="rounded-2xl bg-white p-6 shadow-sm">
                  <div className="text-sm font-semibold text-[var(--accent)]">Step {i + 1}</div>
                  <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                  <p className="mt-2 text-[var(--foreground)]/80 leading-relaxed">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
