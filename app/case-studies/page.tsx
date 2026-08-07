'use client';

import PageShell from '../components/PageShell';
import Reveal from '../components/Reveal';

const testimonials = [
  {
    quote:
      "It's becoming vitally important for businesses of all types to invest in digital transformation. It's a need now, not a luxury. XRAY understands this, and they're able to help businesses like ours scale digitally without having to change what already works.",
    author: 'Karan Sharma',
    title: 'Managing Director',
  },
  {
    quote:
      "This project has been a huge win for both FMSC and our partners! Partners now have ownership of their information, reducing their confusion and the number of emails they send us with questions. Multiple departments at FMSC are now able to focus on other projects because the Portal has automated tasks that used to be manual.",
    author: 'Kelsey',
    title: 'FMSC',
  },
  {
    quote:
      'XRAY was extremely well-prepared and tailored the solution to our specific needs. They bridged the tech knowledge divide and provided extensive training and documentation, making the transition seamless. The user experience was a top priority, and our team has benefited greatly from the new system.',
    author: 'Michelle',
    title: 'Operations Lead',
  },
];

export default function CaseStudiesPage() {
  return (
    <PageShell
      title="Case Studies"
      subtitle="Real results from businesses we've transformed — measured in hours saved, emails avoided, and focus returned."
    >
      <section className="py-10 md:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.author} delay={i * 0.08}>
              <div className="rounded-2xl bg-white p-5 md:p-8 shadow-sm">
                <p className="text-xl md:text-2xl leading-relaxed font-medium">“{t.quote}”</p>
                <div className="mt-6">
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
