'use client';

import Reveal from './components/Reveal';
import SmoothScroll from './components/SmoothScroll';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const metrics = [
  { value: '12 Weeks', label: 'Avg. Time to Value' },
  { value: '<6 Weeks', label: 'Avg. First Deployment' },
  { value: '16', label: 'Enterprise Clients' },
  { value: '1,116', label: 'Hours Delivered' },
];

const testimonials = [
  {
    quote:
      "It's becoming vitally important for businesses of all types to invest in digital transformation. It's a need now, not a luxury. XRAY understands this, and they're able to help businesses like ours scale digitally without having to change what already works.",
    author: 'Karan Sharma',
    title: 'Managing Director',
    image: '/assets/testimonial-karan.svg',
  },
  {
    quote:
      "This project has been a huge win for both FMSC and our partners! Partners now have ownership of their information, reducing their confusion and the number of emails they send us with questions. Multiple departments at FMSC are now able to focus on other projects because the Portal has automated tasks that used to be manual.",
    author: 'Kelsey',
    title: 'FMSC',
    image: '/assets/testimonial-kelsey.svg',
  },
  {
    quote:
      "XRAY was extremely well-prepared and tailored the solution to our specific needs. They bridged the tech knowledge divide and provided extensive training and documentation, making the transition seamless. The user experience was a top priority, and our team has benefited greatly from the new system.",
    author: 'Michelle',
    title: 'Operations Lead',
    image: '/assets/testimonial-michelle.svg',
  },
];

