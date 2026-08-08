'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';
import Link from 'next/link';

export default function ProductsPage() {
  return (
    <PageShell
      title="Products"
      subtitle="Dashboards, sync tools, and monitors — built for UK businesses that want their systems to work together without manual work."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {[
            {
              name: 'DL Dashboards',
              href: '/products/dl-dashboards',
              desc: 'Real-time dashboards pulling from Salesforce, Chargebee, Google Sheets, and more — all in one place.',
            },
            {
              name: 'DL Sync',
              href: '/products/dl-sync',
              desc: 'Automatic data sync between your CRM, marketing, and payment systems. No more copy-paste.',
            },
            {
              name: 'DL Monitor',
              href: '/products/dl-monitor',
              desc: 'Monitor your automations and integrations. Get alerts when something breaks before it costs you.',
            },
          ].map((product) => (
            <Reveal key={product.name}>
              <Link
                href={product.href}
                className="group block rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
              >
                <h3 className="text-lg sm:text-xl font-semibold group-hover:text-[var(--accent)] transition-colors">{product.name}</h3>
                <p className="mt-2 sm:mt-3 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{product.desc}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-8 md:py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent -z-10" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-3 md:mb-4">Built on what you already use</h2>
            <p className="max-w-3xl text-base md:text-lg text-[var(--foreground)]/70 leading-relaxed">
              Our products layer on top of Salesforce, GoHighLevel, Chargebee, Google Sheets, and common SaaS stacks — no rip and replace.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8 md:mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 stagger">
              {['Salesforce', 'GoHighLevel', 'Chargebee', 'Google Sheets', 'n8n', 'Stripe', 'Zapier', 'Mailchimp'].map((tool) => (
                <div
                  key={tool}
                  className="rounded-2xl bg-white/70 backdrop-blur border border-black/5 p-3 sm:p-4 text-center text-xs sm:text-sm font-medium shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5"
                >
                  {tool}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
