'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

export default function PrivacyPage() {
  return (
    <PageShell
      title="Privacy Policy"
      subtitle="How DataLift collects, uses, and protects your personal information."
    >
      <section className="py-6 md:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-6 md:space-y-10">
          {[
            {
              heading: '1. Information We Collect',
              body: 'We collect information you provide directly, such as name, email, company details, and consultation notes. We also collect limited technical data for website performance and security.',
            },
            {
              heading: '2. How We Use Information',
              body: 'Your data is used to deliver services, respond to enquiries, send agreed updates, and improve customer support. We do not sell or rent personal data to third parties.',
            },
            {
              heading: '3. Data Storage & Security',
              body: 'Data is stored using trusted platforms with access controls. We apply reasonable technical and organisational measures to protect your information. No method of transmission or storage is 100% secure.',
            },
            {
              heading: '4. Sharing',
              body: 'We may share data with processors required to deliver services, such as hosting and automation tooling. These providers are bound by confidentiality and data-protection obligations.',
            },
            {
              heading: '5. Your Rights',
              body: 'You can request access, correction, or deletion of your personal data by contacting us. We will respond within a reasonable timeframe and in line with UK data protection law.',
            },
            {
              heading: '6. Cookies',
              body: 'Our website may use essential cookies for functionality and analytics. You can manage cookie preferences through your browser settings.',
            },
            {
              heading: '7. Changes',
              body: 'We may update this policy from time to time. Continued use of our services after changes means you accept the updated policy.',
            },
            {
              heading: '8. Contact',
              body: 'For privacy questions, contact us through the website form or email support@datalift.co.uk.',
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