const blogPosts = [
  {
    title: 'Creating Team-wide Standards with Claude Skills',
    tag: 'AI',
    image: '/assets/blog-1.svg',
    desc: 'In this post, we explore the reality of building Claude skills for your team: version control, who approves changes, and what your security team will ask.',
  },
  {
    title: 'Google Sheets To Airtable, Minus The Data Entry',
    tag: 'Tutorial',
    image: '/assets/blog-2.svg',
    desc: 'A practical guide to migrating from Google Sheets to Airtable without the manual data entry headache.',
  },
  {
    title: 'The Difference Between Using AI and Building With AI',
    tag: 'AI',
    image: '/assets/blog-3.svg',
    desc: 'There is a big difference between prompting AI tools and building AI into your workflows. Here is what matters.',
  },
];

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] flex flex-col">
        <SiteHeader />
        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 pt-12 pb-8 md:pt-16 md:pb-10 lg:pt-24 lg:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                <div className="max-w-xl">
                  <Reveal>
                    <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Do your workflows work?</h1>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-4 text-lg md:text-xl leading-relaxed text-[var(--foreground)]/80">
                      We deliver AI that works and automations that flow, all while you keep using the tools you know and love. Cut through the noise,
                      expose what&apos;s slowing you down, and fix it once and for all. That&apos;s our promise.
                    </p>
                  </Reveal>
                  <Reveal delay={0.2}>
                    <div className="mt-8 flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--foreground)]/90"
                      >
                        Talk With Us
                      </a>
                      <a
                        href="https://quiz.xray.tech/?ref=xraytech&section=hero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--foreground)]/5"
                      >
                        Free Workflow Assessment
                      </a>
                    </div>
                  </Reveal>
                </div>
                <Reveal delay={0.15}>
                  <div className="relative hidden md:block">
                    <Image
                      src="/assets/illus-apps.svg"
                      alt="Illustration of two people standing over a grid of app logos"
                      width={600}
                      height={450}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </section>

          {/* Metrics */}
          <section className="border-y border-black/5 bg-white/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-8 md:py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((m, i) => (
                <Reveal key={m.label} delay={i * 0.05}>
                  <div>
                    <div className="text-2xl md:text-4xl font-bold text-[var(--foreground)]">{m.value}</div>
                    <div className="block text-sm font-medium text-[var(--foreground)]/70 mt-1">{m.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Obsessed */}
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-2xl md:text-5xl font-bold tracking-tight mb-5">Obsessed with outcomes, not apps</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-3xl text-lg leading-relaxed text-[var(--foreground)]/80">
                  We&apos;re experts in best-in-class AI and automation tools serving small and enterprise teams alike. We adopt and stress test
                  emerging tools to keep you on the cutting edge, helping you win the next decade.
                </p>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="mt-8 md:mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {['NetSuite', 'SAP', 'Salesforce', 'QuickBooks'].map((tool) => (
                    <div key={tool} className="rounded-2xl bg-white/60 p-4 md:p-6 text-center text-sm md:text-base font-medium shadow-sm">
                      {tool}
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Client Stories */}
          <section className="py-12 md:py-16 bg-white/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
                <div className="flex-1">
                  <Reveal>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Client stories.</h2>
                    <p className="mt-2 text-[var(--foreground)]/80">Real results from businesses we&apos;ve transformed.</p>
                  </Reveal>
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex rounded-full border border-[var(--foreground)] px-5 py-2 text-sm font-medium hover:bg-[var(--foreground)]/5 self-start sm:self-auto"
                >
                  View All Case Studies
                </Link>
              </div>
              <Reveal delay={0.1}>
                <div className="relative">
                  <Swiper
                    modules={[Navigation]}
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation
                    className="overflow-visible"
                  >
                    {testimonials.map((t) => (
                      <SwiperSlide key={t.author}>
                        <div className="rounded-2xl bg-white p-8 md:p-10 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                          <div className="md:col-span-2">
                            <p className="text-xl md:text-2xl leading-relaxed font-medium">
                              &ldquo;{t.quote}&rdquo;
                            </p>
                            <div className="mt-6">
                              <div className="font-semibold">{t.author}</div>
                              <div className="text-sm text-[var(--foreground)]/70">{t.title}</div>
                            </div>
                          </div>
                          <div className="flex justify-center">
                            <Image
                              src={t.image}
                              alt={t.author}
                              width={180}
                              height={180}
                              className="h-32 w-32 md:h-40 md:w-40 rounded-full object-cover shadow-md"
                            />
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Process Pillars */}
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Process Pillars</h2>
                <p className="mb-10 max-w-3xl text-[var(--foreground)]/80">
                  At XRAY, we&apos;re driven by a core set of principles that guide everything we do:
                </p>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { title: 'People First:', desc: 'Tools should serve people, not the other way around.', img: 'pillar-1.svg' },
                  { title: 'Results Oriented:', desc: 'We measure our success by creating meaningful outcomes.', img: 'pillar-2.svg' },
                  { title: 'Simplicity by Design:', desc: 'We cut through complexity to create elegant, straightforward processes.', img: 'pillar-3.svg' },
                  { title: 'Continuous Improvement:', desc: 'As your needs evolve, so do our solutions.', img: 'pillar-4.svg' },
                ].map((item, i) => (
                  <Reveal key={item.title} delay={i * 0.08}>
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 rounded-2xl bg-white/60 p-5 md:p-6 shadow-sm">
                      <Image src={`/assets/${item.img}`} alt="" width={100} height={100} className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 mx-auto sm:mx-0" />
                      <div>
                        <h3 className="text-lg md:text-xl font-semibold">{item.title}</h3>
                        <p className="mt-2 text-[var(--foreground)]/80 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Models */}
          <section className="py-12 md:py-16 bg-white/40">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Two Models, One Mission: Your Time.</h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="max-w-3xl text-lg leading-relaxed text-[var(--foreground)]/80">
                  Whether you&apos;re an entrepreneur or an enterprise-scale team, we can help you streamline your work with transparent hourly and
                  monthly packages.
                </p>
              </Reveal>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    name: 'Hourly',
                    price: '$250',
                    sub: '/hr',
                    img: 'illus-hourly.svg',
                    desc: 'For agile teams, startups, and owner/operators who need expert, hands-on support – right away.',
                    features: [
                      'Flexible, hourly, as-needed billing with no long-term commitment.',
                      'Collaborative Building: Work side-by-side with a hand-picked expert on a live, recorded Zoom call.',
                      'Transparent Management: The client portal has a repository of all your past calls and corresponding transcripts.',
                    ],
                  },
                  {
                    name: 'Monthly',
                    price: '$15,000',
                    sub: '/mo',
                    img: 'illus-monthly.svg',
                    desc: 'For complex, cross-departmental projects, we offer full service workflow transformation at scale.',
                    features: [
                      'Dedicated Team: A dedicated executive strategist, workflow consultant, and project manager.',
                      'Proactive Partnership: Fixed, monthly billing with proactive support at every phase.',
                      'Proprietary Tooling: Access enterprise-grade workflow management and automation error monitoring.',
                    ],
                  },
                ].map((plan, i) => (
                  <Reveal key={plan.name} delay={i * 0.08}>
                    <div className="rounded-2xl bg-white p-8 shadow-sm flex flex-col">
                      <div className="flex items-center gap-3">
                        <Image src="/assets/logo-xray.svg" alt="XRAY" width={80} height={20} />
                        <span className="text-xl font-semibold">{plan.name}</span>
                      </div>
                      <Image src={`/assets/${plan.img}`} alt="" width={400} height={220} className="mt-6 h-44 w-full object-contain" />
                      <p className="mt-4 text-[var(--foreground)]/80">{plan.desc}</p>
                      <ul className="mt-6 space-y-3">
                        {plan.features.map((f) => (
                          <li key={f} className="flex gap-3 text-sm leading-relaxed text-[var(--foreground)]/90">
                            <span className="mt-0.5 inline-flex h-2 w-2 shrink-0 rounded-full bg-[var(--accent)]" />
                            <span dangerouslySetInnerHTML={{ __html: f.replace(/^.+?: /, '<strong>$&</strong>') }} />
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8 flex items-baseline gap-1">
                        <span className="text-4xl font-bold">{plan.price}</span>
                        <span className="text-[var(--foreground)]/70">{plan.sub}</span>
                      </div>
                      <Link
                        href={plan.name === 'Hourly' ? '/xray-hourly' : '/xray-monthly'}
                        className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--foreground)]/90"
                      >
                        Learn More About XRAY {plan.name}
                      </Link>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Workshops Link */}
          <section className="py-10 md:py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 text-center">
              <Reveal>
                <Link
                  href="/xray-workshops"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--foreground)] px-6 py-3 text-sm font-medium hover:bg-[var(--foreground)]/5"
                >
                  Explore Our Workshops &amp; Workforce Training
                </Link>
              </Reveal>
            </div>
          </section>

          {/* Blog */}
          <section className="py-12 md:py-16">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
                <Reveal>
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Blog</h2>
                </Reveal>
                <Link
                  href="/blog"
                  className="inline-flex rounded-full border border-[var(--foreground)] px-5 py-2 text-sm font-medium hover:bg-[var(--foreground)]/5 self-start sm:self-auto"
                >
                  View All Articles
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogPosts.map((post, i) => (
                  <Reveal key={post.title} delay={i * 0.08}>
                    <div className="group rounded-2xl bg-white p-4 shadow-sm transition hover:shadow-md">
                      <div className="aspect-video w-full overflow-hidden rounded-xl bg-[var(--foreground)]/5">
                        <Image src={post.image} alt="" width={600} height={340} className="h-full w-full object-cover transition group-hover:scale-105" />
                      </div>
                      <div className="mt-4">
                        <span className="inline-block rounded-full border border-black/10 px-3 py-1 text-xs font-medium">{post.tag}</span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold leading-snug">{post.title}</h3>
                      <p className="mt-2 text-sm text-[var(--foreground)]/70 leading-relaxed">{post.desc}</p>
                      <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--accent)]">
                        Read Article <span>→</span>
                      </a>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="relative overflow-hidden bg-white/50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <Reveal>
                <div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Ready to transform your everyday?</h2>
                  <p className="mt-4 max-w-xl text-lg text-[var(--foreground)]/80">
                    Schedule a free consultation to discover how we can transform your business processes.
                  </p>
                  <a
                    href="#"
                    className="mt-8 inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-5 py-2.5 text-sm font-medium text-white hover:bg-[var(--foreground)]/90"
                  >
                    Book 15 Minutes Free
                  </a>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <div data-parallax className="relative">
                  <Image src="/assets/cta-illustration.png" alt="" width={600} height={400} className="h-64 md:h-80 w-full object-contain" />
                </div>
              </Reveal>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </SmoothScroll>
  );
}
