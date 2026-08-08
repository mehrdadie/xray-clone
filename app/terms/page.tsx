'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function TermsPage() {
  return (
    <PageShell
      title="Terms & Conditions"
      subtitle="The terms for using DataLift services, consultations, and automated platforms."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-6 md:space-y-10">
          {[
            {
              heading: '1. Introduction',
              body: 'These Terms & Conditions apply to your use of DataLift services, including consultation, system integration, automation, dashboard builds, workshops, and related deliverables. By engaging with us or booking a consultation, you agree to these terms.',
            },
            {
              heading: '2. Services',
              body: 'DataLift provides data, automation, and AI services for UK businesses. Specific deliverables, timelines, and pricing are agreed before work begins. We do not guarantee third-party platform uptime, API availability, or policy changes outside our control.',
            },
            {
              heading: '3. Payment',
              body: 'Hourly work is billed at agreed rates. Monthly retainers are billed in advance. Invoices are payable within 14 days unless otherwise agreed. Late payments may pause ongoing work.',
            },
            {
              heading: '4. Confidentiality',
              body: 'Both parties agree to keep shared business data, credentials, and strategy private. We will not share client data with third parties without consent, except where required by UK law.',
            },
            {
              heading: '5. Limitation of Liability',
              body: 'DataLift provides advisory and implementation support, not legal, financial, or regulated compliance advice. Our liability is limited to fees paid for the specific service in question. We are not liable for indirect losses, including lost revenue or data loss from third-party systems.',
            },
            {
              heading: '6. Governing Law',
              body: 'These terms are governed by the laws of England and Wales. Any disputes will be handled in the UK courts.',
            },
            {
              heading: '7. Contact',
              body: 'If you have questions about these terms, contact us through the website consultation form or email support@datalift.co.uk.',
            },
          ].map((item, i) => (
            <Reveal key={item.heading} delay={Math.min(i * 0.05, 0.25)}>
              <div className="rounded-3xl bg-white/80 backdrop-blur border border-black/5 p-5 sm:p-6 md:p-8 shadow-card">
                <h2 className="text-lg sm:text-xl font-semibold">{item.heading}</h2>
                <p className="mt-2 text-sm sm:text-base text-[var(--foreground)]/70 leading-relaxed">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
